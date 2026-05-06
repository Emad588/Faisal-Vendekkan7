export const ROUTES = {
  DASHBOARD: '/',
  CLIENTS: '/clients',
  INVOICES: '/invoices',
  QUOTATIONS: '/quotations',
  EXPENSES: '/expenses',
  INCOME: '/income',
  EMPLOYEES: '/employees',
  ANALYTICS: '/analytics',
  SETTINGS: '/settings',
  AI_ASSISTANT: '/ai-assistant',
};

export const NAVIGATION_ITEMS = [
  { name: 'Dashboard', path: ROUTES.DASHBOARD, icon: 'LayoutDashboard' },
  { name: 'Clients', path: ROUTES.CLIENTS, icon: 'Users' },
  { name: 'Quotations', path: ROUTES.QUOTATIONS, icon: 'FileText' },
  { name: 'Invoices', path: ROUTES.INVOICES, icon: 'ReceiptText' },
  { name: 'Expenses', path: ROUTES.EXPENSES, icon: 'TrendingUp' },
  { name: 'Income', path: ROUTES.INCOME, icon: 'TrendingDown' },
  { name: 'Employees', path: ROUTES.EMPLOYEES, icon: 'UserCircle' },
  { name: 'AI Assistant', path: ROUTES.AI_ASSISTANT, icon: 'Bot' },
  { name: 'Analytics', path: ROUTES.ANALYTICS, icon: 'BarChart3' },
  { name: 'Settings', path: ROUTES.SETTINGS, icon: 'Settings' },
];
