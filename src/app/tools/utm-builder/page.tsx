'use client';

import React, { useState, useEffect } from 'react';
import Header from '../../../components/Header';
import { Footer } from '../../../components/sections';

export default function UTMBuilderPage() {
    const [baseUrl, setBaseUrl] = useState('');
    const [source, setSource] = useState('');
    const [medium, setMedium] = useState('');
    const [campaign, setCampaign] = useState('');
    const [term, setTerm] = useState('');
    const [content, setContent] = useState('');
    const [generatedUrl, setGeneratedUrl] = useState('');
    const [copied, setCopied] = useState(false);

    useEffect(() => {
        if (!baseUrl) {
            setGeneratedUrl('');
            return;
        }

        try {
            // Basic validation to ensure URL has protocol
            let validUrl = baseUrl;
            if (!validUrl.match(/^https?:\/\//)) {
                validUrl = 'https://' + validUrl;
            }

            const url = new URL(validUrl);
            
            if (source) url.searchParams.set('utm_source', source);
            if (medium) url.searchParams.set('utm_medium', medium);
            if (campaign) url.searchParams.set('utm_campaign', campaign);
            if (term) url.searchParams.set('utm_term', term);
            if (content) url.searchParams.set('utm_content', content);

            setGeneratedUrl(url.toString());
        } catch (e) {
            // Invalid URL entered, just return basics or empty
            setGeneratedUrl('');
        }
    }, [baseUrl, source, medium, campaign, term, content]);

    const copyToClipboard = () => {
        if (!generatedUrl) return;
        navigator.clipboard.writeText(generatedUrl);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-[#18181b] via-[#23243a] to-[#1a1a2e] flex flex-col font-sans">
            <Header />

            <div className="max-w-4xl mx-auto px-4 py-20 flex-grow w-full">
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8 md:p-12 shadow-2xl">
                    <div className="text-center mb-10">
                        <span className="inline-block mb-3 px-3 py-1 text-sm font-semibold text-emerald-400 bg-emerald-400/10 rounded-full">
                            Free Tool
                        </span>
                        <h1 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">
                            UTM Parameter Builder
                        </h1>
                        <p className="text-gray-300">
                            Generate clean tracking links for your Facebook Ads, email newsletters, and social media campaigns.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="space-y-5">
                            <div>
                                <label className="block text-white text-sm font-bold mb-2">
                                    Website URL <span className="text-red-400">*</span>
                                </label>
                                <input
                                    type="text"
                                    value={baseUrl}
                                    onChange={(e) => setBaseUrl(e.target.value)}
                                    className="w-full bg-white/10 border border-emerald-500/50 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-emerald-400 transition-colors placeholder-gray-500"
                                    placeholder="e.g. sajedar.com"
                                />
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-gray-300 text-sm font-medium mb-2">
                                        Source <span className="text-red-400">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        value={source}
                                        onChange={(e) => setSource(e.target.value)}
                                        className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-emerald-500 transition-colors placeholder-gray-500"
                                        placeholder="facebook"
                                    />
                                </div>
                                <div>
                                    <label className="block text-gray-300 text-sm font-medium mb-2">
                                        Medium <span className="text-red-400">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        value={medium}
                                        onChange={(e) => setMedium(e.target.value)}
                                        className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-emerald-500 transition-colors placeholder-gray-500"
                                        placeholder="cpc"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-gray-300 text-sm font-medium mb-2">
                                    Campaign Name
                                </label>
                                <input
                                    type="text"
                                    value={campaign}
                                    onChange={(e) => setCampaign(e.target.value)}
                                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-emerald-500 transition-colors placeholder-gray-500"
                                    placeholder="summer_sale"
                                />
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-gray-400 text-xs font-medium mb-2">
                                        Campaign Term (Optional)
                                    </label>
                                    <input
                                        type="text"
                                        value={term}
                                        onChange={(e) => setTerm(e.target.value)}
                                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white text-sm focus:outline-none focus:border-emerald-500 transition-colors placeholder-gray-600"
                                        placeholder="running+shoes"
                                    />
                                </div>
                                <div>
                                    <label className="block text-gray-400 text-xs font-medium mb-2">
                                        Campaign Content (Optional)
                                    </label>
                                    <input
                                        type="text"
                                        value={content}
                                        onChange={(e) => setContent(e.target.value)}
                                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white text-sm focus:outline-none focus:border-emerald-500 transition-colors placeholder-gray-600"
                                        placeholder="logolink"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Result Section */}
                        <div className="bg-black/20 rounded-xl p-6 border border-white/5 flex flex-col justify-center">
                            <label className="block text-emerald-400 text-sm font-bold mb-3">
                                Your Generated URL
                            </label>
                            
                            <div className="bg-black/40 rounded-lg p-4 mb-4 min-h-[100px] break-all text-gray-300 font-mono text-sm border border-white/10">
                                {generatedUrl || 'Fill in the fields to generate your link...'}
                            </div>

                            <button
                                onClick={copyToClipboard}
                                disabled={!generatedUrl}
                                className={`w-full font-bold py-3 rounded-lg transition-all transform active:scale-95 ${
                                    !generatedUrl 
                                        ? 'bg-gray-700 text-gray-400 cursor-not-allowed'
                                        : copied
                                            ? 'bg-green-600 text-white shadow-lg shadow-green-600/20'
                                            : 'bg-emerald-500 hover:bg-emerald-600 text-white shadow-lg shadow-emerald-500/20'
                                }`}
                            >
                                {copied ? 'Link Copied!' : 'Copy Link'}
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}