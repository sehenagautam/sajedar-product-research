'use client';

import React, { useState } from 'react';
import Header from '../../../components/Header';
import { Footer } from '../../../components/sections';
import { Phone, CheckCircle, AlertTriangle, Copy, Trash2 } from 'lucide-react';

export default function PhoneSanitizerPage() {
    const [input, setInput] = useState('');
    const [cleanList, setCleanList] = useState<string[]>([]);
    const [invalidCount, setInvalidCount] = useState(0);
    const [duplicateCount, setDuplicateCount] = useState(0);

    const sanitizeNumbers = () => {
        // 1. Split by newlines or commas
        const rawLines = input.split(/[\n,]+/).map(s => s.trim()).filter(s => s !== '');
        
        const validSet = new Set<string>();
        let invalid = 0;
        let dups = 0;

        rawLines.forEach(line => {
            // 2. Remove all non-digits
            let digits = line.replace(/\D/g, '');

            // 3. Normalize to 977 format
            // If it starts with 0 (e.g. 098...), remove the 0
            if (digits.startsWith('0')) {
                digits = digits.substring(1);
            }

            // Check if it's a standard 10-digit mobile number (starts with 98 or 97)
            if (digits.length === 10 && (digits.startsWith('98') || digits.startsWith('97'))) {
                digits = '977' + digits;
            }

            // Final check: Must be 13 digits and start with 977
            if (digits.length === 13 && digits.startsWith('977')) {
                if (validSet.has(digits)) {
                    dups++;
                } else {
                    validSet.add(digits);
                }
            } else {
                invalid++;
            }
        });

        setCleanList(Array.from(validSet));
        setInvalidCount(invalid);
        setDuplicateCount(dups);
    };

    const copyToClipboard = () => {
        if (cleanList.length === 0) return;
        navigator.clipboard.writeText(cleanList.join('\n'));
        alert(`Copied ${cleanList.length} numbers!`);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-[#18181b] via-[#23243a] to-[#1a1a2e] flex flex-col font-sans">
            <Header />

            <div className="max-w-6xl mx-auto px-4 py-20 flex-grow w-full">
                <div className="text-center mb-12">
                    <span className="inline-block mb-3 px-3 py-1 text-sm font-semibold text-emerald-400 bg-emerald-400/10 rounded-full">
                        Data Tool
                    </span>
                    <h1 className="text-3xl md:text-5xl font-serif font-bold text-white mb-4">
                        Nepal Phone Number Sanitizer
                    </h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        Clean your messy contact lists instantly. Remove spaces, dashes, and duplicates, and format everything to <code className="bg-black/30 px-2 py-1 rounded">97798XXXXXXXX</code> for WhatsApp/SMS broadcasting.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-10 items-start">
                    {/* Input */}
                    <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6 flex flex-col h-[600px]">
                        <label className="text-white font-bold mb-4 flex items-center gap-2">
                            <Phone size={18} className="text-emerald-400" /> Paste Messy Numbers
                        </label>
                        <textarea
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            placeholder={`9841-123456\n980 333 4444\n+977-98510-11111\n(Invalid numbers will be removed)`}
                            className="w-full flex-grow bg-black/20 border border-white/20 rounded-xl p-4 text-white placeholder-gray-500 focus:border-emerald-500 focus:outline-none resize-none font-mono text-sm leading-relaxed mb-4"
                        />
                        <button
                            onClick={sanitizeNumbers}
                            disabled={!input}
                            className={`w-full py-3 rounded-xl font-bold flex items-center justify-center gap-2 transition-all ${
                                !input ? 'bg-gray-700 text-gray-500' : 'bg-emerald-500 hover:bg-emerald-600 text-white shadow-lg'
                            }`}
                        >
                            <CheckCircle size={18} /> Clean & Format
                        </button>
                    </div>

                    {/* Output */}
                    <div className="bg-black/20 rounded-2xl border border-white/10 p-6 flex flex-col h-[600px]">
                        <div className="flex justify-between items-center mb-4">
                            <label className="text-white font-bold flex items-center gap-2">
                                <CheckCircle size={18} className="text-blue-400" /> Clean List ({cleanList.length})
                            </label>
                            
                            {(invalidCount > 0 || duplicateCount > 0) && (
                                <div className="flex gap-3 text-xs">
                                    {duplicateCount > 0 && <span className="text-yellow-400 flex items-center gap-1"><Trash2 size={12}/> {duplicateCount} Duplicates Removed</span>}
                                    {invalidCount > 0 && <span className="text-red-400 flex items-center gap-1"><AlertTriangle size={12}/> {invalidCount} Invalid Removed</span>}
                                </div>
                            )}
                        </div>

                        <div className="w-full flex-grow bg-black/40 border border-white/5 rounded-xl p-4 text-emerald-300 font-mono text-sm overflow-y-auto mb-4">
                            {cleanList.length > 0 ? cleanList.join('\n') : <span className="text-gray-600 italic">// Clean numbers will appear here...</span>}
                        </div>

                        <button
                            onClick={copyToClipboard}
                            disabled={cleanList.length === 0}
                            className={`w-full py-3 rounded-xl font-bold flex items-center justify-center gap-2 transition-all ${
                                cleanList.length === 0
                                    ? 'bg-white/5 text-gray-500 cursor-not-allowed'
                                    : 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg'
                            }`}
                        >
                            <Copy size={18} /> Copy Clean List
                        </button>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}