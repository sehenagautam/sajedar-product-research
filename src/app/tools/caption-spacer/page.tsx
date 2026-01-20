'use client';

import React, { useState } from 'react';
// Import Header/Footer from 3 levels up
import Header from '../../../components/Header';
import { Footer } from '../../../components/sections';

export default function CaptionSpacerPage() {
    const [inputText, setInputText] = useState('');
    const [outputText, setOutputText] = useState('');
    const [copied, setCopied] = useState(false);

    const processCaption = () => {
        if (!inputText) return;

        // Logic:
        // Instagram/FB often collapse empty newlines.
        // We split the text by newlines and replace empty lines with a "Zero Width Space" (\u200B).
        // This tricks the platform into treating the line as having content, preserving the whitespace.
        
        const lines = inputText.split('\n');

        const processed = lines.map(line => {
            // If the line is empty or just whitespace, replace it with the zero-width space
            if (line.trim() === '') {
                return '\u200B'; 
            }
            return line;
        }).join('\n');

        setOutputText(processed);
        setCopied(false);
    };

    const copyToClipboard = () => {
        if (!outputText) return;
        navigator.clipboard.writeText(outputText);
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
                            Social Media Caption Spacer
                        </h1>
                        <p className="text-gray-300">
                            Stop Instagram and Facebook from collapsing your line breaks. Create perfectly formatted captions instantly.
                        </p>
                    </div>

                    <div className="space-y-6">
                        {/* Input Area */}
                        <div>
                            <label className="block text-gray-300 text-sm font-medium mb-2">
                                Paste your caption here
                            </label>
                            <textarea
                                value={inputText}
                                onChange={(e) => setInputText(e.target.value)}
                                className="w-full h-48 bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-emerald-500 transition-colors placeholder-gray-500 resize-none font-mono text-sm"
                                placeholder="Type your caption with normal paragraphs..."
                            />
                        </div>

                        {/* Action Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4">
                            <button
                                onClick={processCaption}
                                className="flex-1 bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-3 rounded-lg transition-all transform hover:scale-[1.02] shadow-lg shadow-emerald-500/20"
                            >
                                Convert & Format
                            </button>

                            {outputText && (
                                <button
                                    onClick={copyToClipboard}
                                    className={`flex-1 font-bold py-3 rounded-lg transition-all transform hover:scale-[1.02] shadow-lg ${
                                        copied
                                            ? 'bg-green-600 text-white shadow-green-600/20'
                                            : 'bg-white/10 hover:bg-white/20 text-white border border-white/20'
                                    }`}
                                >
                                    {copied ? 'Copied to Clipboard!' : 'Copy Result'}
                                </button>
                            )}
                        </div>

                        {/* Output Preview */}
                        {outputText && (
                            <div className="mt-8 pt-8 border-t border-white/10 animate-in fade-in slide-in-from-top-4 duration-300">
                                <label className="block text-emerald-400 text-sm font-medium mb-2">
                                    Preview (Ready to Paste)
                                </label>
                                <div className="bg-black/30 rounded-lg p-6 text-gray-300 whitespace-pre-wrap font-sans text-sm border border-white/5">
                                    {outputText}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}