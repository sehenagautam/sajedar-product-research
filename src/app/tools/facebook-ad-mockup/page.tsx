'use client';

import React, { useState } from 'react';
import Header from '../../../components/Header';
import { Footer } from '../../../components/sections';
import { Upload, Layout, Type, Globe, MoreHorizontal, ThumbsUp, MessageCircle, Share2 } from 'lucide-react';

export default function AdMockupPage() {
    const [adData, setAdData] = useState({
        pageName: 'Sajedar',
        primaryText: 'Automate your business sales with our new AI Chatbot. 24/7 customer support without the hiring headache.',
        headline: 'Chat with us to learn more',
        description: 'SAJEDAR.COM',
        cta: 'Send Message'
    });
    
    const [adImage, setAdImage] = useState<string | null>(null);
    const [profileImage, setProfileImage] = useState<string | null>(null);

    const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>, setter: React.Dispatch<React.SetStateAction<string | null>>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (event) => setter(event.target?.result as string);
            reader.readAsDataURL(file);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-[#18181b] via-[#23243a] to-[#1a1a2e] flex flex-col font-sans">
            <Header />

            <div className="max-w-7xl mx-auto px-4 py-20 flex-grow w-full">
                <div className="text-center mb-10">
                    <span className="inline-block mb-3 px-3 py-1 text-sm font-semibold text-emerald-400 bg-emerald-400/10 rounded-full">
                        Free Tool
                    </span>
                    <h1 className="text-3xl md:text-5xl font-serif font-bold text-white mb-4">
                        Facebook Ad Mockup Generator
                    </h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        Stop guessing. Preview exactly how your ad will look on the Facebook News Feed before you spend a rupee.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    {/* Controls */}
                    <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8 space-y-6">
                        <h3 className="text-white font-bold mb-4 flex items-center gap-2">
                            <Layout size={20} className="text-emerald-400" /> Ad Content
                        </h3>

                        {/* Page Info */}
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-gray-400 text-xs mb-2">Page Name</label>
                                <input
                                    type="text"
                                    value={adData.pageName}
                                    onChange={(e) => setAdData({...adData, pageName: e.target.value})}
                                    className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-2 text-white focus:border-emerald-500 outline-none"
                                />
                            </div>
                            <div>
                                <label className="block text-gray-400 text-xs mb-2">Profile Pic</label>
                                <input
                                    type="file"
                                    accept="image/*"
                                    onChange={(e) => handleImageUpload(e, setProfileImage)}
                                    className="w-full text-xs text-gray-400"
                                />
                            </div>
                        </div>

                        {/* Main Image */}
                        <div>
                            <label className="block text-gray-400 text-xs mb-2">Ad Image (1080x1080 or 1200x628)</label>
                            <div className="relative">
                                <input
                                    type="file"
                                    accept="image/*"
                                    onChange={(e) => handleImageUpload(e, setAdImage)}
                                    className="w-full text-sm text-gray-400 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-xs file:bg-emerald-500 file:text-white hover:file:bg-emerald-600 cursor-pointer border border-white/10 rounded-lg p-2 bg-black/20"
                                />
                            </div>
                        </div>

                        {/* Text Fields */}
                        <div>
                            <label className="block text-gray-400 text-xs mb-2">Primary Text (Body)</label>
                            <textarea
                                value={adData.primaryText}
                                onChange={(e) => setAdData({...adData, primaryText: e.target.value})}
                                className="w-full h-24 bg-black/20 border border-white/10 rounded-lg px-4 py-2 text-white focus:border-emerald-500 outline-none resize-none"
                            />
                        </div>

                        <div>
                            <label className="block text-gray-400 text-xs mb-2">Headline</label>
                            <input
                                type="text"
                                value={adData.headline}
                                onChange={(e) => setAdData({...adData, headline: e.target.value})}
                                className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-2 text-white focus:border-emerald-500 outline-none font-bold"
                            />
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-gray-400 text-xs mb-2">Link Description</label>
                                <input
                                    type="text"
                                    value={adData.description}
                                    onChange={(e) => setAdData({...adData, description: e.target.value})}
                                    className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-2 text-white focus:border-emerald-500 outline-none"
                                />
                            </div>
                            <div>
                                <label className="block text-gray-400 text-xs mb-2">Call to Action</label>
                                <select
                                    value={adData.cta}
                                    onChange={(e) => setAdData({...adData, cta: e.target.value})}
                                    className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-2 text-white focus:border-emerald-500 outline-none [&>option]:bg-gray-800"
                                >
                                    <option>Send Message</option>
                                    <option>Learn More</option>
                                    <option>Shop Now</option>
                                    <option>Sign Up</option>
                                    <option>Book Now</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    {/* Preview Area - The "Fake" Post */}
                    <div className="flex flex-col items-center justify-center">
                        <p className="text-gray-400 text-xs mb-4 uppercase tracking-widest">Mobile Feed Preview</p>
                        
                        {/* Facebook Card Container */}
                        <div className="bg-white w-[375px] rounded-lg overflow-hidden shadow-2xl">
                            {/* Header */}
                            <div className="p-3 flex justify-between items-start">
                                <div className="flex gap-2">
                                    <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden border border-gray-100 flex-shrink-0">
                                        {profileImage ? (
                                            <img src={profileImage} alt="Profile" className="w-full h-full object-cover" />
                                        ) : (
                                            <div className="w-full h-full flex items-center justify-center text-gray-400 text-xs">IMG</div>
                                        )}
                                    </div>
                                    <div>
                                        <h4 className="text-sm font-bold text-gray-900 leading-tight">{adData.pageName}</h4>
                                        <p className="text-[11px] text-gray-500 flex items-center gap-1">
                                            Sponsored <Globe size={10} />
                                        </p>
                                    </div>
                                </div>
                                <MoreHorizontal size={20} className="text-gray-500" />
                            </div>

                            {/* Primary Text */}
                            <div className="px-3 pb-2 text-sm text-gray-900 whitespace-pre-wrap">
                                {adData.primaryText}
                            </div>

                            {/* Ad Media */}
                            <div className="w-full bg-gray-100 min-h-[250px] flex items-center justify-center overflow-hidden relative">
                                {adImage ? (
                                    <img src={adImage} alt="Ad Creative" className="w-full h-auto object-cover" />
                                ) : (
                                    <div className="text-gray-400 text-sm">No Image Selected</div>
                                )}
                            </div>

                            {/* CTA Bar */}
                            <div className="bg-gray-100 px-3 py-3 flex justify-between items-center border-t border-gray-200">
                                <div className="flex-1 pr-2 min-w-0">
                                    <p className="text-[11px] text-gray-500 uppercase truncate">{adData.description}</p>
                                    <h3 className="text-sm font-bold text-gray-900 truncate leading-tight mt-0.5">{adData.headline}</h3>
                                </div>
                                <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 text-xs font-bold px-3 py-2 rounded border border-gray-300 whitespace-nowrap transition-colors">
                                    {adData.cta}
                                </button>
                            </div>

                            {/* Engagement Footer */}
                            <div className="px-3 py-2 flex justify-between items-center border-t border-gray-200 text-gray-500 text-xs">
                                <div className="flex items-center gap-1">
                                    <div className="bg-blue-500 rounded-full p-0.5"><ThumbsUp size={8} className="text-white fill-current" /></div>
                                    <span>24</span>
                                </div>
                                <div className="flex gap-3">
                                    <span>4 Comments</span>
                                    <span>1 Share</span>
                                </div>
                            </div>
                            <div className="px-3 py-2 flex justify-between border-t border-gray-200">
                                <button className="flex-1 flex items-center justify-center gap-2 py-1 text-gray-600 hover:bg-gray-50 rounded">
                                    <ThumbsUp size={18} /> <span className="text-xs font-semibold">Like</span>
                                </button>
                                <button className="flex-1 flex items-center justify-center gap-2 py-1 text-gray-600 hover:bg-gray-50 rounded">
                                    <MessageCircle size={18} /> <span className="text-xs font-semibold">Comment</span>
                                </button>
                                <button className="flex-1 flex items-center justify-center gap-2 py-1 text-gray-600 hover:bg-gray-50 rounded">
                                    <Share2 size={18} /> <span className="text-xs font-semibold">Share</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}