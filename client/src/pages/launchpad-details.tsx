import { useState } from "react";
import { useLocation, useParams, Link } from "wouter";
import { Sidebar, Header } from "./clients";
import { ArrowLeft, Plus, MoreHorizontal, MessageSquare, FileText, CheckCircle2, Circle, Clock, Check, MoreVertical, Edit2, Download, Search, Paperclip, Bold, Link2, List as ListIcon, ListOrdered, Image as ImageIcon, Film, AlignLeft, AlignCenter, AlignRight, AlignJustify, Minus, Grid, Code, Maximize, X, UploadCloud, File as FileIcon, Trash2 } from "lucide-react";

export default function LaunchpadDetailsPage() {
  const [openMenus, setOpenMenus] = useState<string>('launchpads');
  const [location, setLocation] = useLocation();
  const { id } = useParams<{ id: string }>();
  const [activeTab, setActiveTab] = useState<string>('Chat');
  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);
  const [isTaskTemplateModalOpen, setIsTaskTemplateModalOpen] = useState(false);
  const [isTaskCategoryModalOpen, setIsTaskCategoryModalOpen] = useState(false);
  const [taskFilter, setTaskFilter] = useState<'All' | 'uncompleted' | 'completed'>('All');
  const [uploadedFiles, setUploadedFiles] = useState<{name: string, size: string, date: string, type: string}[]>([]);

  const filteredTasks = tasks.map(category => ({
    ...category,
    items: category.items.filter(item => taskFilter === 'All' || item.status === taskFilter)
  })).filter(category => category.items.length > 0);

  // Calculate counts
  const uncompletedCount = tasks.flatMap(c => c.items).filter(i => i.status === 'uncompleted').length;
  const completedCount = tasks.flatMap(c => c.items).filter(i => i.status === 'completed').length;

  const tasks = [
    {
      category: "Trailer",
      items: [
        { id: 1, title: "Task 1", hours: "0", subs: "0", status: "uncompleted" },
        { id: 2, title: "Task 2", hours: "0", subs: "0", status: "uncompleted" },
        { id: 3, title: "Task 3", hours: "0", subs: "0", status: "uncompleted" },
      ]
    },
    {
      category: "Test",
      items: [
        { id: 4, title: "Task 11", hours: "0", subs: "0", status: "uncompleted" },
        { id: 5, title: "Task 12", hours: "0", subs: "0", status: "uncompleted" },
      ]
    },
    {
      category: "Demo 2",
      items: [
        { id: 6, title: "Sub", hours: "0", subs: "0", status: "uncompleted" },
        { id: 7, title: "Sub 2", date: "24 Feb 2024", hours: "0", subs: "0", status: "uncompleted" },
      ]
    },
    {
      category: "Task 3",
      items: []
    }
  ];

  return (
    <div className="h-screen w-full overflow-hidden bg-transparent flex font-sans text-[#e2e8f0]">
      <Sidebar openMenus={openMenus} toggleMenu={toggleMenu} currentPath="/launchpads" />

      <div className="flex-1 flex flex-col min-w-0 bg-[#0f172a] relative">
        <Header title={`Launchpad: Demo ${id || 2}`} />

        <main className="flex-1 overflow-y-auto p-6 lg:p-8 relative">
          <div className="max-w-7xl mx-auto space-y-6">
            
            {/* Breadcrumb & Back */}
            <div className="flex items-center gap-3 text-sm text-slate-400">
              <button 
                onClick={() => setLocation('/launchpads')}
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Launchpads
              </button>
            </div>

            {/* Header Card */}
            <div className="glass-panel rounded-2xl border border-white/10 p-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center text-xl font-bold">
                  🦍
                </div>
                <div>
                  <div className="text-xs text-slate-400 mb-1">Pink Gorilla Software</div>
                  <div className="flex items-center gap-3">
                    <h1 className="text-2xl font-bold text-white">Demo 2</h1>
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/10 text-blue-400 border border-blue-500/20">
                      In Progress
                    </span>
                    <div className="flex -space-x-2 ml-2">
                      <div className="w-6 h-6 rounded-full bg-slate-700 border-2 border-slate-900 flex items-center justify-center text-[10px]">MJ</div>
                      <div className="w-6 h-6 rounded-full bg-slate-600 border-2 border-slate-900 flex items-center justify-center text-[10px]">+1</div>
                    </div>
                    <button className="px-3 py-1 bg-purple-600 hover:bg-purple-500 text-white text-xs font-medium rounded-lg flex items-center gap-1 transition-colors">
                      <Plus className="w-3 h-3" /> Invite
                    </button>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4 w-full md:w-auto">
                <div className="text-sm font-medium text-slate-300">Progress</div>
                <div className="flex-1 md:w-48 bg-slate-800 rounded-full h-2 relative">
                  <div className="absolute left-0 top-0 h-full bg-purple-500 rounded-full" style={{ width: '0%' }}></div>
                </div>
                <div className="text-xs text-purple-400 font-medium">0 / 0 Hrs</div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
              {/* Left Column - Main Content */}
              <div className="lg:col-span-3 space-y-6">
                
                {/* Tasks Section */}
                <div className="glass-panel rounded-2xl border border-white/10 p-6">
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-lg font-bold text-white">Tasks</h2>
                    <div className="flex gap-2">
                      <button 
                        onClick={() => setIsTaskTemplateModalOpen(true)}
                        className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-medium rounded-lg transition-colors border border-slate-700"
                      >
                        Apply Template
                      </button>
                      <button 
                        onClick={() => setIsTaskCategoryModalOpen(true)}
                        className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-medium rounded-lg flex items-center gap-2 transition-colors border border-slate-700"
                      >
                        <Plus className="w-3.5 h-3.5" /> Add Category
                      </button>
                    </div>
                  </div>

                  <div className="flex gap-2 mb-6">
                    <button 
                      onClick={() => setTaskFilter('All')}
                      className={`px-4 py-1.5 text-xs font-medium rounded-lg transition-colors ${
                        taskFilter === 'All' 
                          ? 'bg-purple-600 text-white' 
                          : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
                      }`}
                    >
                      All
                    </button>
                    <button 
                      onClick={() => setTaskFilter('uncompleted')}
                      className={`px-4 py-1.5 text-xs font-medium rounded-lg border transition-colors ${
                        taskFilter === 'uncompleted' 
                          ? 'bg-rose-500/20 text-rose-400 border-rose-500/50' 
                          : 'bg-slate-800/50 text-slate-400 border-slate-700 hover:bg-slate-800'
                      }`}
                    >
                      Uncompleted ({uncompletedCount})
                    </button>
                    <button 
                      onClick={() => setTaskFilter('completed')}
                      className={`px-4 py-1.5 text-xs font-medium rounded-lg border transition-colors ${
                        taskFilter === 'completed' 
                          ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/50' 
                          : 'bg-slate-800/50 text-slate-400 border-slate-700 hover:bg-slate-800'
                      }`}
                    >
                      Completed ({completedCount})
                    </button>
                  </div>

                  <div className="space-y-6">
                    {filteredTasks.length === 0 ? (
                      <div className="text-center py-8 text-slate-500 text-sm">
                        No tasks found for this filter.
                      </div>
                    ) : (
                      filteredTasks.map((category, idx) => (
                        <div key={idx} className="space-y-3">
                          <div className="flex justify-between items-center border-b border-slate-800 pb-2">
                            <h3 className="font-semibold text-slate-200">{category.category}</h3>
                            <div className="flex gap-2">
                              <button className="text-slate-500 hover:text-slate-300"><Edit2 className="w-3.5 h-3.5" /></button>
                              <button className="text-slate-500 hover:text-slate-300"><MoreHorizontal className="w-4 h-4" /></button>
                            </div>
                          </div>

                          <div className="space-y-2">
                            {category.items.map(task => (
                              <div key={task.id} className="flex flex-col sm:flex-row sm:items-center justify-between p-3 bg-slate-900/50 rounded-xl border border-slate-800 group hover:border-slate-700 transition-colors">
                                <div className="flex items-start gap-3">
                                  <button className="mt-0.5 text-slate-500 hover:text-purple-400 transition-colors">
                                    {task.status === 'completed' ? (
                                      <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                                    ) : (
                                      <Circle className="w-4 h-4" />
                                    )}
                                  </button>
                                  <div>
                                    <div className="text-sm font-medium text-slate-200">{task.title}</div>
                                    <div className="flex items-center gap-3 mt-1 text-[11px] text-slate-500">
                                      {task.date && <span className="text-slate-400">{task.date} • Due On</span>}
                                      <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {task.hours} Hrs</span>
                                      <span className="flex items-center gap-1"><FileText className="w-3 h-3" /> {task.subs} Sub</span>
                                      {task.status && (
                                        <span className={`px-1.5 py-0.5 rounded text-[9px] uppercase tracking-wider font-semibold ${
                                          task.status === 'completed' 
                                            ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' 
                                            : 'bg-rose-500/10 text-rose-400 border border-rose-500/20'
                                        }`}>
                                          {task.status}
                                        </span>
                                      )}
                                    </div>
                                  </div>
                                </div>
                                <div className="flex items-center gap-3 mt-3 sm:mt-0 ml-7 sm:ml-0">
                                  <button className="text-[11px] font-medium text-emerald-400 hover:text-emerald-300 transition-colors">
                                    Request Approval
                                  </button>
                                  <button className="text-slate-500 hover:text-slate-300"><Edit2 className="w-3.5 h-3.5" /></button>
                                  <button className="text-slate-500 hover:text-rose-400"><MoreHorizontal className="w-4 h-4" /></button>
                                </div>
                              </div>
                            ))}
                          </div>
                          
                          <button className="w-full py-2.5 border border-dashed border-purple-500/30 text-purple-400 hover:bg-purple-500/5 hover:border-purple-500/50 rounded-xl text-xs font-semibold flex items-center justify-center gap-2 transition-all">
                            <Plus className="w-3.5 h-3.5" /> ADD TASK
                          </button>
                        </div>
                      ))
                    )}
                  </div>
                </div>

                {/* Documents Section */}
                <div className="glass-panel rounded-2xl border border-white/10 p-6">
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-lg font-bold text-white">Documents</h2>
                    <div className="flex gap-2">
                      <button 
                        onClick={() => setIsTaskTemplateModalOpen(true)}
                        className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-medium rounded-lg transition-colors border border-slate-700"
                      >
                        Apply Template
                      </button>
                      <button 
                        onClick={() => setIsTaskCategoryModalOpen(true)}
                        className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-medium rounded-lg flex items-center gap-2 transition-colors border border-slate-700"
                      >
                        <Plus className="w-3.5 h-3.5" /> Add Category
                      </button>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between items-center p-4 bg-slate-900/50 rounded-xl border border-slate-800">
                      <div className="text-sm font-medium text-slate-200">Agreement</div>
                      <div className="flex gap-3 text-slate-500">
                        <button className="hover:text-purple-400"><Download className="w-4 h-4" /></button>
                        <button className="hover:text-cyan-400"><Edit2 className="w-4 h-4" /></button>
                      </div>
                    </div>
                    <div className="flex justify-between items-center p-4 bg-slate-900/50 rounded-xl border border-slate-800">
                      <div className="text-sm font-medium text-slate-200">Non-Disclosure Agreement</div>
                      <div className="flex gap-3 text-slate-500">
                        <button className="hover:text-purple-400"><Download className="w-4 h-4" /></button>
                        <button className="hover:text-cyan-400"><Edit2 className="w-4 h-4" /></button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Project Details */}
                <div className="glass-panel rounded-2xl border border-white/10 p-6">
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-lg font-bold text-white">Project Details</h2>
                    <button className="text-slate-500 hover:text-slate-300"><Edit2 className="w-4 h-4" /></button>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8 text-sm">
                    <div className="grid grid-cols-3">
                      <span className="text-slate-400">Project ID</span>
                      <span className="col-span-2 text-white font-medium">8</span>
                    </div>
                    <div className="grid grid-cols-3">
                      <span className="text-slate-400">Project Client</span>
                      <span className="col-span-2 text-white font-medium">-</span>
                    </div>
                    <div className="grid grid-cols-3">
                      <span className="text-slate-400">Start Date</span>
                      <span className="col-span-2 text-white font-medium">17-10-2023</span>
                    </div>
                    <div className="grid grid-cols-3">
                      <span className="text-slate-400">End Date</span>
                      <span className="col-span-2 text-white font-medium">-</span>
                    </div>
                    <div className="grid grid-cols-3">
                      <span className="text-slate-400">Priority</span>
                      <span className="col-span-2"><span className="px-2 py-0.5 rounded text-xs font-medium bg-slate-800 text-slate-300 border border-slate-700">Low</span></span>
                    </div>
                    <div className="grid grid-cols-3">
                      <span className="text-slate-400">Client Name</span>
                      <span className="col-span-2 text-white font-medium flex items-center gap-2">
                        <div className="w-5 h-5 rounded bg-slate-800 flex items-center justify-center text-[10px]">PG</div>
                        Pink Gorilla Software
                      </span>
                    </div>
                    <div className="grid grid-cols-3">
                      <span className="text-slate-400">Manager</span>
                      <span className="col-span-2 text-white font-medium">---</span>
                    </div>
                    <div className="grid grid-cols-3">
                      <span className="text-slate-400">Developer</span>
                      <span className="col-span-2 flex -space-x-2">
                         <div className="w-6 h-6 rounded-full bg-slate-700 border border-slate-900 flex items-center justify-center text-[10px]">MJ</div>
                         <div className="w-6 h-6 rounded-full bg-slate-600 border border-slate-900 flex items-center justify-center text-[10px]">+1</div>
                      </span>
                    </div>
                    <div className="grid grid-cols-3">
                      <span className="text-slate-400">Designer</span>
                      <span className="col-span-2 flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-slate-700 border border-slate-900 flex items-center justify-center text-[10px]">PG</div>
                        <span className="text-white font-medium text-xs">PG Admin</span>
                      </span>
                    </div>
                  </div>

                  <div className="mt-6 pt-6 border-t border-slate-800">
                    <h3 className="text-sm font-medium text-slate-300 mb-2">Description</h3>
                    <p className="text-sm text-slate-400 leading-relaxed">
                      It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.
                    </p>
                  </div>
                </div>

              </div>

              {/* Right Column - Chat/Activity */}
              <div className="lg:col-span-2">
                <div className="glass-panel rounded-2xl border border-white/10 h-full flex flex-col min-h-[600px] overflow-hidden">
                  
                  <div className="flex border-b border-slate-800 overflow-x-auto scrollbar-hide">
                    {['Chat', 'Public Notes', 'Private Notes', 'Uploads', 'Activities'].map((tab) => (
                      <button 
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`px-4 py-3 text-sm font-medium whitespace-nowrap transition-colors ${
                          activeTab === tab 
                            ? 'text-purple-400 border-b-2 border-purple-500' 
                            : 'text-slate-400 hover:text-slate-200'
                        }`}
                      >
                        {tab}
                      </button>
                    ))}
                  </div>

                  <div className="flex-1 p-4 overflow-y-auto space-y-6">
                    {activeTab === 'Chat' && (
                      <div className="space-y-4">
                        <div className="flex gap-3">
                          <div className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center shrink-0 text-xs font-bold">PG</div>
                          <div className="flex-1">
                            <div className="bg-slate-800/50 rounded-2xl rounded-tl-none p-3 border border-slate-700/50">
                              <div className="text-sm text-slate-200">PG Admin</div>
                              <div className="text-[10px] text-slate-500 mt-1">Today at 10:45 AM</div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="flex gap-3">
                          <div className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center shrink-0 text-xs font-bold">PG</div>
                          <div className="flex-1">
                            <div className="bg-slate-800/50 rounded-2xl rounded-tl-none p-3 border border-slate-700/50">
                              <div className="text-sm text-slate-200">PG Admin</div>
                              <div className="mt-2 text-sm text-slate-300">hi</div>
                              <div className="text-[10px] text-slate-500 mt-1">Today at 10:46 AM</div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="flex gap-3">
                          <div className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center shrink-0 text-xs font-bold">PG</div>
                          <div className="flex-1">
                            <div className="bg-slate-800/50 rounded-2xl rounded-tl-none p-3 border border-slate-700/50">
                              <div className="text-sm text-slate-200 mb-2">PG Admin</div>
                              <div className="w-full max-w-[200px] h-32 bg-slate-900 rounded-xl flex items-center justify-center border border-slate-700 overflow-hidden">
                                {/* Placeholder for uploaded image */}
                                <div className="w-16 h-16 opacity-50">
                                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-full h-full text-slate-400">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                  </svg>
                                </div>
                              </div>
                              <div className="text-[10px] text-slate-500 mt-2">Today at 10:50 AM</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {activeTab === 'Public Notes' && (
                      <div className="space-y-6">
                        <div className="flex justify-between items-center mb-2">
                          <h3 className="text-lg font-medium text-slate-200">Public Notes</h3>
                          <button 
                            onClick={() => setIsTaskCategoryModalOpen(true)}
                            className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-medium rounded-lg flex items-center gap-2 transition-colors border border-slate-700"
                          >
                            <Plus className="w-3 h-3" /> Add Category
                          </button>
                        </div>
                        
                        {/* Note Composer */}
                        <div className="bg-slate-900/50 rounded-xl overflow-hidden border border-slate-700/50 shadow-sm">
                          <div className="px-4 py-3 border-b border-slate-700/50 font-medium text-slate-200 bg-slate-800/50 flex justify-between items-center">
                            <span>Message</span>
                          </div>
                          <div className="p-2 border-b border-slate-700/50 flex flex-wrap gap-1 items-center text-slate-400 bg-slate-900/50">
                            <button className="p-1.5 hover:bg-slate-800 hover:text-slate-200 rounded transition-colors"><Bold className="w-4 h-4" /></button>
                            <button className="p-1.5 hover:bg-slate-800 hover:text-slate-200 rounded transition-colors"><Link2 className="w-4 h-4" /></button>
                            <div className="w-px h-4 bg-slate-700/50 mx-1"></div>
                            <button className="p-1.5 hover:bg-slate-800 hover:text-slate-200 rounded transition-colors"><ListIcon className="w-4 h-4" /></button>
                            <button className="p-1.5 hover:bg-slate-800 hover:text-slate-200 rounded transition-colors"><ListOrdered className="w-4 h-4" /></button>
                            <div className="w-px h-4 bg-slate-700/50 mx-1"></div>
                            <button className="p-1.5 hover:bg-slate-800 hover:text-slate-200 rounded transition-colors"><ImageIcon className="w-4 h-4" /></button>
                            <button className="p-1.5 hover:bg-slate-800 hover:text-slate-200 rounded transition-colors"><Film className="w-4 h-4" /></button>
                            <div className="w-px h-4 bg-slate-700/50 mx-1"></div>
                            <button className="p-1.5 hover:bg-slate-800 hover:text-slate-200 rounded transition-colors"><AlignLeft className="w-4 h-4" /></button>
                            <button className="p-1.5 hover:bg-slate-800 hover:text-slate-200 rounded transition-colors"><AlignCenter className="w-4 h-4" /></button>
                            <button className="p-1.5 hover:bg-slate-800 hover:text-slate-200 rounded transition-colors"><AlignRight className="w-4 h-4" /></button>
                            <button className="p-1.5 hover:bg-slate-800 hover:text-slate-200 rounded transition-colors"><AlignJustify className="w-4 h-4" /></button>
                            <div className="w-px h-4 bg-slate-700/50 mx-1"></div>
                            <button className="p-1.5 hover:bg-slate-800 hover:text-slate-200 rounded transition-colors"><Minus className="w-4 h-4" /></button>
                            <button className="p-1.5 hover:bg-slate-800 hover:text-slate-200 rounded transition-colors"><Grid className="w-4 h-4" /></button>
                            <button className="p-1.5 hover:bg-slate-800 hover:text-slate-200 rounded transition-colors"><Code className="w-4 h-4" /></button>
                            <button className="p-1.5 hover:bg-slate-800 hover:text-slate-200 rounded transition-colors"><Maximize className="w-4 h-4" /></button>
                          </div>
                          <div className="p-4 bg-slate-900/50 h-32">
                            <textarea className="w-full h-full bg-transparent resize-none outline-none text-sm text-slate-300 placeholder:text-slate-600" placeholder="Write your public note here..."></textarea>
                          </div>
                          <div className="px-4 py-3 border-t border-slate-700/50 bg-slate-900/50 flex justify-end gap-3">
                            <button className="px-4 py-2 bg-transparent hover:bg-slate-800 text-slate-300 text-sm font-medium rounded-md border border-slate-700 transition-colors">
                              Clear
                            </button>
                            <button className="px-5 py-2 bg-[#7c3aed] hover:bg-purple-600 text-white text-sm font-medium rounded-md shadow-[0_0_10px_rgba(124,58,237,0.3)] transition-all">
                              Send
                            </button>
                          </div>
                        </div>

                        {/* Notes Cards Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div className="bg-slate-800/40 border border-slate-700/50 rounded-xl p-4 hover:border-purple-500/30 transition-colors group">
                            <div className="flex justify-between items-start mb-2">
                              <h4 className="text-sm font-semibold text-slate-200">Project Kickoff Summary</h4>
                              <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                                <button className="p-1 text-slate-400 hover:text-purple-400"><Edit2 className="w-3.5 h-3.5" /></button>
                                <button className="p-1 text-slate-400 hover:text-rose-400"><Trash2 className="w-3.5 h-3.5" /></button>
                              </div>
                            </div>
                            <p className="text-xs text-slate-400 mb-4 line-clamp-3">
                              Client approved the initial wireframes. We need to focus on the dashboard metrics first. Next meeting is scheduled for Thursday to review the mockups.
                            </p>
                            <div className="flex justify-between items-center mt-auto pt-3 border-t border-slate-700/50">
                              <span className="text-[10px] text-slate-500 flex items-center gap-1"><Clock className="w-3 h-3" /> Oct 17, 2023</span>
                              <button 
                                onClick={() => setIsTaskCategoryModalOpen(true)}
                                className="text-[10px] font-medium px-2 py-1 bg-purple-500/10 text-purple-400 rounded hover:bg-purple-500/20 transition-colors border border-purple-500/20"
                              >
                                Meeting Notes
                              </button>
                            </div>
                          </div>

                          <div className="bg-slate-800/40 border border-slate-700/50 rounded-xl p-4 hover:border-purple-500/30 transition-colors group">
                            <div className="flex justify-between items-start mb-2">
                              <h4 className="text-sm font-semibold text-slate-200">Brand Guidelines</h4>
                              <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                                <button className="p-1 text-slate-400 hover:text-purple-400"><Edit2 className="w-3.5 h-3.5" /></button>
                                <button className="p-1 text-slate-400 hover:text-rose-400"><Trash2 className="w-3.5 h-3.5" /></button>
                              </div>
                            </div>
                            <p className="text-xs text-slate-400 mb-4 line-clamp-3">
                              Primary color: #7c3aed. Secondary: Emerald green. Fonts to use are Inter for body and Plus Jakarta Sans for headings.
                            </p>
                            <div className="flex justify-between items-center mt-auto pt-3 border-t border-slate-700/50">
                              <span className="text-[10px] text-slate-500 flex items-center gap-1"><Clock className="w-3 h-3" /> Oct 15, 2023</span>
                              <button 
                                onClick={() => setIsTaskCategoryModalOpen(true)}
                                className="text-[10px] font-medium px-2 py-1 bg-slate-700 text-slate-300 rounded hover:bg-slate-600 transition-colors border border-slate-600"
                              >
                                + Category
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {activeTab === 'Private Notes' && (
                      <div className="space-y-6">
                        <div className="flex justify-between items-center mb-2">
                          <h3 className="text-lg font-medium text-slate-200">Private Notes</h3>
                          <button 
                            onClick={() => setIsTaskCategoryModalOpen(true)}
                            className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-medium rounded-lg flex items-center gap-2 transition-colors border border-slate-700"
                          >
                            <Plus className="w-3 h-3" /> Add Category
                          </button>
                        </div>
                        
                        {/* Note Composer */}
                        <div className="bg-slate-900/50 rounded-xl overflow-hidden border border-slate-700/50 shadow-sm">
                          <div className="px-4 py-3 border-b border-slate-700/50 font-medium text-slate-200 bg-slate-800/50 flex justify-between items-center">
                            <span>Private Note</span>
                          </div>
                          <div className="p-2 border-b border-slate-700/50 flex flex-wrap gap-1 items-center text-slate-400 bg-slate-900/50">
                            <button className="p-1.5 hover:bg-slate-800 hover:text-slate-200 rounded transition-colors"><Bold className="w-4 h-4" /></button>
                            <button className="p-1.5 hover:bg-slate-800 hover:text-slate-200 rounded transition-colors"><Link2 className="w-4 h-4" /></button>
                            <div className="w-px h-4 bg-slate-700/50 mx-1"></div>
                            <button className="p-1.5 hover:bg-slate-800 hover:text-slate-200 rounded transition-colors"><ListIcon className="w-4 h-4" /></button>
                            <button className="p-1.5 hover:bg-slate-800 hover:text-slate-200 rounded transition-colors"><ListOrdered className="w-4 h-4" /></button>
                            <div className="w-px h-4 bg-slate-700/50 mx-1"></div>
                            <button className="p-1.5 hover:bg-slate-800 hover:text-slate-200 rounded transition-colors"><ImageIcon className="w-4 h-4" /></button>
                            <button className="p-1.5 hover:bg-slate-800 hover:text-slate-200 rounded transition-colors"><Film className="w-4 h-4" /></button>
                            <div className="w-px h-4 bg-slate-700/50 mx-1"></div>
                            <button className="p-1.5 hover:bg-slate-800 hover:text-slate-200 rounded transition-colors"><AlignLeft className="w-4 h-4" /></button>
                            <button className="p-1.5 hover:bg-slate-800 hover:text-slate-200 rounded transition-colors"><AlignCenter className="w-4 h-4" /></button>
                            <button className="p-1.5 hover:bg-slate-800 hover:text-slate-200 rounded transition-colors"><AlignRight className="w-4 h-4" /></button>
                            <button className="p-1.5 hover:bg-slate-800 hover:text-slate-200 rounded transition-colors"><AlignJustify className="w-4 h-4" /></button>
                            <div className="w-px h-4 bg-slate-700/50 mx-1"></div>
                            <button className="p-1.5 hover:bg-slate-800 hover:text-slate-200 rounded transition-colors"><Minus className="w-4 h-4" /></button>
                            <button className="p-1.5 hover:bg-slate-800 hover:text-slate-200 rounded transition-colors"><Grid className="w-4 h-4" /></button>
                            <button className="p-1.5 hover:bg-slate-800 hover:text-slate-200 rounded transition-colors"><Code className="w-4 h-4" /></button>
                            <button className="p-1.5 hover:bg-slate-800 hover:text-slate-200 rounded transition-colors"><Maximize className="w-4 h-4" /></button>
                          </div>
                          <div className="p-4 bg-slate-900/50 h-32">
                            <textarea className="w-full h-full bg-transparent resize-none outline-none text-sm text-slate-300 placeholder:text-slate-600" placeholder="Write your private note here (visible only to admins)..."></textarea>
                          </div>
                          <div className="px-4 py-3 border-t border-slate-700/50 bg-slate-900/50 flex justify-start gap-3">
                            <button className="px-5 py-2 bg-[#7c3aed] hover:bg-purple-600 text-white text-sm font-medium rounded-md shadow-[0_0_10px_rgba(124,58,237,0.3)] transition-all">
                              Save
                            </button>
                            <button className="px-4 py-2 bg-transparent hover:bg-slate-800 text-slate-300 text-sm font-medium rounded-md border border-slate-700 transition-colors">
                              Cancel
                            </button>
                          </div>
                        </div>

                        {/* Notes Cards Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div className="bg-slate-800/40 border border-slate-700/50 rounded-xl p-4 hover:border-purple-500/30 transition-colors group relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-purple-500/20 to-transparent rounded-bl-3xl opacity-50"></div>
                            <div className="flex justify-between items-start mb-2 relative z-10">
                              <h4 className="text-sm font-semibold text-slate-200 flex items-center gap-2">
                                Internal Review 
                                <span className="bg-purple-500/20 text-purple-400 text-[9px] px-1.5 py-0.5 rounded font-bold tracking-wider">PRIVATE</span>
                              </h4>
                              <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                                <button className="p-1 text-slate-400 hover:text-purple-400"><Edit2 className="w-3.5 h-3.5" /></button>
                                <button className="p-1 text-slate-400 hover:text-rose-400"><Trash2 className="w-3.5 h-3.5" /></button>
                              </div>
                            </div>
                            <p className="text-xs text-slate-400 mb-4 line-clamp-3 relative z-10">
                              Client requested to speed up the delivery timeline but budget remains fixed. We need to allocate resources from another project to meet this deadline. Do not discuss timeline constraints in public notes.
                            </p>
                            <div className="flex justify-between items-center mt-auto pt-3 border-t border-slate-700/50 relative z-10">
                              <span className="text-[10px] text-slate-500 flex items-center gap-1"><Clock className="w-3 h-3" /> Oct 18, 2023</span>
                              <button 
                                onClick={() => setIsTaskCategoryModalOpen(true)}
                                className="text-[10px] font-medium px-2 py-1 bg-slate-700 text-slate-300 rounded hover:bg-slate-600 transition-colors border border-slate-600"
                              >
                                + Category
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {activeTab === 'Uploads' && (
                      <div className="bg-slate-900/50 rounded-xl overflow-hidden border border-slate-700/50 shadow-sm p-6">
                        <div className="flex justify-between items-center mb-6">
                          <h3 className="text-lg font-medium text-slate-200">Uploads</h3>
                          <div className="flex gap-2">
                            <button 
                              onClick={() => setIsTaskCategoryModalOpen(true)}
                              className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-medium rounded-lg flex items-center gap-2 transition-colors border border-slate-700"
                            >
                              <Plus className="w-3 h-3" /> Add Category
                            </button>
                            <button 
                              onClick={() => setIsUploadModalOpen(true)}
                              className="px-4 py-2 bg-emerald-500 hover:bg-emerald-600 text-white text-sm font-medium rounded-md shadow-[0_0_10px_rgba(16,185,129,0.3)] flex items-center gap-2 transition-all"
                            >
                              <Download className="w-4 h-4 rotate-180" /> Upload
                            </button>
                          </div>
                        </div>
                        
                        {uploadedFiles.length === 0 ? (
                          <div className="flex flex-col items-center justify-center py-12 text-slate-400 border-2 border-dashed border-slate-800 rounded-xl">
                            <UploadCloud className="w-12 h-12 text-slate-600 mb-4" />
                            <p>No uploads found.</p>
                          </div>
                        ) : (
                          <div className="grid grid-cols-1 gap-4">
                            {uploadedFiles.map((file, idx) => (
                              <div key={idx} className="flex items-start gap-4 p-4 rounded-xl border border-slate-700/50 bg-slate-800/30 group hover:border-emerald-500/50 transition-colors">
                                <div className="w-12 h-12 rounded-lg bg-slate-800 flex items-center justify-center shrink-0">
                                  {file.type.includes('image') ? (
                                    <ImageIcon className="w-6 h-6 text-emerald-400" />
                                  ) : (
                                    <FileIcon className="w-6 h-6 text-blue-400" />
                                  )}
                                </div>
                                <div className="flex-1 min-w-0">
                                  <p className="text-sm font-medium text-slate-200 break-all line-clamp-2" title={file.name}>{file.name}</p>
                                  <div className="flex items-center gap-2 mt-1 text-xs text-slate-500">
                                    <span>{file.size}</span>
                                    <span>•</span>
                                    <span>{file.date}</span>
                                  </div>
                                </div>
                                <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                  <button className="p-1.5 text-slate-400 hover:text-emerald-400 transition-colors rounded">
                                    <Download className="w-4 h-4" />
                                  </button>
                                  <button 
                                    onClick={() => setUploadedFiles(prev => prev.filter((_, i) => i !== idx))}
                                    className="p-1.5 text-slate-400 hover:text-rose-400 transition-colors rounded"
                                  >
                                    <Trash2 className="w-4 h-4" />
                                  </button>
                                </div>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    )}

                    {activeTab === 'Activities' && (
                      <div className="space-y-6">
                        <div className="relative pl-6 border-l border-slate-800 space-y-8">
                          <div className="relative">
                            <div className="absolute -left-[29px] top-1 w-3 h-3 bg-purple-500 rounded-full border-2 border-[#0f172a]" />
                            <div className="text-sm text-white">Project Created</div>
                            <div className="text-xs text-slate-500 mt-1">17 Oct 2023 at 10:00 AM</div>
                          </div>
                          <div className="relative">
                            <div className="absolute -left-[29px] top-1 w-3 h-3 bg-slate-700 rounded-full border-2 border-[#0f172a]" />
                            <div className="text-sm text-white">Tasks Generated from Template</div>
                            <div className="text-xs text-slate-500 mt-1">17 Oct 2023 at 10:05 AM</div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {activeTab === 'Chat' && (
                    <div className="p-4 border-t border-slate-800 bg-slate-900/50">
                      <div className="relative">
                        <input 
                          type="text" 
                          placeholder="Type a message..." 
                          className="w-full bg-slate-800 border border-slate-700 rounded-xl py-3 pl-4 pr-12 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:border-purple-500/50"
                        />
                        <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-1">
                          <button className="p-1.5 text-slate-400 hover:text-purple-400 transition-colors">
                            <Paperclip className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  )}

                </div>
              </div>
              
            </div>

          </div>
        </main>
      </div>

      {/* Upload Modal */}
      {isUploadModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm px-4">
          <div className="glass-panel border border-slate-700/50 rounded-2xl shadow-2xl w-full max-w-2xl overflow-hidden flex flex-col animate-in fade-in zoom-in-95 duration-200">
            <div className="p-6 border-b border-slate-700/50 flex justify-between items-center">
              <h2 className="text-xl font-semibold text-slate-200">Upload Document</h2>
              <button 
                onClick={() => setIsUploadModalOpen(false)}
                className="p-2 text-slate-400 hover:text-slate-200 hover:bg-slate-800 rounded-lg transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="p-8">
              <label className="border-2 border-dashed border-slate-700 hover:border-emerald-500/50 rounded-xl p-12 flex flex-col items-center justify-center text-center transition-colors bg-slate-900/50 cursor-pointer group w-full">
                <input 
                  type="file" 
                  className="hidden" 
                  multiple 
                  onChange={(e) => {
                    if (e.target.files && e.target.files.length > 0) {
                      const newFiles = Array.from(e.target.files).map(file => ({
                        name: file.name,
                        size: (file.size / (1024 * 1024)).toFixed(1) + ' MB',
                        date: new Date().toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }),
                        type: file.type.startsWith('image/') ? 'image' : 'document'
                      }));
                      setUploadedFiles(prev => [...prev, ...newFiles]);
                      setIsUploadModalOpen(false);
                    }
                  }}
                />
                <UploadCloud className="w-12 h-12 text-slate-500 mb-4 group-hover:text-emerald-400 transition-colors" />
                <h3 className="text-lg font-medium text-slate-300 mb-2">Drag your file(s) to start uploading or click to browse</h3>
                <p className="text-sm text-slate-500">
                  Allowed: .png, .jpg, .jpeg, .pdf, .doc, .docx, .xls, .xlsx, .txt (max 15 MB each)
                </p>
              </label>
            </div>
            
            <div className="p-6 border-t border-slate-700/50 bg-slate-800/30 flex justify-end gap-3">
              <button 
                onClick={() => setIsUploadModalOpen(false)}
                className="px-6 py-2 bg-transparent hover:bg-slate-800 text-slate-300 text-sm font-medium rounded-md border border-slate-700 transition-colors"
              >
                Cancel
              </button>
              <button 
                onClick={() => {
                  setUploadedFiles(prev => [
                    ...prev, 
                    { name: `Document_${Math.floor(Math.random() * 1000)}.pdf`, size: '2.4 MB', date: new Date().toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }), type: 'pdf' },
                    { name: `Design_Draft_${Math.floor(Math.random() * 1000)}.png`, size: '4.1 MB', date: new Date().toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }), type: 'image' }
                  ]);
                  setIsUploadModalOpen(false);
                }}
                className="px-6 py-2 bg-emerald-500 hover:bg-emerald-600 text-white text-sm font-medium rounded-md shadow-[0_0_15px_rgba(16,185,129,0.4)] transition-all"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Task Template Modal */}
      {isTaskTemplateModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm px-4">
          <div className="glass-panel border border-slate-700/50 rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden flex flex-col animate-in fade-in zoom-in-95 duration-200">
            <div className="p-6 flex justify-between items-center">
              <h2 className="text-xl font-semibold text-slate-200">Apply Task Template</h2>
              <button 
                onClick={() => setIsTaskTemplateModalOpen(false)}
                className="p-2 text-slate-400 hover:text-slate-200 hover:bg-slate-800 rounded-lg transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="px-6 pb-2">
              <div className="flex items-center justify-between py-4 border-b border-slate-700/50">
                <div className="flex items-center gap-3 text-slate-300">
                  <Check className="w-5 h-5 text-slate-500" />
                  <span className="text-sm font-medium">Demo 5 task Template</span>
                </div>
                <button className="px-6 py-1.5 text-emerald-400/50 border border-emerald-400/20 rounded text-sm font-medium cursor-default">
                  Applied
                </button>
              </div>
              <div className="flex items-center justify-between py-4 border-b border-slate-700/50">
                <div className="flex items-center gap-3 text-slate-300">
                  <Check className="w-5 h-5 text-slate-500" />
                  <span className="text-sm font-medium">Standard Task Template</span>
                </div>
                <button className="px-6 py-1.5 text-emerald-400 border border-emerald-400/50 hover:bg-emerald-400/10 rounded text-sm font-medium transition-colors">
                  Apply
                </button>
              </div>
            </div>
            
            <div className="p-6 flex justify-between items-center mt-2 bg-slate-800/30">
              <span className="text-sm font-medium text-slate-400">Create Your Own Template?</span>
              <button className="px-6 py-2 bg-emerald-500 hover:bg-emerald-600 text-white text-sm font-medium rounded-md shadow-[0_0_10px_rgba(16,185,129,0.3)] transition-all flex items-center gap-2">
                <Plus className="w-4 h-4" /> Create
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Task Category Modal */}
      {isTaskCategoryModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm px-4">
          <div className="glass-panel border border-slate-700/50 rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden flex flex-col animate-in fade-in zoom-in-95 duration-200">
            <div className="p-6 flex justify-between items-center">
              <h2 className="text-xl font-semibold text-slate-200">Add Task Category</h2>
              <button 
                onClick={() => setIsTaskCategoryModalOpen(false)}
                className="p-2 text-slate-400 hover:text-slate-200 hover:bg-slate-800 rounded-lg transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="px-6 py-8 flex flex-col sm:flex-row sm:items-center gap-4">
              <label className="text-sm font-medium text-slate-400 whitespace-nowrap">Category Name*</label>
              <input 
                type="text" 
                className="flex-1 bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-2.5 text-sm text-slate-200 focus:outline-none focus:border-purple-500/50"
              />
            </div>
            
            <div className="p-6 border-t border-slate-700/50 bg-slate-800/30 flex justify-end gap-3">
              <button 
                onClick={() => setIsTaskCategoryModalOpen(false)}
                className="px-6 py-2 bg-transparent hover:bg-slate-800 text-slate-300 text-sm font-medium rounded-xl border border-slate-700 transition-colors"
              >
                Close
              </button>
              <button 
                onClick={() => setIsTaskCategoryModalOpen(false)}
                className="px-6 py-2 bg-[#7c3aed] hover:bg-purple-600 shadow-[0_0_10px_rgba(124,58,237,0.3)] text-white text-sm font-medium rounded-xl transition-all"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
