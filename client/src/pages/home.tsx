import { useState } from "react";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { 
  LayoutDashboard, 
  Users, 
  Settings, 
  LogOut, 
  Bell, 
  Search,
  Menu,
  Activity
} from "lucide-react";

export default function Home() {
  const [, setLocation] = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleLogout = () => {
    setLocation("/login");
  };

  return (
    <div className="min-h-screen bg-background flex text-foreground">
      {/* Overlay for mobile sidebar */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={`fixed lg:static inset-y-0 left-0 z-50 w-64 bg-card border-r border-border transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 transition-transform duration-200 ease-in-out flex flex-col`}>
        <div className="h-16 flex items-center px-6 border-b border-border">
          <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center mr-3 border border-primary/50">
            <span className="font-black text-primary text-sm">GH</span>
          </div>
          <span className="font-bold text-lg tracking-tight">Gorilla Hub</span>
        </div>
        
        <div className="flex-1 overflow-y-auto py-4">
          <nav className="space-y-1 px-3">
            <a href="#" className="flex items-center px-3 py-2.5 bg-primary/10 text-primary rounded-md group">
              <LayoutDashboard className="w-5 h-5 mr-3" />
              <span className="font-medium">Dashboard</span>
            </a>
            <a href="#" className="flex items-center px-3 py-2.5 text-muted-foreground hover:bg-secondary/50 hover:text-foreground rounded-md group transition-colors">
              <Activity className="w-5 h-5 mr-3" />
              <span className="font-medium">Analytics</span>
            </a>
            <a href="#" className="flex items-center px-3 py-2.5 text-muted-foreground hover:bg-secondary/50 hover:text-foreground rounded-md group transition-colors">
              <Users className="w-5 h-5 mr-3" />
              <span className="font-medium">Users</span>
            </a>
            <a href="#" className="flex items-center px-3 py-2.5 text-muted-foreground hover:bg-secondary/50 hover:text-foreground rounded-md group transition-colors">
              <Settings className="w-5 h-5 mr-3" />
              <span className="font-medium">Settings</span>
            </a>
          </nav>
        </div>
        
        <div className="p-4 border-t border-border">
          <Button variant="ghost" className="w-full justify-start text-muted-foreground hover:text-foreground" onClick={handleLogout}>
            <LogOut className="w-5 h-5 mr-3" />
            Log Out
          </Button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Header */}
        <header className="h-16 flex items-center justify-between px-4 sm:px-6 lg:px-8 border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-30">
          <div className="flex items-center flex-1">
            <button 
              className="lg:hidden p-2 -ml-2 mr-2 text-muted-foreground hover:text-foreground"
              onClick={() => setSidebarOpen(!sidebarOpen)}
            >
              <Menu className="w-6 h-6" />
            </button>
            <div className="max-w-md w-full hidden sm:block relative">
              <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
              <input 
                type="text" 
                placeholder="Search..." 
                className="w-full bg-secondary/50 border border-border rounded-full pl-10 pr-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-all"
              />
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <button className="p-2 text-muted-foreground hover:text-foreground relative">
              <Bell className="w-5 h-5" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-primary rounded-full"></span>
            </button>
            <div className="w-8 h-8 rounded-full bg-secondary border border-border overflow-hidden">
              <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=Admin&backgroundColor=27272a`} alt="User" />
            </div>
          </div>
        </header>

        {/* Content */}
        <div className="flex-1 overflow-auto p-4 sm:p-6 lg:p-8">
          <div className="max-w-7xl mx-auto space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">Overview</h1>
              <div className="flex items-center space-x-2">
                <Button variant="outline" size="sm">Export</Button>
                <Button size="sm">New Report</Button>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { label: 'Total Revenue', value: '$45,231.89', change: '+20.1%', positive: true },
                { label: 'Active Users', value: '2,350', change: '+180.1%', positive: true },
                { label: 'Sales', value: '+12,234', change: '+19%', positive: true },
                { label: 'Active Now', value: '573', change: '-2.4%', positive: false },
              ].map((stat, i) => (
                <div key={i} className="bg-card border border-border rounded-xl p-6 shadow-sm hover:border-primary/50 transition-colors">
                  <p className="text-sm font-medium text-muted-foreground">{stat.label}</p>
                  <div className="flex items-baseline mt-2 space-x-2">
                    <h3 className="text-2xl font-bold">{stat.value}</h3>
                    <span className={`text-xs font-medium ${stat.positive ? 'text-primary' : 'text-destructive'}`}>
                      {stat.change}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Charts/Tables Placeholder */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2 bg-card border border-border rounded-xl p-6 shadow-sm min-h-[400px] flex flex-col">
                <h3 className="text-lg font-semibold mb-4">Revenue Overview</h3>
                <div className="flex-1 border border-dashed border-border/50 rounded-lg flex items-center justify-center bg-secondary/10">
                  <p className="text-muted-foreground">Chart Placeholder</p>
                </div>
              </div>
              <div className="bg-card border border-border rounded-xl p-6 shadow-sm min-h-[400px] flex flex-col">
                <h3 className="text-lg font-semibold mb-4">Recent Activity</h3>
                <div className="space-y-4 flex-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div key={i} className="flex items-start space-x-3">
                      <div className="w-8 h-8 rounded-full bg-secondary flex-shrink-0" />
                      <div>
                        <p className="text-sm font-medium text-foreground">User {i} performed an action</p>
                        <p className="text-xs text-muted-foreground">{i * 2} hours ago</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
