// Menu switching engine + sidebar glider + scroll progress.

import { MENU_META } from '../data/menu.js';
import { state } from './state.js';
import { renderDashboardView, animateDashboardCounters } from '../views/dashboard.js';
import { renderProjectsView } from '../views/projects.js';
import { renderAnalyticsView } from '../views/analytics.js';
import { renderReportsView } from '../views/reports.js';
import { renderStoreView } from '../views/store.js';
import { renderOutletView } from '../views/outlet.js';
import { renderProductsView } from '../views/products.js';
import { renderChatView } from '../views/chat.js';
import { renderLogoutView } from '../views/logout.js';

// One render function per menu. Register new views here.
const VIEWS = {
  dashboard: renderDashboardView,
  projects: renderProjectsView,
  analytics: renderAnalyticsView,
  reports: renderReportsView,
  store: renderStoreView,
  outlet: renderOutletView,
  products: renderProductsView,
  chat: renderChatView,
  logout: renderLogoutView,
};

// Render all 9 views into the fixed stage (CSS controls which one is visible),
// then bind scroll listeners for the progress bar.
export function mountViews() {
  const stage = document.getElementById('menuStage');
  stage.innerHTML = Object.values(VIEWS).map(render => render()).join('');

  stage.querySelectorAll('.menu-view').forEach(view => {
    view.addEventListener('scroll', () => updateScrollProgress(view));
  });

  const activeBtn = document.querySelector('.nav-btn.active');
  if (activeBtn) updateSidebarGlider(activeBtn);
}

export function switchMenu(menuKey) {
  if (!MENU_META[menuKey]) return;

  const allBtns = document.querySelectorAll('.nav-btn');
  let targetBtn = null;
  allBtns.forEach(btn => {
    if (btn.dataset.menu === menuKey) {
      btn.classList.add('active');
      targetBtn = btn;
    } else {
      btn.classList.remove('active');
    }
  });

  if (targetBtn) updateSidebarGlider(targetBtn);

  // Clear unread dot when opening Chat.
  if (menuKey === 'chat') {
    const dot = document.getElementById('chatUnreadDot');
    if (dot) dot.style.display = 'none';
  }

  // Animate header title & subtitle.
  const titleEl = document.getElementById('headerTitle');
  const subEl = document.getElementById('headerSubtitle');
  titleEl.style.opacity = '0';
  subEl.style.opacity = '0';
  setTimeout(() => {
    titleEl.textContent = MENU_META[menuKey].title;
    subEl.textContent = MENU_META[menuKey].subtitle;
    titleEl.style.opacity = '1';
    subEl.style.opacity = '1';
  }, 120);

  // Animate outgoing & incoming views inside the fixed stage.
  if (state.currentMenu !== menuKey) {
    const oldView = document.getElementById(`view-${state.currentMenu}`);
    const newView = document.getElementById(`view-${menuKey}`);

    if (oldView) {
      oldView.classList.remove('active-view');
      oldView.classList.add('exit-view');
      setTimeout(() => oldView.classList.remove('exit-view'), 380);
    }

    if (newView) {
      newView.scrollTop = 0;
      updateScrollProgress(newView);
      newView.classList.remove('exit-view');
      newView.classList.add('active-view');
    }

    state.currentMenu = menuKey;
  }

  // Re-trigger number count-up when returning to Dashboard.
  if (menuKey === 'dashboard') animateDashboardCounters();
}

export function updateSidebarGlider(activeBtn) {
  const container = document.getElementById('sidebarNavContainer');
  const glider = document.getElementById('navGlider');
  if (!container || !glider || !activeBtn) return;

  const containerRect = container.getBoundingClientRect();
  const btnRect = activeBtn.getBoundingClientRect();
  const offsetY = btnRect.top - containerRect.top;
  glider.style.transform = `translateY(${offsetY}px)`;
}

export function updateScrollProgress(scrollEl) {
  const bar = document.getElementById('scrollProgressBar');
  if (!bar || !scrollEl) return;
  const maxScroll = scrollEl.scrollHeight - scrollEl.clientHeight;
  if (maxScroll <= 4) {
    bar.style.width = '0%';
  } else {
    const pct = Math.min(100, Math.max(0, (scrollEl.scrollTop / maxScroll) * 100));
    bar.style.width = `${pct}%`;
  }
}
