// App shell: bezel + sidebar + center column + right panel + modals + toast.

import { renderSidebar } from './sidebar.js';
import { renderHeader } from './header.js';
import { renderRightPanel } from './rightPanel.js';
import { renderModals } from './modals.js';

export function renderShell() {
  return `
  <div class="app-bezel">
    <div class="app-inner">
      ${renderSidebar()}
      <main class="center-column">
        ${renderHeader()}
        <div class="menu-stage" id="menuStage"></div>
      </main>
      ${renderRightPanel()}
    </div>
  </div>
  ${renderModals()}

  <!-- Floating Toast Feedback Box -->
  <div id="toastBox" class="fixed bottom-6 left-1/2 -translate-x-1/2 px-5 py-3 rounded-2xl bg-[#313931] text-white text-[12px] font-semibold shadow-2xl flex items-center gap-2.5 opacity-0 pointer-events-none translate-y-4 transition-all duration-300 z-50">
    <span class="w-5 h-5 rounded-full bg-[#6cc61c] text-white flex items-center justify-center text-[10px]">
      <i class="fa-solid fa-check"></i>
    </span>
    <span id="toastText">Action completed!</span>
  </div>`;
}
