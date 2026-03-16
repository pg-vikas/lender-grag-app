import { useState } from "react";
import { useLocation } from "wouter";
import { Sidebar, Header } from "./clients";
import { TrendingUp, Users, Clock, CheckCircle, BarChart2, Calendar, Target, Award } from "lucide-react";

export default function PerformancePage() {
  const [openMenus, setOpenMenus] = useState<string>('reports');
  const [location] = useLocation();

  const toggleMenu = (menu: string) => {
    setOpenMenus(prev => prev === menu ? '' : menu);
  };

  const performanceMetrics = [
    { title: "Team Productivity", value: "94%", change: "+5.2%", icon: Users, color: "text-indigo-400", bg: "bg-indigo-500/10", border: "border-indigo-500/20" },
    { title: "On-Time Delivery", value: "88%", change: "+2.1%", icon: Clock, color: "text-emerald-400", bg: "bg-emerald-500/10", border: "border-emerald-500/20" },
    { title: "Task Completion Rate", value: "91%", change: "-1.4%", icon: CheckCircle, color: "text-cyan-400", bg: "bg-cyan-500/10", border: "border-cyan-500/20" },
    { title: "Client Satisfaction", value: "4.8/5", change: "+0.3", icon: Award, color: "text-fuchsia-400", bg: "bg-fuchsia-500/10", border: "border-fuchsia-500/20" }
  ];

  const teamMembers = [
    { name: "Vinayak Sharma", role: "Lead Developer", score: 98, projects: 12, hours: 164 },
    { name: "Maria Christina", role: "Project Manager", score: 95, projects: 15, hours: 152 },
    { name: "Chayan Alavi", role: "UI/UX Designer", score: 92, projects: 8, hours: 148 },
    { name: "Sarah Jenkins", role: "Frontend Dev", score: 89, projects: 10, hours: 160 }
  ];

  return (
    <div className="h-screen w-full overflow-hidden bg-transparent flex font-sans text-[#e2e8f0]">
      <Sidebar openMenus={openMenus} toggleMenu={toggleMenu} currentPath={location} />
      
      <div className="flex-1 flex flex-col min-w-0 bg-[#0f172a] relative">
        <Header title="Performance Report" />

        <main className="flex-1 overflow-y-auto p-6 lg:p-8 scrollbar-hide">
          <div className="max-w-7xl mx-auto space-y-6">
            
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-2">
              <div>
                <h1 className="text-3xl font-bold text-white tracking-tight mb-1">Performance Report</h1>
                <p className="text-slate-400 text-sm">Monitor team and organizational performance metrics</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-slate-900/80 border border-slate-700 rounded-xl px-4 py-2 flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-slate-400" />
                  <span className="text-sm font-medium">Last 30 Days</span>
                </div>
                <button className="bg-orange-500 hover:bg-orange-400 text-slate-900 font-bold px-6 py-2 rounded-xl shadow-[0_0_15px_rgba(249,115,22,0.3)] hover:shadow-[0_0_20px_rgba(249,115,22,0.5)] transition-all flex items-center gap-2 border-none">
                  <BarChart2 className="w-4 h-4" /> Export Report
                </button>
              </div>
            </div>

            {/* Top Metrics Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {performanceMetrics.map((metric, index) => (
                <div key={index} className="glass-panel p-5 rounded-2xl relative overflow-hidden group">
                  <div className="flex justify-between items-start mb-4">
                    <div className={`p-3 rounded-xl ${metric.bg} border ${metric.border}`}>
                      <metric.icon className={`w-5 h-5 ${metric.color}`} />
                    </div>
                    <span className={`text-xs font-bold px-2 py-1 rounded-md ${
                      metric.change.startsWith('+') ? 'bg-emerald-500/10 text-emerald-400' : 'bg-rose-500/10 text-rose-400'
                    }`}>
                      {metric.change}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-slate-400 text-sm font-medium mb-1">{metric.title}</h3>
                    <div className="text-2xl font-bold text-white">{metric.value}</div>
                  </div>
                  <div className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r from-transparent via-${metric.color.replace('text-', '')} to-transparent w-full opacity-0 group-hover:opacity-50 transition-opacity`}></div>
                </div>
              ))}
            </div>

            {/* Detailed Performance Sections */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              
              {/* Individual Performance Table */}
              <div className="lg:col-span-2 glass-panel p-6 rounded-2xl border-t border-orange-500/20">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-lg font-bold text-white flex items-center gap-2">
                    <Target className="w-5 h-5 text-orange-400" /> Team Performance
                  </h2>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-left dark-table">
                    <thead>
                      <tr>
                        <th className="py-3 px-4 text-xs font-semibold text-slate-400 uppercase tracking-wider">Member</th>
                        <th className="py-3 px-4 text-xs font-semibold text-slate-400 uppercase tracking-wider">Role</th>
                        <th className="py-3 px-4 text-xs font-semibold text-slate-400 uppercase tracking-wider text-center">Score</th>
                        <th className="py-3 px-4 text-xs font-semibold text-slate-400 uppercase tracking-wider text-center">Projects</th>
                        <th className="py-3 px-4 text-xs font-semibold text-slate-400 uppercase tracking-wider text-right">Hours Logged</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-800/50">
                      {teamMembers.map((member, i) => (
                        <tr key={i} className="hover:bg-slate-800/30 transition-colors">
                          <td className="py-4 px-4">
                            <div className="font-medium text-white">{member.name}</div>
                          </td>
                          <td className="py-4 px-4 text-sm text-slate-400">{member.role}</td>
                          <td className="py-4 px-4">
                            <div className="flex items-center justify-center gap-2">
                              <div className="w-16 h-2 bg-slate-800 rounded-full overflow-hidden">
                                <div className={`h-full ${member.score >= 95 ? 'bg-emerald-400' : member.score >= 90 ? 'bg-cyan-400' : 'bg-orange-400'}`} style={{ width: `${member.score}%` }}></div>
                              </div>
                              <span className="text-sm font-bold text-white">{member.score}</span>
                            </div>
                          </td>
                          <td className="py-4 px-4 text-center text-sm font-medium text-slate-300">{member.projects}</td>
                          <td className="py-4 px-4 text-right text-sm font-mono text-slate-400">{member.hours}h</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Goal Progress */}
              <div className="glass-panel p-6 rounded-2xl border-t border-orange-500/20">
                <h2 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-orange-400" /> OKRs Progress
                </h2>
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-slate-300">Q3 Revenue Target</span>
                      <span className="text-xs font-bold text-emerald-400">85%</span>
                    </div>
                    <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                      <div className="h-full bg-emerald-500 w-[85%] shadow-[0_0_10px_rgba(16,185,129,0.5)]"></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-slate-300">Client Retention</span>
                      <span className="text-xs font-bold text-indigo-400">92%</span>
                    </div>
                    <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                      <div className="h-full bg-indigo-500 w-[92%] shadow-[0_0_10px_rgba(99,102,241,0.5)]"></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-slate-300">New Feature Launches</span>
                      <span className="text-xs font-bold text-orange-400">60%</span>
                    </div>
                    <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                      <div className="h-full bg-orange-500 w-[60%] shadow-[0_0_10px_rgba(249,115,22,0.5)]"></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-slate-300">Support Response Time</span>
                      <span className="text-xs font-bold text-fuchsia-400">78%</span>
                    </div>
                    <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                      <div className="h-full bg-fuchsia-500 w-[78%] shadow-[0_0_10px_rgba(217,70,239,0.5)]"></div>
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