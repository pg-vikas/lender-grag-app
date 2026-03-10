import { useState } from "react";
import { Search, Filter, Plus, ChevronDown, CheckCircle2, Clock, AlertCircle } from "lucide-react";
import { useLocation } from "wouter";
import { Sidebar, Header } from "./clients";

export default function TasksPage() {
  const [openMenus, setOpenMenus] = useState<string>('crm');
  const [location] = useLocation();

  const toggleMenu = (menu: string) => {
    setOpenMenus(prev => prev === menu ? '' : menu);
  };

  const tasksList = [
    { name: "Update website header", project: "Gorilla Hub", dueDate: "Today", priority: "High", status: "In Progress", assignee: "Neeraj K." },
    { name: "Client onboarding email", project: "Estate Landscape", dueDate: "Tomorrow", priority: "Medium", status: "To Do", assignee: "Vinayak S." },
    { name: "Monthly report generation", project: "Internal", dueDate: "Oct 15", priority: "Low", status: "Completed", assignee: "Maria C." },
    { name: "Fix mobile navigation bug", project: "Summit Cabinets", dueDate: "Oct 12", priority: "High", status: "In Progress", assignee: "Chayan A." },
    { name: "Setup Stripe integration", project: "Pink Gorilla", dueDate: "Oct 20", priority: "High", status: "To Do", assignee: "Neeraj K." },
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "High": return "text-red-600 bg-red-50 border-red-200";
      case "Medium": return "text-amber-600 bg-amber-50 border-amber-200";
      case "Low": return "text-blue-600 bg-blue-50 border-blue-200";
      default: return "text-gray-600 bg-gray-50 border-gray-200";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Completed": return <CheckCircle2 className="w-4 h-4 text-green-500" />;
      case "In Progress": return <Clock className="w-4 h-4 text-amber-500" />;
      case "To Do": return <AlertCircle className="w-4 h-4 text-gray-400" />;
      default: return null;
    }
  };

  return (
    <div className="min-h-screen bg-[#f3f4f8] flex font-sans text-[#1e293b]">
      <Sidebar openMenus={openMenus} toggleMenu={toggleMenu} currentPath={location} />

      <div className="flex-1 flex flex-col min-w-0">
        <Header title="Tasks" />

        <main className="flex-1 overflow-y-auto p-6 lg:p-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between mb-6">
              <h1 className="text-2xl font-bold text-[#0f172a]">Tasks</h1>
              <button className="flex items-center gap-2 px-4 py-2 bg-[#8b5cf6] hover:bg-[#7c3aed] text-white rounded-lg text-sm font-medium transition-colors shadow-sm">
                <Plus className="w-4 h-4" /> New Task
              </button>
            </div>

            <div className="bg-white rounded-[1rem] shadow-[0_2px_10px_rgba(0,0,0,0.02)] overflow-hidden border border-[#f1f5f9]">
              <div className="p-4 border-b border-[#f1f5f9] flex flex-col sm:flex-row gap-4 justify-between items-center bg-[#f8fafc]">
                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <div className="relative flex-1 sm:w-64">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#94a3b8]" />
                    <input 
                      type="text"
                      placeholder="Search tasks" 
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
                      <th className="py-4 px-6 font-semibold text-[#475569]">Task Name</th>
                      <th className="py-4 px-6 font-semibold text-[#475569]">Project</th>
                      <th className="py-4 px-6 font-semibold text-[#475569]">Due Date</th>
                      <th className="py-4 px-6 font-semibold text-[#475569]">Priority</th>
                      <th className="py-4 px-6 font-semibold text-[#475569]">Status</th>
                      <th className="py-4 px-6 font-semibold text-[#475569]">Assignee</th>
                      <th className="py-4 px-6 font-semibold text-[#475569]">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#f1f5f9]">
                    {tasksList.map((task, i) => (
                      <tr key={i} className="hover:bg-[#f8fafc]/50 transition-colors bg-white">
                        <td className="py-4 px-6 font-medium text-[#0f172a]">{task.name}</td>
                        <td className="py-4 px-6 text-[#64748b]">{task.project}</td>
                        <td className="py-4 px-6 text-[#475569]">{task.dueDate}</td>
                        <td className="py-4 px-6">
                          <span className={`inline-flex items-center justify-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${getPriorityColor(task.priority)}`}>
                            {task.priority}
                          </span>
                        </td>
                        <td className="py-4 px-6">
                          <div className="flex items-center gap-2 text-[#475569] font-medium">
                            {getStatusIcon(task.status)}
                            {task.status}
                          </div>
                        </td>
                        <td className="py-4 px-6">
                          <div className="flex items-center gap-2">
                            <div className="w-6 h-6 rounded-full bg-[#8b5cf6] text-white flex items-center justify-center text-xs font-bold">
                              {task.assignee.charAt(0)}
                            </div>
                            <span className="text-[#475569]">{task.assignee}</span>
                          </div>
                        </td>
                        <td className="py-4 px-6">
                           <button className="p-1.5 text-[#94a3b8] hover:text-[#0f172a] transition-colors border border-transparent hover:border-[#e2e8f0] rounded bg-transparent hover:bg-white">
                             <ChevronDown className="w-4 h-4" />
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
