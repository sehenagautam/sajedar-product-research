'use client';

import React, { useState, useEffect } from 'react';
import Header from '../../../components/Header';
import { Footer } from '../../../components/sections';

export default function VatCalculatorPage() {
    const [totalPrice, setTotalPrice] = useState<number | ''>('');
    const [results, setResults] = useState<{ base: string; vat: string } | null>(null);

    useEffect(() => {
        if (!totalPrice) {
            setResults(null);
            return;
        }

        // Logic: Total = Base * 1.13
        // So, Base = Total / 1.13
        const base = Number(totalPrice) / 1.13;
        const vat = Number(totalPrice) - base;

        setResults({
            base: base.toFixed(2),
            vat: vat.toFixed(2)
        });
    }, [totalPrice]);

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
                            Reverse VAT Calculator
                        </h1>
                        <p className="text-gray-300">
                            Instantly find the Base Price and VAT amount from a total inclusive price (13%).
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-10 items-center">
                        <div className="space-y-6">
                            <div>
                                <label className="block text-gray-300 text-sm font-medium mb-2">
                                    Total Inclusive Price (NPR)
                                </label>
                                <input
                                    type="number"
                                    value={totalPrice}
                                    onChange={(e) => setTotalPrice(e.target.value === '' ? '' : Number(e.target.value))}
                                    className="w-full bg-white/10 border border-emerald-500/50 rounded-lg px-4 py-4 text-white text-lg focus:outline-none focus:border-emerald-400 transition-colors placeholder-gray-500"
                                    placeholder="e.g. 1500"
                                    autoFocus
                                />
                            </div>
                            
                            <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-lg p-4 text-sm text-emerald-300">
                                <p><strong>Tip:</strong> Nepali VAT is flat 13%.</p>
                                <p className="mt-1 opacity-80">Use this to quickly fill out invoices when you only know the final customer price.</p>
                            </div>
                        </div>

                        <div className="bg-black/20 rounded-xl p-8 border border-white/5 flex flex-col justify-center min-h-[250px]">
                            {results ? (
                                <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
                                    <div className="flex justify-between items-center border-b border-white/10 pb-4">
                                        <span className="text-gray-400">Base Price</span>
                                        <span className="text-2xl font-bold text-white">NPR {Number(results.base).toLocaleString()}</span>
                                    </div>
                                    <div className="flex justify-between items-center border-b border-white/10 pb-4">
                                        <span className="text-gray-400">VAT (13%)</span>
                                        <span className="text-2xl font-bold text-emerald-400">+ NPR {Number(results.vat).toLocaleString()}</span>
                                    </div>
                                    <div className="flex justify-between items-center pt-2">
                                        <span className="text-gray-300 font-semibold">Total</span>
                                        <span className="text-3xl font-bold text-white">NPR {totalPrice.toLocaleString()}</span>
                                    </div>
                                </div>
                            ) : (
                                <div className="text-gray-500 text-center">
                                    <svg className="w-12 h-12 mx-auto mb-3 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 7h6m0 36v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                                    </svg>
                                    <p>Enter a price to see the breakdown.</p>
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