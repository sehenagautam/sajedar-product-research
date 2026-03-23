'use client';

import Header from '../../../components/Header';
import { Footer } from '../../../components/sections';
import Link from 'next/link';

export default function AgentEngineerPage() {
    return (
        <div className="min-h-screen w-full bg-[#fafaf9] text-[#44403c] flex flex-col font-sans relative overflow-x-hidden">
            <Header />
            <main className="flex-grow pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto w-full">
                <div className="mb-8">
                    <Link href="/career" className="text-sm font-medium text-[#78716c] hover:text-black transition-colors">← Back to Careers</Link>
                </div>

                <h1 className="text-4xl md:text-5xl font-serif text-black mb-6 tracking-tight">Agent Engineer</h1>

                <div className="flex flex-wrap gap-3 text-sm font-medium mb-10">
                    <span className="bg-[#f5f5f4] px-3 py-1 rounded-full text-[#44403c]">Part Time</span>
                    <span className="bg-[#f5f5f4] px-3 py-1 rounded-full text-[#44403c]">Entry Level Only</span>
                    <span className="bg-[#f5f5f4] px-3 py-1 rounded-full text-[#44403c]">Remote</span>
                </div>

                <div className="space-y-8 text-[#44403c] leading-relaxed">
                    <section>
                        <h3 className="text-lg font-semibold text-black mb-3">About the job</h3>
                        <p className="mb-3">You will be:</p>
                        <ul className="list-disc pl-5 space-y-2 mb-4">
                            <li>Researching and testing integrations between various platform APIs.</li>
                            <li>Researching LLM context optimizations.</li>
                            <li>Backend programming.</li>
                        </ul>
                        <p>
                            Guidance and directives will be provided regularly on how to do that. Currently, our primary stack is n8n, Meta Graph API, and Python (FastAPI).
                        </p>
                    </section>

                    <section>
                        <h3 className="text-lg font-semibold text-black mb-3">Experience</h3>
                        <p>
                            Zero experience needed. Currently, first-year IT/Software Engineering Students looking to explore and learn are encouraged to apply.
                        </p>
                    </section>

                    <section>
                        <h3 className="text-lg font-semibold text-black mb-3">Preferred Candidate Type</h3>
                        <p>Enthusiastic about AI Agents and high IQ.</p>
                    </section>

                    <section>
                        <h3 className="text-lg font-semibold text-black mb-3">Working Time & Expectations</h3>
                        <p className="mb-2"><strong>Part time:</strong> 6 PM - 9:30 PM, Monday - Friday (5 days a week).</p>
                        <p>
                            Can ignore messages outside that timing. You should be fully available during the work period.
                        </p>
                    </section>

                    <section>
                        <h3 className="text-lg font-semibold text-black mb-3">Compensation</h3>
                        <p>Minimal. Only fitting for entry-level. Weekly settlement.</p>
                    </section>

                    <section>
                        <h3 className="text-lg font-semibold text-black mb-3">Other Requirements</h3>
                        <p>Outside of your college, you should have no involvement in work outside this.</p>
                    </section>

                    <section>
                        <h3 className="text-lg font-semibold text-black mb-3">Other Benefits</h3>
                        <p>Premium AI tools such as Codex, Supergrok, etc. to supercharge your productivity.</p>
                    </section>
                </div>

                <div className="mt-12 bg-black text-white p-8 rounded-xl text-center">
                    <h3 className="text-xl font-semibold mb-3">How to Apply</h3>
                    <p className="mb-6 text-gray-300">
                        Are you ready to build incredible AI agents? We want to hear from you.
                    </p>
                    <a
                        href="mailto:info@sajedar.com?subject=Application for Agent Engineer"
                        className="inline-block bg-white text-black font-semibold px-8 py-3 rounded-full hover:bg-gray-100 transition-colors duration-200"
                    >
                        Apply Now via Email
                    </a>
                    <p className="mt-4 text-sm text-gray-400">Send your application to info@sajedar.com</p>
                </div>
            </main>
            <Footer />
        </div>
    );
}
