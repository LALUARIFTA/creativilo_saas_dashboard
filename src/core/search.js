// Instant global search dropdown.

import { SEARCH_INDEX } from '../data/menu.js';

export function handleGlobalSearch(query) {
  const dropdown = document.getElementById('searchDropdown');
  const listEl = document.getElementById('searchResultsList');
  const q = query.trim().toLowerCase();

  if (!q) {
    dropdown.classList.add('hidden');
    return;
  }

  const items = SEARCH_INDEX.filter(i => i.label.toLowerCase().includes(q));

  listEl.innerHTML = items.length === 0
    ? `<div class="p-2 text-[11px] text-gray-400">No matching menus or items found.</div>`
    : items.map(i => `
      <button data-action="switch-menu" data-menu="${i.menu}" class="w-full text-left p-2 hover:bg-[#effbe3] rounded-xl text-[11.5px] font-semibold text-[#2b332b] flex items-center justify-between transition">
        <span>${i.label}</span>
        <i class="fa-solid fa-arrow-right text-[10px] text-[#6cc61c]"></i>
      </button>`).join('');

  dropdown.classList.remove('hidden');
}
