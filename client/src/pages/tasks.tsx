import { useState } from "react";
import { Search, Pencil, Trash2 } from "lucide-react";
import { useLocation, useSearch } from "wouter";
import { Sidebar, Header } from "./clients";

const MOCK_TASKS = {
  today: [
    { id: 1, name: 'Call new lead', client: 'Alpha Corp', dueDateStr: 'Today, 2:00 PM', daysText: 'Due today', isOverdue: false },
    { id: 2, name: 'Send proposal', client: 'Omega Inc', dueDateStr: 'Today, 5:00 PM', daysText: 'Due today', isOverdue: false },
  ],
  overdue: [
    { id: 3, name: 'test 3', client: 'PG Development', dueDateStr: 'Dec 01, 2025', daysText: '105 days overdue', isOverdue: true },
    { id: 4, name: 'Follow Up', client: 'Juicy Whip', dueDateStr: 'Dec 04, 2025', daysText: '102 days overdue', isOverdue: true },
    { id: 5, name: 'Follow Up', client: 'PG Development', dueDateStr: 'Dec 05, 2025', daysText: '101 days overdue', isOverdue: true },
    { id: 6, name: 'Test Task', client: 'Juicy Whip', dueDateStr: 'Dec 05, 2025', daysText: '101 days overdue', isOverdue: true },
    { id: 7, name: 'Follow Up', client: 'Juicy Whip', dueDateStr: 'Dec 06, 2025', daysText: '100 days overdue', isOverdue: true },
  ],
  future: [
    { id: 8, name: 'Quarterly Review', client: 'Beta LLC', dueDateStr: 'Next Week', daysText: '7 days from now', isOverdue: false },
    { id: 11, name: 'Check-in Meeting', client: 'Delta Co', dueDateStr: 'In 2 Weeks', daysText: '14 days from now', isOverdue: false },
  ],
  completed: [
    { id: 9, name: 'Initial setup', client: 'Gamma Group', dueDateStr: 'Last Week', daysText: 'Completed on time', isOverdue: false, isCompleted: true },
  ],
  missing: [
    { id: 10, name: 'Upload Logo', client: 'Delta Co', dueDateStr: 'No date set', daysText: 'Action required', isOverdue: true },
    { id: 12, name: 'Sign Agreement', client: 'Zeta Corp', dueDateStr: 'No date set', daysText: 'Action required', isOverdue: true },
  ]
};

export default function TasksPage() {
  const [openMenus, setOpenMenus] = useState<string>('crm');
  const [location, setLocation] = useLocation();
  const searchString = useSearch();

  const searchParams = new URLSearchParams(searchString || window.location.search);
  const currentTab = searchParams.get('tab') || 'today';

  const handleTabClick = (tab: string) => {
    setLocation(`/tasks?tab=${tab}`);
  };

  const toggleMenu = (menu: string) => {
    setOpenMenus(prev => prev === menu ? '' : menu);
  };

  const tasks = MOCK_TASKS[currentTab as keyof typeof MOCK_TASKS] || [];

  return (
    <div className="h-screen w-full overflow-hidden bg-transparent flex font-sans text-[#e2e8f0]">
      <Sidebar openMenus={openMenus} toggleMenu={toggleMenu} currentPath={location} />

      <div className="flex-1 flex flex-col min-w-0 bg-[#0f172a] relative">
        <Header title="Tasks" />

        <main className="flex-1 overflow-y-auto p-6 lg:p-8 relative">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-[22px] font-semibold text-white mb-6">Client Tasks Overview</h1>

            <div className="glass-panel rounded-2xl border-t border-indigo-500/20 p-6 mb-6 border border-white/10">
              <div className="flex flex-col md:flex-row gap-6 items-end">
                <div className="flex-1 w-full max-w-[320px]">
                  <label className="block text-[13px] text-slate-400 mb-2 font-medium">Client</label>
                  <input 
                    type="text" 
                    className="w-full h-[40px] px-3 bg-slate-900/50 border border-slate-700 rounded-md focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/50 text-sm text-white" 
                  />
                </div>
                <div className="flex-1 w-full max-w-[320px]">
                  <label className="block text-[13px] text-slate-400 mb-2 font-medium">Status</label>
                  <input 
                    type="text" 
                    className="w-full h-[40px] px-3 bg-slate-900/50 border border-slate-700 rounded-md focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/50 text-sm text-white" 
                  />
                </div>
                <div className="flex items-center gap-4">
                  <button className="h-[40px] px-6 bg-indigo-500 hover:bg-indigo-400 text-white rounded-md flex items-center justify-center gap-1.5 text-sm font-medium transition-colors">
                    <Search className="w-4 h-4" /> Filter
                  </button>
                  <button className="text-sm font-medium text-slate-300 hover:text-white transition-colors">
                    Reset
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-slate-900/40 backdrop-blur-xl min-h-[400px] rounded-lg border border-white/10 overflow-hidden">
              <div className="p-6 overflow-x-auto border-b border-white/10">
                <div className="flex gap-3 min-w-max">
                  <button 
                    onClick={() => handleTabClick('today')}
                    className={`px-4 py-2 rounded-md text-[13px] font-medium transition-all ${currentTab === 'today' ? 'bg-indigo-500 text-white shadow-[0_0_15px_rgba(99,102,241,0.4)]' : 'bg-slate-900/40 backdrop-blur-xl/50 text-slate-300 hover:bg-slate-800'}`}
                  >
                    Today's Tasks ({MOCK_TASKS.today.length})
                  </button>
                  <button 
                    onClick={() => handleTabClick('overdue')}
                    className={`px-4 py-2 rounded-md text-[13px] font-medium transition-all ${currentTab === 'overdue' ? 'bg-indigo-500 text-white shadow-[0_0_15px_rgba(99,102,241,0.4)]' : 'bg-slate-900/40 backdrop-blur-xl/50 text-slate-300 hover:bg-slate-800'}`}
                  >
                    Overdue Tasks ({MOCK_TASKS.overdue.length})
                  </button>
                  <button 
                    onClick={() => handleTabClick('future')}
                    className={`px-4 py-2 rounded-md text-[13px] font-medium transition-all ${currentTab === 'future' ? 'bg-indigo-500 text-white shadow-[0_0_15px_rgba(99,102,241,0.4)]' : 'bg-slate-900/40 backdrop-blur-xl/50 text-slate-300 hover:bg-slate-800'}`}
                  >
                    Future Tasks ({MOCK_TASKS.future.length})
                  </button>
                  <button 
                    onClick={() => handleTabClick('completed')}
                    className={`px-4 py-2 rounded-md text-[13px] font-medium transition-all ${currentTab === 'completed' ? 'bg-indigo-500 text-white shadow-[0_0_15px_rgba(99,102,241,0.4)]' : 'bg-slate-900/40 backdrop-blur-xl/50 text-slate-300 hover:bg-slate-800'}`}
                  >
                    Completed Tasks ({MOCK_TASKS.completed.length})
                  </button>
                  <button 
                    onClick={() => handleTabClick('missing')}
                    className={`px-4 py-2 rounded-md text-[13px] font-medium transition-all ${currentTab === 'missing' ? 'bg-indigo-500 text-white shadow-[0_0_15px_rgba(99,102,241,0.4)]' : 'bg-slate-900/40 backdrop-blur-xl/50 text-slate-300 hover:bg-slate-800'}`}
                  >
                    Clients Missing Task ({MOCK_TASKS.missing.length})
                  </button>
                </div>
              </div>
              
              {tasks.length > 0 ? (
                <div className="w-full">
                  <div className="overflow-x-auto">
                    <table className="w-full text-left">
                      <thead>
                        <tr className="bg-slate-800/30 border-b border-white/10">
                          <th className="py-4 px-6 w-12 font-medium text-sm text-slate-300"></th>
                          <th className="py-4 px-6 font-medium text-sm text-slate-300">Task</th>
                          <th className="py-4 px-6 font-medium text-sm text-slate-300">Client</th>
                          <th className="py-4 px-6 font-medium text-sm text-slate-300">Due Date</th>
                          <th className="py-4 px-6 font-medium text-sm text-slate-300 w-24">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {tasks.map(task => (
                          <tr key={task.id} className="group border-b border-white/5 last:border-0 hover:bg-white/[0.02] transition-colors">
                            <td className="py-4 px-6">
                              <input 
                                type="checkbox" 
                                className="w-4 h-4 rounded border-slate-700 bg-slate-800/50 checked:bg-indigo-500 checked:border-indigo-500 focus:ring-indigo-500/50 focus:ring-offset-slate-900 transition-all cursor-pointer" 
                                defaultChecked={task.isCompleted} 
                              />
                            </td>
                            <td className="py-4 px-6">
                              <span className="text-sm font-semibold text-white">{task.name}</span>
                            </td>
                            <td className="py-4 px-6">
                              <span className="text-sm text-indigo-400 hover:text-indigo-300 cursor-pointer transition-colors">{task.client}</span>
                            </td>
                            <td className="py-4 px-6">
                              <div className="flex flex-col gap-0.5">
                                <span className={`text-sm font-medium ${task.isOverdue ? 'text-rose-400' : 'text-slate-300'}`}>{task.dueDateStr}</span>
                                <span className={`text-xs ${task.isOverdue ? 'text-rose-400/70' : 'text-slate-500'}`}>({task.daysText})</span>
                              </div>
                            </td>
                            <td className="py-4 px-6">
                              <div className="flex items-center gap-3">
                                <button className="text-slate-400 hover:text-indigo-400 transition-colors">
                                  <Pencil className="w-4 h-4" />
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
                  
                  <div className="p-6 flex justify-center border-t border-white/10">
                    <button className="px-6 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-full text-sm font-medium transition-colors border border-slate-700">
                      show more
                    </button>
                  </div>
                </div>
              ) : (
                <div className="py-24 flex items-center justify-center">
                  <p className="text-slate-500 text-[14px]">No tasks found</p>
                </div>
              )}
            </div>

          </div>
        </main>
      </div>
    </div>
  );
}
