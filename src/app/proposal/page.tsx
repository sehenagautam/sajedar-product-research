import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'AI Chatbot Proposal | Sajedar',
    description: 'A proposal for high-speed sales using AI Chatbot automation by Sajedar.',
};

export default function ProposalPage() {
    return (
        <div className="min-h-screen w-full bg-gradient-to-br from-[#18181b] via-[#23243a] to-[#1a1a2e] pb-16">
            {/* Header Section */}
            <div className="w-full bg-gradient-to-br from-[#18181b] via-[#23243a] to-[#1a1a2e] py-24 px-4 flex flex-col items-center border-b border-white/10">
                <div className="max-w-4xl w-full mx-auto text-center">
                    <div className="mb-4">
                        <Link
                            href="/"
                            className="text-white hover:text-gray-300 transition-colors text-sm font-medium"
                        >
                            ← Back to Home
                        </Link>
                    </div>
                    <span className="text-white text-xs font-bold uppercase tracking-widest mb-4 block">
                        Proposal by Sajedar
                    </span>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-4 pt-16 space-y-16">

                {/* How It Works */}
                <section className="space-y-6">
                    <div className="bg-white/5 p-6 rounded-xl border border-white/10">
                        <p className="text-gray-300">
                            Agent showcases, engages, and qualifies leads in natural conversation - converting chats into confirmed sales.
                        </p>
                    </div>
                </section>

                {/* Agent Capabilities */}
                <section className="space-y-6">
                    <h2 className="text-3xl font-bold text-white mb-4">Agent Capabilities</h2>
                    <ul className="grid md:grid-cols-2 gap-4 text-gray-300">
                        {[
                            "24/7 Responses",
                            "Collect payments",
                            "Supports human takeover",
                            "Admin defined negotiation rules",
                            "Notifies humans in complex situations",
                            "Understands images, voice message, and any language",


                        ].map((capability, index) => (
                            <li key={index} className="flex items-start">
                                <span>{capability}</span>
                            </li>
                        ))}
                    </ul>
                </section>

                {/* Setup Duration */}
                <section className="space-y-6">
                    <div className="bg-white/5 p-8 rounded-xl border border-white/10">
                        <p className="text-gray-300">
                            <span className="font-bold text-white">Setup Duration:</span> One to Three days
                        </p>
                    </div>
                </section>

                {/* Pricing Options */}
                <section className="space-y-6">
                    <h2 className="text-3xl font-bold text-white mb-4">Pricing Options</h2>
                    <div className="space-y-8">
                        {/* Option 1 */}
                        <div className="bg-gradient-to-r from-white/5 to-blue-900/30 border border-white/20 rounded-xl p-8">
                            <div className="flex justify-between items-start mb-4">
                                <h3 className="text-2xl font-bold text-white">1. Commission-Based Partnership</h3>
                                <span className="px-3 py-1 bg-white/10 text-white rounded-full text-xs font-bold uppercase">Recommended</span>
                            </div>
                            <p className="text-gray-300 mb-4">
                                Lifetime Support
                            </p>
                            <p className="text-gray-300 italic">
                                Commission rate determined based on margins and product complexity. More agent capabilities are added incrementally.
                            </p>
                        </div>

                        {/* Option 2 */}

                        <div className="bg-white/5 border border-white/10 rounded-xl p-8">
                            <h3 className="text-2xl font-bold text-white mb-4">2. Fixed Pricing Model</h3>
                            <div className="space-y-2">
                                <p className="text-gray-300">
                                    <span className="font-bold text-white">Setup Fee:</span> $100
                                </p>
                                <p className="text-gray-300">
                                    <span className="font-bold text-white">Usage Cost:</span> $1 per 30 Leads Engaged
                                </p>
                            </div>
                        </div>
                    </div>
                </section>



                {/* Footer / Contact */}
                <div className="border-t border-white/10 pt-16 pb-8 text-center space-y-8">

                    <div className="flex justify-center gap-6">
                        <a
                            href="https://www.linkedin.com/in/dimanjan/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-6 py-3 border-2 border-[#0077b5] text-white rounded-lg transition-colors font-bold"
                        >
                            Connect on LinkedIn
                        </a>
                        <a
                            href="https://wa.me/9779860479751"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-6 py-3 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-lg transition-colors font-bold"
                        >
                            Contact on WhatsApp
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
