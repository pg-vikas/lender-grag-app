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
  Star
} from "lucide-react";
import { Link, useLocation } from "wouter";
import { useAppStore } from "@/lib/store";

// Reusable Sidebar Component
export function Sidebar({ openMenus, toggleMenu, currentPath }: { openMenus: string, toggleMenu: (m: string) => void, currentPath: string }) {
  const { sidebarOpen } = useAppStore();
  
  return (
    <aside className={`${sidebarOpen ? 'w-[240px]' : 'w-[72px]'} sidebar-gradient text-white flex flex-col border-r border-white/10 shadow-2xl hidden lg:flex h-screen sticky top-0 shrink-0 transition-all duration-300 z-20`}>
      <div className={`p-4 border-b border-white/10 flex items-center ${sidebarOpen ? 'justify-between' : 'justify-center'}`}>
        <button className={`flex items-center justify-center bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-all ${sidebarOpen ? 'w-full py-2 px-3 justify-between' : 'w-10 h-10'}`}>
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-indigo-600 text-white flex items-center justify-center overflow-hidden shrink-0 shadow-lg">
               <User className="w-4 h-4" />
            </div>
            {sidebarOpen && <span className="text-sm font-semibold tracking-wide whitespace-nowrap">Neeraj Kumar</span>}
          </div>
          {sidebarOpen && <ChevronDown className="w-4 h-4 text-white/50 shrink-0" />}
        </button>
      </div>

      <div className="flex-1 overflow-y-auto py-4 scrollbar-hide">
        <nav className="space-y-1.5 px-3">
          <Link href="/home">
            <div className={`flex items-center ${sidebarOpen ? 'justify-between px-4' : 'justify-center px-0'} py-3 rounded-xl transition-all duration-200 cursor-pointer ${currentPath === '/home' ? 'bg-white/10 text-white shadow-lg border border-white/10' : 'text-white/60 hover:text-white hover:bg-white/5'}`}>
              <div className="flex items-center space-x-3">
                <HomeIcon className={`w-5 h-5 shrink-0 ${currentPath === '/home' ? 'text-purple-400' : ''}`} />
                {sidebarOpen && <span className="text-sm font-medium whitespace-nowrap">Dashboard</span>}
              </div>
            </div>
          </Link>
          
          {/* CRM Group */}
          <div className="relative group">
            <button 
              onClick={() => sidebarOpen ? toggleMenu('crm') : toggleSidebar()}
              className={`w-full flex items-center ${sidebarOpen ? 'justify-between px-4' : 'justify-center px-0'} py-3 rounded-xl text-white/60 hover:text-white hover:bg-white/5 transition-all`}
              title={!sidebarOpen ? "CRM" : ""}
            >
              <div className="flex items-center space-x-3">
                <Users className="w-5 h-5 shrink-0" />
                {sidebarOpen && <span className="text-sm font-medium whitespace-nowrap">CRM</span>}
              </div>
              {sidebarOpen && <ChevronDown className={`w-4 h-4 shrink-0 transition-transform duration-200 ${openMenus === 'crm' ? '' : '-rotate-90'}`} />}
            </button>
            {sidebarOpen && openMenus === 'crm' && (
              <div className="py-1.5 space-y-1 animate-in slide-in-from-top-2 duration-200">
                <Link href="/clients/active">
                  <div className={`block w-[90%] ml-auto px-4 py-2 text-sm rounded-lg transition-all whitespace-nowrap cursor-pointer ${currentPath === '/clients/active' ? 'bg-white/10 text-white shadow-sm border border-white/5' : 'text-white/50 hover:text-white hover:bg-white/5'}`}>
                    Active Clients
                  </div>
                </Link>
                <Link href="/clients">
                  <div className={`block w-[90%] ml-auto px-4 py-2 text-sm rounded-lg transition-all whitespace-nowrap cursor-pointer ${currentPath === '/clients' ? 'bg-white/10 text-white shadow-sm border border-white/5' : 'text-white/50 hover:text-white hover:bg-white/5'}`}>
                    Clients
                  </div>
                </Link>
                <Link href="/tasks">
                  <div className={`block w-[90%] ml-auto px-4 py-2 text-sm rounded-lg transition-all whitespace-nowrap cursor-pointer ${currentPath === '/tasks' ? 'bg-white/10 text-white shadow-sm border border-white/5' : 'text-white/50 hover:text-white hover:bg-white/5'}`}>
                    Tasks
                  </div>
                </Link>
              </div>
            )}
          </div>

          <Link href="/projects">
            <div className={`flex items-center ${sidebarOpen ? 'justify-between px-4' : 'justify-center px-0'} py-3 rounded-xl transition-all duration-200 cursor-pointer ${currentPath === '.*' ? 'bg-white/10 text-white shadow-lg border border-white/10' : 'text-white/60 hover:text-white hover:bg-white/5'}`}>
              <div className="flex items-center space-x-3">
                <FolderOpen className="w-5 h-5 shrink-0" />
                {sidebarOpen && <span className="text-sm font-medium whitespace-nowrap">Projects</span>}
              </div>
            </div>
          </Link>

          {/* Sales Group */}
          <div className="relative group">
            <button 
              onClick={() => sidebarOpen ? toggleMenu('sales') : toggleSidebar()}
              className={`w-full flex items-center ${sidebarOpen ? 'justify-between px-4' : 'justify-center px-0'} py-3 rounded-xl text-white/60 hover:text-white hover:bg-white/5 transition-all`}
              title={!sidebarOpen ? "Sales" : ""}
            >
              <div className="flex items-center space-x-3">
                <DollarSign className="w-5 h-5 shrink-0" />
                {sidebarOpen && <span className="text-sm font-medium whitespace-nowrap">Sales</span>}
              </div>
              {sidebarOpen && <ChevronDown className={`w-4 h-4 shrink-0 transition-transform duration-200 ${openMenus === 'sales' ? '' : '-rotate-90'}`} />}
            </button>
            {sidebarOpen && openMenus === 'sales' && (
              <div className="py-1.5 space-y-1 animate-in slide-in-from-top-2 duration-200">
                <Link href="/invoices">
                  <div className={`block w-[90%] ml-auto px-4 py-2 text-sm rounded-lg transition-all whitespace-nowrap cursor-pointer ${currentPath === '.*' ? 'bg-white/10 text-white shadow-sm border border-white/5' : 'text-white/50 hover:text-white hover:bg-white/5'}`}>
                    Invoices
                  </div>
                </Link>
                <Link href="/payments">
                  <div className={`block w-[90%] ml-auto px-4 py-2 text-sm rounded-lg transition-all whitespace-nowrap cursor-pointer ${currentPath === '.*' ? 'bg-white/10 text-white shadow-sm border border-white/5' : 'text-white/50 hover:text-white hover:bg-white/5'}`}>
                    Payments
                  </div>
                </Link>
                <Link href="/subscriptions">
                  <div className={`block w-[90%] ml-auto px-4 py-2 text-sm rounded-lg transition-all whitespace-nowrap cursor-pointer ${currentPath === '.*' ? 'bg-white/10 text-white shadow-sm border border-white/5' : 'text-white/50 hover:text-white hover:bg-white/5'}`}>
                    Subscriptions
                  </div>
                </Link>
              </div>
            )}
          </div>

          {/* Contracts Group */}
          <div className="relative group">
            <button 
              onClick={() => sidebarOpen ? toggleMenu('contracts') : toggleSidebar()}
              className={`w-full flex items-center ${sidebarOpen ? 'justify-between px-4' : 'justify-center px-0'} py-3 rounded-xl text-white/60 hover:text-white hover:bg-white/5 transition-all`}
              title={!sidebarOpen ? "Contracts" : ""}
            >
              <div className="flex items-center space-x-3">
                <FileText className="w-5 h-5 shrink-0" />
                {sidebarOpen && <span className="text-sm font-medium whitespace-nowrap">Contracts</span>}
              </div>
              {sidebarOpen && <ChevronDown className={`w-4 h-4 shrink-0 transition-transform duration-200 ${openMenus === 'contracts' ? '' : '-rotate-90'}`} />}
            </button>
            {sidebarOpen && openMenus === 'contracts' && (
              <div className="py-1.5 space-y-1 animate-in slide-in-from-top-2 duration-200">
                <Link href="/contracts">
                  <div className={`block w-[90%] ml-auto px-4 py-2 text-sm rounded-lg transition-all whitespace-nowrap cursor-pointer ${currentPath === '.*' ? 'bg-white/10 text-white shadow-sm border border-white/5' : 'text-white/50 hover:text-white hover:bg-white/5'}`}>
                    Contracts
                  </div>
                </Link>
                <Link href="/templates">
                  <div className={`block w-[90%] ml-auto px-4 py-2 text-sm rounded-lg transition-all whitespace-nowrap cursor-pointer ${currentPath === '.*' ? 'bg-white/10 text-white shadow-sm border border-white/5' : 'text-white/50 hover:text-white hover:bg-white/5'}`}>
                    Templates
                  </div>
                </Link>
              </div>
            )}
          </div>

          {/* Support Group */}
          <div className="relative group">
            <button 
              onClick={() => sidebarOpen ? toggleMenu('support') : toggleSidebar()}
              className={`w-full flex items-center ${sidebarOpen ? 'justify-between px-4' : 'justify-center px-0'} py-3 rounded-xl text-white/60 hover:text-white hover:bg-white/5 transition-all`}
              title={!sidebarOpen ? "Support" : ""}
            >
              <div className="flex items-center space-x-3">
                <MessageSquare className="w-5 h-5 shrink-0" />
                {sidebarOpen && <span className="text-sm font-medium whitespace-nowrap">Support</span>}
              </div>
              {sidebarOpen && <ChevronDown className={`w-4 h-4 shrink-0 transition-transform duration-200 ${openMenus === 'support' ? '' : '-rotate-90'}`} />}
            </button>
            {sidebarOpen && openMenus === 'support' && (
              <div className="py-1.5 space-y-1 animate-in slide-in-from-top-2 duration-200">
                <Link href="/tickets">
                  <div className={`block w-[90%] ml-auto px-4 py-2 text-sm rounded-lg transition-all whitespace-nowrap cursor-pointer ${currentPath === '.*' ? 'bg-white/10 text-white shadow-sm border border-white/5' : 'text-white/50 hover:text-white hover:bg-white/5'}`}>
                    Tickets
                  </div>
                </Link>
                <Link href="/knowledgebase">
                  <div className={`block w-[90%] ml-auto px-4 py-2 text-sm rounded-lg transition-all whitespace-nowrap cursor-pointer ${currentPath === '.*' ? 'bg-white/10 text-white shadow-sm border border-white/5' : 'text-white/50 hover:text-white hover:bg-white/5'}`}>
                    Knowledgebase
                  </div>
                </Link>
              </div>
            )}
          </div>

          <Link href="/users">
            <div className={`flex items-center ${sidebarOpen ? 'justify-between px-4' : 'justify-center px-0'} py-3 rounded-xl transition-all duration-200 cursor-pointer ${currentPath === '.*' ? 'bg-white/10 text-white shadow-lg border border-white/10' : 'text-white/60 hover:text-white hover:bg-white/5'}`}>
              <div className="flex items-center space-x-3">
                <User className="w-5 h-5 shrink-0" />
                {sidebarOpen && <span className="text-sm font-medium whitespace-nowrap">Users</span>}
              </div>
            </div>
          </Link>

          <Link href="/analytics">
            <div className={`flex items-center ${sidebarOpen ? 'justify-between px-4' : 'justify-center px-0'} py-3 rounded-xl transition-all duration-200 cursor-pointer ${currentPath === '.*' ? 'bg-white/10 text-white shadow-lg border border-white/10' : 'text-white/60 hover:text-white hover:bg-white/5'}`}>
              <div className="flex items-center space-x-3">
                <Globe className="w-5 h-5 shrink-0" />
                {sidebarOpen && <span className="text-sm font-medium whitespace-pre-line">Website{"\n"}Analytics</span>}
              </div>
            </div>
          </Link>
        </nav>
      </div>
      
      <div className={`p-4 mt-auto ${sidebarOpen ? '' : 'flex justify-center px-2'}`}>
         <div className={`rounded bg-[#202c40] flex items-center justify-center border border-white/5 ${sidebarOpen ? 'w-full h-12' : 'w-10 h-10'}`}>
           <span className="font-black text-[#22c55e] tracking-tighter text-xl">
             {sidebarOpen ? 'GORILLA HUB' : 'GH'}
           </span>
         </div>
      </div>
    </aside>
  );
}

// Reusable Header Component
export function Header({ title }: { title: string }) {
  const { toggleSidebar } = useAppStore();

  return (
    <header className="h-[64px] glass-panel flex items-center px-6 shrink-0 sticky top-0 z-10 border-b border-white/50 modern-shadow">
      <button 
        onClick={toggleSidebar}
        className="p-2 mr-2 text-[#64748b] hover:text-[#0f172a] rounded-md transition-colors lg:hidden"
      >
        <Menu className="w-5 h-5" />
      </button>
      
      <button 
        onClick={toggleSidebar}
        className="p-2 mr-2 text-[#64748b] hover:text-[#0f172a] rounded-md transition-colors hidden lg:block"
      >
        <Menu className="w-5 h-5" />
      </button>
      
      <div className="flex items-center text-sm font-medium text-[#64748b]">
        CRM <span className="mx-2">/</span> <span className="text-[#64748b]">{title}</span>
      </div>

      <div className="ml-8 relative flex-1 max-w-md hidden sm:block">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#94a3b8]" />
        <input 
          type="text"
          placeholder="Search" 
          className="w-full pl-10 pr-4 py-2 bg-white/50 backdrop-blur-md border border-white/40 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all placeholder:text-[#94a3b8]"
        />
      </div>

      <div className="ml-auto flex items-center space-x-4">
        <span className="text-sm font-medium text-[#64748b] hidden sm:inline-block">SMS Alert</span>
        <button className="p-2 text-[#64748b] hover:text-[#0f172a] rounded-md transition-colors relative">
          <Bell className="w-5 h-5" />
        </button>
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
    <div className="min-h-screen bg-transparent flex font-sans text-[#1e293b]">
      <Sidebar openMenus={openMenus} toggleMenu={toggleMenu} currentPath={location} />

      {/* Main Container */}
      <div className="flex-1 flex flex-col min-w-0 bg-white/30 backdrop-blur-3xl">
        <Header title={title} />

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto p-6 lg:p-8 relative">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-3xl font-bold text-[#0f172a] mb-8">{title}</h1>

            {/* Top Bar with Search and Filter */}
            <div className="bg-white/80 backdrop-blur-md rounded-t-[1rem] p-4 flex flex-col sm:flex-row gap-4 justify-between items-center  border-b border-white/40">
              <div className="flex items-center gap-3 w-full sm:w-auto">
                <div className="relative flex-1 sm:w-64">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#94a3b8]" />
                  <input 
                    type="text"
                    placeholder="Search" 
                    className="w-full pl-10 pr-4 py-2.5 bg-white/80 backdrop-blur-md/80 backdrop-blur-sm border border-white/60/80 rounded-lg text-sm focus:outline-none focus:border-primary/30 transition-all placeholder:text-[#94a3b8]"
                  />
                </div>
                <button className="flex items-center gap-2 px-4 py-2.5 bg-white/80 backdrop-blur-md border border-white/60/80 rounded-xl text-sm font-medium text-[#475569] hover:bg-white/80 backdrop-blur-md transition-all shadow-sm hover:shadow transition-colors whitespace-nowrap">
                  Filter <Filter className="w-3.5 h-3.5" />
                </button>
                <button className="p-2 bg-white/80 backdrop-blur-md/80 backdrop-blur-sm border border-white/60/80 rounded-xl shadow-sm text-[#475569] hover:bg-white/80 backdrop-blur-md/50 transition-colors">
                   <BarChart2 className="w-4 h-4" />
                </button>
              </div>

              <div className="flex items-center gap-3 w-full sm:w-auto">
                <button className="flex items-center gap-2 px-4 py-2.5 bg-white/80 backdrop-blur-md border border-white/60/80 rounded-xl text-sm font-medium text-[#475569] hover:bg-white/80 backdrop-blur-md transition-all shadow-sm hover:shadow transition-colors w-full sm:w-auto justify-center">
                  <Download className="w-3.5 h-3.5" /> Export <ChevronDown className="w-3.5 h-3.5" />
                </button>
                {!isActiveOnly && (
                  <button 
                    onClick={() => setIsAddClientModalOpen(true)}
                    className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] hover:from-[#4f46e5] hover:to-[#7c3aed] text-white rounded-lg text-sm font-medium transition-colors w-full sm:w-auto justify-center shadow-sm whitespace-nowrap"
                  >
                    <Plus className="w-4 h-4" /> Add New Client
                  </button>
                )}
              </div>
            </div>

            {/* Stats Row */}
            <div className="bg-white/80 backdrop-blur-md rounded-b-[1rem] p-4 mb-6  overflow-x-auto">
              <div className="flex w-full divide-x divide-[#f1f5f9] min-w-max">
                {[
                  { value: '4548', label: 'Clients', color: 'bg-purple-500' },
                  { value: '9', label: 'Active', color: 'bg-purple-600' },
                  { value: '4312', label: 'Brand New', color: 'bg-blue-400' },
                  { value: '62', label: 'Lead', color: 'bg-indigo-400' },
                  { value: '0', label: 'Nurture', color: 'bg-white/10 backdrop-blur-mdyan-400' },
                  { value: '156', label: 'Suspended', color: 'bg-orange-400' },
                  { value: '9', label: 'Hot', color: 'bg-amber-400' },
                  { value: '0', label: 'Inactive', color: 'bg-rose-400' },
                ].map((stat, i) => (
                  <div key={i} className="flex-1 flex flex-col px-6 cursor-pointer hover:bg-slate-50 transition-colors py-2 rounded-lg first:ml-0 last:mr-0 group">
                    <span className="text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]xl font-semibold text-[#0f172a] mb-1 group-hover:text-primary transition-colors">{stat.value}</span>
                    <span className="text-[11px] font-medium text-[#64748b] mb-3 group-hover:text-[#475569]">{stat.label}</span>
                    <div className={`h-1 w-full rounded-full ${stat.color} opacity-80`} />
                  </div>
                ))}
              </div>
            </div>

            {/* Clients Table */}
            <div className="modern-card  overflow-hidden border border-white/60">
              <div className="overflow-x-auto">
                <table className="w-full text-sm text-left whitespace-nowrap">
                  <thead className="bg-white/80 backdrop-blur-md/50">
                    <tr>
                      <th className="py-4 px-6 font-semibold text-[#475569] flex items-center gap-1 cursor-pointer hover:text-[#0f172a]">
                        Company Name <ChevronUp className="w-3.5 h-3.5 opacity-50" />
                      </th>
                      <th className="py-4 px-6 font-semibold text-[#475569] cursor-pointer hover:text-[#0f172a]">
                        <div className="flex items-center gap-1">Industry <ChevronUp className="w-3.5 h-3.5 opacity-50" /></div>
                      </th>
                      <th className="py-4 px-6 font-semibold text-[#475569]">Compliance</th>
                      <th className="py-4 px-6 font-semibold text-[#475569]">Revenue</th>
                      <th className="py-4 px-6 font-semibold text-[#475569]">Next Billing</th>
                      <th className="py-4 px-6 font-semibold text-[#475569]">Last Contacted</th>
                      <th className="py-4 px-6 font-semibold text-[#475569]">Assigned to</th>
                      <th className="py-4 px-6 font-semibold text-[#475569] cursor-pointer hover:text-[#0f172a]">
                         <div className="flex items-center gap-1">Status <ChevronUp className="w-3.5 h-3.5 opacity-50" /></div>
                      </th>
                      <th className="py-4 px-6 font-semibold text-[#475569]">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#f1f5f9]">
                    {clientsList.map((client, i) => (
                      <tr key={i} className="hover:bg-white/80 backdrop-blur-md/50/50 transition-colors">
                        <td className="py-4 px-6">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded bg-[#f1f5f9] flex items-center justify-center text-[#94a3b8] shrink-0 border border-white/60">
                              {i === 2 ? <div className="font-black text-xs text-black">SUN<br/>CAB</div> : <Building2 className="w-5 h-5" />}
                            </div>
                            <Link href={`/clients/${i+1}`} className="font-semibold text-[#0f172a] hover:text-[#8b5cf6] transition-colors">{client.name}</Link>
                          </div>
                        </td>
                        <td className="py-4 px-6 text-[#475569]">{client.industry}</td>
                        <td className="py-4 px-6">
                          <span className="inline-flex items-center justify-center px-2.5 py-0.5 rounded-full text-xs font-medium border border-[#94a3b8] text-[#64748b]">
                            No
                          </span>
                        </td>
                        <td className="py-4 px-6 font-medium text-[#0f172a]">{client.revenue}</td>
                        <td className="py-4 px-6 text-[#64748b]">{client.billing}</td>
                        <td className="py-4 px-6 text-[#475569]">{client.contacted}</td>
                        <td className="py-4 px-6">
                          <div className="flex items-center justify-between border border-white/60 rounded px-3 py-1.5 min-w-[200px]">
                            <span className="text-[#475569] truncate max-w-[150px]">{client.assigned}</span>
                            <ChevronDown className="w-3.5 h-3.5 text-[#94a3b8]" />
                          </div>
                        </td>
                        <td className="py-4 px-6">
                          <span className="inline-flex items-center justify-center px-3 py-1 rounded-full text-xs font-semibold border border-[#22c55e] text-[#16a34a] bg-[#f0fdf4]">
                            {client.status}
                          </span>
                        </td>
                        <td className="py-4 px-6 relative">
                           <button 
                             onClick={() => toggleDropdown(i)}
                             className="flex items-center gap-1.5 px-4 py-1.5 bg-[#8b5cf6] hover:bg-[#7c3aed] text-white rounded-md text-sm font-medium transition-colors shadow-sm"
                           >
                             Action <ChevronDown className="w-3.5 h-3.5" />
                           </button>
                           
                           {activeDropdown === i && (
                             <>
                               <div 
                                 className="fixed inset-0 z-10"
                                 onClick={() => setActiveDropdown(null)}
                               ></div>
                               <div className="absolute right-[24px] top-[50px] z-20 w-40 bg-white/80 backdrop-blur-md rounded-lg shadow-lg border border-white/60 py-2">
                                 <button 
                                   className="w-full flex items-center gap-3 px-4 py-2 text-sm text-[#475569] hover:bg-white/80 backdrop-blur-md/50 hover:text-[#0f172a] transition-colors"
                                   onClick={() => {
                                     setActiveDropdown(null);
                                     setIsEditClientModalOpen(true);
                                   }}
                                 >
                                   <Edit className="w-4 h-4 text-[#5eead4]" /> Edit
                                 </button>
                                 <button className="w-full flex items-center gap-3 px-4 py-2 text-sm text-[#475569] hover:bg-white/80 backdrop-blur-md/50 hover:text-[#0f172a] transition-colors">
                                   <Mail className="w-4 h-4 text-[#8b5cf6]" /> Send email
                                 </button>
                                 <button className="w-full flex items-center gap-3 px-4 py-2 text-sm text-[#475569] hover:bg-white/80 backdrop-blur-md/50 hover:text-[#0f172a] transition-colors">
                                   <Pin className="w-4 h-4 text-[#94a3b8]" /> Pinning
                                 </button>
                                 <button className="w-full flex items-center gap-3 px-4 py-2 text-sm text-[#475569] hover:bg-white/80 backdrop-blur-md/50 hover:text-[#0f172a] transition-colors">
                                   <Star className="w-4 h-4 text-[#94a3b8]" /> Star Client
                                 </button>
                               </div>
                             </>
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

      {/* Add Client Modal */}
      {isAddClientModalOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 overflow-y-auto">
          <div className="modern-card shadow-xl w-full max-w-[800px] my-8 flex flex-col relative max-h-[90vh]">
            <div className="flex items-center justify-between p-6 border-b border-[#e2e8f0] shrink-0 sticky top-0 bg-white/80 backdrop-blur-md z-10 rounded-t-lg">
              <h2 className="text-xl font-bold text-[#0f172a]">Add Client</h2>
              <button 
                onClick={() => setIsAddClientModalOpen(false)}
                className="text-[#94a3b8] hover:text-[#0f172a] transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="p-6 overflow-y-auto">
              <div className="space-y-8">
                
                {/* Company Details */}
                <div>
                  <h3 className="text-[16px] font-bold text-[#0f172a] mb-5">Company Details</h3>
                  
                  <div className="mb-6">
                    <label className="block text-[13px] text-[#475569] mb-2">Company Logo</label>
                    <div className="w-[120px]">
                      <div className="h-[120px] border border-white/60 rounded-t-md bg-white/80 backdrop-blur-md/50 flex items-center justify-center">
                        <Building2 className="w-8 h-8 text-[#cbd5e1]" />
                      </div>
                      <button className="w-full py-2 bg-[#334155] text-white text-[13px] font-medium rounded-b-md hover:bg-[#1e293b] transition-colors">
                        Upload
                      </button>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-x-4 gap-y-5">
                    <div>
                      <label className="block text-[13px] text-[#475569] mb-1.5">Company Name*</label>
                      <input type="text" placeholder="Pink Gorilla" className="w-full px-3 py-2.5 bg-white/80 backdrop-blur-md/80 backdrop-blur-sm border border-white/60/80 rounded-md text-[13px] focus:outline-none focus:border-[#8b5cf6] placeholder:text-[#94a3b8]" />
                    </div>
                    <div>
                      <label className="block text-[13px] text-[#475569] mb-1.5">Company Email</label>
                      <input type="email" value="neeraj@pinkgorillasoftware.com" readOnly className="w-full px-3 py-2 bg-[#f1f5f9] border border-white/60 rounded-md text-[13px] text-[#475569] focus:outline-none" />
                    </div>
                    <div>
                      <label className="block text-[13px] text-[#475569] mb-1.5">Company Phone Number*</label>
                      <div className="flex">
                        <select className="px-2 py-2 bg-white/80 backdrop-blur-md border border-white/60 border-r-0 rounded-l-md text-[13px] text-[#475569] focus:outline-none w-[70px]">
                          <option>+1</option>
                        </select>
                        <input type="text" placeholder="9000000001" className="flex-1 px-3 py-2 bg-white/80 backdrop-blur-md border border-white/60 rounded-r-md text-[13px] focus:outline-none focus:border-[#8b5cf6] placeholder:text-[#94a3b8]" />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[13px] text-[#475569] mb-1.5">Website</label>
                      <input type="text" placeholder="https://pinkgorilla.agency" className="w-full px-3 py-2.5 bg-white/80 backdrop-blur-md/80 backdrop-blur-sm border border-white/60/80 rounded-md text-[13px] focus:outline-none focus:border-[#8b5cf6] placeholder:text-[#94a3b8]" />
                    </div>
                    <div>
                      <label className="block text-[13px] text-[#475569] mb-1.5">Company Address</label>
                      <input type="text" placeholder="po 12, ABCD, lame road, LA, CA" className="w-full px-3 py-2.5 bg-white/80 backdrop-blur-md/80 backdrop-blur-sm border border-white/60/80 rounded-md text-[13px] focus:outline-none focus:border-[#8b5cf6] placeholder:text-[#94a3b8]" />
                    </div>
                    <div>
                      <label className="block text-[13px] text-[#475569] mb-1.5">Default Currency</label>
                      <select className="w-full px-3 py-2.5 bg-white/80 backdrop-blur-md/80 backdrop-blur-sm border border-white/60/80 rounded-md text-[13px] text-[#0f172a] focus:outline-none">
                        <option>USD</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-[13px] text-[#475569] mb-1.5">Default Time Zone</label>
                      <select className="w-full px-3 py-2.5 bg-white/80 backdrop-blur-md/80 backdrop-blur-sm border border-white/60/80 rounded-md text-[13px] text-[#0f172a] focus:outline-none">
                        <option>America/Denver</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-[13px] text-[#475569] mb-1.5">Language</label>
                      <select className="w-full px-3 py-2.5 bg-white/80 backdrop-blur-md/80 backdrop-blur-sm border border-white/60/80 rounded-md text-[13px] text-[#0f172a] focus:outline-none">
                        <option>English - US</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-[13px] text-[#475569] mb-1.5">Status</label>
                      <select className="w-full px-3 py-2.5 bg-white/80 backdrop-blur-md/80 backdrop-blur-sm border border-white/60/80 rounded-md text-[13px] text-[#0f172a] focus:outline-none">
                        <option>Brand New</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-[13px] text-[#475569] mb-1.5">Industry</label>
                      <select className="w-full px-3 py-2.5 bg-white/80 backdrop-blur-md/80 backdrop-blur-sm border border-white/60/80 rounded-md text-[13px] text-[#0f172a] focus:outline-none">
                        <option>Retail Trade</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-[13px] text-[#475569] mb-1.5">Year in Business</label>
                      <input type="text" placeholder="1" className="w-full px-3 py-2.5 bg-white/80 backdrop-blur-md/80 backdrop-blur-sm border border-white/60/80 rounded-md text-[13px] focus:outline-none focus:border-[#8b5cf6] placeholder:text-[#94a3b8]" />
                    </div>
                    <div>
                      <label className="block text-[13px] text-[#475569] mb-1.5">No. of Employees</label>
                      <select className="w-full px-3 py-2.5 bg-white/80 backdrop-blur-md/80 backdrop-blur-sm border border-white/60/80 rounded-md text-[13px] text-[#0f172a] focus:outline-none">
                        <option>1 - 3</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="w-full h-[1px] bg-[#f1f5f9]"></div>

                {/* Business Discovery */}
                <div>
                  <h3 className="text-[16px] font-bold text-[#0f172a] mb-5">Business Discovery</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-5 mb-4">
                    <div>
                      <label className="block text-[13px] text-[#475569] mb-1.5">Yelp URL</label>
                      <input type="text" placeholder="https://yelp.com/biz/..." className="w-full px-3 py-2.5 bg-white/80 backdrop-blur-md/80 backdrop-blur-sm border border-white/60/80 rounded-md text-[13px] focus:outline-none focus:border-[#8b5cf6] placeholder:text-[#94a3b8]" />
                    </div>
                    <div>
                      <label className="block text-[13px] text-[#475569] mb-1.5">Google URL</label>
                      <input type="text" placeholder="https://google.com/maps/..." className="w-full px-3 py-2.5 bg-white/80 backdrop-blur-md/80 backdrop-blur-sm border border-white/60/80 rounded-md text-[13px] focus:outline-none focus:border-[#8b5cf6] placeholder:text-[#94a3b8]" />
                    </div>
                  </div>
                  
                  <button className="px-3 py-1.5 bg-[#8b5cf6] hover:bg-[#7c3aed] text-white rounded-[4px] text-[12px] font-medium transition-colors mb-6">
                    + Add Link
                  </button>

                  <div className="flex items-center justify-between border-b border-white/40 pb-4">
                    <span className="text-[14px] text-[#64748b]">Background</span>
                    <button className="w-10 h-5 bg-[#e2e8f0] rounded-full relative transition-colors cursor-pointer">
                      <div className="w-4 h-4 bg-white/80 backdrop-blur-md rounded-full absolute top-0.5 left-0.5 shadow-sm"></div>
                    </button>
                  </div>
                </div>

                {/* Employee Details */}
                <div>
                  <h3 className="text-[16px] font-bold text-[#0f172a] mb-5">Employee Details</h3>
                  
                  <div className="p-5 border border-white/60 rounded-lg mb-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-x-4 gap-y-5">
                      <div>
                        <label className="block text-[13px] text-[#475569] mb-1.5">First Name</label>
                        <input type="text" placeholder="Jordan" className="w-full px-3 py-2.5 bg-white/80 backdrop-blur-md/80 backdrop-blur-sm border border-white/60/80 rounded-md text-[13px] focus:outline-none focus:border-[#8b5cf6] placeholder:text-[#94a3b8]" />
                      </div>
                      <div>
                        <label className="block text-[13px] text-[#475569] mb-1.5">Last Name</label>
                        <input type="text" placeholder="Peterson" className="w-full px-3 py-2.5 bg-white/80 backdrop-blur-md/80 backdrop-blur-sm border border-white/60/80 rounded-md text-[13px] focus:outline-none focus:border-[#8b5cf6] placeholder:text-[#94a3b8]" />
                      </div>
                      <div>
                        <label className="block text-[13px] text-[#475569] mb-1.5">Email Address</label>
                        <input type="email" placeholder="email@domain.com" className="w-full px-3 py-2.5 bg-white/80 backdrop-blur-md/80 backdrop-blur-sm border border-white/60/80 rounded-md text-[13px] focus:outline-none focus:border-[#8b5cf6] placeholder:text-[#94a3b8]" />
                      </div>

                      <div>
                        <label className="block text-[13px] text-[#475569] mb-1.5">Phone</label>
                        <div className="flex">
                          <select className="px-2 py-2 bg-white/80 backdrop-blur-md border border-white/60 border-r-0 rounded-l-md text-[13px] text-[#475569] focus:outline-none w-[70px]">
                            <option>+1</option>
                          </select>
                          <input type="text" placeholder="9876543210" className="flex-1 px-3 py-2 bg-white/80 backdrop-blur-md border border-white/60 rounded-r-md text-[13px] focus:outline-none focus:border-[#8b5cf6] placeholder:text-[#94a3b8]" />
                        </div>
                      </div>
                      <div>
                        <label className="block text-[13px] text-[#475569] mb-1.5">Title</label>
                        <select className="w-full px-3 py-2.5 bg-white/80 backdrop-blur-md/80 backdrop-blur-sm border border-white/60/80 rounded-md text-[13px] text-[#0f172a] focus:outline-none">
                          <option>HR</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-[13px] text-[#475569] mb-1.5">Password</label>
                        <input type="password" value=".........." readOnly className="w-full px-3 py-2 bg-[#f1f5f9] border border-white/60 rounded-md text-[13px] text-[#475569] focus:outline-none" />
                      </div>
                    </div>
                  </div>
                  
                  <button className="px-3 py-1.5 bg-white/80 backdrop-blur-md/50 border border-white/60 hover:bg-[#f1f5f9] text-[#475569] rounded-[4px] text-[12px] font-medium transition-colors">
                    + Add Another
                  </button>
                </div>
              </div>
            </div>
            
            <div className="flex items-center justify-end gap-3 p-6 border-t border-[#e2e8f0] bg-white/80 backdrop-blur-md rounded-b-lg shrink-0 sticky bottom-0">
              <button 
                onClick={() => setIsAddClientModalOpen(false)}
                className="px-5 py-2 bg-white/80 backdrop-blur-md border border-white/60 hover:bg-white/80 backdrop-blur-md/50 text-[#475569] rounded-md text-[14px] font-medium transition-colors"
              >
                Close
              </button>
              <button className="px-6 py-2.5 bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] hover:from-[#4f46e5] hover:to-[#7c3aed] text-white rounded-xl text-[14px] font-medium transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5">
                Submit
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Edit Client Modal */}
      {isEditClientModalOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 overflow-y-auto">
          <div className="modern-card shadow-xl w-full max-w-[800px] my-8 flex flex-col relative max-h-[90vh]">
            <div className="flex items-center justify-between p-6 border-b border-[#e2e8f0] shrink-0 sticky top-0 bg-white/80 backdrop-blur-md z-10 rounded-t-lg">
              <h2 className="text-xl font-bold text-[#0f172a]">Edit Client</h2>
              <button 
                onClick={() => setIsEditClientModalOpen(false)}
                className="text-[#94a3b8] hover:text-[#0f172a] transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="p-6 overflow-y-auto">
              <div className="space-y-8">
                
                {/* Company Details */}
                <div>
                  <h3 className="text-[16px] font-bold text-[#0f172a] mb-5">Company Details</h3>
                  
                  <div className="mb-6">
                    <label className="block text-[13px] text-[#475569] mb-2">Company Logo</label>
                    <div className="w-[120px]">
                      <div className="h-[120px] border border-white/60 rounded-t-md bg-white/80 backdrop-blur-md/50 flex items-center justify-center">
                        <Building2 className="w-8 h-8 text-[#cbd5e1]" />
                      </div>
                      <button className="w-full py-2 bg-[#334155] text-white text-[13px] font-medium rounded-b-md hover:bg-[#1e293b] transition-colors">
                        Upload
                      </button>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-x-4 gap-y-5">
                    <div>
                      <label className="block text-[13px] text-[#475569] mb-1.5">Company Name*</label>
                      <input type="text" defaultValue="Pink Gorilla" className="w-full px-3 py-2.5 bg-white/80 backdrop-blur-md/80 backdrop-blur-sm border border-white/60/80 rounded-md text-[13px] focus:outline-none focus:border-[#8b5cf6]" />
                    </div>
                    <div>
                      <label className="block text-[13px] text-[#475569] mb-1.5">Company Email</label>
                      <input type="email" value="neeraj@pinkgorillasoftware.com" readOnly className="w-full px-3 py-2 bg-[#f1f5f9] border border-white/60 rounded-md text-[13px] text-[#475569] focus:outline-none" />
                    </div>
                    <div>
                      <label className="block text-[13px] text-[#475569] mb-1.5">Company Phone Number*</label>
                      <div className="flex">
                        <select className="px-2 py-2 bg-white/80 backdrop-blur-md border border-white/60 border-r-0 rounded-l-md text-[13px] text-[#475569] focus:outline-none w-[70px]">
                          <option>+1</option>
                        </select>
                        <input type="text" defaultValue="9000000001" className="flex-1 px-3 py-2 bg-white/80 backdrop-blur-md border border-white/60 rounded-r-md text-[13px] focus:outline-none focus:border-[#8b5cf6]" />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[13px] text-[#475569] mb-1.5">Website</label>
                      <input type="text" defaultValue="https://pinkgorilla.agency" className="w-full px-3 py-2.5 bg-white/80 backdrop-blur-md/80 backdrop-blur-sm border border-white/60/80 rounded-md text-[13px] focus:outline-none focus:border-[#8b5cf6]" />
                    </div>
                    <div>
                      <label className="block text-[13px] text-[#475569] mb-1.5">Company Address</label>
                      <input type="text" defaultValue="po 12, ABCD, lame road, LA, CA" className="w-full px-3 py-2.5 bg-white/80 backdrop-blur-md/80 backdrop-blur-sm border border-white/60/80 rounded-md text-[13px] focus:outline-none focus:border-[#8b5cf6]" />
                    </div>
                    <div>
                      <label className="block text-[13px] text-[#475569] mb-1.5">Default Currency</label>
                      <select className="w-full px-3 py-2.5 bg-white/80 backdrop-blur-md/80 backdrop-blur-sm border border-white/60/80 rounded-md text-[13px] text-[#0f172a] focus:outline-none">
                        <option>USD</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-[13px] text-[#475569] mb-1.5">Default Time Zone</label>
                      <select className="w-full px-3 py-2.5 bg-white/80 backdrop-blur-md/80 backdrop-blur-sm border border-white/60/80 rounded-md text-[13px] text-[#0f172a] focus:outline-none">
                        <option>America/Denver</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-[13px] text-[#475569] mb-1.5">Language</label>
                      <select className="w-full px-3 py-2.5 bg-white/80 backdrop-blur-md/80 backdrop-blur-sm border border-white/60/80 rounded-md text-[13px] text-[#0f172a] focus:outline-none">
                        <option>English - US</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-[13px] text-[#475569] mb-1.5">Status</label>
                      <select className="w-full px-3 py-2.5 bg-white/80 backdrop-blur-md/80 backdrop-blur-sm border border-white/60/80 rounded-md text-[13px] text-[#0f172a] focus:outline-none">
                        <option>Brand New</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-[13px] text-[#475569] mb-1.5">Industry</label>
                      <select className="w-full px-3 py-2.5 bg-white/80 backdrop-blur-md/80 backdrop-blur-sm border border-white/60/80 rounded-md text-[13px] text-[#0f172a] focus:outline-none">
                        <option>Retail Trade</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-[13px] text-[#475569] mb-1.5">Year in Business</label>
                      <input type="text" defaultValue="1" className="w-full px-3 py-2.5 bg-white/80 backdrop-blur-md/80 backdrop-blur-sm border border-white/60/80 rounded-md text-[13px] focus:outline-none focus:border-[#8b5cf6]" />
                    </div>
                    <div>
                      <label className="block text-[13px] text-[#475569] mb-1.5">No. of Employees</label>
                      <select className="w-full px-3 py-2.5 bg-white/80 backdrop-blur-md/80 backdrop-blur-sm border border-white/60/80 rounded-md text-[13px] text-[#0f172a] focus:outline-none">
                        <option>1 - 3</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="w-full h-[1px] bg-[#f1f5f9]"></div>

                {/* Business Discovery */}
                <div>
                  <h3 className="text-[16px] font-bold text-[#0f172a] mb-5">Business Discovery</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-5 mb-4">
                    <div>
                      <label className="block text-[13px] text-[#475569] mb-1.5">Yelp URL</label>
                      <input type="text" placeholder="https://yelp.com/biz/..." className="w-full px-3 py-2.5 bg-white/80 backdrop-blur-md/80 backdrop-blur-sm border border-white/60/80 rounded-md text-[13px] focus:outline-none focus:border-[#8b5cf6]" />
                    </div>
                    <div>
                      <label className="block text-[13px] text-[#475569] mb-1.5">Google URL</label>
                      <input type="text" placeholder="https://google.com/maps/..." className="w-full px-3 py-2.5 bg-white/80 backdrop-blur-md/80 backdrop-blur-sm border border-white/60/80 rounded-md text-[13px] focus:outline-none focus:border-[#8b5cf6]" />
                    </div>
                  </div>
                  
                  <button className="px-3 py-1.5 bg-[#8b5cf6] hover:bg-[#7c3aed] text-white rounded-[4px] text-[12px] font-medium transition-colors mb-6">
                    + Add Link
                  </button>

                  <div className="flex items-center justify-between border-b border-white/40 pb-4">
                    <span className="text-[14px] text-[#64748b]">Background</span>
                    <button className="w-10 h-5 bg-[#e2e8f0] rounded-full relative transition-colors cursor-pointer">
                      <div className="w-4 h-4 bg-white/80 backdrop-blur-md rounded-full absolute top-0.5 left-0.5 shadow-sm"></div>
                    </button>
                  </div>
                </div>

                {/* Employee Details */}
                <div>
                  <h3 className="text-[16px] font-bold text-[#0f172a] mb-5">Employee Details</h3>
                  
                  <div className="p-5 border border-white/60 rounded-lg mb-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-x-4 gap-y-5">
                      <div>
                        <label className="block text-[13px] text-[#475569] mb-1.5">First Name</label>
                        <input type="text" defaultValue="Jordan" className="w-full px-3 py-2.5 bg-white/80 backdrop-blur-md/80 backdrop-blur-sm border border-white/60/80 rounded-md text-[13px] focus:outline-none focus:border-[#8b5cf6]" />
                      </div>
                      <div>
                        <label className="block text-[13px] text-[#475569] mb-1.5">Last Name</label>
                        <input type="text" defaultValue="Peterson" className="w-full px-3 py-2.5 bg-white/80 backdrop-blur-md/80 backdrop-blur-sm border border-white/60/80 rounded-md text-[13px] focus:outline-none focus:border-[#8b5cf6]" />
                      </div>
                      <div>
                        <label className="block text-[13px] text-[#475569] mb-1.5">Email Address</label>
                        <input type="email" defaultValue="email@domain.com" className="w-full px-3 py-2.5 bg-white/80 backdrop-blur-md/80 backdrop-blur-sm border border-white/60/80 rounded-md text-[13px] focus:outline-none focus:border-[#8b5cf6]" />
                      </div>

                      <div>
                        <label className="block text-[13px] text-[#475569] mb-1.5">Phone</label>
                        <div className="flex">
                          <select className="px-2 py-2 bg-white/80 backdrop-blur-md border border-white/60 border-r-0 rounded-l-md text-[13px] text-[#475569] focus:outline-none w-[70px]">
                            <option>+1</option>
                          </select>
                          <input type="text" defaultValue="9876543210" className="flex-1 px-3 py-2 bg-white/80 backdrop-blur-md border border-white/60 rounded-r-md text-[13px] focus:outline-none focus:border-[#8b5cf6]" />
                        </div>
                      </div>
                      <div>
                        <label className="block text-[13px] text-[#475569] mb-1.5">Title</label>
                        <select className="w-full px-3 py-2.5 bg-white/80 backdrop-blur-md/80 backdrop-blur-sm border border-white/60/80 rounded-md text-[13px] text-[#0f172a] focus:outline-none">
                          <option>HR</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-[13px] text-[#475569] mb-1.5">Password</label>
                        <input type="password" value=".........." readOnly className="w-full px-3 py-2 bg-[#f1f5f9] border border-white/60 rounded-md text-[13px] text-[#475569] focus:outline-none" />
                      </div>
                    </div>
                  </div>
                  
                  <button className="px-3 py-1.5 bg-white/80 backdrop-blur-md/50 border border-white/60 hover:bg-[#f1f5f9] text-[#475569] rounded-[4px] text-[12px] font-medium transition-colors">
                    + Add Another
                  </button>
                </div>
              </div>
            </div>
            
            <div className="flex items-center justify-end gap-3 p-6 border-t border-[#e2e8f0] bg-white/80 backdrop-blur-md rounded-b-lg shrink-0 sticky bottom-0">
              <button 
                onClick={() => setIsEditClientModalOpen(false)}
                className="px-5 py-2 bg-white/80 backdrop-blur-md border border-white/60 hover:bg-white/80 backdrop-blur-md/50 text-[#475569] rounded-md text-[14px] font-medium transition-colors"
              >
                Close
              </button>
              <button className="px-6 py-2.5 bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] hover:from-[#4f46e5] hover:to-[#7c3aed] text-white rounded-xl text-[14px] font-medium transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5">
                Save Changes
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
