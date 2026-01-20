'use client';

import React, { useState, useRef } from 'react';
import Header from '../../../components/Header';
import { Footer } from '../../../components/sections';
import { Upload, Copy, Check, Palette, Image as ImageIcon } from 'lucide-react';
// @ts-ignore - ColorThief doesn't always have perfect TS types
import ColorThief from 'colorthief';

export default function ColorExtractorPage() {
    const [image, setImage] = useState<string | null>(null);
    const [colors, setColors] = useState<string[]>([]);
    const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
    const imgRef = useRef<HTMLImageElement>(null);

    const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (event) => {
                setImage(event.target?.result as string);
                setColors([]); // Reset colors while loading new image
            };
            reader.readAsDataURL(file);
        }
    };

    const extractColors = () => {
        const img = imgRef.current;
        if (!img) return;

        // ColorThief needs the image to be fully loaded
        if (img.complete) {
            processImage(img);
        } else {
            img.onload = () => processImage(img);
        }
    };

    const processImage = (img: HTMLImageElement) => {
        try {
            const colorThief = new ColorThief();
            // getPalette(sourceImage, colorCount, quality)
            // We ask for 5 colors to ensure we get a good 3-4 dominant ones
            const palette = colorThief.getPalette(img, 5);
            
            const hexColors = palette.map((rgb: number[]) => {
                return rgbToHex(rgb[0], rgb[1], rgb[2]);
            });

            setColors(hexColors);
        } catch (error) {
            console.error("Error extracting colors:", error);
        }
    };

    const rgbToHex = (r: number, g: number, b: number) => {
        return "#" + [r, g, b].map(x => {
            const hex = x.toString(16);
            return hex.length === 1 ? '0' + hex : hex;
        }).join('').toUpperCase();
    };

    const copyToClipboard = (hex: string, index: number) => {
        navigator.clipboard.writeText(hex);
        setCopiedIndex(index);
        setTimeout(() => setCopiedIndex(null), 2000);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-[#18181b] via-[#23243a] to-[#1a1a2e] flex flex-col font-sans">
            <Header />

            <div className="max-w-7xl mx-auto px-4 py-20 flex-grow w-full">
                <div className="text-center mb-12">
                    <span className="inline-block mb-3 px-3 py-1 text-sm font-semibold text-emerald-400 bg-emerald-400/10 rounded-full">
                        Free Tool
                    </span>
                    <h1 className="text-3xl md:text-5xl font-serif font-bold text-white mb-4">
                        Brand Color Extractor
                    </h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        Upload your logo and instantly get the exact Hex codes to use in Canva, your website, or n8n workflows.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    {/* Upload Section */}
                    <div className="space-y-6">
                        <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8">
                            <h3 className="text-white font-bold mb-4 flex items-center gap-2">
                                <Upload size={20} className="text-emerald-400" /> Upload Logo
                            </h3>
                            <input
                                type="file"
                                accept="image/*"
                                onChange={handleImageUpload}
                                className="w-full text-sm text-gray-400 file:mr-4 file:py-3 file:px-6 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-emerald-500 file:text-white hover:file:bg-emerald-600 cursor-pointer border border-white/10 rounded-lg p-2"
                            />
                        </div>

                        {/* Instructions */}
                        <div className="bg-emerald-900/10 border border-emerald-500/20 rounded-xl p-6">
                            <h4 className="text-emerald-400 font-bold mb-2 flex items-center gap-2">
                                <Palette size={18} /> Pro Tip
                            </h4>
                            <p className="text-gray-300 text-sm">
                                These hex codes are exact matches from your file. Copy them directly into:
                            </p>
                            <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-400 text-sm">
                                <li><strong>Canva</strong> (Brand Kit)</li>
                                <li><strong>Website Builders</strong> (WordPress/Elementor buttons)</li>
                                <li><strong>n8n</strong> (Email templates)</li>
                            </ul>
                        </div>
                    </div>

                    {/* Result Section */}
                    <div className="bg-black/20 rounded-2xl border border-white/5 p-8 min-h-[500px] flex flex-col items-center">
                        {!image ? (
                            <div className="text-center text-gray-500 my-auto">
                                <ImageIcon size={64} className="mx-auto mb-4 opacity-20" />
                                <p>Upload your logo to analyze pixels</p>
                            </div>
                        ) : (
                            <div className="w-full space-y-8 animate-in fade-in zoom-in duration-300">
                                {/* Image Preview */}
                                <div className="relative rounded-xl overflow-hidden border border-white/10 bg-white/5 p-4 flex justify-center">
                                    {/* CrossOrigin is important for ColorThief if loading from external URL, but file blob is local */}
                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                    <img 
                                        ref={imgRef}
                                        src={image} 
                                        alt="Analysis Target" 
                                        className="max-h-[300px] object-contain"
                                        onLoad={extractColors}
                                    />
                                </div>

                                {/* Extracted Palette */}
                                {colors.length > 0 && (
                                    <div>
                                        <h3 className="text-white font-bold mb-4 text-center uppercase tracking-wider text-sm">Dominant Brand Colors</h3>
                                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                                            {colors.map((color, index) => (
                                                <div 
                                                    key={index}
                                                    onClick={() => copyToClipboard(color, index)}
                                                    className="group cursor-pointer bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl p-3 flex items-center gap-3 transition-all transform hover:scale-105"
                                                >
                                                    <div 
                                                        className="w-12 h-12 rounded-lg shadow-lg border border-white/10" 
                                                        style={{ backgroundColor: color }}
                                                    />
                                                    <div className="flex-grow">
                                                        <p className="text-white font-mono font-bold">{color}</p>
                                                        <p className="text-xs text-gray-500 group-hover:text-emerald-400 transition-colors">
                                                            {copiedIndex === index ? 'Copied!' : 'Click to copy'}
                                                        </p>
                                                    </div>
                                                    {copiedIndex === index ? (
                                                        <Check size={16} className="text-emerald-400" />
                                                    ) : (
                                                        <Copy size={16} className="text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                                                    )}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}