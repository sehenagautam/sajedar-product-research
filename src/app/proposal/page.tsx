import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'AI Chatbot + Meta Ads Proposal | Sajedar',
    description: 'A proposal for high-speed sales using AI Chatbot and Meta Ads automation by Sajedar.',
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
                        AI Chatbot + Meta Ads for High-Speed Sales
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8">
                        Your AI Business Partner
                    </p>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-4 pt-16 space-y-16">
                {/* Overview */}
                <section className="space-y-6">
                    <h2 className="text-3xl font-bold text-white mb-4">Overview</h2>
                    <p className="text-lg text-gray-300 leading-relaxed">
                        Sajedar helps businesses accelerate sales using a fusion of Meta Ads and AI chat automation. Our system captures leads directly from your Meta campaigns and engages them instantly through an intelligent, multilingual AI chatbot — powered by OpenAI's models (ChatGPT) and orchestrated using n8n automation workflows.
                    </p>
                </section>

                {/* How It Works */}
                <section className="space-y-6">
                    <h2 className="text-3xl font-bold text-white mb-4">How It Works</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-white/5 p-6 rounded-xl border border-white/10">
                            <h3 className="text-xl font-bold text-emerald-400 mb-3">1. Lead Generation</h3>
                            <p className="text-gray-300">Meta Ads drive high-intent prospects directly to Messenger, WhatsApp, or your website chat.</p>
                        </div>
                        <div className="bg-white/5 p-6 rounded-xl border border-white/10">
                            <h3 className="text-xl font-bold text-emerald-400 mb-3">2. AI Chat Conversion</h3>
                            <p className="text-gray-300">An AI-powered chatbot greets, engages, and qualifies leads in natural conversation — converting chats into confirmed sales or appointments.</p>
                        </div>
                    </div>
                </section>

                {/* Chatbot Capabilities */}
                <section className="space-y-6">
                    <h2 className="text-3xl font-bold text-white mb-4">Chatbot Capabilities</h2>
                    <ul className="grid md:grid-cols-2 gap-4 text-gray-300">
                        {[
                            "24/7 Instant Responses on Facebook Messenger.",
                            "Multilingual Support: Nepali, English, Romanized Nepali, Hinglish, mixed.",
                            "Provides detailed product information and FAQs.",
                            "Handles light bargaining or price justification (with admin-defined limits).",
                            "Chats fluently in any language — native script, romanized, or mixed.",
                            "Reads text from images and responds contextually.",
                            "Notifies humans in complex or unclear situations.",
                            "Supports human takeover: when a page admin replies, the bot stays silent until released.",
                            "Can send QR payment images for semi-finalization (human verification required)."
                        ].map((capability, index) => (
                            <li key={index} className="flex items-start">
                                <span className="text-emerald-400 mr-2 mt-1">•</span>
                                <span>{capability}</span>
                            </li>
                        ))}
                    </ul>
                </section>

                {/* Key Benefits */}
                <section className="space-y-6">
                    <h2 className="text-3xl font-bold text-white mb-4">Key Benefits</h2>
                    <div className="grid sm:grid-cols-2 gap-6">
                        <div className="border border-white/10 rounded-lg p-6 bg-emerald-500/5">
                            <h3 className="font-bold text-white text-lg mb-2">Instant Replies = Higher Conversions</h3>
                            <p className="text-gray-400 text-sm">Never lose a sale due to delayed replies.</p>
                        </div>
                        <div className="border border-white/10 rounded-lg p-6 bg-emerald-500/5">
                            <h3 className="font-bold text-white text-lg mb-2">Reduced Workload</h3>
                            <p className="text-gray-400 text-sm">Offload repetitive queries and FAQs to the AI assistant.</p>
                        </div>
                        <div className="border border-white/10 rounded-lg p-6 bg-emerald-500/5">
                            <h3 className="font-bold text-white text-lg mb-2">Focus on What Matters</h3>
                            <p className="text-gray-400 text-sm">Free your team to manage complex or high-value leads.</p>
                        </div>
                        <div className="border border-white/10 rounded-lg p-6 bg-emerald-500/5">
                            <h3 className="font-bold text-white text-lg mb-2">Always Active</h3>
                            <p className="text-gray-400 text-sm">Operates 24/7, ensuring continuous engagement.</p>
                        </div>
                    </div>
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
                                Sajedar handles everything: ad graphics, targeting, chatbot setup, automation, and optimization.
                            </p>
                            <p className="text-gray-300 italic">
                                Commission rate determined based on product category, margins, and complexity. As performance scales, more chatbot capabilities are added incrementally.
                            </p>
                        </div>

                        {/* Option 2 */}
                        <div className="bg-white/5 border border-white/10 rounded-xl p-8">
                            <h3 className="text-2xl font-bold text-white mb-4">2. Fixed Setup (Chatbot Only)</h3>
                            <p className="text-gray-300 mb-6">Starting at $100 setup fee and $0.01 per response.</p>

                            <div className="overflow-x-auto">
                                <table className="w-full text-left border-collapse">
                                    <thead>
                                        <tr className="border-b border-white/10">
                                            <th className="p-4 text-emerald-400 font-bold">Tier</th>
                                            <th className="p-4 text-emerald-400 font-bold">Description</th>
                                            <th className="p-4 text-emerald-400 font-bold">Setup Fee</th>
                                            <th className="p-4 text-emerald-400 font-bold">Cost per Reply</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-gray-300">
                                        <tr className="border-b border-white/5">
                                            <td className="p-4 font-semibold text-white">Basic (Text-Only)</td>
                                            <td className="p-4">Ideal for FAQ or lead capture</td>
                                            <td className="p-4">$50</td>
                                            <td className="p-4">$0.01</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 font-semibold text-white">Text + Image</td>
                                            <td className="p-4">Supports photos, OCR, and visual replies</td>
                                            <td className="p-4">$80</td>
                                            <td className="p-4">$0.015</td>
                                        </tr>
                                    </tbody>
                                </table>
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
                                <span className="pt-1">Sajedar will onboard your business — integrating your Meta Page and chatbot.</span>
                            </li>
                            <li className="flex items-start">
                                <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400 font-bold mr-4">3</span>
                                <span className="pt-1">Launch your first AI-powered sales campaign within 3–5 days.</span>
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
