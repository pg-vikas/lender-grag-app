import { useState } from "react";
import { useLocation, useParams } from "wouter";
import { Sidebar, Header } from "./clients";
import { Building2, Edit2, Mail, MapPin, Globe, Compass, Plus, Phone, Bell, Search, Info, PlusCircle, CheckCircle2, ChevronDown, Users, MessageSquare, Eye, Zap, X } from "lucide-react";

export default function ClientDetailsPage() {
  const [openMenus, setOpenMenus] = useState<string>('crm');
  const [activeTab, setActiveTab] = useState<string>('email');
  const [location, setLocation] = useLocation();
  const params = useParams<{ id: string }>();

  // Mock data for the specific client based on ID
  const clientId = params.id || "1";
  
  // Array of mock clients to simulate a database
  const clientsData = [
    { id: "1", name: "Pink Gorilla Software", industry: "Information Technology Services", phone: "+1 555 123 4567", email: "contact@pinkgorilla.agency" },
    { id: "2", name: "Estate Landscape", industry: "Retail Trade", phone: "+1 555 987 6543", email: "info@estatelandscape.com" },
    { id: "3", name: "Summit Cabinets", industry: "Retail Trade", phone: "+1 555 456 7890", email: "sales@summitcabinets.com" },
    { id: "90", name: "Test demo1", industry: "Health Care & Hospitals", phone: "+1 789 000 0070", email: "test.demo90@example.com" }
  ];

  const currentClient = clientsData.find(c => c.id === clientId) || { 
    id: clientId, 
    name: `Client ${clientId}`, 
    industry: "Other", 
    phone: "---", 
    email: "---" 
  };

  const [isAddTaskModalOpen, setIsAddTaskModalOpen] = useState(false);
  const [isTaskDropdownOpen, setIsTaskDropdownOpen] = useState(false);
  const [isEditClientModalOpen, setIsEditClientModalOpen] = useState(false);
  const [isBusinessDiscoveryModalOpen, setIsBusinessDiscoveryModalOpen] = useState(false);
  const [businessLinks, setBusinessLinks] = useState([{ label: '', url: '' }]);
  const [isAssigneeDropdownOpen, setIsAssigneeDropdownOpen] = useState(false);

  const addBusinessLink = () => {
    if (businessLinks.length < 6) {
      setBusinessLinks([...businessLinks, { label: '', url: '' }]);
    }
  };

  const removeBusinessLink = (index: number) => {
    const newLinks = businessLinks.filter((_, i) => i !== index);
    setBusinessLinks(newLinks);
  };

  const updateBusinessLink = (index: number, field: 'label' | 'url', value: string) => {
    const newLinks = [...businessLinks];
    newLinks[index][field] = value;
    setBusinessLinks(newLinks);
  };
  const [selectedAssignee, setSelectedAssignee] = useState('Maria Christina (maria@pinkgorilla...)');
  
  const assigneesList = [
    'Maria Christina (maria@pinkgorilla...)',
    'Vinayak Sharma (vinayak@...)',
    'Admin Gorilla (admin@...)',
    'John Doe (john@...)'
  ];

  const toggleMenu = (menu: string) => {
    setOpenMenus(prev => prev === menu ? '' : menu);
  };

  return (
    <div className="h-screen w-full overflow-hidden bg-transparent flex font-sans text-[#e2e8f0]">
      <Sidebar openMenus={openMenus} toggleMenu={toggleMenu} currentPath="/clients" />

      <div className="flex-1 flex flex-col min-w-0 bg-[#0f172a] relative">
        <Header title="Client Details" />

        <main className="flex-1 overflow-y-auto p-6 lg:p-8 relative">
          <div className="max-w-[1400px] mx-auto">
            
            <div className="mb-6 flex items-center justify-between">
              <h1 className="text-xl font-bold text-white">Client - {currentClient.name}</h1>
            </div>

            <div className="flex flex-col lg:flex-row gap-6">
              
              {/* Left Sidebar */}
              <div className="w-full lg:w-[320px] shrink-0 space-y-6">
                
                {/* Company Details */}
                <div className="bg-slate-900/40 backdrop-blur-xl rounded-xl border border-white/10 relative z-30">
                  <div className="p-4 bg-slate-900/40 backdrop-blur-xl/50 border-b border-white/10 flex justify-between items-center rounded-t-xl">
                    <div className="flex items-center gap-2">
                      <Building2 className="w-4 h-4 text-indigo-400" />
                      <span className="font-semibold text-white text-[14px]">Company Details</span>
                    </div>
                    <button 
                      onClick={() => setIsEditClientModalOpen(true)}
                      className="text-indigo-400 text-[13px] font-medium flex items-center gap-1 hover:text-[#7c3aed]"
                    >
                      <Edit2 className="w-3.5 h-3.5" /> Edit
                    </button>
                  </div>
                  <div className="p-5 space-y-4">
                    <div>
                      <h3 className="text-[15px] font-bold text-white mb-1">{currentClient.name}</h3>
                      <span className="inline-block px-2 py-0.5 bg-slate-800 text-slate-400 text-[11px] rounded border border-white/10">No communication yet</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-[12px] text-slate-400">Status:</span>
                      <span className="inline-flex items-center justify-center px-3 py-1 rounded-full text-[11px] font-semibold text-amber-600 border border-amber-200 bg-amber-50">Brand New</span>
                    </div>
                    <div className="flex flex-col gap-1 relative">
                      <span className="text-[12px] text-slate-400">Assigned to:</span>
                      <button 
                        onClick={() => setIsAssigneeDropdownOpen(!isAssigneeDropdownOpen)}
                        className="px-3 py-1.5 bg-slate-900/40 backdrop-blur-xl/50 border border-white/10 rounded text-[12px] text-white flex justify-between items-center w-full hover:bg-slate-800 transition-colors"
                      >
                        <span className="truncate">{selectedAssignee}</span>
                        <ChevronDown className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                      </button>
                      
                      {isAssigneeDropdownOpen && (
                        <>
                          <div className="fixed inset-0 z-[50]" onClick={() => setIsAssigneeDropdownOpen(false)}></div>
                          <div className="absolute top-full left-0 right-0 mt-1 bg-slate-800 border border-slate-700 rounded-lg shadow-xl z-[60] py-1 max-h-48 overflow-y-auto custom-scrollbar animate-in fade-in slide-in-from-top-2">
                            {assigneesList.map((assignee, idx) => (
                              <button 
                                key={idx}
                                onClick={() => {
                                  setSelectedAssignee(assignee);
                                  setIsAssigneeDropdownOpen(false);
                                }}
                                className="w-full text-left px-3 py-2 text-[12px] text-slate-300 hover:bg-slate-700 hover:text-white transition-colors"
                              >
                                {assignee}
                              </button>
                            ))}
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                </div>

                {/* Contact Information */}
                <div className="bg-slate-900/40 backdrop-blur-xl rounded-xl  border border-white/10 overflow-hidden">
                  <div className="p-4 bg-slate-900/40 backdrop-blur-xl/50 border-b border-white/10 flex items-center gap-2">
                    <Phone className="w-4 h-4 text-indigo-400" />
                    <span className="font-semibold text-white text-[14px]">Contact Information</span>
                  </div>
                  <div className="p-5 space-y-3">
                    <div className="flex items-center gap-3 p-2.5 bg-slate-900/40 backdrop-blur-xl/50 border border-white/10 rounded-lg">
                      <Phone className="w-4 h-4 text-slate-500" />
                      <span className="text-[13px] text-white">+1 973 979 7987</span>
                    </div>
                    <div className="flex items-center gap-3 p-2.5 bg-slate-900/40 backdrop-blur-xl/50 border border-white/10 rounded-lg">
                      <Mail className="w-4 h-4 text-slate-500" />
                      <span className="text-[13px] text-slate-500">---</span>
                    </div>
                    <div className="flex items-center gap-3 p-2.5 bg-slate-900/40 backdrop-blur-xl/50 border border-white/10 rounded-lg">
                      <MapPin className="w-4 h-4 text-slate-500" />
                      <span className="text-[13px] text-slate-500">---</span>
                    </div>
                  </div>
                </div>

                {/* Website */}
                <div className="bg-slate-900/40 backdrop-blur-xl rounded-xl  border border-white/10 overflow-hidden">
                  <div className="p-4 bg-slate-900/40 backdrop-blur-xl/50 border-b border-white/10 flex items-center gap-2">
                    <Globe className="w-4 h-4 text-[#22c55e]" />
                    <span className="font-semibold text-white text-[14px]">Website</span>
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-3">
                      <Globe className="w-4 h-4 text-[#22c55e]" />
                      <span className="text-[13px] text-slate-500">---</span>
                    </div>
                  </div>
                </div>

                {/* Business Discovery */}
                <div className="bg-slate-900/40 backdrop-blur-xl rounded-xl  border border-white/10 overflow-hidden">
                  <div className="p-4 bg-slate-900/40 backdrop-blur-xl/50 border-b border-white/10 flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <Compass className="w-4 h-4 text-[#f97316]" />
                      <span className="font-semibold text-white text-[14px]">Business Discovery</span>
                    </div>
                    <button onClick={() => setIsBusinessDiscoveryModalOpen(true)} className="text-indigo-400">
                      <Edit2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                  <div className="p-5">
                    <p className="text-[13px] text-slate-400 mb-4">No business discovery links added yet.</p>
                    <button onClick={() => setIsBusinessDiscoveryModalOpen(true)} className="w-full py-2 bg-slate-900/40 backdrop-blur-xl/50 border border-white/10 hover:bg-slate-800 text-[#f97316] rounded-md text-[13px] font-medium transition-colors flex items-center justify-center gap-2">
                      <Plus className="w-3.5 h-3.5" /> Add More
                    </button>
                  </div>
                </div>

                {/* Google Analytics */}
                <div className="bg-slate-900/40 backdrop-blur-xl rounded-xl  border border-white/10 overflow-hidden">
                  <div className="p-4 bg-slate-900/40 backdrop-blur-xl/50 border-b border-white/10">
                    <span className="font-semibold text-white text-[14px]">Google Analytics</span>
                  </div>
                  <div className="p-5">
                    <button className="px-4 py-1.5 border border-[#3b82f6] text-[#3b82f6] hover:bg-blue-50 rounded-md text-[13px] font-medium transition-colors flex items-center gap-2">
                      Connect
                    </button>
                  </div>
                </div>

                {/* Billing Information */}
                <div className="bg-slate-900/40 backdrop-blur-xl rounded-xl  border border-white/10 overflow-hidden">
                  <div className="p-4 bg-slate-900/40 backdrop-blur-xl/50 border-b border-white/10">
                    <span className="font-semibold text-white text-[14px]">Billing Information</span>
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
                <div className="bg-slate-900/40 backdrop-blur-xl rounded-xl  border border-white/10 overflow-hidden">
                  <div className="p-4 bg-slate-900/40 backdrop-blur-xl/50 border-b border-white/10 flex justify-between items-center">
                    <span className="font-semibold text-white text-[14px]">Background</span>
                    <button className="text-indigo-400">
                      <Edit2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                  <div className="p-5">
                    <p className="text-[12px] text-slate-300 break-words">
                      https://www.yelp.com/biz/luciene-santanna-takagi-psyd-newark?osq=Psychologists
                    </p>
                  </div>
                </div>

                {/* General */}
                <div className="bg-slate-900/40 backdrop-blur-xl rounded-xl  border border-white/10 overflow-hidden">
                  <div className="p-4 bg-slate-900/40 backdrop-blur-xl/50 border-b border-white/10">
                    <span className="font-semibold text-white text-[14px]">General</span>
                  </div>
                  <div className="p-5 space-y-3">
                    <div className="flex items-center gap-2">
                      <Mail className="w-3.5 h-3.5 text-[#0ea5e9]" />
                      <span className="text-[12px] text-slate-400">Timezone:</span>
                      <span className="text-[12px] text-[#0ea5e9]">America/Denver</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-3.5 text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]enter text-[#0ea5e9] text-[12px] font-bold">$</span>
                      <span className="text-[12px] text-slate-400">Currency:</span>
                      <span className="text-[12px] text-[#0ea5e9]">USD</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-3.5 text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]enter text-[#0ea5e9] text-[12px] font-bold">A<span className="text-[9px]">文</span></span>
                      <span className="text-[12px] text-slate-400">Language:</span>
                      <span className="text-[12px] text-[#0ea5e9]">English - US</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Building2 className="w-3.5 h-3.5 text-[#0ea5e9]" />
                      <span className="text-[12px] text-slate-400">Industry:</span>
                      <span className="text-[12px] text-[#0ea5e9]">Retail Trade</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-3.5 h-3.5 text-[#0ea5e9]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="12" r="10"/>
                        <path d="M12 6v6l4 2"/>
                      </svg>
                      <span className="text-[12px] text-slate-400">Year in Business:</span>
                      <span className="text-[12px] text-[#0ea5e9]">yr</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-3.5 h-3.5 text-[#0ea5e9]" />
                      <span className="text-[12px] text-slate-400">No. of Employee:</span>
                      <span className="text-[12px] text-[#0ea5e9]">1-3</span>
                    </div>
                  </div>
                </div>

                {/* Employee Details */}
                <div className="bg-slate-900/40 backdrop-blur-xl rounded-xl  border border-white/10 overflow-hidden">
                  <div className="p-4 flex justify-between items-center">
                    <span className="font-semibold text-white text-[14px]">Employee Details</span>
                    <button className="w-6 h-6 rounded bg-slate-800 flex items-center justify-center text-indigo-400 hover:bg-[#e2e8f0]">
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Compliance Essentials */}
                <div className="bg-slate-900/40 backdrop-blur-xl rounded-xl  border border-white/10 overflow-hidden">
                  <div className="p-4 bg-slate-900/40 backdrop-blur-xl/50 border-b border-white/10">
                    <span className="font-semibold text-white text-[14px]">Compliance Essentials</span>
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
                        <span className="text-[12px] text-slate-300 leading-tight">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

              {/* Middle & Right Content */}
              <div className="flex-1 flex flex-col gap-6 min-w-0">
                
                {/* Communications Section */}
                <div className="bg-slate-900/40 backdrop-blur-xl rounded-xl  border border-white/10 overflow-hidden">
                  <div className="p-5 border-b border-white/10 flex justify-between items-center">
                    <h2 className="text-[16px] font-bold text-white">Communications</h2>
                    <div className="flex items-center gap-4">
                      <button 
                        onClick={() => setActiveTab('email')}
                        className={`flex items-center gap-1.5 px-4 py-1.5 rounded-md text-[13px] font-medium shadow-sm transition-colors ${activeTab === 'email' ? 'bg-[#ec4899] text-white' : 'text-slate-400 hover:text-white'}`}>
                        <Mail className="w-3.5 h-3.5" /> Email
                      </button>
                      <button 
                        onClick={() => setActiveTab('sms')}
                        className={`flex items-center gap-1.5 px-4 py-1.5 rounded-md text-[13px] font-medium shadow-sm transition-colors ${activeTab === 'sms' ? 'bg-[#ec4899] text-white' : 'text-slate-400 hover:text-white'}`}>
                        <MessageSquare className="w-3.5 h-3.5" /> SMS
                      </button>
                      <button 
                        onClick={() => setActiveTab('call')}
                        className={`flex items-center gap-1.5 px-4 py-1.5 rounded-md text-[13px] font-medium shadow-sm transition-colors ${activeTab === 'call' ? 'bg-[#ec4899] text-white' : 'text-slate-400 hover:text-white'}`}>
                        <Phone className="w-3.5 h-3.5" /> Call
                      </button>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    {activeTab === 'email' && (
                      <div className="border border-white/10 rounded-lg p-5 bg-slate-900/40 backdrop-blur-xl/50">
                        <div className="space-y-4">
                          <div>
                            <label className="block text-[13px] font-medium text-[#e2e8f0] mb-1.5">To*</label>
                            <input type="text" defaultValue={currentClient.email !== '---' ? currentClient.email : ''} placeholder="Enter recipient email" className="w-full px-3 py-2.5 bg-slate-900/80 border border-white/10 rounded-md text-[13px] text-white focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/50" />
                            <p className="text-[11px] text-slate-400 mt-1">
                              Type email address separated by commas to add multiple email address.<br/>
                              Example: <span className="text-[#ec4899]">demo@pinkgorilla.agency, demo2@pinkgorilla.agency</span>
                            </p>
                          </div>
                          
                          <div>
                            <label className="block text-[13px] font-medium text-[#e2e8f0] mb-1.5">From*</label>
                            <select className="w-full border border-white/10 focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/50 px-3 py-2.5 bg-slate-900/80 border border-white/10 rounded-md text-[13px] text-white focus:outline-none">
                              <option>Neeraj Kumar (neeraj@pinkgorillasoftware.com)</option>
                            </select>
                          </div>
                          
                          <div>
                            <label className="block text-[13px] font-medium text-[#e2e8f0] mb-1.5">Subject*</label>
                            <input type="text" placeholder="Enter email subject" className="w-full px-3 py-2.5 bg-slate-900/80 border border-white/10 rounded-md text-[13px] text-white focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/50" />
                          </div>
                          
                          <div>
                            <label className="block text-[13px] font-medium text-[#e2e8f0] mb-1.5">Email Template</label>
                            <select className="w-full border border-white/10 focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/50 px-3 py-2.5 bg-slate-900/80 border border-white/10 rounded-md text-[13px] text-slate-400 focus:outline-none">
                              <option>Select Template</option>
                            </select>
                          </div>
                          
                          <div>
                            <label className="block text-[13px] font-medium text-[#e2e8f0] mb-1.5">Message*</label>
                            <div className="border border-white/10 rounded-md bg-slate-900/40 backdrop-blur-xl overflow-hidden flex flex-col">
                              <div className="flex items-center gap-1 border-b border-white/10 p-1.5 bg-slate-900/40 backdrop-blur-xl/50">
                                <button className="p-1 hover:bg-[#e2e8f0] rounded"><span className="font-bold text-[12px] px-1">B</span></button>
                                <button className="p-1 hover:bg-[#e2e8f0] rounded"><span className="italic text-[12px] px-1">I</span></button>
                                <button className="p-1 hover:bg-[#e2e8f0] rounded"><span className="underline text-[12px] px-1">U</span></button>
                                <div className="w-[1px] h-4 bg-[#cbd5e1] mx-1"></div>
                                <button className="p-1 hover:bg-[#e2e8f0] rounded"><svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></button>
                              </div>
                              <textarea className="w-full border border-white/10 focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/50 p-3 min-h-[150px] resize-none focus:outline-none text-[13px] text-white bg-transparent"></textarea>
                            </div>
                          </div>
                          
                          <div className="flex justify-between items-center pt-2">
                            <button className="px-3 py-1.5 border border-white/10 bg-slate-900/40 backdrop-blur-xl text-slate-300 rounded text-[12px] font-medium flex items-center gap-1.5 hover:bg-slate-900/40 backdrop-blur-xl/50">
                              <Plus className="w-3.5 h-3.5" /> Attach Files
                            </button>
                            <button className="px-5 py-2 bg-[#ec4899] hover:bg-[#db2777] text-white rounded-md text-[13px] font-medium transition-colors shadow-sm">
                              Send Email
                            </button>
                          </div>
                        </div>
                      </div>
                    )}
                    
                    {activeTab === 'sms' && (
                      <div className="border border-white/10 rounded-lg p-5 bg-slate-900/40 backdrop-blur-xl/50">
                        <div className="space-y-4">
                          <div>
                            <label className="block text-[13px] font-medium text-[#e2e8f0] mb-1.5">To (Phone)*</label>
                            <input type="text" defaultValue={currentClient.phone !== '---' ? currentClient.phone : ''} placeholder="Enter recipient phone number" className="w-full px-3 py-2.5 bg-slate-900/80 border border-white/10 rounded-md text-[13px] text-white focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/50" />
                          </div>
                          
                          <div>
                            <label className="block text-[13px] font-medium text-[#e2e8f0] mb-1.5">From*</label>
                            <select className="w-full border border-white/10 focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/50 px-3 py-2.5 bg-slate-900/80 border border-white/10 rounded-md text-[13px] text-white focus:outline-none">
                              <option>Company Phone (+1 800 123 4567)</option>
                            </select>
                          </div>
                          
                          <div>
                            <label className="block text-[13px] font-medium text-[#e2e8f0] mb-1.5">SMS Template</label>
                            <select className="w-full border border-white/10 focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/50 px-3 py-2.5 bg-slate-900/80 border border-white/10 rounded-md text-[13px] text-slate-400 focus:outline-none">
                              <option>Select Template</option>
                            </select>
                          </div>
                          
                          <div>
                            <label className="block text-[13px] font-medium text-[#e2e8f0] mb-1.5">Message*</label>
                            <textarea placeholder="Type your SMS message here..." className="w-full bg-slate-900/80 border border-white/10 rounded-md focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/50 p-3 min-h-[120px] resize-none focus:outline-none text-[13px] text-white"></textarea>
                            <div className="flex justify-end mt-1">
                              <span className="text-[11px] text-slate-500">0/160 characters</span>
                            </div>
                          </div>
                          
                          <div className="flex justify-end items-center pt-2">
                            <button className="px-5 py-2 bg-[#ec4899] hover:bg-[#db2777] text-white rounded-md text-[13px] font-medium transition-colors shadow-sm">
                              Send SMS
                            </button>
                          </div>
                        </div>
                      </div>
                    )}

                    {activeTab === 'call' && (
                      <div className="border border-white/10 rounded-lg p-5 bg-slate-900/40 backdrop-blur-xl/50">
                        <div className="space-y-4">
                          <div className="flex items-center gap-4 mb-2">
                            <div className="flex-1">
                              <label className="block text-[13px] font-medium text-[#e2e8f0] mb-1.5">To (Phone)*</label>
                              <input type="text" defaultValue={currentClient.phone !== '---' ? currentClient.phone : ''} placeholder="Enter phone number" className="w-full px-3 py-2.5 bg-slate-900/80 border border-white/10 rounded-md text-[13px] text-white focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/50" />
                            </div>
                            <div className="flex-1">
                              <label className="block text-[13px] font-medium text-[#e2e8f0] mb-1.5">From*</label>
                              <select className="w-full border border-white/10 focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/50 px-3 py-2.5 bg-slate-900/80 border border-white/10 rounded-md text-[13px] text-white focus:outline-none">
                                <option>Company Phone (+1 800 123 4567)</option>
                              </select>
                            </div>
                          </div>
                          
                          <div className="flex items-center justify-center py-6">
                            <button className="w-16 h-16 rounded-full bg-emerald-500 hover:bg-emerald-600 flex items-center justify-center text-white shadow-[0_0_15px_rgba(16,185,129,0.4)] transition-all transform hover:scale-105">
                              <Phone className="w-6 h-6 fill-white" />
                            </button>
                          </div>
                          
                          <div className="border-t border-white/10 pt-4 mt-2">
                            <label className="block text-[13px] font-medium text-[#e2e8f0] mb-1.5">Log Call Notes</label>
                            <textarea placeholder="Add notes about this call..." className="w-full bg-slate-900/80 border border-white/10 rounded-md focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/50 p-3 min-h-[100px] resize-none focus:outline-none text-[13px] text-white"></textarea>
                          </div>
                          
                          <div className="flex justify-between items-center pt-2">
                            <select className="border border-white/10 focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/50 px-3 py-1.5 bg-slate-900/80 rounded-md text-[12px] text-white focus:outline-none">
                              <option>Call Outcome: Connected</option>
                              <option>Left Voicemail</option>
                              <option>No Answer</option>
                              <option>Wrong Number</option>
                            </select>
                            <button className="px-5 py-2 bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white rounded-md text-[13px] font-medium transition-colors shadow-sm">
                              Log Call
                            </button>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Notes Section */}
                <div className="bg-slate-900/40 backdrop-blur-xl rounded-xl  border border-white/10 overflow-hidden">
                  <div className="p-4 bg-slate-900/40 backdrop-blur-xl/50 border-b border-white/10 flex justify-between items-center">
                    <span className="font-semibold text-white text-[15px]">Notes</span>
                    <button className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-900/40 backdrop-blur-xl border border-white/10 rounded text-[12px] font-medium text-slate-300 hover:bg-slate-800">
                      <PlusCircle className="w-3.5 h-3.5" /> Add Note
                    </button>
                  </div>
                  <div className="p-5">
                    <div className="bg-[#fefce8] border border-[#fde047] rounded-lg p-4 relative">
                      <div className="absolute top-3 right-3 flex gap-2">
                        <button className="text-indigo-400"><Edit2 className="w-3.5 h-3.5" /></button>
                        <button className="text-rose-400"><svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 6h18M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2"></path></svg></button>
                      </div>
                      <h4 className="font-semibold text-white text-[14px] mb-2">brand new</h4>
                      <p className="text-[13px] text-slate-300 mb-4">-brand new-no logo no website-follow up in 3 days</p>
                      
                      <div className="flex items-center gap-4 text-[11px] text-slate-400">
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
                <div className="bg-slate-900/40 backdrop-blur-xl rounded-xl  border border-white/10 overflow-hidden">
                  <div className="p-4 bg-slate-900/40 backdrop-blur-xl/50 border-b border-white/10 flex justify-between items-center">
                    <span className="font-semibold text-white text-[15px]">Samples</span>
                    <div className="flex gap-2">
                      <button className="flex items-center gap-1.5 px-3 py-1.5 border border-[#8b5cf6] text-indigo-400 rounded text-[12px] font-medium hover:bg-purple-50">
                        <Plus className="w-3.5 h-3.5" /> Generate Website
                      </button>
                      <button className="flex items-center gap-1.5 px-3 py-1.5 border border-[#8b5cf6] text-indigo-400 rounded text-[12px] font-medium hover:bg-purple-50">
                        <Plus className="w-3.5 h-3.5" /> Add Logo Sample
                      </button>
                    </div>
                  </div>
                  <div className="p-12 flex flex-col items-center justify-center text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]enter">
                    <div className="w-16 h-16 mb-4 flex items-center justify-center bg-slate-800 rounded-full">
                      <Search className="w-8 h-8 text-slate-500" />
                    </div>
                    <h3 className="text-[16px] font-semibold text-white mb-1">No records were found</h3>
                    <p className="text-[13px] text-slate-400">Try a difference search</p>
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
                <div className="flex justify-between items-center bg-slate-900/40 backdrop-blur-xl rounded-lg border border-white/10 p-2">
                  <button className="px-3 py-1 text-[12px] text-slate-400 hover:text-white font-medium flex items-center gap-1">
                    <ChevronDown className="w-3.5 h-3.5 rotate-90" /> Previous
                  </button>
                  <span className="text-[12px] text-slate-500">Client 2573 of 4539</span>
                  <button className="px-3 py-1 text-[12px] text-slate-400 hover:text-white font-medium flex items-center gap-1">
                    Next <ChevronDown className="w-3.5 h-3.5 -rotate-90" />
                  </button>
                </div>

                {/* Tasks Widget */}
                <div className="bg-slate-900/40 backdrop-blur-xl rounded-xl border border-white/10 relative z-[50]">
                  <div className="p-4 bg-slate-900/40 backdrop-blur-xl/50 border-b border-white/10 flex justify-between items-center rounded-t-xl relative z-[60]">
                    <span className="font-semibold text-white text-[15px]">Tasks</span>
                    <div className="flex gap-2 relative">
                      {/* View All */}
                      <button 
                        onClick={() => setLocation('/tasks')}
                        className="w-8 h-8 rounded-lg bg-rose-500 hover:bg-rose-600 flex items-center justify-center text-white shadow-[0_0_10px_rgba(244,63,94,0.3)] transition-colors group relative"
                      >
                        <Eye className="w-4 h-4" />
                        <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 px-2.5 py-1.5 bg-slate-800 text-white text-[11px] rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-[100] shadow-[0_0_15px_rgba(0,0,0,0.5)] border border-slate-600 before:content-[''] before:absolute before:-top-2 before:left-1/2 before:-translate-x-1/2 before:border-4 before:border-transparent before:border-b-slate-600 after:content-[''] after:absolute after:-top-[7px] after:left-1/2 after:-translate-x-1/2 after:border-4 after:border-transparent after:border-b-slate-800">
                          View All
                        </div>
                      </button>
                      
                      {/* Dropdown */}
                      <div className="relative">
                        <button 
                          onClick={() => setIsTaskDropdownOpen(!isTaskDropdownOpen)}
                          className="w-8 h-8 rounded-lg bg-purple-600 hover:bg-purple-500 flex items-center justify-center text-white shadow-[0_0_10px_rgba(147,51,234,0.3)] transition-colors relative z-[60]"
                        >
                          <Zap className="w-4 h-4" />
                        </button>
                        
                        {isTaskDropdownOpen && (
                          <>
                            <div className="fixed inset-0 z-[50]" onClick={() => setIsTaskDropdownOpen(false)}></div>
                            <div className="absolute right-0 top-full mt-2 w-48 bg-slate-800 rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.5)] border border-slate-600 py-2 z-[100] animate-in fade-in slide-in-from-top-2 origin-top-right overflow-hidden">
                              {['1 Day Follow Up', '3 Day Follow Up', '1 Week Follow Up', '2 Week Follow Up', '1 Month Follow Up', '3 Month Follow Up', '6 Month Follow Up', '12 Month Follow Up'].map((item) => (
                                <button key={item} onClick={() => setIsTaskDropdownOpen(false)} className="w-full text-left px-4 py-2 text-[13px] text-slate-300 hover:bg-slate-700 hover:text-white transition-colors relative z-10">
                                  {item}
                                </button>
                              ))}
                            </div>
                          </>
                        )}
                      </div>
                      
                      {/* Add Task */}
                      <button 
                        onClick={() => setIsAddTaskModalOpen(true)}
                        className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-slate-700 flex items-center justify-center text-slate-300 shadow-sm transition-colors group relative border border-slate-700"
                      >
                        <Plus className="w-4 h-4" />
                        <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 px-2.5 py-1.5 bg-slate-800 text-white text-[11px] rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-[100] shadow-[0_0_15px_rgba(0,0,0,0.5)] border border-slate-600 before:content-[''] before:absolute before:-top-2 before:left-1/2 before:-translate-x-1/2 before:border-4 before:border-transparent before:border-b-slate-600 after:content-[''] after:absolute after:-top-[7px] after:left-1/2 after:-translate-x-1/2 after:border-4 after:border-transparent after:border-b-slate-800">
                          Add Task
                        </div>
                      </button>
                    </div>
                  </div>
                  <div className="p-10 flex flex-col items-center justify-center text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]enter bg-slate-900/40 backdrop-blur-xl/50 rounded-b-xl">
                    <div className="w-12 h-12 mb-3 flex items-center justify-center text-slate-500">
                      <Search className="w-8 h-8" />
                    </div>
                    <h3 className="text-[15px] font-semibold text-white mb-1">No records were found</h3>
                    <p className="text-[12px] text-slate-400">Try a difference search</p>
                  </div>
                </div>

                {/* Activity Log */}
                <div className="bg-slate-900/40 backdrop-blur-xl rounded-xl  border border-white/10 overflow-hidden">
                  <div className="p-4 border-b border-white/10 flex justify-between items-center">
                    <span className="font-semibold text-white text-[15px]">Activity Log</span>
                    <button className="flex items-center gap-1 text-[12px] text-slate-400 bg-slate-900/40 backdrop-blur-xl/50 px-2 py-1 rounded border border-white/10">
                      All Activities <ChevronDown className="w-3 h-3" />
                    </button>
                  </div>
                  <div className="p-4 space-y-3">
                    
                    {/* Activity 1 */}
                    <div className="bg-[#fefce8] border border-[#fde047] rounded-lg p-3 relative">
                      <div className="flex gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#eab308] shrink-0 mt-0.5" />
                        <div>
                          <p className="text-[13px] font-medium text-[#e2e8f0] leading-tight">Follow Up task added.</p>
                          <div className="flex flex-col mt-2 gap-0.5 text-[11px] text-slate-400">
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
                          <p className="text-[13px] font-medium text-[#e2e8f0] leading-tight line-clamp-2">Hi! Saw your business on Yelp. We're a web development company offerin...</p>
                          <div className="flex flex-col mt-2 gap-0.5 text-[11px] text-slate-400">
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

      {/* Add Task Modal */}
      {isAddTaskModalOpen && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setIsAddTaskModalOpen(false)}
        >
          <div 
            className="bg-slate-900 border border-slate-700 rounded-2xl w-full max-w-[500px] overflow-hidden flex flex-col shadow-2xl animate-in fade-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="px-6 py-4 border-b border-slate-800 flex justify-between items-center bg-slate-900/50">
              <h2 className="text-xl font-bold text-white">Add A New Task</h2>
              <button 
                onClick={() => setIsAddTaskModalOpen(false)}
                className="text-slate-400 hover:text-white p-2 hover:bg-slate-800 rounded-lg transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 space-y-6">
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Task title*</label>
                <input 
                  type="text" 
                  placeholder="Create MVP for wisdom rules"
                  className="w-full px-4 py-2.5 bg-slate-900/50 border border-slate-700 rounded-xl text-sm text-white focus:outline-none focus:border-purple-500/50 transition-all placeholder:text-slate-500" 
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Due Date</label>
                <input 
                  type="date" 
                  className="w-full px-4 py-2.5 bg-slate-900/50 border border-slate-700 rounded-xl text-sm text-white focus:outline-none focus:border-purple-500/50 transition-all placeholder:text-slate-500" 
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Assignee</label>
                <select className="w-full px-4 py-2.5 bg-slate-900/50 border border-slate-700 rounded-xl text-sm text-slate-300 focus:outline-none focus:border-purple-500/50 transition-all appearance-none">
                  <option value="">Select assignee...</option>
                  <option value="1">Maria Christina</option>
                  <option value="2">Admin Gorilla</option>
                </select>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="px-6 py-4 border-t border-slate-800 bg-slate-900/80 flex justify-end gap-3">
              <button 
                onClick={() => setIsAddTaskModalOpen(false)}
                className="px-6 py-2.5 border border-slate-700 text-slate-300 hover:text-white hover:bg-slate-800 rounded-xl font-medium transition-colors"
              >
                Close
              </button>
              <button 
                onClick={() => setIsAddTaskModalOpen(false)}
                className="px-6 py-2.5 bg-purple-600 hover:bg-purple-500 text-white rounded-xl font-medium shadow-[0_0_15px_rgba(147,51,234,0.3)] hover:shadow-[0_0_20px_rgba(147,51,234,0.5)] transition-all"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
      {/* Edit Client Modal */}
      {isEditClientModalOpen && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setIsEditClientModalOpen(false)}
        >
          <div 
            className="bg-slate-900 border border-slate-700 rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col shadow-2xl animate-in fade-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="px-6 py-4 border-b border-slate-800 flex justify-between items-center bg-slate-900/50">
              <h2 className="text-xl font-bold text-white">Edit Client Profile</h2>
              <button 
                onClick={() => setIsEditClientModalOpen(false)}
                className="text-slate-400 hover:text-white p-2 hover:bg-slate-800 rounded-lg transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 overflow-y-auto custom-scrollbar flex-1 space-y-8">
              
              {/* Company Details Section */}
              <section className="space-y-6">
                <h3 className="text-lg font-bold text-white tracking-tight border-b border-slate-800 pb-2">Company Details</h3>
                
                <div className="space-y-4">
                  {/* Logo Upload */}
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">Company Logo</label>
                    <div className="w-32 h-32 bg-slate-800/50 border border-slate-700 rounded-xl flex items-center justify-center mb-2">
                      <Building2 className="w-8 h-8 text-slate-500" />
                    </div>
                    <button className="px-6 py-2 bg-slate-800 hover:bg-slate-700 text-sm font-medium text-white rounded-lg transition-colors border border-slate-700">
                      Upload
                    </button>
                  </div>

                  {/* Form Grid 1 */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">Company Name*</label>
                      <input 
                        type="text" 
                        defaultValue={currentClient.name}
                        className="w-full px-4 py-2.5 bg-slate-900/50 border border-slate-700 rounded-xl text-sm text-white focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all placeholder:text-slate-500" 
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">Company Email</label>
                      <input 
                        type="email" 
                        defaultValue={currentClient.email !== '---' ? currentClient.email : ''}
                        className="w-full px-4 py-2.5 bg-indigo-500/10 border border-indigo-500/30 rounded-xl text-sm text-indigo-300 focus:outline-none transition-all placeholder:text-indigo-400/50" 
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">Company Phone Number*</label>
                      <div className="flex">
                        <select className="px-3 py-2.5 bg-slate-900/50 border border-slate-700 border-r-0 rounded-l-xl text-sm text-slate-300 focus:outline-none focus:border-cyan-500/50 transition-all w-20">
                          <option>+1</option>
                        </select>
                        <input 
                          type="tel" 
                          defaultValue={currentClient.phone !== '---' ? currentClient.phone.replace('+1 ', '') : ''}
                          className="flex-1 px-4 py-2.5 bg-slate-900/50 border border-slate-700 rounded-r-xl text-sm text-white focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all placeholder:text-slate-500" 
                        />
                      </div>
                    </div>
                  </div>

                  {/* Form Grid 2 */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">Website</label>
                      <input 
                        type="url" 
                        defaultValue="https://pinkgorilla.agency"
                        className="w-full px-4 py-2.5 bg-slate-900/50 border border-slate-700 rounded-xl text-sm text-white focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all placeholder:text-slate-500" 
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">Company Address</label>
                      <input 
                        type="text" 
                        defaultValue="po 12, ABCD, lame road, LA, CA"
                        className="w-full px-4 py-2.5 bg-slate-900/50 border border-slate-700 rounded-xl text-sm text-white focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all placeholder:text-slate-500" 
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">Default Currency</label>
                      <select className="w-full px-4 py-2.5 bg-slate-900/50 border border-slate-700 rounded-xl text-sm text-slate-300 focus:outline-none focus:border-cyan-500/50 transition-all appearance-none">
                        <option>USD</option>
                      </select>
                    </div>
                  </div>

                  {/* Form Grid 3 */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">Default Time Zone</label>
                      <select className="w-full px-4 py-2.5 bg-slate-900/50 border border-slate-700 rounded-xl text-sm text-slate-300 focus:outline-none focus:border-cyan-500/50 transition-all appearance-none">
                        <option>America/Denver</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">Language</label>
                      <select className="w-full px-4 py-2.5 bg-slate-900/50 border border-slate-700 rounded-xl text-sm text-slate-300 focus:outline-none focus:border-cyan-500/50 transition-all appearance-none">
                        <option>English - US</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">Status</label>
                      <select className="w-full px-4 py-2.5 bg-slate-900/50 border border-slate-700 rounded-xl text-sm text-slate-300 focus:outline-none focus:border-cyan-500/50 transition-all appearance-none">
                        <option>Active</option>
                        <option>Brand New</option>
                      </select>
                    </div>
                  </div>

                  {/* Form Grid 4 */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">Industry</label>
                      <select className="w-full px-4 py-2.5 bg-slate-900/50 border border-slate-700 rounded-xl text-sm text-slate-300 focus:outline-none focus:border-cyan-500/50 transition-all appearance-none">
                        <option>Information Technology Services</option>
                        <option>Retail Trade</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">Year in Business</label>
                      <input 
                        type="text" 
                        defaultValue="5"
                        className="w-full px-4 py-2.5 bg-slate-900/50 border border-slate-700 rounded-xl text-sm text-white focus:outline-none focus:border-cyan-500/50 transition-all" 
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">No. of Employees</label>
                      <select className="w-full px-4 py-2.5 bg-slate-900/50 border border-slate-700 rounded-xl text-sm text-slate-300 focus:outline-none focus:border-cyan-500/50 transition-all appearance-none">
                        <option>10 - 50</option>
                        <option>1 - 3</option>
                      </select>
                    </div>
                  </div>
                </div>
              </section>

              {/* Business Discovery Section */}
              <section className="space-y-6">
                <h3 className="text-lg font-bold text-white tracking-tight border-b border-slate-800 pb-2">Business Discovery</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">Yelp URL</label>
                    <input 
                      type="url" 
                      defaultValue="https://yelp.com/biz/pink-gorilla-software"
                      className="w-full px-4 py-2.5 bg-slate-900/50 border border-slate-700 rounded-xl text-sm text-white focus:outline-none focus:border-cyan-500/50 transition-all placeholder:text-slate-500" 
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">Google URL</label>
                    <input 
                      type="url" 
                      defaultValue="https://google.com/maps/place/Pink+Gorilla"
                      className="w-full px-4 py-2.5 bg-slate-900/50 border border-slate-700 rounded-xl text-sm text-white focus:outline-none focus:border-cyan-500/50 transition-all placeholder:text-slate-500" 
                    />
                  </div>
                </div>
                
                <button className="bg-purple-600 hover:bg-purple-500 text-white font-medium px-4 py-2 rounded-lg text-sm transition-colors flex items-center gap-2">
                  <Plus className="w-4 h-4" /> Add Link
                </button>

                <div className="flex items-center justify-between border-t border-slate-800 pt-6">
                  <span className="text-sm font-medium text-slate-300">Background</span>
                  <button className="w-11 h-6 bg-cyan-500 rounded-full relative transition-colors focus:outline-none cursor-pointer">
                    <span className="absolute left-[22px] top-1 w-4 h-4 bg-white rounded-full transition-transform shadow-[0_0_5px_rgba(0,0,0,0.2)]"></span>
                  </button>
                </div>
              </section>

              {/* Employee Details Section */}
              <section className="space-y-6">
                <h3 className="text-lg font-bold text-white tracking-tight border-b border-slate-800 pb-2">Employee Details</h3>
                
                <div className="border border-slate-700 rounded-xl p-6 space-y-6 bg-slate-800/20">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">First Name</label>
                      <input 
                        type="text" 
                        defaultValue="Vinayak"
                        className="w-full px-4 py-2.5 bg-slate-900/50 border border-slate-700 rounded-xl text-sm text-white focus:outline-none focus:border-cyan-500/50 transition-all placeholder:text-slate-500" 
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">Last Name</label>
                      <input 
                        type="text" 
                        defaultValue="Sharma"
                        className="w-full px-4 py-2.5 bg-slate-900/50 border border-slate-700 rounded-xl text-sm text-white focus:outline-none focus:border-cyan-500/50 transition-all placeholder:text-slate-500" 
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">Email Address</label>
                      <input 
                        type="email" 
                        defaultValue="vinayak@pinkgorillasoftware.com"
                        className="w-full px-4 py-2.5 bg-slate-900/50 border border-slate-700 rounded-xl text-sm text-white focus:outline-none focus:border-cyan-500/50 transition-all placeholder:text-slate-500" 
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">Phone</label>
                      <div className="flex">
                        <select className="px-3 py-2.5 bg-slate-900/50 border border-slate-700 border-r-0 rounded-l-xl text-sm text-slate-300 focus:outline-none focus:border-cyan-500/50 transition-all w-20">
                          <option>+1</option>
                        </select>
                        <input 
                          type="tel" 
                          defaultValue="9876543210"
                          className="flex-1 px-4 py-2.5 bg-slate-900/50 border border-slate-700 rounded-r-xl text-sm text-white focus:outline-none focus:border-cyan-500/50 transition-all placeholder:text-slate-500" 
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">Title</label>
                      <select className="w-full px-4 py-2.5 bg-slate-900/50 border border-slate-700 rounded-xl text-sm text-slate-300 focus:outline-none focus:border-cyan-500/50 transition-all appearance-none">
                        <option>Manager</option>
                        <option>HR</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">Password</label>
                      <input 
                        type="password" 
                        placeholder="••••••••••"
                        defaultValue="password123"
                        className="w-full px-4 py-2.5 bg-indigo-500/10 border border-indigo-500/30 rounded-xl text-sm text-indigo-300 focus:outline-none transition-all placeholder:text-indigo-400/50" 
                        readOnly
                      />
                    </div>
                  </div>
                </div>

                <button className="bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white font-medium px-4 py-2 rounded-lg text-sm transition-colors border border-slate-700 flex items-center gap-2">
                  <Plus className="w-4 h-4" /> Add Another
                </button>
              </section>

            </div>

            {/* Modal Footer */}
            <div className="px-6 py-4 border-t border-slate-800 bg-slate-900/80 flex justify-end gap-3">
              <button 
                onClick={() => setIsEditClientModalOpen(false)}
                className="px-6 py-2.5 border border-slate-700 text-slate-300 hover:text-white hover:bg-slate-800 rounded-xl font-medium transition-colors"
              >
                Close
              </button>
              <button 
                onClick={() => setIsEditClientModalOpen(false)}
                className="px-6 py-2.5 bg-purple-600 hover:bg-purple-500 text-white rounded-xl font-medium shadow-[0_0_15px_rgba(147,51,234,0.3)] hover:shadow-[0_0_20px_rgba(147,51,234,0.5)] transition-all"
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Business Discovery Modal */}
      {isBusinessDiscoveryModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setIsBusinessDiscoveryModalOpen(false)}></div>
          
          <div className="relative bg-slate-900 border border-slate-700 rounded-xl shadow-2xl w-full max-w-2xl max-h-[90vh] flex flex-col animate-in fade-in zoom-in-95 duration-200">
            {/* Header */}
            <div className="flex items-center justify-between p-5 border-b border-slate-800 bg-slate-800/50 rounded-t-xl">
              <h2 className="text-lg font-semibold text-white">Business Discovery</h2>
              <button 
                onClick={() => setIsBusinessDiscoveryModalOpen(false)}
                className="w-8 h-8 flex items-center justify-center rounded-lg text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            {/* Body */}
            <div className="p-6 overflow-y-auto custom-scrollbar flex-1 space-y-4">
              {businessLinks.map((link, index) => (
                <div key={index} className="flex items-start gap-4 p-4 bg-slate-800/30 border border-slate-700/50 rounded-lg relative group">
                  <div className="flex-1 space-y-4">
                    <div>
                      <label className="block text-[13px] font-medium text-slate-300 mb-1.5">Link Label*</label>
                      <input 
                        type="text" 
                        value={link.label}
                        onChange={(e) => updateBusinessLink(index, 'label', e.target.value)}
                        placeholder="e.g., Website, Yelp, Facebook" 
                        className="w-full px-3 py-2.5 bg-slate-900/80 border border-slate-700 rounded-lg text-[13px] text-white focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/50 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-[13px] font-medium text-slate-300 mb-1.5">Link URL*</label>
                      <input 
                        type="url" 
                        value={link.url}
                        onChange={(e) => updateBusinessLink(index, 'url', e.target.value)}
                        placeholder="https://" 
                        className="w-full px-3 py-2.5 bg-slate-900/80 border border-slate-700 rounded-lg text-[13px] text-white focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/50 transition-all"
                      />
                    </div>
                  </div>
                  <button 
                    onClick={() => removeBusinessLink(index)}
                    className="w-8 h-8 shrink-0 flex items-center justify-center rounded-lg text-slate-400 hover:text-rose-400 hover:bg-rose-400/10 transition-colors mt-6"
                    title="Remove Link"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              ))}

              <div className="flex justify-between items-center mt-6 pt-4 border-t border-slate-800">
                <span className="text-[12px] text-slate-500">{businessLinks.length}/6 links added</span>
                <button
                  onClick={addBusinessLink}
                  disabled={businessLinks.length >= 6}
                  className={`flex items-center gap-1.5 px-4 py-2 rounded-lg text-[13px] font-medium transition-colors ${
                    businessLinks.length >= 6 
                      ? 'bg-slate-800 text-slate-500 cursor-not-allowed border border-slate-700' 
                      : 'bg-indigo-500/10 text-indigo-400 hover:bg-indigo-500/20 border border-indigo-500/20'
                  }`}
                >
                  <Plus className="w-4 h-4" /> Add Another
                </button>
              </div>
            </div>
            
            {/* Footer */}
            <div className="flex items-center justify-end gap-3 p-5 border-t border-slate-800 bg-slate-800/30 rounded-b-xl">
              <button 
                onClick={() => setIsBusinessDiscoveryModalOpen(false)}
                className="px-5 py-2 rounded-lg text-[13px] font-medium text-slate-300 hover:text-white hover:bg-slate-700 transition-colors"
              >
                Cancel
              </button>
              <button 
                onClick={() => setIsBusinessDiscoveryModalOpen(false)}
                className="px-5 py-2 rounded-lg text-[13px] font-medium bg-purple-600 hover:bg-purple-500 text-white shadow-[0_0_15px_rgba(147,51,234,0.3)] transition-all"
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}