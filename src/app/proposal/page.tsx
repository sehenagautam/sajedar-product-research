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
                            className="text-emerald-400 hover:text-emerald-300 transition-colors text-sm font-medium"
                        >
                            ← Back to Home
                        </Link>
                    </div>
                    <span className="text-emerald-400 text-xs font-bold uppercase tracking-widest mb-4 block">
                        Proposal by Sajedar
                    </span>
                    <h1 className="text-5xl md:text-6xl font-serif font-bold text-white mb-6 leading-tight tracking-tight">
                        High Speed Sales powered by AI Agent
                    </h1>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-4 pt-16 space-y-16">

                {/* How It Works */}
                <section className="space-y-6">
                    <h2 className="text-3xl font-bold text-white mb-4">How It Works</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-white/5 p-6 rounded-xl border border-white/10">
                            <h3 className="text-xl font-bold text-emerald-400 mb-3">1. Customer Engagement</h3>
                            <p className="text-gray-300">Customers message your business directly on Facebook Messenger.</p>
                        </div>
                        <div className="bg-white/5 p-6 rounded-xl border border-white/10">
                            <h3 className="text-xl font-bold text-emerald-400 mb-3">2. AI Chat Conversion</h3>
                            <p className="text-gray-300">An agent showcases, engages, and qualifies leads in natural conversation — converting chats into confirmed sales or appointments.</p>
                        </div>
                    </div>
                </section>

                {/* Chatbot Capabilities */}
                <section className="space-y-6">
                    <h2 className="text-3xl font-bold text-white mb-4">Chatbot Capabilities</h2>
                    <ul className="grid md:grid-cols-2 gap-4 text-gray-300">
                        {[
                            "24/7 Responses.",
                            "Any language supported.",
                            "Showcases products and answers FAQs.",
                            "Admin defined limits on discounts.",
                            "Understands images.",
                            "Notifies humans in complex or unclear situations.",
                            "Supports human takeover: when a page admin replies, the bot stays silent until released.",
                            "Can collect advance payments for order confirmations."
                        ].map((capability, index) => (
                            <li key={index} className="flex items-start">
                                <span className="text-emerald-400 mr-2 mt-1">•</span>
                                <span>{capability}</span>
                            </li>
                        ))}
                    </ul>
                </section>

                {/* Pricing Options */}
                <section className="space-y-6">
                    <h2 className="text-3xl font-bold text-white mb-4">Pricing Options</h2>
                    <div className="space-y-8">
                        {/* Option 1 */}
                        <div className="bg-gradient-to-r from-emerald-900/30 to-blue-900/30 border border-emerald-500/30 rounded-xl p-8">
                            <div className="flex justify-between items-start mb-4">
                                <h3 className="text-2xl font-bold text-white">1. Commission-Based Partnership (Preferred)</h3>
                                <span className="px-3 py-1 bg-emerald-500/20 text-emerald-300 rounded-full text-xs font-bold uppercase">Recommended</span>
                            </div>
                            <p className="text-gray-300 mb-4">
                                Sajedar handles everything: chatbot setup, automation, and optimization.
                            </p>
                            <p className="text-gray-300 italic">
                                Commission rate determined based on product category, margins, and complexity. As performance scales, more chatbot capabilities are added incrementally.
                            </p>
                        </div>

                        {/* Option 2 */}

                        <div className="bg-white/5 border border-white/10 rounded-xl p-8">
                            <h3 className="text-2xl font-bold text-white mb-4">2. Fixed Setup (Chatbot Only)</h3>
                            <div className="space-y-2">
                                <p className="text-gray-300">
                                    <span className="font-bold text-emerald-400">Setup Fee:</span> $100
                                </p>
                                <p className="text-gray-300">
                                    <span className="font-bold text-emerald-400">Usage Cost:</span> $1 per 30 customers
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Next Steps */}
                <section className="space-y-6">
                    <h2 className="text-3xl font-bold text-white mb-4">Next Steps</h2>
                    <div className="bg-white/5 p-8 rounded-xl border border-white/10">
                        <ol className="space-y-4 text-gray-300">
                            <li className="flex items-start">
                                <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400 font-bold mr-4">1</span>
                                <span className="pt-1">Select your preferred pricing model.</span>
                            </li>
                            <li className="flex items-start">
                                <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400 font-bold mr-4">2</span>
                                <span className="pt-1">Contact Us on WhatsApp</span>
                            </li>
                            <li className="flex items-start">
                                <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400 font-bold mr-4">3</span>
                                <span className="pt-1">Launch your first AI-powered sales campaign within 1-3 days.</span>
                            </li>
                        </ol>
                    </div>
                </section>

                {/* Footer / Contact */}
                <div className="border-t border-white/10 pt-16 pb-8 text-center space-y-8">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">
                            Let’s Transform Your Inbox into a Sales Engine
                        </h2>
                        <p className="text-lg text-emerald-400 mb-2">Sajedar.com — Your AI Business Partner</p>
                        <p className="text-gray-400">Automate conversations. Accelerate sales.</p>
                    </div>

                    <div className="flex justify-center gap-6">
                        <a
                            href="https://www.linkedin.com/in/dimanjan/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-6 py-3 bg-[#0077b5] hover:bg-[#006396] text-white rounded-lg transition-colors font-bold"
                        >
                            Connect on LinkedIn
                        </a>
                        <a
                            href="https://wa.me/9779860479751"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-6 py-3 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-lg transition-colors font-bold"
                        >
                            Chat on WhatsApp
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
