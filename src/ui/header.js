// Center column header: title, subtitle, search + scroll progress bar.

import { app } from '../config/app.js';
import { MENU_META } from '../data/menu.js';

export function renderHeader() {
  return `
  <header class="px-[26px] pt-[24px] pb-[14px] flex flex-wrap items-center justify-between gap-4 shrink-0 z-10 bg-[#f7f8fa]/90 backdrop-blur-sm">
    <div>
      <div class="flex items-center gap-2.5">
        <h1 id="headerTitle" class="text-[22px] font-extrabold text-[#2b332b] tracking-tight leading-tight transition-all duration-200">
          ${MENU_META.dashboard.title}
        </h1>
        <span id="scrollBadge" class="hidden sm:inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-[#eaf8d9] text-[#5cb312]">
          <i class="fa-solid fa-arrows-up-down text-[9px]"></i> Scrollable View
        </span>
      </div>
      <p id="headerSubtitle" class="text-[11.5px] font-medium text-[#a3aba3] mt-0.5 transition-all duration-200">
        ${MENU_META.dashboard.subtitle}
      </p>
    </div>

    <div class="relative w-56 sm:w-64">
      <input
        id="globalSearchInput"
        type="text"
        placeholder="${app.searchPlaceholder}"
        class="w-full h-[38px] pl-4 pr-9 rounded-xl bg-white text-[12px] font-medium text-[#3b423b] placeholder-[#b6bdb6] shadow-[0_4px_16px_rgba(0,0,0,0.03)] focus:outline-none focus:ring-2 focus:ring-brand-lime/40 transition"
      />
      <i class="fa-solid fa-magnifying-glass absolute right-3.5 top-1/2 -translate-y-1/2 text-[#a3aba3] text-[12px]"></i>

      <div id="searchDropdown" class="hidden absolute right-0 mt-2 w-72 bg-white rounded-2xl shadow-xl border border-gray-100 p-2.5 z-50">
        <div class="text-[10px] font-bold uppercase tracking-wider text-gray-400 px-2 py-1">Quick Jump & Search</div>
        <div id="searchResultsList" class="max-h-52 overflow-y-auto custom-scroll divide-y divide-gray-50"></div>
      </div>
    </div>
  </header>
  <div class="w-full h-[2.5px] bg-transparent shrink-0 px-[26px]">
    <div id="scrollProgressBar" class="scroll-progress-bar"></div>
  </div>`;
}
