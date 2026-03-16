import { useState } from "react";
import { Search, Filter, Plus, Edit2, Trash2, Pin, Eye, X, ChevronUp } from "lucide-react";
import { useLocation, Link } from "wouter";
import { Sidebar, Header } from "./clients";

export default function ContractsPage() {
  const [openMenus, setOpenMenus] = useState<string>('contracts');
  const [location] = useLocation();
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);

  const toggleMenu = (menu: string) => {
    setOpenMenus(prev => prev === menu ? '' : menu);
  };

  const initialContracts = [
    { id: "CO-00022", title: "Growth Advisor 7-18", client: "Pink Gorilla Software", date: "18-12-2025", clientStatus: "Pending", providerStatus: "Pending", status: "Awaiting Signatures", pinned: false },
    { id: "CO-00021", title: "Dec 18th 2025 at 6:10", client: "Pink Gorilla Software", date: "18-12-2025", clientStatus: "Pending", providerStatus: "Signed", status: "Awaiting Signatures", pinned: false },
    { id: "CO-00018", title: "test", client: "Recloud", date: "26-10-2025", clientStatus: "Pending", providerStatus: "Pending", status: "Draft", pinned: true },
    { id: "CO-00017", title: "Demo", client: "PG Development", date: "27-10-2025", clientStatus: "Signed", providerStatus: "Signed", status: "Active", pinned: false },
    { id: "CO-00016", title: "test4", client: "PG Development", date: "25-10-2025", clientStatus: "Signed", providerStatus: "Signed", status: "Active", pinned: false },
  ];

  const [contractsList, setContractsList] = useState(initialContracts);

  const togglePin = (id: string) => {
    setContractsList(contractsList.map(contract => 
      contract.id === id ? { ...contract, pinned: !contract.pinned } : contract
    ));
  };

  const filteredContracts = contractsList.filter(c => {
    if (activeFilter === 'All') return true;
    return c.status === activeFilter;
  });

  // Calculate stats
  const stats = {
    Active: contractsList.filter(c => c.status === 'Active').length,
    'Awaiting Signatures': contractsList.filter(c => c.status === 'Awaiting Signatures').length,
    Expired: contractsList.filter(c => c.status === 'Expired').length,
  };

  return (
    <div className="h-screen w-full overflow-hidden bg-transparent flex font-sans text-[#e2e8f0]">
      <Sidebar openMenus={openMenus} toggleMenu={toggleMenu} currentPath={location} />
      <div className="flex-1 flex flex-col min-w-0 bg-[#0f172a] relative">
        <Header title="Contracts" />

        <main className="flex-1 overflow-y-auto p-6 lg:p-8 relative">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between mb-6">
              <h1 className="text-[22px] text-white font-semibold">Contracts</h1>
              <button 
                onClick={() => setIsCreateModalOpen(true)}
                className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] hover:from-[#4f46e5] hover:to-[#7c3aed] text-white rounded-xl text-sm font-medium transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"
              >
                <Plus className="w-4 h-4" /> Add New
              </button>
            </div>

            {/* Stats Row */}
            <div className="glass-panel rounded-2xl border-t border-indigo-500/20 p-6 mb-8 shadow-sm border border-white/10">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div 
                  className={`flex flex-col group cursor-pointer p-4 rounded-xl transition-all ${activeFilter === 'Active' ? 'bg-slate-800/50 shadow-inner' : 'hover:bg-slate-800/30'}`}
                  onClick={() => setActiveFilter(activeFilter === 'Active' ? 'All' : 'Active')}
                >
                  <span className="text-[28px] font-medium text-white mb-1">{stats.Active}</span>
                  <span className="text-[13px] text-slate-400 mb-4">Active</span>
                  <div className={`h-[3px] w-full rounded-full ${activeFilter === 'Active' ? 'bg-indigo-500 shadow-[0_0_10px_rgba(99,102,241,0.5)]' : 'bg-indigo-500/50'}`} />
                </div>
                <div 
                  className={`flex flex-col group cursor-pointer p-4 rounded-xl transition-all ${activeFilter === 'Awaiting Signatures' ? 'bg-slate-800/50 shadow-inner' : 'hover:bg-slate-800/30'}`}
                  onClick={() => setActiveFilter(activeFilter === 'Awaiting Signatures' ? 'All' : 'Awaiting Signatures')}
                >
                  <span className="text-[28px] font-medium text-white mb-1">{stats['Awaiting Signatures']}</span>
                  <span className="text-[13px] text-slate-400 mb-4">Awaiting Signatures</span>
                  <div className={`h-[3px] w-full rounded-full ${activeFilter === 'Awaiting Signatures' ? 'bg-orange-500 shadow-[0_0_10px_rgba(249,115,22,0.5)]' : 'bg-orange-500/50'}`} />
                </div>
                <div 
                  className={`flex flex-col group cursor-pointer p-4 rounded-xl transition-all ${activeFilter === 'Expired' ? 'bg-slate-800/50 shadow-inner' : 'hover:bg-slate-800/30'}`}
                  onClick={() => setActiveFilter(activeFilter === 'Expired' ? 'All' : 'Expired')}
                >
                  <span className="text-[28px] font-medium text-white mb-1">{stats.Expired}</span>
                  <span className="text-[13px] text-slate-400 mb-4">Expired</span>
                  <div className={`h-[3px] w-full rounded-full ${activeFilter === 'Expired' ? 'bg-rose-500 shadow-[0_0_10px_rgba(244,63,94,0.5)]' : 'bg-rose-500/50'}`} />
                </div>
              </div>
            </div>

            <div className="glass-panel rounded-2xl border-t border-indigo-500/20 p-4 mb-6 shadow-sm border border-white/10">
              <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
                <div className="flex items-center gap-3 w-full sm:w-auto flex-1">
                  <div className="relative flex-1 max-w-[300px]">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                    <input 
                      type="text"
                      placeholder="Search" 
                      className="w-full pl-10 pr-4 py-2.5 bg-slate-900/80 border border-white/10 rounded-lg text-sm focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/50 transition-all placeholder:text-slate-500"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="overflow-x-auto pb-4">
              <table className="w-full text-sm text-left whitespace-nowrap border-separate" style={{ borderSpacing: '0 12px' }}>
                <thead>
                  <tr className="bg-slate-900/40 backdrop-blur-xl/50 text-slate-400">
                    <th className="py-4 px-6 font-medium rounded-l-[12px] cursor-pointer hover:text-white">
                      <div className="flex items-center gap-1.5 text-[13px]">ID <ChevronUp className="w-3.5 h-3.5 opacity-50" /></div>
                    </th>
                    <th className="py-4 px-6 font-medium cursor-pointer hover:text-white">
                      <div className="flex items-center gap-1.5 text-[13px]">Title <ChevronUp className="w-3.5 h-3.5 opacity-50" /></div>
                    </th>
                    <th className="py-4 px-6 font-medium cursor-pointer hover:text-white">
                      <div className="flex items-center gap-1.5 text-[13px]">Client <ChevronUp className="w-3.5 h-3.5 opacity-50" /></div>
                    </th>
                    <th className="py-4 px-6 font-medium cursor-pointer hover:text-white">
                      <div className="flex items-center gap-1.5 text-[13px]">Date <ChevronUp className="w-3.5 h-3.5 opacity-50" /></div>
                    </th>
                    <th className="py-4 px-6 font-medium cursor-pointer hover:text-white">
                      <div className="flex items-center gap-1.5 text-[13px]">Client <Edit2 className="w-3.5 h-3.5 opacity-50" /></div>
                    </th>
                    <th className="py-4 px-6 font-medium cursor-pointer hover:text-white">
                      <div className="flex items-center gap-1.5 text-[13px]">Provider <Edit2 className="w-3.5 h-3.5 opacity-50" /></div>
                    </th>
                    <th className="py-4 px-6 font-medium cursor-pointer hover:text-white">
                      <div className="flex items-center gap-1.5 text-[13px]">Status <ChevronUp className="w-3.5 h-3.5 opacity-50" /></div>
                    </th>
                    <th className="py-4 px-6 font-medium rounded-r-[12px] text-[13px]">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredContracts.map((contract, i) => (
                    <tr key={i} className="bg-slate-900/40 backdrop-blur-xl group">
                      <td className="py-4 px-6 font-medium text-slate-300 rounded-l-[12px] border-y border-l border-white/10 group-hover:border-[#cbd5e1] transition-colors">
                        {contract.id}
                      </td>
                      <td className="py-4 px-6 font-medium text-white border-y border-white/10 group-hover:border-[#cbd5e1] transition-colors">
                        {contract.title}
                      </td>
                      <td className="py-4 px-6 font-medium text-slate-300 border-y border-white/10 group-hover:border-[#cbd5e1] transition-colors">
                        {contract.client}
                      </td>
                      <td className="py-4 px-6 font-medium text-slate-300 border-y border-white/10 group-hover:border-[#cbd5e1] transition-colors">
                        {contract.date}
                      </td>
                      <td className="py-4 px-6 border-y border-white/10 group-hover:border-[#cbd5e1] transition-colors">
                         <span className={`inline-flex items-center justify-center px-4 py-1.5 rounded-full text-xs font-medium border
                            ${contract.clientStatus === 'Signed' ? 'text-emerald-400 border-emerald-400/30 bg-emerald-400/10' : 
                            'text-slate-400 border-slate-600/50 bg-slate-800/50'}`}>
                           {contract.clientStatus}
                         </span>
                      </td>
                      <td className="py-4 px-6 border-y border-white/10 group-hover:border-[#cbd5e1] transition-colors">
                         <span className={`inline-flex items-center justify-center px-4 py-1.5 rounded-full text-xs font-medium border
                            ${contract.providerStatus === 'Signed' ? 'text-emerald-400 border-emerald-400/30 bg-emerald-400/10' : 
                            'text-slate-400 border-slate-600/50 bg-slate-800/50'}`}>
                           {contract.providerStatus}
                         </span>
                      </td>
                      <td className="py-4 px-6 border-y border-white/10 group-hover:border-[#cbd5e1] transition-colors">
                         <span className={`inline-flex items-center justify-center px-4 py-1.5 rounded-full text-xs font-medium border
                            ${contract.status === 'Active' ? 'text-emerald-400 border-emerald-400/30 bg-emerald-400/10' : 
                              contract.status === 'Awaiting Signatures' ? 'text-orange-400 border-orange-400/30 bg-orange-400/10' : 
                              'text-slate-400 border-slate-600/50 bg-slate-800/50'}`}>
                           {contract.status}
                         </span>
                      </td>
                      <td className="py-4 px-6 border-y border-r border-white/10 group-hover:border-[#cbd5e1] transition-colors rounded-r-[12px]">
                         <div className="flex items-center gap-2">
                           <button 
                             onClick={() => setIsDeleteModalOpen(true)}
                             className="p-1.5 text-slate-500 hover:text-red-400 transition-colors"
                             title="Delete Contract"
                           >
                             <Trash2 className="w-[15px] h-[15px]" />
                           </button>
                           <Link 
                             href={`/contracts/${contract.id}/edit`}
                             className="p-1.5 text-slate-500 hover:text-white transition-colors"
                             title="Edit Contract"
                           >
                             <Edit2 className="w-[15px] h-[15px]" />
                           </Link>
                           <Link 
                             href={`/contracts/${contract.id}`}
                             className="p-1.5 text-slate-500 hover:text-white transition-colors"
                             title="View Contract"
                           >
                             <Eye className="w-[15px] h-[15px]" />
                           </Link>
                           <button 
                             onClick={() => togglePin(contract.id)}
                             className={`p-1.5 transition-colors ${contract.pinned ? 'text-indigo-400' : 'text-slate-500 hover:text-white'}`}
                             title="Pin Contract"
                           >
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

      {/* Delete Confirmation Modal */}
      {isDeleteModalOpen && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setIsDeleteModalOpen(false)}
        >
          <div 
            className="bg-slate-900 border border-slate-700 rounded-2xl w-full max-w-md overflow-hidden flex flex-col shadow-2xl animate-in fade-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Content */}
            <div className="p-8 text-center space-y-4">
              <h2 className="text-2xl font-bold text-white mb-2">Delete Contract</h2>
              <p className="text-slate-300 text-lg">Are you sure?</p>
            </div>

            {/* Modal Footer */}
            <div className="px-8 py-6 bg-slate-900/80 flex justify-center gap-4">
              <button 
                onClick={() => setIsDeleteModalOpen(false)}
                className="px-6 py-2.5 bg-slate-800 border border-slate-700 text-slate-300 hover:text-white hover:bg-slate-700 rounded-lg font-medium transition-colors min-w-[120px]"
              >
                Cancel
              </button>
              <button 
                onClick={() => setIsDeleteModalOpen(false)}
                className="px-6 py-2.5 bg-[#8b5cf6] hover:bg-[#7c3aed] text-white rounded-lg font-medium shadow-[0_0_15px_rgba(139,92,246,0.3)] hover:shadow-[0_0_20px_rgba(139,92,246,0.5)] transition-all min-w-[120px]"
              >
                Continue
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Create Contract Modal */}
      {isCreateModalOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 overflow-y-auto">
          <div className="glass-panel rounded-2xl border-t border-indigo-500/20 shadow-xl w-full max-w-[600px] my-8 flex flex-col relative max-h-[90vh]">
            <div className="flex items-center justify-between p-6 border-b border-white/10 shrink-0 sticky top-0 bg-slate-900/40 backdrop-blur-xl z-10 rounded-t-lg">
              <h2 className="text-xl font-bold text-white">Create A New Contract</h2>
              <button 
                onClick={() => setIsCreateModalOpen(false)}
                className="text-slate-500 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="p-6 overflow-y-auto">
              <div className="space-y-5">
                <div className="grid grid-cols-[120px_1fr] items-center gap-4">
                  <label className="text-[14px] text-slate-300">Client*</label>
                  <select className="w-full border border-white/10 focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/50 px-3 py-2.5 bg-slate-900/80 rounded-md text-[13px] text-white focus:outline-none">
                    <option></option>
                    <option>Pink Gorilla Software</option>
                    <option>Recloud</option>
                    <option>PG Development</option>
                  </select>
                </div>
                
                <div className="grid grid-cols-[120px_1fr] items-center gap-4">
                  <label className="text-[14px] text-slate-300">Template</label>
                  <select className="w-full border border-white/10 focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/50 px-3 py-2.5 bg-slate-900/80 rounded-md text-[13px] text-white focus:outline-none">
                    <option>None (blank)</option>
                    <option>Standard MSA</option>
                    <option>NDA Template</option>
                  </select>
                </div>
                
                <div className="w-full h-[1px] bg-white/10 my-4"></div>
                
                <div className="grid grid-cols-[120px_1fr] items-center gap-4">
                  <label className="text-[14px] text-slate-300">Contract Title</label>
                  <input type="text" className="w-full px-3 py-2.5 bg-slate-900/80 border border-white/10 rounded-md text-[13px] text-white focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/50" />
                </div>
                
                <div className="grid grid-cols-[120px_1fr] items-center gap-4">
                  <label className="text-[14px] text-slate-300">Start Date</label>
                  <input type="date" className="w-full px-3 py-2.5 bg-slate-900/80 border border-white/10 rounded-md text-[13px] text-white focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/50" style={{ colorScheme: 'dark' }} />
                </div>
                
                <div className="grid grid-cols-[120px_1fr] items-center gap-4">
                  <label className="text-[14px] text-slate-300">End Date</label>
                  <input type="date" className="w-full px-3 py-2.5 bg-slate-900/80 border border-white/10 rounded-md text-[13px] text-white focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/50" style={{ colorScheme: 'dark' }} />
                </div>
                
                <div className="w-full h-[1px] bg-white/10 my-4"></div>
                
                <label className="flex items-center gap-3 cursor-pointer group">
                  <div className="relative flex items-center justify-center">
                    <input type="checkbox" defaultChecked className="peer sr-only" />
                    <div className="w-5 h-5 rounded border border-slate-600 bg-slate-900 peer-checked:bg-[#8b5cf6] peer-checked:border-[#8b5cf6] transition-colors flex items-center justify-center shadow-[0_0_10px_rgba(139,92,246,0)] peer-checked:shadow-[0_0_10px_rgba(139,92,246,0.3)]">
                      <svg className="w-3.5 h-3.5 text-white opacity-0 peer-checked:opacity-100 transition-opacity" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>
                  <span className="text-[14px] text-slate-300 group-hover:text-white transition-colors">Show contract after its been created</span>
                </label>
              </div>
            </div>
            
            <div className="flex items-center justify-end gap-3 p-6 border-t border-white/10 bg-slate-900/40 backdrop-blur-xl rounded-b-lg shrink-0 sticky bottom-0">
              <button 
                onClick={() => setIsCreateModalOpen(false)}
                className="px-5 py-2 bg-slate-900/40 backdrop-blur-xl border border-white/10 hover:bg-slate-900/40 backdrop-blur-xl/50 text-slate-300 rounded-md text-[14px] font-medium transition-colors"
              >
                Close
              </button>
              <button className="px-6 py-2.5 bg-[#8b5cf6] hover:bg-[#7c3aed] text-white rounded-xl text-[14px] font-medium transition-all shadow-[0_0_15px_rgba(139,92,246,0.3)] hover:shadow-[0_0_20px_rgba(139,92,246,0.5)]">
                Submit
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
