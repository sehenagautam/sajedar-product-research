'use client';

import React, { useState, useEffect, useRef } from 'react';
import Header from '../../../components/Header';
import { Footer } from '../../../components/sections';
import { QrCode, Download, Upload, Image as ImageIcon } from 'lucide-react';
import QRCode from 'qrcode';

export default function QrCodeLogoPage() {
    const [url, setUrl] = useState('https://sajedar.com');
    const [logo, setLogo] = useState<string | null>(null);
    const [qrDataUrl, setQrDataUrl] = useState('');
    const canvasRef = useRef<HTMLCanvasElement>(null);

    const handleLogoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (event) => {
                setLogo(event.target?.result as string);
            };
            reader.readAsDataURL(file);
        }
    };

    // Generate QR with Logo on Canvas
    useEffect(() => {
        const generate = async () => {
            if (!url) return;
            
            try {
                // 1. Generate basic QR to Data URL
                const qrUrl = await QRCode.toDataURL(url, {
                    width: 1000,
                    margin: 1,
                    color: {
                        dark: '#000000',
                        light: '#ffffff'
                    },
                    errorCorrectionLevel: 'H' // High error correction to allow for logo coverage
                });

                // 2. Draw on Canvas
                const canvas = canvasRef.current;
                if (!canvas) return;
                const ctx = canvas.getContext('2d');
                if (!ctx) return;

                const qrImage = new Image();
                qrImage.src = qrUrl;
                
                qrImage.onload = () => {
                    canvas.width = 1000;
                    canvas.height = 1000;
                    
                    // Draw QR
                    ctx.drawImage(qrImage, 0, 0);

                    // Draw Logo if exists
                    if (logo) {
                        const logoImage = new Image();
                        logoImage.src = logo;
                        logoImage.onload = () => {
                            // Calculate logo size (20% of QR size)
                            const logoSize = 200; 
                            const x = (canvas.width - logoSize) / 2;
                            const y = (canvas.height - logoSize) / 2;

                            // Draw white background for logo (circle or square)
                            ctx.fillStyle = '#ffffff';
                            ctx.fillRect(x - 10, y - 10, logoSize + 20, logoSize + 20);

                            // Draw Logo
                            ctx.drawImage(logoImage, x, y, logoSize, logoSize);
                            
                            // Update state for download
                            setQrDataUrl(canvas.toDataURL('image/png'));
                        };
                    } else {
                        setQrDataUrl(canvas.toDataURL('image/png'));
                    }
                };

            } catch (err) {
                console.error(err);
            }
        };

        generate();
    }, [url, logo]);

    const downloadQR = () => {
        if (!qrDataUrl) return;
        const link = document.createElement('a');
        link.download = 'sajedar-qr-code.png';
        link.href = qrDataUrl;
        link.click();
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-[#18181b] via-[#23243a] to-[#1a1a2e] flex flex-col font-sans">
            <Header />

            <div className="max-w-5xl mx-auto px-4 py-20 flex-grow w-full">
                <div className="text-center mb-12">
                    <span className="inline-block mb-3 px-3 py-1 text-sm font-semibold text-emerald-400 bg-emerald-400/10 rounded-full">
                        Branding Tool
                    </span>
                    <h1 className="text-3xl md:text-5xl font-serif font-bold text-white mb-4">
                        QR Code Generator with Logo
                    </h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        Create professional, scannable QR codes for your business. Add your brand logo to the center instantly.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-10 items-start">
                    {/* Controls */}
                    <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8 space-y-8">
                        <div>
                            <label className="block text-gray-300 font-bold mb-3 flex items-center gap-2">
                                <QrCode size={18} className="text-emerald-400" /> Website URL
                            </label>
                            <input
                                type="text"
                                value={url}
                                onChange={(e) => setUrl(e.target.value)}
                                placeholder="https://yourwebsite.com"
                                className="w-full bg-black/20 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-emerald-500"
                            />
                        </div>

                        <div>
                            <label className="block text-gray-300 font-bold mb-3 flex items-center gap-2">
                                <ImageIcon size={18} className="text-emerald-400" /> Upload Logo (Optional)
                            </label>
                            <div className="relative group">
                                <input
                                    type="file"
                                    accept="image/*"
                                    onChange={handleLogoUpload}
                                    className="w-full text-sm text-gray-400 file:mr-4 file:py-3 file:px-6 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-emerald-500 file:text-white hover:file:bg-emerald-600 cursor-pointer border border-white/10 rounded-lg p-2 bg-black/20"
                                />
                            </div>
                            <p className="text-xs text-gray-500 mt-2">Recommended: Square PNG with transparent background.</p>
                        </div>
                    </div>

                    {/* Preview */}
                    <div className="flex flex-col items-center justify-center bg-white/5 rounded-2xl border border-white/10 p-8">
                        <div className="bg-white p-4 rounded-xl shadow-2xl mb-8">
                            <canvas 
                                ref={canvasRef} 
                                style={{ width: '250px', height: '250px' }}
                                className="w-full h-full"
                            />
                        </div>

                        <button
                            onClick={downloadQR}
                            className="w-full max-w-xs bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-4 rounded-xl shadow-lg flex items-center justify-center gap-2 transition-transform transform hover:scale-105"
                        >
                            <Download size={20} /> Download High-Res PNG
                        </button>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}