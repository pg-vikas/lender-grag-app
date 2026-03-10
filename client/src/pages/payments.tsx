import { useState } from "react";
import { ChevronUp, ExternalLink, Pin, X } from "lucide-react";
import { useLocation } from "wouter";
import { Sidebar, Header } from "./clients";

export default function PaymentsPage() {
  const [openMenus, setOpenMenus] = useState<string>('sales');
  const [location] = useLocation();
  const [selectedPayment, setSelectedPayment] = useState<any>(null);

  const toggleMenu = (menu: string) => {
    setOpenMenus(prev => prev === menu ? '' : menu);
  };

  const paymentsList = [
    { id: "#9", date: "02-03-2026", invoice: "INV-000023", amount: "$0.00", client: "Vs Test", method: "Stripe" },
    { id: "#8", date: "01-03-2026", invoice: "INV-000022", amount: "$0.00", client: "Vs Test", method: "Stripe" },
    { id: "#7", date: "28-02-2026", invoice: "INV-000021", amount: "$0.00", client: "Vs Test", method: "Stripe" },
    { id: "#6", date: "27-02-2026", invoice: "INV-000020", amount: "$0.00", client: "Vs Test", method: "Stripe" },
    { id: "#5", date: "27-02-2026", invoice: "INV-000019", amount: "$0.00", client: "Vs Test", method: "Stripe" },
    { id: "#4", date: "27-02-2026", invoice: "INV-000018", amount: "$0.00", client: "Vs Test", method: "Stripe" },
  ];

  return (
    <div className="h-screen w-full overflow-hidden bg-transparent flex font-sans text-[#1e293b]">
      <Sidebar openMenus={openMenus} toggleMenu={toggleMenu} currentPath={location} />

      <div className="flex-1 flex flex-col min-w-0 bg-white/30 backdrop-blur-3xl">
        <Header title="Billings" />

        <main className="flex-1 overflow-y-auto p-6 lg:p-8 relative">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-[22px] font-semibold text-[#0f172a] mb-6">Billings</h1>

            <div className="modern-card shadow-sm p-6 border border-white/60">
              <h2 className="text-sm font-medium text-[#64748b] mb-6">Billing History</h2>

              <div className="overflow-x-auto">
                <table className="w-full text-sm text-left whitespace-nowrap border-separate" style={{ borderSpacing: '0 12px' }}>
                  <thead>
                    <tr className="bg-white/80 backdrop-blur-md/50 text-[#64748b]">
                      <th className="py-4 px-6 font-medium rounded-l-[12px] cursor-pointer hover:text-[#0f172a] w-24">
                        <div className="flex items-center gap-1.5 text-[13px]">ID# <ChevronUp className="w-3.5 h-3.5 opacity-50" /></div>
                      </th>
                      <th className="py-4 px-6 font-medium cursor-pointer hover:text-[#0f172a]">
                        <div className="flex items-center gap-1.5 text-[13px]">Date <ChevronUp className="w-3.5 h-3.5 opacity-50" /></div>
                      </th>
                      <th className="py-4 px-6 font-medium cursor-pointer hover:text-[#0f172a]">
                        <div className="flex items-center gap-1.5 text-[13px]">Invoice <ChevronUp className="w-3.5 h-3.5 opacity-50" /></div>
                      </th>
                      <th className="py-4 px-6 font-medium cursor-pointer hover:text-[#0f172a]">
                        <div className="flex items-center gap-1.5 text-[13px]">Amount <ChevronUp className="w-3.5 h-3.5 opacity-50" /></div>
                      </th>
                      <th className="py-4 px-6 font-medium cursor-pointer hover:text-[#0f172a]">
                        <div className="flex items-center gap-1.5 text-[13px]">Client <ChevronUp className="w-3.5 h-3.5 opacity-50" /></div>
                      </th>
                      <th className="py-4 px-6 font-medium cursor-pointer hover:text-[#0f172a]">
                        <div className="flex items-center gap-1.5 text-[13px]">Method <ChevronUp className="w-3.5 h-3.5 opacity-50" /></div>
                      </th>
                      <th className="py-4 px-6 font-medium rounded-r-[12px] text-[13px]">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {paymentsList.map((payment, i) => (
                      <tr key={i} className="bg-white/80 backdrop-blur-md group">
                        <td className="py-4 px-6 font-medium text-[#0f172a] rounded-l-[12px] border-y border-l border-[#e2e8f0] group-hover:border-[#cbd5e1] transition-colors">
                          <button 
                            className="text-[#8b5cf6] hover:text-[#7c3aed] transition-colors hover:underline"
                            onClick={() => setSelectedPayment(payment)}
                          >
                            {payment.id}
                          </button>
                        </td>
                        <td className="py-4 px-6 font-medium text-[#0f172a] border-y border-[#e2e8f0] group-hover:border-[#cbd5e1] transition-colors">{payment.date}</td>
                        <td className="py-4 px-6 font-medium text-[#0f172a] border-y border-[#e2e8f0] group-hover:border-[#cbd5e1] transition-colors">{payment.invoice}</td>
                        <td className="py-4 px-6 font-medium text-[#0f172a] border-y border-[#e2e8f0] group-hover:border-[#cbd5e1] transition-colors">{payment.amount}</td>
                        <td className="py-4 px-6 font-medium text-[#0f172a] border-y border-[#e2e8f0] group-hover:border-[#cbd5e1] transition-colors">{payment.client}</td>
                        <td className="py-4 px-6 font-medium text-[#0f172a] border-y border-[#e2e8f0] group-hover:border-[#cbd5e1] transition-colors">{payment.method}</td>
                        <td className="py-4 px-6 border-y border-r border-[#e2e8f0] group-hover:border-[#cbd5e1] transition-colors rounded-r-[12px]">
                           <div className="flex items-center gap-3 text-[#94a3b8]">
                              <button 
                                className="hover:text-[#0f172a] transition-colors"
                                onClick={() => setSelectedPayment(payment)}
                              >
                                <ExternalLink className="w-4 h-4" />
                              </button>
                              <button className="hover:text-[#0f172a] transition-colors">
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

      {/* Payment Details Popup */}
      {selectedPayment && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm transition-all">
          <div className="modern-card shadow-xl w-full max-w-3xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">
            <div className="flex justify-between items-center p-6 pb-4">
              <h2 className="text-xl font-bold text-[#0f172a]">Payment</h2>
              <button 
                onClick={() => setSelectedPayment(null)}
                className="text-[#64748b] hover:text-[#0f172a] transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="p-6 pt-2 pb-12">
              <div className="border border-white/60 rounded-md overflow-hidden">
                <table className="w-full text-[14px] text-left">
                  <tbody className="divide-y divide-[#e2e8f0]">
                    <tr>
                      <td className="py-3 px-4 font-medium text-[#475569] bg-white/80 backdrop-blur-md/50 w-1/3 border-r border-[#e2e8f0]">Payment ID</td>
                      <td className="py-3 px-4 text-[#0f172a]">{selectedPayment.id}</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-medium text-[#475569] bg-white/80 backdrop-blur-md/50 border-r border-[#e2e8f0]">Amount</td>
                      <td className="py-3 px-4 text-[#0f172a]">{selectedPayment.amount}</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-medium text-[#475569] bg-white/80 backdrop-blur-md/50 border-r border-[#e2e8f0]">Invoice ID</td>
                      <td className="py-3 px-4 text-[#0f172a]">{selectedPayment.invoice}</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-medium text-[#475569] bg-white/80 backdrop-blur-md/50 border-r border-[#e2e8f0]">Date</td>
                      <td className="py-3 px-4 text-[#0f172a]">{selectedPayment.date}</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-medium text-[#475569] bg-white/80 backdrop-blur-md/50 border-r border-[#e2e8f0]">Payment Method</td>
                      <td className="py-3 px-4 text-[#0f172a]">{selectedPayment.method}</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-medium text-[#475569] bg-white/80 backdrop-blur-md/50 border-r border-[#e2e8f0]">Client</td>
                      <td className="py-3 px-4 text-[#0f172a]">{selectedPayment.client}</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-medium text-[#475569] bg-white/80 backdrop-blur-md/50 border-r border-[#e2e8f0]">Notes</td>
                      <td className="py-3 px-4 text-[#0f172a]"></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
