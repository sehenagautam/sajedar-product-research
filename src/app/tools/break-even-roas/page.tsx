'use client';

import React, { useState, useEffect } from 'react';
import Header from '../../../components/Header';
import { Footer } from '../../../components/sections';
import { Calculator, TrendingUp, AlertCircle, DollarSign } from 'lucide-react';

export default function BreakEvenRoasPage() {
    const [price, setPrice] = useState<number | ''>('');
    const [cost, setCost] = useState<number | ''>('');
    const [roas, setRoas] = useState<number | null>(null);
    const [profitMargin, setProfitMargin] = useState<number | null>(null);

    useEffect(() => {
        if (price && cost && Number(price) > Number(cost)) {
            const priceNum = Number(price);
            const costNum = Number(cost);
            
            // Logic: Break Even ROAS = Price / (Price - Cost)
            // Example: Price 100, Cost 40. Margin = 60. ROAS = 100/60 = 1.66
            const margin = priceNum - costNum;
            const calculatedRoas = priceNum / margin;
            const calculatedMargin = (margin / priceNum) * 100;

            setRoas(calculatedRoas);
            setProfitMargin(calculatedMargin);
        } else {
            setRoas(null);
            setProfitMargin(null);
        }
    }, [price, cost]);

    return (
        <div className="min-h-screen bg-gradient-to-br from-[#18181b] via-[#23243a] to-[#1a1a2e] flex flex-col font-sans">
            <Header />

            <div className="max-w-4xl mx-auto px-4 py-20 flex-grow w-full">
                <div className="text-center mb-12">
                    <span className="inline-block mb-3 px-3 py-1 text-sm font-semibold text-emerald-400 bg-emerald-400/10 rounded-full">
                        Sales Logic
                    </span>
                    <h1 className="text-3xl md:text-5xl font-serif font-bold text-white mb-4">
                        Break-Even ROAS Calculator
                    </h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        Stop burning money. Find the exact Return On Ad Spend (ROAS) you need to hit just to cover your product costs.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-10 items-start">
                    {/* Inputs */}
                    <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8 space-y-6 h-full">
                        <div>
                            <label className="block text-gray-300 font-bold mb-2 flex items-center gap-2">
                                <DollarSign size={18} className="text-emerald-400" /> Product Selling Price
                            </label>
                            <input
                                type="number"
                                value={price}
                                onChange={(e) => setPrice(e.target.value === '' ? '' : Number(e.target.value))}
                                placeholder="e.g. 2500"
                                className="w-full bg-black/20 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-emerald-500"
                            />
                        </div>

                        <div>
                            <label className="block text-gray-300 font-bold mb-2 flex items-center gap-2">
                                <DollarSign size={18} className="text-red-400" /> Product Cost (COGS)
                            </label>
                            <input
                                type="number"
                                value={cost}
                                onChange={(e) => setCost(e.target.value === '' ? '' : Number(e.target.value))}
                                placeholder="e.g. 1000"
                                className="w-full bg-black/20 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-emerald-500"
                            />
                            <p className="text-xs text-gray-500 mt-2">Include manufacturing, shipping, and packaging costs.</p>
                        </div>
                    </div>

                    {/* Output */}
                    <div className="bg-gradient-to-br from-emerald-900/20 to-black/40 rounded-2xl border border-emerald-500/20 p-8 flex flex-col justify-center h-full min-h-[300px]">
                        {roas !== null ? (
                            <div className="text-center animate-in fade-in zoom-in duration-300">
                                <p className="text-gray-400 text-sm uppercase tracking-wider mb-2">You need a Minimum ROAS of</p>
                                <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
                                    {roas.toFixed(2)}x
                                </h2>
                                
                                <div className="bg-white/5 border border-white/10 rounded-xl p-4 text-left">
                                    <h4 className="text-emerald-400 font-bold text-sm mb-2 flex items-center gap-2">
                                        <TrendingUp size={16} /> What this means:
                                    </h4>
                                    <p className="text-gray-300 text-sm leading-relaxed mb-3">
                                        For every <strong>Rs. 100</strong> you spend on ads, you must generate at least <strong>Rs. {(100 * roas).toFixed(0)}</strong> in revenue just to break even.
                                    </p>
                                    <p className="text-gray-400 text-xs border-t border-white/10 pt-2">
                                        Your Profit Margin is <strong>{profitMargin?.toFixed(1)}%</strong>.
                                    </p>
                                </div>
                            </div>
                        ) : (
                            <div className="text-center text-gray-500">
                                <Calculator size={64} className="mx-auto mb-4 opacity-20" />
                                <p>Enter your prices to calculate your safety number.</p>
                                {Number(cost) >= Number(price) && price !== '' && (
                                    <p className="text-red-400 text-xs mt-4 flex items-center justify-center gap-1">
                                        <AlertCircle size={12} /> Cost cannot be higher than Price!
                                    </p>
                                )}
                            </div>
                        )}
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}