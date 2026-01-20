'use client';

import React from 'react';
import Header from '../../components/Header';
import { Footer } from '../../components/sections';

const tools = [
    {
        title: 'ROI Calculator',
        content: `Build a simple frontend widget where a business owner inputs their Average Daily Inquiries and Support Staff Hourly Rate, and the site instantly calculates: You could save NPR [Amount] per month with Sajedar.`,
    },
    {
        title: 'Customer Support Cost Estimator',
        content: `Similar to the ROI calculator, but focused on hiring vs. automating.

Inputs: Number of support staff, monthly salary, hours of operation.

Outputs: You are spending NPR 50,000/month for only 8 hours of coverage. An AI agent gives you 24/7 coverage for [Your Price].`,
    },
    {
        title: 'Social Media Caption Spacer',
        content: `Instagram and Facebook often collapse line breaks, making long captions look messy.

The Function: A text box where users type their caption with paragraphs. The tool uses JavaScript to replace normal spaces with invisible separator characters (Unicode zero-width spaces) that force the platform to keep the formatting.

Why it works: Social media managers love this tool.`,
    },
    {
        title: 'E-commerce Profit & Break-even Calculator',
        content: `Helping your e-commerce clients (like Doko Store or Gecko Gears) understand their real numbers.

The Function: User inputs:

Product Cost (CPP)
Shipping Cost
Average Ad Cost per Purchase (CPA)
Selling Price

Output: A dynamic chart showing their Net Profit and Margin %.

Visuals: Use a library like Chart.js or simply CSS bars to visualize the costs eating into the profit.`,
    },
    {
        title: 'UTM Parameter Builder',
        content: `Since you run Facebook Ads, your clients need to know where traffic comes from.

The Function: A form where they enter their website URL, Campaign Source (e.g., facebook), and Medium (e.g., cpc).

Output: It generates a clean tracking link: sajedar.com?utm_source=facebook&utm_medium=cpc`,
    },
    {
        title: 'Reverse VAT Calculator',
        content: `Nepali business owners constantly struggle with inclusive vs. exclusive VAT pricing (13%).

The Function:
Input: NPR 1,500 (Total Customer Price)
Output: Breaks it down instantly → Base Price: 1,327.43 | VAT (13%): 172.57

Why it works: It solves a daily annoyance for retailers.

Tech: Simple JavaScript arithmetic (Price / 1.13).`,
    },
    {
        title: 'Nepali Business Date Converter (AD ↔ BS)',
        content: `In Nepal, government tax filing is in Bikram Sambat (BS), but digital systems (CRM, Ads) work in Gregorian (AD).

The Function: A clean UI to convert English dates to Nepali dates and vice-versa.

Why it works: Every accountant and business owner needs this. If they bookmark your site for this tool, they see your AI Automation offers every time they use it.

Tech: Use a lightweight JavaScript library like nepali-date-converter or bikram-sambat that runs entirely in the browser.`,
    },
    {
        title: 'QR Code Studio',
        content: `Instead of just a link, generate the QR code right there.

The Function: User types a URL, WiFi password, or vCard info.

Output: An instant QR code image they can download.

Tech: Use the qrcode.react (or similar) library. It draws the QR on the HTML Canvas element without sending data to any server.`,
    },
    {
        title: 'Privacy Policy Generator',
        content: `The Problem: To run Facebook Lead Ads (which many of your clients want), Facebook requires a link to a Privacy Policy. Most small Nepali businesses do not have one and get stuck.

The Tool: A Fill-in-the-blanks form.

Inputs: Company Name, Email, Address.

Output: A legally generic privacy policy text tailored for standard digital marketing.

Feature: They can Copy Text or you can even host it on a dynamic URL like sajedar.com/policy/view?data=... (base64 encoded) so they have a link to paste into Facebook immediately.`,
    },
    {
        title: 'True Discount Calculator',
        content: `The Problem: Shop owners (like your contacts at Doko Store or Gecko Gears) often run Buy 2 Get 1 Free promos without realizing how much margin they are losing.

The Tool:

Input: Buy [ 2 ] Get [ 1 ] Free
Output: You are giving a 33.3% Discount.

Input: Flat NPR 500 off on NPR 2000 item.
Output: That is a 25% discount.

Why it works: It prevents them from accidentally bankrupting themselves with bad offers.`,
    },
    {
        title: 'Browser-Based Image Watermarker',
        content: `The Problem: Nepali online sellers send product photos on WhatsApp or Instagram, and competitors steal them.

The Tool:

Action: User uploads a product photo.
Input: Types their brand name (e.g., Ashwi Furnitures) or uploads a logo.

Result: The tool overlays the watermark on the image using HTML Canvas.

Download: They get the protected image instantly.`,
    },
    {
        title: 'Wi-Fi QR Card Creator',
        content: `The Problem: What is the Wi-Fi password is the most asked question in cafes and offices.

The Tool:

Input: Network Name (SSID) and Password.

Output: A printable card design (clean PDF or Image) with a QR code. When scanned, it connects the phone to Wi-Fi automatically.

The Hook: A subtle Automate your reception with Sajedar.com branding at the bottom of the printable card.`,
    },
    {
        title: 'Instagram Grid Splitter',
        content: `Target: Fashion brands (like Gecko Gears or Osha Clothing) or Furniture stores.

The Problem: Brands want that aesthetic profile where one large image is split into 3, 6, or 9 separate square posts. Doing this manually in Photoshop is slow.

The Tool:

Upload: User drags in a high-res photo.
Select: Choose layout (3x1, 3x2, 3x3).
Process: JavaScript (Canvas API) slices the image instantly.
Download: Downloads a .zip file with the numbered images ready to post.

Why it fits: It attracts the exact marketing teams you want to sell chatbots to.`,
    },
    {
        title: 'Color Palette Extractor',
        content: `Target: Business owners trying to design their own Canva posts or website.

The Problem: I have my logo, but I do not know the exact hex code for my brand color to use on my website buttons.

The Tool:

Action: Upload their logo file.
Result: The tool analyzes the image pixels and extracts the dominant 3–4 Hex Color Codes (e.g., #FF5733).
Copy: One-click copy for them to paste into Canva or n8n.`,
    },
    {
        title: 'Loan / EMI Calculator',
        content: `Target: Real Estate Agents and Auto Dealers.

The Problem: Customers constantly ask How much per month for a house or car.

The Tool:

Inputs: Loan Amount, Interest Rate (default to current Nepal bank rates like 11–13%), Tenure (Years).
Output: Monthly EMI breakdown.

Feature: Add a Pre-payment toggle to show how much they save if they pay extra. This smart financial advice builds trust.`,
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
                    {tools.map((tool, i) => (
                        <div
                            key={i}
                            className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8"
                        >
                            <span className="inline-block mb-3 px-3 py-1 text-sm font-semibold text-emerald-400 bg-emerald-400/10 rounded-full">
                                Tool
                            </span>
                            <h3 className="text-xl font-bold text-white mb-4">
                                {tool.title}
                            </h3>
                            <p className="text-gray-300 whitespace-pre-line">
                                {tool.content}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            <Footer />
        </div>
    );
}
