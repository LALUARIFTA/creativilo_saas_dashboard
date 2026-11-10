// Store page data.

export const storeBanner = {
  name: 'Creativilo Official Flagship Store',
  url: 'https://store.creativilo.com',
  meta: 'SSL Active • 99.98% Uptime',
};

export const gateways = [
  { icon: 'fa-brands fa-stripe', wrap: 'bg-[#635bff]/10 text-[#635bff]', name: 'Stripe Checkout', desc: 'Instant Credit Card & Apple Pay', toast: 'Stripe gateway status updated' },
  { icon: 'fa-brands fa-paypal', wrap: 'bg-[#00457C]/10 text-[#00457C]', name: 'PayPal Express', desc: 'Global Buyer Protection', toast: 'PayPal Express status updated' },
];

export const promos = [
  { code: 'CREATIVILO25', desc: '25% OFF Orders over $150 • 342 redemptions', row: 'bg-[#effbe3]', codeText: 'text-[#56a710]', badge: 'bg-white text-[#56a710]', status: 'Active' },
  { code: 'FREESHIP2022', desc: 'Free Express Worldwide Shipping • 819 redemptions', row: 'bg-[#fef9ec]', codeText: 'text-[#d99b16]', badge: 'bg-white text-[#d99b16]', status: 'Active' },
];
