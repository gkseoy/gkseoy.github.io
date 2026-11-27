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

  let payload;
  try {
    payload = JSON.parse(payloadNode.textContent);
  } catch (_error) {
    status.textContent = "This note is not configured correctly.";
    submitButton.disabled = true;
    return;
  }

  if (!window.MajorStudyCrypto) {
    status.textContent = "This browser does not support encrypted notes.";
    submitButton.disabled = true;
    return;
  }

  const storageKey = `major-study-content:${window.location.pathname}`;
  let transferredContent = null;
  try {
    transferredContent = window.sessionStorage.getItem(storageKey);
    window.sessionStorage.removeItem(storageKey);
  } catch (_error) {
    transferredContent = null;
  }

  if (transferredContent !== null) {
    content.innerHTML = transferredContent;
    gate.hidden = true;
    content.hidden = false;
    return;
  }

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    status.textContent = "Checking password…";
    submitButton.disabled = true;

    try {
      content.innerHTML = await window.MajorStudyCrypto.decrypt(passwordInput.value, payload);
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
