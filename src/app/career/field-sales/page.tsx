'use client';

import Header from '../../../components/Header';
import { Footer } from '../../../components/sections';
import Link from 'next/link';

export default function FieldSalesPage() {
    return (
        <div className="min-h-screen w-full bg-[#fafaf9] text-[#44403c] flex flex-col font-sans relative overflow-x-hidden">
            <Header />
            <main className="flex-grow pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto w-full">
                <div className="mb-8">
                    <Link href="/career" className="text-sm font-medium text-[#78716c] hover:text-black transition-colors">← Back to Careers</Link>
                </div>

                <h1 className="text-4xl md:text-5xl font-serif text-black mb-6 tracking-tight">Field Sales Representative</h1>

                <div className="flex flex-wrap gap-3 text-sm font-medium mb-10">
                    <span className="bg-[#f5f5f4] px-3 py-1 rounded-full text-[#44403c]">Part Time</span>
                    <span className="bg-[#f5f5f4] px-3 py-1 rounded-full text-[#44403c]">Side Income</span>
                    <span className="bg-[#f5f5f4] px-3 py-1 rounded-full text-[#44403c]">On-Field</span>
                </div>

                <div className="space-y-8 text-[#44403c] leading-relaxed">
                    <section>
                        <h3 className="text-lg font-semibold text-black mb-3">About the job</h3>
                        <p>
                            You will be doing door-to-door sales and marketing for our AI sales agent service. You'll meet local entrepreneurs and store owners directly, educating them on the benefits of AI automation.
                        </p>
                    </section>

                    <section>
                        <h3 className="text-lg font-semibold text-black mb-3">Flexibility & Working Time</h3>
                        <p>
                            This is a part-time position designed for those looking for side income. You can easily work outside of your college schedule, classes, or main office job.
                        </p>
                    </section>

                    <section>
                        <h3 className="text-lg font-semibold text-black mb-3">Compensation</h3>
                        <p>
                            We offer a solid basic pay structured alongside a field day allowance to cover your transit and immediate on-the-ground needs.
                        </p>
                    </section>
                </div>

                <div className="mt-12 bg-black text-white p-8 rounded-xl text-center">
                    <h3 className="text-xl font-semibold mb-3">How to Apply</h3>
                    <p className="mb-6 text-gray-300">
                        Ready to connect directly with local businesses? We want to hear from you.
                    </p>
                    <a
                        href="mailto:info@sajedar.com?subject=Application for Field Sales"
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
