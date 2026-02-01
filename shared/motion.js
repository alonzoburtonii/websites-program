// motion.js — basic reduced-motion support hook (extend later)
(() => {
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReduced) document.documentElement.classList.add('reduced-motion');
})();
