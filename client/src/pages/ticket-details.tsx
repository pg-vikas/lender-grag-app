import { useState } from "react";
import { useLocation } from "wouter";
import { Sidebar, Header } from "./clients";
import { Edit2, Settings } from "lucide-react";

export default function TicketDetailsPage() {
  const [openMenus, setOpenMenus] = useState<string>('support');
  const [location] = useLocation();

  const toggleMenu = (menu: string) => {
    setOpenMenus(prev => prev === menu ? '' : menu);
  };

  return (
    <div className="h-screen w-full overflow-hidden bg-transparent flex font-sans text-[#e2e8f0]">
      <Sidebar openMenus={openMenus} toggleMenu={toggleMenu} currentPath="/tickets" />

      <div className="flex-1 flex flex-col min-w-0 bg-[#0f172a] relative">
        <Header title="Ticket Details" />

        <main className="flex-1 overflow-y-auto p-6 lg:p-8 relative">
          <div className="max-w-[1400px] mx-auto">
            
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold text-white tracking-tight">
              <h1 className="text-[22px] font-bold text-white">Testing the Support features</h1>
              <div className="flex items-center gap-2">
                <button className="w-9 h-9 flex items-center justify-center bg-slate-900/80 border border-white/10 rounded-xl shadow-sm text-slate-500 hover:text-white hover:bg-slate-800 transition-colors shadow-sm">
                  <Edit2 className="w-4 h-4" />
                </button>
                <button className="w-9 h-9 flex items-center justify-center bg-slate-900/80 border border-white/10 rounded-xl shadow-sm text-slate-500 hover:text-white hover:bg-slate-800 transition-colors shadow-sm">
                  <Settings className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row gap-8">
              
              {/* Left Column - Ticket Details */}
              <div className="w-full lg:w-[320px] shrink-0">
                <div className="bg-slate-900/40 backdrop-blur-xl rounded-xl  border border-white/10">
                  <div className="p-5 border-b border-white/10">
                    <h2 className="text-[15px] font-bold text-white">Ticket Details</h2>
                  </div>
                  
                  <div className="p-5 space-y-5">
                    <div>
                      <h3 className="text-[13px] font-semibold text-white mb-1">Department</h3>
                      <p className="text-[13px] text-slate-400">Support</p>
                    </div>
                    
                    <div className="h-[1px] w-full bg-slate-800"></div>
                    
                    <div>
                      <h3 className="text-[13px] font-semibold text-white mb-1">Created</h3>
                      <p className="text-[13px] text-slate-400">31-10-2025 At 01:03</p>
                    </div>
                    
                    <div className="h-[1px] w-full bg-slate-800"></div>
                    
                    <div>
                      <h3 className="text-[13px] font-semibold text-white mb-1">Client</h3>
                      <p className="text-[13px] text-indigo-400 font-medium cursor-pointer hover:underline">Pink Gorilla Agency</p>
                    </div>
                    
                    <div className="h-[1px] w-full bg-slate-800"></div>
                    
                    <div>
                      <h3 className="text-[13px] font-semibold text-white mb-1">Activity</h3>
                      <p className="text-[13px] text-slate-400">4 months ago</p>
                    </div>
                    
                    <div className="h-[1px] w-full bg-slate-800"></div>
                    
                    <div>
                      <h3 className="text-[13px] font-semibold text-white mb-1">Tags</h3>
                    </div>
                    
                    <div className="h-[1px] w-full bg-slate-800"></div>
                    
                    <div>
                      <h3 className="text-[13px] font-semibold text-white mb-2">Priority</h3>
                      <span className="inline-flex items-center justify-center px-4 py-1.5 rounded-full text-[11px] font-semibold text-sky-500 border border-sky-200 bg-sky-50/50">
                        Normal
                      </span>
                    </div>
                    
                    <div className="h-[1px] w-full bg-slate-800"></div>
                    
                    <div>
                      <h3 className="text-[13px] font-semibold text-white mb-2">Status</h3>
                      <span className="inline-flex items-center justify-center px-4 py-1.5 rounded-full text-[11px] font-semibold text-green-600 border border-green-300 bg-transparent">
                        Answered
                      </span>
                    </div>
                    
                    <div className="pt-2">
                      <button className="w-full py-2 bg-indigo-500 hover:bg-indigo-400 text-white rounded-lg text-[13px] font-semibold transition-colors shadow-sm">
                        Edit Support Ticket
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column - Conversation */}
              <div className="flex-1 min-w-0 space-y-4">
                
                {/* Message 1 */}
                <div className="bg-slate-900/40 backdrop-blur-xl rounded-xl  border border-white/10 p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full overflow-hidden bg-slate-200 shrink-0">
                      <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Milhan" alt="Milhan" className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <div className="flex flex-col mb-4">
                        <span className="text-[14px] font-semibold text-white">Milhan Farooque</span>
                        <span className="text-[12px] text-slate-500">4 months ago</span>
                      </div>
                      <p className="text-[14px] text-slate-300">Nice!</p>
                    </div>
                  </div>
                </div>

                {/* Note 1 */}
                <div className="bg-[#fff9e6] rounded-xl  border border-[#fef0c7] p-6 relative">
                  <div className="absolute top-6 right-6">
                    <span className="px-2 py-1 bg-[#fef0c7] text-[#d97706] text-[10px] font-bold rounded">ticket note</span>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full overflow-hidden bg-slate-200 shrink-0">
                      <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Milhan" alt="Milhan" className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <div className="flex flex-col mb-4">
                        <span className="text-[14px] font-semibold text-white">Milhan Farooque</span>
                        <span className="text-[12px] text-slate-500">31-10-2025 - (4 months ago)</span>
                      </div>
                      <p className="text-[14px] text-slate-300">adding a note</p>
                    </div>
                  </div>
                </div>

                {/* Note 2 */}
                <div className="bg-[#fff9e6] rounded-xl  border border-[#fef0c7] p-6 relative">
                  <div className="absolute top-6 right-6">
                    <span className="px-2 py-1 bg-[#fef0c7] text-[#d97706] text-[10px] font-bold rounded">ticket note</span>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full overflow-hidden bg-slate-200 shrink-0">
                      <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Milhan" alt="Milhan" className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <div className="flex flex-col mb-4">
                        <span className="text-[14px] font-semibold text-white">Milhan Farooque</span>
                        <span className="text-[12px] text-slate-500">31-10-2025 - (4 months ago)</span>
                      </div>
                      <p className="text-[14px] text-slate-300">the second note.... it's cool</p>
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex justify-center gap-3 pt-4">
                  <button className="px-5 py-2.5 bg-slate-900/40 backdrop-blur-xl border border-white/10 hover:bg-slate-900/40 backdrop-blur-xl/50 text-slate-300 rounded-lg text-[14px] font-semibold transition-colors shadow-sm">
                    Add A Note
                  </button>
                  <button className="px-5 py-2.5 bg-indigo-500 hover:bg-indigo-400 text-white rounded-lg text-[14px] font-semibold transition-colors shadow-sm">
                    Reply Support Ticket
                  </button>
                </div>

              </div>
            </div>

          </div>
        </main>
      </div>
    </div>
  );
}