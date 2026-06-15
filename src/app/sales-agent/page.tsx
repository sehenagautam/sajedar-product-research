'use client';

import { useEffect, useState } from 'react';
import { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';

import Header from '../../components/Header';

import {
  HeroSection,
  AgenticFlowDiagram,
  ImageRecognitionSection,
  VoiceCinematicSection,
  FeaturesSection,
  IntelligentProfilingSection,
  AIAsASalesman,
  IntegrationSection,
  FAQSection,
  ContactSection,
  Footer
} from '../../components/sections';

import '@fontsource/dm-serif-display';
import '@fontsource/inter';

function daysUntil(dateStr: string): number {
  const target = new Date(dateStr);
  const now = new Date();
  const diff = target.getTime() - now.getTime();
  return Math.max(0, Math.ceil(diff / (1000 * 60 * 60 * 24)));
}

function PricingSection() {
  const plusDays = daysUntil('2026-07-01');
  const whatsappLink = (msg: string) => `https://wa.me/9779860479751?text=${encodeURIComponent(msg)}`;

  return (
    <section className="w-full bg-[#fafaf9] px-6 py-20">
      <div className="max-w-[860px] mx-auto">
        {/* Section Header */}
        <div className="mb-12">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#a8a29e] mb-3">Service Proposal</p>
          <h2 className="text-[2rem] md:text-[2.5rem] font-bold text-[#1c1917] leading-tight mb-4" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif' }}>
            Plans &amp; Pricing
          </h2>
        </div>

        {/* Standardized Plans */}
        <div className="mb-14">
          <h3 className="text-xl font-bold text-[#1c1917] mb-1" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif' }}>
            Standardized Plans
          </h3>
          <p className="text-sm text-[#78716c] mb-8">Fixed pricing with free trial conversations. Setup fee is charged only after the trial.</p>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Basic Plan */}
            <div className="bg-emerald-50 rounded-2xl p-6 flex flex-col transform md:scale-105 relative z-10">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-emerald-500 text-white rounded-full text-[10px] font-black uppercase tracking-widest shadow-lg">
                Recommended
              </div>
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h4 className="text-xl font-bold text-[#1c1917]">Basic</h4>
                  <p className="text-xs text-[#57534e] font-medium mt-1">Single Product</p>
                </div>
                <span className="px-2.5 py-0.5 bg-emerald-100 text-emerald-700 rounded-full text-[10px] font-bold border border-emerald-200 uppercase tracking-wider">
                  Available
                </span>
              </div>
              
              <div className="mb-6">
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-black text-[#1c1917]">Rs 1.8</span>
                  <span className="text-xs font-bold text-[#a8a29e] uppercase tracking-widest">/ Person</span>
                </div>
                <p className="text-[10px] font-bold text-[#a8a29e] mt-1 uppercase tracking-tight">for any number of replies</p>
              </div>

              <div className="space-y-4 flex-1">
                <div className="pt-4 border-t border-emerald-200/50">
                  <p className="text-[10px] uppercase tracking-widest text-[#a8a29e] font-black mb-2">Scope</p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-xs text-[#44403c]">
                      <span className="text-emerald-500 font-bold">✓</span>
                      <span>1 product &ndash; 5 variants</span>
                    </li>
                    <li className="flex items-start gap-2 text-xs text-[#44403c]">
                      <span className="text-emerald-500 font-bold">✓</span>
                      <span>50 trial conversations</span>
                    </li>
                  </ul>
                </div>

                <div className="pt-4 border-t border-emerald-200/50">
                  <p className="text-[10px] uppercase tracking-widest text-[#a8a29e] font-black mb-2">Fees</p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-xs text-[#44403c]">
                      <span className="text-emerald-600 font-bold">●</span>
                      <span>Rs 4,000 setup (after trial)</span>
                    </li>
                    <li className="flex items-start gap-2 text-xs text-[#44403c]">
                      <span className="text-emerald-600 font-bold">●</span>
                      <span>Rs 500 per product change</span>
                    </li>
                  </ul>
                </div>
              </div>

              <a 
                href={whatsappLink("Hi Sajedar! I am interested in the Basic Sales Agent plan.")}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 flex items-center justify-center gap-2 w-full py-3 bg-stone-900 text-white rounded-xl font-bold text-sm transition-colors hover:bg-stone-800"
              >
                Talk on WhatsApp
              </a>
            </div>

            {/* Plus Plan */}
            <div className="bg-[#fafaf9] rounded-2xl p-6 flex flex-col">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h4 className="text-xl font-bold text-[#1c1917]">Plus</h4>
                  <p className="text-xs text-[#78716c] font-medium mt-1">Up to 10 Products</p>
                </div>
                <span className="px-2.5 py-0.5 bg-stone-100 text-[#78716c] rounded-full text-[10px] font-bold border border-stone-200 uppercase tracking-wider">
                  July 2026
                </span>
              </div>

              <div className="mb-6">
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-black text-[#1c1917]">Rs 2.5</span>
                  <span className="text-xs font-bold text-[#a8a29e] uppercase tracking-widest">/ Person</span>
                </div>
                <p className="text-[10px] font-bold text-[#a8a29e] mt-1 uppercase tracking-tight">for any number of replies</p>
              </div>

              <div className="space-y-4 flex-1">
                <div className="pt-4 border-t border-stone-200/50">
                  <p className="text-[10px] uppercase tracking-widest text-[#a8a29e] font-black mb-2">Scope</p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-xs text-[#44403c]">
                      <span className="text-emerald-500 font-bold">✓</span>
                      <span>10 products &ndash; 5 variants each</span>
                    </li>
                    <li className="flex items-start gap-2 text-xs text-[#44403c]">
                      <span className="text-emerald-500 font-bold">✓</span>
                      <span>50 trial conversations</span>
                    </li>
                  </ul>
                </div>

                <div className="pt-4 border-t border-stone-200/50">
                  <p className="text-[10px] uppercase tracking-widest text-[#a8a29e] font-black mb-2">Fees</p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-xs text-[#44403c]">
                      <span className="text-stone-400 font-bold">●</span>
                      <span>Rs 8,000 setup (after trial)</span>
                    </li>
                  </ul>
                </div>
              </div>

              <a 
                href={whatsappLink("Hi Sajedar! I am interested in the Plus Sales Agent plan.")}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 flex items-center justify-center gap-2 w-full py-3 bg-stone-900 text-white rounded-xl font-bold text-sm transition-colors hover:bg-stone-800"
              >
                Talk on WhatsApp
              </a>
            </div>
          </div>
        </div>

        <hr className="mb-14" />

        {/* Commission-Based Partnership */}
        <div className="mb-14">
          <div className="flex items-center gap-3 mb-1">
            <h3 className="text-xl font-bold text-[#1c1917]" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif' }}>
              Commission-Based Partnership
            </h3>
            <span className="px-2.5 py-0.5 bg-emerald-50 text-emerald-700 rounded text-xs font-semibold border border-emerald-200">
              Available
            </span>
          </div>
          <p className="text-sm text-[#78716c] mb-6">Revenue-sharing model &ndash; we grow when you grow.</p>

          <div className="bg-white rounded-lg p-6 space-y-4">
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-bold text-[#1c1917]">5%</span>
              <span className="text-sm text-[#78716c]">of sales revenue generated through the agent</span>
            </div>
            <ul className="space-y-2.5 text-sm text-[#44403c]">
              <li className="flex items-start gap-2.5">
                <span className="text-emerald-600 mt-0.5">✓</span>
                <span>No setup fees &ndash; we invest our time upfront</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-emerald-600 mt-0.5">✓</span>
                <span>Either party may cancel at any time after clearing outstanding dues up to the cancellation date</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-emerald-600 mt-0.5">✓</span>
                <span>We work as an extension of your team &ndash; aligned incentives, unlimited scope</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-emerald-600 mt-0.5">✓</span>
                <span>Best suited for trustworthy, long-term partnerships</span>
              </li>
            </ul>
            <a 
              href={whatsappLink("Hi Sajedar! I am interested in the Commission-Based Partnership for the Sales Agent.")}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center justify-center gap-2 px-8 py-3 bg-emerald-500 text-white rounded-xl font-bold text-sm transition-colors hover:bg-emerald-600"
            >
              Talk on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function SalesAgentPage() {
  const [, setEngineReady] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setEngineReady(true));
  }, []);

  return (
    <div className="min-h-screen w-full bg-[#fafaf9] text-[#44403c] flex flex-col items-center justify-center font-sans relative overflow-x-hidden">
      <Header />

      <HeroSection />

      <PricingSection />

      <ImageRecognitionSection />

      <FeaturesSection />

      <IntelligentProfilingSection />

      <section className="w-full py-20 px-4">
        <AgenticFlowDiagram />
      </section>

      <FAQSection />

      <AIAsASalesman />

      <ContactSection />

      <Footer />
    </div>
  );
}
