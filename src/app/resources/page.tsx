'use client';

import React from 'react';
import Link from 'next/link';
import Header from '../../components/Header';
import { Footer } from '../../components/sections';

export default function ResourcesPage() {
    return (
        <div className="min-h-screen w-full bg-gradient-to-br from-[#18181b] via-[#23243a] to-[#1a1a2e] flex flex-col font-sans relative overflow-x-hidden">
            {/* Header */}
            <Header />

            <div className="max-w-7xl mx-auto px-4 py-16 w-full flex-grow">
                {/* Page Header */}
                <div className="text-center mb-16">
                    <h1 className="text-5xl md:text-6xl font-serif font-bold text-white mb-6">
                        Resources
                    </h1>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        Explore our sitemap, tutorials, tools, and community links.
                    </p>
                </div>

                {/* Top Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 mb-20">
                    {/* Sitemap */}
                    <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8">
                        <h2 className="text-2xl font-bold text-white mb-6 border-b border-white/10 pb-4">
                            Sitemap
                        </h2>
                        <ul className="space-y-4">
                            <li><Link href="/tutorials" className="text-gray-300 hover:text-emerald-400">Tutorials</Link></li>
                            <li><Link href="/articles" className="text-gray-300 hover:text-emerald-400">Articles</Link></li>
                            <li><Link href="/research" className="text-gray-300 hover:text-emerald-400">Research</Link></li>
                            <li><Link href="/case-studies" className="text-gray-300 hover:text-emerald-400">Case Studies</Link></li>
                            <li><Link href="/demo" className="text-gray-300 hover:text-emerald-400">Demo</Link></li>
                            <li><Link href="/readiness" className="text-gray-300 hover:text-emerald-400">Automation Readiness</Link></li>
                            <li>
                                <Link
                                    href="/tools"
                                    className="text-gray-300 hover:text-emerald-400 font-semibold"
                                >
                                    Tools
                                </Link>
                            </li>
                            <li><Link href="/forum" className="text-gray-300 hover:text-emerald-400">Forum</Link></li>
                            <li><Link href="/developer" className="text-gray-300 hover:text-emerald-400">Developer</Link></li>
                        </ul>
                    </div>

                    {/* Facebook Messenger Resources */}
                    <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8">
                        <h2 className="text-2xl font-bold text-white mb-6 border-b border-white/10 pb-4">
                            Facebook Messenger Resources
                        </h2>
                        <ul className="space-y-4">
                            <li><Link href="/facebook-messenger" className="text-gray-300 hover:text-emerald-400">All Facebook Messenger Resources</Link></li>
                            <li><Link href="/facebook-messenger-chatbot-tutorial" className="text-gray-300 hover:text-emerald-400">How to Create Facebook Messenger AI Chatbot</Link></li>
                            <li><Link href="/tutorials/facebook-messenger-bot-development" className="text-gray-300 hover:text-emerald-400">Facebook Messenger Bot Development</Link></li>
                            <li><Link href="/tutorials/chatbot-analytics-tracking" className="text-gray-300 hover:text-emerald-400">Facebook Messenger Chatbot Analytics</Link></li>
                            <li><Link href="/tutorials/facebook-messenger-chatbot-ecommerce" className="text-gray-300 hover:text-emerald-400">E-commerce Facebook Messenger Chatbot</Link></li>
                            <li><Link href="/tutorials/facebook-messenger-chatbot-healthcare" className="text-gray-300 hover:text-emerald-400">Healthcare Facebook Messenger Chatbot</Link></li>
                        </ul>
                    </div>

                    {/* Connect & Legal */}
                    <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8">
                        <h2 className="text-2xl font-bold text-white mb-6 border-b border-white/10 pb-4">
                            Connect & Legal
                        </h2>

                        <div className="mb-8">
                            <h3 className="text-lg font-semibold text-emerald-400 mb-4">
                                Follow Us
                            </h3>
                            <ul className="space-y-3 text-gray-300">
                                <li><a href="https://www.youtube.com/@sajedar_chatbots" target="_blank">YouTube</a></li>
                                <li><a href="https://www.tiktok.com/@sajedar_chatbots" target="_blank">TikTok</a></li>
                                <li><a href="https://www.linkedin.com/company/sajedar" target="_blank">LinkedIn</a></li>
                                <li><a href="https://www.facebook.com/sajedardotcom" target="_blank">Facebook</a></li>
                                <li><a href="https://discord.gg/FJbuEAbaqU" target="_blank">Discord</a></li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold text-emerald-400 mb-4">
                                Legal
                            </h3>
                            <ul className="space-y-3">
                                <li><Link href="/PrivacyPolicy" className="text-gray-300 hover:text-white">Privacy Policy</Link></li>
                                <li><Link href="/TermsOfService" className="text-gray-300 hover:text-white">Terms of Service</Link></li>
                                <li><Link href="/Contact" className="text-gray-300 hover:text-white">Contact</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Tools Section (like Research & Insights) */}
                <div>
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-serif font-bold text-white mb-4">
                            Tools
                        </h2>
                        <p className="text-gray-300 max-w-3xl mx-auto">
                            Practical AI tools designed to help businesses deploy, test, and optimize conversational AI systems faster.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {/* Tool Card 1 */}
                        <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8">
                            <span className="inline-block text-sm text-emerald-400 font-semibold mb-3">
                                Tool
                            </span>
                            <h3 className="text-xl font-bold text-white mb-3">
                                AI Chatbot Readiness Checker
                            </h3>
                            <p className="text-gray-300">
                                Assess how prepared your business is for deploying an AI chatbot across sales, support, and operations.
                            </p>
                        </div>

                        {/* Tool Card 2 */}
                        <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8">
                            <span className="inline-block text-sm text-emerald-400 font-semibold mb-3">
                                Tool
                            </span>
                            <h3 className="text-xl font-bold text-white mb-3">
                                Conversational Flow Designer
                            </h3>
                            <p className="text-gray-300">
                                Visualize and structure conversation flows for Messenger and AI agents before implementation.
                            </p>
                        </div>

                        {/* Tool Card 3 */}
                        <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8">
                            <span className="inline-block text-sm text-emerald-400 font-semibold mb-3">
                                Tool
                            </span>
                            <h3 className="text-xl font-bold text-white mb-3">
                                Chatbot Performance Analyzer
                            </h3>
                            <p className="text-gray-300">
                                Measure engagement, conversion, and automation effectiveness across your conversational AI systems.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <Footer />
        </div>
    );
}
