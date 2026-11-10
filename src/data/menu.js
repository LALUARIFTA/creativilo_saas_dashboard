// Sidebar navigation, page titles/subtitles, and global search index.
// Adding a menu = register it here, add a view, then export it in core/router.js.

export const MENU_META = {
  dashboard: {
    title: 'Dashboard',
    subtitle: 'All the details about your selling products are here..'
  },
  projects: {
    title: 'Projects',
    subtitle: 'Track active sprints, milestones, and product deliverables..'
  },
  analytics: {
    title: 'Analytics',
    subtitle: 'Deep conversion funnel metrics and real-time audience insights..'
  },
  reports: {
    title: 'Reports',
    subtitle: 'Financial statements, tax exports, and automated audit logs..'
  },
  store: {
    title: 'Store',
    subtitle: 'Configure payment gateways, domain status, and promo codes..'
  },
  outlet: {
    title: 'Outlet',
    subtitle: 'Monitor physical retail branches and inter-warehouse transfers..'
  },
  products: {
    title: 'Products',
    subtitle: 'Manage your SKU inventory, pricing tiers, and stock alerts..'
  },
  chat: {
    title: 'Chat',
    subtitle: 'Live customer support tickets and team messaging hub..'
  },
  logout: {
    title: 'Log Out',
    subtitle: 'Review your active session summary before signing out..'
  }
};

export const MENU_GROUPS = [
  {
    label: 'Overview',
    items: [
      { key: 'dashboard', icon: 'fa-solid fa-table-cells-large' },
      { key: 'projects', icon: 'fa-solid fa-clipboard-list' },
      { key: 'analytics', icon: 'fa-solid fa-chart-pie' },
      { key: 'reports', icon: 'fa-solid fa-file-invoice' },
    ],
  },
  {
    label: 'Business',
    items: [
      { key: 'store', icon: 'fa-solid fa-cart-shopping' },
      { key: 'outlet', icon: 'fa-solid fa-shop' },
      { key: 'products', icon: 'fa-solid fa-box-archive' },
      { key: 'chat', icon: 'fa-solid fa-comment-dots', unread: true },
      { key: 'logout', icon: 'fa-solid fa-right-from-bracket' },
    ],
  },
];

// Curated entries for the global search dropdown.
export const SEARCH_INDEX = [
  { label: 'Dashboard — Revenue & Recent Transactions', menu: 'dashboard' },
  { label: 'Projects — Active Sprints & Roadmap', menu: 'projects' },
  { label: 'Analytics — Conversion Funnel & Traffic', menu: 'analytics' },
  { label: 'Reports — Monthly PDF & Tax Statements', menu: 'reports' },
  { label: 'Store — Stripe & PayPal Gateways', menu: 'store' },
  { label: 'Outlet — Manhattan & Westside Branches', menu: 'outlet' },
  { label: 'Products — AirPulse Pro Max & Smart Watch', menu: 'products' },
  { label: 'Chat — Customer Support Messages', menu: 'chat' },
];
