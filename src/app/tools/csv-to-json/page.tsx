'use client';

import React, { useState } from 'react';
import Header from '../../../components/Header';
import { Footer } from '../../../components/sections';
import { FileJson, Upload, Copy, Lock } from 'lucide-react';
import Papa from 'papaparse';

export default function CsvToJsonPage() {
    const [jsonOutput, setJsonOutput] = useState('');
    const [error, setError] = useState('');
    const [fileName, setFileName] = useState('');

    const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        setFileName(file.name);
        setError('');
        setJsonOutput('');

        Papa.parse(file, {
            header: true,
            skipEmptyLines: true,
            complete: (results) => {
                setJsonOutput(JSON.stringify(results.data, null, 4));
            },
            error: (err) => {
                setError(`Error parsing CSV: ${err.message}`);
            }
        });
    };

    const copyToClipboard = () => {
        if (!jsonOutput) return;
        navigator.clipboard.writeText(jsonOutput);
        alert("JSON copied to clipboard!");
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
                        Secure CSV to JSON Converter
                    </h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        Convert your spreadsheets into JSON for webhooks and APIs. Processed 100% in your browser—your data never leaves your device.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-10 items-start">
                    {/* Upload Section */}
                    <div className="space-y-6">
                        <div className="bg-white/5 backdrop-blur-sm rounded-2xl border-2 border-dashed border-white/20 p-10 flex flex-col items-center justify-center text-center hover:border-emerald-500/50 transition-colors group">
                            <div className="bg-emerald-500/20 p-4 rounded-full mb-4 group-hover:scale-110 transition-transform">
                                <Upload size={32} className="text-emerald-400" />
                            </div>
                            <h3 className="text-white font-bold text-lg mb-2">Upload CSV File</h3>
                            <p className="text-gray-400 text-sm mb-6">Drag & drop or click to browse</p>
                            
                            <input
                                type="file"
                                accept=".csv"
                                onChange={handleFileUpload}
                                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                            />
                            
                            {fileName && (
                                <div className="bg-emerald-500/20 text-emerald-300 px-4 py-2 rounded-lg text-sm font-mono">
                                    {fileName}
                                </div>
                            )}
                        </div>

                        <div className="bg-blue-900/20 border border-blue-500/20 rounded-xl p-4 flex items-start gap-3">
                            <Lock size={20} className="text-blue-400 mt-1 flex-shrink-0" />
                            <div>
                                <h4 className="text-blue-400 font-bold text-sm mb-1">Privacy Guarantee</h4>
                                <p className="text-gray-400 text-xs leading-relaxed">
                                    Unlike other online converters, we do not upload your file to any server. The conversion happens locally in your browser using JavaScript.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Output Section */}
                    <div className="bg-black/20 rounded-2xl border border-white/10 p-6 flex flex-col h-[500px]">
                        <div className="flex justify-between items-center mb-4">
                            <label className="text-white font-bold flex items-center gap-2">
                                <FileJson size={18} className="text-emerald-400" /> JSON Output
                            </label>
                            <button 
                                onClick={copyToClipboard}
                                disabled={!jsonOutput}
                                className="text-xs text-emerald-400 hover:text-emerald-300 flex items-center gap-1 transition-colors disabled:opacity-50"
                            >
                                <Copy size={14} /> Copy All
                            </button>
                        </div>

                        <textarea
                            readOnly
                            value={jsonOutput || (error ? error : '')}
                            className={`w-full flex-grow bg-black/40 border border-white/5 rounded-xl p-4 font-mono text-sm resize-none focus:outline-none ${error ? 'text-red-400' : 'text-blue-300'}`}
                            placeholder="// JSON result will appear here..."
                        />
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}