'use client';

import React, { useState, useEffect } from 'react';
import Header from '../../../components/Header';
import { Footer } from '../../../components/sections';
import { AlertTriangle, TrendingDown, MessageSquare, ShoppingCart } from 'lucide-react';

export default function MissedRevenuePage() {
    const [messages, setMessages] = useState<number | ''>('');
    const [orderValue, setOrderValue] = useState<number | ''>('');
    
    // Constants based on industry averages
    const MISSED_RATE = 0.40; // 40% of messages go unanswered or answered too late manually
    
    const [lostRevenue, setLostRevenue] = useState<number | null>(null);

    useEffect(() => {
        if (messages && orderValue) {
            // Logic: (Daily Messages * 0.40) * Avg Order Value * 30 Days
            const dailyMissed = Number(messages) * MISSED_RATE;
            const dailyLoss = dailyMissed * Number(orderValue);
            const monthlyLoss = dailyLoss * 30;
            
            setLostRevenue(monthlyLoss);
        } else {
            setLostRevenue(null);
        }
    }, [messages, orderValue]);

    return (
        <div className="min-h-screen bg-gradient-to-br from-[#18181b] via-[#23243a] to-[#1a1a2e] flex flex-col font-sans">
            <Header />

            <div className="max-w-4xl mx-auto px-4 py-20 flex-grow w-full">
                <div className="text-center mb-12">
                    <span className="inline-block mb-3 px-3 py-1 text-sm font-semibold text-red-400 bg-red-400/10 rounded-full">
                        Reality Check
                    </span>
                    <h1 className="text-3xl md:text-5xl font-serif font-bold text-white mb-4">
                        Cost of Ignoring Customers
                    </h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        You might be losing money while you sleep. Calculate the revenue you miss by not having 24/7 instant replies.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-10 items-center">
                    {/* Inputs */}
                    <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8 space-y-6">
                        <div>
                            <label className="block text-gray-300 text-sm font-medium mb-2 flex items-center gap-2">
                                <MessageSquare size={18} className="text-emerald-400" /> Avg. Daily Messages
                            </label>
                            <input
                                type="number"
                                value={messages}
                                onChange={(e) => setMessages(e.target.value === '' ? '' : Number(e.target.value))}
                                className="w-full bg-black/20 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-emerald-500 placeholder-gray-500"
                                placeholder="e.g. 20"
                            />
                            <p className="text-xs text-gray-500 mt-2">How many DMs do you get on Facebook/Insta per day?</p>
                        </div>

                        <div>
                            <label className="block text-gray-300 text-sm font-medium mb-2 flex items-center gap-2">
                                <ShoppingCart size={18} className="text-emerald-400" /> Avg. Order Value (Rs.)
                            </label>
                            <input
                                type="number"
                                value={orderValue}
                                onChange={(e) => setOrderValue(e.target.value === '' ? '' : Number(e.target.value))}
                                className="w-full bg-black/20 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-emerald-500 placeholder-gray-500"
                                placeholder="e.g. 1500"
                            />
                        </div>
                    </div>

                    {/* Result */}
                    <div className="bg-gradient-to-br from-red-900/20 to-black/40 rounded-2xl border border-red-500/20 p-8 text-center flex flex-col justify-center h-full">
                        {lostRevenue !== null ? (
                            <div className="animate-in fade-in zoom-in duration-500">
                                <div className="bg-red-500/20 p-3 rounded-full w-fit mx-auto mb-4">
                                    <TrendingDown size={32} className="text-red-400" />
                                </div>
                                <p className="text-gray-400 text-sm uppercase tracking-wider mb-2">You are losing approximately</p>
                                <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">
                                    Rs. {lostRevenue.toLocaleString()}
                                </h2>
                                <p className="text-gray-400 text-sm mb-6">per month in missed sales.</p>
                                
                                <div className="bg-emerald-500/10 border border-emerald-500/20 p-4 rounded-xl">
                                    <p className="text-emerald-300 font-bold text-sm mb-1">
                                        💡 Solution
                                    </p>
                                    <p className="text-gray-300 text-sm">
                                        A Sajedar AI Bot costs <span className="text-white font-bold underline decoration-emerald-500">significantly less</span> than this amount.
                                    </p>
                                </div>
                            </div>
                        ) : (
                            <div className="text-gray-500">
                                <AlertTriangle size={64} className="mx-auto mb-4 opacity-20" />
                                <p>Enter your metrics to see the hard truth.</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}