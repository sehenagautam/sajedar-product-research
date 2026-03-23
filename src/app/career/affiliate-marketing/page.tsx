'use client';

import Header from '../../../components/Header';
import { Footer } from '../../../components/sections';
import Link from 'next/link';

export default function AffiliateMarketingPage() {
    return (
        <div className="min-h-screen w-full bg-[#fafaf9] text-[#44403c] flex flex-col font-sans relative overflow-x-hidden">
            <Header />
            <main className="flex-grow pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto w-full">
                <div className="mb-8">
                    <Link href="/career" className="text-sm font-medium text-[#78716c] hover:text-black transition-colors">← Back to Careers</Link>
                </div>

                <h1 className="text-4xl md:text-5xl font-serif text-black mb-6 tracking-tight">Affiliate Marketer</h1>

                <div className="flex flex-wrap gap-3 text-sm font-medium mb-10">
                    <span className="bg-[#f5f5f4] px-3 py-1 rounded-full text-[#44403c]">Freelance</span>
                    <span className="bg-[#f5f5f4] px-3 py-1 rounded-full text-[#44403c]">Commission Based</span>
                    <span className="bg-[#f5f5f4] px-3 py-1 rounded-full text-[#44403c]">Remote</span>
                </div>

                <div className="space-y-8 text-[#44403c] leading-relaxed">
                    <section>
                        <h3 className="text-lg font-semibold text-black mb-3">About the job</h3>
                        <p>
                            Leverage your network and marketing skills to promote our cutting-edge AI sales agents. You'll drive new clients to our platform and act as a brand ambassador for Sajedar.
                        </p>
                    </section>

                    <section>
                        <h3 className="text-lg font-semibold text-black mb-3">Compensation</h3>
                        <p>
                            You will earn a percentage of the revenue generated from every successful service sale you refer. Your earning potential scales dynamically with the sales you bring in.
                        </p>
                    </section>
                </div>

                <div className="mt-12 bg-black text-white p-8 rounded-xl text-center">
                    <h3 className="text-xl font-semibold mb-3">How to Apply</h3>
                    <p className="mb-6 text-gray-300">
                        If you have an existing network or excellent marketing skills, join our affiliate program.
                    </p>
                    <a
                        href="mailto:info@sajedar.com?subject=Application for Affiliate Marketing"
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
