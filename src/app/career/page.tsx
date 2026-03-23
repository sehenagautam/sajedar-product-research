'use client';

import Header from '../../components/Header';
import { Footer } from '../../components/sections';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function CareerPage() {
    const roles = [
        {
            title: "Agent Engineer",
            href: "/career/agent-engineer",
            type: "Part Time • Entry Level Only",
            description: "Researching integrations, testing APIs, LLM optimizations, and backend programming. Perfect for first-year IT/Software Engineering students eager to build real AI solutions."
        },
        {
            title: "Affiliate Marketer",
            href: "/career/affiliate-marketing",
            type: "Commission Based",
            description: "Earn a percentage of revenue by selling our AI sales agent services to businesses. Ideal for well-networked individuals looking to generate uncapped remote income."
        },
        {
            title: "Field Sales Representative",
            href: "/career/field-sales",
            type: "Part Time • On-Field",
            description: "Engage in door-to-door sales and local marketing. You get a solid basic pay alongside a field day allowance, flexible outside of your college or office hours as a side income."
        },
        {
            title: "Video Editor",
            href: "/career/video-editing",
            type: "Freelance",
            description: "Edit engaging visual content for our social media channels to highlight the power of AI automation. Must have an existing portfolio showcasing your editing capabilities."
        },
        {
            title: "Meta Ads Specialist",
            href: "/career/meta-ads",
            type: "Freelance",
            description: "Manage both high and low volume Meta Ad campaigns to generate B2B leads. You must have your own dollar cards and include your past margin rates in your application."
        }
    ];

    return (
        <div className="min-h-screen w-full bg-[#fafaf9] text-[#44403c] flex flex-col font-sans relative overflow-x-hidden">
            <Header />

            <main className="flex-grow pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto w-full">
                <div className="mb-12 text-center md:text-left">
                    <h1 className="text-4xl md:text-5xl font-serif text-black mb-4 tracking-tight">Careers at Sajedar</h1>
                    <p className="text-lg text-[#57534e]">Join us in building and scaling the future of AI sales agents. Find a role below that fits your skill set and ambition.</p>
                </div>

                <div className="space-y-6">
                    {roles.map((role, idx) => (
                        <Link
                            key={idx}
                            href={role.href}
                            className="block group bg-white rounded-2xl shadow-sm border border-black/5 p-6 hover:shadow-md hover:border-black/10 transition-all duration-300"
                        >
                            <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                                <div className="flex-1">
                                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-3">
                                        <h2 className="text-2xl font-semibold text-black group-hover:text-amber-700 transition-colors">{role.title}</h2>
                                        <span className="inline-block bg-[#f5f5f4] px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-[#78716c] w-fit">
                                            {role.type}
                                        </span>
                                    </div>
                                    <p className="text-[#57534e] leading-relaxed">
                                        {role.description}
                                    </p>
                                </div>
                                <div className="hidden md:flex items-center self-center text-stone-300 group-hover:text-black transition-colors">
                                    <ArrowRight size={24} />
                                </div>
                            </div>
                            <div className="mt-4 md:hidden flex items-center text-sm font-semibold text-black hover:underline group-hover:text-amber-700">
                                View Details <ArrowRight size={16} className="ml-1" />
                            </div>
                        </Link>
                    ))}
                </div>

                <div className="mt-16 bg-black text-white p-8 rounded-xl text-center">
                    <h3 className="text-xl font-semibold mb-3">Don't see a fit?</h3>
                    <p className="mb-6 text-gray-300">
                        If you believe you can bring immense value to Sajedar through another avenue, pitch us directly.
                    </p>
                    <a
                        href="mailto:info@sajedar.com?subject=General Application"
                        className="inline-block bg-white text-black font-semibold px-8 py-3 rounded-full hover:bg-gray-100 transition-colors duration-200"
                    >
                        Send an Email
                    </a>
                </div>
            </main>

            <Footer />
        </div>
    );
}
