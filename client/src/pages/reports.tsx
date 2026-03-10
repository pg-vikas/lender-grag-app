import { useState } from "react";
import { BarChart2, PieChart, TrendingUp, Calendar, Download } from "lucide-react";
import { useLocation } from "wouter";
import { Sidebar, Header } from "./clients";

export default function ReportsPage() {
  const [openMenus, setOpenMenus] = useState<string>('reports');
  const [location] = useLocation();

  const toggleMenu = (menu: string) => {
    setOpenMenus(prev => prev === menu ? '' : menu);
  };

  return (
    <div className="min-h-screen bg-[#f3f4f8] flex font-sans text-[#1e293b]">
      <Sidebar openMenus={openMenus} toggleMenu={toggleMenu} currentPath={location} />

      <div className="flex-1 flex flex-col min-w-0">
        <Header title="Reports" />

        <main className="flex-1 overflow-y-auto p-6 lg:p-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between mb-6">
              <h1 className="text-2xl font-bold text-[#0f172a]">Reports Overview</h1>
              <div className="flex items-center gap-3">
                 <button className="flex items-center gap-2 px-4 py-2 bg-white border border-[#e2e8f0] rounded-lg text-sm font-medium text-[#475569] hover:bg-[#f8fafc] transition-colors">
                    <Calendar className="w-4 h-4" /> This Month
                 </button>
                 <button className="flex items-center gap-2 px-4 py-2 bg-[#8b5cf6] hover:bg-[#7c3aed] text-white rounded-lg text-sm font-medium transition-colors shadow-sm">
                    <Download className="w-4 h-4" /> Export
                 </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              <div className="bg-white rounded-[1rem] p-6 shadow-[0_2px_10px_rgba(0,0,0,0.02)] border border-[#f1f5f9] flex items-center justify-between">
                 <div>
                   <p className="text-sm font-medium text-[#64748b] mb-1">Total Revenue</p>
                   <h3 className="text-3xl font-bold text-[#0f172a]">$124,500</h3>
                   <p className="text-sm text-green-500 mt-2 flex items-center gap-1 font-medium"><TrendingUp className="w-4 h-4" /> +14.5% from last month</p>
                 </div>
                 <div className="w-16 h-16 rounded-full bg-purple-50 flex items-center justify-center">
                    <BarChart2 className="w-8 h-8 text-purple-500" />
                 </div>
              </div>
              <div className="bg-white rounded-[1rem] p-6 shadow-[0_2px_10px_rgba(0,0,0,0.02)] border border-[#f1f5f9] flex items-center justify-between">
                 <div>
                   <p className="text-sm font-medium text-[#64748b] mb-1">Active Projects</p>
                   <h3 className="text-3xl font-bold text-[#0f172a]">42</h3>
                   <p className="text-sm text-green-500 mt-2 flex items-center gap-1 font-medium"><TrendingUp className="w-4 h-4" /> +5 new this month</p>
                 </div>
                 <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center">
                    <PieChart className="w-8 h-8 text-blue-500" />
                 </div>
              </div>
              <div className="bg-white rounded-[1rem] p-6 shadow-[0_2px_10px_rgba(0,0,0,0.02)] border border-[#f1f5f9] flex items-center justify-between">
                 <div>
                   <p className="text-sm font-medium text-[#64748b] mb-1">Client Retention</p>
                   <h3 className="text-3xl font-bold text-[#0f172a]">94.2%</h3>
                   <p className="text-sm text-amber-500 mt-2 flex items-center gap-1 font-medium">-1.2% from last month</p>
                 </div>
                 <div className="w-16 h-16 rounded-full bg-emerald-50 flex items-center justify-center">
                    <TrendingUp className="w-8 h-8 text-emerald-500" />
                 </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
               <div className="bg-white rounded-[1rem] shadow-[0_2px_10px_rgba(0,0,0,0.02)] border border-[#f1f5f9] p-6">
                 <h2 className="text-lg font-bold text-[#0f172a] mb-6">Revenue Growth</h2>
                 <div className="h-[300px] flex items-end justify-between gap-2">
                    {/* Mock Bar Chart */}
                    {[40, 65, 45, 80, 55, 90, 100].map((height, i) => (
                      <div key={i} className="w-full bg-[#f8fafc] rounded-t-lg relative group">
                        <div className="absolute bottom-0 w-full bg-[#8b5cf6] rounded-t-lg transition-all group-hover:bg-[#7c3aed]" style={{ height: `${height}%` }}></div>
                        <div className="absolute -bottom-6 w-full text-center text-xs text-[#64748b]">{['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'][i]}</div>
                      </div>
                    ))}
                 </div>
               </div>

               <div className="bg-white rounded-[1rem] shadow-[0_2px_10px_rgba(0,0,0,0.02)] border border-[#f1f5f9] p-6">
                 <h2 className="text-lg font-bold text-[#0f172a] mb-6">Project Status</h2>
                 <div className="flex flex-col gap-6">
                    <div>
                      <div className="flex justify-between text-sm mb-2 font-medium">
                        <span className="text-[#0f172a]">Completed</span>
                        <span className="text-[#64748b]">45%</span>
                      </div>
                      <div className="w-full bg-[#f1f5f9] rounded-full h-3">
                        <div className="bg-green-500 h-3 rounded-full" style={{ width: '45%' }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-2 font-medium">
                        <span className="text-[#0f172a]">In Progress</span>
                        <span className="text-[#64748b]">35%</span>
                      </div>
                      <div className="w-full bg-[#f1f5f9] rounded-full h-3">
                        <div className="bg-amber-500 h-3 rounded-full" style={{ width: '35%' }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-2 font-medium">
                        <span className="text-[#0f172a]">Planning</span>
                        <span className="text-[#64748b]">20%</span>
                      </div>
                      <div className="w-full bg-[#f1f5f9] rounded-full h-3">
                        <div className="bg-blue-500 h-3 rounded-full" style={{ width: '20%' }}></div>
                      </div>
                    </div>
                 </div>
               </div>
            </div>

          </div>
        </main>
      </div>
    </div>
  );
}
