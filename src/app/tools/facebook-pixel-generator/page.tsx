'use client';

import React, { useState, useEffect } from 'react';
import Header from '../../../components/Header';
import { Footer } from '../../../components/sections';
import { Code, Copy, CheckCircle, Activity } from 'lucide-react';

const EVENTS = [
    { label: 'Purchase', value: 'Purchase', desc: 'When someone completes a purchase.' },
    { label: 'Lead', value: 'Lead', desc: 'When someone signs up or submits a form.' },
    { label: 'Add to Cart', value: 'AddToCart', desc: 'When a product is added to the shopping cart.' },
    { label: 'Initiate Checkout', value: 'InitiateCheckout', desc: 'When someone starts the checkout process.' },
    { label: 'Complete Registration', value: 'CompleteRegistration', desc: 'When a registration form is completed.' },
    { label: 'Contact', value: 'Contact', desc: 'When a person contacts your business.' },
    { label: 'View Content', value: 'ViewContent', desc: 'When a key page (like product detail) is viewed.' },
];

export default function PixelGeneratorPage() {
    const [eventType, setEventType] = useState(EVENTS[0]);
    const [currency, setCurrency] = useState('NPR');
    const [value, setValue] = useState('0.00');
    const [contentName, setContentName] = useState('');
    const [contentId, setContentId] = useState('');
    
    const [generatedCode, setGeneratedCode] = useState('');
    const [copied, setCopied] = useState(false);

    useEffect(() => {
        // Build the params object dynamically
        const params: any = {};
        
        if (value && parseFloat(value) > 0) {
            params.value = parseFloat(value);
            params.currency = currency;
        }
        if (contentName) params.content_name = contentName;
        if (contentId) params.content_ids = [contentId];
        // Add content_type if ID is present
        if (contentId) params.content_type = 'product';

        const paramsString = Object.keys(params).length > 0 
            ? `, ${JSON.stringify(params, null, 4)}` 
            : '';

        const code = `<script>
  fbq('track', '${eventType.value}'${paramsString});
</script>`;
        
        setGeneratedCode(code);
    }, [eventType, currency, value, contentName, contentId]);

    const copyToClipboard = () => {
        navigator.clipboard.writeText(generatedCode);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-[#18181b] via-[#23243a] to-[#1a1a2e] flex flex-col font-sans">
            <Header />

            <div className="max-w-6xl mx-auto px-4 py-20 flex-grow w-full">
                <div className="text-center mb-12">
                    <span className="inline-block mb-3 px-3 py-1 text-sm font-semibold text-emerald-400 bg-emerald-400/10 rounded-full">
                        Developer Tool
                    </span>
                    <h1 className="text-3xl md:text-5xl font-serif font-bold text-white mb-4">
                        Facebook Pixel Code Generator
                    </h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        Generate the exact tracking code you need for "Purchase", "Lead", or "Add to Cart" events without breaking your website.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    {/* Input Form */}
                    <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8 space-y-6">
                        <div>
                            <label className="block text-gray-300 text-sm font-bold mb-2">Select Event Type</label>
                            <div className="grid gap-2">
                                {EVENTS.map((ev) => (
                                    <button
                                        key={ev.value}
                                        onClick={() => setEventType(ev)}
                                        className={`text-left px-4 py-3 rounded-lg border transition-all flex items-center justify-between group ${
                                            eventType.value === ev.value 
                                                ? 'bg-emerald-500/20 border-emerald-500 text-white' 
                                                : 'bg-black/20 border-white/10 text-gray-400 hover:bg-white/10'
                                        }`}
                                    >
                                        <div>
                                            <span className="font-bold block text-sm">{ev.label}</span>
                                            <span className="text-xs opacity-70">{ev.desc}</span>
                                        </div>
                                        {eventType.value === ev.value && <CheckCircle size={18} className="text-emerald-400" />}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-gray-300 text-xs font-bold mb-2 uppercase">Conversion Value</label>
                                <input
                                    type="number"
                                    value={value}
                                    onChange={(e) => setValue(e.target.value)}
                                    className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-2 text-white focus:border-emerald-500 outline-none"
                                />
                            </div>
                            <div>
                                <label className="block text-gray-300 text-xs font-bold mb-2 uppercase">Currency</label>
                                <select
                                    value={currency}
                                    onChange={(e) => setCurrency(e.target.value)}
                                    className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-2 text-white focus:border-emerald-500 outline-none [&>option]:bg-gray-800"
                                >
                                    <option value="NPR">NPR (Rs.)</option>
                                    <option value="USD">USD ($)</option>
                                    <option value="INR">INR (₹)</option>
                                    <option value="AUD">AUD ($)</option>
                                </select>
                            </div>
                        </div>
                        
                        <div className="pt-4 border-t border-white/10">
                            <p className="text-gray-400 text-xs mb-3 font-bold uppercase">Optional Advanced Params</p>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-gray-500 text-xs mb-1">Content Name</label>
                                    <input
                                        type="text"
                                        placeholder="Blue T-Shirt"
                                        value={contentName}
                                        onChange={(e) => setContentName(e.target.value)}
                                        className="w-full bg-black/20 border border-white/10 rounded-lg px-3 py-2 text-white text-sm focus:border-emerald-500 outline-none"
                                    />
                                </div>
                                <div>
                                    <label className="block text-gray-500 text-xs mb-1">Content ID (SKU)</label>
                                    <input
                                        type="text"
                                        placeholder="sku_1234"
                                        value={contentId}
                                        onChange={(e) => setContentId(e.target.value)}
                                        className="w-full bg-black/20 border border-white/10 rounded-lg px-3 py-2 text-white text-sm focus:border-emerald-500 outline-none"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Code Output */}
                    <div className="sticky top-24">
                        <div className="bg-[#1e1e1e] rounded-2xl border border-white/10 overflow-hidden shadow-2xl">
                            <div className="bg-white/5 px-4 py-3 border-b border-white/10 flex justify-between items-center">
                                <span className="text-gray-400 text-xs font-mono flex items-center gap-2">
                                    <Code size={14} /> header.php / head tag
                                </span>
                                <button
                                    onClick={copyToClipboard}
                                    className={`text-xs font-bold px-3 py-1.5 rounded transition-all flex items-center gap-2 ${
                                        copied 
                                            ? 'bg-emerald-500 text-white' 
                                            : 'bg-white/10 text-gray-300 hover:bg-white/20'
                                    }`}
                                >
                                    {copied ? 'Copied!' : <><Copy size={12} /> Copy Code</>}
                                </button>
                            </div>
                            <div className="p-6 overflow-x-auto">
                                <pre className="font-mono text-sm text-blue-300 leading-relaxed whitespace-pre-wrap">
                                    {generatedCode}
                                </pre>
                            </div>
                        </div>
                        
                        <div className="mt-6 bg-blue-900/20 border border-blue-500/20 rounded-xl p-4 flex gap-4 items-start">
                            <div className="bg-blue-500/20 p-2 rounded-lg">
                                <Activity size={20} className="text-blue-400" />
                            </div>
                            <div>
                                <h4 className="text-blue-400 font-bold text-sm mb-1">Where to paste this?</h4>
                                <p className="text-gray-400 text-xs leading-relaxed">
                                    Place this code inside the <code>&lt;head&gt;</code> tag of the specific page where the event happens (e.g., the "Thank You" page for purchases), <strong>after</strong> your base Pixel code.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}