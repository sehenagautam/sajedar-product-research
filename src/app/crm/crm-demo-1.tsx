// @ts-nocheck
'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import {
    Users,
    ShoppingBag,
    TrendingUp,
    DollarSign,
    Search,
    Bell,
    LayoutDashboard,
    Target,
    LifeBuoy,
    MessageSquare,
    Activity,
    ArrowUpRight,
    ArrowDownRight,
    MoreHorizontal,
    Mail,
    CheckCircle2,
    AlertCircle,
    Filter,
    ChevronDown,
    BarChart3,
    Smartphone,
    Video,
    Hash,
    Instagram,
    Heart,
    Package,
    RefreshCw,
    PlayCircle,
    Camera,
    Menu,
    X,
    Send,
    Paperclip,
    Smile,
    Clock,
    Info,
    MoreVertical,
    Bot,
    Download,
    Loader2,
    Plus,
    PauseCircle,
    Play
} from 'lucide-react';

// --- MOCK DATA ---

const execStats = [
    { id: 1, name: 'Total GMV (30d)', value: 'Rs 842K', change: '+24.5%', trend: 'up', icon: DollarSign, color: 'from-emerald-400 to-emerald-600' },
    { id: 2, name: 'Blended ROAS', value: '3.8x', change: '+0.4x', trend: 'up', icon: TrendingUp, color: 'from-violet-400 to-violet-600' },
    { id: 3, name: 'Blended CPA', value: 'Rs 18.50', change: '-Rs 2.10', trend: 'up', icon: Target, color: 'from-indigo-400 to-indigo-600' },
    { id: 4, name: 'Repeat Cust. Rate', value: '32.4%', change: '+5.2%', trend: 'up', icon: RefreshCw, color: 'from-orange-400 to-orange-500' },
];

const revenueChart = [245, 280, 310, 290, 410, 550, 680, 720, 842];
const spendChart = [100, 110, 125, 120, 150, 190, 210, 230, 250];

const initialCreatorData = {
    sourcing: [
        { id: 'C1', handle: '@viral.skincare', platform: 'TikTok', followers: '1.2M', status: 'Evaluating fit' },
        { id: 'C2', handle: '@glow.by.jess', platform: 'Instagram', followers: '450K', status: 'Sent DM' },
    ],
    outreach: [
        { id: 'C3', handle: '@makeup.hacks', platform: 'TikTok', followers: '890K', status: 'Negotiating rate' },
    ],
    shipped: [
        { id: 'C5', handle: '@chloe.styles', platform: 'Instagram', followers: '120K', status: 'Delivered (2d ago)' },
    ],
    live: [
        { id: 'C7', handle: '@beauty.unboxed', platform: 'TikTok', followers: '2.8M', status: '1.4M Views' },
    ]
};

const initialAdCampaigns = [
    { id: 1, name: 'TikTok Broad - UGC compilation', platform: 'TikTok', status: 'Scaling', spend: 'Rs 12,450', roas: '4.2x', cpa: 'Rs 14.20', health: 95, isPaused: false },
    { id: 2, name: 'IG Reels - Product Demo', platform: 'Meta', status: 'Testing', spend: 'Rs 1,200', roas: '2.1x', cpa: 'Rs 28.50', health: 45, isPaused: false },
    { id: 3, name: 'Retargeting - Cart Abandoners', platform: 'Meta', status: 'Stable', spend: 'Rs 4,800', roas: '6.8x', cpa: 'Rs 8.50', health: 88, isPaused: false },
    { id: 4, name: 'TikTok Spark Ads - @viral.skincare', platform: 'TikTok', status: 'Fatigued', spend: 'Rs 8,900', roas: '1.5x', cpa: 'Rs 35.00', health: 20, isPaused: false },
];

const initialChatConversations = [
    {
        id: 'CX-992',
        user: '@angry.buyer99',
        avatar: 'bg-orange-100 text-orange-600',
        initials: 'AB',
        channel: 'TikTok Comment',
        platform: 'TikTok',
        status: 'Open',
        time: '10m ago',
        unread: 2,
        messages: [
            { id: 1, sender: 'user', text: 'Where is my order?? Ordered 2 weeks ago!', time: '10:42 AM' },
            { id: 2, sender: 'ai', text: 'Hi AB! I checked your order #ORD-1092 and it is currently delayed in transit. It should arrive by Friday. Apologies for the wait!', time: '10:42 AM' },
            { id: 3, sender: 'user', text: 'I need this for a party this weekend. Please respond!', time: '10:43 AM' }
        ],
        customer: { ltv: 'Rs 45.00', orders: 1, segment: 'First-Time Buyer', email: 'No email found' }
    },
    {
        id: 'CX-991',
        user: 'Jessica M.',
        avatar: 'bg-indigo-100 text-indigo-600',
        initials: 'JM',
        channel: 'Email',
        platform: 'Email',
        status: 'In Progress',
        time: '1h ago',
        unread: 0,
        messages: [
            { id: 1, sender: 'user', text: 'Hi, I received the wrong shade of gloss. I ordered Cherry but got Peach.', time: '9:15 AM' },
            { id: 2, sender: 'ai', text: 'Oh no, sorry about that mix-up! Would you like me to process a replacement for the Cherry gloss right away?', time: '9:16 AM' },
            { id: 3, sender: 'agent', text: 'Hi Jessica! So sorry about that mix-up. I\'m sending out a replacement Cherry gloss today via priority shipping.', time: '9:45 AM' },
            { id: 4, sender: 'user', text: 'Thank you so much! Do I need to return the peach one?', time: '9:50 AM' }
        ],
        customer: { ltv: 'Rs 340.00', orders: 4, segment: 'Loyal Customer', email: 'jessica.m@email.com' }
    }
];

// --- REUSABLE COMPONENTS ---

const Modal = ({ isOpen, onClose, title, children }) => {
    if (!isOpen) return null;
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-0">
            <div className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm transition-opacity" onClick={onClose}></div>
            <div className="relative bg-white rounded-3xl w-full max-w-md sm:max-w-lg shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200">
                <div className="px-6 py-4 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
                    <h3 className="font-black text-slate-800 text-lg">{title}</h3>
                    <button onClick={onClose} className="p-2 text-slate-400 hover:bg-slate-200 hover:text-slate-600 rounded-full transition-colors">
                        <X className="w-5 h-5" />
                    </button>
                </div>
                <div className="p-6">
                    {children}
                </div>
            </div>
        </div>
    );
};

const StatCard = ({ stat }) => {
    const Icon = stat.icon;
    return (
        <div className="bg-white rounded-3xl border border-slate-100 p-6 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.03)] hover:shadow-lg transition-all duration-300 relative overflow-hidden group">
            <div className={`absolute -right-8 -top-8 w-32 h-32 bg-gradient-to-br ${stat.color} opacity-10 rounded-full blur-2xl group-hover:opacity-20 transition-opacity duration-500`}></div>
            <div className="flex items-center justify-between mb-4">
                <div className={`p-3.5 rounded-2xl bg-gradient-to-br ${stat.color} shadow-sm`}>
                    <Icon className="w-5 h-5 text-white" />
                </div>
                <div className={`flex items-center text-sm font-bold ${stat.trend === 'up' ? 'text-emerald-600 bg-emerald-50' : 'text-red-600 bg-red-50'} px-3 py-1.5 rounded-full`}>
                    {stat.trend === 'up' ? <ArrowUpRight className="w-4 h-4 mr-1" /> : <ArrowDownRight className="w-4 h-4 mr-1" />}
                    {stat.change}
                </div>
            </div>
            <div>
                <h3 className="text-slate-500 text-sm font-bold uppercase tracking-wider">{stat.name}</h3>
                <p className="text-3xl font-black text-slate-800 mt-1 tracking-tight">{stat.value}</p>
            </div>
        </div>
    );
};

const PlatformIcon = ({ platform }) => {
    if (platform === 'TikTok' || platform === 'TikTok Comment') return <Video className="w-4 h-4 text-cyan-500" />;
    if (platform === 'Meta' || platform === 'Instagram' || platform === 'IG DM') return <Instagram className="w-4 h-4 text-purple-500" />;
    if (platform === 'Shopify') return <ShoppingBag className="w-4 h-4 text-emerald-500" />;
    return <Mail className="w-4 h-4 text-slate-400" />;
};

// --- VIEWS ---

const FounderView = ({ showToast }) => {
    const [isExportModalOpen, setIsExportModalOpen] = useState(false);
    const [exportProgress, setExportProgress] = useState(0);
    const [isInventoryModalOpen, setIsInventoryModalOpen] = useState(false);

    useEffect(() => {
        let interval;
        if (isExportModalOpen && exportProgress < 100) {
            interval = setInterval(() => {
                setExportProgress(prev => Math.min(prev + 15, 100));
            }, 300);
        }
        return () => clearInterval(interval);
    }, [isExportModalOpen, exportProgress]);

    const handleExportClick = () => {
        setExportProgress(0);
        setIsExportModalOpen(true);
    };

    return (
        <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {execStats.map((stat) => <StatCard key={stat.id} stat={stat} />)}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Main Chart */}
                <div className="lg:col-span-2 bg-white rounded-3xl border border-slate-100 p-6 shadow-sm overflow-hidden group relative">
                    <div className="flex items-center justify-between mb-8">
                        <div>
                            <h2 className="text-xl font-black text-slate-800">Sales Performance</h2>
                            <div className="flex items-center mt-3 space-x-6">
                                <span className="flex items-center text-[10px] font-black uppercase tracking-widest text-slate-500">
                                    <span className="w-2.5 h-2.5 rounded-full bg-indigo-600 mr-2 shadow-[0_0_8px_rgba(79,70,229,0.4)]"></span> 
                                    Total Sales (Rs.)
                                </span>
                                <span className="flex items-center text-[10px] font-black uppercase tracking-widest text-slate-500">
                                    <span className="w-2.5 h-2.5 rounded-full bg-sky-400 mr-2 shadow-[0_0_8px_rgba(56,189,248,0.4)]"></span> 
                                    Ad Spend
                                </span>
                            </div>
                        </div>
                        <div className="flex gap-2">
                             <div className="hidden sm:flex items-center bg-slate-50 rounded-xl px-3 py-1.5 border border-slate-100">
                                <span className="text-[10px] font-black text-emerald-600 uppercase tracking-tighter">Live from Nepal</span>
                                <span className="ml-2 w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                             </div>
                        </div>
                    </div>

                    <div className="relative h-72 w-full flex">
                        {/* Y-Axis Labels */}
                        <div className="flex flex-col justify-between text-[9px] font-black text-slate-300 pr-4 pb-8 uppercase">
                            <span>Rs 1M</span>
                            <span>Rs 750K</span>
                            <span>Rs 500K</span>
                            <span>Rs 250K</span>
                            <span>0</span>
                        </div>

                        <div className="flex-1 relative">
                            <svg className="h-full w-full overflow-visible" preserveAspectRatio="none" viewBox="0 0 100 100">
                                <defs>
                                    <linearGradient id="salesGradient" x1="0" x2="0" y1="0" y2="1">
                                        <stop offset="0%" stopColor="#4f46e5" stopOpacity="0.15" />
                                        <stop offset="100%" stopColor="#4f46e5" stopOpacity="0" />
                                    </linearGradient>
                                    <linearGradient id="spendGradient" x1="0" x2="0" y1="0" y2="1">
                                        <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.08" />
                                        <stop offset="100%" stopColor="#38bdf8" stopOpacity="0" />
                                    </linearGradient>
                                </defs>
                                
                                {/* Grid Lines */}
                                {[0, 25, 50, 75, 100].map((y) => (
                                    <line 
                                        key={y} 
                                        x1="0" y1={y} x2="100" y2={y} 
                                        stroke="#f8fafc" 
                                        strokeWidth="1" 
                                    />
                                ))}

                                {/* Helper function to create smooth path (simplified bezier) */}
                                {(() => {
                                    const getPath = (data) => {
                                        return data.map((val, i) => {
                                            const x = (i / (data.length - 1)) * 100;
                                            const y = 100 - (val / 1000) * 100; // Normalized to 1M
                                            return `${i === 0 ? 'M' : 'L'} ${x},${y}`;
                                        }).join(' ');
                                    };

                                    const getSmoothPath = (data) => {
                                        const points = data.map((val, i) => ({
                                            x: (i / (data.length - 1)) * 100,
                                            y: 100 - (val / 1000) * 100
                                        }));
                                        
                                        let d = `M ${points[0].x},${points[0].y}`;
                                        for (let i = 0; i < points.length - 1; i++) {
                                            const p0 = points[i];
                                            const p1 = points[i + 1];
                                            const cp1x = p0.x + (p1.x - p0.x) / 2;
                                            d += ` C ${cp1x},${p0.y} ${cp1x},${p1.y} ${p1.x},${p1.y}`;
                                        }
                                        return d;
                                    };

                                    return (
                                        <>
                                            {/* Sales Area */}
                                            <motion.path
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                transition={{ duration: 1.5 }}
                                                d={`${getSmoothPath(revenueChart)} L 100,100 L 0,100 Z`}
                                                fill="url(#salesGradient)"
                                            />

                                            {/* Sales Line */}
                                            <motion.path
                                                initial={{ pathLength: 0 }}
                                                animate={{ pathLength: 1 }}
                                                transition={{ duration: 2, ease: "easeOut" }}
                                                d={getSmoothPath(revenueChart)}
                                                fill="none"
                                                stroke="#4f46e5"
                                                strokeWidth="3"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />

                                            {/* Spend Line */}
                                            <motion.path
                                                initial={{ pathLength: 0 }}
                                                animate={{ pathLength: 1 }}
                                                transition={{ duration: 2, ease: "easeOut", delay: 0.3 }}
                                                d={getSmoothPath(spendChart)}
                                                fill="none"
                                                stroke="#38bdf8"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeDasharray="4 6"
                                            />

                                            {/* Data Points */}
                                            {revenueChart.map((val, i) => (
                                                <motion.circle
                                                    key={`rev-${i}`}
                                                    initial={{ scale: 0 }}
                                                    animate={{ scale: 1 }}
                                                    transition={{ delay: 1.5 + (i * 0.1) }}
                                                    cx={(i / (revenueChart.length - 1)) * 100}
                                                    cy={100 - (val / 1000) * 100}
                                                    r="2"
                                                    fill="white"
                                                    stroke="#4f46e5"
                                                    strokeWidth="2"
                                                    className="cursor-pointer"
                                                />
                                            ))}
                                        </>
                                    );
                                })()}
                            </svg>
                        </div>
                    </div>
                    
                    <div className="flex justify-between text-[10px] text-slate-400 mt-4 font-black uppercase tracking-[0.2em] ml-14">
                        <span>W1</span>
                        <span>W2</span>
                        <span>W3</span>
                        <span>W4</span>
                        <span>W5</span>
                        <span>W6</span>
                        <span>W7</span>
                        <span>W8</span>
                        <span className="text-indigo-600">Growth</span>
                    </div>

                    {/* Branding overlay */}
                    <div className="absolute bottom-6 right-6 opacity-10 pointer-events-none">
                        <p className="text-2xl font-black italic tracking-tighter">SAJEDAR CRM</p>
                    </div>
                </div>

                {/* Viral Products Module */}
                <div className="bg-white rounded-3xl border border-slate-100 p-6 shadow-sm flex flex-col">
                    <h3 className="font-black text-xl text-slate-800 mb-6 flex items-center">
                        <Hash className="w-6 h-6 mr-2 text-blue-500" /> Trending Products
                    </h3>
                    <div className="space-y-5 flex-1">
                        {[
                            { name: 'Cloud Glow Serum', units: '12,450', velocity: 'Very High', stock: 'Low Stock', img: 'bg-blue-100 text-blue-500' },
                            { name: 'Matte Lip Kit', units: '8,200', velocity: 'Steady', stock: 'In Stock', img: 'bg-orange-100 text-orange-500' },
                            { name: 'Hydration Mist 2.0', units: '4,100', velocity: 'Rising', stock: 'In Stock', img: 'bg-cyan-100 text-cyan-500' }
                        ].map((prod, i) => (
                            <div key={i} className="flex items-center justify-between p-3 rounded-2xl hover:bg-slate-50 transition-colors">
                                <div className="flex items-center space-x-4">
                                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shadow-inner ${prod.img}`}>
                                        <Package className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <p className="font-bold text-slate-800">{prod.name}</p>
                                        <p className="text-xs font-medium text-slate-500 mt-0.5">{prod.units} units sold (7d)</p>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <span className={`text-xs font-bold px-2 py-1 rounded-lg ${prod.stock === 'Low Stock' ? 'bg-red-100 text-red-600' : 'bg-emerald-100 text-emerald-600'}`}>
                                        {prod.stock}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                    <button onClick={() => setIsInventoryModalOpen(true)} className="w-full mt-4 py-3 bg-slate-900 text-white rounded-xl font-bold text-sm hover:bg-slate-800 transition-colors shadow-lg">
                        Check Inventory Forecast
                    </button>
                </div>
            </div>

            {/* Export Modal */}
            <Modal isOpen={isExportModalOpen} onClose={() => setIsExportModalOpen(false)} title="Exporting Data">
                <div className="text-center py-4">
                    {exportProgress < 100 ? (
                        <>
                            <Loader2 className="w-10 h-10 text-violet-500 animate-spin mx-auto mb-4" />
                            <h4 className="font-black text-slate-800 mb-2">Generating Report...</h4>
                            <p className="text-sm text-slate-500 mb-6">Compiling GMV and Ad Spend data.</p>
                            <div className="w-full bg-slate-100 rounded-full h-3 overflow-hidden">
                                <div className="bg-violet-500 h-full transition-all duration-300" style={{ width: `${exportProgress}%` }}></div>
                            </div>
                        </>
                    ) : (
                        <div className="animate-in zoom-in-95 duration-300">
                            <div className="w-16 h-16 bg-emerald-100 text-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                                <CheckCircle2 className="w-8 h-8" />
                            </div>
                            <h4 className="font-black text-slate-800 mb-2">Export Complete</h4>
                            <p className="text-sm text-slate-500 mb-6">Your CSV report is ready for download.</p>
                            <button
                                onClick={() => { setIsExportModalOpen(false); showToast("GMV_Report_Oct.csv downloaded"); }}
                                className="w-full py-3 bg-violet-600 hover:bg-violet-700 text-white rounded-xl font-bold transition-colors"
                            >
                                Download File
                            </button>
                        </div>
                    )}
                </div>
            </Modal>

            {/* Inventory Modal */}
            <Modal isOpen={isInventoryModalOpen} onClose={() => setIsInventoryModalOpen(false)} title="AI Inventory Forecast">
                <div className="space-y-4">
                    <div className="bg-amber-50 border border-amber-200 text-amber-800 text-sm font-medium p-4 rounded-xl flex items-start">
                        <AlertCircle className="w-5 h-5 mr-3 flex-shrink-0 mt-0.5" />
                        <p><strong>Warning:</strong> Current ad spend velocity on TikTok indicates 2 products will stock out before Black Friday.</p>
                    </div>
                    <table className="w-full text-left text-sm mt-4">
                        <thead className="text-xs font-bold text-slate-400 uppercase tracking-wider border-b border-slate-100">
                            <tr>
                                <th className="pb-3">Product</th>
                                <th className="pb-3">Est. Run Out</th>
                                <th className="pb-3">Action</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                            <tr>
                                <td className="py-3 font-bold text-slate-800">Cloud Glow Serum</td>
                                <td className="py-3 text-red-600 font-bold">12 Days</td>
                                <td className="py-3"><button className="text-xs px-3 py-1.5 bg-slate-900 text-white rounded-lg font-bold">Reorder</button></td>
                            </tr>
                            <tr>
                                <td className="py-3 font-bold text-slate-800">Matte Lip Kit</td>
                                <td className="py-3 text-emerald-600 font-bold">45 Days</td>
                                <td className="py-3"><button className="text-xs px-3 py-1.5 bg-slate-100 text-slate-500 rounded-lg font-bold">OK</button></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </Modal>
        </div>
    );
};

const CreatorOpsView = ({ showToast }) => {
    const [localCreatorData, setLocalCreatorData] = useState(initialCreatorData);
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    const [draggedItem, setDraggedItem] = useState(null);

    // Form State
    const [newHandle, setNewHandle] = useState('');
    const [newPlatform, setNewPlatform] = useState('TikTok');
    const [newFollowers, setNewFollowers] = useState('');

    const columns = [
        { id: 'sourcing', title: 'Sourcing / Vetting', color: 'border-slate-200 bg-slate-50/50', badge: 'bg-slate-200 text-slate-700' },
        { id: 'outreach', title: 'Outreach & DM', color: 'border-blue-200 bg-blue-50/50', badge: 'bg-blue-200 text-blue-700' },
        { id: 'shipped', title: 'Product Shipped', color: 'border-amber-200 bg-amber-50/50', badge: 'bg-amber-200 text-amber-700' },
        { id: 'live', title: 'Content Live! 🚀', color: 'border-emerald-200 bg-emerald-50/50', badge: 'bg-emerald-200 text-emerald-700' },
    ];

    const handleAddCreator = (e) => {
        e.preventDefault();
        if (!newHandle) return;

        const newCreator = {
            id: `C-${Date.now()}`,
            handle: newHandle.startsWith('@') ? newHandle : `@${newHandle}`,
            platform: newPlatform,
            followers: newFollowers || 'Unknown',
            status: 'Just Added'
        };

        setLocalCreatorData(prev => ({
            ...prev,
            sourcing: [...prev.sourcing, newCreator]
        }));

        setIsAddModalOpen(false);
        setNewHandle('');
        setNewFollowers('');
        showToast(`${newCreator.handle} added to pipeline!`);
    };

    // DRAG AND DROP LOGIC
    const handleDragStart = (e, creator, sourceColId) => {
        setDraggedItem({ creator, sourceColId });
        e.dataTransfer.setData('text/plain', creator.id);
    };

    const handleDragOver = (e) => {
        e.preventDefault();
    };

    const handleDrop = (e, targetColId) => {
        e.preventDefault();
        if (!draggedItem) return;

        const { creator, sourceColId } = draggedItem;

        if (sourceColId === targetColId) {
            setDraggedItem(null);
            return;
        }

        setLocalCreatorData(prev => {
            const sourceList = [...prev[sourceColId]];
            const targetList = [...prev[targetColId]];

            const creatorIndex = sourceList.findIndex(c => c.id === creator.id);
            const [movedCreator] = sourceList.splice(creatorIndex, 1);

            // Auto-update status based on drop column
            let newStatus = movedCreator.status;
            if (targetColId === 'sourcing') newStatus = 'Evaluating fit';
            if (targetColId === 'outreach') newStatus = 'Sent DM';
            if (targetColId === 'shipped') newStatus = 'In transit';
            if (targetColId === 'live') newStatus = 'Content Live';

            movedCreator.status = newStatus;
            targetList.push(movedCreator);

            return {
                ...prev,
                [sourceColId]: sourceList,
                [targetColId]: targetList
            };
        });

        setDraggedItem(null);
        showToast(`${creator.handle} moved to ${columns.find(c => c.id === targetColId).title}`);
    };

    return (
        <div className="h-full flex flex-col animate-in fade-in zoom-in-95 duration-400">
            <div className="flex items-center justify-between mb-8 flex-wrap gap-4">
                <div>
                    <h2 className="text-3xl font-black text-slate-800 tracking-tight">Creator Pipeline</h2>
                    <p className="text-slate-500 font-medium mt-1">Drag and drop creators to update their pipeline stage.</p>
                </div>
                <button onClick={() => setIsAddModalOpen(true)} className="px-5 py-2.5 bg-blue-500 text-white rounded-xl font-bold shadow-lg shadow-blue-200 hover:bg-blue-600 transition-all flex items-center">
                    <Plus className="w-5 h-5 mr-1" /> Add Creator
                </button>
            </div>

            <div className="flex-1 flex space-x-6 overflow-x-auto pb-6">
                {columns.map(col => (
                    <div
                        key={col.id}
                        onDragOver={handleDragOver}
                        onDrop={(e) => handleDrop(e, col.id)}
                        className={`flex-shrink-0 w-80 rounded-3xl border ${col.color} p-5 flex flex-col shadow-sm transition-colors ${draggedItem && draggedItem.sourceColId !== col.id ? 'bg-indigo-50/30 border-indigo-200 border-dashed' : ''}`}
                    >
                        <div className="flex items-center justify-between mb-5 px-1">
                            <h3 className="font-bold text-slate-800">{col.title}</h3>
                            <span className={`text-xs font-black px-2.5 py-1 rounded-lg ${col.badge}`}>
                                {localCreatorData[col.id].length}
                            </span>
                        </div>

                        <div className="flex-1 space-y-4 overflow-y-auto pr-1">
                            {localCreatorData[col.id].map(creator => (
                                <div
                                    key={creator.id}
                                    draggable
                                    onDragStart={(e) => handleDragStart(e, creator, col.id)}
                                    className="bg-white border border-slate-200/60 p-5 rounded-2xl shadow-sm hover:shadow-md hover:border-indigo-300 transition-all cursor-grab active:cursor-grabbing group"
                                >
                                    <div className="flex justify-between items-start mb-3">
                                        <div className="flex items-center space-x-2">
                                            <PlatformIcon platform={creator.platform} />
                                            <span className="font-bold text-slate-800">{creator.handle}</span>
                                        </div>
                                        <MoreHorizontal className="w-5 h-5 text-slate-300 group-hover:text-slate-500 cursor-pointer" />
                                    </div>

                                    <div className="flex items-center space-x-4 mb-4">
                                        <div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center border-2 border-dashed border-slate-200">
                                            <Camera className="w-5 h-5 text-slate-400" />
                                        </div>
                                        <div>
                                            <p className="text-[10px] font-black text-slate-400 uppercase tracking-wider">Followers</p>
                                            <p className="font-black text-slate-700">{creator.followers}</p>
                                        </div>
                                    </div>

                                    <div className="pt-3 border-t border-slate-100">
                                        <span className={`text-xs font-bold px-2.5 py-1 rounded-lg ${col.id === 'live' ? 'bg-emerald-100 text-emerald-700' : 'bg-slate-100 text-slate-600'}`}>
                                            {creator.status}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            {/* Add Creator Modal */}
            <Modal isOpen={isAddModalOpen} onClose={() => setIsAddModalOpen(false)} title="Add New Creator">
                <form onSubmit={handleAddCreator} className="space-y-4">
                    <div>
                        <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Creator Handle</label>
                        <input
                            required
                            value={newHandle}
                            onChange={(e) => setNewHandle(e.target.value)}
                            placeholder="@username"
                            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all font-medium"
                        />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Platform</label>
                            <select
                                value={newPlatform}
                                onChange={(e) => setNewPlatform(e.target.value)}
                                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none bg-white font-medium appearance-none"
                            >
                                <option>TikTok</option>
                                <option>Instagram</option>
                                <option>YouTube</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Follower Count</label>
                            <input
                                value={newFollowers}
                                onChange={(e) => setNewFollowers(e.target.value)}
                                placeholder="e.g. 1.2M"
                                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all font-medium"
                            />
                        </div>
                    </div>
                    <button type="submit" className="w-full mt-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-xl font-bold transition-colors shadow-lg shadow-blue-200">
                        Add to Pipeline
                    </button>
                </form>
            </Modal>
        </div>
    );
};

const MediaBuyerView = ({ showToast }) => {
    const [activeFilter, setActiveFilter] = useState('All');
    const [campaigns, setCampaigns] = useState(initialAdCampaigns);

    const filteredCampaigns = activeFilter === 'All'
        ? campaigns
        : campaigns.filter(c => c.platform === activeFilter);

    const toggleCampaignState = (id) => {
        setCampaigns(prev => prev.map(camp => {
            if (camp.id === id) {
                const isNowPaused = !camp.isPaused;
                showToast(isNowPaused ? `Paused ${camp.name}` : `Reactivated ${camp.name}`);
                return { ...camp, isPaused: isNowPaused };
            }
            return camp;
        }));
    };

    return (
        <div className="space-y-6 animate-in fade-in slide-in-from-right-8 duration-500">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

                {/* Funnel Widget */}
                <div className="bg-white rounded-3xl border border-slate-100 p-6 shadow-sm flex flex-col">
                    <h2 className="text-xl font-black text-slate-800 mb-8 flex items-center">
                        <Filter className="w-6 h-6 mr-2 text-indigo-500" /> Shop Funnel (24h)
                    </h2>
                    <div className="flex-1 flex flex-col justify-center space-y-3">
                        {[
                            { label: 'Ad Impressions', val: '1.2M', w: 'w-full', color: 'bg-indigo-50 text-indigo-800 border border-indigo-100' },
                            { label: 'Outbound Clicks', val: '45.2K', w: 'w-11/12', color: 'bg-indigo-100 text-indigo-800 border border-indigo-200' },
                            { label: 'Add to Cart', val: '8.4K', w: 'w-9/12', color: 'bg-indigo-300 text-indigo-900 border border-indigo-400' },
                            { label: 'Purchases', val: '1,240', w: 'w-7/12', color: 'bg-indigo-600 text-white shadow-lg shadow-indigo-200' },
                        ].map((step, i) => (
                            <div key={i} className="flex flex-col items-center">
                                <div className={`${step.w} ${step.color} rounded-2xl py-3 px-5 flex justify-between items-center transition-all hover:scale-[1.02] cursor-default`}>
                                    <span className="text-sm font-bold tracking-wide">{step.label}</span>
                                    <span className="font-black text-lg">{step.val}</span>
                                </div>
                                {i < 3 && <div className="h-4 w-1 bg-slate-200 my-1 rounded-full"></div>}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Campaigns List */}
                <div className="lg:col-span-2 bg-white rounded-3xl border border-slate-100 p-6 shadow-sm">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-4">
                        <h2 className="text-xl font-black text-slate-800 flex items-center">
                            <PlayCircle className="w-6 h-6 mr-2 text-blue-500" /> Ad Campaigns
                        </h2>
                        <div className="flex space-x-2 bg-slate-50 p-1 rounded-xl border border-slate-100">
                            {['All', 'TikTok', 'Meta'].map(filter => (
                                <button
                                    key={filter}
                                    onClick={() => setActiveFilter(filter)}
                                    className={`px-4 py-1.5 text-xs font-bold rounded-lg transition-all ${activeFilter === filter ? 'bg-white shadow-sm text-slate-800' : 'text-slate-500 hover:text-slate-700'}`}
                                >
                                    {filter}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="space-y-4">
                        {filteredCampaigns.length === 0 && (
                            <div className="text-center py-8 text-slate-500 font-medium">No campaigns found for {activeFilter}</div>
                        )}
                        {filteredCampaigns.map((camp) => (
                            <div key={camp.id} className={`p-5 rounded-2xl border ${camp.isPaused ? 'border-slate-100 bg-slate-50/50 opacity-75' : 'border-slate-100 bg-white hover:border-indigo-200 hover:shadow-md'} transition-all animate-in fade-in relative group`}>

                                {/* Toggle Button */}
                                <button
                                    onClick={() => toggleCampaignState(camp.id)}
                                    className={`absolute top-5 right-5 p-2 rounded-full transition-colors ${camp.isPaused ? 'bg-slate-200 text-slate-500 hover:bg-emerald-100 hover:text-emerald-600' : 'bg-indigo-50 text-indigo-400 hover:bg-amber-100 hover:text-amber-600'}`}
                                    title={camp.isPaused ? "Reactivate Campaign" : "Pause Campaign"}
                                >
                                    {camp.isPaused ? <Play className="w-5 h-5" /> : <PauseCircle className="w-5 h-5" />}
                                </button>

                                <div className="flex justify-between items-start mb-4 pr-12">
                                    <div className="flex items-center space-x-3">
                                        <div className={`p-2 rounded-xl shadow-sm border border-slate-100 ${camp.isPaused ? 'bg-slate-100' : 'bg-white'}`}>
                                            <PlatformIcon platform={camp.platform} />
                                        </div>
                                        <div>
                                            <h3 className={`font-bold flex items-center text-lg ${camp.isPaused ? 'text-slate-500' : 'text-slate-800'}`}>
                                                {camp.name}
                                            </h3>
                                            <p className={`text-xs font-bold mt-1 uppercase tracking-wider ${camp.isPaused ? 'text-amber-500' : 'text-emerald-500'}`}>
                                                {camp.isPaused ? 'Paused' : camp.status}
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="grid grid-cols-3 gap-4 pt-4 border-t border-slate-200/60">
                                    <div>
                                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Spend</p>
                                        <p className="font-bold text-slate-700">{camp.spend}</p>
                                    </div>
                                    <div>
                                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">ROAS</p>
                                        <p className={`font-black text-lg ${parseFloat(camp.roas) > 2.5 ? 'text-emerald-500' : 'text-red-500'}`}>{camp.roas}</p>
                                    </div>
                                    <div className="flex flex-col justify-center">
                                        <div className="flex justify-between text-[10px] font-bold mb-1.5">
                                            <span className="text-slate-400 uppercase tracking-widest">Health</span>
                                        </div>
                                        <div className="w-full bg-slate-200 rounded-full h-2 overflow-hidden">
                                            <div
                                                className={`h-2 rounded-full transition-all duration-1000 ${camp.health > 80 ? 'bg-emerald-400' : camp.health > 40 ? 'bg-amber-400' : 'bg-red-500'}`}
                                                style={{ width: `${camp.health}%` }}
                                            ></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

const OmniInboxView = ({ showToast }) => {
    const [chats, setChats] = useState(initialChatConversations);
    const [activeChatId, setActiveChatId] = useState(chats[0].id);
    const [replyText, setReplyText] = useState('');
    const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);
    const messagesEndRef = useRef(null);

    const activeChat = chats.find(c => c.id === activeChatId);

    // AUTO SCROLL FEATURE
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [activeChat.messages]);

    const getStatusStyle = (status) => {
        switch (status) {
            case 'Open': return 'text-orange-600 bg-orange-50 border-orange-200';
            case 'In Progress': return 'text-indigo-600 bg-indigo-50 border-indigo-200';
            case 'Resolved': return 'text-emerald-600 bg-emerald-50 border-emerald-200';
            default: return 'text-slate-500 bg-slate-50 border-slate-200';
        }
    };

    const handleSendReply = (text = replyText) => {
        if (!text.trim()) return;

        const updatedChats = chats.map(chat => {
            if (chat.id === activeChatId) {
                return {
                    ...chat,
                    messages: [...chat.messages, { id: Date.now(), sender: 'agent', text, time: 'Just now' }]
                };
            }
            return chat;
        });
        setChats(updatedChats);
        setReplyText('');
    };

    const handleApproveAi = (aiText) => {
        handleSendReply(aiText);
        showToast("AI response sent!");
    };

    const handleResolve = () => {
        const updatedChats = chats.map(chat => {
            if (chat.id === activeChatId) {
                return { ...chat, status: 'Resolved' };
            }
            return chat;
        });
        setChats(updatedChats);
        showToast('Conversation marked as resolved.');
    };

    return (
        <div className="h-[calc(100vh-140px)] flex bg-white rounded-3xl border border-slate-100 shadow-[0_4px_24px_rgba(0,0,0,0.02)] overflow-hidden animate-in fade-in zoom-in-95 duration-400">

            {/* LEFT PANE - INBOX LIST */}
            <div className="w-80 border-r border-slate-100 flex flex-col bg-[#f8fafc] hidden md:flex">
                <div className="p-5 border-b border-slate-100 bg-white z-10 shadow-sm">
                    <h2 className="text-xl font-black text-slate-800 flex items-center justify-between">
                        Inbox
                        <span className="bg-red-100 text-red-600 text-xs px-2.5 py-1 rounded-lg">4 New</span>
                    </h2>
                    <div className="relative mt-4">
                        <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                        <input
                            type="text"
                            placeholder="Search messages..."
                            className="w-full pl-9 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 font-medium transition-all"
                        />
                    </div>
                </div>
                <div className="flex-1 overflow-y-auto">
                    {chats.map(chat => (
                        <div
                            key={chat.id}
                            onClick={() => setActiveChatId(chat.id)}
                            className={`p-4 border-b border-slate-100 cursor-pointer transition-all ${activeChatId === chat.id ? 'bg-indigo-50/50 border-l-4 border-l-indigo-500 shadow-sm' : 'hover:bg-white border-l-4 border-l-transparent'}`}
                        >
                            <div className="flex justify-between items-start mb-2">
                                <div className="flex items-center">
                                    <div className={`relative w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm ${chat.avatar}`}>
                                        {chat.initials}
                                        <div className="absolute -bottom-1 -right-1 p-0.5 bg-white rounded-full shadow-sm">
                                            <PlatformIcon platform={chat.platform} />
                                        </div>
                                    </div>
                                    <div className="ml-3">
                                        <p className="font-bold text-slate-800 text-sm truncate max-w-[120px]">{chat.user}</p>
                                        <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mt-0.5">{chat.platform}</p>
                                    </div>
                                </div>
                                <div className="text-right flex flex-col items-end">
                                    <span className="text-xs text-slate-400 font-medium">{chat.time}</span>
                                    {chat.unread > 0 && (
                                        <span className="mt-1 w-5 h-5 bg-blue-500 text-white rounded-full text-[10px] font-bold flex items-center justify-center shadow-sm shadow-blue-200">
                                            {chat.unread}
                                        </span>
                                    )}
                                </div>
                            </div>
                            <p className={`text-sm line-clamp-2 mt-2 leading-relaxed ${chat.unread > 0 ? 'font-bold text-slate-700' : 'text-slate-500 font-medium'}`}>
                                {chat.messages[chat.messages.length - 1].text}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            {/* CENTER PANE - CHAT WINDOW */}
            <div className="flex-1 flex flex-col bg-white relative">
                {/* Chat Header */}
                <div className="h-[76px] border-b border-slate-100 px-6 flex items-center justify-between bg-white z-10 shadow-sm">
                    <div className="flex items-center">
                        <div className={`w-11 h-11 rounded-full flex items-center justify-center font-bold text-lg mr-4 ${activeChat.avatar}`}>
                            {activeChat.initials}
                        </div>
                        <div>
                            <h3 className="font-black text-slate-800 text-lg flex items-center">
                                {activeChat.user}
                                <span className={`ml-3 px-2 py-0.5 border rounded-lg text-[10px] font-bold uppercase tracking-widest ${getStatusStyle(activeChat.status)}`}>
                                    {activeChat.status}
                                </span>
                            </h3>
                            <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400 flex items-center mt-0.5">
                                via {activeChat.channel} • ID: {activeChat.id}
                            </p>
                        </div>
                    </div>
                    <div className="flex space-x-3">
                        <button onClick={handleResolve} className="px-4 py-2 bg-emerald-50 text-emerald-600 font-bold text-sm rounded-xl hover:bg-emerald-100 transition-colors flex items-center shadow-sm">
                            <CheckCircle2 className="w-4 h-4 mr-2" /> Mark Resolved
                        </button>
                        <button className="p-2 text-slate-400 hover:bg-slate-50 hover:text-slate-700 rounded-xl transition-colors">
                            <MoreVertical className="w-5 h-5" />
                        </button>
                    </div>
                </div>

                {/* Chat Messages */}
                <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-[#f8fafc]/50">
                    <div className="text-center">
                        <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest bg-slate-100 border border-slate-200 px-3 py-1 rounded-full">Conversation Started Today</span>
                    </div>
                    {activeChat.messages.map((msg) => (
                        msg.sender === 'ai' ? (
                            <div key={msg.id} className="flex justify-center my-4 w-full">
                                <div className="max-w-[85%] bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-100 rounded-2xl p-4 shadow-sm relative overflow-hidden">
                                    <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-indigo-400 to-purple-500"></div>
                                    <div className="flex items-center mb-2">
                                        <Bot className="w-4 h-4 text-indigo-600 mr-2" />
                                        <span className="text-xs font-black text-indigo-800 uppercase tracking-widest">Replied by AI</span>
                                    </div>
                                    <p className="text-sm font-medium text-slate-700 italic mb-3">"{msg.text}"</p>
                                    <div className="flex space-x-2">
                                        <button onClick={() => handleApproveAi(msg.text)} className="px-3 py-1.5 bg-white border border-indigo-200 text-indigo-700 text-xs font-bold rounded-lg shadow-sm hover:bg-indigo-50 transition-colors">
                                            Approve & Send
                                        </button>
                                        <button onClick={() => showToast("AI Draft dismissed")} className="px-3 py-1.5 bg-transparent text-slate-500 text-xs font-bold hover:bg-slate-100 rounded-lg transition-colors">
                                            Dismiss
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-start' : 'justify-end'}`}>
                                <div className={`max-w-[75%] flex flex-col ${msg.sender === 'user' ? 'items-start' : 'items-end'}`}>
                                    <div className={`px-5 py-3.5 rounded-2xl text-sm font-medium shadow-sm leading-relaxed ${msg.sender === 'user'
                                        ? 'bg-white text-slate-700 border border-slate-200 rounded-tl-sm'
                                        : 'bg-gradient-to-br from-indigo-500 to-violet-600 text-white rounded-tr-sm shadow-indigo-200'
                                        }`}>
                                        {msg.text}
                                    </div>
                                    <span className="text-[10px] font-bold text-slate-400 mt-1.5 px-1 uppercase tracking-wider">{msg.time}</span>
                                </div>
                            </div>
                        )
                    ))}
                    {/* Scroll Target */}
                    <div ref={messagesEndRef} />
                </div>

                {/* Chat Input */}
                <div className="p-4 border-t border-slate-100 bg-white">
                    <div className="bg-[#f8fafc] border border-slate-200 rounded-2xl p-2 flex flex-col focus-within:ring-4 focus-within:ring-indigo-50 focus-within:border-indigo-300 transition-all">
                        <textarea
                            className="w-full bg-transparent p-3 outline-none resize-none text-sm font-medium text-slate-700 placeholder-slate-400"
                            rows="3"
                            placeholder={`Reply to ${activeChat.user} as Brand Agent...`}
                            value={replyText}
                            onChange={(e) => setReplyText(e.target.value)}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter' && !e.shiftKey) {
                                    e.preventDefault();
                                    handleSendReply();
                                }
                            }}
                        ></textarea>
                        <div className="flex items-center justify-between px-2 pt-2 pb-1">
                            <div className="flex space-x-2">
                                <button className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-200/50 rounded-lg transition-colors">
                                    <Paperclip className="w-5 h-5" />
                                </button>
                                <button className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-200/50 rounded-lg transition-colors">
                                    <Smile className="w-5 h-5" />
                                </button>
                            </div>
                            <button onClick={() => handleSendReply()} className="px-6 py-2.5 bg-slate-900 text-white font-bold text-sm rounded-xl hover:bg-slate-800 transition-all shadow-lg flex items-center group">
                                <span>Send Reply</span>
                                <Send className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* RIGHT PANE - CUSTOMER CONTEXT */}
            <div className="w-72 border-l border-slate-100 flex flex-col bg-[#f8fafc] overflow-y-auto hidden lg:flex">
                <div className="p-6 border-b border-slate-100 bg-white flex flex-col items-center text-center">
                    <div className={`w-20 h-20 rounded-full flex items-center justify-center font-black text-3xl mb-4 shadow-inner ${activeChat.avatar}`}>
                        {activeChat.initials}
                    </div>
                    <h3 className="font-black text-slate-800 text-lg tracking-tight">{activeChat.user}</h3>
                    <p className="text-xs font-bold text-slate-400 mt-1 truncate w-full">{activeChat.customer.email}</p>
                    <div className="mt-4 px-3 py-1.5 bg-gradient-to-r from-amber-100 to-orange-100 text-amber-700 text-xs font-black uppercase tracking-widest rounded-lg border border-amber-200/50 shadow-sm">
                        {activeChat.customer.segment}
                    </div>
                </div>

                <div className="p-6 space-y-6">
                    <div>
                        <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3 flex items-center">
                            <Activity className="w-4 h-4 mr-2" /> Lifetime Value
                        </h4>
                        <div className="bg-white border border-slate-200/60 rounded-2xl p-4 shadow-sm flex items-center justify-between hover:border-indigo-200 transition-colors">
                            <div>
                                <p className="text-2xl font-black text-slate-800 tracking-tight">{activeChat.customer.ltv}</p>
                                <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mt-1">{activeChat.customer.orders} total orders</p>
                            </div>
                            <div className="w-10 h-10 bg-emerald-50 border border-emerald-100 rounded-xl flex items-center justify-center text-emerald-500 shadow-sm">
                                <DollarSign className="w-5 h-5" />
                            </div>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3 flex items-center">
                            <ShoppingBag className="w-4 h-4 mr-2" /> Recent Orders
                        </h4>
                        <div className="bg-white border border-slate-200/60 rounded-2xl p-4 shadow-sm hover:border-indigo-200 transition-colors">
                            <div className="flex justify-between items-start mb-2">
                                <span className="font-black text-slate-800 text-sm">#ORD-1092</span>
                                <span className="text-[10px] font-bold bg-slate-100 text-slate-500 uppercase tracking-widest px-2 py-0.5 rounded-md border border-slate-200">Delayed</span>
                            </div>
                            <p className="text-sm text-slate-600 font-medium mb-4">Cloud Glow Serum (x2)</p>
                            <button onClick={() => setIsOrderModalOpen(true)} className="w-full py-2 bg-[#f8fafc] border border-slate-200 hover:bg-slate-100 text-slate-700 text-xs font-bold uppercase tracking-wider rounded-xl transition-all">
                                View Order Details
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Order Details Modal */}
            <Modal isOpen={isOrderModalOpen} onClose={() => setIsOrderModalOpen(false)} title="Order #ORD-1092">
                <div className="space-y-6">
                    <div>
                        <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Status Tracking</h4>
                        <div className="flex items-center justify-between mt-4 relative">
                            <div className="absolute top-1/2 left-0 w-full h-1 bg-slate-100 -z-10 -translate-y-1/2"></div>
                            <div className="absolute top-1/2 left-0 w-1/2 h-1 bg-emerald-500 -z-10 -translate-y-1/2"></div>

                            <div className="flex flex-col items-center">
                                <div className="w-6 h-6 rounded-full bg-emerald-500 text-white flex items-center justify-center"><CheckCircle2 className="w-4 h-4" /></div>
                                <span className="text-[10px] font-bold mt-2">Ordered</span>
                            </div>
                            <div className="flex flex-col items-center">
                                <div className="w-6 h-6 rounded-full bg-emerald-500 text-white flex items-center justify-center"><CheckCircle2 className="w-4 h-4" /></div>
                                <span className="text-[10px] font-bold mt-2">Shipped</span>
                            </div>
                            <div className="flex flex-col items-center">
                                <div className="w-6 h-6 rounded-full bg-slate-200 text-slate-400 flex items-center justify-center border-2 border-white"><Clock className="w-4 h-4" /></div>
                                <span className="text-[10px] font-bold text-slate-500 mt-2">Delayed</span>
                            </div>
                        </div>
                    </div>

                    <div className="border-t border-slate-100 pt-4">
                        <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Line Items</h4>
                        <div className="flex items-center justify-between p-3 border border-slate-100 rounded-xl bg-slate-50">
                            <div className="flex items-center">
                                <div className="w-10 h-10 bg-blue-100 text-blue-500 rounded-lg flex items-center justify-center mr-3"><Package className="w-5 h-5" /></div>
                                <div>
                                    <p className="font-bold text-sm text-slate-800">Cloud Glow Serum</p>
                                    <p className="text-xs text-slate-500">Qty: 2</p>
                                </div>
                            </div>
                            <span className="font-bold text-slate-800">Rs 45.00</span>
                        </div>
                    </div>
                </div>
            </Modal>

        </div>
    );
};

// --- MAIN APP ---

export default function App() {
    const [activeRole, setActiveRole] = useState('founder');
    const [isRoleDropdownOpen, setIsRoleDropdownOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [toastMessage, setToastMessage] = useState(null);

    const showToast = (message) => {
        setToastMessage(message);
        setTimeout(() => setToastMessage(null), 3000);
    };

    const roles = [
        { id: 'founder', name: 'Founder & Growth', icon: Activity, desc: 'ROAS, GMV & Inventory' },
        { id: 'creator', name: 'Creator Ops', icon: Users, desc: 'Influencers & UGC Pipeline' },
        { id: 'media', name: 'Media Buyer', icon: Target, desc: 'TikTok/Meta Ads & Funnels' },
        { id: 'inbox', name: 'Omni Inbox', icon: MessageSquare, desc: 'Unified Chat & Support' },
    ];

    const currentRoleObj = roles.find(r => r.id === activeRole);

    return (
        <div className="min-h-screen bg-[#f4f7fb] flex font-sans text-slate-900 selection:bg-blue-100 selection:text-blue-900">

            {/* Toast Notification */}
            {toastMessage && (
                <div className="fixed bottom-6 right-6 bg-slate-900 text-white px-6 py-4 rounded-2xl shadow-2xl z-[100] flex items-center animate-in slide-in-from-bottom-4 duration-300">
                    <CheckCircle2 className="w-5 h-5 mr-3 text-emerald-400" />
                    <span className="font-bold text-sm tracking-wide">{toastMessage}</span>
                </div>
            )}

            {/* Mobile Menu Overlay */}
            {isMobileMenuOpen && (
                <div className="fixed inset-0 z-50 flex md:hidden">
                    <div className="fixed inset-0 bg-slate-900/20 backdrop-blur-sm" onClick={() => setIsMobileMenuOpen(false)}></div>
                    <aside className="w-64 bg-white h-full border-r border-slate-100 shadow-2xl relative z-10 flex flex-col py-6 animate-in slide-in-from-left duration-300">
                        <div className="flex items-center justify-between px-6 mb-8">
                            <div className="w-10 h-10 bg-slate-900 rounded-xl flex items-center justify-center shadow-lg">
                                <Smartphone className="w-5 h-5 text-white" />
                            </div>
                            <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 text-slate-400 hover:text-slate-600 bg-slate-50 rounded-full transition-colors">
                                <X className="w-5 h-5" />
                            </button>
                        </div>
                        <div className="px-6 pb-4">
                            <p className="text-xs font-black text-slate-400 uppercase tracking-widest mb-3">Workspaces</p>
                            <div className="space-y-2">
                                {roles.map((role) => (
                                    <button
                                        key={role.id}
                                        onClick={() => { setActiveRole(role.id); setIsMobileMenuOpen(false); setIsRoleDropdownOpen(false); }}
                                        className={`w-full flex items-center px-4 py-3 rounded-xl transition-all ${activeRole === role.id ? 'bg-slate-900 text-white shadow-md' : 'text-slate-600 hover:bg-slate-50'}`}
                                    >
                                        <role.icon className={`w-4 h-4 mr-3 ${activeRole === role.id ? 'text-white' : 'text-slate-400'}`} />
                                        <span className="text-sm font-bold">{role.name}</span>
                                    </button>
                                ))}
                            </div>
                        </div>
                    </aside>
                </div>
            )}

            {/* Sidebar */}
            <aside className="w-20 hidden md:flex flex-col items-center py-6 bg-white border-r border-slate-100 z-20 shadow-[4px_0_24px_rgba(0,0,0,0.02)]">
                <div className="w-12 h-12 bg-slate-900 rounded-2xl flex items-center justify-center shadow-lg mb-8 cursor-pointer hover:scale-105 transition-transform">
                    <Smartphone className="w-6 h-6 text-white" />
                </div>

                <nav className="flex-1 w-full flex flex-col space-y-4 px-4">
                    {roles.map((role) => (
                        <button
                            key={role.id}
                            onClick={() => setActiveRole(role.id)}
                            title={role.name}
                            className={`w-full aspect-square rounded-2xl flex items-center justify-center transition-all ${activeRole === role.id ? 'bg-slate-900 text-white shadow-md' : 'text-slate-400 hover:bg-slate-100 hover:text-slate-800'}`}
                        >
                            <role.icon className="w-5 h-5" />
                        </button>
                    ))}
                </nav>

                <div className="mt-auto flex flex-col items-center space-y-5 pt-5 border-t border-slate-100 w-full">
                    <button className="w-12 h-12 rounded-2xl bg-white border border-slate-100 shadow-sm hover:border-slate-300 flex items-center justify-center text-slate-500 transition-all">
                        <Bell className="w-5 h-5" />
                    </button>
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-blue-500 to-violet-500 p-[2px] cursor-pointer hover:scale-105 transition-transform shadow-md">
                        <div className="w-full h-full bg-white rounded-2xl flex items-center justify-center border-2 border-white overflow-hidden">
                            <img src="https://api.dicebear.com/7.x/notionists/svg?seed=Felix&backgroundColor=f4f7fb" alt="User" className="w-full h-full object-cover" />
                        </div>
                    </div>
                </div>
            </aside>

            {/* Main Content Area */}
            <main className="flex-1 flex flex-col min-w-0 overflow-hidden relative">
                {/* Adjusted z-index from 40 to 50 so dropdown properly overlays everything below */}
                <header className="h-24 flex items-center justify-between px-6 lg:px-12 z-50 sticky top-0 bg-[#f4f7fb]/90 backdrop-blur-xl border-b border-slate-200/50">
                    <div className="flex items-center">
                        <button
                            className="md:hidden mr-4 p-2 text-slate-500 hover:text-slate-800 bg-white rounded-xl shadow-sm border border-slate-100"
                            onClick={() => setIsMobileMenuOpen(true)}
                        >
                            <Menu className="w-6 h-6" />
                        </button>
                        <div>
                            <h1 className="text-2xl sm:text-3xl font-black text-slate-800 tracking-tight flex items-center">
                                {currentRoleObj.name}
                            </h1>
                            <p className="text-xs sm:text-sm font-bold text-slate-400 mt-0.5 sm:mt-1 uppercase tracking-wider hidden sm:block">{currentRoleObj.desc}</p>
                        </div>
                    </div>

                    <div className="relative hidden md:block">
                        {/* Animated Highlight Glow - Updated from Pink to Blue/Indigo */}
                        <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 rounded-3xl blur opacity-40 animate-pulse pointer-events-none"></div>

                        <button
                            onClick={() => setIsRoleDropdownOpen(!isRoleDropdownOpen)}
                            className="relative flex items-center space-x-4 bg-white border border-blue-100 px-5 py-3 rounded-2xl shadow-xl hover:-translate-y-0.5 transition-all group"
                        >
                            <div className="p-2 bg-blue-50 rounded-xl text-blue-600 group-hover:bg-blue-100 transition-colors">
                                <currentRoleObj.icon className="w-5 h-5" />
                            </div>
                            <div className="text-left hidden sm:block">
                                <span className="block text-[10px] font-black text-blue-500 uppercase tracking-widest leading-none mb-1.5 relative">
                                    <span className="absolute -left-3 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                                    <span className="absolute -left-3 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-blue-500 animate-ping"></span>
                                    Viewing As
                                </span>
                                <span className="block text-sm font-black text-slate-800 leading-none">{currentRoleObj.name.split(' ')[0]}</span>
                            </div>
                            <ChevronDown className={`w-4 h-4 text-blue-500 transition-transform duration-300 ml-2 ${isRoleDropdownOpen ? 'rotate-180' : ''}`} />
                        </button>

                        {isRoleDropdownOpen && (
                            <>
                                <div className="fixed inset-0 z-30" onClick={() => setIsRoleDropdownOpen(false)}></div>
                                <div className="absolute right-0 mt-3 w-72 bg-white rounded-3xl shadow-2xl border border-slate-100 z-50 overflow-hidden animate-in fade-in slide-in-from-top-4 duration-300">
                                    <div className="px-5 py-4 border-b border-slate-50 bg-slate-50/80 backdrop-blur-md">
                                        <p className="text-xs font-black text-slate-400 uppercase tracking-widest">Select Workspace</p>
                                    </div>
                                    <div className="p-2.5 space-y-1">
                                        {roles.map((role) => (
                                            <button
                                                key={role.id}
                                                onClick={() => { setActiveRole(role.id); setIsRoleDropdownOpen(false); }}
                                                className={`w-full flex items-center px-4 py-3.5 rounded-2xl transition-all ${activeRole === role.id ? 'bg-slate-900 shadow-lg' : 'hover:bg-slate-50 border border-transparent'}`}
                                            >
                                                <div className={`p-2 rounded-xl mr-4 transition-colors ${activeRole === role.id ? 'bg-slate-800 text-white' : 'bg-slate-100 text-slate-500'}`}>
                                                    <role.icon className="w-5 h-5" />
                                                </div>
                                                <div className="text-left flex-1">
                                                    <p className={`text-sm font-black tracking-wide ${activeRole === role.id ? 'text-white' : 'text-slate-800'}`}>{role.name}</p>
                                                    <p className={`text-xs mt-1 font-bold ${activeRole === role.id ? 'text-slate-400' : 'text-slate-400'}`}>{role.desc}</p>
                                                </div>
                                                {activeRole === role.id && <CheckCircle2 className="w-5 h-5 text-emerald-400" />}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </>
                        )}
                    </div>
                </header>

                <div className="flex-1 overflow-y-auto px-4 sm:px-8 lg:px-12 pb-12 pt-4 sm:pt-2">
                    <div className="max-w-[1600px] mx-auto h-full">
                        {activeRole === 'founder' && <FounderView showToast={showToast} />}
                        {activeRole === 'creator' && <CreatorOpsView showToast={showToast} />}
                        {activeRole === 'media' && <MediaBuyerView showToast={showToast} />}
                        {activeRole === 'inbox' && <OmniInboxView showToast={showToast} />}
                    </div>
                </div>

            </main>
        </div>
    );
}
