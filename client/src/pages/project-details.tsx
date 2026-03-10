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
    <div className="min-h-screen bg-transparent flex font-sans text-[#1e293b]">
      <Sidebar openMenus={openMenus} toggleMenu={toggleMenu} currentPath="/projects" />

      <div className="flex-1 flex flex-col min-w-0 bg-white/30 backdrop-blur-3xl">
        <Header title="Project Details" />

        <main className="flex-1 overflow-y-auto p-6 lg:p-8 relative">
          <div className="max-w-[1400px] mx-auto">
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-[22px] font-semibold text-[#0f172a]">Project Details</h1>
              <button className="flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-md/80 backdrop-blur-sm border border-white/60/80 rounded-xl shadow-sm text-sm font-medium text-[#475569] shadow-sm hover:bg-white/80 backdrop-blur-md/50 transition-colors">
                <Edit2 className="w-4 h-4" /> Edit
              </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Left Column */}
              <div className="space-y-6">
                {/* Main Info Card */}
                <div className="bg-white/80 backdrop-blur-md rounded-xl p-6 shadow-sm border border-white/60">
                  <div className="space-y-5">
                    <div>
                      <div className="flex items-center gap-2 text-[#64748b] mb-1">
                        <FileText className="w-4 h-4" />
                        <span className="text-[13px] font-medium">Project Title</span>
                      </div>
                      <p className="text-[14px] font-semibold text-[#0f172a] pl-6">Twilio ticket + domain verify</p>
                    </div>

                    <div>
                      <div className="flex items-center gap-2 text-[#64748b] mb-1">
                        <User className="w-4 h-4" />
                        <span className="text-[13px] font-medium">Client</span>
                      </div>
                      <div className="flex items-center gap-2 pl-6 mt-1">
                         <div className="w-5 h-5 bg-gray-200 rounded-full overflow-hidden flex items-center justify-center text-[10px] font-bold">PG</div>
                         <span className="text-[14px] font-semibold text-[#0f172a]">Pink Gorilla...</span>
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center gap-2 text-[#64748b] mb-1">
                        <Calendar className="w-4 h-4" />
                        <span className="text-[13px] font-medium">Start Date</span>
                      </div>
                      <p className="text-[14px] font-semibold text-[#0f172a] pl-6">10-03-2026</p>
                    </div>

                    <div>
                      <div className="flex items-center gap-2 text-[#64748b] mb-1">
                        <Calendar className="w-4 h-4" />
                        <span className="text-[13px] font-medium">End Date</span>
                      </div>
                      <p className="text-[14px] font-semibold text-[#0f172a] pl-6">---</p>
                    </div>

                    <div>
                      <div className="flex items-center gap-2 text-[#64748b] mb-1">
                        <Flag className="w-4 h-4" />
                        <span className="text-[13px] font-medium">Priority</span>
                      </div>
                      <div className="pl-6 mt-1">
                        <span className="inline-flex items-center justify-center px-4 py-1 rounded-full text-xs font-medium text-gray-500 border border-gray-200 bg-white/80 backdrop-blur-md">
                          Low
                        </span>
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center gap-2 text-[#64748b] mb-1">
                        <Users className="w-4 h-4" />
                        <span className="text-[13px] font-medium">Assignee</span>
                      </div>
                      <div className="flex flex-wrap gap-3 pl-6 mt-1">
                        <div className="flex items-center gap-1.5">
                           <div className="w-6 h-6 rounded-full bg-pink-500 flex-shrink-0 border-2 border-white shadow-sm"></div>
                           <span className="text-[13px] font-semibold text-[#0f172a]">Vikas Shar...</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                           <div className="w-6 h-6 rounded-full bg-gray-500 flex-shrink-0 border-2 border-white shadow-sm overflow-hidden">
                             <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=user1" alt="avatar" />
                           </div>
                           <span className="text-[13px] font-semibold text-[#0f172a]">Chayan Alavi</span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center gap-2 text-[#64748b] mb-1">
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
                <div className="bg-white/80 backdrop-blur-md rounded-xl p-6 shadow-sm border border-white/60">
                   <h3 className="text-[14px] font-bold text-[#0f172a] mb-4">Information</h3>
                   <div className="space-y-1.5 text-[13px]">
                     <div className="flex gap-1"><span className="font-semibold text-[#0f172a]">Created By:</span> <span className="text-[#64748b]">Vikas Sharma</span></div>
                     <div className="flex gap-1"><span className="font-semibold text-[#0f172a]">Created At:</span> <span className="text-[#64748b]">09-03-2026</span></div>
                     <div className="flex gap-1"><span className="font-semibold text-[#0f172a]">Last Assigned Members:</span> <span className="text-[#64748b]">Chayan</span></div>
                     <div className="flex gap-1"><span className="font-semibold text-[#0f172a]">Last Assigned by:</span> <span className="text-[#64748b]">Vikas</span></div>
                     <div className="flex gap-1"><span className="font-semibold text-[#0f172a]">Last Assigned at:</span> <span className="text-[#64748b]">09-03-2026</span></div>
                   </div>
                </div>

                {/* Description */}
                <div className="bg-white/80 backdrop-blur-md rounded-xl p-6 shadow-sm border border-white/60">
                   <h3 className="text-[14px] font-bold text-[#0f172a]">Description</h3>
                </div>

                {/* Attachments */}
                <div className="bg-white/80 backdrop-blur-md rounded-xl p-6 shadow-sm border border-white/60 flex justify-between items-center">
                   <h3 className="text-[14px] font-bold text-[#0f172a]">Attachments</h3>
                   <button className="text-[#94a3b8] hover:text-[#0f172a] transition-colors">
                     <Plus className="w-4 h-4" />
                   </button>
                </div>
              </div>

              {/* Right Column */}
              <div className="lg:col-span-2 space-y-6">
                
                {/* Tasks */}
                <div className="bg-white/80 backdrop-blur-md rounded-xl p-6 shadow-sm border border-white/60 min-h-[300px] flex flex-col">
                   <div className="flex justify-between items-center mb-6">
                     <h2 className="text-[16px] font-bold text-[#0f172a]">Tasks</h2>
                     <div className="flex items-center gap-2">
                        <button className="w-8 h-8 flex items-center justify-center rounded border border-white/60 text-[#94a3b8] bg-white/80 backdrop-blur-md/50 hover:bg-[#f1f5f9] transition-colors">
                          <CheckSquare className="w-4 h-4" />
                        </button>
                        <button className="w-8 h-8 flex items-center justify-center rounded border border-white/60 text-[#94a3b8] bg-white/80 backdrop-blur-md/50 hover:bg-[#f1f5f9] transition-colors">
                          <List className="w-4 h-4" />
                        </button>
                        <button className="w-8 h-8 flex items-center justify-center rounded bg-[#8b5cf6] text-white shadow-sm hover:bg-[#7c3aed] transition-colors">
                          <Zap className="w-4 h-4" fill="currentColor" />
                        </button>
                        <button className="flex items-center gap-1.5 px-3 py-1.5 bg-white/80 backdrop-blur-md/80 backdrop-blur-sm border border-white/60/80 rounded-xl shadow-sm text-sm font-medium text-[#475569] shadow-sm hover:bg-white/80 backdrop-blur-md/50 transition-colors ml-1">
                          <Plus className="w-4 h-4" /> Add Tasks
                        </button>
                     </div>
                   </div>

                   <div className="flex-1 flex flex-col items-center justify-center text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]enter py-12">
                      <div className="relative mb-6">
                         <div className="absolute -top-2 -left-2 w-2 h-2 rounded-full bg-green-200 opacity-50"></div>
                         <div className="absolute top-0 right-2 w-1.5 h-1.5 rounded-full bg-blue-200 opacity-50"></div>
                         <div className="absolute bottom-4 -left-4 w-1 h-1 rounded-full bg-amber-200 opacity-50"></div>
                         <div className="w-20 h-20 rounded-full border border-white/60 flex items-center justify-center bg-white/80 backdrop-blur-md shadow-sm relative z-10">
                           <Search className="w-8 h-8 text-[#94a3b8]" strokeWidth={1.5} />
                         </div>
                         {/* decorative sparkles around search */}
                         <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-[2px] h-2 bg-green-300"></div>
                         <div className="absolute top-2 -right-3 w-2 h-[2px] bg-green-300 rotate-45"></div>
                         <div className="absolute top-2 -left-3 w-2 h-[2px] bg-green-300 -rotate-45"></div>
                      </div>
                      <h3 className="text-[17px] font-semibold text-[#0f172a] mb-1.5">No records were found</h3>
                      <p className="text-[14px] text-[#94a3b8]">Try a difference search</p>
                   </div>
                </div>

                {/* Notes */}
                <div className="bg-white/80 backdrop-blur-md rounded-xl p-6 shadow-sm border border-white/60">
                   <div className="flex justify-between items-center mb-6">
                     <h2 className="text-[16px] font-bold text-[#0f172a]">Notes</h2>
                     <button className="flex items-center gap-1.5 px-3 py-1.5 bg-white/80 backdrop-blur-md/50 border border-white/60 rounded-lg text-sm font-medium text-[#475569] shadow-sm hover:bg-[#f1f5f9] transition-colors">
                       <Plus className="w-4 h-4" /> Add Note
                     </button>
                   </div>

                   <div className="bg-[#fff9e6] rounded-xl p-5 border border-[#fef0c7]">
                      <h4 className="text-[15px] font-bold text-[#0f172a] mb-2">Update - Twilio "Ticket + Domain Verified"</h4>
                      <p className="text-[14px] text-[#475569] leading-relaxed mb-6">
                        I've verified both added domains in Twilio. Domains: pinkgorilla.agency & pinkgorillasoftware.com! I've sent a reply to the Twilio support team regarding ticket #25425379.
                      </p>
                      
                      <div className="flex items-center text-[13px] text-[#64748b]">
                        <div className="w-6 h-6 rounded-full bg-pink-500 mr-2 flex-shrink-0 border border-white"></div>
                        <span className="font-semibold text-[#0f172a] mr-2">Vikas</span>
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