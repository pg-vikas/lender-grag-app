import { useState } from "react";
import { Search, Filter, Plus, Users as UsersIcon, Shield, Mail, Edit, X } from "lucide-react";
import { useLocation } from "wouter";
import { Sidebar, Header } from "./clients";

export default function UsersPage() {
  const [openMenus, setOpenMenus] = useState<string>('');
  const [selectedUser, setSelectedUser] = useState<any>(null);
  const [location] = useLocation();
  const [searchQuery, setSearchQuery] = useState('');
  const [appliedSearchQuery, setAppliedSearchQuery] = useState('');

  const handleSearch = () => {
    setAppliedSearchQuery(searchQuery);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  const handleReset = () => {
    setSearchQuery('');
    setAppliedSearchQuery('');
  };

  const toggleMenu = (menu: string) => {
    setOpenMenus(prev => prev === menu ? '' : menu);
  };

  const usersList = [
    { name: "Neeraj Kumar", email: "neeraj@pinkgorilla.com", role: "Administrator", status: "Active", lastLogin: "Just now", phone: "+1 555 123 4567", dateAdded: "15-08-2025" },
    { name: "Vinayak Sharma", email: "vinayak@pinkgorilla.com", role: "Manager", status: "Active", lastLogin: "2 hours ago", phone: "---", dateAdded: "20-09-2025" },
    { name: "Maria Christina", email: "maria@pinkgorilla.com", role: "Support Agent", status: "Active", lastLogin: "Yesterday", phone: "+1 555 987 6543", dateAdded: "10-10-2025" },
    { name: "Chayan Alavi", email: "chayan@pinkgorilla.com", role: "Developer", status: "Offline", lastLogin: "3 days ago", phone: "---", dateAdded: "05-11-2025" },
  ];

  const filteredUsers = usersList.filter(user => {
    const matchesSearch = !appliedSearchQuery || 
      user.name.toLowerCase().includes(appliedSearchQuery.toLowerCase()) ||
      user.email.toLowerCase().includes(appliedSearchQuery.toLowerCase()) ||
      user.role.toLowerCase().includes(appliedSearchQuery.toLowerCase());
    return matchesSearch;
  });

  return (
    <div className="h-screen w-full overflow-hidden bg-transparent flex font-sans text-[#e2e8f0]">
      <Sidebar openMenus={openMenus} toggleMenu={toggleMenu} currentPath={location} />
      <div className="flex-1 flex flex-col min-w-0 bg-[#0f172a] relative">
        <Header title="Users" />

        <main className="flex-1 overflow-y-auto p-6 lg:p-8 relative">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between mb-6">
              <h1 className="text-[22px] text-white font-semibold">User Management</h1>
              <button className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] hover:from-[#4f46e5] hover:to-[#7c3aed] text-white rounded-xl text-sm font-medium transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5">
                <Plus className="w-4 h-4" /> Add User
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div className="glass-panel rounded-2xl border-t border-indigo-500/20 p-6  border border-white/10 flex items-center justify-between">
                 <div>
                   <p className="text-sm font-medium text-slate-400 mb-1">Total Users</p>
                   <h3 className="text-3xl font-bold text-white">12</h3>
                 </div>
                 <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center">
                    <UsersIcon className="w-6 h-6 text-blue-500" />
                 </div>
              </div>
              <div className="glass-panel rounded-2xl border-t border-indigo-500/20 p-6  border border-white/10 flex items-center justify-between">
                 <div>
                   <p className="text-sm font-medium text-slate-400 mb-1">Administrators</p>
                   <h3 className="text-3xl font-bold text-white">3</h3>
                 </div>
                 <div className="w-12 h-12 rounded-full bg-purple-50 flex items-center justify-center">
                    <Shield className="w-6 h-6 text-purple-500" />
                 </div>
              </div>
            </div>

            <div className="glass-panel rounded-2xl border-t border-indigo-500/20  overflow-hidden border border-white/10">
              <div className="p-4 border-b border-white/10 flex flex-col sm:flex-row gap-4 justify-between items-center bg-slate-900/40 backdrop-blur-xl/50">
                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <div className="relative flex-1 sm:w-64">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                    <input 
                      type="text"
                      placeholder="Search users" 
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      onKeyDown={handleKeyDown}
                      className="w-full pl-9 pr-4 py-2 bg-slate-900/80 border border-white/10 rounded-xl shadow-sm text-sm focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/50 transition-all placeholder:text-slate-500"
                    />
                  </div>
                  <button 
                    onClick={handleSearch}
                    className="flex items-center gap-2 px-4 py-2.5 bg-slate-900/40 backdrop-blur-xl border border-white/10 rounded-xl text-sm font-medium text-slate-300 hover:bg-slate-700 transition-all shadow-sm hover:shadow"
                  >
                    Filter <Filter className="w-3.5 h-3.5" />
                  </button>
                  {appliedSearchQuery && (
                    <button 
                      onClick={handleReset}
                      className="px-4 py-2.5 bg-slate-800/50 border border-white/10 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-all text-sm font-medium"
                    >
                      Reset
                    </button>
                  )}
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-sm text-left whitespace-nowrap">
                  <thead className="bg-slate-900/40 backdrop-blur-xl border-b border-white/10">
                    <tr>
                      <th className="py-4 px-6 font-semibold text-slate-300">Name</th>
                      <th className="py-4 px-6 font-semibold text-slate-300">Role</th>
                      <th className="py-4 px-6 font-semibold text-slate-300">Status</th>
                      <th className="py-4 px-6 font-semibold text-slate-300">Last Login</th>
                      <th className="py-4 px-6 font-semibold text-slate-300 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#f1f5f9]">
                    {filteredUsers.length === 0 ? (
                      <tr>
                        <td colSpan={5} className="py-8 text-center text-slate-400">
                          No users found matching "{appliedSearchQuery}".
                        </td>
                      </tr>
                    ) : (
                    filteredUsers.map((user, i) => (
                      <tr key={i} className="hover:bg-slate-900/40 backdrop-blur-xl/50/50 transition-colors bg-slate-900/40 backdrop-blur-xl">
                        <td className="py-4 px-6">
                           <div className="flex items-center gap-3">
                             <div className="w-10 h-10 rounded-full bg-indigo-500 text-white flex items-center justify-center font-bold shadow-sm">
                               {user.name.charAt(0)}
                             </div>
                             <div>
                               <div 
                                 className="font-semibold text-white cursor-pointer hover:text-indigo-400 transition-colors"
                                 onClick={() => setSelectedUser(user)}
                               >
                                 {user.name}
                               </div>
                               <div className="text-xs text-slate-400">{user.email}</div>
                             </div>
                           </div>
                        </td>
                        <td className="py-4 px-6">
                           <span className="inline-flex items-center px-2.5 py-1 rounded bg-slate-800 text-slate-300 font-medium text-xs border border-white/10">
                             {user.role}
                           </span>
                        </td>
                        <td className="py-4 px-6">
                           <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold
                              ${user.status === 'Active' ? 'bg-green-50 text-green-600 border border-green-200' : 'bg-slate-100 text-slate-600 border border-slate-200'}`}>
                             <span className={`w-1.5 h-1.5 rounded-full ${user.status === 'Active' ? 'bg-green-500' : 'bg-slate-400'}`}></span>
                             {user.status}
                           </span>
                        </td>
                        <td className="py-4 px-6 text-slate-400">{user.lastLogin}</td>
                        <td className="py-4 px-6 text-right">
                           <div className="flex items-center justify-end gap-2">
                              <button className="p-2 text-slate-400 hover:text-indigo-400 hover:bg-purple-50 rounded-lg transition-colors" title="Email User">
                                 <Mail className="w-4 h-4" />
                              </button>
                              <button className="p-2 text-slate-400 hover:text-indigo-400 hover:bg-purple-50 rounded-lg transition-colors" title="Edit User">
                                 <Edit className="w-4 h-4" />
                              </button>
                           </div>
                        </td>
                      </tr>
                    )))}
                  </tbody>
                </table>
              </div>
            </div>

          </div>
        </main>
      </div>
      {/* User Details Modal */}
      {selectedUser && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="glass-panel rounded-2xl border-t border-indigo-500/20 shadow-xl w-full max-w-2xl overflow-hidden flex flex-col relative">
            <button 
              onClick={() => setSelectedUser(null)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            
            <div className="p-8">
              <div className="mb-6">
                <div className="w-24 h-24 rounded-full bg-[#93c5fd] text-white flex items-center justify-center mb-4 overflow-hidden shadow-sm">
                  <svg className="w-16 h-16 text-white mt-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <h2 className="text-xl font-medium text-[#e2e8f0]">{selectedUser.name}</h2>
                <p className="text-slate-400 text-[15px]">{selectedUser.email}</p>
              </div>
              
              <div className="h-[1px] w-full bg-[#e2e8f0] mb-8"></div>
              
              <div className="grid grid-cols-2 gap-y-8 gap-x-12">
                <div>
                  <h3 className="text-[#e2e8f0] font-medium mb-1">Phone</h3>
                  <p className="text-slate-300">{selectedUser.phone || '---'}</p>
                </div>
                <div>
                  <h3 className="text-[#e2e8f0] font-medium mb-1">Designation</h3>
                  <p className="text-slate-300">{selectedUser.role}</p>
                </div>
                <div>
                  <h3 className="text-[#e2e8f0] font-medium mb-1">Date Added</h3>
                  <p className="text-slate-300">{selectedUser.dateAdded || '---'}</p>
                </div>
                <div>
                  <h3 className="text-[#e2e8f0] font-medium mb-1">Last Seen</h3>
                  <p className="text-slate-300">{selectedUser.lastLogin}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
