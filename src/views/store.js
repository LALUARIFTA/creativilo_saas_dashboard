// Store view: storefront status, payment gateways, discount campaigns.

import { storeBanner, gateways, promos } from '../data/store.js';
import { state } from '../core/state.js';
import { showToast } from '../core/toast.js';

export function renderStoreView() {
  return `
  <section class="menu-view" id="view-store">
    <!-- Live Storefront Status Banner -->
    <div class="hero-green-banner mb-5 stagger-card flex flex-wrap items-center justify-between gap-4">
      <div class="flex items-center gap-3.5">
        <div class="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center text-white text-xl">
          <i class="fa-solid fa-store"></i>
        </div>
        <div>
          <div class="flex items-center gap-2">
            <h3 class="text-white font-extrabold text-[16px]">${storeBanner.name}</h3>
            <span id="storeStatusBadge" class="px-2.5 py-0.5 rounded-full bg-white text-[#56a710] text-[10px] font-extrabold">ONLINE</span>
          </div>
          <p class="text-white/85 text-[11.5px] mt-0.5">${storeBanner.url} • ${storeBanner.meta}</p>
        </div>
      </div>
      <button data-action="toggle-maintenance" id="maintenanceBtn" class="px-4 py-2 rounded-xl bg-[#313931] text-white text-[11.5px] font-bold hover:opacity-90 transition">
        Switch to Maintenance Mode
      </button>
    </div>

    <!-- Payment Gateways Grid -->
    <div class="dash-card p-5 mb-5 stagger-card">
      <h3 class="text-[15px] font-bold text-[#2b332b] mb-3.5">Connected Payment Gateways</h3>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-3.5">
        ${gateways.map(g => `
        <div class="p-3.5 rounded-2xl border border-gray-100 flex items-center justify-between bg-[#f8faf7]">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-xl ${g.wrap} flex items-center justify-center text-lg">
              <i class="${g.icon}"></i>
            </div>
            <div>
              <p class="text-[12.5px] font-bold text-[#2b332b]">${g.name}</p>
              <p class="text-[10.5px] text-gray-400">${g.desc}</p>
            </div>
          </div>
          <input type="checkbox" checked data-action="gateway-toast" data-msg="${g.toast}" class="w-4 h-4 accent-[#6cc61c] cursor-pointer"/>
        </div>`).join('')}
      </div>
    </div>

    <!-- Active Promo Codes -->
    <div class="dash-card p-5 stagger-card">
      <div class="flex items-center justify-between mb-3.5">
        <h3 class="text-[15px] font-bold text-[#2b332b]">Active Discount Campaigns</h3>
        <button data-action="toast" data-msg="Promo code SPRING25 copied to clipboard!" class="text-[11px] font-bold text-[#6cc61c] hover:underline">Copy Best Code</button>
      </div>
      <div class="space-y-2.5 text-[12px]">
        ${promos.map(p => `
        <div class="p-3 rounded-xl ${p.row} flex items-center justify-between">
          <div>
            <span class="font-extrabold ${p.codeText} tracking-wider">${p.code}</span>
            <p class="text-[10.5px] text-gray-500">${p.desc}</p>
          </div>
          <span class="px-2.5 py-1 rounded-lg ${p.badge} font-bold text-[10.5px]">${p.status}</span>
        </div>`).join('')}
      </div>
    </div>
  </section>`;
}

export function toggleMaintenance() {
  state.storeOnline = !state.storeOnline;
  const badge = document.getElementById('storeStatusBadge');
  const btn = document.getElementById('maintenanceBtn');

  if (state.storeOnline) {
    badge.textContent = 'ONLINE';
    badge.className = 'px-2.5 py-0.5 rounded-full bg-white text-[#56a710] text-[10px] font-extrabold';
    btn.textContent = 'Switch to Maintenance Mode';
    showToast('Storefront is now LIVE and accepting orders!');
  } else {
    badge.textContent = 'MAINTENANCE';
    badge.className = 'px-2.5 py-0.5 rounded-full bg-amber-300 text-amber-950 text-[10px] font-extrabold';
    btn.textContent = 'Bring Store Back Online';
    showToast('Storefront switched to scheduled Maintenance Mode.');
  }
}
