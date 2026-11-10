// Composition root: renders the shell + views, wires all events via delegation.

import { renderShell } from './ui/shell.js';
import { mountViews, switchMenu } from './core/router.js';
import { showToast } from './core/toast.js';
import { handleGlobalSearch } from './core/search.js';
import { renderTaskSegments, setTaskCount } from './ui/rightPanel.js';
import {
  openModal, closeModals,
  saveProfileChanges, confirmWithdrawal, saveNewProduct,
} from './ui/modals.js';

import {
  animateDashboardCounters, toggleRevenueSeries,
  refreshGauge, toggleAllTransactions, scrubDay,
} from './views/dashboard.js';
import { renderProjectsGrid, filterProjects, addProject } from './views/projects.js';
import { renderReportsList, generateReport } from './views/reports.js';
import { renderProductsTable } from './views/products.js';
import { toggleMaintenance } from './views/store.js';
import { renderChat, selectThread, sendChatMessage } from './views/chat.js';
import { confirmLogout } from './views/logout.js';

// 1. Render static shell, then mount the 9 views into the stage.
document.getElementById('app').innerHTML = renderShell();
mountViews();

// 2. Render dynamic lists inside their views.
renderTaskSegments();
renderProjectsGrid();
renderReportsList();
renderProductsTable();
renderChat();
animateDashboardCounters();

// 3. Single delegated click handler (data-action attributes).
const clickActions = {
  'switch-menu': (el) => {
    document.getElementById('searchDropdown')?.classList.add('hidden');
    switchMenu(el.dataset.menu);
  },
  'toast': (el) => showToast(el.dataset.msg),
  'toggle-series': (el) => toggleRevenueSeries(el.dataset.series),
  'refresh-gauge': () => refreshGauge(),
  'view-all-tx': () => toggleAllTransactions(),
  'filter-projects': (el) => filterProjects(el.dataset.filter, el),
  'add-project': () => addProject(),
  'open-modal': (el) => openModal(el.dataset.modal),
  'close-modals': () => closeModals(),
  'toggle-maintenance': () => toggleMaintenance(),
  'gateway-toast': (el) => showToast(el.dataset.msg),
  'resolve-ticket': () => showToast('Marked conversation as resolved!'),
  'set-task': (el) => setTaskCount(+el.dataset.count),
  'toggle-notif': () => document.getElementById('notifPopover').classList.toggle('hidden'),
  'generate-report': () => generateReport(),
  'select-thread': (el) => selectThread(+el.dataset.index),
  'confirm-logout': () => confirmLogout(),
};

document.addEventListener('click', (e) => {
  const el = e.target.closest('[data-action]');
  if (!el) return;
  clickActions[el.dataset.action]?.(el, e);
});

// Revenue chart scrubbing on hover (mouseenter does not bubble, mouseover does).
document.addEventListener('mouseover', (e) => {
  const el = e.target.closest('[data-action="scrub-day"]');
  if (el) scrubDay(+el.dataset.day);
});

// 4. Delegated form submit (data-form attributes).
const submitActions = {
  'edit-profile': saveProfileChanges,
  'withdraw': confirmWithdrawal,
  'add-product': saveNewProduct,
  'chat': sendChatMessage,
};
document.addEventListener('submit', (e) => {
  const form = e.target.closest('form[data-form]');
  if (!form) return;
  e.preventDefault();
  submitActions[form.dataset.form]?.(e);
});

// 5. Global search input.
document.addEventListener('input', (e) => {
  if (e.target.id === 'globalSearchInput') handleGlobalSearch(e.target.value);
});
