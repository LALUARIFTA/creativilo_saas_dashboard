// Right dark profile & earning panel + task segments + notifications.

import { app } from '../config/app.js';
import { state } from '../core/state.js';
import { showToast } from '../core/toast.js';

export function renderRightPanel() {
  const p = app.profile;
  return `
  <aside class="right-panel">
    <div>
      <div class="flex items-center justify-between mb-4 px-1">
        <h2 class="text-[15px] font-bold tracking-tight text-white">Profile</h2>
        <div class="flex items-center gap-3.5 text-white/85">
          <button data-action="toggle-notif" class="relative hover:text-brand-lime transition">
            <i class="fa-solid fa-bell text-[13.5px]"></i>
            <span class="w-1.5 h-1.5 rounded-full bg-red-500 absolute -top-0.5 -right-0.5"></span>
          </button>
          <button data-action="open-modal" data-modal="edit-profile" class="hover:text-brand-lime hover:rotate-45 transition-all">
            <i class="fa-solid fa-gear text-[13.5px]"></i>
          </button>
        </div>
      </div>

      <div id="notifPopover" class="hidden absolute right-4 top-12 w-64 bg-[#262e26] border border-white/10 rounded-2xl p-3 shadow-2xl z-50 text-[11px]">
        <div class="flex items-center justify-between pb-2 mb-2 border-b border-white/10">
          <span class="font-bold text-white">Notifications</span>
          <span data-action="toggle-notif" class="text-[#6cc61c] font-semibold cursor-pointer">Close</span>
        </div>
        <div class="space-y-2 text-white/80">
          ${app.notifications.map(n => `
          <div class="p-2 rounded-xl bg-white/5">
            <p class="font-semibold text-white">${n.title}</p>
            <p class="text-[10px] text-white/50">${n.meta}</p>
          </div>`).join('')}
        </div>
      </div>

      <div class="relative mb-9">
        <div class="h-[104px] w-full rounded-[20px] bg-[#6cc61c] overflow-hidden relative shadow-inner">
          <svg viewBox="0 0 260 105" class="w-full h-full">
            <g transform="rotate(-35 130 52)">
              <rect x="-10" y="15" width="75" height="55" rx="8" fill="#4f9e0c" opacity="0.65"/>
              <rect x="20" y="30" width="60" height="45" rx="6" fill="#85df35" opacity="0.55"/>
              <rect x="115" y="-20" width="90" height="65" rx="8" fill="#5cb312" opacity="0.7"/>
              <rect x="145" y="38" width="75" height="50" rx="6" fill="#9be84e" opacity="0.45"/>
              <line x1="70" y1="-20" x2="70" y2="140" stroke="#b6f674" stroke-width="1.5" opacity="0.7"/>
              <line x1="105" y1="-20" x2="105" y2="140" stroke="#b6f674" stroke-width="1" opacity="0.5"/>
              <line x1="190" y1="-20" x2="190" y2="140" stroke="#b6f674" stroke-width="1.5" opacity="0.6"/>
              <circle cx="92" cy="70" r="2" fill="#ffffff" opacity="0.8"/>
              <rect x="180" y="20" width="5" height="5" fill="#438908" opacity="0.7"/>
              <rect x="155" y="75" width="6" height="6" fill="#ffffff" opacity="0.6"/>
            </g>
          </svg>
          <button data-action="open-modal" data-modal="edit-profile" title="Change Cover" class="w-5 h-5 rounded-full bg-white text-[#56a710] flex items-center justify-center text-[10px] absolute top-2.5 right-2.5 shadow-sm hover:scale-110 transition">
            <i class="fa-solid fa-camera"></i>
          </button>
        </div>

        <div class="w-[62px] h-[62px] rounded-full bg-white p-[2.5px] absolute left-1/2 -translate-x-1/2 -bottom-7 shadow-lg cursor-pointer group" data-action="open-modal" data-modal="edit-profile">
          <img
            src="${p.avatar}"
            onerror="this.src='${p.avatarFallback}'"
            alt="${p.name}"
            class="w-full h-full object-cover rounded-full group-hover:scale-105 transition"
          />
        </div>
      </div>

      <div class="text-center px-1">
        <h3 class="text-[14.5px] font-bold text-white tracking-tight profile-name-sync">${p.name}</h3>
        <p id="taskCounterLabel" class="text-[10.5px] font-medium text-[#8d968d] mt-0.5">${state.completedTasks} from 8 tasks completed</p>

        <div id="taskSegmentsBar" class="grid grid-cols-8 gap-1.5 my-3 px-1" title="Click segments to update completed tasks"></div>

        <div class="grid grid-cols-3 items-center py-2.5 my-1 text-center divide-x divide-white/10">
          ${p.stats.map(s => `
          <div>
            <p class="text-[13px] font-extrabold text-white">${s.value}</p>
            <p class="text-[10px] font-medium text-[#8d968d] mt-0.5">${s.label}</p>
          </div>`).join('')}
        </div>

        <button data-action="open-modal" data-modal="edit-profile" class="mt-2 px-5 py-2 rounded-xl bg-[#6cc61c] hover:bg-[#7ce024] text-white text-[11px] font-bold inline-flex items-center gap-1.5 shadow-[0_6px_16px_rgba(108,198,28,0.3)] transition active:scale-95">
          <i class="fa-regular fa-pen-to-square text-[11px]"></i>
          <span>Edit Profile</span>
        </button>
      </div>
    </div>

    <div class="bg-[#3c453c] rounded-[22px] p-4 mt-3">
      <div class="flex items-center justify-between mb-3">
        <h3 class="text-[13.5px] font-bold text-white">Earning</h3>
        <button data-action="toast" data-msg="Monthly payouts are processed automatically every 1st of the month." class="text-[#9ca59c] hover:text-white transition text-xs">
          <i class="fa-solid fa-circle-info"></i>
        </button>
      </div>
      <div class="bg-[#2a322a] rounded-[18px] p-4 text-center shadow-inner">
        <div class="w-8 h-8 mx-auto mb-1.5 rounded-lg flex items-center justify-center text-[#6cc61c] text-[18px]">
          <i class="fa-solid fa-wallet"></i>
        </div>
        <h4 id="earningBalanceText" class="text-[19px] font-extrabold text-[#6cc61c] tracking-tight">$${state.earningBalance.toLocaleString()}</h4>
        <p class="text-[10.5px] font-medium text-[#7c9c64] mt-0.5">Your earning this month</p>
      </div>
      <div class="text-center mt-3.5">
        <p class="text-[10.5px] font-medium text-[#6cc61c]/90 leading-relaxed px-3">Update your payment method in settings</p>
        <button data-action="open-modal" data-modal="withdraw" class="mt-3 w-full py-2.5 rounded-xl bg-[#6cc61c] hover:bg-[#7ce024] text-white text-[11.5px] font-bold shadow-[0_6px_16px_rgba(108,198,28,0.3)] transition active:scale-95">
          Withdraw Earning
        </button>
      </div>
    </div>
  </aside>`;
}

export function renderTaskSegments() {
  const bar = document.getElementById('taskSegmentsBar');
  const label = document.getElementById('taskCounterLabel');
  const logoutSummary = document.getElementById('logoutTaskSummary');
  if (!bar) return;

  label.textContent = `${state.completedTasks} from 8 tasks completed`;
  if (logoutSummary) logoutSummary.textContent = `${state.completedTasks} of 8 tasks`;

  let html = '';
  for (let i = 1; i <= 8; i++) {
    const isDone = i <= state.completedTasks;
    html += `
      <button
        data-action="set-task" data-count="${i}"
        class="h-[5.5px] rounded-full transition-all duration-300 cursor-pointer hover:scale-y-150 ${
          isDone ? 'bg-[#6cc61c] shadow-[0_0_8px_rgba(108,198,28,0.5)]' : 'bg-[#465046]'
        }"
        title="Set ${i} of 8 tasks completed"
      ></button>`;
  }
  bar.innerHTML = html;
}

export function setTaskCount(count) {
  state.completedTasks = count;
  renderTaskSegments();
  showToast(`Updated daily progress: ${count} from 8 tasks completed!`);
}
