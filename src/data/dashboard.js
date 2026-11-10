// Dashboard page data — edit values here, the view renders automatically.

export const kpis = [
  { label: 'Total Visits', target: 49.259, decimals: 3, delta: '+12.05%', toast: 'Total Visits grew by +12.05% compared to last week!' },
  { label: 'Bounce Rate', target: 21.4, decimals: 1, delta: '+5.19%', toast: 'Bounce Rate is healthy at 21.4% (+5.19% improvement)' },
  { label: 'Realtime Users', target: 9.221, decimals: 3, delta: '+22.01%', toast: '9,221 Realtime Users currently active on Creativilo' },
];

// Revenue chart scrubbing points (cx/cy are SVG coordinates in the 340x135 viewBox).
export const revenueDays = {
  activeDay: 3,
  points: [
    { label: 'Sun', amount: '$14.8K', cx: 12, cy: 92 },
    { label: 'Mon', amount: '$11.4K', cx: 64, cy: 104 },
    { label: 'Tue', amount: '$18.9K', cx: 116, cy: 86 },
    { label: 'Wed', amount: '$28.2K', cx: 168, cy: 55 },
    { label: 'Thu', amount: '$24.6K', cx: 225, cy: 69 },
    { label: 'Fri', amount: '$34.1K', cx: 280, cy: 41 },
    { label: 'Sat', amount: '$26.5K', cx: 330, cy: 64 },
  ],
};

export const gaugeOptions = [37, 48, 64, 72, 37];

export const transactions = [
  { id: '#2020912', date: 'Apr 29, 2022, 11:37', amount: '-$299,89', status: 'Pending', toast: 'Transaction #2020912 — Pending Verification (-$299,89)' },
  { id: '#2020911', date: 'Apr 29, 2022, 11:37', amount: '-$130,15', status: 'Completed', toast: 'Transaction #2020911 — Completed (-$130,15)' },
  { id: '#2020910', date: 'Apr 29, 2022, 11:36', amount: '-$458,13', status: 'Scheduled', toast: 'Transaction #2020910 — Scheduled (-$458,13)' },
  { id: '#2020909', date: 'Apr 29, 2022, 11:36', amount: '-$210,99', status: 'Completed', toast: 'Transaction #2020909 — Completed (-$210,99)' },
  // Hidden until "View All" is clicked.
  { id: '#2020908', date: 'Apr 28, 2022, 19:14', amount: '+$840,00', status: 'Completed', hidden: true },
];

export const topProducts = [
  { icon: 'fa-headphones', iconWrap: 'bg-[#eaf8d9] text-[#6cc61c]', name: 'AirPulse Pro Max', units: '1,420 units sold', revenue: '$42,600', accent: 'text-[#6cc61c]' },
  { icon: 'fa-clock', iconWrap: 'bg-[#fff6e0] text-[#f5b025]', name: 'Chrono Smart Watch S8', units: '980 units sold', revenue: '$29,400', accent: 'text-[#2b332b]' },
];

export const quarterlyTarget = {
  badge: '84% Reached',
  note: 'You are $18,400 away from unlocking the Q2 Super Seller Bonus tier.',
  progress: 84,
  current: '$95,000',
  goal: '$113,400',
};
