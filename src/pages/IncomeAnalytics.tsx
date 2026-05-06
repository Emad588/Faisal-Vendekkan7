import React from 'react';
import { 
  TrendingUp, 
  ArrowUpRight, 
  ArrowDownRight, 
  Download, 
  PieChart as PieChartIcon, 
  Calendar,
  Filter,
  CheckCircle2,
  AlertCircle,
  BanknoteIcon
} from 'lucide-react';
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  Legend
} from 'recharts';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';

const earningsData = [
  { name: 'Jan', amount: 450000, expenses: 120000 },
  { name: 'Feb', amount: 520000, expenses: 150000 },
  { name: 'Mar', amount: 480000, expenses: 130000 },
  { name: 'Apr', amount: 610000, expenses: 180000 },
  { name: 'May', amount: 750000, expenses: 210000 },
  { name: 'Jun', amount: 820000, expenses: 230000 },
];

const serviceMix = [
  { name: 'AI Automation', value: 45, color: '#2563EB' },
  { name: 'Cloud Migration', value: 25, color: '#3B82F6' },
  { name: 'Mobile Apps', value: 20, color: '#60A5FA' },
  { name: 'UI/UX Design', value: 10, color: '#93C5FD' },
];

export const IncomeAnalytics = () => {
  return (
    <div className="p-8 space-y-8 animate-in fade-in duration-500 bg-brand-bg h-full overflow-auto">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight text-brand-text mb-1">Financial Settlements</h1>
          <p className="text-brand-muted text-sm font-medium">Detailed breakdown of revenue flows, client settlements, and net margins.</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="glass border-brand-border text-brand-text gap-2 font-bold px-6 shadow-sm">
            <Calendar size={18} /> FY 2026
          </Button>
          <Button className="bg-brand-blue hover:bg-brand-blue/90 text-white gap-2 shadow-lg shadow-brand-blue/20 px-6 font-bold">
            <Download size={18} /> Export PDF
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="glass-card p-6 border-l-4 border-emerald-500">
          <p className="text-[10px] uppercase font-bold text-brand-muted tracking-widest mb-1">Settled Income</p>
          <p className="text-3xl font-extrabold text-brand-text leading-none">₹32,45,000</p>
          <div className="mt-4 flex items-center gap-1 text-[10px] text-emerald-600 font-bold uppercase">
             <ArrowUpRight size={14} /> +12% from Q1
          </div>
        </Card>
        <Card className="glass-card p-6 border-l-4 border-brand-blue">
          <p className="text-[10px] uppercase font-bold text-brand-muted tracking-widest mb-1">Average Ticket</p>
          <p className="text-3xl font-extrabold text-brand-text leading-none">₹1,82,450</p>
          <div className="mt-4 flex items-center gap-1 text-[10px] text-brand-blue font-bold uppercase tracking-tighter">
             High Val. Service Priority
          </div>
        </Card>
        <Card className="glass-card p-6 border-l-4 border-amber-500">
          <p className="text-[10px] uppercase font-bold text-brand-muted tracking-widest mb-1">Outstanding</p>
          <p className="text-3xl font-extrabold text-brand-text leading-none">₹8,12,000</p>
          <div className="mt-4 flex items-center gap-1 text-[10px] text-amber-600 font-bold uppercase underline">
             View 15 Aging Invoices
          </div>
        </Card>
        <Card className="glass-card p-6 border-l-4 border-indigo-500">
          <p className="text-[10px] uppercase font-bold text-brand-muted tracking-widest mb-1">Tax Provision</p>
          <p className="text-3xl font-extrabold text-brand-text leading-none">₹4,20,000</p>
          <div className="mt-4 flex items-center gap-1 text-[10px] text-indigo-600 font-bold uppercase">
             GST Filing Due June 20
          </div>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <Card className="lg:col-span-2 glass-card p-6">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h3 className="font-bold text-lg text-brand-text">Revenue Velocity</h3>
              <p className="text-xs text-brand-muted font-medium">Income vs Realized Net Profit (Monthly)</p>
            </div>
            <Tabs defaultValue="6m" className="w-[180px]">
              <TabsList className="bg-brand-bg rounded-xl p-1 h-9 border border-brand-border">
                <TabsTrigger value="3m" className="text-[10px] font-bold rounded-lg h-7">3M</TabsTrigger>
                <TabsTrigger value="6m" className="text-[10px] font-bold rounded-lg h-7">6M</TabsTrigger>
                <TabsTrigger value="1y" className="text-[10px] font-bold rounded-lg h-7">1Y</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
          <div className="h-[350px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={earningsData}>
                <defs>
                  <linearGradient id="colorIncome" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#2563EB" stopOpacity={0.1}/>
                    <stop offset="95%" stopColor="#2563EB" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(0,0,0,0.02)" />
                <XAxis 
                  dataKey="name" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fill: 'var(--color-brand-muted)', fontSize: 10, fontWeight: 700 }}
                  dy={10}
                />
                <YAxis 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fill: 'var(--color-brand-muted)', fontSize: 10, fontWeight: 700 }}
                />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#fff', border: '1px solid var(--color-brand-border)', borderRadius: '12px', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)' }}
                  labelStyle={{ fontWeight: 800, color: 'var(--color-brand-text)', marginBottom: '4px' }}
                />
                <Area 
                  type="monotone" 
                  dataKey="amount" 
                  stroke="#2563EB" 
                  strokeWidth={3} 
                  fillOpacity={1} 
                  fill="url(#colorIncome)" 
                  name="Gross Revenue"
                />
                <Area 
                  type="monotone" 
                  dataKey="expenses" 
                  stroke="#64748B" 
                  strokeWidth={2} 
                  strokeDasharray="5 5"
                  fill="transparent"
                  name="Operational Cost"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </Card>

        <Card className="glass-card p-6 flex flex-col">
          <div className="mb-8">
            <h3 className="font-bold text-lg text-brand-text">Portfolio Mix</h3>
            <p className="text-xs text-brand-muted font-medium">Revenue by Service Category</p>
          </div>
          <div className="flex-1 flex flex-col justify-center">
            <div className="h-[250px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={serviceMix}
                    innerRadius={60}
                    outerRadius={80}
                    paddingAngle={8}
                    dataKey="value"
                  >
                    {serviceMix.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip 
                    contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)' }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="space-y-3 mt-4">
              {serviceMix.map((item, idx) => (
                <div key={idx} className="flex items-center justify-between group cursor-pointer hover:bg-brand-bg p-2 rounded-xl transition-all">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: item.color }} />
                    <span className="text-xs font-bold text-brand-text">{item.name}</span>
                  </div>
                  <span className="text-xs font-bold text-brand-muted tracking-widest">{item.value}%</span>
                </div>
              ))}
            </div>
          </div>
          <Button className="mt-8 w-full glass border-brand-border text-brand-text font-bold h-11 hover:bg-brand-bg shadow-sm">
            Service Deep Dive
          </Button>
        </Card>
      </div>
    </div>
  );
};
