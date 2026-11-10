# Graph Report - creativilo_saas_dashboard  (2026-11-10)

## Corpus Check
- 32 files · ~33,753 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 137 nodes · 296 edges · 11 communities
- Extraction: 94% EXTRACTED · 6% INFERRED · 0% AMBIGUOUS · INFERRED: 18 edges (avg confidence: 0.85)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `7009eab9`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- main.js
- router.js
- shell.js
- views/dashboard.js
- package.json
- Creativilo — SaaS Dashboard Template
- views/projects.js
- views/analytics.js
- views/chat.js
- views/reports.js
- views/outlet.js

## God Nodes (most connected - your core abstractions)
1. `showToast()` - 18 edges
2. `state` - 8 edges
3. `Creativilo — SaaS Dashboard Template` - 8 edges
4. `switchMenu()` - 7 edges
5. `app` - 6 edges
6. `closeModals()` - 6 edges
7. `renderShell()` - 6 edges
8. `saveProfileChanges()` - 5 edges
9. `saveNewProduct()` - 5 edges
10. `renderTaskSegments()` - 5 edges

## Surprising Connections (you probably didn't know these)
- `refreshGauge()` --calls--> `showToast()`  [EXTRACTED]
  src/views/dashboard.js → src/core/toast.js
- `confirmLogout()` --calls--> `showToast()`  [EXTRACTED]
  src/views/logout.js → src/core/toast.js
- `addProject()` --calls--> `showToast()`  [EXTRACTED]
  src/views/projects.js → src/core/toast.js
- `toggleMaintenance()` --calls--> `showToast()`  [EXTRACTED]
  src/views/store.js → src/core/toast.js
- `switchMenu()` --calls--> `animateDashboardCounters()`  [EXTRACTED]
  src/core/router.js → src/views/dashboard.js

## Import Cycles
- None detected.

## Communities (11 total, 0 thin omitted)

### Community 0 - "main.js"
Cohesion: 0.23
Nodes (16): showToast(), productsData, clickActions, submitActions, closeModals(), confirmWithdrawal(), MODAL_IDS, openModal() (+8 more)

### Community 1 - "router.js"
Cohesion: 0.19
Nodes (14): mountViews(), switchMenu(), updateScrollProgress(), updateSidebarGlider(), VIEWS, state, gateways, promos (+6 more)

### Community 2 - "shell.js"
Cohesion: 0.23
Nodes (11): app, handleGlobalSearch(), MENU_GROUPS, MENU_META, SEARCH_INDEX, renderHeader(), renderModals(), renderRightPanel() (+3 more)

### Community 3 - "views/dashboard.js"
Cohesion: 0.18
Nodes (15): gaugeOptions, kpis, quarterlyTarget, revenueDays, topProducts, transactions, kpiCard(), kpiSparkline() (+7 more)

### Community 4 - "package.json"
Cohesion: 0.14
Nodes (12): description, devDependencies, vite, name, private, scripts, build, dev (+4 more)

### Community 5 - "Creativilo — SaaS Dashboard Template"
Cohesion: 0.18
Nodes (10): Build Produksi, Creativilo — SaaS Dashboard Template, Deploy ke GitHub Pages, Fitur, Kustomisasi untuk Pengguna Template, Menambah menu baru, Menjalankan, Preview (+2 more)

### Community 6 - "views/projects.js"
Cohesion: 0.33
Nodes (8): projectKpis, projectsData, roadmap, addProject(), filterProjects(), projectCard(), renderProjectsGrid(), renderProjectsView()

### Community 7 - "views/analytics.js"
Cohesion: 0.43
Nodes (6): channels, funnel, funnelHeader, pages, regions, renderAnalyticsView()

### Community 8 - "views/chat.js"
Cohesion: 0.43
Nodes (5): chatThreads, renderChat(), renderChatView(), selectThread(), sendChatMessage()

### Community 9 - "views/reports.js"
Cohesion: 0.53
Nodes (4): profitMonths, reportPeriods, reportsData, renderReportsView()

### Community 10 - "views/outlet.js"
Cohesion: 0.60
Nodes (3): outlets, transfers, renderOutletView()

## Knowledge Gaps
- **21 isolated node(s):** `name`, `private`, `version`, `type`, `description` (+16 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 24 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `showToast()` connect `main.js` to `router.js`, `views/dashboard.js`, `views/projects.js`, `views/reports.js`?**
  _High betweenness centrality (0.032) - this node is a cross-community bridge._
- **Why does `renderShell()` connect `shell.js` to `main.js`?**
  _High betweenness centrality (0.014) - this node is a cross-community bridge._
- **Why does `animateDashboardCounters()` connect `router.js` to `main.js`, `views/dashboard.js`?**
  _High betweenness centrality (0.012) - this node is a cross-community bridge._
- **What connects `name`, `private`, `version` to the rest of the system?**
  _21 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `package.json` be split into smaller, more focused modules?**
  _Cohesion score 0.14285714285714285 - nodes in this community are weakly interconnected._