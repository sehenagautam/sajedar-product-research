'use client';

import React, { useState, useEffect } from 'react';
import Header from '../../../components/Header';
import { Footer } from '../../../components/sections';
import { DollarSign, TrendingUp, MousePointer, Target } from 'lucide-react';

export default function ROASPage() {
    const [adSpend, setAdSpend] = useState<number | ''>('');
    const [cpc, setCpc] = useState<number | ''>('');
    const [conversionRate, setConversionRate] = useState<number | ''>('');
    const [avgOrderValue, setAvgOrderValue] = useState<number | ''>('');

    const [results, setResults] = useState<{
        clicks: number;
        conversions: number;
        revenue: number;
        roas: number;
    } | null>(null);

    useEffect(() => {
        if (adSpend && cpc && conversionRate && avgOrderValue) {
            const spend = Number(adSpend);
            const costPerClick = Number(cpc);
            const convRate = Number(conversionRate) / 100;
            const aov = Number(avgOrderValue);

            const clicks = Math.floor(spend / costPerClick);
            const conversions = Math.floor(clicks * convRate);
            const revenue = conversions * aov;
            const roas = spend > 0 ? revenue / spend : 0;

            setResults({ clicks, conversions, revenue, roas });
        } else {
            setResults(null);
        }
    }, [adSpend, cpc, conversionRate, avgOrderValue]);

    return (
        <div className="min-h-screen bg-gradient-to-br from-[#18181b] via-[#23243a] to-[#1a1a2e] flex flex-col font-sans">
            <Header />

            <div className="max-w-5xl mx-auto px-4 py-20 flex-grow w-full">
                <div className="text-center mb-12">
                    <span className="inline-block mb-3 px-3 py-1 text-sm font-semibold text-emerald-400 bg-emerald-400/10 rounded-full">
                        Business Tool
                    </span>
                    <h1 className="text-3xl md:text-5xl font-serif font-bold text-white mb-4">
                        ROAS Estimator
                    </h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        Return on Ad Spend Calculator. Project your potential revenue based on your ad budget and funnel metrics.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-10">
                    {/* Inputs */}
                    <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8 space-y-6">
                        <div className="grid grid-cols-2 gap-6">
                            <div>
                                <label className="block text-gray-300 text-xs font-bold mb-2 uppercase tracking-wide">Total Ad Spend</label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-500">
                                        Rs.
                                    </div>
                                    <input
                                        type="number"
                                        value={adSpend}
                                        onChange={(e) => setAdSpend(e.target.value === '' ? '' : Number(e.target.value))}
                                        className="w-full bg-white/10 border border-white/20 rounded-lg pl-10 pr-4 py-3 text-white focus:outline-none focus:border-emerald-500"
                                        placeholder="10000"
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="block text-gray-300 text-xs font-bold mb-2 uppercase tracking-wide">Cost Per Click (CPC)</label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-500">
                                        Rs.
                                    </div>
                                    <input
                                        type="number"
                                        value={cpc}
                                        onChange={(e) => setCpc(e.target.value === '' ? '' : Number(e.target.value))}
                                        className="w-full bg-white/10 border border-white/20 rounded-lg pl-10 pr-4 py-3 text-white focus:outline-none focus:border-emerald-500"
                                        placeholder="10"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-6">
                            <div>
                                <label className="block text-gray-300 text-xs font-bold mb-2 uppercase tracking-wide">Conversion Rate (%)</label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-500">
                                        <Target size={14} />
                                    </div>
                                    <input
                                        type="number"
                                        value={conversionRate}
                                        onChange={(e) => setConversionRate(e.target.value === '' ? '' : Number(e.target.value))}
                                        className="w-full bg-white/10 border border-white/20 rounded-lg pl-10 pr-4 py-3 text-white focus:outline-none focus:border-emerald-500"
                                        placeholder="2.5"
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="block text-gray-300 text-xs font-bold mb-2 uppercase tracking-wide">Avg. Order Value</label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-500">
                                        Rs.
                                    </div>
                                    <input
                                        type="number"
                                        value={avgOrderValue}
                                        onChange={(e) => setAvgOrderValue(e.target.value === '' ? '' : Number(e.target.value))}
                                        className="w-full bg-white/10 border border-white/20 rounded-lg pl-10 pr-4 py-3 text-white focus:outline-none focus:border-emerald-500"
                                        placeholder="1500"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Results */}
                    <div className="bg-gradient-to-br from-emerald-900/20 to-black/40 rounded-2xl border border-emerald-500/20 p-8 flex flex-col justify-center">
                        {results ? (
                            <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                                <div>
                                    <p className="text-gray-400 text-sm uppercase tracking-wider mb-1">Projected Revenue</p>
                                    <h2 className="text-4xl md:text-5xl font-bold text-white flex items-baseline gap-1">
                                        <span className="text-2xl text-emerald-500">Rs.</span>
                                        {results.revenue.toLocaleString()}
                                    </h2>
                                </div>

                                <div className="grid grid-cols-3 gap-4 border-t border-white/10 pt-6">
                                    <div>
                                        <p className="text-gray-500 text-xs uppercase mb-1 flex items-center gap-1"><MousePointer size={12}/> Clicks</p>
                                        <p className="text-xl font-bold text-white">{results.clicks.toLocaleString()}</p>
                                    </div>
                                    <div>
                                        <p className="text-gray-500 text-xs uppercase mb-1 flex items-center gap-1"><Target size={12}/> Sales</p>
                                        <p className="text-xl font-bold text-white">{results.conversions.toLocaleString()}</p>
                                    </div>
                                    <div>
                                        <p className="text-gray-500 text-xs uppercase mb-1 flex items-center gap-1"><TrendingUp size={12}/> ROAS</p>
                                        <p className={`text-xl font-bold ${results.roas >= 1 ? 'text-emerald-400' : 'text-red-400'}`}>
                                            {results.roas.toFixed(2)}x
                                        </p>
                                    </div>
                                </div>

                                {results.roas < 1 && (
                                    <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-3 text-xs text-red-200">
                                        ⚠️ Warning: Your projected return is less than your spend. Consider improving conversion rates or lowering CPC.
                                    </div>
                                )}
                            </div>
                        ) : (
                            <div className="text-center text-gray-500">
                                <DollarSign size={64} className="mx-auto mb-4 opacity-20" />
                                <p>Fill in the metrics to see your projection.</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}