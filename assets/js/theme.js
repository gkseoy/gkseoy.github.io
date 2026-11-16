const themeRoot = document.documentElement;
const systemTheme = window.matchMedia("(prefers-color-scheme: dark)");
let selectedTheme;

try {
  selectedTheme = localStorage.getItem("blog-theme");
} catch {
  // The system preference is still available when storage is blocked.
}

function applyTheme() {
  const dark = selectedTheme ? selectedTheme === "dark" : systemTheme.matches;
  themeRoot.dataset.theme = dark ? "dark" : "light";
  return dark;
}

applyTheme();

document.addEventListener("DOMContentLoaded", () => {
  const button = document.querySelector(".theme-toggle");
  const updateButton = () => button.setAttribute("aria-pressed", String(applyTheme()));

  button.addEventListener("click", () => {
    selectedTheme = themeRoot.dataset.theme === "dark" ? "light" : "dark";
    updateButton();
    try {
      localStorage.setItem("blog-theme", selectedTheme);
    } catch {
      // The toggle remains usable for the current page.
    }
  });

  systemTheme.addEventListener("change", updateButton);
  updateButton();
  button.hidden = false;
});
