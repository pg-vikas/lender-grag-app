import { useState } from "react";
import { Button } from "@/components/ui/button";
import { 
  Menu, 
  Search, 
  Bell, 
  User,
  Users,
  BarChart2,
  HelpCircle,
  ArrowUpRight,
  ArrowRight,
  Home as HomeIcon,
  FolderOpen,
  DollarSign,
  FileText,
  MessageSquare,
  FileBarChart,
  Globe,
  ChevronDown,
  Building2
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
    <div className="h-screen w-full overflow-hidden bg-transparent flex font-sans text-[#1e293b]">
      <Sidebar openMenus={openMenus} toggleMenu={toggleMenu} currentPath={location} />
      {/* Main Container */}
      <div className="flex-1 flex flex-col min-w-0 bg-white ">
        <Header title="Home" />

        {/* Main Layout */}
        <div className="flex flex-1 overflow-hidden">
          {/* Main Content */}
          <main className="flex-1 overflow-y-auto p-6 lg:p-8 relative">
            <div className="max-w-7xl mx-auto">
              <h1 className="text-[#0f172a] mb-8 font-semibold text-[22px]">Home</h1>

              {/* Work Session */}
              <div className="bg-white p-6 mb-6 ">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-6">
                  {/* Left */}
                  <div className="flex flex-col">
                    <h2 className="text-xs font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#8b5cf6] to-[#4f46e5] uppercase tracking-widest mb-2">WORK SESSION</h2>
                    <div className="flex items-center text-[11px] font-medium text-[#64748b] bg-[#f1f5f9] px-2.5 py-1 rounded-full w-fit">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#94a3b8] mr-2"></span>
                      Stopped
                    </div>
                  </div>
                  
                  {/* Center */}
                  <div className="flex justify-center items-start">
                    <div className="text-3xl font-mono tracking-tight text-[#0f172a] font-medium">
                      00:00:00
                    </div>
                  </div>

                  {/* Right */}
                  <div className="flex flex-col gap-1.5 text-[11px] text-[#64748b] justify-center pt-1 md:flex-row md:gap-6">
                    <div>Current session: <span className="text-[#0f172a] font-bold font-mono text-xs">00:00:00</span></div>
                    <div>Breaks today: <span className="text-[#94a3b8] font-medium font-mono text-xs">00:00:00</span></div>
                  </div>
                </div>

                {/* Time Boxes */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">
                  <div className="border border-[#e2e8f0] rounded-[0.75rem] p-4 bg-[#f8fafc]/50 flex flex-col justify-center">
                    <div className="text-[10px] font-bold text-[#94a3b8] uppercase tracking-wider mb-1">CLOCK IN</div>
                    <div className="text-lg text-[#0f172a] font-medium">3:41:05 PM</div>
                    <div className="text-xs text-[#94a3b8]">03 Feb 2026</div>
                  </div>
                  <div className="border border-[#e2e8f0] rounded-[0.75rem] p-4 bg-[#f8fafc]/50 flex flex-col justify-center">
                    <div className="text-[10px] font-bold text-[#94a3b8] uppercase tracking-wider mb-1">CLOCK OUT</div>
                    <div className="text-lg text-[#0f172a] font-medium">12:01:03 PM</div>
                    <div className="text-xs text-[#94a3b8]">04 Feb 2026</div>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-2.5">
                  <Button className="bg-[#34d399] hover:bg-[#10b981] text-white font-bold text-xs tracking-wide px-5 py-2 h-8 rounded-[4px] shadow-sm border-none">
                    CLOCK IN
                  </Button>
                  <Button className="bg-[#fb7185] hover:bg-[#f43f5e] text-white font-bold text-xs tracking-wide px-5 py-2 h-8 rounded-[4px] shadow-sm border-none">
                    CLOCK OUT
                  </Button>
                </div>
              </div>

              {/* Stat Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                {[
                  { label: 'Clients', value: '14', icon: User, href: '/clients' },
                  { label: 'Projects', value: '28', icon: Users, href: '/projects' },
                  { label: 'Analytics', value: '0', icon: BarChart2, href: '/analytics' },
                  { label: 'Support Tickets', value: '4', icon: HelpCircle, href: '/tickets' },
                ].map((stat, i) => (
                  <Link key={i} href={stat.href} className="block group">
                    <div className="bg-white p-5  flex flex-col justify-between h-28 relative hover:border-[#8b5cf6] border border-transparent transition-colors cursor-pointer">
                      <div className="flex items-center space-x-3">
                        <div className="bg-[#f8fafc] p-1.5 rounded-full text-[#0f172a] group-hover:bg-[#f3e8ff] group-hover:text-[#8b5cf6] transition-colors">
                          <stat.icon className="w-4 h-4" strokeWidth={2.5} />
                        </div>
                        <span className="font-semibold text-[#0f172a] text-sm group-hover:text-[#8b5cf6] transition-colors">{stat.label}</span>
                      </div>
                      
                      <div className="mt-4">
                        <span className="text-[22px] font-bold text-[#0f172a]">{stat.value}</span>
                      </div>

                      <div className="absolute bottom-4 right-4">
                        <div className="w-6 h-6 rounded-full border border-[#e2e8f0] flex items-center justify-center text-[#94a3b8] group-hover:bg-[#8b5cf6] group-hover:border-[#8b5cf6] group-hover:text-white transition-all">
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>

              {/* Total Projects */}
              <div className="bg-white p-6  mb-6">
                <div className="flex justify-between items-center mb-5">
                  <h2 className="text-base text-[#0f172a] font-medium">Total Projects</h2>
                  <Link href="/projects" className="text-xs font-semibold text-[#64748b] bg-white border border-[#e2e8f0]/80 px-4 py-2 rounded-full hover:bg-white hover:shadow-sm transition-all flex items-center transition-colors">
                    View All Projects <ArrowRight className="w-3.5 h-3.5 ml-1" />
                  </Link>
                </div>
                
                <div className="rounded-[12px] overflow-hidden border border-[#e2e8f0] bg-white mt-4">
                  <table className="w-full text-[13px] text-left">
                    <thead className="bg-[#f8fafc]">
                      <tr className="border-b border-[#e2e8f0]">
                        <th className="py-4 px-6 font-bold text-[#475569]">Project Name</th>
                        <th className="py-4 px-6 font-bold text-[#475569]">Client</th>
                        <th className="py-4 px-6 font-bold text-[#475569]">Date</th>
                        <th className="py-4 px-6 font-bold text-[#475569]">Status</th>
                        <th className="py-4 px-6 font-bold text-[#475569]">Priority</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { name: 'Add new Status Colum', client: 'Pink Gorilla Softwar...', date: '29 Dec - 29 Dec, 2025', status: 'Completed', statusColor: 'text-[#10b981] border-[#10b981]', priority: 'Normal', priorityColor: 'text-[#38bdf8] border-[#38bdf8]' },
                        { name: 'SSL Failed on Generated Websites (but no...', client: 'Pink Gorilla Softwar...', date: '22 Dec - 29 Dec, 2025', status: 'Pending Approval', statusColor: 'text-[#f59e0b] border-[#f59e0b]', priority: 'Urgent', priorityColor: 'text-[#ef4444] border-[#ef4444]' },
                        { name: 'WIREFRAME DESIGN SUMMIT', client: 'PG Development', date: '02 Nov - 09 Nov, 2025', status: 'Completed', statusColor: 'text-[#10b981] border-[#10b981]', priority: 'Normal', priorityColor: 'text-[#38bdf8] border-[#38bdf8]' },
                        { name: 'Agreement function CRM', client: 'Pink Gorilla Softwar...', date: '15 Oct - 10 Mar, 2026', status: 'Not Started', statusColor: 'text-[#94a3b8] border-[#94a3b8]', priority: 'Low', priorityColor: 'text-[#94a3b8] border-[#94a3b8]' },
                        { name: 'Bug Assignee is not selected', client: 'Pink Gorilla Softwar...', date: '11 Oct - 30 Oct, 2025', status: 'Cancelled', statusColor: 'text-[#ef4444] border-[#ef4444]', priority: 'Normal', priorityColor: 'text-[#38bdf8] border-[#38bdf8]' },
                        { name: 'Dash Board - Pencil Frame HTML', client: 'Pink Gorilla Softwar...', date: '11 Oct - 30 Oct, 2025', status: 'Pending', statusColor: 'text-[#38bdf8] border-[#38bdf8]', priority: 'Normal', priorityColor: 'text-[#38bdf8] border-[#38bdf8]' },
                      ].map((project, i) => (
                        <tr key={i} className="border-b border-[#e2e8f0] last:border-0 bg-white">
                          <td className="py-4 px-6 font-semibold text-[#0f172a]">{project.name}</td>
                          <td className="py-4 px-6 text-[#64748b]">{project.client}</td>
                          <td className="py-4 px-6 text-[#64748b] whitespace-nowrap">{project.date}</td>
                          <td className="py-4 px-6">
                            <span className={`inline-flex items-center justify-center px-3 py-1 rounded-full text-[12px] font-medium border bg-white ${project.statusColor}`}>
                              {project.status}
                            </span>
                          </td>
                          <td className="py-4 px-6">
                            <span className={`inline-flex items-center justify-center px-3 py-1 rounded-full text-[12px] font-medium border bg-white ${project.priorityColor}`}>
                              {project.priority}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Bottom Row */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <div className="bg-white p-6  flex flex-col h-[350px]">
                  <div className="flex justify-between items-center mb-5">
                    <h2 className="text-base text-[#0f172a] font-medium">Clients</h2>
                    <Link href="/clients" className="text-xs font-semibold text-[#64748b] bg-white border border-[#e2e8f0]/80 px-4 py-2 rounded-full hover:bg-white hover:shadow-sm transition-all transition-colors">
                      View all
                    </Link>
                  </div>
                  
                  <div className="relative mb-4 shrink-0">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#94a3b8]" />
                    <input 
                      type="text" 
                      placeholder="Search" 
                      className="w-full pl-10 pr-4 py-2.5 bg-white border border-[#e2e8f0]/80 rounded-lg text-sm focus:outline-none focus:border-[#e2e8f0] transition-colors"
                    />
                  </div>

                  <div className="flex-1 overflow-y-auto space-y-1 pr-2 scrollbar-hide">
                    {[
                      'Test demo1',
                      'Demo test on CRM',
                      'Test Dev4 Starter',
                      'Sale 2 company',
                      'urban land solution',
                      "Angel's Gardening Services"
                    ].map((client, i) => (
                      <div key={i} className="flex items-center gap-3 p-2.5 hover:bg-[#f8fafc]/80 rounded-xl cursor-pointer transition-all hover:translate-x-1">
                        <div className="w-8 h-8 rounded-md bg-[#f1f5f9] flex items-center justify-center shrink-0">
                          <Building2 className="w-4 h-4 text-[#94a3b8]" />
                        </div>
                        <span className="text-sm font-medium text-[#475569]">{client}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="bg-white p-6  flex flex-col h-[350px]">
                  <div className="flex justify-between items-center mb-5 shrink-0">
                    <h2 className="text-base text-[#0f172a] font-medium">Support Tickets</h2>
                    <Link href="/tickets" className="text-xs font-semibold text-[#64748b] bg-white border border-[#e2e8f0]/80 px-4 py-2 rounded-full hover:bg-white hover:shadow-sm transition-all flex items-center transition-colors">
                      View All Tickets <ArrowRight className="w-3.5 h-3.5 ml-1" />
                    </Link>
                  </div>

                  <div className="flex-1 overflow-y-auto space-y-2 pr-2 scrollbar-hide">
                    {[
                      { id: 1, title: 'Test' },
                      { id: 2, title: 'Test on client side' },
                      { id: 3, title: 'Test ticket' },
                      { id: 4, title: 'Test' },
                      { id: 5, title: 'Demo' },
                    ].map((ticket) => (
                      <div key={ticket.id} className="flex items-center gap-4 p-3 border border-[#e2e8f0] rounded-lg hover:border-[#e2e8f0] transition-colors cursor-pointer">
                        <span className="text-sm font-bold text-[#0f172a] w-4">{ticket.id}</span>
                        <span className="text-sm font-medium text-[#475569]">{ticket.title}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </main>

          {/* Right Sidebar */}
          <aside className="w-[300px] bg-gradient-to-b from-[#f8fafc] to-[#e2e8f0] border-l border-[#e2e8f0] shadow-[-10px_0_30px_-15px_rgba(0,0,0,0.05)] overflow-y-auto hidden xl:block p-6">
            <h2 className="text-[#0f172a] mb-6 font-medium text-[18px]">Latest Activity</h2>
            
            <div className="relative">
              <div className="absolute left-[19px] top-4 bottom-0 w-px bg-[#e2e8f0]"></div>
              
              <div className="space-y-6">
                {[
                  { user: 'NK', action: 'event added client note', time: '5 days ago', type: 'avatar', img: 'https://i.pravatar.cc/150?u=1' },
                  { user: 'NK', action: 'event added client note', time: '5 days ago', type: 'avatar', img: 'https://i.pravatar.cc/150?u=2' },
                  { user: 'NK', action: 'event added client note', time: '1 week ago', type: 'avatar', img: 'https://i.pravatar.cc/150?u=3' },
                  { user: 'VS', action: 'event added client note', time: '1 week ago', type: 'avatar', img: 'https://i.pravatar.cc/150?u=4' },
                  { user: 'NK', action: 'event created launchpad', time: '1 week ago', type: 'avatar', img: 'https://i.pravatar.cc/150?u=5' },
                  { user: '', action: 'event created launchpad', time: '1 week ago', type: 'icon' },
                  { user: 'NK', action: 'event created launchpad', time: '1 week ago', type: 'avatar', img: 'https://i.pravatar.cc/150?u=6' },
                  { user: '', action: 'event created launchpad', time: '2 weeks ago', type: 'icon' },
                  { user: '', action: 'event created launchpad', time: '2 weeks ago', type: 'icon' },
                  { user: '', action: 'Opened a new support ticket', time: '2 weeks ago', type: 'icon' },
                  { user: '', action: 'Assigned a task to Neeraj', time: '2 weeks ago', type: 'icon' },
                  { user: '', action: 'Assigned a task to Jitander', time: '2 weeks ago', type: 'icon' },
                ].map((event, i) => (
                  <div key={i} className="relative flex items-start gap-4">
                    <div className="relative z-10 w-10 h-10 rounded-full bg-white border border-[#e2e8f0] flex items-center justify-center shrink-0 overflow-hidden">
                      {event.type === 'avatar' ? (
                        <img src={event.img} alt={event.user} className="w-full h-full object-cover" />
                      ) : (
                        <User className="w-5 h-5 text-[#94a3b8]" />
                      )}
                    </div>
                    <div className="pt-1">
                      <p className="text-sm font-medium text-[#0f172a] leading-tight">{event.action}</p>
                      <p className="text-xs text-[#94a3b8] mt-0.5">{event.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}