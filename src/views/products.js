// Products view: inventory catalog + add-product entry point.

import { productsData } from '../data/products.js';

export function renderProductsView() {
  return `
  <section class="menu-view" id="view-products">
    <div class="dash-card p-4 mb-5 flex flex-wrap items-center justify-between gap-3 stagger-card">
      <div class="flex items-center gap-2">
        <span class="text-[13px] font-bold text-[#2b332b]">Product Inventory (<span id="productCountBadge">${productsData.length}</span> items)</span>
      </div>
      <button data-action="open-modal" data-modal="add-product" class="px-4 py-2 rounded-xl bg-[#6cc61c] hover:bg-[#5bb012] text-white text-[11.5px] font-bold flex items-center gap-2 transition shadow-sm">
        <i class="fa-solid fa-plus"></i> Add New Product
      </button>
    </div>

    <div class="dash-card p-5 stagger-card">
      <div class="grid grid-cols-12 text-[11px] font-semibold text-gray-400 pb-2.5 border-b border-gray-100">
        <div class="col-span-5">Product Name</div>
        <div class="col-span-2">Category</div>
        <div class="col-span-2">Price</div>
        <div class="col-span-3 text-right">Stock Status</div>
      </div>
      <div id="productsTableBody" class="divide-y divide-gray-50 text-[12px]">
        <!-- Populated dynamically via JS -->
      </div>
    </div>
  </section>`;
}

export function renderProductsTable() {
  const tbody = document.getElementById('productsTableBody');
  const badge = document.getElementById('productCountBadge');
  if (!tbody) return;
  if (badge) badge.textContent = productsData.length;

  tbody.innerHTML = productsData.map(item => `
    <div class="grid grid-cols-12 items-center py-3 hover:bg-gray-50/80 rounded-xl px-1 transition">
      <div class="col-span-5 flex items-center gap-2.5 font-bold text-[#2b332b]">
        <span class="w-7 h-7 rounded-lg bg-[#effbe3] text-[#6cc61c] flex items-center justify-center text-xs">
          <i class="fa-solid fa-cube"></i>
        </span>
        ${item.name}
      </div>
      <div class="col-span-2 text-gray-400 text-[11.5px]">${item.category}</div>
      <div class="col-span-2 font-extrabold text-[#2b332b]">${item.price}</div>
      <div class="col-span-3 text-right">
        <span class="px-2.5 py-1 rounded-lg bg-[#effbe3] text-[#6cc61c] text-[10.5px] font-bold">${item.stock}</span>
      </div>
    </div>
  `).join('');
}
