'use client';

import React, { useState } from 'react';
import Header from '../../../components/Header';
import { Footer } from '../../../components/sections';
import { Type, Copy, RefreshCcw, ArrowRight } from 'lucide-react';

export default function BoldTextGeneratorPage() {
    const [inputText, setInputText] = useState('');
    const [boldText, setBoldText] = useState('');
    const [copied, setCopied] = useState(false);

    // Character Map for Mathematical Bold (Serif)
    const toBold = (text: string) => {
        const chars = text.split('');
        const boldChars = chars.map(c => {
            const n = c.charCodeAt(0);
            
            // Uppercase A-Z (0x1D400 - 0x1D419)
            if (n >= 65 && n <= 90) {
                return String.fromCodePoint(0x1D400 + (n - 65));
            }
            // Lowercase a-z (0x1D41A - 0x1D433)
            if (n >= 97 && n <= 122) {
                return String.fromCodePoint(0x1D41A + (n - 97));
            }
            // Digits 0-9 (0x1D7CE - 0x1D7D7)
            if (n >= 48 && n <= 57) {
                return String.fromCodePoint(0x1D7CE + (n - 48));
            }
            return c;
        });
        return boldChars.join('');
    };

    const handleConvert = () => {
        setBoldText(toBold(inputText));
        setCopied(false);
    };

    const copyToClipboard = () => {
        if (!boldText) return;
        navigator.clipboard.writeText(boldText);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-[#18181b] via-[#23243a] to-[#1a1a2e] flex flex-col font-sans">
            <Header />

            <div className="max-w-4xl mx-auto px-4 py-20 flex-grow w-full">
                <div className="text-center mb-12">
                    <span className="inline-block mb-3 px-3 py-1 text-sm font-semibold text-emerald-400 bg-emerald-400/10 rounded-full">
                        Free Tool
                    </span>
                    <h1 className="text-3xl md:text-5xl font-serif font-bold text-white mb-4">
                        Unicode Bold Text Generator
                    </h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        Make your Facebook and Instagram posts pop. Convert normal text into 𝐁𝐨𝐥𝐝 𝐓𝐞𝐱𝐭 that stands out in the newsfeed.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 items-center">
                    {/* Input */}
                    <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6 space-y-4">
                        <label className="block text-white font-bold flex items-center gap-2">
                            <Type size={18} className="text-emerald-400" /> Enter Text
                        </label>
                        <textarea
                            value={inputText}
                            onChange={(e) => {
                                setInputText(e.target.value);
                                setBoldText(toBold(e.target.value)); // Real-time conversion
                            }}
                            placeholder="Sale Alert! 50% Off..."
                            className="w-full h-40 bg-black/20 border border-white/20 rounded-xl p-4 text-white placeholder-gray-500 focus:border-emerald-500 focus:outline-none resize-none text-lg"
                        />
                    </div>

                    {/* Output */}
                    <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6 space-y-4 relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-emerald-500 to-blue-500" />
                        
                        <label className="block text-white font-bold flex items-center gap-2">
                            <ArrowRight size={18} className="text-emerald-400" /> Result
                        </label>
                        
                        <div className="w-full h-40 bg-black/40 border border-white/10 rounded-xl p-4 text-white text-lg overflow-y-auto break-words font-medium">
                            {boldText || <span className="text-gray-600 italic">Result will appear here...</span>}
                        </div>

                        <button
                            onClick={copyToClipboard}
                            disabled={!boldText}
                            className={`w-full py-3 rounded-xl font-bold flex items-center justify-center gap-2 transition-all ${
                                !boldText
                                    ? 'bg-gray-700 text-gray-500 cursor-not-allowed'
                                    : copied
                                        ? 'bg-emerald-500 text-white shadow-lg'
                                        : 'bg-white/10 hover:bg-white/20 text-white'
                            }`}
                        >
                            {copied ? 'Copied!' : <><Copy size={18} /> Copy Text</>}
                        </button>
                    </div>
                </div>

                <div className="mt-12 text-center text-gray-400 text-sm">
                    <p>Works on Facebook, Instagram, LinkedIn, and Twitter.</p>
                </div>
            </div>

            <Footer />
        </div>
    );
}