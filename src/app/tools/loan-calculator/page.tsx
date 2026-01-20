'use client';

import React, { useState, useEffect } from 'react';
import Header from '../../../components/Header';
import { Footer } from '../../../components/sections';
import { Calculator, Banknote, Calendar, Percent, TrendingDown } from 'lucide-react';

export default function LoanCalculatorPage() {
    // Inputs
    const [amount, setAmount] = useState<number | ''>('');
    const [rate, setRate] = useState<number | ''>(12); // Default to typical Nepal rate
    const [years, setYears] = useState<number | ''>(15); // Default tenure
    
    // Prepayment Feature
    const [showPrepayment, setShowPrepayment] = useState(false);
    const [extraPayment, setExtraPayment] = useState<number | ''>('');

    // Results
    const [results, setResults] = useState<{
        emi: number;
        totalInterest: number;
        totalPayment: number;
        savings?: number;
        newTenureMonths?: number;
    } | null>(null);

    useEffect(() => {
        if (!amount || !rate || !years) {
            setResults(null);
            return;
        }

        const P = Number(amount);
        const r = Number(rate) / 12 / 100; // Monthly rate
        const n = Number(years) * 12; // Months

        // Standard EMI Formula: E = P * r * (1+r)^n / ((1+r)^n - 1)
        const emi = (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
        const totalPayment = emi * n;
        const totalInterest = totalPayment - P;

        let savings = 0;
        let newTenureMonths = n;

        // Calculate Prepayment Impact
        if (showPrepayment && extraPayment && Number(extraPayment) > 0) {
            const extra = Number(extraPayment);
            const totalMonthly = emi + extra;
            
            // Recalculate tenure iteratively or via formula
            // Simple iteration for accuracy
            let balance = P;
            let months = 0;
            let interestPaidWithExtra = 0;

            while (balance > 0 && months < 1000) { // Safety break
                const monthlyInterest = balance * r;
                interestPaidWithExtra += monthlyInterest;
                const principalPaid = totalMonthly - monthlyInterest;
                balance -= principalPaid;
                months++;
            }
            
            newTenureMonths = months;
            const newTotalInterest = interestPaidWithExtra;
            savings = totalInterest - newTotalInterest;
        }

        setResults({
            emi,
            totalInterest,
            totalPayment,
            savings: savings > 0 ? savings : undefined,
            newTenureMonths: savings > 0 ? newTenureMonths : undefined
        });

    }, [amount, rate, years, extraPayment, showPrepayment]);

    const formatCurrency = (val: number) => {
        return new Intl.NumberFormat('en-NP', { style: 'currency', currency: 'NPR', maximumFractionDigits: 0 }).format(val);
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
                        Loan / EMI Calculator
                    </h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        Plan your Home or Auto loan smartly. See how small extra payments can save you lakhs in interest.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-10">
                    {/* Inputs */}
                    <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8 space-y-8">
                        <div>
                            <label className="block text-gray-300 text-sm font-medium mb-3 flex items-center gap-2">
                                <Banknote size={18} className="text-emerald-400" /> Loan Amount (NPR)
                            </label>
                            <input
                                type="number"
                                value={amount}
                                onChange={(e) => setAmount(e.target.value === '' ? '' : Number(e.target.value))}
                                className="w-full bg-white/10 border border-white/20 rounded-xl px-5 py-4 text-white text-xl font-bold focus:outline-none focus:border-emerald-500 transition-colors placeholder-gray-600"
                                placeholder="e.g. 50,00,000"
                            />
                        </div>

                        <div className="grid grid-cols-2 gap-6">
                            <div>
                                <label className="block text-gray-300 text-sm font-medium mb-3 flex items-center gap-2">
                                    <Percent size={18} className="text-emerald-400" /> Interest Rate (%)
                                </label>
                                <input
                                    type="number"
                                    value={rate}
                                    onChange={(e) => setRate(e.target.value === '' ? '' : Number(e.target.value))}
                                    className="w-full bg-white/10 border border-white/20 rounded-xl px-5 py-4 text-white text-lg font-bold focus:outline-none focus:border-emerald-500 transition-colors placeholder-gray-600"
                                    placeholder="12"
                                />
                            </div>
                            <div>
                                <label className="block text-gray-300 text-sm font-medium mb-3 flex items-center gap-2">
                                    <Calendar size={18} className="text-emerald-400" /> Tenure (Years)
                                </label>
                                <input
                                    type="number"
                                    value={years}
                                    onChange={(e) => setYears(e.target.value === '' ? '' : Number(e.target.value))}
                                    className="w-full bg-white/10 border border-white/20 rounded-xl px-5 py-4 text-white text-lg font-bold focus:outline-none focus:border-emerald-500 transition-colors placeholder-gray-600"
                                    placeholder="15"
                                />
                            </div>
                        </div>

                        {/* Prepayment Toggle */}
                        <div className="pt-6 border-t border-white/10">
                            <div className="flex items-center justify-between mb-4">
                                <label className="text-emerald-300 font-semibold text-sm flex items-center gap-2">
                                    <TrendingDown size={18} /> Make Pre-payments?
                                </label>
                                <div 
                                    onClick={() => setShowPrepayment(!showPrepayment)}
                                    className={`w-12 h-6 rounded-full p-1 cursor-pointer transition-colors ${showPrepayment ? 'bg-emerald-500' : 'bg-gray-700'}`}
                                >
                                    <div className={`w-4 h-4 bg-white rounded-full transition-transform ${showPrepayment ? 'translate-x-6' : 'translate-x-0'}`} />
                                </div>
                            </div>

                            {showPrepayment && (
                                <div className="animate-in fade-in slide-in-from-top-2 duration-300 bg-emerald-500/10 border border-emerald-500/20 rounded-xl p-4">
                                    <label className="block text-gray-300 text-xs font-medium mb-2">
                                        Extra Amount you can pay monthly
                                    </label>
                                    <input
                                        type="number"
                                        value={extraPayment}
                                        onChange={(e) => setExtraPayment(e.target.value === '' ? '' : Number(e.target.value))}
                                        className="w-full bg-black/20 border border-emerald-500/30 rounded-lg px-4 py-2 text-white font-mono focus:outline-none focus:border-emerald-500"
                                        placeholder="e.g. 5000"
                                    />
                                    <p className="text-xs text-gray-400 mt-2">
                                        Even a small extra payment reduces your principal faster.
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Results */}
                    <div className="flex flex-col justify-center">
                        {results ? (
                            <div className="space-y-6 animate-in fade-in zoom-in duration-300">
                                {/* Main EMI Card */}
                                <div className="bg-gradient-to-br from-emerald-900/40 to-black/40 border border-emerald-500/30 rounded-2xl p-8 text-center relative overflow-hidden">
                                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 to-blue-500" />
                                    <p className="text-gray-400 text-sm uppercase tracking-wider mb-2">Monthly EMI</p>
                                    <div className="text-5xl font-bold text-white mb-2">
                                        {formatCurrency(results.emi)}
                                    </div>
                                    <p className="text-emerald-400 text-sm font-medium">
                                        Total Interest Payable: {formatCurrency(results.totalInterest)}
                                    </p>
                                </div>

                                {/* Savings Card (If Prepayment) */}
                                {results.savings && (
                                    <div className="bg-blue-600/20 border border-blue-500/30 rounded-2xl p-6 flex flex-col items-center text-center">
                                        <div className="bg-blue-500 p-2 rounded-full mb-3">
                                            <TrendingDown className="text-white" size={24} />
                                        </div>
                                        <h3 className="text-xl font-bold text-white mb-1">Smart Financial Move!</h3>
                                        <p className="text-gray-300 text-sm mb-4">
                                            By paying extra {formatCurrency(Number(extraPayment))} per month:
                                        </p>
                                        <div className="grid grid-cols-2 gap-4 w-full">
                                            <div className="bg-black/20 rounded-lg p-3">
                                                <p className="text-xs text-gray-400 uppercase">You Save</p>
                                                <p className="text-lg font-bold text-emerald-400">{formatCurrency(results.savings)}</p>
                                            </div>
                                            <div className="bg-black/20 rounded-lg p-3">
                                                <p className="text-xs text-gray-400 uppercase">Time Saved</p>
                                                <p className="text-lg font-bold text-blue-400">
                                                    {((Number(years) * 12 - (results.newTenureMonths || 0)) / 12).toFixed(1)} Years
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                )}
                                
                                {/* Sales Hook */}
                                <div className="text-center pt-8 border-t border-white/5">
                                    <p className="text-gray-400 text-sm mb-3">
                                        Are you a Real Estate Agent or Auto Dealer?
                                    </p>
                                    <p className="text-gray-300 text-sm italic">
                                        "Put this calculator on your website to keep customers engaged longer."
                                    </p>
                                </div>
                            </div>
                        ) : (
                            <div className="bg-black/20 rounded-2xl border border-white/5 p-12 text-center text-gray-500 flex flex-col items-center justify-center h-full min-h-[400px]">
                                <Calculator size={64} className="mb-4 opacity-20" />
                                <h3 className="text-xl font-medium text-gray-400 mb-2">Ready to Calculate</h3>
                                <p>Enter your loan details to see the breakdown.</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}