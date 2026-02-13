'use client';

import React, { useState } from 'react';
import Link from 'next/link';
// Import Header/Footer from 3 levels up
import Header from '../../../components/Header';
import { Footer } from '../../../components/sections';

export default function SupportCostEstimatorPage() {
    const [staffCount, setStaffCount] = useState<number | ''>('');
    const [monthlySalary, setMonthlySalary] = useState<number | ''>('');
    const [hoursOperation, setHoursOperation] = useState<number | ''>('');
    const [result, setResult] = useState<{ cost: number; coverage: number } | null>(null);

    // Placeholder starting price for Sajedar AI
    const AI_PRICE = 15000;

    const calculateCost = () => {
        if (!staffCount || !monthlySalary || !hoursOperation) return;

        const totalCost = Number(staffCount) * Number(monthlySalary);
        setResult({
            cost: totalCost,
            coverage: Number(hoursOperation)
        });
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
                            Customer Support Cost Estimator
                        </h1>
                        <p className="text-gray-300">
                            Compare the cost of manual support staff versus 24/7 AI automation.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-10">
                        <div className="space-y-6">
                            <div>
                                <label className="block text-gray-300 text-sm font-medium mb-2">
                                    Number of Support Staff
                                </label>
                                <input
                                    type="number"
                                    value={staffCount}
                                    onChange={(e) => setStaffCount(e.target.value === '' ? '' : Number(e.target.value))}
                                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-emerald-500 transition-colors placeholder-gray-500"
                                    placeholder="e.g. 2"
                                />
                            </div>

                            <div>
                                <label className="block text-gray-300 text-sm font-medium mb-2">
                                    Average Monthly Salary (Per Staff)
                                </label>
                                <input
                                    type="number"
                                    value={monthlySalary}
                                    onChange={(e) => setMonthlySalary(e.target.value === '' ? '' : Number(e.target.value))}
                                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-emerald-500 transition-colors placeholder-gray-500"
                                    placeholder="e.g. 25000"
                                />
                            </div>

                            <div>
                                <label className="block text-gray-300 text-sm font-medium mb-2">
                                    Daily Hours of Operation
                                </label>
                                <input
                                    type="number"
                                    value={hoursOperation}
                                    onChange={(e) => setHoursOperation(e.target.value === '' ? '' : Number(e.target.value))}
                                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-emerald-500 transition-colors placeholder-gray-500"
                                    placeholder="e.g. 8"
                                    max={24}
                                />
                            </div>

                            <button
                                onClick={calculateCost}
                                className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-3 rounded-lg transition-all transform hover:scale-[1.02] shadow-lg shadow-emerald-500/20"
                            >
                                Compare Costs
                            </button>
                        </div>

                        <div className="bg-emerald-900/20 border border-emerald-500/20 rounded-xl p-8 flex flex-col justify-center text-center">
                            {result ? (
                                <div className="animate-in fade-in zoom-in duration-300 space-y-6">
                                    <div>
                                        <p className="text-gray-400 text-sm uppercase tracking-wider mb-1">Current Spending</p>
                                        <div className="text-3xl font-bold text-white">
                                            NPR {result.cost.toLocaleString()}<span className="text-lg text-gray-400 font-normal">/mo</span>
                                        </div>
                                        <p className="text-red-400 text-sm mt-1">
                                            for only {result.coverage} hours coverage
                                        </p>
                                    </div>

                                    <div className="border-t border-white/10 pt-6">
                                        <p className="text-emerald-400 text-sm uppercase tracking-wider mb-1">Sajedar AI Agent</p>
                                        <div className="text-3xl font-bold text-white">
                                            NPR {AI_PRICE.toLocaleString()}<span className="text-lg text-gray-400 font-normal">/mo</span>
                                        </div>
                                        <p className="text-emerald-400 text-sm mt-1 font-semibold">
                                            for 24/7 coverage
                                        </p>
                                    </div>
                                    
                                    <div className="pt-4">
                                        <Link href="/contact" className="inline-block text-sm text-white bg-white/10 hover:bg-white/20 px-4 py-2 rounded-lg transition-colors border border-white/10">
                                            Get Started &rarr;
                                        </Link>
                                    </div>
                                </div>
                            ) : (
                                <div className="text-gray-500">
                                    <svg className="w-12 h-12 mx-auto mb-3 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 002 2h2a2 2 0 002-2z" />
                                    </svg>
                                    <p>Enter your staff details to see the comparison.</p>
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