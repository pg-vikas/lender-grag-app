import { useState } from "react";
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
  ChevronDown,
  Filter,
  Download,
  Building2,
  ChevronUp,
  Plus,
  X,
  Edit,
  Mail,
  Pin,
  Star,
  Activity
} from "lucide-react";
import { Link, useLocation } from "wouter";
import { useAppStore } from "@/lib/store";

// Reusable Sidebar Component
export function Sidebar({ openMenus, toggleMenu, currentPath }: { openMenus: string, toggleMenu: (m: string) => void, currentPath: string }) {
  const { sidebarOpen } = useAppStore();
  
  return (
    <aside className={`${sidebarOpen ? 'w-[260px]' : 'w-[80px]'} bg-slate-900 border-r border-slate-800 flex flex-col h-screen sticky top-0 shrink-0 transition-all duration-300 z-30`}>
      <div className={`p-5 border-b border-slate-800 flex items-center ${sidebarOpen ? 'justify-between' : 'justify-center'}`}>
        <button className={`flex items-center justify-center bg-slate-800 border border-slate-700 rounded-xl hover:bg-slate-700 transition-all group ${sidebarOpen ? 'w-full py-2.5 px-3 justify-between' : 'w-11 h-11'}`}>
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 text-white flex items-center justify-center overflow-hidden shrink-0 shadow-[0_0_15px_rgba(99,102,241,0.4)] group-hover:shadow-[0_0_20px_rgba(99,102,241,0.6)] transition-shadow">
               <User className="w-4 h-4" />
            </div>
            {sidebarOpen && <span className="text-sm font-bold text-[#e2e8f0] tracking-wide whitespace-nowrap">Super Admin</span>}
          </div>
          {sidebarOpen && <ChevronDown className="w-4 h-4 text-slate-400 shrink-0" />}
        </button>
      </div>

      <div className="flex-1 overflow-y-auto py-6 scrollbar-hide">
        <nav className="space-y-2 px-4">
          <Link href="/home">
            <div className={`flex items-center ${sidebarOpen ? 'justify-between px-4' : 'justify-center px-0'} py-3 rounded-xl transition-all duration-200 cursor-pointer group ${currentPath === '/home' || currentPath === '/' ? 'bg-indigo-500/10 text-indigo-400 border border-indigo-500/30 shadow-[0_0_15px_rgba(99,102,241,0.15)]' : 'text-slate-400 hover:text-[#e2e8f0] hover:bg-slate-800/50'}`}>
              <div className="flex items-center space-x-3">
                <HomeIcon className={`w-5 h-5 shrink-0 ${currentPath === '/home' || currentPath === '/' ? 'text-indigo-400 drop-shadow-[0_0_8px_rgba(99,102,241,0.8)]' : 'group-hover:text-slate-300'}`} />
                {sidebarOpen && <span className="text-sm font-semibold whitespace-nowrap">Dashboard</span>}
              </div>
            </div>
          </Link>
          
          {/* CRM Group */}
          <div className="relative group">
            <button 
              onClick={() => sidebarOpen ? toggleMenu('crm') : null}
              className={`w-full flex items-center ${sidebarOpen ? 'justify-between px-4' : 'justify-center px-0'} py-3 rounded-xl transition-all group ${currentPath.includes('/clients') || currentPath.includes('/tasks') ? 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 shadow-[0_0_15px_rgba(6,182,212,0.15)]' : 'text-slate-400 hover:text-[#e2e8f0] hover:bg-slate-800/50'}`}
              title={!sidebarOpen ? "CRM" : ""}
            >
              <div className="flex items-center space-x-3">
                <Users className={`w-5 h-5 shrink-0 ${currentPath.includes('/clients') ? 'text-cyan-400 drop-shadow-[0_0_8px_rgba(6,182,212,0.8)]' : 'group-hover:text-slate-300'}`} />
                {sidebarOpen && <span className="text-sm font-semibold whitespace-nowrap">CRM</span>}
              </div>
              {sidebarOpen && <ChevronDown className={`w-4 h-4 shrink-0 transition-transform duration-200 ${openMenus === 'crm' || currentPath.includes('/clients') ? '' : '-rotate-90'}`} />}
            </button>
            {useAppStore.getState().sidebarOpen && (openMenus === 'crm' || currentPath.includes('/clients')) && (
              <div className="py-2 space-y-1 animate-in slide-in-from-top-2 duration-200 pl-4 border-l border-slate-800 ml-6 mt-1">
                <Link href="/clients/active">
                  <div className={`block w-[95%] px-3 py-2 text-sm rounded-lg transition-all whitespace-nowrap cursor-pointer ${currentPath === '/clients/active' ? 'bg-cyan-500/20 text-cyan-300 font-medium' : 'text-slate-400 hover:text-[#e2e8f0] hover:bg-slate-800'}`}>
                    Active Agencies
                  </div>
                </Link>
                <Link href="/clients">
                  <div className={`block w-[95%] px-3 py-2 text-sm rounded-lg transition-all whitespace-nowrap cursor-pointer ${currentPath === '/clients' ? 'bg-cyan-500/20 text-cyan-300 font-medium' : 'text-slate-400 hover:text-[#e2e8f0] hover:bg-slate-800'}`}>
                    Agency Directory
                  </div>
                </Link>
                <Link href="/tasks">
                  <div className={`block w-[95%] px-3 py-2 text-sm rounded-lg transition-all whitespace-nowrap cursor-pointer ${currentPath === '/tasks' ? 'bg-cyan-500/20 text-cyan-300 font-medium' : 'text-slate-400 hover:text-[#e2e8f0] hover:bg-slate-800'}`}>
                    Tasks
                  </div>
                </Link>
                <Link href="/growth-kpi">
                  <div className={`block w-[95%] px-3 py-2 text-sm rounded-lg transition-all whitespace-nowrap cursor-pointer ${currentPath === '/growth-kpi' ? 'bg-cyan-500/20 text-cyan-300 font-medium' : 'text-slate-400 hover:text-[#e2e8f0] hover:bg-slate-800'}`}>
                    Growth KPI
                  </div>
                </Link>
              </div>
            )}
          </div>

          {/* Launchpads Group */}
          <div className="relative group">
            <button 
              onClick={() => sidebarOpen ? toggleMenu('launchpads') : null}
              className={`w-full flex items-center ${sidebarOpen ? 'justify-between px-4' : 'justify-center px-0'} py-3 rounded-xl transition-all group ${currentPath.includes('/projects') || currentPath.includes('/launchpads') ? 'bg-purple-500/10 text-purple-400 border border-purple-500/30 shadow-[0_0_15px_rgba(168,85,247,0.15)]' : 'text-slate-400 hover:text-[#e2e8f0] hover:bg-slate-800/50'}`}
              title={!sidebarOpen ? "Launchpads" : ""}
            >
              <div className="flex items-center space-x-3">
                <FolderOpen className={`w-5 h-5 shrink-0 ${currentPath.includes('/projects') || currentPath.includes('/launchpads') ? 'text-purple-400 drop-shadow-[0_0_8px_rgba(168,85,247,0.8)]' : 'group-hover:text-slate-300'}`} />
                {sidebarOpen && <span className="text-sm font-semibold whitespace-nowrap">Launchpads</span>}
              </div>
              {sidebarOpen && <ChevronDown className={`w-4 h-4 shrink-0 transition-transform duration-200 ${openMenus === 'launchpads' || currentPath.includes('/projects') || currentPath.includes('/launchpads') ? '' : '-rotate-90'}`} />}
            </button>
            {useAppStore.getState().sidebarOpen && (openMenus === 'launchpads' || currentPath.includes('/projects') || currentPath.includes('/launchpads')) && (
              <div className="py-2 space-y-1 animate-in slide-in-from-top-2 duration-200 pl-4 border-l border-slate-800 ml-6 mt-1">
                <Link href="/projects">
                  <div className={`block w-[95%] px-3 py-2 text-sm rounded-lg transition-all whitespace-nowrap cursor-pointer ${currentPath.includes('/projects') ? 'bg-purple-500/20 text-purple-300 font-medium' : 'text-slate-400 hover:text-[#e2e8f0] hover:bg-slate-800'}`}>
                    Active Projects
                  </div>
                </Link>
                <Link href="/launchpads/templates">
                  <div className={`block w-[95%] px-3 py-2 text-sm rounded-lg transition-all whitespace-nowrap cursor-pointer ${currentPath.includes('/launchpads/templates') ? 'bg-purple-500/20 text-purple-300 font-medium' : 'text-slate-400 hover:text-[#e2e8f0] hover:bg-slate-800'}`}>
                    Templates
                  </div>
                </Link>
              </div>
            )}
          </div>

          {/* Contracts Group */}
          <div className="relative group">
            <button 
              onClick={() => sidebarOpen ? toggleMenu('contracts') : null}
              className={`w-full flex items-center ${sidebarOpen ? 'justify-between px-4' : 'justify-center px-0'} py-3 rounded-xl transition-all group ${currentPath.includes('/contracts') ? 'bg-yellow-500/10 text-yellow-400 border border-yellow-500/30 shadow-[0_0_15px_rgba(234,179,8,0.15)]' : 'text-slate-400 hover:text-[#e2e8f0] hover:bg-slate-800/50'}`}
              title={!sidebarOpen ? "Contracts" : ""}
            >
              <div className="flex items-center space-x-3">
                <FileText className={`w-5 h-5 shrink-0 ${currentPath.includes('/contracts') ? 'text-yellow-400 drop-shadow-[0_0_8px_rgba(234,179,8,0.8)]' : 'group-hover:text-slate-300'}`} />
                {sidebarOpen && <span className="text-sm font-semibold whitespace-nowrap">Contracts</span>}
              </div>
              {sidebarOpen && <ChevronDown className={`w-4 h-4 shrink-0 transition-transform duration-200 ${openMenus === 'contracts' || currentPath.includes('/contracts') ? '' : '-rotate-90'}`} />}
            </button>
            {useAppStore.getState().sidebarOpen && (openMenus === 'contracts' || currentPath.includes('/contracts')) && (
              <div className="py-2 space-y-1 animate-in slide-in-from-top-2 duration-200 pl-4 border-l border-slate-800 ml-6 mt-1">
                <Link href="/contracts">
                  <div className={`block w-[95%] px-3 py-2 text-sm rounded-lg transition-all whitespace-nowrap cursor-pointer ${currentPath === '/contracts' ? 'bg-yellow-500/20 text-yellow-300 font-medium' : 'text-slate-400 hover:text-[#e2e8f0] hover:bg-slate-800'}`}>
                    Contracts
                  </div>
                </Link>
                <Link href="/contracts/templates">
                  <div className={`block w-[95%] px-3 py-2 text-sm rounded-lg transition-all whitespace-nowrap cursor-pointer ${currentPath === '/contracts/templates' ? 'bg-yellow-500/20 text-yellow-300 font-medium' : 'text-slate-400 hover:text-[#e2e8f0] hover:bg-slate-800'}`}>
                    Templates
                  </div>
                </Link>
              </div>
            )}
          </div>

          {/* Sales Group */}
          <div className="relative group">
            <button 
              onClick={() => sidebarOpen ? toggleMenu('sales') : null}
              className={`w-full flex items-center ${sidebarOpen ? 'justify-between px-4' : 'justify-center px-0'} py-3 rounded-xl transition-all group ${currentPath.includes('/invoices') || currentPath.includes('/payments') || currentPath.includes('/subscriptions') ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 shadow-[0_0_15px_rgba(16,185,129,0.15)]' : 'text-slate-400 hover:text-[#e2e8f0] hover:bg-slate-800/50'}`}
              title={!sidebarOpen ? "Sales" : ""}
            >
              <div className="flex items-center space-x-3">
                <DollarSign className={`w-5 h-5 shrink-0 ${currentPath.includes('/invoices') || currentPath.includes('/payments') ? 'text-emerald-400 drop-shadow-[0_0_8px_rgba(16,185,129,0.8)]' : 'group-hover:text-slate-300'}`} />
                {sidebarOpen && <span className="text-sm font-semibold whitespace-nowrap">Billing</span>}
              </div>
              {sidebarOpen && <ChevronDown className={`w-4 h-4 shrink-0 transition-transform duration-200 ${openMenus === 'sales' || currentPath.includes('/invoices') || currentPath.includes('/payments') ? '' : '-rotate-90'}`} />}
            </button>
            {useAppStore.getState().sidebarOpen && (openMenus === 'sales' || currentPath.includes('/invoices') || currentPath.includes('/payments') || currentPath.includes('/subscriptions')) && (
              <div className="py-2 space-y-1 animate-in slide-in-from-top-2 duration-200 pl-4 border-l border-slate-800 ml-6 mt-1">
                <Link href="/invoices">
                  <div className={`block w-[95%] px-3 py-2 text-sm rounded-lg transition-all whitespace-nowrap cursor-pointer ${currentPath.includes('/invoices') ? 'bg-emerald-500/20 text-emerald-300 font-medium' : 'text-slate-400 hover:text-[#e2e8f0] hover:bg-slate-800'}`}>
                    Invoices
                  </div>
                </Link>
                <Link href="/payments">
                  <div className={`block w-[95%] px-3 py-2 text-sm rounded-lg transition-all whitespace-nowrap cursor-pointer ${currentPath.includes('/payments') ? 'bg-emerald-500/20 text-emerald-300 font-medium' : 'text-slate-400 hover:text-[#e2e8f0] hover:bg-slate-800'}`}>
                    Payments
                  </div>
                </Link>
                <Link href="/subscriptions">
                  <div className={`block w-[95%] px-3 py-2 text-sm rounded-lg transition-all whitespace-nowrap cursor-pointer ${currentPath.includes('/subscriptions') ? 'bg-emerald-500/20 text-emerald-300 font-medium' : 'text-slate-400 hover:text-[#e2e8f0] hover:bg-slate-800'}`}>
                    Subscriptions
                  </div>
                </Link>
              </div>
            )}
          </div>

          {/* Support Group */}
          <div className="relative group">
            <button 
              onClick={() => sidebarOpen ? toggleMenu('support') : null}
              className={`w-full flex items-center ${sidebarOpen ? 'justify-between px-4' : 'justify-center px-0'} py-3 rounded-xl transition-all group ${currentPath.includes('/tickets') || currentPath.includes('/messages') ? 'bg-fuchsia-500/10 text-fuchsia-400 border border-fuchsia-500/30 shadow-[0_0_15px_rgba(217,70,239,0.15)]' : 'text-slate-400 hover:text-[#e2e8f0] hover:bg-slate-800/50'}`}
              title={!sidebarOpen ? "Support" : ""}
            >
              <div className="flex items-center space-x-3">
                <HelpCircle className={`w-5 h-5 shrink-0 ${currentPath.includes('/tickets') || currentPath.includes('/messages') ? 'text-fuchsia-400 drop-shadow-[0_0_8px_rgba(217,70,239,0.8)]' : 'group-hover:text-slate-300'}`} />
                {sidebarOpen && <span className="text-sm font-semibold whitespace-nowrap">Support</span>}
              </div>
              {sidebarOpen && <ChevronDown className={`w-4 h-4 shrink-0 transition-transform duration-200 ${openMenus === 'support' || currentPath.includes('/tickets') || currentPath.includes('/messages') ? '' : '-rotate-90'}`} />}
            </button>
            {useAppStore.getState().sidebarOpen && (openMenus === 'support' || currentPath.includes('/tickets') || currentPath.includes('/messages')) && (
              <div className="py-2 space-y-1 animate-in slide-in-from-top-2 duration-200 pl-4 border-l border-slate-800 ml-6 mt-1">
                <Link href="/tickets">
                  <div className={`block w-[95%] px-3 py-2 text-sm rounded-lg transition-all whitespace-nowrap cursor-pointer ${currentPath.includes('/tickets') ? 'bg-fuchsia-500/20 text-fuchsia-300 font-medium' : 'text-slate-400 hover:text-[#e2e8f0] hover:bg-slate-800'}`}>
                    Active Tickets
                  </div>
                </Link>
                <Link href="/messages">
                  <div className={`block w-[95%] px-3 py-2 text-sm rounded-lg transition-all whitespace-nowrap cursor-pointer ${currentPath.includes('/messages') ? 'bg-fuchsia-500/20 text-fuchsia-300 font-medium' : 'text-slate-400 hover:text-[#e2e8f0] hover:bg-slate-800'}`}>
                    Messages
                  </div>
                </Link>
              </div>
            )}
          </div>

          {/* User Standalone */}
          <Link href="/users">
            <div className={`flex items-center ${sidebarOpen ? 'justify-between px-4' : 'justify-center px-0'} py-3 rounded-xl transition-all duration-200 cursor-pointer group ${currentPath.includes('/users') ? 'bg-rose-500/10 text-rose-400 border border-rose-500/30 shadow-[0_0_15px_rgba(244,63,94,0.15)]' : 'text-slate-400 hover:text-[#e2e8f0] hover:bg-slate-800/50'}`}>
              <div className="flex items-center space-x-3">
                <User className={`w-5 h-5 shrink-0 ${currentPath.includes('/users') ? 'text-rose-400 drop-shadow-[0_0_8px_rgba(244,63,94,0.8)]' : 'group-hover:text-slate-300'}`} />
                {sidebarOpen && <span className="text-sm font-semibold whitespace-nowrap">User</span>}
              </div>
            </div>
          </Link>

          {/* Reports Group */}
          <div className="relative group">
            <button 
              onClick={() => sidebarOpen ? toggleMenu('reports') : null}
              className={`w-full flex items-center ${sidebarOpen ? 'justify-between px-4' : 'justify-center px-0'} py-3 rounded-xl transition-all group ${currentPath.includes('/reports') || currentPath.includes('/analytics') ? 'bg-orange-500/10 text-orange-400 border border-orange-500/30 shadow-[0_0_15px_rgba(249,115,22,0.15)]' : 'text-slate-400 hover:text-[#e2e8f0] hover:bg-slate-800/50'}`}
              title={!sidebarOpen ? "Reports" : ""}
            >
              <div className="flex items-center space-x-3">
                <BarChart2 className={`w-5 h-5 shrink-0 ${currentPath.includes('/reports') || currentPath.includes('/analytics') ? 'text-orange-400 drop-shadow-[0_0_8px_rgba(249,115,22,0.8)]' : 'group-hover:text-slate-300'}`} />
                {sidebarOpen && <span className="text-sm font-semibold whitespace-nowrap">Reports</span>}
              </div>
              {sidebarOpen && <ChevronDown className={`w-4 h-4 shrink-0 transition-transform duration-200 ${openMenus === 'reports' || currentPath.includes('/reports') || currentPath.includes('/analytics') ? '' : '-rotate-90'}`} />}
            </button>
            {useAppStore.getState().sidebarOpen && (openMenus === 'reports' || currentPath.includes('/reports') || currentPath.includes('/analytics')) && (
              <div className="py-2 space-y-1 animate-in slide-in-from-top-2 duration-200 pl-4 border-l border-slate-800 ml-6 mt-1">
                <Link href="/reports">
                  <div className={`block w-[95%] px-3 py-2 text-sm rounded-lg transition-all whitespace-nowrap cursor-pointer ${currentPath === '/reports' ? 'bg-orange-500/20 text-orange-300 font-medium' : 'text-slate-400 hover:text-[#e2e8f0] hover:bg-slate-800'}`}>
                    Reports
                  </div>
                </Link>
                <Link href="/analytics">
                  <div className={`block w-[95%] px-3 py-2 text-sm rounded-lg transition-all whitespace-nowrap cursor-pointer ${currentPath === '/analytics' ? 'bg-orange-500/20 text-orange-300 font-medium' : 'text-slate-400 hover:text-[#e2e8f0] hover:bg-slate-800'}`}>
                    Performance Report
                  </div>
                </Link>
              </div>
            )}
          </div>
        </nav>
      </div>
      
      <div className={`p-5 mt-auto border-t border-slate-800 ${sidebarOpen ? '' : 'flex justify-center px-2'}`}>
         <div className={`rounded-xl bg-slate-950 flex items-center justify-center border border-slate-800 shadow-inner overflow-hidden relative group cursor-pointer ${sidebarOpen ? 'w-full h-14' : 'w-12 h-12'}`}>
           <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity shimmer"></div>
           {sidebarOpen ? (
             <div className="flex items-center gap-2 relative z-10">
                <div className="w-6 h-6 rounded bg-indigo-500/20 border border-indigo-500/50 flex items-center justify-center">
                  <Activity className="w-3.5 h-3.5 text-indigo-400" />
                </div>
                <span className="font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400 tracking-wider text-lg uppercase drop-shadow-[0_0_10px_rgba(99,102,241,0.5)]">
                  GORILLA HUB
                </span>
             </div>
           ) : (
             <span className="font-black text-indigo-400 tracking-tighter text-xl drop-shadow-[0_0_8px_rgba(99,102,241,0.8)] relative z-10">
               GH
             </span>
           )}
         </div>
      </div>
    </aside>
  );
}

// Reusable Header Component
export function Header({ title }: { title: string }) {
  const { toggleSidebar } = useAppStore();

  return (
    <header className="h-[72px] bg-[#0f172a]/90 backdrop-blur-xl flex items-center px-8 shrink-0 sticky top-0 z-20 border-b border-slate-800 shadow-[0_4px_30px_rgba(0,0,0,0.1)]">
      <button 
        onClick={toggleSidebar}
        className="p-2 mr-4 text-slate-400 hover:text-white bg-slate-800/50 hover:bg-slate-700 rounded-lg border border-slate-700 transition-all group"
      >
        <Menu className="w-5 h-5 group-hover:scale-110 transition-transform" />
      </button>
      
      <div className="flex items-center text-sm font-semibold text-slate-400 tracking-wide uppercase">
        Super Admin <span className="mx-3 text-slate-600">/</span> <span className="text-white drop-shadow-[0_0_5px_rgba(255,255,255,0.3)]">{title}</span>
      </div>

      <div className="ml-auto flex items-center space-x-6">
        <div className="relative hidden md:block w-64 group">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 group-focus-within:text-indigo-400 transition-colors" />
          <input 
            type="text"
            placeholder="Global search..." 
            className="w-full pl-10 pr-4 py-2 bg-slate-900 border border-slate-700 rounded-lg text-sm text-white focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/50 transition-all placeholder:text-slate-500"
          />
          <div className="absolute right-2 top-1/2 -translate-y-1/2 flex gap-1">
             <kbd className="hidden sm:inline-block px-1.5 py-0.5 text-[10px] font-mono font-medium text-slate-500 bg-slate-800 border border-slate-700 rounded">⌘</kbd>
             <kbd className="hidden sm:inline-block px-1.5 py-0.5 text-[10px] font-mono font-medium text-slate-500 bg-slate-800 border border-slate-700 rounded">K</kbd>
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold shadow-[0_0_10px_rgba(16,185,129,0.1)] hidden sm:flex">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            System Online
          </div>
          
          <button className="p-2 text-slate-400 hover:text-white bg-slate-800/50 hover:bg-slate-700 rounded-lg border border-slate-700 transition-all relative group">
            <Bell className="w-5 h-5 group-hover:scale-110 transition-transform" />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-rose-500 rounded-full border-2 border-[#0f172a] shadow-[0_0_8px_rgba(244,63,94,0.8)]"></span>
          </button>
        </div>
      </div>
    </header>
  );
}

export default function ClientsPage({ isActiveOnly = false }: { isActiveOnly?: boolean }) {
  const [openMenus, setOpenMenus] = useState<string>('crm');
  const [isAddClientModalOpen, setIsAddClientModalOpen] = useState(false);
  const [isEditClientModalOpen, setIsEditClientModalOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);
  const [location] = useLocation();

  const toggleMenu = (menu: string) => {
    setOpenMenus(prev => prev === menu ? '' : menu);
  };

  const toggleDropdown = (index: number) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  const title = isActiveOnly ? "Active Clients" : "Clients";

  const clientsList = [
    { name: "Pink Gorilla Software", industry: "Information Technology Se...", compliance: false, revenue: "$0.00", billing: "---", contacted: "5 days ago", assigned: "Vinayak Sharma (vinayak@", status: "Active" },
    { name: "Estate Landscape", industry: "Retail Trade", compliance: false, revenue: "$0.00", billing: "---", contacted: "---", assigned: "Maria Christina (maria@pir", status: "Active" },
    { name: "Summit Cabinets", industry: "Retail Trade", compliance: false, revenue: "$0.00", billing: "---", contacted: "---", assigned: "Chayan Alavi (chayan@pin", status: "Active" },
  ];

  return (
    <div className="h-screen w-full overflow-hidden bg-transparent flex font-sans text-[#e2e8f0]">
      <Sidebar openMenus={openMenus} toggleMenu={toggleMenu} currentPath={location} />
      {/* Main Container */}
      <div className="flex-1 flex flex-col min-w-0 bg-[#0f172a] relative">
        <Header title={title} />

        {/* Main Layout */}
        <div className="flex flex-1 overflow-hidden relative z-10">
          {/* Main Content */}
          <main className="flex-1 overflow-y-auto p-6 lg:p-8 scrollbar-hide">
            <div className="max-w-7xl mx-auto">
              
              <div className="flex justify-between items-center mb-8">
                <div>
                  <h1 className="text-3xl font-bold text-white tracking-tight mb-1">{title}</h1>
                  <p className="text-slate-400 text-sm">Manage and monitor all agency accounts</p>
                </div>
                <Button 
                  onClick={() => setIsAddClientModalOpen(true)}
                  className="bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-bold px-6 py-2.5 rounded-lg shadow-[0_0_15px_rgba(6,182,212,0.3)] hover:shadow-[0_0_20px_rgba(6,182,212,0.5)] transition-all flex items-center gap-2 border-none"
                >
                  <Plus className="w-5 h-5" /> New Agency
                </Button>
              </div>

              {/* Filters */}
              <div className="glass-panel p-4 mb-6 rounded-2xl border-t border-cyan-500/20">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                    <input 
                      type="text" 
                      placeholder="Search agencies..." 
                      className="w-full pl-10 pr-4 py-2.5 bg-slate-900/80 border border-slate-700 rounded-xl text-sm text-white focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all placeholder:text-slate-500" 
                    />
                  </div>
                  
                  <div className="flex gap-3">
                    <select className="px-4 py-2.5 bg-slate-900/80 border border-slate-700 rounded-xl text-sm text-slate-300 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all appearance-none pr-8 relative">
                      <option value="">All Industries</option>
                      <option value="it">IT Services</option>
                      <option value="retail">Retail</option>
                    </select>
                    
                    <button className="px-4 py-2.5 bg-slate-800 border border-slate-700 rounded-xl text-slate-300 hover:bg-slate-700 hover:text-white transition-all flex items-center gap-2 text-sm font-medium">
                      <Filter className="w-4 h-4" /> Filters
                    </button>
                  </div>
                </div>
              </div>

              {/* Table */}
              <div className="glass-panel rounded-2xl overflow-hidden border-t border-indigo-500/20">
                <div className="overflow-x-auto">
                  <table className="w-full text-left dark-table">
                    <thead>
                      <tr>
                        <th className="py-4 px-6">Agency Name</th>
                        <th className="py-4 px-6">Industry</th>
                        <th className="py-4 px-6 text-right">MRR</th>
                        <th className="py-4 px-6">Contacted</th>
                        <th className="py-4 px-6">Assigned To</th>
                        <th className="py-4 px-6 text-center">Status</th>
                        <th className="py-4 px-6 w-16"></th>
                      </tr>
                    </thead>
                    <tbody>
                      {clientsList.map((client, i) => (
                        <tr key={i} className="group">
                          <td className="py-4 px-6">
                            <div className="flex items-center gap-3">
                              <div className="w-8 h-8 rounded bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-400 group-hover:bg-cyan-500/10 group-hover:text-cyan-400 group-hover:border-cyan-500/30 transition-colors">
                                <Building2 className="w-4 h-4" />
                              </div>
                              <Link href="/client-details">
                                <span className="text-sm font-bold text-white hover:text-cyan-400 transition-colors cursor-pointer">{client.name}</span>
                              </Link>
                            </div>
                          </td>
                          <td className="py-4 px-6 text-sm text-slate-400">{client.industry}</td>
                          <td className="py-4 px-6 text-sm font-mono text-emerald-400 text-right">{client.revenue}</td>
                          <td className="py-4 px-6 text-sm text-slate-400">{client.contacted}</td>
                          <td className="py-4 px-6 text-sm text-slate-300">
                            <div className="flex items-center gap-2">
                              <div className="w-6 h-6 rounded-full bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center text-[10px] font-bold text-indigo-400">
                                {client.assigned.charAt(0)}
                              </div>
                              <span className="truncate max-w-[120px]">{client.assigned}</span>
                            </div>
                          </td>
                          <td className="py-4 px-6 text-center">
                            <span className="inline-flex items-center px-2.5 py-1 rounded text-xs font-bold border text-emerald-400 bg-emerald-400/10 border-emerald-400/20 shadow-[0_0_10px_rgba(16,185,129,0.1)]">
                              {client.status}
                            </span>
                          </td>
                          <td className="py-4 px-6 text-right relative">
                            <button 
                              onClick={() => toggleDropdown(i)}
                              className="w-8 h-8 rounded-lg flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
                            >
                              <ChevronDown className="w-5 h-5" />
                            </button>
                            
                            {activeDropdown === i && (
                              <div className="absolute right-6 top-12 w-48 glass-panel rounded-xl shadow-2xl border border-slate-700 z-20 py-2 animate-in fade-in slide-in-from-top-2">
                                <button className="w-full text-left px-4 py-2 text-sm text-slate-300 hover:text-white hover:bg-slate-800 transition-colors flex items-center gap-2">
                                  <Edit className="w-4 h-4" /> Edit Profile
                                </button>
                                <button className="w-full text-left px-4 py-2 text-sm text-slate-300 hover:text-white hover:bg-slate-800 transition-colors flex items-center gap-2">
                                  <FileText className="w-4 h-4" /> Manage Subscription
                                </button>
                                <div className="h-px bg-slate-800 my-1"></div>
                                <button className="w-full text-left px-4 py-2 text-sm text-rose-400 hover:text-rose-300 hover:bg-rose-500/10 transition-colors flex items-center gap-2">
                                  Suspend Account
                                </button>
                              </div>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

            </div>
          </main>
        </div>
      </div>
      
      {/* Backdrop for mobile sidebar */}
      {useAppStore.getState().sidebarOpen && (
        <div 
          className="fixed inset-0 bg-slate-900/80 backdrop-blur-sm z-20 lg:hidden"
          onClick={() => useAppStore.getState().toggleSidebar()}
        />
      )}
    </div>
  );
}
