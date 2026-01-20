'use client';

import React, { useState, useEffect } from 'react';
import Header from '../../../components/Header';
import { Footer } from '../../../components/sections';

export default function EcommerceCalculatorPage() {
    const [cpp, setCpp] = useState<number | ''>('');
    const [shipping, setShipping] = useState<number | ''>('');
    const [cpa, setCpa] = useState<number | ''>('');
    const [price, setPrice] = useState<number | ''>('');

    const [metrics, setMetrics] = useState<{
        totalCost: number;
        profit: number;
        margin: number;
        breakEvenROAS: number;
    } | null>(null);

    useEffect(() => {
        if (cpp === '' || shipping === '' || cpa === '' || price === '') {
            setMetrics(null);
            return;
        }

        const productCost = Number(cpp);
        const shippingCost = Number(shipping);
        const adCost = Number(cpa);
        const sellingPrice = Number(price);

        const totalCost = productCost + shippingCost + adCost;
        const profit = sellingPrice - totalCost;
        const margin = (profit / sellingPrice) * 100;
        
        // Break Even ROAS = Selling Price / (Selling Price - Product Cost - Shipping Cost) 
        // Or simplified: Revenue / Ad Spend (where profit is 0). 
        // A common simple metric is just Break Even CPA, but let's stick to profit/margin.

        setMetrics({
            totalCost,
            profit,
            margin,
            breakEvenROAS: 0 // Placeholder if needed later
        });
    }, [cpp, shipping, cpa, price]);

    // Helper to calculate width percentage for the bar chart
    const getWidth = (val: number) => {
        if (!metrics || !price) return 0;
        return Math.max(0, (val / Number(price)) * 100);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-[#18181b] via-[#23243a] to-[#1a1a2e] flex flex-col font-sans">
            <Header />

            <div className="max-w-5xl mx-auto px-4 py-20 flex-grow w-full">
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8 md:p-12 shadow-2xl">
                    <div className="text-center mb-10">
                        <span className="inline-block mb-3 px-3 py-1 text-sm font-semibold text-emerald-400 bg-emerald-400/10 rounded-full">
                            Free Tool
                        </span>
                        <h1 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">
                            E-commerce Profit Calculator
                        </h1>
                        <p className="text-gray-300">
                            Stop guessing. Know exactly how much profit you make on every order after product, shipping, and ad costs.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12">
                        {/* Inputs */}
                        <div className="space-y-6">
                            <h3 className="text-xl font-bold text-white border-b border-white/10 pb-2">Unit Economics</h3>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-gray-300 text-sm font-medium mb-2">
                                        Selling Price (NPR)
                                    </label>
                                    <input
                                        type="number"
                                        value={price}
                                        onChange={(e) => setPrice(e.target.value === '' ? '' : Number(e.target.value))}
                                        className="w-full bg-white/10 border border-emerald-500/50 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-emerald-400 transition-colors placeholder-gray-500"
                                        placeholder="e.g. 2500"
                                    />
                                </div>
                                
                                <div>
                                    <label className="block text-gray-300 text-sm font-medium mb-2">
                                        Product Cost (CPP)
                                    </label>
                                    <input
                                        type="number"
                                        value={cpp}
                                        onChange={(e) => setCpp(e.target.value === '' ? '' : Number(e.target.value))}
                                        className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-emerald-500 transition-colors placeholder-gray-500"
                                        placeholder="e.g. 1200"
                                    />
                                </div>

                                <div>
                                    <label className="block text-gray-300 text-sm font-medium mb-2">
                                        Shipping Cost
                                    </label>
                                    <input
                                        type="number"
                                        value={shipping}
                                        onChange={(e) => setShipping(e.target.value === '' ? '' : Number(e.target.value))}
                                        className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-emerald-500 transition-colors placeholder-gray-500"
                                        placeholder="e.g. 150"
                                    />
                                </div>

                                <div>
                                    <label className="block text-gray-300 text-sm font-medium mb-2">
                                        Ad Cost (CPA)
                                    </label>
                                    <input
                                        type="number"
                                        value={cpa}
                                        onChange={(e) => setCpa(e.target.value === '' ? '' : Number(e.target.value))}
                                        className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-emerald-500 transition-colors placeholder-gray-500"
                                        placeholder="e.g. 500"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Visuals & Results */}
                        <div className="bg-black/20 rounded-xl p-8 border border-white/5 flex flex-col justify-center">
                            {metrics ? (
                                <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                                    {/* Main Profit Number */}
                                    <div className="text-center mb-8">
                                        <p className="text-gray-400 text-sm uppercase tracking-wider mb-2">Net Profit Per Order</p>
                                        <div className={`text-5xl font-bold mb-2 ${metrics.profit >= 0 ? 'text-emerald-400' : 'text-red-400'}`}>
                                            NPR {metrics.profit.toLocaleString()}
                                        </div>
                                        <div className={`inline-block px-3 py-1 rounded-full text-sm font-bold ${metrics.profit >= 0 ? 'bg-emerald-400/10 text-emerald-400' : 'bg-red-400/10 text-red-400'}`}>
                                            {metrics.margin.toFixed(1)}% Margin
                                        </div>
                                    </div>

                                    {/* Visual Bar Chart */}
                                    <div className="space-y-4">
                                        <p className="text-xs text-gray-500 uppercase tracking-widest text-center">Where your money goes</p>
                                        
                                        {/* The Stacked Bar */}
                                        <div className="h-6 w-full flex rounded-full overflow-hidden bg-white/5">
                                            <div style={{ width: `${getWidth(Number(cpp))}%` }} className="h-full bg-blue-500/70" title="Product Cost" />
                                            <div style={{ width: `${getWidth(Number(shipping))}%` }} className="h-full bg-yellow-500/70" title="Shipping" />
                                            <div style={{ width: `${getWidth(Number(cpa))}%` }} className="h-full bg-purple-500/70" title="Ad Cost" />
                                            {metrics.profit > 0 && (
                                                <div style={{ width: `${getWidth(metrics.profit)}%` }} className="h-full bg-emerald-500" title="Profit" />
                                            )}
                                        </div>

                                        {/* Legend */}
                                        <div className="grid grid-cols-2 gap-2 text-xs text-gray-400 mt-2">
                                            <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-blue-500/70"></div> Product: {Math.round(getWidth(Number(cpp)))}%</div>
                                            <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-yellow-500/70"></div> Shipping: {Math.round(getWidth(Number(shipping)))}%</div>
                                            <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-purple-500/70"></div> Ads: {Math.round(getWidth(Number(cpa)))}%</div>
                                            <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-emerald-500"></div> Profit: {Math.round(getWidth(metrics.profit))}%</div>
                                        </div>
                                    </div>

                                </div>
                            ) : (
                                <div className="text-gray-500 text-center h-full flex flex-col items-center justify-center min-h-[200px]">
                                    <svg className="w-16 h-16 mb-4 opacity-20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 002 2h2a2 2 0 002-2z" />
                                    </svg>
                                    <p>Fill in the numbers to see your profit breakdown.</p>
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