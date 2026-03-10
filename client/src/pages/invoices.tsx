import { useState } from "react";
import { Search, Filter, Plus, FileText, Download, CheckCircle2, Clock, Trash2, ExternalLink, MoreHorizontal, Pin } from "lucide-react";
import { useLocation, Link } from "wouter";
import { Sidebar, Header } from "./clients";

export default function InvoicesPage() {
  const [openMenus, setOpenMenus] = useState<string>('sales');
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);
  const [location] = useLocation();

  const toggleMenu = (menu: string) => {
    setOpenMenus(prev => prev === menu ? '' : menu);
  };

  const toggleDropdown = (index: number) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  const invoicesList = [
    { id: "INV-2026-001", client: "Pink Gorilla Software", amount: "$1,250.00", date: "Oct 01, 2026", dueDate: "Oct 15, 2026", status: "Paid" },
    { id: "INV-2026-002", client: "Estate Landscape", amount: "$850.00", date: "Oct 05, 2026", dueDate: "Oct 20, 2026", status: "Pending" },
    { id: "INV-2026-003", client: "Summit Cabinets", amount: "$2,400.00", date: "Sep 28, 2026", dueDate: "Oct 12, 2026", status: "Overdue" },
    { id: "INV-2026-004", client: "Urban Edge", amount: "$450.00", date: "Oct 10, 2026", dueDate: "Oct 25, 2026", status: "Pending" },
  ];

  return (
    <div className="min-h-screen bg-[#f3f4f8] flex font-sans text-[#1e293b]">
      <Sidebar openMenus={openMenus} toggleMenu={toggleMenu} currentPath={location} />

      <div className="flex-1 flex flex-col min-w-0">
        <Header title="Invoices" />

        <main className="flex-1 overflow-y-auto p-6 lg:p-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between mb-6">
              <h1 className="text-2xl font-bold text-[#0f172a]">Invoices</h1>
              <button className="flex items-center gap-2 px-4 py-2 bg-[#8b5cf6] hover:bg-[#7c3aed] text-white rounded-lg text-sm font-medium transition-colors shadow-sm">
                <Plus className="w-4 h-4" /> Create Invoice
              </button>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div className="bg-white rounded-[1rem] p-6 shadow-[0_2px_10px_rgba(0,0,0,0.02)] border border-[#f1f5f9] flex items-center justify-between">
                 <div>
                   <p className="text-sm font-medium text-[#64748b] mb-1">Total Paid</p>
                   <h3 className="text-3xl font-bold text-[#0f172a]">$14,500.00</h3>
                 </div>
                 <div className="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6 text-green-500" />
                 </div>
              </div>
              <div className="bg-white rounded-[1rem] p-6 shadow-[0_2px_10px_rgba(0,0,0,0.02)] border border-[#f1f5f9] flex items-center justify-between">
                 <div>
                   <p className="text-sm font-medium text-[#64748b] mb-1">Total Pending</p>
                   <h3 className="text-3xl font-bold text-[#0f172a]">$3,200.00</h3>
                 </div>
                 <div className="w-12 h-12 rounded-full bg-amber-50 flex items-center justify-center">
                    <Clock className="w-6 h-6 text-amber-500" />
                 </div>
              </div>
              <div className="bg-white rounded-[1rem] p-6 shadow-[0_2px_10px_rgba(0,0,0,0.02)] border border-[#f1f5f9] flex items-center justify-between">
                 <div>
                   <p className="text-sm font-medium text-[#64748b] mb-1">Total Overdue</p>
                   <h3 className="text-3xl font-bold text-[#0f172a]">$2,400.00</h3>
                 </div>
                 <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center">
                    <FileText className="w-6 h-6 text-red-500" />
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
                      placeholder="Search invoices" 
                      className="w-full pl-9 pr-4 py-2 bg-white border border-[#e2e8f0] rounded-lg text-sm focus:outline-none focus:border-primary/30 transition-all placeholder:text-[#94a3b8]"
                    />
                  </div>
                  <button className="flex items-center gap-2 px-4 py-2 bg-white border border-[#e2e8f0] rounded-lg text-sm font-medium text-[#475569] hover:bg-[#f8fafc] transition-colors">
                    Filter <Filter className="w-3.5 h-3.5" />
                  </button>
                </div>
                <button className="flex items-center gap-2 px-4 py-2 bg-white border border-[#e2e8f0] rounded-lg text-sm font-medium text-[#475569] hover:bg-[#f8fafc] transition-colors">
                  <Download className="w-3.5 h-3.5" /> Download All
                </button>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-sm text-left whitespace-nowrap">
                  <thead className="bg-white border-b border-[#f1f5f9]">
                    <tr>
                      <th className="py-4 px-6 font-semibold text-[#475569]">Invoice ID</th>
                      <th className="py-4 px-6 font-semibold text-[#475569]">Client</th>
                      <th className="py-4 px-6 font-semibold text-[#475569]">Amount</th>
                      <th className="py-4 px-6 font-semibold text-[#475569]">Date</th>
                      <th className="py-4 px-6 font-semibold text-[#475569]">Due Date</th>
                      <th className="py-4 px-6 font-semibold text-[#475569]">Status</th>
                      <th className="py-4 px-6 font-semibold text-[#475569]">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#f1f5f9]">
                    {invoicesList.map((invoice, i) => (
                      <tr key={i} className="hover:bg-[#f8fafc]/50 transition-colors bg-white">
                        <td className="py-4 px-6 font-semibold">
                          <Link href={`/invoices/${invoice.id}`} className="text-[#8b5cf6] hover:text-[#7c3aed] transition-colors">{invoice.id}</Link>
                        </td>
                        <td className="py-4 px-6 font-medium text-[#0f172a]">{invoice.client}</td>
                        <td className="py-4 px-6 font-medium text-[#0f172a]">{invoice.amount}</td>
                        <td className="py-4 px-6 text-[#64748b]">{invoice.date}</td>
                        <td className="py-4 px-6 text-[#64748b]">{invoice.dueDate}</td>
                        <td className="py-4 px-6">
                           <span className={`inline-flex items-center justify-center px-3 py-1 rounded-full text-xs font-semibold
                              ${invoice.status === 'Paid' ? 'bg-green-50 text-green-600 border border-green-200' : 
                                invoice.status === 'Pending' ? 'bg-amber-50 text-amber-600 border border-amber-200' : 'bg-red-50 text-red-600 border border-red-200'}`}>
                             {invoice.status}
                           </span>
                        </td>
                        <td className="py-4 px-6 relative">
                          <div className="flex items-center gap-3">
                            <button className="text-red-400 hover:text-red-500 transition-colors">
                              <Trash2 className="w-4 h-4" />
                            </button>
                            <Link href={`/invoices/${invoice.id}`} className="text-[#475569] hover:text-[#0f172a] transition-colors">
                              <ExternalLink className="w-4 h-4" />
                            </Link>
                            <div className="relative">
                              <button 
                                onClick={() => toggleDropdown(i)}
                                className="text-[#475569] hover:text-[#0f172a] transition-colors"
                              >
                                <MoreHorizontal className="w-4 h-4" />
                              </button>
                              
                              {activeDropdown === i && (
                                <>
                                  <div 
                                    className="fixed inset-0 z-10"
                                    onClick={() => setActiveDropdown(null)}
                                  ></div>
                                  <div className="absolute right-0 top-[24px] z-20 w-48 bg-white rounded-lg shadow-[0_4px_20px_rgba(0,0,0,0.08)] border border-[#e2e8f0] py-2">
                                    <button className="w-full text-left px-4 py-2 text-sm text-[#0f172a] hover:bg-[#f8fafc] transition-colors">
                                      Quick Edit
                                    </button>
                                    <button className="w-full text-left px-4 py-2 text-sm text-[#0f172a] hover:bg-[#f8fafc] transition-colors">
                                      Add A New Payment
                                    </button>
                                    <button className="w-full text-left px-4 py-2 text-sm text-[#0f172a] hover:bg-[#f8fafc] transition-colors">
                                      Download
                                    </button>
                                  </div>
                                </>
                              )}
                            </div>
                            <button className="text-[#475569] hover:text-[#0f172a] transition-colors">
                              <Pin className="w-4 h-4" />
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
