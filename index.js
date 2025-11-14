// main.js — keep it minimal and non-hardcoded
document.addEventListener('DOMContentLoaded', () => {

  // Simple accessible keyboard focus helper: add outline on keyboard nav only
  function handleFirstTab(e) {
    if (e.key === 'Tab') {
      document.body.classList.add('show-focus-outline');
      window.removeEventListener('keydown', handleFirstTab);
    }
  }
  window.addEventListener('keydown', handleFirstTab);
});
