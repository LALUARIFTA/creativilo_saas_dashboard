// Modals: Edit Profile, Withdraw, Add Product.

import { app } from '../config/app.js';
import { state } from '../core/state.js';
import { showToast } from '../core/toast.js';
import { productsData } from '../data/products.js';
import { renderProductsTable } from '../views/products.js';
import { renderTaskSegments } from './rightPanel.js';

const MODAL_IDS = {
  'edit-profile': 'editProfileModal',
  'withdraw': 'withdrawModal',
  'add-product': 'addProductModal',
};

export function renderModals() {
  return `
  <div id="modalBackdrop" class="hidden fixed inset-0 bg-black/50 backdrop-blur-xs z-50 flex items-center justify-center p-4">

    <!-- 1. Edit Profile Modal -->
    <div id="editProfileModal" class="hidden bg-white rounded-3xl max-w-sm w-full p-6 shadow-2xl">
      <div class="flex items-center justify-between mb-4">
        <h3 class="text-[16px] font-extrabold text-[#2b332b]">Edit Profile & Tasks</h3>
        <button data-action="close-modals" class="text-gray-400 hover:text-gray-600"><i class="fa-solid fa-xmark"></i></button>
      </div>
      <form data-form="edit-profile" class="space-y-3.5 text-[12px]">
        <div>
          <label class="font-bold text-gray-600 block mb-1">Display Name</label>
          <input id="editNameInput" type="text" value="${app.profile.name}" required class="w-full h-10 px-3.5 rounded-xl bg-gray-50 border border-gray-200 font-semibold focus:outline-none focus:border-brand-lime"/>
        </div>
        <div>
          <label class="font-bold text-gray-600 block mb-1">Completed Daily Tasks (0 - 8)</label>
          <input id="editTasksInput" type="number" min="0" max="8" value="${state.completedTasks}" required class="w-full h-10 px-3.5 rounded-xl bg-gray-50 border border-gray-200 font-semibold focus:outline-none focus:border-brand-lime"/>
        </div>
        <div class="flex justify-end gap-2 pt-2">
          <button type="button" data-action="close-modals" class="px-4 py-2 rounded-xl bg-gray-100 font-bold text-gray-600">Cancel</button>
          <button type="submit" class="px-5 py-2 rounded-xl bg-[#6cc61c] text-white font-bold">Save Changes</button>
        </div>
      </form>
    </div>

    <!-- 2. Withdraw Earning Modal -->
    <div id="withdrawModal" class="hidden bg-white rounded-3xl max-w-sm w-full p-6 shadow-2xl">
      <div class="flex items-center justify-between mb-4">
        <h3 class="text-[16px] font-extrabold text-[#2b332b]">Withdraw Earning</h3>
        <button data-action="close-modals" class="text-gray-400 hover:text-gray-600"><i class="fa-solid fa-xmark"></i></button>
      </div>
      <form data-form="withdraw" class="space-y-3.5 text-[12px]">
        <div class="p-3.5 rounded-2xl bg-[#effbe3] text-[#56a710] flex items-center justify-between">
          <span class="font-semibold">Available Balance:</span>
          <span class="text-[15px] font-extrabold" id="modalAvailBalance">$${state.earningBalance.toLocaleString()}</span>
        </div>
        <div>
          <label class="font-bold text-gray-600 block mb-1">Withdrawal Amount ($)</label>
          <input id="withdrawAmountInput" type="number" min="100" max="${state.earningBalance}" value="15000" required class="w-full h-10 px-3.5 rounded-xl bg-gray-50 border border-gray-200 font-bold focus:outline-none focus:border-brand-lime"/>
        </div>
        <div>
          <label class="font-bold text-gray-600 block mb-1">Destination Account</label>
          <select class="w-full h-10 px-3.5 rounded-xl bg-gray-50 border border-gray-200 font-semibold">
            ${app.accounts.map(a => `<option>${a}</option>`).join('')}
          </select>
        </div>
        <div class="flex justify-end gap-2 pt-2">
          <button type="button" data-action="close-modals" class="px-4 py-2 rounded-xl bg-gray-100 font-bold text-gray-600">Cancel</button>
          <button type="submit" class="px-5 py-2 rounded-xl bg-[#6cc61c] text-white font-bold">Transfer Funds</button>
        </div>
      </form>
    </div>

    <!-- 3. Add Product Modal -->
    <div id="addProductModal" class="hidden bg-white rounded-3xl max-w-sm w-full p-6 shadow-2xl">
      <div class="flex items-center justify-between mb-4">
        <h3 class="text-[16px] font-extrabold text-[#2b332b]">Add New Product</h3>
        <button data-action="close-modals" class="text-gray-400 hover:text-gray-600"><i class="fa-solid fa-xmark"></i></button>
      </div>
      <form data-form="add-product" class="space-y-3.5 text-[12px]">
        <div>
          <label class="font-bold text-gray-600 block mb-1">Product Title</label>
          <input id="newProdTitle" type="text" placeholder="e.g. Creativilo Studio Mic" required class="w-full h-10 px-3.5 rounded-xl bg-gray-50 border border-gray-200 font-semibold"/>
        </div>
        <div class="grid grid-cols-2 gap-3">
          <div>
            <label class="font-bold text-gray-600 block mb-1">Category</label>
            <input id="newProdCategory" type="text" value="Electronics" required class="w-full h-10 px-3.5 rounded-xl bg-gray-50 border border-gray-200 font-semibold"/>
          </div>
          <div>
            <label class="font-bold text-gray-600 block mb-1">Price ($)</label>
            <input id="newProdPrice" type="number" value="199" required class="w-full h-10 px-3.5 rounded-xl bg-gray-50 border border-gray-200 font-semibold"/>
          </div>
        </div>
        <div class="flex justify-end gap-2 pt-2">
          <button type="button" data-action="close-modals" class="px-4 py-2 rounded-xl bg-gray-100 font-bold text-gray-600">Cancel</button>
          <button type="submit" class="px-5 py-2 rounded-xl bg-[#6cc61c] text-white font-bold">Add Product</button>
        </div>
      </form>
    </div>

  </div>`;
}

export function closeModals() {
  document.getElementById('modalBackdrop').classList.add('hidden');
  Object.values(MODAL_IDS).forEach(id => document.getElementById(id).classList.add('hidden'));
}

export function openModal(which) {
  closeModals();
  if (which === 'edit-profile') document.getElementById('editTasksInput').value = state.completedTasks;
  if (which === 'withdraw') document.getElementById('modalAvailBalance').textContent = `$${state.earningBalance.toLocaleString()}`;

  document.getElementById('modalBackdrop').classList.remove('hidden');
  document.getElementById(MODAL_IDS[which]).classList.remove('hidden');
}

export function saveProfileChanges(e) {
  e.preventDefault();
  const newName = document.getElementById('editNameInput').value.trim() || app.profile.name;
  const newTasks = Math.min(8, Math.max(0, parseInt(document.getElementById('editTasksInput').value, 10) || 5));

  document.querySelectorAll('.profile-name-sync').forEach(el => el.textContent = newName);
  state.completedTasks = newTasks;
  renderTaskSegments();
  closeModals();
  showToast(`Profile updated for ${newName}!`);
}

export function confirmWithdrawal(e) {
  e.preventDefault();
  const amount = parseInt(document.getElementById('withdrawAmountInput').value, 10) || 0;
  if (amount <= 0 || amount > state.earningBalance) {
    showToast('Please enter a valid amount within your available balance.');
    return;
  }

  state.earningBalance -= amount;
  document.getElementById('earningBalanceText').textContent = `$${state.earningBalance.toLocaleString()}`;
  closeModals();
  showToast(`Successfully withdrawn $${amount.toLocaleString()} to your bank account!`);
}

export function saveNewProduct(e) {
  e.preventDefault();
  const name = document.getElementById('newProdTitle').value.trim();
  const category = document.getElementById('newProdCategory').value.trim();
  const price = parseFloat(document.getElementById('newProdPrice').value || '99').toFixed(2);

  productsData.unshift({ name, category, price: `$${price}`, stock: '100 in stock' });
  renderProductsTable();
  closeModals();
  showToast(`Added "${name}" to Store Inventory!`);
}
