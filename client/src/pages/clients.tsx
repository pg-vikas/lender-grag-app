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
  ChevronUp
} from "lucide-react";
import { Link, useLocation } from "wouter";

// Reusable Sidebar Component
export function Sidebar({ openMenus, toggleMenu, currentPath }: { openMenus: string, toggleMenu: (m: string) => void, currentPath: string }) {
  return (
    <aside className="w-[240px] bg-[#0f172a] text-white flex flex-col hidden lg:flex h-screen sticky top-0 shrink-0">
      <div className="p-4 border-b border-white/10">
        <button className="w-full flex items-center justify-between bg-transparent border border-white/20 rounded-full py-1.5 px-3 hover:bg-white/5 transition-colors">
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 rounded-full bg-white text-[#0f172a] flex items-center justify-center overflow-hidden">
               <User className="w-4 h-4" />
            </div>
            <span className="text-sm font-medium">Neeraj Kumar</span>
          </div>
          <ChevronDown className="w-4 h-4 text-white/70" />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto py-4 scrollbar-hide">
        <nav className="space-y-1">
          <Link href="/home">
            <a className={`flex items-center justify-between px-6 py-3 transition-colors ${currentPath === '/home' ? 'bg-[#8b5cf6] text-white' : 'text-white/70 hover:text-white hover:bg-white/5'}`}>
              <div className="flex items-center space-x-3">
                <HomeIcon className="w-5 h-5" />
                <span className="text-sm font-medium">Dashboard</span>
              </div>
            </a>
          </Link>
          
          {/* CRM Group */}
          <div>
            <button 
              onClick={() => toggleMenu('crm')}
              className="w-full flex items-center justify-between px-6 py-3 text-white/70 hover:text-white hover:bg-white/5 transition-colors"
            >
              <div className="flex items-center space-x-3">
                <Users className="w-5 h-5" />
                <span className="text-sm font-medium">CRM</span>
              </div>
              <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${openMenus === 'crm' ? '' : '-rotate-90'}`} />
            </button>
            {openMenus === 'crm' && (
              <div className="bg-[#1e293b]/50 py-1 animate-in slide-in-from-top-2 duration-200">
                <Link href="/clients/active">
                  <a className={`block w-[85%] mx-auto px-4 py-2 text-sm rounded-md mb-1 transition-colors ${currentPath === '/clients/active' ? 'bg-[#8b5cf6] text-white' : 'text-white/70 hover:text-white hover:bg-white/5'}`}>
                    Active Clients
                  </a>
                </Link>
                <Link href="/clients">
                  <a className={`block w-[85%] mx-auto px-4 py-2 text-sm rounded-md mb-1 transition-colors ${currentPath === '/clients' ? 'bg-[#8b5cf6] text-white' : 'text-white/70 hover:text-white hover:bg-white/5'}`}>
                    Clients
                  </a>
                </Link>
                <a href="#" className="block w-[85%] mx-auto px-4 py-2 text-sm rounded-md mb-1 text-white/70 hover:text-white hover:bg-white/5 transition-colors">
                  Tasks
                </a>
              </div>
            )}
          </div>

          <a href="#" className="flex items-center justify-between px-6 py-3 text-white/70 hover:text-white hover:bg-white/5 transition-colors">
            <div className="flex items-center space-x-3">
              <FolderOpen className="w-5 h-5" />
              <span className="text-sm font-medium">Projects</span>
            </div>
          </a>

          {/* Sales Group */}
          <div>
            <button 
              onClick={() => toggleMenu('sales')}
              className="w-full flex items-center justify-between px-6 py-3 text-white/70 hover:text-white hover:bg-white/5 transition-colors"
            >
              <div className="flex items-center space-x-3">
                <DollarSign className="w-5 h-5" />
                <span className="text-sm font-medium">Sales</span>
              </div>
              <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${openMenus === 'sales' ? '' : '-rotate-90'}`} />
            </button>
            {openMenus === 'sales' && (
              <div className="bg-[#1e293b]/50 py-1 animate-in slide-in-from-top-2 duration-200">
                <a href="#" className="block w-[85%] mx-auto px-4 py-2 text-sm rounded-md mb-1 text-white/70 hover:text-white hover:bg-white/5 transition-colors">Invoices</a>
                <a href="#" className="block w-[85%] mx-auto px-4 py-2 text-sm rounded-md mb-1 text-white/70 hover:text-white hover:bg-white/5 transition-colors">Payments</a>
                <a href="#" className="block w-[85%] mx-auto px-4 py-2 text-sm rounded-md mb-1 text-white/70 hover:text-white hover:bg-white/5 transition-colors">Subscriptions</a>
              </div>
            )}
          </div>

          {/* Contracts Group */}
          <div>
            <button 
              onClick={() => toggleMenu('contracts')}
              className="w-full flex items-center justify-between px-6 py-3 text-white/70 hover:text-white hover:bg-white/5 transition-colors"
            >
              <div className="flex items-center space-x-3">
                <FileText className="w-5 h-5" />
                <span className="text-sm font-medium">Contracts</span>
              </div>
              <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${openMenus === 'contracts' ? '' : '-rotate-90'}`} />
            </button>
          </div>

          {/* Support Group */}
          <div>
            <button 
              onClick={() => toggleMenu('support')}
              className="w-full flex items-center justify-between px-6 py-3 text-white/70 hover:text-white hover:bg-white/5 transition-colors"
            >
              <div className="flex items-center space-x-3">
                <MessageSquare className="w-5 h-5" />
                <span className="text-sm font-medium">Support</span>
              </div>
              <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${openMenus === 'support' ? '' : '-rotate-90'}`} />
            </button>
          </div>

          <a href="#" className="flex items-center justify-between px-6 py-3 text-white/70 hover:text-white hover:bg-white/5 transition-colors">
            <div className="flex items-center space-x-3">
              <User className="w-5 h-5" />
              <span className="text-sm font-medium">Users</span>
            </div>
          </a>

          <a href="#" className="flex items-center justify-between px-6 py-3 text-white/70 hover:text-white hover:bg-white/5 transition-colors">
            <div className="flex items-center space-x-3">
              <Globe className="w-5 h-5" />
              <span className="text-sm font-medium whitespace-pre-line">Website{"\n"}Analytics</span>
            </div>
          </a>
        </nav>
      </div>
      
      <div className="p-4 mt-auto">
         <div className="w-full h-12 rounded bg-[#202c40] flex items-center justify-center border border-white/5">
           <span className="font-black text-[#22c55e] tracking-tighter text-xl">GORILLA HUB</span>
         </div>
      </div>
    </aside>
  );
}

// Reusable Header Component
export function Header({ title }: { title: string }) {
  return (
    <header className="h-[60px] bg-white flex items-center px-4 shrink-0 sticky top-0 z-10 border-b border-[#e2e8f0]/50 shadow-[0_1px_2px_rgba(0,0,0,0.02)]">
      <button className="p-2 mr-2 text-[#64748b] hover:text-[#0f172a] rounded-md transition-colors lg:hidden">
        <Menu className="w-5 h-5" />
      </button>
      
      <button className="p-2 mr-2 text-[#64748b] hover:text-[#0f172a] rounded-md transition-colors hidden lg:block">
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
  );
}

export default function ClientsPage({ isActiveOnly = false }: { isActiveOnly?: boolean }) {
  const [openMenus, setOpenMenus] = useState<string>('crm');
  const [location] = useLocation();

  const toggleMenu = (menu: string) => {
    setOpenMenus(prev => prev === menu ? '' : menu);
  };

  const title = isActiveOnly ? "Active Clients" : "Clients";

  const clientsList = [
    { name: "Pink Gorilla Software", industry: "Information Technology Se...", compliance: false, revenue: "$0.00", billing: "---", contacted: "5 days ago", assigned: "Vinayak Sharma (vinayak@", status: "Active" },
    { name: "Estate Landscape", industry: "Retail Trade", compliance: false, revenue: "$0.00", billing: "---", contacted: "---", assigned: "Maria Christina (maria@pir", status: "Active" },
    { name: "Summit Cabinets", industry: "Retail Trade", compliance: false, revenue: "$0.00", billing: "---", contacted: "---", assigned: "Chayan Alavi (chayan@pin", status: "Active" },
  ];

  return (
    <div className="min-h-screen bg-[#f3f4f8] flex font-sans text-[#1e293b]">
      <Sidebar openMenus={openMenus} toggleMenu={toggleMenu} currentPath={location} />

      {/* Main Container */}
      <div className="flex-1 flex flex-col min-w-0">
        <Header title={title} />

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto p-6 lg:p-8">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-2xl font-bold text-[#0f172a] mb-6">{title}</h1>

            {/* Top Bar with Search and Filter */}
            <div className="bg-white rounded-t-[1rem] p-4 flex flex-col sm:flex-row gap-4 justify-between items-center shadow-[0_2px_10px_rgba(0,0,0,0.02)] border-b border-[#f1f5f9]">
              <div className="flex items-center gap-3 w-full sm:w-auto">
                <div className="relative flex-1 sm:w-64">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#94a3b8]" />
                  <input 
                    type="text"
                    placeholder="Search" 
                    className="w-full pl-9 pr-4 py-2 bg-[#f8fafc] border border-[#e2e8f0] rounded-lg text-sm focus:outline-none focus:border-primary/30 transition-all placeholder:text-[#94a3b8]"
                  />
                </div>
                <button className="flex items-center gap-2 px-4 py-2 bg-white border border-[#e2e8f0] rounded-lg text-sm font-medium text-[#475569] hover:bg-[#f8fafc] transition-colors whitespace-nowrap">
                  Filter <Filter className="w-3.5 h-3.5" />
                </button>
                <button className="p-2 bg-white border border-[#e2e8f0] rounded-lg text-[#475569] hover:bg-[#f8fafc] transition-colors">
                   <BarChart2 className="w-4 h-4" />
                </button>
              </div>

              <button className="flex items-center gap-2 px-4 py-2 bg-white border border-[#e2e8f0] rounded-lg text-sm font-medium text-[#475569] hover:bg-[#f8fafc] transition-colors w-full sm:w-auto justify-center">
                <Download className="w-3.5 h-3.5" /> Export <ChevronDown className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Stats Row */}
            <div className="bg-white rounded-b-[1rem] p-6 mb-6 shadow-[0_2px_10px_rgba(0,0,0,0.02)] overflow-x-auto">
              <div className="flex gap-8 min-w-max">
                {[
                  { value: '4548', label: 'Clients', color: 'bg-purple-500' },
                  { value: '9', label: 'Active', color: 'bg-purple-600' },
                  { value: '4312', label: 'Brand New', color: 'bg-blue-400' },
                  { value: '62', label: 'Lead', color: 'bg-indigo-400' },
                  { value: '0', label: 'Nurture', color: 'bg-cyan-400' },
                  { value: '156', label: 'Suspended', color: 'bg-orange-400' },
                  { value: '9', label: 'Hot', color: 'bg-amber-400' },
                  { value: '0', label: 'Inactive', color: 'bg-rose-400' },
                ].map((stat, i) => (
                  <div key={i} className="flex flex-col min-w-[80px]">
                    <span className="text-2xl font-semibold text-[#0f172a]">{stat.value}</span>
                    <span className="text-[11px] font-medium text-[#64748b] mb-3">{stat.label}</span>
                    <div className={`h-1 w-full rounded-full ${stat.color} opacity-80`} />
                  </div>
                ))}
              </div>
            </div>

            {/* Clients Table */}
            <div className="bg-white rounded-[1rem] shadow-[0_2px_10px_rgba(0,0,0,0.02)] overflow-hidden border border-[#f1f5f9]">
              <div className="overflow-x-auto">
                <table className="w-full text-sm text-left whitespace-nowrap">
                  <thead className="bg-[#f8fafc]">
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
                      <tr key={i} className="hover:bg-[#f8fafc]/50 transition-colors">
                        <td className="py-4 px-6">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded bg-[#f1f5f9] flex items-center justify-center text-[#94a3b8] shrink-0 border border-[#e2e8f0]">
                              {i === 2 ? <div className="font-black text-xs text-black">SUN<br/>CAB</div> : <Building2 className="w-5 h-5" />}
                            </div>
                            <span className="font-semibold text-[#0f172a]">{client.name}</span>
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
                          <div className="flex items-center justify-between border border-[#e2e8f0] rounded px-3 py-1.5 min-w-[200px]">
                            <span className="text-[#475569] truncate max-w-[150px]">{client.assigned}</span>
                            <ChevronDown className="w-3.5 h-3.5 text-[#94a3b8]" />
                          </div>
                        </td>
                        <td className="py-4 px-6">
                          <span className="inline-flex items-center justify-center px-3 py-1 rounded-full text-xs font-semibold border border-[#22c55e] text-[#16a34a] bg-[#f0fdf4]">
                            {client.status}
                          </span>
                        </td>
                        <td className="py-4 px-6">
                           <button className="flex items-center gap-1.5 px-4 py-1.5 bg-[#8b5cf6] hover:bg-[#7c3aed] text-white rounded-md text-sm font-medium transition-colors shadow-sm">
                             Action <ChevronDown className="w-3.5 h-3.5" />
                           </button>
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
  );
}
