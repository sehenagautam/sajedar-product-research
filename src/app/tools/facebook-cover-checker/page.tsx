'use client';

import React, { useState } from 'react';
import Header from '../../../components/Header';
import { Footer } from '../../../components/sections';
import { Upload, Smartphone, Monitor, AlertTriangle } from 'lucide-react';

export default function CoverCheckerPage() {
    const [image, setImage] = useState<string | null>(null);
    const [viewMode, setViewMode] = useState<'all' | 'mobile' | 'desktop'>('all');

    const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (event) => setImage(event.target?.result as string);
            reader.readAsDataURL(file);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-[#18181b] via-[#23243a] to-[#1a1a2e] flex flex-col font-sans">
            <Header />

            <div className="max-w-6xl mx-auto px-4 py-20 flex-grow w-full">
                <div className="text-center mb-12">
                    <span className="inline-block mb-3 px-3 py-1 text-sm font-semibold text-emerald-400 bg-emerald-400/10 rounded-full">
                        Design Tool
                    </span>
                    <h1 className="text-3xl md:text-5xl font-serif font-bold text-white mb-4">
                        Facebook Cover Safe Zone Checker
                    </h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        Don't let your logo get cut off. Upload your cover design and instantly see which parts are hidden on Mobile vs. Desktop.
                    </p>
                </div>

                <div className="grid lg:grid-cols-3 gap-10 items-start">
                    {/* Controls */}
                    <div className="lg:col-span-1 space-y-6">
                        <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6">
                            <label className="block text-white font-bold mb-4 flex items-center gap-2">
                                <Upload size={18} className="text-emerald-400" /> Upload Design
                            </label>
                            <input
                                type="file"
                                accept="image/*"
                                onChange={handleImageUpload}
                                className="w-full text-sm text-gray-400 file:mr-4 file:py-3 file:px-6 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-emerald-500 file:text-white hover:file:bg-emerald-600 cursor-pointer border border-white/10 rounded-lg p-2 bg-black/20"
                            />
                            <p className="text-xs text-gray-500 mt-3 leading-relaxed">
                                <strong>Recommended Size:</strong> 820px x 360px. <br/>
                                This size allows for the best compromise between desktop (wide) and mobile (tall) crops.
                            </p>
                        </div>

                        <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6">
                            <label className="block text-white font-bold mb-4">Toggle Views</label>
                            <div className="grid grid-cols-1 gap-2">
                                <button
                                    onClick={() => setViewMode('all')}
                                    className={`px-4 py-3 rounded-lg text-sm font-bold flex items-center gap-3 transition-all ${viewMode === 'all' ? 'bg-emerald-500 text-white' : 'bg-black/20 text-gray-400 hover:bg-white/10'}`}
                                >
                                    <AlertTriangle size={16} /> Show All Danger Zones
                                </button>
                                <button
                                    onClick={() => setViewMode('mobile')}
                                    className={`px-4 py-3 rounded-lg text-sm font-bold flex items-center gap-3 transition-all ${viewMode === 'mobile' ? 'bg-blue-500 text-white' : 'bg-black/20 text-gray-400 hover:bg-white/10'}`}
                                >
                                    <Smartphone size={16} /> Simulate Mobile Crop
                                </button>
                                <button
                                    onClick={() => setViewMode('desktop')}
                                    className={`px-4 py-3 rounded-lg text-sm font-bold flex items-center gap-3 transition-all ${viewMode === 'desktop' ? 'bg-purple-500 text-white' : 'bg-black/20 text-gray-400 hover:bg-white/10'}`}
                                >
                                    <Monitor size={16} /> Simulate Desktop Crop
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Preview Area */}
                    <div className="lg:col-span-2">
                        <div className="bg-black/40 rounded-2xl border border-white/10 p-4 md:p-8 flex items-center justify-center min-h-[400px]">
                            {image ? (
                                <div className="relative w-full max-w-[820px] aspect-[820/360] bg-gray-800 shadow-2xl overflow-hidden border border-gray-700">
                                    
                                    {/* The User's Image */}
                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                    <img 
                                        src={image} 
                                        alt="Cover Preview" 
                                        className="w-full h-full object-cover"
                                    />

                                    {/* --- OVERLAYS --- */}

                                    {/* Mobile Danger Zones (Left & Right) - Width approx 90px on 820px scale (11%) */}
                                    {(viewMode === 'all' || viewMode === 'mobile') && (
                                        <>
                                            <div className="absolute top-0 left-0 h-full w-[11%] bg-red-500/60 border-r-2 border-red-500 flex items-center justify-center">
                                                <span className="text-white text-[10px] font-bold -rotate-90 whitespace-nowrap drop-shadow-md">Hidden on Mobile</span>
                                            </div>
                                            <div className="absolute top-0 right-0 h-full w-[11%] bg-red-500/60 border-l-2 border-red-500 flex items-center justify-center">
                                                <span className="text-white text-[10px] font-bold rotate-90 whitespace-nowrap drop-shadow-md">Hidden on Mobile</span>
                                            </div>
                                        </>
                                    )}

                                    {/* Desktop Danger Zones (Top & Bottom) - Height approx 24px on 360px scale (6.6%) */}
                                    {(viewMode === 'all' || viewMode === 'desktop') && (
                                        <>
                                            <div className="absolute top-0 left-0 w-full h-[6.6%] bg-purple-500/60 border-b-2 border-purple-500 flex items-center justify-center">
                                                <span className="text-white text-[10px] font-bold uppercase drop-shadow-md">Hidden on Desktop</span>
                                            </div>
                                            <div className="absolute bottom-0 left-0 w-full h-[6.6%] bg-purple-500/60 border-t-2 border-purple-500 flex items-center justify-center">
                                                <span className="text-white text-[10px] font-bold uppercase drop-shadow-md">Hidden on Desktop</span>
                                            </div>
                                        </>
                                    )}

                                    {/* Safe Zone Indicator (Center) */}
                                    {viewMode === 'all' && (
                                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                            <div className="border-2 border-emerald-400/50 w-[78%] h-[86.8%] rounded-lg flex items-center justify-center">
                                                <span className="text-emerald-400 font-bold bg-black/50 px-3 py-1 rounded text-xs backdrop-blur-sm">
                                                    SAFE ZONE (Visible Everywhere)
                                                </span>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            ) : (
                                <div className="text-center text-gray-500">
                                    <p>Upload an image to see the overlay.</p>
                                </div>
                            )}
                        </div>
                        
                        <div className="mt-6 grid md:grid-cols-2 gap-4">
                            <div className="bg-red-500/10 border border-red-500/20 p-4 rounded-xl">
                                <h4 className="text-red-400 font-bold text-sm mb-1 flex items-center gap-2"><Smartphone size={16}/> Mobile Behavior</h4>
                                <p className="text-gray-400 text-xs">Mobile apps crop the <strong>sides</strong>. Keep important text away from the left and right edges.</p>
                            </div>
                            <div className="bg-purple-500/10 border border-purple-500/20 p-4 rounded-xl">
                                <h4 className="text-purple-400 font-bold text-sm mb-1 flex items-center gap-2"><Monitor size={16}/> Desktop Behavior</h4>
                                <p className="text-gray-400 text-xs">Desktops crop the <strong>top and bottom</strong>. Keep logos vertically centered.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}