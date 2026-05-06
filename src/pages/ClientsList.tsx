import React, { useState } from 'react';
import { 
  Users, 
  Plus, 
  Search, 
  Filter, 
  MoreVertical, 
  Mail, 
  Phone, 
  Building2,
  ChevronRight,
  ExternalLink
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
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
import { Card, CardContent } from '@/components/ui/card';

const clients = [
  { id: '1', name: 'Nexus Digital', company: 'Nexus Digital LLC', email: 'hello@nexus.com', phone: '+1 234 567 890', status: 'active', revenue: '$45,200', industry: 'E-commerce' },
  { id: '2', name: 'Quantum Labs', company: 'Quantum Research Group', email: 'ops@quantum.io', phone: '+1 987 654 321', status: 'active', revenue: '$72,800', industry: 'Fintech' },
  { id: '3', name: 'Stellar Solutions', company: 'Stellar Tech', email: 'contact@stellar.tech', phone: '+1 555 012 345', status: 'inactive', revenue: '$12,400', industry: 'SaaS' },
  { id: '4', name: 'Aether Corp', company: 'Aether Industries', email: 'admin@aether.co', phone: '+1 444 888 222', status: 'active', revenue: '$28,900', industry: 'AI' },
  { id: '5', name: 'BioGen', company: 'BioGen Systems', email: 'lab@biogen.com', phone: '+1 111 222 333', status: 'active', revenue: '$15,600', industry: 'Biotech' },
];

export const ClientsList = () => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="p-8 space-y-8 animate-in fade-in duration-500 bg-brand-bg h-full overflow-auto">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight text-brand-text mb-1">Portfolio Relations</h1>
          <p className="text-brand-muted text-sm font-medium">Detailed registry of enterprise partners and strategic clients.</p>
        </div>
        <Button className="bg-brand-blue hover:bg-brand-blue/90 text-white gap-2 shadow-lg shadow-brand-blue/20 px-6 font-bold h-11">
          <Plus size={18} />
          New Client Profile
        </Button>
      </div>

      <div className="flex items-center gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-brand-muted" size={18} />
          <Input 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search by name, company, or email..." 
            className="bg-white border-brand-border h-11 pl-10 focus-visible:ring-brand-blue font-medium"
          />
        </div>
        <Button variant="outline" className="glass border-brand-border h-11 px-4 gap-2 text-brand-text font-bold">
          <Filter size={18} /> Filters
        </Button>
      </div>

      <Card className="glass-card overflow-hidden">
        <Table>
          <TableHeader className="bg-brand-bg/50">
            <TableRow className="border-brand-border hover:bg-transparent">
              <TableHead className="text-brand-muted font-bold uppercase text-[10px] tracking-widest pl-8 py-4">Primary Contact</TableHead>
              <TableHead className="text-brand-muted font-bold uppercase text-[10px] tracking-widest">Industry Segment</TableHead>
              <TableHead className="text-brand-muted font-bold uppercase text-[10px] tracking-widest">Status</TableHead>
              <TableHead className="text-brand-muted font-bold uppercase text-[10px] tracking-widest">Lifetime Value</TableHead>
              <TableHead className="text-brand-muted font-bold uppercase text-[10px] tracking-widest text-right pr-8">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {clients.map((client) => (
              <TableRow key={client.id} className="border-brand-border hover:bg-brand-bg group transition-all duration-200">
                <TableCell className="py-6 pl-8">
                  <div className="flex items-center gap-4">
                    <Avatar className="h-10 w-10 border-2 border-white shadow-sm ring-1 ring-brand-border">
                      <AvatarFallback className="text-brand-blue font-bold text-xs bg-brand-bg">{client.name.substring(0, 2)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-extrabold text-sm text-brand-text group-hover:text-brand-blue transition-colors">{client.name}</p>
                      <p className="text-[11px] text-brand-muted font-medium">{client.email}</p>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2 text-xs font-bold text-brand-text/80">
                    <Building2 size={14} className="text-brand-muted" />
                    {client.industry}
                  </div>
                </TableCell>
                <TableCell>
                  <Badge className={cn(
                    "text-[9px] px-2 py-0.5 border-none font-extrabold uppercase tracking-widest shadow-sm",
                    client.status === 'active' ? "bg-emerald-500 text-white" : "bg-slate-400 text-white"
                  )}>
                    {client.status}
                  </Badge>
                </TableCell>
                <TableCell className="font-mono font-extrabold text-sm text-brand-text">
                  {client.revenue.replace('$', '₹')}
                </TableCell>
                <TableCell className="text-right pr-8">
                  <div className="flex items-center justify-end gap-2">
                    <Button variant="ghost" size="icon" className="h-9 w-9 text-brand-muted hover:text-brand-blue hover:bg-brand-bg transition-colors rounded-xl border border-transparent hover:border-brand-border">
                      <ExternalLink size={16} />
                    </Button>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon" className="h-9 w-9 text-brand-muted hover:text-brand-blue hover:bg-brand-bg transition-colors rounded-xl border border-transparent hover:border-brand-border">
                          <MoreVertical size={16} />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end" className="bg-white border-brand-border text-brand-text">
                        <DropdownMenuItem className="font-bold text-xs">Edit Intelligence</DropdownMenuItem>
                        <DropdownMenuItem className="font-bold text-xs">Ledger Insights</DropdownMenuItem>
                        <DropdownMenuItem className="font-bold text-xs">Append Documentation</DropdownMenuItem>
                        <DropdownMenuItem className="text-rose-500 font-bold text-xs">Suspend Access</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
      
      <div className="flex items-center justify-between py-4 border-t border-brand-border">
        <p className="text-xs text-brand-muted font-bold uppercase tracking-widest">Showing 5 of 24 strategic nodes</p>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" className="border-brand-border h-9 px-4 font-bold text-xs rounded-xl" disabled>Previous</Button>
          <Button variant="outline" size="sm" className="border-brand-border h-9 px-4 font-bold text-xs rounded-xl">Next</Button>
        </div>
      </div>
    </div>
  );
};

