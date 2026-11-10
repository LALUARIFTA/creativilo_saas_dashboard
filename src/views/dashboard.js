// Dashboard view: KPI banner, revenue chart, customers gauge, transactions.

import { kpis, revenueDays, gaugeOptions, transactions, topProducts, quarterlyTarget } from '../data/dashboard.js';
import { state } from '../core/state.js';
import { showToast } from '../core/toast.js';

const TX_STATUS_STYLES = {
  Pending:   { badge: 'bg-[#fef9ec] text-[#f3b738]', icon: 'bg-[#fff8e6] text-[#f5b025]' },
  Completed: { badge: 'bg-[#effbe3] text-[#6cc61c]', icon: 'bg-[#effbe3] text-[#6cc61c]' },
  Scheduled: { badge: 'bg-[#e8fbf7] text-[#33bca0]', icon: 'bg-[#e6fbf6] text-[#28b89b]' },
};

function kpiSparkline(index) {
  return `
    <div class="w-[82px] h-[48px] mt-3">
      <svg viewBox="0 0 90 48" class="w-full h-full overflow-visible">
        ${index === 0 ? `
        <defs>
          <linearGradient id="sparkGrad1" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#ffffff" stop-opacity="0.38"/>
            <stop offset="100%" stop-color="#ffffff" stop-opacity="0.0"/>
          </linearGradient>
        </defs>` : ''}
        <path d="M2,42 C10,42 12,33 18,33 C24,33 27,39 33,39 C39,39 43,10 50,10 C56,10 59,34 65,34 C71,34 73,21 78,21 C83,21 85,31 89,23 L89,45 L2,45 Z" fill="url(#sparkGrad1)"/>
        <path class="draw-path" d="M2,42 C10,42 12,33 18,33 C24,33 27,39 33,39 C39,39 43,10 50,10 C56,10 59,34 65,34 C71,34 73,21 78,21 C83,21 85,31 89,23" fill="none" stroke="#ffffff" stroke-width="1.6" stroke-linecap="round"/>
      </svg>
    </div>`;
}

function kpiCard(kpi, index) {
  return `
    <div class="kpi-subcard" data-action="toast" data-msg="${kpi.toast}">
      <div class="flex items-start justify-between">
        <div>
          <p class="text-[11px] font-semibold text-white/90">${kpi.label}</p>
          <h3 class="text-[18px] font-extrabold tracking-tight mt-0.5 count-up" data-target="${kpi.target}" data-decimals="${kpi.decimals}">${kpi.target}</h3>
          <div class="flex items-center gap-1.5 mt-2">
            <span class="w-4 h-4 rounded-[5px] bg-white flex items-center justify-center text-[#56a710] text-[9px]">
              <i class="fa-solid fa-arrow-trend-up"></i>
            </span>
            <span class="text-[10px] font-semibold text-white/95">${kpi.delta}</span>
          </div>
        </div>
        ${kpiSparkline(index)}
      </div>
    </div>`;
}

function transactionRow(tx) {
  const s = TX_STATUS_STYLES[tx.status];
  return `
    <div class="${tx.hidden ? 'extra-tx hidden ' : ''}grid grid-cols-12 items-center py-3 hover:bg-gray-50/70 rounded-xl px-1 transition${tx.toast ? ' cursor-pointer' : ''}"${tx.toast ? ` data-action="toast" data-msg="${tx.toast}"` : ''}>
      <div class="col-span-4 flex items-center gap-2.5 font-bold text-[#3b423b]">
        <span class="w-6 h-6 rounded-lg ${s.icon} flex items-center justify-center text-[10px]">
          <i class="fa-solid fa-arrow-up"></i>
        </span>
        ${tx.id}
      </div>
      <div class="col-span-4 text-[11.5px] font-medium text-[#a3aba3]">${tx.date}</div>
      <div class="col-span-2 font-bold text-[#3b423b]">${tx.amount}</div>
      <div class="col-span-2 flex justify-end">
        <span class="px-3 py-1 rounded-lg ${s.badge} text-[10px] font-bold">${tx.status}</span>
      </div>
    </div>`;
}

export function renderDashboardView() {
  return `
  <section class="menu-view active-view" id="view-dashboard">

    <!-- 1. TOP LIME GREEN KPI BANNER -->
    <div class="hero-green-banner stagger-card mb-5">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-3.5">
        ${kpis.map(kpiCard).join('')}
      </div>
    </div>

    <!-- 2. MIDDLE ROW: REVENUE CHART + CUSTOMERS GAUGE -->
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-5 stagger-card mb-5">

      <div class="dash-card lg:col-span-7 p-5 flex flex-col justify-between">
        <div class="flex items-center justify-between mb-3">
          <h2 class="text-[15px] font-bold text-[#2b332b]">Revenue</h2>
          <div class="flex items-center gap-3 text-[10.5px] font-semibold">
            <button data-action="toggle-series" data-series="thisWeek" class="flex items-center gap-1.5 text-[#6cc61c] hover:opacity-80 transition">
              <span class="w-1.5 h-1.5 rounded-full bg-[#6cc61c]"></span>
              This week
            </button>
            <button data-action="toggle-series" data-series="lastWeek" class="flex items-center gap-1.5 text-[#f6c343] hover:opacity-80 transition">
              <span class="w-1.5 h-1.5 rounded-full bg-[#f6c343]"></span>
              Last week
            </button>
          </div>
        </div>

        <div class="relative flex items-center gap-2 pt-2">
          <div class="flex flex-col justify-between h-[155px] text-[10px] font-medium text-[#b0b7b0] pr-1 pb-5 select-none">
            <span>50K</span><span>40K</span><span>30K</span><span>20K</span><span>10K</span><span>0</span>
          </div>

          <div class="flex-1 relative h-[160px]">
            <svg id="revenueSvg" viewBox="0 0 340 135" class="w-full h-[135px] overflow-visible">
              <defs>
                <linearGradient id="wedBarGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stop-color="#6cc61c" stop-opacity="0.24"/>
                  <stop offset="100%" stop-color="#6cc61c" stop-opacity="0.06"/>
                </linearGradient>
                <filter id="lineShadow" x="-10%" y="-10%" width="120%" height="130%">
                  <feDropShadow dx="0" dy="4" stdDeviation="3" flood-color="#6cc61c" flood-opacity="0.22"/>
                </filter>
              </defs>

              <line x1="0" y1="15" x2="335" y2="15" stroke="#f3f4f6" stroke-width="1"/>
              <line x1="0" y1="42" x2="335" y2="42" stroke="#f3f4f6" stroke-width="1"/>
              <line x1="0" y1="69" x2="335" y2="69" stroke="#f3f4f6" stroke-width="1"/>
              <line x1="0" y1="96" x2="335" y2="96" stroke="#f3f4f6" stroke-width="1"/>
              <line x1="0" y1="123" x2="335" y2="123" stroke="#f3f4f6" stroke-width="1"/>

              <rect id="revHighlightBar" x="155" y="55" width="26" height="70" rx="6" fill="url(#wedBarGrad)" class="transition-all duration-300"/>
              <line id="revHighlightLine" x1="168" y1="55" x2="168" y2="125" stroke="#6cc61c" stroke-width="1" stroke-dasharray="2 2" stroke-opacity="0.5" class="transition-all duration-300"/>

              <path id="lastWeekPath" d="M 10,95 C 40,97 65,118 92,112 C 118,106 135,59 168,61 C 198,63 205,76 225,73 C 248,70 258,42 280,45 C 302,48 312,86 332,68"
                fill="none" stroke="#dce775" stroke-width="2" stroke-linecap="round" opacity="0.75"/>

              <path id="thisWeekPath" class="draw-path" filter="url(#lineShadow)"
                d="M 10,92 C 42,93 66,115 92,110 C 120,104 134,54 168,55 C 198,56 205,72 225,69 C 248,66 258,38 280,41 C 302,44 312,83 332,64"
                fill="none" stroke="#6cc61c" stroke-width="2.5" stroke-linecap="round"/>

              <circle id="revActiveDot" cx="168" cy="55" r="4.5" fill="#ffffff" stroke="#6cc61c" stroke-width="2.5" class="transition-all duration-300"/>
            </svg>

            <div id="revTooltipPill" style="left: 49.5%; top: 14px;" class="absolute -translate-x-1/2 bg-[#76d327] text-white text-[10.5px] font-bold px-3 py-1 rounded-lg shadow-[0_6px_14px_rgba(108,198,28,0.38)] transition-all duration-300 pointer-events-none">
              $28.2K
            </div>

            <div class="grid grid-cols-7 text-center text-[10.5px] font-medium text-[#9ca39c] mt-1">
              ${revenueDays.points.map((d, i) => `
              <button data-action="scrub-day" data-day="${i}" class="hover:text-[#6cc61c] transition py-0.5${i === revenueDays.activeDay ? ' text-[#2b332b] font-bold' : ''}">${d.label}</button>`).join('')}
            </div>
          </div>
        </div>
      </div>

      <!-- Customers Circular Gauge Card -->
      <div class="dash-card lg:col-span-5 p-5 flex flex-col justify-between items-center">
        <div class="w-full flex items-center justify-between">
          <h2 class="text-[15px] font-bold text-[#2b332b]">Customers</h2>
          <button data-action="refresh-gauge" title="Refresh Gauge" class="text-[11px] text-[#a3aba3] hover:text-brand-lime transition">
            <i class="fa-solid fa-rotate"></i>
          </button>
        </div>

        <div class="my-2 customer-gauge-ring cursor-pointer" data-action="refresh-gauge">
          <svg viewBox="0 0 140 140" class="w-[138px] h-[138px] -rotate-90">
            <circle cx="70" cy="70" r="54" fill="none" stroke="#f1f3f1" stroke-width="11"/>

            <circle id="gaugeArcYellow" cx="70" cy="70" r="54" fill="none" stroke="#f7b928" stroke-width="10.5"
              stroke-dasharray="105 340" stroke-dashoffset="-18" stroke-linecap="round" class="transition-all duration-700"/>

            <circle id="gaugeArcGreenBottom" cx="70" cy="70" r="54" fill="none" stroke="#6cc61c" stroke-width="10.5"
              stroke-dasharray="62 340" stroke-dashoffset="-142" stroke-linecap="round" class="transition-all duration-700"/>

            <circle cx="70" cy="70" r="54" fill="none" stroke="#313931" stroke-width="10.5"
              stroke-dasharray="24 340" stroke-dashoffset="-220" stroke-linecap="round"/>

            <circle id="gaugeArcGreenLeft" cx="70" cy="70" r="54" fill="none" stroke="#6cc61c" stroke-width="10.5"
              stroke-dasharray="55 340" stroke-dashoffset="-256" stroke-linecap="round" class="transition-all duration-700"/>

            <circle cx="70" cy="70" r="54" fill="none" stroke="#313931" stroke-width="10.5"
              stroke-dasharray="28 340" stroke-dashoffset="-324" stroke-linecap="round"/>
          </svg>

          <div class="absolute inset-0 flex flex-col items-center justify-center text-center">
            <span id="customerTotalPct" class="text-[20px] font-extrabold text-[#2b332b] leading-none">37%</span>
            <span class="text-[11px] font-medium text-[#9ca39c] mt-1">Total</span>
          </div>
        </div>

        <div class="flex flex-col items-center gap-1 text-[10.5px] font-medium text-[#9ca39c]">
          <div class="flex items-center gap-1.5">
            <span class="w-1.5 h-1.5 rounded-full bg-[#6cc61c]"></span>
            <span>Current Customers</span>
          </div>
          <div class="flex items-center gap-1.5">
            <span class="w-1.5 h-1.5 rounded-full bg-[#f7b928]"></span>
            <span>New Customers</span>
          </div>
        </div>
      </div>

    </div>

    <!-- 3. RECENT TRANSACTION CARD -->
    <div class="dash-card p-5 stagger-card mb-5">
      <div class="flex items-center justify-between mb-3.5">
        <h2 class="text-[15px] font-bold text-[#2b332b]">Recent Transaction</h2>
        <button data-action="view-all-tx" id="viewAllTxBtn" class="text-[11px] font-bold text-[#5a635a] hover:text-brand-lime transition">
          View All
        </button>
      </div>

      <div class="grid grid-cols-12 text-[11px] font-semibold text-[#a3aba3] pb-2.5 border-b border-gray-100">
        <div class="col-span-4">Transaction ID</div>
        <div class="col-span-4">Date</div>
        <div class="col-span-2">Amount</div>
        <div class="col-span-2 text-right pr-2">Status</div>
      </div>

      <div class="divide-y divide-gray-50 text-[12px]" id="dashboardTxContainer">
        ${transactions.map(transactionRow).join('')}
      </div>
    </div>

    <!-- 4. EXTENDED SCROLLABLE SECTION -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-5 stagger-card">
      <div class="dash-card p-5">
        <div class="flex items-center justify-between mb-3">
          <h3 class="text-[14px] font-bold text-[#2b332b]">Top Selling Products</h3>
          <span class="text-[10.5px] font-bold text-brand-lime bg-brand-limeSoft px-2.5 py-0.5 rounded-full">Live Rank</span>
        </div>
        <div class="space-y-3">
          ${topProducts.map(p => `
          <div class="flex items-center justify-between p-2.5 rounded-xl bg-[#f8faf7]">
            <div class="flex items-center gap-3">
              <div class="w-9 h-9 rounded-xl ${p.iconWrap} flex items-center justify-center font-bold text-sm">
                <i class="fa-solid ${p.icon}"></i>
              </div>
              <div>
                <p class="text-[12px] font-bold text-[#2b332b]">${p.name}</p>
                <p class="text-[10.5px] text-gray-400">${p.units}</p>
              </div>
            </div>
            <span class="text-[12px] font-extrabold ${p.accent}">${p.revenue}</span>
          </div>`).join('')}
        </div>
      </div>

      <div class="dash-card p-5 flex flex-col justify-between">
        <div class="flex items-center justify-between mb-2">
          <h3 class="text-[14px] font-bold text-[#2b332b]">Quarterly Sales Target</h3>
          <span class="text-[11px] font-bold text-[#6cc61c]">${quarterlyTarget.badge}</span>
        </div>
        <p class="text-[11.5px] text-gray-400 mb-3">${quarterlyTarget.note}</p>
        <div class="w-full h-2.5 bg-gray-100 rounded-full overflow-hidden mb-3">
          <div class="h-full bg-gradient-to-r from-[#6cc61c] to-[#9be84e] rounded-full" style="width: ${quarterlyTarget.progress}%"></div>
        </div>
        <div class="flex items-center justify-between text-[11px] font-semibold text-gray-500">
          <span>Current: <strong class="text-[#2b332b]">${quarterlyTarget.current}</strong></span>
          <span>Goal: <strong class="text-[#2b332b]">${quarterlyTarget.goal}</strong></span>
        </div>
      </div>
    </div>

  </section>`;
}

// =========================================================
// INTERACTIONS
// =========================================================
export function scrubDay(dayIdx) {
  const d = revenueDays.points[dayIdx];
  if (!d) return;

  const bar = document.getElementById('revHighlightBar');
  const line = document.getElementById('revHighlightLine');
  const dot = document.getElementById('revActiveDot');
  const pill = document.getElementById('revTooltipPill');

  if (!bar || !dot || !pill) return;

  bar.setAttribute('x', d.cx - 13);
  bar.setAttribute('y', d.cy);
  bar.setAttribute('height', Math.max(15, 125 - d.cy));

  line.setAttribute('x1', d.cx);
  line.setAttribute('x2', d.cx);
  line.setAttribute('y1', d.cy);

  dot.setAttribute('cx', d.cx);
  dot.setAttribute('cy', d.cy);

  const pctLeft = (d.cx / 340) * 100;
  pill.style.left = `${pctLeft}%`;
  pill.style.top = `${Math.max(4, d.cy - 40)}px`;
  pill.textContent = d.amount;
}

export function toggleRevenueSeries(series) {
  if (series === 'thisWeek') {
    state.showThisWeek = !state.showThisWeek;
    document.getElementById('thisWeekPath').style.opacity = state.showThisWeek ? '1' : '0.15';
  } else {
    state.showLastWeek = !state.showLastWeek;
    document.getElementById('lastWeekPath').style.opacity = state.showLastWeek ? '0.75' : '0.1';
  }
}

export function refreshGauge() {
  const pctEl = document.getElementById('customerTotalPct');
  const current = parseInt(pctEl.textContent, 10);
  const next = gaugeOptions[(gaugeOptions.indexOf(current) + 1) % gaugeOptions.length] || gaugeOptions[0];
  pctEl.textContent = `${next}%`;
  showToast(`Customers retention gauge updated to ${next}% Total`);
}

export function toggleAllTransactions() {
  const extras = document.querySelectorAll('.extra-tx');
  const btn = document.getElementById('viewAllTxBtn');
  extras.forEach(row => row.classList.toggle('hidden'));
  const isShowing = !extras[0].classList.contains('hidden');
  btn.textContent = isShowing ? 'Show Less' : 'View All';
}

export function animateDashboardCounters() {
  const counters = document.querySelectorAll('.count-up');
  counters.forEach(el => {
    const target = parseFloat(el.dataset.target);
    const decimals = parseInt(el.dataset.decimals || '0', 10);
    const duration = 750;
    const startTime = performance.now();

    function step(now) {
      const progress = Math.min(1, (now - startTime) / duration);
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = (target * eased).toFixed(decimals);
      if (progress < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  });
}
