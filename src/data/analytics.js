// Analytics page data.

export const funnelHeader = {
  title: 'Conversion Funnel Performance',
  subtitle: 'Real-time visitor journey from impression to repeat purchase',
  badge: 'Avg. Conv Rate: 4.82%',
};

export const funnel = [
  { step: '1. Store Impressions', value: '148,920', note: '100% Traffic' },
  { step: '2. Product Views', value: '64,310', note: '43.1% Drop-off' },
  { step: '3. Added to Cart', value: '18,450', note: '28.6% of Views' },
  { step: '4. Completed Order', value: '7,182', note: '+19.4% YoY' },
];

export const channels = [
  { label: 'Organic Search (Google / Bing)', pct: 46, count: '22,659', bar: 'bg-[#6cc61c]', accent: 'text-[#6cc61c]' },
  { label: 'Direct Storefront URL', pct: 28, count: '13,792', bar: 'bg-[#313931]', accent: 'text-[#313931]' },
  { label: 'Social Media Campaigns', pct: 18, count: '8,866', bar: 'bg-[#f7b928]', accent: 'text-[#f7b928]' },
  { label: 'Affiliate & Partner Referrals', pct: 8, count: '3,942', bar: 'bg-[#33bca0]', accent: 'text-[#33bca0]' },
];

export const regions = [
  { flag: '🇺🇸', name: 'United States', value: '$41,200 (43%)', accent: 'text-[#6cc61c]' },
  { flag: '🇮🇩', name: 'Indonesia', value: '$24,850 (26%)', accent: 'text-[#2b332b]' },
  { flag: '🇬🇧', name: 'United Kingdom', value: '$16,300 (17%)', accent: 'text-[#2b332b]' },
  { flag: '🇸🇬', name: 'Singapore', value: '$12,650 (14%)', accent: 'text-[#2b332b]' },
];

export const pages = [
  { path: '/store/airpulse-pro-max', visitors: '19,420', time: '04m 12s', conv: '6.8%', accent: 'text-[#6cc61c]' },
  { path: '/collections/summer-bundle-2022', visitors: '14,110', time: '03m 45s', conv: '5.4%', accent: 'text-[#6cc61c]' },
  { path: '/flash-sale/smart-home-kit', visitors: '9,870', time: '02m 58s', conv: '4.1%', accent: 'text-[#f7b928]' },
];
