'use client';

import React, { useState } from 'react';
import Header from '../../../components/Header';
import { Footer } from '../../../components/sections';
import { Braces, Minimize2, Maximize2, Copy, CheckCircle, AlertTriangle } from 'lucide-react';

export default function JsonFormatterPage() {
    const [input, setInput] = useState('');
    const [status, setStatus] = useState<'idle' | 'valid' | 'invalid'>('idle');
    const [errorMsg, setErrorMsg] = useState('');

    const formatJSON = () => {
        try {
            const parsed = JSON.parse(input);
            setInput(JSON.stringify(parsed, null, 4));
            setStatus('valid');
            setErrorMsg('');
        } catch (e: any) {
            setStatus('invalid');
            setErrorMsg(e.message);
        }
    };

    const minifyJSON = () => {
        try {
            const parsed = JSON.parse(input);
            setInput(JSON.stringify(parsed));
            setStatus('valid');
            setErrorMsg('');
        } catch (e: any) {
            setStatus('invalid');
            setErrorMsg(e.message);
        }
    };

    const copyToClipboard = () => {
        if (!input) return;
        navigator.clipboard.writeText(input);
        alert("JSON copied to clipboard!");
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
                        JSON Formatter & Validator
                    </h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        Debug your n8n workflows and API payloads instantly. Validate syntax, pretty-print for readability, or minify for production.
                    </p>
                </div>

                <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-4 md:p-8 flex flex-col h-[600px]">
                    {/* Toolbar */}
                    <div className="flex flex-wrap gap-3 mb-4 justify-between items-center">
                        <div className="flex gap-3">
                            <button
                                onClick={formatJSON}
                                className="bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 rounded-lg font-bold text-sm flex items-center gap-2 transition-colors"
                            >
                                <Maximize2 size={16} /> Pretty Print
                            </button>
                            <button
                                onClick={minifyJSON}
                                className="bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg font-bold text-sm flex items-center gap-2 transition-colors"
                            >
                                <Minimize2 size={16} /> Minify
                            </button>
                        </div>
                        
                        <div className="flex items-center gap-4">
                            {status === 'valid' && (
                                <span className="text-emerald-400 text-sm font-bold flex items-center gap-1 animate-in fade-in">
                                    <CheckCircle size={16} /> Valid JSON
                                </span>
                            )}
                            {status === 'invalid' && (
                                <span className="text-red-400 text-sm font-bold flex items-center gap-1 animate-in fade-in">
                                    <AlertTriangle size={16} /> Invalid Syntax
                                </span>
                            )}
                            <button
                                onClick={copyToClipboard}
                                className="text-gray-400 hover:text-white transition-colors"
                                title="Copy to Clipboard"
                            >
                                <Copy size={20} />
                            </button>
                        </div>
                    </div>

                    {/* Editor Area */}
                    <div className="relative flex-grow">
                        <textarea
                            value={input}
                            onChange={(e) => {
                                setInput(e.target.value);
                                setStatus('idle'); // Reset status on edit
                                setErrorMsg('');
                            }}
                            placeholder='Paste your JSON here... {"key": "value"}'
                            className={`w-full h-full bg-[#1e1e1e] rounded-xl p-6 font-mono text-sm text-blue-300 placeholder-gray-600 focus:outline-none border-2 resize-none ${
                                status === 'invalid' ? 'border-red-500/50' : status === 'valid' ? 'border-emerald-500/50' : 'border-white/10'
                            }`}
                            spellCheck={false}
                        />
                        {errorMsg && (
                            <div className="absolute bottom-4 left-4 right-4 bg-red-500/20 border border-red-500/40 text-red-200 px-4 py-3 rounded-lg text-sm font-mono backdrop-blur-md">
                                Error: {errorMsg}
                            </div>
                        )}
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}