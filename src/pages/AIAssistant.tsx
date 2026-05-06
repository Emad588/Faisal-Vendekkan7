import React, { useState } from 'react';
import { 
  Bot, 
  Send, 
  Sparkles, 
  TrendingUp, 
  AlertCircle, 
  Zap, 
  Plus, 
  Search,
  MessageSquare,
  BarChart3,
  Lightbulb,
  MoreHorizontal
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';

const suggestions = [
  "What is my projected cash flow for June?",
  "Analyze top 5 expense categories",
  "How much GST do I owe this quarter?",
  "Check for duplicate invoices"
];

const initialMessages = [
  { 
    role: 'ai', 
    content: "Greetings, Emad. I've analyzed your financial data for the past 48 hours. Your revenue velocity is currently exceeding projections by 8.4%. Is there something specific you'd like to dive into today?",
    timestamp: '10:04 AM'
  },
];

export const AIAssistant = () => {
  const [messages, setMessages] = useState(initialMessages);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (!input.trim()) return;
    
    const userMsg = { role: 'user', content: input, timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) };
    setMessages(prev => [...prev, userMsg]);
    setInput('');

    // Simulate AI response
    setTimeout(() => {
      const aiResponse = { 
        role: 'ai', 
        content: "I'm processing that for you. Based on the data in your Ledger, your largest growth came from Digital Transformation services. Would you like a detailed breakdown of client retention in that sector?",
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prev => [...prev, aiResponse]);
    }, 1000);
  };

  return (
    <div className="flex h-screen bg-brand-bg overflow-hidden animate-in fade-in duration-500">
      {/* Sidebar for History */}
      <div className="w-80 border-r border-brand-border bg-white flex flex-col hidden lg:flex">
        <div className="p-6">
          <Button className="w-full bg-brand-blue text-white font-bold h-11 gap-2 shadow-lg shadow-brand-blue/20">
            <Plus size={18} /> New Analysis
          </Button>
        </div>
        <div className="flex-1 overflow-auto px-4 space-y-4">
          <div className="text-[10px] uppercase font-bold text-brand-muted tracking-widest px-2 mb-2">Recent Insights</div>
          {[
            { title: 'Tax Liability Review', date: 'Yesterday' },
            { title: 'Client Churn Prediction', date: '2 days ago' },
            { title: 'Revenue Growth Q2', date: 'Last week' },
            { title: 'Profitability Audit', date: 'Last week' },
          ].map((item, idx) => (
            <div key={idx} className="group p-3 rounded-xl hover:bg-brand-bg cursor-pointer transition-all border border-transparent hover:border-brand-border">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center text-brand-blue group-hover:scale-110 transition-transform">
                  <MessageSquare size={14} />
                </div>
                <div className="flex-1">
                  <p className="text-xs font-bold text-brand-text truncate">{item.title}</p>
                  <p className="text-[10px] text-brand-muted font-medium">{item.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="p-6 border-t border-brand-border">
          <div className="bg-brand-bg rounded-2xl p-4 flex items-center gap-3">
             <Zap className="text-amber-500" size={20} />
             <div>
                <p className="text-[10px] font-bold text-brand-text uppercase tracking-tighter">Model Status</p>
                <p className="text-xs font-bold text-brand-blue">GPT-4 Turbo Enabled</p>
             </div>
          </div>
        </div>
      </div>

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col relative h-full">
        <div className="p-6 border-b border-brand-border bg-white/80 backdrop-blur-md sticky top-0 z-10 flex items-center justify-between">
           <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center text-white shadow-lg">
                 <Bot size={22} />
              </div>
              <div>
                 <h2 className="font-extrabold text-brand-text leading-tight">ABILIX Intelligence</h2>
                 <p className="text-[10px] text-emerald-600 font-bold uppercase tracking-widest">System Online • Low Latency</p>
              </div>
           </div>
           <Button variant="ghost" size="icon" className="text-brand-muted"><MoreHorizontal size={20} /></Button>
        </div>

        <div className="flex-1 overflow-auto p-8 space-y-8 scroll-smooth pb-32">
          {messages.map((msg, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={cn(
                "flex gap-4 max-w-3xl",
                msg.role === 'user' ? "ml-auto flex-row-reverse" : ""
              )}
            >
              <Avatar className={cn(
                "h-10 w-10 border shadow-sm shrink-0",
                msg.role === 'ai' ? "border-brand-blue/20 bg-blue-50" : "border-brand-border bg-white"
              )}>
                {msg.role === 'ai' ? (
                  <Bot size={20} className="text-brand-blue" />
                ) : (
                  <AvatarImage src="https://github.com/shadcn.png" />
                )}
                <AvatarFallback>{msg.role === 'ai' ? 'AI' : 'US'}</AvatarFallback>
              </Avatar>
              <div className={cn(
                "space-y-1",
                msg.role === 'user' ? "text-right" : ""
              )}>
                <div className={cn(
                  "p-4 rounded-2xl text-sm font-medium leading-relaxed shadow-sm",
                  msg.role === 'ai' 
                  ? "bg-white border border-brand-border text-brand-text" 
                  : "bg-brand-blue text-white shadow-brand-blue/10"
                )}>
                  {msg.content}
                </div>
                <p className="text-[10px] text-brand-muted font-bold px-1 uppercase tracking-tighter">{msg.timestamp}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Input & Suggestions */}
        <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-brand-bg via-brand-bg to-transparent">
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="flex flex-wrap gap-2 justify-center">
              {suggestions.map((s, idx) => (
                <button 
                  key={idx}
                  onClick={() => setInput(s)}
                  className="bg-white border border-brand-border text-brand-muted text-[11px] font-bold px-4 py-2 rounded-xl hover:border-brand-blue hover:text-brand-blue hover:bg-blue-50 transition-all shadow-sm"
                >
                  {s}
                </button>
              ))}
            </div>
            
            <div className="relative group">
              <Input 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask ABILIX for financial forecasting or report analysis..." 
                className="w-full bg-white border-brand-border h-14 pl-6 pr-16 text-sm font-medium rounded-2xl shadow-xl focus-visible:ring-brand-blue focus-visible:border-transparent transition-all group-focus-within:border-brand-blue"
              />
              <Button 
                onClick={handleSend}
                size="icon" 
                className="absolute right-2 top-2 h-10 w-10 bg-brand-blue text-white rounded-xl shadow-lg shadow-brand-blue/20 hover:scale-105 active:scale-95 transition-all"
              >
                <Send size={18} />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
