import { useState } from "react";
import { Search, Filter, CreditCard, ArrowUpRight, ArrowDownRight, Clock } from "lucide-react";
import { useLocation } from "wouter";
import { Sidebar, Header } from "./clients";

export default function PaymentsPage() {
  const [openMenus, setOpenMenus] = useState<string>('sales');
  const [location] = useLocation();

  const toggleMenu = (menu: string) => {
    setOpenMenus(prev => prev === menu ? '' : menu);
  };

  const paymentsList = [
    { id: "PAY-2026-089", client: "Pink Gorilla Software", amount: "$1,250.00", method: "Credit Card", date: "Oct 15, 2026", status: "Completed" },
    { id: "PAY-2026-088", client: "Estate Landscape", amount: "$850.00", method: "Bank Transfer", date: "Oct 14, 2026", status: "Processing" },
    { id: "PAY-2026-087", client: "Summit Cabinets", amount: "$2,400.00", method: "Credit Card", date: "Oct 12, 2026", status: "Failed" },
  ];

  return (
    <div className="min-h-screen bg-[#f3f4f8] flex font-sans text-[#1e293b]">
      <Sidebar openMenus={openMenus} toggleMenu={toggleMenu} currentPath={location} />

      <div className="flex-1 flex flex-col min-w-0">
        <Header title="Payments" />

        <main className="flex-1 overflow-y-auto p-6 lg:p-8">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-2xl font-bold text-[#0f172a] mb-6">Payments</h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div className="bg-white rounded-[1rem] p-6 shadow-[0_2px_10px_rgba(0,0,0,0.02)] border border-[#f1f5f9]">
                 <div className="flex justify-between items-start mb-4">
                   <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center">
                      <ArrowUpRight className="w-5 h-5 text-green-500" />
                   </div>
                   <span className="text-sm font-medium text-green-500 bg-green-50 px-2.5 py-0.5 rounded-full">+12.5%</span>
                 </div>
                 <p className="text-sm font-medium text-[#64748b] mb-1">Total Collected</p>
                 <h3 className="text-3xl font-bold text-[#0f172a]">$45,200.00</h3>
              </div>
              <div className="bg-white rounded-[1rem] p-6 shadow-[0_2px_10px_rgba(0,0,0,0.02)] border border-[#f1f5f9]">
                 <div className="flex justify-between items-start mb-4">
                   <div className="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center">
                      <Clock className="w-5 h-5 text-amber-500" />
                   </div>
                 </div>
                 <p className="text-sm font-medium text-[#64748b] mb-1">Processing</p>
                 <h3 className="text-3xl font-bold text-[#0f172a]">$3,450.00</h3>
              </div>
              <div className="bg-white rounded-[1rem] p-6 shadow-[0_2px_10px_rgba(0,0,0,0.02)] border border-[#f1f5f9]">
                 <div className="flex justify-between items-start mb-4">
                   <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center">
                      <ArrowDownRight className="w-5 h-5 text-red-500" />
                   </div>
                   <span className="text-sm font-medium text-red-500 bg-red-50 px-2.5 py-0.5 rounded-full">+2.1%</span>
                 </div>
                 <p className="text-sm font-medium text-[#64748b] mb-1">Failed</p>
                 <h3 className="text-3xl font-bold text-[#0f172a]">$2,400.00</h3>
              </div>
            </div>

            <div className="bg-white rounded-[1rem] shadow-[0_2px_10px_rgba(0,0,0,0.02)] overflow-hidden border border-[#f1f5f9]">
              <div className="p-4 border-b border-[#f1f5f9] flex flex-col sm:flex-row gap-4 justify-between items-center bg-[#f8fafc]">
                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <div className="relative flex-1 sm:w-64">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#94a3b8]" />
                    <input 
                      type="text"
                      placeholder="Search payments" 
                      className="w-full pl-9 pr-4 py-2 bg-white border border-[#e2e8f0] rounded-lg text-sm focus:outline-none focus:border-primary/30 transition-all placeholder:text-[#94a3b8]"
                    />
                  </div>
                  <button className="flex items-center gap-2 px-4 py-2 bg-white border border-[#e2e8f0] rounded-lg text-sm font-medium text-[#475569] hover:bg-[#f8fafc] transition-colors">
                    Filter <Filter className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-sm text-left whitespace-nowrap">
                  <thead className="bg-white border-b border-[#f1f5f9]">
                    <tr>
                      <th className="py-4 px-6 font-semibold text-[#475569]">Transaction ID</th>
                      <th className="py-4 px-6 font-semibold text-[#475569]">Client</th>
                      <th className="py-4 px-6 font-semibold text-[#475569]">Amount</th>
                      <th className="py-4 px-6 font-semibold text-[#475569]">Method</th>
                      <th className="py-4 px-6 font-semibold text-[#475569]">Date</th>
                      <th className="py-4 px-6 font-semibold text-[#475569]">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#f1f5f9]">
                    {paymentsList.map((payment, i) => (
                      <tr key={i} className="hover:bg-[#f8fafc]/50 transition-colors bg-white">
                        <td className="py-4 px-6 font-medium text-[#0f172a]">{payment.id}</td>
                        <td className="py-4 px-6 text-[#64748b]">{payment.client}</td>
                        <td className="py-4 px-6 font-medium text-[#0f172a]">{payment.amount}</td>
                        <td className="py-4 px-6">
                          <div className="flex items-center gap-2 text-[#475569]">
                             <CreditCard className="w-4 h-4" />
                             {payment.method}
                          </div>
                        </td>
                        <td className="py-4 px-6 text-[#64748b]">{payment.date}</td>
                        <td className="py-4 px-6">
                           <span className={`inline-flex items-center justify-center px-3 py-1 rounded-full text-xs font-semibold
                              ${payment.status === 'Completed' ? 'bg-green-50 text-green-600 border border-green-200' : 
                                payment.status === 'Processing' ? 'bg-amber-50 text-amber-600 border border-amber-200' : 'bg-red-50 text-red-600 border border-red-200'}`}>
                             {payment.status}
                           </span>
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
