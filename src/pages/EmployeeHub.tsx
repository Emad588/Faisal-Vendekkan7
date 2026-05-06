import React, { useState, useMemo } from 'react';
import { 
  Users, 
  Plus, 
  Search, 
  Filter, 
  CreditCard,
  Briefcase,
  Mail,
  MoreHorizontal,
  ArrowUpRight,
  UserPlus,
  Profile
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { toast } from 'sonner';

const initialEmployees = [
  { id: 1, name: 'Aditya Vardhan', role: 'Solutions Architect', type: 'Full-time', email: 'aditya@abilix.com', avatar: 'https://github.com/shadcn.png', salary: '₹1,45,000', status: 'Active', color: 'bg-blue-500' },
  { id: 2, name: 'Sarah Chen', role: 'Lead Developer', type: 'Full-time', email: 'sarah@abilix.com', avatar: 'https://github.com/shadcn.png', salary: '₹1,20,000', status: 'Active', color: 'bg-emerald-500' },
  { id: 3, name: 'Rahul Sharma', role: 'UI/UX Designer', type: 'Contractor', email: 'rahul@design.com', avatar: 'https://github.com/shadcn.png', salary: '₹85,000', status: 'On Leave', color: 'bg-amber-500' },
  { id: 4, name: 'Jessica Miller', role: 'DevOps Engineer', type: 'Freelancer', email: 'jess@ops.com', avatar: 'https://github.com/shadcn.png', salary: '₹95,000', status: 'Active', color: 'bg-indigo-500' },
  { id: 5, name: 'David Kim', role: 'QA Lead', type: 'Full-time', email: 'david@abilix.com', avatar: 'https://github.com/shadcn.png', salary: '₹75,000', status: 'Active', color: 'bg-violet-500' },
];

export const EmployeeHub = () => {
  const [search, setSearch] = useState('');

  const filteredEmployees = useMemo(() => {
    return initialEmployees.filter(emp => 
      emp.name.toLowerCase().includes(search.toLowerCase()) ||
      emp.role.toLowerCase().includes(search.toLowerCase()) ||
      emp.email.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  const handleOnboard = () => {
    toast.success("Strategic Onboarding Initiated", {
      description: "Preparing credential environment for new human capital node.",
      icon: <UserPlus className="text-brand-blue" size={18} />
    });
  };

  const handleAction = (action: string, name: string) => {
    toast.info(`System Action: ${action}`, {
      description: `Targeting member node ${name} for ${action.toLowerCase()} procedure.`
    });
  };

  return (
    <div className="p-8 space-y-8 animate-in fade-in duration-500 bg-brand-bg h-full overflow-auto">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight text-brand-text mb-1">Human Capital</h1>
          <p className="text-brand-muted text-sm font-medium">Manage your team, track payroll, and view freelancer contributors.</p>
        </div>
        <div className="flex gap-3">
          <Button 
            onClick={() => toast.info("Compiling Payroll Analytics")}
            variant="outline" className="glass border-brand-border text-brand-text h-11 transition-all hover:bg-white font-bold px-6 shadow-sm"
          >
            Payroll Report
          </Button>
          <Button 
            onClick={handleOnboard}
            className="bg-brand-blue hover:bg-brand-blue/90 text-white gap-2 shadow-lg shadow-brand-blue/20 px-6 font-bold h-11"
          >
            <UserPlus size={18} />
            Onboard Member
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="glass-card p-6 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center text-brand-blue shadow-sm">
              <Users size={24} />
            </div>
            <div>
              <p className="text-[10px] uppercase font-bold text-brand-muted tracking-widest">Active Staff</p>
              <p className="text-2xl font-bold text-brand-text">24 Members</p>
            </div>
          </div>
          <ArrowUpRight size={20} className="text-brand-blue" />
        </Card>
        <Card className="glass-card p-6 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 flex items-center justify-center text-emerald-600 shadow-sm">
              <CreditCard size={24} />
            </div>
            <div>
              <p className="text-[10px] uppercase font-bold text-brand-muted tracking-widest">Monthly Payroll</p>
              <p className="text-2xl font-bold text-brand-text">₹5.24L</p>
            </div>
          </div>
          <ArrowUpRight size={20} className="text-emerald-600" />
        </Card>
        <Card className="glass-card p-6 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-amber-50 flex items-center justify-center text-amber-600 shadow-sm">
              <Briefcase size={24} />
            </div>
            <div>
              <p className="text-[10px] uppercase font-bold text-brand-muted tracking-widest">Open Positions</p>
              <p className="text-2xl font-bold text-brand-text">3 Roles</p>
            </div>
          </div>
          <ArrowUpRight size={20} className="text-amber-600" />
        </Card>
      </div>

      <div className="flex gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-brand-muted" size={18} />
          <Input 
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by name, role, or department..." 
            className="bg-white border-brand-border h-11 pl-10 focus-visible:ring-brand-blue font-medium shadow-sm transition-all focus:shadow-md"
          />
        </div>
        <Button 
          onClick={() => toast.info("Filter Matrix Enabled")}
          variant="outline" className="glass border-brand-border h-11 px-4 gap-2 text-brand-text font-bold"
        >
          <Filter size={18} /> Filters
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-8">
        {filteredEmployees.map((member) => (
          <motion.div
            key={member.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: member.id * 0.05 }}
          >
            <Card className="glass-card hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer border-transparent hover:border-brand-blue/20">
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="relative">
                    <Avatar className="h-16 w-16 border-2 border-white ring-2 ring-brand-bg transition-transform group-hover:scale-105 duration-300 shadow-sm">
                      <AvatarImage src={member.avatar} />
                      <AvatarFallback className="bg-brand-bg font-extrabold text-brand-blue">{member.name.substring(0, 2)}</AvatarFallback>
                    </Avatar>
                    <span className={cn(
                      "absolute bottom-0 right-0 w-4 h-4 rounded-full border-2 border-white ring-1 ring-brand-border",
                      member.status === 'Active' ? 'bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]' : 'bg-amber-500 shadow-[0_0_8px_rgba(245,158,11,0.5)]'
                    )} />
                  </div>
                  <Button onClick={() => handleAction('Management', member.name)} variant="ghost" size="icon" className="h-8 w-8 text-brand-muted hover:text-brand-blue hover:bg-brand-bg rounded-full">
                    <MoreHorizontal size={18} />
                  </Button>
                </div>
                
                <div className="space-y-1 mb-6">
                  <h3 className="font-extrabold text-lg text-brand-text leading-tight group-hover:text-brand-blue transition-colors">{member.name}</h3>
                  <p className="text-xs font-bold text-brand-blue tracking-wide uppercase">{member.role}</p>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6 pt-6 border-t border-brand-bg">
                  <div>
                    <p className="text-[10px] font-bold text-brand-muted uppercase tracking-widest mb-1">Contract</p>
                    <p className="text-sm font-bold text-brand-text">{member.type}</p>
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-brand-muted uppercase tracking-widest mb-1">Monthly Pay</p>
                    <p className="text-sm font-bold text-brand-text">{member.salary}</p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <Button onClick={() => handleAction('Communication', member.name)} size="sm" variant="outline" className="flex-1 h-9 rounded-xl border-brand-border text-xs font-bold hover:bg-brand-bg gap-2">
                    <Mail size={14} className="text-brand-muted" /> Message
                  </Button>
                  <Button onClick={() => handleAction('Profile', member.name)} size="sm" variant="outline" className="flex-1 h-9 rounded-xl border-brand-border text-xs font-bold hover:bg-brand-bg">
                    Profile
                  </Button>
                </div>
              </div>
              <div className={cn("h-1.5 w-full", member.color)} />
            </Card>
          </motion.div>
        ))}
        
        <Card onClick={handleOnboard} className="border-2 border-dashed border-brand-border bg-brand-bg/50 flex flex-col items-center justify-center p-8 gap-4 group cursor-pointer hover:bg-white hover:border-brand-blue/30 transition-all min-h-[300px]">
          <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-brand-muted group-hover:text-brand-blue group-hover:scale-110 transition-all border border-brand-border shadow-sm">
            <Plus size={24} />
          </div>
          <div className="text-center">
            <p className="font-bold text-brand-text group-hover:text-brand-blue transition-colors">Add Team Member</p>
            <p className="text-xs text-brand-muted font-medium">Expand your digital workforce</p>
          </div>
        </Card>
      </div>
    </div>
  );
};
