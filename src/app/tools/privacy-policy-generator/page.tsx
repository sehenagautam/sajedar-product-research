'use client';

import React, { useState } from 'react';
import Header from '../../../components/Header';
import { Footer } from '../../../components/sections';

export default function PrivacyPolicyGeneratorPage() {
    const [formData, setFormData] = useState({
        companyName: '',
        email: '',
        address: '',
        website: ''
    });

    const [policyText, setPolicyText] = useState('');
    const [copiedText, setCopiedText] = useState(false);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const generatePolicy = () => {
        if (!formData.companyName || !formData.email) {
            alert("Please fill in at least Company Name and Email.");
            return;
        }

        // 1. Generate the Text
        const text = `PRIVACY POLICY
Last Updated: ${new Date().toLocaleDateString()}

1. Introduction
${formData.companyName} ("we," "our," or "us") respects your privacy. This Privacy Policy explains how we collect, use, and protect your information when you interact with our advertisements, website${formData.website ? ` (${formData.website})` : ''}, or services.

2. Information We Collect
We may collect personal information that you voluntarily provide to us via Facebook Lead Ads, contact forms, or direct messages, including:
- Name
- Email Address
- Phone Number
- Any other details you choose to share

3. How We Use Your Information
We use the information solely to:
- Contact you regarding the services or products you inquired about.
- Send you relevant updates or marketing communications (you may opt-out at any time).
- Improve our customer service and operations.

4. Data Sharing and Security
We do NOT sell, trade, or rent your personal identification information to third parties. We implement standard security measures to maintain the safety of your personal information.

5. Contact Us
If you have questions about this policy, please contact us at:
${formData.companyName}
${formData.address}
Email: ${formData.email}
`;
        setPolicyText(text);

        setCopiedText(false);
    };

    const copyToClipboard = (text: string) => {
        navigator.clipboard.writeText(text);
        setCopiedText(true);
        setTimeout(() => setCopiedText(false), 2000);
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
                        Facebook Ads Privacy Policy Generator
                    </h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        Don't get your ads rejected. Generate compliant Privacy Policy text you can publish on your own website or store.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-10">
                    {/* Input Form */}
                    <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8 h-fit">
                        <h3 className="text-xl font-bold text-white mb-6">Enter Business Details</h3>
                        <div className="space-y-5">
                            <div>
                                <label className="block text-gray-300 text-sm font-medium mb-2">Company Name <span className="text-red-400">*</span></label>
                                <input
                                    type="text"
                                    name="companyName"
                                    value={formData.companyName}
                                    onChange={handleInputChange}
                                    placeholder="e.g. Ashwi Furnitures"
                                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-emerald-500"
                                />
                            </div>
                            <div>
                                <label className="block text-gray-300 text-sm font-medium mb-2">Business Email <span className="text-red-400">*</span></label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    placeholder="contact@ashwifurnitures.com"
                                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-emerald-500"
                                />
                            </div>
                            <div>
                                <label className="block text-gray-300 text-sm font-medium mb-2">Business Address</label>
                                <input
                                    type="text"
                                    name="address"
                                    value={formData.address}
                                    onChange={handleInputChange}
                                    placeholder="Kathmandu, Nepal"
                                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-emerald-500"
                                />
                            </div>
                            <div>
                                <label className="block text-gray-300 text-sm font-medium mb-2">Website URL (Optional)</label>
                                <input
                                    type="text"
                                    name="website"
                                    value={formData.website}
                                    onChange={handleInputChange}
                                    placeholder="ashwifurnitures.com"
                                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-emerald-500"
                                />
                            </div>

                            <button
                                onClick={generatePolicy}
                                className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-3 rounded-lg transition-all transform hover:scale-[1.02] shadow-lg shadow-emerald-500/20"
                            >
                                Generate Policy Text
                            </button>
                        </div>
                    </div>

                    {/* Output Section */}
                    <div className="space-y-6">
                        <div className="rounded-2xl border border-emerald-500/30 bg-gradient-to-r from-blue-900/40 to-emerald-900/40 p-8">
                            <div className="flex items-start gap-4">
                                <div className="bg-emerald-500/20 p-3 rounded-lg text-emerald-400">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" /></svg>
                                </div>
                                <div className="flex-grow">
                                    <h3 className="text-lg font-bold text-white mb-2">Use this on your own domain</h3>
                                    <p className="text-gray-400 text-sm leading-6">
                                        Sajedar no longer creates public hosted policy links from form data. Copy the generated text below and publish it on your website, Shopify store, or Facebook page before using it in Ads Manager.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Text Preview */}
                        <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8">
                            <div className="flex justify-between items-center mb-4">
                                <h3 className="text-xl font-bold text-white">Policy Text Preview</h3>
                                <button
                                    onClick={() => policyText && copyToClipboard(policyText)}
                                    disabled={!policyText}
                                    className="text-sm text-emerald-400 hover:text-emerald-300 font-semibold"
                                >
                                    {copiedText ? 'Copied to Clipboard' : 'Copy Text'}
                                </button>
                            </div>
                            <div className="bg-black/30 rounded-lg p-6 h-64 overflow-y-auto text-gray-300 text-sm whitespace-pre-line border border-white/5 font-sans">
                                {policyText || "Fill the form to see the preview..."}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}
