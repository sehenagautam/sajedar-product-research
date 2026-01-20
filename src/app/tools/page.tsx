'use client';

import React from 'react';
import Link from 'next/link';
import Header from '../../components/Header';
import { Footer } from '../../components/sections';

const tools = [
    {
        title: 'ROI Calculator',
        content: `Calculate how much money you can save instantly by automating your customer support with Sajedar AI.`,
        link: '/tools/roi-calculator',
    },
    {
        title: 'Customer Support Cost Estimator',
        content: `Compare the cost of manual support staff versus automating with AI. See how much you pay for limited hours vs 24/7 AI coverage.`,
        link: '/tools/support-cost-estimator',
    },
    {
        title: 'Social Media Caption Spacer',
        content: `Stop Instagram and Facebook from collapsing your line breaks. Create clean, perfectly formatted captions that keep your paragraphs intact.`,
        link: '/tools/caption-spacer',
    },
    {
        title: 'E-commerce Profit & Break-even Calculator',
        content: `Understand your real numbers. Input your product, shipping, and ad costs to visualize exactly how much profit you make on every sale.`,
        link: '/tools/ecommerce-calculator',
    },
    {
        title: 'UTM Parameter Builder',
        content: `Generate clean tracking links for your marketing campaigns. Easily add Source, Medium, and Campaign parameters to track exactly where your traffic comes from.`,
        link: '/tools/utm-builder',
    },
    {
        title: 'Reverse VAT Calculator',
        content: `Instantly calculate the Base Price and VAT amount (13%) from a total inclusive price. A daily essential for Nepali billing and invoicing.`,
        link: '/tools/vat-calculator',
    },
    {
        title: 'Nepali Business Date Converter (AD ↔ BS)',
        content: `Seamlessly convert dates between English (AD) and Nepali (BS) calendars. Essential for aligning digital systems with government tax filings.`,
        link: '/tools/date-converter',
    },
    {
        title: 'QR Code Studio',
        content: `Generate instant QR codes for your website URL, WiFi network, or digital business card (vCard). Download high-quality images directly from your browser.`,
        link: '/tools/qr-code-studio',
    },
    {
        title: 'Privacy Policy Generator',
        content: `Generate a compliant Privacy Policy for Facebook Lead Ads instantly. Includes a free hosted link feature so you don't need a website to run ads.`,
        link: '/tools/privacy-policy-generator',
    },
    {
        title: 'True Discount Calculator',
        content: `Stop guessing your margins. Instantly calculate the real percentage discount of "Buy X Get Y Free" offers or flat cash discounts.`,
        link: '/tools/discount-calculator',
    },
    {
        title: 'Browser-Based Image Watermarker',
        content: `Protect your product photos from competitors. Easily overlay your brand name or logo on your images and download them instantly.`,
        link: '/tools/image-watermarker',
    },
    {
        title: 'Wi-Fi QR Card Creator',
        content: `Stop answering "What's the password?" Create a professional, printable Wi-Fi login card for your office or cafe in seconds.`,
        link: '/tools/wifi-card-creator',
    },
    {
        title: 'Instagram Grid Splitter',
        content: `Create aesthetic Instagram profiles instantly. Slice any high-res photo into a 3x1, 3x2, or 3x3 grid of perfect squares ready to post.`,
        link: '/tools/instagram-grid-splitter',
    },
    {
        title: 'Color Palette Extractor',
        content: `Analyze your logo to extract the exact 3-4 dominant hex color codes. Perfect for keeping your Canva designs and website on-brand.`,
        link: '/tools/color-extractor',
    },
    {
        title: 'Loan / EMI Calculator',
        content: `Essential for Real Estate and Auto sales. Calculate monthly EMIs and show clients how much they save with smart pre-payment strategies.`,
        link: '/tools/loan-calculator',
    },
];

export default function ToolsPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-[#18181b] via-[#23243a] to-[#1a1a2e] flex flex-col">
            <Header />

            <div className="max-w-7xl mx-auto px-4 py-20 flex-grow">
                <div className="text-center mb-16">
                    <h1 className="text-5xl font-serif font-bold text-white mb-6">
                        Tools
                    </h1>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        Practical tools built to solve real business problems and introduce automation naturally.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {tools.map((tool, i) => {
                        const CardContent = (
                            <div className={`bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8 h-full transition-all duration-300 ${tool.link ? 'hover:border-emerald-500/50 hover:bg-white/10 cursor-pointer group hover:shadow-lg hover:shadow-emerald-500/10' : ''}`}>
                                <span className="inline-block mb-3 px-3 py-1 text-sm font-semibold text-emerald-400 bg-emerald-400/10 rounded-full">
                                    Tool
                                </span>
                                <h3 className={`text-xl font-bold text-white mb-4 ${tool.link ? 'group-hover:text-emerald-400 transition-colors' : ''}`}>
                                    {tool.title}
                                </h3>
                                <p className="text-gray-300 whitespace-pre-line">
                                    {tool.content}
                                </p>
                            </div>
                        );

                        return tool.link ? (
                            <Link href={tool.link} key={i} className="block h-full">
                                {CardContent}
                            </Link>
                        ) : (
                            <div key={i} className="h-full">
                                {CardContent}
                            </div>
                        );
                    })}
                </div>
            </div>

            <Footer />
        </div>
    );
}