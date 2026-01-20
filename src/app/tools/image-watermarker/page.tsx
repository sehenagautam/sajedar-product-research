'use client';

import React, { useState, useRef, useEffect } from 'react';
import Header from '../../../components/Header';
import { Footer } from '../../../components/sections';
import { Upload, Type, Image as ImageIcon, Download, RefreshCcw, Move } from 'lucide-react';

export default function ImageWatermarkerPage() {
    const [image, setImage] = useState<string | null>(null);
    const [watermarkType, setWatermarkType] = useState<'text' | 'logo'>('text');
    
    // Watermark Settings
    const [text, setText] = useState('Sajedar.com');
    const [logo, setLogo] = useState<string | null>(null);
    const [opacity, setOpacity] = useState(0.5);
    const [scale, setScale] = useState(1);
    const [color, setColor] = useState('#ffffff');
    const [position, setPosition] = useState({ x: 50, y: 50 }); // Percentage
    
    const canvasRef = useRef<HTMLCanvasElement>(null);

    // Handle Base Image Upload
    const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (event) => setImage(event.target?.result as string);
            reader.readAsDataURL(file);
        }
    };

    // Handle Logo Upload
    const handleLogoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (event) => setLogo(event.target?.result as string);
            reader.readAsDataURL(file);
        }
    };

    // Draw Canvas
    useEffect(() => {
        if (!image || !canvasRef.current) return;

        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const img = new Image();
        img.src = image;
        img.onload = () => {
            // Set canvas size to match image
            canvas.width = img.width;
            canvas.height = img.height;

            // Draw Base Image
            ctx.drawImage(img, 0, 0);

            ctx.globalAlpha = opacity;

            const x = (canvas.width * position.x) / 100;
            const y = (canvas.height * position.y) / 100;

            if (watermarkType === 'text') {
                // Dynamic font size based on image width
                const fontSize = (canvas.width * 0.05) * scale; 
                ctx.font = `bold ${fontSize}px sans-serif`;
                ctx.fillStyle = color;
                ctx.textAlign = 'center';
                ctx.textBaseline = 'middle';
                
                // Add simple shadow for better visibility
                ctx.shadowColor = 'rgba(0,0,0,0.5)';
                ctx.shadowBlur = 4;
                ctx.shadowOffsetX = 2;
                ctx.shadowOffsetY = 2;

                ctx.fillText(text, x, y);
            } else if (watermarkType === 'logo' && logo) {
                const logoImg = new Image();
                logoImg.src = logo;
                logoImg.onload = () => {
                    const logoWidth = (canvas.width * 0.2) * scale; // Default 20% of image width
                    const logoHeight = logoWidth * (logoImg.height / logoImg.width);
                    
                    // Draw centered at x,y
                    ctx.drawImage(logoImg, x - logoWidth / 2, y - logoHeight / 2, logoWidth, logoHeight);
                };
            }
        };
    }, [image, text, logo, watermarkType, opacity, scale, color, position]);

    const downloadImage = () => {
        if (!canvasRef.current) return;
        const link = document.createElement('a');
        link.download = 'watermarked-image.png';
        link.href = canvasRef.current.toDataURL();
        link.click();
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-[#18181b] via-[#23243a] to-[#1a1a2e] flex flex-col font-sans">
            <Header />

            <div className="max-w-7xl mx-auto px-4 py-20 flex-grow w-full">
                <div className="text-center mb-10">
                    <span className="inline-block mb-3 px-3 py-1 text-sm font-semibold text-emerald-400 bg-emerald-400/10 rounded-full">
                        Free Tool
                    </span>
                    <h1 className="text-3xl md:text-5xl font-serif font-bold text-white mb-4">
                        Image Watermarker
                    </h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        Protect your product photos from competitors. Overlay your brand name or logo instantly in your browser.
                    </p>
                </div>

                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Controls */}
                    <div className="lg:col-span-1 space-y-6">
                        {/* 1. Upload Section */}
                        <div className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-6">
                            <h3 className="text-white font-bold mb-4 flex items-center gap-2">
                                <Upload size={20} className="text-emerald-400" /> Upload Image
                            </h3>
                            <input
                                type="file"
                                accept="image/*"
                                onChange={handleImageUpload}
                                className="w-full text-sm text-gray-400 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-emerald-500 file:text-white hover:file:bg-emerald-600 cursor-pointer"
                            />
                        </div>

                        {/* 2. Watermark Settings */}
                        <div className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-6">
                            <h3 className="text-white font-bold mb-4 flex items-center gap-2">
                                <RefreshCcw size={20} className="text-emerald-400" /> Settings
                            </h3>

                            {/* Type Toggle */}
                            <div className="flex bg-black/20 p-1 rounded-lg mb-6">
                                <button
                                    onClick={() => setWatermarkType('text')}
                                    className={`flex-1 flex items-center justify-center gap-2 py-2 rounded-md text-sm font-bold transition-all ${watermarkType === 'text' ? 'bg-emerald-500 text-white' : 'text-gray-400 hover:text-white'}`}
                                >
                                    <Type size={16} /> Text
                                </button>
                                <button
                                    onClick={() => setWatermarkType('logo')}
                                    className={`flex-1 flex items-center justify-center gap-2 py-2 rounded-md text-sm font-bold transition-all ${watermarkType === 'logo' ? 'bg-emerald-500 text-white' : 'text-gray-400 hover:text-white'}`}
                                >
                                    <ImageIcon size={16} /> Logo
                                </button>
                            </div>

                            {/* Specific Controls */}
                            <div className="space-y-4">
                                {watermarkType === 'text' ? (
                                    <>
                                        <div>
                                            <label className="block text-gray-400 text-xs mb-2">Watermark Text</label>
                                            <input
                                                type="text"
                                                value={text}
                                                onChange={(e) => setText(e.target.value)}
                                                className="w-full bg-black/20 border border-white/10 rounded p-2 text-white text-sm focus:border-emerald-500 outline-none"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-gray-400 text-xs mb-2">Color</label>
                                            <input
                                                type="color"
                                                value={color}
                                                onChange={(e) => setColor(e.target.value)}
                                                className="w-full h-10 bg-transparent cursor-pointer"
                                            />
                                        </div>
                                    </>
                                ) : (
                                    <div>
                                        <label className="block text-gray-400 text-xs mb-2">Upload Logo (PNG)</label>
                                        <input
                                            type="file"
                                            accept="image/*"
                                            onChange={handleLogoUpload}
                                            className="w-full text-xs text-gray-400"
                                        />
                                    </div>
                                )}

                                {/* Sliders */}
                                <div>
                                    <label className="flex justify-between text-gray-400 text-xs mb-2">
                                        <span>Opacity</span> <span>{Math.round(opacity * 100)}%</span>
                                    </label>
                                    <input
                                        type="range"
                                        min="0.1"
                                        max="1"
                                        step="0.05"
                                        value={opacity}
                                        onChange={(e) => setOpacity(parseFloat(e.target.value))}
                                        className="w-full accent-emerald-500"
                                    />
                                </div>
                                <div>
                                    <label className="flex justify-between text-gray-400 text-xs mb-2">
                                        <span>Size</span> <span>{scale}x</span>
                                    </label>
                                    <input
                                        type="range"
                                        min="0.5"
                                        max="5"
                                        step="0.1"
                                        value={scale}
                                        onChange={(e) => setScale(parseFloat(e.target.value))}
                                        className="w-full accent-emerald-500"
                                    />
                                </div>
                                
                                <div className="pt-4 border-t border-white/10">
                                    <label className="flex items-center gap-2 text-gray-400 text-xs mb-3">
                                        <Move size={14} /> Position (X / Y)
                                    </label>
                                    <div className="grid grid-cols-2 gap-4">
                                        <input
                                            type="range"
                                            min="0"
                                            max="100"
                                            value={position.x}
                                            onChange={(e) => setPosition({ ...position, x: parseFloat(e.target.value) })}
                                            className="accent-blue-500"
                                            title="Horizontal Position"
                                        />
                                        <input
                                            type="range"
                                            min="0"
                                            max="100"
                                            value={position.y}
                                            onChange={(e) => setPosition({ ...position, y: parseFloat(e.target.value) })}
                                            className="accent-blue-500"
                                            title="Vertical Position"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {image && (
                            <button
                                onClick={downloadImage}
                                className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-3 rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg shadow-emerald-500/20"
                            >
                                <Download size={20} /> Download Protected Image
                            </button>
                        )}
                    </div>

                    {/* Preview Area */}
                    <div className="lg:col-span-2 bg-black/20 rounded-xl border border-white/5 flex items-center justify-center p-4 min-h-[500px] overflow-hidden relative">
                        {!image ? (
                            <div className="text-center text-gray-500">
                                <ImageIcon size={64} className="mx-auto mb-4 opacity-20" />
                                <p>Upload an image to start editing</p>
                            </div>
                        ) : (
                            <div className="relative shadow-2xl">
                                <canvas 
                                    ref={canvasRef} 
                                    className="max-w-full h-auto max-h-[70vh] rounded border border-white/10"
                                />
                            </div>
                        )}
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}