'use client';

import React, { useState, useEffect } from 'react';
import Header from '../../../components/Header';
import { Footer } from '../../../components/sections';

type CalculatorMode = 'promo' | 'flat';

export default function DiscountCalculatorPage() {
    const [mode, setMode] = useState<CalculatorMode>('promo');
    
    // Promo State (Buy X Get Y)
    const [buyQty, setBuyQty] = useState<number | ''>('');
    const [getQty, setGetQty] = useState<number | ''>('');
    
    // Flat State (Flat Off)
    const [originalPrice, setOriginalPrice] = useState<number | ''>('');
    const [discountAmount, setDiscountAmount] = useState<number | ''>('');

    const [resultPercent, setResultPercent] = useState<number | null>(null);

    useEffect(() => {
        setResultPercent(null);

        if (mode === 'promo') {
            if (buyQty && getQty) {
                // Formula: Free / (Buy + Free)
                const total = Number(buyQty) + Number(getQty);
                const percent = (Number(getQty) / total) * 100;
                setResultPercent(percent);
            }
        } else {
            if (originalPrice && discountAmount) {
                // Formula: Discount / Price
                const percent = (Number(discountAmount) / Number(originalPrice)) * 100;
                setResultPercent(percent);
            }
        }
    }, [mode, buyQty, getQty, originalPrice, discountAmount]);

    return (
        <div className="min-h-screen bg-gradient-to-br from-[#18181b] via-[#23243a] to-[#1a1a2e] flex flex-col font-sans">
            <Header />

            <div className="max-w-4xl mx-auto px-4 py-20 flex-grow w-full">
                <div className="text-center mb-10">
                    <span className="inline-block mb-3 px-3 py-1 text-sm font-semibold text-emerald-400 bg-emerald-400/10 rounded-full">
                        Free Tool
                    </span>
                    <h1 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">
                        True Discount Calculator
                    </h1>
                    <p className="text-gray-300">
                        Don't accidentally bankrupt your business. See the <i>real</i> percentage discount you are giving away.
                    </p>
                </div>

                <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8 md:p-12 shadow-2xl">
                    {/* Tabs */}
                    <div className="flex gap-2 mb-8 p-1 bg-black/20 rounded-lg max-w-md mx-auto">
                        <button
                            onClick={() => setMode('promo')}
                            className={`flex-1 py-2 px-4 rounded-md text-sm font-bold transition-all ${
                                mode === 'promo'
                                    ? 'bg-emerald-500 text-white shadow-lg'
                                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                            }`}
                        >
                            "Buy X Get Y Free"
                        </button>
                        <button
                            onClick={() => setMode('flat')}
                            className={`flex-1 py-2 px-4 rounded-md text-sm font-bold transition-all ${
                                mode === 'flat'
                                    ? 'bg-emerald-500 text-white shadow-lg'
                                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                            }`}
                        >
                            Flat Amount Off
                        </button>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        {/* Inputs */}
                        <div className="space-y-6">
                            {mode === 'promo' ? (
                                <div className="space-y-6 animate-in fade-in slide-in-from-left-4 duration-300">
                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-gray-300 text-sm font-medium mb-2">Buy (Qty)</label>
                                            <input
                                                type="number"
                                                value={buyQty}
                                                onChange={(e) => setBuyQty(e.target.value === '' ? '' : Number(e.target.value))}
                                                className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-emerald-500 text-center text-xl font-bold"
                                                placeholder="2"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-gray-300 text-sm font-medium mb-2">Get Free (Qty)</label>
                                            <input
                                                type="number"
                                                value={getQty}
                                                onChange={(e) => setGetQty(e.target.value === '' ? '' : Number(e.target.value))}
                                                className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-emerald-500 text-center text-xl font-bold"
                                                placeholder="1"
                                            />
                                        </div>
                                    </div>
                                    <p className="text-sm text-gray-400 text-center">
                                        Example: Buy 2, Get 1 Free means the customer gets 3 items total.
                                    </p>
                                </div>
                            ) : (
                                <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
                                    <div>
                                        <label className="block text-gray-300 text-sm font-medium mb-2">Item Price (NPR)</label>
                                        <input
                                            type="number"
                                            value={originalPrice}
                                            onChange={(e) => setOriginalPrice(e.target.value === '' ? '' : Number(e.target.value))}
                                            className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-emerald-500"
                                            placeholder="2000"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-gray-300 text-sm font-medium mb-2">Discount Amount (NPR)</label>
                                        <input
                                            type="number"
                                            value={discountAmount}
                                            onChange={(e) => setDiscountAmount(e.target.value === '' ? '' : Number(e.target.value))}
                                            className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-emerald-500"
                                            placeholder="500"
                                        />
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Result Display */}
                        <div className="bg-black/20 rounded-xl p-8 border border-white/5 flex flex-col justify-center min-h-[250px] text-center">
                            {resultPercent !== null ? (
                                <div className="animate-in zoom-in duration-300">
                                    <p className="text-gray-400 text-sm uppercase tracking-wider mb-2">True Discount</p>
                                    <div className={`text-6xl font-bold mb-4 ${resultPercent > 40 ? 'text-red-400' : 'text-emerald-400'}`}>
                                        {resultPercent.toFixed(1)}%
                                    </div>
                                    <p className="text-gray-300 text-sm">
                                        {resultPercent > 40 
                                            ? "⚠️ Warning: You are giving away a huge chunk of your margin!" 
                                            : "This is a reasonable offer."}
                                    </p>
                                </div>
                            ) : (
                                <div className="text-gray-500">
                                    <svg className="w-16 h-16 mx-auto mb-4 opacity-20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <p>Enter the numbers to calculate the true discount.</p>
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