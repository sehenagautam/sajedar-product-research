'use client';

import React, { useEffect, useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';

function PolicyContent() {
    const searchParams = useSearchParams();
    const dataParam = searchParams.get('data');
    
    const [policyData, setPolicyData] = useState<{
        companyName: string;
        email: string;
        address: string;
        website: string;
    } | null>(null);

    const [error, setError] = useState(false);

    useEffect(() => {
        if (!dataParam) {
            setError(true);
            return;
        }

        try {
            // Decode: Base64 -> URI Component -> JSON
            const jsonString = decodeURIComponent(atob(dataParam));
            const data = JSON.parse(jsonString);
            setPolicyData(data);
        } catch (e) {
            console.error("Failed to parse policy data", e);
            setError(true);
        }
    }, [dataParam]);

    if (error) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50">
                <div className="text-center p-8">
                    <h1 className="text-2xl font-bold text-gray-800 mb-2">Invalid Policy Link</h1>
                    <p className="text-gray-600">This link appears to be broken or incomplete.</p>
                </div>
            </div>
        );
    }

    if (!policyData) {
        return <div className="min-h-screen bg-white"></div>; // Loading state
    }

    const date = new Date().toLocaleDateString();

    return (
        <div className="min-h-screen bg-white text-gray-800 font-sans">
            <div className="max-w-3xl mx-auto px-6 py-12">
                <header className="border-b border-gray-200 pb-8 mb-8">
                    <h1 className="text-3xl font-bold mb-2">Privacy Policy</h1>
                    <p className="text-gray-500">Last Updated: {date}</p>
                </header>

                <main className="space-y-8">
                    <section>
                        <h2 className="text-xl font-bold mb-3 text-gray-900">1. Introduction</h2>
                        <p className="leading-relaxed">
                            <strong>{policyData.companyName}</strong> ("we," "our," or "us") respects your privacy. 
                            This Privacy Policy explains how we collect, use, and protect your information when you interact with our advertisements, 
                            website{policyData.website ? ` (${policyData.website})` : ''}, or services.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold mb-3 text-gray-900">2. Information We Collect</h2>
                        <p className="mb-2">We may collect personal information that you voluntarily provide to us via Facebook Lead Ads, contact forms, or direct messages, including:</p>
                        <ul className="list-disc pl-5 space-y-1">
                            <li>Name</li>
                            <li>Email Address</li>
                            <li>Phone Number</li>
                            <li>Any other details you choose to share</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold mb-3 text-gray-900">3. How We Use Your Information</h2>
                        <p className="mb-2">We use the information solely to:</p>
                        <ul className="list-disc pl-5 space-y-1">
                            <li>Contact you regarding the services or products you inquired about.</li>
                            <li>Send you relevant updates or marketing communications (you may opt-out at any time).</li>
                            <li>Improve our customer service and operations.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold mb-3 text-gray-900">4. Data Sharing and Security</h2>
                        <p className="leading-relaxed">
                            We do NOT sell, trade, or rent your personal identification information to third parties. 
                            We implement standard security measures to maintain the safety of your personal information.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold mb-3 text-gray-900">5. Contact Us</h2>
                        <p className="mb-2">If you have questions about this policy, please contact us at:</p>
                        <div className="bg-gray-50 p-4 rounded-lg border border-gray-100 inline-block pr-12">
                            <p className="font-bold">{policyData.companyName}</p>
                            <p>{policyData.address}</p>
                            <p className="mt-2 text-blue-600">Email: {policyData.email}</p>
                        </div>
                    </section>
                </main>

                <footer className="mt-16 pt-8 border-t border-gray-200 text-center text-sm text-gray-400">
                    <p>Generated by <a href="https://sajedar.com/tools" className="hover:underline">Sajedar.com Tools</a></p>
                </footer>
            </div>
        </div>
    );
}

export default function PolicyViewPage() {
    return (
        <Suspense fallback={<div className="min-h-screen bg-white"></div>}>
            <PolicyContent />
        </Suspense>
    );
}