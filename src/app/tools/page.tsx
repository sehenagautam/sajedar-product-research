'use client';

import React from 'react';
import Link from 'next/link';
import Header from '../../components/Header';
import { Footer } from '../../components/sections';

const tools = [
    // --- 1. VISUAL CONTENT TOOLS (New) ---
    {
        title: 'Furniture Prompt Creator',
        content: `Generate high-quality, design-preserving image prompts for AI generators. Ensure your furniture keeps its canonical design while changing scenes.`,
        link: '/tools/furniture-prompt-creator',
    },
    {
        title: 'Clothes Prompt Generator',
        content: `Create clothing image prompts from a reference image. Preserve garment design while changing scene, model, and lighting.`,
        link: '/tools/clothes-prompt-generator',
    },
    {
        title: 'Furniture Video Director',
        content: `Director mode for multi-scene furniture video campaigns. Generate consistent video prompts for your products.`,
        link: '/tools/furniture-video-prompt-creator',
    },
    {
        title: 'Facebook Ad Mockup Generator',
        content: `Stop guessing. Upload your image and text to see exactly how your ad will look on the Facebook News Feed before you spend money.`,
        link: '/tools/facebook-ad-mockup',
    },
    {
        title: 'Social Media Image Cropper',
        content: `Resize your images perfectly for Facebook Covers, Stories, and Posts without losing quality. Pre-set dimensions included.`,
        link: '/tools/image-cropper',
    },

    // --- 2. DIRECT-TO-CHAT TOOLS (New) ---
    {
        title: 'WhatsApp Link Generator',
        content: `Essential for businesses running Click-to-WhatsApp ads. Create instant wa.me links and QR codes with pre-filled messages to reduce customer friction.`,
        link: '/tools/whatsapp-link-generator',
    },
    {
        title: 'Messenger Ref URL Builder',
        content: `Essential for advanced agent campaigns. Generate deep links to track exactly which ad sent a user to your bot and trigger specific conversation flows.`,
        link: '/tools/messenger-ref-url-builder',
    },

    // --- 3. ORIGINAL & CALCULATOR TOOLS ---
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
    {
        title: 'WhatsApp Link Generator',
        content: `Create instant Click-to-WhatsApp links with pre-filled messages.
Perfect for Facebook Ads, Instagram bios, QR codes, and offline posters.`,
        link: '/tools/whatsapp-link-generator',
    },
    {
        title: 'Messenger Ref URL Builder',
        content: `Generate deep m.me links with tracking parameters.
Send users from specific ads or posts directly into the correct agent flow.`,
        link: '/tools/messenger-ref-url-builder',
    },
    {
        title: 'Facebook Ad Mockup Generator',
        content: `Preview exactly how your Facebook ad or post will look on mobile before publishing.
Eliminate the fear of cropped text, awkward layouts, and wasted ad spend.`,
        link: '/tools/facebook-ad-mockup',
    },
    {
        title: 'Social Media Image Cropper',
        content: `Crop once, post everywhere.
Resize images perfectly for Facebook posts, covers, events, and stories using exact platform dimensions.`,
        link: '/tools/image-cropper',
    },
    {
        title: 'Social Media Caption Spacer',
        content: `Fix broken Facebook & Instagram captions.
Preserve line breaks and paragraph spacing so your text doesn’t collapse into one big block.`,
        link: '/tools/caption-spacer',
    },
    {
        title: 'Unicode Bold Text Generator',
        content: `Make your posts stand out in the feed.
Convert normal text into 𝐁𝐨𝐥𝐝 𝐔𝐧𝐢𝐜𝐨𝐝𝐞 text that works across Facebook, Instagram, and LinkedIn.`,
        link: '/tools/bold-text-generator',
    },
    {
        title: 'Engagement Rate Calculator',
        content: `Instantly measure how well your posts perform.
Calculate engagement rate using likes, comments, shares, and follower count — no analytics tools needed.`,
        link: '/tools/engagement-rate-calculator',
    },
    {
        title: 'ROAS Estimator',
        content: `Estimate your Return on Ad Spend before scaling.
Project clicks, sales, revenue, and ROAS using your ad budget and funnel metrics.`,
        link: '/tools/roas-estimator',
    },
    {
        title: 'Facebook Pixel Event Code Generator',
        content: `Generate accurate Facebook Pixel event codes in seconds.
Safely create Purchase, Lead, AddToCart, and other conversion tracking scripts without touching complex code.`,
        link: '/tools/facebook-pixel-generator',
    },
    {
        title: 'JSON Payload Formatter & Validator',
        content: `Debug your n8n workflows instantly. Validate, pretty-print, or minify your JSON payloads to fix syntax errors before running your automation.`,
        link: '/tools/json-formatter',
    },
    {
        title: 'JSON String Escaper',
        content: `Solves the frustration of nested JSON. Instantly escape quote marks and backslashes for complex API calls and agent payloads.`,
        link: '/tools/json-escaper',
    },
    {
        title: 'Random Comment Picker',
        content: `Running a giveaway? Paste your list of entrants and let the tool fairly pick a random winner. High viral potential for your contests.`,
        link: '/tools/comment-picker',
    },
    {
        title: 'Hashtag Shuffler & Mixer',
        content: `Avoid the algorithm penalty. Randomize your hashtag order and select a fresh subset every time you post to prevent being flagged as spam.`,
        link: '/tools/hashtag-shuffler',
    },
    {
        title: 'Facebook Messenger JSON Builder',
        content: `Stop writing code by hand. Visually build "Generic Templates" (Cards) with images and buttons, then get the JSON for ManyChat or n8n instantly.`,
        link: '/tools/messenger-json-builder',
    },
    {
        title: 'WhatsApp Template Validator',
        content: `Don't let Meta reject your campaign. Validate your message format, character limits, and variable syntax ({{1}}) in real-time before submitting.`,
        link: '/tools/whatsapp-template-validator',
    },
    {
        title: '"Cost of Ignoring Customers" Calculator',
        content: `You might be losing money while you sleep. Calculate the revenue you miss by not having 24/7 instant replies based on your message volume.`,
        link: '/tools/missed-revenue-calculator',
    },
    {
        title: 'Staff Salary vs. Chatbot Calculator',
        content: `See the savings. Compare the yearly cost of human support staff versus automating your inbox with a Sajedar AI Agent.`,
        link: '/tools/salary-vs-bot-calculator',
    },
    {
        title: 'Campaign Naming Convention Generator',
        content: `Stop the ad account chaos. Generate standardized campaign names (e.g., CONV_JAN26_COLD) to make reporting easy and professional.`,
        link: '/tools/campaign-naming',
    },
    {
        title: 'QR Code Generator with Logo',
        content: `Create professional QR codes for your business. Add your brand logo to the center instantly and download high-quality images.`,
        link: '/tools/qr-code-logo',
    },
    {
        title: 'Cron Expression Generator',
        content: `Schedule tasks in n8n or Zapier easily. Select "Every Tuesday at 4 PM" and get the correct Cron syntax (0 16 * * 2) instantly.`,
        link: '/tools/cron-generator',
    },
    {
        title: '"Spintax" Generator & Tester',
        content: `Make your agent sound human. Test your message variations like {Hello|Hi} {there|friend} to ensure they sound natural before going live.`,
        link: '/tools/spintax-tester',
    },
    {
        title: 'Nepal Phone Number Sanitizer',
        content: `Clean messy contact lists instantly. Format numbers to 97798XXXXXXXX for WhatsApp broadcasting and remove duplicates automatically.`,
        link: '/tools/phone-sanitizer',
    },
    {
        title: 'Secure CSV to JSON Converter',
        content: `Convert spreadsheets to JSON for webhooks. 100% private and browser-based—your data never leaves your computer.`,
        link: '/tools/csv-to-json',
    },
    {
        title: 'Fake Facebook Lead Ad Payload Generator',
        content: `Testing n8n or Zapier? Generate a dummy "Lead Ad" webhook JSON with one click. Includes Name, Email, and Phone fields ready for mapping.`,
        link: '/tools/lead-ad-payload-generator',
    },
    {
        title: 'Dummy Image Placeholder Generator',
        content: `Need a placeholder for your website layout? Generate solid color blocks with custom dimensions (e.g., 600x400) and download them instantly.`,
        link: '/tools/dummy-image-generator',
    },
    {
        title: 'Facebook Cover Safe Zone Checker',
        content: `Don't let your logo get cut off. Overlay a "danger zone" map on your cover photo to see exactly what gets hidden on Mobile vs. Desktop.`,
        link: '/tools/facebook-cover-checker',
    },
    {
        title: '"Break-Even" ROAS Calculator',
        content: `Stop burning money. Calculate the exact Return On Ad Spend (ROAS) you need to hit just to cover your product costs and start making a profit.`,
        link: '/tools/break-even-roas',
    },
    {
        title: 'Sajedar Prompt Architect',
        content: `Build scientifically optimized prompts for Midjourney & Stable Diffusion. Uses a "Slot-Filling Engine" to ensure perfect syntax, lighting, and composition every time.`,
        link: '/tools/prompt-builder',
    },
    {
        title: 'Messenger Mockup Studio',
        content: `Draft, visualize, and export "perfect" agent conversations in seconds. Ideal for client proposals and portfolio showcases.`,
        link: '/tools/messenger-mockup',
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

                        // If a link exists, wrap it in Next.js Link
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
