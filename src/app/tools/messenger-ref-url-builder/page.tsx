'use client';

import React, { useState, useEffect } from 'react';
import Header from '../../../components/Header';
import { Footer } from '../../../components/sections';
import { Facebook, Link as LinkIcon, Copy } from 'lucide-react';

export default function MessengerRefBuilderPage() {
    const [pageId, setPageId] = useState('');
    const [refParam, setRefParam] = useState('');
    const [generatedLink, setGeneratedLink] = useState('');

    useEffect(() => {
        if (!pageId) {
            setGeneratedLink('');
            return;
        }
        // Basic Link: m.me/PageID or m.me/Username
        let link = `https://m.me/${pageId}`;

        // Add ref if present
        if (refParam) {
            // Note: m.me links use the ?ref= parameter to pass data to the bot's "Get Started" payload
            link += `?ref=${encodeURIComponent(refParam)}`;
        }
        setGeneratedLink(link);
    }, [pageId, refParam]);

    const copyToClipboard = () => {
        if (!generatedLink) return;
        navigator.clipboard.writeText(generatedLink);
        alert("Link copied!");
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-[#18181b] via-[#23243a] to-[#1a1a2e] flex flex-col font-sans">
            <Header />

            <div className="max-w-5xl mx-auto px-4 py-20 flex-grow w-full">
                <div className="text-center mb-12">
                    <span className="inline-block mb-3 px-3 py-1 text-sm font-semibold text-emerald-400 bg-emerald-400/10 rounded-full">
                        Advanced Tool
                    </span>
                    <h1 className="text-3xl md:text-5xl font-serif font-bold text-white mb-4">
                        Messenger "Ref" URL Builder
                    </h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        Generate specific deep links for your Facebook Chatbot. Track exactly which ad, post, or QR code started the conversation.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12 items-start">
                    <div className="space-y-6">
                        <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8 space-y-6">
                            <div>
                                <label className="block text-gray-300 text-sm font-medium mb-2">Page ID or Username</label>
                                <input
                                    type="text"
                                    value={pageId}
                                    onChange={(e) => setPageId(e.target.value)}
                                    placeholder="e.g. SajedarAI or 100089..."
                                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-emerald-500"
                                />
                                <p className="text-xs text-gray-500 mt-2">Found in your Page Settings {'>'} About.</p>
                            </div>

                            <div>
                                <label className="block text-gray-300 text-sm font-medium mb-2">Ref Parameter (Campaign Tag)</label>
                                <input
                                    type="text"
                                    value={refParam}
                                    onChange={(e) => setRefParam(e.target.value)}
                                    placeholder="e.g. summer_sale_ad_1"
                                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-emerald-500"
                                />
                                <p className="text-xs text-gray-500 mt-2">
                                    This value is passed to your agent when the user clicks "Get Started". Use it to trigger specific flows.
                                </p>
                            </div>
                        </div>

                        <div className="bg-blue-900/20 border border-blue-500/20 rounded-xl p-6">
                            <h4 className="text-blue-400 font-bold mb-2 flex items-center gap-2">
                                <Facebook size={18} /> Why use Ref URLs?
                            </h4>
                            <p className="text-gray-300 text-sm leading-relaxed">
                                Unlike a generic message button, a Ref URL lets you know <em>context</em>.
                                You can send users coming from "Product A" directly to the "Product A Flow" inside your Sajedar bot, skipping the main menu.
                            </p>
                        </div>
                    </div>

                    <div className="bg-black/20 rounded-2xl border border-white/5 p-8 min-h-[300px] flex flex-col justify-center">
                        <h3 className="text-white font-bold mb-6 flex items-center gap-2">
                            <LinkIcon className="text-emerald-400" size={20} /> Generated Deep Link
                        </h3>

                        <div className="bg-black/40 rounded-lg p-4 mb-6 break-all text-emerald-400 font-mono text-sm border border-emerald-500/30 shadow-inner">
                            {generatedLink || 'https://m.me/YourPageID?ref=...'}
                        </div>

                        <button
                            onClick={copyToClipboard}
                            disabled={!generatedLink}
                            className="w-full bg-white/10 hover:bg-white/20 disabled:opacity-50 text-white font-bold py-4 rounded-xl transition-all flex items-center justify-center gap-2"
                        >
                            <Copy size={18} /> Copy to Clipboard
                        </button>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}