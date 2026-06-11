(function () {
  var DARK = 'dark';
  var LIGHT = 'light';

  function applyTheme(t) {
    document.documentElement.classList.remove(DARK, LIGHT);
    document.documentElement.classList.add(t);
    document.body.classList.remove(DARK, LIGHT);
    document.body.classList.add(t);
    localStorage.setItem('theme', t);
    var btn = document.getElementById('theme-toggle');
    if (btn) btn.setAttribute('aria-label', t === DARK ? 'Switch to light mode' : 'Switch to dark mode');
  }

  window.toggleTheme = function () {
    var current = localStorage.getItem('theme') || DARK;
    applyTheme(current === DARK ? LIGHT : DARK);
  };

  document.addEventListener('DOMContentLoaded', function () {
    applyTheme(localStorage.getItem('theme') || DARK);
  });
})();
