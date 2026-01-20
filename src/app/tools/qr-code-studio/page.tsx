'use client';

import React, { useState, useRef } from 'react';
import { QRCodeCanvas } from 'qrcode.react';
import Header from '../../../components/Header';
import { Footer } from '../../../components/sections';

type QRMode = 'url' | 'wifi' | 'vcard';

export default function QRCodeStudioPage() {
    const [mode, setMode] = useState<QRMode>('url');
    
    // URL State
    const [url, setUrl] = useState('');

    // WiFi State
    const [ssid, setSsid] = useState('');
    const [password, setPassword] = useState('');
    const [encryption, setEncryption] = useState('WPA');

    // vCard State
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [org, setOrg] = useState('');

    const qrRef = useRef<HTMLDivElement>(null);

    // Generate the value string based on mode
    const getQRValue = () => {
        if (mode === 'url') {
            return url || 'https://sajedar.com';
        }
        if (mode === 'wifi') {
            // WIFI:S:MyNetwork;T:WPA;P:mypass;;
            return `WIFI:S:${ssid};T:${encryption};P:${password};;`;
        }
        if (mode === 'vcard') {
            return `BEGIN:VCARD
VERSION:3.0
N:${lastName};${firstName}
FN:${firstName} ${lastName}
ORG:${org}
TEL;TYPE=CELL:${phone}
EMAIL:${email}
END:VCARD`;
        }
        return '';
    };

    const downloadQR = () => {
        if (!qrRef.current) return;
        const canvas = qrRef.current.querySelector('canvas');
        if (!canvas) return;

        const image = canvas.toDataURL("image/png");
        const link = document.createElement('a');
        link.href = image;
        link.download = `sajedar-qrcode-${mode}.png`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
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
                        QR Code Studio
                    </h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        Generate instant, high-quality QR codes for your website, WiFi network, or digital business card.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-10">
                    {/* Controls Section */}
                    <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8">
                        {/* Tabs */}
                        <div className="flex gap-2 mb-8 p-1 bg-black/20 rounded-lg">
                            {(['url', 'wifi', 'vcard'] as QRMode[]).map((m) => (
                                <button
                                    key={m}
                                    onClick={() => setMode(m)}
                                    className={`flex-1 py-2 px-4 rounded-md text-sm font-bold transition-all ${
                                        mode === m
                                            ? 'bg-emerald-500 text-white shadow-lg'
                                            : 'text-gray-400 hover:text-white hover:bg-white/5'
                                    }`}
                                >
                                    {m === 'url' ? 'Link / URL' : m === 'wifi' ? 'WiFi' : 'Contact Card'}
                                </button>
                            ))}
                        </div>

                        {/* Inputs based on Mode */}
                        <div className="space-y-5 animate-in fade-in duration-300">
                            {mode === 'url' && (
                                <div>
                                    <label className="block text-gray-300 text-sm font-medium mb-2">Website URL</label>
                                    <input
                                        type="text"
                                        value={url}
                                        onChange={(e) => setUrl(e.target.value)}
                                        placeholder="https://sajedar.com"
                                        className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-emerald-500"
                                    />
                                </div>
                            )}

                            {mode === 'wifi' && (
                                <>
                                    <div>
                                        <label className="block text-gray-300 text-sm font-medium mb-2">Network Name (SSID)</label>
                                        <input
                                            type="text"
                                            value={ssid}
                                            onChange={(e) => setSsid(e.target.value)}
                                            placeholder="MyHomeWiFi"
                                            className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-emerald-500"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-gray-300 text-sm font-medium mb-2">Password</label>
                                        <input
                                            type="text"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            placeholder="securepassword123"
                                            className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-emerald-500"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-gray-300 text-sm font-medium mb-2">Encryption</label>
                                        <select
                                            value={encryption}
                                            onChange={(e) => setEncryption(e.target.value)}
                                            className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-emerald-500 [&>option]:bg-gray-800"
                                        >
                                            <option value="WPA">WPA/WPA2</option>
                                            <option value="WEP">WEP</option>
                                            <option value="nopass">No Password</option>
                                        </select>
                                    </div>
                                </>
                            )}

                            {mode === 'vcard' && (
                                <>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-gray-300 text-sm font-medium mb-2">First Name</label>
                                            <input
                                                type="text"
                                                value={firstName}
                                                onChange={(e) => setFirstName(e.target.value)}
                                                placeholder="Sadhana"
                                                className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-emerald-500"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-gray-300 text-sm font-medium mb-2">Last Name</label>
                                            <input
                                                type="text"
                                                value={lastName}
                                                onChange={(e) => setLastName(e.target.value)}
                                                placeholder="User"
                                                className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-emerald-500"
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-gray-300 text-sm font-medium mb-2">Organization</label>
                                        <input
                                            type="text"
                                            value={org}
                                            onChange={(e) => setOrg(e.target.value)}
                                            placeholder="Sajedar.com"
                                            className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-emerald-500"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-gray-300 text-sm font-medium mb-2">Phone</label>
                                        <input
                                            type="text"
                                            value={phone}
                                            onChange={(e) => setPhone(e.target.value)}
                                            placeholder="9800000000"
                                            className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-emerald-500"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-gray-300 text-sm font-medium mb-2">Email</label>
                                        <input
                                            type="email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            placeholder="info@sajedar.com"
                                            className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-emerald-500"
                                        />
                                    </div>
                                </>
                            )}
                        </div>
                    </div>

                    {/* Preview Section */}
                    <div className="flex flex-col items-center justify-center bg-black/20 rounded-2xl p-8 border border-white/5">
                        <div className="bg-white p-6 rounded-2xl shadow-2xl mb-8" ref={qrRef}>
                            <QRCodeCanvas
                                value={getQRValue()}
                                size={256}
                                level="H"
                                includeMargin={true}
                            />
                        </div>

                        <div className="text-center space-y-4">
                            <p className="text-gray-400 text-sm">
                                Generated locally in your browser. <br/>No data is sent to any server.
                            </p>
                            <button
                                onClick={downloadQR}
                                className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-3 px-8 rounded-full transition-all transform hover:scale-105 shadow-lg shadow-emerald-500/20"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                </svg>
                                Download QR Code
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}