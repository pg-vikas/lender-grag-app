import { useState } from "react";
import { Sidebar, Header } from "./clients";
import { Button } from "@/components/ui/button";
import { Search, Filter, Download, Plus, Edit, Trash2, Clock, CheckCircle2, PauseCircle, PlayCircle, MoreHorizontal } from "lucide-react";
import { Link, useLocation } from "wouter";

export default function LaunchpadsPage() {
  const [location] = useLocation();
  const [activeFilter, setActiveFilter] = useState('All');
  
  const stats = [
    { label: 'Not Started', count: 3, colorClass: 'border-slate-500', icon: Clock, iconColor: 'text-slate-400', filterValue: 'Not Started' },
    { label: 'In Progress', count: 2, colorClass: 'border-blue-500', icon: PlayCircle, iconColor: 'text-blue-400', filterValue: 'In Progress' },
    { label: 'On Hold', count: 0, colorClass: 'border-yellow-500', icon: PauseCircle, iconColor: 'text-yellow-400', filterValue: 'On Hold' },
    { label: 'Pending Approval', count: 0, colorClass: 'border-orange-500', icon: Clock, iconColor: 'text-orange-400', filterValue: 'Pending Approval' },
    { label: 'Completed', count: 0, colorClass: 'border-emerald-500', icon: CheckCircle2, iconColor: 'text-emerald-400', filterValue: 'Completed' },
  ];

  const launchpads = [
    { name: "Landscaper", client: "Pink Gorilla Software", creator: "Jitender", creatorImg: "J", status: "In Progress" },
    { name: "Demo 5", client: "Pink Gorilla Software", creator: "PG", creatorImg: "PG", status: "Not Started" },
    { name: "Test2", client: "Pink Gorilla Software", creator: "Jitender", creatorImg: "J", status: "Not Started" },
    { name: "Demo 4", client: "Vin Gardner", creator: "PG", creatorImg: "PG", status: "Not Started" },
    { name: "Demo 3", client: "Pink Gorilla Software", creator: "PG", creatorImg: "PG", status: "In Progress" },
  ];

  const filteredLaunchpads = activeFilter === 'All' 
    ? launchpads 
    : launchpads.filter(l => l.status === activeFilter);

  return (
    <div className="h-screen w-full overflow-hidden bg-transparent flex font-sans text-[#e2e8f0]">
      <Sidebar openMenus="" toggleMenu={() => {}} currentPath={location} />
      
      <div className="flex-1 flex flex-col min-w-0 bg-[#0f172a] relative">
        <Header title="Launchpads" />
        
        <div className="flex flex-1 overflow-hidden relative z-10">
          <main className="flex-1 overflow-y-auto p-6 lg:p-8 scrollbar-hide">
            <div className="max-w-7xl mx-auto space-y-6">
              
              {/* Stats Cards Row */}
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                {stats.map((stat, idx) => (
                  <div 
                    key={idx}
                    onClick={() => setActiveFilter(stat.filterValue)}
                    className={`glass-panel p-4 rounded-xl border-t cursor-pointer transition-all hover:-translate-y-1 ${stat.colorClass} ${activeFilter === stat.filterValue ? 'bg-slate-800/50 shadow-[inset_0_-4px_10px_-4px_rgba(255,255,255,0.1)]' : ''}`}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div className={`p-1.5 rounded-lg bg-slate-800/80 border border-slate-700`}>
                        <stat.icon className={`w-4 h-4 ${stat.iconColor}`} />
                      </div>
                      <span className="text-sm font-semibold text-slate-300">{stat.label}</span>
                    </div>
                    <div className="text-2xl font-bold text-white ml-1">{stat.count}</div>
                  </div>
                ))}
              </div>

              {/* Action Bar */}
              <div className="flex flex-col md:flex-row justify-between items-center gap-4 glass-panel p-4 rounded-xl">
                <div className="flex items-center gap-3 w-full md:w-auto">
                  <div className="relative flex-1 md:min-w-[250px]">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                    <input 
                      type="text" 
                      placeholder="Search..." 
                      className="w-full pl-10 pr-4 py-2 bg-slate-900/80 border border-slate-700 rounded-lg text-sm text-white focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/50 transition-all placeholder:text-slate-500" 
                    />
                  </div>
                  
                  <button className="px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-slate-300 hover:bg-slate-700 hover:text-white transition-all flex items-center gap-2 text-sm font-medium">
                    Filter <Filter className="w-4 h-4" />
                  </button>
                </div>
                
                <div className="flex items-center gap-3 w-full md:w-auto">
                  <button className="px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-slate-300 hover:bg-slate-700 hover:text-white transition-all flex items-center gap-2 text-sm font-medium">
                    <Download className="w-4 h-4" /> Export
                  </button>
                  <Button className="bg-purple-600 hover:bg-purple-500 text-white font-bold px-6 py-2 rounded-lg shadow-[0_0_15px_rgba(147,51,234,0.3)] hover:shadow-[0_0_20px_rgba(147,51,234,0.5)] transition-all flex items-center gap-2 border-none">
                    <Plus className="w-4 h-4" /> Add New Launchpad
                  </Button>
                </div>
              </div>

              {/* Table */}
              <div className="glass-panel rounded-xl overflow-hidden border-t border-purple-500/20">
                <table className="w-full text-left dark-table">
                  <thead>
                    <tr>
                      <th className="py-4 px-6 text-sm font-semibold text-slate-400">Launchpad Name</th>
                      <th className="py-4 px-6 text-sm font-semibold text-slate-400">Client</th>
                      <th className="py-4 px-6 text-sm font-semibold text-slate-400 text-center">Created By</th>
                      <th className="py-4 px-6 text-sm font-semibold text-slate-400 text-center">Status</th>
                      <th className="py-4 px-6 text-sm font-semibold text-slate-400 text-center">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredLaunchpads.map((item, i) => (
                      <tr key={i} className="border-b border-slate-800/50 hover:bg-slate-800/30 transition-colors">
                        <td className="py-4 px-6">
                          <span className="text-sm font-bold text-white hover:text-purple-400 transition-colors cursor-pointer">
                            {item.name}
                          </span>
                        </td>
                        <td className="py-4 px-6 text-sm text-slate-300">{item.client}</td>
                        <td className="py-4 px-6">
                          <div className="flex justify-center">
                            <div className="flex items-center gap-2">
                              <div className="w-7 h-7 rounded-full bg-slate-700 flex items-center justify-center text-xs font-bold text-slate-300">
                                {item.creatorImg}
                              </div>
                              <span className="text-sm text-slate-300">{item.creator}</span>
                            </div>
                          </div>
                        </td>
                        <td className="py-4 px-6 text-center">
                          <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold border ${
                            item.status === 'Not Started' ? 'text-slate-400 bg-slate-800 border-slate-700' :
                            item.status === 'In Progress' ? 'text-blue-400 bg-blue-500/10 border-blue-500/20 shadow-[0_0_10px_rgba(59,130,246,0.1)]' :
                            'text-slate-400 bg-slate-800 border-slate-700'
                          }`}>
                            {item.status}
                          </span>
                        </td>
                        <td className="py-4 px-6 text-center">
                          <div className="flex items-center justify-center gap-3">
                            <button className="text-slate-400 hover:text-purple-400 transition-colors">
                              <Edit className="w-4 h-4" />
                            </button>
                            <button className="text-slate-400 hover:text-rose-400 transition-colors">
                              <Trash2 className="w-4 h-4" />
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
      </div>
    </div>
  );
}
