import { useState } from "react";
import { Search, Filter, Plus, FileText, Download, CheckCircle2, Clock, Trash2, ExternalLink, MoreHorizontal, Pin, X, RefreshCw } from "lucide-react";
import { useLocation, Link } from "wouter";
import { Sidebar, Header } from "./clients";

export default function InvoicesPage() {
  const [openMenus, setOpenMenus] = useState<string>('sales');
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);
  const [isEditInvoiceModalOpen, setIsEditInvoiceModalOpen] = useState(false);
  const [isAddPaymentModalOpen, setIsAddPaymentModalOpen] = useState(false);
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
    <div className="min-h-screen page-bg flex font-sans text-[#1e293b]">
      <Sidebar openMenus={openMenus} toggleMenu={toggleMenu} currentPath={location} />

      <div className="flex-1 flex flex-col min-w-0 bg-white/30 backdrop-blur-3xl">
        <Header title="Invoices" />

        <main className="flex-1 overflow-y-auto p-6 lg:p-8 relative">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between mb-6">
              <h1 className="text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]xl font-bold text-[#0f172a]">Invoices</h1>
              <button className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] hover:from-[#4f46e5] hover:to-[#7c3aed] text-white rounded-xl text-sm font-medium transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5">
                <Plus className="w-4 h-4" /> Create Invoice
              </button>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div className="modern-card p-6  border border-white/60 flex items-center justify-between">
                 <div>
                   <p className="text-sm font-medium text-[#64748b] mb-1">Total Paid</p>
                   <h3 className="text-3xl font-bold text-[#0f172a]">$14,500.00</h3>
                 </div>
                 <div className="w-12 h-12 rounded-full bg-green-50 flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6 text-green-500" />
                 </div>
              </div>
              <div className="modern-card p-6  border border-white/60 flex items-center justify-between">
                 <div>
                   <p className="text-sm font-medium text-[#64748b] mb-1">Total Pending</p>
                   <h3 className="text-3xl font-bold text-[#0f172a]">$3,200.00</h3>
                 </div>
                 <div className="w-12 h-12 rounded-full bg-amber-50 flex items-center justify-center">
                    <Clock className="w-6 h-6 text-amber-500" />
                 </div>
              </div>
              <div className="modern-card p-6  border border-white/60 flex items-center justify-between">
                 <div>
                   <p className="text-sm font-medium text-[#64748b] mb-1">Total Overdue</p>
                   <h3 className="text-3xl font-bold text-[#0f172a]">$2,400.00</h3>
                 </div>
                 <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center">
                    <FileText className="w-6 h-6 text-red-500" />
                 </div>
              </div>
            </div>

            <div className="modern-card  overflow-hidden border border-white/60">
              <div className="p-4 border-b border-white/40 flex flex-col sm:flex-row gap-4 justify-between items-center bg-white/80 backdrop-blur-md/50">
                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <div className="relative flex-1 sm:w-64">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#94a3b8]" />
                    <input 
                      type="text"
                      placeholder="Search invoices" 
                      className="w-full pl-9 pr-4 py-2 bg-white/80 backdrop-blur-md/80 backdrop-blur-sm border border-white/60/80 rounded-xl shadow-sm text-sm focus:outline-none focus:border-primary/30 transition-all placeholder:text-[#94a3b8]"
                    />
                  </div>
                  <button className="flex items-center gap-2 px-4 py-2.5 bg-white/80 backdrop-blur-md border border-white/60/80 rounded-xl text-sm font-medium text-[#475569] hover:bg-white/80 backdrop-blur-md transition-all shadow-sm hover:shadow transition-colors">
                    Filter <Filter className="w-3.5 h-3.5" />
                  </button>
                </div>
                <button className="flex items-center gap-2 px-4 py-2.5 bg-white/80 backdrop-blur-md border border-white/60/80 rounded-xl text-sm font-medium text-[#475569] hover:bg-white/80 backdrop-blur-md transition-all shadow-sm hover:shadow transition-colors">
                  <Download className="w-3.5 h-3.5" /> Download All
                </button>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-sm text-left whitespace-nowrap">
                  <thead className="bg-white/80 backdrop-blur-md border-b border-white/40">
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
                      <tr key={i} className="hover:bg-white/80 backdrop-blur-md/50/50 transition-colors bg-white/80 backdrop-blur-md">
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
                                  <div className="absolute right-0 top-[24px] z-20 w-[200px] bg-white/80 backdrop-blur-md rounded-lg shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] border border-white/60 py-2 flex flex-col">
                                    <button 
                                      className="w-full text-left px-5 py-2.5 text-[14px] font-medium text-[#0f172a] hover:bg-white/80 backdrop-blur-md/50 transition-colors"
                                      onClick={() => {
                                        setActiveDropdown(null);
                                        setIsEditInvoiceModalOpen(true);
                                      }}
                                    >
                                      Quick Edit
                                    </button>
                                    <button 
                                      className="w-full text-left px-5 py-2.5 text-[14px] font-medium text-[#0f172a] hover:bg-white/80 backdrop-blur-md/50 transition-colors"
                                      onClick={() => {
                                        setActiveDropdown(null);
                                        setIsAddPaymentModalOpen(true);
                                      }}
                                    >
                                      Add A New Payment
                                    </button>
                                    <button className="w-full text-left px-5 py-2.5 text-[14px] font-medium text-[#0f172a] hover:bg-white/80 backdrop-blur-md/50 transition-colors">
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

      {/* Edit Invoice Modal */}
      {isEditInvoiceModalOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 overflow-y-auto">
          <div className="modern-card shadow-xl w-full max-w-[700px] my-8 flex flex-col relative max-h-[90vh]">
            <div className="flex flex-col p-6 border-b border-[#e2e8f0] shrink-0 sticky top-0 bg-white/80 backdrop-blur-md z-10 rounded-t-lg">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold text-[#0f172a]">Edit Invoice</h2>
                <button 
                  onClick={() => setIsEditInvoiceModalOpen(false)}
                  className="text-[#94a3b8] hover:text-[#0f172a] transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="text-[13px] text-[#64748b] text-right mt-1">
                Created By: | 28-02-2026
              </div>
            </div>
            
            <div className="p-6 overflow-y-auto">
              <div className="grid grid-cols-1 gap-y-5">
                <div className="grid grid-cols-[160px_1fr] items-center">
                  <label className="text-[13px] font-medium text-[#475569]">Invoice Date*</label>
                  <input type="text" defaultValue="28-02-2026" className="w-full px-3 py-2.5 bg-white/80 backdrop-blur-md/80 backdrop-blur-sm border border-white/60/80 rounded-md text-[13px] focus:outline-none focus:border-[#8b5cf6]" />
                </div>
                <div className="grid grid-cols-[160px_1fr] items-center">
                  <label className="text-[13px] font-medium text-[#475569]">Due Date*</label>
                  <input type="text" defaultValue="28-02-2026" className="w-full px-3 py-2.5 bg-white/80 backdrop-blur-md/80 backdrop-blur-sm border border-white/60/80 rounded-md text-[13px] focus:outline-none focus:border-[#8b5cf6]" />
                </div>
                <div className="grid grid-cols-[160px_1fr] items-center">
                  <label className="text-[13px] font-medium text-[#475569]">Category*</label>
                  <select className="w-full px-3 py-2.5 bg-white/80 backdrop-blur-md/80 backdrop-blur-sm border border-white/60/80 rounded-md text-[13px] text-[#0f172a] focus:outline-none">
                    <option>Default</option>
                  </select>
                </div>
              </div>
              
              <div className="w-full h-[1px] bg-[#f1f5f9] my-6"></div>
              
              <div className="flex items-center justify-between mb-4">
                <span className="text-[14px] font-medium text-[#475569]">Additional Information</span>
                <button className="w-10 h-5 bg-[#e2e8f0] rounded-full relative transition-colors cursor-pointer">
                  <div className="w-4 h-4 bg-white/80 backdrop-blur-md rounded-full absolute top-0.5 left-0.5 shadow-sm"></div>
                </button>
              </div>

              <div className="text-[13px] font-semibold text-[#475569] mb-3">* Required</div>

              <div className="flex items-center gap-2 px-4 py-3 bg-white/80 backdrop-blur-md/50 border border-cyan-100 rounded-md text-[13px] text-[#475569]">
                <RefreshCw className="w-4 h-4 text-orange-400" />
                <span>Recurring invoice options are available after an invoice has been created</span>
              </div>
            </div>
            
            <div className="flex items-center justify-end gap-3 p-6 border-t border-[#e2e8f0] bg-white/80 backdrop-blur-md rounded-b-lg shrink-0 sticky bottom-0">
              <button 
                onClick={() => setIsEditInvoiceModalOpen(false)}
                className="px-5 py-2 bg-white/80 backdrop-blur-md border border-white/60 hover:bg-white/80 backdrop-blur-md/50 text-[#475569] rounded-md text-[14px] font-medium transition-colors"
              >
                Close
              </button>
              <button className="px-6 py-2.5 bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] hover:from-[#4f46e5] hover:to-[#7c3aed] text-white rounded-xl text-[14px] font-medium transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5">
                Submit
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Add Payment Modal */}
      {isAddPaymentModalOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 overflow-y-auto">
          <div className="modern-card shadow-xl w-full max-w-[700px] my-8 flex flex-col relative max-h-[90vh]">
            <div className="flex flex-col p-6 border-b border-[#e2e8f0] shrink-0 sticky top-0 bg-white/80 backdrop-blur-md z-10 rounded-t-lg">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold text-[#0f172a]">Add A New Payment</h2>
                <button 
                  onClick={() => setIsAddPaymentModalOpen(false)}
                  className="text-[#94a3b8] hover:text-[#0f172a] transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="text-[13px] font-medium text-[#64748b] text-right mt-1">
                Balance Due: <span className="text-[#0f172a]">$0.00</span>
              </div>
            </div>
            
            <div className="p-6 overflow-y-auto">
              <div className="grid grid-cols-1 gap-y-5">
                <div className="grid grid-cols-[160px_1fr] items-center">
                  <label className="text-[13px] font-medium text-[#475569]">Amount*</label>
                  <div className="flex">
                    <span className="inline-flex items-center px-3 bg-white/80 backdrop-blur-md/50 border border-r-0 border-[#e2e8f0] rounded-l-md text-[13px] text-[#94a3b8]">
                      $
                    </span>
                    <input type="text" defaultValue="0.00" className="w-full px-3 py-2.5 bg-white/80 backdrop-blur-md/80 backdrop-blur-sm border border-white/60/80 rounded-r-md text-[13px] focus:outline-none focus:border-[#8b5cf6]" />
                  </div>
                </div>
                
                <div className="grid grid-cols-[160px_1fr] items-center">
                  <label className="text-[13px] font-medium text-[#475569]">Date*</label>
                  <input type="text" defaultValue="10-03-2026" className="w-full px-3 py-2.5 bg-white/80 backdrop-blur-md/80 backdrop-blur-sm border border-white/60/80 rounded-md text-[13px] focus:outline-none focus:border-[#8b5cf6]" />
                </div>
                
                <div className="grid grid-cols-[160px_1fr] items-center">
                  <label className="text-[13px] font-medium text-[#475569]">Payment Method*</label>
                  <select className="w-full px-3 py-2.5 bg-white/80 backdrop-blur-md/80 backdrop-blur-sm border border-white/60/80 rounded-md text-[13px] text-[#475569] focus:outline-none">
                    <option>Paypal</option>
                  </select>
                </div>

                <div className="grid grid-cols-[160px_1fr] items-center">
                  <label className="text-[13px] font-medium text-[#475569]">Transaction ID</label>
                  <input type="text" className="w-full px-3 py-2.5 bg-white/80 backdrop-blur-md/80 backdrop-blur-sm border border-white/60/80 rounded-md text-[13px] focus:outline-none focus:border-[#8b5cf6]" />
                </div>
              </div>
              
              <div className="w-full h-[1px] bg-[#f1f5f9] my-6"></div>
              
              <div className="flex items-center justify-between mb-4">
                <span className="text-[14px] font-medium text-[#475569]">Additional Information</span>
                <button className="w-10 h-5 bg-[#e2e8f0] rounded-full relative transition-colors cursor-pointer">
                  <div className="w-4 h-4 bg-white/80 backdrop-blur-md rounded-full absolute top-0.5 left-0.5 shadow-sm"></div>
                </button>
              </div>

              <label className="flex items-center gap-2 mb-6 cursor-pointer group">
                <div className="w-5 h-5 rounded flex items-center justify-center bg-[#8b5cf6] border border-[#8b5cf6]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-white" />
                </div>
                <span className="text-[13px] font-medium text-[#475569] group-hover:text-[#0f172a] transition-colors">Send the client a payment received email</span>
              </label>

              <div className="text-[13px] font-semibold text-[#475569]">* Required</div>
            </div>
            
            <div className="flex items-center justify-end gap-3 p-6 border-t border-[#e2e8f0] bg-white/80 backdrop-blur-md rounded-b-lg shrink-0 sticky bottom-0">
              <button 
                onClick={() => setIsAddPaymentModalOpen(false)}
                className="px-5 py-2 bg-white/80 backdrop-blur-md border border-white/60 hover:bg-white/80 backdrop-blur-md/50 text-[#475569] rounded-md text-[14px] font-medium transition-colors"
              >
                Close
              </button>
              <button className="px-6 py-2.5 bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] hover:from-[#4f46e5] hover:to-[#7c3aed] text-white rounded-xl text-[14px] font-medium transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5">
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
