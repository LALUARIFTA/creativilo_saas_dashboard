// Logout view: session summary & lock screen.

import { app } from '../config/app.js';
import { state } from '../core/state.js';
import { showToast } from '../core/toast.js';
import { switchMenu } from '../core/router.js';

export function renderLogoutView() {
  return `
  <section class="menu-view" id="view-logout">
    <div class="dash-card p-8 max-w-md mx-auto my-8 text-center stagger-card">
      <div class="w-16 h-16 rounded-2xl bg-[#effbe3] text-[#6cc61c] flex items-center justify-center text-2xl mx-auto mb-4 shadow-sm">
        <i class="fa-solid fa-shield-halved"></i>
      </div>
      <h2 class="text-[18px] font-extrabold text-[#2b332b]">Ready to Sign Out, <span class="profile-name-sync">${app.profile.name}</span>?</h2>
      <p class="text-[12px] text-gray-400 mt-1 mb-5">
        Your current session has been active for <strong>4h 18m</strong>. All dashboard changes and store configurations are automatically synced.
      </p>

      <div class="p-3.5 rounded-2xl bg-[#f7f8fa] text-left text-[11.5px] space-y-1.5 mb-6">
        <div class="flex justify-between">
          <span class="text-gray-400">Session Revenue Processed:</span>
          <span class="font-bold text-[#6cc61c]">${app.profile.sessionRevenue}</span>
        </div>
        <div class="flex justify-between">
          <span class="text-gray-400">Tasks Completed Today:</span>
          <span class="font-bold text-[#2b332b]" id="logoutTaskSummary">${state.completedTasks} of 8 tasks</span>
        </div>
      </div>

      <div class="flex items-center gap-3">
        <button data-action="switch-menu" data-menu="dashboard" class="flex-1 py-2.5 rounded-xl bg-gray-100 hover:bg-gray-200 text-[#2b332b] text-[12px] font-bold transition">
          Stay Logged In
        </button>
        <button data-action="confirm-logout" class="flex-1 py-2.5 rounded-xl bg-[#313931] hover:bg-red-600 text-white text-[12px] font-bold transition">
          Confirm Log Out
        </button>
      </div>
    </div>
  </section>`;
}

export function confirmLogout() {
  showToast('Session locked securely. Signing back into Dashboard...');
  setTimeout(() => switchMenu('dashboard'), 1100);
}
