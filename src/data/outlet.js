// Outlet page data (physical branches & stock transfers).

export const outlets = [
  {
    name: 'Manhattan Flagship Hub',
    address: '450 Broadway, New York, NY',
    sales: '$14,280',
    staff: '16',
    stockHealth: '96%',
    healthAccent: 'text-[#6cc61c]',
    border: 'border-[#6cc61c]',
    toast: 'Synced POS terminals for Manhattan Flagship Hub',
  },
  {
    name: 'Westside Mall Express',
    address: '10250 Santa Monica Blvd, LA',
    sales: '$9,640',
    staff: '11',
    stockHealth: '82%',
    healthAccent: 'text-[#f7b928]',
    border: 'border-[#f7b928]',
    toast: 'Synced POS terminals for Westside Mall Express',
  },
];

export const transfers = [
  { id: 'TR-8821', item: '120x AirPulse Pro Max', route: 'From Central Warehouse → Westside Mall Express', status: 'In Transit', badge: 'bg-[#e8fbf7] text-[#33bca0]' },
  { id: 'TR-8819', item: '85x Chrono Smart Watch S8', route: 'From Central Warehouse → Manhattan Flagship Hub', status: 'Delivered', badge: 'bg-[#effbe3] text-[#6cc61c]' },
];
