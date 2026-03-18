import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Sidebar, Header } from "./clients";
import { Search, Plus, Edit2, Trash2, X, FileText, CheckCircle } from "lucide-react";

export default function LaunchpadTemplatesPage() {
  const [openMenus, setOpenMenus] = useState<string>('launchpads');
  const [location, setLocation] = useLocation();
  const [activeTab, setActiveTab] = useState<'All Templates' | 'Task Templates' | 'Document Templates'>('All Templates');
  
  // Modal states
  const [isTemplateModalOpen, setIsTemplateModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [templateToEdit, setTemplateToEdit] = useState<{id: string, name: string, creator: string, type: string} | null>(null);
  const [itemToDelete, setItemToDelete] = useState<{id: string, name: string} | null>(null);

  // Mock data for templates
  const [templates, setTemplates] = useState([
    { id: '1', name: 'Demo 5 task Template', creator: 'PG', type: 'Task Templates', date: '22-10-2023' },
    { id: '2', name: 'Standard Task Template', creator: 'System', type: 'Task Templates', date: '15-09-2023' },
    { id: '3', name: 'Standard NDA', creator: 'System', type: 'Document Templates', date: '10-09-2023' },
    { id: '4', name: 'Client Onboarding', creator: 'MJ', type: 'Document Templates', date: '05-11-2023' },
  ]);

  const toggleMenu = (menu: string) => {
    setOpenMenus(prev => prev === menu ? '' : menu);
  };

  const handleEditTemplate = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const newName = formData.get('templateName') as string;
    const type = formData.get('templateType') as string;
    
    if (!newName.trim()) return;

    if (templateToEdit) {
      setTemplates(prev => prev.map(t => 
        t.id === templateToEdit.id ? { ...t, name: newName, type } : t
      ));
    } else {
      setTemplates(prev => [...prev, { 
        id: Date.now().toString(), 
        name: newName, 
        creator: 'PG Admin', 
        type,
        date: new Date().toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })
      }]);
    }
    
    setIsTemplateModalOpen(false);
    setTemplateToEdit(null);
  };

  const handleDeleteConfirm = () => {
    if (!itemToDelete) return;
    setTemplates(prev => prev.filter(t => t.id !== itemToDelete.id));
    setIsDeleteModalOpen(false);
    setItemToDelete(null);
  };

  const filteredTemplates = activeTab === 'All Templates' 
    ? templates 
    : templates.filter(t => t.type === activeTab);

  return (
    <div className="flex h-screen bg-[#0f172a] text-slate-200 font-sans overflow-hidden">
      <Sidebar openMenus={openMenus} toggleMenu={toggleMenu} currentPath={location} />
      
      <div className="flex-1 flex flex-col h-screen overflow-hidden">
        <Header location={location} />

        <main className="flex-1 overflow-y-auto p-4 md:p-6 lg:p-8 custom-scrollbar">
          <div className="max-w-7xl mx-auto space-y-6">
            
            {/* Header Area */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <h1 className="text-2xl font-bold text-white tracking-tight">Launchpad Templates</h1>
            </div>

            {/* Main Content Card */}
            <div className="glass-panel rounded-2xl border border-white/10 overflow-hidden flex flex-col">
              
              {/* Toolbar */}
              <div className="p-6 border-b border-slate-800/50 flex flex-col xl:flex-row justify-between items-start xl:items-center gap-4">
                
                {/* Search & Tabs */}
                <div className="flex flex-col xl:flex-row items-start xl:items-center gap-4 w-full xl:w-auto">
                  <div className="relative w-full xl:w-64 shrink-0">
                    <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                    <input 
                      type="text" 
                      placeholder="Search templates..." 
                      className="w-full bg-slate-900/50 border border-slate-700/50 rounded-lg pl-9 pr-4 py-2 text-sm text-slate-200 focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/50 transition-all placeholder:text-slate-500"
                    />
                  </div>
                  
                  <div className="flex bg-slate-900/50 rounded-lg p-1 border border-slate-700/50 overflow-x-auto max-w-full custom-scrollbar">
                    <button 
                      onClick={() => setActiveTab('All Templates')}
                      className={`px-4 py-1.5 text-sm font-medium rounded-md transition-colors whitespace-nowrap ${
                        activeTab === 'All Templates' 
                          ? 'bg-slate-800 text-white shadow-sm' 
                          : 'text-slate-400 hover:text-slate-300'
                      }`}
                    >
                      All Templates
                    </button>
                    <button 
                      onClick={() => setActiveTab('Task Templates')}
                      className={`px-4 py-1.5 text-sm font-medium rounded-md transition-colors whitespace-nowrap ${
                        activeTab === 'Task Templates' 
                          ? 'bg-slate-800 text-white shadow-sm' 
                          : 'text-slate-400 hover:text-slate-300'
                      }`}
                    >
                      Task Templates
                    </button>
                    <button 
                      onClick={() => setActiveTab('Document Templates')}
                      className={`px-4 py-1.5 text-sm font-medium rounded-md transition-colors whitespace-nowrap ${
                        activeTab === 'Document Templates' 
                          ? 'bg-slate-800 text-white shadow-sm' 
                          : 'text-slate-400 hover:text-slate-300'
                      }`}
                    >
                      Document Templates
                    </button>
                  </div>
                </div>

                {/* Add Button */}
                <button 
                  onClick={() => {
                    setTemplateToEdit(null);
                    setIsTemplateModalOpen(true);
                  }}
                  className="px-4 py-2 bg-[#7c3aed] hover:bg-purple-600 text-white text-sm font-medium rounded-lg shadow-[0_0_15px_rgba(124,58,237,0.3)] transition-all flex items-center gap-2 whitespace-nowrap shrink-0"
                >
                  <Plus className="w-4 h-4" /> Add New Template
                </button>
              </div>

              {/* Table */}
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-slate-800 bg-slate-900/30">
                      <th className="py-4 px-6 text-xs font-semibold text-slate-400 uppercase tracking-wider">Template Name</th>
                      <th className="py-4 px-6 text-xs font-semibold text-slate-400 uppercase tracking-wider">Template Type</th>
                      <th className="py-4 px-6 text-xs font-semibold text-slate-400 uppercase tracking-wider">Created By</th>
                      <th className="py-4 px-6 text-xs font-semibold text-slate-400 uppercase tracking-wider">Date</th>
                      <th className="py-4 px-6 text-xs font-semibold text-slate-400 uppercase tracking-wider text-right">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredTemplates.length > 0 ? (
                      filteredTemplates.map((template) => (
                        <tr key={template.id} className="border-b border-slate-800/50 hover:bg-slate-800/20 transition-colors group">
                          <td className="py-4 px-6">
                            <div className="flex items-center gap-3">
                              <div className={`w-8 h-8 rounded bg-slate-800 flex items-center justify-center shrink-0 ${template.type === 'Task Templates' ? 'text-blue-400' : 'text-emerald-400'}`}>
                                {template.type === 'Task Templates' ? <CheckCircle className="w-4 h-4" /> : <FileText className="w-4 h-4" />}
                              </div>
                              <span className="text-sm font-medium text-slate-200">{template.name}</span>
                            </div>
                          </td>
                          <td className="py-4 px-6">
                            <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-medium border ${template.type === 'Task Templates' ? 'bg-blue-500/10 text-blue-400 border-blue-500/20' : 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20'}`}>
                              {template.type === 'Task Templates' ? 'Task Template' : 'Document Template'}
                            </span>
                          </td>
                          <td className="py-4 px-6">
                            <div className="flex items-center gap-2">
                              {template.creator === 'System' ? (
                                <span className="text-sm text-slate-400">---</span>
                              ) : (
                                <>
                                  <div className="w-6 h-6 rounded-full bg-slate-700 flex items-center justify-center text-[10px] font-bold text-slate-300 shrink-0">
                                    {template.creator.substring(0,2).toUpperCase()}
                                  </div>
                                  <span className="text-sm text-slate-300">{template.creator}</span>
                                </>
                              )}
                            </div>
                          </td>
                          <td className="py-4 px-6 text-sm text-slate-400">
                            {template.date}
                          </td>
                          <td className="py-4 px-6">
                            <div className="flex items-center justify-end gap-2">
                              <button 
                                onClick={() => {
                                  setTemplateToEdit(template);
                                  setIsTemplateModalOpen(true);
                                }}
                                className="p-1.5 text-slate-400 hover:text-purple-400 hover:bg-purple-400/10 rounded-lg transition-colors"
                                title="Edit Template"
                              >
                                <Edit2 className="w-4 h-4" />
                              </button>
                              <button 
                                onClick={() => {
                                  setItemToDelete({id: template.id, name: template.name});
                                  setIsDeleteModalOpen(true);
                                }}
                                className="p-1.5 text-slate-400 hover:text-rose-400 hover:bg-rose-400/10 rounded-lg transition-colors"
                                title="Delete Template"
                              >
                                <Trash2 className="w-4 h-4" />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan={5} className="py-12 text-center">
                          <div className="flex flex-col items-center justify-center text-slate-500">
                            <FileText className="w-12 h-12 mb-3 text-slate-600" />
                            <p className="text-base font-medium">No templates found</p>
                            <p className="text-sm mt-1">Click "Add New Template" to create one.</p>
                          </div>
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>

          </div>
        </main>
      </div>

      {/* Add/Edit Template Modal */}
      {isTemplateModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm px-4">
          <div className="glass-panel border border-slate-700/50 rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden flex flex-col animate-in fade-in zoom-in-95 duration-200">
            <div className="p-6 border-b border-slate-700/50 flex justify-between items-center bg-slate-900/20">
              <h2 className="text-xl font-bold text-white">{templateToEdit ? 'Edit' : 'Add New'} Template</h2>
              <button 
                onClick={() => setIsTemplateModalOpen(false)}
                className="p-2 text-slate-400 hover:text-slate-200 hover:bg-slate-800 rounded-lg transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <form onSubmit={handleEditTemplate}>
              <div className="p-6 space-y-6">
                <div className="space-y-2">
                  <label className="text-[13px] font-medium text-slate-400">Template Type*</label>
                  <div className="relative">
                    <select 
                      name="templateType"
                      defaultValue={templateToEdit?.type || (activeTab !== 'All Templates' ? activeTab : 'Task Templates')}
                      className="w-full bg-slate-900/50 border border-slate-700 rounded-lg pl-4 pr-10 py-2.5 text-sm text-slate-200 focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/50 transition-all appearance-none"
                      required
                    >
                      <option value="Task Templates" className="bg-slate-800 text-slate-200">Task Template</option>
                      <option value="Document Templates" className="bg-slate-800 text-slate-200">Document Template</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none text-slate-400">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[13px] font-medium text-slate-400">Template Name*</label>
                  <input 
                    type="text" 
                    name="templateName"
                    defaultValue={templateToEdit?.name || ''}
                    placeholder="e.g., Standard Template"
                    className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-2.5 text-sm text-slate-200 focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/50 transition-all"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[13px] font-medium text-slate-400">Description (Optional)</label>
                  <textarea 
                    name="description"
                    rows={3}
                    placeholder="Brief description of what this template contains..."
                    className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-2.5 text-sm text-slate-200 focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/50 transition-all resize-none"
                  ></textarea>
                </div>
              </div>
              
              <div className="p-6 border-t border-slate-700/50 bg-slate-800/30 flex justify-end gap-3">
                <button 
                  type="button"
                  onClick={() => setIsTemplateModalOpen(false)}
                  className="px-6 py-2 bg-transparent hover:bg-slate-800 text-slate-300 text-sm font-medium rounded-lg border border-slate-700 transition-colors"
                >
                  Cancel
                </button>
                <button 
                  type="submit"
                  className="px-8 py-2 bg-[#7c3aed] hover:bg-purple-600 text-white text-sm font-medium rounded-lg shadow-[0_0_15px_rgba(124,58,237,0.3)] transition-all"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {isDeleteModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm px-4">
          <div className="glass-panel border border-rose-500/20 rounded-2xl shadow-2xl w-full max-w-md overflow-hidden flex flex-col animate-in fade-in zoom-in-95 duration-200">
            <div className="p-6">
              <div className="w-12 h-12 rounded-full bg-rose-500/10 flex items-center justify-center mb-4 mx-auto">
                <Trash2 className="w-6 h-6 text-rose-500" />
              </div>
              <h2 className="text-xl font-bold text-white text-center mb-2">Delete Template</h2>
              <p className="text-slate-400 text-center text-sm">
                Are you sure you want to delete the template <span className="text-slate-200 font-medium">"{itemToDelete?.name}"</span>? This action cannot be undone.
              </p>
            </div>
            
            <div className="p-6 border-t border-slate-700/50 bg-slate-800/30 flex justify-center gap-4">
              <button 
                onClick={() => setIsDeleteModalOpen(false)}
                className="px-6 py-2 bg-transparent hover:bg-slate-800 text-slate-300 text-sm font-medium rounded-lg border border-slate-700 transition-colors w-full"
              >
                Cancel
              </button>
              <button 
                onClick={handleDeleteConfirm}
                className="px-6 py-2 bg-rose-500 hover:bg-rose-600 text-white text-sm font-medium rounded-lg shadow-[0_0_15px_rgba(244,63,94,0.3)] transition-all w-full"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
