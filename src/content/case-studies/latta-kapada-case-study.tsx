import React from 'react';

export const lattaKapadaCaseStudy = {
    slug: 'latta-kapada-case-study',
    title: 'Latta Kapada: AI Tactical Sales Agent',
    description: 'Automating tactical pants sales with an AI agent that collects advance payments and manages orders in Roman Nepali.',
    industry: 'Fashion / Textile',
    duration: 'Ongoing',
    results: ['Advance payments collected', 'Roman Nepali support', 'Automated lead labeling', 'Discord notifications'],
    featured: true,
    date: new Date('2025-01-22'),
    component: function LattaKapadaCaseStudy() {
        return (
            <div className="w-full bg-gradient-to-br from-slate-900/20 to-gray-900/20 border border-slate-500/30 rounded-3xl p-8 md:p-12 backdrop-blur-sm">
                {/* Case Study Header */}
                <div className="text-center mb-12">
                    <div className="inline-flex items-center px-4 py-2 bg-slate-500/20 text-slate-300 rounded-full text-sm font-medium mb-4">
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                        </svg>
                        Fashion Retail Case Study
                    </div>
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">
                        Tactical Sales Agent
                    </h2>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        A Roman-Nepali speaking AI agent for Latta Kapada that drives tactical pants sales by collecting size details, delivery info, and securing advance payments.
                    </p>
                </div>

                {/* Key Metrics Grid */}
                <div className="grid md:grid-cols-4 gap-6 mb-12">
                    <div className="bg-gradient-to-br from-emerald-900/30 to-green-900/30 border border-emerald-500/30 rounded-2xl p-6 text-center">
                        <div className="text-3xl font-bold text-emerald-400 mb-2">100%</div>
                        <div className="text-sm text-gray-300">Advance Collection</div>
                    </div>
                    <div className="bg-gradient-to-br from-blue-900/30 to-cyan-900/30 border border-blue-500/30 rounded-2xl p-6 text-center">
                        <div className="text-3xl font-bold text-blue-400 mb-2">Audio</div>
                        <div className="text-sm text-gray-300">Message Parsing</div>
                    </div>
                    <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 border border-purple-500/30 rounded-2xl p-6 text-center">
                        <div className="text-3xl font-bold text-purple-400 mb-2">Roman</div>
                        <div className="text-sm text-gray-300">Nepali Support</div>
                    </div>
                    <div className="bg-gradient-to-br from-amber-900/30 to-orange-900/30 border border-amber-500/30 rounded-2xl p-6 text-center">
                        <div className="text-3xl font-bold text-amber-400 mb-2">Real-time</div>
                        <div className="text-sm text-gray-300">Discord Alerts</div>
                    </div>
                </div>

                {/* Challenge & Solution */}
                <div className="grid lg:grid-cols-2 gap-8 mb-12">
                    <div className="bg-red-900/20 border border-red-500/30 rounded-2xl p-6">
                        <h3 className="text-xl font-semibold text-red-300 mb-4 flex items-center">
                            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                            </svg>
                            The Objectives
                        </h3>
                        <ul className="text-gray-300 space-y-2">
                            <li>• Guide users to make advance payments (Rs 100)</li>
                            <li>• Show product images and details (price, specs)</li>
                            <li>• Collect precise sizing info (height, weight)</li>
                            <li>• Handle audio messages in local dialect</li>
                            <li>• Seamless delivery coordination</li>
                        </ul>
                    </div>

                    <div className="bg-emerald-900/20 border border-emerald-500/30 rounded-2xl p-6">
                        <h3 className="text-xl font-semibold text-emerald-300 mb-4 flex items-center">
                            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            AI Capabilities
                        </h3>
                        <ul className="text-gray-300 space-y-2">
                            <li>• Human-style bubble replies (no long walls of text)</li>
                            <li>• Roman Nepali conversation engine</li>
                            <li>• Audio message parsing and understanding</li>
                            <li>• Automatic "Lead" labeling in inbox</li>
                            <li>• Instant Discord notifications for payments</li>
                        </ul>
                    </div>
                </div>

                {/* Implementation Journey */}
                <div className="mb-12">
                    <h3 className="text-2xl font-bold text-white mb-6 text-center">The Sales Flow</h3>
                    <div className="relative">
                        <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-slate-500/30"></div>
                        <div className="space-y-8">
                            <div className="flex items-start">
                                <div className="w-8 h-8 bg-slate-500 rounded-full flex items-center justify-center z-10">
                                    <span className="text-white font-bold text-sm">1</span>
                                </div>
                                <div className="ml-6">
                                    <h4 className="text-lg font-semibold text-white mb-2">Product Showcase & Details</h4>
                                    <p className="text-gray-300">The AI shows images of the tactical pants and explains key details (fabric, pockets, durability) and pricing in natural Roman Nepali.</p>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <div className="w-8 h-8 bg-slate-500 rounded-full flex items-center justify-center z-10">
                                    <span className="text-white font-bold text-sm">2</span>
                                </div>
                                <div className="ml-6">
                                    <h4 className="text-lg font-semibold text-white mb-2">Smart Data Collection</h4>
                                    <p className="text-gray-300">Conversational collection of critical fit data: preferred color, size, height, and weight to ensure the perfect fit.</p>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <div className="w-8 h-8 bg-slate-500 rounded-full flex items-center justify-center z-10">
                                    <span className="text-white font-bold text-sm">3</span>
                                </div>
                                <div className="ml-6">
                                    <h4 className="text-lg font-semibold text-white mb-2">Advance Payment Securement</h4>
                                    <p className="text-gray-300">The agent guides the user to pay Rs 100 advance to confirm the order, filtering out non-serious buyers.</p>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center z-10">
                                    <span className="text-white font-bold text-sm">4</span>
                                </div>
                                <div className="ml-6">
                                    <h4 className="text-lg font-semibold text-white mb-2">Admin Notification Loop</h4>
                                    <p className="text-gray-300">Once paid, the lead is labeled, and administrators are instantly notified via Discord to ship the order.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Key Features */}
                <div className="mb-12">
                    <h3 className="text-2xl font-bold text-white mb-6 text-center">Advanced Features</h3>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            {
                                title: 'Audio Parsing',
                                description: 'Understands voice notes in Nepali dialect',
                                icon: '🎙️'
                            },
                            {
                                title: 'Human-Like Bubbles',
                                description: 'Sends multiple short messages instead of one block',
                                icon: '💬'
                            },
                            {
                                title: 'Auto-Labeling',
                                description: 'Tags users as "Lead" for easy filtering',
                                icon: '🏷️'
                            },
                            {
                                title: 'Image Sending',
                                description: 'Can share product photos dynamically',
                                icon: '🖼️'
                            },
                            {
                                title: 'Discord Sync',
                                description: 'Real-time staff alerts for new orders',
                                icon: '🔔'
                            },
                            {
                                title: 'Fit Verification',
                                description: 'Cross-checks height/weight for sizing',
                                icon: '📏'
                            }
                        ].map((feature, index) => (
                            <div key={index} className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-colors">
                                <div className="text-2xl mb-3">{feature.icon}</div>
                                <h4 className="text-white font-semibold mb-2">{feature.title}</h4>
                                <p className="text-gray-300 text-sm">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Results Highlight */}
                <div className="bg-gradient-to-r from-emerald-900/30 to-teal-900/30 border border-emerald-500/30 rounded-2xl p-8 text-center mb-12">
                    <h3 className="text-2xl font-bold text-white mb-4">Initial Pilot Results</h3>
                    <p className="text-xl text-gray-300 italic mb-6">
                        "The AI agent successfully guided multiple users through the entire funnel, collecting precise measurements and securing advance payments of Rs 100 without human intervention. The orders were verified and executed immediately."
                    </p>
                    <div className="inline-flex gap-4">
                        <div className="px-4 py-2 bg-black/30 rounded-lg border border-white/10">
                            <span className="block text-2xl font-bold text-emerald-400">100%</span>
                            <span className="text-xs text-gray-400">Automated Intake</span>
                        </div>
                        <div className="px-4 py-2 bg-black/30 rounded-lg border border-white/10">
                            <span className="block text-2xl font-bold text-emerald-400">Rs 100</span>
                            <span className="text-xs text-gray-400">Advance Collected</span>
                        </div>
                    </div>
                </div>


            </div>
        );
    }
};
