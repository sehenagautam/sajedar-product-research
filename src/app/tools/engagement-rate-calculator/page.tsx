'use client';

import React, { useState, useEffect } from 'react';
import Header from '../../../components/Header';
import { Footer } from '../../../components/sections';
import { Activity, Users, MessageCircle, Heart, Share2 } from 'lucide-react';

export default function EngagementRatePage() {
    const [likes, setLikes] = useState<number | ''>('');
    const [comments, setComments] = useState<number | ''>('');
    const [shares, setShares] = useState<number | ''>('');
    const [followers, setFollowers] = useState<number | ''>('');
    const [rate, setRate] = useState<number | null>(null);

    useEffect(() => {
        if (followers && followers > 0) {
            const totalInteractions = Number(likes || 0) + Number(comments || 0) + Number(shares || 0);
            const calculatedRate = (totalInteractions / Number(followers)) * 100;
            setRate(calculatedRate);
        } else {
            setRate(null);
        }
    }, [likes, comments, shares, followers]);

    const getGrade = (r: number) => {
        if (r < 1) return { label: 'Low', color: 'text-red-400', desc: 'Typical for very large accounts, but aim higher.' };
        if (r < 3.5) return { label: 'Average', color: 'text-yellow-400', desc: 'Good solid performance. Most business accounts fall here.' };
        if (r < 6) return { label: 'High', color: 'text-emerald-400', desc: 'Excellent! Your audience is highly active.' };
        return { label: 'Viral', color: 'text-blue-400', desc: 'Exceptional. You are crushing the algorithm.' };
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-[#18181b] via-[#23243a] to-[#1a1a2e] flex flex-col font-sans">
            <Header />

            <div className="max-w-4xl mx-auto px-4 py-20 flex-grow w-full">
                <div className="text-center mb-12">
                    <span className="inline-block mb-3 px-3 py-1 text-sm font-semibold text-emerald-400 bg-emerald-400/10 rounded-full">
                        Free Tool
                    </span>
                    <h1 className="text-3xl md:text-5xl font-serif font-bold text-white mb-4">
                        Engagement Rate Calculator
                    </h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        Measure your social media success. Find out if your posts are actually performing well compared to your follower count.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 items-start">
                    {/* Inputs */}
                    <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8 space-y-6">
                        <div>
                            <label className="block text-gray-300 text-sm font-medium mb-3 flex items-center gap-2">
                                <Users size={18} className="text-emerald-400" /> Total Followers
                            </label>
                            <input
                                type="number"
                                value={followers}
                                onChange={(e) => setFollowers(e.target.value === '' ? '' : Number(e.target.value))}
                                className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-emerald-500 placeholder-gray-500"
                                placeholder="e.g. 5000"
                            />
                        </div>

                        <div className="grid grid-cols-3 gap-3">
                            <div>
                                <label className="block text-gray-400 text-xs mb-2 flex items-center gap-1">
                                    <Heart size={14} /> Likes
                                </label>
                                <input
                                    type="number"
                                    value={likes}
                                    onChange={(e) => setLikes(e.target.value === '' ? '' : Number(e.target.value))}
                                    className="w-full bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-emerald-500 placeholder-gray-600"
                                    placeholder="150"
                                />
                            </div>
                            <div>
                                <label className="block text-gray-400 text-xs mb-2 flex items-center gap-1">
                                    <MessageCircle size={14} /> Comments
                                </label>
                                <input
                                    type="number"
                                    value={comments}
                                    onChange={(e) => setComments(e.target.value === '' ? '' : Number(e.target.value))}
                                    className="w-full bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-emerald-500 placeholder-gray-600"
                                    placeholder="20"
                                />
                            </div>
                            <div>
                                <label className="block text-gray-400 text-xs mb-2 flex items-center gap-1">
                                    <Share2 size={14} /> Shares
                                </label>
                                <input
                                    type="number"
                                    value={shares}
                                    onChange={(e) => setShares(e.target.value === '' ? '' : Number(e.target.value))}
                                    className="w-full bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-emerald-500 placeholder-gray-600"
                                    placeholder="5"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Result */}
                    <div className="bg-black/20 rounded-2xl border border-white/5 p-8 h-full flex flex-col items-center justify-center text-center">
                        {rate !== null ? (
                            <div className="animate-in fade-in zoom-in duration-300">
                                <p className="text-gray-400 text-sm uppercase tracking-wider mb-2">Your Engagement Rate</p>
                                <div className={`text-6xl font-bold mb-4 ${getGrade(rate).color}`}>
                                    {rate.toFixed(2)}%
                                </div>
                                <div className="bg-white/5 rounded-lg p-3 inline-block border border-white/10">
                                    <p className={`font-bold ${getGrade(rate).color}`}>{getGrade(rate).label}</p>
                                    <p className="text-xs text-gray-400 mt-1 max-w-[200px] mx-auto">{getGrade(rate).desc}</p>
                                </div>
                            </div>
                        ) : (
                            <div className="text-gray-500">
                                <Activity size={64} className="mx-auto mb-4 opacity-20" />
                                <p>Enter your post data to calculate.</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}