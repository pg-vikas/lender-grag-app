import { useState } from "react";
import { Search, Filter, Plus, Users as UsersIcon, Shield, Mail, Edit } from "lucide-react";
import { useLocation } from "wouter";
import { Sidebar, Header } from "./clients";

export default function UsersPage() {
  const [openMenus, setOpenMenus] = useState<string>('');
  const [location] = useLocation();

  const toggleMenu = (menu: string) => {
    setOpenMenus(prev => prev === menu ? '' : menu);
  };

  const usersList = [
    { name: "Neeraj Kumar", email: "neeraj@pinkgorilla.com", role: "Administrator", status: "Active", lastLogin: "Just now" },
    { name: "Vinayak Sharma", email: "vinayak@pinkgorilla.com", role: "Manager", status: "Active", lastLogin: "2 hours ago" },
    { name: "Maria Christina", email: "maria@pinkgorilla.com", role: "Support Agent", status: "Active", lastLogin: "Yesterday" },
    { name: "Chayan Alavi", email: "chayan@pinkgorilla.com", role: "Developer", status: "Offline", lastLogin: "3 days ago" },
  ];

  return (
    <div className="min-h-screen bg-[#f3f4f8] flex font-sans text-[#1e293b]">
      <Sidebar openMenus={openMenus} toggleMenu={toggleMenu} currentPath={location} />

      <div className="flex-1 flex flex-col min-w-0">
        <Header title="Users" />

        <main className="flex-1 overflow-y-auto p-6 lg:p-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between mb-6">
              <h1 className="text-2xl font-bold text-[#0f172a]">User Management</h1>
              <button className="flex items-center gap-2 px-4 py-2 bg-[#8b5cf6] hover:bg-[#7c3aed] text-white rounded-lg text-sm font-medium transition-colors shadow-sm">
                <Plus className="w-4 h-4" /> Add User
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div className="bg-white rounded-[1rem] p-6 shadow-[0_2px_10px_rgba(0,0,0,0.02)] border border-[#f1f5f9] flex items-center justify-between">
                 <div>
                   <p className="text-sm font-medium text-[#64748b] mb-1">Total Users</p>
                   <h3 className="text-3xl font-bold text-[#0f172a]">12</h3>
                 </div>
                 <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center">
                    <UsersIcon className="w-6 h-6 text-blue-500" />
                 </div>
              </div>
              <div className="bg-white rounded-[1rem] p-6 shadow-[0_2px_10px_rgba(0,0,0,0.02)] border border-[#f1f5f9] flex items-center justify-between">
                 <div>
                   <p className="text-sm font-medium text-[#64748b] mb-1">Administrators</p>
                   <h3 className="text-3xl font-bold text-[#0f172a]">3</h3>
                 </div>
                 <div className="w-12 h-12 rounded-full bg-purple-50 flex items-center justify-center">
                    <Shield className="w-6 h-6 text-purple-500" />
                 </div>
              </div>
            </div>

            <div className="bg-white rounded-[1rem] shadow-[0_2px_10px_rgba(0,0,0,0.02)] overflow-hidden border border-[#f1f5f9]">
              <div className="p-4 border-b border-[#f1f5f9] flex flex-col sm:flex-row gap-4 justify-between items-center bg-[#f8fafc]">
                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <div className="relative flex-1 sm:w-64">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#94a3b8]" />
                    <input 
                      type="text"
                      placeholder="Search users" 
                      className="w-full pl-9 pr-4 py-2 bg-white border border-[#e2e8f0] rounded-lg text-sm focus:outline-none focus:border-primary/30 transition-all placeholder:text-[#94a3b8]"
                    />
                  </div>
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-sm text-left whitespace-nowrap">
                  <thead className="bg-white border-b border-[#f1f5f9]">
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
                      <tr key={i} className="hover:bg-[#f8fafc]/50 transition-colors bg-white">
                        <td className="py-4 px-6">
                           <div className="flex items-center gap-3">
                             <div className="w-10 h-10 rounded-full bg-[#8b5cf6] text-white flex items-center justify-center font-bold shadow-sm">
                               {user.name.charAt(0)}
                             </div>
                             <div>
                               <div className="font-semibold text-[#0f172a]">{user.name}</div>
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
    </div>
  );
}
