import { useState } from "react";
import { Search } from "lucide-react";
import { useLocation } from "wouter";
import { Sidebar, Header } from "./clients";

export default function TasksPage() {
  const [openMenus, setOpenMenus] = useState<string>('crm');
  const [location] = useLocation();

  const toggleMenu = (menu: string) => {
    setOpenMenus(prev => prev === menu ? '' : menu);
  };

  return (
    <div className="min-h-screen page-bg flex font-sans text-[#1e293b]">
      <Sidebar openMenus={openMenus} toggleMenu={toggleMenu} currentPath={location} />

      <div className="flex-1 flex flex-col min-w-0 bg-white/30 backdrop-blur-3xl">
        <Header title="Tasks" />

        <main className="flex-1 overflow-y-auto p-6 lg:p-8 relative">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-[22px] font-semibold text-[#0f172a] mb-6">Client Tasks Overview</h1>

            <div className="modern-card p-6 mb-6  border border-white/60">
              <div className="flex flex-col md:flex-row gap-6 items-end">
                <div className="flex-1 w-full max-w-[320px]">
                  <label className="block text-[13px] text-[#64748b] mb-2 font-medium">Client</label>
                  <input 
                    type="text" 
                    className="w-full h-[40px] px-3 border border-white/60 rounded-md focus:outline-none focus:border-primary/30 text-sm" 
                  />
                </div>
                <div className="flex-1 w-full max-w-[320px]">
                  <label className="block text-[13px] text-[#64748b] mb-2 font-medium">Status</label>
                  <input 
                    type="text" 
                    className="w-full h-[40px] px-3 border border-white/60 rounded-md focus:outline-none focus:border-primary/30 text-sm" 
                  />
                </div>
                <div className="flex items-center gap-4">
                  <button className="h-[40px] px-6 bg-[#8b5cf6] hover:bg-[#7c3aed] text-white rounded-md flex items-center justify-center gap-1.5 text-sm font-medium transition-colors">
                    <Search className="w-4 h-4" /> Filter
                  </button>
                  <button className="text-sm font-medium text-[#475569] hover:text-[#0f172a] transition-colors">
                    Reset
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur-md min-h-[400px] rounded-lg  border border-white/60">
              <div className="p-6 overflow-x-auto border-b border-white/40">
                <div className="flex gap-3 min-w-max">
                  <button className="px-4 py-2 bg-[#8b5cf6] text-white rounded-md text-[13px] font-medium transition-colors">
                    Today's Tasks (0)
                  </button>
                  <button className="px-4 py-2 bg-white/80 backdrop-blur-md/50 text-[#475569] hover:bg-[#f1f5f9] rounded-md text-[13px] font-medium transition-colors">
                    Overdue Tasks (0)
                  </button>
                  <button className="px-4 py-2 bg-white/80 backdrop-blur-md/50 text-[#475569] hover:bg-[#f1f5f9] rounded-md text-[13px] font-medium transition-colors">
                    Future Tasks (0)
                  </button>
                  <button className="px-4 py-2 bg-white/80 backdrop-blur-md/50 text-[#475569] hover:bg-[#f1f5f9] rounded-md text-[13px] font-medium transition-colors">
                    Completed Tasks (0)
                  </button>
                  <button className="px-4 py-2 bg-white/80 backdrop-blur-md/50 text-[#475569] hover:bg-[#f1f5f9] rounded-md text-[13px] font-medium transition-colors">
                    Clients Missing Task (0)
                  </button>
                </div>
              </div>
              
              <div className="py-24 flex items-center justify-center">
                <p className="text-[#94a3b8] text-[14px]">No tasks found</p>
              </div>
            </div>

          </div>
        </main>
      </div>
    </div>
  );
}
