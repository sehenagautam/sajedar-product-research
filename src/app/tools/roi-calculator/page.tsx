'use client';

import React, { useState } from 'react';
// Corrected import path (up 3 levels)
import Header from '../../../components/Header'; 
import { Footer } from '../../../components/sections';

export default function ROICalculatorPage() {
    const [dailyInquiries, setDailyInquiries] = useState<number | ''>('');
    const [hourlyRate, setHourlyRate] = useState<number | ''>('');
    const [savings, setSavings] = useState<number | null>(null);

    const calculateROI = () => {
        if (!dailyInquiries || !hourlyRate) return;

        // Logic:
        // 1. Estimate 10 minutes (1/6th of an hour) of human effort per inquiry.
        // 2. Monthly Inquiries = Daily * 30.
        // 3. Hours Saved = Monthly Inquiries * (10 / 60).
        // 4. Savings = Hours Saved * Hourly Rate.
        
        const inquiriesPerMonth = Number(dailyInquiries) * 30;
        const hoursSavedPerMonth = inquiriesPerMonth * (10 / 60);
        const estimatedSavings = hoursSavedPerMonth * Number(hourlyRate);

        setSavings(Math.round(estimatedSavings));
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
                            Support ROI Calculator
                        </h1>
                        <p className="text-gray-300">
                            See how much money you are losing on manual support. Calculate your potential savings with Sajedar AI.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-10">
                        <div className="space-y-6">
                            <div>
                                <label className="block text-gray-300 text-sm font-medium mb-2">
                                    Average Daily Inquiries
                                </label>
                                <input
                                    type="number"
                                    value={dailyInquiries}
                                    onChange={(e) => setDailyInquiries(e.target.value === '' ? '' : Number(e.target.value))}
                                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-emerald-500 transition-colors placeholder-gray-500"
                                    placeholder="e.g. 50"
                                />
                            </div>

                            <div>
                                <label className="block text-gray-300 text-sm font-medium mb-2">
                                    Support Staff Hourly Rate (NPR)
                                </label>
                                <input
                                    type="number"
                                    value={hourlyRate}
                                    onChange={(e) => setHourlyRate(e.target.value === '' ? '' : Number(e.target.value))}
                                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-emerald-500 transition-colors placeholder-gray-500"
                                    placeholder="e.g. 150"
                                />
                            </div>

                            <button
                                onClick={calculateROI}
                                className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-3 rounded-lg transition-all transform hover:scale-[1.02] shadow-lg shadow-emerald-500/20"
                            >
                                Calculate Savings
                            </button>
                        </div>

                        <div className="bg-emerald-900/20 border border-emerald-500/20 rounded-xl p-8 flex flex-col justify-center items-center text-center">
                            {savings !== null ? (
                                <div className="animate-in fade-in zoom-in duration-300">
                                    <p className="text-gray-400 text-sm uppercase tracking-wider mb-2">You could save</p>
                                    <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                                        NPR {savings.toLocaleString()}
                                    </div>
                                    <p className="text-emerald-400 text-sm mb-6">per month with Sajedar</p>
                                    
                                    <div className="text-xs text-gray-500 border-t border-white/10 pt-4 mt-4 w-full">
                                        *Calculated based on estimated 10 mins handling time per inquiry.
                                    </div>
                                </div>
                            ) : (
                                <div className="text-gray-500">
                                    <svg className="w-12 h-12 mx-auto mb-3 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 36v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                                    </svg>
                                    <p>Enter your business details to see the calculation.</p>
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