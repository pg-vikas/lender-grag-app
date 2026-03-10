import { useState } from "react";
import { Search, Filter, Plus, FileText, ChevronDown } from "lucide-react";
import { useLocation } from "wouter";
import { Sidebar, Header } from "./clients";

export default function TemplatesPage() {
  const [openMenus, setOpenMenus] = useState<string>('contracts');
  const [location] = useLocation();

  const toggleMenu = (menu: string) => {
    setOpenMenus(prev => prev === menu ? '' : menu);
  };

  const templatesList = [
    { name: "Standard NDA", type: "Non-Disclosure", used: 145, lastUpdated: "Sep 10, 2026" },
    { name: "Master Service Agreement", type: "Service", used: 89, lastUpdated: "Oct 01, 2026" },
    { name: "Website Development Contract", type: "Development", used: 56, lastUpdated: "Aug 15, 2026" },
    { name: "SEO Retainer Agreement", type: "Marketing", used: 34, lastUpdated: "Jul 22, 2026" },
  ];

  return (
    <div className="h-screen w-full overflow-hidden bg-transparent flex font-sans text-[#1e293b]">
      <Sidebar openMenus={openMenus} toggleMenu={toggleMenu} currentPath={location} />
      <div className="flex-1 flex flex-col min-w-0 bg-white ">
        <Header title="Contract Templates" />

        <main className="flex-1 overflow-y-auto p-6 lg:p-8 relative">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between mb-6">
              <h1 className="text-[22px] text-[#0f172a] font-semibold">Templates</h1>
              <button className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] hover:from-[#4f46e5] hover:to-[#7c3aed] text-white rounded-xl text-sm font-medium transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5">
                <Plus className="w-4 h-4" /> New Template
              </button>
            </div>

            <div className="bg-white  overflow-hidden border border-[#e2e8f0]">
              <div className="p-4 border-b border-[#e2e8f0] flex flex-col sm:flex-row gap-4 justify-between items-center bg-[#f8fafc]">
                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <div className="relative flex-1 sm:w-64">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#94a3b8]" />
                    <input 
                      type="text"
                      placeholder="Search templates" 
                      className="w-full pl-9 pr-4 py-2 bg-white border border-[#e2e8f0]/80 rounded-xl shadow-sm text-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all placeholder:text-[#94a3b8]"
                    />
                  </div>
                  <button className="flex items-center gap-2 px-4 py-2.5 bg-white border border-[#e2e8f0]/80 rounded-xl text-sm font-medium text-[#475569] hover:bg-white transition-all shadow-sm hover:shadow transition-colors">
                    Filter <Filter className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-sm text-left whitespace-nowrap">
                  <thead className="bg-white border-b border-[#e2e8f0]">
                    <tr>
                      <th className="py-4 px-6 font-semibold text-[#475569]">Template Name</th>
                      <th className="py-4 px-6 font-semibold text-[#475569]">Type</th>
                      <th className="py-4 px-6 font-semibold text-[#475569]">Times Used</th>
                      <th className="py-4 px-6 font-semibold text-[#475569]">Last Updated</th>
                      <th className="py-4 px-6 font-semibold text-[#475569]">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#f1f5f9]">
                    {templatesList.map((template, i) => (
                      <tr key={i} className="hover:bg-[#f8fafc]/50 transition-colors bg-white">
                        <td className="py-4 px-6">
                           <div className="flex items-center gap-3">
                             <div className="w-8 h-8 rounded bg-purple-50 text-purple-600 flex items-center justify-center shrink-0">
                               <FileText className="w-4 h-4" />
                             </div>
                             <span className="font-medium text-[#0f172a]">{template.name}</span>
                           </div>
                        </td>
                        <td className="py-4 px-6 text-[#64748b]">
                          <span className="inline-flex items-center px-2.5 py-1 rounded bg-[#f1f5f9] text-[#475569] font-medium text-xs border border-[#e2e8f0]">
                            {template.type}
                          </span>
                        </td>
                        <td className="py-4 px-6 font-medium text-[#0f172a]">{template.used}</td>
                        <td className="py-4 px-6 text-[#64748b]">{template.lastUpdated}</td>
                        <td className="py-4 px-6">
                           <button className="text-sm font-medium text-[#8b5cf6] hover:text-[#7c3aed] transition-colors flex items-center gap-1">
                             Edit <ChevronDown className="w-4 h-4" />
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
