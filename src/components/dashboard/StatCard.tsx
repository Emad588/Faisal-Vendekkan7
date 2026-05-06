import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface StatCardProps {
  title: string;
  value: string;
  change: string;
  trend: 'up' | 'down' | 'neutral';
  icon: LucideIcon;
  color?: string;
  delay?: number;
}

export const StatCard: React.FC<StatCardProps> = ({ 
  title, 
  value, 
  change, 
  trend, 
  icon: Icon,
  color = "brand-blue",
  delay = 0
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="glass-card p-6 flex flex-col justify-between h-full group transition-all duration-300 relative overflow-hidden bg-white hover:shadow-xl"
    >
      <div className={cn(
        "absolute top-0 right-0 w-24 h-24 blur-[80px] -mr-10 -mt-10 opacity-10 transition-all duration-500 group-hover:scale-150",
        `bg-${color}`
      )} />
      
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-brand-muted text-xs font-bold tracking-widest uppercase">{title}</h3>
        <div className={cn(
          "w-10 h-10 rounded-xl flex items-center justify-center border border-brand-border bg-brand-bg group-hover:scale-110 transition-transform duration-300",
          trend === 'up' ? "text-emerald-500" : trend === 'down' ? "text-rose-500" : "text-brand-blue"
        )}>
          <Icon size={20} />
        </div>
      </div>
      
      <div>
        <div className="flex items-baseline gap-2 mb-1">
          <span className="text-2xl font-bold tracking-tight text-brand-text">{value}</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className={cn(
            "text-xs font-bold flex items-center gap-0.5",
            trend === 'up' ? "text-emerald-600" : trend === 'down' ? "text-rose-600" : "text-brand-muted"
          )}>
            {trend === 'up' ? '↑' : trend === 'down' ? '↓' : ''} {change}
          </span>
          <span className="text-[10px] text-brand-muted uppercase font-medium tracking-wider">vs last month</span>
        </div>
      </div>
    </motion.div>
  );
};
