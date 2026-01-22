'use client';

import React, { useState, useEffect } from 'react';
import Header from '../../../components/Header';
import { Footer } from '../../../components/sections';
import { Clock, Copy, Info } from 'lucide-react';

export default function CronGeneratorPage() {
    const [frequency, setFrequency] = useState('every_minute');
    const [minute, setMinute] = useState('0');
    const [hour, setHour] = useState('0');
    const [dayOfWeek, setDayOfWeek] = useState('*');
    const [dayOfMonth, setDayOfMonth] = useState('1');
    
    const [cronExpression, setCronExpression] = useState('* * * * *');
    const [humanReadable, setHumanReadable] = useState('Every minute');
    const [copied, setCopied] = useState(false);

    useEffect(() => {
        let expr = '* * * * *';
        let human = '';

        switch (frequency) {
            case 'every_minute':
                expr = '* * * * *';
                human = 'Every minute';
                break;
            case 'hourly':
                expr = `${minute} * * * *`;
                human = `At minute ${minute} of every hour`;
                break;
            case 'daily':
                expr = `${minute} ${hour} * * *`;
                human = `At ${hour.padStart(2, '0')}:${minute.padStart(2, '0')} every day`;
                break;
            case 'weekly':
                expr = `${minute} ${hour} * * ${dayOfWeek}`;
                const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
                const dayName = dayOfWeek === '*' ? 'day' : days[parseInt(dayOfWeek)];
                human = `At ${hour.padStart(2, '0')}:${minute.padStart(2, '0')} on ${dayName}`;
                break;
            case 'monthly':
                expr = `${minute} ${hour} ${dayOfMonth} * *`;
                human = `At ${hour.padStart(2, '0')}:${minute.padStart(2, '0')} on day ${dayOfMonth} of every month`;
                break;
        }

        setCronExpression(expr);
        setHumanReadable(human);
    }, [frequency, minute, hour, dayOfWeek, dayOfMonth]);

    const copyToClipboard = () => {
        navigator.clipboard.writeText(cronExpression);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-[#18181b] via-[#23243a] to-[#1a1a2e] flex flex-col font-sans">
            <Header />

            <div className="max-w-4xl mx-auto px-4 py-20 flex-grow w-full">
                <div className="text-center mb-12">
                    <span className="inline-block mb-3 px-3 py-1 text-sm font-semibold text-emerald-400 bg-emerald-400/10 rounded-full">
                        Automation Tool
                    </span>
                    <h1 className="text-3xl md:text-5xl font-serif font-bold text-white mb-4">
                        Cron Expression Generator
                    </h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        Schedule tasks in n8n or Zapier without memorizing syntax. Click the dropdowns to generate the perfect schedule code.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-10 items-start">
                    {/* Controls */}
                    <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8 space-y-6">
                        <div>
                            <label className="block text-gray-300 font-bold mb-3 flex items-center gap-2">
                                <Clock size={18} className="text-emerald-400" /> I want to run task...
                            </label>
                            <select
                                value={frequency}
                                onChange={(e) => setFrequency(e.target.value)}
                                className="w-full bg-black/20 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-emerald-500 [&>option]:bg-gray-800"
                            >
                                <option value="every_minute">Every Minute</option>
                                <option value="hourly">Hourly</option>
                                <option value="daily">Daily</option>
                                <option value="weekly">Weekly</option>
                                <option value="monthly">Monthly</option>
                            </select>
                        </div>

                        {/* Conditional Inputs */}
                        {frequency !== 'every_minute' && (
                            <div className="space-y-4 animate-in slide-in-from-top-2">
                                <div className="grid grid-cols-2 gap-4">
                                    {frequency !== 'hourly' && (
                                        <div>
                                            <label className="block text-gray-400 text-xs mb-1">Hour (0-23)</label>
                                            <select value={hour} onChange={e => setHour(e.target.value)} className="w-full bg-black/20 border border-white/20 rounded px-3 py-2 text-white text-sm [&>option]:bg-gray-800">
                                                {Array.from({length: 24}, (_, i) => <option key={i} value={i}>{i.toString().padStart(2, '0')}</option>)}
                                            </select>
                                        </div>
                                    )}
                                    <div>
                                        <label className="block text-gray-400 text-xs mb-1">Minute (0-59)</label>
                                        <select value={minute} onChange={e => setMinute(e.target.value)} className="w-full bg-black/20 border border-white/20 rounded px-3 py-2 text-white text-sm [&>option]:bg-gray-800">
                                            {Array.from({length: 60}, (_, i) => <option key={i} value={i}>{i.toString().padStart(2, '0')}</option>)}
                                        </select>
                                    </div>
                                </div>

                                {frequency === 'weekly' && (
                                    <div>
                                        <label className="block text-gray-400 text-xs mb-1">Day of Week</label>
                                        <select value={dayOfWeek} onChange={e => setDayOfWeek(e.target.value)} className="w-full bg-black/20 border border-white/20 rounded px-3 py-2 text-white text-sm [&>option]:bg-gray-800">
                                            <option value="1">Monday</option>
                                            <option value="2">Tuesday</option>
                                            <option value="3">Wednesday</option>
                                            <option value="4">Thursday</option>
                                            <option value="5">Friday</option>
                                            <option value="6">Saturday</option>
                                            <option value="0">Sunday</option>
                                        </select>
                                    </div>
                                )}

                                {frequency === 'monthly' && (
                                    <div>
                                        <label className="block text-gray-400 text-xs mb-1">Day of Month (1-31)</label>
                                        <select value={dayOfMonth} onChange={e => setDayOfMonth(e.target.value)} className="w-full bg-black/20 border border-white/20 rounded px-3 py-2 text-white text-sm [&>option]:bg-gray-800">
                                            {Array.from({length: 31}, (_, i) => <option key={i+1} value={i+1}>{i+1}</option>)}
                                        </select>
                                    </div>
                                )}
                            </div>
                        )}
                    </div>

                    {/* Output */}
                    <div className="bg-[#1e1e1e] rounded-2xl border border-white/10 p-8 flex flex-col justify-center h-full sticky top-24">
                        <div className="mb-6">
                            <h3 className="text-gray-400 font-bold uppercase tracking-widest text-xs mb-2">Generated Expression</h3>
                            <div className="bg-black/40 rounded-xl p-6 border border-white/5 flex items-center justify-center">
                                <code className="text-4xl text-emerald-400 font-bold font-mono tracking-widest">
                                    {cronExpression}
                                </code>
                            </div>
                        </div>

                        <div className="mb-6">
                            <h3 className="text-gray-400 font-bold uppercase tracking-widest text-xs mb-2">Human Readable</h3>
                            <p className="text-white text-lg font-medium">
                                "{humanReadable}"
                            </p>
                        </div>

                        <button
                            onClick={copyToClipboard}
                            className={`w-full py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 transition-all ${
                                copied
                                    ? 'bg-emerald-500 text-white shadow-lg'
                                    : 'bg-white/10 hover:bg-white/20 text-white'
                            }`}
                        >
                            {copied ? 'Copied!' : <><Copy size={20} /> Copy Cron</>}
                        </button>

                        <div className="mt-6 bg-blue-900/20 border border-blue-500/20 p-4 rounded-lg flex items-start gap-3">
                            <Info size={18} className="text-blue-400 mt-1 flex-shrink-0" />
                            <p className="text-xs text-gray-300 leading-relaxed">
                                Use this expression in the <strong>"Cron Trigger"</strong> node in n8n or the "Schedule" trigger in Zapier/Make.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}