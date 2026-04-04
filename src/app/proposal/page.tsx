import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { TrackEventOnMount } from '../../components/analytics/TrackEventOnMount';

export const metadata: Metadata = {
  title: 'Service Plans & Pricing - Sajedar',
  description: 'Transparent pricing for AI-powered Facebook Messenger sales agents. Commission-based and standardized plans with free trials.',
  alternates: { canonical: '/proposal' },
};

function daysUntil(dateStr: string): number {
  const target = new Date(dateStr);
  const now = new Date();
  const diff = target.getTime() - now.getTime();
  return Math.max(0, Math.ceil(diff / (1000 * 60 * 60 * 24)));
}

export default function ProposalPage() {
  const plusDays = daysUntil('2026-06-01');
  const proDays = daysUntil('2026-08-01');

  return (
    <div className="min-h-screen w-full bg-[#fafaf9] font-sans text-[#44403c]" style={{ fontSize: '16px' }}>
      <TrackEventOnMount eventName="proposal_view" params={{ source_page: '/proposal' }} />

      {/* Header */}
      <header className="w-full border-b border-stone-200 bg-[#fafaf9]">
        <div className="max-w-[860px] mx-auto px-6 py-5 flex items-center justify-between">
          <Link href="/" className="text-[#292524] font-semibold text-lg tracking-tight hover:text-emerald-700 transition-colors">
            Sajedar
          </Link>
          <Link href="/" className="text-[#78716c] hover:text-[#292524] transition-colors text-sm">
            ← Back to Home
          </Link>
        </div>
      </header>

      {/* Title */}
      <div className="w-full bg-[#fafaf9] pt-16 pb-10 px-6">
        <div className="max-w-[860px] mx-auto">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#a8a29e] mb-3">Service Proposal</p>
          <h1 className="text-[2rem] md:text-[2.5rem] font-bold text-[#1c1917] leading-tight mb-4" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif' }}>
            Plans & Pricing
          </h1>
          <p className="text-[#57534e] text-base leading-relaxed max-w-xl">
            AI sales agents for Facebook Messenger that showcase products, engage customers, and convert conversations into confirmed orders - automatically.
          </p>
        </div>
      </div>

      <div className="max-w-[860px] mx-auto px-6 pb-20">

        {/* Platform & Current Scope */}
        <section className="mb-14">
          <div className="bg-white rounded-lg border border-stone-200 p-6">
            <h2 className="text-sm font-semibold uppercase tracking-wide text-[#292524] mb-3">Current Scope</h2>
            <ul className="space-y-2 text-sm text-[#44403c]">
              <li className="flex items-start gap-2.5">
                <span className="text-emerald-600 mt-0.5 text-xs">●</span>
                <span>Supported platform: <strong>Facebook Messenger</strong></span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-emerald-600 mt-0.5 text-xs">●</span>
                <span>Image &amp; voice message understanding included in all plans</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-emerald-600 mt-0.5 text-xs">●</span>
                <span>All setup is performed manually by our team - no self-service configuration required</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-[#a8a29e] mt-0.5 text-xs">●</span>
                <span className="text-[#78716c]">Per-conversation pricing is subject to revision as infrastructure costs evolve</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Divider */}
        <hr className="border-stone-200 mb-14" />

        {/* Commission-Based Plan */}
        <section className="mb-14">
          <div className="flex items-center gap-3 mb-1">
            <h2 className="text-xl font-bold text-[#1c1917]" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif' }}>
              Commission-Based Partnership
            </h2>
            <span className="px-2.5 py-0.5 bg-emerald-50 text-emerald-700 rounded text-xs font-semibold border border-emerald-200">
              Available
            </span>
          </div>
          <p className="text-sm text-[#78716c] mb-6">Revenue-sharing model - we grow when you grow.</p>

          <div className="bg-white rounded-lg border border-stone-200 p-6 space-y-4">
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-bold text-[#1c1917]">5%</span>
              <span className="text-sm text-[#78716c]">of sales revenue generated through the agent</span>
            </div>
            <ul className="space-y-2.5 text-sm text-[#44403c]">
              <li className="flex items-start gap-2.5">
                <span className="text-emerald-600 mt-0.5">✓</span>
                <span>No setup fees - we invest our time upfront</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-emerald-600 mt-0.5">✓</span>
                <span>Either party may cancel at any time after clearing outstanding dues up to the cancellation date</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-emerald-600 mt-0.5">✓</span>
                <span>We work as an extension of your team - aligned incentives, unlimited scope</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-emerald-600 mt-0.5">✓</span>
                <span>Best suited for trustworthy, long-term partnerships</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Divider */}
        <hr className="border-stone-200 mb-14" />

        {/* Standardized Plans */}
        <section className="mb-14">
          <h2 className="text-xl font-bold text-[#1c1917] mb-1" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif' }}>
            Standardized Plans
          </h2>
          <p className="text-sm text-[#78716c] mb-8">Fixed pricing with free trial conversations. Setup fee is charged only after the trial.</p>

          <div className="space-y-6">

            {/* Basic Plan */}
            <div className="bg-white rounded-lg border border-stone-200 p-6">
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <h3 className="text-lg font-bold text-[#1c1917]">Basic</h3>
                <span className="text-xs text-[#78716c] font-medium">Single Product</span>
                <span className="px-2.5 py-0.5 bg-emerald-50 text-emerald-700 rounded text-xs font-semibold border border-emerald-200">
                  Available
                </span>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <div>
                    <p className="text-xs uppercase tracking-wide text-[#a8a29e] font-semibold mb-1">Products</p>
                    <p className="text-sm text-[#44403c]">1 product - up to 5 variants (styles)</p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wide text-[#a8a29e] font-semibold mb-1">Trial</p>
                    <p className="text-sm text-[#44403c]">50 conversations, free of charge</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div>
                    <p className="text-xs uppercase tracking-wide text-[#a8a29e] font-semibold mb-1">Setup Fee</p>
                    <p className="text-sm text-[#44403c]">Rs 4,000 <span className="text-[#a8a29e]">- charged after trial only</span></p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wide text-[#a8a29e] font-semibold mb-1">Per Conversation</p>
                    <p className="text-sm text-[#44403c]">Rs 2</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Plus Plan */}
            <div className="bg-white rounded-lg border border-stone-200 p-6 relative">
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <h3 className="text-lg font-bold text-[#1c1917]">Plus</h3>
                <span className="text-xs text-[#78716c] font-medium">Up to 10 Products</span>
                <span className="px-2.5 py-0.5 bg-stone-100 text-[#78716c] rounded text-xs font-semibold border border-stone-200">
                  June 2026 · {plusDays} days
                </span>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <div>
                    <p className="text-xs uppercase tracking-wide text-[#a8a29e] font-semibold mb-1">Products</p>
                    <p className="text-sm text-[#44403c]">10 products - 5 variants each</p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wide text-[#a8a29e] font-semibold mb-1">Trial</p>
                    <p className="text-sm text-[#44403c]">50 conversations, free of charge</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div>
                    <p className="text-xs uppercase tracking-wide text-[#a8a29e] font-semibold mb-1">Setup Fee</p>
                    <p className="text-sm text-[#44403c]">Rs 8,000 <span className="text-[#a8a29e]">- charged after trial only</span></p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wide text-[#a8a29e] font-semibold mb-1">Per Conversation</p>
                    <p className="text-sm text-[#44403c]">Rs 3</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Pro Plan */}
            <div className="bg-white rounded-lg border border-stone-200 p-6 relative">
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <h3 className="text-lg font-bold text-[#1c1917]">Pro</h3>
                <span className="text-xs text-[#78716c] font-medium">Unlimited Products</span>
                <span className="px-2.5 py-0.5 bg-stone-100 text-[#78716c] rounded text-xs font-semibold border border-stone-200">
                  August 2026 · {proDays} days
                </span>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <div>
                    <p className="text-xs uppercase tracking-wide text-[#a8a29e] font-semibold mb-1">Products</p>
                    <p className="text-sm text-[#44403c]">Website database connection - thousands of products</p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wide text-[#a8a29e] font-semibold mb-1">Trial</p>
                    <p className="text-sm text-[#44403c]">100 conversations, free of charge</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div>
                    <p className="text-xs uppercase tracking-wide text-[#a8a29e] font-semibold mb-1">Setup Fee</p>
                    <p className="text-sm text-[#44403c]">Rs 50,000 <span className="text-[#a8a29e]">- charged after trial only</span></p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wide text-[#a8a29e] font-semibold mb-1">Per Conversation</p>
                    <p className="text-sm text-[#44403c]">Rs 4 <span className="text-[#a8a29e]">- subject to future adjustment</span></p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wide text-[#a8a29e] font-semibold mb-1">Includes</p>
                    <p className="text-sm text-[#44403c]">Dedicated custom dashboard</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* Divider */}
        <hr className="border-stone-200 mb-14" />

        {/* Enterprise */}
        <section className="mb-14">
          <div className="flex items-center gap-3 mb-1">
            <h2 className="text-xl font-bold text-[#1c1917]" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif' }}>
              Enterprise
            </h2>
            <span className="px-2.5 py-0.5 bg-emerald-50 text-emerald-700 rounded text-xs font-semibold border border-emerald-200">
              Available
            </span>
          </div>
          <p className="text-sm text-[#78716c] mb-6">For organisations requiring bespoke solutions at scale.</p>

          <div className="bg-white rounded-lg border border-stone-200 p-6">
            <div className="flex items-baseline gap-2 mb-5">
              <span className="text-sm text-[#78716c]">Starting at</span>
              <span className="text-2xl font-bold text-[#1c1917]">Rs 10,00,000</span>
              <span className="text-sm text-[#78716c]">setup</span>
            </div>
            <ul className="space-y-2.5 text-sm text-[#44403c]">
              <li className="flex items-start gap-2.5">
                <span className="text-emerald-600 mt-0.5">✓</span>
                <span>Contract-based engagement with defined SLAs</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-emerald-600 mt-0.5">✓</span>
                <span>Dedicated dashboards and reporting</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-emerald-600 mt-0.5">✓</span>
                <span>Advanced AI analytics and performance insights</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-emerald-600 mt-0.5">✓</span>
                <span>Open to custom integrations and additional capabilities</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Divider */}
        <hr className="border-stone-200 mb-14" />

        {/* Agent Capabilities */}
        <section className="mb-14">
          <h2 className="text-xl font-bold text-[#1c1917] mb-6" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif' }}>
            Agent Capabilities
          </h2>
          <div className="bg-white rounded-lg border border-stone-200 p-6">
            <ul className="grid md:grid-cols-2 gap-x-8 gap-y-2.5 text-sm text-[#44403c]">
              {[
                '24/7 automated responses',
                'Payment collection',
                'Human takeover support',
                'Ad campaign synchronisation',
                'Admin-defined negotiation rules',
                'Native rendering on Meta platforms',
                'Image & voice message understanding',
                'Multi-language support',
                'Labeling in Meta Business Suite'
              ].map((capability) => (
                <li key={capability} className="flex items-start gap-2.5">
                  <span className="text-emerald-600 mt-0.5">✓</span>
                  <span>{capability}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Setup */}
        <section className="mb-14">
          <div className="bg-stone-50 rounded-lg border border-stone-200 p-6">
            <p className="text-sm text-[#44403c]">
              <strong className="text-[#292524]">Setup Duration:</strong>{' '}
              Typically one to three business days. All configuration is handled by our team - no technical involvement required from your side.
            </p>
          </div>
        </section>

        {/* Footer / Contact */}
        <footer className="border-t border-stone-200 pt-12 pb-4">
          <div className="text-center mb-8">
            <p className="text-sm text-[#78716c] mb-6">
              Questions about a plan, or want to discuss a custom arrangement?
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <a
                href="https://wa.me/9779860479751"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#25D366] hover:bg-[#1ebe5b] text-white rounded-lg transition-colors text-sm font-semibold"
              >
                WhatsApp
              </a>
              <a
                href="https://www.linkedin.com/in/dimanjan/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 border border-stone-300 text-[#44403c] hover:border-[#0077b5] hover:text-[#0077b5] rounded-lg transition-colors text-sm font-semibold"
              >
                LinkedIn
              </a>
            </div>
          </div>
          <p className="text-center text-xs text-[#a8a29e]">
            © {new Date().getFullYear()} Sajedar. All rights reserved.
          </p>
        </footer>

      </div>
    </div>
  );
}
