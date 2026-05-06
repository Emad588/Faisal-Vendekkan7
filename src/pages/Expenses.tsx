import React from 'react';
import { 
  TrendingDown, 
  Plus, 
  ArrowUpRight, 
  ArrowDownRight, 
  Search, 
  Filter,
  PieChart as PieIcon,
  Tag,
  Calendar,
  Receipt
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { 
  PieChart, 
  Pie, 
  Cell, 
  ResponsiveContainer, 
  Tooltip,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid
} from 'recharts';

const expenseCategories = [
  { name: 'Marketing', value: 4500, color: '#3B82F6' },
  { name: 'Cloud Services', value: 8200, color: '#06B6D4' },
  { name: 'Office Rent', value: 12000, color: '#8B5CF6' },
  { name: 'Salaries', value: 25000, color: '#EC4899' },
  { name: 'Equipment', value: 3400, color: '#F59E0B' },
];

const transactions = [
  { id: 'TXN-001', date: 'May 24, 2026', category: 'Cloud Services', merchant: 'AWS', amount: '-$1,240.00', type: 'expense' },
  { id: 'TXN-002', date: 'May 23, 2026', category: 'Software', merchant: 'Slack Technologies', amount: '-$450.00', type: 'expense' },
  { id: 'TXN-003', date: 'May 22, 2026', category: 'Income', merchant: 'Project Settlement: Quantum', amount: '+$5,000.00', type: 'income' },
  { id: 'TXN-004', date: 'May 21, 2026', category: 'Marketing', merchant: 'Google Ads', amount: '-$890.00', type: 'expense' },
  { id: 'TXN-005', date: 'May 20, 2026', category: 'Utilities', merchant: 'City Power & Water', amount: '-$320.00', type: 'expense' },
];

export const Expenses = () => {
  return (
    <div className="p-8 space-y-8 animate-in fade-in duration-500 bg-brand-bg h-full overflow-auto">
       <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight text-brand-text mb-1">Expense Tracking</h1>
          <p className="text-brand-muted text-sm font-medium">Categorized view of company overheads and recurring outflows.</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="glass border-brand-border text-brand-text gap-2 font-bold px-6 h-11">
            <Receipt size={18} />
            Scan Receipt
          </Button>
          <Button className="bg-brand-blue hover:bg-brand-blue/90 text-white gap-2 shadow-lg shadow-brand-blue/20 px-6 font-bold h-11">
            <Plus size={18} />
            New Entry
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="glass-card p-6">
          <p className="text-[10px] uppercase font-bold text-brand-muted tracking-widest mb-1">Total Burn</p>
          <p className="text-2xl font-bold text-brand-text">₹4.2L</p>
        </Card>
        <Card className="glass-card p-6">
          <p className="text-[10px] uppercase font-bold text-brand-muted tracking-widest mb-1">Pending Sync</p>
          <p className="text-2xl font-bold text-brand-text">₹12,450</p>
        </Card>
        <Card className="glass-card p-6">
          <p className="text-[10px] uppercase font-bold text-brand-muted tracking-widest mb-1">Largest Category</p>
          <p className="text-lg font-bold text-brand-text">Cloud Infra</p>
        </Card>
        <Card className="glass-card p-6">
          <p className="text-[10px] uppercase font-bold text-brand-muted tracking-widest mb-1">Next Bill</p>
          <p className="text-lg font-bold text-brand-blue">May 30, 2026</p>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Category Breakdown */}
        <Card className="glass-card p-6 lg:col-span-1">
          <CardHeader className="p-0 mb-6">
            <CardTitle className="text-lg font-extrabold text-brand-text">Category Distribution</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <div className="h-[250px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={expenseCategories}
                    innerRadius={60}
                    outerRadius={80}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {expenseCategories.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} stroke="none" />
                    ))}
                  </Pie>
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#fff', border: '1px solid var(--color-brand-border)', borderRadius: '12px', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)' }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="space-y-3 mt-8">
              {expenseCategories.map((cat, i) => (
                <div key={i} className="flex items-center justify-between text-sm group cursor-pointer hover:bg-brand-bg p-2 rounded-xl transition-all">
                  <div className="flex items-center gap-3">
                    <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: cat.color }} />
                    <span className="text-brand-muted font-bold tracking-tight">{cat.name}</span>
                  </div>
                  <span className="font-mono font-bold text-brand-text">₹{cat.value.toLocaleString()}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Recent Transactions List */}
        <Card className="glass-card lg:col-span-2">
          <CardHeader className="flex flex-row items-center justify-between border-b border-brand-border p-6">
            <CardTitle className="text-lg font-extrabold text-brand-text">Transaction Ledger</CardTitle>
            <div className="flex items-center gap-2">
              <Input placeholder="Filter ledger..." className="h-9 w-48 bg-brand-bg border-brand-border text-xs focus-visible:ring-brand-blue" />
              <Button size="icon" variant="ghost" className="h-9 w-9 text-brand-muted hover:text-brand-blue"><Filter size={14} /></Button>
            </div>
          </CardHeader>
          <CardContent className="p-0">
            <div className="space-y-0 text-sm">
              {transactions.map((txn, i) => (
                <div key={i} className="flex items-center justify-between p-6 border-b border-brand-bg hover:bg-brand-bg transition-all group">
                  <div className="flex items-center gap-5">
                    <div className={cn(
                      "p-3 rounded-2xl shadow-sm transition-all group-hover:scale-110",
                      txn.type === 'income' ? 'bg-emerald-50 text-emerald-600' : 'bg-rose-50 text-rose-600'
                    )}>
                      {txn.type === 'income' ? <ArrowUpRight size={20} /> : <ArrowDownRight size={20} />}
                    </div>
                    <div>
                      <p className="font-extrabold text-brand-text">{txn.merchant}</p>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-[10px] text-brand-muted uppercase font-bold tracking-widest">{txn.date}</span>
                        <span className="text-brand-border">•</span>
                        <div className="flex items-center gap-1.5 bg-brand-bg px-2 py-0.5 rounded-full">
                          <Tag size={10} className="text-brand-muted" />
                          <span className="text-[10px] text-brand-muted font-bold uppercase tracking-tighter">{txn.category}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className={cn(
                      "font-mono font-bold text-lg tracking-tighter",
                      txn.type === 'income' ? 'text-emerald-600' : 'text-brand-text'
                    )}>
                      {txn.amount.replace('$', '₹')}
                    </p>
                    <Badge variant="outline" className="text-[9px] border-brand-border font-bold uppercase py-0 px-2 text-brand-muted">Verified</Badge>
                  </div>
                </div>
              ))}
            </div>
            <div className="p-6 text-center border-t border-brand-bg">
              <Button variant="ghost" className="text-[11px] text-brand-blue font-bold tracking-widest uppercase hover:bg-brand-bg">
                Load Historical Archives
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

