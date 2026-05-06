import React, { useState, useMemo } from 'react';
import { 
  Plus, 
  Search, 
  Filter, 
  Download, 
  MoreVertical, 
  Calendar,
  CheckCircle2,
  Clock,
  AlertCircle,
  Share2,
  FileText,
  FileDown,
  Trash2,
  ExternalLink
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Card } from '@/components/ui/card';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { cn } from '@/lib/utils';
import { toast } from 'sonner';

const initialInvoices = [
  { id: 'INV-2026-001', client: 'Nexus Digital', amount: '$4,500.00', date: 'May 15, 2026', due: 'Jun 15, 2026', status: 'paid' },
  { id: 'INV-2026-002', client: 'Quantum Labs', amount: '$12,800.00', date: 'May 18, 2026', due: 'Jun 18, 2026', status: 'pending' },
  { id: 'INV-2026-003', client: 'Stellar Tech', amount: '$3,200.00', date: 'May 20, 2026', due: 'Jun 20, 2026', status: 'pending' },
  { id: 'INV-2026-004', client: 'Aether Corp', amount: '$8,900.00', date: 'May 10, 2026', due: 'May 25, 2026', status: 'overdue' },
  { id: 'INV-2026-005', client: 'Nexus Digital', amount: '$2,100.00', date: 'May 05, 2026', due: 'Jun 05, 2026', status: 'paid' },
];

export const InvoicesList = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [search, setSearch] = useState('');

  const filteredInvoices = useMemo(() => {
    return initialInvoices.filter(inv => {
      const matchSearch = inv.client.toLowerCase().includes(search.toLowerCase()) || 
                          inv.id.toLowerCase().includes(search.toLowerCase());
      const matchTab = activeTab === 'all' || inv.status === activeTab;
      return matchSearch && matchTab;
    });
  }, [search, activeTab]);

  const handleExport = () => {
    toast.info("Export Initialized", {
      description: "Generating XLSX dump of your financial ledger.",
      icon: <FileDown size={18} />
    });
  };

  const handleCreate = () => {
    toast.success("Invoice Draft Initialized", {
      description: "Redirecting to smart editor for INV-2026-006."
    });
  };

  const handleAction = (action: string, id: string) => {
    toast.success(`Action: ${action}`, {
      description: `Targeting transaction ${id} for system processing.`
    });
  };

  return (
    <div className="p-8 space-y-8 animate-in fade-in duration-500 bg-brand-bg h-full overflow-auto">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight text-brand-text mb-1">Billing Ledger</h1>
          <p className="text-brand-muted text-sm font-medium">Comprehensive record of outgoing fiscal claims and settlement cycles.</p>
        </div>
        <div className="flex gap-3">
          <Button 
            onClick={handleExport}
            variant="outline" 
            className="glass border-brand-border text-brand-text gap-2 font-bold px-6 h-11"
          >
            <Download size={18} />
            Export Audit
          </Button>
          <Button 
            onClick={handleCreate}
            className="bg-brand-blue hover:bg-brand-blue/90 text-white gap-2 shadow-lg shadow-brand-blue/20 px-6 font-bold h-11"
          >
            <Plus size={18} />
            Generate Invoice
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { label: 'Cumulative Volume', value: '₹28.4L', icon: FileText, color: 'text-brand-blue', bg: 'bg-blue-50' },
          { label: 'Settled Funds', value: '₹18.2L', icon: CheckCircle2, color: 'text-emerald-600', bg: 'bg-emerald-50' },
          { label: 'Uncollected', value: '₹4.2L', icon: Clock, color: 'text-rose-600', bg: 'bg-rose-50' },
        ].map((stat, i) => (
          <Card key={i} className="glass-card p-6 flex items-center gap-5">
            <div className={cn("p-4 rounded-2xl shadow-sm transition-transform hover:scale-110", stat.bg, stat.color)}>
              <stat.icon size={26} />
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-widest font-bold text-brand-muted mb-1">{stat.label}</p>
              <p className="text-2xl font-extrabold tracking-tighter text-brand-text">{stat.value}</p>
            </div>
          </Card>
        ))}
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <Tabs defaultValue="all" className="w-full md:w-auto" onValueChange={setActiveTab}>
          <TabsList className="bg-white border border-brand-border p-1 h-12 rounded-2xl shadow-sm">
            {['all', 'paid', 'pending', 'overdue'].map((tab) => (
              <TabsTrigger 
                key={tab}
                value={tab} 
                className="rounded-xl data-[state=active]:bg-brand-blue data-[state=active]:text-white transition-all py-2 px-6 text-xs font-bold capitalize"
              >
                {tab} Invoices
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>

        <div className="flex items-center gap-3 w-full md:w-auto">
          <div className="relative w-full md:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-brand-muted" size={16} />
            <Input 
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search ID or Client..." 
              className="bg-white border-brand-border h-11 pl-10 focus-visible:ring-brand-blue font-medium"
            />
          </div>
          <Button variant="outline" size="icon" className="border-brand-border h-11 w-11 rounded-xl hover:bg-white text-brand-muted">
            <Filter size={18} />
          </Button>
        </div>
      </div>

      <Card className="glass-card overflow-hidden">
        <Table>
          <TableHeader className="bg-brand-bg/50">
            <TableRow className="border-brand-border hover:bg-transparent">
              <TableHead className="text-brand-muted font-bold uppercase text-[10px] tracking-widest pl-8 py-4">Reference ID</TableHead>
              <TableHead className="text-brand-muted font-bold uppercase text-[10px] tracking-widest">Stakeholder</TableHead>
              <TableHead className="text-brand-muted font-bold uppercase text-[10px] tracking-widest">Temporal Metadata</TableHead>
              <TableHead className="text-brand-muted font-bold uppercase text-[10px] tracking-widest">Stated Amount</TableHead>
              <TableHead className="text-brand-muted font-bold uppercase text-[10px] tracking-widest">Status</TableHead>
              <TableHead className="text-brand-muted font-bold uppercase text-[10px] tracking-widest text-right pr-8">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredInvoices.map((inv) => (
              <TableRow key={inv.id} className="border-brand-border hover:bg-brand-bg transition-all group">
                <TableCell className="py-6 pl-8">
                  <p className="font-extrabold text-brand-text group-hover:text-brand-blue transition-colors tracking-tight">{inv.id}</p>
                </TableCell>
                <TableCell className="font-bold text-sm text-brand-text">{inv.client}</TableCell>
                <TableCell>
                  <div className="space-y-1">
                    <p className="text-xs text-brand-text font-bold whitespace-nowrap">{inv.date}</p>
                    <p className="text-[10px] text-brand-muted font-bold whitespace-nowrap uppercase tracking-tighter">Due: {inv.due}</p>
                  </div>
                </TableCell>
                <TableCell className="font-mono font-extrabold text-brand-text text-base tracking-tighter">
                  {inv.amount.replace('$', '₹')}
                </TableCell>
                <TableCell>
                  <Badge className={cn(
                    "border-none px-3 py-1 font-bold text-[10px] uppercase tracking-tighter shadow-sm",
                    inv.status === 'paid' ? "bg-emerald-500 text-white" :
                    inv.status === 'overdue' ? "bg-rose-500 text-white" :
                    "bg-amber-500 text-white"
                  )}>
                    {inv.status}
                  </Badge>
                </TableCell>
                <TableCell className="text-right pr-8">
                  <div className="flex items-center justify-end gap-2">
                    <Button 
                      onClick={() => handleAction('Download', inv.id)}
                      variant="ghost" size="icon" className="h-9 w-9 text-brand-muted hover:text-brand-blue hover:bg-white rounded-xl border border-transparent hover:border-brand-border"
                    >
                      <Download size={16} />
                    </Button>
                    <Button 
                      onClick={() => handleAction('Share', inv.id)}
                      variant="ghost" size="icon" className="h-9 w-9 text-brand-muted hover:text-brand-blue hover:bg-white rounded-xl border border-transparent hover:border-brand-border"
                    >
                      <Share2 size={16} />
                    </Button>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon" className="h-9 w-9 text-brand-muted hover:text-brand-blue hover:bg-white rounded-xl border border-transparent hover:border-brand-border">
                          <MoreVertical size={16} />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end" className="bg-white border-brand-border text-brand-text">
                        <DropdownMenuItem onClick={() => handleAction('View', inv.id)} className="font-bold text-xs">View Parameters</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => handleAction('Edit', inv.id)} className="font-bold text-xs">Edit Structure</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => handleAction('Finalize', inv.id)} className="font-bold text-xs text-emerald-600">Finalize Payment</DropdownMenuItem>
                        <DropdownMenuItem onClick={() => handleAction('Void', inv.id)} className="text-rose-500 font-bold text-xs">Void Transaction</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
      
      <div className="flex items-center justify-between py-6">
         <p className="text-[10px] font-extrabold text-brand-muted uppercase tracking-widest px-2">Cycle: May 2026 Archive</p>
         <div className="flex items-center gap-2">
            <Button variant="outline" className="border-brand-border text-brand-text font-bold text-xs h-9 px-4 rounded-xl">Previous Cycle</Button>
            <Button variant="outline" className="border-brand-border text-brand-text font-bold text-xs h-9 px-4 rounded-xl">Next Cycle</Button>
         </div>
      </div>
    </div>
  );
};

