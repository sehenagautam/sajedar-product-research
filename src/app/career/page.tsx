'use client';

import Header from '../../components/Header';
import { Footer } from '../../components/sections';

export default function CareerPage() {
    return (
        <div className="min-h-screen w-full bg-[#fafaf9] text-[#44403c] flex flex-col font-sans relative overflow-x-hidden">
            {/* Header */}
            <Header />

            {/* Main Content */}
            <main className="flex-grow pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto w-full">
                <div className="bg-white rounded-2xl shadow-sm border border-black/5 p-8 md:p-12">
                    <div className="mb-10 text-center md:text-left">
                        <h1 className="text-4xl md:text-5xl font-serif text-black mb-4 tracking-tight">Careers at Sajedar</h1>
                        <p className="text-lg text-[#57534e]">Join us in building the future of AI sales agents.</p>
                    </div>

                    <div className="border-t border-black/10 pt-10">
                        <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-8">
                            <div>
                                <h2 className="text-2xl font-semibold text-black mb-2">Agent Engineer</h2>
                                <div className="flex flex-wrap gap-3 text-sm font-medium">
                                    <span className="bg-[#f5f5f4] px-3 py-1 rounded-full text-[#44403c]">Part Time</span>
                                    <span className="bg-[#f5f5f4] px-3 py-1 rounded-full text-[#44403c]">Entry Level Only</span>
                                    <span className="bg-[#f5f5f4] px-3 py-1 rounded-full text-[#44403c]">Remote</span>
                                </div>
                            </div>
                            <div className="mt-4 md:mt-0 text-left md:text-right">
                                <p className="text-sm font-medium text-[#78716c] uppercase tracking-wider mb-1">Working Time</p>
                                <p className="text-black font-medium">6:00 PM - 9:30 PM (Mon-Fri)</p>
                            </div>
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

                        <div className="mt-16 border-t border-black/10 pt-10">
                            <h2 className="text-2xl font-semibold text-black mb-6">Other Open Gigs</h2>
                            <div className="space-y-8">
                                {/* Video Editing */}
                                <div className="p-6 bg-[#f5f5f4] rounded-xl border border-[rgba(0,0,0,0.05)]">
                                    <h3 className="text-xl font-semibold text-black mb-2">Video Editing</h3>
                                    <p className="text-[#44403c] mb-3">We are looking for talented video editors.</p>
                                    <p className="text-sm text-[#57534e] font-medium">To apply: Please include a link to your portfolio when emailing us.</p>
                                </div>

                                {/* Meta Ads */}
                                <div className="p-6 bg-[#f5f5f4] rounded-xl border border-[rgba(0,0,0,0.05)]">
                                    <h3 className="text-xl font-semibold text-black mb-2">Meta Ads Specialist</h3>
                                    <p className="text-[#44403c] mb-3">Open for both low and high volume campaigns.</p>
                                    <p className="text-sm text-[#57534e] mb-2 font-medium">Requirements:</p>
                                    <ul className="list-disc pl-5 space-y-1 text-sm text-[#57534e] font-medium">
                                        <li>You must have your own dollar cards.</li>
                                        <li>To apply: Please include your past margin rates along with your application.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="mt-12 bg-black text-white p-8 rounded-xl text-center">
                            <h3 className="text-xl font-semibold mb-3">How to Apply</h3>
                            <p className="mb-6 text-gray-300">
                                Are you ready to build incredible AI agents? We want to hear from you.
                            </p>
                            <a
                                href="mailto:info@sajedar.com"
                                className="inline-block bg-white text-black font-semibold px-8 py-3 rounded-full hover:bg-gray-100 transition-colors duration-200"
                            >
                                Apply Now via Email
                            </a>
                            <p className="mt-4 text-sm text-gray-400">Send your application to info@sajedar.com</p>
                        </div>
                    </div>
                </div>
            </main>

            {/* Footer */}
            <Footer />
        </div>
    );
}
