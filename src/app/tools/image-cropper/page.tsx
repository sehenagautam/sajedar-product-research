'use client';

import React, { useState, useRef } from 'react';
import Header from '../../../components/Header';
import { Footer } from '../../../components/sections';
import { Upload, Crop, Download } from 'lucide-react';
// Imports for cropper
import Cropper, { ReactCropperElement } from 'react-cropper';
import 'cropperjs/dist/cropper.css';

// Predefined Ratios for Social Media
const PRESETS = [
    { label: 'Square Post', width: 1080, height: 1080, ratio: 1 / 1 },
    { label: 'Portrait / Story', width: 1080, height: 1920, ratio: 9 / 16 },
    { label: 'Landscape Post', width: 1200, height: 628, ratio: 1.91 / 1 },
    { label: 'FB Cover', width: 820, height: 312, ratio: 820 / 312 },
    { label: 'Event Header', width: 1920, height: 1005, ratio: 1920 / 1005 },
];

export default function ImageCropperPage() {
    const [image, setImage] = useState<string | null>(null);
    const [selectedPreset, setSelectedPreset] = useState(PRESETS[0]);
    const cropperRef = useRef<ReactCropperElement>(null);

    const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (event) => setImage(event.target?.result as string);
            reader.readAsDataURL(file);
        }
    };

    const handleCrop = () => {
        const cropper = cropperRef.current?.cropper;
        if (typeof cropper !== 'undefined') {
            // Get cropped canvas with explicit dimensions for high quality
            const canvas = cropper.getCroppedCanvas({
                width: selectedPreset.width,
                height: selectedPreset.height,
                fillColor: '#fff',
                imageSmoothingEnabled: true,
                imageSmoothingQuality: 'high',
            });

            const link = document.createElement('a');
            link.download = `sajedar-crop-${selectedPreset.label.replace(/\s+/g, '-').toLowerCase()}.png`;
            link.href = canvas.toDataURL('image/png', 1.0);
            link.click();
        }
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
                        Social Media Image Cropper
                    </h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        Resize your images perfectly for Facebook, Instagram, and Stories without losing quality.
                    </p>
                </div>

                <div className="grid lg:grid-cols-3 gap-8 items-start">
                    {/* Controls */}
                    <div className="lg:col-span-1 space-y-6">
                        {/* Upload */}
                        <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6">
                            <h3 className="text-white font-bold mb-4 flex items-center gap-2">
                                <Upload size={20} className="text-emerald-400" /> 1. Upload Image
                            </h3>
                            <input
                                type="file"
                                accept="image/*"
                                onChange={handleImageUpload}
                                className="w-full text-sm text-gray-400 file:mr-4 file:py-3 file:px-6 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-emerald-500 file:text-white hover:file:bg-emerald-600 cursor-pointer border border-white/10 rounded-lg p-2"
                            />
                        </div>

                        {/* Presets */}
                        <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6">
                            <h3 className="text-white font-bold mb-4 flex items-center gap-2">
                                <Crop size={20} className="text-emerald-400" /> 2. Choose Format
                            </h3>
                            <div className="grid grid-cols-1 gap-2">
                                {PRESETS.map((preset) => (
                                    <button
                                        key={preset.label}
                                        onClick={() => setSelectedPreset(preset)}
                                        className={`px-4 py-3 rounded-xl text-left text-sm font-medium transition-all flex justify-between items-center ${
                                            selectedPreset.label === preset.label
                                                ? 'bg-emerald-500 text-white shadow-lg'
                                                : 'bg-black/20 text-gray-300 hover:bg-white/10'
                                        }`}
                                    >
                                        <span>{preset.label}</span>
                                        <span className="opacity-60 text-xs font-mono">{preset.width}x{preset.height}</span>
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Download */}
                        <button
                            onClick={handleCrop}
                            disabled={!image}
                            className={`w-full py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 transition-all ${
                                !image
                                    ? 'bg-gray-700 text-gray-500 cursor-not-allowed'
                                    : 'bg-emerald-500 hover:bg-emerald-600 text-white shadow-xl shadow-emerald-500/20 transform hover:scale-[1.02]'
                            }`}
                        >
                            <Download size={20} /> Download Image
                        </button>
                    </div>

                    {/* Editor Area */}
                    <div className="lg:col-span-2 bg-black/40 rounded-2xl border border-white/10 p-4 min-h-[500px] flex items-center justify-center overflow-hidden">
                        {!image ? (
                            <div className="text-center text-gray-500">
                                <Crop size={64} className="mx-auto mb-4 opacity-20" />
                                <p>Upload an image to start cropping</p>
                            </div>
                        ) : (
                            <div className="w-full max-h-[70vh]">
                                <Cropper
                                    src={image}
                                    style={{ height: '100%', width: '100%', maxHeight: '600px' }}
                                    aspectRatio={selectedPreset.ratio}
                                    guides={true}
                                    viewMode={1}
                                    dragMode="move"
                                    background={false}
                                    ref={cropperRef}
                                    className="rounded-lg overflow-hidden"
                                />
                                <p className="text-center text-gray-400 text-xs mt-3">
                                    Drag image to position • Scroll to zoom
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}