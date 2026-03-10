import { useState } from "react";
import { Search, Filter, Plus, Users as UsersIcon, Shield, Mail, Edit, X } from "lucide-react";
import { useLocation } from "wouter";
import { Sidebar, Header } from "./clients";

export default function UsersPage() {
  const [openMenus, setOpenMenus] = useState<string>('');
  const [selectedUser, setSelectedUser] = useState<any>(null);
  const [location] = useLocation();

  const toggleMenu = (menu: string) => {
    setOpenMenus(prev => prev === menu ? '' : menu);
  };

  const usersList = [
    { name: "Neeraj Kumar", email: "neeraj@pinkgorilla.com", role: "Administrator", status: "Active", lastLogin: "Just now", phone: "+1 555 123 4567", dateAdded: "15-08-2025" },
    { name: "Vinayak Sharma", email: "vinayak@pinkgorilla.com", role: "Manager", status: "Active", lastLogin: "2 hours ago", phone: "---", dateAdded: "20-09-2025" },
    { name: "Maria Christina", email: "maria@pinkgorilla.com", role: "Support Agent", status: "Active", lastLogin: "Yesterday", phone: "+1 555 987 6543", dateAdded: "10-10-2025" },
    { name: "Chayan Alavi", email: "chayan@pinkgorilla.com", role: "Developer", status: "Offline", lastLogin: "3 days ago", phone: "---", dateAdded: "05-11-2025" },
  ];

  return (
    <div className="h-screen w-full overflow-hidden bg-transparent flex font-sans text-[#1e293b]">
      <Sidebar openMenus={openMenus} toggleMenu={toggleMenu} currentPath={location} />
      <div className="flex-1 flex flex-col min-w-0 bg-white/30 backdrop-blur-3xl">
        <Header title="Users" />

        <main className="flex-1 overflow-y-auto p-6 lg:p-8 relative">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between mb-6">
              <h1 className="text-[22px] text-[#0f172a] font-semibold">User Management</h1>
              <button className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] hover:from-[#4f46e5] hover:to-[#7c3aed] text-white rounded-xl text-sm font-medium transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5">
                <Plus className="w-4 h-4" /> Add User
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div className="modern-card p-6  border border-[#e2e8f0] flex items-center justify-between">
                 <div>
                   <p className="text-sm font-medium text-[#64748b] mb-1">Total Users</p>
                   <h3 className="text-3xl font-bold text-[#0f172a]">12</h3>
                 </div>
                 <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center">
                    <UsersIcon className="w-6 h-6 text-blue-500" />
                 </div>
              </div>
              <div className="modern-card p-6  border border-[#e2e8f0] flex items-center justify-between">
                 <div>
                   <p className="text-sm font-medium text-[#64748b] mb-1">Administrators</p>
                   <h3 className="text-3xl font-bold text-[#0f172a]">3</h3>
                 </div>
                 <div className="w-12 h-12 rounded-full bg-purple-50 flex items-center justify-center">
                    <Shield className="w-6 h-6 text-purple-500" />
                 </div>
              </div>
            </div>

            <div className="modern-card  overflow-hidden border border-[#e2e8f0]">
              <div className="p-4 border-b border-[#e2e8f0] flex flex-col sm:flex-row gap-4 justify-between items-center bg-white/80 backdrop-blur-md/50">
                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <div className="relative flex-1 sm:w-64">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#94a3b8]" />
                    <input 
                      type="text"
                      placeholder="Search users" 
                      className="w-full pl-9 pr-4 py-2 bg-white border border-[#e2e8f0]/80 rounded-xl shadow-sm text-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all placeholder:text-[#94a3b8]"
                    />
                  </div>
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-sm text-left whitespace-nowrap">
                  <thead className="bg-white/80 backdrop-blur-md border-b border-[#e2e8f0]">
                    <tr>
                      <th className="py-4 px-6 font-semibold text-[#475569]">Name</th>
                      <th className="py-4 px-6 font-semibold text-[#475569]">Role</th>
                      <th className="py-4 px-6 font-semibold text-[#475569]">Status</th>
                      <th className="py-4 px-6 font-semibold text-[#475569]">Last Login</th>
                      <th className="py-4 px-6 font-semibold text-[#475569] text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#f1f5f9]">
                    {usersList.map((user, i) => (
                      <tr key={i} className="hover:bg-white/80 backdrop-blur-md/50/50 transition-colors bg-white/80 backdrop-blur-md">
                        <td className="py-4 px-6">
                           <div className="flex items-center gap-3">
                             <div className="w-10 h-10 rounded-full bg-[#8b5cf6] text-white flex items-center justify-center font-bold shadow-sm">
                               {user.name.charAt(0)}
                             </div>
                             <div>
                               <div 
                                 className="font-semibold text-[#0f172a] cursor-pointer hover:text-[#8b5cf6] transition-colors"
                                 onClick={() => setSelectedUser(user)}
                               >
                                 {user.name}
                               </div>
                               <div className="text-xs text-[#64748b]">{user.email}</div>
                             </div>
                           </div>
                        </td>
                        <td className="py-4 px-6">
                           <span className="inline-flex items-center px-2.5 py-1 rounded bg-[#f1f5f9] text-[#475569] font-medium text-xs border border-[#e2e8f0]">
                             {user.role}
                           </span>
                        </td>
                        <td className="py-4 px-6">
                           <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold
                              ${user.status === 'Active' ? 'bg-green-50 text-green-600 border border-green-200' : 'bg-gray-100 text-gray-600 border border-gray-200'}`}>
                             <span className={`w-1.5 h-1.5 rounded-full ${user.status === 'Active' ? 'bg-green-500' : 'bg-gray-400'}`}></span>
                             {user.status}
                           </span>
                        </td>
                        <td className="py-4 px-6 text-[#64748b]">{user.lastLogin}</td>
                        <td className="py-4 px-6 text-right">
                           <div className="flex items-center justify-end gap-2">
                              <button className="p-2 text-[#64748b] hover:text-[#8b5cf6] hover:bg-purple-50 rounded-lg transition-colors" title="Email User">
                                 <Mail className="w-4 h-4" />
                              </button>
                              <button className="p-2 text-[#64748b] hover:text-[#8b5cf6] hover:bg-purple-50 rounded-lg transition-colors" title="Edit User">
                                 <Edit className="w-4 h-4" />
                              </button>
                           </div>
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
      {/* User Details Modal */}
      {selectedUser && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="modern-card shadow-xl w-full max-w-2xl overflow-hidden flex flex-col relative">
            <button 
              onClick={() => setSelectedUser(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
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
                <h2 className="text-xl font-medium text-[#1e293b]">{selectedUser.name}</h2>
                <p className="text-[#64748b] text-[15px]">{selectedUser.email}</p>
              </div>
              
              <div className="h-[1px] w-full bg-[#e2e8f0] mb-8"></div>
              
              <div className="grid grid-cols-2 gap-y-8 gap-x-12">
                <div>
                  <h3 className="text-[#1e293b] font-medium mb-1">Phone</h3>
                  <p className="text-[#475569]">{selectedUser.phone || '---'}</p>
                </div>
                <div>
                  <h3 className="text-[#1e293b] font-medium mb-1">Designation</h3>
                  <p className="text-[#475569]">{selectedUser.role}</p>
                </div>
                <div>
                  <h3 className="text-[#1e293b] font-medium mb-1">Date Added</h3>
                  <p className="text-[#475569]">{selectedUser.dateAdded || '---'}</p>
                </div>
                <div>
                  <h3 className="text-[#1e293b] font-medium mb-1">Last Seen</h3>
                  <p className="text-[#475569]">{selectedUser.lastLogin}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
