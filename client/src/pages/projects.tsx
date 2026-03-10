import { useState } from "react";
import { Search, Filter, Plus, ChevronUp, ChevronDown, Folder, MoreHorizontal, LayoutGrid, List, TrendingUp, Download, Edit2, X } from "lucide-react";
import { useLocation, Link } from "wouter";
import { Sidebar, Header } from "./clients";

export default function ProjectsPage() {
  const [openMenus, setOpenMenus] = useState<string>('');
  const [isAddProjectModalOpen, setIsAddProjectModalOpen] = useState(false);
  const [isEditProjectModalOpen, setIsEditProjectModalOpen] = useState(false);
  const [location] = useLocation();

  const toggleMenu = (menu: string) => {
    setOpenMenus(prev => prev === menu ? '' : menu);
  };

  const projectsList = [
    { name: "Twilio ticket + domain verify", client: "Pink Gorilla Ag...", dueDate: "---", priority: "Low", createdBy: "Vikas", assignee: "user1", status: "Pending Approval" },
    { name: "Design Car Washing Service with Replit", client: "---", dueDate: "---", priority: "Normal", createdBy: "Neeraj", assignee: "user2", status: "In Progress" },
    { name: "El hefe-you're not the same without the...", client: "Juicy Whip", dueDate: "---", priority: "Normal", createdBy: "Manraj", assignee: "user3", status: "In Progress" },
  ];

  const getStatusStyle = (status: string) => {
    if (status === 'Pending Approval') return 'text-orange-500 border border-orange-200 bg-orange-50/50';
    return 'text-sky-500 border border-sky-200 bg-sky-50/50';
  };

  const getPriorityStyle = (priority: string) => {
    if (priority === 'Low') return 'text-gray-400 border border-gray-200 bg-gray-50';
    return 'text-sky-500 border border-sky-200 bg-sky-50';
  };

  return (
    <div className="h-screen w-full overflow-hidden bg-transparent flex font-sans text-[#1e293b]">
      <Sidebar openMenus={openMenus} toggleMenu={toggleMenu} currentPath={location} />

      <div className="flex-1 flex flex-col min-w-0 bg-white/30 backdrop-blur-3xl">
        <Header title="Projects" />

        <main className="flex-1 overflow-y-auto p-6 lg:p-8 relative">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-[22px] font-semibold text-[#0f172a] mb-6">Projects</h1>

            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                <span className="text-sm font-medium text-[#475569]">View:</span>
                <div className="flex items-center gap-2">
                  <button className="flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-md/80 backdrop-blur-sm border border-white/60/80 rounded-xl shadow-sm text-sm font-medium text-[#8b5cf6] shadow-sm">
                    <List className="w-4 h-4" /> Table View
                  </button>
                  <button className="flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-md/80 backdrop-blur-sm border border-white/60/80 rounded-xl shadow-sm text-sm font-medium text-[#64748b] hover:bg-white/80 backdrop-blur-md/50 transition-colors shadow-sm">
                    <LayoutGrid className="w-4 h-4 text-[#8b5cf6]" /> Board
                  </button>
                </div>
                <div className="flex items-center gap-2 ml-2">
                  <button className="px-4 py-2 bg-white/80 backdrop-blur-md border border-green-200 rounded-full text-sm font-medium text-green-600 shadow-sm">
                    Completed
                  </button>
                  <button className="px-4 py-2 bg-white/80 backdrop-blur-md border border-white/60 rounded-full text-sm font-medium text-[#64748b] hover:bg-white/80 backdrop-blur-md/50 transition-colors shadow-sm">
                    In progress
                  </button>
                </div>
              </div>
            </div>

            <div className="modern-card p-4 mb-6 shadow-sm border border-white/60">
              <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
                <div className="flex items-center gap-3 w-full sm:w-auto flex-1">
                  <div className="relative flex-1 max-w-[240px]">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#94a3b8]" />
                    <input 
                      type="text"
                      placeholder="Search" 
                      className="w-full pl-10 pr-4 py-2.5 bg-white/80 backdrop-blur-md/80 backdrop-blur-sm border border-white/60/80 rounded-lg text-sm focus:outline-none focus:border-primary/30 transition-all placeholder:text-[#94a3b8]"
                    />
                  </div>
                  <button className="flex items-center gap-2 px-4 py-2.5 bg-white/80 backdrop-blur-md border border-white/60/80 rounded-xl text-sm font-medium text-[#475569] hover:bg-white/80 backdrop-blur-md transition-all shadow-sm hover:shadow transition-colors">
                    Filter <Filter className="w-4 h-4" />
                  </button>
                  <button className="p-2 bg-white/80 backdrop-blur-md/80 backdrop-blur-sm border border-white/60/80 rounded-xl shadow-sm text-[#475569] hover:bg-white/80 backdrop-blur-md/50 transition-colors">
                    <TrendingUp className="w-4 h-4" />
                  </button>
                  <div className="relative flex-1 max-w-[200px]">
                    <input 
                      type="text"
                      placeholder="Assigned" 
                      className="w-full px-4 py-2 bg-white/80 backdrop-blur-md/80 backdrop-blur-sm border border-white/60/80 rounded-xl shadow-sm text-sm focus:outline-none focus:border-primary/30 transition-all placeholder:text-[#94a3b8]"
                    />
                  </div>
                </div>
                
                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <button className="flex items-center gap-2 px-4 py-2.5 bg-white/80 backdrop-blur-md border border-white/60/80 rounded-xl text-sm font-medium text-[#475569] hover:bg-white/80 backdrop-blur-md transition-all shadow-sm hover:shadow transition-colors">
                    <Download className="w-4 h-4" /> Export <ChevronDown className="w-3.5 h-3.5" />
                  </button>
                  <button 
                    onClick={() => setIsAddProjectModalOpen(true)}
                    className="flex items-center gap-2 px-5 py-2 bg-[#8b5cf6] hover:bg-[#7c3aed] text-white rounded-lg text-sm font-medium transition-colors shadow-sm"
                  >
                    <Plus className="w-4 h-4" /> Add New Project
                  </button>
                </div>
              </div>
            </div>

            {/* Stats Row */}
            <div className="modern-card p-6 mb-8 shadow-sm border border-white/60">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div className="flex flex-col group cursor-pointer">
                  <span className="text-[28px] font-medium text-[#0f172a] mb-1">181</span>
                  <span className="text-[13px] text-[#94a3b8] mb-4">All</span>
                  <div className="h-[3px] w-full rounded-full bg-[#8b5cf6]" />
                </div>
                <div className="flex flex-col group cursor-pointer">
                  <span className="text-[28px] font-medium text-[#0f172a] mb-1">15</span>
                  <span className="text-[13px] text-[#94a3b8] mb-4">In Progress</span>
                  <div className="h-[3px] w-full rounded-full bg-[#a855f7]" />
                </div>
                <div className="flex flex-col group cursor-pointer">
                  <span className="text-[28px] font-medium text-[#0f172a] mb-1">1</span>
                  <span className="text-[13px] text-[#94a3b8] mb-4">On Hold</span>
                  <div className="h-[3px] w-full rounded-full bg-[#fdba74]" />
                </div>
                <div className="flex flex-col group cursor-pointer">
                  <span className="text-[28px] font-medium text-[#0f172a] mb-1">95</span>
                  <span className="text-[13px] text-[#94a3b8] mb-4">Completed</span>
                  <div className="h-[3px] w-full rounded-full bg-[#8b5cf6]" />
                </div>
              </div>
            </div>

            <div className="overflow-x-auto pb-4">
              <table className="w-full text-sm text-left whitespace-nowrap border-separate" style={{ borderSpacing: '0 12px' }}>
                <thead>
                  <tr className="bg-white/80 backdrop-blur-md/50 text-[#64748b]">
                    <th className="py-4 px-6 font-medium rounded-l-[12px] cursor-pointer hover:text-[#0f172a]">
                      <div className="flex items-center gap-1.5 text-[13px]">Project Name <ChevronUp className="w-3.5 h-3.5 opacity-50" /></div>
                    </th>
                    <th className="py-4 px-6 font-medium cursor-pointer hover:text-[#0f172a]">
                      <div className="flex items-center gap-1.5 text-[13px]">Client <ChevronUp className="w-3.5 h-3.5 opacity-50" /></div>
                    </th>
                    <th className="py-4 px-6 font-medium cursor-pointer hover:text-[#0f172a]">
                      <div className="flex items-center gap-1.5 text-[13px]">Due Date <ChevronUp className="w-3.5 h-3.5 opacity-50" /></div>
                    </th>
                    <th className="py-4 px-6 font-medium cursor-pointer hover:text-[#0f172a]">
                      <div className="flex items-center gap-1.5 text-[13px]">Priority <ChevronUp className="w-3.5 h-3.5 opacity-50" /></div>
                    </th>
                    <th className="py-4 px-6 font-medium cursor-pointer hover:text-[#0f172a]">
                      <div className="flex items-center gap-1.5 text-[13px]">Created By <ChevronUp className="w-3.5 h-3.5 opacity-50" /></div>
                    </th>
                    <th className="py-4 px-6 font-medium cursor-pointer hover:text-[#0f172a]">
                      <div className="flex items-center gap-1.5 text-[13px]">Assignee <ChevronUp className="w-3.5 h-3.5 opacity-50" /></div>
                    </th>
                    <th className="py-4 px-6 font-medium cursor-pointer hover:text-[#0f172a]">
                      <div className="flex items-center gap-1.5 text-[13px]">Status <ChevronUp className="w-3.5 h-3.5 opacity-50" /></div>
                    </th>
                    <th className="py-4 px-6 font-medium rounded-r-[12px] text-[13px]">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {projectsList.map((project, i) => (
                    <tr key={i} className="bg-white/80 backdrop-blur-md group">
                      <td className="py-4 px-6 font-medium rounded-l-[12px] border-y border-l border-[#e2e8f0] group-hover:border-[#cbd5e1] transition-colors">
                        <Link href="/projects/1" className="text-[#0f172a] hover:text-[#8b5cf6] transition-colors">{project.name}</Link>
                      </td>
                      <td className="py-4 px-6 font-medium text-[#0f172a] border-y border-[#e2e8f0] group-hover:border-[#cbd5e1] transition-colors">{project.client}</td>
                      <td className="py-4 px-6 font-medium text-[#0f172a] border-y border-[#e2e8f0] group-hover:border-[#cbd5e1] transition-colors">{project.dueDate}</td>
                      <td className="py-4 px-6 border-y border-[#e2e8f0] group-hover:border-[#cbd5e1] transition-colors">
                         <span className={`inline-flex items-center justify-center px-4 py-1.5 rounded-full text-xs font-medium ${getPriorityStyle(project.priority)}`}>
                           {project.priority}
                         </span>
                      </td>
                      <td className="py-4 px-6 border-y border-[#e2e8f0] group-hover:border-[#cbd5e1] transition-colors">
                        <div className="flex items-center gap-2">
                          <div className="w-7 h-7 rounded-full overflow-hidden bg-gray-100 shrink-0">
                             <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${project.createdBy}`} alt={project.createdBy} className="w-full h-full object-cover" />
                          </div>
                          <span className="font-medium text-[#0f172a]">{project.createdBy}</span>
                        </div>
                      </td>
                      <td className="py-4 px-6 border-y border-[#e2e8f0] group-hover:border-[#cbd5e1] transition-colors">
                        <div className="flex items-center -space-x-2">
                           <div className="w-7 h-7 rounded-full overflow-hidden border-2 border-white relative z-10 bg-pink-500">
                             <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${project.assignee}1`} className="w-full h-full object-cover" />
                           </div>
                           <div className="w-7 h-7 rounded-full overflow-hidden border-2 border-white relative z-0 bg-blue-500">
                             <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${project.assignee}2`} className="w-full h-full object-cover" />
                           </div>
                        </div>
                      </td>
                      <td className="py-4 px-6 border-y border-[#e2e8f0] group-hover:border-[#cbd5e1] transition-colors">
                         <span className={`inline-flex items-center justify-center px-4 py-1.5 rounded-full text-[11px] font-semibold ${getStatusStyle(project.status)}`}>
                           {project.status}
                         </span>
                      </td>
                      <td className="py-4 px-6 border-y border-r border-[#e2e8f0] group-hover:border-[#cbd5e1] transition-colors rounded-r-[12px]">
                         <button 
                           onClick={() => setIsEditProjectModalOpen(true)}
                           className="p-1.5 text-[#94a3b8] hover:text-[#0f172a] transition-colors"
                         >
                           <Edit2 className="w-[15px] h-[15px]" />
                         </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

          </div>
        </main>
      </div>

      {/* Add Project Modal */}
      {isAddProjectModalOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 overflow-y-auto">
          <div className="modern-card shadow-xl w-full max-w-[800px] my-8 flex flex-col relative max-h-[90vh]">
            <div className="flex items-center justify-between p-6 border-b border-[#e2e8f0] shrink-0 sticky top-0 bg-white/80 backdrop-blur-md z-10 rounded-t-lg">
              <h2 className="text-xl font-bold text-[#0f172a]">Create A New Project</h2>
              <button 
                onClick={() => setIsAddProjectModalOpen(false)}
                className="text-[#94a3b8] hover:text-[#0f172a] transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="p-6 overflow-y-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-5">
                <div>
                  <label className="block text-[13px] text-[#475569] mb-1.5">Project Name*</label>
                  <input type="text" className="w-full px-3 py-2.5 bg-white/80 backdrop-blur-md/80 backdrop-blur-sm border border-white/60/80 rounded-md text-[13px] focus:outline-none focus:border-[#8b5cf6]" />
                </div>
                <div>
                  <label className="block text-[13px] text-[#475569] mb-1.5">Client</label>
                  <select className="w-full px-3 py-2.5 bg-white/80 backdrop-blur-md/80 backdrop-blur-sm border border-white/60/80 rounded-md text-[13px] text-[#0f172a] focus:outline-none">
                    <option></option>
                  </select>
                </div>
                <div>
                  <label className="block text-[13px] text-[#475569] mb-1.5">Date From*</label>
                  <input type="text" className="w-full px-3 py-2.5 bg-white/80 backdrop-blur-md/80 backdrop-blur-sm border border-white/60/80 rounded-md text-[13px] focus:outline-none focus:border-[#8b5cf6]" />
                </div>
                <div>
                  <label className="block text-[13px] text-[#475569] mb-1.5">Date To</label>
                  <input type="text" className="w-full px-3 py-2.5 bg-white/80 backdrop-blur-md/80 backdrop-blur-sm border border-white/60/80 rounded-md text-[13px] focus:outline-none focus:border-[#8b5cf6]" />
                </div>
                <div>
                  <label className="block text-[13px] text-[#475569] mb-1.5">Priority</label>
                  <select className="w-full px-3 py-2.5 bg-white/80 backdrop-blur-md/80 backdrop-blur-sm border border-white/60/80 rounded-md text-[13px] text-[#0f172a] focus:outline-none">
                    <option>Normal</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[13px] text-[#475569] mb-1.5">Assignee</label>
                  <input type="text" className="w-full px-3 py-2.5 bg-white/80 backdrop-blur-md/80 backdrop-blur-sm border border-white/60/80 rounded-md text-[13px] focus:outline-none focus:border-[#8b5cf6]" />
                </div>
                <div>
                  <label className="block text-[13px] text-[#475569] mb-1.5">Status</label>
                  <select className="w-full px-3 py-2.5 bg-white/80 backdrop-blur-md/80 backdrop-blur-sm border border-white/60/80 rounded-md text-[13px] text-[#0f172a] focus:outline-none">
                    <option>Not Started</option>
                  </select>
                </div>
              </div>
              
              <div className="w-full h-[1px] bg-[#f1f5f9] my-6"></div>
              
              <div className="flex items-center justify-between">
                <span className="text-[14px] font-medium text-[#0f172a]">Description & Details</span>
                <button className="w-10 h-5 bg-[#e2e8f0] rounded-full relative transition-colors cursor-pointer">
                  <div className="w-4 h-4 bg-white/80 backdrop-blur-md rounded-full absolute top-0.5 left-0.5 shadow-sm"></div>
                </button>
              </div>
            </div>
            
            <div className="flex items-center justify-end gap-3 p-6 border-t border-[#e2e8f0] bg-white/80 backdrop-blur-md rounded-b-lg shrink-0 sticky bottom-0">
              <button 
                onClick={() => setIsAddProjectModalOpen(false)}
                className="px-5 py-2 bg-white/80 backdrop-blur-md border border-white/60 hover:bg-white/80 backdrop-blur-md/50 text-[#475569] rounded-md text-[14px] font-medium transition-colors"
              >
                Close
              </button>
              <button className="px-6 py-2.5 bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] hover:from-[#4f46e5] hover:to-[#7c3aed] text-white rounded-xl text-[14px] font-medium transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5">
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
      {/* Edit Project Modal */}
      {isEditProjectModalOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 overflow-y-auto">
          <div className="modern-card shadow-xl w-full max-w-[800px] my-8 flex flex-col relative max-h-[90vh]">
            <div className="flex flex-col p-6 border-b border-[#e2e8f0] shrink-0 sticky top-0 bg-white/80 backdrop-blur-md z-10 rounded-t-lg">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold text-[#0f172a]">Edit Project</h2>
                <button 
                  onClick={() => setIsEditProjectModalOpen(false)}
                  className="text-[#94a3b8] hover:text-[#0f172a] transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="text-[13px] text-[#64748b] text-right mt-1">
                Created By: Vikas | 09-03-2026
              </div>
            </div>
            
            <div className="p-6 overflow-y-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-5">
                <div>
                  <label className="block text-[13px] text-[#475569] mb-1.5">Project Name*</label>
                  <input type="text" defaultValue="Twilio ticket + domain verify" className="w-full px-3 py-2.5 bg-white/80 backdrop-blur-md/80 backdrop-blur-sm border border-white/60/80 rounded-md text-[13px] focus:outline-none focus:border-[#8b5cf6]" />
                </div>
                <div>
                  <label className="block text-[13px] text-[#475569] mb-1.5">Client</label>
                  <select className="w-full px-3 py-2.5 bg-white/80 backdrop-blur-md/80 backdrop-blur-sm border border-white/60/80 rounded-md text-[13px] text-[#0f172a] focus:outline-none">
                    <option>Pink Gorilla Agency</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[13px] text-[#475569] mb-1.5">Date From*</label>
                  <input type="text" defaultValue="10-03-2026" className="w-full px-3 py-2.5 bg-white/80 backdrop-blur-md/80 backdrop-blur-sm border border-white/60/80 rounded-md text-[13px] focus:outline-none focus:border-[#8b5cf6]" />
                </div>
                <div>
                  <label className="block text-[13px] text-[#475569] mb-1.5">Date To</label>
                  <input type="text" className="w-full px-3 py-2.5 bg-white/80 backdrop-blur-md/80 backdrop-blur-sm border border-white/60/80 rounded-md text-[13px] focus:outline-none focus:border-[#8b5cf6]" />
                </div>
                <div>
                  <label className="block text-[13px] text-[#475569] mb-1.5">Priority</label>
                  <select className="w-full px-3 py-2.5 bg-white/80 backdrop-blur-md/80 backdrop-blur-sm border border-white/60/80 rounded-md text-[13px] text-[#0f172a] focus:outline-none">
                    <option>Low</option>
                    <option>Normal</option>
                    <option>High</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[13px] text-[#475569] mb-1.5">Assignee</label>
                  <div className="w-full min-h-[80px] p-2 bg-white/80 backdrop-blur-md border border-white/60 rounded-md flex flex-col gap-2">
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-[#f1f5f9] border border-white/60 rounded text-[12px] text-[#475569] w-fit">
                      <span className="cursor-pointer hover:text-red-500">×</span>
                      Vikas Sharma (vikas@pinkgorillasoftware.com)
                    </div>
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-[#f1f5f9] border border-white/60 rounded text-[12px] text-[#475569] w-fit">
                      <span className="cursor-pointer hover:text-red-500">×</span>
                      Chayan Alavi (chayan@pinkgorilla.agency)
                    </div>
                  </div>
                </div>
                <div>
                  <label className="block text-[13px] text-[#475569] mb-1.5">Status</label>
                  <select className="w-full px-3 py-2.5 bg-white/80 backdrop-blur-md/80 backdrop-blur-sm border border-white/60/80 rounded-md text-[13px] text-[#0f172a] focus:outline-none">
                    <option>Pending Approval</option>
                    <option>In Progress</option>
                    <option>Completed</option>
                  </select>
                </div>
              </div>
              
              <div className="w-full h-[1px] bg-[#f1f5f9] my-6"></div>
              
              <div className="flex items-center justify-between">
                <span className="text-[14px] font-medium text-[#0f172a]">Description & Details</span>
                <button className="w-10 h-5 bg-[#e2e8f0] rounded-full relative transition-colors cursor-pointer">
                  <div className="w-4 h-4 bg-white/80 backdrop-blur-md rounded-full absolute top-0.5 left-0.5 shadow-sm"></div>
                </button>
              </div>
            </div>
            
            <div className="flex items-center justify-end gap-3 p-6 border-t border-[#e2e8f0] bg-white/80 backdrop-blur-md rounded-b-lg shrink-0 sticky bottom-0">
              <button 
                onClick={() => setIsEditProjectModalOpen(false)}
                className="px-5 py-2 bg-white/80 backdrop-blur-md border border-white/60 hover:bg-white/80 backdrop-blur-md/50 text-[#475569] rounded-md text-[14px] font-medium transition-colors"
              >
                Close
              </button>
              <button className="px-6 py-2.5 bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] hover:from-[#4f46e5] hover:to-[#7c3aed] text-white rounded-xl text-[14px] font-medium transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5">
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
