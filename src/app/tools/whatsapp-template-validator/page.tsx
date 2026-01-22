'use client';

import React, { useState, useEffect } from 'react';
import Header from '../../../components/Header';
import { Footer } from '../../../components/sections';
import { CheckCircle, XCircle, AlertTriangle, MessageSquare } from 'lucide-react';

export default function WhatsAppValidatorPage() {
    const [header, setHeader] = useState('');
    const [body, setBody] = useState('');
    const [footer, setFooter] = useState('');

    const [validation, setValidation] = useState<{
        header: boolean;
        headerMsg: string;
        body: boolean;
        bodyMsg: string;
        footer: boolean;
        footerMsg: string;
        variables: boolean;
        variablesMsg: string;
    }>({
        header: true, headerMsg: '',
        body: true, bodyMsg: '',
        footer: true, footerMsg: '',
        variables: true, variablesMsg: ''
    });

    useEffect(() => {
        let v = {
            header: true, headerMsg: '',
            body: true, bodyMsg: '',
            footer: true, footerMsg: '',
            variables: true, variablesMsg: ''
        };

        // Header Validation
        if (header.length > 60) {
            v.header = false;
            v.headerMsg = `Too long (${header.length}/60 chars).`;
        }
        if (header.includes('\n')) {
            v.header = false;
            v.headerMsg = `Header cannot contain new lines.`;
        }

        // Body Validation
        if (body.length === 0) {
            v.body = false;
            v.bodyMsg = "Body text is required.";
        }
        if (body.length > 1024) {
            v.body = false;
            v.bodyMsg = `Too long (${body.length}/1024 chars).`;
        }
        // Check for newlines (limit to 4 usually recommended, but technically allowed more)
        const newlines = (body.match(/\n/g) || []).length;
        if (newlines > 10) {
            v.body = false;
            v.bodyMsg = `Too many line breaks (${newlines}). Keep it concise.`;
        }

        // Footer Validation
        if (footer.length > 60) {
            v.footer = false;
            v.footerMsg = `Too long (${footer.length}/60 chars).`;
        }

        // Variable Validation {{1}}, {{2}}...
        const regex = /\{\{(\d+)\}\}/g;
        let match;
        const numbers = [];
        while ((match = regex.exec(body)) !== null) {
            numbers.push(parseInt(match[1]));
        }

        if (numbers.length > 0) {
            // Check if sequential starting from 1
            const sorted = [...numbers].sort((a, b) => a - b);
            
            // Check for duplicates
            const hasDuplicates = new Set(numbers).size !== numbers.length;
            
            // Check sequence
            let sequential = true;
            if (sorted[0] !== 1) sequential = false;
            for (let i = 0; i < sorted.length; i++) {
                if (sorted[i] !== i + 1) sequential = false;
            }

            if (hasDuplicates) {
                v.variables = false;
                v.variablesMsg = "Duplicate variables found (e.g., {{1}} used twice).";
            } else if (!sequential) {
                v.variables = false;
                v.variablesMsg = "Variables must be sequential ({{1}}, {{2}}, {{3}}...). Missing a number?";
            } else {
                v.variablesMsg = `Found ${numbers.length} valid variables.`;
            }
        }

        // Double brackets check
        if (body.includes('{{') && !body.includes('}}')) {
             v.variables = false;
             v.variablesMsg = "Unclosed variable brackets detected.";
        }
        
        // Single bracket warning (not strictly error but suspicious)
        if ((body.match(/\{[^{]/g) || []).length > 0) {
             // Just a loose check, ignoring for now to avoid false positives with normal braces
        }

        setValidation(v);

    }, [header, body, footer]);

    const isAllValid = validation.header && validation.body && validation.footer && validation.variables;

    return (
        <div className="min-h-screen bg-gradient-to-br from-[#18181b] via-[#23243a] to-[#1a1a2e] flex flex-col font-sans">
            <Header />

            <div className="max-w-6xl mx-auto px-4 py-20 flex-grow w-full">
                <div className="text-center mb-12">
                    <span className="inline-block mb-3 px-3 py-1 text-sm font-semibold text-emerald-400 bg-emerald-400/10 rounded-full">
                        Chatbot Pro
                    </span>
                    <h1 className="text-3xl md:text-5xl font-serif font-bold text-white mb-4">
                        WhatsApp Template Validator
                    </h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        Don't let Meta reject your campaign. Validate your message format, character limits, and variable syntax in real-time.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-10 items-start">
                    {/* Editor */}
                    <div className="space-y-6">
                        {/* Header */}
                        <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6 relative overflow-hidden">
                            <div className={`absolute top-0 left-0 w-1 h-full ${validation.header ? 'bg-emerald-500' : 'bg-red-500'}`} />
                            <div className="flex justify-between items-center mb-2">
                                <label className="text-gray-300 font-bold text-sm">Header (Optional)</label>
                                <span className={`text-xs ${header.length > 60 ? 'text-red-400 font-bold' : 'text-gray-500'}`}>{header.length}/60</span>
                            </div>
                            <input
                                type="text"
                                value={header}
                                onChange={(e) => setHeader(e.target.value)}
                                placeholder="Summer Sale Alert!"
                                className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-2 text-white focus:border-emerald-500 outline-none font-bold"
                            />
                            {!validation.header && <p className="text-red-400 text-xs mt-2 flex items-center gap-1"><XCircle size={12} /> {validation.headerMsg}</p>}
                        </div>

                        {/* Body */}
                        <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6 relative overflow-hidden">
                            <div className={`absolute top-0 left-0 w-1 h-full ${validation.body && validation.variables ? 'bg-emerald-500' : 'bg-red-500'}`} />
                            <div className="flex justify-between items-center mb-2">
                                <label className="text-gray-300 font-bold text-sm">Body Text</label>
                                <span className={`text-xs ${body.length > 1024 ? 'text-red-400 font-bold' : 'text-gray-500'}`}>{body.length}/1024</span>
                            </div>
                            <textarea
                                value={body}
                                onChange={(e) => setBody(e.target.value)}
                                placeholder={`Hi {{1}}, your order {{2}} is ready.`}
                                className="w-full h-48 bg-black/20 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-emerald-500 outline-none resize-none leading-relaxed"
                            />
                            {!validation.body && <p className="text-red-400 text-xs mt-2 flex items-center gap-1"><XCircle size={12} /> {validation.bodyMsg}</p>}
                            {!validation.variables && <p className="text-yellow-400 text-xs mt-1 flex items-center gap-1"><AlertTriangle size={12} /> {validation.variablesMsg}</p>}
                        </div>

                        {/* Footer */}
                        <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6 relative overflow-hidden">
                            <div className={`absolute top-0 left-0 w-1 h-full ${validation.footer ? 'bg-emerald-500' : 'bg-red-500'}`} />
                            <div className="flex justify-between items-center mb-2">
                                <label className="text-gray-300 font-bold text-sm">Footer (Optional)</label>
                                <span className={`text-xs ${footer.length > 60 ? 'text-red-400 font-bold' : 'text-gray-500'}`}>{footer.length}/60</span>
                            </div>
                            <input
                                type="text"
                                value={footer}
                                onChange={(e) => setFooter(e.target.value)}
                                placeholder="Reply STOP to unsubscribe"
                                className="w-full bg-black/20 border border-white/10 rounded-lg px-4 py-2 text-gray-400 focus:border-emerald-500 outline-none text-sm"
                            />
                            {!validation.footer && <p className="text-red-400 text-xs mt-2 flex items-center gap-1"><XCircle size={12} /> {validation.footerMsg}</p>}
                        </div>
                    </div>

                    {/* Preview */}
                    <div className="flex flex-col items-center">
                        <div className={`mb-6 flex items-center gap-2 px-4 py-2 rounded-full border ${isAllValid ? 'bg-emerald-500/10 border-emerald-500/50 text-emerald-400' : 'bg-red-500/10 border-red-500/50 text-red-400'}`}>
                            {isAllValid ? <CheckCircle size={18} /> : <XCircle size={18} />}
                            <span className="font-bold text-sm">{isAllValid ? 'Template is Valid' : 'Fix Errors to Submit'}</span>
                        </div>

                        {/* WhatsApp Bubble Preview */}
                        <div className="bg-[#e5ddd5] p-4 rounded-xl shadow-2xl w-[320px] min-h-[400px] border-4 border-gray-800 relative">
                            {/* Fake Status Bar */}
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-4 bg-gray-800 rounded-b-lg"></div>

                            <div className="bg-white rounded-lg p-3 shadow-sm max-w-[90%] relative mt-8">
                                {/* Header */}
                                {header && <p className="font-bold text-black text-sm mb-1">{header}</p>}
                                
                                {/* Body */}
                                <p className="text-black text-sm whitespace-pre-wrap leading-snug">
                                    {body || <span className="text-gray-400 italic">Enter message text...</span>}
                                </p>
                                
                                {/* Footer */}
                                {footer && <p className="text-gray-400 text-[10px] mt-2 pt-1 border-t border-gray-100">{footer}</p>}

                                {/* Metadata */}
                                <span className="absolute bottom-1 right-2 text-[10px] text-gray-400 flex items-center gap-0.5">
                                    12:00 PM
                                </span>
                            </div>
                        </div>

                        <div className="mt-8 bg-blue-900/20 border border-blue-500/20 p-4 rounded-lg text-sm text-gray-300 max-w-sm">
                            <h4 className="text-blue-400 font-bold flex items-center gap-2 mb-2"><MessageSquare size={16} /> Tip for Sajedar Clients</h4>
                            <p>
                                Variables like <code>{`{{1}}`}</code> are placeholders. When sending via API, you will map these to dynamic data (e.g., Name, Order ID).
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}