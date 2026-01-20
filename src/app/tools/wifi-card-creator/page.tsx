'use client';

import React, { useState, useRef, useEffect } from 'react';
import { QRCodeCanvas } from 'qrcode.react';
import Header from '../../../components/Header';
import { Footer } from '../../../components/sections';
import { Wifi, Download, Lock, Check } from 'lucide-react';

export default function WifiCardCreatorPage() {
    const [ssid, setSsid] = useState('');
    const [password, setPassword] = useState('');
    const [encryption, setEncryption] = useState('WPA');
    const [hidden, setHidden] = useState(false);
    
    // Canvas ref for generating the download image
    const canvasRef = useRef<HTMLCanvasElement>(null);

    // This hidden QR is used solely to grab the data URL for the canvas drawing
    const qrRef = useRef<HTMLDivElement>(null);

    const generateWifiString = () => {
        // Format: WIFI:S:MySSID;T:WPA;P:MyPass;H:false;;
        // Special chars in SSID/Pass need escaping, but simple format usually works for standard use.
        const safeSsid = ssid.replace(/([\\;,:"])/g, '\\$1');
        const safePass = password.replace(/([\\;,:"])/g, '\\$1');
        return `WIFI:S:${safeSsid};T:${encryption};P:${safePass};H:${hidden};;`;
    };

    const downloadCard = () => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        // 1. Setup Card Dimensions (High Res for Print)
        const width = 1000;
        const height = 1400; // Portrait Aspect Ratio
        canvas.width = width;
        canvas.height = height;

        // 2. Draw Background
        const gradient = ctx.createLinearGradient(0, 0, 0, height);
        gradient.addColorStop(0, '#ffffff');
        gradient.addColorStop(1, '#f8fafc');
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, width, height);

        // Border
        ctx.strokeStyle = '#e2e8f0';
        ctx.lineWidth = 4;
        ctx.strokeRect(20, 20, width - 40, height - 40);

        // 3. Header Text
        ctx.fillStyle = '#0f172a'; // Dark Slate
        ctx.font = 'bold 80px "Inter", sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText('Wi-Fi Login', width / 2, 200);

        ctx.fillStyle = '#64748b'; // Slate 500
        ctx.font = '50px "Inter", sans-serif';
        ctx.fillText('Scan to Connect', width / 2, 280);

        // 4. Draw QR Code
        // We get the image from the rendered React component to ensure it matches
        const qrCanvas = qrRef.current?.querySelector('canvas');
        if (qrCanvas) {
            const qrSize = 500;
            ctx.drawImage(qrCanvas, (width - qrSize) / 2, 380, qrSize, qrSize);
        }

        // 5. Network Details
        ctx.textAlign = 'center';
        
        // Label
        ctx.fillStyle = '#94a3b8'; // Slate 400
        ctx.font = '40px "Inter", sans-serif';
        ctx.fillText('Network Name', width / 2, 980);
        
        // SSID
        ctx.fillStyle = '#0f172a';
        ctx.font = 'bold 60px "Inter", sans-serif';
        ctx.fillText(ssid || 'Your Network', width / 2, 1050);

        // Label
        ctx.fillStyle = '#94a3b8';
        ctx.font = '40px "Inter", sans-serif';
        ctx.fillText('Password', width / 2, 1150);

        // Password
        ctx.fillStyle = '#0f172a';
        ctx.font = 'bold 60px "Inter", sans-serif';
        ctx.fillText(password || '••••••••', width / 2, 1220);

        // 6. The Hook (Branding)
        // Background strip
        ctx.fillStyle = '#10b981'; // Emerald 500
        ctx.fillRect(0, height - 100, width, 100);

        ctx.fillStyle = '#ffffff';
        ctx.font = 'bold 36px "Inter", sans-serif';
        ctx.fillText('Automate your reception with Sajedar.com', width / 2, height - 35);

        // 7. Trigger Download
        const link = document.createElement('a');
        link.download = `wifi-card-${ssid || 'setup'}.png`;
        link.href = canvas.toDataURL('image/png');
        link.click();
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-[#18181b] via-[#23243a] to-[#1a1a2e] flex flex-col font-sans">
            <Header />

            {/* Hidden Canvas for generation */}
            <canvas ref={canvasRef} style={{ display: 'none' }} />

            <div className="max-w-7xl mx-auto px-4 py-20 flex-grow w-full">
                <div className="text-center mb-12">
                    <span className="inline-block mb-3 px-3 py-1 text-sm font-semibold text-emerald-400 bg-emerald-400/10 rounded-full">
                        Free Tool
                    </span>
                    <h1 className="text-3xl md:text-5xl font-serif font-bold text-white mb-4">
                        Wi-Fi Card Creator
                    </h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        Stop answering "What's the password?" Generate a professional, printable Wi-Fi card for your office or cafe instantly.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    {/* Input Section */}
                    <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8">
                        <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                            <Wifi className="text-emerald-400" /> Network Details
                        </h3>
                        
                        <div className="space-y-6">
                            <div>
                                <label className="block text-gray-300 text-sm font-medium mb-2">Network Name (SSID)</label>
                                <input
                                    type="text"
                                    value={ssid}
                                    onChange={(e) => setSsid(e.target.value)}
                                    placeholder="e.g. Sajedar_Office_Guest"
                                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-emerald-500 transition-colors"
                                />
                            </div>

                            <div>
                                <label className="block text-gray-300 text-sm font-medium mb-2">Password</label>
                                <input
                                    type="text"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    placeholder="e.g. securePass123"
                                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-emerald-500 transition-colors"
                                />
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-gray-300 text-sm font-medium mb-2">Security</label>
                                    <select
                                        value={encryption}
                                        onChange={(e) => setEncryption(e.target.value)}
                                        className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-emerald-500 [&>option]:bg-gray-800"
                                    >
                                        <option value="WPA">WPA/WPA2</option>
                                        <option value="WEP">WEP</option>
                                        <option value="nopass">None</option>
                                    </select>
                                </div>
                                <div className="flex items-end pb-3">
                                    <label className="flex items-center gap-2 text-gray-300 cursor-pointer select-none">
                                        <div className={`w-5 h-5 rounded border flex items-center justify-center transition-colors ${hidden ? 'bg-emerald-500 border-emerald-500' : 'border-white/20 bg-white/5'}`}>
                                            {hidden && <Check size={14} className="text-white" />}
                                        </div>
                                        <input 
                                            type="checkbox" 
                                            checked={hidden}
                                            onChange={(e) => setHidden(e.target.checked)}
                                            className="hidden"
                                        />
                                        <span>Hidden Network</span>
                                    </label>
                                </div>
                            </div>

                            <button
                                onClick={downloadCard}
                                disabled={!ssid}
                                className={`w-full font-bold py-4 rounded-xl transition-all flex items-center justify-center gap-2 ${
                                    !ssid 
                                        ? 'bg-gray-700 text-gray-500 cursor-not-allowed'
                                        : 'bg-emerald-500 hover:bg-emerald-600 text-white shadow-lg shadow-emerald-500/20 transform hover:scale-[1.02]'
                                }`}
                            >
                                <Download size={20} /> Download Printable Card
                            </button>
                            <p className="text-center text-xs text-gray-500">
                                Generates a high-res PNG ideal for printing.
                            </p>
                        </div>
                    </div>

                    {/* Preview Section */}
                    <div className="flex flex-col items-center">
                        <p className="text-emerald-400 text-sm font-bold mb-4 uppercase tracking-widest">Live Preview</p>
                        
                        {/* The Card Visual */}
                        <div className="bg-white text-slate-900 w-[320px] rounded-2xl overflow-hidden shadow-2xl transform transition-all duration-500 hover:scale-[1.02]">
                            {/* Card Header */}
                            <div className="pt-8 pb-4 text-center px-6">
                                <h2 className="text-2xl font-bold text-slate-900">Wi-Fi Login</h2>
                                <p className="text-slate-500 text-sm">Scan to Connect</p>
                            </div>

                            {/* QR Display */}
                            <div className="flex justify-center py-4" ref={qrRef}>
                                <QRCodeCanvas
                                    value={generateWifiString()}
                                    size={180}
                                    level="Q"
                                    bgColor={"#ffffff"}
                                    fgColor={"#0f172a"}
                                    includeMargin={true}
                                />
                            </div>

                            {/* Details */}
                            <div className="text-center px-6 pb-8 space-y-4">
                                <div>
                                    <p className="text-xs text-slate-400 uppercase tracking-wider font-bold">Network Name</p>
                                    <p className="text-lg font-bold text-slate-800 break-words leading-tight">
                                        {ssid || <span className="text-slate-300 italic">Your Network</span>}
                                    </p>
                                </div>
                                <div>
                                    <p className="text-xs text-slate-400 uppercase tracking-wider font-bold">Password</p>
                                    <p className="text-lg font-bold text-slate-800 break-words leading-tight font-mono">
                                        {password || <span className="text-slate-300 italic">••••••••</span>}
                                    </p>
                                </div>
                            </div>

                            {/* The Hook / Footer */}
                            <div className="bg-emerald-500 py-3 px-4 text-center">
                                <p className="text-white text-[10px] font-bold opacity-90">
                                    Automate your reception with Sajedar.com
                                </p>
                            </div>
                        </div>

                        {/* Decoration */}
                        <div className="mt-8 flex items-center gap-2 text-gray-500 text-sm">
                            <Lock size={14} /> <span>Secure Client-Side Generation</span>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}