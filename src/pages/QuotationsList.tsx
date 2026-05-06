import React, { useState, useMemo } from 'react';
import { 
  FileText, 
  Plus, 
  Search, 
  Filter, 
  Download, 
  FileCheck,
  Clock,
  ArrowRight,
  MoreVertical,
  CheckCircle2,
  FileSearch,
  Copy,
  Archive,
  CheckCircle
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
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
import { cn } from '@/lib/utils';
import { toast } from 'sonner';

const initialQuotations = [
  { id: 'QT-2026-001', client: 'Nexus Digital', title: 'AI Automation Suite', amount: '₹4,50,000', date: 'May 20, 2026', validity: '15 Days', status: 'approved' },
  { id: 'QT-2026-002', client: 'Quantum Labs', title: 'Data Pipeline Design', amount: '₹12,80,000', date: 'May 22, 2026', validity: '30 Days', status: 'pending' },
  { id: 'QT-2026-003', client: 'Stellar Tech', title: 'Cloud Infrastructure Upgrade', amount: '₹3,20,000', date: 'May 24, 2026', validity: '10 Days', status: 'pending' },
  { id: 'QT-2026-004', client: 'Aether Corp', title: 'Machine Learning Model', amount: '₹8,90,000', date: 'May 10, 2026', validity: 'Expired', status: 'expired' },
  { id: 'QT-2026-005', client: 'Velocity SaaS', title: 'Security Audit', amount: '₹2,10,000', date: 'May 05, 2026', validity: '30 Days', status: 'draft' },
];

export const QuotationsList = () => {
  const [search, setSearch] = useState('');

  const filteredQuotations = useMemo(() => {
    return initialQuotations.filter(qt => 
      qt.client.toLowerCase().includes(search.toLowerCase()) ||
      qt.id.toLowerCase().includes(search.toLowerCase()) ||
      qt.title.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  const handleAction = (action: string, id: string) => {
    toast.success(`Proposal Action: ${action}`, {
      description: `Targeting estimate ${id} for system processing.`,
      icon: <FileCheck className="text-brand-blue" size={18} />
    });
  };

  const handleCreate = () => {
    toast.success("Strategic Proposal Creator", {
      description: "Initializing your customized quotation environment."
    });
  };

  const handleTemplates = () => {
    toast.info("Strategic Templates", {
      description: "Loading industry-specific document frameworks."
    });
  };

  return (
    <div className="p-8 space-y-8 animate-in fade-in duration-500 bg-brand-bg h-full overflow-auto">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight text-brand-text mb-1">Quotation Hub</h1>
          <p className="text-brand-muted text-sm font-medium">Create and manage professional estimates for project proposals.</p>
        </div>
        <div className="flex gap-3">
          <Button 
            onClick={handleTemplates}
            variant="outline" className="glass border-brand-border text-brand-text h-11 px-6 font-bold shadow-sm"
          >
            Templates
          </Button>
          <Button 
            onClick={handleCreate}
            className="bg-brand-blue hover:bg-brand-blue/90 text-white gap-2 shadow-lg shadow-brand-blue/20 px-6 font-bold h-11"
          >
            <Plus size={18} />
            Create Quotation
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="glass-card p-6">
          <div className="flex flex-col gap-1">
            <p className="text-[10px] uppercase font-bold tracking-widest text-brand-muted">Total Proposals</p>
            <p className="text-2xl font-bold text-brand-text">₹29.5L</p>
            <div className="mt-2 text-[10px] text-emerald-600 font-bold">12 Active Proposals</div>
          </div>
        </Card>
        <Card className="glass-card p-6">
          <div className="flex flex-col gap-1">
            <p className="text-[10px] uppercase font-bold tracking-widest text-brand-muted">Converted</p>
            <p className="text-2xl font-bold text-brand-text">₹18.2L</p>
            <div className="mt-2 text-[10px] text-brand-blue font-bold">62% Conversion Rate</div>
          </div>
        </Card>
        <Card className="glass-card p-6">
          <div className="flex flex-col gap-1">
            <p className="text-[10px] uppercase font-bold tracking-widest text-brand-muted">Pending Action</p>
            <p className="text-2xl font-bold text-brand-text">5</p>
            <div className="mt-2 text-[10px] text-amber-600 font-bold">Require follow-up</div>
          </div>
        </Card>
        <Card className="glass-card p-6 border-brand-blue/20 bg-brand-blue/5">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-brand-blue text-white rounded-xl shadow-lg shadow-brand-blue/20">
              <Clock size={20} />
            </div>
            <div>
              <p className="text-xs font-bold text-brand-text">Avg. Closing Time</p>
              <p className="text-lg font-bold text-brand-blue">4.2 Days</p>
            </div>
          </div>
        </Card>
      </div>

      <div className="flex gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-brand-muted" size={18} />
          <Input 
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search proposals, clients, or service types..." 
            className="bg-white border-brand-border h-11 pl-10 focus-visible:ring-brand-blue font-medium"
          />
        </div>
        <Button 
          onClick={() => toast.info("Filter Matrix Enabled")}
          variant="outline" size="icon" className="glass border-brand-border h-11 w-11"
        >
          <Filter size={18} />
        </Button>
      </div>

      <Card className="glass-card overflow-hidden">
        <Table>
          <TableHeader className="bg-brand-bg/50">
            <TableRow className="border-brand-border hover:bg-transparent">
              <TableHead className="text-brand-muted font-bold uppercase text-[10px] tracking-widest pl-8 py-4">ID & Service</TableHead>
              <TableHead className="text-brand-muted font-bold uppercase text-[10px] tracking-widest">Client Name</TableHead>
              <TableHead className="text-brand-muted font-bold uppercase text-[10px] tracking-widest">Estimate Amount</TableHead>
              <TableHead className="text-brand-muted font-bold uppercase text-[10px] tracking-widest">Validity</TableHead>
              <TableHead className="text-brand-muted font-bold uppercase text-[10px] tracking-widest text-center">Status</TableHead>
              <TableHead className="text-brand-muted font-bold uppercase text-[10px] tracking-widest text-right pr-8">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredQuotations.map((qt) => (
              <TableRow key={qt.id} className="border-brand-border hover:bg-brand-bg group transition-colors">
                <TableCell className="py-6 pl-8">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-brand-bg border border-brand-border group-hover:bg-brand-blue/5 group-hover:border-brand-blue/20 transition-all">
                      <FileText size={16} className="text-brand-muted group-hover:text-brand-blue" />
                    </div>
                    <div>
                      <p className="font-bold text-sm tracking-tight text-brand-text">{qt.id}</p>
                      <p className="text-[10px] text-brand-muted font-bold uppercase tracking-wider">{qt.title}</p>
                    </div>
                  </div>
                </TableCell>
                <TableCell className="font-bold text-sm text-brand-text">{qt.client}</TableCell>
                <TableCell className="font-mono font-bold text-sm">{qt.amount}</TableCell>
                <TableCell>
                  <p className="text-xs text-brand-muted font-medium">{qt.validity}</p>
                  <p className="text-[10px] text-brand-muted/50 font-bold uppercase">Sent: {qt.date}</p>
                </TableCell>
                <TableCell className="text-center">
                  <Badge className={cn(
                    "text-[10px] px-2 py-0.5 border-none font-extrabold uppercase tracking-tighter",
                    qt.status === 'approved' ? "bg-emerald-500 text-white" :
                    qt.status === 'pending' ? "bg-amber-500 text-white" :
                    qt.status === 'expired' ? "bg-rose-500 text-white" :
                    "bg-slate-400 text-white"
                  )}>
                    {qt.status}
                  </Badge>
                </TableCell>
                <TableCell className="text-right pr-8">
                  <div className="flex items-center justify-end gap-2">
                    {qt.status === 'approved' && (
                      <Button 
                        onClick={() => handleAction('Convert', qt.id)}
                        size="sm" variant="outline" className="h-8 text-[10px] font-bold border-emerald-200 text-emerald-600 hover:bg-emerald-50 gap-1 rounded-lg"
                      >
                        <ArrowRight size={12} /> Convert to Invoice
                      </Button>
                    )}
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon" className="h-8 w-8 text-brand-muted hover:text-brand-blue">
                          <MoreVertical size={16} />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end" className="bg-white border-brand-border text-brand-text">
                        <DropdownMenuItem onClick={() => handleAction('View', qt.id)} className="font-medium gap-2">
                          <FileSearch size={14} className="text-brand-blue" /> View Proposal
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => handleAction('Duplicate', qt.id)} className="font-medium gap-2">
                          <Copy size={14} className="text-brand-blue" /> Duplicate
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => handleAction('Approve', qt.id)} className="font-medium text-emerald-600 gap-2">
                          <CheckCircle size={14} /> Mark Approved
                        </DropdownMenuItem>
                        <DropdownMenuItem onClick={() => handleAction('Archive', qt.id)} className="font-medium text-rose-500 gap-2">
                          <Archive size={14} /> Archive
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </div>
  );
};
