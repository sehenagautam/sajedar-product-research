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
            <div className="w-full bg-white border border-stone-200 rounded-lg p-8 md:p-12 text-[#44403c] font-sans shadow-sm">
                {/* Case Study Header */}
                <div className="mb-12 border-b border-stone-200 pb-10">
                    <div className="inline-flex items-center text-[#78716c] uppercase tracking-widest text-xs font-bold mb-4">
                        Fashion Retail Case Study
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold text-[#1c1917] mb-4" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif' }}>
                        Tactical Pants Sales Agent
                    </h2>
                    <p className="text-lg text-[#57534e] max-w-3xl leading-relaxed">
                        A Roman-Nepali speaking AI agent for Latta Kapada that drives tactical pants sales by collecting size details, delivery info, and securing advance payments.
                    </p>
                </div>

                {/* Key Metrics Grid */}
                <div className="grid md:grid-cols-4 gap-6 mb-12">
                    <div className="border border-stone-200 bg-stone-50 rounded-lg p-6">
                        <div className="text-xl font-bold text-[#1c1917] mb-1">Goal</div>
                        <div className="text-sm text-[#78716c]">Rs 100 Advance Collection</div>
                    </div>
                    <div className="border border-stone-200 bg-stone-50 rounded-lg p-6">
                        <div className="text-xl font-bold text-[#1c1917] mb-1">Audio</div>
                        <div className="text-sm text-[#78716c]">Message Parsing</div>
                    </div>
                    <div className="border border-stone-200 bg-stone-50 rounded-lg p-6">
                        <div className="text-xl font-bold text-[#1c1917] mb-1">Roman Nepali</div>
                        <div className="text-sm text-[#78716c]">Response language</div>
                    </div>
                    <div className="border border-stone-200 bg-stone-50 rounded-lg p-6">
                        <div className="text-xl font-bold text-[#1c1917] mb-1">Real-time</div>
                        <div className="text-sm text-[#78716c]">Discord Alerts</div>
                    </div>
                </div>

                {/* Challenge & Solution */}
                <div className="grid lg:grid-cols-2 gap-8 mb-12">
                    <div className="border border-stone-200 rounded-lg p-8">
                        <h3 className="text-lg font-bold text-[#1c1917] mb-4 uppercase tracking-wide text-sm">
                            The Objectives
                        </h3>
                        <ul className="space-y-3 text-[#44403c] text-sm">
                            <li className="flex items-start gap-2.5">
                                <span className="text-[#a8a29e] mt-0.5">•</span>
                                <span>Guide users to make advance payments (Rs 100)</span>
                            </li>
                            <li className="flex items-start gap-2.5">
                                <span className="text-[#a8a29e] mt-0.5">•</span>
                                <span>Show product images and details (price, specs)</span>
                            </li>
                            <li className="flex items-start gap-2.5">
                                <span className="text-[#a8a29e] mt-0.5">•</span>
                                <span>Collect precise sizing info (height, weight)</span>
                            </li>
                            <li className="flex items-start gap-2.5">
                                <span className="text-[#a8a29e] mt-0.5">•</span>
                                <span>Handle audio messages in local dialect</span>
                            </li>
                            <li className="flex items-start gap-2.5">
                                <span className="text-[#a8a29e] mt-0.5">•</span>
                                <span>Seamless delivery coordination</span>
                            </li>
                        </ul>
                    </div>

                    <div className="border border-stone-200 rounded-lg p-8">
                        <h3 className="text-lg font-bold text-[#1c1917] mb-4 uppercase tracking-wide text-sm">
                            AI Capabilities
                        </h3>
                        <ul className="space-y-3 text-[#44403c] text-sm">
                            <li className="flex items-start gap-2.5">
                                <span className="text-emerald-600 mt-0.5">✓</span>
                                <span>Human-style bubble replies (no long walls of text)</span>
                            </li>
                            <li className="flex items-start gap-2.5">
                                <span className="text-emerald-600 mt-0.5">✓</span>
                                <span>Roman Nepali conversation engine</span>
                            </li>
                            <li className="flex items-start gap-2.5">
                                <span className="text-emerald-600 mt-0.5">✓</span>
                                <span>Audio message parsing and understanding</span>
                            </li>
                            <li className="flex items-start gap-2.5">
                                <span className="text-emerald-600 mt-0.5">✓</span>
                                <span>Automatic "Lead" labeling in inbox</span>
                            </li>
                            <li className="flex items-start gap-2.5">
                                <span className="text-emerald-600 mt-0.5">✓</span>
                                <span>Instant Discord notifications for payments</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Implementation Journey */}
                <div className="mb-14">
                    <h3 className="text-xl font-bold text-[#1c1917] mb-8 border-b border-stone-200 pb-2">The Sales Flow</h3>
                    <div className="relative ml-4">
                        <div className="absolute left-0 top-2 bottom-2 w-px bg-stone-200"></div>
                        <div className="space-y-10 pl-8">
                            <div className="relative">
                                <div className="absolute -left-[37px] top-1 w-2.5 h-2.5 rounded-full bg-[#1c1917] ring-4 ring-white border border-stone-200"></div>
                                <h4 className="text-base font-bold text-[#1c1917] mb-1">1. Product Showcase & Details</h4>
                                <p className="text-sm text-[#57534e]">The AI shows images of the tactical pants and explains key details (fabric, pockets, durability) and pricing in natural Roman Nepali.</p>
                            </div>
                            <div className="relative">
                                <div className="absolute -left-[37px] top-1 w-2.5 h-2.5 rounded-full bg-stone-300 ring-4 ring-white border border-stone-200"></div>
                                <h4 className="text-base font-bold text-[#1c1917] mb-1">2. Smart Data Collection</h4>
                                <p className="text-sm text-[#57534e]">Conversational collection of critical fit data: preferred color, size, height, and weight to ensure the perfect fit.</p>
                            </div>
                            <div className="relative">
                                <div className="absolute -left-[37px] top-1 w-2.5 h-2.5 rounded-full bg-stone-300 ring-4 ring-white border border-stone-200"></div>
                                <h4 className="text-base font-bold text-[#1c1917] mb-1">3. Advance Payment Securement</h4>
                                <p className="text-sm text-[#57534e]">The agent guides the user to pay Rs 100 advance to confirm the order, filtering out non-serious buyers.</p>
                            </div>
                            <div className="relative">
                                <div className="absolute -left-[37px] top-1 w-2.5 h-2.5 rounded-full bg-emerald-600 ring-4 ring-white border border-emerald-100"></div>
                                <h4 className="text-base font-bold text-[#1c1917] mb-1">4. Admin Notification Loop</h4>
                                <p className="text-sm text-[#57534e]">Once paid, the lead is labeled, and administrators are instantly notified via Discord to ship the order.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Key Features */}
                <div className="mb-14">
                    <h3 className="text-xl font-bold text-[#1c1917] mb-6 border-b border-stone-200 pb-2">Advanced Features</h3>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {[
                            { title: 'Audio Parsing', description: 'Understands voice notes in Nepali dialect' },
                            { title: 'Human-Like Bubbles', description: 'Sends multiple short messages instead of one block' },
                            { title: 'Auto-Labeling', description: 'Tags users as "Lead" for easy filtering' },
                            { title: 'Image Sending', description: 'Can share product photos dynamically' },
                            { title: 'Discord Sync', description: 'Real-time staff alerts for new orders' },
                            { title: 'Fit Verification', description: 'Cross-checks height/weight for sizing' }
                        ].map((feature, index) => (
                            <div key={index} className="border border-stone-200 bg-stone-50 rounded-lg p-5">
                                <h4 className="text-sm font-bold text-[#1c1917] mb-1">{feature.title}</h4>
                                <p className="text-[#78716c] text-sm">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Results Highlight */}
                <div className="border border-stone-200 bg-[#fafaf9] rounded-lg p-8">
                    <h3 className="text-lg font-bold text-[#1c1917] mb-4 uppercase tracking-wide text-sm">Initial Pilot Results</h3>
                    <blockquote className="text-lg text-[#57534e] italic mb-6 border-l-2 border-stone-300 pl-4">
                        "The AI agent successfully guided multiple users through the entire funnel, collecting precise measurements and securing advance payments of Rs 100 without human intervention. The orders were verified and executed immediately."
                    </blockquote>
                    <div className="flex gap-6 mt-6">
                        <div>
                            <span className="block text-2xl font-bold text-[#1c1917]">Fully</span>
                            <span className="text-sm font-medium text-[#78716c]">Automated Intake</span>
                        </div>
                        <div>
                            <span className="block text-2xl font-bold text-[#1c1917]">Rs 100</span>
                            <span className="text-sm font-medium text-[#78716c]">Advance Collected</span>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
};
