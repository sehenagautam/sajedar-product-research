'use client';

import React, { useState } from 'react';
import Header from '../../../components/Header';
import { Footer } from '../../../components/sections';
import { Hash, RefreshCw, Copy, Check } from 'lucide-react';

export default function HashtagShufflerPage() {
    const [input, setInput] = useState('');
    const [limit, setLimit] = useState<number>(30);
    const [output, setOutput] = useState('');
    const [copied, setCopied] = useState(false);

    // Initial placeholder hashtags
    const placeholder = "#business #marketing #nepal #sajedar #automation #chatbot #sales #growth #tech #startup #entrepreneur #digitalmarketing #facebookads #instagramtips #smallbiz";

    const shuffleHashtags = () => {
        // 1. Split string by spaces or newlines
        // 2. Filter for words starting with #
        let tags = input.match(/#[\w\u0590-\u05ff]+/g) || input.split(/\s+/).filter(w => w.startsWith('#'));
        
        if (!tags || tags.length === 0) {
            // If user pasted list without #, try to be smart and accept plain words too
            tags = input.split(/[\s,]+/).filter(w => w.length > 1);
            // Add # if missing
            tags = tags.map(t => t.startsWith('#') ? t : `#${t}`);
        }

        if (tags.length === 0) return;

        // Fisher-Yates Shuffle
        for (let i = tags.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [tags[i], tags[j]] = [tags[j], tags[i]];
        }

        // Slice to limit
        const selected = tags.slice(0, limit);
        setOutput(selected.join(' '));
        setCopied(false);
    };

    const copyToClipboard = () => {
        if (!output) return;
        navigator.clipboard.writeText(output);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-[#18181b] via-[#23243a] to-[#1a1a2e] flex flex-col font-sans">
            <Header />

            <div className="max-w-5xl mx-auto px-4 py-20 flex-grow w-full">
                <div className="text-center mb-12">
                    <span className="inline-block mb-3 px-3 py-1 text-sm font-semibold text-emerald-400 bg-emerald-400/10 rounded-full">
                        Social Tool
                    </span>
                    <h1 className="text-3xl md:text-5xl font-serif font-bold text-white mb-4">
                        Hashtag Shuffler & Mixer
                    </h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        Avoid the "shadowban." Randomize your hashtag order and pick a fresh subset every time you post.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {/* Input */}
                    <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6 flex flex-col h-[500px]">
                        <label className="text-white font-bold mb-4 flex items-center gap-2">
                            <Hash size={18} className="text-emerald-400" /> Paste Your Master List
                        </label>
                        <textarea
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            placeholder={placeholder}
                            className="w-full flex-grow bg-black/20 border border-white/20 rounded-xl p-4 text-white placeholder-gray-500 focus:border-emerald-500 focus:outline-none resize-none text-sm leading-relaxed"
                        />
                        <div className="mt-4 flex items-center justify-between gap-4">
                            <div className="flex items-center gap-2">
                                <label className="text-gray-300 text-sm">Pick:</label>
                                <input 
                                    type="number" 
                                    value={limit}
                                    onChange={(e) => setLimit(Number(e.target.value))}
                                    min={1}
                                    max={30}
                                    className="w-16 bg-black/40 border border-white/20 rounded px-2 py-1 text-white text-center focus:outline-none focus:border-emerald-500"
                                />
                            </div>
                            <button
                                onClick={shuffleHashtags}
                                disabled={!input}
                                className={`flex-grow py-3 rounded-lg font-bold flex items-center justify-center gap-2 transition-all ${
                                    !input ? 'bg-gray-700 text-gray-500' : 'bg-emerald-500 hover:bg-emerald-600 text-white'
                                }`}
                            >
                                <RefreshCw size={18} /> Shuffle & Pick
                            </button>
                        </div>
                    </div>

                    {/* Output */}
                    <div className="bg-black/20 rounded-2xl border border-white/10 p-6 flex flex-col h-[500px]">
                        <label className="text-white font-bold mb-4 flex items-center gap-2">
                            <Check size={18} className="text-blue-400" /> Shuffled Result
                        </label>
                        
                        <div className="w-full flex-grow bg-black/40 border border-white/5 rounded-xl p-4 text-emerald-300 text-sm leading-relaxed overflow-y-auto break-words font-mono">
                            {output || <span className="text-gray-600 italic">// Your randomized tags will appear here ready to copy...</span>}
                        </div>

                        <button
                            onClick={copyToClipboard}
                            disabled={!output}
                            className={`mt-4 w-full py-3 rounded-lg font-bold flex items-center justify-center gap-2 transition-all ${
                                !output
                                    ? 'bg-white/5 text-gray-500 cursor-not-allowed'
                                    : copied
                                        ? 'bg-blue-500 text-white'
                                        : 'bg-white/10 hover:bg-white/20 text-white'
                            }`}
                        >
                            {copied ? 'Copied to Clipboard!' : <><Copy size={18} /> Copy Tags</>}
                        </button>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}