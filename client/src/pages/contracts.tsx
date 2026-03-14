import { useState } from "react";
import { Search, Filter, Plus, FileText, CheckCircle2, Clock } from "lucide-react";
import { useLocation, Link } from "wouter";
import { Sidebar, Header } from "./clients";

export default function ContractsPage() {
  const [openMenus, setOpenMenus] = useState<string>('contracts');
  const [location] = useLocation();

  const toggleMenu = (menu: string) => {
    setOpenMenus(prev => prev === menu ? '' : menu);
  };

  const contractsList = [
    { name: "Master Service Agreement", client: "Pink Gorilla Software", value: "$45,000", created: "Sep 15, 2026", status: "Signed" },
    { name: "Website Development Contract", client: "Estate Landscape", value: "$8,500", created: "Oct 02, 2026", status: "Pending Signature" },
    { name: "SEO Retainer Agreement", client: "Summit Cabinets", value: "$1,200/mo", created: "Oct 05, 2026", status: "Draft" },
  ];

  return (
    <div className="h-screen w-full overflow-hidden bg-transparent flex font-sans text-[#e2e8f0]">
      <Sidebar openMenus={openMenus} toggleMenu={toggleMenu} currentPath={location} />
      <div className="flex-1 flex flex-col min-w-0 bg-[#0f172a] relative">
        <Header title="Contracts" />

        <main className="flex-1 overflow-y-auto p-6 lg:p-8 relative">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between mb-6">
              <h1 className="text-[22px] text-white font-semibold">Contracts</h1>
              <button className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] hover:from-[#4f46e5] hover:to-[#7c3aed] text-white rounded-xl text-sm font-medium transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5">
                <Plus className="w-4 h-4" /> Create Contract
              </button>
            </div>

            <div className="glass-panel rounded-2xl border-t border-indigo-500/20  overflow-hidden border border-white/10">
              <div className="p-4 border-b border-white/10 flex flex-col sm:flex-row gap-4 justify-between items-center bg-slate-900/40 backdrop-blur-xl/50">
                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <div className="relative flex-1 sm:w-64">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                    <input 
                      type="text"
                      placeholder="Search contracts" 
                      className="w-full pl-9 pr-4 py-2 bg-slate-900/80 border border-white/10 rounded-xl shadow-sm text-sm focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/50 transition-all placeholder:text-slate-500"
                    />
                  </div>
                  <button className="flex items-center gap-2 px-4 py-2.5 bg-slate-900/40 backdrop-blur-xl border border-white/10 rounded-xl text-sm font-medium text-slate-300 hover:bg-slate-900/40 backdrop-blur-xl transition-all shadow-sm hover:shadow transition-colors">
                    Filter <Filter className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-sm text-left whitespace-nowrap">
                  <thead className="bg-slate-900/40 backdrop-blur-xl border-b border-white/10">
                    <tr>
                      <th className="py-4 px-6 font-semibold text-slate-300">Contract Name</th>
                      <th className="py-4 px-6 font-semibold text-slate-300">Client</th>
                      <th className="py-4 px-6 font-semibold text-slate-300">Value</th>
                      <th className="py-4 px-6 font-semibold text-slate-300">Created Date</th>
                      <th className="py-4 px-6 font-semibold text-slate-300">Status</th>
                      <th className="py-4 px-6 font-semibold text-slate-300">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#f1f5f9]">
                    {contractsList.map((contract, i) => (
                      <tr key={i} className="hover:bg-slate-900/40 backdrop-blur-xl/50/50 transition-colors bg-slate-900/40 backdrop-blur-xl">
                        <td className="py-4 px-6">
                           <div className="flex items-center gap-3">
                             <FileText className="w-5 h-5 text-slate-500" />
                             <Link href="/contracts/1" className="font-medium text-white hover:text-indigo-400 transition-colors">{contract.name}</Link>
                           </div>
                        </td>
                        <td className="py-4 px-6 text-slate-400">{contract.client}</td>
                        <td className="py-4 px-6 font-medium text-white">{contract.value}</td>
                        <td className="py-4 px-6 text-slate-400">{contract.created}</td>
                        <td className="py-4 px-6">
                           <span className={`inline-flex items-center justify-center px-3 py-1 rounded-full text-xs font-semibold
                              ${contract.status === 'Signed' ? 'bg-green-50 text-green-600 border border-green-200' : 
                                contract.status === 'Pending Signature' ? 'bg-amber-50 text-amber-600 border border-amber-200' : 'bg-slate-100 text-slate-600 border border-slate-200'}`}>
                             {contract.status}
                           </span>
                        </td>
                        <td className="py-4 px-6">
                           <Link href="/contracts/1" className="text-sm font-medium text-indigo-400 hover:text-[#7c3aed] transition-colors">
                             View
                           </Link>
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
