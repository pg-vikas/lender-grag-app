import { useState } from "react";
import { useLocation, useParams, Link } from "wouter";
import { Sidebar, Header } from "./clients";
import { Download, ArrowLeft } from "lucide-react";
import { useAppStore } from "@/lib/store";

export default function ContractDetailsPage() {
  const [openMenus, setOpenMenus] = useState<string>('contracts');
  const [location, setLocation] = useLocation();
  const { id } = useParams<{ id: string }>();
  
  const contractsList = useAppStore((state) => state.contracts);
  const contract = contractsList.find(c => c.id === id);

  const toggleMenu = (menu: string) => {
    setOpenMenus(prev => prev === menu ? '' : menu);
  };

  if (!contract) {
    return (
      <div className="h-screen w-full flex items-center justify-center bg-[#0f172a] text-white">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Contract not found</h2>
          <button 
            onClick={() => setLocation('/contracts')}
            className="px-6 py-2.5 bg-indigo-600 hover:bg-indigo-500 rounded-xl"
          >
            Back to Contracts
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="h-screen w-full overflow-hidden bg-transparent flex font-sans text-[#e2e8f0]">
      <Sidebar openMenus={openMenus} toggleMenu={toggleMenu} currentPath="/contracts" />

      <div className="flex-1 flex flex-col min-w-0 bg-[#0f172a] relative">
        <Header title="Contract Details" />

        <main className="flex-1 overflow-y-auto p-6 lg:p-8 relative">
          <div className="max-w-4xl mx-auto">
            
            <div className="mb-6">
              <Link href="/contracts" className="inline-flex items-center text-slate-400 hover:text-white transition-colors">
                <ArrowLeft className="w-4 h-4 mr-2" /> Back to Contracts
              </Link>
            </div>
            
            <div className="glass-panel rounded-2xl border-t border-indigo-500/20 shadow-[0_2px_10px_rgba(0,0,0,0.08)] overflow-hidden border border-white/10">
              
              {/* Header Banner */}
              <div className="relative h-48 bg-gradient-to-r from-purple-800 to-indigo-900 flex flex-col items-center justify-center text-white overflow-hidden">
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute top-6 right-6">
                   <div className="text-xl font-bold tracking-tight flex flex-col items-end leading-none">
                     <span>Pink</span>
                     <span className="text-sm font-normal">GORILLA</span>
                   </div>
                </div>
                <div className="absolute top-6 left-0">
                  <span className="bg-slate-900/40 backdrop-blur-xl/20 backdrop-blur-sm px-4 py-1.5 rounded-r-md text-sm font-medium">{contract.status}</span>
                </div>
                <div className="relative z-10 text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.5)] text-center">
                  <h1 className="text-4xl font-bold mb-2 tracking-tight">CONTRACT</h1>
                  <p className="text-lg opacity-90">{contract.title}</p>
                  <p className="text-sm opacity-75 mt-1">{contract.id}</p>
                </div>
              </div>

              {/* Content Body */}
              <div className="p-10 md:p-14">
                
                {/* Entities */}
                <div className="flex flex-col md:flex-row justify-between mb-16 gap-10">
                  <div className="flex-1">
                    <h2 className="text-[16px] font-semibold text-white mb-4">Service Provider / Company</h2>
                    <h3 className="text-[15px] font-bold text-white mb-2">Pink Gorilla</h3>
                    <div className="text-[13px] text-slate-300 leading-relaxed">
                      <p>8605 Santa Monica Blvd</p>
                      <p>West Hollywood CA</p>
                      <p>90069</p>
                      <p>United States</p>
                    </div>
                  </div>
                  
                  <div className="flex-1 md:text-right">
                    <h2 className="text-[16px] font-semibold text-white mb-4">Client</h2>
                    <h3 className="text-[15px] font-bold text-white mb-2">{contract.client}</h3>
                    <div className="text-[13px] text-slate-300 leading-relaxed">
                      <p>+1 555 123 4567</p>
                      <p>19 Street, North West Calgary,</p>
                      <p>AB, T2L 2B5, Canada</p>
                    </div>
                  </div>
                </div>

                <div className="text-slate-400 mb-16 whitespace-pre-wrap">
                  {contract.description || "This contract outlines the terms and conditions between Pink Gorilla and the Client for the provided services. The parties agree to the following terms..."}
                  <br/><br/>
                  <strong className="text-white">Contract Value:</strong> {contract.value || "TBD"}
                  <br/>
                  <strong className="text-white">Start Date:</strong> {contract.startDate || contract.date}
                  <br/>
                  {contract.endDate && <><strong className="text-white">End Date:</strong> {contract.endDate}<br/></>}
                </div>

                <div className="h-[1px] w-full bg-[#e2e8f0] mb-12 opacity-10"></div>

                {/* Signatures */}
                <div className="flex flex-col md:flex-row justify-between gap-10">
                  <div className="flex-1">
                    <h3 className="text-[14px] font-semibold text-white mb-6">Service Provider</h3>
                    <p className="text-[13px] text-slate-300 mb-4">Chayan Alavi</p>
                    
                    {/* Provider Signature */}
                    {contract.providerStatus === 'Signed' ? (
                      <>
                        <div className="mb-4 inline-block">
                          <svg width="200" height="60" viewBox="0 0 200 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M22 17C14 17 9 24 10 32C11 40 18 45 27 45C38 45 44 38 46 30C48 22 42 16 35 15" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
                            <path d="M40 38C40 38 52 24 57 20C62 16 66 18 64 24C62 30 54 39 48 42C42 45 42 41 45 37" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
                            <path d="M60 41C60 41 72 26 80 18C88 10 94 15 90 22C86 29 78 39 74 42C70 45 74 44 80 40" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
                            <path d="M78 41C85 41 98 32 105 28" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
                            <path d="M102 28C100 35 96 42 100 42C104 42 110 35 115 28C120 21 125 24 122 30C119 36 112 43 108 43" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
                            <path d="M110 42C115 42 125 35 130 32" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
                            <path d="M125 38C125 38 130 38 135 34C140 30 140 38 135 40C130 42 145 42 155 35" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
                            <path d="M35 32C45 28 65 24 85 24C105 24 120 28 130 32" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                          </svg>
                        </div>
                        <p className="text-[12px] text-slate-400">Date : {contract.date}</p>
                      </>
                    ) : (
                      <p className="text-[14px] text-orange-400 border border-orange-400/30 bg-orange-400/10 inline-block px-3 py-1 rounded-md">Pending Signature</p>
                    )}
                  </div>
                  
                  <div className="flex-1 md:text-right">
                    <h3 className="text-[14px] font-semibold text-white mb-6">Client</h3>
                    {contract.clientStatus === 'Signed' ? (
                      <>
                        <div className="mb-4 inline-block md:float-right clear-both">
                          <svg width="200" height="60" viewBox="0 0 200 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 40C15 35 30 20 40 25C50 30 40 45 35 40C30 35 45 25 55 30" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
                            <path d="M50 40C60 30 80 20 90 25C100 30 85 45 75 40C65 35 80 25 95 30" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
                            <path d="M90 40C100 35 115 25 125 30C135 35 120 45 115 40C110 35 125 25 140 30" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
                            <path d="M130 40C140 35 160 25 170 30C180 35 165 45 160 40" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
                          </svg>
                        </div>
                        <div className="clear-both"></div>
                        <p className="text-[12px] text-slate-400">Date : {contract.date}</p>
                      </>
                    ) : (
                      <p className="text-[14px] text-orange-400 border border-orange-400/30 bg-orange-400/10 inline-block px-3 py-1 rounded-md md:float-right">Pending Signature</p>
                    )}
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