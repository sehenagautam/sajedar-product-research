'use client';

import React, { useState } from 'react';
import Header from '../../../components/Header';
import { Footer } from '../../../components/sections';
import { ArrowRightLeft, Copy, Quote } from 'lucide-react';

export default function JsonEscaperPage() {
    const [input, setInput] = useState('');
    const [output, setOutput] = useState('');

    const escapeString = () => {
        // Simple JSON.stringify does the escaping for us
        // We slice(1, -1) to remove the surrounding quotes added by stringify
        const escaped = JSON.stringify(input).slice(1, -1);
        setOutput(escaped);
    };

    const unescapeString = () => {
        try {
            // To unescape, we wrap in quotes and parse
            const unescaped = JSON.parse(`"${input}"`);
            setOutput(unescaped);
        } catch (e) {
            alert("Invalid escaped string. Cannot unescape.");
        }
    };

    const copyOutput = () => {
        if (!output) return;
        navigator.clipboard.writeText(output);
        alert("Copied to clipboard!");
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-[#18181b] via-[#23243a] to-[#1a1a2e] flex flex-col font-sans">
            <Header />

            <div className="max-w-5xl mx-auto px-4 py-20 flex-grow w-full">
                <div className="text-center mb-12">
                    <span className="inline-block mb-3 px-3 py-1 text-sm font-semibold text-emerald-400 bg-emerald-400/10 rounded-full">
                        Developer Tool
                    </span>
                    <h1 className="text-3xl md:text-5xl font-serif font-bold text-white mb-4">
                        JSON String Escaper
                    </h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        Preparing a JSON payload inside another JSON object? Escape your quotes and backslashes instantly.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 items-start">
                    {/* Input */}
                    <div className="space-y-4">
                        <label className="block text-gray-300 font-bold flex items-center gap-2">
                            <Quote size={18} className="text-emerald-400" /> Input String
                        </label>
                        <textarea
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            placeholder='e.g. He said "Hello"'
                            className="w-full h-64 bg-white/5 border border-white/10 rounded-xl p-4 text-white placeholder-gray-500 focus:border-emerald-500 focus:outline-none resize-none font-mono text-sm"
                        />
                        <div className="grid grid-cols-2 gap-4">
                            <button
                                onClick={escapeString}
                                className="bg-emerald-500 hover:bg-emerald-600 text-white py-3 rounded-lg font-bold transition-all"
                            >
                                Escape Characters
                            </button>
                            <button
                                onClick={unescapeString}
                                className="bg-white/10 hover:bg-white/20 text-white py-3 rounded-lg font-bold transition-all"
                            >
                                Unescape (Revert)
                            </button>
                        </div>
                    </div>

                    {/* Output */}
                    <div className="space-y-4">
                        <div className="flex justify-between items-center">
                            <label className="block text-gray-300 font-bold flex items-center gap-2">
                                <ArrowRightLeft size={18} className="text-blue-400" /> Result
                            </label>
                            <button
                                onClick={copyOutput}
                                disabled={!output}
                                className="text-xs text-gray-400 hover:text-white flex items-center gap-1 transition-colors"
                            >
                                <Copy size={14} /> Copy
                            </button>
                        </div>
                        <div className="w-full h-64 bg-[#1e1e1e] border border-white/10 rounded-xl p-4 text-blue-300 font-mono text-sm overflow-y-auto break-all">
                            {output || <span className="text-gray-600 italic">// Result will appear here...</span>}
                        </div>

                        <div className="bg-blue-900/20 border border-blue-500/20 rounded-lg p-4 text-xs text-gray-300">
                            <strong>Why use this?</strong> When you are building a agent in n8n or ManyChat and need to send a JSON body that contains <em>another</em> JSON string, you must escape the inner quotes (e.g., <code>"</code> becomes <code>\"</code>).
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}