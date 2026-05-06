import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Users, 
  FileText, 
  ReceiptText, 
  TrendingUp, 
  TrendingDown, 
  UserCircle, 
  Bot, 
  BarChart3, 
  Settings,
  Bell,
  Search,
  Menu,
  X,
  Plus
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { ROUTES, NAVIGATION_ITEMS } from '@/constants';
import { Button } from '@/components/ui/button.tsx';
import { ScrollArea } from '@/components/ui/scroll-area.tsx';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar.tsx';
import { Toaster } from '@/components/ui/sonner.tsx';

// Real Pages
import { Dashboard } from '@/pages/Dashboard';
import { AIAssistant } from '@/pages/AIAssistant';
import { ClientsList } from '@/pages/ClientsList';
import { InvoicesList } from '@/pages/InvoicesList';
import { Expenses } from '@/pages/Expenses';
import { SettingsPage } from '@/pages/Settings';
import { QuotationsList } from '@/pages/QuotationsList';
import { EmployeeHub } from '@/pages/EmployeeHub';
import { IncomeAnalytics } from '@/pages/IncomeAnalytics';
import { FullAnalytics } from '@/pages/FullAnalytics';

const IconMap: Record<string, React.ReactNode> = {
  LayoutDashboard: <LayoutDashboard size={20} />,
  Users: <Users size={20} />,
  FileText: <FileText size={20} />,
  ReceiptText: <ReceiptText size={20} />,
  TrendingUp: <TrendingUp size={20} />,
  TrendingDown: <TrendingDown size={20} />,
  UserCircle: <UserCircle size={20} />,
  Bot: <Bot size={20} />,
  BarChart3: <BarChart3 size={20} />,
  Settings: <Settings size={20} />,
};

const Sidebar = () => {
  const location = useLocation();
  
  return (
    <div className="w-64 h-screen bg-brand-dark flex flex-col fixed left-0 top-0 z-50 text-white shadow-2xl">
      <div className="p-8">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center font-bold text-xl shadow-lg border border-blue-400/20">
            A
          </div>
          <div>
            <h1 className="font-extrabold text-xl leading-tight tracking-tighter uppercase">ABILIX</h1>
            <p className="text-[10px] text-white/40 uppercase tracking-[0.3em] font-bold">Finance Hub</p>
          </div>
        </div>
      </div>
      
      <ScrollArea className="flex-1 px-4">
        <nav className="space-y-1">
          {NAVIGATION_ITEMS.map((item) => {
            const isActive = location.pathname === item.path;
            
            return (
              <Link 
                key={item.path}
                to={item.path}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group ${
                  isActive 
                  ? 'bg-white/10 text-white border-l-4 border-brand-blue' 
                  : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                <span className={`${isActive ? 'text-brand-blue' : 'text-slate-500 group-hover:text-white'}`}>
                  {IconMap[item.icon]}
                </span>
                <span className="text-sm font-semibold">{item.name}</span>
                {item.name === 'AI Assistant' && (
                  <span className="ml-auto inline-flex items-center rounded-full bg-blue-500/10 px-2 py-0.5 text-[10px] font-bold text-blue-400 tracking-tighter border border-blue-500/20">
                    AI
                  </span>
                )}
              </Link>
            );
          })}
        </nav>
      </ScrollArea>
      
      <div className="p-6 mt-auto">
        <div className="text-[11px] text-slate-500 font-medium">
          ABILIX &copy; 2024<br/>
          Your Gateway to AI & Digital Growth
        </div>
      </div>
    </div>
  );
};

const Navbar = () => {
  return (
    <header className="h-16 border-b border-brand-border bg-white/70 backdrop-blur-md sticky top-0 z-40 px-8 flex items-center justify-between">
      <div className="flex items-center bg-brand-bg border border-brand-border rounded-xl px-4 py-2 w-96 group focus-within:border-brand-blue focus-within:ring-2 focus-within:ring-brand-blue/10 transition-all duration-300">
        <Search className="text-brand-muted" size={18} />
        <input 
          type="text" 
          placeholder="Search transactions, clients, or invoices..." 
          className="bg-transparent border-none focus:ring-0 text-sm px-3 w-full text-brand-text placeholder:text-brand-muted font-medium"
        />
      </div>
      
      <div className="flex items-center gap-6">
        <Button variant="ghost" size="icon" className="text-brand-muted hover:text-brand-blue hover:bg-brand-bg relative rounded-xl h-10 w-10">
          <Bell size={20} />
          <span className="absolute top-2 right-2 w-2 h-2 bg-rose-500 rounded-full border-2 border-white" />
        </Button>
        <div className="flex items-center gap-3 border-l border-brand-border pl-6">
          <div className="text-right hidden sm:block">
            <p className="text-sm font-bold text-brand-text leading-tight">Aditya Vardhan</p>
            <p className="text-[10px] text-brand-muted font-bold uppercase tracking-wider">Platform Admin</p>
          </div>
          <Avatar className="h-10 w-10 border-2 border-white ring-1 ring-brand-border cursor-pointer shadow-sm">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback className="bg-brand-bg text-brand-text font-bold text-xs">AV</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  );
};

const AppContent = () => {
  const location = useLocation();
  
  return (
    <div className="flex min-h-screen bg-brand-bg text-brand-text font-sans">
      <Sidebar />
      <div className="flex-1 ml-64 flex flex-col">
        <Navbar />
        <main className="flex-1 relative overflow-hidden bg-brand-bg">
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route path={ROUTES.DASHBOARD} element={<Dashboard />} />
              <Route path={ROUTES.CLIENTS} element={<ClientsList />} />
              <Route path={ROUTES.QUOTATIONS} element={<QuotationsList />} />
              <Route path={ROUTES.INVOICES} element={<InvoicesList />} />
              <Route path={ROUTES.EXPENSES} element={<Expenses />} />
              <Route path={ROUTES.INCOME} element={<IncomeAnalytics />} />
              <Route path={ROUTES.EMPLOYEES} element={<EmployeeHub />} />
              <Route path={ROUTES.AI_ASSISTANT} element={<AIAssistant />} />
              <Route path={ROUTES.ANALYTICS} element={<FullAnalytics />} />
              <Route path={ROUTES.SETTINGS} element={<SettingsPage />} />
            </Routes>
          </AnimatePresence>
        </main>
      </div>
      <Toaster theme="light" position="top-right" richColors />
    </div>
  );
};

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

