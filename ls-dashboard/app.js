const app = document.getElementById('app');
const toggle = document.getElementById('sidebarToggle');

function setSidebarCollapsed(collapsed) {
  app.classList.toggle('sidebar-collapsed', collapsed);
  toggle.setAttribute('aria-expanded', String(!collapsed));
}

toggle.addEventListener('click', () => {
  setSidebarCollapsed(!app.classList.contains('sidebar-collapsed'));
});

setSidebarCollapsed(false);
