import { useState } from "react";
import { useLocation, useParams } from "wouter";
import { Sidebar, Header } from "./clients";
import { Building2, Edit2, Mail, MapPin, Globe, Compass, Plus, Phone, Bell, Search, Info, PlusCircle, CheckCircle2, ChevronDown, Users, User, Briefcase, MessageSquare, Eye, Zap, X, Lock, Trash2, FileText, Bold, Link as LinkIcon, List, AlignLeft, Image as ImageIcon, Video } from "lucide-react";

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
  const [isActivityDropdownOpen, setIsActivityDropdownOpen] = useState(false);
  const [activityFilter, setActivityFilter] = useState('All Activities');
  
  const activities = [
    {
      id: 1,
      type: 'Tasks',
      title: 'Follow Up task added.',
      date: 'Mar 09, 2026',
      time: '02:40 PM',
      author: 'Maria Christina',
      icon: <CheckCircle2 className="w-4 h-4 text-[#eab308] shrink-0 mt-0.5" />
    },
    {
      id: 2,
      type: 'Emails',
      title: "Hi! Saw your business on Yelp. We're a web development company offerin...",
      date: 'Mar 09, 2026',
      time: '02:40 PM',
      author: 'Maria Christina',
      icon: <MessageSquare className="w-4 h-4 text-[#eab308] shrink-0 mt-0.5" />
    },
    {
      id: 3,
      type: 'Notes',
      title: 'Discussed new contract terms with client.',
      date: 'Mar 08, 2026',
      time: '11:15 AM',
      author: 'Admin Gorilla',
      icon: <FileText className="w-4 h-4 text-[#eab308] shrink-0 mt-0.5" />
    },
    {
      id: 4,
      type: 'Call',
      title: 'Outbound call: Left voicemail.',
      date: 'Mar 07, 2026',
      time: '04:30 PM',
      author: 'Maria Christina',
      icon: <Phone className="w-4 h-4 text-[#eab308] shrink-0 mt-0.5" />
    },
    {
      id: 5,
      type: 'Text / SMS',
      title: 'Sent promotional text message about new features.',
      date: 'Mar 06, 2026',
      time: '10:00 AM',
      author: 'System',
      icon: <MessageSquare className="w-4 h-4 text-[#eab308] shrink-0 mt-0.5" />
    }
  ];

  const filteredActivities = activityFilter === 'All Activities' 
    ? activities 
    : activities.filter(a => a.type === activityFilter);
  const [isEditClientModalOpen, setIsEditClientModalOpen] = useState(false);
  const [isBusinessDiscoveryModalOpen, setIsBusinessDiscoveryModalOpen] = useState(false);
  const [isAnalyticsModalOpen, setIsAnalyticsModalOpen] = useState(false);
  const [isChoosePlanModalOpen, setIsChoosePlanModalOpen] = useState(false);
  const [isAddEmployeeModalOpen, setIsAddEmployeeModalOpen] = useState(false);
  const [isEditEmployeeModalOpen, setIsEditEmployeeModalOpen] = useState(false);
  const [isUpdatePasswordModalOpen, setIsUpdatePasswordModalOpen] = useState(false);
  const [isDeleteEmployeeModalOpen, setIsDeleteEmployeeModalOpen] = useState(false);
  
  const [editingEmployee, setEditingEmployee] = useState<any>(null);
  const [updatingPasswordEmployee, setUpdatingPasswordEmployee] = useState<any>(null);
  const [deletingEmployee, setDeletingEmployee] = useState<any>(null);
  
  const [checkedComplianceItems, setCheckedComplianceItems] = useState<Record<number, boolean>>({});
  const [isGorillaAppsExpanded, setIsGorillaAppsExpanded] = useState(false);
  const [isEditContactModalOpen, setIsEditContactModalOpen] = useState(false);
  const [isEditWebsiteModalOpen, setIsEditWebsiteModalOpen] = useState(false);
  const [isEditGeneralInfoModalOpen, setIsEditGeneralInfoModalOpen] = useState(false);

  // Business Discovery Links State
  const [editClientLinks, setEditClientLinks] = useState([
    { label: '', url: '' }
  ]);
  const [isEditorEnabled, setIsEditorEnabled] = useState(false);

  const handleAddLink = () => {
    setEditClientLinks([...editClientLinks, { label: '', url: '' }]);
  };

  const handleRemoveLink = (index: number) => {
    setEditClientLinks(editClientLinks.filter((_, i) => i !== index));
  };

  const handleLinkChange = (index: number, field: 'label' | 'url', value: string) => {
    const newLinks = [...editClientLinks];
    newLinks[index] = { ...newLinks[index], [field]: value };
    setEditClientLinks(newLinks);
  };

  // Note States
  const [notes, setNotes] = useState([
    {
      id: 1,
      title: 'brand new',
      description: '-brand new-no logo no website-follow up in 3 days',
      author: 'Maria',
      date: '09 Mar, 2026',
      time: '02:40 pm',
      initial: 'M'
    }
  ]);
  const [isAddNoteModalOpen, setIsAddNoteModalOpen] = useState(false);
  const [isEditNoteModalOpen, setIsEditNoteModalOpen] = useState(false);
  const [isDeleteNoteModalOpen, setIsDeleteNoteModalOpen] = useState(false);
  const [isSendEmailNoteModalOpen, setIsSendEmailNoteModalOpen] = useState(false);
  const [editingNote, setEditingNote] = useState<any>(null);
  const [deletingNote, setDeletingNote] = useState<any>(null);
  const [sendingEmailNote, setSendingEmailNote] = useState<any>(null);
  const [newNote, setNewNote] = useState({ title: '', description: '' });

  const [emailForm, setEmailForm] = useState({ to: '', subject: '', message: '' });

  // Sample States
  const [samples, setSamples] = useState<any[]>([
    {
      id: 1,
      title: 'eee',
      type: 'Website',
      url: 'eee.pinkgorillasoftware.com',
      author: 'Admin',
      date: '17 Feb, 2026',
      time: '11:53 pm',
    },
    {
      id: 2,
      title: 'test',
      type: 'Logo',
      url: 'staging-hub.pinkgorilla.agency/logo-sample/ODI',
      author: 'Admin',
      date: '17 Feb, 2026',
      time: '11:53 pm',
    }
  ]);
  const [isGenerateWebsiteModalOpen, setIsGenerateWebsiteModalOpen] = useState(false);
  const [isAddLogoModalOpen, setIsAddLogoModalOpen] = useState(false);
  const [newWebsiteSample, setNewWebsiteSample] = useState({ subdomain: '', template: 'Accountant1', logoFileName: '' });
  const [newLogoSample, setNewLogoSample] = useState({ title: '', logoFileName: '' });
  const [deletingSample, setDeletingSample] = useState<any>(null);
  const [isDeleteSampleModalOpen, setIsDeleteSampleModalOpen] = useState(false);

  const handleGenerateWebsite = () => {
    if (newWebsiteSample.subdomain) {
      const now = new Date();
      setSamples([
        {
          id: Date.now(),
          title: newWebsiteSample.subdomain,
          type: 'Website',
          url: `${newWebsiteSample.subdomain}.pinkgorillasoftware.com`,
          author: 'Admin',
          date: now.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }),
          time: now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true }).toLowerCase()
        },
        ...samples
      ]);
      setNewWebsiteSample({ subdomain: '', template: 'Accountant1', logoFileName: '' });
      setIsGenerateWebsiteModalOpen(false);
    }
  };

  const handleAddLogo = () => {
    if (newLogoSample.title) {
      const now = new Date();
      setSamples([
        {
          id: Date.now(),
          title: newLogoSample.title,
          type: 'Logo',
          url: `staging-hub.pinkgorilla.agency/logo-sample/${newLogoSample.title.substring(0, 3).toUpperCase()}`,
          author: 'Admin',
          date: now.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }),
          time: now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true }).toLowerCase()
        },
        ...samples
      ]);
      setNewLogoSample({ title: '', logoFileName: '' });
      setIsAddLogoModalOpen(false);
    }
  };

  const handleDeleteSample = () => {
    if (deletingSample) {
      setSamples(samples.filter(sample => sample.id !== deletingSample.id));
      setIsDeleteSampleModalOpen(false);
      setDeletingSample(null);
    }
  };

  const handleAddNote = () => {
    if (newNote.title && newNote.description) {
      const now = new Date();
      setNotes([
        {
          id: Date.now(),
          title: newNote.title,
          description: newNote.description,
          author: 'Admin Gorilla',
          date: now.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }),
          time: now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true }).toLowerCase(),
          initial: 'A'
        },
        ...notes
      ]);
      setNewNote({ title: '', description: '' });
      setIsAddNoteModalOpen(false);
    }
  };

  const handleEditNote = () => {
    if (editingNote && editingNote.title && editingNote.description) {
      setNotes(notes.map(note => 
        note.id === editingNote.id ? { ...note, ...editingNote } : note
      ));
      setIsEditNoteModalOpen(false);
      setEditingNote(null);
    }
  };

  const handleDeleteNote = () => {
    if (deletingNote) {
      setNotes(notes.filter(note => note.id !== deletingNote.id));
      setIsDeleteNoteModalOpen(false);
      setDeletingNote(null);
    }
  };

  const handleSendEmailNote = () => {
    if (emailForm.to && emailForm.subject && emailForm.message) {
      setIsSendEmailNoteModalOpen(false);
      setSendingEmailNote(null);
      setEmailForm({ to: '', subject: '', message: '' });
      // Logic to actually send email goes here
    }
  };

  const toggleComplianceItem = (index: number) => {
    setCheckedComplianceItems(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };
  
  // State for added employees
  const [employees, setEmployees] = useState([
    {
      id: 1,
      firstName: 'Test',
      lastName: 'Neeraj',
      email: 'vikas.pink@pinkgorillasoftware.com',
      phone: '+1 258 963 1470',
      designation: 'HR'
    },
    {
      id: 2,
      firstName: 'Jerry',
      lastName: 'Neeraj',
      email: 'neerajpinkgorillasoftware@gmail.com',
      phone: '+1 987 654 3210',
      designation: 'HR'
    }
  ]);
  
  // State for new employee form
  const [newEmployee, setNewEmployee] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneCode: '+1',
    phoneNumber: '',
    designation: 'HR',
    password: ''
  });

  const handleAddEmployee = () => {
    if (newEmployee.firstName && newEmployee.email) {
      setEmployees([
        ...employees,
        {
          id: Date.now(),
          firstName: newEmployee.firstName,
          lastName: newEmployee.lastName,
          email: newEmployee.email,
          phone: `${newEmployee.phoneCode} ${newEmployee.phoneNumber}`,
          designation: newEmployee.designation
        }
      ]);
      // Reset form
      setNewEmployee({
        firstName: '',
        lastName: '',
        email: '',
        phoneCode: '+1',
        phoneNumber: '',
        designation: 'HR',
        password: ''
      });
      setIsAddEmployeeModalOpen(false);
    }
  };

  const handleEditEmployee = () => {
    if (editingEmployee && editingEmployee.firstName && editingEmployee.email) {
      setEmployees(employees.map(emp => 
        emp.id === editingEmployee.id ? { ...emp, ...editingEmployee } : emp
      ));
      setIsEditEmployeeModalOpen(false);
      setEditingEmployee(null);
    }
  };

  const [passwordForm, setPasswordForm] = useState({ newPassword: '', confirmPassword: '' });

  const handleUpdatePassword = () => {
    if (passwordForm.newPassword && passwordForm.newPassword === passwordForm.confirmPassword) {
      setIsUpdatePasswordModalOpen(false);
      setUpdatingPasswordEmployee(null);
      setPasswordForm({ newPassword: '', confirmPassword: '' });
      // In a real app, update password API call goes here
    }
  };

  const handleDeleteEmployee = () => {
    if (deletingEmployee) {
      setEmployees(employees.filter(emp => emp.id !== deletingEmployee.id));
      setIsDeleteEmployeeModalOpen(false);
      setDeletingEmployee(null);
    }
  };
  const [isEditBackgroundModalOpen, setIsEditBackgroundModalOpen] = useState(false);
  const [selectedPlanTab, setSelectedPlanTab] = useState<'plans' | 'checkout'>('plans');
  const [selectedPlan, setSelectedPlan] = useState<any>(null);
  const [expandedPlans, setExpandedPlans] = useState<Record<string, boolean>>({});
  
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
  
  const togglePlanExpansion = (planName: string) => {
    setExpandedPlans(prev => ({
      ...prev,
      [planName]: !prev[planName]
    }));
  };

  const handleChoosePlan = (plan: any) => {
    setSelectedPlan(plan);
    setSelectedPlanTab('checkout');
  };

  const plans = [
    {
      name: "Core Starter",
      price: "$399",
      period: "Per month",
      launchCost: "$1,500",
      launchTime: "4 - 6 weeks",
      buttonText: "Choose",
      features: [
        "Website Design & Rebranding Up to 10 Pages",
        "Responsive design (mobile/tablet optimization)",
        "Domain Registration & Automated Web Renewal",
        "SSL Setup, Management and Renewal Serivce",
        "Shared Hosting Management & 99.9% Uptime",
        "Social Icons - Facebook, Youtube, LinkedIn, Yelp, Google",
        "Extra Pages, Google Profile, Social Feed",
        "Dedicated Account Manager",
        "3 Professional Dedicated Email Address Service",
        "Analytics and Statistics Profiles",
        "Dedicated Backend Software Dashboard",
        "Dedicated Backend Software Dashboard - CRM",
        "Dedicated Backend Software Dashboard - Project Tracker"
      ]
    },
    {
      name: "Core Growth",
      price: "$799",
      period: "Per month",
      launchCost: "$3,500",
      launchTime: "4 - 8 weeks",
      buttonText: "Choose",
      features: [
        "Website Design & Rebranding Up to 25 Pages",
        "Responsive design (mobile/tablet optimization)",
        "Domain Registration & Automated Web Renewal",
        "SSL Setup, Management and Renewal Serivce",
        "Dedicated Hosting Management & 99.9% Uptime",
        "Social Icons - Facebook, Youtube, LinkedIn, Yelp, Google",
        "Extra Pages, Google Profile, Social Feed",
        "Dedicated Account Manager",
        "3 Professional Dedicated Email Address Service",
        "Analytics and Statistics Profiles",
        "Dedicated Backend Software Dashboard",
        "Dedicated Backend Software Dashboard - CRM",
        "Dedicated Backend Software Dashboard - Project Tracker"
      ]
    },
    {
      name: "Core Pro",
      price: "$1,499",
      period: "Per month",
      launchCost: "$7,500",
      launchTime: "8 - 16 weeks",
      buttonText: "Choose",
      features: [
        "Website Design & Rebranding Unlimited Pages",
        "Responsive design (mobile/tablet optimization)",
        "Domain Registration & Automated Web Renewal",
        "SSL Setup, Management and Renewal Serivce",
        "Cloud Hosting Management & 99.9% Uptime",
        "Social Icons - Facebook, Youtube, LinkedIn, Yelp, Google",
        "Extra Pages, Google Profile, Social Feed",
        "Dedicated Account Manager",
        "20 Professional Dedicated Email Address Service",
        "Analytics and Statistics Profiles",
        "Dedicated Backend Software Dashboard",
        "Dedicated Backend Software Dashboard - CRM",
        "Dedicated Backend Software Dashboard - Project Tracker",
        "Dedicated Backend Software Dashboard - Billing Tool",
        "Dedicated Backend Software Dashboard - Social Media Manager",
        "Dedicated Backend Software Dashboard - Support Ticket Manager",
        "Dedicated Backend Software Dashboard - Chat Manager"
      ]
    },
    {
      name: "Core Enterprise",
      price: "Pay as you go",
      period: "",
      launchCost: "$20,000",
      launchTime: "8 - 16 weeks",
      buttonText: "Let's talk",
      features: [
        "Automated Booking - $18 Per Month",
        "Wire Framing Customization - $1,800 One Time",
        "AI Custom Video - $2,300 One Time",
        "ADA Compliance - $9 Per Month",
        "Automated Web Dedicated Chat Bot - $49 Per Month",
        "Heatmap + Behavior Analytics Setup (Hotjar, Clarity) - $127 Per Month",
        "Analytics and Statistics Profiles - $67 Per Month",
        "E-Commerce Shopping Cart - $500 Per Month",
        "Custom Mobile App Development - $2,000 One Time",
        "Logo Creation - $495 One Time",
        "Search Engine Optimization - $2,300 Per Month",
        "Additional Dedicated Email Addresses - $4 Per Month",
        "Monthly Blog Creation Wizard - $18 Per Month",
        "SMS Notification System - $139 Per Month",
        "Chatbot Integration (Sales or Support) - $118 Per Month"
      ]
    }
  ];

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
                <div className="bg-slate-900/60 backdrop-blur-xl rounded-xl border border-indigo-500/20 shadow-[0_0_15px_rgba(99,102,241,0.1)] relative z-30">
                  <div className="p-4 bg-indigo-500/10 border-b border-indigo-500/20 flex justify-between items-center rounded-t-xl">
                    <div className="flex items-center gap-2">
                      <Building2 className="w-5 h-5 text-indigo-400" />
                      <span className="font-bold text-white text-[15px]">Company Details</span>
                    </div>
                    <button 
                      onClick={() => setIsEditClientModalOpen(true)}
                      className="text-indigo-400 text-[13px] font-bold flex items-center gap-1 hover:text-indigo-300 bg-indigo-500/10 px-3 py-1.5 rounded-md transition-colors"
                    >
                      <Edit2 className="w-3.5 h-3.5" /> Edit
                    </button>
                  </div>
                  <div className="p-5 space-y-5">
                    <div>
                      <h3 className="text-[18px] font-bold text-white mb-2">{currentClient.name}</h3>
                      <span className="inline-block px-3 py-1 bg-slate-800 text-slate-300 font-medium text-[12px] rounded-md border border-slate-700">No communication yet</span>
                    </div>
                    <div className="flex items-center gap-3 bg-slate-800/50 p-3 rounded-lg border border-slate-700/50">
                      <span className="text-[13px] text-slate-400 font-medium w-24">Status:</span>
                      <span className="inline-flex items-center justify-center px-3 py-1 rounded-md text-[12px] font-bold text-amber-500 border border-amber-500/30 bg-amber-500/10 shadow-[0_0_10px_rgba(245,158,11,0.1)]">Brand New</span>
                    </div>
                    <div className="flex flex-col gap-2 relative bg-slate-800/50 p-3 rounded-lg border border-slate-700/50">
                      <span className="text-[13px] text-slate-400 font-medium">Assigned to:</span>
                      <button 
                        onClick={() => setIsAssigneeDropdownOpen(!isAssigneeDropdownOpen)}
                        className="px-3 py-2.5 bg-slate-900 border border-indigo-500/30 rounded-md text-[13px] font-medium text-white flex justify-between items-center w-full hover:bg-slate-800 transition-colors shadow-inner"
                      >
                        <span className="truncate">{selectedAssignee}</span>
                        <ChevronDown className="w-4 h-4 text-indigo-400 shrink-0" />
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

                {/* Contact Information & Employees */}
                <div className="bg-slate-900/60 backdrop-blur-xl rounded-xl border border-cyan-500/20 shadow-[0_0_15px_rgba(6,182,212,0.05)] overflow-hidden flex flex-col max-h-[600px]">
                  <div className="p-4 bg-cyan-500/10 border-b border-cyan-500/20 flex justify-between items-center sticky top-0 z-10 shrink-0">
                    <div className="flex items-center gap-2">
                      <Users className="w-5 h-5 text-cyan-400" />
                      <span className="font-bold text-white text-[15px]">Contacts & Team</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <button 
                        onClick={() => setIsEditContactModalOpen(true)}
                        className="text-cyan-400 text-[13px] font-bold flex items-center gap-1 hover:text-cyan-300 bg-cyan-500/10 px-3 py-1.5 rounded-md transition-colors"
                      >
                        <Edit2 className="w-3.5 h-3.5" /> Edit Main
                      </button>
                      <button 
                        onClick={() => setIsAddEmployeeModalOpen(true)}
                        className="w-8 h-8 rounded-md bg-cyan-500 hover:bg-cyan-600 flex items-center justify-center text-white transition-colors shadow-sm"
                        title="Add Team Member"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                  
                  <div className="p-5 overflow-y-auto custom-scrollbar flex-1 space-y-6">
                    {/* Primary Contact Info */}
                    <div className="space-y-3">
                      <h4 className="text-[11px] font-bold text-cyan-400 uppercase tracking-wider pl-1">Primary Contact</h4>
                      <div className="flex flex-col gap-2">
                        <div className="flex items-center gap-3 p-3 bg-slate-800/50 border border-slate-700/50 rounded-lg hover:border-cyan-500/30 transition-colors">
                          <div className="w-8 h-8 rounded-md bg-cyan-500/10 flex items-center justify-center shrink-0">
                            <Phone className="w-4 h-4 text-cyan-400" />
                          </div>
                          <span className="text-[14px] font-medium text-white">+1 973 979 7987</span>
                        </div>
                        <div className="flex items-center gap-3 p-3 bg-slate-800/50 border border-slate-700/50 rounded-lg hover:border-cyan-500/30 transition-colors">
                          <div className="w-8 h-8 rounded-md bg-cyan-500/10 flex items-center justify-center shrink-0">
                            <Mail className="w-4 h-4 text-cyan-400" />
                          </div>
                          <span className="text-[14px] font-medium text-slate-400">---</span>
                        </div>
                        <div className="flex items-center gap-3 p-3 bg-slate-800/50 border border-slate-700/50 rounded-lg hover:border-cyan-500/30 transition-colors">
                          <div className="w-8 h-8 rounded-md bg-cyan-500/10 flex items-center justify-center shrink-0">
                            <MapPin className="w-4 h-4 text-cyan-400" />
                          </div>
                          <span className="text-[14px] font-medium text-slate-400">---</span>
                        </div>
                      </div>
                    </div>

                    {/* Team Members */}
                    <div className="space-y-3 pt-2 border-t border-slate-800">
                      <h4 className="text-[11px] font-bold text-cyan-400 uppercase tracking-wider pl-1">Team Members ({employees.length})</h4>
                      <div className="space-y-3">
                        {employees.map((employee, index) => (
                          <div key={employee.id} className="bg-slate-800/50 border border-slate-700/50 rounded-lg p-4 relative group hover:border-cyan-500/30 transition-colors">
                            <div className="absolute top-3 right-3 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity bg-slate-900/80 p-1 rounded-md border border-slate-700">
                              <button 
                                onClick={() => {
                                  setEditingEmployee({
                                    ...employee,
                                    phoneCode: employee.phone.split(' ')[0] || '+1',
                                    phoneNumber: employee.phone.split(' ').slice(1).join(' ') || ''
                                  });
                                  setIsEditEmployeeModalOpen(true);
                                }}
                                className="p-1.5 text-slate-400 hover:text-cyan-400 hover:bg-slate-800 rounded transition-colors"
                                title="Edit Employee"
                              >
                                <Edit2 className="w-3.5 h-3.5" />
                              </button>
                              <button 
                                onClick={() => {
                                  setUpdatingPasswordEmployee(employee);
                                  setIsUpdatePasswordModalOpen(true);
                                }}
                                className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded transition-colors"
                                title="Update Password"
                              >
                                <Lock className="w-3.5 h-3.5" />
                              </button>
                              <button 
                                onClick={() => {
                                  setDeletingEmployee(employee);
                                  setIsDeleteEmployeeModalOpen(true);
                                }}
                                className="p-1.5 text-slate-400 hover:text-rose-400 hover:bg-slate-800 rounded transition-colors"
                                title="Delete Employee"
                              >
                                <Trash2 className="w-3.5 h-3.5" />
                              </button>
                            </div>
                            <div className="space-y-2.5">
                              <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center font-bold text-[14px] shrink-0 border border-cyan-500/30">
                                  {employee.firstName.charAt(0)}{employee.lastName.charAt(0)}
                                </div>
                                <div>
                                  <span className="font-bold text-white block text-[14px]">{employee.firstName} {employee.lastName}</span>
                                  <span className="text-cyan-400 text-[12px] font-medium">{employee.designation}</span>
                                </div>
                              </div>
                              <div className="pt-2 border-t border-slate-700/50 space-y-2">
                                <div className="flex items-center gap-2 text-[12px]">
                                  <Mail className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                                  <span className="text-slate-300 truncate" title={employee.email}>{employee.email}</span>
                                </div>
                                <div className="flex items-center gap-2 text-[12px]">
                                  <Phone className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                                  <span className="text-slate-300">{employee.phone}</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Website */}
                <div className="bg-slate-900/60 backdrop-blur-xl rounded-xl border border-emerald-500/20 shadow-[0_0_15px_rgba(16,185,129,0.05)] overflow-hidden">
                  <div className="p-4 bg-emerald-500/10 border-b border-emerald-500/20 flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <Globe className="w-5 h-5 text-emerald-400" />
                      <span className="font-bold text-white text-[15px]">Website</span>
                    </div>
                    <button 
                      onClick={() => setIsEditWebsiteModalOpen(true)}
                      className="text-emerald-400 text-[13px] font-bold flex items-center gap-1 hover:text-emerald-300 bg-emerald-500/10 px-3 py-1.5 rounded-md transition-colors"
                    >
                      <Edit2 className="w-3.5 h-3.5" /> Edit
                    </button>
                  </div>
                  <div className="p-5 space-y-3">
                    <div className="space-y-1">
                      <label className="text-[11px] font-bold text-emerald-400 uppercase tracking-wider pl-1">Main Website</label>
                      <div className="flex items-center gap-3 p-2.5 bg-slate-800/50 border border-slate-700/50 rounded-lg hover:border-emerald-500/30 transition-colors group cursor-pointer">
                        <div className="w-7 h-7 rounded-md bg-emerald-500/10 flex items-center justify-center shrink-0 group-hover:bg-emerald-500/20 transition-colors">
                          <Globe className="w-3.5 h-3.5 text-emerald-400" />
                        </div>
                        <span className="text-[13px] font-medium text-slate-400 group-hover:text-emerald-400 transition-colors truncate">www.clientwebsite.com</span>
                      </div>
                    </div>
                    
                    <div className="space-y-1">
                      <label className="text-[11px] font-bold text-emerald-400 uppercase tracking-wider pl-1">Gorilla Apps Website</label>
                      <div className="flex items-center gap-3 p-2.5 bg-slate-800/50 border border-slate-700/50 rounded-lg hover:border-emerald-500/30 transition-colors group cursor-pointer">
                        <div className="w-7 h-7 rounded-md bg-emerald-500/10 flex items-center justify-center shrink-0 group-hover:bg-emerald-500/20 transition-colors">
                          <Globe className="w-3.5 h-3.5 text-emerald-400" />
                        </div>
                        <span className="text-[13px] font-medium text-slate-400 group-hover:text-emerald-400 transition-colors truncate">client.pinkgorilla.apps</span>
                      </div>
                    </div>
                    
                    <div className="space-y-1">
                      <label className="text-[11px] font-bold text-emerald-400 uppercase tracking-wider pl-1">Staging Website</label>
                      <div className="flex items-center gap-3 p-2.5 bg-slate-800/50 border border-slate-700/50 rounded-lg hover:border-emerald-500/30 transition-colors group cursor-pointer">
                        <div className="w-7 h-7 rounded-md bg-emerald-500/10 flex items-center justify-center shrink-0 group-hover:bg-emerald-500/20 transition-colors">
                          <Globe className="w-3.5 h-3.5 text-emerald-400" />
                        </div>
                        <span className="text-[13px] font-medium text-slate-400 group-hover:text-emerald-400 transition-colors truncate">staging.clientwebsite.com</span>
                      </div>
                    </div>

                    <div className="mt-4 pt-3 border-t border-slate-700/50 space-y-2">
                      <label className="text-[11px] font-bold text-slate-400 uppercase tracking-wider pl-1">Gorilla Apps Credentials</label>
                      <div className="flex items-center gap-3 p-2.5 bg-slate-800/30 border border-slate-700/30 rounded-lg">
                        <div className="w-7 h-7 rounded-md bg-slate-700/50 flex items-center justify-center shrink-0">
                          <User className="w-3.5 h-3.5 text-slate-400" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <span className="block text-[11px] text-slate-500 mb-0.5">Username</span>
                          <span className="text-[13px] font-medium text-white truncate block">admin@client.com</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 p-2.5 bg-slate-800/30 border border-slate-700/30 rounded-lg relative group">
                        <div className="w-7 h-7 rounded-md bg-slate-700/50 flex items-center justify-center shrink-0">
                          <Lock className="w-3.5 h-3.5 text-slate-400" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <span className="block text-[11px] text-slate-500 mb-0.5">Password</span>
                          <span className="text-[13px] font-medium text-white tracking-widest block">••••••••••••</span>
                        </div>
                        <button className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 text-slate-500 hover:text-white bg-slate-700/50 hover:bg-slate-600 rounded opacity-0 group-hover:opacity-100 transition-all">
                          <Eye className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Business Discovery */}
                <div className="bg-slate-900/60 backdrop-blur-xl rounded-xl border border-orange-500/20 shadow-[0_0_15px_rgba(249,115,22,0.05)] overflow-hidden">
                  <div className="p-4 bg-orange-500/10 border-b border-orange-500/20 flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <Compass className="w-5 h-5 text-orange-400" />
                      <span className="font-bold text-white text-[15px]">Business Discovery</span>
                    </div>
                    <button onClick={() => setIsBusinessDiscoveryModalOpen(true)} className="text-orange-400 text-[13px] font-bold flex items-center gap-1 hover:text-orange-300 bg-orange-500/10 px-3 py-1.5 rounded-md transition-colors">
                      <Edit2 className="w-3.5 h-3.5" /> Edit
                    </button>
                  </div>
                  <div className="p-5">
                    <div className="bg-slate-800/50 border border-slate-700/50 rounded-lg p-4 text-center">
                      <p className="text-[13px] font-medium text-slate-400 mb-4">No business discovery links added yet.</p>
                      <button onClick={() => setIsBusinessDiscoveryModalOpen(true)} className="w-full py-2.5 bg-orange-500 hover:bg-orange-600 text-white rounded-md text-[13px] font-bold transition-colors flex items-center justify-center gap-2 shadow-sm">
                        <Plus className="w-4 h-4" /> Add Discovery Links
                      </button>
                    </div>
                  </div>
                </div>

                {/* Analytics Quick View */}
                <div className="bg-slate-900/60 backdrop-blur-xl rounded-xl border border-blue-500/20 shadow-[0_0_15px_rgba(59,130,246,0.05)] overflow-hidden">
                  <div className="p-4 bg-blue-500/10 border-b border-blue-500/20 flex items-center gap-2">
                    <svg className="w-5 h-5 text-blue-400" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M2 13h4v8H2v-8zM9 4h4v17H9V4zM16 9h4v12h-4V9z" />
                    </svg>
                    <span className="font-bold text-white text-[15px]">Analytics Quick View</span>
                  </div>
                  <div className="p-5 space-y-4">
                    {/* Main Website Visits */}
                    <div className="flex items-center justify-between p-3 bg-slate-800/50 border border-slate-700/50 rounded-lg">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-md bg-blue-500/10 flex items-center justify-center shrink-0">
                          <Globe className="w-4 h-4 text-blue-400" />
                        </div>
                        <span className="text-[13px] font-medium text-slate-300">Main Website Visits</span>
                      </div>
                      <span className="text-[16px] font-bold text-white">1,245</span>
                    </div>

                    {/* Gorilla Apps Visits */}
                    <div className="flex items-center justify-between p-3 bg-slate-800/50 border border-slate-700/50 rounded-lg">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-md bg-purple-500/10 flex items-center justify-center shrink-0">
                          <Briefcase className="w-4 h-4 text-purple-400" />
                        </div>
                        <span className="text-[13px] font-medium text-slate-300">Gorilla Apps Visits</span>
                      </div>
                      <span className="text-[16px] font-bold text-white">856</span>
                    </div>

                    {/* Gorilla Apps Users */}
                    <div className="border border-slate-700/50 rounded-lg overflow-hidden bg-slate-800/30">
                      <div 
                        className="flex items-center justify-between p-3 bg-slate-800/50 cursor-pointer hover:bg-slate-700/50 transition-colors"
                        onClick={() => setIsGorillaAppsExpanded(!isGorillaAppsExpanded)}
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-md bg-emerald-500/10 flex items-center justify-center shrink-0">
                            <Users className="w-4 h-4 text-emerald-400" />
                          </div>
                          <span className="text-[13px] font-medium text-slate-300">Gorilla Apps Users</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="text-[16px] font-bold text-white">3</span>
                          <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform ${isGorillaAppsExpanded ? 'rotate-180' : ''}`} />
                        </div>
                      </div>

                      {/* Expanded Users List */}
                      {isGorillaAppsExpanded && (
                        <div className="p-3 border-t border-slate-700/50 space-y-2 bg-slate-900/30">
                          <div className="flex items-center justify-between text-[12px] p-2 rounded hover:bg-slate-800/50 transition-colors border border-slate-700/30">
                            <div className="flex items-center gap-2">
                              <div className="w-6 h-6 rounded-full bg-slate-700 flex items-center justify-center text-[10px] font-bold text-white">JS</div>
                              <span className="font-medium text-slate-300">John Smith</span>
                            </div>
                            <div className="flex items-center gap-4 text-slate-400">
                              <span><span className="font-bold text-slate-300">12</span> logins</span>
                              <span><span className="font-bold text-slate-300">4.5</span> hrs</span>
                            </div>
                          </div>
                          <div className="flex items-center justify-between text-[12px] p-2 rounded hover:bg-slate-800/50 transition-colors border border-slate-700/30">
                            <div className="flex items-center gap-2">
                              <div className="w-6 h-6 rounded-full bg-slate-700 flex items-center justify-center text-[10px] font-bold text-white">AD</div>
                              <span className="font-medium text-slate-300">Alice Doe</span>
                            </div>
                            <div className="flex items-center gap-4 text-slate-400">
                              <span><span className="font-bold text-slate-300">8</span> logins</span>
                              <span><span className="font-bold text-slate-300">2.1</span> hrs</span>
                            </div>
                          </div>
                          <div className="flex items-center justify-between text-[12px] p-2 rounded hover:bg-slate-800/50 transition-colors border border-slate-700/30">
                            <div className="flex items-center gap-2">
                              <div className="w-6 h-6 rounded-full bg-slate-700 flex items-center justify-center text-[10px] font-bold text-white">MJ</div>
                              <span className="font-medium text-slate-300">Mike Johnson</span>
                            </div>
                            <div className="flex items-center gap-4 text-slate-400">
                              <span><span className="font-bold text-slate-300">2</span> logins</span>
                              <span><span className="font-bold text-slate-300">0.5</span> hrs</span>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Billing Information */}
                <div className="bg-slate-900/60 backdrop-blur-xl rounded-xl border border-pink-500/20 shadow-[0_0_15px_rgba(236,72,153,0.05)] overflow-hidden">
                  <div className="p-4 bg-pink-500/10 border-b border-pink-500/20 flex items-center gap-2">
                    <svg className="w-5 h-5 text-pink-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                    </svg>
                    <span className="font-bold text-white text-[15px]">Billing Information</span>
                  </div>
                  <div className="p-5 space-y-4">
                    <div className="bg-slate-800/50 border border-pink-500/30 rounded-lg p-4">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 rounded-full bg-pink-500/20 flex items-center justify-center">
                          <svg className="w-5 h-5 text-pink-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <div>
                          <span className="block text-[12px] font-medium text-slate-400">Current Plan</span>
                          <span className="text-[15px] font-bold text-pink-400">No Plan Selected</span>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <button 
                          onClick={() => {
                            setSelectedPlanTab('plans');
                            setIsChoosePlanModalOpen(true);
                          }}
                          className="flex-1 py-2 bg-pink-500 hover:bg-pink-600 text-white rounded-md text-[13px] font-bold transition-colors shadow-sm"
                        >
                          Choose Plan
                        </button>
                        <button 
                          onClick={() => setLocation('/contracts')}
                          className="flex-1 py-2 bg-slate-800 hover:bg-slate-700 border border-slate-600 text-white rounded-md text-[13px] font-bold transition-colors"
                        >
                          Agreement
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Background */}
                <div className="bg-slate-900/60 backdrop-blur-xl rounded-xl border border-violet-500/20 shadow-[0_0_15px_rgba(139,92,246,0.05)] overflow-hidden">
                  <div className="p-4 bg-violet-500/10 border-b border-violet-500/20 flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <ImageIcon className="w-5 h-5 text-violet-400" />
                      <span className="font-bold text-white text-[15px]">Background</span>
                    </div>
                    <button 
                      onClick={() => setIsEditBackgroundModalOpen(true)}
                      className="text-violet-400 text-[13px] font-bold flex items-center gap-1 hover:text-violet-300 bg-violet-500/10 px-3 py-1.5 rounded-md transition-colors"
                    >
                      <Edit2 className="w-3.5 h-3.5" /> Edit
                    </button>
                  </div>
                  <div className="p-5">
                    <div className="bg-slate-800/50 border border-slate-700/50 rounded-lg p-3">
                      <a href="https://www.yelp.com/biz/luciene-santanna-takagi-psyd-newark?osq=Psychologists" target="_blank" rel="noopener noreferrer" className="text-[13px] font-medium text-violet-400 hover:text-violet-300 hover:underline break-all block">
                        https://www.yelp.com/biz/luciene-santanna-takagi-psyd-newark?osq=Psychologists
                      </a>
                    </div>
                  </div>
                </div>

                {/* General */}
                <div className="bg-slate-900/60 backdrop-blur-xl rounded-xl border border-teal-500/20 shadow-[0_0_15px_rgba(20,184,166,0.05)] overflow-hidden">
                  <div className="p-4 bg-teal-500/10 border-b border-teal-500/20 flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <Info className="w-5 h-5 text-teal-400" />
                      <span className="font-bold text-white text-[15px]">General Info</span>
                    </div>
                    <button 
                      onClick={() => setIsEditGeneralInfoModalOpen(true)}
                      className="text-teal-400 text-[13px] font-bold flex items-center gap-1 hover:text-teal-300 bg-teal-500/10 px-3 py-1.5 rounded-md transition-colors"
                    >
                      <Edit2 className="w-3.5 h-3.5" /> Edit
                    </button>
                  </div>
                  <div className="p-5 space-y-3">
                    <div className="flex items-center gap-3 p-2.5 bg-slate-800/50 border border-slate-700/50 rounded-lg hover:border-teal-500/30 transition-colors">
                      <div className="w-7 h-7 rounded-md bg-teal-500/10 flex items-center justify-center shrink-0">
                        <Globe className="w-3.5 h-3.5 text-teal-400" />
                      </div>
                      <span className="text-[13px] text-slate-400 w-24">Timezone:</span>
                      <span className="text-[13px] font-bold text-white">America/Denver</span>
                    </div>
                    <div className="flex items-center gap-3 p-2.5 bg-slate-800/50 border border-slate-700/50 rounded-lg hover:border-teal-500/30 transition-colors">
                      <div className="w-7 h-7 rounded-md bg-teal-500/10 flex items-center justify-center shrink-0">
                        <span className="text-teal-400 text-[14px] font-bold">$</span>
                      </div>
                      <span className="text-[13px] text-slate-400 w-24">Currency:</span>
                      <span className="text-[13px] font-bold text-white">USD</span>
                    </div>
                    <div className="flex items-center gap-3 p-2.5 bg-slate-800/50 border border-slate-700/50 rounded-lg hover:border-teal-500/30 transition-colors">
                      <div className="w-7 h-7 rounded-md bg-teal-500/10 flex items-center justify-center shrink-0">
                        <span className="text-teal-400 text-[12px] font-bold">A<span className="text-[9px]">文</span></span>
                      </div>
                      <span className="text-[13px] text-slate-400 w-24">Language:</span>
                      <span className="text-[13px] font-bold text-white">English - US</span>
                    </div>
                    <div className="flex items-center gap-3 p-2.5 bg-slate-800/50 border border-slate-700/50 rounded-lg hover:border-teal-500/30 transition-colors">
                      <div className="w-7 h-7 rounded-md bg-teal-500/10 flex items-center justify-center shrink-0">
                        <Building2 className="w-3.5 h-3.5 text-teal-400" />
                      </div>
                      <span className="text-[13px] text-slate-400 w-24">Industry:</span>
                      <span className="text-[13px] font-bold text-white">Retail Trade</span>
                    </div>
                    <div className="flex items-center gap-3 p-2.5 bg-slate-800/50 border border-slate-700/50 rounded-lg hover:border-teal-500/30 transition-colors">
                      <div className="w-7 h-7 rounded-md bg-teal-500/10 flex items-center justify-center shrink-0">
                        <svg className="w-3.5 h-3.5 text-teal-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <circle cx="12" cy="12" r="10"/>
                          <path d="M12 6v6l4 2"/>
                        </svg>
                      </div>
                      <span className="text-[13px] text-slate-400 w-24">Year in Biz:</span>
                      <span className="text-[13px] font-bold text-white">1 yr</span>
                    </div>
                    <div className="flex items-center gap-3 p-2.5 bg-slate-800/50 border border-slate-700/50 rounded-lg hover:border-teal-500/30 transition-colors">
                      <div className="w-7 h-7 rounded-md bg-teal-500/10 flex items-center justify-center shrink-0">
                        <Users className="w-3.5 h-3.5 text-teal-400" />
                      </div>
                      <span className="text-[13px] text-slate-400 w-24">Employees:</span>
                      <span className="text-[13px] font-bold text-white">1-3</span>
                    </div>
                  </div>
                </div>


                {/* Compliance Essentials */}
                <div className="bg-slate-900/60 backdrop-blur-xl rounded-xl border border-yellow-500/20 shadow-[0_0_15px_rgba(234,179,8,0.05)] overflow-hidden">
                  <div className="p-4 bg-yellow-500/10 border-b border-yellow-500/20 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-yellow-400" />
                    <span className="font-bold text-white text-[15px]">Compliance Essentials</span>
                  </div>
                  <div className="p-5 space-y-2">
                    {[
                      "Privacy Policy",
                      "Terms of Service (Terms & Conditions)",
                      "Cookies Policy / Tracking Policy",
                      "Accessibility Statement (ADA Compliance)",
                      "Disclaimer(s) (Real Estate, Fair Housing, No Warranty, etc. as applicable)",
                      "SSL Certificate (HTTPS Security) - not a page, but an essential requirement",
                      "Powered by Pink Gorilla Footer"
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-3 cursor-pointer group p-2.5 rounded-lg hover:bg-slate-800/50 transition-colors" onClick={() => toggleComplianceItem(i)}>
                        <div className={`w-5 h-5 rounded border-2 shrink-0 flex items-center justify-center transition-colors ${checkedComplianceItems[i] ? 'bg-yellow-500 border-yellow-500 shadow-[0_0_8px_rgba(234,179,8,0.4)]' : 'border-slate-600 bg-slate-800/50 group-hover:border-yellow-500/50'}`}>
                          {checkedComplianceItems[i] && <CheckCircle2 className="w-3.5 h-3.5 text-slate-900 stroke-[3]" />}
                        </div>
                        <span className={`text-[13px] leading-tight transition-colors select-none mt-0.5 ${checkedComplianceItems[i] ? 'text-white font-semibold' : 'text-slate-400 group-hover:text-slate-300'}`}>
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

              {/* Middle & Right Content */}
              <div className="flex-1 flex flex-col gap-6 min-w-0">
                
                {/* Communications Section */}
                <div className="bg-slate-900/60 backdrop-blur-xl rounded-xl border border-indigo-500/20 shadow-[0_0_15px_rgba(99,102,241,0.05)] overflow-hidden">
                  <div className="p-5 border-b border-indigo-500/20 bg-indigo-500/5 flex justify-between items-center">
                    <h2 className="text-[18px] font-bold text-white flex items-center gap-2">
                      <MessageSquare className="w-5 h-5 text-indigo-400" />
                      Communications
                    </h2>
                    <div className="flex items-center gap-2 bg-slate-800/80 p-1 rounded-lg border border-slate-700">
                      <button 
                        onClick={() => setActiveTab('email')}
                        className={`flex items-center gap-1.5 px-4 py-2 rounded-md text-[13px] font-bold transition-all ${activeTab === 'email' ? 'bg-indigo-500 text-white shadow-md' : 'text-slate-400 hover:text-white hover:bg-slate-700/50'}`}>
                        <Mail className="w-4 h-4" /> Email
                      </button>
                      <button 
                        onClick={() => setActiveTab('sms')}
                        className={`flex items-center gap-1.5 px-4 py-2 rounded-md text-[13px] font-bold transition-all ${activeTab === 'sms' ? 'bg-indigo-500 text-white shadow-md' : 'text-slate-400 hover:text-white hover:bg-slate-700/50'}`}>
                        <MessageSquare className="w-4 h-4" /> SMS
                      </button>
                      <button 
                        onClick={() => setActiveTab('call')}
                        className={`flex items-center gap-1.5 px-4 py-2 rounded-md text-[13px] font-bold transition-all ${activeTab === 'call' ? 'bg-indigo-500 text-white shadow-md' : 'text-slate-400 hover:text-white hover:bg-slate-700/50'}`}>
                        <Phone className="w-4 h-4" /> Call
                      </button>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    {activeTab === 'email' && (
                      <div className="border border-indigo-500/20 rounded-xl bg-slate-800/40 shadow-inner overflow-hidden">
                        <div className="p-6 space-y-6">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                              <label className="block text-[12px] font-bold text-indigo-300 uppercase tracking-wider mb-2">To <span className="text-rose-500">*</span></label>
                              <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                  <User className="h-4 w-4 text-slate-500" />
                                </div>
                                <input type="text" defaultValue={currentClient.email !== '---' ? currentClient.email : ''} placeholder="recipient@example.com" className="w-full pl-10 pr-4 py-3 bg-slate-900/80 border border-slate-700 rounded-lg text-[14px] font-medium text-white focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all shadow-inner" />
                              </div>
                              <p className="text-[11px] text-slate-400 mt-1.5 font-medium flex items-center gap-1">
                                <Info className="w-3 h-3" /> Separate multiple with commas
                              </p>
                            </div>
                            
                            <div>
                              <label className="block text-[12px] font-bold text-indigo-300 uppercase tracking-wider mb-2">From <span className="text-rose-500">*</span></label>
                              <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                  <Building2 className="h-4 w-4 text-slate-500" />
                                </div>
                                <select className="w-full pl-10 pr-4 py-3 bg-slate-900/80 border border-slate-700 rounded-lg text-[14px] font-medium text-white focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all shadow-inner appearance-none cursor-pointer">
                                  <option>Neeraj Kumar (neeraj@pinkgorillasoftware.com)</option>
                                </select>
                                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                                  <ChevronDown className="h-4 w-4 text-slate-500" />
                                </div>
                              </div>
                            </div>
                          </div>
                          
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="md:col-span-2">
                              <label className="block text-[12px] font-bold text-indigo-300 uppercase tracking-wider mb-2">Subject <span className="text-rose-500">*</span></label>
                              <div className="relative">
                                <input type="text" placeholder="What is this email about?" className="w-full px-4 py-3 bg-slate-900/80 border border-slate-700 rounded-lg text-[14px] font-medium text-white focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all shadow-inner" />
                              </div>
                            </div>
                            
                            <div>
                              <label className="block text-[12px] font-bold text-indigo-300 uppercase tracking-wider mb-2">Use Template</label>
                              <div className="relative">
                                <select className="w-full px-4 py-3 bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 rounded-lg text-[14px] font-bold focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all shadow-inner appearance-none cursor-pointer">
                                  <option>Select a Template...</option>
                                  <option>Welcome Email</option>
                                  <option>Follow Up</option>
                                  <option>Invoice Reminder</option>
                                </select>
                                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                                  <ChevronDown className="h-4 w-4 text-indigo-400" />
                                </div>
                              </div>
                            </div>
                          </div>
                          
                          <div>
                            <label className="block text-[12px] font-bold text-indigo-300 uppercase tracking-wider mb-2 flex items-center justify-between">
                              <span>Message <span className="text-rose-500">*</span></span>
                              <span className="text-[11px] text-slate-500 font-normal normal-case">Markdown supported</span>
                            </label>
                            <div className="border border-slate-700 rounded-xl bg-slate-900/80 overflow-hidden flex flex-col shadow-inner focus-within:border-indigo-500 focus-within:ring-1 focus-within:ring-indigo-500 transition-all">
                              <div className="flex items-center gap-1 border-b border-slate-700/50 p-2 bg-slate-800/50">
                                <button className="w-8 h-8 flex items-center justify-center hover:bg-slate-700 text-slate-400 hover:text-white rounded-lg transition-colors"><span className="font-bold text-[14px]">B</span></button>
                                <button className="w-8 h-8 flex items-center justify-center hover:bg-slate-700 text-slate-400 hover:text-white rounded-lg transition-colors"><span className="italic text-[14px]">I</span></button>
                                <button className="w-8 h-8 flex items-center justify-center hover:bg-slate-700 text-slate-400 hover:text-white rounded-lg transition-colors"><span className="underline text-[14px]">U</span></button>
                                <div className="w-[1px] h-5 bg-slate-700 mx-1"></div>
                                <button className="w-8 h-8 flex items-center justify-center hover:bg-slate-700 text-slate-400 hover:text-white rounded-lg transition-colors"><LinkIcon className="w-4 h-4" /></button>
                                <button className="w-8 h-8 flex items-center justify-center hover:bg-slate-700 text-slate-400 hover:text-white rounded-lg transition-colors"><ImageIcon className="w-4 h-4" /></button>
                              </div>
                              <textarea placeholder="Type your message here..." className="w-full p-4 min-h-[200px] resize-none focus:outline-none text-[14px] text-white bg-transparent leading-relaxed"></textarea>
                            </div>
                          </div>
                        </div>
                        
                        <div className="flex justify-between items-center p-4 bg-slate-900/50 border-t border-slate-700/50">
                          <button className="px-4 py-2.5 border border-slate-600 bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 rounded-lg text-[13px] font-bold flex items-center gap-2 transition-all">
                            <Plus className="w-4 h-4" /> Attach Files
                          </button>
                          <button className="px-8 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg text-[14px] font-bold transition-all shadow-[0_0_20px_rgba(79,70,229,0.4)] hover:shadow-[0_0_25px_rgba(79,70,229,0.6)] flex items-center gap-2 group">
                            <Mail className="w-4 h-4 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" /> Send Email
                          </button>
                        </div>
                      </div>
                    )}
                    
                    {activeTab === 'sms' && (
                      <div className="border border-indigo-500/20 rounded-xl bg-slate-800/40 shadow-inner overflow-hidden">
                        <div className="p-6 space-y-6">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                              <label className="block text-[12px] font-bold text-indigo-300 uppercase tracking-wider mb-2">To (Phone) <span className="text-rose-500">*</span></label>
                              <div className="relative group/sms">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none z-10">
                                  <Phone className="h-4 w-4 text-slate-500" />
                                </div>
                                <input type="text" defaultValue={currentClient.phone !== '---' ? currentClient.phone : ''} placeholder="(555) 123-4567" className="w-full pl-10 pr-10 py-3 bg-slate-900/80 border border-slate-700 rounded-lg text-[14px] font-medium text-white focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all shadow-inner relative z-10" />
                                <div className="absolute inset-y-0 right-0 flex items-center pr-3 z-10">
                                  <ChevronDown className="w-4 h-4 text-slate-500 cursor-pointer" />
                                </div>
                                
                                {/* SMS Dropdown Menu on hover */}
                                <div className="absolute top-full left-0 right-0 mt-1 bg-slate-800 border border-slate-600 rounded-xl shadow-2xl opacity-0 invisible group-hover/sms:opacity-100 group-hover/sms:visible transition-all z-50 overflow-hidden transform origin-top scale-95 group-hover/sms:scale-100 duration-200">
                                  <div className="p-2 text-[11px] font-bold text-slate-400 uppercase tracking-wider bg-slate-900/50 border-b border-slate-700 text-left">CRM Contacts</div>
                                  <div className="max-h-[200px] overflow-y-auto custom-scrollbar">
                                    <button className="w-full text-left px-4 py-2.5 hover:bg-slate-700 flex flex-col transition-colors border-b border-slate-700/50 group/item">
                                      <div className="flex justify-between items-center w-full">
                                        <span className="text-[13px] font-bold text-white group-hover/item:text-indigo-400 transition-colors">Main Office</span>
                                        <span className="text-indigo-400/80 font-mono text-[12px]">{currentClient.phone}</span>
                                      </div>
                                    </button>
                                    {employees.map(emp => (
                                      <button key={emp.id} className="w-full text-left px-4 py-2.5 hover:bg-slate-700 flex flex-col transition-colors border-b border-slate-700/50 last:border-0 group/item">
                                        <div className="flex justify-between items-center w-full">
                                          <span className="text-[13px] font-bold text-white group-hover/item:text-indigo-400 transition-colors">{emp.firstName} {emp.lastName}</span>
                                          <span className="text-indigo-400/80 font-mono text-[12px]">{emp.phone}</span>
                                        </div>
                                      </button>
                                    ))}
                                  </div>
                                </div>
                              </div>
                            </div>
                            
                            <div>
                              <label className="block text-[12px] font-bold text-indigo-300 uppercase tracking-wider mb-2">From <span className="text-rose-500">*</span></label>
                              <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                  <Building2 className="h-4 w-4 text-slate-500" />
                                </div>
                                <select className="w-full pl-10 pr-4 py-3 bg-slate-900/80 border border-slate-700 rounded-lg text-[14px] font-medium text-white focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all shadow-inner appearance-none cursor-pointer">
                                  <option>Company Phone (+1 800 123 4567)</option>
                                </select>
                                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                                  <ChevronDown className="h-4 w-4 text-slate-500" />
                                </div>
                              </div>
                            </div>
                          </div>
                          
                          <div>
                            <label className="block text-[12px] font-bold text-indigo-300 uppercase tracking-wider mb-2 flex justify-between items-center">
                              <span>Message <span className="text-rose-500">*</span></span>
                              <div className="relative w-48">
                                <select className="w-full pl-3 pr-8 py-1.5 bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 rounded text-[11px] font-bold focus:outline-none focus:border-indigo-500 transition-all appearance-none cursor-pointer">
                                  <option>Use SMS Template...</option>
                                  <option>Appointment Reminder</option>
                                  <option>Quick Follow Up</option>
                                </select>
                                <div className="absolute inset-y-0 right-0 pr-2 flex items-center pointer-events-none">
                                  <ChevronDown className="h-3 w-3 text-indigo-400" />
                                </div>
                              </div>
                            </label>
                            
                            <div className="relative max-w-sm mx-auto mt-4">
                              {/* iPhone mock frame */}
                              <div className="relative border-[6px] border-slate-800 bg-slate-900 rounded-[2.5rem] shadow-xl overflow-hidden h-[450px] flex flex-col">
                                {/* iPhone Notch */}
                                <div className="absolute top-0 inset-x-0 h-6 bg-slate-800 rounded-b-xl mx-auto w-32 z-20"></div>
                                
                                {/* SMS Header */}
                                <div className="bg-slate-800/80 backdrop-blur-md pt-8 pb-3 px-4 text-center border-b border-slate-700 relative z-10 shrink-0 flex flex-col items-center">
                                  <div className="w-10 h-10 bg-slate-700 rounded-full flex items-center justify-center mb-1">
                                    <User className="w-5 h-5 text-slate-400" />
                                  </div>
                                  <span className="text-white text-[13px] font-semibold">{currentClient.name}</span>
                                  <span className="text-slate-400 text-[10px]">{currentClient.phone !== '---' ? currentClient.phone : 'No phone number'}</span>
                                </div>
                                
                                {/* SMS Body */}
                                <div className="p-4 flex-1 bg-[#0f172a] flex flex-col overflow-y-auto custom-scrollbar relative">
                                  <div className="flex flex-col gap-3 mt-auto mb-4 pt-4">
                                    <div className="flex flex-col items-start max-w-[85%]">
                                      <span className="text-[9px] text-slate-500 mb-0.5 ml-2">Mar 06, 10:00 AM</span>
                                      <div className="bg-slate-800 text-slate-300 p-2.5 rounded-2xl rounded-tl-sm text-[13px] shadow-sm border border-slate-700/50">
                                        Hi there! We wanted to let you know about our new features. Are you available for a quick chat?
                                      </div>
                                    </div>
                                    <div className="flex flex-col items-end max-w-[85%] self-end">
                                      <span className="text-[9px] text-slate-500 mb-0.5 mr-2">Mar 06, 10:15 AM</span>
                                      <div className="bg-indigo-600 text-white p-2.5 rounded-2xl rounded-tr-sm text-[13px] shadow-sm">
                                        Yes, I'm interested. Can we schedule a call for tomorrow?
                                      </div>
                                    </div>
                                    <div className="flex flex-col items-start max-w-[85%]">
                                      <span className="text-[9px] text-slate-500 mb-0.5 ml-2">Mar 06, 10:20 AM</span>
                                      <div className="bg-slate-800 text-slate-300 p-2.5 rounded-2xl rounded-tl-sm text-[13px] shadow-sm border border-slate-700/50">
                                        Perfect! I'll send over a calendar invite shortly.
                                      </div>
                                    </div>
                                  </div>
                                  
                                  <div className="relative group shrink-0 pb-2">
                                    <textarea 
                                      placeholder="Type your SMS message here..." 
                                      className="w-full bg-[#1e40af] text-white p-3 pr-10 rounded-2xl rounded-br-sm text-[14px] min-h-[80px] resize-none focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-sm leading-snug"
                                    ></textarea>
                                    <span className="absolute bottom-4 right-3 text-[10px] text-blue-200/70 font-medium">0/160</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="flex justify-end items-center p-4 bg-slate-900/50 border-t border-slate-700/50">
                          <button className="px-8 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg text-[14px] font-bold transition-all shadow-[0_0_20px_rgba(79,70,229,0.4)] hover:shadow-[0_0_25px_rgba(79,70,229,0.6)] flex items-center gap-2 group">
                            <MessageSquare className="w-4 h-4 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" /> Send SMS
                          </button>
                        </div>
                      </div>
                    )}

                    {activeTab === 'call' && (
                      <div className="border border-emerald-500/20 rounded-xl bg-slate-800/40 shadow-inner overflow-hidden">
                        <div className="p-8">
                          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                            
                            {/* Left Side - Dialer UI */}
                            <div className="flex flex-col items-center justify-center bg-slate-900/60 rounded-2xl border border-slate-700/50 p-8 shadow-inner relative overflow-hidden">
                              {/* Background glowing orb */}
                              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-emerald-500/10 blur-[50px] rounded-full pointer-events-none"></div>
                              
                              <div className="text-center mb-8 relative z-10">
                                <div className="w-16 h-16 bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-3 border border-slate-700">
                                  <User className="w-8 h-8 text-slate-400" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-1">{currentClient.name}</h3>
                                
                                {/* Editable Phone Input with Quick Select */}
                                <div className="relative w-full max-w-[300px] mx-auto mt-3 group/dialer">
                                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none z-10">
                                    <Phone className="w-4 h-4 text-emerald-400" />
                                  </div>
                                  <input 
                                    type="text" 
                                    defaultValue={currentClient.phone !== '---' ? currentClient.phone : ''}
                                    placeholder="Enter phone number..."
                                    className="w-full pl-10 pr-10 py-2.5 bg-slate-900/80 border border-emerald-500/30 rounded-lg text-[16px] font-mono text-emerald-400 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all text-center shadow-inner relative z-10"
                                  />
                                  <div className="absolute inset-y-0 right-0 flex items-center pr-2 z-10">
                                    <div className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded cursor-pointer transition-colors">
                                      <ChevronDown className="w-4 h-4" />
                                    </div>
                                  </div>
                                  
                                  {/* Dropdown Menu on hover */}
                                  <div className="absolute top-full left-0 right-0 mt-2 bg-slate-800 border border-slate-600 rounded-xl shadow-2xl opacity-0 invisible group-hover/dialer:opacity-100 group-hover/dialer:visible transition-all z-50 overflow-hidden transform origin-top scale-95 group-hover/dialer:scale-100 duration-200 text-left">
                                    <div className="p-2 text-[11px] font-bold text-slate-400 uppercase tracking-wider bg-slate-900/50 border-b border-slate-700">CRM Contacts</div>
                                    
                                    <div className="max-h-[200px] overflow-y-auto custom-scrollbar">
                                      <button className="w-full text-left px-4 py-3 hover:bg-slate-700 flex flex-col transition-colors border-b border-slate-700/50 group/item">
                                        <div className="flex justify-between items-center w-full mb-1">
                                          <span className="text-[13px] font-bold text-white group-hover/item:text-emerald-400 transition-colors">Main Office</span>
                                          <span className="text-[10px] font-bold px-2 py-0.5 bg-slate-900 rounded text-slate-400">Primary</span>
                                        </div>
                                        <span className="text-emerald-400/80 font-mono text-[13px]">{currentClient.phone}</span>
                                      </button>
                                      
                                      {employees.map(emp => (
                                        <button key={emp.id} className="w-full text-left px-4 py-3 hover:bg-slate-700 flex flex-col transition-colors border-b border-slate-700/50 last:border-0 group/item">
                                          <div className="flex justify-between items-center w-full mb-1">
                                            <span className="text-[13px] font-bold text-white group-hover/item:text-emerald-400 transition-colors">{emp.firstName} {emp.lastName}</span>
                                            <span className="text-[10px] font-bold px-2 py-0.5 bg-slate-900 rounded text-slate-400 truncate max-w-[80px]">{emp.designation}</span>
                                          </div>
                                          <span className="text-emerald-400/80 font-mono text-[13px]">{emp.phone}</span>
                                        </button>
                                      ))}
                                    </div>
                                  </div>
                                </div>
                              </div>
                              
                              <button className="relative group w-24 h-24 rounded-full flex items-center justify-center transition-all z-10 focus:outline-none">
                                {/* Pulse rings */}
                                <div className="absolute inset-0 rounded-full bg-emerald-500/30 animate-ping opacity-75"></div>
                                <div className="absolute inset-2 rounded-full bg-emerald-500/40 animate-pulse"></div>
                                {/* Main Button */}
                                <div className="absolute inset-0 bg-emerald-500 rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(16,185,129,0.5)] group-hover:scale-105 group-active:scale-95 transition-transform border-4 border-slate-900">
                                  <Phone className="w-10 h-10 fill-white text-white" />
                                </div>
                              </button>
                              
                              <p className="mt-6 text-[13px] font-bold text-slate-400 uppercase tracking-widest relative z-10">Click to Call via Browser</p>
                              
                              <div className="mt-6 w-full">
                                <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-2 text-center">Calling From</label>
                                <select className="w-full text-center px-4 py-2.5 bg-slate-800/80 border border-slate-700 rounded-lg text-[13px] font-medium text-white focus:outline-none focus:border-emerald-500 transition-all appearance-none cursor-pointer">
                                  <option>Company Phone (+1 800 123 4567)</option>
                                  <option>Personal Cell (+1 555 987 6543)</option>
                                </select>
                              </div>
                            </div>
                            
                            {/* Right Side - Call Log */}
                            <div className="flex flex-col">
                              <h3 className="text-[16px] font-bold text-emerald-400 mb-4 flex items-center gap-2">
                                <FileText className="w-5 h-5" />
                                Log Call Details
                              </h3>
                              
                              <div className="flex-1 flex flex-col bg-slate-900/60 rounded-2xl border border-slate-700/50 p-5 shadow-inner">
                                <div className="mb-4">
                                  <label className="block text-[12px] font-bold text-slate-300 uppercase tracking-wider mb-2">Call Outcome <span className="text-rose-500">*</span></label>
                                  <div className="grid grid-cols-2 gap-2">
                                    <label className="cursor-pointer">
                                      <input type="radio" name="outcome" className="peer sr-only" defaultChecked />
                                      <div className="px-3 py-2 bg-slate-800 border border-slate-700 rounded-lg text-center text-[13px] font-medium text-slate-300 peer-checked:bg-emerald-500/20 peer-checked:border-emerald-500/50 peer-checked:text-emerald-400 transition-all hover:bg-slate-700">
                                        Connected
                                      </div>
                                    </label>
                                    <label className="cursor-pointer">
                                      <input type="radio" name="outcome" className="peer sr-only" />
                                      <div className="px-3 py-2 bg-slate-800 border border-slate-700 rounded-lg text-center text-[13px] font-medium text-slate-300 peer-checked:bg-amber-500/20 peer-checked:border-amber-500/50 peer-checked:text-amber-400 transition-all hover:bg-slate-700">
                                        Left Voicemail
                                      </div>
                                    </label>
                                    <label className="cursor-pointer">
                                      <input type="radio" name="outcome" className="peer sr-only" />
                                      <div className="px-3 py-2 bg-slate-800 border border-slate-700 rounded-lg text-center text-[13px] font-medium text-slate-300 peer-checked:bg-rose-500/20 peer-checked:border-rose-500/50 peer-checked:text-rose-400 transition-all hover:bg-slate-700">
                                        No Answer
                                      </div>
                                    </label>
                                    <label className="cursor-pointer">
                                      <input type="radio" name="outcome" className="peer sr-only" />
                                      <div className="px-3 py-2 bg-slate-800 border border-slate-700 rounded-lg text-center text-[13px] font-medium text-slate-300 peer-checked:bg-slate-700 peer-checked:border-slate-500 peer-checked:text-white transition-all hover:bg-slate-700">
                                        Wrong Number
                                      </div>
                                    </label>
                                  </div>
                                </div>
                                
                                <div className="flex-1 flex flex-col min-h-[150px]">
                                  <label className="block text-[12px] font-bold text-slate-300 uppercase tracking-wider mb-2">Notes</label>
                                  <textarea 
                                    placeholder="What was discussed on the call? Any action items?" 
                                    className="w-full flex-1 px-4 py-3 bg-slate-800/80 border border-slate-700 rounded-lg text-[14px] text-white focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all shadow-inner resize-none"
                                  ></textarea>
                                </div>
                                
                                <button className="mt-4 w-full py-3 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg text-[14px] font-bold transition-all shadow-[0_0_15px_rgba(16,185,129,0.3)] hover:shadow-[0_0_20px_rgba(16,185,129,0.5)] flex items-center justify-center gap-2">
                                  <CheckCircle2 className="w-4 h-4" /> Save Call Log
                                </button>
                              </div>
                            </div>
                            
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Notes Section */}
                <div className="bg-slate-900/60 backdrop-blur-xl rounded-xl border border-amber-500/20 shadow-[0_0_15px_rgba(245,158,11,0.05)] overflow-hidden">
                  <div className="p-4 bg-amber-500/10 border-b border-amber-500/20 flex justify-between items-center">
                    <h2 className="text-[16px] font-bold text-white flex items-center gap-2">
                      <FileText className="w-5 h-5 text-amber-400" />
                      Notes
                    </h2>
                    <button 
                      onClick={() => setIsAddNoteModalOpen(true)}
                      className="flex items-center gap-2 px-4 py-2 bg-amber-500 hover:bg-amber-600 text-white rounded-md text-[13px] font-bold transition-all shadow-[0_0_10px_rgba(245,158,11,0.3)]"
                    >
                      <Plus className="w-4 h-4" /> Add Note
                    </button>
                  </div>
                  <div className="p-6 bg-slate-800/20 grid grid-cols-1 md:grid-cols-2 gap-5 max-h-[500px] overflow-y-auto custom-scrollbar">
                    {notes.map((note, index) => (
                      <div key={note.id} className={`bg-gradient-to-br from-[#fef08a] to-[#fde047] rounded-sm p-5 relative group shadow-[2px_4px_10px_rgba(0,0,0,0.15)] hover:shadow-[4px_8px_15px_rgba(0,0,0,0.2)] transition-all duration-300 transform hover:-translate-y-1 ${index % 2 === 0 ? 'rotate-[-1deg] hover:rotate-0' : 'rotate-[1deg] hover:rotate-0'}`}>
                        {/* Tape effect */}
                        <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 w-12 h-5 bg-white/40 shadow-sm backdrop-blur-sm rotate-[-2deg]"></div>
                        
                        <div className="absolute top-3 right-3 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity bg-white/80 p-1.5 rounded shadow-sm border border-yellow-200 z-10">
                          <button 
                            onClick={() => {
                              setEmailForm({ 
                                to: '', 
                                subject: `Pink Gorilla - ${note.title} Update / Report (${note.date})`, 
                                message: note.description 
                              });
                              setSendingEmailNote(note);
                              setIsSendEmailNoteModalOpen(true);
                            }}
                            className="p-1 text-slate-500 hover:text-blue-600 hover:bg-blue-50 rounded transition-colors"
                            title="Send as Email"
                          >
                            <Mail className="w-3.5 h-3.5" />
                          </button>
                          <button 
                            onClick={() => {
                              setEditingNote(note);
                              setIsEditNoteModalOpen(true);
                            }}
                            className="p-1 text-slate-500 hover:text-amber-600 hover:bg-amber-50 rounded transition-colors"
                            title="Edit Note"
                          >
                            <Edit2 className="w-3.5 h-3.5" />
                          </button>
                          <button 
                            onClick={() => {
                              setDeletingNote(note);
                              setIsDeleteNoteModalOpen(true);
                            }}
                            className="p-1 text-slate-500 hover:text-rose-600 hover:bg-rose-50 rounded transition-colors"
                            title="Delete Note"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                        
                        <div className="mb-2 pr-20">
                          <h4 className="font-bold text-slate-800 text-[15px] leading-tight underline decoration-yellow-400 underline-offset-4">{note.title}</h4>
                        </div>
                        
                        <p className="text-[13px] text-slate-700 mb-6 whitespace-pre-wrap leading-relaxed font-medium">{note.description}</p>
                        
                        <div className="flex flex-col gap-2 mt-auto pt-3 border-t border-yellow-400/50">
                          <div className="flex items-center gap-2">
                            <div className="w-6 h-6 rounded-full bg-amber-500/20 flex items-center justify-center text-amber-700 font-bold text-[11px] border border-amber-500/30">
                              {note.initial}
                            </div>
                            <span className="text-[12px] font-bold text-slate-700">{note.author}</span>
                          </div>
                          
                          <div className="flex items-center justify-between text-[11px] font-bold text-slate-500">
                            <span>{note.date}</span>
                            <span>{note.time}</span>
                          </div>
                        </div>
                        
                        {/* Folded corner effect */}
                        <div className="absolute bottom-0 right-0 w-0 h-0 border-b-[16px] border-l-[16px] border-b-transparent border-l-yellow-500/30 shadow-[-2px_-2px_3px_rgba(0,0,0,0.05)]"></div>
                      </div>
                    ))}
                    
                    {notes.length === 0 && (
                      <div className="col-span-1 md:col-span-2 text-center py-10 bg-slate-800/40 rounded-xl border border-slate-700/50 border-dashed">
                        <div className="w-16 h-16 rounded-full bg-slate-800 flex items-center justify-center mx-auto mb-4 border border-slate-700">
                          <FileText className="w-8 h-8 text-amber-500/50" />
                        </div>
                        <h3 className="text-[16px] font-bold text-white mb-2">No notes yet</h3>
                        <p className="text-[14px] text-slate-400 max-w-xs mx-auto mb-6">Keep track of important client details, meeting summaries, and quick reminders.</p>
                        <button 
                          onClick={() => setIsAddNoteModalOpen(true)}
                          className="px-6 py-2.5 bg-amber-500 hover:bg-amber-600 text-white rounded-lg text-[14px] font-bold transition-all shadow-[0_0_15px_rgba(245,158,11,0.3)] inline-flex items-center gap-2"
                        >
                          <Plus className="w-4 h-4" /> Create First Note
                        </button>
                      </div>
                    )}
                  </div>
                </div>

                {/* Samples Section */}
                <div className="bg-slate-900/60 backdrop-blur-xl rounded-xl border border-fuchsia-500/20 shadow-[0_0_15px_rgba(217,70,239,0.05)] overflow-hidden">
                  <div className="p-4 bg-fuchsia-500/10 border-b border-fuchsia-500/20 flex justify-between items-center">
                    <h2 className="text-[16px] font-bold text-white flex items-center gap-2">
                      <List className="w-5 h-5 text-fuchsia-400" />
                      Client Assets & Samples
                    </h2>
                    <div className="flex gap-2">
                      <button 
                        onClick={() => setIsAddLogoModalOpen(true)}
                        className="flex items-center gap-1.5 px-3 py-2 bg-slate-800 hover:bg-slate-700 border border-fuchsia-500/30 text-fuchsia-300 hover:text-white rounded-md text-[13px] font-bold transition-all shadow-sm"
                      >
                        <ImageIcon className="w-4 h-4" /> Add Logo
                      </button>
                      <button 
                        onClick={() => setIsGenerateWebsiteModalOpen(true)}
                        className="flex items-center gap-1.5 px-4 py-2 bg-fuchsia-600 hover:bg-fuchsia-500 text-white rounded-md text-[13px] font-bold transition-all shadow-[0_0_10px_rgba(217,70,239,0.3)]"
                      >
                        <Globe className="w-4 h-4" /> Generate Website
                      </button>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {samples.map(sample => (
                        <div key={sample.id} className="bg-slate-800/80 border border-slate-700 rounded-xl p-4 relative overflow-hidden flex flex-col group shadow-sm hover:border-fuchsia-500/50 transition-all hover:shadow-[0_4px_20px_rgba(217,70,239,0.1)]">
                          
                          {/* Top bar */}
                          <div className="flex justify-between items-start mb-3 relative z-10">
                            <div className="flex items-center gap-2">
                              <div className={`p-1.5 rounded-md ${sample.type === 'Website' ? 'bg-emerald-500/20 text-emerald-400' : 'bg-fuchsia-500/20 text-fuchsia-400'}`}>
                                {sample.type === 'Website' ? <Globe className="w-4 h-4" /> : <ImageIcon className="w-4 h-4" />}
                              </div>
                              <h4 className="font-bold text-white text-[15px]">{sample.title}</h4>
                            </div>
                            
                            <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity bg-slate-900/80 p-1 rounded-md border border-slate-700">
                              <button className="p-1.5 text-slate-400 hover:text-blue-400 hover:bg-slate-800 rounded transition-colors" title="Copy URL">
                                <LinkIcon className="w-3.5 h-3.5" />
                              </button>
                              <button 
                                onClick={() => {
                                  setDeletingSample(sample);
                                  setIsDeleteSampleModalOpen(true);
                                }}
                                className="p-1.5 text-slate-400 hover:text-rose-400 hover:bg-slate-800 rounded transition-colors" 
                                title="Delete"
                              >
                                <Trash2 className="w-3.5 h-3.5" />
                              </button>
                            </div>
                          </div>
                          
                          {/* URL Box */}
                          <div className="bg-slate-900 p-3 rounded-lg border border-slate-700/50 mb-4 relative z-10 flex items-center justify-between group/url cursor-pointer hover:border-fuchsia-500/30 transition-colors">
                            <span className="text-[13px] text-fuchsia-300 font-medium truncate pr-4">{sample.url}</span>
                            <LinkIcon className="w-3.5 h-3.5 text-slate-500 group-hover/url:text-fuchsia-400 shrink-0 transition-colors" />
                          </div>
                          
                          {/* Footer */}
                          <div className="flex items-center justify-between text-[11px] font-medium text-slate-400 relative z-10 mt-auto pt-3 border-t border-slate-700/50">
                            <div className="flex items-center gap-1.5">
                              <User className="w-3.5 h-3.5 text-slate-500" />
                              <span>{sample.author}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span>{sample.date}</span>
                              <span className="text-slate-600 font-bold">•</span>
                              <span>{sample.time}</span>
                            </div>
                          </div>
                        </div>
                      ))}
                      
                      {samples.length === 0 && (
                        <div className="col-span-1 md:col-span-2 p-10 flex flex-col items-center justify-center text-white bg-slate-800/40 rounded-xl border border-slate-700/50 border-dashed">
                          <div className="w-16 h-16 mb-4 flex items-center justify-center bg-slate-800 rounded-full border border-slate-700">
                            <Search className="w-8 h-8 text-slate-500" />
                          </div>
                          <h3 className="text-[16px] font-bold text-white mb-2">No assets found</h3>
                          <p className="text-[13px] text-slate-400 mb-6">Create a website or add a logo sample for this client.</p>
                          <div className="flex gap-3">
                            <button 
                              onClick={() => setIsGenerateWebsiteModalOpen(true)}
                              className="px-5 py-2.5 bg-fuchsia-600 hover:bg-fuchsia-500 text-white rounded-lg text-[13px] font-bold transition-all shadow-[0_0_10px_rgba(217,70,239,0.3)]"
                            >
                              Generate Website
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
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
              <div className="w-full lg:w-[320px] shrink-0 flex flex-col gap-6">
                
                {/* Pagination */}
                <div className="flex justify-between items-center bg-slate-900/60 backdrop-blur-xl rounded-lg border border-indigo-500/20 p-2 shadow-sm shrink-0">
                  <button className="px-3 py-1.5 text-[12px] text-indigo-400 hover:text-white hover:bg-indigo-500/20 rounded font-medium flex items-center gap-1 transition-colors">
                    <ChevronDown className="w-3.5 h-3.5 rotate-90" /> Previous
                  </button>
                  <span className="text-[12px] font-bold text-slate-300">Client 2573 of 4539</span>
                  <button className="px-3 py-1.5 text-[12px] text-indigo-400 hover:text-white hover:bg-indigo-500/20 rounded font-medium flex items-center gap-1 transition-colors">
                    Next <ChevronDown className="w-3.5 h-3.5 -rotate-90" />
                  </button>
                </div>

                {/* Tasks Widget */}
                <div className="bg-slate-900/60 backdrop-blur-xl rounded-xl border border-red-500/20 shadow-[0_0_15px_rgba(239,68,68,0.05)] relative z-[50] shrink-0">
                  <div className="p-4 bg-red-500/10 border-b border-red-500/20 flex justify-between items-center rounded-t-xl relative z-[60]">
                    <span className="font-bold text-white text-[15px] flex items-center gap-2">
                      <Zap className="w-5 h-5 text-red-400" /> Tasks
                    </span>
                    <div className="flex gap-2 relative">
                      {/* View All */}
                      <button 
                        onClick={() => setLocation('/tasks')}
                        className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-slate-700 border border-slate-600 flex items-center justify-center text-slate-300 hover:text-white shadow-sm transition-colors group relative"
                      >
                        <Eye className="w-4 h-4" />
                        <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 px-2.5 py-1.5 bg-slate-800 text-white text-[11px] rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-[100] shadow-lg border border-slate-600 before:content-[''] before:absolute before:-top-2 before:left-1/2 before:-translate-x-1/2 before:border-4 before:border-transparent before:border-b-slate-600 after:content-[''] after:absolute after:-top-[7px] after:left-1/2 after:-translate-x-1/2 after:border-4 after:border-transparent after:border-b-slate-800 font-bold">
                          View All
                        </div>
                      </button>
                      
                      {/* Dropdown */}
                      <div className="relative">
                        <button 
                          onClick={() => setIsTaskDropdownOpen(!isTaskDropdownOpen)}
                          className="w-8 h-8 rounded-lg bg-orange-500 hover:bg-orange-600 flex items-center justify-center text-white shadow-[0_0_10px_rgba(249,115,22,0.4)] transition-colors group relative z-[60]"
                        >
                          <Zap className="w-4 h-4" />
                          <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 px-2.5 py-1.5 bg-slate-800 text-white text-[11px] rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-[100] shadow-lg border border-slate-600 before:content-[''] before:absolute before:-top-2 before:left-1/2 before:-translate-x-1/2 before:border-4 before:border-transparent before:border-b-slate-600 after:content-[''] after:absolute after:-top-[7px] after:left-1/2 after:-translate-x-1/2 after:border-4 after:border-transparent after:border-b-slate-800 font-bold">
                            Quick Reminder
                          </div>
                        </button>
                        
                        {isTaskDropdownOpen && (
                          <>
                            <div className="fixed inset-0 z-[50]" onClick={() => setIsTaskDropdownOpen(false)}></div>
                            <div className="absolute right-0 top-full mt-2 w-48 bg-slate-800 rounded-xl shadow-xl border border-slate-600 py-2 z-[100] animate-in fade-in slide-in-from-top-2 origin-top-right overflow-hidden">
                              {['1 Day Follow Up', '3 Day Follow Up', '1 Week Follow Up', '2 Week Follow Up', '1 Month Follow Up', '3 Month Follow Up', '6 Month Follow Up', '12 Month Follow Up'].map((item) => (
                                <button key={item} onClick={() => setIsTaskDropdownOpen(false)} className="w-full text-left px-4 py-2.5 text-[13px] font-medium text-slate-300 hover:bg-slate-700 hover:text-white transition-colors relative z-10">
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
                        className="w-8 h-8 rounded-lg bg-red-600 hover:bg-red-500 flex items-center justify-center text-white shadow-[0_0_10px_rgba(239,68,68,0.4)] transition-colors group relative"
                      >
                        <Plus className="w-4 h-4" />
                        <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 px-2.5 py-1.5 bg-slate-800 text-white text-[11px] rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-[100] shadow-lg border border-slate-600 before:content-[''] before:absolute before:-top-2 before:left-1/2 before:-translate-x-1/2 before:border-4 before:border-transparent before:border-b-slate-600 after:content-[''] after:absolute after:-top-[7px] after:left-1/2 after:-translate-x-1/2 after:border-4 after:border-transparent after:border-b-slate-800 font-bold">
                          Add Task
                        </div>
                      </button>
                    </div>
                  </div>
                  <div className="p-10 flex flex-col items-center justify-center text-white bg-slate-800/30 rounded-b-xl border-t border-red-500/10">
                    <div className="w-14 h-14 mb-4 flex items-center justify-center text-slate-500 bg-slate-800 rounded-full border border-slate-700">
                      <Search className="w-7 h-7 text-red-500/30" />
                    </div>
                    <h3 className="text-[16px] font-bold text-white mb-2">No tasks found</h3>
                    <p className="text-[13px] text-slate-400">Click the + button to create a task</p>
                  </div>
                </div>

                {/* Activity Log */}
                <div className="bg-slate-900/60 backdrop-blur-xl rounded-xl border border-blue-500/20 shadow-[0_0_15px_rgba(59,130,246,0.05)] overflow-visible relative z-[40] flex flex-col flex-1 min-h-[500px]">
                  <div className="p-4 border-b border-blue-500/20 bg-blue-500/5 flex justify-between items-center relative z-[45]">
                    <span className="font-bold text-white text-[15px] flex items-center gap-2">
                      <List className="w-5 h-5 text-blue-400" />
                      Activity Log
                    </span>
                    <div className="relative">
                      <button 
                        onClick={() => setIsActivityDropdownOpen(!isActivityDropdownOpen)}
                        className="flex items-center gap-1.5 text-[13px] font-bold text-blue-300 hover:text-white bg-blue-500/10 hover:bg-blue-500/20 px-3 py-1.5 rounded-lg border border-blue-500/30 transition-colors shadow-sm"
                      >
                        {activityFilter} <ChevronDown className={`w-4 h-4 transition-transform ${isActivityDropdownOpen ? 'rotate-180' : ''}`} />
                      </button>
                      
                      {isActivityDropdownOpen && (
                        <>
                          <div className="fixed inset-0 z-[50]" onClick={() => setIsActivityDropdownOpen(false)}></div>
                          <div className="absolute right-0 top-full mt-2 w-[180px] bg-slate-800 rounded-xl shadow-xl border border-slate-600 py-2 z-[100] animate-in fade-in slide-in-from-top-2 origin-top-right overflow-hidden">
                            {['All Activities', 'Text / SMS', 'Emails', 'Tasks', 'Notes', 'Call'].map((item) => (
                              <button 
                                key={item} 
                                onClick={() => {
                                  setActivityFilter(item);
                                  setIsActivityDropdownOpen(false);
                                }} 
                                className={`w-full text-left px-4 py-2.5 text-[13px] font-bold transition-colors relative z-10
                                  ${item === activityFilter 
                                    ? 'bg-blue-600 text-white' 
                                    : 'text-slate-300 hover:bg-slate-700 hover:text-white'
                                  }`}
                              >
                                {item}
                              </button>
                            ))}
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                  <div className="p-4 space-y-3 relative z-10 flex-1 overflow-y-auto custom-scrollbar">
                    
                    {filteredActivities.length > 0 ? (
                      filteredActivities.map((activity) => (
                        <div key={activity.id} className="bg-slate-800/80 border border-slate-700 rounded-xl p-4 relative hover:border-blue-500/40 transition-colors shadow-sm">
                          <div className="flex gap-3">
                            <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 border
                              ${activity.type === 'Tasks' ? 'bg-red-500/20 border-red-500/30 text-red-400' :
                                activity.type === 'Emails' ? 'bg-indigo-500/20 border-indigo-500/30 text-indigo-400' :
                                activity.type === 'Notes' ? 'bg-amber-500/20 border-amber-500/30 text-amber-400' :
                                activity.type === 'Call' ? 'bg-emerald-500/20 border-emerald-500/30 text-emerald-400' :
                                'bg-cyan-500/20 border-cyan-500/30 text-cyan-400'}`}
                            >
                              {activity.type === 'Tasks' ? <CheckCircle2 className="w-4 h-4" /> :
                               activity.type === 'Emails' ? <Mail className="w-4 h-4" /> :
                               activity.type === 'Notes' ? <FileText className="w-4 h-4" /> :
                               activity.type === 'Call' ? <Phone className="w-4 h-4" /> :
                               <MessageSquare className="w-4 h-4" />}
                            </div>
                            <div className="flex-1">
                              <p className="text-[13px] font-bold text-white leading-tight mb-2">{activity.title}</p>
                              <div className="flex flex-col gap-1.5 text-[12px] text-slate-400 font-medium bg-slate-900/50 p-2 rounded-lg border border-slate-700/50">
                                <div className="flex items-center gap-1.5">
                                  <User className="w-3.5 h-3.5 text-slate-500" />
                                  <span><span className="text-slate-500">{activity.type === 'Tasks' ? 'Added By:' : activity.type === 'Emails' || activity.type === 'Text / SMS' ? 'Sent by:' : 'By:'}</span> {activity.author}</span>
                                </div>
                                <div className="flex items-center gap-1.5">
                                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500/50 ml-1"></div>
                                  <span>{activity.date} <span className="mx-1">•</span> {activity.time}</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))
                    ) : (
                      <div className="text-center py-10 bg-slate-800/30 rounded-xl border border-slate-700/50 border-dashed">
                        <div className="w-14 h-14 mx-auto mb-4 flex items-center justify-center text-slate-500 bg-slate-800 rounded-full border border-slate-700">
                          <List className="w-7 h-7 text-blue-500/30" />
                        </div>
                        <h3 className="text-[16px] font-bold text-white mb-1">No activities found</h3>
                        <p className="text-[13px] text-slate-400">Try changing your filter settings.</p>
                      </div>
                    )}

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
      {/* Edit Contact Information Modal */}
      {isEditContactModalOpen && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setIsEditContactModalOpen(false)}
        >
          <div 
            className="bg-slate-900 border border-slate-700 rounded-2xl w-full max-w-xl overflow-hidden flex flex-col shadow-2xl animate-in fade-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="px-6 py-4 border-b border-slate-800 flex justify-between items-center bg-slate-900/50">
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-cyan-400" />
                <h2 className="text-xl font-bold text-white">Edit Contact Information</h2>
              </div>
              <button 
                onClick={() => setIsEditContactModalOpen(false)}
                className="text-slate-400 hover:text-white p-2 hover:bg-slate-800 rounded-lg transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 space-y-5">
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Primary Phone Number</label>
                <div className="flex">
                  <select className="px-3 py-2.5 bg-slate-900/50 border border-slate-700 border-r-0 rounded-l-xl text-sm text-slate-300 focus:outline-none focus:border-cyan-500/50 transition-all w-20">
                    <option>+1</option>
                  </select>
                  <input 
                    type="tel" 
                    defaultValue="973 979 7987"
                    className="flex-1 px-4 py-2.5 bg-slate-900/50 border border-slate-700 rounded-r-xl text-sm text-white focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all placeholder:text-slate-500" 
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Primary Email</label>
                <input 
                  type="email" 
                  placeholder="contact@company.com"
                  className="w-full px-4 py-2.5 bg-slate-900/50 border border-slate-700 rounded-xl text-sm text-white focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all placeholder:text-slate-500" 
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Office Address</label>
                <textarea 
                  placeholder="123 Business Ave, Suite 100&#10;City, State 12345"
                  className="w-full px-4 py-2.5 bg-slate-900/50 border border-slate-700 rounded-xl text-sm text-white focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all placeholder:text-slate-500 min-h-[80px] resize-none" 
                ></textarea>
              </div>
            </div>

            <div className="px-6 py-4 border-t border-slate-800 bg-slate-900/80 flex justify-end gap-3">
              <button 
                onClick={() => setIsEditContactModalOpen(false)}
                className="px-6 py-2.5 border border-slate-700 text-slate-300 hover:text-white hover:bg-slate-800 rounded-xl font-medium transition-colors"
              >
                Cancel
              </button>
              <button 
                onClick={() => setIsEditContactModalOpen(false)}
                className="px-6 py-2.5 bg-cyan-600 hover:bg-cyan-500 text-white rounded-xl font-medium shadow-[0_0_15px_rgba(6,182,212,0.3)] hover:shadow-[0_0_20px_rgba(6,182,212,0.5)] transition-all"
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Edit Website Modal */}
      {isEditWebsiteModalOpen && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setIsEditWebsiteModalOpen(false)}
        >
          <div 
            className="bg-slate-900 border border-slate-700 rounded-2xl w-full max-w-2xl overflow-hidden flex flex-col shadow-2xl animate-in fade-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="px-6 py-4 border-b border-slate-800 flex justify-between items-center bg-slate-900/50">
              <div className="flex items-center gap-2">
                <Globe className="w-5 h-5 text-emerald-400" />
                <h2 className="text-xl font-bold text-white">Edit Websites & Credentials</h2>
              </div>
              <button 
                onClick={() => setIsEditWebsiteModalOpen(false)}
                className="text-slate-400 hover:text-white p-2 hover:bg-slate-800 rounded-lg transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 space-y-6">
              <div className="space-y-4">
                <h3 className="text-[13px] font-bold text-emerald-400 uppercase tracking-wider border-b border-slate-800 pb-2">Websites</h3>
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Main Website URL</label>
                  <input 
                    type="url" 
                    defaultValue="https://www.clientwebsite.com"
                    className="w-full px-4 py-2.5 bg-slate-900/50 border border-slate-700 rounded-xl text-sm text-white focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 transition-all" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Gorilla Apps Subdomain</label>
                  <div className="flex items-center">
                    <input 
                      type="text" 
                      defaultValue="client"
                      className="w-1/3 px-4 py-2.5 bg-slate-900/50 border border-slate-700 rounded-l-xl text-sm text-white focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 transition-all text-right" 
                    />
                    <div className="px-4 py-2.5 bg-slate-800 border-y border-r border-slate-700 rounded-r-xl text-sm text-slate-400 font-medium">
                      .pinkgorilla.apps
                    </div>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">Staging URL</label>
                  <input 
                    type="url" 
                    defaultValue="https://staging.clientwebsite.com"
                    className="w-full px-4 py-2.5 bg-slate-900/50 border border-slate-700 rounded-xl text-sm text-white focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 transition-all" 
                  />
                </div>
              </div>

              <div className="space-y-4 pt-2">
                <h3 className="text-[13px] font-bold text-slate-400 uppercase tracking-wider border-b border-slate-800 pb-2">Gorilla Apps Credentials</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">Username / Email</label>
                    <input 
                      type="text" 
                      defaultValue="admin@client.com"
                      className="w-full px-4 py-2.5 bg-slate-900/50 border border-slate-700 rounded-xl text-sm text-white focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 transition-all" 
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">Password</label>
                    <div className="relative">
                      <input 
                        type="password" 
                        defaultValue="password123!"
                        className="w-full px-4 py-2.5 bg-slate-900/50 border border-slate-700 rounded-xl text-sm text-white focus:outline-none focus:border-emerald-500/50 focus:ring-1 focus:ring-emerald-500/50 transition-all pr-10" 
                      />
                      <button className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white transition-colors">
                        <Eye className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="px-6 py-4 border-t border-slate-800 bg-slate-900/80 flex justify-end gap-3">
              <button 
                onClick={() => setIsEditWebsiteModalOpen(false)}
                className="px-6 py-2.5 border border-slate-700 text-slate-300 hover:text-white hover:bg-slate-800 rounded-xl font-medium transition-colors"
              >
                Cancel
              </button>
              <button 
                onClick={() => setIsEditWebsiteModalOpen(false)}
                className="px-6 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl font-medium shadow-[0_0_15px_rgba(16,185,129,0.3)] hover:shadow-[0_0_20px_rgba(16,185,129,0.5)] transition-all"
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Edit General Info Modal */}
      {isEditGeneralInfoModalOpen && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setIsEditGeneralInfoModalOpen(false)}
        >
          <div 
            className="bg-slate-900 border border-slate-700 rounded-2xl w-full max-w-2xl overflow-hidden flex flex-col shadow-2xl animate-in fade-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="px-6 py-4 border-b border-slate-800 flex justify-between items-center bg-slate-900/50">
              <div className="flex items-center gap-2">
                <Info className="w-5 h-5 text-teal-400" />
                <h2 className="text-xl font-bold text-white">Edit General Info</h2>
              </div>
              <button 
                onClick={() => setIsEditGeneralInfoModalOpen(false)}
                className="text-slate-400 hover:text-white p-2 hover:bg-slate-800 rounded-lg transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Timezone</label>
                <select className="w-full px-4 py-2.5 bg-slate-900/50 border border-slate-700 rounded-xl text-sm text-white focus:outline-none focus:border-teal-500/50 focus:ring-1 focus:ring-teal-500/50 transition-all appearance-none">
                  <option value="America/Denver">America/Denver</option>
                  <option value="America/New_York">America/New_York</option>
                  <option value="America/Chicago">America/Chicago</option>
                  <option value="America/Los_Angeles">America/Los_Angeles</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Currency</label>
                <select className="w-full px-4 py-2.5 bg-slate-900/50 border border-slate-700 rounded-xl text-sm text-white focus:outline-none focus:border-teal-500/50 focus:ring-1 focus:ring-teal-500/50 transition-all appearance-none">
                  <option value="USD">USD ($)</option>
                  <option value="EUR">EUR (€)</option>
                  <option value="GBP">GBP (£)</option>
                  <option value="CAD">CAD (£)</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Language</label>
                <select className="w-full px-4 py-2.5 bg-slate-900/50 border border-slate-700 rounded-xl text-sm text-white focus:outline-none focus:border-teal-500/50 focus:ring-1 focus:ring-teal-500/50 transition-all appearance-none">
                  <option value="en-US">English - US</option>
                  <option value="en-GB">English - UK</option>
                  <option value="es">Spanish</option>
                  <option value="fr">French</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Industry</label>
                <select className="w-full px-4 py-2.5 bg-slate-900/50 border border-slate-700 rounded-xl text-sm text-white focus:outline-none focus:border-teal-500/50 focus:ring-1 focus:ring-teal-500/50 transition-all appearance-none">
                  <option value="retail">Retail Trade</option>
                  <option value="tech">Information Technology</option>
                  <option value="healthcare">Health Care</option>
                  <option value="finance">Finance</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Years in Business</label>
                <input 
                  type="text" 
                  defaultValue="1 yr"
                  className="w-full px-4 py-2.5 bg-slate-900/50 border border-slate-700 rounded-xl text-sm text-white focus:outline-none focus:border-teal-500/50 focus:ring-1 focus:ring-teal-500/50 transition-all placeholder:text-slate-500" 
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Number of Employees</label>
                <select className="w-full px-4 py-2.5 bg-slate-900/50 border border-slate-700 rounded-xl text-sm text-white focus:outline-none focus:border-teal-500/50 focus:ring-1 focus:ring-teal-500/50 transition-all appearance-none">
                  <option value="1-3">1-3</option>
                  <option value="4-10">4-10</option>
                  <option value="11-50">11-50</option>
                  <option value="51-200">51-200</option>
                </select>
              </div>
            </div>

            <div className="px-6 py-4 border-t border-slate-800 bg-slate-900/80 flex justify-end gap-3">
              <button 
                onClick={() => setIsEditGeneralInfoModalOpen(false)}
                className="px-6 py-2.5 border border-slate-700 text-slate-300 hover:text-white hover:bg-slate-800 rounded-xl font-medium transition-colors"
              >
                Cancel
              </button>
              <button 
                onClick={() => setIsEditGeneralInfoModalOpen(false)}
                className="px-6 py-2.5 bg-teal-600 hover:bg-teal-500 text-white rounded-xl font-medium shadow-[0_0_15px_rgba(20,184,166,0.3)] hover:shadow-[0_0_20px_rgba(20,184,166,0.5)] transition-all"
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Edit Background Modal */}
      {isEditBackgroundModalOpen && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setIsEditBackgroundModalOpen(false)}
        >
          <div 
            className="bg-slate-900 border border-slate-700 rounded-2xl w-full max-w-2xl overflow-hidden flex flex-col shadow-2xl animate-in fade-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="px-6 py-4 border-b border-slate-800 flex justify-between items-center bg-slate-900/50">
              <div className="flex items-center gap-2">
                <ImageIcon className="w-5 h-5 text-violet-400" />
                <h2 className="text-xl font-bold text-white">Edit Background</h2>
              </div>
              <button 
                onClick={() => setIsEditBackgroundModalOpen(false)}
                className="text-slate-400 hover:text-white p-2 hover:bg-slate-800 rounded-lg transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6">
              <div className="border border-slate-700 rounded-xl overflow-hidden bg-slate-900/50 focus-within:border-violet-500/50 focus-within:ring-1 focus-within:ring-violet-500/50 transition-all">
                <div className="bg-slate-800/80 border-b border-slate-700 p-2 flex items-center gap-1 flex-wrap">
                  <button className="p-1.5 hover:bg-slate-700 text-slate-300 hover:text-white rounded transition-colors"><Bold className="w-4 h-4" /></button>
                  <button className="p-1.5 hover:bg-slate-700 text-slate-300 hover:text-white rounded transition-colors"><LinkIcon className="w-4 h-4" /></button>
                  <button className="p-1.5 hover:bg-slate-700 text-slate-300 hover:text-white rounded transition-colors"><List className="w-4 h-4" /></button>
                  <button className="p-1.5 hover:bg-slate-700 text-slate-300 hover:text-white rounded transition-colors"><AlignLeft className="w-4 h-4" /></button>
                  <button className="p-1.5 hover:bg-slate-700 text-slate-300 hover:text-white rounded transition-colors"><ImageIcon className="w-4 h-4" /></button>
                  <button className="p-1.5 hover:bg-slate-700 text-slate-300 hover:text-white rounded transition-colors"><Video className="w-4 h-4" /></button>
                </div>
                <textarea 
                  className="w-full h-64 bg-slate-900/20 p-4 text-sm text-white focus:outline-none resize-none placeholder:text-slate-500"
                  placeholder="Enter client background information..."
                  defaultValue="https://www.yelp.com/biz/luciene-santanna-takagi-psyd-newark?osq=Psychologists"
                ></textarea>
              </div>
            </div>

            <div className="px-6 py-4 border-t border-slate-800 bg-slate-900/80 flex justify-end gap-3">
              <button 
                onClick={() => setIsEditBackgroundModalOpen(false)}
                className="px-6 py-2.5 border border-slate-700 text-slate-300 hover:text-white hover:bg-slate-800 rounded-xl font-medium transition-colors"
              >
                Cancel
              </button>
              <button 
                onClick={() => setIsEditBackgroundModalOpen(false)}
                className="px-6 py-2.5 bg-violet-600 hover:bg-violet-500 text-white rounded-xl font-medium shadow-[0_0_15px_rgba(139,92,246,0.3)] hover:shadow-[0_0_20px_rgba(139,92,246,0.5)] transition-all"
              >
                Save Background
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

                <div className="space-y-4">
                  <div className="grid grid-cols-1 gap-4">
                    {editClientLinks.map((link, index) => (
                      <div key={index} className="flex items-end gap-4">
                        <div className="flex-1">
                          <label className="block text-sm font-medium text-slate-300 mb-2">Link Label</label>
                          <input 
                            type="text" 
                            placeholder="e.g., Facebook, TripAdvisor"
                            value={link.label}
                            onChange={(e) => handleLinkChange(index, 'label', e.target.value)}
                            className="w-full px-4 py-2.5 bg-slate-900/50 border border-slate-700 rounded-xl text-sm text-white focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/50 transition-all placeholder:text-slate-500" 
                          />
                        </div>
                        <div className="flex-1">
                          <label className="block text-sm font-medium text-slate-300 mb-2">Link URL</label>
                          <input 
                            type="url" 
                            placeholder="https://..."
                            value={link.url}
                            onChange={(e) => handleLinkChange(index, 'url', e.target.value)}
                            className="w-full px-4 py-2.5 bg-slate-900/50 border border-slate-700 rounded-xl text-sm text-white focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/50 transition-all placeholder:text-slate-500" 
                          />
                        </div>
                        <button 
                          onClick={() => handleRemoveLink(index)}
                          className="w-[42px] h-[42px] rounded-xl bg-rose-500 hover:bg-rose-600 text-white flex items-center justify-center transition-all shrink-0 shadow-sm"
                          title="Remove Link"
                        >
                          <X className="w-5 h-5" />
                        </button>
                      </div>
                    ))}
                  </div>
                  
                  <button 
                    onClick={handleAddLink}
                    className="bg-purple-600 hover:bg-purple-500 text-white font-medium px-4 py-2.5 rounded-xl text-sm transition-colors flex items-center gap-2 w-fit"
                  >
                    <Plus className="w-4 h-4" /> Add Link
                  </button>
                </div>

                <div className="flex items-center gap-4 border-t border-slate-800 pt-6">
                  <span className="text-sm font-medium text-slate-300">Background</span>
                  <button 
                    onClick={() => setIsEditorEnabled(!isEditorEnabled)}
                    className={`w-11 h-6 rounded-full relative transition-colors focus:outline-none cursor-pointer ${isEditorEnabled ? 'bg-purple-600' : 'bg-slate-700'}`}
                  >
                    <span className={`absolute top-1 w-4 h-4 rounded-full transition-transform shadow-[0_0_5px_rgba(0,0,0,0.2)] ${isEditorEnabled ? 'left-[22px] bg-white' : 'left-1 bg-slate-400'}`}></span>
                  </button>
                </div>

                {isEditorEnabled && (
                  <div className="animate-in fade-in slide-in-from-top-4 duration-300 border border-slate-700 rounded-xl overflow-hidden bg-slate-900/50">
                    <div className="bg-slate-800/80 border-b border-slate-700 p-2 flex items-center gap-1 flex-wrap">
                      <button className="p-1.5 hover:bg-slate-700 text-slate-300 hover:text-white rounded transition-colors"><Bold className="w-4 h-4" /></button>
                      <button className="p-1.5 hover:bg-slate-700 text-slate-300 hover:text-white rounded transition-colors"><LinkIcon className="w-4 h-4" /></button>
                      <button className="p-1.5 hover:bg-slate-700 text-slate-300 hover:text-white rounded transition-colors"><List className="w-4 h-4" /></button>
                      <button className="p-1.5 hover:bg-slate-700 text-slate-300 hover:text-white rounded transition-colors"><AlignLeft className="w-4 h-4" /></button>
                      <button className="p-1.5 hover:bg-slate-700 text-slate-300 hover:text-white rounded transition-colors"><ImageIcon className="w-4 h-4" /></button>
                      <button className="p-1.5 hover:bg-slate-700 text-slate-300 hover:text-white rounded transition-colors"><Video className="w-4 h-4" /></button>
                    </div>
                    <textarea 
                      className="w-full h-48 bg-slate-400/20 p-4 text-sm text-white focus:outline-none resize-none placeholder:text-slate-500"
                      placeholder="Enter client background information..."
                    ></textarea>
                    <div className="bg-slate-800/80 border-t border-slate-700 p-3 flex justify-end">
                      <button className="bg-purple-600 hover:bg-purple-500 text-white font-medium px-4 py-2 rounded-lg text-sm transition-colors shadow-sm">
                        Save Notes
                      </button>
                    </div>
                  </div>
                )}
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
      {/* Add Employee Modal */}
      {isAddEmployeeModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setIsAddEmployeeModalOpen(false)}></div>
          
          <div className="relative bg-slate-900 border border-slate-700 rounded-xl shadow-2xl w-full max-w-2xl flex flex-col animate-in fade-in zoom-in-95 duration-200">
            {/* Header */}
            <div className="flex items-center justify-between p-5 border-b border-slate-800 bg-slate-800/50 rounded-t-xl">
              <h2 className="text-xl font-bold text-white">Create A New User</h2>
              <button 
                onClick={() => setIsAddEmployeeModalOpen(false)}
                className="w-8 h-8 flex items-center justify-center rounded-lg text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            {/* Body */}
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {/* First Name */}
                <div>
                  <label className="block text-[13px] font-medium text-slate-300 mb-1.5">First Name*</label>
                  <input 
                    type="text" 
                    placeholder="Jordan"
                    value={newEmployee.firstName}
                    onChange={(e) => setNewEmployee({...newEmployee, firstName: e.target.value})}
                    className="w-full px-4 py-2.5 bg-slate-900/50 border border-slate-700 rounded-lg text-[13px] text-white focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/50 transition-all placeholder:text-slate-500"
                  />
                </div>
                
                {/* Last Name */}
                <div>
                  <label className="block text-[13px] font-medium text-slate-300 mb-1.5">Last Name</label>
                  <input 
                    type="text" 
                    placeholder="Peterson"
                    value={newEmployee.lastName}
                    onChange={(e) => setNewEmployee({...newEmployee, lastName: e.target.value})}
                    className="w-full px-4 py-2.5 bg-slate-900/50 border border-slate-700 rounded-lg text-[13px] text-white focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/50 transition-all placeholder:text-slate-500"
                  />
                </div>
                
                {/* Email Address */}
                <div>
                  <label className="block text-[13px] font-medium text-slate-300 mb-1.5">Email Address*</label>
                  <input 
                    type="email" 
                    placeholder="vikas@pinkgorillasoftware.com"
                    value={newEmployee.email}
                    onChange={(e) => setNewEmployee({...newEmployee, email: e.target.value})}
                    className="w-full px-4 py-2.5 bg-indigo-500/10 border border-indigo-500/30 rounded-lg text-[13px] text-white focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/50 transition-all"
                  />
                </div>
                
                {/* Phone */}
                <div>
                  <label className="block text-[13px] font-medium text-slate-300 mb-1.5">Phone</label>
                  <div className="flex">
                    <select 
                      value={newEmployee.phoneCode}
                      onChange={(e) => setNewEmployee({...newEmployee, phoneCode: e.target.value})}
                      className="px-3 py-2.5 bg-slate-900/50 border border-slate-700 rounded-l-lg border-r-0 text-[13px] text-slate-300 focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/50 transition-all appearance-none outline-none"
                    >
                      <option value="+1">+1</option>
                      <option value="+44">+44</option>
                      <option value="+91">+91</option>
                    </select>
                    <input 
                      type="text" 
                      placeholder="9876543210"
                      value={newEmployee.phoneNumber}
                      onChange={(e) => setNewEmployee({...newEmployee, phoneNumber: e.target.value})}
                      className="w-full px-4 py-2.5 bg-slate-900/50 border border-slate-700 rounded-r-lg text-[13px] text-white focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/50 transition-all placeholder:text-slate-500"
                    />
                  </div>
                </div>
                
                {/* Designation */}
                <div>
                  <label className="block text-[13px] font-medium text-slate-300 mb-1.5">Designation</label>
                  <select 
                    value={newEmployee.designation}
                    onChange={(e) => setNewEmployee({...newEmployee, designation: e.target.value})}
                    className="w-full px-4 py-2.5 bg-slate-900/50 border border-slate-700 rounded-lg text-[13px] text-slate-300 focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/50 transition-all outline-none"
                  >
                    <option value="HR">HR</option>
                    <option value="Manager">Manager</option>
                    <option value="Developer">Developer</option>
                    <option value="Designer">Designer</option>
                  </select>
                </div>
                
                {/* Password */}
                <div>
                  <label className="block text-[13px] font-medium text-slate-300 mb-1.5">Password*</label>
                  <input 
                    type="password" 
                    value={newEmployee.password}
                    onChange={(e) => setNewEmployee({...newEmployee, password: e.target.value})}
                    placeholder="..........."
                    className="w-full px-4 py-2.5 bg-indigo-500/10 border border-indigo-500/30 rounded-lg text-[13px] text-white focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/50 transition-all font-mono tracking-widest"
                  />
                </div>
              </div>
            </div>
            
            {/* Footer */}
            <div className="p-5 border-t border-slate-800 bg-slate-800/30 flex justify-end gap-3 rounded-b-xl">
              <button 
                onClick={() => setIsAddEmployeeModalOpen(false)}
                className="px-5 py-2 rounded-lg text-[13px] font-medium text-slate-300 hover:text-white border border-slate-700 hover:bg-slate-800 transition-colors"
              >
                Close
              </button>
              <button 
                onClick={handleAddEmployee}
                disabled={!newEmployee.firstName || !newEmployee.email}
                className="px-6 py-2 bg-purple-600 hover:bg-purple-500 disabled:opacity-50 disabled:hover:bg-purple-600 text-white rounded-lg text-[13px] font-medium transition-colors shadow-[0_0_15px_rgba(147,51,234,0.3)] hover:shadow-[0_0_20px_rgba(147,51,234,0.4)]"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Edit Employee Modal */}
      {isEditEmployeeModalOpen && editingEmployee && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setIsEditEmployeeModalOpen(false)}></div>
          
          <div className="relative bg-slate-900 border border-slate-700 rounded-xl shadow-2xl w-full max-w-2xl flex flex-col animate-in fade-in zoom-in-95 duration-200">
            {/* Header */}
            <div className="flex items-center justify-between p-5 border-b border-slate-800 bg-slate-800/50 rounded-t-xl">
              <h2 className="text-xl font-bold text-white">Edit User</h2>
              <button 
                onClick={() => setIsEditEmployeeModalOpen(false)}
                className="w-8 h-8 flex items-center justify-center rounded-lg text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            {/* Body */}
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {/* First Name */}
                <div>
                  <label className="block text-[13px] font-medium text-slate-300 mb-1.5">First Name*</label>
                  <input 
                    type="text" 
                    placeholder="Jordan"
                    value={editingEmployee.firstName}
                    onChange={(e) => setEditingEmployee({...editingEmployee, firstName: e.target.value})}
                    className="w-full px-4 py-2.5 bg-slate-900/50 border border-slate-700 rounded-lg text-[13px] text-white focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/50 transition-all placeholder:text-slate-500"
                  />
                </div>
                
                {/* Last Name */}
                <div>
                  <label className="block text-[13px] font-medium text-slate-300 mb-1.5">Last Name</label>
                  <input 
                    type="text" 
                    placeholder="Peterson"
                    value={editingEmployee.lastName}
                    onChange={(e) => setEditingEmployee({...editingEmployee, lastName: e.target.value})}
                    className="w-full px-4 py-2.5 bg-slate-900/50 border border-slate-700 rounded-lg text-[13px] text-white focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/50 transition-all placeholder:text-slate-500"
                  />
                </div>
                
                {/* Email Address */}
                <div>
                  <label className="block text-[13px] font-medium text-slate-300 mb-1.5">Email Address*</label>
                  <input 
                    type="email" 
                    placeholder="vikas@pinkgorillasoftware.com"
                    value={editingEmployee.email}
                    onChange={(e) => setEditingEmployee({...editingEmployee, email: e.target.value})}
                    className="w-full px-4 py-2.5 bg-indigo-500/10 border border-indigo-500/30 rounded-lg text-[13px] text-white focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/50 transition-all"
                  />
                </div>
                
                {/* Phone */}
                <div>
                  <label className="block text-[13px] font-medium text-slate-300 mb-1.5">Phone</label>
                  <div className="flex">
                    <select 
                      value={editingEmployee.phoneCode}
                      onChange={(e) => setEditingEmployee({...editingEmployee, phoneCode: e.target.value})}
                      className="px-3 py-2.5 bg-slate-900/50 border border-slate-700 rounded-l-lg border-r-0 text-[13px] text-slate-300 focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/50 transition-all appearance-none outline-none"
                    >
                      <option value="+1">+1</option>
                      <option value="+44">+44</option>
                      <option value="+91">+91</option>
                    </select>
                    <input 
                      type="text" 
                      placeholder="9876543210"
                      value={editingEmployee.phoneNumber}
                      onChange={(e) => setEditingEmployee({...editingEmployee, phoneNumber: e.target.value})}
                      className="w-full px-4 py-2.5 bg-slate-900/50 border border-slate-700 rounded-r-lg text-[13px] text-white focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/50 transition-all placeholder:text-slate-500"
                    />
                  </div>
                </div>
                
                {/* Designation */}
                <div>
                  <label className="block text-[13px] font-medium text-slate-300 mb-1.5">Designation</label>
                  <select 
                    value={editingEmployee.designation}
                    onChange={(e) => setEditingEmployee({...editingEmployee, designation: e.target.value})}
                    className="w-full px-4 py-2.5 bg-slate-900/50 border border-slate-700 rounded-lg text-[13px] text-slate-300 focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/50 transition-all outline-none"
                  >
                    <option value="HR">HR</option>
                    <option value="Manager">Manager</option>
                    <option value="Developer">Developer</option>
                    <option value="Designer">Designer</option>
                  </select>
                </div>
              </div>
            </div>
            
            {/* Footer */}
            <div className="p-5 border-t border-slate-800 bg-slate-800/30 flex justify-end gap-3 rounded-b-xl">
              <button 
                onClick={() => setIsEditEmployeeModalOpen(false)}
                className="px-5 py-2 rounded-lg text-[13px] font-medium text-slate-300 hover:text-white border border-slate-700 hover:bg-slate-800 transition-colors"
              >
                Close
              </button>
              <button 
                onClick={handleEditEmployee}
                disabled={!editingEmployee.firstName || !editingEmployee.email}
                className="px-6 py-2 bg-purple-600 hover:bg-purple-500 disabled:opacity-50 disabled:hover:bg-purple-600 text-white rounded-lg text-[13px] font-medium transition-colors shadow-[0_0_15px_rgba(147,51,234,0.3)] hover:shadow-[0_0_20px_rgba(147,51,234,0.4)]"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Update Password Modal */}
      {isUpdatePasswordModalOpen && updatingPasswordEmployee && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setIsUpdatePasswordModalOpen(false)}></div>
          
          <div className="relative bg-slate-900 border border-slate-700 rounded-xl shadow-2xl w-full max-w-md flex flex-col animate-in fade-in zoom-in-95 duration-200">
            {/* Header */}
            <div className="flex items-center justify-between p-5 border-b border-slate-800 bg-slate-800/50 rounded-t-xl">
              <h2 className="text-xl font-bold text-white">Update Password</h2>
              <button 
                onClick={() => setIsUpdatePasswordModalOpen(false)}
                className="w-8 h-8 flex items-center justify-center rounded-lg text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            {/* Body */}
            <div className="p-6">
              <div className="space-y-4">
                <div className="mb-2 p-3 bg-slate-800/50 rounded-lg border border-slate-700">
                  <p className="text-[13px] text-slate-300">Updating password for <strong>{updatingPasswordEmployee.firstName} {updatingPasswordEmployee.lastName}</strong></p>
                </div>
                
                <div>
                  <label className="block text-[13px] font-medium text-slate-300 mb-1.5">New Password*</label>
                  <input 
                    type="password" 
                    value={passwordForm.newPassword}
                    onChange={(e) => setPasswordForm({...passwordForm, newPassword: e.target.value})}
                    placeholder="Enter new password"
                    className="w-full px-4 py-2.5 bg-slate-900/50 border border-slate-700 rounded-lg text-[13px] text-white focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/50 transition-all font-mono tracking-widest placeholder:tracking-normal placeholder:font-sans"
                  />
                  {passwordForm.newPassword && passwordForm.newPassword.length < 6 && (
                    <p className="text-rose-400 text-[11px] mt-1">Password must be at least 6 characters long.</p>
                  )}
                </div>
                
                <div>
                  <label className="block text-[13px] font-medium text-slate-300 mb-1.5">Confirm Password*</label>
                  <input 
                    type="password" 
                    value={passwordForm.confirmPassword}
                    onChange={(e) => setPasswordForm({...passwordForm, confirmPassword: e.target.value})}
                    placeholder="Confirm new password"
                    className={`w-full px-4 py-2.5 bg-slate-900/50 border rounded-lg text-[13px] text-white focus:outline-none focus:ring-1 transition-all font-mono tracking-widest placeholder:tracking-normal placeholder:font-sans ${passwordForm.confirmPassword && passwordForm.newPassword !== passwordForm.confirmPassword ? 'border-rose-500/50 focus:border-rose-500/50 focus:ring-rose-500/50' : 'border-slate-700 focus:border-indigo-500/50 focus:ring-indigo-500/50'}`}
                  />
                  {passwordForm.confirmPassword && passwordForm.newPassword !== passwordForm.confirmPassword && (
                    <p className="text-rose-400 text-[11px] mt-1">Passwords do not match.</p>
                  )}
                </div>
              </div>
            </div>
            
            {/* Footer */}
            <div className="p-5 border-t border-slate-800 bg-slate-800/30 flex justify-end gap-3 rounded-b-xl">
              <button 
                onClick={() => setIsUpdatePasswordModalOpen(false)}
                className="px-5 py-2 rounded-lg text-[13px] font-medium text-slate-300 hover:text-white border border-slate-700 hover:bg-slate-800 transition-colors"
              >
                Cancel
              </button>
              <button 
                onClick={handleUpdatePassword}
                disabled={!passwordForm.newPassword || passwordForm.newPassword.length < 6 || passwordForm.newPassword !== passwordForm.confirmPassword}
                className="px-6 py-2 bg-purple-600 hover:bg-purple-500 disabled:opacity-50 disabled:hover:bg-purple-600 text-white rounded-lg text-[13px] font-medium transition-colors shadow-[0_0_15px_rgba(147,51,234,0.3)] hover:shadow-[0_0_20px_rgba(147,51,234,0.4)]"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Delete Employee Confirmation Modal */}
      {isDeleteEmployeeModalOpen && deletingEmployee && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setIsDeleteEmployeeModalOpen(false)}></div>
          
          <div className="relative bg-slate-900 border border-slate-700 rounded-xl shadow-2xl w-full max-w-sm flex flex-col animate-in fade-in zoom-in-95 duration-200">
            <div className="p-6 text-center">
              <div className="w-16 h-16 rounded-full bg-rose-500/10 flex items-center justify-center mx-auto mb-4 border border-rose-500/20">
                <Trash2 className="w-8 h-8 text-rose-500" />
              </div>
              <h2 className="text-xl font-bold text-white mb-2">Delete Employee?</h2>
              <p className="text-[14px] text-slate-300 mb-6">
                Are you sure you want to delete <strong>{deletingEmployee.firstName} {deletingEmployee.lastName}</strong>? This action cannot be undone.
              </p>
              
              <div className="flex justify-center gap-3">
                <button 
                  onClick={() => setIsDeleteEmployeeModalOpen(false)}
                  className="px-5 py-2.5 rounded-lg text-[13px] font-medium text-slate-300 hover:text-white border border-slate-700 hover:bg-slate-800 transition-colors w-full"
                >
                  Cancel
                </button>
                <button 
                  onClick={handleDeleteEmployee}
                  className="px-5 py-2.5 bg-rose-600 hover:bg-rose-500 text-white rounded-lg text-[13px] font-medium transition-colors shadow-[0_0_15px_rgba(225,29,72,0.3)] w-full"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Add Note Modal */}
      {isAddNoteModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setIsAddNoteModalOpen(false)}></div>
          
          <div className="relative bg-slate-900 border border-slate-700 rounded-xl shadow-2xl w-full max-w-2xl flex flex-col animate-in fade-in zoom-in-95 duration-200">
            <div className="flex items-center justify-between p-5 border-b border-slate-800 bg-slate-800/50 rounded-t-xl">
              <h2 className="text-xl font-bold text-white">Create A New Note</h2>
              <button 
                onClick={() => setIsAddNoteModalOpen(false)}
                className="w-8 h-8 flex items-center justify-center rounded-lg text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="p-6 space-y-5">
              <div>
                <label className="block text-[13px] font-medium text-slate-300 mb-1.5">Title*</label>
                <input 
                  type="text" 
                  value={newNote.title}
                  onChange={(e) => setNewNote({...newNote, title: e.target.value})}
                  className="w-full px-4 py-2.5 bg-slate-900/50 border border-slate-700 rounded-lg text-[13px] text-white focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/50 transition-all"
                />
              </div>
              
              <div>
                <label className="block text-[13px] font-medium text-slate-300 mb-1.5">Description*</label>
                <div className="border border-slate-700 rounded-lg bg-slate-900/50 overflow-hidden focus-within:border-purple-500/50 focus-within:ring-1 focus-within:ring-purple-500/50 transition-all">
                  <div className="flex items-center gap-1 border-b border-slate-700 p-2 bg-slate-800/50 overflow-x-auto custom-scrollbar">
                    <button className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-700 rounded transition-colors"><span className="font-bold text-[13px] px-1">B</span></button>
                    <button className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-700 rounded transition-colors"><span className="italic text-[13px] px-1">I</span></button>
                    <button className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-700 rounded transition-colors"><span className="underline text-[13px] px-1">U</span></button>
                    <div className="w-[1px] h-4 bg-slate-700 mx-1"></div>
                    <button className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-700 rounded transition-colors"><svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></button>
                    <button className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-700 rounded transition-colors"><svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3.01" y2="6"></line><line x1="3" y1="12" x2="3.01" y2="12"></line><line x1="3" y1="18" x2="3.01" y2="18"></line></svg></button>
                  </div>
                  <textarea 
                    value={newNote.description}
                    onChange={(e) => setNewNote({...newNote, description: e.target.value})}
                    className="w-full p-4 min-h-[200px] resize-none focus:outline-none text-[13px] text-white bg-transparent"
                  ></textarea>
                </div>
              </div>
            </div>
            
            <div className="p-5 border-t border-slate-800 bg-slate-800/30 flex justify-end gap-3 rounded-b-xl">
              <button 
                onClick={() => setIsAddNoteModalOpen(false)}
                className="px-5 py-2 rounded-lg text-[13px] font-medium text-slate-300 hover:text-white border border-slate-700 hover:bg-slate-800 transition-colors"
              >
                Close
              </button>
              <button 
                onClick={handleAddNote}
                disabled={!newNote.title || !newNote.description}
                className="px-6 py-2 bg-purple-600 hover:bg-purple-500 disabled:opacity-50 disabled:hover:bg-purple-600 text-white rounded-lg text-[13px] font-medium transition-colors shadow-[0_0_15px_rgba(147,51,234,0.3)] hover:shadow-[0_0_20px_rgba(147,51,234,0.4)]"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Edit Note Modal */}
      {isEditNoteModalOpen && editingNote && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setIsEditNoteModalOpen(false)}></div>
          
          <div className="relative bg-slate-900 border border-slate-700 rounded-xl shadow-2xl w-full max-w-2xl flex flex-col animate-in fade-in zoom-in-95 duration-200">
            <div className="flex items-center justify-between p-5 border-b border-slate-800 bg-slate-800/50 rounded-t-xl">
              <h2 className="text-xl font-bold text-white">Edit Note</h2>
              <button 
                onClick={() => setIsEditNoteModalOpen(false)}
                className="w-8 h-8 flex items-center justify-center rounded-lg text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="p-6 space-y-5">
              <div>
                <label className="block text-[13px] font-medium text-slate-300 mb-1.5">Title*</label>
                <input 
                  type="text" 
                  value={editingNote.title}
                  onChange={(e) => setEditingNote({...editingNote, title: e.target.value})}
                  className="w-full px-4 py-2.5 bg-slate-900/50 border border-slate-700 rounded-lg text-[13px] text-white focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/50 transition-all"
                />
              </div>
              
              <div>
                <label className="block text-[13px] font-medium text-slate-300 mb-1.5">Description*</label>
                <div className="border border-slate-700 rounded-lg bg-slate-900/50 overflow-hidden focus-within:border-purple-500/50 focus-within:ring-1 focus-within:ring-purple-500/50 transition-all">
                  <div className="flex items-center gap-1 border-b border-slate-700 p-2 bg-slate-800/50 overflow-x-auto custom-scrollbar">
                    <button className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-700 rounded transition-colors"><span className="font-bold text-[13px] px-1">B</span></button>
                    <button className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-700 rounded transition-colors"><span className="italic text-[13px] px-1">I</span></button>
                    <button className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-700 rounded transition-colors"><span className="underline text-[13px] px-1">U</span></button>
                    <div className="w-[1px] h-4 bg-slate-700 mx-1"></div>
                    <button className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-700 rounded transition-colors"><svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></button>
                  </div>
                  <textarea 
                    value={editingNote.description}
                    onChange={(e) => setEditingNote({...editingNote, description: e.target.value})}
                    className="w-full p-4 min-h-[200px] resize-none focus:outline-none text-[13px] text-white bg-transparent"
                  ></textarea>
                </div>
              </div>
            </div>
            
            <div className="p-5 border-t border-slate-800 bg-slate-800/30 flex justify-end gap-3 rounded-b-xl">
              <button 
                onClick={() => setIsEditNoteModalOpen(false)}
                className="px-5 py-2 rounded-lg text-[13px] font-medium text-slate-300 hover:text-white border border-slate-700 hover:bg-slate-800 transition-colors"
              >
                Close
              </button>
              <button 
                onClick={handleEditNote}
                disabled={!editingNote.title || !editingNote.description}
                className="px-6 py-2 bg-purple-600 hover:bg-purple-500 disabled:opacity-50 disabled:hover:bg-purple-600 text-white rounded-lg text-[13px] font-medium transition-colors shadow-[0_0_15px_rgba(147,51,234,0.3)] hover:shadow-[0_0_20px_rgba(147,51,234,0.4)]"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Delete Note Modal */}
      {isDeleteNoteModalOpen && deletingNote && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setIsDeleteNoteModalOpen(false)}></div>
          
          <div className="relative bg-slate-900 border border-slate-700 rounded-xl shadow-2xl w-full max-w-sm flex flex-col animate-in fade-in zoom-in-95 duration-200">
            <div className="p-6 text-center">
              <div className="w-16 h-16 rounded-full bg-purple-500/10 flex items-center justify-center mx-auto mb-4 border border-purple-500/20">
                <svg className="w-8 h-8 text-purple-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 6h18M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2"></path></svg>
              </div>
              <h2 className="text-xl font-bold text-white mb-2">Delete Note</h2>
              <p className="text-[14px] text-slate-300 mb-6">
                Are you sure you want to delete this note?
              </p>
              
              <div className="flex justify-center gap-3">
                <button 
                  onClick={() => setIsDeleteNoteModalOpen(false)}
                  className="px-5 py-2.5 rounded-lg text-[13px] font-medium text-slate-300 hover:text-white border border-slate-700 hover:bg-slate-800 transition-colors w-full"
                >
                  Cancel
                </button>
                <button 
                  onClick={handleDeleteNote}
                  className="px-5 py-2.5 bg-purple-600 hover:bg-purple-500 text-white rounded-lg text-[13px] font-medium transition-colors shadow-[0_0_15px_rgba(147,51,234,0.3)] hover:shadow-[0_0_20px_rgba(147,51,234,0.5)] w-full"
                >
                  Continue
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Send Email Note Modal */}
      {isSendEmailNoteModalOpen && sendingEmailNote && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setIsSendEmailNoteModalOpen(false)}></div>
          
          <div className="relative bg-slate-900 border border-slate-700 rounded-xl shadow-2xl w-full max-w-2xl flex flex-col animate-in fade-in zoom-in-95 duration-200">
            <div className="flex items-center justify-between p-5 border-b border-slate-800 bg-slate-800/50 rounded-t-xl">
              <h2 className="text-xl font-bold text-white">Send email</h2>
              <button 
                onClick={() => setIsSendEmailNoteModalOpen(false)}
                className="w-8 h-8 flex items-center justify-center rounded-lg text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="p-6 space-y-4">
              <div>
                <label className="block text-[13px] font-medium text-slate-300 mb-1.5">To*</label>
                <input 
                  type="email" 
                  value={emailForm.to}
                  onChange={(e) => setEmailForm({...emailForm, to: e.target.value})}
                  className="w-full px-4 py-2.5 bg-slate-900/50 border border-slate-700 rounded-lg text-[13px] text-white focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/50 transition-all"
                />
              </div>
              
              <div>
                <label className="block text-[13px] font-medium text-slate-300 mb-1.5">Subject*</label>
                <input 
                  type="text" 
                  value={emailForm.subject}
                  onChange={(e) => setEmailForm({...emailForm, subject: e.target.value})}
                  className="w-full px-4 py-2.5 bg-slate-900/50 border border-slate-700 rounded-lg text-[13px] text-white focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/50 transition-all"
                />
              </div>
              
              <div>
                <div className="border border-slate-700 rounded-lg bg-slate-900/50 overflow-hidden focus-within:border-purple-500/50 focus-within:ring-1 focus-within:ring-purple-500/50 transition-all">
                  <div className="flex items-center gap-1 border-b border-slate-700 p-2 bg-slate-800/50 overflow-x-auto custom-scrollbar">
                    <button className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-700 rounded transition-colors"><span className="font-bold text-[13px] px-1">B</span></button>
                    <button className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-700 rounded transition-colors"><span className="italic text-[13px] px-1">I</span></button>
                    <button className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-700 rounded transition-colors"><span className="underline text-[13px] px-1">U</span></button>
                    <div className="w-[1px] h-4 bg-slate-700 mx-1"></div>
                    <button className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-700 rounded transition-colors"><svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></button>
                  </div>
                  <div className="p-4 bg-slate-800/30">
                    <p className="text-[13px] text-slate-300 mb-4">Hi [EmployeeName],</p>
                    <p className="text-[13px] text-slate-300 mb-4">A note has been created under {sendingEmailNote.title}.</p>
                    <p className="text-[13px] text-slate-300 mb-1">Note:</p>
                    <textarea 
                      value={emailForm.message}
                      onChange={(e) => setEmailForm({...emailForm, message: e.target.value})}
                      className="w-full min-h-[100px] resize-none focus:outline-none text-[13px] text-white bg-transparent"
                    ></textarea>
                  </div>
                </div>
              </div>
              
              <div>
                <label className="block text-[13px] font-medium text-slate-300 mb-1.5">From*</label>
                <select className="w-full px-4 py-2.5 bg-slate-900/50 border border-slate-700 rounded-lg text-[13px] text-slate-300 focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/50 transition-all outline-none">
                  <option>Staging Pink Gorilla (vikas@pinkgorillasoftware.com)</option>
                </select>
              </div>
            </div>
            
            <div className="p-5 border-t border-slate-800 bg-slate-800/30 flex justify-end gap-3 rounded-b-xl">
              <button 
                onClick={() => setIsSendEmailNoteModalOpen(false)}
                className="px-5 py-2 rounded-lg text-[13px] font-medium text-slate-300 hover:text-white border border-slate-700 hover:bg-slate-800 transition-colors"
              >
                Close
              </button>
              <button 
                onClick={handleSendEmailNote}
                disabled={!emailForm.to || !emailForm.subject || !emailForm.message}
                className="px-6 py-2 bg-purple-600 hover:bg-purple-500 disabled:opacity-50 disabled:hover:bg-purple-600 text-white rounded-lg text-[13px] font-medium transition-colors shadow-[0_0_15px_rgba(147,51,234,0.3)] hover:shadow-[0_0_20px_rgba(147,51,234,0.4)]"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Delete Sample Modal */}
      {isDeleteSampleModalOpen && deletingSample && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setIsDeleteSampleModalOpen(false)}></div>
          
          <div className="relative bg-slate-900 border border-slate-700 rounded-xl shadow-2xl w-full max-w-sm flex flex-col animate-in fade-in zoom-in-95 duration-200">
            <div className="p-6 text-center">
              <div className="w-16 h-16 rounded-full bg-rose-500/10 flex items-center justify-center mx-auto mb-4 border border-rose-500/20">
                <Trash2 className="w-8 h-8 text-rose-500" />
              </div>
              <h2 className="text-xl font-bold text-white mb-2">Delete Sample</h2>
              <p className="text-[14px] text-slate-300 mb-6">
                Are you sure you want to delete this {deletingSample.type.toLowerCase()} sample?
              </p>
              
              <div className="flex justify-center gap-3">
                <button 
                  onClick={() => setIsDeleteSampleModalOpen(false)}
                  className="px-5 py-2.5 rounded-lg text-[13px] font-medium text-slate-300 hover:text-white border border-slate-700 hover:bg-slate-800 transition-colors w-full"
                >
                  Cancel
                </button>
                <button 
                  onClick={handleDeleteSample}
                  className="px-5 py-2.5 bg-rose-600 hover:bg-rose-500 text-white rounded-lg text-[13px] font-medium transition-colors shadow-[0_0_15px_rgba(225,29,72,0.3)] w-full"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Generate Website Modal */}
      {isGenerateWebsiteModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setIsGenerateWebsiteModalOpen(false)}></div>
          
          <div className="relative bg-slate-900 border border-slate-700 rounded-xl shadow-2xl w-full max-w-4xl flex flex-col animate-in fade-in zoom-in-95 duration-200">
            <div className="flex items-center justify-between p-5 border-b border-slate-800 bg-slate-800/50 rounded-t-xl">
              <h2 className="text-xl font-bold text-white">Create Website</h2>
              <button 
                onClick={() => setIsGenerateWebsiteModalOpen(false)}
                className="w-8 h-8 flex items-center justify-center rounded-lg text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-5">
                <div>
                  <label className="block text-[13px] font-medium text-slate-300 mb-1.5">Subdomain*</label>
                  <div className="flex">
                    <input 
                      type="text" 
                      placeholder="app"
                      value={newWebsiteSample.subdomain}
                      onChange={(e) => setNewWebsiteSample({...newWebsiteSample, subdomain: e.target.value})}
                      className="w-full px-4 py-2.5 bg-slate-900/50 border border-slate-700 rounded-l-lg text-[13px] text-white focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/50 transition-all border-r-0"
                    />
                    <div className="px-4 py-2.5 bg-slate-800 border border-slate-700 rounded-r-lg text-[13px] text-slate-400 flex items-center">
                      pinkgorillasoftware.com
                    </div>
                  </div>
                </div>
                
                <div>
                  <label className="block text-[13px] font-medium text-slate-300 mb-1.5">Logo (PNG/JPG)</label>
                  <div className="flex items-center gap-3 w-full px-4 py-2 bg-slate-900/50 border border-slate-700 rounded-lg text-[13px] text-slate-400 relative overflow-hidden group">
                    <input 
                      type="file" 
                      accept=".png,.jpg,.jpeg"
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                      onChange={(e) => {
                        const file = e.target.files?.[0];
                        if (file) {
                          if (file.size > 5 * 1024 * 1024) {
                            alert("File size must be less than 5MB");
                            return;
                          }
                          setNewWebsiteSample({...newWebsiteSample, logoFileName: file.name});
                        }
                      }}
                    />
                    <button type="button" className="px-3 py-1 bg-slate-800 group-hover:bg-slate-700 border border-slate-600 rounded text-slate-300 transition-colors pointer-events-none relative z-0">
                      Choose file
                    </button>
                    <span className="truncate relative z-0">{newWebsiteSample.logoFileName || 'No file chosen'}</span>
                  </div>
                </div>
                
                <div>
                  <label className="block text-[13px] font-medium text-slate-300 mb-1.5">Template*</label>
                  <select 
                    value={newWebsiteSample.template}
                    onChange={(e) => setNewWebsiteSample({...newWebsiteSample, template: e.target.value})}
                    className="w-full px-4 py-2.5 bg-slate-900/50 border border-slate-700 rounded-lg text-[13px] text-white focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/50 transition-all outline-none appearance-none"
                  >
                    <option value="Accountant1">Accountant1</option>
                    <option value="Agency1">Agency1</option>
                    <option value="Plumber1">Plumber1</option>
                  </select>
                </div>
              </div>

              {/* Template Preview Section */}
              <div className="border border-slate-700 rounded-lg overflow-hidden flex flex-col bg-slate-800/30">
                <div className="flex-1 bg-slate-900/80 p-4 relative flex items-center justify-center min-h-[250px]">
                  <div className="w-full h-full bg-slate-800 rounded border border-slate-700 shadow-inner flex flex-col overflow-hidden">
                    {/* Mock Website Preview */}
                    <div className="h-6 border-b border-slate-700 bg-slate-800/80 flex items-center px-2 gap-1.5">
                      <div className="w-2 h-2 rounded-full bg-slate-600"></div>
                      <div className="w-2 h-2 rounded-full bg-slate-600"></div>
                      <div className="w-2 h-2 rounded-full bg-slate-600"></div>
                    </div>
                    <div className="flex-1 p-4 bg-white relative overflow-hidden">
                      <div className="flex justify-between items-center mb-4">
                        <div className="w-16 h-4 bg-blue-600 rounded"></div>
                        <div className="flex gap-2">
                          <div className="w-8 h-2 bg-slate-200 rounded"></div>
                          <div className="w-8 h-2 bg-slate-200 rounded"></div>
                          <div className="w-8 h-2 bg-slate-200 rounded"></div>
                        </div>
                      </div>
                      <div className="flex gap-4">
                        <div className="w-1/2 space-y-2 pt-2">
                          <div className="w-3/4 h-5 bg-slate-800 rounded"></div>
                          <div className="w-full h-5 bg-slate-800 rounded mb-4"></div>
                          <div className="w-full h-2 bg-slate-300 rounded"></div>
                          <div className="w-5/6 h-2 bg-slate-300 rounded"></div>
                          <div className="w-4/6 h-2 bg-slate-300 rounded"></div>
                          <div className="pt-2 flex gap-2">
                            <div className="w-20 h-6 bg-blue-600 rounded"></div>
                            <div className="w-20 h-6 border border-slate-300 rounded"></div>
                          </div>
                        </div>
                        <div className="w-1/2 h-32 bg-slate-200 rounded flex items-center justify-center">
                          <svg className="w-8 h-8 text-slate-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>
                        </div>
                      </div>
                      <div className="absolute right-1 top-6 bottom-1 w-1.5 bg-slate-200 rounded-full">
                        <div className="w-full h-8 bg-slate-400 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-3 bg-slate-800 text-center border-t border-slate-700 text-[13px] text-slate-300 font-medium flex justify-center items-center gap-2">
                  Template Preview
                  <ChevronDown className="w-4 h-4 text-slate-500" />
                </div>
              </div>
            </div>
            
            <div className="p-5 border-t border-slate-800 bg-slate-800/30 flex justify-end gap-3 rounded-b-xl">
              <button 
                onClick={() => setIsGenerateWebsiteModalOpen(false)}
                className="px-5 py-2 rounded-lg text-[13px] font-medium text-slate-300 hover:text-white border border-slate-700 hover:bg-slate-800 transition-colors"
              >
                Close
              </button>
              <button 
                onClick={handleGenerateWebsite}
                disabled={!newWebsiteSample.subdomain}
                className="px-6 py-2 bg-purple-600 hover:bg-purple-500 disabled:opacity-50 disabled:hover:bg-purple-600 text-white rounded-lg text-[13px] font-medium transition-colors shadow-[0_0_15px_rgba(147,51,234,0.3)] hover:shadow-[0_0_20px_rgba(147,51,234,0.4)]"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Add Logo Sample Modal */}
      {isAddLogoModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setIsAddLogoModalOpen(false)}></div>
          
          <div className="relative bg-slate-900 border border-slate-700 rounded-xl shadow-2xl w-full max-w-2xl flex flex-col animate-in fade-in zoom-in-95 duration-200">
            <div className="flex items-center justify-between p-5 border-b border-slate-800 bg-slate-800/50 rounded-t-xl">
              <h2 className="text-xl font-bold text-white">Add Logo Sample</h2>
              <button 
                onClick={() => setIsAddLogoModalOpen(false)}
                className="w-8 h-8 flex items-center justify-center rounded-lg text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="p-6 space-y-5">
              <div>
                <label className="block text-[13px] font-medium text-slate-300 mb-1.5">Title*</label>
                <input 
                  type="text" 
                  placeholder="Sample"
                  value={newLogoSample.title}
                  onChange={(e) => setNewLogoSample({...newLogoSample, title: e.target.value})}
                  className="w-full px-4 py-2.5 bg-slate-900/50 border border-slate-700 rounded-lg text-[13px] text-white focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/50 transition-all placeholder:text-slate-500"
                />
              </div>
              
              <div className="border-2 border-dashed border-slate-700 hover:border-purple-500/50 rounded-xl p-12 flex flex-col items-center justify-center text-center transition-colors cursor-pointer bg-slate-800/20 hover:bg-slate-800/40 relative">
                <input 
                  type="file" 
                  accept=".png,.jpg,.jpeg,.svg"
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (file) {
                      if (file.size > 5 * 1024 * 1024) {
                        alert("File size must be less than 5MB");
                        return;
                      }
                      setNewLogoSample({...newLogoSample, logoFileName: file.name});
                    }
                  }}
                />
                <div className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center mb-3">
                  <svg className="w-6 h-6 text-slate-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" y1="3" x2="12" y2="15"></line></svg>
                </div>
                {newLogoSample.logoFileName ? (
                  <>
                    <p className="text-[14px] text-purple-400 font-medium break-all max-w-[200px] truncate">{newLogoSample.logoFileName}</p>
                    <p className="text-[12px] text-slate-500 mt-1">Click to change file</p>
                  </>
                ) : (
                  <>
                    <p className="text-[14px] text-slate-300 font-medium">Drop files here or click to upload</p>
                    <p className="text-[12px] text-slate-500 mt-1">PNG, JPG, SVG up to 5MB</p>
                  </>
                )}
              </div>
            </div>
            
            <div className="p-5 border-t border-slate-800 bg-slate-800/30 flex justify-end gap-3 rounded-b-xl">
              <button 
                onClick={() => setIsAddLogoModalOpen(false)}
                className="px-5 py-2 rounded-lg text-[13px] font-medium text-slate-300 hover:text-white border border-slate-700 hover:bg-slate-800 transition-colors"
              >
                Close
              </button>
              <button 
                onClick={handleAddLogo}
                disabled={!newLogoSample.title}
                className="px-6 py-2 bg-purple-600 hover:bg-purple-500 disabled:opacity-50 disabled:hover:bg-purple-600 text-white rounded-lg text-[13px] font-medium transition-colors shadow-[0_0_15px_rgba(147,51,234,0.3)] hover:shadow-[0_0_20px_rgba(147,51,234,0.4)]"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Edit Background Modal */}
      {isEditBackgroundModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setIsEditBackgroundModalOpen(false)}></div>
          
          <div className="relative bg-slate-900 border border-slate-700 rounded-xl shadow-2xl w-full max-w-2xl flex flex-col animate-in fade-in zoom-in-95 duration-200">
            {/* Header */}
            <div className="flex items-center justify-between p-5 border-b border-slate-800 bg-slate-800/50 rounded-t-xl">
              <h2 className="text-lg font-semibold text-white">Edit Background</h2>
              <button 
                onClick={() => setIsEditBackgroundModalOpen(false)}
                className="w-8 h-8 flex items-center justify-center rounded-lg text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            {/* Body */}
            <div className="p-6">
              <div className="mb-4">
                <label className="block text-[13px] font-medium text-slate-300 mb-2">Background</label>
                
                {/* Mock Rich Text Editor */}
                <div className="border border-slate-700 rounded-lg overflow-hidden bg-slate-900/50">
                  {/* Toolbar */}
                  <div className="flex flex-wrap items-center gap-1 p-2 border-b border-slate-700 bg-slate-800/50 text-slate-400">
                    <button className="p-1.5 hover:bg-slate-700 hover:text-white rounded transition-colors"><span className="font-bold font-serif px-1">B</span></button>
                    <button className="p-1.5 hover:bg-slate-700 hover:text-white rounded transition-colors"><svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg></button>
                    <div className="w-[1px] h-4 bg-slate-700 mx-1"></div>
                    <button className="p-1.5 hover:bg-slate-700 hover:text-white rounded transition-colors"><svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3.01" y2="6"></line><line x1="3" y1="12" x2="3.01" y2="12"></line><line x1="3" y1="18" x2="3.01" y2="18"></line></svg></button>
                    <button className="p-1.5 hover:bg-slate-700 hover:text-white rounded transition-colors"><svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="10" y1="6" x2="21" y2="6"></line><line x1="10" y1="12" x2="21" y2="12"></line><line x1="10" y1="18" x2="21" y2="18"></line><polyline points="3 6 4 7 6 5"></polyline><polyline points="3 12 4 13 6 11"></polyline><polyline points="3 18 4 19 6 17"></polyline></svg></button>
                    <div className="w-[1px] h-4 bg-slate-700 mx-1"></div>
                    <button className="p-1.5 hover:bg-slate-700 hover:text-white rounded transition-colors"><svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg></button>
                    <button className="p-1.5 hover:bg-slate-700 hover:text-white rounded transition-colors"><svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="23 7 16 12 23 17 23 7"></polygon><rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect></svg></button>
                    <div className="w-[1px] h-4 bg-slate-700 mx-1"></div>
                    <button className="p-1.5 hover:bg-slate-700 hover:text-white rounded transition-colors"><svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="21" y1="6" x2="3" y2="6"></line><line x1="15" y1="12" x2="3" y2="12"></line><line x1="17" y1="18" x2="3" y2="18"></line></svg></button>
                    <button className="p-1.5 hover:bg-slate-700 hover:text-white rounded transition-colors"><svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="21" y1="6" x2="3" y2="6"></line><line x1="21" y1="12" x2="3" y2="12"></line><line x1="21" y1="18" x2="3" y2="18"></line></svg></button>
                    <button className="p-1.5 hover:bg-slate-700 hover:text-white rounded transition-colors"><svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="21" y1="6" x2="3" y2="6"></line><line x1="19" y1="12" x2="5" y2="12"></line><line x1="21" y1="18" x2="3" y2="18"></line></svg></button>
                    <button className="p-1.5 hover:bg-slate-700 hover:text-white rounded transition-colors"><svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="21" y1="6" x2="9" y2="6"></line><line x1="21" y1="12" x2="3" y2="12"></line><line x1="21" y1="18" x2="9" y2="18"></line></svg></button>
                    <div className="w-[1px] h-4 bg-slate-700 mx-1"></div>
                    <button className="p-1.5 hover:bg-slate-700 hover:text-white rounded transition-colors"><svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"></line></svg></button>
                    <button className="p-1.5 hover:bg-slate-700 hover:text-white rounded transition-colors"><svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></svg></button>
                    <div className="w-[1px] h-4 bg-slate-700 mx-1"></div>
                    <button className="p-1.5 hover:bg-slate-700 hover:text-white rounded transition-colors"><svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg></button>
                    <button className="p-1.5 hover:bg-slate-700 hover:text-white rounded transition-colors"><svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" y1="3" x2="14" y2="10"></line><line x1="3" y1="21" x2="10" y2="14"></line></svg></button>
                  </div>
                  
                  {/* Editor Area */}
                  <div className="p-3 bg-slate-800/30">
                    <textarea 
                      defaultValue="https://www.yelp.com/biz/luciene-santanna-takagi-psyd-newark?osq=Psychologists"
                      className="w-full h-48 bg-slate-800/50 border border-slate-700/50 rounded p-4 text-[13px] text-slate-300 focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/50 resize-none custom-scrollbar"
                    ></textarea>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Footer */}
            <div className="p-5 border-t border-slate-800 bg-slate-800/30 flex justify-end gap-3 rounded-b-xl">
              <button 
                onClick={() => setIsEditBackgroundModalOpen(false)}
                className="px-5 py-2 rounded-lg text-[13px] font-medium text-slate-300 hover:text-white border border-slate-700 hover:bg-slate-800 transition-colors"
              >
                Close
              </button>
              <button 
                onClick={() => setIsEditBackgroundModalOpen(false)}
                className="px-5 py-2 bg-purple-600 hover:bg-purple-500 text-white rounded-lg text-[13px] font-medium transition-colors shadow-[0_0_15px_rgba(147,51,234,0.3)]"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Analytics Modal */}
      {isAnalyticsModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setIsAnalyticsModalOpen(false)}></div>
          
          <div className="relative bg-slate-900 border border-slate-700 rounded-xl shadow-2xl w-full max-w-2xl animate-in fade-in zoom-in-95 duration-200">
            {/* Header */}
            <div className="flex items-center justify-between p-5 border-b border-slate-800 bg-slate-800/50 rounded-t-xl">
              <h2 className="text-lg font-semibold text-white">Configure Google Analytics</h2>
              <button 
                onClick={() => setIsAnalyticsModalOpen(false)}
                className="w-8 h-8 flex items-center justify-center rounded-lg text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            {/* Body */}
            <div className="p-6 space-y-6">
              {/* Info Banner */}
              <div className="flex items-start gap-3 p-4 bg-indigo-500/10 border border-indigo-500/20 rounded-lg">
                <Info className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
                <div className="flex-1">
                  <p className="text-[13px] text-indigo-200/90 leading-relaxed">
                    <strong className="text-indigo-300 font-semibold">Setup Instructions:</strong> Follow the step-by-step guide to configure Google Analytics. You need to provide your GA4 Property ID and upload your Google Cloud Service Account credentials file.
                  </p>
                </div>
                <div className="flex gap-2 shrink-0">
                  <button className="w-7 h-7 flex items-center justify-center rounded border border-indigo-500/30 text-indigo-400 hover:bg-indigo-500/20 transition-colors">
                    <Eye className="w-3.5 h-3.5" />
                  </button>
                  <button className="w-7 h-7 flex items-center justify-center rounded border border-indigo-500/30 text-indigo-400 hover:bg-indigo-500/20 transition-colors">
                    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                  </button>
                </div>
              </div>

              {/* Form Fields */}
              <div className="space-y-5">
                <div>
                  <label className="block text-[13px] font-medium text-slate-200 mb-1.5">
                    GA4 Property ID <span className="text-rose-500">*</span>
                  </label>
                  <input 
                    type="text" 
                    placeholder="123456789" 
                    className="w-full px-3 py-2.5 bg-slate-900/80 border border-slate-700 rounded-lg text-[13px] text-white focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/50 transition-all placeholder:text-slate-600"
                  />
                  <p className="text-[12px] text-slate-400 mt-2 leading-relaxed">
                    Your Google Analytics 4 Property ID (numbers only). Get this from: Google Analytics &rarr; Admin &rarr; Property Settings
                  </p>
                </div>

                <div>
                  <label className="block text-[13px] font-medium text-slate-200 mb-1.5">
                    Google Analytics Credentials (JSON) <span className="text-slate-400 font-normal">(Optional - for API access)</span>
                  </label>
                  <div className="flex gap-0">
                    <label className="px-4 py-2.5 bg-slate-800 border border-slate-700 rounded-l-lg text-[13px] text-white hover:bg-slate-700 transition-colors cursor-pointer shrink-0">
                      Choose file
                      <input type="file" className="hidden" accept=".json" />
                    </label>
                    <div className="flex-1 px-3 py-2.5 bg-slate-900/80 border border-l-0 border-slate-700 rounded-r-lg text-[13px] text-slate-500 flex items-center">
                      No file chosen
                    </div>
                  </div>
                  <div className="text-[12px] text-slate-400 mt-2 leading-relaxed space-y-1">
                    <p><strong className="text-slate-300 font-medium">Upload your Google Cloud Service Account JSON file.</strong></p>
                    <p>This file enables the dashboard to display real analytics data from Google Analytics API.</p>
                    <p><strong className="text-slate-300 font-medium">How to get:</strong> Google Cloud Console &rarr; Service Account &rarr; Create Key (JSON format)</p>
                  </div>
                </div>
              </div>

              {/* Security Banner */}
              <div className="flex items-center gap-2 p-3.5 bg-amber-500/10 border border-amber-500/20 rounded-lg mt-6">
                <svg className="w-4 h-4 text-amber-500 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                  <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                </svg>
                <p className="text-[13px] text-amber-200/90">
                  <strong className="text-amber-500 font-medium">Security Note:</strong> Your credentials file is stored securely and is only accessible by your account.
                </p>
              </div>
            </div>
            
            {/* Footer */}
            <div className="flex items-center justify-end gap-3 p-5 border-t border-slate-800 bg-slate-800/30 rounded-b-xl">
              <button 
                onClick={() => setIsAnalyticsModalOpen(false)}
                className="px-5 py-2 rounded-lg text-[13px] font-medium text-slate-300 hover:text-white hover:bg-slate-700 transition-colors border border-slate-700 bg-slate-800"
              >
                Close
              </button>
              <button 
                onClick={() => setIsAnalyticsModalOpen(false)}
                className="px-5 py-2 rounded-lg text-[13px] font-medium bg-purple-600 hover:bg-purple-500 text-white shadow-[0_0_15px_rgba(147,51,234,0.3)] transition-all"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
      {/* Choose Plan Modal */}
      {isChoosePlanModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setIsChoosePlanModalOpen(false)}></div>
          
          <div className="relative bg-slate-900 border border-slate-700 rounded-xl shadow-2xl w-full max-w-5xl max-h-[90vh] flex flex-col animate-in fade-in zoom-in-95 duration-200">
            {/* Header */}
            <div className="flex items-center justify-between p-5 border-b border-slate-800 bg-slate-800/50 rounded-t-xl">
              <div className="flex items-center gap-3">
                {selectedPlanTab === 'checkout' && (
                  <button 
                    onClick={() => setSelectedPlanTab('plans')}
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
                  </button>
                )}
                <h2 className="text-lg font-semibold text-white">Choose Plan</h2>
              </div>
              <button 
                onClick={() => setIsChoosePlanModalOpen(false)}
                className="w-8 h-8 flex items-center justify-center rounded-lg text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            {/* Body */}
            <div className="p-6 overflow-y-auto custom-scrollbar flex-1">
              {selectedPlanTab === 'plans' ? (
                <div className="flex flex-col h-full">
                  <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 flex-1">
                    {plans.map((plan, idx) => (
                      <div key={idx} className="bg-slate-800/30 border border-slate-700/50 rounded-xl p-5 flex flex-col h-full shadow-sm hover:border-slate-600 transition-colors group">
                        <div className="mb-4">
                          <h3 className="text-[15px] font-medium text-white mb-2">{plan.name}</h3>
                          <div className="flex items-baseline gap-1">
                            <span className="text-2xl font-bold text-white">{plan.price}</span>
                          </div>
                          {plan.period && <p className="text-[12px] text-slate-400 mb-4">{plan.period}</p>}
                          {!plan.period && <p className="text-[12px] text-transparent mb-4 select-none">Spacer</p>}
                          
                          <div className="bg-slate-800/50 rounded p-2 mb-4 border border-slate-700/50">
                            <p className="text-[11px] text-slate-300">
                              <span className="text-slate-500">Launch Cost Est.</span> <span className="text-indigo-400">{plan.launchCost}</span> | {plan.launchTime}
                            </p>
                          </div>
                          
                          <button 
                            onClick={() => handleChoosePlan(plan)}
                            className="w-full py-2.5 bg-purple-600 hover:bg-purple-500 text-white rounded-lg text-[13px] font-medium transition-colors shadow-[0_0_15px_rgba(147,51,234,0.3)]"
                          >
                            {plan.buttonText}
                          </button>
                        </div>
                        
                        <div className="flex-1 space-y-3 mb-6">
                          {(expandedPlans[plan.name] ? plan.features : plan.features.slice(0, 5)).map((feature, i) => (
                            <div key={i} className={`flex items-start gap-2 ${i >= 5 ? 'animate-in fade-in slide-in-from-top-1 duration-300' : ''}`}>
                              <div className="w-4 h-4 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center shrink-0 mt-0.5">
                                <svg className="w-2.5 h-2.5 text-emerald-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M20 6L9 17l-5-5"/></svg>
                              </div>
                              <span className="text-[12px] text-slate-300 leading-tight">{feature}</span>
                            </div>
                          ))}
                        </div>
                        
                        {plan.features.length > 5 && (
                          <div className="mt-auto pt-4 border-t border-slate-700/50 text-center">
                            <button 
                              onClick={() => togglePlanExpansion(plan.name)}
                              className="text-[12px] text-indigo-400 hover:text-indigo-300 font-medium underline decoration-indigo-400/30 underline-offset-2"
                            >
                              {expandedPlans[plan.name] ? 'Read less' : 'Read more'}
                            </button>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                  
                  {/* Footer for Plans Tab */}
                  <div className="flex items-center justify-between mt-6 pt-5 border-t border-slate-800">
                    <p className="text-[13px] text-slate-400">Not sure which plan is right for you? Contact our support team.</p>
                    <button 
                      onClick={() => {
                        setIsChoosePlanModalOpen(false);
                        setLocation('/contracts');
                      }}
                      className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 rounded-lg text-[13px] font-medium transition-colors flex items-center gap-1.5"
                    >
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
                      View Agreement Details
                    </button>
                  </div>
                </div>
              ) : (
                <div className="max-w-2xl mx-auto bg-slate-800/30 border border-slate-700/50 rounded-xl p-6 shadow-sm">
                  <div className="flex flex-col md:flex-row justify-between md:items-center gap-6 border-b border-slate-700/50 pb-6 mb-6">
                    <div>
                      <h3 className="text-lg font-medium text-white mb-1">{selectedPlan?.name} Plan</h3>
                      <div className="flex items-baseline gap-1 mb-2">
                        <span className="text-2xl font-bold text-white">{selectedPlan?.price}</span>
                        {selectedPlan?.period && <span className="text-sm text-slate-400">/ {selectedPlan?.period.toLowerCase().replace('per ', '')}</span>}
                      </div>
                      <p className="text-[13px] text-slate-400">( Launch Cost Est. <span className="text-indigo-400">{selectedPlan?.launchCost}</span> | {selectedPlan?.launchTime} )</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4 mb-8">
                    <div className="flex justify-between items-center pb-4 border-b border-slate-700/50">
                      <span className="text-[14px] text-slate-300">Subscription Total</span>
                      <span className="text-[14px] text-white font-medium">{selectedPlan?.price} {selectedPlan?.period ? `/ ${selectedPlan?.period.toLowerCase().replace('per ', '')}` : ''}</span>
                    </div>
                    <div className="flex justify-between items-center pb-4 border-b border-slate-700/50">
                      <span className="text-[14px] text-slate-300">OneTime Total</span>
                      <span className="text-[14px] text-white font-medium">{selectedPlan?.launchCost}</span>
                    </div>
                    <div className="flex justify-between items-center pt-2">
                      <span className="text-[16px] font-medium text-white">Total</span>
                      <span className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
                        {selectedPlan?.price === 'Pay as you go' ? selectedPlan?.launchCost : `$${(parseInt(selectedPlan?.price.replace(/[^0-9]/g, '') || '0') + parseInt(selectedPlan?.launchCost.replace(/[^0-9]/g, '') || '0')).toLocaleString()}`}
                      </span>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center pt-4 border-t border-slate-700/50">
                    <button 
                      onClick={() => {
                        setIsChoosePlanModalOpen(false);
                        setLocation('/contracts');
                      }}
                      className="text-[13px] text-indigo-400 hover:text-indigo-300 font-medium underline decoration-indigo-400/30 underline-offset-2 flex items-center gap-1.5"
                    >
                      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
                      View Agreement
                    </button>
                    <button 
                      onClick={() => setIsChoosePlanModalOpen(false)}
                      className="px-6 py-2.5 bg-purple-600 hover:bg-purple-500 text-white rounded-lg text-[13px] font-medium transition-colors shadow-[0_0_15px_rgba(147,51,234,0.3)]"
                    >
                      Pay & Upgrade
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}