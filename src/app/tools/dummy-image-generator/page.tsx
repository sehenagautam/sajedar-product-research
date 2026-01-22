'use client';

import React, { useState, useEffect, useRef } from 'react';
import Header from '../../../components/Header';
import { Footer } from '../../../components/sections';
import { Image as ImageIcon, Download, RefreshCw } from 'lucide-react';

export default function DummyImagePage() {
    const [width, setWidth] = useState(600);
    const [height, setHeight] = useState(400);
    const [bgColor, setBgColor] = useState('#10b981'); // Emerald 500
    const [textColor, setTextColor] = useState('#ffffff');
    const [text, setText] = useState('');
    const [dataUrl, setDataUrl] = useState('');
    
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        // Set dimensions
        canvas.width = width;
        canvas.height = height;

        // Draw Background
        ctx.fillStyle = bgColor;
        ctx.fillRect(0, 0, width, height);

        // Draw Text
        ctx.fillStyle = textColor;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        
        // Dynamic font size based on width
        const fontSize = Math.max(20, Math.min(width, height) / 10);
        ctx.font = `bold ${fontSize}px sans-serif`;

        const displayText = text || `${width} x ${height}`;
        ctx.fillText(displayText, width / 2, height / 2);

        setDataUrl(canvas.toDataURL('image/png'));

    }, [width, height, bgColor, textColor, text]);

    const downloadImage = () => {
        const link = document.createElement('a');
        link.download = `dummy-${width}x${height}.png`;
        link.href = dataUrl;
        link.click();
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-[#18181b] via-[#23243a] to-[#1a1a2e] flex flex-col font-sans">
            <Header />

            <div className="max-w-6xl mx-auto px-4 py-20 flex-grow w-full">
                <div className="text-center mb-12">
                    <span className="inline-block mb-3 px-3 py-1 text-sm font-semibold text-emerald-400 bg-emerald-400/10 rounded-full">
                        Designer Tool
                    </span>
                    <h1 className="text-3xl md:text-5xl font-serif font-bold text-white mb-4">
                        Dummy Image Placeholder Generator
                    </h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        Need a placeholder for your website layout or ad mockup? Generate solid color blocks with dimensions labeled instantly.
                    </p>
                </div>

                <div className="grid lg:grid-cols-3 gap-10 items-start">
                    {/* Controls */}
                    <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8 space-y-6 lg:col-span-1">
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-gray-400 text-xs font-bold mb-2">Width (px)</label>
                                <input
                                    type="number"
                                    value={width}
                                    onChange={(e) => setWidth(Number(e.target.value))}
                                    className="w-full bg-black/20 border border-white/20 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-emerald-500"
                                />
                            </div>
                            <div>
                                <label className="block text-gray-400 text-xs font-bold mb-2">Height (px)</label>
                                <input
                                    type="number"
                                    value={height}
                                    onChange={(e) => setHeight(Number(e.target.value))}
                                    className="w-full bg-black/20 border border-white/20 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-emerald-500"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-gray-400 text-xs font-bold mb-2">Custom Text (Optional)</label>
                            <input
                                type="text"
                                value={text}
                                onChange={(e) => setText(e.target.value)}
                                placeholder={`${width} x ${height}`}
                                className="w-full bg-black/20 border border-white/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-emerald-500"
                            />
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-gray-400 text-xs font-bold mb-2">Bg Color</label>
                                <div className="flex gap-2">
                                    <input
                                        type="color"
                                        value={bgColor}
                                        onChange={(e) => setBgColor(e.target.value)}
                                        className="h-10 w-10 rounded cursor-pointer bg-transparent border-none p-0"
                                    />
                                    <input 
                                        type="text" 
                                        value={bgColor}
                                        onChange={(e) => setBgColor(e.target.value)}
                                        className="flex-grow bg-black/20 border border-white/20 rounded px-2 text-xs text-white uppercase"
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="block text-gray-400 text-xs font-bold mb-2">Text Color</label>
                                <div className="flex gap-2">
                                    <input
                                        type="color"
                                        value={textColor}
                                        onChange={(e) => setTextColor(e.target.value)}
                                        className="h-10 w-10 rounded cursor-pointer bg-transparent border-none p-0"
                                    />
                                    <input 
                                        type="text" 
                                        value={textColor}
                                        onChange={(e) => setTextColor(e.target.value)}
                                        className="flex-grow bg-black/20 border border-white/20 rounded px-2 text-xs text-white uppercase"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Preview */}
                    <div className="bg-black/20 rounded-2xl border border-white/5 p-8 lg:col-span-2 flex flex-col items-center justify-center min-h-[500px]">
                        <h3 className="text-gray-400 font-bold mb-6 flex items-center gap-2">
                            <ImageIcon size={18} /> Live Preview
                        </h3>

                        <div className="max-w-full overflow-auto border border-white/10 shadow-2xl mb-8">
                            <canvas ref={canvasRef} className="max-w-full h-auto" />
                        </div>

                        <button
                            onClick={downloadImage}
                            className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-3 px-8 rounded-xl shadow-lg flex items-center gap-2 transition-transform transform hover:scale-105"
                        >
                            <Download size={20} /> Download Image
                        </button>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}