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
    <div className="min-h-screen bg-[#f8fafc] flex font-sans text-[#1e293b]">
      <Sidebar openMenus={openMenus} toggleMenu={toggleMenu} currentPath="/tickets" />

      <div className="flex-1 flex flex-col min-w-0">
        <Header title="Ticket Details" />

        <main className="flex-1 overflow-y-auto p-6 lg:p-8">
          <div className="max-w-[1400px] mx-auto">
            
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-[22px] font-bold text-[#0f172a]">Testing the Support features</h1>
              <div className="flex items-center gap-2">
                <button className="w-9 h-9 flex items-center justify-center bg-white border border-[#e2e8f0] rounded-lg text-[#94a3b8] hover:text-[#0f172a] hover:bg-[#f1f5f9] transition-colors shadow-sm">
                  <Edit2 className="w-4 h-4" />
                </button>
                <button className="w-9 h-9 flex items-center justify-center bg-white border border-[#e2e8f0] rounded-lg text-[#94a3b8] hover:text-[#0f172a] hover:bg-[#f1f5f9] transition-colors shadow-sm">
                  <Settings className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row gap-8">
              
              {/* Left Column - Ticket Details */}
              <div className="w-full lg:w-[320px] shrink-0">
                <div className="bg-white rounded-xl shadow-[0_2px_10px_rgba(0,0,0,0.02)] border border-[#e2e8f0]">
                  <div className="p-5 border-b border-[#f1f5f9]">
                    <h2 className="text-[15px] font-bold text-[#0f172a]">Ticket Details</h2>
                  </div>
                  
                  <div className="p-5 space-y-5">
                    <div>
                      <h3 className="text-[13px] font-semibold text-[#0f172a] mb-1">Department</h3>
                      <p className="text-[13px] text-[#64748b]">Support</p>
                    </div>
                    
                    <div className="h-[1px] w-full bg-[#f1f5f9]"></div>
                    
                    <div>
                      <h3 className="text-[13px] font-semibold text-[#0f172a] mb-1">Created</h3>
                      <p className="text-[13px] text-[#64748b]">31-10-2025 At 01:03</p>
                    </div>
                    
                    <div className="h-[1px] w-full bg-[#f1f5f9]"></div>
                    
                    <div>
                      <h3 className="text-[13px] font-semibold text-[#0f172a] mb-1">Client</h3>
                      <p className="text-[13px] text-[#8b5cf6] font-medium cursor-pointer hover:underline">Pink Gorilla Agency</p>
                    </div>
                    
                    <div className="h-[1px] w-full bg-[#f1f5f9]"></div>
                    
                    <div>
                      <h3 className="text-[13px] font-semibold text-[#0f172a] mb-1">Activity</h3>
                      <p className="text-[13px] text-[#64748b]">4 months ago</p>
                    </div>
                    
                    <div className="h-[1px] w-full bg-[#f1f5f9]"></div>
                    
                    <div>
                      <h3 className="text-[13px] font-semibold text-[#0f172a] mb-1">Tags</h3>
                    </div>
                    
                    <div className="h-[1px] w-full bg-[#f1f5f9]"></div>
                    
                    <div>
                      <h3 className="text-[13px] font-semibold text-[#0f172a] mb-2">Priority</h3>
                      <span className="inline-flex items-center justify-center px-4 py-1.5 rounded-full text-[11px] font-semibold text-sky-500 border border-sky-200 bg-sky-50/50">
                        Normal
                      </span>
                    </div>
                    
                    <div className="h-[1px] w-full bg-[#f1f5f9]"></div>
                    
                    <div>
                      <h3 className="text-[13px] font-semibold text-[#0f172a] mb-2">Status</h3>
                      <span className="inline-flex items-center justify-center px-4 py-1.5 rounded-full text-[11px] font-semibold text-green-600 border border-green-300 bg-transparent">
                        Answered
                      </span>
                    </div>
                    
                    <div className="pt-2">
                      <button className="w-full py-2 bg-[#8b5cf6] hover:bg-[#7c3aed] text-white rounded-lg text-[13px] font-semibold transition-colors shadow-sm">
                        Edit Support Ticket
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column - Conversation */}
              <div className="flex-1 min-w-0 space-y-4">
                
                {/* Message 1 */}
                <div className="bg-white rounded-xl shadow-[0_2px_10px_rgba(0,0,0,0.02)] border border-[#e2e8f0] p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-200 shrink-0">
                      <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Milhan" alt="Milhan" className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <div className="flex flex-col mb-4">
                        <span className="text-[14px] font-semibold text-[#0f172a]">Milhan Farooque</span>
                        <span className="text-[12px] text-[#94a3b8]">4 months ago</span>
                      </div>
                      <p className="text-[14px] text-[#475569]">Nice!</p>
                    </div>
                  </div>
                </div>

                {/* Note 1 */}
                <div className="bg-[#fff9e6] rounded-xl shadow-[0_2px_10px_rgba(0,0,0,0.02)] border border-[#fef0c7] p-6 relative">
                  <div className="absolute top-6 right-6">
                    <span className="px-2 py-1 bg-[#fef0c7] text-[#d97706] text-[10px] font-bold rounded">ticket note</span>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-200 shrink-0">
                      <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Milhan" alt="Milhan" className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <div className="flex flex-col mb-4">
                        <span className="text-[14px] font-semibold text-[#0f172a]">Milhan Farooque</span>
                        <span className="text-[12px] text-[#94a3b8]">31-10-2025 - (4 months ago)</span>
                      </div>
                      <p className="text-[14px] text-[#475569]">adding a note</p>
                    </div>
                  </div>
                </div>

                {/* Note 2 */}
                <div className="bg-[#fff9e6] rounded-xl shadow-[0_2px_10px_rgba(0,0,0,0.02)] border border-[#fef0c7] p-6 relative">
                  <div className="absolute top-6 right-6">
                    <span className="px-2 py-1 bg-[#fef0c7] text-[#d97706] text-[10px] font-bold rounded">ticket note</span>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-200 shrink-0">
                      <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Milhan" alt="Milhan" className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <div className="flex flex-col mb-4">
                        <span className="text-[14px] font-semibold text-[#0f172a]">Milhan Farooque</span>
                        <span className="text-[12px] text-[#94a3b8]">31-10-2025 - (4 months ago)</span>
                      </div>
                      <p className="text-[14px] text-[#475569]">the second note.... it's cool</p>
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex justify-center gap-3 pt-4">
                  <button className="px-5 py-2.5 bg-white border border-[#e2e8f0] hover:bg-[#f8fafc] text-[#475569] rounded-lg text-[14px] font-semibold transition-colors shadow-sm">
                    Add A Note
                  </button>
                  <button className="px-5 py-2.5 bg-[#8b5cf6] hover:bg-[#7c3aed] text-white rounded-lg text-[14px] font-semibold transition-colors shadow-sm">
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