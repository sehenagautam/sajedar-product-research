'use client';

import React, { useState, useRef } from 'react';
import JSZip from 'jszip';
import Header from '../../../components/Header';
import { Footer } from '../../../components/sections';
import { Upload, Grid, Download, Image as ImageIcon, CheckCircle } from 'lucide-react';

type GridOption = {
    label: string;
    rows: number;
    cols: number;
};

const GRID_OPTIONS: GridOption[] = [
    { label: '3x1 (Horizontal Strip)', rows: 1, cols: 3 },
    { label: '3x2 (Medium Grid)', rows: 2, cols: 3 },
    { label: '3x3 (Square Giant)', rows: 3, cols: 3 },
    { label: '3x4 (Tall Grid)', rows: 4, cols: 3 },
];

export default function GridSplitterPage() {
    const [image, setImage] = useState<string | null>(null);
    const [originalImage, setOriginalImage] = useState<HTMLImageElement | null>(null);
    const [selectedGrid, setSelectedGrid] = useState<GridOption>(GRID_OPTIONS[2]); // Default 3x3
    const [isProcessing, setIsProcessing] = useState(false);
    
    // Hidden canvas for processing
    const canvasRef = useRef<HTMLCanvasElement>(null);

    const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (event) => {
                const result = event.target?.result as string;
                setImage(result);
                
                // Create HTML image object for processing later
                const img = new Image();
                img.src = result;
                img.onload = () => setOriginalImage(img);
            };
            reader.readAsDataURL(file);
        }
    };

    const processAndDownload = async () => {
        if (!originalImage || !canvasRef.current) return;
        
        setIsProcessing(true);
        const zip = new JSZip();
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        
        if (!ctx) return;

        // Calculate dimensions
        // We want 1080px squares ideally, or divide evenly
        const { rows, cols } = selectedGrid;
        
        // Use the image's actual width to determine slice width
        const sliceWidth = originalImage.width / cols;
        const sliceHeight = sliceWidth; // Instagram squares are 1:1

        // Total grid height might crop the bottom of the original image if it's too tall/short
        // We prioritize the width to fit 3 cols perfectly.
        
        canvas.width = sliceWidth;
        canvas.height = sliceHeight;

        let count = 1;

        // Loop rows (Top to Bottom)
        for (let r = 0; r < rows; r++) {
            // Loop cols (Left to Right)
            for (let c = 0; c < cols; c++) {
                // Clear canvas
                ctx.clearRect(0, 0, sliceWidth, sliceHeight);
                
                // Draw specific slice
                // drawImage(img, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight)
                ctx.drawImage(
                    originalImage, 
                    c * sliceWidth, // Source X
                    r * sliceHeight, // Source Y
                    sliceWidth, // Source Width
                    sliceHeight, // Source Height
                    0, 0, sliceWidth, sliceHeight // Dest
                );

                // Convert to blob
                const blob = await new Promise<Blob | null>(resolve => canvas.toBlob(resolve, 'image/jpeg', 0.95));
                if (blob) {
                    // Instagram posts order: usually you post the last image first so it appears at bottom right? 
                    // Or standard reading order? Standard numbering helps user decide.
                    // We'll number them 01, 02, 03... row by row.
                    const fileName = `split-${count.toString().padStart(2, '0')}.jpg`;
                    zip.file(fileName, blob);
                    count++;
                }
            }
        }

        // Generate Zip
        const content = await zip.generateAsync({ type: 'blob' });
        
        // Trigger Download
        const link = document.createElement('a');
        link.href = URL.createObjectURL(content);
        link.download = `instagram-grid-${selectedGrid.label}.zip`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        
        setIsProcessing(false);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-[#18181b] via-[#23243a] to-[#1a1a2e] flex flex-col font-sans">
            <Header />

            {/* Hidden Processing Canvas */}
            <canvas ref={canvasRef} style={{ display: 'none' }} />

            <div className="max-w-7xl mx-auto px-4 py-20 flex-grow w-full">
                <div className="text-center mb-12">
                    <span className="inline-block mb-3 px-3 py-1 text-sm font-semibold text-emerald-400 bg-emerald-400/10 rounded-full">
                        Free Tool
                    </span>
                    <h1 className="text-3xl md:text-5xl font-serif font-bold text-white mb-4">
                        Instagram Grid Splitter
                    </h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        Split your high-res photos into 3, 6, or 9 square posts for that aesthetic profile grid.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Left: Controls */}
                    <div className="space-y-8">
                        {/* 1. Upload */}
                        <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8">
                            <h3 className="text-white font-bold mb-4 flex items-center gap-2">
                                <Upload size={20} className="text-emerald-400" /> 1. Upload Photo
                            </h3>
                            <input
                                type="file"
                                accept="image/*"
                                onChange={handleImageUpload}
                                className="w-full text-sm text-gray-400 file:mr-4 file:py-3 file:px-6 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-emerald-500 file:text-white hover:file:bg-emerald-600 cursor-pointer border border-white/10 rounded-lg p-2"
                            />
                        </div>

                        {/* 2. Select Grid */}
                        <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8">
                            <h3 className="text-white font-bold mb-4 flex items-center gap-2">
                                <Grid size={20} className="text-emerald-400" /> 2. Choose Layout
                            </h3>
                            <div className="grid grid-cols-2 gap-3">
                                {GRID_OPTIONS.map((opt) => (
                                    <button
                                        key={opt.label}
                                        onClick={() => setSelectedGrid(opt)}
                                        className={`p-4 rounded-xl border text-sm font-bold transition-all flex flex-col items-center gap-2 ${
                                            selectedGrid.label === opt.label
                                                ? 'bg-emerald-500/20 border-emerald-500 text-white'
                                                : 'bg-black/20 border-white/10 text-gray-400 hover:bg-white/5'
                                        }`}
                                    >
                                        <div className="flex gap-1">
                                            {/* Mini Visual of the grid */}
                                            <div className="grid gap-[1px] bg-current" style={{ gridTemplateColumns: `repeat(${opt.cols}, 1fr)` }}>
                                                {Array.from({ length: opt.rows * opt.cols }).map((_, i) => (
                                                    <div key={i} className="w-3 h-3 bg-white/20"></div>
                                                ))}
                                            </div>
                                        </div>
                                        {opt.label}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* 3. Download */}
                        <button
                            onClick={processAndDownload}
                            disabled={!image || isProcessing}
                            className={`w-full py-5 rounded-2xl font-bold text-lg flex items-center justify-center gap-3 transition-all ${
                                !image
                                    ? 'bg-gray-700 text-gray-500 cursor-not-allowed'
                                    : 'bg-emerald-500 hover:bg-emerald-600 text-white shadow-xl shadow-emerald-500/20 transform hover:scale-[1.02]'
                            }`}
                        >
                            {isProcessing ? (
                                <span className="animate-pulse">Processing...</span>
                            ) : (
                                <>
                                    <Download size={24} /> Download ZIP
                                </>
                            )}
                        </button>
                    </div>

                    {/* Right: Preview */}
                    <div className="bg-black/20 rounded-2xl border border-white/5 p-8 flex items-center justify-center min-h-[500px]">
                        {!image ? (
                            <div className="text-center text-gray-500">
                                <ImageIcon size={64} className="mx-auto mb-4 opacity-20" />
                                <p>Upload an image to see the grid preview</p>
                            </div>
                        ) : (
                            <div className="relative max-w-md w-full">
                                <p className="text-center text-gray-400 text-sm mb-4 uppercase tracking-widest">Preview</p>
                                
                                {/* Overlay Grid on Image */}
                                <div className="relative overflow-hidden rounded-lg shadow-2xl border border-white/10">
                                    <img src={image} alt="Preview" className="w-full h-auto block opacity-80" />
                                    
                                    {/* The Grid Overlay */}
                                    <div 
                                        className="absolute top-0 left-0 w-full h-full grid"
                                        style={{ 
                                            gridTemplateColumns: `repeat(${selectedGrid.cols}, 1fr)`,
                                            // Height needs to match aspect ratio of grid selection, 
                                            // but for simple overlay CSS we just rely on the image. 
                                            // To make it look like the cut, we add gaps.
                                        }}
                                    >
                                        {Array.from({ length: selectedGrid.rows * selectedGrid.cols }).map((_, i) => {
                                            // Only render overlay for the expected area.
                                            // Since the image might be taller than the grid, we might need more logic
                                            // But for a simple visual, a bordered grid is fine.
                                            return (
                                                <div key={i} className="border border-emerald-400/50 flex items-center justify-center">
                                                    <span className="text-white/80 font-bold bg-black/40 px-2 rounded-full text-xs">
                                                        {i + 1}
                                                    </span>
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>
                                <p className="text-center text-xs text-gray-500 mt-4">
                                    Note: Images will be cropped to perfect 1:1 squares.
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