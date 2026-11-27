(() => {
  const root = document.querySelector("[data-major-study]");
  if (!root) return;

  const form = root.querySelector("[data-major-study-form]");
  const passwordInput = root.querySelector("[data-major-study-password]");
  const submitButton = root.querySelector("[data-major-study-submit]");
  const status = root.querySelector("[data-major-study-status]");
  const gate = root.querySelector("[data-major-study-gate]");
  const content = root.querySelector("[data-major-study-content]");
  const payloadNode = root.querySelector("[data-major-study-payload]");

  if (!form || !passwordInput || !submitButton || !status || !gate || !content || !payloadNode) return;

  const fromBase64 = (value) => {
    const binary = window.atob(value);
    return Uint8Array.from(binary, (character) => character.charCodeAt(0));
  };

  const deriveKey = async (password, salt) => {
    const encoder = new TextEncoder();
    const keyMaterial = await window.crypto.subtle.importKey(
      "raw",
      encoder.encode(password),
      "PBKDF2",
      false,
      ["deriveKey"],
    );

    return window.crypto.subtle.deriveKey(
      {
        name: "PBKDF2",
        salt,
        iterations: 250000,
        hash: "SHA-256",
      },
      keyMaterial,
      { name: "AES-GCM", length: 256 },
      false,
      ["decrypt"],
    );
  };

  let payload;
  try {
    payload = JSON.parse(payloadNode.textContent);
  } catch (_error) {
    status.textContent = "This note is not configured correctly.";
    submitButton.disabled = true;
    return;
  }

  if (!window.crypto?.subtle) {
    status.textContent = "This browser does not support encrypted notes.";
    submitButton.disabled = true;
    return;
  }

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    status.textContent = "Checking password…";
    submitButton.disabled = true;

    try {
      const salt = fromBase64(payload.salt);
      const iv = fromBase64(payload.iv);
      const ciphertext = fromBase64(payload.ciphertext);
      const key = await deriveKey(passwordInput.value, salt);
      const plaintext = await window.crypto.subtle.decrypt(
        { name: "AES-GCM", iv },
        key,
        ciphertext,
      );

      content.innerHTML = new TextDecoder().decode(plaintext);
      gate.hidden = true;
      content.hidden = false;
      content.focus();
      passwordInput.value = "";
    } catch (_error) {
      status.textContent = "Incorrect password.";
      passwordInput.select();
    } finally {
      submitButton.disabled = false;
    }
  });
})();
