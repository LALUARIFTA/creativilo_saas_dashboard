// Chat threads data. New messages are pushed to `messages` at runtime.

export const chatThreads = [
  {
    id: 0,
    name: 'Sarah Jenkins (VIP Buyer)',
    initials: 'SJ',
    preview: 'Can I upgrade shipping on #2020912?',
    messages: [
      { sender: 'them', text: 'Hi Creativilo team! I just placed order #2020912 for the AirPulse Pro Max.', time: '11:38 AM' },
      { sender: 'them', text: 'Can I upgrade my shipping to Express Overnight?', time: '11:39 AM' },
      { sender: 'me', text: 'Hello Sarah! Absolutely, I have upgraded #2020912 to Priority Overnight at no extra charge.', time: '11:41 AM' },
    ],
  },
  {
    id: 1,
    name: 'Marcus Vance (Outlet Mgr)',
    initials: 'MV',
    preview: 'Westside Mall stock transfer arrived!',
    messages: [
      { sender: 'them', text: 'Hey John, the 120 units of AirPulse Pro Max just arrived at Westside Mall.', time: '10:15 AM' },
      { sender: 'me', text: 'Awesome news Marcus! Please scan them into POS Terminal #2.', time: '10:18 AM' },
    ],
  },
  {
    id: 2,
    name: 'Elena Rostova (Supplier)',
    initials: 'ER',
    preview: 'Invoice #INV-902 approved for Q2',
    messages: [
      { sender: 'them', text: 'We have scheduled the next batch of Chrono Smart Watches for Friday dispatch.', time: 'Yesterday' },
    ],
  },
];
