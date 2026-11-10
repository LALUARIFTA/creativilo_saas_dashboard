// Outlet view: physical branches & inter-outlet stock transfers.

import { outlets, transfers } from '../data/outlet.js';

export function renderOutletView() {
  return `
  <section class="menu-view" id="view-outlet">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5 stagger-card">
      ${outlets.map(o => `
      <div class="dash-card p-5 border-t-4 ${o.border}">
        <div class="flex justify-between items-start mb-2">
          <div>
            <h3 class="text-[14.5px] font-bold text-[#2b332b]">${o.name}</h3>
            <p class="text-[11px] text-gray-400">${o.address}</p>
          </div>
          <span class="px-2.5 py-0.5 rounded-full bg-[#effbe3] text-[#6cc61c] text-[10px] font-bold">Open Now</span>
        </div>
        <div class="grid grid-cols-3 gap-2 my-3 p-2.5 rounded-xl bg-[#f7f8fa] text-center">
          <div>
            <p class="text-[10px] text-gray-400">Daily Sales</p>
            <p class="text-[13px] font-extrabold text-[#2b332b]">${o.sales}</p>
          </div>
          <div>
            <p class="text-[10px] text-gray-400">Staff On Duty</p>
            <p class="text-[13px] font-extrabold text-[#2b332b]">${o.staff}</p>
          </div>
          <div>
            <p class="text-[10px] text-gray-400">Stock Health</p>
            <p class="text-[13px] font-extrabold ${o.healthAccent}">${o.stockHealth}</p>
          </div>
        </div>
        <button data-action="toast" data-msg="${o.toast}" class="w-full py-2 rounded-xl bg-[#f1f4f1] hover:bg-[#6cc61c] hover:text-white text-[11.5px] font-bold transition">
          Sync POS Terminal
        </button>
      </div>`).join('')}
    </div>

    <!-- Inter-Outlet Inventory Transfer Queue -->
    <div class="dash-card p-5 stagger-card">
      <h3 class="text-[15px] font-bold text-[#2b332b] mb-3.5">Inter-Outlet Stock Transfer Queue</h3>
      <div class="divide-y divide-gray-100 text-[12px]">
        ${transfers.map(t => `
        <div class="py-3 flex items-center justify-between">
          <div>
            <p class="font-bold text-[#2b332b]">Transfer #${t.id}: ${t.item}</p>
            <p class="text-[11px] text-gray-400">${t.route}</p>
          </div>
          <span class="px-3 py-1 rounded-lg ${t.badge} text-[10.5px] font-bold">${t.status}</span>
        </div>`).join('')}
      </div>
    </div>
  </section>`;
}
