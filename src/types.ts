export interface Client {
  id: string;
  name: string;
  email: string;
  phone: string;
  company: string;
  address: string;
  gstNumber?: string;
  status: 'active' | 'inactive';
  createdAt: string;
}

export interface Project {
  id: string;
  clientId: string;
  title: string;
  description: string;
  status: 'planning' | 'in-progress' | 'completed' | 'on-hold';
  budget: number;
}

export interface Invoice {
  id: string;
  invoiceNumber: string;
  clientId: string;
  issueDate: string;
  dueDate: string;
  items: InvoiceItem[];
  subtotal: number;
  tax: number;
  total: number;
  status: 'paid' | 'unpaid' | 'partially-paid' | 'overdue' | 'draft';
  type: 'invoice' | 'quotation';
}

export interface InvoiceItem {
  id: string;
  description: string;
  quantity: number;
  unitPrice: number;
  total: number;
}

export interface Expense {
  id: string;
  category: string;
  amount: number;
  date: string;
  description: string;
  merchant: string;
  receiptUrl?: string;
  paymentMethod: 'card' | 'cash' | 'bank-transfer';
}

export interface Transaction {
  id: string;
  type: 'income' | 'expense';
  amount: number;
  date: string;
  description: string;
  category: string;
  referenceId?: string; // ClientId or ExpenseId
}
