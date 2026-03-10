import { useState } from "react";
import { Search, Globe, Users, MousePointer2, Clock, ArrowUpRight } from "lucide-react";
import { useLocation } from "wouter";
import { Sidebar, Header } from "./clients";

export default function WebsiteAnalyticsPage() {
  const [openMenus, setOpenMenus] = useState<string>('');
  const [location] = useLocation();

  const toggleMenu = (menu: string) => {
    setOpenMenus(prev => prev === menu ? '' : menu);
  };

  return (
    <div className="min-h-screen bg-[#f3f4f8] flex font-sans text-[#1e293b]">
      <Sidebar openMenus={openMenus} toggleMenu={toggleMenu} currentPath={location} />

      <div className="flex-1 flex flex-col min-w-0">
        <Header title="Website Analytics" />

        <main className="flex-1 overflow-y-auto p-6 lg:p-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between mb-6">
              <h1 className="text-2xl font-bold text-[#0f172a]">Website Performance</h1>
              <select className="px-4 py-2 bg-white border border-[#e2e8f0] rounded-lg text-sm font-medium text-[#475569] hover:bg-[#f8fafc] transition-colors focus:outline-none">
                <option>Last 30 Days</option>
                <option>Last 7 Days</option>
                <option>This Year</option>
              </select>
            </div>

            {/* Top Stat Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
               <div className="bg-white rounded-[1rem] p-6 shadow-[0_2px_10px_rgba(0,0,0,0.02)] border border-[#f1f5f9]">
                 <div className="flex items-center justify-between mb-4">
                   <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
                      <Users className="w-5 h-5" />
                   </div>
                   <span className="text-xs font-medium text-green-500 bg-green-50 px-2 py-1 rounded-full flex items-center gap-1"><ArrowUpRight className="w-3 h-3" /> 12.5%</span>
                 </div>
                 <p className="text-sm font-medium text-[#64748b] mb-1">Total Visitors</p>
                 <h3 className="text-2xl font-bold text-[#0f172a]">45.2K</h3>
               </div>

               <div className="bg-white rounded-[1rem] p-6 shadow-[0_2px_10px_rgba(0,0,0,0.02)] border border-[#f1f5f9]">
                 <div className="flex items-center justify-between mb-4">
                   <div className="w-10 h-10 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center">
                      <MousePointer2 className="w-5 h-5" />
                   </div>
                   <span className="text-xs font-medium text-green-500 bg-green-50 px-2 py-1 rounded-full flex items-center gap-1"><ArrowUpRight className="w-3 h-3" /> 5.2%</span>
                 </div>
                 <p className="text-sm font-medium text-[#64748b] mb-1">Bounce Rate</p>
                 <h3 className="text-2xl font-bold text-[#0f172a]">42.3%</h3>
               </div>

               <div className="bg-white rounded-[1rem] p-6 shadow-[0_2px_10px_rgba(0,0,0,0.02)] border border-[#f1f5f9]">
                 <div className="flex items-center justify-between mb-4">
                   <div className="w-10 h-10 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center">
                      <Clock className="w-5 h-5" />
                   </div>
                   <span className="text-xs font-medium text-green-500 bg-green-50 px-2 py-1 rounded-full flex items-center gap-1"><ArrowUpRight className="w-3 h-3" /> 8.1%</span>
                 </div>
                 <p className="text-sm font-medium text-[#64748b] mb-1">Avg. Session Duration</p>
                 <h3 className="text-2xl font-bold text-[#0f172a]">2m 45s</h3>
               </div>

               <div className="bg-white rounded-[1rem] p-6 shadow-[0_2px_10px_rgba(0,0,0,0.02)] border border-[#f1f5f9]">
                 <div className="flex items-center justify-between mb-4">
                   <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center">
                      <Globe className="w-5 h-5" />
                   </div>
                   <span className="text-xs font-medium text-green-500 bg-green-50 px-2 py-1 rounded-full flex items-center gap-1"><ArrowUpRight className="w-3 h-3" /> 14.2%</span>
                 </div>
                 <p className="text-sm font-medium text-[#64748b] mb-1">Page Views</p>
                 <h3 className="text-2xl font-bold text-[#0f172a]">124.8K</h3>
               </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
               <div className="lg:col-span-2 bg-white rounded-[1rem] shadow-[0_2px_10px_rgba(0,0,0,0.02)] border border-[#f1f5f9] p-6">
                 <h2 className="text-lg font-bold text-[#0f172a] mb-6">Traffic Overview</h2>
                 <div className="h-[300px] flex items-end justify-between gap-1 mt-8">
                    {/* Mock Line Chart Using Bars */}
                    {Array.from({length: 30}).map((_, i) => {
                      // Generate a somewhat realistic looking curved pattern
                      const height = 40 + Math.sin(i * 0.5) * 30 + Math.random() * 20;
                      return (
                        <div key={i} className="w-full bg-[#8b5cf6]/20 rounded-t-sm relative group hover:bg-[#8b5cf6]" style={{ height: `${height}%` }}>
                           {/* Tooltip on hover */}
                           <div className="hidden group-hover:block absolute -top-8 left-1/2 -translate-x-1/2 bg-[#0f172a] text-white text-xs py-1 px-2 rounded whitespace-nowrap">
                              {Math.floor(height * 10)} visits
                           </div>
                        </div>
                      )
                    })}
                 </div>
                 <div className="flex justify-between text-xs text-[#64748b] mt-4 border-t border-[#f1f5f9] pt-4">
                    <span>Oct 1</span>
                    <span>Oct 15</span>
                    <span>Oct 30</span>
                 </div>
               </div>

               <div className="bg-white rounded-[1rem] shadow-[0_2px_10px_rgba(0,0,0,0.02)] border border-[#f1f5f9] p-6">
                 <h2 className="text-lg font-bold text-[#0f172a] mb-6">Top Sources</h2>
                 <div className="space-y-6">
                    <div>
                      <div className="flex justify-between text-sm mb-2 font-medium">
                        <span className="text-[#0f172a]">Organic Search (Google)</span>
                        <span className="text-[#0f172a]">45%</span>
                      </div>
                      <div className="w-full bg-[#f1f5f9] rounded-full h-2">
                        <div className="bg-blue-500 h-2 rounded-full" style={{ width: '45%' }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-2 font-medium">
                        <span className="text-[#0f172a]">Direct Traffic</span>
                        <span className="text-[#0f172a]">30%</span>
                      </div>
                      <div className="w-full bg-[#f1f5f9] rounded-full h-2">
                        <div className="bg-purple-500 h-2 rounded-full" style={{ width: '30%' }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-2 font-medium">
                        <span className="text-[#0f172a]">Social Media (Twitter/X)</span>
                        <span className="text-[#0f172a]">15%</span>
                      </div>
                      <div className="w-full bg-[#f1f5f9] rounded-full h-2">
                        <div className="bg-sky-500 h-2 rounded-full" style={{ width: '15%' }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-2 font-medium">
                        <span className="text-[#0f172a]">Referral</span>
                        <span className="text-[#0f172a]">10%</span>
                      </div>
                      <div className="w-full bg-[#f1f5f9] rounded-full h-2">
                        <div className="bg-amber-500 h-2 rounded-full" style={{ width: '10%' }}></div>
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
