// Reports page data.

export const reportPeriods = ['April 2022 (Current)', 'Q1 2022 Summary', 'Full Year 2021'];

// rev/exp are bar heights as percentages of the chart column.
export const profitMonths = [
  { month: 'Nov', rev: 65, exp: 30 },
  { month: 'Dec', rev: 78, exp: 35 },
  { month: 'Jan', rev: 70, exp: 28 },
  { month: 'Feb', rev: 84, exp: 32 },
  { month: 'Mar', rev: 90, exp: 36 },
  { month: 'Apr', rev: 95, exp: 34, current: true },
];

export const reportsData = [
  { id: 'REP-01', title: 'April 2022 Monthly Revenue Statement', type: 'PDF • 2.4 MB', date: 'Apr 29, 2022' },
  { id: 'REP-02', title: 'Q1 2022 Corporate Tax & VAT Ledger', type: 'CSV • 1.8 MB', date: 'Apr 15, 2022' },
  { id: 'REP-03', title: 'Multi-Outlet Inventory Valuation Audit', type: 'PDF • 4.1 MB', date: 'Apr 02, 2022' },
  { id: 'REP-04', title: 'Stripe & PayPal Payout Reconciliation', type: 'CSV • 940 KB', date: 'Mar 31, 2022' },
];
