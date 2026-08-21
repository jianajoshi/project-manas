// Project Manas — shared behavior across pages

document.addEventListener('DOMContentLoaded', () => {
  // Mobile nav toggle
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.site-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      nav.classList.toggle('open');
      const isOpen = nav.classList.contains('open');
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
    // close menu when a link is tapped
    nav.querySelectorAll('.nav-links a').forEach(link => {
      link.addEventListener('click', () => nav.classList.remove('open'));
    });
  }

  // Generic filter pills (used on Stories / Podcast pages)
  document.querySelectorAll('.filters').forEach(group => {
    group.addEventListener('click', (e) => {
      const pill = e.target.closest('.filter-pill');
      if (!pill) return;
      group.querySelectorAll('.filter-pill').forEach(p => p.classList.remove('is-active'));
      pill.classList.add('is-active');

      const filter = pill.dataset.filter;
      const grid = document.querySelector(group.dataset.targets);
      if (!grid) return;
      grid.querySelectorAll('[data-category]').forEach(card => {
        const show = filter === 'all' || card.dataset.category === filter;
        card.style.display = show ? '' : 'none';
      });
    });
  });

  // Donate amount toggle (visual only — placeholder for real payment logic)
  document.querySelectorAll('.amount-toggle').forEach(group => {
    group.addEventListener('click', (e) => {
      const btn = e.target.closest('button');
      if (!btn) return;
      group.querySelectorAll('button').forEach(b => b.classList.remove('is-active'));
      btn.classList.add('is-active');
      const customInput = document.querySelector('#custom-amount');
      if (customInput && btn.dataset.amount !== 'custom') {
        customInput.value = btn.dataset.amount;
      }
    });
  });
});
