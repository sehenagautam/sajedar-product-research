'use client';

import React, { useState, useEffect } from 'react';
import Header from '../../../components/Header';
import { Footer } from '../../../components/sections';
import { Link as LinkIcon, Copy, AlertCircle } from 'lucide-react';

export default function UTMBuilderPage() {
    const [baseUrl, setBaseUrl] = useState('');
    const [source, setSource] = useState('facebook');
    const [medium, setMedium] = useState('cpc');
    const [campaign, setCampaign] = useState('');
    const [term, setTerm] = useState('');
    const [content, setContent] = useState('');
    
    const [finalUrl, setFinalUrl] = useState('');

    useEffect(() => {
        if (!baseUrl) {
            setFinalUrl('');
            return;
        }

        // Handle URL cleanup (remove existing params if needed, or append properly)
        // For this tool, we assume user pastes clean URL usually, or we strip it.
        // Let's strip query params to be safe or just append. Standard UTM builders usually expect base.
        let url = baseUrl.split('?')[0]; 
        
        const params = new URLSearchParams();
        if (source) params.set('utm_source', source);
        if (medium) params.set('utm_medium', medium);
        if (campaign) params.set('utm_campaign', campaign);
        if (term) params.set('utm_term', term);
        if (content) params.set('utm_content', content);

        const queryString = params.toString();
        
        if (queryString) {
            setFinalUrl(`${url}?${queryString}`);
        } else {
            setFinalUrl(url);
        }
    }, [baseUrl, source, medium, campaign, term, content]);

    const copyToClipboard = () => {
        if (!finalUrl) return;
        navigator.clipboard.writeText(finalUrl);
        alert("Tracking URL copied!");
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-[#18181b] via-[#23243a] to-[#1a1a2e] flex flex-col font-sans">
            <Header />

            <div className="max-w-5xl mx-auto px-4 py-20 flex-grow w-full">
                <div className="text-center mb-12">
                    <span className="inline-block mb-3 px-3 py-1 text-sm font-semibold text-emerald-400 bg-emerald-400/10 rounded-full">
                        Marketing Tool
                    </span>
                    <h1 className="text-3xl md:text-5xl font-serif font-bold text-white mb-4">
                        UTM Campaign URL Builder
                    </h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        Generate clean tracking links for your marketing campaigns. Know exactly which ad or post is driving your sales.
                    </p>
                </div>

                <div className="grid lg:grid-cols-3 gap-8 items-start">
                    {/* Form */}
                    <div className="lg:col-span-2 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8 space-y-6">
                        
                        <div>
                            <label className="block text-white font-bold mb-2 flex items-center gap-2">
                                <LinkIcon size={18} className="text-emerald-400" /> Website URL <span className="text-red-400">*</span>
                            </label>
                            <input
                                type="text"
                                value={baseUrl}
                                onChange={(e) => setBaseUrl(e.target.value)}
                                placeholder="https://sajedar.com/pricing"
                                className="w-full bg-black/20 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-emerald-500 placeholder-gray-500"
                            />
                            <p className="text-xs text-gray-500 mt-2">The full link to your landing page.</p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-gray-300 text-sm font-medium mb-2">Campaign Source <span className="text-red-400">*</span></label>
                                <input
                                    type="text"
                                    value={source}
                                    onChange={(e) => setSource(e.target.value)}
                                    placeholder="facebook, google, newsletter"
                                    className="w-full bg-black/20 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-emerald-500"
                                />
                            </div>
                            <div>
                                <label className="block text-gray-300 text-sm font-medium mb-2">Campaign Medium <span className="text-red-400">*</span></label>
                                <input
                                    type="text"
                                    value={medium}
                                    onChange={(e) => setMedium(e.target.value)}
                                    placeholder="cpc, banner, email"
                                    className="w-full bg-black/20 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-emerald-500"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-gray-300 text-sm font-medium mb-2">Campaign Name <span className="text-red-400">*</span></label>
                            <input
                                type="text"
                                value={campaign}
                                onChange={(e) => setCampaign(e.target.value)}
                                placeholder="summer_sale, dashain_promo"
                                className="w-full bg-black/20 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-emerald-500"
                            />
                        </div>

                        <div className="grid md:grid-cols-2 gap-6 border-t border-white/10 pt-6">
                            <div>
                                <label className="block text-gray-400 text-xs font-medium mb-2">Campaign Term (Optional)</label>
                                <input
                                    type="text"
                                    value={term}
                                    onChange={(e) => setTerm(e.target.value)}
                                    placeholder="running+shoes (for keywords)"
                                    className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-emerald-500 text-sm"
                                />
                            </div>
                            <div>
                                <label className="block text-gray-400 text-xs font-medium mb-2">Campaign Content (Optional)</label>
                                <input
                                    type="text"
                                    value={content}
                                    onChange={(e) => setContent(e.target.value)}
                                    placeholder="video_ad_1, text_link_top"
                                    className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-emerald-500 text-sm"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Result */}
                    <div className="lg:col-span-1">
                        <div className="bg-[#1e1e1e] rounded-2xl border border-white/10 p-6 sticky top-24">
                            <h3 className="text-white font-bold mb-4 flex items-center gap-2">
                                Generated URL
                            </h3>
                            
                            <div className="bg-black/40 rounded-lg p-4 mb-4 break-words text-emerald-400 font-mono text-xs border border-white/5 min-h-[100px]">
                                {finalUrl || 'Enter details to generate...'}
                            </div>

                            <button
                                onClick={copyToClipboard}
                                disabled={!finalUrl}
                                className={`w-full py-3 rounded-xl font-bold flex items-center justify-center gap-2 transition-all ${
                                    !finalUrl 
                                        ? 'bg-gray-700 text-gray-500 cursor-not-allowed'
                                        : 'bg-emerald-500 hover:bg-emerald-600 text-white shadow-lg'
                                }`}
                            >
                                <Copy size={18} /> Copy URL
                            </button>

                            <div className="mt-6 flex gap-3 items-start text-xs text-gray-400 bg-white/5 p-3 rounded-lg">
                                <AlertCircle size={16} className="text-yellow-400 flex-shrink-0 mt-0.5" />
                                <p>Use this URL in your Facebook Ad "Website URL" field. Google Analytics will automatically track the source.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}