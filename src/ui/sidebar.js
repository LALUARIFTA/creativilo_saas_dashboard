// Sidebar: brand + grouped navigation + footer.

import { app } from '../config/app.js';
import { MENU_META, MENU_GROUPS } from '../data/menu.js';

function navItem(item) {
  const label = item.label || MENU_META[item.key].title;
  return `
    <button class="nav-btn${item.key === 'dashboard' ? ' active' : ''}" data-action="switch-menu" data-menu="${item.key}">
      <span class="nav-icon"><i class="${item.icon}"></i></span>
      <span class="sidebar-text flex items-center gap-1.5">
        ${label}
        ${item.unread ? '<span id="chatUnreadDot" class="w-1.5 h-1.5 rounded-full bg-red-500 pulse-dot inline-block -mt-1.5"></span>' : ''}
      </span>
    </button>`;
}

export function renderSidebar() {
  return `
  <aside class="sidebar">
    <div>
      <div class="px-7 mb-7 flex items-center gap-2.5 cursor-pointer group" data-action="switch-menu" data-menu="dashboard">
        <div class="w-7 h-7 rounded-[7px] bg-brand-lime flex items-center justify-center shadow-sm group-hover:rotate-6 transition-transform">
          <div class="w-3.5 h-3.5 border-[2.5px] border-white rounded-[3px] relative">
            <div class="w-1.5 h-1.5 bg-brand-lime absolute -right-1 top-0.5"></div>
          </div>
        </div>
        <span class="sidebar-text font-extrabold text-[16.5px] tracking-tight text-[#2b332b]">${app.brand}</span>
      </div>

      <div class="relative" id="sidebarNavContainer">
        <div id="navGlider" class="nav-glider" style="transform: translateY(28px);"></div>
        ${MENU_GROUPS.map(group => `
        <div class="sidebar-section-label px-7 ${group === MENU_GROUPS[0] ? 'mb-1.5' : 'mt-6 mb-1.5'} text-[12px] font-bold text-[#3a423b] tracking-tight">${group.label}</div>
        <nav class="flex flex-col">${group.items.map(navItem).join('')}</nav>`).join('')}
      </div>
    </div>

    <div class="sidebar-footer px-7 text-[11px] font-medium text-[#b0b7b0]">${app.footer}</div>
  </aside>`;
}
