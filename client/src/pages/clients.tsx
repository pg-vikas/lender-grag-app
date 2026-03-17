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
  Activity,
  TrendingUp,
  Link as LinkIcon,
  List,
  Image as ImageIcon,
  Video,
  AlignLeft,
  UploadCloud,
  Bold,
  Italic,
  Underline,
  Rocket
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
              className={`w-full flex items-center ${sidebarOpen ? 'justify-between px-4' : 'justify-center px-0'} py-3 rounded-xl transition-all group ${currentPath.includes('/clients') || currentPath.includes('/tasks') || currentPath.includes('/growth') ? 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 shadow-[0_0_15px_rgba(6,182,212,0.15)]' : 'text-slate-400 hover:text-[#e2e8f0] hover:bg-slate-800/50'}`}
              title={!sidebarOpen ? "CRM" : ""}
            >
              <div className="flex items-center space-x-3">
                <Users className={`w-5 h-5 shrink-0 ${currentPath.includes('/clients') || currentPath.includes('/tasks') || currentPath.includes('/growth') ? 'text-cyan-400 drop-shadow-[0_0_8px_rgba(6,182,212,0.8)]' : 'group-hover:text-slate-300'}`} />
                {sidebarOpen && <span className="text-sm font-semibold whitespace-nowrap">CRM</span>}
              </div>
              {sidebarOpen && <ChevronDown className={`w-4 h-4 shrink-0 transition-transform duration-200 ${openMenus === 'crm' || currentPath.includes('/clients') || currentPath.includes('/tasks') || currentPath.includes('/growth') ? '' : '-rotate-90'}`} />}
            </button>
            {useAppStore.getState().sidebarOpen && (openMenus === 'crm' || currentPath.includes('/clients') || currentPath.includes('/tasks') || currentPath.includes('/growth')) && (
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
                <Link href="/growth/kpi-overview">
                  <div className={`block w-[95%] px-3 py-2 text-sm rounded-lg transition-all whitespace-nowrap cursor-pointer ${currentPath === '/growth/kpi-overview' ? 'bg-cyan-500/20 text-cyan-300 font-medium' : 'text-slate-400 hover:text-[#e2e8f0] hover:bg-slate-800'}`}>
                    Growth KPI
                  </div>
                </Link>
              </div>
            )}
          </div>

          {/* Projects Group */}
          <div className="relative group">
            <button 
              onClick={() => sidebarOpen ? toggleMenu('projects') : null}
              className={`w-full flex items-center ${sidebarOpen ? 'justify-between px-4' : 'justify-center px-0'} py-3 rounded-xl transition-all group ${currentPath.includes('/projects') ? 'bg-purple-500/10 text-purple-400 border border-purple-500/30 shadow-[0_0_15px_rgba(168,85,247,0.15)]' : 'text-slate-400 hover:text-[#e2e8f0] hover:bg-slate-800/50'}`}
              title={!sidebarOpen ? "Projects" : ""}
            >
              <div className="flex items-center space-x-3">
                <FolderOpen className={`w-5 h-5 shrink-0 ${currentPath.includes('/projects') ? 'text-purple-400 drop-shadow-[0_0_8px_rgba(168,85,247,0.8)]' : 'group-hover:text-slate-300'}`} />
                {sidebarOpen && <span className="text-sm font-semibold whitespace-nowrap">Projects</span>}
              </div>
              {sidebarOpen && <ChevronDown className={`w-4 h-4 shrink-0 transition-transform duration-200 ${openMenus === 'projects' || currentPath.includes('/projects') ? '' : '-rotate-90'}`} />}
            </button>
            {useAppStore.getState().sidebarOpen && (openMenus === 'projects' || currentPath.includes('/projects')) && (
              <div className="py-2 space-y-1 animate-in slide-in-from-top-2 duration-200 pl-4 border-l border-slate-800 ml-6 mt-1">
                <Link href="/projects">
                  <div className={`block w-[95%] px-3 py-2 text-sm rounded-lg transition-all whitespace-nowrap cursor-pointer ${currentPath.includes('/projects') ? 'bg-purple-500/20 text-purple-300 font-medium' : 'text-slate-400 hover:text-[#e2e8f0] hover:bg-slate-800'}`}>
                    Active Projects
                  </div>
                </Link>
              </div>
            )}
          </div>

          {/* Launchpads Standalone */}
          <Link href="/launchpads">
            <div className={`flex items-center ${sidebarOpen ? 'justify-between px-4' : 'justify-center px-0'} py-3 rounded-xl transition-all duration-200 cursor-pointer group ${currentPath.includes('/launchpads') ? 'bg-purple-500/10 text-purple-400 border border-purple-500/30 shadow-[0_0_15px_rgba(168,85,247,0.15)]' : 'text-slate-400 hover:text-[#e2e8f0] hover:bg-slate-800/50'}`}>
              <div className="flex items-center space-x-3">
                <Rocket className={`w-5 h-5 shrink-0 ${currentPath.includes('/launchpads') ? 'text-purple-400 drop-shadow-[0_0_8px_rgba(168,85,247,0.8)]' : 'group-hover:text-slate-300'}`} />
                {sidebarOpen && <span className="text-sm font-semibold whitespace-nowrap">Launchpads</span>}
              </div>
            </div>
          </Link>

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
                <Link href="/performance">
                  <div className={`block w-[95%] px-3 py-2 text-sm rounded-lg transition-all whitespace-nowrap cursor-pointer ${currentPath.includes('/performance') ? 'bg-orange-500/20 text-orange-300 font-medium' : 'text-slate-400 hover:text-[#e2e8f0] hover:bg-slate-800'}`}>
                    Performance Report
                  </div>
                </Link>
              </div>
            )}
          </div>
          
          {/* Analytics Standalone */}
          <Link href="/analytics">
            <div className={`flex items-center ${sidebarOpen ? 'justify-between px-4' : 'justify-center px-0'} py-3 rounded-xl transition-all duration-200 cursor-pointer group ${currentPath === '/analytics' && openMenus !== 'reports' ? 'bg-orange-500/10 text-orange-400 border border-orange-500/30 shadow-[0_0_15px_rgba(249,115,22,0.15)]' : 'text-slate-400 hover:text-[#e2e8f0] hover:bg-slate-800/50'}`}>
              <div className="flex items-center space-x-3">
                <BarChart2 className={`w-5 h-5 shrink-0 ${currentPath === '/analytics' && openMenus !== 'reports' ? 'text-orange-400 drop-shadow-[0_0_8px_rgba(249,115,22,0.8)]' : 'group-hover:text-slate-300'}`} />
                {sidebarOpen && <span className="text-sm font-semibold whitespace-nowrap">Analytics</span>}
              </div>
            </div>
          </Link>
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
  const [isSendMailModalOpen, setIsSendMailModalOpen] = useState(false);
  const [isSuspendModalOpen, setIsSuspendModalOpen] = useState(false);
  const [isExportPanelOpen, setIsExportPanelOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);
  const [isStateSectionOpen, setIsStateSectionOpen] = useState(true);
  const [pinnedClients, setPinnedClients] = useState<Set<number>>(new Set());
  const [starredClients, setStarredClients] = useState<Set<number>>(new Set());
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const [location] = useLocation();

  const toggleMenu = (menu: string) => {
    setOpenMenus(prev => prev === menu ? '' : menu);
  };

  const toggleDropdown = (index: number) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  const togglePin = (index: number) => {
    setPinnedClients(prev => {
      const next = new Set(prev);
      if (next.has(index)) next.delete(index);
      else next.add(index);
      return next;
    });
  };

  const toggleStar = (index: number) => {
    setStarredClients(prev => {
      const next = new Set(prev);
      if (next.has(index)) next.delete(index);
      else next.add(index);
      return next;
    });
  };

  const title = isActiveOnly ? "Active Clients" : "Clients";

  const allClients = [
    { name: "Pink Gorilla Software", industry: "Information Technology", compliance: false, revenue: "$0.00", billing: "---", contacted: "5 days ago", assigned: "Vinayak Sharma (vinayak@", status: "Active" },
    { name: "Estate Landscape", industry: "Retail Trade", compliance: false, revenue: "$0.00", billing: "---", contacted: "---", assigned: "Maria Christina (maria@pir", status: "Active" },
    { name: "Summit Cabinets", industry: "Retail Trade", compliance: false, revenue: "$0.00", billing: "---", contacted: "---", assigned: "Chayan Alavi (chayan@pin", status: "Active" },
    { name: "NexGen Dynamics", industry: "Software", compliance: true, revenue: "$150.00", billing: "Paid", contacted: "1 day ago", assigned: "Sarah Connor (sarah@pin", status: "Brand New" },
    { name: "Aqua Pure", industry: "Utilities", compliance: true, revenue: "$50.00", billing: "Pending", contacted: "12 hours ago", assigned: "Mike Ross (mike@pin", status: "Lead" },
    { name: "HealthPlus+", industry: "Healthcare", compliance: false, revenue: "$0.00", billing: "---", contacted: "1 week ago", assigned: "Vinayak Sharma (vinayak@", status: "Nurture" },
    { name: "Blocked Co", industry: "Retail Trade", compliance: false, revenue: "$0.00", billing: "---", contacted: "2 months ago", assigned: "Admin", status: "Suspended" },
    { name: "Red Hot Sales", industry: "Marketing", compliance: true, revenue: "$500.00", billing: "Paid", contacted: "1 hour ago", assigned: "Chayan Alavi (chayan@pin", status: "Hot" },
    { name: "Old Agency", industry: "Real Estate", compliance: false, revenue: "$0.00", billing: "---", contacted: "6 months ago", assigned: "Maria Christina (maria@pir", status: "Inactive" },
  ];

  const filteredClients = activeFilter === 'All' 
    ? allClients 
    : allClients.filter(c => c.status === activeFilter);

  const stats = [
    { label: 'Clients', count: allClients.length, colorClass: 'border-purple-500', filterValue: 'All' },
    { label: 'Active Clients', count: allClients.filter(c=>c.status==='Active').length, colorClass: 'border-purple-400', filterValue: 'Active' },
    { label: 'Brand New Clients', count: allClients.filter(c=>c.status==='Brand New').length, colorClass: 'border-indigo-400', filterValue: 'Brand New' },
    { label: 'Lead Clients', count: allClients.filter(c=>c.status==='Lead').length, colorClass: 'border-blue-500', filterValue: 'Lead' },
    { label: 'Nurture Clients', count: allClients.filter(c=>c.status==='Nurture').length, colorClass: 'border-cyan-500', filterValue: 'Nurture' },
    { label: 'Suspended Clients', count: allClients.filter(c=>c.status==='Suspended').length, colorClass: 'border-orange-400', filterValue: 'Suspended' },
    { label: 'Hot Clients', count: allClients.filter(c=>c.status==='Hot').length, colorClass: 'border-orange-300', filterValue: 'Hot' },
    { label: 'Inactive Clients', count: allClients.filter(c=>c.status==='Inactive').length, colorClass: 'border-rose-400', filterValue: 'Inactive' },
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

              {/* Action Bar & Filters */}
              <div className="flex flex-col gap-4 mb-6">
                <div className="flex flex-col md:flex-row justify-between items-center gap-4 glass-panel p-4 rounded-2xl border-t border-cyan-500/20">
                  <div className="flex items-center gap-3 w-full md:w-auto overflow-x-auto pb-2 md:pb-0 scrollbar-hide">
                    <div className="relative min-w-[200px] flex-1 md:flex-none">
                      <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                      <input 
                        type="text" 
                        placeholder="Search..." 
                        className="w-full pl-10 pr-4 py-2.5 bg-slate-900/80 border border-slate-700 rounded-xl text-sm text-white focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all placeholder:text-slate-500" 
                      />
                    </div>
                    
                    <button className="px-4 py-2.5 bg-slate-800 border border-slate-700 rounded-xl text-slate-300 hover:bg-slate-700 hover:text-white transition-all flex items-center gap-2 text-sm font-medium shrink-0">
                      Filter <Filter className="w-4 h-4" />
                    </button>

                    <button 
                      onClick={() => setIsStateSectionOpen(!isStateSectionOpen)}
                      className={`p-2.5 border rounded-xl transition-all flex items-center justify-center shrink-0 ${isStateSectionOpen ? 'bg-indigo-500/20 border-indigo-500/50 text-indigo-400 shadow-[0_0_10px_rgba(99,102,241,0.2)]' : 'bg-slate-800 border-slate-700 text-slate-400 hover:text-white hover:bg-slate-700'}`}
                    >
                      <TrendingUp className="w-5 h-5" />
                    </button>

                    <div className="flex items-center gap-2 shrink-0">
                      <Link href="/tasks?tab=today">
                        <button className="px-3 py-2 bg-slate-800 border border-slate-700 rounded-xl text-sm text-slate-300 font-medium hover:bg-slate-700 hover:text-white transition-colors cursor-pointer">Tasks 0</button>
                      </Link>
                      <Link href="/tasks?tab=missing">
                        <button className="px-3 py-2 bg-slate-800 border border-slate-700 rounded-xl text-sm text-slate-300 font-medium hover:bg-slate-700 hover:text-white transition-colors cursor-pointer">Missing Tasks 0</button>
                      </Link>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 w-full md:w-auto shrink-0">
                    <button 
                      onClick={() => setIsExportPanelOpen(true)}
                      className="px-4 py-2.5 bg-slate-800 border border-slate-700 rounded-xl text-slate-300 hover:bg-slate-700 hover:text-white transition-all flex items-center gap-2 text-sm font-medium"
                    >
                      <Download className="w-4 h-4" /> Export
                    </button>
                  </div>
                </div>

                {/* State Section Toggle */}
                {isStateSectionOpen && (
                  <div className="glass-panel p-6 rounded-2xl border-t border-indigo-500/30 animate-in slide-in-from-top-4 fade-in duration-300 overflow-x-auto scrollbar-hide">
                    <div className="flex md:grid md:grid-cols-4 lg:grid-cols-8 gap-6 min-w-[800px]">
                      {stats.map((stat, idx) => (
                        <div 
                          key={idx}
                          onClick={() => setActiveFilter(stat.filterValue)}
                          className={`flex flex-col gap-2 flex-1 border-b-[3px] pb-3 cursor-pointer transition-all hover:bg-slate-800/30 rounded-t-lg px-2 pt-2 -mx-2 hover:-translate-y-1 ${stat.colorClass} ${activeFilter === stat.filterValue ? 'bg-slate-800/50 shadow-[inset_0_-4px_10px_-4px_rgba(255,255,255,0.1)]' : ''}`}
                        >
                          <span className="text-3xl font-bold text-white">{stat.count}</span>
                          <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">{stat.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Table */}
              <div className="glass-panel rounded-2xl overflow-visible border-t border-indigo-500/20 pb-[100px]">
                <div className="overflow-visible">
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
                      {filteredClients.map((client, i) => {
                        const isPinned = pinnedClients.has(i);
                        const isStarred = starredClients.has(i);
                        
                        return (
                        <tr key={i} className={`group ${isPinned ? 'bg-amber-500/5 border-l-2 border-l-amber-400' : 'border-l-2 border-l-transparent'}`}>
                          <td className="py-4 px-6">
                            <div className="flex items-center gap-3">
                              <div className="w-8 h-8 rounded bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-400 group-hover:bg-cyan-500/10 group-hover:text-cyan-400 group-hover:border-cyan-500/30 transition-colors">
                                <Building2 className="w-4 h-4" />
                              </div>
                              <Link href={`/clients/${i + 1}`}>
                                <span className="text-sm font-bold text-white hover:text-cyan-400 transition-colors cursor-pointer flex items-center gap-2">
                                  {client.name}
                                  {isStarred && <Star className="w-4 h-4 text-yellow-400 fill-yellow-400 drop-shadow-[0_0_8px_rgba(250,204,21,0.5)]" />}
                                </span>
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
                            <span className={`inline-flex items-center px-2.5 py-1 rounded text-xs font-bold border ${
                              client.status === 'Active' ? 'text-emerald-400 bg-emerald-400/10 border-emerald-400/20 shadow-[0_0_10px_rgba(16,185,129,0.1)]' :
                              client.status === 'Pending' ? 'text-yellow-400 bg-yellow-400/10 border-yellow-400/20 shadow-[0_0_10px_rgba(250,204,21,0.1)]' :
                              client.status === 'Suspended' ? 'text-red-400 bg-red-400/10 border-red-400/20 shadow-[0_0_10px_rgba(248,113,113,0.1)]' :
                              client.status === 'Star Client' ? 'text-blue-400 bg-blue-400/10 border-blue-400/20 shadow-[0_0_10px_rgba(96,165,250,0.1)]' :
                              client.status === 'Brand New' ? 'text-indigo-400 bg-indigo-400/10 border-indigo-400/20 shadow-[0_0_10px_rgba(129,140,248,0.1)]' :
                              client.status === 'Lead' ? 'text-cyan-400 bg-cyan-400/10 border-cyan-400/20 shadow-[0_0_10px_rgba(34,211,238,0.1)]' :
                              client.status === 'Nurture' ? 'text-purple-400 bg-purple-400/10 border-purple-400/20 shadow-[0_0_10px_rgba(192,132,252,0.1)]' :
                              client.status === 'Hot' ? 'text-orange-400 bg-orange-400/10 border-orange-400/20 shadow-[0_0_10px_rgba(251,146,60,0.1)]' :
                              'text-slate-400 bg-slate-400/10 border-slate-400/20 shadow-[0_0_10px_rgba(148,163,184,0.1)]'
                            }`}>
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
                                <button 
                                  onClick={() => {
                                    setIsEditClientModalOpen(true);
                                    setActiveDropdown(null);
                                  }}
                                  className="w-full text-left px-4 py-2 text-sm text-slate-300 hover:text-white hover:bg-slate-800 transition-colors flex items-center gap-2"
                                >
                                  <Edit className="w-4 h-4" /> Edit Profile
                                </button>
                                <button 
                                  onClick={() => {
                                    setIsSendMailModalOpen(true);
                                    setActiveDropdown(null);
                                  }}
                                  className="w-full text-left px-4 py-2 text-sm text-slate-300 hover:text-white hover:bg-slate-800 transition-colors flex items-center gap-2"
                                >
                                  <Mail className="w-4 h-4" /> Send Mail
                                </button>
                                <button 
                                  onClick={() => {
                                    togglePin(i);
                                    setActiveDropdown(null);
                                  }}
                                  className="w-full text-left px-4 py-2 text-sm text-slate-300 hover:text-white hover:bg-slate-800 transition-colors flex items-center gap-2"
                                >
                                  <Pin className="w-4 h-4" /> {isPinned ? 'Unpin' : 'Pin'}
                                </button>
                                <button 
                                  onClick={() => {
                                    toggleStar(i);
                                    setActiveDropdown(null);
                                  }}
                                  className="w-full text-left px-4 py-2 text-sm text-slate-300 hover:text-white hover:bg-slate-800 transition-colors flex items-center gap-2"
                                >
                                  <Star className="w-4 h-4" /> {isStarred ? 'Unstar Client' : 'Star Client'}
                                </button>
                                <div className="h-px bg-slate-800 my-1"></div>
                                <button 
                                  onClick={() => {
                                    setIsSuspendModalOpen(true);
                                    setActiveDropdown(null);
                                  }}
                                  className="w-full text-left px-4 py-2 text-sm text-rose-400 hover:text-rose-300 hover:bg-rose-500/10 transition-colors flex items-center gap-2"
                                >
                                  Suspend Account
                                </button>
                              </div>
                            )}
                          </td>
                        </tr>
                      )})}
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

      {/* Add Client Modal */}
      {isAddClientModalOpen && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setIsAddClientModalOpen(false)}
        >
          <div 
            className="bg-slate-900 border border-slate-700 rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col shadow-2xl animate-in fade-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="px-6 py-4 border-b border-slate-800 flex justify-between items-center bg-slate-900/50">
              <h2 className="text-xl font-bold text-white">Add Client</h2>
              <button 
                onClick={() => setIsAddClientModalOpen(false)}
                className="text-slate-400 hover:text-white p-2 hover:bg-slate-800 rounded-lg transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 overflow-y-auto custom-scrollbar flex-1 space-y-8">
              
              {/* Company Details Section */}
              <section className="space-y-6">
                <h3 className="text-lg font-bold text-white tracking-tight border-b border-slate-800 pb-2">Company Details</h3>
                
                <div className="space-y-4">
                  {/* Logo Upload */}
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">Company Logo</label>
                    <div className="w-32 h-32 bg-slate-800/50 border border-slate-700 rounded-xl flex items-center justify-center mb-2">
                      <Building2 className="w-8 h-8 text-slate-500" />
                    </div>
                    <button className="px-6 py-2 bg-slate-800 hover:bg-slate-700 text-sm font-medium text-white rounded-lg transition-colors border border-slate-700">
                      Upload
                    </button>
                  </div>

                  {/* Form Grid 1 */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">Company Name*</label>
                      <input 
                        type="text" 
                        placeholder="Pink Gorilla"
                        className="w-full px-4 py-2.5 bg-slate-900/50 border border-slate-700 rounded-xl text-sm text-white focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all placeholder:text-slate-500" 
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">Company Email</label>
                      <input 
                        type="email" 
                        placeholder="vikas@pinkgorillasoftware.com"
                        className="w-full px-4 py-2.5 bg-indigo-500/10 border border-indigo-500/30 rounded-xl text-sm text-indigo-300 focus:outline-none transition-all placeholder:text-indigo-400/50" 
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">Company Phone Number*</label>
                      <div className="flex">
                        <select className="px-3 py-2.5 bg-slate-900/50 border border-slate-700 border-r-0 rounded-l-xl text-sm text-slate-300 focus:outline-none focus:border-cyan-500/50 transition-all w-20">
                          <option>+1</option>
                        </select>
                        <input 
                          type="tel" 
                          placeholder="9000000001"
                          className="flex-1 px-4 py-2.5 bg-slate-900/50 border border-slate-700 rounded-r-xl text-sm text-white focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all placeholder:text-slate-500" 
                        />
                      </div>
                    </div>
                  </div>

                  {/* Form Grid 2 */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">Website</label>
                      <input 
                        type="url" 
                        placeholder="https://pinkgorilla.agency"
                        className="w-full px-4 py-2.5 bg-slate-900/50 border border-slate-700 rounded-xl text-sm text-white focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all placeholder:text-slate-500" 
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">Company Address</label>
                      <input 
                        type="text" 
                        placeholder="po 12, ABCD, lame road, LA, CA"
                        className="w-full px-4 py-2.5 bg-slate-900/50 border border-slate-700 rounded-xl text-sm text-white focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all placeholder:text-slate-500" 
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">Default Currency</label>
                      <select className="w-full px-4 py-2.5 bg-slate-900/50 border border-slate-700 rounded-xl text-sm text-slate-300 focus:outline-none focus:border-cyan-500/50 transition-all appearance-none">
                        <option>USD</option>
                      </select>
                    </div>
                  </div>

                  {/* Form Grid 3 */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">Default Time Zone</label>
                      <select className="w-full px-4 py-2.5 bg-slate-900/50 border border-slate-700 rounded-xl text-sm text-slate-300 focus:outline-none focus:border-cyan-500/50 transition-all appearance-none">
                        <option>America/Denver</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">Language</label>
                      <select className="w-full px-4 py-2.5 bg-slate-900/50 border border-slate-700 rounded-xl text-sm text-slate-300 focus:outline-none focus:border-cyan-500/50 transition-all appearance-none">
                        <option>English - US</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">Status</label>
                      <select className="w-full px-4 py-2.5 bg-slate-900/50 border border-slate-700 rounded-xl text-sm text-slate-300 focus:outline-none focus:border-cyan-500/50 transition-all appearance-none">
                        <option>Brand New</option>
                      </select>
                    </div>
                  </div>

                  {/* Form Grid 4 */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">Industry</label>
                      <select className="w-full px-4 py-2.5 bg-slate-900/50 border border-slate-700 rounded-xl text-sm text-slate-300 focus:outline-none focus:border-cyan-500/50 transition-all appearance-none">
                        <option>Retail Trade</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">Year in Business</label>
                      <input 
                        type="text" 
                        placeholder="1"
                        className="w-full px-4 py-2.5 bg-slate-900/50 border border-slate-700 rounded-xl text-sm text-white focus:outline-none focus:border-cyan-500/50 transition-all" 
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">No. of Employees</label>
                      <select className="w-full px-4 py-2.5 bg-slate-900/50 border border-slate-700 rounded-xl text-sm text-slate-300 focus:outline-none focus:border-cyan-500/50 transition-all appearance-none">
                        <option>1 - 3</option>
                      </select>
                    </div>
                  </div>
                </div>
              </section>

              {/* Business Discovery Section */}
              <section className="space-y-6">
                <h3 className="text-lg font-bold text-white tracking-tight border-b border-slate-800 pb-2">Business Discovery</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">Yelp URL</label>
                    <input 
                      type="url" 
                      placeholder="https://yelp.com/biz/..."
                      className="w-full px-4 py-2.5 bg-slate-900/50 border border-slate-700 rounded-xl text-sm text-white focus:outline-none focus:border-cyan-500/50 transition-all placeholder:text-slate-500" 
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">Google URL</label>
                    <input 
                      type="url" 
                      placeholder="https://google.com/maps/..."
                      className="w-full px-4 py-2.5 bg-slate-900/50 border border-slate-700 rounded-xl text-sm text-white focus:outline-none focus:border-cyan-500/50 transition-all placeholder:text-slate-500" 
                    />
                  </div>
                </div>
                
                <button className="bg-purple-600 hover:bg-purple-500 text-white font-medium px-4 py-2 rounded-lg text-sm transition-colors flex items-center gap-2">
                  <Plus className="w-4 h-4" /> Add Link
                </button>

                <div className="flex items-center justify-between border-t border-slate-800 pt-6">
                  <span className="text-sm font-medium text-slate-300">Background</span>
                  <button className="w-11 h-6 bg-slate-700 rounded-full relative transition-colors focus:outline-none cursor-pointer">
                    <span className="absolute left-1 top-1 w-4 h-4 bg-slate-400 rounded-full transition-transform"></span>
                  </button>
                </div>
              </section>

              {/* Employee Details Section */}
              <section className="space-y-6">
                <h3 className="text-lg font-bold text-white tracking-tight border-b border-slate-800 pb-2">Employee Details</h3>
                
                <div className="border border-slate-700 rounded-xl p-6 space-y-6 bg-slate-800/20">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">First Name</label>
                      <input 
                        type="text" 
                        placeholder="Jordan"
                        className="w-full px-4 py-2.5 bg-slate-900/50 border border-slate-700 rounded-xl text-sm text-white focus:outline-none focus:border-cyan-500/50 transition-all placeholder:text-slate-500" 
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">Last Name</label>
                      <input 
                        type="text" 
                        placeholder="Peterson"
                        className="w-full px-4 py-2.5 bg-slate-900/50 border border-slate-700 rounded-xl text-sm text-white focus:outline-none focus:border-cyan-500/50 transition-all placeholder:text-slate-500" 
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">Email Address</label>
                      <input 
                        type="email" 
                        placeholder="email@domain.com"
                        className="w-full px-4 py-2.5 bg-slate-900/50 border border-slate-700 rounded-xl text-sm text-white focus:outline-none focus:border-cyan-500/50 transition-all placeholder:text-slate-500" 
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">Phone</label>
                      <div className="flex">
                        <select className="px-3 py-2.5 bg-slate-900/50 border border-slate-700 border-r-0 rounded-l-xl text-sm text-slate-300 focus:outline-none focus:border-cyan-500/50 transition-all w-20">
                          <option>+1</option>
                        </select>
                        <input 
                          type="tel" 
                          placeholder="9876543210"
                          className="flex-1 px-4 py-2.5 bg-slate-900/50 border border-slate-700 rounded-r-xl text-sm text-white focus:outline-none focus:border-cyan-500/50 transition-all placeholder:text-slate-500" 
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">Title</label>
                      <select className="w-full px-4 py-2.5 bg-slate-900/50 border border-slate-700 rounded-xl text-sm text-slate-300 focus:outline-none focus:border-cyan-500/50 transition-all appearance-none">
                        <option>HR</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">Password</label>
                      <input 
                        type="password" 
                        placeholder="••••••••••"
                        value="password123"
                        className="w-full px-4 py-2.5 bg-indigo-500/10 border border-indigo-500/30 rounded-xl text-sm text-indigo-300 focus:outline-none transition-all placeholder:text-indigo-400/50" 
                        readOnly
                      />
                    </div>
                  </div>
                </div>

                <button className="bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white font-medium px-4 py-2 rounded-lg text-sm transition-colors border border-slate-700 flex items-center gap-2">
                  <Plus className="w-4 h-4" /> Add Another
                </button>
              </section>

            </div>

            {/* Modal Footer */}
            <div className="px-6 py-4 border-t border-slate-800 bg-slate-900/80 flex justify-end gap-3">
              <button 
                onClick={() => setIsAddClientModalOpen(false)}
                className="px-6 py-2.5 border border-slate-700 text-slate-300 hover:text-white hover:bg-slate-800 rounded-xl font-medium transition-colors"
              >
                Close
              </button>
              <button 
                onClick={() => setIsAddClientModalOpen(false)}
                className="px-6 py-2.5 bg-purple-600 hover:bg-purple-500 text-white rounded-xl font-medium shadow-[0_0_15px_rgba(147,51,234,0.3)] hover:shadow-[0_0_20px_rgba(147,51,234,0.5)] transition-all"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
      {/* Edit Client Modal */}
      {isEditClientModalOpen && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setIsEditClientModalOpen(false)}
        >
          <div 
            className="bg-slate-900 border border-slate-700 rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col shadow-2xl animate-in fade-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="px-6 py-4 border-b border-slate-800 flex justify-between items-center bg-slate-900/50">
              <h2 className="text-xl font-bold text-white">Edit Client Profile</h2>
              <button 
                onClick={() => setIsEditClientModalOpen(false)}
                className="text-slate-400 hover:text-white p-2 hover:bg-slate-800 rounded-lg transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 overflow-y-auto custom-scrollbar flex-1 space-y-8">
              
              {/* Company Details Section */}
              <section className="space-y-6">
                <h3 className="text-lg font-bold text-white tracking-tight border-b border-slate-800 pb-2">Company Details</h3>
                
                <div className="space-y-4">
                  {/* Logo Upload */}
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">Company Logo</label>
                    <div className="w-32 h-32 bg-slate-800/50 border border-slate-700 rounded-xl flex items-center justify-center mb-2">
                      <Building2 className="w-8 h-8 text-slate-500" />
                    </div>
                    <button className="px-6 py-2 bg-slate-800 hover:bg-slate-700 text-sm font-medium text-white rounded-lg transition-colors border border-slate-700">
                      Upload
                    </button>
                  </div>

                  {/* Form Grid 1 */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">Company Name*</label>
                      <input 
                        type="text" 
                        defaultValue="Pink Gorilla Software"
                        className="w-full px-4 py-2.5 bg-slate-900/50 border border-slate-700 rounded-xl text-sm text-white focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all placeholder:text-slate-500" 
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">Company Email</label>
                      <input 
                        type="email" 
                        defaultValue="vikas@pinkgorillasoftware.com"
                        className="w-full px-4 py-2.5 bg-indigo-500/10 border border-indigo-500/30 rounded-xl text-sm text-indigo-300 focus:outline-none transition-all placeholder:text-indigo-400/50" 
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">Company Phone Number*</label>
                      <div className="flex">
                        <select className="px-3 py-2.5 bg-slate-900/50 border border-slate-700 border-r-0 rounded-l-xl text-sm text-slate-300 focus:outline-none focus:border-cyan-500/50 transition-all w-20">
                          <option>+1</option>
                        </select>
                        <input 
                          type="tel" 
                          defaultValue="9000000001"
                          className="flex-1 px-4 py-2.5 bg-slate-900/50 border border-slate-700 rounded-r-xl text-sm text-white focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all placeholder:text-slate-500" 
                        />
                      </div>
                    </div>
                  </div>

                  {/* Form Grid 2 */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">Website</label>
                      <input 
                        type="url" 
                        defaultValue="https://pinkgorilla.agency"
                        className="w-full px-4 py-2.5 bg-slate-900/50 border border-slate-700 rounded-xl text-sm text-white focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all placeholder:text-slate-500" 
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">Company Address</label>
                      <input 
                        type="text" 
                        defaultValue="po 12, ABCD, lame road, LA, CA"
                        className="w-full px-4 py-2.5 bg-slate-900/50 border border-slate-700 rounded-xl text-sm text-white focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all placeholder:text-slate-500" 
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">Default Currency</label>
                      <select className="w-full px-4 py-2.5 bg-slate-900/50 border border-slate-700 rounded-xl text-sm text-slate-300 focus:outline-none focus:border-cyan-500/50 transition-all appearance-none">
                        <option>USD</option>
                      </select>
                    </div>
                  </div>

                  {/* Form Grid 3 */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">Default Time Zone</label>
                      <select className="w-full px-4 py-2.5 bg-slate-900/50 border border-slate-700 rounded-xl text-sm text-slate-300 focus:outline-none focus:border-cyan-500/50 transition-all appearance-none">
                        <option>America/Denver</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">Language</label>
                      <select className="w-full px-4 py-2.5 bg-slate-900/50 border border-slate-700 rounded-xl text-sm text-slate-300 focus:outline-none focus:border-cyan-500/50 transition-all appearance-none">
                        <option>English - US</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">Status</label>
                      <select className="w-full px-4 py-2.5 bg-slate-900/50 border border-slate-700 rounded-xl text-sm text-slate-300 focus:outline-none focus:border-cyan-500/50 transition-all appearance-none">
                        <option>Active</option>
                        <option>Brand New</option>
                      </select>
                    </div>
                  </div>

                  {/* Form Grid 4 */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">Industry</label>
                      <select className="w-full px-4 py-2.5 bg-slate-900/50 border border-slate-700 rounded-xl text-sm text-slate-300 focus:outline-none focus:border-cyan-500/50 transition-all appearance-none">
                        <option>Information Technology Services</option>
                        <option>Retail Trade</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">Year in Business</label>
                      <input 
                        type="text" 
                        defaultValue="5"
                        className="w-full px-4 py-2.5 bg-slate-900/50 border border-slate-700 rounded-xl text-sm text-white focus:outline-none focus:border-cyan-500/50 transition-all" 
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">No. of Employees</label>
                      <select className="w-full px-4 py-2.5 bg-slate-900/50 border border-slate-700 rounded-xl text-sm text-slate-300 focus:outline-none focus:border-cyan-500/50 transition-all appearance-none">
                        <option>10 - 50</option>
                        <option>1 - 3</option>
                      </select>
                    </div>
                  </div>
                </div>
              </section>

              {/* Business Discovery Section */}
              <section className="space-y-6">
                <h3 className="text-lg font-bold text-white tracking-tight border-b border-slate-800 pb-2">Business Discovery</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">Yelp URL</label>
                    <input 
                      type="url" 
                      defaultValue="https://yelp.com/biz/pink-gorilla-software"
                      className="w-full px-4 py-2.5 bg-slate-900/50 border border-slate-700 rounded-xl text-sm text-white focus:outline-none focus:border-cyan-500/50 transition-all placeholder:text-slate-500" 
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">Google URL</label>
                    <input 
                      type="url" 
                      defaultValue="https://google.com/maps/place/Pink+Gorilla"
                      className="w-full px-4 py-2.5 bg-slate-900/50 border border-slate-700 rounded-xl text-sm text-white focus:outline-none focus:border-cyan-500/50 transition-all placeholder:text-slate-500" 
                    />
                  </div>
                </div>
                
                <button className="bg-purple-600 hover:bg-purple-500 text-white font-medium px-4 py-2 rounded-lg text-sm transition-colors flex items-center gap-2">
                  <Plus className="w-4 h-4" /> Add Link
                </button>

                <div className="flex items-center justify-between border-t border-slate-800 pt-6">
                  <span className="text-sm font-medium text-slate-300">Background</span>
                  <button className="w-11 h-6 bg-cyan-500 rounded-full relative transition-colors focus:outline-none cursor-pointer">
                    <span className="absolute left-[22px] top-1 w-4 h-4 bg-white rounded-full transition-transform shadow-[0_0_5px_rgba(0,0,0,0.2)]"></span>
                  </button>
                </div>
              </section>

              {/* Employee Details Section */}
              <section className="space-y-6">
                <h3 className="text-lg font-bold text-white tracking-tight border-b border-slate-800 pb-2">Employee Details</h3>
                
                <div className="border border-slate-700 rounded-xl p-6 space-y-6 bg-slate-800/20">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">First Name</label>
                      <input 
                        type="text" 
                        defaultValue="Vinayak"
                        className="w-full px-4 py-2.5 bg-slate-900/50 border border-slate-700 rounded-xl text-sm text-white focus:outline-none focus:border-cyan-500/50 transition-all placeholder:text-slate-500" 
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">Last Name</label>
                      <input 
                        type="text" 
                        defaultValue="Sharma"
                        className="w-full px-4 py-2.5 bg-slate-900/50 border border-slate-700 rounded-xl text-sm text-white focus:outline-none focus:border-cyan-500/50 transition-all placeholder:text-slate-500" 
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">Email Address</label>
                      <input 
                        type="email" 
                        defaultValue="vinayak@pinkgorillasoftware.com"
                        className="w-full px-4 py-2.5 bg-slate-900/50 border border-slate-700 rounded-xl text-sm text-white focus:outline-none focus:border-cyan-500/50 transition-all placeholder:text-slate-500" 
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">Phone</label>
                      <div className="flex">
                        <select className="px-3 py-2.5 bg-slate-900/50 border border-slate-700 border-r-0 rounded-l-xl text-sm text-slate-300 focus:outline-none focus:border-cyan-500/50 transition-all w-20">
                          <option>+1</option>
                        </select>
                        <input 
                          type="tel" 
                          defaultValue="9876543210"
                          className="flex-1 px-4 py-2.5 bg-slate-900/50 border border-slate-700 rounded-r-xl text-sm text-white focus:outline-none focus:border-cyan-500/50 transition-all placeholder:text-slate-500" 
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">Title</label>
                      <select className="w-full px-4 py-2.5 bg-slate-900/50 border border-slate-700 rounded-xl text-sm text-slate-300 focus:outline-none focus:border-cyan-500/50 transition-all appearance-none">
                        <option>Manager</option>
                        <option>HR</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">Password</label>
                      <input 
                        type="password" 
                        placeholder="••••••••••"
                        defaultValue="password123"
                        className="w-full px-4 py-2.5 bg-indigo-500/10 border border-indigo-500/30 rounded-xl text-sm text-indigo-300 focus:outline-none transition-all placeholder:text-indigo-400/50" 
                        readOnly
                      />
                    </div>
                  </div>
                </div>

                <button className="bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white font-medium px-4 py-2 rounded-lg text-sm transition-colors border border-slate-700 flex items-center gap-2">
                  <Plus className="w-4 h-4" /> Add Another
                </button>
              </section>

            </div>

            {/* Modal Footer */}
            <div className="px-6 py-4 border-t border-slate-800 bg-slate-900/80 flex justify-end gap-3">
              <button 
                onClick={() => setIsEditClientModalOpen(false)}
                className="px-6 py-2.5 border border-slate-700 text-slate-300 hover:text-white hover:bg-slate-800 rounded-xl font-medium transition-colors"
              >
                Close
              </button>
              <button 
                onClick={() => setIsEditClientModalOpen(false)}
                className="px-6 py-2.5 bg-purple-600 hover:bg-purple-500 text-white rounded-xl font-medium shadow-[0_0_15px_rgba(147,51,234,0.3)] hover:shadow-[0_0_20px_rgba(147,51,234,0.5)] transition-all"
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Send Mail Modal */}
      {isSendMailModalOpen && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setIsSendMailModalOpen(false)}
        >
          <div 
            className="bg-slate-900 border border-slate-700 rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col shadow-2xl animate-in fade-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="px-6 py-4 border-b border-slate-800 flex justify-between items-center bg-slate-900/50">
              <h2 className="text-xl font-bold text-white">Send email</h2>
              <button 
                onClick={() => setIsSendMailModalOpen(false)}
                className="text-slate-400 hover:text-white p-2 hover:bg-slate-800 rounded-lg transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 overflow-y-auto custom-scrollbar flex-1 space-y-6">
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">To</label>
                <select className="w-full px-4 py-2.5 bg-slate-900/50 border border-slate-700 rounded-xl text-sm text-slate-300 focus:outline-none focus:border-cyan-500/50 transition-all appearance-none">
                  <option>Select recipient...</option>
                  <option>vikas@pinkgorillasoftware.com</option>
                  <option>maria@pir</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Subject</label>
                <input 
                  type="text" 
                  placeholder="Enter subject"
                  className="w-full px-4 py-2.5 bg-slate-900/50 border border-slate-700 rounded-xl text-sm text-white focus:outline-none focus:border-cyan-500/50 transition-all placeholder:text-slate-500" 
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Use A Template</label>
                <select className="w-full px-4 py-2.5 bg-slate-900/50 border border-slate-700 rounded-xl text-sm text-slate-300 focus:outline-none focus:border-cyan-500/50 transition-all appearance-none">
                  <option>Select template...</option>
                  <option>Welcome Email</option>
                  <option>Follow Up</option>
                </select>
              </div>

              {/* Rich Text Editor */}
              <div className="border border-slate-700 rounded-xl overflow-hidden bg-slate-900/50">
                <div className="px-4 py-2 border-b border-slate-700 flex items-center gap-4 text-slate-400 overflow-x-auto">
                  <button className="hover:text-white transition-colors"><Bold className="w-4 h-4" /></button>
                  <button className="hover:text-white transition-colors"><LinkIcon className="w-4 h-4" /></button>
                  <button className="hover:text-white transition-colors"><List className="w-4 h-4" /></button>
                  <button className="hover:text-white transition-colors"><AlignLeft className="w-4 h-4" /></button>
                  <div className="w-px h-4 bg-slate-700"></div>
                  <button className="hover:text-white transition-colors"><ImageIcon className="w-4 h-4" /></button>
                  <button className="hover:text-white transition-colors"><Video className="w-4 h-4" /></button>
                </div>
                <textarea 
                  className="w-full h-48 px-4 py-3 bg-transparent text-sm text-white focus:outline-none resize-none placeholder:text-slate-600"
                  placeholder="Write your email here..."
                ></textarea>
              </div>

              {/* File Upload Dropzone */}
              <div className="border-2 border-dashed border-slate-700 rounded-xl p-8 flex flex-col items-center justify-center text-slate-400 hover:text-white hover:border-slate-500 hover:bg-slate-800/50 transition-all cursor-pointer group">
                <UploadCloud className="w-10 h-10 mb-3 text-slate-500 group-hover:text-cyan-400 transition-colors" />
                <p className="text-sm font-medium">Drop files here or click to upload</p>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="px-6 py-4 border-t border-slate-800 bg-slate-900/80 flex justify-end gap-3">
              <button 
                onClick={() => setIsSendMailModalOpen(false)}
                className="px-6 py-2.5 border border-slate-700 text-slate-300 hover:text-white hover:bg-slate-800 rounded-xl font-medium transition-colors"
              >
                Close
              </button>
              <button 
                onClick={() => setIsSendMailModalOpen(false)}
                className="px-6 py-2.5 bg-purple-600 hover:bg-purple-500 text-white rounded-xl font-medium shadow-[0_0_15px_rgba(147,51,234,0.3)] hover:shadow-[0_0_20px_rgba(147,51,234,0.5)] transition-all"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Suspend Client Modal (Used for Delete/Suspend) */}
      {isSuspendModalOpen && (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4">
          <div className="bg-[#111827] rounded-2xl border border-slate-800 shadow-2xl w-full max-w-[400px] p-8 flex flex-col items-center animate-in zoom-in-95 duration-200">
            <h2 className="text-[20px] font-bold text-white mb-2">Delete Client</h2>
            <p className="text-[15px] text-slate-300 mb-8">
              Are you sure?
            </p>
            
            <div className="flex items-center justify-center gap-4 w-full">
              <button 
                onClick={() => setIsSuspendModalOpen(false)}
                className="px-6 py-2.5 bg-[#1e293b] border border-slate-700 hover:bg-slate-800 text-white rounded-xl text-sm font-medium transition-colors w-28"
              >
                Cancel
              </button>
              <button 
                onClick={() => setIsSuspendModalOpen(false)}
                className="px-6 py-2.5 bg-[#8b5cf6] hover:bg-[#7c3aed] text-white rounded-xl text-sm font-medium transition-all w-28 shadow-[0_0_15px_rgba(139,92,246,0.3)]"
              >
                Continue
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Export Slide-in Panel */}
      {isExportPanelOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 transition-opacity"
            onClick={() => setIsExportPanelOpen(false)}
          ></div>
          
          {/* Panel */}
          <div 
            className="fixed top-0 right-0 h-full w-[400px] bg-slate-900 border-l border-slate-800 shadow-2xl z-50 flex flex-col animate-in slide-in-from-right duration-300"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-900/50">
              <div className="flex items-center gap-2 text-white">
                <Download className="w-5 h-5" />
                <h2 className="text-lg font-semibold">Export Clients</h2>
              </div>
              <button 
                onClick={() => setIsExportPanelOpen(false)}
                className="text-slate-400 hover:text-white p-2 hover:bg-slate-800 rounded-lg transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            {/* Content */}
            <div className="flex-1 overflow-y-auto p-6 scrollbar-hide space-y-8">
              {/* Date Created */}
              <div className="space-y-4">
                <h3 className="text-sm font-medium text-slate-300">Date Created</h3>
                <div className="flex flex-wrap gap-2">
                  <button className="px-3 py-1.5 text-xs font-medium bg-indigo-500/10 text-indigo-400 border border-indigo-500/30 rounded-md">Today</button>
                  <button className="px-3 py-1.5 text-xs font-medium text-slate-400 border border-slate-700 rounded-md hover:bg-slate-800 hover:text-white transition-colors">This Week</button>
                  <button className="px-3 py-1.5 text-xs font-medium text-slate-400 border border-slate-700 rounded-md hover:bg-slate-800 hover:text-white transition-colors">This Month</button>
                  <button className="px-3 py-1.5 text-xs font-medium text-slate-400 border border-slate-700 rounded-md hover:bg-slate-800 hover:text-white transition-colors">All Time</button>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex-1">
                    <input 
                      type="text" 
                      placeholder="From"
                      className="w-full px-3 py-2 bg-slate-900/50 border border-slate-700 rounded-lg text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-cyan-500/50" 
                    />
                  </div>
                  <div className="flex-1">
                    <input 
                      type="text" 
                      placeholder="To"
                      className="w-full px-3 py-2 bg-slate-900/50 border border-slate-700 rounded-lg text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-cyan-500/50" 
                    />
                  </div>
                </div>
              </div>

              <div className="h-px bg-slate-800 w-full"></div>

              {/* Fields */}
              <div className="space-y-4">
                <h3 className="text-sm font-medium text-slate-300">Fields</h3>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    "Company Name", "Date Created", 
                    "Company Email", "Phone No.",
                    "Industry", "Employee email",
                    "Assignee", "Status"
                  ].map((field) => (
                    <label key={field} className="flex items-center gap-3 cursor-pointer group">
                      <div className="relative flex items-center justify-center">
                        <input type="checkbox" defaultChecked className="peer sr-only" />
                        <div className="w-5 h-5 rounded border border-slate-600 bg-slate-900 peer-checked:bg-[#8b5cf6] peer-checked:border-[#8b5cf6] transition-colors flex items-center justify-center shadow-[0_0_10px_rgba(139,92,246,0)] peer-checked:shadow-[0_0_10px_rgba(139,92,246,0.3)]">
                          <svg className="w-3.5 h-3.5 text-white opacity-0 peer-checked:opacity-100 transition-opacity" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                      </div>
                      <span className="text-sm text-slate-300 group-hover:text-white transition-colors">{field}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Footer */}
            <div className="p-6 border-t border-slate-800 bg-slate-900/80 flex justify-center">
              <button 
                onClick={() => {
                  // Client export logic
                  import('xlsx').then(XLSX => {
                    const ws = XLSX.utils.json_to_sheet(allClients);
                    const wb = XLSX.utils.book_new();
                    XLSX.utils.book_append_sheet(wb, ws, "Clients");
                    XLSX.writeFile(wb, "clients_export.xlsx");
                    setIsExportPanelOpen(false);
                  });
                }}
                className="w-1/2 py-2.5 bg-[#8b5cf6] hover:bg-[#7c3aed] text-white rounded-lg font-medium shadow-[0_0_15px_rgba(139,92,246,0.3)] hover:shadow-[0_0_20px_rgba(139,92,246,0.5)] transition-all"
              >
                Export
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
