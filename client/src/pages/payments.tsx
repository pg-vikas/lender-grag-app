import { useState } from "react";
import { ChevronUp, ExternalLink, Pin } from "lucide-react";
import { useLocation } from "wouter";
import { Sidebar, Header } from "./clients";

export default function PaymentsPage() {
  const [openMenus, setOpenMenus] = useState<string>('sales');
  const [location] = useLocation();

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
    <div className="min-h-screen bg-[#f3f4f8] flex font-sans text-[#1e293b]">
      <Sidebar openMenus={openMenus} toggleMenu={toggleMenu} currentPath={location} />

      <div className="flex-1 flex flex-col min-w-0">
        <Header title="Billings" />

        <main className="flex-1 overflow-y-auto p-6 lg:p-8">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-xl font-semibold text-[#0f172a] mb-6">Billings</h1>

            <div className="bg-white rounded-lg shadow-sm p-6 border border-[#e2e8f0]">
              <h2 className="text-sm font-medium text-[#64748b] mb-6">Billing History</h2>

              <div className="overflow-x-auto">
                <table className="w-full text-sm text-left whitespace-nowrap border-separate" style={{ borderSpacing: '0 12px' }}>
                  <thead>
                    <tr className="bg-[#f8fafc] text-[#64748b]">
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
                      <tr key={i} className="bg-white group shadow-sm">
                        <td className="py-5 px-6 font-medium text-[#0f172a] rounded-l-[12px] border-y border-l border-[#f1f5f9]">{payment.id}</td>
                        <td className="py-5 px-6 font-medium text-[#0f172a] border-y border-[#f1f5f9]">{payment.date}</td>
                        <td className="py-5 px-6 font-medium text-[#0f172a] border-y border-[#f1f5f9]">{payment.invoice}</td>
                        <td className="py-5 px-6 font-medium text-[#0f172a] border-y border-[#f1f5f9]">{payment.amount}</td>
                        <td className="py-5 px-6 font-medium text-[#0f172a] border-y border-[#f1f5f9]">{payment.client}</td>
                        <td className="py-5 px-6 font-medium text-[#0f172a] border-y border-[#f1f5f9]">{payment.method}</td>
                        <td className="py-5 px-6 border-y border-r border-[#f1f5f9] rounded-r-[12px]">
                           <div className="flex items-center gap-3 text-[#94a3b8]">
                              <button className="hover:text-[#0f172a] transition-colors">
                                <ExternalLink className="w-[18px] h-[18px]" />
                              </button>
                              <button className="hover:text-[#0f172a] transition-colors">
                                <Pin className="w-[18px] h-[18px]" />
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
