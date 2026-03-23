'use client';

import Header from '../../../components/Header';
import { Footer } from '../../../components/sections';
import Link from 'next/link';

export default function VideoEditingPage() {
    return (
        <div className="min-h-screen w-full bg-[#fafaf9] text-[#44403c] flex flex-col font-sans relative overflow-x-hidden">
            <Header />
            <main className="flex-grow pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto w-full">
                <div className="mb-8">
                    <Link href="/career" className="text-sm font-medium text-[#78716c] hover:text-black transition-colors">← Back to Careers</Link>
                </div>

                <h1 className="text-4xl md:text-5xl font-serif text-black mb-6 tracking-tight">Video Editor</h1>

                <div className="flex flex-wrap gap-3 text-sm font-medium mb-10">
                    <span className="bg-[#f5f5f4] px-3 py-1 rounded-full text-[#44403c]">Freelance / Part Time</span>
                    <span className="bg-[#f5f5f4] px-3 py-1 rounded-full text-[#44403c]">Portfolio Required</span>
                    <span className="bg-[#f5f5f4] px-3 py-1 rounded-full text-[#44403c]">Remote</span>
                </div>

                <div className="space-y-8 text-[#44403c] leading-relaxed">
                    <section>
                        <h3 className="text-lg font-semibold text-black mb-3">About the job</h3>
                        <p>
                            We are looking for talented, creative video editors to help craft compelling visual narratives for the clients of Sajedar. You will not be editing for Sajedar itself, but directly empowering our wide portfolio of clients. You will be cutting clips, adding dynamic motion graphics, and formatting videos for high engagement on platforms like YouTube, TikTok, and Instagram Reels.
                        </p>
                    </section>
                </div>

                <div className="mt-12 bg-black text-white p-8 rounded-xl text-center">
                    <h3 className="text-xl font-semibold mb-3">How to Apply</h3>
                    <p className="mb-6 text-gray-300">
                        Please make sure you have a working portfolio showcasing your editing style.
                    </p>
                    <a
                        href="mailto:info@sajedar.com?subject=Application for Video Editor"
                        className="inline-block bg-white text-black font-semibold px-8 py-3 rounded-full hover:bg-gray-100 transition-colors duration-200"
                    >
                        Apply Now via Email
                    </a>
                    <p className="mt-4 text-sm text-gray-400">Send your application and portfolio link to info@sajedar.com</p>
                </div>
            </main>
            <Footer />
        </div>
    );
}
