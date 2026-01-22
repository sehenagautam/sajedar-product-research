'use client';

import React, { useState, useEffect, useRef } from 'react';
import Header from '../../../components/Header';
import { Footer } from '../../../components/sections';
import { Trophy, Shuffle, RotateCw, Users } from 'lucide-react';

export default function CommentPickerPage() {
    const [input, setInput] = useState('');
    const [names, setNames] = useState<string[]>([]);
    const [winner, setWinner] = useState<string | null>(null);
    const [isSpinning, setIsSpinning] = useState(false);
    const [displayWinner, setDisplayWinner] = useState('???');

    // Parse input into names array
    useEffect(() => {
        const lines = input.split(/\r?\n/).filter(line => line.trim() !== '');
        setNames(lines);
    }, [input]);

    const pickWinner = () => {
        if (names.length === 0) return;
        
        setIsSpinning(true);
        setWinner(null);
        
        let duration = 3000; // 3 seconds spin
        let intervalTime = 50;
        let elapsed = 0;

        const interval = setInterval(() => {
            const randomName = names[Math.floor(Math.random() * names.length)];
            setDisplayWinner(randomName);
            
            elapsed += intervalTime;
            if (elapsed >= duration) {
                clearInterval(interval);
                const finalWinner = names[Math.floor(Math.random() * names.length)];
                setWinner(finalWinner);
                setDisplayWinner(finalWinner);
                setIsSpinning(false);
            }
        }, intervalTime);
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
                        Random Comment Picker
                    </h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        Running a giveaway? Paste your list of names or comments below and let the wheel decide the winner fairly.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-10 items-start">
                    {/* Input Section */}
                    <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8 flex flex-col h-full min-h-[500px]">
                        <div className="flex justify-between items-center mb-4">
                            <label className="text-white font-bold flex items-center gap-2">
                                <Users size={20} className="text-emerald-400" /> Entrants List
                            </label>
                            <span className="text-sm text-gray-400 bg-white/10 px-2 py-1 rounded">
                                {names.length} Entries
                            </span>
                        </div>
                        
                        <textarea
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            placeholder={`Paste names here, one per line:\n\nRam Bahadur\nSita Sharma\nHari Krishna\n...`}
                            className="w-full flex-grow bg-black/20 border border-white/20 rounded-xl p-4 text-white placeholder-gray-500 focus:border-emerald-500 focus:outline-none resize-none font-mono text-sm mb-4"
                        />
                        
                        <button
                            onClick={() => setInput('')}
                            className="text-xs text-gray-500 hover:text-white self-end transition-colors"
                        >
                            Clear List
                        </button>
                    </div>

                    {/* Result Section */}
                    <div className="flex flex-col gap-6">
                        {/* The "Wheel" / Display Area */}
                        <div className={`relative bg-black/30 rounded-2xl border-2 p-12 flex flex-col items-center justify-center min-h-[300px] transition-all duration-500 ${winner ? 'border-emerald-500 shadow-[0_0_30px_rgba(16,185,129,0.3)]' : 'border-white/10'}`}>
                            
                            {/* Animated Background Glow if Winner */}
                            {winner && (
                                <div className="absolute inset-0 bg-emerald-500/10 animate-pulse rounded-2xl" />
                            )}

                            <Trophy 
                                size={64} 
                                className={`mb-6 transition-all duration-500 ${winner ? 'text-yellow-400 scale-110 drop-shadow-[0_0_15px_rgba(250,204,21,0.5)]' : 'text-gray-600'}`} 
                            />
                            
                            <h3 className="text-gray-400 text-sm uppercase tracking-widest mb-2">
                                {winner ? 'The Winner Is' : 'Ready to Pick'}
                            </h3>
                            
                            <div className={`text-4xl md:text-5xl font-bold text-center break-words max-w-full transition-colors duration-200 ${
                                isSpinning ? 'text-gray-300 blur-[1px]' : winner ? 'text-white scale-110' : 'text-gray-600'
                            }`}>
                                {names.length > 0 ? displayWinner : '...'}
                            </div>
                        </div>

                        {/* Action Button */}
                        <button
                            onClick={pickWinner}
                            disabled={names.length < 2 || isSpinning}
                            className={`w-full py-5 rounded-2xl font-bold text-xl flex items-center justify-center gap-3 transition-all transform hover:scale-[1.02] shadow-xl ${
                                names.length < 2
                                    ? 'bg-gray-700 text-gray-500 cursor-not-allowed'
                                    : isSpinning
                                        ? 'bg-emerald-600 text-white cursor-wait'
                                        : 'bg-emerald-500 hover:bg-emerald-600 text-white shadow-emerald-500/20'
                            }`}
                        >
                            {isSpinning ? (
                                <><RotateCw className="animate-spin" /> Picking...</>
                            ) : (
                                <><Shuffle /> Pick a Random Winner</>
                            )}
                        </button>
                        
                        {names.length < 2 && (
                            <p className="text-center text-red-400 text-sm bg-red-400/10 py-2 rounded-lg">
                                Add at least 2 names to spin.
                            </p>
                        )}
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}