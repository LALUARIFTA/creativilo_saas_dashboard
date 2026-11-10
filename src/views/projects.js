// Projects view: KPI row, filter bar, project grid, roadmap.

import { projectKpis, projectsData, roadmap } from '../data/projects.js';
import { showToast } from '../core/toast.js';

function projectCard(p) {
  return `
    <div class="dash-card p-4 flex flex-col justify-between">
      <div>
        <div class="flex items-center justify-between mb-1.5">
          <span class="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full ${
            p.status === 'completed' ? 'bg-[#effbe3] text-[#6cc61c]' : 'bg-[#fef9ec] text-[#f5b025]'
          }">${p.status}</span>
          <span class="text-[10.5px] font-medium text-gray-400">Due ${p.due}</span>
        </div>
        <h4 class="text-[13.5px] font-bold text-[#2b332b]">${p.name}</h4>
        <p class="text-[11px] text-gray-400 mt-0.5">Assigned to ${p.team}</p>
      </div>
      <div class="mt-4">
        <div class="flex justify-between text-[11px] font-bold mb-1">
          <span>Progress</span>
          <span class="text-[#6cc61c]">${p.progress}%</span>
        </div>
        <div class="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
          <div class="h-full bg-[#6cc61c] rounded-full transition-all duration-500" style="width: ${p.progress}%"></div>
        </div>
      </div>
    </div>`;
}

export function renderProjectsView() {
  return `
  <section class="menu-view" id="view-projects">
    <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-5 stagger-card">
      ${projectKpis.map(k => `
      <div class="dash-card p-4 border-l-4 ${k.border}">
        <p class="text-[11px] font-semibold text-gray-400">${k.label}</p>
        <h3 class="text-[20px] font-extrabold text-[#2b332b] mt-0.5">${k.value}</h3>
        <span class="text-[10px] font-bold ${k.accent}">${k.delta}</span>
      </div>`).join('')}
    </div>

    <div class="dash-card p-4 mb-5 flex flex-wrap items-center justify-between gap-3 stagger-card">
      <div class="flex items-center gap-2">
        <button data-action="filter-projects" data-filter="all" class="proj-filter-btn px-3.5 py-1.5 rounded-xl text-[11.5px] font-bold bg-[#6cc61c] text-white transition">All (${projectsData.length})</button>
        <button data-action="filter-projects" data-filter="active" class="proj-filter-btn px-3.5 py-1.5 rounded-xl text-[11.5px] font-semibold text-gray-500 hover:bg-gray-100 transition">In Progress</button>
        <button data-action="filter-projects" data-filter="completed" class="proj-filter-btn px-3.5 py-1.5 rounded-xl text-[11.5px] font-semibold text-gray-500 hover:bg-gray-100 transition">Completed</button>
      </div>
      <button data-action="add-project" class="px-4 py-2 rounded-xl bg-[#313931] hover:bg-[#6cc61c] text-white text-[11.5px] font-bold flex items-center gap-2 transition shadow-sm">
        <i class="fa-solid fa-plus"></i> Create Project
      </button>
    </div>

    <div id="projectsGrid" class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5 stagger-card">
      <!-- Populated dynamically via JS -->
    </div>

    <div class="dash-card p-5 stagger-card">
      <h3 class="text-[15px] font-bold text-[#2b332b] mb-4">Q2 Product Launch Roadmap & Commit Log</h3>
      <div class="space-y-4 border-l-2 border-[#e2f5cf] ml-3 pl-5">
        ${roadmap.map(item => `
        <div class="relative">
          <span class="w-3 h-3 rounded-full ${item.dot} absolute -left-[27px] top-1 ring-4 ${item.ring}"></span>
          <p class="text-[12.5px] font-bold text-[#2b332b]">${item.title}</p>
          <p class="text-[11px] text-gray-400">${item.desc}</p>
        </div>`).join('')}
      </div>
    </div>
  </section>`;
}

export function renderProjectsGrid(filter = 'all') {
  const grid = document.getElementById('projectsGrid');
  if (!grid) return;
  const list = filter === 'all' ? projectsData : projectsData.filter(p => p.status === filter);
  grid.innerHTML = list.map(projectCard).join('');
}

export function filterProjects(filter, btnEl) {
  document.querySelectorAll('.proj-filter-btn').forEach(b => {
    b.className = 'proj-filter-btn px-3.5 py-1.5 rounded-xl text-[11.5px] font-semibold text-gray-500 hover:bg-gray-100 transition';
  });
  btnEl.className = 'proj-filter-btn px-3.5 py-1.5 rounded-xl text-[11.5px] font-bold bg-[#6cc61c] text-white transition';
  renderProjectsGrid(filter);
}

export function addProject() {
  projectsData.unshift({
    id: Date.now(),
    name: `New Q2 Growth Sprint #${projectsData.length + 1}`,
    team: 'Core Product Team',
    progress: 25,
    status: 'active',
    due: 'Jun 15, 2022'
  });
  renderProjectsGrid('all');
  showToast('Created new project in active sprint!');
}
