import { useState } from "react";
import { Search, Filter, ExternalLink, Pin, ChevronUp } from "lucide-react";
import { useLocation, Link } from "wouter";
import { Sidebar, Header } from "./clients";

export default function SubscriptionsPage() {
  const [openMenus, setOpenMenus] = useState<string>('sales');
  const [location] = useLocation();

  const toggleMenu = (menu: string) => {
    setOpenMenus(prev => prev === menu ? '' : menu);
  };

  const subscriptionsList = [
    { id: "SUB-000002", client: "Vs Test", plan: "Core Starter", amount: "$99.00", renewed: "27-02-2026", payments: "$0.00", status: "Active" },
    { id: "SUB-000001", client: "Pink Gorilla...", plan: "Core Starter", amount: "$1.00", renewed: "21-01-2026", payments: "$2.00", status: "Cancelled" },
  ];

  return (
    <div className="min-h-screen bg-[#f8fafc] flex font-sans text-[#1e293b]">
      <Sidebar openMenus={openMenus} toggleMenu={toggleMenu} currentPath={location} />

      <div className="flex-1 flex flex-col min-w-0">
        <Header title="Subscriptions" />

        <main className="flex-1 overflow-y-auto p-6 lg:p-8">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-[22px] font-semibold text-[#0f172a] mb-6">Subscriptions</h1>

            <div className="bg-white rounded-lg shadow-sm p-6 border border-[#e2e8f0]">
              <div className="flex items-center gap-3 mb-6 w-full sm:w-auto">
                <div className="relative flex-1 sm:w-64">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#94a3b8]" />
                  <input 
                    type="text"
                    placeholder="Search" 
                    className="w-full pl-9 pr-4 py-2 bg-[#f8fafc] border border-[#e2e8f0] rounded-lg text-sm focus:outline-none focus:border-primary/30 transition-all placeholder:text-[#94a3b8]"
                  />
                </div>
                <button className="flex items-center justify-center w-10 h-10 bg-[#f8fafc] border border-[#e2e8f0] rounded-lg text-[#94a3b8] hover:bg-[#f1f5f9] transition-colors">
                  <Filter className="w-4 h-4" />
                </button>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-sm text-left whitespace-nowrap border-separate" style={{ borderSpacing: '0 12px' }}>
                  <thead>
                    <tr className="bg-[#f8fafc] text-[#64748b]">
                      <th className="py-4 px-6 font-medium rounded-l-[12px] cursor-pointer hover:text-[#0f172a] w-32">
                        <div className="flex items-center gap-1.5 text-[13px]">ID # <ChevronUp className="w-3.5 h-3.5 opacity-50" /></div>
                      </th>
                      <th className="py-4 px-6 font-medium cursor-pointer hover:text-[#0f172a]">
                        <div className="flex items-center gap-1.5 text-[13px]">Client Name <ChevronUp className="w-3.5 h-3.5 opacity-50" /></div>
                      </th>
                      <th className="py-4 px-6 font-medium cursor-pointer hover:text-[#0f172a]">
                        <div className="flex items-center gap-1.5 text-[13px]">Plan <ChevronUp className="w-3.5 h-3.5 opacity-50" /></div>
                      </th>
                      <th className="py-4 px-6 font-medium cursor-pointer hover:text-[#0f172a]">
                        <div className="flex items-center gap-1.5 text-[13px]">Amount <ChevronUp className="w-3.5 h-3.5 opacity-50" /></div>
                      </th>
                      <th className="py-4 px-6 font-medium cursor-pointer hover:text-[#0f172a]">
                        <div className="flex items-center gap-1.5 text-[13px]">Renewed <ChevronUp className="w-3.5 h-3.5 opacity-50" /></div>
                      </th>
                      <th className="py-4 px-6 font-medium cursor-pointer hover:text-[#0f172a]">
                        <div className="flex items-center gap-1.5 text-[13px]">Payments <ChevronUp className="w-3.5 h-3.5 opacity-50" /></div>
                      </th>
                      <th className="py-4 px-6 font-medium cursor-pointer hover:text-[#0f172a]">
                        <div className="flex items-center gap-1.5 text-[13px]">Status <ChevronUp className="w-3.5 h-3.5 opacity-50" /></div>
                      </th>
                      <th className="py-4 px-6 font-medium rounded-r-[12px] text-[13px]">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {subscriptionsList.map((sub, i) => (
                      <tr key={i} className="bg-white group">
                        <td className="py-4 px-6 font-medium rounded-l-[12px] border-y border-l border-[#e2e8f0] group-hover:border-[#cbd5e1] transition-colors">
                          <Link href={`/subscriptions/${sub.id}`} className="text-[#8b5cf6] hover:text-[#7c3aed] transition-colors">
                            {sub.id}
                          </Link>
                        </td>
                        <td className="py-4 px-6 font-medium text-[#0f172a] border-y border-[#e2e8f0] group-hover:border-[#cbd5e1] transition-colors">{sub.client}</td>
                        <td className="py-4 px-6 font-medium text-[#0f172a] border-y border-[#e2e8f0] group-hover:border-[#cbd5e1] transition-colors">{sub.plan}</td>
                        <td className="py-4 px-6 font-medium text-[#0f172a] border-y border-[#e2e8f0] group-hover:border-[#cbd5e1] transition-colors">{sub.amount}</td>
                        <td className="py-4 px-6 font-medium text-[#0f172a] border-y border-[#e2e8f0] group-hover:border-[#cbd5e1] transition-colors">{sub.renewed}</td>
                        <td className="py-4 px-6 font-medium text-[#0f172a] border-y border-[#e2e8f0] group-hover:border-[#cbd5e1] transition-colors">{sub.payments}</td>
                        <td className="py-4 px-6 border-y border-[#e2e8f0] group-hover:border-[#cbd5e1] transition-colors">
                           <span className={`inline-flex items-center justify-center px-4 py-1.5 rounded-full text-xs font-semibold
                              ${sub.status === 'Active' ? 'text-green-600 border border-green-300 bg-transparent' : 
                                'text-red-500 border border-red-200 bg-red-50/50'}`}>
                             {sub.status}
                           </span>
                        </td>
                        <td className="py-4 px-6 border-y border-r border-[#e2e8f0] group-hover:border-[#cbd5e1] transition-colors rounded-r-[12px]">
                           <div className="flex items-center gap-3 text-[#94a3b8]">
                              <Link href={`/subscriptions/${sub.id}`} className="hover:text-[#0f172a] transition-colors">
                                <ExternalLink className="w-4 h-4" />
                              </Link>
                              <button className="hover:text-[#0f172a] transition-colors">
                                <Pin className="w-4 h-4" />
                              </button>
                           </div>
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
