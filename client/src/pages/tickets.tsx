import { useState } from "react";
import { Search, Filter, Plus, MessageSquare, AlertCircle, CheckCircle2, Clock } from "lucide-react";
import { useLocation } from "wouter";
import { Sidebar, Header } from "./clients";

export default function TicketsPage() {
  const [openMenus, setOpenMenus] = useState<string>('support');
  const [location] = useLocation();

  const toggleMenu = (menu: string) => {
    setOpenMenus(prev => prev === menu ? '' : menu);
  };

  const ticketsList = [
    { id: "T-1042", subject: "Website is down", client: "Summit Cabinets", priority: "Urgent", status: "Open", assignee: "Neeraj K.", updated: "10 mins ago" },
    { id: "T-1041", subject: "Update logo on homepage", client: "Estate Landscape", priority: "Low", status: "In Progress", assignee: "Vinayak S.", updated: "2 hours ago" },
    { id: "T-1040", subject: "Need help with billing", client: "Urban Edge", priority: "Medium", status: "Closed", assignee: "Maria C.", updated: "1 day ago" },
  ];

  return (
    <div className="min-h-screen bg-[#f3f4f8] flex font-sans text-[#1e293b]">
      <Sidebar openMenus={openMenus} toggleMenu={toggleMenu} currentPath={location} />

      <div className="flex-1 flex flex-col min-w-0">
        <Header title="Support Tickets" />

        <main className="flex-1 overflow-y-auto p-6 lg:p-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between mb-6">
              <h1 className="text-2xl font-bold text-[#0f172a]">Tickets</h1>
              <button className="flex items-center gap-2 px-4 py-2 bg-[#8b5cf6] hover:bg-[#7c3aed] text-white rounded-lg text-sm font-medium transition-colors shadow-sm">
                <Plus className="w-4 h-4" /> New Ticket
              </button>
            </div>

            <div className="bg-white rounded-[1rem] shadow-[0_2px_10px_rgba(0,0,0,0.02)] overflow-hidden border border-[#f1f5f9]">
              <div className="p-4 border-b border-[#f1f5f9] flex flex-col sm:flex-row gap-4 justify-between items-center bg-[#f8fafc]">
                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <div className="relative flex-1 sm:w-64">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#94a3b8]" />
                    <input 
                      type="text"
                      placeholder="Search tickets" 
                      className="w-full pl-9 pr-4 py-2 bg-white border border-[#e2e8f0] rounded-lg text-sm focus:outline-none focus:border-primary/30 transition-all placeholder:text-[#94a3b8]"
                    />
                  </div>
                  <button className="flex items-center gap-2 px-4 py-2 bg-white border border-[#e2e8f0] rounded-lg text-sm font-medium text-[#475569] hover:bg-[#f8fafc] transition-colors">
                    Filter <Filter className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-sm text-left whitespace-nowrap">
                  <thead className="bg-white border-b border-[#f1f5f9]">
                    <tr>
                      <th className="py-4 px-6 font-semibold text-[#475569]">ID</th>
                      <th className="py-4 px-6 font-semibold text-[#475569]">Subject</th>
                      <th className="py-4 px-6 font-semibold text-[#475569]">Client</th>
                      <th className="py-4 px-6 font-semibold text-[#475569]">Priority</th>
                      <th className="py-4 px-6 font-semibold text-[#475569]">Status</th>
                      <th className="py-4 px-6 font-semibold text-[#475569]">Assignee</th>
                      <th className="py-4 px-6 font-semibold text-[#475569]">Last Updated</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#f1f5f9]">
                    {ticketsList.map((ticket, i) => (
                      <tr key={i} className="hover:bg-[#f8fafc]/50 transition-colors bg-white cursor-pointer">
                        <td className="py-4 px-6 font-medium text-[#8b5cf6]">{ticket.id}</td>
                        <td className="py-4 px-6 font-medium text-[#0f172a]">{ticket.subject}</td>
                        <td className="py-4 px-6 text-[#64748b]">{ticket.client}</td>
                        <td className="py-4 px-6">
                           <span className={`inline-flex items-center justify-center px-2.5 py-0.5 rounded-full text-xs font-medium border
                              ${ticket.priority === 'Urgent' ? 'text-red-600 bg-red-50 border-red-200' : 
                                ticket.priority === 'High' ? 'text-amber-600 bg-amber-50 border-amber-200' : 'text-blue-600 bg-blue-50 border-blue-200'}`}>
                             {ticket.priority}
                           </span>
                        </td>
                        <td className="py-4 px-6">
                           <span className={`inline-flex items-center justify-center px-3 py-1 rounded-full text-xs font-semibold
                              ${ticket.status === 'Open' ? 'bg-red-50 text-red-600 border border-red-200' : 
                                ticket.status === 'In Progress' ? 'bg-amber-50 text-amber-600 border border-amber-200' : 'bg-gray-100 text-gray-600 border border-gray-200'}`}>
                             {ticket.status}
                           </span>
                        </td>
                        <td className="py-4 px-6">
                          <div className="flex items-center gap-2">
                            <div className="w-6 h-6 rounded-full bg-[#8b5cf6] text-white flex items-center justify-center text-xs font-bold">
                              {ticket.assignee.charAt(0)}
                            </div>
                            <span className="text-[#475569]">{ticket.assignee}</span>
                          </div>
                        </td>
                        <td className="py-4 px-6 text-[#64748b]">{ticket.updated}</td>
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
