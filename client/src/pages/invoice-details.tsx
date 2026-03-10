import { useState } from "react";
import { useLocation } from "wouter";
import { Sidebar, Header } from "./clients";
import { Download, Info } from "lucide-react";

export default function InvoiceDetailsPage() {
  const [openMenus, setOpenMenus] = useState<string>('');
  const [location] = useLocation();

  const toggleMenu = (menu: string) => {
    setOpenMenus(prev => prev === menu ? '' : menu);
  };

  return (
    <div className="h-screen w-full overflow-hidden bg-transparent flex font-sans text-[#1e293b]">
      <Sidebar openMenus={openMenus} toggleMenu={toggleMenu} currentPath="/invoices" />

      <div className="flex-1 flex flex-col min-w-0 bg-white ">
        <Header title="Invoice Details" />

        <main className="flex-1 overflow-y-auto p-6 lg:p-8 relative">
          <div className="max-w-5xl mx-auto">
            <div className="flex justify-between items-center mb-8">
              <h1 className="text-[22px] font-semibold text-[#0f172a]">Invoice #INV-000023</h1>
              <button className="w-10 h-10 flex items-center justify-center bg-white border border-[#e2e8f0]/80 rounded-xl shadow-sm text-[#475569] shadow-sm hover:bg-[#f8fafc] transition-colors">
                <Download className="w-4 h-4" />
              </button>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-[#e2e8f0] p-8 md:p-12 mb-6">
               <div className="flex justify-between items-start mb-12">
                  <div>
                    <h2 className="text-[16px] font-bold text-[#0f172a] mb-1">Invoice</h2>
                    <p className="text-[14px] text-[#64748b] underline underline-offset-2 hover:text-[#0f172a] cursor-pointer">#INV-000023</p>
                  </div>
                  <div className="text-[24px] font-medium text-[#2dd4bf] tracking-wider">
                    PAID
                  </div>
               </div>

               <div className="flex flex-col md:flex-row justify-between gap-12 mb-12">
                  <div>
                    <h3 className="text-[16px] font-bold text-[#0f172a] mb-2">Pink Gorilla</h3>
                    <div className="text-[13px] text-[#475569] leading-relaxed">
                      <p>8605 Santa Monica Blvd</p>
                      <p>West Hollywood</p>
                      <p>CA</p>
                      <p>90069</p>
                      <p>United States</p>
                    </div>
                  </div>
                  <div className="md:text-right">
                    <h3 className="text-[13px] font-medium text-[#64748b] mb-1">Invoice To</h3>
                    <p className="text-[15px] font-bold text-[#0f172a]">Vs Test</p>
                  </div>
               </div>

               <div className="flex flex-col md:flex-row justify-between gap-8 border-b border-[#e2e8f0] pb-8 mb-8">
                 <div className="flex gap-12">
                   <div>
                     <p className="text-[13px] text-[#64748b] mb-1">Invoice Date:</p>
                     <p className="text-[13px] text-[#64748b]">Due Date:</p>
                   </div>
                   <div>
                     <p className="text-[13px] font-medium text-[#0f172a] mb-1">02-03-2026</p>
                     <p className="text-[13px] font-medium text-[#0f172a]">02-03-2026</p>
                   </div>
                 </div>
                 <div className="flex gap-8 md:gap-12 justify-between md:justify-end">
                   <div className="text-right space-y-1">
                     <p className="text-[13px] text-[#64748b]">Payments:</p>
                     <p className="text-[13px] text-[#64748b] font-medium">Balance Due:</p>
                   </div>
                   <div className="text-right space-y-1">
                     <p className="text-[13px] font-medium text-[#0f172a]">$0.00</p>
                     <p className="text-[13px] font-semibold text-[#10b981] bg-green-50 border border-green-200 px-3 rounded-full inline-block">$0.00</p>
                   </div>
                 </div>
               </div>

               <div className="w-full overflow-x-auto">
                 <table className="w-full text-sm text-left whitespace-nowrap mb-6">
                   <thead className="bg-[#f8fafc] border-y border-[#e2e8f0]">
                     <tr>
                       <th className="py-3 px-4 font-semibold text-[#64748b] text-[13px] w-full">Description</th>
                       <th className="py-3 px-4 font-semibold text-[#64748b] text-[13px] text-right">Qty</th>
                       <th className="py-3 px-4 font-semibold text-[#64748b] text-[13px] text-right">Unit</th>
                       <th className="py-3 px-4 font-semibold text-[#64748b] text-[13px] text-right">Rate</th>
                       <th className="py-3 px-4 font-semibold text-[#64748b] text-[13px] text-right">Total</th>
                     </tr>
                   </thead>
                   <tbody className="divide-y divide-[#f1f5f9]">
                     <tr>
                       <td className="py-4 px-4 text-[#0f172a] text-[13px]">Core Starter</td>
                       <td className="py-4 px-4 text-[#475569] text-[13px] text-right">1</td>
                       <td className="py-4 px-4 text-[#475569] text-[13px] text-right">Each</td>
                       <td className="py-4 px-4 text-[#475569] text-[13px] text-right">0.00</td>
                       <td className="py-4 px-4 text-[#475569] text-[13px] text-right">0.00</td>
                     </tr>
                   </tbody>
                 </table>
                 
                 <div className="bg-[#f8fafc] border-y border-[#e2e8f0] py-4 px-4 flex justify-between items-center w-full">
                    <span className="font-bold text-[#0f172a] ml-auto mr-12 text-[15px]">Total</span>
                    <span className="font-bold text-[#0f172a] text-[15px]">$0.00</span>
                 </div>
               </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-[#e2e8f0] p-6">
              <div className="flex items-center gap-1.5 text-[15px] font-semibold text-[#0f172a]">
                Notes <Info className="w-4 h-4 text-[#94a3b8]" />
              </div>
            </div>

          </div>
        </main>
      </div>
    </div>
  );
}