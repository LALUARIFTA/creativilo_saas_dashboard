// Global app config — edit branding, profile, and notifications here.
// No component code needs to change to rebrand this template.

export const app = {
  brand: 'Creativilo',
  footer: '@ARSoft.com 2022',
  searchPlaceholder: 'Search',

  profile: {
    name: 'John Doe',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    avatarFallback: 'https://placehold.co/120x120/313931/ffffff?text=JD',
    // Three-column metric row under the name.
    stats: [
      { value: '1.8K', label: 'Products' },
      { value: '3.2M', label: 'Followers' },
      { value: '75.2K', label: 'Sales' },
    ],
    sessionRevenue: '$4,820.00',
  },

  // Destination accounts shown in the Withdraw modal.
  accounts: [
    'Chase Business Checking (•••• 4829)',
    'Stripe Instant Payout Card (•••• 9910)',
  ],

  // Items inside the bell dropdown.
  notifications: [
    { title: 'New Order #2020912', meta: '2 minutes ago • -$299,89' },
    { title: 'Payout Ready ($95,000)', meta: '1 hour ago • Earning Wallet' },
  ],
};
