import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'AI Chatbot Proposal | Sajedar',
    description: 'A proposal for high-speed sales using AI Chatbot automation by Sajedar.',
};

export default function ProposalPage() {
    return (
        <div className="min-h-screen w-full bg-[#fafaf9] pb-16 font-sans text-[#44403c]">
            {/* Header Section */}
            <div className="w-full bg-[#fafaf9] py-24 px-4 flex flex-col items-center border-b border-stone-200">
                <div className="max-w-4xl w-full mx-auto text-center">
                    <div className="mb-4">
                        <Link
                            href="/"
                            className="text-[#57534e] hover:text-emerald-600 transition-colors text-sm font-medium"
                        >
                            ← Back to Home
                        </Link>
                    </div>
                    <span className="text-[#292524] text-xs font-bold uppercase tracking-widest mb-4 block">
                        Proposal by Sajedar
                    </span>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-4 pt-16 space-y-16">

                {/* How It Works */}
                <section className="space-y-6">
                    <div className="bg-white p-6 rounded-xl border border-stone-200 shadow-sm">
                        <p className="text-[#44403c] leading-relaxed">
                            Agent showcases, engages, and qualifies leads in natural conversation - converting chats into confirmed sales.
                        </p>
                    </div>
                </section>

                {/* Agent Capabilities */}
                <section className="space-y-6">
                    <h2 className="text-3xl font-bold text-[#292524] mb-4" style={{ fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif' }}>Agent Capabilities</h2>
                    <ul className="grid md:grid-cols-2 gap-4 text-[#44403c]">
                        {[
                            "24/7 Responses",
                            "Collect payments",
                            "Supports human takeover",
                            "Admin defined negotiation rules",
                            "Notifies humans in complex situations",
                            "Understands images, voice message, and any language",


                        ].map((capability, index) => (
                            <li key={index} className="flex items-start gap-2">
                                <span className="text-emerald-500 mt-1">✓</span>
                                <span>{capability}</span>
                            </li>
                        ))}
                    </ul>
                </section>

                {/* Setup Duration */}
                <section className="space-y-6">
                    <div className="bg-white p-8 rounded-xl border border-stone-200 shadow-sm">
                        <p className="text-[#44403c]">
                            <span className="font-bold text-[#292524]">Setup Duration:</span> One to Three days
                        </p>
                    </div>
                </section>

                {/* Pricing Options */}
                <section className="space-y-6">
                    <h2 className="text-3xl font-bold text-[#292524] mb-4" style={{ fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif' }}>Pricing Options</h2>
                    <div className="space-y-8">
                        {/* Option 1 */}
                        <div className="bg-gradient-to-br from-white to-emerald-50 border border-emerald-100 rounded-xl p-8 shadow-md relative overflow-hidden">
                            <div className="absolute top-0 right-0 bg-emerald-500/10 w-32 h-32 rounded-bl-full -mr-8 -mt-8"></div>
                            <div className="flex justify-between items-start mb-4 relative z-10">
                                <h3 className="text-2xl font-bold text-[#292524]">1. Commission-Based Partnership</h3>
                                <span className="px-3 py-1 bg-emerald-100 text-emerald-800 rounded-full text-xs font-bold uppercase border border-emerald-200">Recommended</span>
                            </div>
                            <p className="text-[#44403c] mb-4 font-medium">
                                Lifetime Support
                            </p>
                            <p className="text-[#57534e] italic text-sm">
                                Commission rate determined based on margins and product complexity. More agent capabilities are added incrementally.
                            </p>
                        </div>

                        {/* Option 2 */}

                        <div className="bg-white border border-stone-200 rounded-xl p-8 shadow-sm">
                            <h3 className="text-2xl font-bold text-[#292524] mb-4">2. Fixed Pricing Model</h3>
                            <div className="space-y-2">
                                <p className="text-[#44403c]">
                                    <span className="font-bold text-[#292524]">Setup Fee:</span> $100
                                </p>
                                <p className="text-[#44403c]">
                                    <span className="font-bold text-[#292524]">Usage Cost:</span> $1 per 30 Leads Engaged
                                </p>
                            </div>
                        </div>
                    </div>
                </section>



                {/* Footer / Contact */}
                <div className="border-t border-stone-200 pt-16 pb-8 text-center space-y-8">

                    <div className="flex justify-center gap-6 flex-wrap">
                        <a
                            href="https://www.linkedin.com/in/dimanjan/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-6 py-3 border border-[#0077b5] text-[#0077b5] hover:bg-[#0077b5] hover:text-white rounded-lg transition-colors font-bold"
                        >
                            Connect on LinkedIn
                        </a>
                        <a
                            href="https://wa.me/9779860479751"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-6 py-3 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-lg transition-colors font-bold shadow-md"
                        >
                            Contact on WhatsApp
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
