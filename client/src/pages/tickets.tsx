import { useState } from "react";
import { Search, Filter, Plus, Edit2, ExternalLink, Pin, ChevronUp, Box, TrendingUp } from "lucide-react";
import { useLocation, Link } from "wouter";
import { Sidebar, Header } from "./clients";

export default function TicketsPage() {
  const [openMenus, setOpenMenus] = useState<string>('support');
  const [location] = useLocation();

  const toggleMenu = (menu: string) => {
    setOpenMenus(prev => prev === menu ? '' : menu);
  };

  const ticketsList = [
    { id: "2", subject: "Testing the Support features", user: "Milhan Farooque", client: "Pink Gorilla Ag...", date: "31-10-2025", priority: "Normal", activity: "4 months ago", status: "Answered" }
  ];

  return (
    <div className="h-screen w-full overflow-hidden bg-transparent flex font-sans text-[#e2e8f0]">
      <Sidebar openMenus={openMenus} toggleMenu={toggleMenu} currentPath={location} />

      <div className="flex-1 flex flex-col min-w-0 bg-[#0f172a] relative">
        <Header title="Tickets" />

        <main className="flex-1 overflow-y-auto p-6 lg:p-8 relative">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-[22px] font-semibold text-white mb-6">Tickets</h1>

            <div className="glass-panel rounded-2xl border-t border-indigo-500/20 p-4 mb-6  border border-white/10">
              <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <div className="relative flex-1 max-w-[300px]">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                    <input 
                      type="text"
                      placeholder="Search" 
                      className="w-full pl-10 pr-4 py-2.5 bg-slate-900/80 border border-white/10 rounded-lg text-sm focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/50 transition-all placeholder:text-slate-500"
                    />
                  </div>
                  <button className="p-2.5 bg-slate-900/40 backdrop-blur-xl/50 border border-white/10 rounded-lg text-slate-400 hover:bg-slate-800 transition-colors">
                    <Box className="w-4 h-4" />
                  </button>
                  <button className="p-2.5 bg-slate-900/40 backdrop-blur-xl/50 border border-white/10 rounded-lg text-slate-400 hover:bg-slate-800 transition-colors">
                    <TrendingUp className="w-4 h-4" />
                  </button>
                  <button className="p-2.5 bg-slate-900/40 backdrop-blur-xl/50 border border-white/10 rounded-lg text-slate-400 hover:bg-slate-800 transition-colors">
                    <Filter className="w-4 h-4" />
                  </button>
                </div>
                
                <button className="flex items-center gap-2 px-5 py-2.5 bg-indigo-500 hover:bg-indigo-400 text-white rounded-lg text-sm font-medium transition-colors shadow-sm w-full sm:w-auto justify-center">
                  <Plus className="w-4 h-4" /> Add New Ticket
                </button>
              </div>
            </div>

            {/* Stats Row */}
            <div className="glass-panel rounded-2xl border-t border-indigo-500/20 p-6 mb-8  border border-white/10">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div className="flex flex-col group cursor-pointer">
                  <span className="text-[28px] font-medium text-white mb-1">0</span>
                  <span className="text-[13px] text-slate-500 mb-4">Open</span>
                  <div className="h-[3px] w-full rounded-full bg-indigo-500" />
                </div>
                <div className="flex flex-col group cursor-pointer">
                  <span className="text-[28px] font-medium text-white mb-1">0</span>
                  <span className="text-[13px] text-slate-500 mb-4">On Hold</span>
                  <div className="h-[3px] w-full rounded-full bg-[#fdba74]" />
                </div>
                <div className="flex flex-col group cursor-pointer">
                  <span className="text-[28px] font-medium text-white mb-1">1</span>
                  <span className="text-[13px] text-slate-500 mb-4">Answered</span>
                  <div className="h-[3px] w-full rounded-full bg-indigo-500" />
                </div>
                <div className="flex flex-col group cursor-pointer">
                  <span className="text-[28px] font-medium text-white mb-1">0</span>
                  <span className="text-[13px] text-slate-500 mb-4">Closed</span>
                  <div className="h-[3px] w-full rounded-full bg-[#e2e8f0]" />
                </div>
              </div>
            </div>

            <div className="overflow-x-auto pb-4">
              <table className="w-full text-sm text-left whitespace-nowrap border-separate" style={{ borderSpacing: '0 12px' }}>
                <thead>
                  <tr className="bg-slate-900/40 backdrop-blur-xl/50 text-slate-400">
                    <th className="py-4 px-6 font-medium rounded-l-[12px] w-12">
                      <div className="w-4 h-4 rounded border border-[#cbd5e1] bg-slate-900/40 backdrop-blur-xl"></div>
                    </th>
                    <th className="py-4 px-6 font-medium cursor-pointer hover:text-white">
                      <div className="flex items-center gap-1.5 text-[13px]">ID <ChevronUp className="w-3.5 h-3.5 opacity-50" /></div>
                    </th>
                    <th className="py-4 px-6 font-medium cursor-pointer hover:text-white">
                      <div className="flex items-center gap-1.5 text-[13px]">Subject <ChevronUp className="w-3.5 h-3.5 opacity-50" /></div>
                    </th>
                    <th className="py-4 px-6 font-medium cursor-pointer hover:text-white">
                      <div className="flex items-center gap-1.5 text-[13px]">User <ChevronUp className="w-3.5 h-3.5 opacity-50" /></div>
                    </th>
                    <th className="py-4 px-6 font-medium cursor-pointer hover:text-white">
                      <div className="flex items-center gap-1.5 text-[13px]">Client <ChevronUp className="w-3.5 h-3.5 opacity-50" /></div>
                    </th>
                    <th className="py-4 px-6 font-medium cursor-pointer hover:text-white">
                      <div className="flex items-center gap-1.5 text-[13px]">Date <ChevronUp className="w-3.5 h-3.5 opacity-50" /></div>
                    </th>
                    <th className="py-4 px-6 font-medium cursor-pointer hover:text-white">
                      <div className="flex items-center gap-1.5 text-[13px]">Priority <ChevronUp className="w-3.5 h-3.5 opacity-50" /></div>
                    </th>
                    <th className="py-4 px-6 font-medium cursor-pointer hover:text-white">
                      <div className="flex items-center gap-1.5 text-[13px]">Activity <ChevronUp className="w-3.5 h-3.5 opacity-50" /></div>
                    </th>
                    <th className="py-4 px-6 font-medium cursor-pointer hover:text-white">
                      <div className="flex items-center gap-1.5 text-[13px]">Status <ChevronUp className="w-3.5 h-3.5 opacity-50" /></div>
                    </th>
                    <th className="py-4 px-6 font-medium rounded-r-[12px] text-[13px]">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {ticketsList.map((ticket, i) => (
                    <tr key={i} className="bg-slate-900/40 backdrop-blur-xl group ">
                      <td className="py-4 px-6 rounded-l-[12px] border-y border-l border-white/10 group-hover:border-[#cbd5e1] transition-colors">
                         <div className="w-4 h-4 rounded border border-[#cbd5e1] bg-slate-900/40 backdrop-blur-xl"></div>
                      </td>
                      <td className="py-4 px-6 font-medium text-white border-y border-white/10 group-hover:border-[#cbd5e1] transition-colors">
                        <Link href={`/tickets/${ticket.id}`} className="hover:text-indigo-400 transition-colors">{ticket.id}</Link>
                      </td>
                      <td className="py-4 px-6 font-medium text-white border-y border-white/10 group-hover:border-[#cbd5e1] transition-colors">
                        <Link href={`/tickets/${ticket.id}`} className="hover:text-indigo-400 transition-colors">{ticket.subject}</Link>
                      </td>
                      <td className="py-4 px-6 font-medium text-white border-y border-white/10 group-hover:border-[#cbd5e1] transition-colors">{ticket.user}</td>
                      <td className="py-4 px-6 font-medium text-white border-y border-white/10 group-hover:border-[#cbd5e1] transition-colors">{ticket.client}</td>
                      <td className="py-4 px-6 font-medium text-white border-y border-white/10 group-hover:border-[#cbd5e1] transition-colors">{ticket.date}</td>
                      <td className="py-4 px-6 border-y border-white/10 group-hover:border-[#cbd5e1] transition-colors">
                         <span className="inline-flex items-center justify-center px-4 py-1.5 rounded-full text-xs font-medium text-sky-500 border border-sky-200 bg-sky-50/50">
                           {ticket.priority}
                         </span>
                      </td>
                      <td className="py-4 px-6 font-medium text-white border-y border-white/10 group-hover:border-[#cbd5e1] transition-colors">{ticket.activity}</td>
                      <td className="py-4 px-6 border-y border-white/10 group-hover:border-[#cbd5e1] transition-colors">
                         <span className="inline-flex items-center justify-center px-4 py-1.5 rounded-full text-xs font-semibold text-green-600 border border-green-200 bg-green-50/50">
                           {ticket.status}
                         </span>
                      </td>
                      <td className="py-4 px-6 border-y border-r border-white/10 group-hover:border-[#cbd5e1] transition-colors rounded-r-[12px]">
                         <div className="flex items-center gap-3 text-slate-500">
                           <button className="hover:text-white transition-colors">
                             <Edit2 className="w-[15px] h-[15px]" />
                           </button>
                           <Link href={`/tickets/${ticket.id}`} className="hover:text-white transition-colors">
                             <ExternalLink className="w-[15px] h-[15px]" />
                           </Link>
                           <button className="hover:text-white transition-colors">
                             <Pin className="w-[15px] h-[15px]" />
                           </button>
                         </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

          </div>
        </main>
      </div>
    </div>
  );
}
