'use client';

import React, { useState, useRef } from 'react';
import Header from '../../../components/Header';
import { Footer } from '../../../components/sections';
import { 
    Battery, Wifi, ChevronLeft, Phone, Video, Info, 
    Camera, Mic, ThumbsUp, Plus, Image as ImageIcon, 
    ArrowUp, ArrowDown, Trash2, Download, MessageSquare, 
    Check, CheckCircle 
} from 'lucide-react';
import html2canvas from 'html2canvas';

// --- TYPES ---
type MessageType = 'user' | 'bot' | 'timestamp' | 'typing';

interface Message {
    id: string;
    type: MessageType;
    text?: string;
    image?: string;
    buttons?: string[]; // For bot buttons
    status?: 'sent' | 'delivered' | 'read'; // For user messages
}

export default function MessengerMockupPage() {
    // --- STATE ---
    const [contactName, setContactName] = useState('Sajedar Support');
    const [activeStatus, setActiveStatus] = useState('Active now');
    const [profilePic, setProfilePic] = useState<string | null>(null);
    const [batteryLevel, setBatteryLevel] = useState(100);
    const [currentTime, setCurrentTime] = useState('9:41');
    
    const [messages, setMessages] = useState<Message[]>([
        { id: '1', type: 'timestamp', text: 'Today 9:30 AM' },
        { id: '2', type: 'bot', text: 'Namaste! How can we help you grow your business today?' },
        { id: '3', type: 'user', text: 'I need a chatbot for my Facebook page.', status: 'read' },
        { id: '4', type: 'typing' }
    ]);

    const previewRef = useRef<HTMLDivElement>(null);

    // --- ACTIONS ---

    const addMessage = (type: MessageType) => {
        const newMessage: Message = {
            id: Date.now().toString(),
            type,
            text: type === 'timestamp' ? '10:00 AM' : 'New Message...',
            status: 'sent',
            buttons: type === 'bot' ? [] : undefined
        };
        setMessages([...messages, newMessage]);
    };

    const updateMessage = (id: string, field: keyof Message, value: any) => {
        setMessages(messages.map(m => m.id === id ? { ...m, [field]: value } : m));
    };

    const moveMessage = (index: number, direction: 'up' | 'down') => {
        if (direction === 'up' && index === 0) return;
        if (direction === 'down' && index === messages.length - 1) return;
        
        const newMessages = [...messages];
        const temp = newMessages[index];
        newMessages[index] = newMessages[index + (direction === 'up' ? -1 : 1)];
        newMessages[index + (direction === 'up' ? -1 : 1)] = temp;
        setMessages(newMessages);
    };

    const deleteMessage = (index: number) => {
        const newMessages = [...messages];
        newMessages.splice(index, 1);
        setMessages(newMessages);
    };

    const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>, msgId?: string) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (event) => {
                const result = event.target?.result as string;
                if (msgId) {
                    updateMessage(msgId, 'image', result);
                } else {
                    setProfilePic(result);
                }
            };
            reader.readAsDataURL(file);
        }
    };

    const handleDownload = async () => {
        if (previewRef.current) {
            const canvas = await html2canvas(previewRef.current, {
                backgroundColor: null,
                scale: 2 // High Res
            });
            const link = document.createElement('a');
            link.download = 'messenger-mockup-sajedar.png';
            link.href = canvas.toDataURL('image/png');
            link.click();
        }
    };

    // --- RENDER HELPERS ---

    const renderStatusIcon = (status?: string) => {
        if (!status) return null;
        if (status === 'sent') return <div className="w-3 h-3 rounded-full border border-gray-400"></div>;
        if (status === 'delivered') return <div className="bg-gray-400 rounded-full text-white p-[1px]"><Check size={8} strokeWidth={4} /></div>;
        if (status === 'read') return profilePic ? <img src={profilePic} className="w-3 h-3 rounded-full object-cover" /> : <div className="w-3 h-3 bg-gray-300 rounded-full"></div>;
        return null;
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-[#18181b] via-[#23243a] to-[#1a1a2e] flex flex-col font-sans">
            <Header />

            <div className="max-w-[1400px] mx-auto px-4 py-10 flex-grow w-full">
                <div className="text-center mb-8">
                    <span className="inline-block mb-3 px-3 py-1 text-sm font-semibold text-blue-400 bg-blue-400/10 rounded-full">
                        Agency Tool
                    </span>
                    <h1 className="text-3xl md:text-4xl font-serif font-bold text-white mb-2">
                        Messenger Mockup Studio
                    </h1>
                    <p className="text-gray-400">Draft, Visualize, and Export perfect chatbot conversations.</p>
                </div>

                <div className="grid lg:grid-cols-12 gap-8 items-start h-full">
                    
                    {/* --- LEFT PANEL: DIRECTOR'S PANEL --- */}
                    <div className="lg:col-span-7 bg-white/5 border border-white/10 rounded-2xl p-6 h-full overflow-y-auto max-h-[85vh] custom-scrollbar">
                        
                        {/* 1. Global Settings */}
                        <div className="mb-8 p-4 bg-black/20 rounded-xl border border-white/5">
                            <h3 className="text-white font-bold mb-4 flex items-center gap-2 text-sm uppercase tracking-wider">
                                <Phone size={14} className="text-blue-400" /> Global Settings
                            </h3>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="text-xs text-gray-400 block mb-1">Contact Name</label>
                                    <input value={contactName} onChange={e => setContactName(e.target.value)} className="w-full bg-white/5 border border-white/10 rounded px-2 py-1 text-white text-sm focus:border-blue-500 outline-none" />
                                </div>
                                <div>
                                    <label className="text-xs text-gray-400 block mb-1">Status Text</label>
                                    <input value={activeStatus} onChange={e => setActiveStatus(e.target.value)} className="w-full bg-white/5 border border-white/10 rounded px-2 py-1 text-white text-sm focus:border-blue-500 outline-none" />
                                </div>
                                <div>
                                    <label className="text-xs text-gray-400 block mb-1">Time</label>
                                    <input value={currentTime} onChange={e => setCurrentTime(e.target.value)} className="w-full bg-white/5 border border-white/10 rounded px-2 py-1 text-white text-sm focus:border-blue-500 outline-none" />
                                </div>
                                <div>
                                    <label className="text-xs text-gray-400 block mb-1">Profile Photo</label>
                                    <input type="file" accept="image/*" onChange={(e) => handleImageUpload(e)} className="w-full text-xs text-gray-500 file:mr-2 file:py-1 file:px-2 file:rounded file:border-0 file:bg-blue-500 file:text-white" />
                                </div>
                            </div>
                        </div>

                        {/* 2. Timeline Editor */}
                        <div className="mb-6">
                            <div className="flex justify-between items-center mb-4">
                                <h3 className="text-white font-bold text-sm uppercase tracking-wider">Conversation Timeline</h3>
                                <div className="flex gap-2">
                                    <button onClick={() => addMessage('user')} className="text-xs bg-blue-600 hover:bg-blue-500 text-white px-3 py-1.5 rounded-lg flex items-center gap-1 transition-all">+ Me</button>
                                    <button onClick={() => addMessage('bot')} className="text-xs bg-gray-600 hover:bg-gray-500 text-white px-3 py-1.5 rounded-lg flex items-center gap-1 transition-all">+ Bot</button>
                                    <button onClick={() => addMessage('typing')} className="text-xs bg-gray-700 hover:bg-gray-600 text-white px-3 py-1.5 rounded-lg flex items-center gap-1 transition-all">+ Typing</button>
                                </div>
                            </div>

                            <div className="space-y-3">
                                {messages.map((msg, index) => (
                                    <div key={msg.id} className="bg-black/40 border border-white/5 p-3 rounded-lg flex gap-3 items-start group hover:border-white/20 transition-all">
                                        {/* Drag Handles */}
                                        <div className="flex flex-col gap-1 pt-1 text-gray-600">
                                            <button onClick={() => moveMessage(index, 'up')} className="hover:text-white"><ArrowUp size={14} /></button>
                                            <button onClick={() => moveMessage(index, 'down')} className="hover:text-white"><ArrowDown size={14} /></button>
                                        </div>

                                        {/* Content Editor */}
                                        <div className="flex-grow space-y-2">
                                            <div className="flex justify-between">
                                                <span className={`text-xs font-bold px-2 py-0.5 rounded ${msg.type === 'user' ? 'bg-blue-500/20 text-blue-400' : msg.type === 'bot' ? 'bg-gray-500/20 text-gray-400' : 'bg-yellow-500/20 text-yellow-400'}`}>
                                                    {msg.type.toUpperCase()}
                                                </span>
                                                <button onClick={() => deleteMessage(index)} className="text-red-400 hover:text-red-300 opacity-0 group-hover:opacity-100 transition-opacity"><Trash2 size={14} /></button>
                                            </div>

                                            {/* Text Input */}
                                            {msg.type !== 'typing' && (
                                                <textarea 
                                                    value={msg.text} 
                                                    onChange={(e) => updateMessage(msg.id, 'text', e.target.value)} 
                                                    className="w-full bg-transparent border-b border-white/10 text-white text-sm focus:border-blue-500 outline-none resize-none h-auto overflow-hidden leading-relaxed"
                                                    rows={1}
                                                    placeholder="Type message..."
                                                />
                                            )}

                                            {/* Typing Indicator Label */}
                                            {msg.type === 'typing' && <p className="text-gray-500 text-xs italic">Three dots animation...</p>}

                                            {/* Bot Buttons */}
                                            {msg.type === 'bot' && (
                                                <div className="flex gap-2">
                                                    <input 
                                                        type="text" 
                                                        placeholder="Add Button Text (Optional)" 
                                                        className="bg-white/5 border border-white/10 rounded px-2 py-1 text-xs text-white w-full outline-none"
                                                        onBlur={(e) => e.target.value && updateMessage(msg.id, 'buttons', [...(msg.buttons || []), e.target.value])}
                                                    />
                                                    {msg.buttons?.map((btn, bIdx) => (
                                                        <span key={bIdx} className="bg-gray-700 text-white text-xs px-2 py-1 rounded flex items-center gap-1">
                                                            {btn} <button onClick={() => {
                                                                const newBtns = [...(msg.buttons || [])];
                                                                newBtns.splice(bIdx, 1);
                                                                updateMessage(msg.id, 'buttons', newBtns);
                                                            }} className="hover:text-red-400">×</button>
                                                        </span>
                                                    ))}
                                                </div>
                                            )}

                                            {/* User Status Toggle */}
                                            {msg.type === 'user' && (
                                                <div className="flex gap-2 text-xs text-gray-500">
                                                    <label className="flex items-center gap-1 cursor-pointer">
                                                        <input type="radio" checked={msg.status === 'sent'} onChange={() => updateMessage(msg.id, 'status', 'sent')} /> Sent
                                                    </label>
                                                    <label className="flex items-center gap-1 cursor-pointer">
                                                        <input type="radio" checked={msg.status === 'delivered'} onChange={() => updateMessage(msg.id, 'status', 'delivered')} /> Deliv.
                                                    </label>
                                                    <label className="flex items-center gap-1 cursor-pointer">
                                                        <input type="radio" checked={msg.status === 'read'} onChange={() => updateMessage(msg.id, 'status', 'read')} /> Read
                                                    </label>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <button onClick={handleDownload} className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl shadow-lg flex items-center justify-center gap-2 transition-all">
                            <Download size={20} /> Export HD PNG
                        </button>
                    </div>

                    {/* --- RIGHT PANEL: THE SIMULATION --- */}
                    <div className="lg:col-span-5 flex justify-center items-center h-full sticky top-20">
                        {/* Phone Container */}
                        <div ref={previewRef} className="w-[375px] bg-white rounded-[40px] border-8 border-[#1f1f1f] shadow-2xl overflow-hidden relative font-sans text-black flex flex-col h-[750px]">
                            
                            {/* StatusBar */}
                            <div className="h-12 px-6 flex justify-between items-end pb-2 bg-white z-10">
                                <span className="font-semibold text-sm">{currentTime}</span>
                                <div className="flex gap-1.5 items-center">
                                    <Wifi size={16} />
                                    <Battery size={20} fill="black" />
                                </div>
                            </div>

                            {/* Messenger Header */}
                            <div className="px-4 py-2 flex items-center justify-between border-b border-gray-100 bg-white z-10 shadow-sm">
                                <div className="flex items-center gap-3">
                                    <ChevronLeft size={28} className="text-[#0084FF]" />
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden relative border border-gray-100">
                                            {profilePic ? (
                                                <img src={profilePic} className="w-full h-full object-cover" alt="Profile" />
                                            ) : (
                                                <div className="w-full h-full flex items-center justify-center bg-gray-300 text-gray-500 text-xs">IMG</div>
                                            )}
                                            {/* Online Dot */}
                                            <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                                        </div>
                                        <div>
                                            <h2 className="font-bold text-[17px] leading-tight text-black">{contactName}</h2>
                                            <p className="text-[12px] text-gray-500">{activeStatus}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex gap-4 text-[#0084FF]">
                                    <Phone size={22} />
                                    <Video size={24} />
                                    <Info size={24} />
                                </div>
                            </div>

                            {/* Chat Area */}
                            <div className="flex-grow bg-white p-4 overflow-y-auto space-y-2 flex flex-col">
                                <div className="flex-grow"></div> {/* Spacer to push messages down */}
                                
                                {messages.map((msg, index) => {
                                    // Logic for grouping bubbles (rounded corners)
                                    const prev = messages[index - 1];
                                    const next = messages[index + 1];
                                    const isSequence = prev && prev.type === msg.type;
                                    const isLastInSequence = !next || next.type !== msg.type;

                                    if (msg.type === 'timestamp') {
                                        return (
                                            <div key={msg.id} className="text-center text-[11px] text-gray-400 my-4 font-medium uppercase tracking-wide">
                                                {msg.text}
                                            </div>
                                        );
                                    }

                                    if (msg.type === 'typing') {
                                        return (
                                            <div key={msg.id} className="self-start">
                                                <div className="flex items-center gap-2">
                                                    {(!prev || prev.type !== 'bot' && prev.type !== 'typing') && (
                                                        <div className="w-7 h-7 rounded-full bg-gray-200 overflow-hidden border border-gray-100 flex-shrink-0">
                                                            {profilePic ? <img src={profilePic} className="w-full h-full object-cover" /> : null}
                                                        </div>
                                                    )}
                                                    <div className={`bg-[#E4E6EB] px-4 py-3 rounded-2xl rounded-bl-sm flex gap-1 items-center ml-${(!prev || prev.type !== 'bot' && prev.type !== 'typing') ? '0' : '9'}`}>
                                                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                                                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                                                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    }

                                    if (msg.type === 'bot') {
                                        return (
                                            <div key={msg.id} className="self-start max-w-[80%] mb-1">
                                                <div className="flex items-end gap-2">
                                                    {(!prev || prev.type !== 'bot') && (
                                                        <div className="w-7 h-7 rounded-full bg-gray-200 overflow-hidden border border-gray-100 flex-shrink-0 mb-1">
                                                            {profilePic ? <img src={profilePic} className="w-full h-full object-cover" /> : null}
                                                        </div>
                                                    )}
                                                    <div className={`${(!prev || prev.type !== 'bot') ? '' : 'ml-9'} space-y-1`}>
                                                        <div className={`bg-[#E4E6EB] text-[15px] text-black px-4 py-2 rounded-2xl ${isLastInSequence ? 'rounded-bl-sm' : ''} ${isSequence ? 'rounded-tl-sm' : ''} whitespace-pre-wrap leading-snug`}>
                                                            {msg.text}
                                                        </div>
                                                        {msg.buttons && msg.buttons.length > 0 && (
                                                            <div className="space-y-1 mt-1">
                                                                {msg.buttons.map((btn, i) => (
                                                                    <div key={i} className="bg-white border border-gray-200 text-[#0084FF] text-center py-2 px-4 rounded-xl text-sm font-semibold shadow-sm cursor-pointer">
                                                                        {btn}
                                                                    </div>
                                                                ))}
                                                            </div>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    }

                                    if (msg.type === 'user') {
                                        return (
                                            <div key={msg.id} className="self-end max-w-[75%] flex flex-col items-end mb-1">
                                                <div className={`bg-[#0084FF] text-white text-[15px] px-4 py-2 rounded-2xl ${isLastInSequence ? 'rounded-br-sm' : ''} ${isSequence ? 'rounded-tr-sm' : ''} whitespace-pre-wrap leading-snug`}>
                                                    {msg.text}
                                                </div>
                                                {isLastInSequence && (
                                                    <div className="mt-1 mr-1">
                                                        {renderStatusIcon(msg.status)}
                                                    </div>
                                                )}
                                            </div>
                                        );
                                    }
                                })}
                            </div>

                            {/* Footer Input */}
                            <div className="h-16 px-3 bg-white flex items-center justify-between gap-3 z-10">
                                <div className="flex gap-3 text-[#0084FF]">
                                    <div className="bg-[#0084FF] p-1 rounded-full"><Plus size={16} className="text-white" /></div>
                                    <Camera size={24} />
                                    <ImageIcon size={24} />
                                    <Mic size={24} />
                                </div>
                                <div className="flex-grow bg-[#F0F2F5] h-9 rounded-full px-4 flex items-center text-gray-400 text-[15px]">
                                    Aa
                                </div>
                                <div className="text-[#0084FF]">
                                    <ThumbsUp size={24} />
                                </div>
                            </div>

                            {/* Home Indicator */}
                            <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-32 h-1 bg-black/20 rounded-full"></div>
                        </div>
                    </div>

                </div>
            </div>

            <Footer />
        </div>
    );
}