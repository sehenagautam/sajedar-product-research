'use client';

import React, { useState, useEffect } from 'react';
import Header from '../../../components/Header';
import { Footer } from '../../../components/sections';
import { Users, Banknote, Bot, CheckCircle } from 'lucide-react';

export default function SalaryVsBotPage() {
    const [agents, setAgents] = useState<number>(1);
    const [salary, setSalary] = useState<number>(18000); // Default realistic Nepal salary
    
    // Constants
    const BOT_YEARLY_COST = 100000; // Example: 1 Lakh/year (Setup + Maintenance) for comparison
    
    const [humanCost, setHumanCost] = useState(0);
    const [savings, setSavings] = useState(0);

    useEffect(() => {
        const yearlyHuman = agents * salary * 12;
        setHumanCost(yearlyHuman);
        setSavings(yearlyHuman - BOT_YEARLY_COST);
    }, [agents, salary]);

    return (
        <div className="min-h-screen bg-gradient-to-br from-[#18181b] via-[#23243a] to-[#1a1a2e] flex flex-col font-sans">
            <Header />

            <div className="max-w-5xl mx-auto px-4 py-20 flex-grow w-full">
                <div className="text-center mb-12">
                    <span className="inline-block mb-3 px-3 py-1 text-sm font-semibold text-emerald-400 bg-emerald-400/10 rounded-full">
                        ROI Tool
                    </span>
                    <h1 className="text-3xl md:text-5xl font-serif font-bold text-white mb-4">
                        Staff Salary vs. AI Chatbot
                    </h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        Compare the yearly cost of human support staff versus automating your inbox with a Sajedar AI Agent.
                    </p>
                </div>

                <div className="grid lg:grid-cols-3 gap-8 items-start">
                    {/* Controls */}
                    <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8 space-y-8 lg:col-span-1">
                        <div>
                            <label className="block text-gray-300 text-sm font-medium mb-3 flex items-center gap-2">
                                <Users size={18} className="text-emerald-400" /> Number of Staff
                            </label>
                            <input
                                type="range"
                                min="1"
                                max="10"
                                value={agents}
                                onChange={(e) => setAgents(Number(e.target.value))}
                                className="w-full accent-emerald-500 mb-2"
                            />
                            <div className="text-right text-white font-bold text-xl">{agents} Agent{agents > 1 ? 's' : ''}</div>
                        </div>

                        <div>
                            <label className="block text-gray-300 text-sm font-medium mb-3 flex items-center gap-2">
                                <Banknote size={18} className="text-emerald-400" /> Avg. Monthly Salary (NPR)
                            </label>
                            <input
                                type="number"
                                value={salary}
                                onChange={(e) => setSalary(Number(e.target.value))}
                                className="w-full bg-black/20 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-emerald-500"
                            />
                        </div>
                    </div>

                    {/* Visual Comparison */}
                    <div className="bg-black/20 rounded-2xl border border-white/5 p-8 lg:col-span-2">
                        <h3 className="text-white font-bold mb-8">Yearly Cost Comparison</h3>
                        
                        <div className="space-y-6">
                            {/* Human Bar */}
                            <div>
                                <div className="flex justify-between text-sm mb-2">
                                    <span className="text-gray-300 flex items-center gap-2"><Users size={16}/> Human Support</span>
                                    <span className="text-white font-bold">Rs. {humanCost.toLocaleString()}</span>
                                </div>
                                <div className="w-full bg-white/10 rounded-full h-12 relative overflow-hidden">
                                    <div className="absolute top-0 left-0 h-full bg-red-500/80 flex items-center px-4 transition-all duration-500" style={{ width: '100%' }}>
                                        <span className="text-white/90 text-xs font-bold uppercase tracking-wider">Expensive & Limited Hours</span>
                                    </div>
                                </div>
                            </div>

                            {/* Bot Bar */}
                            <div>
                                <div className="flex justify-between text-sm mb-2">
                                    <span className="text-gray-300 flex items-center gap-2"><Bot size={16} className="text-emerald-400"/> Sajedar AI Bot</span>
                                    <span className="text-emerald-400 font-bold">~ Rs. {BOT_YEARLY_COST.toLocaleString()}</span>
                                </div>
                                <div className="w-full bg-white/10 rounded-full h-12 relative overflow-hidden">
                                    <div 
                                        className="absolute top-0 left-0 h-full bg-emerald-500 flex items-center px-4 transition-all duration-500 whitespace-nowrap" 
                                        style={{ width: `${Math.min((BOT_YEARLY_COST / humanCost) * 100, 100)}%` }}
                                    >
                                        <span className="text-white text-xs font-bold uppercase tracking-wider">24/7 Available</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Savings Callout */}
                        {savings > 0 && (
                            <div className="mt-10 bg-emerald-900/20 border border-emerald-500/30 rounded-xl p-6 flex items-start gap-4 animate-in fade-in slide-in-from-bottom-4">
                                <div className="bg-emerald-500 p-2 rounded-full mt-1">
                                    <CheckCircle size={24} className="text-white" />
                                </div>
                                <div>
                                    <h4 className="text-emerald-400 font-bold text-lg mb-1">Potential Yearly Savings: Rs. {savings.toLocaleString()}</h4>
                                    <p className="text-gray-300 text-sm leading-relaxed">
                                        Switching to AI automation saves you money while giving your customers instant replies, 24/7, 365 days a year.
                                    </p>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}