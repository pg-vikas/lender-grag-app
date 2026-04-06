import { useState, useEffect } from "react";
import { 
  Users, BarChart2, HelpCircle, ArrowUpRight, User, Building2, Search, 
  Activity, Zap, TrendingUp, ShieldAlert, Server, Briefcase, ArrowRight, 
  FileText, CheckSquare, Star, Calculator, Plus, MessageSquare, Quote,
  DollarSign, Percent
} from "lucide-react";
import { useLocation, Link } from "wouter";
import { Sidebar, Header } from "./clients";
import { WorkSession } from "../components/WorkSession";

export default function Home() {
  const [openMenus, setOpenMenus] = useState<string>('');
  const [location] = useLocation();
  const [timeRange, setTimeRange] = useState<'7D' | '30D' | '90D'>('30D');
  const [greeting, setGreeting] = useState('');
  
  // Calculator State
  const [calcClients, setCalcClients] = useState(15);
  const [calcRetainer, setCalcRetainer] = useState(2500);

  useEffect(() => {
    const hour = new Date().getHours();
    if (hour < 12) setGreeting('Good morning');
    else if (hour < 18) setGreeting('Good afternoon');
    else setGreeting('Good evening');
  }, []);

  const toggleMenu = (menu: string) => {
    setOpenMenus(prev => prev === menu ? '' : menu);
  };

  const chartData = {
    '7D': [50, 65, 55, 70, 85, 75, 90],
    '30D': [40, 55, 45, 60, 75, 65, 80, 70, 85, 90, 80, 95, 85, 100],
    '90D': [30, 45, 35, 50, 65, 55, 70, 60, 75, 80, 70, 85, 75, 90, 80, 95, 85, 100, 95, 100, 90]
  };

  const chartLabels = {
    '7D': ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    '30D': ['W1', 'W2', 'W3', 'W4'],
    '90D': ['M1', 'M2', 'M3']
  };

  return (
    <div className="h-screen w-full overflow-hidden bg-[#0f172a] flex font-sans text-[#e2e8f0]">
      <Sidebar openMenus={openMenus} toggleMenu={toggleMenu} currentPath={location} />
      
      {/* Main Container */}
      <div className="flex-1 flex flex-col min-w-0 bg-[#0f172a] relative">
        {/* Subtle background glow effect */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-[600px] bg-indigo-500/10 blur-[150px] rounded-full pointer-events-none z-0"></div>
        <div className="absolute bottom-0 right-0 w-[800px] h-[600px] bg-fuchsia-500/5 blur-[120px] rounded-full pointer-events-none z-0"></div>

        <Header title="Super Admin Dashboard" />

        {/* Main Layout */}
        <div className="flex flex-1 overflow-hidden relative z-10">
          <main className="flex-1 overflow-y-auto p-6 lg:p-8 custom-scrollbar">
            <div className="max-w-7xl mx-auto space-y-8">
              
              {/* HERO SECTION */}
              <div className="relative overflow-hidden rounded-3xl bg-slate-900/80 border border-slate-600 bg-slate-950/50 backdrop-blur-xl shadow-2xl p-8 md:p-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-indigo-500/10 to-transparent pointer-events-none"></div>
                <div className="absolute -top-24 -right-24 w-96 h-96 bg-purple-500/20 blur-[80px] rounded-full pointer-events-none"></div>
                
                <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-8">
                  <div className="max-w-2xl">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-6">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                      System Operational
                    </div>
                    <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
                      {greeting}, <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-fuchsia-400">Admin</span>.
                    </h1>
                    <p className="text-slate-400 text-lg leading-relaxed mb-8 max-w-xl">
                      Here's what's happening across Gorilla Hub today. Revenue is up <span className="text-emerald-400 font-bold">18%</span> this month, and 12 new agencies joined in the last 48 hours.
                    </p>
                    
                    <div className="flex flex-wrap items-center gap-4">
                      <button className="px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold transition-all shadow-[0_0_20px_rgba(79,70,229,0.4)] hover:shadow-[0_0_30px_rgba(79,70,229,0.6)] flex items-center gap-2 group">
                        <Plus className="w-5 h-5" />
                        Create Launchpad
                        <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                      </button>
                      <button className="px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold transition-all border border-slate-600 bg-slate-950 hover:border-slate-500 flex items-center gap-2">
                        <User className="w-5 h-5 text-slate-400" />
                        Invite Client
                      </button>
                    </div>
                  </div>
                  
                  <div className="hidden md:block">
                    <WorkSession />
                  </div>
                </div>
              </div>

              {/* TOP METRICS ROW */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { title: 'Total Users', value: '12,482', trend: '+12%', up: true, icon: Users, color: 'purple' },
                  { title: 'Active Clients', value: '842', trend: '+5%', up: true, icon: Building2, color: 'cyan' },
                  { title: 'Monthly MRR', value: '$142.5k', trend: '+18%', up: true, icon: Activity, color: 'emerald' },
                  { title: 'API Requests/min', value: '4,281', trend: 'Stable', up: true, icon: Server, color: 'orange' }
                ].map((metric, i) => (
                  <div 
                    key={i} 
                    className={`bg-slate-900/60 backdrop-blur-xl rounded-2xl p-6 border border-slate-600 bg-slate-950/50 hover:border-slate-500 transition-all hover:-translate-y-1 shadow-lg group animate-in fade-in slide-in-from-bottom-4`}
                    style={{ animationDelay: `\${(i + 1) * 100}ms` }}
                  >
                    <div className="flex justify-between items-start mb-6">
                      <div className={`p-3 rounded-xl bg-${metric.color}-500/10 border border-${metric.color}-500/20 text-${metric.color}-400 group-hover:bg-${metric.color}-500 group-hover:text-white transition-colors`}>
                        <metric.icon className="w-5 h-5" />
                      </div>
                      <div className={`flex items-center gap-1 text-xs font-bold px-2.5 py-1 rounded-md ${metric.trend === 'Stable' ? 'bg-slate-800 text-slate-300' : 'bg-emerald-500/10 text-emerald-400'}`}>
                        {metric.trend !== 'Stable' && <TrendingUp className="w-3 h-3" />} {metric.trend}
                      </div>
                    </div>
                    <div>
                      <div className="text-slate-400 text-sm font-bold uppercase tracking-wider mb-1">{metric.title}</div>
                      <div className="text-3xl font-extrabold text-white tracking-tight">{metric.value}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* MIDDLE ROW: CHART & CALCULATOR */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                
                {/* Main Chart */}
                <div className="lg:col-span-2 bg-slate-900/60 backdrop-blur-xl rounded-2xl p-6 lg:p-8 border border-slate-600 bg-slate-950/50 shadow-lg relative overflow-hidden group animate-in fade-in slide-in-from-bottom-4 delay-500 border-t-indigo-500 border-t-4">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/5 blur-[80px] rounded-full"></div>
                  
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 relative z-10">
                    <div>
                      <h2 className="text-xl font-bold text-white mb-1">Platform Revenue Growth</h2>
                      <p className="text-sm text-slate-400">MRR trajectory across all agency tiers</p>
                    </div>
                    <div className="flex bg-slate-800/80 p-1 rounded-lg border border-slate-600 bg-slate-950/50">
                      {['7D', '30D', '90D'].map((range) => (
                        <button 
                          key={range}
                          onClick={() => setTimeRange(range as any)}
                          className={`px-4 py-1.5 rounded-md text-xs font-bold transition-all ${
                            timeRange === range 
                              ? 'bg-indigo-600 text-white shadow-md' 
                              : 'text-slate-400 hover:text-white hover:bg-slate-700'
                          }`}
                        >
                          {range}
                        </button>
                      ))}
                    </div>
                  </div>
                  
                  {/* CSS Chart Visualization */}
                  <div className="h-72 flex items-end gap-2 relative z-10 pt-4 mt-4">
                    {/* Y Axis */}
                    <div className="absolute left-0 top-0 bottom-0 flex flex-col justify-between text-xs text-slate-500 font-mono py-2 w-12 border-r border-slate-800">
                      <span>$150k</span><span>$100k</span><span>$50k</span><span>$0</span>
                    </div>
                    
                    {/* Grid Lines */}
                    <div className="absolute left-14 right-0 top-0 bottom-8 flex flex-col justify-between z-0">
                      <div className="w-full border-t border-slate-800/80"></div>
                      <div className="w-full border-t border-slate-800/80"></div>
                      <div className="w-full border-t border-slate-800/80"></div>
                      <div className="w-full border-t border-slate-600 bg-slate-950"></div>
                    </div>
                    
                    {/* Bars */}
                    <div className="ml-14 flex-1 flex items-end justify-between gap-1 sm:gap-3 h-[calc(100%-2rem)] z-10 relative group-hover:[&>div>div]:opacity-100">
                      {chartData[timeRange].map((height, i) => (
                        <div key={i} className="flex-1 flex flex-col justify-end group/bar cursor-pointer relative h-full">
                          {/* Tooltip */}
                          <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-slate-800 border border-slate-600 bg-slate-950 text-white text-xs py-1.5 px-3 rounded-lg opacity-0 group-hover/bar:opacity-100 transition-opacity z-20 pointer-events-none whitespace-nowrap shadow-xl flex items-center gap-1.5 font-bold">
                            <span className="w-1.5 h-1.5 rounded-full bg-indigo-400"></span>
                            ${(height * 1.5).toFixed(1)}k
                          </div>
                          
                          {/* Bar */}
                          <div 
                            style={{ height: `${height}%` }} 
                            className="w-full bg-gradient-to-t from-indigo-900/40 to-indigo-500/70 rounded-t-md relative transition-all duration-500 group-hover/bar:to-indigo-400 group-hover/bar:from-indigo-600/50"
                          >
                            <div className="absolute top-0 left-0 right-0 h-1.5 bg-indigo-300 rounded-t-md opacity-70 group-hover/bar:bg-white"></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* X Axis */}
                  <div className="flex justify-between text-[11px] text-slate-500 font-mono ml-14 mt-3 px-2 uppercase tracking-widest">
                    {chartLabels[timeRange].map((label, i) => (
                      <span key={i}>{label}</span>
                    ))}
                  </div>
                </div>

                {/* ROI / Revenue Calculator Widget */}
                <div className="bg-slate-900/60 backdrop-blur-xl rounded-2xl border border-slate-600 bg-slate-950/50 shadow-lg flex flex-col animate-in fade-in slide-in-from-bottom-4 delay-700 border-t-emerald-500 border-t-4 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 blur-[50px] rounded-full"></div>
                  
                  <div className="p-6 border-b border-slate-800/80">
                    <h2 className="text-lg font-bold text-white flex items-center gap-2 mb-1">
                      <Calculator className="w-5 h-5 text-emerald-400" /> Revenue Projection
                    </h2>
                    <p className="text-xs text-slate-400">Forecast MRR based on client growth</p>
                  </div>
                  
                  <div className="p-6 flex-1 flex flex-col justify-between space-y-6">
                    <div className="space-y-5">
                      <div>
                        <div className="flex justify-between items-end mb-2">
                          <label className="text-[13px] font-bold text-slate-300">New Clients / Month</label>
                          <span className="text-[15px] font-bold text-white bg-slate-800 px-2 py-0.5 rounded">{calcClients}</span>
                        </div>
                        <input 
                          type="range" 
                          min="1" 
                          max="100" 
                          value={calcClients}
                          onChange={(e) => setCalcClients(parseInt(e.target.value))}
                          className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-500"
                        />
                      </div>
                      
                      <div>
                        <div className="flex justify-between items-end mb-2">
                          <label className="text-[13px] font-bold text-slate-300">Average Retainer</label>
                          <span className="text-[15px] font-bold text-white bg-slate-800 px-2 py-0.5 rounded">${calcRetainer.toLocaleString()}</span>
                        </div>
                        <input 
                          type="range" 
                          min="500" 
                          max="10000" 
                          step="100"
                          value={calcRetainer}
                          onChange={(e) => setCalcRetainer(parseInt(e.target.value))}
                          className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-emerald-500"
                        />
                      </div>
                    </div>
                    
                    <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-600 bg-slate-950/50 rounded-xl p-5 relative overflow-hidden group">
                      <div className="absolute inset-0 bg-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1">Projected Added MRR</div>
                      <div className="text-3xl font-extrabold text-emerald-400 tracking-tight mb-4">
                        ${(calcClients * calcRetainer).toLocaleString()}
                        <span className="text-sm text-slate-500 font-normal">/mo</span>
                      </div>
                      
                      <div className="flex justify-between items-center pt-4 border-t border-slate-600 bg-slate-950/50">
                        <div className="text-[11px] font-bold text-slate-400 uppercase">Annual Impact</div>
                        <div className="text-sm font-bold text-white">
                          +${(calcClients * calcRetainer * 12).toLocaleString()}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* BOTTOM ROW: REVIEWS, FEEDBACK, TICKETS */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                
                {/* Client Reviews Widget */}
                <div className="glass-panel rounded-2xl border border-slate-600 bg-slate-950/50 shadow-lg flex flex-col animate-in fade-in slide-in-from-bottom-4 delay-1000 border-t-amber-500 border-t-4">
                  <div className="p-5 border-b border-slate-800/80 flex justify-between items-center bg-slate-900/30">
                    <h2 className="text-[15px] font-bold text-white flex items-center gap-2">
                      <MessageSquare className="w-4 h-4 text-amber-400" /> Client Feedback
                    </h2>
                    <span className="text-xs font-bold text-amber-400 bg-amber-400/10 px-2 py-0.5 rounded">4.9/5.0</span>
                  </div>
                  
                  <div className="p-5 space-y-4">
                    {[
                      { name: 'Sarah Jenkins', company: 'Nexus Digital', rating: 5, text: 'The new dashboard completely transformed how we manage projects.', time: '2h ago' },
                      { name: 'Marcus Cole', company: 'Blue Ocean', rating: 5, text: 'Incredible onboarding experience. Gorilla Hub is next level.', time: '5h ago' },
                      { name: 'Elena Rostova', company: 'Studio Elevate', rating: 4, text: 'Great templates, saved us hours of setup work this week.', time: '1d ago' }
                    ].map((review, i) => (
                      <div key={i} className="p-4 rounded-xl bg-slate-800/40 border border-slate-600 bg-slate-950/50 hover:bg-slate-800/60 transition-colors">
                        <div className="flex justify-between items-start mb-2">
                          <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center text-xs font-bold text-white border border-slate-600 bg-slate-950">
                              {review.name.charAt(0)}
                            </div>
                            <div>
                              <div className="text-[13px] font-bold text-white leading-none">{review.name}</div>
                              <div className="text-[11px] text-slate-400 mt-1">{review.company}</div>
                            </div>
                          </div>
                          <div className="flex gap-0.5">
                            {[...Array(5)].map((_, j) => (
                              <Star key={j} className={`w-3 h-3 ${j < review.rating ? 'text-amber-400 fill-amber-400' : 'text-slate-600'}`} />
                            ))}
                          </div>
                        </div>
                        <p className="text-[13px] text-slate-300 leading-relaxed italic relative">
                          <span className="text-slate-600 font-serif text-lg absolute -top-1 -left-1">"</span>
                          &nbsp;&nbsp;{review.text}
                        </p>
                      </div>
                    ))}
                    
                    <button className="w-full py-2.5 rounded-lg border border-slate-600 bg-slate-950 text-[13px] font-bold text-slate-300 hover:bg-slate-800 hover:text-white transition-colors mt-2">
                      View All Reviews
                    </button>
                  </div>
                </div>

                {/* Urgent Support Tickets */}
                <div className="lg:col-span-2 glass-panel rounded-2xl border border-slate-600 bg-slate-950/50 shadow-lg flex flex-col animate-in fade-in slide-in-from-bottom-4 delay-1000 border-t-rose-500 border-t-4">
                  <div className="p-5 border-b border-slate-800/80 flex justify-between items-center bg-slate-900/30">
                    <h2 className="text-[15px] font-bold text-white flex items-center gap-2">
                      <ShieldAlert className="w-4 h-4 text-rose-400" /> Attention Required
                    </h2>
                    <Link href="/tickets" className="text-xs font-bold text-slate-400 hover:text-white transition-colors">
                      View All Tickets <ArrowRight className="w-3 h-3 inline" />
                    </Link>
                  </div>
                  
                  <div className="p-0 overflow-x-auto">
                    <table className="w-full text-left">
                      <thead className="bg-slate-950 border-b border-slate-800">
                        <tr>
                          <th className="py-3 px-5 text-[11px] font-bold text-slate-400 uppercase tracking-wider">Ticket ID</th>
                          <th className="py-3 px-5 text-[11px] font-bold text-slate-400 uppercase tracking-wider">Client</th>
                          <th className="py-3 px-5 text-[11px] font-bold text-slate-400 uppercase tracking-wider">Issue Description</th>
                          <th className="py-3 px-5 text-[11px] font-bold text-slate-400 uppercase tracking-wider text-right">Status</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-800/50">
                        {[
                          { id: '#T-4921', rawId: '4921', agency: 'Pink Gorilla', agencyId: '1', issue: 'API Webhook failing on production', status: 'Escalated', color: 'text-rose-400 bg-rose-500/10 border-rose-500/20' },
                          { id: '#T-4920', rawId: '4920', agency: 'Acme Digital', agencyId: '2', issue: 'Billing portal error during checkout', status: 'In Progress', color: 'text-amber-400 bg-amber-500/10 border-amber-500/20' },
                          { id: '#T-4915', rawId: '4915', agency: 'Creative LLC', agencyId: '3', issue: 'Custom domain setup SSL pending', status: 'Waiting', color: 'text-indigo-400 bg-indigo-500/10 border-indigo-500/20' },
                          { id: '#T-4908', rawId: '4908', agency: 'Global Tech', agencyId: '4', issue: 'White label email configuration', status: 'In Progress', color: 'text-amber-400 bg-amber-500/10 border-amber-500/20' },
                          { id: '#T-4902', rawId: '4902', agency: 'Design Co', agencyId: '5', issue: 'Team member invites not sending', status: 'New', color: 'text-cyan-400 bg-cyan-500/10 border-cyan-500/20' },
                        ].map((ticket, i) => (
                          <tr key={i} className="hover:bg-slate-800/40 transition-colors group cursor-pointer">
                            <td className="py-3.5 px-5 font-mono text-[13px] text-slate-400 group-hover:text-white transition-colors">
                              {ticket.id}
                            </td>
                            <td className="py-3.5 px-5 text-[13px] font-bold text-white">
                              {ticket.agency}
                            </td>
                            <td className="py-3.5 px-5 text-[13px] text-slate-300 truncate max-w-[200px]">
                              {ticket.issue}
                            </td>
                            <td className="py-3.5 px-5 text-right">
                              <span className={`inline-flex items-center px-2 py-0.5 rounded text-[11px] font-bold border ${ticket.color}`}>
                                {ticket.status}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  
                  <div className="p-4 border-t border-slate-800/80 bg-slate-900/30">
                    <button className="w-full py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-lg text-[13px] font-bold transition-colors border border-slate-600 bg-slate-950 flex items-center justify-center gap-2">
                      <HelpCircle className="w-4 h-4 text-slate-400" /> Go to Support Desk
                    </button>
                  </div>
                </div>

              </div>
              
              {/* Extra spacing at bottom */}
              <div className="h-12"></div>
              
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
