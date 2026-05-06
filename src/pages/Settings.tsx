import React from 'react';
import { 
  Settings as SettingsIcon, 
  User, 
  Bell, 
  Shield, 
  CreditCard, 
  Globe, 
  Database,
  Smartphone,
  Save,
  CheckCircle2
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Separator } from '@/components/ui/separator';
import { toast } from 'sonner';

export const SettingsPage = () => {
  const handleSave = () => {
    toast.success("Enterprise settings updated successfully", {
      icon: <CheckCircle2 className="text-emerald-500" size={18} />
    });
  };

  return (
    <div className="p-8 space-y-8 animate-in fade-in duration-500 bg-brand-bg h-full overflow-auto">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight text-brand-text mb-1">Enterprise Settings</h1>
          <p className="text-brand-muted text-sm font-medium">Configure your platform preferences, regional rules, and organization profile.</p>
        </div>
        <Button 
          onClick={handleSave}
          className="bg-brand-blue hover:bg-brand-blue/90 text-white gap-2 shadow-lg shadow-brand-blue/20 px-8 font-bold h-11"
        >
          <Save size={18} />
          Save Changes
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pb-12">
        {/* Navigation Sidebar */}
        <div className="lg:col-span-3 space-y-2">
          {[
            { name: 'Profile Information', icon: User, active: true },
            { name: 'Notifications', icon: Bell },
            { name: 'Security & Auth', icon: Shield },
            { name: 'Billing & Subscriptions', icon: CreditCard },
            { name: 'Localization', icon: Globe },
            { name: 'Data Management', icon: Database },
          ].map((item, idx) => (
            <button 
              key={idx}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all font-bold text-sm ${
                item.active 
                ? 'bg-brand-blue text-white shadow-md shadow-brand-blue/10' 
                : 'text-brand-muted hover:bg-white hover:text-brand-text'
              }`}
            >
              <item.icon size={18} />
              {item.name}
            </button>
          ))}
        </div>

        {/* Settings Content */}
        <div className="lg:col-span-9 space-y-6">
          <Card className="glass-card p-8">
            <h3 className="text-lg font-extrabold text-brand-text mb-6 flex items-center gap-2">
              <User size={20} className="text-brand-blue" />
              Company Profile
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label className="text-[10px] font-bold uppercase tracking-widest text-brand-muted">Legal Entity Name</Label>
                <Input defaultValue="ABILIX Solutions Pvt Ltd" className="bg-brand-bg border-brand-border font-medium focus-visible:ring-brand-blue" />
              </div>
              <div className="space-y-2">
                <Label className="text-[10px] font-bold uppercase tracking-widest text-brand-muted">Industry Focus</Label>
                <Input defaultValue="Artificial Intelligence & Digital Transformation" className="bg-brand-bg border-brand-border font-medium focus-visible:ring-brand-blue" />
              </div>
              <div className="space-y-2">
                <Label className="text-[10px] font-bold uppercase tracking-widest text-brand-muted">Primary Email</Label>
                <Input defaultValue="hq@abilix.com" className="bg-brand-bg border-brand-border font-medium focus-visible:ring-brand-blue" />
              </div>
              <div className="space-y-2">
                <Label className="text-[10px] font-bold uppercase tracking-widest text-brand-muted">Website URL</Label>
                <Input defaultValue="https://abilix.ai" className="bg-brand-bg border-brand-border font-medium focus-visible:ring-brand-blue" />
              </div>
            </div>
            
            <Separator className="my-8 bg-brand-border" />
            
            <div className="space-y-4">
              <h4 className="text-xs font-bold text-brand-text uppercase tracking-widest">Platform Language</h4>
              <div className="flex gap-3">
                <Badge className="bg-brand-blue text-white px-4 py-2 rounded-xl text-xs font-bold cursor-pointer transition-all">English (US)</Badge>
                <Badge variant="outline" className="border-brand-border text-brand-muted px-4 py-2 rounded-xl text-xs font-bold cursor-pointer hover:bg-brand-bg">Hindi (India)</Badge>
                <Badge variant="outline" className="border-brand-border text-brand-muted px-4 py-2 rounded-xl text-xs font-bold cursor-pointer hover:bg-brand-bg">German (DE)</Badge>
              </div>
            </div>
          </Card>

          <Card className="glass-card p-8">
            <h3 className="text-lg font-extrabold text-brand-text mb-6 flex items-center gap-2">
              <Bell size={20} className="text-brand-blue" />
              Notification Preferences
            </h3>
            <div className="space-y-6">
              {[
                { title: 'Payout Success', desc: 'Notify when a client invoice is successfully paid', enabled: true },
                { title: 'Invoice Overdue', desc: 'Alert when a payment is 24h past its due date', enabled: true },
                { title: 'AI Strategic Alerts', desc: 'Daily operational insights from the ABILIX engine', enabled: false },
                { title: 'Payroll Ready', desc: 'Monthly notification to approve employee settlements', enabled: true },
              ].map((notif, idx) => (
                <div key={idx} className="flex items-center justify-between group">
                  <div>
                    <p className="font-bold text-brand-text group-hover:text-brand-blue transition-colors">{notif.title}</p>
                    <p className="text-xs text-brand-muted font-medium">{notif.desc}</p>
                  </div>
                  <Switch defaultChecked={notif.enabled} className="data-[state=checked]:bg-brand-blue" />
                </div>
              ))}
            </div>
          </Card>

          <Card className="glass-card p-8 bg-rose-50/30 border-rose-100">
             <h3 className="text-lg font-extrabold text-rose-600 mb-2">Danger Zone</h3>
             <p className="text-xs text-brand-muted font-medium mb-6">Irreversible actions that affect your data persistence.</p>
             <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <p className="font-bold text-brand-text">Purge Transaction History</p>
                  <p className="text-xs text-brand-muted">Permanently delete all records older than 7 years.</p>
                </div>
                <Button variant="outline" className="border-rose-200 text-rose-600 font-bold hover:bg-rose-50 py-6 h-auto">
                   Execute Purge
                </Button>
             </div>
          </Card>
        </div>
      </div>
    </div>
  );
};
