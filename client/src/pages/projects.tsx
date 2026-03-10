import { useState } from "react";
import { Search, Filter, Plus, ChevronDown, Folder, MoreHorizontal } from "lucide-react";
import { useLocation } from "wouter";
import { Sidebar, Header } from "./clients";

export default function ProjectsPage() {
  const [openMenus, setOpenMenus] = useState<string>('');
  const [location] = useLocation();

  const toggleMenu = (menu: string) => {
    setOpenMenus(prev => prev === menu ? '' : menu);
  };

  const projectsList = [
    { name: "Website Redesign", client: "Estate Landscape", deadline: "Nov 15, 2026", status: "In Progress", progress: 65, budget: "$4,500" },
    { name: "Mobile App Development", client: "Pink Gorilla Software", deadline: "Dec 01, 2026", status: "Planning", progress: 15, budget: "$12,000" },
    { name: "SEO Optimization", client: "Summit Cabinets", deadline: "Oct 30, 2026", status: "Completed", progress: 100, budget: "$2,800" },
    { name: "E-commerce Migration", client: "Urban Edge", deadline: "Jan 10, 2027", status: "In Progress", progress: 42, budget: "$8,500" },
  ];

  return (
    <div className="min-h-screen bg-[#f3f4f8] flex font-sans text-[#1e293b]">
      <Sidebar openMenus={openMenus} toggleMenu={toggleMenu} currentPath={location} />

      <div className="flex-1 flex flex-col min-w-0">
        <Header title="Projects" />

        <main className="flex-1 overflow-y-auto p-6 lg:p-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between mb-6">
              <h1 className="text-2xl font-bold text-[#0f172a]">Projects</h1>
              <button className="flex items-center gap-2 px-4 py-2 bg-[#8b5cf6] hover:bg-[#7c3aed] text-white rounded-lg text-sm font-medium transition-colors shadow-sm">
                <Plus className="w-4 h-4" /> New Project
              </button>
            </div>

            {/* Stats Row */}
            <div className="bg-white rounded-[1rem] p-4 mb-6 shadow-[0_2px_10px_rgba(0,0,0,0.02)] border border-[#f1f5f9] grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-[#f1f5f9]">
                {[
                  { value: '24', label: 'Total Projects', color: 'bg-blue-500' },
                  { value: '12', label: 'In Progress', color: 'bg-amber-500' },
                  { value: '8', label: 'Completed', color: 'bg-green-500' },
                  { value: '4', label: 'Planning', color: 'bg-purple-500' },
                ].map((stat, i) => (
                  <div key={i} className="flex flex-col px-6 py-4 cursor-pointer hover:bg-slate-50 transition-colors group">
                    <span className="text-2xl font-semibold text-[#0f172a] mb-1 group-hover:text-primary transition-colors">{stat.value}</span>
                    <span className="text-sm font-medium text-[#64748b] mb-3">{stat.label}</span>
                    <div className={`h-1.5 w-full rounded-full ${stat.color} opacity-80`} />
                  </div>
                ))}
            </div>

            <div className="bg-white rounded-[1rem] shadow-[0_2px_10px_rgba(0,0,0,0.02)] overflow-hidden border border-[#f1f5f9]">
              <div className="p-4 border-b border-[#f1f5f9] flex flex-col sm:flex-row gap-4 justify-between items-center bg-[#f8fafc]">
                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <div className="relative flex-1 sm:w-64">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#94a3b8]" />
                    <input 
                      type="text"
                      placeholder="Search projects" 
                      className="w-full pl-9 pr-4 py-2 bg-white border border-[#e2e8f0] rounded-lg text-sm focus:outline-none focus:border-primary/30 transition-all placeholder:text-[#94a3b8]"
                    />
                  </div>
                  <button className="flex items-center gap-2 px-4 py-2 bg-white border border-[#e2e8f0] rounded-lg text-sm font-medium text-[#475569] hover:bg-[#f8fafc] transition-colors">
                    Filter <Filter className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-sm text-left whitespace-nowrap">
                  <thead className="bg-white border-b border-[#f1f5f9]">
                    <tr>
                      <th className="py-4 px-6 font-semibold text-[#475569]">Project Name</th>
                      <th className="py-4 px-6 font-semibold text-[#475569]">Client</th>
                      <th className="py-4 px-6 font-semibold text-[#475569]">Deadline</th>
                      <th className="py-4 px-6 font-semibold text-[#475569]">Status</th>
                      <th className="py-4 px-6 font-semibold text-[#475569]">Progress</th>
                      <th className="py-4 px-6 font-semibold text-[#475569]">Budget</th>
                      <th className="py-4 px-6 font-semibold text-[#475569]"></th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#f1f5f9]">
                    {projectsList.map((project, i) => (
                      <tr key={i} className="hover:bg-[#f8fafc]/50 transition-colors bg-white">
                        <td className="py-4 px-6">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600 shrink-0 border border-blue-100">
                               <Folder className="w-5 h-5" />
                            </div>
                            <span className="font-semibold text-[#0f172a]">{project.name}</span>
                          </div>
                        </td>
                        <td className="py-4 px-6 text-[#64748b]">{project.client}</td>
                        <td className="py-4 px-6 text-[#475569]">{project.deadline}</td>
                        <td className="py-4 px-6">
                           <span className={`inline-flex items-center justify-center px-2.5 py-1 rounded-full text-xs font-semibold
                              ${project.status === 'Completed' ? 'bg-green-100 text-green-700' : 
                                project.status === 'In Progress' ? 'bg-amber-100 text-amber-700' : 'bg-purple-100 text-purple-700'}`}>
                             {project.status}
                           </span>
                        </td>
                        <td className="py-4 px-6">
                          <div className="w-full max-w-[120px]">
                            <div className="flex justify-between text-xs mb-1 text-[#64748b]">
                               <span>{project.progress}%</span>
                            </div>
                            <div className="w-full bg-[#f1f5f9] rounded-full h-2">
                              <div className="bg-[#8b5cf6] h-2 rounded-full" style={{ width: `${project.progress}%` }}></div>
                            </div>
                          </div>
                        </td>
                        <td className="py-4 px-6 font-medium text-[#0f172a]">{project.budget}</td>
                        <td className="py-4 px-6 text-right">
                           <button className="p-1.5 text-[#94a3b8] hover:text-[#0f172a] transition-colors rounded hover:bg-[#f1f5f9]">
                             <MoreHorizontal className="w-5 h-5" />
                           </button>
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
