(() => {
  const dialog = document.querySelector("[data-major-study-dialog]");
  const links = Array.from(document.querySelectorAll("[data-major-study-link]"));
  if (!dialog || links.length === 0) return;

  const closeButton = dialog.querySelector("[data-major-study-dialog-close]");
  const title = dialog.querySelector("[data-major-study-dialog-title]");
  const form = dialog.querySelector("[data-major-study-dialog-form]");
  const passwordInput = dialog.querySelector("[data-major-study-dialog-password]");
  const submitButton = dialog.querySelector("[data-major-study-dialog-submit]");
  const status = dialog.querySelector("[data-major-study-dialog-status]");

  if (!closeButton || !title || !form || !passwordInput || !submitButton || !status) return;

  let activeLink = null;

  const resetDialog = () => {
    activeLink = null;
    passwordInput.value = "";
    status.textContent = "";
    submitButton.disabled = false;
    document.body.classList.remove("major-study-dialog-open");
  };

  const openDialog = (link) => {
    activeLink = link;
    title.textContent = link.dataset.majorStudyTitle || "Unlock study note";
    passwordInput.value = "";
    status.textContent = "";
    document.body.classList.add("major-study-dialog-open");
    dialog.showModal();
    window.requestAnimationFrame(() => passwordInput.focus());
  };

  links.forEach((link) => {
    link.addEventListener("click", (event) => {
      if (event.defaultPrevented || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      event.preventDefault();
      openDialog(link);
    });
  });

  closeButton.addEventListener("click", () => dialog.close());

  dialog.addEventListener("click", (event) => {
    if (event.target === dialog) dialog.close();
  });

  dialog.addEventListener("close", resetDialog);

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    if (!activeLink || !window.MajorStudyCrypto) {
      status.textContent = "This browser does not support encrypted notes.";
      return;
    }

    status.textContent = "Checking password…";
    submitButton.disabled = true;

    const requestedLink = activeLink;
    let plaintext;
    try {
      const payload = {
        salt: requestedLink.dataset.majorStudySalt,
        iv: requestedLink.dataset.majorStudyIv,
        ciphertext: requestedLink.dataset.majorStudyCiphertext,
      };
      plaintext = await window.MajorStudyCrypto.decrypt(passwordInput.value, payload);
    } catch (_error) {
      status.textContent = "Incorrect password.";
      passwordInput.select();
      submitButton.disabled = false;
      return;
    }

    if (!dialog.open || activeLink !== requestedLink) return;

    try {
      const target = new URL(requestedLink.href, window.location.href);
      const storageKey = `major-study-content:${target.pathname}`;
      window.sessionStorage.setItem(storageKey, plaintext);
      window.location.assign(target.href);
    } catch (_error) {
      status.textContent = "Unable to open this note in the current browser session.";
      submitButton.disabled = false;
    }
  });
})();
