import { Bell, Sun, Settings } from 'lucide-react';

const Header = () => {
  return (
    <header className="h-20 border-b border-[hsl(var(--border))] flex items-center justify-between px-8 bg-[hsl(var(--card))]/70 backdrop-blur-sm shadow-lg">
      <div>
        <h1 className="text-3xl font-bold text-green-600">Energy Monitoring Dashboard</h1>
        <p className="text-sm text-green-600 mt-1">Welcome back, Airlangga Bayu!</p>
      </div>
      <div className="flex items-center space-x-4">
        <button aria-label="Toggle theme" className="p-2 rounded-lg hover:bg-[hsl(var(--accent))] transition-colors">
          <Sun className="w-5 h-5 text-[hsl(var(--muted-foreground))]" />
        </button>
        <button aria-label="Notifications" className="p-2 rounded-lg hover:bg-[hsl(var(--accent))] transition-colors relative">
          <Bell className="w-5 h-5 text-[hsl(var(--muted-foreground))]" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-[hsl(var(--danger))] rounded-full"></span>
        </button>
        <button aria-label="Settings" className="p-2 rounded-lg hover:bg-[hsl(var(--accent))] transition-colors">
          <Settings className="w-5 h-5 text-[hsl(var(--muted-foreground))]" />
        </button>
      </div>
    </header>
  );
};

export default Header;
