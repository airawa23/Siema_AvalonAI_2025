import { Home, TrendingUp, Cpu, Settings, Zap } from 'lucide-react';
import siemaLogo from '../assets/siema_logo.png'; 

const Sidebar = () => {
  return (
    <aside className="w-72 bg-[hsl(var(--sidebar-background))] border-r border-[hsl(var(--sidebar-border))] flex flex-col shadow-2xl">
      {/* Logo Section */}
      <div className="p-6 border-b border-[hsl(var(--sidebar-border))]">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-lg p-1.5">
            <img
              src={siemaLogo}
              alt="SIEMA Icon"
              className="w-full h-full object-contain" // Membuat gambar mengisi div
            />
          </div>
          <div className="flex flex-col">
            <h1 className="text-2xl font-bold text-green-600">SIEMA</h1>
            <p className="text-sm  text-green-500">Energy Monitoring</p>
          </div>
        </div>
      </div>

      {/* Navigation Menu */}
      <nav className="flex-1 p-6 space-y-2">
        <SidebarItem icon={Home} label="Dashboard" active={true} />
        <SidebarItem icon={TrendingUp} label="Real-Time Data" />
        <SidebarItem icon={Cpu} label="Device Management" />
        <SidebarItem icon={Settings} label="Settings" />
      </nav>
    </aside>
  );
};

const SidebarItem = ({ icon: Icon, label, active }: { icon: any; label: string; active?: boolean }) => (
  <div
    className={`flex items-center p-3 rounded-lg cursor-pointer transition-all duration-200 ${active
        ? 'bg-[hsl(var(--sidebar-primary))] text-white shadow-lg shadow-[hsl(var(--primary))]/20'
        : 'text-[hsl(var(--sidebar-foreground))] hover:bg-[hsl(var(--sidebar-accent))]'
      }`}
  >
    <Icon className="w-5 h-5 mr-3" />
    <span className="font-medium">{label}</span>
  </div>
);

export default Sidebar;
