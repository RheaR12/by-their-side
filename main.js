// Quick Exit: sends the user to a neutral site in the same tab
function quickExit() {
  window.location.href = "https://www.google.com";
}

// mobile nav toggle
function toggleNav() {
  const nav = document.getElementById("navLinks");
  nav.classList.toggle("open");
}

// dropdowns for mobile (desktop uses :hover)
function toggleDropdown(id) {
  const dropdown = document.getElementById(id);
  dropdown.classList.toggle("open");
}

// shared-device banner close
function closeSharedBanner() {
  const banner = document.getElementById("sharedBanner");
  if (banner) banner.style.display = "none";
}

// set current year in footer
document.addEventListener("DOMContentLoaded", () => {
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
});
