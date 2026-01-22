'use client';

import React, { useState } from 'react';
import Header from '../../../components/Header';
import { Footer } from '../../../components/sections';
import { FileJson, Copy, RefreshCw, Zap } from 'lucide-react';

export default function LeadAdGeneratorPage() {
    const [jsonOutput, setJsonOutput] = useState('');
    const [formId, setFormId] = useState('123456789012345');
    const [leadId, setLeadId] = useState('987654321098765');
    const [copied, setCopied] = useState(false);

    const generatePayload = () => {
        // Randomize ID slightly to make it feel fresh
        const randomLeadId = '9' + Math.floor(Math.random() * 100000000000000);
        setLeadId(randomLeadId);

        const payload = {
            "object": "page",
            "entry": [
                {
                    "id": "1067280970047460",
                    "time": Math.floor(Date.now() / 1000),
                    "changes": [
                        {
                            "field": "leadgen",
                            "value": {
                                "ad_id": "444444444",
                                "form_id": formId,
                                "leadgen_id": randomLeadId,
                                "created_time": Math.floor(Date.now() / 1000),
                                "page_id": "1067280970047460",
                                "adgroup_id": "333333333"
                            }
                        }
                    ]
                }
            ],
            // Simulated "Decoded" data that n8n/Zapier often fetches automatically
            "_simulated_lead_data": {
                "created_time": new Date().toISOString(),
                "id": randomLeadId,
                "field_data": [
                    {
                        "name": "full_name",
                        "values": [
                            "Test User"
                        ]
                    },
                    {
                        "name": "email",
                        "values": [
                            "test.user@example.com"
                        ]
                    },
                    {
                        "name": "phone_number",
                        "values": [
                            "+9779841000000"
                        ]
                    },
                    {
                        "name": "city",
                        "values": [
                            "Kathmandu"
                        ]
                    }
                ]
            }
        };

        setJsonOutput(JSON.stringify(payload, null, 4));
        setCopied(false);
    };

    const copyToClipboard = () => {
        if (!jsonOutput) return;
        navigator.clipboard.writeText(jsonOutput);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-[#18181b] via-[#23243a] to-[#1a1a2e] flex flex-col font-sans">
            <Header />

            <div className="max-w-4xl mx-auto px-4 py-20 flex-grow w-full">
                <div className="text-center mb-12">
                    <span className="inline-block mb-3 px-3 py-1 text-sm font-semibold text-emerald-400 bg-emerald-400/10 rounded-full">
                        Developer Tool
                    </span>
                    <h1 className="text-3xl md:text-5xl font-serif font-bold text-white mb-4">
                        Fake Facebook Lead Ad Payload
                    </h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        Building an automation in n8n or Zapier? Generate a dummy "Lead Ad" webhook payload instantly to test your workflow.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-10 items-start">
                    {/* Controls */}
                    <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8 space-y-6">
                        <div>
                            <label className="block text-gray-400 text-xs font-bold mb-2">Form ID (Optional)</label>
                            <input
                                type="text"
                                value={formId}
                                onChange={(e) => setFormId(e.target.value)}
                                className="w-full bg-black/20 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-emerald-500 font-mono"
                            />
                        </div>

                        <div className="bg-blue-900/20 border border-blue-500/20 p-4 rounded-lg flex gap-3">
                            <Zap size={20} className="text-blue-400 flex-shrink-0 mt-1" />
                            <p className="text-xs text-gray-300 leading-relaxed">
                                This generates the standard <code>entry.changes</code> structure sent by Meta, plus a simulated <code>_simulated_lead_data</code> block containing Name, Email, and Phone for easier mapping.
                            </p>
                        </div>

                        <button
                            onClick={generatePayload}
                            className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-4 rounded-xl shadow-lg flex items-center justify-center gap-2 transition-all transform hover:scale-[1.02]"
                        >
                            <RefreshCw size={20} /> Generate Test Lead
                        </button>
                    </div>

                    {/* Output */}
                    <div className="bg-black/20 rounded-2xl border border-white/10 p-6 flex flex-col h-[500px]">
                        <div className="flex justify-between items-center mb-4">
                            <label className="text-white font-bold flex items-center gap-2">
                                <FileJson size={18} className="text-emerald-400" /> JSON Payload
                            </label>
                            <button 
                                onClick={copyToClipboard}
                                disabled={!jsonOutput}
                                className={`text-xs px-3 py-1 rounded transition-colors flex items-center gap-1 ${copied ? 'bg-emerald-500 text-white' : 'bg-white/10 text-gray-300 hover:bg-white/20'}`}
                            >
                                {copied ? 'Copied!' : <><Copy size={14} /> Copy JSON</>}
                            </button>
                        </div>

                        <div className="flex-grow bg-[#1e1e1e] border border-white/5 rounded-xl p-4 overflow-auto custom-scrollbar">
                            <pre className="font-mono text-xs text-blue-300 leading-relaxed">
                                {jsonOutput || '// Click Generate to see payload...'}
                            </pre>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}