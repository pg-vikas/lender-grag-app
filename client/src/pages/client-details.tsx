import { useState } from "react";
import { useLocation } from "wouter";
import { Sidebar, Header } from "./clients";
import { Building2, Edit2, Mail, MapPin, Globe, Compass, Plus, Phone, Bell, Search, Info, PlusCircle, CheckCircle2, ChevronDown, Users, MessageSquare } from "lucide-react";

export default function ClientDetailsPage() {
  const [openMenus, setOpenMenus] = useState<string>('crm');
  const [location] = useLocation();

  const toggleMenu = (menu: string) => {
    setOpenMenus(prev => prev === menu ? '' : menu);
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] flex font-sans text-[#1e293b]">
      <Sidebar openMenus={openMenus} toggleMenu={toggleMenu} currentPath="/clients" />

      <div className="flex-1 flex flex-col min-w-0">
        <Header title="Client Details" />

        <main className="flex-1 overflow-y-auto p-6 lg:p-8">
          <div className="max-w-[1400px] mx-auto">
            
            <div className="mb-6 flex items-center justify-between">
              <h1 className="text-xl font-bold text-[#0f172a]">Client - Luciene Sant'Anna Takagi, PsyD</h1>
            </div>

            <div className="flex flex-col lg:flex-row gap-6">
              
              {/* Left Sidebar */}
              <div className="w-full lg:w-[320px] shrink-0 space-y-6">
                
                {/* Company Details */}
                <div className="bg-white rounded-xl shadow-[0_2px_10px_rgba(0,0,0,0.02)] border border-[#e2e8f0] overflow-hidden">
                  <div className="p-4 bg-[#f8fafc] border-b border-[#e2e8f0] flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <Building2 className="w-4 h-4 text-[#8b5cf6]" />
                      <span className="font-semibold text-[#0f172a] text-[14px]">Company Details</span>
                    </div>
                    <button className="text-[#8b5cf6] text-[13px] font-medium flex items-center gap-1 hover:text-[#7c3aed]">
                      <Edit2 className="w-3.5 h-3.5" /> Edit
                    </button>
                  </div>
                  <div className="p-5 space-y-4">
                    <div>
                      <h3 className="text-[15px] font-bold text-[#0f172a] mb-1">Luciene Sant'Anna Takagi, PsyD</h3>
                      <span className="inline-block px-2 py-0.5 bg-[#f1f5f9] text-[#64748b] text-[11px] rounded border border-[#e2e8f0]">No communication yet</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-[12px] text-[#64748b]">Status:</span>
                      <span className="inline-flex items-center justify-center px-3 py-1 rounded-full text-[11px] font-semibold text-amber-600 border border-amber-200 bg-amber-50">Brand New</span>
                    </div>
                    <div className="flex flex-col gap-1">
                      <span className="text-[12px] text-[#64748b]">Assigned to:</span>
                      <div className="px-3 py-1.5 bg-[#f8fafc] border border-[#e2e8f0] rounded text-[12px] text-[#0f172a] flex justify-between items-center">
                        <span className="truncate">Maria Christina (maria@pinkgorilla...)</span>
                        <ChevronDown className="w-3.5 h-3.5 text-[#94a3b8] shrink-0" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Contact Information */}
                <div className="bg-white rounded-xl shadow-[0_2px_10px_rgba(0,0,0,0.02)] border border-[#e2e8f0] overflow-hidden">
                  <div className="p-4 bg-[#f8fafc] border-b border-[#e2e8f0] flex items-center gap-2">
                    <Phone className="w-4 h-4 text-[#8b5cf6]" />
                    <span className="font-semibold text-[#0f172a] text-[14px]">Contact Information</span>
                  </div>
                  <div className="p-5 space-y-3">
                    <div className="flex items-center gap-3 p-2.5 bg-[#f8fafc] border border-[#e2e8f0] rounded-lg">
                      <Phone className="w-4 h-4 text-[#94a3b8]" />
                      <span className="text-[13px] text-[#0f172a]">+1 973 979 7987</span>
                    </div>
                    <div className="flex items-center gap-3 p-2.5 bg-[#f8fafc] border border-[#e2e8f0] rounded-lg">
                      <Mail className="w-4 h-4 text-[#94a3b8]" />
                      <span className="text-[13px] text-[#94a3b8]">---</span>
                    </div>
                    <div className="flex items-center gap-3 p-2.5 bg-[#f8fafc] border border-[#e2e8f0] rounded-lg">
                      <MapPin className="w-4 h-4 text-[#94a3b8]" />
                      <span className="text-[13px] text-[#94a3b8]">---</span>
                    </div>
                  </div>
                </div>

                {/* Website */}
                <div className="bg-white rounded-xl shadow-[0_2px_10px_rgba(0,0,0,0.02)] border border-[#e2e8f0] overflow-hidden">
                  <div className="p-4 bg-[#f8fafc] border-b border-[#e2e8f0] flex items-center gap-2">
                    <Globe className="w-4 h-4 text-[#22c55e]" />
                    <span className="font-semibold text-[#0f172a] text-[14px]">Website</span>
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-3">
                      <Globe className="w-4 h-4 text-[#22c55e]" />
                      <span className="text-[13px] text-[#94a3b8]">---</span>
                    </div>
                  </div>
                </div>

                {/* Business Discovery */}
                <div className="bg-white rounded-xl shadow-[0_2px_10px_rgba(0,0,0,0.02)] border border-[#e2e8f0] overflow-hidden">
                  <div className="p-4 bg-[#f8fafc] border-b border-[#e2e8f0] flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <Compass className="w-4 h-4 text-[#f97316]" />
                      <span className="font-semibold text-[#0f172a] text-[14px]">Business Discovery</span>
                    </div>
                    <button className="text-[#8b5cf6]">
                      <Edit2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                  <div className="p-5">
                    <p className="text-[13px] text-[#64748b] mb-4">No business discovery links added yet.</p>
                    <button className="w-full py-2 bg-[#f8fafc] border border-[#e2e8f0] hover:bg-[#f1f5f9] text-[#f97316] rounded-md text-[13px] font-medium transition-colors flex items-center justify-center gap-2">
                      <Plus className="w-3.5 h-3.5" /> Add More
                    </button>
                  </div>
                </div>

                {/* Google Analytics */}
                <div className="bg-white rounded-xl shadow-[0_2px_10px_rgba(0,0,0,0.02)] border border-[#e2e8f0] overflow-hidden">
                  <div className="p-4 bg-[#f8fafc] border-b border-[#e2e8f0]">
                    <span className="font-semibold text-[#0f172a] text-[14px]">Google Analytics</span>
                  </div>
                  <div className="p-5">
                    <button className="px-4 py-1.5 border border-[#3b82f6] text-[#3b82f6] hover:bg-blue-50 rounded-md text-[13px] font-medium transition-colors flex items-center gap-2">
                      Connect
                    </button>
                  </div>
                </div>

                {/* Billing Information */}
                <div className="bg-white rounded-xl shadow-[0_2px_10px_rgba(0,0,0,0.02)] border border-[#e2e8f0] overflow-hidden">
                  <div className="p-4 bg-[#f8fafc] border-b border-[#e2e8f0]">
                    <span className="font-semibold text-[#0f172a] text-[14px]">Billing Information</span>
                  </div>
                  <div className="p-5 space-y-4">
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-[#ec4899]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-[13px] text-[#ec4899] font-medium">Plan Type - No Plan</span>
                    </div>
                    <div className="flex gap-2">
                      <button className="px-4 py-1.5 bg-[#ec4899] hover:bg-[#db2777] text-white rounded-md text-[12px] font-medium transition-colors">
                        Choose Plan
                      </button>
                      <button className="px-4 py-1.5 border border-[#ec4899] text-[#ec4899] hover:bg-pink-50 rounded-md text-[12px] font-medium transition-colors">
                        Agreement
                      </button>
                    </div>
                  </div>
                </div>

                {/* Background */}
                <div className="bg-white rounded-xl shadow-[0_2px_10px_rgba(0,0,0,0.02)] border border-[#e2e8f0] overflow-hidden">
                  <div className="p-4 bg-[#f8fafc] border-b border-[#e2e8f0] flex justify-between items-center">
                    <span className="font-semibold text-[#0f172a] text-[14px]">Background</span>
                    <button className="text-[#8b5cf6]">
                      <Edit2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                  <div className="p-5">
                    <p className="text-[12px] text-[#475569] break-words">
                      https://www.yelp.com/biz/luciene-santanna-takagi-psyd-newark?osq=Psychologists
                    </p>
                  </div>
                </div>

                {/* General */}
                <div className="bg-white rounded-xl shadow-[0_2px_10px_rgba(0,0,0,0.02)] border border-[#e2e8f0] overflow-hidden">
                  <div className="p-4 bg-[#f8fafc] border-b border-[#e2e8f0]">
                    <span className="font-semibold text-[#0f172a] text-[14px]">General</span>
                  </div>
                  <div className="p-5 space-y-3">
                    <div className="flex items-center gap-2">
                      <Mail className="w-3.5 h-3.5 text-[#0ea5e9]" />
                      <span className="text-[12px] text-[#64748b]">Timezone:</span>
                      <span className="text-[12px] text-[#0ea5e9]">America/Denver</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-3.5 text-center text-[#0ea5e9] text-[12px] font-bold">$</span>
                      <span className="text-[12px] text-[#64748b]">Currency:</span>
                      <span className="text-[12px] text-[#0ea5e9]">USD</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-3.5 text-center text-[#0ea5e9] text-[12px] font-bold">A<span className="text-[9px]">文</span></span>
                      <span className="text-[12px] text-[#64748b]">Language:</span>
                      <span className="text-[12px] text-[#0ea5e9]">English - US</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Building2 className="w-3.5 h-3.5 text-[#0ea5e9]" />
                      <span className="text-[12px] text-[#64748b]">Industry:</span>
                      <span className="text-[12px] text-[#0ea5e9]">Retail Trade</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-3.5 h-3.5 text-[#0ea5e9]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="10"/>
                        <path d="M12 6v6l4 2"/>
                      </svg>
                      <span className="text-[12px] text-[#64748b]">Year in Business:</span>
                      <span className="text-[12px] text-[#0ea5e9]">yr</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-3.5 h-3.5 text-[#0ea5e9]" />
                      <span className="text-[12px] text-[#64748b]">No. of Employee:</span>
                      <span className="text-[12px] text-[#0ea5e9]">1-3</span>
                    </div>
                  </div>
                </div>

                {/* Employee Details */}
                <div className="bg-white rounded-xl shadow-[0_2px_10px_rgba(0,0,0,0.02)] border border-[#e2e8f0] overflow-hidden">
                  <div className="p-4 flex justify-between items-center">
                    <span className="font-semibold text-[#0f172a] text-[14px]">Employee Details</span>
                    <button className="w-6 h-6 rounded bg-[#f1f5f9] flex items-center justify-center text-[#8b5cf6] hover:bg-[#e2e8f0]">
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Compliance Essentials */}
                <div className="bg-white rounded-xl shadow-[0_2px_10px_rgba(0,0,0,0.02)] border border-[#e2e8f0] overflow-hidden">
                  <div className="p-4 bg-[#f8fafc] border-b border-[#e2e8f0]">
                    <span className="font-semibold text-[#0f172a] text-[14px]">Compliance Essentials</span>
                  </div>
                  <div className="p-5 space-y-3">
                    {[
                      "Privacy Policy",
                      "Terms of Service (Terms & Conditions)",
                      "Cookies Policy / Tracking Policy",
                      "Accessibility Statement (ADA Compliance)",
                      "Disclaimer(s) (Real Estate, Fair Housing, No Warranty, etc. as applicable)",
                      "SSL Certificate (HTTPS Security) - not a page, but an essential requirement",
                      "Powered by Pink Gorilla Footer"
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <div className="w-4 h-4 rounded border border-[#cbd5e1] mt-0.5 shrink-0"></div>
                        <span className="text-[12px] text-[#475569] leading-tight">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

              {/* Middle & Right Content */}
              <div className="flex-1 flex flex-col gap-6 min-w-0">
                
                {/* Communications Section */}
                <div className="bg-white rounded-xl shadow-[0_2px_10px_rgba(0,0,0,0.02)] border border-[#e2e8f0] overflow-hidden">
                  <div className="p-5 border-b border-[#e2e8f0] flex justify-between items-center">
                    <h2 className="text-[16px] font-bold text-[#0f172a]">Communications</h2>
                    <div className="flex items-center gap-4">
                      <button className="flex items-center gap-1.5 px-4 py-1.5 bg-[#ec4899] text-white rounded-md text-[13px] font-medium shadow-sm">
                        <Mail className="w-3.5 h-3.5" /> Email
                      </button>
                      <button className="flex items-center gap-1.5 text-[#64748b] text-[13px] font-medium hover:text-[#0f172a]">
                        <MessageSquare className="w-3.5 h-3.5" /> SMS
                      </button>
                      <button className="flex items-center gap-1.5 text-[#64748b] text-[13px] font-medium hover:text-[#0f172a]">
                        <Phone className="w-3.5 h-3.5" /> Call
                      </button>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="border border-[#e2e8f0] rounded-lg p-5 bg-[#f8fafc]">
                      <div className="space-y-4">
                        <div>
                          <label className="block text-[13px] font-medium text-[#1e293b] mb-1.5">To*</label>
                          <input type="text" placeholder="Enter recipient email" className="w-full px-3 py-2 bg-white border border-[#e2e8f0] rounded-md text-[13px] focus:outline-none focus:border-[#8b5cf6]" />
                          <p className="text-[11px] text-[#64748b] mt-1">
                            Type email address separated by commas to add multiple email address.<br/>
                            Example: <span className="text-[#ec4899]">demo@pinkgorilla.agency, demo2@pinkgorilla.agency</span>
                          </p>
                        </div>
                        
                        <div>
                          <label className="block text-[13px] font-medium text-[#1e293b] mb-1.5">From*</label>
                          <select className="w-full px-3 py-2 bg-white border border-[#e2e8f0] rounded-md text-[13px] text-[#0f172a] focus:outline-none">
                            <option>Neeraj Kumar (neeraj@pinkgorillasoftware.com)</option>
                          </select>
                        </div>
                        
                        <div>
                          <label className="block text-[13px] font-medium text-[#1e293b] mb-1.5">Subject*</label>
                          <input type="text" placeholder="Enter email subject" className="w-full px-3 py-2 bg-white border border-[#e2e8f0] rounded-md text-[13px] focus:outline-none focus:border-[#8b5cf6]" />
                        </div>
                        
                        <div>
                          <label className="block text-[13px] font-medium text-[#1e293b] mb-1.5">Email Template</label>
                          <select className="w-full px-3 py-2 bg-white border border-[#e2e8f0] rounded-md text-[13px] text-[#64748b] focus:outline-none">
                            <option>Select Template</option>
                          </select>
                        </div>
                        
                        <div>
                          <label className="block text-[13px] font-medium text-[#1e293b] mb-1.5">Message*</label>
                          <div className="border border-[#e2e8f0] rounded-md bg-white overflow-hidden flex flex-col">
                            <div className="flex items-center gap-1 border-b border-[#e2e8f0] p-1.5 bg-[#f8fafc]">
                              <button className="p-1 hover:bg-[#e2e8f0] rounded"><span className="font-bold text-[12px] px-1">B</span></button>
                              <button className="p-1 hover:bg-[#e2e8f0] rounded"><span className="italic text-[12px] px-1">I</span></button>
                              <button className="p-1 hover:bg-[#e2e8f0] rounded"><span className="underline text-[12px] px-1">U</span></button>
                              <div className="w-[1px] h-4 bg-[#cbd5e1] mx-1"></div>
                              <button className="p-1 hover:bg-[#e2e8f0] rounded"><svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></button>
                            </div>
                            <textarea className="w-full p-3 min-h-[150px] resize-none focus:outline-none text-[13px]"></textarea>
                          </div>
                        </div>
                        
                        <div className="flex justify-between items-center pt-2">
                          <button className="px-3 py-1.5 border border-[#e2e8f0] bg-white text-[#475569] rounded text-[12px] font-medium flex items-center gap-1.5 hover:bg-[#f8fafc]">
                            <Plus className="w-3.5 h-3.5" /> Attach Files
                          </button>
                          <button className="px-5 py-2 bg-[#ec4899] hover:bg-[#db2777] text-white rounded-md text-[13px] font-medium transition-colors shadow-sm">
                            Send Email
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Notes Section */}
                <div className="bg-white rounded-xl shadow-[0_2px_10px_rgba(0,0,0,0.02)] border border-[#e2e8f0] overflow-hidden">
                  <div className="p-4 bg-[#f8fafc] border-b border-[#e2e8f0] flex justify-between items-center">
                    <span className="font-semibold text-[#0f172a] text-[15px]">Notes</span>
                    <button className="flex items-center gap-1.5 px-3 py-1.5 bg-white border border-[#e2e8f0] rounded text-[12px] font-medium text-[#475569] hover:bg-[#f1f5f9]">
                      <PlusCircle className="w-3.5 h-3.5" /> Add Note
                    </button>
                  </div>
                  <div className="p-5">
                    <div className="bg-[#fefce8] border border-[#fde047] rounded-lg p-4 relative">
                      <div className="absolute top-3 right-3 flex gap-2">
                        <button className="text-[#8b5cf6]"><Edit2 className="w-3.5 h-3.5" /></button>
                        <button className="text-[#ef4444]"><svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 6h18M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2"></path></svg></button>
                      </div>
                      <h4 className="font-semibold text-[#0f172a] text-[14px] mb-2">brand new</h4>
                      <p className="text-[13px] text-[#475569] mb-4">-brand new-no logo no website-follow up in 3 days</p>
                      
                      <div className="flex items-center gap-4 text-[11px] text-[#64748b]">
                        <div className="flex items-center gap-1.5">
                          <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold">M</div>
                          <span>Maria</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <span className="w-1 h-1 rounded-full bg-[#cbd5e1]"></span>
                          09 Mar, 2026
                        </div>
                        <div className="flex items-center gap-1">
                          <span className="w-1 h-1 rounded-full bg-[#cbd5e1]"></span>
                          02:40 pm
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Samples Section */}
                <div className="bg-white rounded-xl shadow-[0_2px_10px_rgba(0,0,0,0.02)] border border-[#e2e8f0] overflow-hidden">
                  <div className="p-4 bg-[#f8fafc] border-b border-[#e2e8f0] flex justify-between items-center">
                    <span className="font-semibold text-[#0f172a] text-[15px]">Samples</span>
                    <div className="flex gap-2">
                      <button className="flex items-center gap-1.5 px-3 py-1.5 border border-[#8b5cf6] text-[#8b5cf6] rounded text-[12px] font-medium hover:bg-purple-50">
                        <Plus className="w-3.5 h-3.5" /> Generate Website
                      </button>
                      <button className="flex items-center gap-1.5 px-3 py-1.5 border border-[#8b5cf6] text-[#8b5cf6] rounded text-[12px] font-medium hover:bg-purple-50">
                        <Plus className="w-3.5 h-3.5" /> Add Logo Sample
                      </button>
                    </div>
                  </div>
                  <div className="p-12 flex flex-col items-center justify-center text-center">
                    <div className="w-16 h-16 mb-4 flex items-center justify-center bg-[#f1f5f9] rounded-full">
                      <Search className="w-8 h-8 text-[#94a3b8]" />
                    </div>
                    <h3 className="text-[16px] font-semibold text-[#0f172a] mb-1">No records were found</h3>
                    <p className="text-[13px] text-[#64748b]">Try a difference search</p>
                  </div>
                </div>

                {/* Analytics Info Banner */}
                <div className="bg-[#eff6ff] border-l-4 border-[#3b82f6] p-4 rounded-r-lg flex items-start gap-3">
                  <Info className="w-5 h-5 text-[#3b82f6] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-[14px] font-semibold text-[#1e3a8a] mb-1">No Analytics Configured</h4>
                    <p className="text-[13px] text-[#3b82f6]/80">This client has not configured Google Analytics yet. Configure it from the left panel.</p>
                  </div>
                </div>
              </div>

              {/* Right Sidebar (Tasks & Activity) */}
              <div className="w-full lg:w-[320px] shrink-0 space-y-6">
                
                {/* Pagination */}
                <div className="flex justify-between items-center bg-white rounded-lg border border-[#e2e8f0] p-2">
                  <button className="px-3 py-1 text-[12px] text-[#64748b] hover:text-[#0f172a] font-medium flex items-center gap-1">
                    <ChevronDown className="w-3.5 h-3.5 rotate-90" /> Previous
                  </button>
                  <span className="text-[12px] text-[#94a3b8]">Client 2573 of 4539</span>
                  <button className="px-3 py-1 text-[12px] text-[#64748b] hover:text-[#0f172a] font-medium flex items-center gap-1">
                    Next <ChevronDown className="w-3.5 h-3.5 -rotate-90" />
                  </button>
                </div>

                {/* Tasks Widget */}
                <div className="bg-white rounded-xl shadow-[0_2px_10px_rgba(0,0,0,0.02)] border border-[#e2e8f0] overflow-hidden">
                  <div className="p-4 bg-[#f0fdf4] border-b border-[#bbf7d0] flex justify-between items-center">
                    <span className="font-semibold text-[#166534] text-[15px]">Tasks</span>
                    <div className="flex gap-2">
                      <button className="w-6 h-6 rounded-full bg-white flex items-center justify-center text-[#22c55e] shadow-sm"><Globe className="w-3.5 h-3.5" /></button>
                      <button className="w-6 h-6 rounded-full bg-[#22c55e] flex items-center justify-center text-white shadow-sm"><svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg></button>
                      <button className="w-6 h-6 rounded-full bg-white flex items-center justify-center text-[#22c55e] shadow-sm"><Plus className="w-4 h-4" /></button>
                    </div>
                  </div>
                  <div className="p-10 flex flex-col items-center justify-center text-center bg-[#f8fafc]">
                    <div className="w-12 h-12 mb-3 flex items-center justify-center text-[#94a3b8]">
                      <Search className="w-8 h-8" />
                    </div>
                    <h3 className="text-[15px] font-semibold text-[#0f172a] mb-1">No records were found</h3>
                    <p className="text-[12px] text-[#64748b]">Try a difference search</p>
                  </div>
                </div>

                {/* Activity Log */}
                <div className="bg-white rounded-xl shadow-[0_2px_10px_rgba(0,0,0,0.02)] border border-[#e2e8f0] overflow-hidden">
                  <div className="p-4 border-b border-[#e2e8f0] flex justify-between items-center">
                    <span className="font-semibold text-[#0f172a] text-[15px]">Activity Log</span>
                    <button className="flex items-center gap-1 text-[12px] text-[#64748b] bg-[#f8fafc] px-2 py-1 rounded border border-[#e2e8f0]">
                      All Activities <ChevronDown className="w-3 h-3" />
                    </button>
                  </div>
                  <div className="p-4 space-y-3">
                    
                    {/* Activity 1 */}
                    <div className="bg-[#fefce8] border border-[#fde047] rounded-lg p-3 relative">
                      <div className="flex gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#eab308] shrink-0 mt-0.5" />
                        <div>
                          <p className="text-[13px] font-medium text-[#1e293b] leading-tight">Follow Up task added.</p>
                          <div className="flex flex-col mt-2 gap-0.5 text-[11px] text-[#64748b]">
                            <span>Mar 09, 2026 - 02:40 PM</span>
                            <span>Added By Maria Christina</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Activity 2 */}
                    <div className="bg-[#fefce8] border border-[#fde047] rounded-lg p-3 relative">
                      <div className="flex gap-2">
                        <MessageSquare className="w-4 h-4 text-[#eab308] shrink-0 mt-0.5" />
                        <div>
                          <p className="text-[13px] font-medium text-[#1e293b] leading-tight line-clamp-2">Hi! Saw your business on Yelp. We're a web development company offerin...</p>
                          <div className="flex flex-col mt-2 gap-0.5 text-[11px] text-[#64748b]">
                            <span>Mar 09, 2026 - 02:40 PM</span>
                            <span>Sent by Maria Christina</span>
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>

              </div>

            </div>

          </div>
        </main>
      </div>
    </div>
  );
}