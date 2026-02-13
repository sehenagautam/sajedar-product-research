'use client';

import React, { useState } from 'react';
// @ts-ignore - Ignores type checking if the package types aren't installed
import NepaliDate from 'nepali-date-converter';
import Header from '../../../components/Header';
import { Footer } from '../../../components/sections';

export default function DateConverterPage() {
    const [adDate, setAdDate] = useState('');
    const [bsDate, setBsDate] = useState('');
    const [convertedBS, setConvertedBS] = useState<string | null>(null);
    const [convertedAD, setConvertedAD] = useState<string | null>(null);

    // Convert AD to BS
    const handleAdToBs = () => {
        if (!adDate) return;
        try {
            const dateObj = new Date(adDate);
            const bs = new NepaliDate(dateObj);
            setConvertedBS(bs.format('YYYY-MM-DD'));
        } catch (e) {
            console.error(e);
        }
    };

    // Convert BS to AD
    const handleBsToAd = () => {
        if (!bsDate) return;
        try {
            // Parse YYYY-MM-DD string
            const [y, m, d] = bsDate.split('-').map(Number);
            // NepaliDate constructor takes (year, monthIndex, day) where monthIndex is 0-11
            const bs = new NepaliDate(y, m - 1, d); 
            const ad = bs.toJsDate();
            
            // Format AD date manually or using a library. Simple JS formatter here:
            const adFormatted = ad.toISOString().split('T')[0];
            setConvertedAD(adFormatted);
        } catch (e) {
            console.error(e);
            alert("Invalid BS Date format. Please use YYYY-MM-DD (e.g., 2080-01-01)");
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-[#18181b] via-[#23243a] to-[#1a1a2e] flex flex-col font-sans">
            <Header />

            <div className="max-w-6xl mx-auto px-4 py-20 flex-grow w-full">
                <div className="text-center mb-12">
                    <span className="inline-block mb-3 px-3 py-1 text-sm font-semibold text-emerald-400 bg-emerald-400/10 rounded-full">
                        Free Tool
                    </span>
                    <h1 className="text-3xl md:text-5xl font-serif font-bold text-white mb-4">
                        Nepali Business Date Converter
                    </h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        Seamlessly convert dates between AD (Gregorian) and BS (Bikram Sambat) for tax filings and accounting.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {/* AD to BS Card */}
                    <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8 shadow-xl">
                        <div className="flex items-center gap-3 mb-6 border-b border-white/10 pb-4">
                            <div className="bg-blue-500/20 p-2 rounded-lg text-blue-400 font-bold">AD</div>
                            <span className="text-gray-400">&rarr;</span>
                            <div className="bg-emerald-500/20 p-2 rounded-lg text-emerald-400 font-bold">BS</div>
                            <h3 className="ml-auto text-lg font-bold text-white">English to Nepali</h3>
                        </div>

                        <div className="space-y-4">
                            <div>
                                <label className="block text-gray-400 text-sm font-medium mb-2">
                                    Select English Date (AD)
                                </label>
                                <input
                                    type="date"
                                    value={adDate}
                                    onChange={(e) => {
                                        setAdDate(e.target.value);
                                        setConvertedBS(null); // Reset result on change
                                    }}
                                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors scheme-dark"
                                />
                            </div>

                            <button
                                onClick={handleAdToBs}
                                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition-all transform hover:scale-[1.02]"
                            >
                                Convert to BS
                            </button>

                            {convertedBS && (
                                <div className="mt-4 bg-black/30 rounded-lg p-4 text-center animate-in fade-in zoom-in duration-300 border border-emerald-500/30">
                                    <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">Nepali Date</p>
                                    <p className="text-3xl font-bold text-emerald-400">{convertedBS}</p>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* BS to AD Card */}
                    <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8 shadow-xl">
                        <div className="flex items-center gap-3 mb-6 border-b border-white/10 pb-4">
                            <div className="bg-emerald-500/20 p-2 rounded-lg text-emerald-400 font-bold">BS</div>
                            <span className="text-gray-400">&rarr;</span>
                            <div className="bg-blue-500/20 p-2 rounded-lg text-blue-400 font-bold">AD</div>
                            <h3 className="ml-auto text-lg font-bold text-white">Nepali to English</h3>
                        </div>

                        <div className="space-y-4">
                            <div>
                                <label className="block text-gray-400 text-sm font-medium mb-2">
                                    Enter Nepali Date (BS)
                                </label>
                                <input
                                    type="text"
                                    value={bsDate}
                                    onChange={(e) => {
                                        setBsDate(e.target.value);
                                        setConvertedAD(null);
                                    }}
                                    placeholder="YYYY-MM-DD (e.g. 2080-01-01)"
                                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-emerald-500 transition-colors placeholder-gray-500"
                                />
                            </div>

                            <button
                                onClick={handleBsToAd}
                                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 rounded-lg transition-all transform hover:scale-[1.02]"
                            >
                                Convert to AD
                            </button>

                            {convertedAD && (
                                <div className="mt-4 bg-black/30 rounded-lg p-4 text-center animate-in fade-in zoom-in duration-300 border border-blue-500/30">
                                    <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">English Date</p>
                                    <p className="text-3xl font-bold text-blue-400">{convertedAD}</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* Call to Action for Automation */}
                <div className="mt-16 text-center max-w-3xl mx-auto bg-gradient-to-r from-emerald-900/20 to-blue-900/20 rounded-2xl p-8 border border-white/5">
                    <h3 className="text-xl font-bold text-white mb-3">
                        Still manually entering these dates into your accounting software?
                    </h3>
                    <p className="text-gray-300 mb-6">
                        Sajedar AI can automate your entire invoicing and tax data entry process.
                    </p>
                    <a href="/contact" className="inline-block bg-white text-black font-bold px-6 py-3 rounded-full hover:bg-gray-200 transition-colors">
                        Automate My Accounting
                    </a>
                </div>
            </div>

            <Footer />
        </div>
    );
}