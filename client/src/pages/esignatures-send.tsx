import { useState } from "react";
import { Recipient, DocumentFile, PlacedField, FieldType } from "../types/signing";
import PrepareStep from "../components/signing/PrepareStep";
import { Sidebar, Header } from "./clients";
import { UploadCloud, FileText, User, Mail, Plus, X, ArrowRight, CheckCircle2, Link as LinkIcon, Settings, Calendar, MapPin, Eye, Building2, Copy, Play, Trash2, Edit2, Users } from "lucide-react";
import { useLocation } from "wouter";

export default function ESignaturesSendPage() {
  const [openMenus, setOpenMenus] = useState<string>('esignatures');
  const [location, setLocation] = useLocation();
  const [currentStep, setCurrentStep] = useState(1);
  const [attachedFiles, setAttachedFiles] = useState<DocumentFile[]>([]);
  const [selectedFileId, setSelectedFileId] = useState<string | null>(null);
  const [signatureFields, setSignatureFields] = useState<{id: string, fileId: string, type: string, x: number, y: number, page: number, assignee: string}[]>([]);
  const [isDraggingField, setIsDraggingField] = useState<string | null>(null);
  const [recipients, setRecipients] = useState<Recipient[]>([
    { id: 'rec_1', name: 'John Doe', email: 'john@example.com', role: 'Signer', order: 1, color: ["#3b82f6", "#10b981", "#f59e0b", "#ec4899", "#8b5cf6", "#06b6d4"][0] }
  ]);
  const [placedFields, setPlacedFields] = useState<PlacedField[]>([]);
  const [emailSubject, setEmailSubject] = useState('Please sign this document');
  const [emailMessage, setEmailMessage] = useState('Please review and sign the attached document. Let me know if you have any questions.');

  const handleFileUpload = () => {
    // Mock file upload
    const newId = Date.now().toString();
    setAttachedFiles([
      ...attachedFiles,
      { name: 'Website_Redesign_Agreement.pdf', sizeLabel: '2.4 MB', pageCount: 3, id: newId }
    ]);
    setSelectedFileId(newId);
  };

  const handleRemoveFile = (index: number) => {
    const newFiles = [...attachedFiles];
    newFiles.splice(index, 1);
    setAttachedFiles(newFiles);
  };

  const handleAddRecipient = () => {
    setRecipients([...recipients, { 
      id: 'rec_' + Date.now(), 
      name: '', 
      email: '', 
      role: 'Signer', 
      order: recipients.length + 1,
      color: ["#3b82f6", "#10b981", "#f59e0b", "#ec4899", "#8b5cf6", "#06b6d4"][recipients.length % ["#3b82f6", "#10b981", "#f59e0b", "#ec4899", "#8b5cf6", "#06b6d4"].length]
    }]);
  };

  const handleRemoveRecipient = (index: number) => {
    if (recipients.length > 1) {
      const newRecipients = [...recipients];
      newRecipients.splice(index, 1);
      setRecipients(newRecipients);
    }
  };

  const renderStepIndicator = () => {
    const steps = [
      { num: 1, title: 'Add Recipients', icon: Users },
      { num: 2, title: 'Add Documents', icon: FileText },
      { num: 3, title: 'Email Details', icon: Mail },
      { num: 4, title: 'Review & Send', icon: Play }
    ];

    return (
      <div className="mb-8">
        <div className="flex items-center justify-between relative">
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-1 bg-slate-800 rounded-full z-0"></div>
          <div 
            className="absolute left-0 top-1/2 -translate-y-1/2 h-1 bg-indigo-500 rounded-full z-0 transition-all duration-500"
            style={{ width: `${((currentStep - 1) / (steps.length - 1)) * 100}%` }}
          ></div>
          
          {steps.map((step) => {
            const Icon = step.icon;
            const isCompleted = step.num < currentStep;
            const isCurrent = step.num === currentStep;
            
            return (
              <div key={step.num} className="relative z-10 flex flex-col items-center group">
                <div 
                  className={`w-12 h-12 rounded-full flex items-center justify-center border-4 border-slate-900 transition-all duration-300 shadow-xl
                    ${isCompleted ? 'bg-indigo-500 text-white' : 
                      isCurrent ? 'bg-slate-800 border-indigo-500 text-indigo-400 scale-110' : 
                      'bg-slate-800 text-slate-500 border-slate-700'}`}
                >
                  {isCompleted ? <CheckCircle2 className="w-5 h-5" /> : <Icon className="w-5 h-5" />}
                </div>
                <div className={`absolute top-14 whitespace-nowrap text-[12px] font-bold mt-2 transition-colors
                  ${isCurrent ? 'text-indigo-400 drop-shadow-[0_0_5px_rgba(99,102,241,0.5)]' : 
                    isCompleted ? 'text-white' : 'text-slate-500'}`}>
                  {step.title}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <div className="flex h-screen bg-[#0f172a] font-sans selection:bg-indigo-500/30 overflow-hidden">
      <Sidebar openMenus={openMenus} toggleMenu={(m) => setOpenMenus(m === openMenus ? '' : m)} currentPath={location} />
      
      <div className="flex-1 flex flex-col h-screen overflow-hidden relative">
        <Header title="Send for Signature" />

        <main className="flex-1 overflow-y-auto p-8 relative custom-scrollbar">
          {/* Background Elements */}
          <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-indigo-900/20 to-transparent pointer-events-none"></div>
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-500/10 blur-[120px] rounded-full pointer-events-none"></div>
          
          <div className="max-w-4xl mx-auto relative z-10">
            {/* Header */}
            <div className="mb-12 text-center">
              <h1 className="text-3xl font-black text-white mb-3 drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                Send Document for Signature
              </h1>
              <p className="text-slate-400 text-sm max-w-2xl mx-auto">
                Upload your document, specify who needs to sign it, and send it out securely in just a few steps.
              </p>
            </div>

            {/* Wizard Container */}
            <div className="bg-slate-900/80 backdrop-blur-xl rounded-2xl border border-slate-700/50 shadow-[0_0_30px_rgba(0,0,0,0.3)] p-8">
              
              {renderStepIndicator()}
              
              <div className="mt-16">
                
                {/* Step 2: Add Documents & Prepare */}
                {currentStep === 2 && (
                  <div className="animate-in fade-in slide-in-from-right-4 duration-500">
                    {!selectedFileId ? (
                      // Upload View
                      <>
                        <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                          <FileText className="w-5 h-5 text-indigo-400" /> Upload Documents
                        </h2>
                        
                        <div 
                          className="border-2 border-dashed border-slate-600 rounded-xl p-10 flex flex-col items-center justify-center text-center hover:border-indigo-500 hover:bg-indigo-500/5 transition-all cursor-pointer group bg-slate-900/50"
                          onClick={handleFileUpload}
                        >
                          <div className="w-16 h-16 rounded-full bg-slate-800 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform group-hover:bg-indigo-500/20 group-hover:text-indigo-400 border border-slate-700">
                            <UploadCloud className="w-8 h-8 text-slate-400 group-hover:text-indigo-400 transition-colors" />
                          </div>
                          <h3 className="text-[16px] font-bold text-white mb-2">Click to upload or drag & drop</h3>
                          <p className="text-[13px] text-slate-400 max-w-sm mb-6">
                            Supported formats: PDF, DOCX, DOC, PNG, JPG (Max 25MB)
                          </p>
                          <button className="px-6 py-2.5 bg-slate-800 hover:bg-slate-700 border border-slate-700 text-white rounded-lg text-[13px] font-bold transition-colors shadow-sm">
                            Browse Files
                          </button>
                        </div>
                        
                        <div className="flex items-center my-6">
                          <div className="flex-1 h-px bg-slate-800"></div>
                          <span className="px-4 text-[12px] font-bold text-slate-500 uppercase tracking-widest">OR</span>
                          <div className="flex-1 h-px bg-slate-800"></div>
                        </div>
                        
                        <button className="w-full py-4 border border-slate-700 bg-slate-800/50 hover:bg-slate-800 rounded-xl text-left px-6 flex items-center justify-between transition-colors group">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center border border-indigo-500/20">
                              <Copy className="w-5 h-5 text-indigo-400" />
                            </div>
                            <div>
                              <h4 className="text-[15px] font-bold text-white group-hover:text-indigo-300 transition-colors">Use a Template</h4>
                              <p className="text-[12px] text-slate-400">Start from a pre-configured template like NDA, Proposal, etc.</p>
                            </div>
                          </div>
                          <ArrowRight className="w-5 h-5 text-slate-500 group-hover:text-indigo-400 group-hover:translate-x-1 transition-all" />
                        </button>
                      </>
                    ) : (
                      <PrepareStep 
                        recipients={recipients}
                        documents={documents}
                        placedFields={placedFields}
                        setPlacedFields={setPlacedFields}
                      />
                    )}
                  </div>
                )}
                
                {currentStep === 3 && (
                  <div className="animate-in fade-in slide-in-from-right-4 duration-500">
                    <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                      <Mail className="w-5 h-5 text-indigo-400" /> Email Message
                    </h2>
                    
                    <div className="bg-slate-800/40 border border-slate-700/50 rounded-xl p-6">
                      <div className="space-y-5">
                        <div>
                          <label className="block text-[12px] font-bold text-slate-400 mb-2 uppercase tracking-wider">Email Subject</label>
                          <input 
                            type="text" 
                            value={emailSubject}
                            onChange={(e) => setEmailSubject(e.target.value)}
                            className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg text-[14px] font-medium text-white focus:outline-none focus:border-indigo-500 transition-colors shadow-inner" 
                          />
                        </div>
                        
                        <div>
                          <label className="block text-[12px] font-bold text-slate-400 mb-2 uppercase tracking-wider">Email Message</label>
                          <textarea 
                            rows={6}
                            value={emailMessage}
                            onChange={(e) => setEmailMessage(e.target.value)}
                            className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg text-[14px] text-slate-300 focus:outline-none focus:border-indigo-500 transition-colors shadow-inner resize-none"
                          ></textarea>
                          <p className="text-[11px] text-slate-500 mt-2">
                            This message will be included in the email sent to all recipients.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                
                {/* Step 4: Review & Send */}
                {currentStep === 4 && (
                  <div className="animate-in fade-in slide-in-from-right-4 duration-500">
                    <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                      <Play className="w-5 h-5 text-indigo-400" /> Review & Send
                    </h2>
                    
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                      <div className="lg:col-span-2 space-y-6">
                        {/* Documents Summary */}
                        <div className="bg-slate-800/40 border border-slate-700/50 rounded-xl p-5">
                          <h3 className="text-[13px] font-bold text-slate-400 uppercase tracking-wider mb-4 border-b border-slate-700/50 pb-2">Documents to Sign</h3>
                          {attachedFiles.length > 0 ? (
                            <div className="space-y-3">
                              {attachedFiles.map((file, idx) => (
                                <div key={idx} className="flex items-center gap-3 bg-slate-900/50 p-3 rounded-lg border border-slate-700">
                                  <FileText className="w-5 h-5 text-rose-400" />
                                  <span className="text-[14px] font-bold text-white">{file.name}</span>
                                </div>
                              ))}
                            </div>
                          ) : (
                            <div className="text-center py-6 bg-rose-500/10 border border-rose-500/20 rounded-lg">
                              <p className="text-[13px] font-bold text-rose-400">No documents attached.</p>
                              <button onClick={() => setCurrentStep(1)} className="text-[11px] text-white underline mt-1 hover:text-rose-300">Go back and add documents</button>
                            </div>
                          )}
                        </div>
                        
                        {/* Recipients Summary */}
                        <div className="bg-slate-800/40 border border-slate-700/50 rounded-xl p-5">
                          <h3 className="text-[13px] font-bold text-slate-400 uppercase tracking-wider mb-4 border-b border-slate-700/50 pb-2">Recipients</h3>
                          <div className="space-y-3">
                            {recipients.map((recipient, idx) => (
                              <div key={idx} className="flex items-center justify-between bg-slate-900/50 p-3 rounded-lg border border-slate-700">
                                <div className="flex items-center gap-3">
                                  <div className="w-8 h-8 rounded-full bg-indigo-500/20 text-indigo-400 flex items-center justify-center font-bold text-[12px]">
                                    {recipient.name ? recipient.name.charAt(0).toUpperCase() : '?'}
                                  </div>
                                  <div>
                                    <div className="text-[13px] font-bold text-white">{recipient.name || 'Unnamed Recipient'}</div>
                                    <div className="text-[11px] text-slate-400">{recipient.email || 'No email provided'}</div>
                                  </div>
                                </div>
                                <span className="px-2.5 py-1 bg-slate-800 rounded text-[10px] font-bold text-slate-300 border border-slate-700">
                                  {recipient.role}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                      
                      <div>
                        <div className="bg-indigo-500/10 border border-indigo-500/30 rounded-xl p-6 sticky top-0 shadow-[0_0_20px_rgba(99,102,241,0.1)]">
                          <div className="w-16 h-16 rounded-full bg-indigo-500/20 flex items-center justify-center mx-auto mb-4 border border-indigo-500/30">
                            <Mail className="w-8 h-8 text-indigo-400" />
                          </div>
                          <h3 className="text-center text-[16px] font-bold text-white mb-2">Ready to Send?</h3>
                          <p className="text-center text-[12px] text-slate-400 mb-6">
                            By sending this document, you are initiating a legally binding signature process.
                          </p>
                          
                          <div className="space-y-3">
                            <button 
                              onClick={() => {
                                // Mock send action
                                alert('Document sent successfully!');
                                setLocation('/clients/1');
                              }}
                              className="w-full py-3.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-[14px] font-bold transition-all shadow-[0_0_20px_rgba(79,70,229,0.4)] hover:shadow-[0_0_25px_rgba(79,70,229,0.6)] flex items-center justify-center gap-2"
                              disabled={attachedFiles.length === 0 || !recipients[0].email}
                            >
                              <Play className="w-4 h-4" /> Send Now
                            </button>
                            <button className="w-full py-3 bg-slate-800 hover:bg-slate-700 border border-slate-600 text-white rounded-xl text-[13px] font-bold transition-colors">
                              Preview Layout
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              
              {/* Navigation Footer */}
              <div className="mt-10 pt-6 border-t border-slate-800 flex items-center justify-between">
                <button 
                  onClick={() => currentStep > 1 ? setCurrentStep(currentStep - 1) : setLocation('/clients/1')}
                  className="px-6 py-2.5 bg-slate-800 hover:bg-slate-700 text-white rounded-lg text-[13px] font-bold transition-colors border border-slate-700"
                >
                  {currentStep === 1 ? 'Cancel' : 'Back'}
                </button>
                
                {currentStep < 4 && (
                  <button 
                    onClick={() => setCurrentStep(currentStep + 1)}
                    className="px-8 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg text-[14px] font-bold transition-all shadow-[0_0_15px_rgba(79,70,229,0.3)] flex items-center gap-2 group"
                  >
                    Next <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                )}
              </div>
            </div>
            
          </div>
        </main>
      </div>
    </div>
  );
}

// Temporary icon component to avoid adding more imports
function UsersGroupIcon(props: any) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}