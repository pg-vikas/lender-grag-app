import { Button } from "@/components/ui/button";
import { 
  Menu, 
  Search, 
  Bell, 
  User,
  Users,
  BarChart2,
  HelpCircle,
  ArrowUpRight,
  ArrowRight,
  Home as HomeIcon,
  FolderOpen,
  DollarSign,
  FileText,
  MessageSquare,
  FileBarChart,
  Globe,
  ChevronDown
} from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f3f4f8] flex font-sans text-[#1e293b]">
      {/* Left Sidebar */}
      <aside className="w-[240px] bg-[#0f172a] text-white flex flex-col hidden lg:flex h-screen sticky top-0">
        <div className="p-4 border-b border-white/10">
          <button className="w-full flex items-center justify-between bg-transparent border border-white/20 rounded-full py-1.5 px-3 hover:bg-white/5 transition-colors">
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 rounded-full bg-white text-[#0f172a] flex items-center justify-center overflow-hidden">
                 <User className="w-4 h-4" />
              </div>
              <span className="text-sm font-medium">Admin Gorilla</span>
            </div>
            <ChevronDown className="w-4 h-4 text-white/70" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto py-4">
          <nav className="space-y-1">
            <a href="#" className="flex items-center justify-between px-6 py-3 bg-[#8b5cf6] text-white">
              <div className="flex items-center space-x-3">
                <HomeIcon className="w-5 h-5" />
                <span className="text-sm font-medium">Dashboard</span>
              </div>
            </a>
            
            {/* CRM Group */}
            <div>
              <a href="#" className="flex items-center justify-between px-6 py-3 text-white/70 hover:text-white hover:bg-white/5 transition-colors">
                <div className="flex items-center space-x-3">
                  <Users className="w-5 h-5" />
                  <span className="text-sm font-medium">CRM</span>
                </div>
                <ChevronDown className="w-4 h-4" />
              </a>
              {/* CRM Dropdown */}
              <div className="bg-[#1e293b]/50 py-1">
                <a href="#" className="flex items-center px-14 py-2 text-sm text-white/70 hover:text-white hover:bg-white/5 transition-colors">
                  Active Clients
                </a>
              </div>
            </div>

            {[
              { name: 'Projects', icon: FolderOpen, hasSubmenu: false },
              { name: 'Sales', icon: DollarSign, hasSubmenu: true },
              { name: 'Contracts', icon: FileText, hasSubmenu: true },
              { name: 'Support', icon: MessageSquare, hasSubmenu: true },
              { name: 'Users', icon: User, hasSubmenu: false },
              { name: 'Reports', icon: FileBarChart, hasSubmenu: true },
              { name: 'Website\nAnalytics', icon: Globe, hasSubmenu: false },
            ].map((item, i) => (
              <a key={i} href="#" className="flex items-center justify-between px-6 py-3 text-white/70 hover:text-white hover:bg-white/5 transition-colors">
                <div className="flex items-center space-x-3">
                  <item.icon className="w-5 h-5" />
                  <span className="text-sm font-medium whitespace-pre-line">{item.name}</span>
                </div>
                {item.hasSubmenu && <ChevronDown className="w-4 h-4 -rotate-90" />}
              </a>
            ))}
          </nav>
        </div>
        
        <div className="p-4 mt-auto">
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 bg-green-500 rounded flex items-center justify-center">
              <Globe className="w-4 h-4 text-white" />
            </div>
            <span className="text-sm font-medium">homepage</span>
          </div>
        </div>
      </aside>

      {/* Main Container */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Header */}
        <header className="h-[60px] bg-white flex items-center px-4 shrink-0 sticky top-0 z-10 border-b border-[#e2e8f0]/50 shadow-[0_1px_2px_rgba(0,0,0,0.02)]">
          <button className="p-2 mr-2 text-[#64748b] hover:text-[#0f172a] rounded-md transition-colors lg:hidden">
            <Menu className="w-5 h-5" />
          </button>
          
          <button className="p-2 mr-2 text-[#64748b] hover:text-[#0f172a] rounded-md transition-colors hidden lg:block">
            <Menu className="w-5 h-5" />
          </button>
          
          <div className="flex items-center text-sm font-medium text-[#64748b]">
            Gorilla Hub <span className="mx-2">/</span> <span className="text-[#64748b]">Home</span>
          </div>

          <div className="ml-8 relative flex-1 max-w-md hidden sm:block">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#94a3b8]" />
            <input 
              type="text"
              placeholder="Search" 
              className="w-full pl-9 pr-4 py-1.5 bg-[#f1f5f9] border-none rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all placeholder:text-[#94a3b8]"
            />
          </div>

          <div className="ml-auto flex items-center space-x-4">
            <span className="text-sm font-medium text-[#64748b] hidden sm:inline-block">SMS Alert</span>
            <button className="p-2 text-[#64748b] hover:text-[#0f172a] rounded-md transition-colors relative">
              <Bell className="w-5 h-5" />
            </button>
          </div>
        </header>

        {/* Main Layout */}
        <div className="flex flex-1 overflow-hidden">
          {/* Main Content */}
          <main className="flex-1 overflow-y-auto p-6 lg:p-8">
            <div className="max-w-7xl mx-auto">
              <h1 className="text-2xl font-bold text-[#0f172a] mb-6">Home</h1>

              {/* Work Session */}
              <div className="bg-white rounded-[1rem] p-6 mb-6 shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                  {/* Left */}
                  <div>
                    <h2 className="text-[11px] font-bold text-[#94a3b8] uppercase tracking-wider mb-2">WORK SESSION</h2>
                    <div className="flex items-center text-[11px] font-medium text-[#64748b] bg-[#f1f5f9] px-2.5 py-1 rounded-full w-fit">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#94a3b8] mr-2"></span>
                      Stopped
                    </div>
                  </div>
                  
                  {/* Center */}
                  <div className="flex justify-center items-start">
                    <div className="text-3xl font-bold font-mono tracking-tight text-[#0f172a]">
                      00:00:00
                    </div>
                  </div>

                  {/* Right */}
                  <div className="flex flex-col md:items-end gap-1.5 text-[11px] text-[#64748b] justify-start pt-1">
                    <div>Current session: <span className="text-[#0f172a] font-bold font-mono text-xs">00:00:00</span></div>
                    <div>Breaks today: <span className="text-[#94a3b8] font-medium font-mono text-xs">00:00:00</span></div>
                  </div>
                </div>

                {/* Time Boxes */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">
                  <div className="border border-[#f1f5f9] rounded-[0.75rem] p-4 bg-[#f8fafc]/50">
                    <div className="text-[10px] font-bold text-[#94a3b8] uppercase tracking-wider mb-1">CLOCK IN</div>
                    <div className="font-mono text-sm text-[#0f172a] font-medium">--:--:--</div>
                  </div>
                  <div className="border border-[#f1f5f9] rounded-[0.75rem] p-4 bg-[#f8fafc]/50">
                    <div className="text-[10px] font-bold text-[#94a3b8] uppercase tracking-wider mb-1">CLOCK OUT</div>
                    <div className="font-mono text-sm text-[#0f172a] font-medium">--:--:--</div>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-2.5">
                  <Button className="bg-[#2dd4bf] hover:bg-[#10b981] text-white font-semibold text-xs tracking-wide px-5 py-2 h-8 rounded-md shadow-sm border-none">
                    CLOCK IN
                  </Button>
                  <Button className="bg-[#a855f7] hover:bg-[#9333ea] text-white font-semibold text-xs tracking-wide px-5 py-2 h-8 rounded-md shadow-sm border-none">
                    CLOCK OUT
                  </Button>
                </div>
              </div>

              {/* Stat Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                {[
                  { label: 'Clients', value: '0', icon: User },
                  { label: 'Projects', value: '0', icon: Users },
                  { label: 'Analytics', value: '0', icon: BarChart2 },
                  { label: 'Support Tickets', value: '0', icon: HelpCircle },
                ].map((stat, i) => (
                  <div key={i} className="bg-white rounded-[1rem] p-5 shadow-[0_2px_10px_rgba(0,0,0,0.02)] flex flex-col justify-between h-28 relative">
                    <div className="flex items-center space-x-2.5">
                      <div className="bg-[#f8fafc] p-1.5 rounded-full text-[#0f172a]">
                        <stat.icon className="w-4 h-4" strokeWidth={2.5} />
                      </div>
                      <span className="font-semibold text-[#0f172a] text-sm">{stat.label}</span>
                    </div>
                    
                    <div className="mt-4">
                      <span className="text-2xl font-bold text-[#0f172a]">{stat.value}</span>
                    </div>

                    <div className="absolute bottom-4 right-4">
                      <div className="w-6 h-6 rounded-full border border-[#f1f5f9] flex items-center justify-center text-[#94a3b8]">
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Total Projects */}
              <div className="bg-white rounded-[1rem] p-6 shadow-[0_2px_10px_rgba(0,0,0,0.02)] mb-6">
                <div className="flex justify-between items-center mb-5">
                  <h2 className="text-base font-bold text-[#0f172a]">Total Projects</h2>
                  <button className="text-xs font-semibold text-[#64748b] border border-[#e2e8f0] px-3 py-1.5 rounded-full hover:bg-[#f8fafc] flex items-center transition-colors">
                    View All Projects <ArrowRight className="w-3.5 h-3.5 ml-1" />
                  </button>
                </div>
                
                <div className="rounded-xl overflow-hidden border border-[#f1f5f9]">
                  <table className="w-full text-xs text-left">
                    <thead className="bg-[#f8fafc] border-b border-[#f1f5f9]">
                      <tr>
                        <th className="py-3 px-4 font-bold text-[#475569]">Project Name</th>
                        <th className="py-3 px-4 font-bold text-[#475569]">Client</th>
                        <th className="py-3 px-4 font-bold text-[#475569]">Date</th>
                        <th className="py-3 px-4 font-bold text-[#475569]">Status</th>
                        <th className="py-3 px-4 font-bold text-[#475569]">Priority</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td colSpan={5} className="py-8 text-center text-[#64748b] font-medium bg-white">
                          No projects found
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Bottom Row */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <div className="bg-white rounded-[1rem] p-6 shadow-[0_2px_10px_rgba(0,0,0,0.02)] flex justify-between items-center">
                  <h2 className="text-base font-bold text-[#0f172a]">Clients</h2>
                  <button className="text-xs font-semibold text-[#64748b] border border-[#e2e8f0] px-3 py-1.5 rounded-full hover:bg-[#f8fafc] transition-colors">
                    View all
                  </button>
                </div>
                <div className="bg-white rounded-[1rem] p-6 shadow-[0_2px_10px_rgba(0,0,0,0.02)] flex justify-between items-center">
                  <h2 className="text-base font-bold text-[#0f172a]">Support Tickets</h2>
                  <button className="text-xs font-semibold text-[#64748b] border border-[#e2e8f0] px-3 py-1.5 rounded-full hover:bg-[#f8fafc] flex items-center transition-colors">
                    View All Tickets <ArrowRight className="w-3.5 h-3.5 ml-1" />
                  </button>
                </div>
              </div>
            </div>
          </main>

          {/* Right Sidebar */}
          <aside className="w-80 bg-[#f4f5f8] border-l border-[#e2e8f0]/50 overflow-y-auto hidden xl:block p-6">
            <h2 className="text-sm font-bold text-[#0f172a] mb-4">Latest Activity</h2>
            {/* Activity items would go here */}
          </aside>
        </div>
      </div>
    </div>
  );
}
