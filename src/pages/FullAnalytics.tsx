import React from 'react';
import { 
  Plus, 
  ArrowUpRight, 
  ArrowDownRight, 
  Filter, 
  Download, 
  Maximize2,
  Calendar,
  Layers,
  Zap,
  Target,
  BarChart3,
  Search,
  FileSearch,
  Database
} from 'lucide-react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  ComposedChart,
  Line,
  Area,
  ScatterChart,
  Scatter,
  ZAxis
} from 'recharts';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { toast } from 'sonner';

const benchmarkData = [
  { name: 'Jan', revenue: 4000, target: 3000, efficiency: 85 },
  { name: 'Feb', revenue: 3000, target: 3200, efficiency: 72 },
  { name: 'Mar', revenue: 5000, target: 3500, efficiency: 91 },
  { name: 'Apr', revenue: 4780, target: 3800, efficiency: 88 },
  { name: 'May', revenue: 6890, target: 4000, efficiency: 95 },
  { name: 'Jun', revenue: 7390, target: 4200, efficiency: 98 },
];

const dotData = [
  { x: 10, y: 30, z: 200, name: 'Cloud' },
  { x: 120, y: 100, z: 260, name: 'AI' },
  { x: 170, y: 300, z: 400, name: 'Design' },
  { x: 140, y: 250, z: 280, name: 'Apps' },
  { x: 150, y: 400, z: 500, name: 'SaaS' },
  { x: 110, y: 280, z: 200, name: 'Security' },
];

export const FullAnalytics = () => {
  const handlePredictiveScan = () => {
    toast.success("Strategic Scan Completed", {
      description: "AI engine has projected +18% growth for Q3 based on current velocity.",
      icon: <Zap className="text-brand-blue" size={18} />
    });
  };

  const handleDownload = () => {
    toast.info("Database Export Started", {
      description: "Compiling strategic datasets into secure ZIP archive.",
      icon: <Database className="text-brand-blue" size={18} />
    });
  };

  const handleFullscreen = () => {
    toast.info("Immersive View Requested", {
      description: "Adapting visualization matrix for large-scale presentation."
    });
  };

  return (
    <div className="p-8 space-y-8 animate-in fade-in duration-700 bg-brand-bg h-full overflow-auto">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight text-brand-text mb-1">Advanced Analytics</h1>
          <p className="text-brand-muted text-sm font-medium">Deep-intelligence forecasting and operational benchmarking.</p>
        </div>
        <div className="flex items-center gap-3">
          <Tabs defaultValue="overview" className="w-[300px]" onValueChange={(v) => toast.info(`View switched to ${v}`)}>
            <TabsList className="bg-white/50 backdrop-blur-sm rounded-xl p-1 h-10 border border-brand-border">
              <TabsTrigger value="overview" className="text-[10px] font-bold rounded-lg px-4 truncate h-8">Overview</TabsTrigger>
              <TabsTrigger value="predictive" className="text-[10px] font-bold rounded-lg px-4 truncate h-8">Predictive</TabsTrigger>
              <TabsTrigger value="growth" className="text-[10px] font-bold rounded-lg px-4 truncate h-8">Growth</TabsTrigger>
            </TabsList>
          </Tabs>
          <Button onClick={handleFullscreen} variant="outline" className="glass border-brand-border h-10 w-10 p-0">
            <Maximize2 size={18} />
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <Card className="glass-card p-6 border-b-4 border-blue-500">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-blue-50 text-blue-600 rounded-lg"><Target size={18}/></div>
            <p className="text-[10px] font-bold text-brand-muted uppercase tracking-widest leading-none">Goal Progress</p>
          </div>
          <div className="flex items-baseline gap-2">
             <p className="text-2xl font-black text-brand-text">₹82.4L</p>
             <p className="text-[10px] font-bold text-brand-muted">/ ₹1.2Cr Target</p>
          </div>
          <div className="w-full bg-brand-bg h-2 rounded-full mt-4 overflow-hidden">
             <div className="bg-blue-500 h-full w-[68%] rounded-full shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
          </div>
        </Card>

        <Card className="glass-card p-6 border-b-4 border-violet-500">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-violet-50 text-violet-600 rounded-lg"><Zap size={18}/></div>
            <p className="text-[10px] font-bold text-brand-muted uppercase tracking-widest leading-none">Burn Rate</p>
          </div>
          <p className="text-2xl font-black text-brand-text">₹1.8L <span className="text-sm font-medium text-brand-muted">/mo</span></p>
          <p className="text-[10px] text-emerald-600 font-bold mt-2 uppercase">Efficient • 12% lower than Q1</p>
        </Card>

        <Card className="glass-card p-6 border-b-4 border-emerald-500">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-emerald-50 text-emerald-600 rounded-lg"><Layers size={18}/></div>
            <p className="text-[10px] font-bold text-brand-muted uppercase tracking-widest leading-none">CLV Index</p>
          </div>
          <p className="text-2xl font-black text-brand-text">₹14.2L</p>
          <p className="text-[10px] text-brand-blue font-bold mt-2 uppercase">↑ 24% Retention Growth</p>
        </Card>

        <Card className="glass-card p-6 border-b-4 border-amber-500">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-amber-50 text-amber-600 rounded-lg"><ArrowUpRight size={18}/></div>
            <p className="text-[10px] font-bold text-brand-muted uppercase tracking-widest leading-none">CAGR Forecast</p>
          </div>
          <p className="text-2xl font-black text-brand-text">32.4%</p>
          <p className="text-[10px] text-amber-600 font-bold mt-2 uppercase">Strategic AI Expansion</p>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card className="glass-card p-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h3 className="font-extrabold text-xl text-brand-text">Market Penetration</h3>
              <p className="text-xs text-brand-muted font-bold font-mono">SEGMENT VELOCITY vs MARKET CAP</p>
            </div>
            <Button onClick={handleDownload} variant="outline" size="sm" className="h-8 text-[10px] font-bold border-brand-border rounded-lg">
               Download Dataset
            </Button>
          </div>
          <div className="h-[400px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <ScatterChart margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(0,0,0,0.03)" />
                <XAxis type="number" dataKey="x" name="Efficiency" unit="%" axisLine={false} tickLine={false} tick={{fill: 'var(--color-brand-muted)', fontSize: 10, fontWeight: 700}} />
                <YAxis type="number" dataKey="y" name="Revenue" unit="k" axisLine={false} tickLine={false} tick={{fill: 'var(--color-brand-muted)', fontSize: 10, fontWeight: 700}}/>
                <ZAxis type="number" dataKey="z" range={[60, 400]} name="Market Size" />
                <Tooltip 
                   cursor={{ strokeDasharray: '3 3' }} 
                   contentStyle={{ backgroundColor: '#fff', border: 'none', borderRadius: '12px', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)' }}
                />
                <Scatter name="Services" data={dotData} fill="var(--color-brand-blue)" />
              </ScatterChart>
            </ResponsiveContainer>
          </div>
        </Card>

        <Card className="glass-card p-8">
           <div className="flex items-center justify-between mb-8">
            <div>
              <h3 className="font-extrabold text-xl text-brand-text">Benchmark Trends</h3>
              <p className="text-xs text-brand-muted font-bold font-mono">REVENUE vs TARGET vs EFFICIENCY %</p>
            </div>
          </div>
          <div className="h-[400px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <ComposedChart data={benchmarkData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(0,0,0,0.03)" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: 'var(--color-brand-muted)', fontSize: 10, fontWeight: 700}} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: 'var(--color-brand-muted)', fontSize: 10, fontWeight: 700}} />
                <Tooltip contentStyle={{ backgroundColor: '#fff', borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)' }} />
                <Bar dataKey="revenue" fill="var(--color-brand-blue)" radius={[6, 6, 0, 0]} barSize={40} />
                <Line type="monotone" dataKey="target" stroke="#64748B" strokeWidth={2} dot={{fill: '#64748B', r: 4}} />
                <Line type="monotone" dataKey="efficiency" stroke="#10B981" strokeWidth={2} dot={{fill: '#10B981', r: 4}} />
              </ComposedChart>
            </ResponsiveContainer>
          </div>
        </Card>
      </div>

      <div className="pb-8">
         <Card className="glass-card p-6 bg-gradient-to-r from-blue-500/5 to-transparent border-brand-blue/20">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
               <div className="flex-1">
                  <h3 className="font-bold text-brand-text mb-2 flex items-center gap-2">
                    <Zap size={20} className="text-brand-blue" /> AI Analysis Mode
                  </h3>
                  <p className="text-sm text-brand-muted font-medium leading-relaxed">
                     Switch to predictive mode to see AI-generated revenue projections for the next 4 quarters based on historical pipeline conversion and seasonal trends.
                  </p>
               </div>
               <Button 
                onClick={handlePredictiveScan}
                className="bg-brand-blue text-white font-bold h-12 px-8 rounded-xl hover:bg-brand-blue/90 shadow-lg shadow-brand-blue/20"
               >
                  Run Predictive Scan
               </Button>
            </div>
         </Card>
      </div>
    </div>
  );
};
