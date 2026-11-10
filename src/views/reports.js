// Reports view: generator, profit/expense bar chart, report archive.

import { reportsData, reportPeriods, profitMonths } from '../data/reports.js';
import { showToast } from '../core/toast.js';

export function renderReportsView() {
  return `
  <section class="menu-view" id="view-reports">
    <!-- Report Generator Bar -->
    <div class="dash-card p-5 mb-5 flex flex-wrap items-center justify-between gap-4 stagger-card">
      <div>
        <h3 class="text-[15px] font-bold text-[#2b332b]">Automated Financial & Audit Reports</h3>
        <p class="text-[11.5px] text-gray-400">Generate instant PDF or CSV statements for accounting & tax compliance</p>
      </div>
      <div class="flex items-center gap-2.5">
        <select id="reportPeriodSelect" class="h-9 px-3 rounded-xl bg-[#f7f8fa] text-[12px] font-semibold text-[#2b332b] border border-gray-200 focus:outline-none">
          ${reportPeriods.map(p => `<option>${p}</option>`).join('')}
        </select>
        <button data-action="generate-report" class="px-4 h-9 rounded-xl bg-[#6cc61c] hover:bg-[#5bb012] text-white text-[12px] font-bold flex items-center gap-2 transition shadow-sm">
          <i class="fa-solid fa-wand-magic-sparkles"></i> Generate New Report
        </button>
      </div>
    </div>

    <!-- Monthly Income vs Expense Comparison -->
    <div class="dash-card p-5 mb-5 stagger-card">
      <div class="flex items-center justify-between mb-4">
        <h3 class="text-[14px] font-bold text-[#2b332b]">Net Profit vs Operational Cost (Last 6 Months)</h3>
        <div class="flex items-center gap-4 text-[11px] font-semibold">
          <span class="flex items-center gap-1.5 text-[#6cc61c]"><span class="w-2.5 h-2.5 rounded-sm bg-[#6cc61c]"></span> Gross Revenue</span>
          <span class="flex items-center gap-1.5 text-[#313931]"><span class="w-2.5 h-2.5 rounded-sm bg-[#313931]"></span> Expenses</span>
        </div>
      </div>
      <div class="grid grid-cols-6 gap-4 items-end h-36 pt-4 px-2 border-b border-gray-100">
        ${profitMonths.map(m => `
        <div class="flex flex-col items-center gap-1.5">
          <div class="w-full flex justify-center items-end gap-1.5 h-24">
            <div class="w-4 bg-[#6cc61c] rounded-t-md h-[${m.rev}%]" title="$${m.rev}K"></div>
            <div class="w-4 bg-[#313931] rounded-t-md h-[${m.exp}%]" title="$${m.exp}K"></div>
          </div>
          <span class="text-[10.5px] ${m.current ? 'font-bold text-[#2b332b]' : 'font-semibold text-gray-400'}">${m.month}</span>
        </div>`).join('')}
      </div>
    </div>

    <!-- Scrollable Archive of Ready Reports -->
    <div class="dash-card p-5 stagger-card">
      <h3 class="text-[15px] font-bold text-[#2b332b] mb-3.5">Downloadable Report Archive</h3>
      <div id="reportsListContainer" class="space-y-2.5">
        <!-- Populated by JS -->
      </div>
    </div>
  </section>`;
}

export function renderReportsList() {
  const container = document.getElementById('reportsListContainer');
  if (!container) return;
  container.innerHTML = reportsData.map(r => `
    <div class="p-3.5 rounded-2xl bg-[#f8faf7] hover:bg-[#effbe3]/60 transition flex items-center justify-between">
      <div class="flex items-center gap-3">
        <div class="w-9 h-9 rounded-xl bg-white text-[#6cc61c] flex items-center justify-center shadow-xs">
          <i class="fa-solid fa-file-arrow-down"></i>
        </div>
        <div>
          <p class="text-[12.5px] font-bold text-[#2b332b]">${r.title}</p>
          <p class="text-[10.5px] text-gray-400">${r.type} • Generated ${r.date}</p>
        </div>
      </div>
      <button data-action="toast" data-msg="Downloading ${r.title}..." class="px-3.5 py-1.5 rounded-xl bg-white hover:bg-[#6cc61c] hover:text-white text-[#2b332b] text-[11px] font-bold shadow-xs transition">
        Download
      </button>
    </div>
  `).join('');
}

export function generateReport() {
  const period = document.getElementById('reportPeriodSelect').value;
  reportsData.unshift({
    id: 'REP-NEW',
    title: `Custom Statement — ${period}`,
    type: 'PDF • 1.9 MB',
    date: 'Just now'
  });
  renderReportsList();
  showToast(`Generated ${period} financial report!`);
}
