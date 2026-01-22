'use client';

import React, { useState } from 'react';
import Header from '../../../components/Header';
import { Footer } from '../../../components/sections';
import { RefreshCw, MessageCircle } from 'lucide-react';

export default function SpintaxTesterPage() {
    const [input, setInput] = useState('{Hello|Hi|Hey} {there|friend|buddy}, how are you?');
    const [variations, setVariations] = useState<string[]>([]);

    const spin = (text: string) => {
        const matches = text.match(/\{[^{}]+\}/g);
        if (!matches) return text;

        let result = text;
        matches.forEach(match => {
            const options = match.slice(1, -1).split('|');
            const randomOption = options[Math.floor(Math.random() * options.length)];
            result = result.replace(match, randomOption);
        });
        return result;
    };

    const generateVariations = () => {
        const results = [];
        for (let i = 0; i < 10; i++) {
            results.push(spin(input));
        }
        setVariations(results);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-[#18181b] via-[#23243a] to-[#1a1a2e] flex flex-col font-sans">
            <Header />

            <div className="max-w-5xl mx-auto px-4 py-20 flex-grow w-full">
                <div className="text-center mb-12">
                    <span className="inline-block mb-3 px-3 py-1 text-sm font-semibold text-emerald-400 bg-emerald-400/10 rounded-full">
                        Chatbot Tool
                    </span>
                    <h1 className="text-3xl md:text-5xl font-serif font-bold text-white mb-4">
                        Spintax Generator & Tester
                    </h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        Make your bot sound human. Test your message variations to ensure every user gets a slightly different, natural greeting.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-10 items-start">
                    {/* Input */}
                    <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8 flex flex-col h-full min-h-[400px]">
                        <label className="text-gray-300 font-bold mb-3 flex items-center gap-2">
                            <MessageCircle size={18} className="text-emerald-400" /> Enter Spintax Message
                        </label>
                        <p className="text-xs text-gray-500 mb-4">
                            Use format: <code>{`{Option1|Option2}`}</code>
                        </p>
                        
                        <textarea
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            className="w-full flex-grow bg-black/20 border border-white/20 rounded-xl p-4 text-white placeholder-gray-500 focus:border-emerald-500 focus:outline-none resize-none font-mono text-sm leading-relaxed mb-6"
                        />
                        
                        <button
                            onClick={generateVariations}
                            className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-4 rounded-xl shadow-lg flex items-center justify-center gap-2 transition-all"
                        >
                            <RefreshCw size={20} /> Generate 10 Variations
                        </button>
                    </div>

                    {/* Output */}
                    <div className="bg-black/20 rounded-2xl border border-white/10 p-8 flex flex-col h-full min-h-[400px]">
                        <h3 className="text-white font-bold mb-4">Test Results</h3>
                        
                        <div className="flex-grow space-y-3 overflow-y-auto max-h-[500px] pr-2 custom-scrollbar">
                            {variations.length > 0 ? (
                                variations.map((v, i) => (
                                    <div key={i} className="bg-white/5 p-4 rounded-lg border border-white/5 text-gray-300 text-sm animate-in fade-in slide-in-from-bottom-2" style={{ animationDelay: `${i * 50}ms` }}>
                                        <span className="text-emerald-500 font-mono mr-3 text-xs opacity-50">#{i + 1}</span>
                                        {v}
                                    </div>
                                ))
                            ) : (
                                <div className="h-full flex flex-col items-center justify-center text-gray-500 text-sm italic">
                                    <p>Click "Generate" to see random variations here.</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}