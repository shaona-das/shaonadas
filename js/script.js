document.addEventListener('DOMContentLoaded', () => {

  /* ---------- Build & inject the shared sidebar ---------- */
  const NAV_ITEMS = [
    { href: 'index.html',      key: 'home',       num: '01', label: 'Home' },
    { href: 'experience.html', key: 'experience',  num: '02', label: 'Experience' },
    { href: 'projects.html',   key: 'projects',    num: '03', label: 'Projects' },
    { href: 'press.html',      key: 'press',       num: '04', label: 'Press &amp; Photos' },
  ];

  const currentPage = document.body.dataset.page || 'home';

  const navHTML = NAV_ITEMS.map(item => `
    <a href="${item.href}" class="nav-item${item.key === currentPage ? ' active' : ''}" data-section="${item.key}">
      <span class="nav-bullet" aria-hidden="true"></span>
      <span class="nav-text">
        <span class="nav-num">${item.num}</span>
        <span class="nav-label">${item.label}</span>
      </span>
    </a>
  `).join('');

  const sidebarHTML = `
    <button class="mobile-toggle" id="mobileToggle" aria-label="Open menu" aria-expanded="false" aria-controls="sidebar">
      <span></span><span></span><span></span>
    </button>
    <aside class="sidebar" id="sidebar">
      <div class="sidebar-top">
        <a href="index.html" class="logo">SD<span class="dot">.</span></a>
        <nav class="side-nav" aria-label="Section navigation">
          ${navHTML}
        </nav>
      </div>
      <div class="sidebar-footer">
        <p>UC BERKELEY</p>
      </div>
    </aside>
  `;

  const sidebarRoot = document.getElementById('sidebar-root');
  if (sidebarRoot) sidebarRoot.outerHTML = sidebarHTML;

  /* ---------- Footer year ---------- */
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---------- Mobile nav toggle ---------- */
  const toggle = document.getElementById('mobileToggle');
  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('sidebarOverlay');

  function closeMenu() {
    sidebar.classList.remove('open');
    overlay.classList.remove('visible');
    toggle.setAttribute('aria-expanded', 'false');
  }
  function openMenu() {
    sidebar.classList.add('open');
    overlay.classList.add('visible');
    toggle.setAttribute('aria-expanded', 'true');
  }

  toggle?.addEventListener('click', () => {
    const isOpen = sidebar.classList.contains('open');
    isOpen ? closeMenu() : openMenu();
  });
  overlay?.addEventListener('click', closeMenu);
  document.querySelectorAll('.nav-item').forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  /* ---------- Experience accordion ---------- */
  document.querySelectorAll('.exp-row').forEach(row => {
    row.addEventListener('click', () => {
      const isOpen = row.getAttribute('aria-expanded') === 'true';
      row.setAttribute('aria-expanded', String(!isOpen));
    });
  });

  /* ---------- Press & Photos filter ---------- */
  const filterPills = document.querySelectorAll('.filter-pill');
  const pressItems = document.querySelectorAll('.press-item');

  filterPills.forEach(pill => {
    pill.addEventListener('click', () => {
      filterPills.forEach(p => {
        p.classList.remove('active');
        p.setAttribute('aria-selected', 'false');
      });
      pill.classList.add('active');
      pill.setAttribute('aria-selected', 'true');

      const filter = pill.dataset.filter;
      pressItems.forEach(item => {
        const match = filter === 'all' || item.dataset.category === filter;
        item.hidden = !match;
      });
    });
  });

});
