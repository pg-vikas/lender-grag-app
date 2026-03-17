import { useState, useEffect } from "react";
import { useLocation, useParams } from "wouter";
import { Sidebar, Header } from "./clients";
import { useAppStore } from "@/lib/store";

export default function ContractEditPage() {
  const [openMenus, setOpenMenus] = useState<string>('contracts');
  const [, setLocation] = useLocation();
  const { id } = useParams<{ id: string }>();
  
  const contractsList = useAppStore((state) => state.contracts);
  const updateContract = useAppStore((state) => state.updateContract);
  
  const [formData, setFormData] = useState({
    title: "",
    client: "",
    date: "",
    clientStatus: "Pending",
    providerStatus: "Pending",
    status: "Awaiting Signatures",
    value: "",
    startDate: "",
    endDate: "",
    description: ""
  });

  useEffect(() => {
    const contract = contractsList.find(c => c.id === id);
    if (contract) {
      setFormData({
        title: contract.title || "",
        client: contract.client || "",
        date: contract.date || "",
        clientStatus: contract.clientStatus || "Pending",
        providerStatus: contract.providerStatus || "Pending",
        status: contract.status || "Awaiting Signatures",
        value: contract.value || "",
        startDate: contract.startDate || "",
        endDate: contract.endDate || "",
        description: contract.description || ""
      });
    }
  }, [id, contractsList]);

  const toggleMenu = (menu: string) => {
    setOpenMenus(prev => prev === menu ? '' : menu);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (id) {
      updateContract(id, formData);
      setLocation('/contracts');
    }
  };

  if (!contractsList.find(c => c.id === id)) {
    return (
      <div className="h-screen w-full flex items-center justify-center bg-[#0f172a] text-white">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Contract not found</h2>
          <button 
            onClick={() => setLocation('/contracts')}
            className="px-6 py-2.5 bg-indigo-600 hover:bg-indigo-500 rounded-xl"
          >
            Back to Contracts
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="h-screen w-full overflow-hidden bg-transparent flex font-sans text-[#e2e8f0]">
      <Sidebar openMenus={openMenus} toggleMenu={toggleMenu} currentPath="/contracts" />

      <div className="flex-1 flex flex-col min-w-0 bg-[#0f172a] relative">
        <Header title={`Edit Contract: ${id}`} />

        <main className="flex-1 overflow-y-auto p-6 lg:p-8 relative">
          <div className="max-w-4xl mx-auto">
            
            <form onSubmit={handleSubmit} className="glass-panel rounded-2xl border-t border-indigo-500/20 shadow-[0_2px_10px_rgba(0,0,0,0.08)] overflow-hidden border border-white/10 p-8">
              <h2 className="text-xl font-bold text-white mb-6">Edit Contract Details</h2>
              
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">Contract Title</label>
                    <input 
                      type="text" 
                      value={formData.title}
                      onChange={(e) => setFormData({...formData, title: e.target.value})}
                      className="w-full px-4 py-2.5 bg-slate-900/80 border border-white/10 rounded-xl text-sm text-white focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/50" 
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">Client Name</label>
                    <input 
                      type="text" 
                      value={formData.client}
                      onChange={(e) => setFormData({...formData, client: e.target.value})}
                      className="w-full px-4 py-2.5 bg-slate-900/80 border border-white/10 rounded-xl text-sm text-white focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/50" 
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">Contract Value</label>
                    <input 
                      type="text" 
                      value={formData.value}
                      onChange={(e) => setFormData({...formData, value: e.target.value})}
                      placeholder="$0.00"
                      className="w-full px-4 py-2.5 bg-slate-900/80 border border-white/10 rounded-xl text-sm text-white focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/50" 
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">Status</label>
                    <select 
                      value={formData.status}
                      onChange={(e) => setFormData({...formData, status: e.target.value})}
                      className="w-full px-4 py-2.5 bg-slate-900/80 border border-white/10 rounded-xl text-sm text-white focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/50" 
                    >
                      <option value="Draft">Draft</option>
                      <option value="Awaiting Signatures">Awaiting Signatures</option>
                      <option value="Active">Active</option>
                      <option value="Expired">Expired</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">Client Signature Status</label>
                    <select 
                      value={formData.clientStatus}
                      onChange={(e) => setFormData({...formData, clientStatus: e.target.value})}
                      className="w-full px-4 py-2.5 bg-slate-900/80 border border-white/10 rounded-xl text-sm text-white focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/50" 
                    >
                      <option value="Pending">Pending</option>
                      <option value="Signed">Signed</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">Provider Signature Status</label>
                    <select 
                      value={formData.providerStatus}
                      onChange={(e) => setFormData({...formData, providerStatus: e.target.value})}
                      className="w-full px-4 py-2.5 bg-slate-900/80 border border-white/10 rounded-xl text-sm text-white focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/50" 
                    >
                      <option value="Pending">Pending</option>
                      <option value="Signed">Signed</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">Start Date</label>
                    <input 
                      type="date" 
                      value={formData.startDate}
                      onChange={(e) => setFormData({...formData, startDate: e.target.value})}
                      className="w-full px-4 py-2.5 bg-slate-900/80 border border-white/10 rounded-xl text-sm text-white focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/50" 
                      style={{ colorScheme: 'dark' }}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">End Date</label>
                    <input 
                      type="date" 
                      value={formData.endDate}
                      onChange={(e) => setFormData({...formData, endDate: e.target.value})}
                      className="w-full px-4 py-2.5 bg-slate-900/80 border border-white/10 rounded-xl text-sm text-white focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/50" 
                      style={{ colorScheme: 'dark' }}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Description</label>
                  <textarea 
                    value={formData.description}
                    onChange={(e) => setFormData({...formData, description: e.target.value})}
                    rows={4}
                    className="w-full px-4 py-2.5 bg-slate-900/80 border border-white/10 rounded-xl text-sm text-white focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/50" 
                  />
                </div>
              </div>

              <div className="mt-8 flex justify-end gap-4">
                <button 
                  type="button"
                  onClick={() => setLocation('/contracts')}
                  className="px-6 py-2.5 border border-slate-700 hover:bg-slate-800 text-white rounded-xl text-sm font-medium transition-colors"
                >
                  Cancel
                </button>
                <button 
                  type="submit"
                  className="px-6 py-2.5 bg-[#8b5cf6] hover:bg-[#7c3aed] text-white rounded-xl text-sm font-medium transition-all shadow-[0_0_15px_rgba(139,92,246,0.3)]"
                >
                  Save Changes
                </button>
              </div>
            </form>

          </div>
        </main>
      </div>
    </div>
  );
}