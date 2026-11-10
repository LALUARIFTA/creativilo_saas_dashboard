// Projects page data.

export const projectKpis = [
  { label: 'Active Projects', value: '18', delta: '+4 this month', border: 'border-[#6cc61c]', accent: 'text-[#6cc61c]' },
  { label: 'In Review', value: '6', delta: '2 due today', border: 'border-[#f7b928]', accent: 'text-[#f7b928]' },
  { label: 'Completed', value: '142', delta: '98.4% on time', border: 'border-[#33bca0]', accent: 'text-[#33bca0]' },
  { label: 'Team Velocity', value: '94 pts', delta: 'Sprint #24', border: 'border-[#313931]', accent: 'text-gray-500' },
];

export const projectsData = [
  { id: 1, name: 'Storefront 3.0 Redesign', team: 'UI/UX Squad', progress: 85, status: 'active', due: 'May 04, 2022' },
  { id: 2, name: 'AI Inventory Forecasting', team: 'Data Science', progress: 62, status: 'active', due: 'May 18, 2022' },
  { id: 3, name: 'One-Click Crypto Checkout', team: 'Payments Core', progress: 100, status: 'completed', due: 'Apr 20, 2022' },
  { id: 4, name: 'Global Tax Compliance API', team: 'FinTech Ops', progress: 45, status: 'active', due: 'Jun 01, 2022' },
  { id: 5, name: 'Mobile Loyalty Wallet App', team: 'Mobile Guild', progress: 100, status: 'completed', due: 'Apr 12, 2022' },
  { id: 6, name: 'Warehouse Barcode Scanner', team: 'Logistics Dev', progress: 78, status: 'active', due: 'May 09, 2022' },
];

export const roadmap = [
  { dot: 'bg-[#6cc61c]', ring: 'ring-[#effbe3]', title: 'Creativilo Mobile App v3.2 Released', desc: 'Deployed iOS & Android real-time push notification widgets • 2 hours ago' },
  { dot: 'bg-[#f7b928]', ring: 'ring-[#fef9ec]', title: 'Multi-Currency Checkout Gateway QA', desc: 'Stripe & PayPal automated webhook stress test passed (12,000 req/min) • Yesterday' },
  { dot: 'bg-[#33bca0]', ring: 'ring-[#e8fbf7]', title: 'Warehouse Inventory Sync Engine', desc: 'Connected 4 regional outlets with zero-latency barcode tracking • Apr 26, 2022' },
];
