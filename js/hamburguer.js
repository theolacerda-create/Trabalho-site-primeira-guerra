document.addEventListener('DOMContentLoaded', function() {
  const toggle = document.getElementById('menu-toggle');
  const menu = document.getElementById('menu');
  if (toggle && menu) {
    toggle.addEventListener('click', function() {
      menu.classList.toggle('active');
    });
    document.addEventListener('click', function(e) {
      if (!menu.contains(e.target) && e.target !== toggle) {
        menu.classList.remove('active');
      }
    });
  }
});