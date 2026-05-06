import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import { 
  TrendingUp, 
  TrendingDown, 
  Users, 
  CreditCard, 
  DollarSign, 
  ArrowUpRight,
  ArrowDownRight,
  Calendar,
  Sparkles,
  ChevronRight,
  Plus,
  CheckCircle2,
  FileDown
} from 'lucide-react';
import { StatCard } from '@/components/dashboard/StatCard';
import { cn } from '@/lib/utils';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  AreaChart,
  Area
} from 'recharts';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { ScrollArea } from '@/components/ui/scroll-area';
import { ROUTES } from '@/constants';

const data = [
  { name: 'Jan', revenue: 45000, expenses: 32000 },
  { name: 'Feb', revenue: 52000, expenses: 35000 },
  { name: 'Mar', revenue: 48000, expenses: 31000 },
  { name: 'Apr', revenue: 61000, expenses: 42000 },
  { name: 'May', revenue: 55000, expenses: 38000 },
  { name: 'Jun', revenue: 67000, expenses: 45000 },
];

const cashflowData = [
  { date: '01 May', value: 40000 },
  { date: '05 May', value: 45000 },
  { date: '10 May', value: 42000 },
  { date: '15 May', value: 58000 },
  { date: '20 May', value: 52000 },
  { date: '25 May', value: 65000 },
  { date: '30 May', value: 68000 },
];

const recentInvoices = [
  { id: 'INV-001', client: 'Nexus Digital', amount: '$4,500', status: 'Paid', date: 'May 24, 2026' },
  { id: 'INV-002', client: 'Quantum Labs', amount: '$12,800', status: 'Pending', date: 'May 22, 2026' },
  { id: 'INV-003', client: 'Stellar Solutions', amount: '$2,400', status: 'Overdue', date: 'May 15, 2026' },
  { id: 'INV-004', client: 'Aether Corp', amount: '$7,200', status: 'Paid', date: 'May 10, 2026' },
];

export const Dashboard = () => {
  const navigate = useNavigate();

  const handleGenerateReport = () => {
    toast.success("Strategic Report Generating", {
      description: "Compiling real-time data into your Q2 performance summary.",
      icon: <FileDown className="text-brand-blue" size={18} />
    });
  };

  const handleViewLedger = () => navigate(ROUTES.INVOICES);
  const handleAskAI = () => navigate(ROUTES.AI_ASSISTANT);
  const handleDateFilter = () => {
    toast.info("Temporal Filter Updated", {
      description: "Displaying metrics for Q2 FY2026 environment."
    });
  };

  return (
    <div className="p-8 h-full flex flex-col gap-8 animate-in fade-in duration-700 bg-brand-bg overflow-auto">
      {/* Header section */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight text-brand-text mb-1">Portfolio Highlights</h1>
          <p className="text-brand-muted text-sm font-medium">Real-time performance metrics for ABILIX Solutions.</p>
        </div>
        <div className="flex items-center gap-3">
          <Button 
            onClick={handleDateFilter}
            variant="outline" 
            className="glass border-brand-border text-brand-text hover:bg-white gap-2 font-bold shadow-sm"
          >
            <Calendar size={18} />
            Q2 FY2026
          </Button>
          <Button 
            onClick={handleGenerateReport}
            className="bg-brand-blue hover:bg-brand-blue/90 text-white gap-2 shadow-lg shadow-brand-blue/20 px-6 font-bold"
          >
            <Plus size={18} />
            Generate Report
          </Button>
        </div>
      </div>

      {/* Bento Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pb-8">
        
        {/* Revenue Analytics - span-2-3 equivalent */}
        <div className="lg:col-span-2 lg:row-span-2">
          <Card className="glass-card h-full p-6 flex flex-col">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-brand-muted text-xs font-bold tracking-widest uppercase">Revenue Analytics</h3>
              <span className="text-emerald-500 font-bold text-xs flex items-center gap-1">
                <ArrowUpRight size={14} /> +14.2%
              </span>
            </div>
            <div className="text-3xl font-extrabold text-brand-text mb-6">₹48,25,000.00</div>
            <div className="flex-1 mt-auto">
               <div className="h-[240px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={data} margin={{ top: 0, right: 0, left: -20, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(0,0,0,0.03)" />
                    <XAxis 
                      dataKey="name" 
                      axisLine={false} 
                      tickLine={false} 
                      tick={{ fill: 'var(--color-brand-muted)', fontSize: 10, fontWeight: 600 }}
                      dy={10}
                    />
                    <YAxis 
                      axisLine={false} 
                      tickLine={false} 
                      tick={{ fill: 'var(--color-brand-muted)', fontSize: 10, fontWeight: 600 }}
                    />
                    <Tooltip 
                      cursor={{fill: 'rgba(37, 99, 235, 0.05)'}}
                      contentStyle={{ backgroundColor: '#fff', border: '1px solid var(--color-brand-border)', borderRadius: '12px', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)' }}
                    />
                    <Bar dataKey="revenue" fill="var(--color-brand-blue)" radius={[6, 6, 0, 0]} barSize={32} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </Card>
        </div>

        {/* AI Assistant Widget - span-1-2 equivalent */}
        <div className="lg:col-span-1 lg:row-span-1">
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="glass-card h-full ai-card-gradient p-6 flex flex-col"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-brand-blue animate-pulse" />
                <h3 className="text-brand-muted text-xs font-bold tracking-widest uppercase">AI Assistant</h3>
              </div>
            </div>
            <div className="bg-white p-4 rounded-xl border border-blue-100 shadow-sm mb-4">
              <p className="text-xs text-brand-text leading-relaxed font-medium">
                <strong>Strategic Alert:</strong> Your cash flow forecast predicts a ₹5L surplus next month. We recommend allocating ₹2L to R&D for the new AI module.
              </p>
            </div>
            <Button 
              onClick={handleAskAI}
              className="mt-auto w-full bg-brand-blue text-white font-bold h-10 rounded-xl hover:bg-brand-blue/90 shadow-md shadow-brand-blue/10"
            >
              Ask ABILIX
            </Button>
          </motion.div>
        </div>

        {/* Pending Payments - span-1-1 */}
        <StatCard 
          title="Pending Payments" 
          value="₹3,42,000" 
          change="12 Overdue" 
          trend="down" 
          icon={CreditCard} 
          color="rose-500"
          delay={0.1}
        />

        {/* Net Profit - span-1-1 */}
        <StatCard 
          title="Net Profit" 
          value="32.4%" 
          change="4.1% ↑" 
          trend="up" 
          icon={TrendingUp} 
          color="emerald-500"
          delay={0.2}
        />

        {/* Recent Billing Activity - span-2-3 equivalent but here 2x1 for simplicity or nested */}
        <div className="lg:col-span-2">
          <Card className="glass-card p-6 h-full">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-brand-muted text-xs font-bold tracking-widest uppercase">Recent Billing Activity</h3>
              <Button 
                onClick={handleViewLedger}
                variant="link" 
                className="text-brand-blue text-xs p-0 gap-1 font-bold"
              >
                View Ledger <ChevronRight size={14} />
              </Button>
            </div>
            <div className="space-y-4">
              {recentInvoices.map((invoice, idx) => (
                <div key={idx} className="group flex items-center justify-between p-3 rounded-xl hover:bg-brand-bg transition-all border border-transparent hover:border-brand-border cursor-pointer" onClick={handleViewLedger}>
                  <div className="flex items-center gap-4">
                    <Avatar className="h-10 w-10 border border-brand-border bg-white text-xs font-bold shadow-sm">
                      <AvatarFallback className="text-brand-muted">{invoice.client.substring(0, 2)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-bold text-sm text-brand-text group-hover:text-brand-blue transition-colors">{invoice.client}</p>
                      <p className="text-[10px] text-brand-muted font-bold tracking-wider uppercase">{invoice.id}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-sm text-brand-text tracking-tight mb-1">{invoice.amount.replace('$', '₹')}</p>
                    <Badge className={cn(
                      "text-[9px] px-2 py-0 border-none font-extrabold uppercase tracking-tighter shadow-sm",
                      invoice.status === 'Paid' ? "bg-emerald-500 text-white" : 
                      invoice.status === 'Overdue' ? "bg-rose-500 text-white" : 
                      "bg-amber-500 text-white"
                    )}>
                      {invoice.status}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Cash on Hand - span-1-1 */}
        <StatCard 
          title="Cash on Hand" 
          value="₹18.4L" 
          change="Updated 5m ago" 
          trend="neutral" 
          icon={DollarSign} 
          delay={0.3}
        />

      </div>
    </div>
  );
};
