// components.js — mobile nav toggle
(() => {
  const btn = document.querySelector('[data-menu-btn]');
  const panel = document.querySelector('[data-mobile-nav]');
  if (!btn || !panel) return;

  btn.addEventListener('click', () => {
    const open = panel.style.display === 'block';
    panel.style.display = open ? 'none' : 'block';
    btn.setAttribute('aria-expanded', String(!open));
  });
})();
