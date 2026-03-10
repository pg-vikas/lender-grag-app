import { useState } from "react";
import { Search, Filter, Plus, ChevronDown, CheckCircle2, Clock, CalendarDays, DollarSign } from "lucide-react";
import { useLocation } from "wouter";
import { Sidebar, Header } from "./clients";

export default function SubscriptionsPage() {
  const [openMenus, setOpenMenus] = useState<string>('sales');
  const [location] = useLocation();

  const toggleMenu = (menu: string) => {
    setOpenMenus(prev => prev === menu ? '' : menu);
  };

  const subscriptionsList = [
    { client: "Estate Landscape", plan: "Pro Tier", billingCycle: "Monthly", amount: "$499.00", nextBilling: "Oct 15, 2026", status: "Active" },
    { client: "Pink Gorilla Software", plan: "Enterprise", billingCycle: "Annual", amount: "$4,500.00", nextBilling: "Jan 01, 2027", status: "Active" },
    { client: "Summit Cabinets", plan: "Basic", billingCycle: "Monthly", amount: "$199.00", nextBilling: "Oct 10, 2026", status: "Past Due" },
    { client: "Urban Edge", plan: "Pro Tier", billingCycle: "Monthly", amount: "$499.00", nextBilling: "-", status: "Canceled" },
  ];

  return (
    <div className="min-h-screen bg-[#f3f4f8] flex font-sans text-[#1e293b]">
      <Sidebar openMenus={openMenus} toggleMenu={toggleMenu} currentPath={location} />

      <div className="flex-1 flex flex-col min-w-0">
        <Header title="Subscriptions" />

        <main className="flex-1 overflow-y-auto p-6 lg:p-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between mb-6">
              <h1 className="text-2xl font-bold text-[#0f172a]">Subscriptions</h1>
              <button className="flex items-center gap-2 px-4 py-2 bg-[#8b5cf6] hover:bg-[#7c3aed] text-white rounded-lg text-sm font-medium transition-colors shadow-sm">
                <Plus className="w-4 h-4" /> New Subscription
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
               <div className="bg-white rounded-[1rem] p-5 shadow-[0_2px_10px_rgba(0,0,0,0.02)] border border-[#f1f5f9]">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 rounded bg-purple-50 text-purple-600 flex items-center justify-center">
                       <DollarSign className="w-4 h-4" />
                    </div>
                    <span className="text-sm font-medium text-[#64748b]">MRR</span>
                  </div>
                  <h3 className="text-2xl font-bold text-[#0f172a]">$12,450</h3>
               </div>
               <div className="bg-white rounded-[1rem] p-5 shadow-[0_2px_10px_rgba(0,0,0,0.02)] border border-[#f1f5f9]">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 rounded bg-green-50 text-green-600 flex items-center justify-center">
                       <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <span className="text-sm font-medium text-[#64748b]">Active</span>
                  </div>
                  <h3 className="text-2xl font-bold text-[#0f172a]">142</h3>
               </div>
               <div className="bg-white rounded-[1rem] p-5 shadow-[0_2px_10px_rgba(0,0,0,0.02)] border border-[#f1f5f9]">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 rounded bg-amber-50 text-amber-600 flex items-center justify-center">
                       <Clock className="w-4 h-4" />
                    </div>
                    <span className="text-sm font-medium text-[#64748b]">Past Due</span>
                  </div>
                  <h3 className="text-2xl font-bold text-[#0f172a]">8</h3>
               </div>
               <div className="bg-white rounded-[1rem] p-5 shadow-[0_2px_10px_rgba(0,0,0,0.02)] border border-[#f1f5f9]">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 rounded bg-red-50 text-red-600 flex items-center justify-center">
                       <CalendarDays className="w-4 h-4" />
                    </div>
                    <span className="text-sm font-medium text-[#64748b]">Churn</span>
                  </div>
                  <h3 className="text-2xl font-bold text-[#0f172a]">2.4%</h3>
               </div>
            </div>

            <div className="bg-white rounded-[1rem] shadow-[0_2px_10px_rgba(0,0,0,0.02)] overflow-hidden border border-[#f1f5f9]">
              <div className="p-4 border-b border-[#f1f5f9] flex flex-col sm:flex-row gap-4 justify-between items-center bg-[#f8fafc]">
                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <div className="relative flex-1 sm:w-64">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#94a3b8]" />
                    <input 
                      type="text"
                      placeholder="Search subscriptions" 
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
                      <th className="py-4 px-6 font-semibold text-[#475569]">Client</th>
                      <th className="py-4 px-6 font-semibold text-[#475569]">Plan</th>
                      <th className="py-4 px-6 font-semibold text-[#475569]">Billing Cycle</th>
                      <th className="py-4 px-6 font-semibold text-[#475569]">Amount</th>
                      <th className="py-4 px-6 font-semibold text-[#475569]">Next Billing</th>
                      <th className="py-4 px-6 font-semibold text-[#475569]">Status</th>
                      <th className="py-4 px-6 font-semibold text-[#475569]">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#f1f5f9]">
                    {subscriptionsList.map((sub, i) => (
                      <tr key={i} className="hover:bg-[#f8fafc]/50 transition-colors bg-white">
                        <td className="py-4 px-6 font-medium text-[#0f172a]">{sub.client}</td>
                        <td className="py-4 px-6 text-[#64748b]">{sub.plan}</td>
                        <td className="py-4 px-6 text-[#64748b]">{sub.billingCycle}</td>
                        <td className="py-4 px-6 font-medium text-[#0f172a]">{sub.amount}</td>
                        <td className="py-4 px-6 text-[#64748b]">{sub.nextBilling}</td>
                        <td className="py-4 px-6">
                           <span className={`inline-flex items-center justify-center px-3 py-1 rounded-full text-xs font-semibold
                              ${sub.status === 'Active' ? 'bg-green-50 text-green-600 border border-green-200' : 
                                sub.status === 'Past Due' ? 'bg-amber-50 text-amber-600 border border-amber-200' : 'bg-red-50 text-red-600 border border-red-200'}`}>
                             {sub.status}
                           </span>
                        </td>
                        <td className="py-4 px-6">
                           <button className="text-sm font-medium text-[#8b5cf6] hover:text-[#7c3aed] transition-colors">
                             Manage
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
