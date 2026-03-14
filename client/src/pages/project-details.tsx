import { useState } from "react";
import { useLocation } from "wouter";
import { Sidebar, Header } from "./clients";
import { Edit2, FileText, User, Calendar, Flag, Users, RefreshCcw, Plus, Search, Zap, CheckSquare, List } from "lucide-react";

export default function ProjectDetailsPage() {
  const [openMenus, setOpenMenus] = useState<string>('');
  const [location] = useLocation();

  const toggleMenu = (menu: string) => {
    setOpenMenus(prev => prev === menu ? '' : menu);
  };

  return (
    <div className="h-screen w-full overflow-hidden bg-transparent flex font-sans text-[#e2e8f0]">
      <Sidebar openMenus={openMenus} toggleMenu={toggleMenu} currentPath="/projects" />

      <div className="flex-1 flex flex-col min-w-0 bg-[#0f172a] relative">
        <Header title="Project Details" />

        <main className="flex-1 overflow-y-auto p-6 lg:p-8 relative">
          <div className="max-w-[1400px] mx-auto">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold text-white tracking-tight">
              <h1 className="text-[22px] font-semibold text-white">Project Details</h1>
              <button className="flex items-center gap-2 px-4 py-2 bg-slate-900/80 border border-white/10 rounded-xl shadow-sm text-sm font-medium text-slate-300 shadow-sm hover:bg-slate-900/40 backdrop-blur-xl/50 transition-colors">
                <Edit2 className="w-4 h-4" /> Edit
              </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Left Column */}
              <div className="space-y-6">
                {/* Main Info Card */}
                <div className="bg-slate-900/40 backdrop-blur-xl rounded-xl p-6 shadow-sm border border-white/10">
                  <div className="space-y-5">
                    <div>
                      <div className="flex items-center gap-2 text-slate-400 mb-1">
                        <FileText className="w-4 h-4" />
                        <span className="text-[13px] font-medium">Project Title</span>
                      </div>
                      <p className="text-[14px] font-semibold text-white pl-6">Twilio ticket + domain verify</p>
                    </div>

                    <div>
                      <div className="flex items-center gap-2 text-slate-400 mb-1">
                        <User className="w-4 h-4" />
                        <span className="text-[13px] font-medium">Client</span>
                      </div>
                      <div className="flex items-center gap-2 pl-6 mt-1">
                         <div className="w-5 h-5 bg-slate-200 rounded-full overflow-hidden flex items-center justify-center text-[10px] font-bold">PG</div>
                         <span className="text-[14px] font-semibold text-white">Pink Gorilla...</span>
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center gap-2 text-slate-400 mb-1">
                        <Calendar className="w-4 h-4" />
                        <span className="text-[13px] font-medium">Start Date</span>
                      </div>
                      <p className="text-[14px] font-semibold text-white pl-6">10-03-2026</p>
                    </div>

                    <div>
                      <div className="flex items-center gap-2 text-slate-400 mb-1">
                        <Calendar className="w-4 h-4" />
                        <span className="text-[13px] font-medium">End Date</span>
                      </div>
                      <p className="text-[14px] font-semibold text-white pl-6">---</p>
                    </div>

                    <div>
                      <div className="flex items-center gap-2 text-slate-400 mb-1">
                        <Flag className="w-4 h-4" />
                        <span className="text-[13px] font-medium">Priority</span>
                      </div>
                      <div className="pl-6 mt-1">
                        <span className="inline-flex items-center justify-center px-4 py-1 rounded-full text-xs font-medium text-slate-500 border border-slate-200 bg-slate-900/40 backdrop-blur-xl">
                          Low
                        </span>
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center gap-2 text-slate-400 mb-1">
                        <Users className="w-4 h-4" />
                        <span className="text-[13px] font-medium">Assignee</span>
                      </div>
                      <div className="flex flex-wrap gap-3 pl-6 mt-1">
                        <div className="flex items-center gap-1.5">
                           <div className="w-6 h-6 rounded-full bg-pink-500 flex-shrink-0 border-2 border-white shadow-sm"></div>
                           <span className="text-[13px] font-semibold text-white">Vikas Shar...</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                           <div className="w-6 h-6 rounded-full bg-slate-500 flex-shrink-0 border-2 border-white shadow-sm overflow-hidden">
                             <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=user1" alt="avatar" />
                           </div>
                           <span className="text-[13px] font-semibold text-white">Chayan Alavi</span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center gap-2 text-slate-400 mb-1">
                        <RefreshCcw className="w-4 h-4" />
                        <span className="text-[13px] font-medium">Status</span>
                      </div>
                      <div className="pl-6 mt-1">
                        <span className="inline-flex items-center justify-center px-4 py-1.5 rounded-full text-[11px] font-semibold text-orange-500 border border-orange-200 bg-orange-50/50">
                          Pending Approval
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Information */}
                <div className="bg-slate-900/40 backdrop-blur-xl rounded-xl p-6 shadow-sm border border-white/10">
                   <h3 className="text-[14px] font-bold text-white mb-4">Information</h3>
                   <div className="space-y-1.5 text-[13px]">
                     <div className="flex gap-1"><span className="font-semibold text-white">Created By:</span> <span className="text-slate-400">Vikas Sharma</span></div>
                     <div className="flex gap-1"><span className="font-semibold text-white">Created At:</span> <span className="text-slate-400">09-03-2026</span></div>
                     <div className="flex gap-1"><span className="font-semibold text-white">Last Assigned Members:</span> <span className="text-slate-400">Chayan</span></div>
                     <div className="flex gap-1"><span className="font-semibold text-white">Last Assigned by:</span> <span className="text-slate-400">Vikas</span></div>
                     <div className="flex gap-1"><span className="font-semibold text-white">Last Assigned at:</span> <span className="text-slate-400">09-03-2026</span></div>
                   </div>
                </div>

                {/* Description */}
                <div className="bg-slate-900/40 backdrop-blur-xl rounded-xl p-6 shadow-sm border border-white/10">
                   <h3 className="text-[14px] font-bold text-white">Description</h3>
                </div>

                {/* Attachments */}
                <div className="bg-slate-900/40 backdrop-blur-xl rounded-xl p-6 shadow-sm border border-white/10 flex justify-between items-center">
                   <h3 className="text-[14px] font-bold text-white">Attachments</h3>
                   <button className="text-slate-500 hover:text-white transition-colors">
                     <Plus className="w-4 h-4" />
                   </button>
                </div>
              </div>

              {/* Right Column */}
              <div className="lg:col-span-2 space-y-6">
                
                {/* Tasks */}
                <div className="bg-slate-900/40 backdrop-blur-xl rounded-xl p-6 shadow-sm border border-white/10 min-h-[300px] flex flex-col">
                   <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold text-white tracking-tight">
                     <h2 className="text-[16px] font-bold text-white">Tasks</h2>
                     <div className="flex items-center gap-2">
                        <button className="w-8 h-8 flex items-center justify-center rounded border border-white/10 text-slate-500 bg-slate-900/40 backdrop-blur-xl/50 hover:bg-slate-800 transition-colors">
                          <CheckSquare className="w-4 h-4" />
                        </button>
                        <button className="w-8 h-8 flex items-center justify-center rounded border border-white/10 text-slate-500 bg-slate-900/40 backdrop-blur-xl/50 hover:bg-slate-800 transition-colors">
                          <List className="w-4 h-4" />
                        </button>
                        <button className="w-8 h-8 flex items-center justify-center rounded bg-indigo-500 text-white shadow-sm hover:bg-indigo-400 transition-colors">
                          <Zap className="w-4 h-4" fill="currentColor" />
                        </button>
                        <button className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-900/80 border border-white/10 rounded-xl shadow-sm text-sm font-medium text-slate-300 shadow-sm hover:bg-slate-900/40 backdrop-blur-xl/50 transition-colors ml-1">
                          <Plus className="w-4 h-4" /> Add Tasks
                        </button>
                     </div>
                   </div>

                   <div className="flex-1 flex flex-col items-center justify-center text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]enter py-12">
                      <div className="relative mb-6">
                         <div className="absolute -top-2 -left-2 w-2 h-2 rounded-full bg-green-200 opacity-50"></div>
                         <div className="absolute top-0 right-2 w-1.5 h-1.5 rounded-full bg-blue-200 opacity-50"></div>
                         <div className="absolute bottom-4 -left-4 w-1 h-1 rounded-full bg-amber-200 opacity-50"></div>
                         <div className="w-20 h-20 rounded-full border border-white/10 flex items-center justify-center bg-slate-900/40 backdrop-blur-xl shadow-sm relative z-10">
                           <Search className="w-8 h-8 text-slate-500" strokeWidth={1.5} />
                         </div>
                         {/* decorative sparkles around search */}
                         <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-[2px] h-2 bg-green-300"></div>
                         <div className="absolute top-2 -right-3 w-2 h-[2px] bg-green-300 rotate-45"></div>
                         <div className="absolute top-2 -left-3 w-2 h-[2px] bg-green-300 -rotate-45"></div>
                      </div>
                      <h3 className="text-[17px] font-semibold text-white mb-1.5">No records were found</h3>
                      <p className="text-[14px] text-slate-500">Try a difference search</p>
                   </div>
                </div>

                {/* Notes */}
                <div className="bg-slate-900/40 backdrop-blur-xl rounded-xl p-6 shadow-sm border border-white/10">
                   <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold text-white tracking-tight">
                     <h2 className="text-[16px] font-bold text-white">Notes</h2>
                     <button className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-900/40 backdrop-blur-xl/50 border border-white/10 rounded-lg text-sm font-medium text-slate-300 shadow-sm hover:bg-slate-800 transition-colors">
                       <Plus className="w-4 h-4" /> Add Note
                     </button>
                   </div>

                   <div className="bg-[#fff9e6] rounded-xl p-5 border border-[#fef0c7]">
                      <h4 className="text-[15px] font-bold text-white mb-2">Update - Twilio "Ticket + Domain Verified"</h4>
                      <p className="text-[14px] text-slate-300 leading-relaxed mb-6">
                        I've verified both added domains in Twilio. Domains: pinkgorilla.agency & pinkgorillasoftware.com! I've sent a reply to the Twilio support team regarding ticket #25425379.
                      </p>
                      
                      <div className="flex items-center text-[13px] text-slate-400">
                        <div className="w-6 h-6 rounded-full bg-pink-500 mr-2 flex-shrink-0 border border-white"></div>
                        <span className="font-semibold text-white mr-2">Vikas</span>
                        <span className="mr-2">• 09 Mar, 2026</span>
                        <span>• 11:21 pm</span>
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