'use client';

import React, { useState, useEffect } from 'react';
import Header from '../../../components/Header';
import { Footer } from '../../../components/sections';
import { Copy, Layers, Calendar, Users, Layout } from 'lucide-react';

export default function CampaignNamingPage() {
    const [objective, setObjective] = useState('CONV');
    const [month, setMonth] = useState('');
    const [audience, setAudience] = useState('COLD');
    const [format, setFormat] = useState('IMG');
    const [customTag, setCustomTag] = useState('');
    
    const [finalName, setFinalName] = useState('');
    const [copied, setCopied] = useState(false);

    // Set current month automatically on load
    useEffect(() => {
        const date = new Date();
        const monthStr = date.toLocaleString('default', { month: 'short' }).toUpperCase();
        const yearStr = date.getFullYear().toString().substr(-2);
        setMonth(`${monthStr}${yearStr}`);
    }, []);

    useEffect(() => {
        // Format: OBJECTIVE_MONTH_AUDIENCE_FORMAT_CUSTOM
        const parts = [objective, month, audience, format];
        if (customTag) parts.push(customTag.toUpperCase().replace(/\s+/g, '-'));
        
        setFinalName(parts.join('_'));
    }, [objective, month, audience, format, customTag]);

    const copyToClipboard = () => {
        navigator.clipboard.writeText(finalName);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-[#18181b] via-[#23243a] to-[#1a1a2e] flex flex-col font-sans">
            <Header />

            <div className="max-w-4xl mx-auto px-4 py-20 flex-grow w-full">
                <div className="text-center mb-12">
                    <span className="inline-block mb-3 px-3 py-1 text-sm font-semibold text-emerald-400 bg-emerald-400/10 rounded-full">
                        Productivity Tool
                    </span>
                    <h1 className="text-3xl md:text-5xl font-serif font-bold text-white mb-4">
                        Campaign Naming Generator
                    </h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        Stop the ad account chaos. Generate standardized, professional campaign names that make reporting easy.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 items-start">
                    {/* Controls */}
                    <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8 space-y-6">
                        <div>
                            <label className="block text-gray-400 text-xs font-bold mb-2 flex items-center gap-2">
                                <Layers size={14} /> 1. Objective
                            </label>
                            <select
                                value={objective}
                                onChange={(e) => setObjective(e.target.value)}
                                className="w-full bg-black/20 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-emerald-500 [&>option]:bg-gray-800"
                            >
                                <option value="CONV">Conversions (Sales)</option>
                                <option value="LEAD">Lead Generation</option>
                                <option value="TRAFFIC">Traffic / Clicks</option>
                                <option value="AWARE">Brand Awareness</option>
                                <option value="ENG">Engagement</option>
                                <option value="MSG">Messages</option>
                            </select>
                        </div>

                        <div>
                            <label className="block text-gray-400 text-xs font-bold mb-2 flex items-center gap-2">
                                <Calendar size={14} /> 2. Month/Year
                            </label>
                            <input
                                type="text"
                                value={month}
                                onChange={(e) => setMonth(e.target.value.toUpperCase())}
                                placeholder="JAN26"
                                className="w-full bg-black/20 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-emerald-500 uppercase"
                            />
                        </div>

                        <div>
                            <label className="block text-gray-400 text-xs font-bold mb-2 flex items-center gap-2">
                                <Users size={14} /> 3. Audience
                            </label>
                            <select
                                value={audience}
                                onChange={(e) => setAudience(e.target.value)}
                                className="w-full bg-black/20 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-emerald-500 [&>option]:bg-gray-800"
                            >
                                <option value="COLD">Cold Traffic (Broad)</option>
                                <option value="RET">Retargeting (Warm)</option>
                                <option value="LAL">Lookalike (LAL)</option>
                                <option value="CUST">Existing Customers</option>
                            </select>
                        </div>

                        <div>
                            <label className="block text-gray-400 text-xs font-bold mb-2 flex items-center gap-2">
                                <Layout size={14} /> 4. Ad Format
                            </label>
                            <select
                                value={format}
                                onChange={(e) => setFormat(e.target.value)}
                                className="w-full bg-black/20 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-emerald-500 [&>option]:bg-gray-800"
                            >
                                <option value="IMG">Single Image</option>
                                <option value="VID">Video</option>
                                <option value="CAR">Carousel</option>
                                <option value="COLL">Collection</option>
                                <option value="DYN">Dynamic Creative</option>
                            </select>
                        </div>

                        <div>
                            <label className="block text-gray-400 text-xs font-bold mb-2">5. Custom Tag (Optional)</label>
                            <input
                                type="text"
                                value={customTag}
                                onChange={(e) => setCustomTag(e.target.value)}
                                placeholder="e.g. PROMO50"
                                className="w-full bg-black/20 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-emerald-500 uppercase"
                            />
                        </div>
                    </div>

                    {/* Output */}
                    <div className="bg-[#1e1e1e] rounded-2xl border border-white/10 p-8 flex flex-col justify-center h-full sticky top-24">
                        <h3 className="text-gray-400 font-bold mb-4 uppercase tracking-widest text-xs">Generated Name</h3>
                        
                        <div className="bg-black/40 rounded-xl p-6 mb-6 break-all border border-white/5">
                            <code className="text-2xl md:text-3xl text-emerald-400 font-bold font-mono">
                                {finalName}
                            </code>
                        </div>

                        <button
                            onClick={copyToClipboard}
                            className={`w-full py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 transition-all ${
                                copied
                                    ? 'bg-emerald-500 text-white shadow-lg'
                                    : 'bg-white/10 hover:bg-white/20 text-white'
                            }`}
                        >
                            {copied ? 'Copied!' : <><Copy size={20} /> Copy Name</>}
                        </button>

                        <div className="mt-8 text-xs text-gray-500 leading-relaxed">
                            <p><strong>Why structure matters:</strong> When you have 50 campaigns running, finding the "Retargeting Video" campaign from "January" takes seconds with this structure, instead of digging through random names.</p>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}