'use client';

import React, { useState, useRef } from 'react';
import { QRCodeCanvas } from 'qrcode.react';
import Header from '../../../components/Header';
import { Footer } from '../../../components/sections';
import { MessageCircle, Copy, Download, ExternalLink } from 'lucide-react';

export default function WhatsAppLinkGeneratorPage() {
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');
    const [generatedLink, setGeneratedLink] = useState('');
    const qrRef = useRef<HTMLDivElement>(null);

    // Update link whenever inputs change
    React.useEffect(() => {
        if (!phone) {
            setGeneratedLink('');
            return;
        }
        // Basic cleanup for phone number (remove +, spaces, dashes)
        const cleanPhone = phone.replace(/\D/g, '');
        const encodedMessage = encodeURIComponent(message);
        
        let link = `https://wa.me/${cleanPhone}`;
        if (message) {
            link += `?text=${encodedMessage}`;
        }
        setGeneratedLink(link);
    }, [phone, message]);

    const copyToClipboard = () => {
        if (!generatedLink) return;
        navigator.clipboard.writeText(generatedLink);
        alert("Link copied to clipboard!");
    };

    const downloadQR = () => {
        if (!qrRef.current) return;
        const canvas = qrRef.current.querySelector('canvas');
        if (!canvas) return;

        const link = document.createElement('a');
        link.href = canvas.toDataURL("image/png");
        link.download = `whatsapp-qr-${phone}.png`;
        link.click();
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
                        WhatsApp Link Generator
                    </h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        Create instant "Click-to-Chat" links and QR codes for your business. Perfect for Instagram bios and Facebook Ads.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-10">
                    {/* Inputs */}
                    <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8 space-y-6">
                        <div>
                            <label className="block text-gray-300 text-sm font-medium mb-2">WhatsApp Number</label>
                            <div className="flex bg-white/10 border border-white/20 rounded-lg overflow-hidden">
                                <span className="px-4 py-3 bg-white/5 border-r border-white/10 text-gray-400 flex items-center">
                                    <MessageCircle size={18} />
                                </span>
                                <input
                                    type="text"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                    placeholder="e.g. 9779800000000"
                                    className="flex-grow bg-transparent px-4 py-3 text-white focus:outline-none placeholder-gray-500"
                                />
                            </div>
                            <p className="text-xs text-gray-500 mt-2">Include country code (e.g., 977 for Nepal) without the + sign.</p>
                        </div>

                        <div>
                            <label className="block text-gray-300 text-sm font-medium mb-2">Pre-filled Message</label>
                            <textarea
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                placeholder="Hi! I am interested in your services..."
                                className="w-full h-32 bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-emerald-500 resize-none placeholder-gray-500"
                            />
                        </div>
                    </div>

                    {/* Results */}
                    <div className="flex flex-col gap-6">
                        {/* Link Result */}
                        <div className="bg-emerald-900/20 border border-emerald-500/20 rounded-2xl p-6">
                            <h3 className="text-emerald-400 font-bold mb-4 uppercase text-xs tracking-wider">Your Direct Link</h3>
                            <div className="bg-black/30 rounded-lg p-3 mb-4 break-all text-sm text-gray-300 font-mono border border-white/10">
                                {generatedLink || 'Enter a number to generate...'}
                            </div>
                            <div className="flex gap-3">
                                <button
                                    onClick={copyToClipboard}
                                    disabled={!generatedLink}
                                    className="flex-1 bg-emerald-500 hover:bg-emerald-600 disabled:bg-gray-700 disabled:text-gray-500 text-white font-bold py-2 rounded-lg flex items-center justify-center gap-2 transition-colors"
                                >
                                    <Copy size={16} /> Copy Link
                                </button>
                                {generatedLink && (
                                    <a
                                        href={generatedLink}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="bg-white/10 hover:bg-white/20 text-white font-bold py-2 px-4 rounded-lg flex items-center justify-center gap-2 transition-colors"
                                    >
                                        <ExternalLink size={16} /> Test
                                    </a>
                                )}
                            </div>
                        </div>

                        {/* QR Code */}
                        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col items-center">
                            <div className="bg-white p-4 rounded-xl mb-6" ref={qrRef}>
                                <QRCodeCanvas
                                    value={generatedLink || 'https://wa.me/'}
                                    size={200}
                                    level="H"
                                    imageSettings={{
                                        src: "https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg",
                                        x: undefined,
                                        y: undefined,
                                        height: 48,
                                        width: 48,
                                        excavate: true,
                                    }}
                                />
                            </div>
                            <button
                                onClick={downloadQR}
                                disabled={!generatedLink}
                                className="text-sm text-gray-300 hover:text-white flex items-center gap-2 transition-colors"
                            >
                                <Download size={16} /> Download QR Image
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}