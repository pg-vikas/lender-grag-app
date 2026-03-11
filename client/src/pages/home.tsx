import { useState } from "react";
import { 
  Users,
  BarChart2,
  HelpCircle,
  ArrowUpRight,
  User,
  Building2,
  Search,
  Activity,
  Zap,
  TrendingUp,
  ShieldAlert,
  Server
} from "lucide-react";
import { useLocation, Link } from "wouter";
import { Sidebar, Header } from "./clients";

export default function Home() {
  const [openMenus, setOpenMenus] = useState<string>('');
  const [location] = useLocation();

  const toggleMenu = (menu: string) => {
    setOpenMenus(prev => prev === menu ? '' : menu);
  };

  return (
    <div className="h-screen w-full overflow-hidden bg-[#0f172a] flex font-sans text-[#e2e8f0]">
      <Sidebar openMenus={openMenus} toggleMenu={toggleMenu} currentPath={location} />
      
      {/* Main Container */}
      <div className="flex-1 flex flex-col min-w-0 bg-[#0f172a] relative">
        {/* Subtle background glow effect */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[500px] bg-indigo-500/10 blur-[120px] rounded-full pointer-events-none z-0"></div>

        <Header title="Super Admin Dashboard" />

        {/* Main Layout */}
        <div className="flex flex-1 overflow-hidden relative z-10">
          {/* Main Content */}
          <main className="flex-1 overflow-y-auto p-6 lg:p-8 scrollbar-hide">
            <div className="max-w-7xl mx-auto">
              
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h1 className="text-3xl font-bold text-white tracking-tight mb-1">Command Center</h1>
                  <p className="text-slate-400 text-sm flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_rgba(52,211,153,0.8)]"></span>
                    System Online • All services operational
                  </p>
                </div>
                
                <div className="flex gap-3">
                  <button className="px-4 py-2 rounded-lg bg-slate-800/80 border border-slate-700 text-slate-300 text-sm font-medium hover:bg-slate-700/80 transition-colors">
                    Export Report
                  </button>
                  <button className="px-4 py-2 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-sm font-medium hover:from-indigo-400 hover:to-purple-500 shadow-[0_0_15px_rgba(99,102,241,0.3)] transition-all">
                    System Actions
                  </button>
                </div>
              </div>

              {/* Top Row - Major Metrics */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-6">
                {/* Platform Overview */}
                <Link href="/users" className="block group">
                  <div className="glass-panel rounded-2xl p-6 module-gradient-purple hover-lift border-t border-purple-500/20">
                    <div className="flex justify-between items-start mb-4">
                      <div className="p-2.5 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400 group-hover:bg-purple-500 group-hover:text-white transition-all shadow-[0_0_10px_rgba(168,85,247,0.1)]">
                        <Users className="w-5 h-5" />
                      </div>
                      <div className="flex items-center gap-1 text-emerald-400 text-xs font-bold bg-emerald-400/10 px-2 py-1 rounded-md">
                        <TrendingUp className="w-3 h-3" /> +12%
                      </div>
                    </div>
                    <div>
                      <div className="text-slate-400 text-sm font-medium mb-1">Total Users</div>
                      <div className="text-3xl font-bold text-white tracking-tight">12,482</div>
                    </div>
                  </div>
                </Link>

                {/* Active Clients */}
                <Link href="/clients" className="block group">
                  <div className="glass-panel rounded-2xl p-6 module-gradient-blue hover-lift border-t border-cyan-500/20">
                    <div className="flex justify-between items-start mb-4">
                      <div className="p-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 group-hover:bg-cyan-500 group-hover:text-white transition-all shadow-[0_0_10px_rgba(6,182,212,0.1)]">
                        <Building2 className="w-5 h-5" />
                      </div>
                      <div className="flex items-center gap-1 text-emerald-400 text-xs font-bold bg-emerald-400/10 px-2 py-1 rounded-md">
                        <TrendingUp className="w-3 h-3" /> +5%
                      </div>
                    </div>
                    <div>
                      <div className="text-slate-400 text-sm font-medium mb-1">Active Agencies</div>
                      <div className="text-3xl font-bold text-white tracking-tight">842</div>
                    </div>
                  </div>
                </Link>

                {/* Revenue */}
                <Link href="/payments" className="block group">
                  <div className="glass-panel rounded-2xl p-6 module-gradient-green hover-lift border-t border-emerald-500/20">
                    <div className="flex justify-between items-start mb-4">
                      <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 group-hover:bg-emerald-500 group-hover:text-white transition-all shadow-[0_0_10px_rgba(16,185,129,0.1)]">
                        <Activity className="w-5 h-5" />
                      </div>
                      <div className="flex items-center gap-1 text-emerald-400 text-xs font-bold bg-emerald-400/10 px-2 py-1 rounded-md">
                        <TrendingUp className="w-3 h-3" /> +18%
                      </div>
                    </div>
                    <div>
                      <div className="text-slate-400 text-sm font-medium mb-1">Monthly MRR</div>
                      <div className="text-3xl font-bold text-white tracking-tight">$142.5k</div>
                    </div>
                  </div>
                </Link>

                {/* System Health */}
                <Link href="/analytics" className="block group">
                  <div className="glass-panel rounded-2xl p-6 module-gradient-orange hover-lift border-t border-orange-500/20">
                    <div className="flex justify-between items-start mb-4">
                      <div className="p-2.5 rounded-xl bg-orange-500/10 border border-orange-500/20 text-orange-400 group-hover:bg-orange-500 group-hover:text-white transition-all shadow-[0_0_10px_rgba(249,115,22,0.1)]">
                        <Server className="w-5 h-5" />
                      </div>
                      <div className="flex items-center gap-1 text-slate-400 text-xs font-medium bg-slate-800 px-2 py-1 rounded-md">
                        Stable
                      </div>
                    </div>
                    <div>
                      <div className="text-slate-400 text-sm font-medium mb-1">API Requests/min</div>
                      <div className="text-3xl font-bold text-white tracking-tight">4,281</div>
                    </div>
                  </div>
                </Link>
              </div>

              {/* Middle Row - Charts & Activity */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
                
                {/* Main Chart Area */}
                <div className="lg:col-span-2 glass-panel rounded-2xl p-6 border-t border-indigo-500/20 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/5 blur-[80px] rounded-full"></div>
                  
                  <div className="flex justify-between items-center mb-8 relative z-10">
                    <div>
                      <h2 className="text-lg font-bold text-white">Platform Growth</h2>
                      <p className="text-sm text-slate-400">User acquisition & revenue over time</p>
                    </div>
                    <div className="flex gap-2">
                      <button className="px-3 py-1.5 rounded bg-indigo-500/20 text-indigo-300 text-xs font-bold border border-indigo-500/30">7D</button>
                      <button className="px-3 py-1.5 rounded bg-slate-800/80 text-slate-400 hover:text-[#e2e8f0] text-xs font-medium border border-slate-700">30D</button>
                      <button className="px-3 py-1.5 rounded bg-slate-800/80 text-slate-400 hover:text-[#e2e8f0] text-xs font-medium border border-slate-700">90D</button>
                    </div>
                  </div>
                  
                  {/* Mock Chart Visualization - using CSS to build a striking visual */}
                  <div className="h-64 flex items-end gap-2 relative z-10 pt-4">
                    {/* Y Axis */}
                    <div className="absolute left-0 top-0 bottom-0 flex flex-col justify-between text-xs text-slate-500 font-mono py-2 w-10">
                      <span>15k</span><span>10k</span><span>5k</span><span>0</span>
                    </div>
                    
                    {/* Grid Lines */}
                    <div className="absolute left-10 right-0 top-0 bottom-8 flex flex-col justify-between z-0">
                      <div className="w-full border-t border-slate-700/50"></div>
                      <div className="w-full border-t border-slate-700/50"></div>
                      <div className="w-full border-t border-slate-700/50"></div>
                      <div className="w-full border-t border-slate-800"></div>
                    </div>
                    
                    {/* Bars - Generated via map */}
                    <div className="ml-10 flex-1 flex items-end justify-between gap-1 sm:gap-2 h-[calc(100%-2rem)] z-10 relative group-hover:[&>div>div]:opacity-100">
                      {[40, 55, 45, 60, 75, 65, 80, 70, 85, 90, 80, 95, 85, 100].map((height, i) => (
                        <div key={i} className="flex-1 flex flex-col justify-end group/bar cursor-pointer relative h-full">
                          {/* Tooltip */}
                          <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-slate-800 border border-indigo-500/30 text-white text-xs py-1 px-2 rounded opacity-0 group-hover/bar:opacity-100 transition-opacity z-20 pointer-events-none whitespace-nowrap shadow-xl">
                            Val: {height * 100}
                          </div>
                          
                          {/* Bar with gradient and top glow */}
                          <div 
                            style={{ height: `${height}%` }} 
                            className="w-full bg-gradient-to-t from-indigo-900/50 to-indigo-500/80 rounded-t-sm relative transition-all duration-300 group-hover/bar:to-indigo-400 group-hover/bar:shadow-[0_0_15px_rgba(99,102,241,0.5)]"
                          >
                            <div className="absolute top-0 left-0 right-0 h-1 bg-indigo-300 rounded-t-sm opacity-50"></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* X Axis */}
                  <div className="flex justify-between text-xs text-slate-500 font-mono ml-10 mt-2 px-2">
                    <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span>
                  </div>
                </div>

                {/* System Activity Feed */}
                <div className="glass-panel rounded-2xl p-6 border-t border-rose-500/20 flex flex-col h-full">
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-lg font-bold text-white flex items-center gap-2">
                      <Zap className="w-5 h-5 text-rose-500" /> Live Events
                    </h2>
                    <span className="w-2 h-2 rounded-full bg-rose-500 animate-ping"></span>
                  </div>

                  <div className="flex-1 overflow-y-auto space-y-4 pr-2 scrollbar-hide relative">
                    <div className="absolute left-[15px] top-2 bottom-2 w-[2px] bg-slate-800"></div>
                    
                    {[
                      { type: 'alert', icon: ShieldAlert, color: 'text-rose-400', bg: 'bg-rose-500/10', border: 'border-rose-500/20', title: 'High CPU Usage', desc: 'Node cluster alpha-2', time: 'Just now' },
                      { type: 'signup', icon: Users, color: 'text-cyan-400', bg: 'bg-cyan-500/10', border: 'border-cyan-500/20', title: 'New Agency Signup', desc: 'Creative Digital LLC', time: '2m ago' },
                      { type: 'payment', icon: Activity, color: 'text-emerald-400', bg: 'bg-emerald-500/10', border: 'border-emerald-500/20', title: 'Plan Upgrade', desc: 'PG Software to Enterprise', time: '15m ago' },
                      { type: 'system', icon: Server, color: 'text-indigo-400', bg: 'bg-indigo-500/10', border: 'border-indigo-500/20', title: 'Database Backup', desc: 'Automated snapshot complete', time: '1h ago' },
                      { type: 'signup', icon: Users, color: 'text-cyan-400', bg: 'bg-cyan-500/10', border: 'border-cyan-500/20', title: 'New Agency Signup', desc: 'Marketing Pros Inc', time: '2h ago' },
                    ].map((event, i) => (
                      <div key={i} className="relative flex gap-4 group/event">
                        <div className={`relative z-10 w-8 h-8 rounded-full flex items-center justify-center shrink-0 border ${event.bg} ${event.color} ${event.border} shadow-[0_0_10px_rgba(0,0,0,0.2)] group-hover/event:scale-110 transition-transform`}>
                          <event.icon className="w-4 h-4" />
                        </div>
                        <div className="pt-1.5 flex-1 pb-2">
                          <div className="flex justify-between items-start">
                            <p className="text-sm font-bold text-[#e2e8f0]">{event.title}</p>
                            <span className="text-xs font-mono text-slate-500">{event.time}</span>
                          </div>
                          <p className="text-xs text-slate-400 mt-0.5">{event.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Row - Data Tables */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                
                {/* Active Support Issues */}
                <div className="glass-panel rounded-2xl overflow-hidden border-t border-fuchsia-500/20 flex flex-col">
                  <div className="p-6 border-b border-white/5 flex justify-between items-center bg-slate-900/50">
                    <h2 className="text-base font-bold text-white flex items-center gap-2">
                      <HelpCircle className="w-5 h-5 text-fuchsia-400" /> Urgent Support Tickets
                    </h2>
                    <Link href="/tickets" className="text-xs font-bold text-fuchsia-400 hover:text-fuchsia-300 transition-colors uppercase tracking-wider">
                      View All
                    </Link>
                  </div>
                  
                  <div className="overflow-x-auto">
                    <table className="w-full text-left dark-table">
                      <thead>
                        <tr>
                          <th className="py-3 px-6">ID</th>
                          <th className="py-3 px-6">Agency</th>
                          <th className="py-3 px-6">Issue</th>
                          <th className="py-3 px-6">Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          { id: '#T-4921', agency: 'Pink Gorilla', issue: 'API Webhook failing', status: 'Escalated', color: 'text-rose-400 bg-rose-400/10 border-rose-400/20' },
                          { id: '#T-4920', agency: 'Acme Digital', issue: 'Billing portal error', status: 'In Progress', color: 'text-amber-400 bg-amber-400/10 border-amber-400/20' },
                          { id: '#T-4915', agency: 'Creative LLC', issue: 'Custom domain setup', status: 'Waiting on Client', color: 'text-indigo-400 bg-indigo-400/10 border-indigo-400/20' },
                          { id: '#T-4908', agency: 'Global Tech', issue: 'White label config', status: 'In Progress', color: 'text-amber-400 bg-amber-400/10 border-amber-400/20' },
                        ].map((ticket, i) => (
                          <tr key={i} className="group cursor-pointer">
                            <td className="py-4 px-6 font-mono text-xs text-slate-400 group-hover:text-slate-300">{ticket.id}</td>
                            <td className="py-4 px-6 text-sm font-semibold text-white">{ticket.agency}</td>
                            <td className="py-4 px-6 text-sm text-slate-300">{ticket.issue}</td>
                            <td className="py-4 px-6">
                              <span className={`inline-flex items-center px-2.5 py-1 rounded text-xs font-bold border ${ticket.color}`}>
                                {ticket.status}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Latest Signups */}
                <div className="glass-panel rounded-2xl overflow-hidden border-t border-cyan-500/20 flex flex-col">
                  <div className="p-6 border-b border-white/5 flex justify-between items-center bg-slate-900/50">
                    <h2 className="text-base font-bold text-white flex items-center gap-2">
                      <User className="w-5 h-5 text-cyan-400" /> Recent Agency Signups
                    </h2>
                    <Link href="/clients" className="text-xs font-bold text-cyan-400 hover:text-cyan-300 transition-colors uppercase tracking-wider">
                      Directory
                    </Link>
                  </div>
                  
                  <div className="overflow-x-auto">
                    <table className="w-full text-left dark-table">
                      <thead>
                        <tr>
                          <th className="py-3 px-6">Agency Name</th>
                          <th className="py-3 px-6">Plan</th>
                          <th className="py-3 px-6">MRR</th>
                          <th className="py-3 px-6">Joined</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          { name: 'Nexus Digital', plan: 'Enterprise', mrr: '$499', joined: 'Today, 2:40 PM' },
                          { name: 'Studio Elevate', plan: 'Pro', mrr: '$199', joined: 'Today, 10:15 AM' },
                          { name: 'Blue Ocean Media', plan: 'Starter', mrr: '$99', joined: 'Yesterday' },
                          { name: 'Apex Marketing', plan: 'Enterprise', mrr: '$499', joined: 'Yesterday' },
                        ].map((agency, i) => (
                          <tr key={i} className="group cursor-pointer">
                            <td className="py-4 px-6">
                              <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-400 group-hover:bg-cyan-500/10 group-hover:text-cyan-400 group-hover:border-cyan-500/30 transition-colors">
                                  <Building2 className="w-4 h-4" />
                                </div>
                                <span className="text-sm font-semibold text-white">{agency.name}</span>
                              </div>
                            </td>
                            <td className="py-4 px-6 text-sm text-slate-300">
                              <span className={agency.plan === 'Enterprise' ? 'text-purple-400 font-semibold' : 'text-slate-300'}>
                                {agency.plan}
                              </span>
                            </td>
                            <td className="py-4 px-6 text-sm font-mono text-emerald-400">{agency.mrr}</td>
                            <td className="py-4 px-6 text-xs text-slate-500">{agency.joined}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

              </div>
              
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
