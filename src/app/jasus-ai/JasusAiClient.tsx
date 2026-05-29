'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  ShieldAlert,
  Target,
  MessageCircle,
  Unlock,
  CheckCircle2,
} from 'lucide-react';
import { Footer } from '../../components/sections/Footer';
import MarketClarityApple from './MarketClarityApple';

const whatsappMessage = encodeURIComponent(
  'Hi Sajedar! I am interested in Jasus AI competitor insights. Please share how I can understand my market in Nepal.'
);

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const ServicesOnlyNav = () => (
  <header className="fixed left-4 top-4 z-50 sm:left-6">
    <Link
      href="/services"
      className="inline-flex h-11 items-center justify-center gap-2 rounded-xl border border-white/10 bg-white px-5 text-sm font-black text-slate-950 shadow-2xl shadow-black/30 transition hover:-translate-y-0.5 hover:bg-red-50 hover:text-red-700"
    >
      View all services
      <ArrowRight className="h-4 w-4" aria-hidden="true" />
    </Link>
  </header>
);

const JasusAiVideo = () => (
  <div className="relative mx-auto w-full max-w-[320px] aspect-[9/16] overflow-hidden rounded-[2.5rem] border border-white/10 bg-slate-900 shadow-2xl group">
    <video
      className="h-full w-full object-cover"
      src="/ai_vids/jasus-ai-ad.mp4"
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 to-transparent pointer-events-none" />
    
    {/* Subtle Scanline/Overlay */}
    <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%]" />
  </div>
);

export default function JasusAiClient() {
  return (
    <div className="min-h-screen w-full bg-slate-950 font-sans text-slate-400 selection:bg-red-500 selection:text-white">
      <ServicesOnlyNav />

      <main className="w-full">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-[#0a0a0f] pb-16 pt-20 md:pb-24 md:pt-32">
          {/* Subtle Grid */}
          <div className="absolute inset-0 z-0 opacity-[0.05]">
            <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
              <defs>
                <pattern id="jasus-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#jasus-grid)" />
            </svg>
          </div>

          <div className="relative z-10 mx-auto max-w-7xl px-5 lg:px-8">
            <div className="grid gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <motion.div 
                initial="initial"
                animate="animate"
                variants={staggerContainer}
                className="max-w-2xl"
              >
                <motion.div 
                  variants={fadeIn}
                  className="mb-8 inline-flex items-center gap-2 rounded-full border border-red-500/20 bg-red-500/5 px-4 py-1.5 text-sm font-bold text-red-500 shadow-sm"
                >
                  <span className="relative h-5 w-5 overflow-hidden rounded-full">
                    <Image
                      src="/jasus-ai-icon.jpg"
                      alt=""
                      fill
                      sizes="20px"
                      className="object-cover"
                    />
                  </span>
                  Market Intelligence & Competitor Insights
                </motion.div>
                
                <motion.h1 
                  variants={fadeIn}
                  className="text-5xl font-black leading-[1.05] tracking-tight text-white md:text-7xl"
                >
                  Competitor बजारमा के चलिरहेको छ? <span className="text-red-500 underline decoration-red-500/30 underline-offset-8">clear insight पाउनुहोस्.</span>
                </motion.h1>
                
                <motion.p 
                  variants={fadeIn}
                  className="mt-8 max-w-xl text-lg leading-relaxed text-slate-500 md:text-xl"
                >
                  Jasus AI reviews public market signals in Nepal. Kathmandu ko fast-moving bazaar ma
                  which ads, products, and pricing moves are getting attention, we turn it into clear direction
                  before you spend blindly.
                </motion.p>

                <motion.div 
                  variants={fadeIn}
                  className="mt-10 flex flex-col gap-4 sm:flex-row"
                >
                  <a
                    href={`https://wa.me/9779860479751?text=${whatsappMessage}`}
                    className="inline-flex h-14 items-center justify-center gap-2 rounded-2xl bg-red-600 px-8 text-base font-bold text-white shadow-xl shadow-red-500/20 transition hover:-translate-y-1 hover:bg-red-500"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Target className="h-5 w-5" />
                    Activate Jasus AI
                  </a>
                  <button
                    onClick={() => document.getElementById('capabilities')?.scrollIntoView({ behavior: 'smooth' })}
                    className="inline-flex h-14 items-center justify-center gap-2 rounded-2xl border border-slate-800 bg-slate-900/50 px-8 text-base font-bold text-white shadow-sm transition hover:-translate-y-1 hover:border-slate-700"
                  >
                    See Capabilities
                  </button>
                </motion.div>

                <motion.div 
                  variants={fadeIn}
                  className="mt-12 flex items-center gap-8"
                >
                   <div className="flex flex-col">
                      <span className="text-2xl font-black text-white">Daily Scan</span>
                      <span className="text-xs font-bold text-slate-600 uppercase tracking-widest text-center">Frequency</span>
                   </div>
                   <div className="h-10 w-px bg-slate-800" />
                   <div className="flex flex-col">
                     <span className="text-2xl font-black text-white">चुपचाप Review</span>
                     <span className="text-xs font-bold text-slate-600 uppercase tracking-widest text-center">Mode</span>
                   </div>                </motion.div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, scale: 0.95, x: 20 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                <JasusAiVideo />
                
                {/* Floating alert */}
                <div 
                  className="absolute -top-6 -right-2 bg-red-600 text-white rounded-2xl p-4 shadow-2xl shadow-red-950/30 flex items-center gap-3 z-10"
                >
                   <ShieldAlert className="w-5 h-5" />
                   <span className="text-xs font-black uppercase tracking-tighter">Live Market Signal</span>
                </div>
                
                {/* Ambient glows */}
                <div className="absolute -inset-20 bg-red-500/10 blur-[100px] -z-10 rounded-full" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Capabilities Section */}
        <div id="capabilities">
          <MarketClarityApple />
        </div>

        {/* Pricing */}
        <section className="bg-slate-950 py-24 md:py-32">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="relative overflow-hidden rounded-[3rem] bg-gradient-to-br from-red-600 to-red-900 p-8 md:p-20 text-white shadow-2xl">
              <div className="relative z-10 grid gap-12 lg:grid-cols-2 lg:items-center">
                <div>
                  <h2 className="text-4xl font-black tracking-tight md:text-5xl">Review 3 Competitors for Rs 2,500.</h2>
                  <p className="mt-6 text-lg text-red-50/70 leading-relaxed">
                    Get a deep-dive Jasus AI report on any 3 brands in your category.
                    Includes ad library breakdown, price structure, and 30-day updates.
                    Ali smart tarika le market bujhne setup.
                  </p>
                  
                  <div className="mt-10 flex flex-wrap gap-4">
                    <a
                      href={`https://wa.me/9779860479751?text=${whatsappMessage}`}
                      className="inline-flex h-14 items-center justify-center gap-2 rounded-2xl bg-white px-10 text-base font-bold text-red-900 shadow-xl transition hover:-translate-y-1 hover:bg-slate-50"
                    >
                      Start Market Review
                    </a>
                  </div>
                </div>
                
                <div className="grid gap-4">
                   {[
                     'Public ad creative review',
                     'Bi-weekly strategy updates',
                     'चुपचाप public-signal review',
                     'Direct WhatsApp delivery'
                   ].map((item) => (
                     <div key={item} className="flex items-center gap-3 bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/10">
                        <CheckCircle2 className="w-5 h-5 text-red-300" />
                        <span className="text-sm font-bold text-white">{item}</span>
                     </div>
                   ))}
                </div>
              </div>
              
              {/* Decorative blobs */}
              <div className="absolute -top-24 -left-24 w-64 h-64 bg-white/10 rounded-full blur-[80px]" />
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="bg-slate-950 pb-24 md:pb-32">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <div className="mb-8 inline-flex items-center gap-2 rounded-full bg-slate-900 border border-slate-800 px-4 py-1 text-[10px] font-black uppercase tracking-widest text-red-500">
                <Unlock className="h-3 w-3" />
                Unlock Your Market
              </div>
              <h2 className="text-4xl font-black tracking-tight text-white md:text-6xl">
                Ready to stop guessing?
              </h2>
              <p className="mt-8 text-lg leading-relaxed text-slate-500">
                Jasus AI is a market clarity tool for ambitious Nepali brands. Share your category
                and we'll show you what is working in the market today. Kura clear, guesswork kam.
              </p>
              <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <a
                  href={`https://wa.me/9779860479751?text=${whatsappMessage}`}
                  className="inline-flex h-14 items-center justify-center gap-2 rounded-2xl bg-red-600 px-10 text-base font-bold text-white shadow-xl shadow-red-600/20 transition hover:-translate-y-1 hover:bg-red-700"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="h-5 w-5" />
                  WhatsApp Sajedar
                </a>
                <Link
                  href="/contact"
                  className="inline-flex h-14 items-center justify-center gap-2 rounded-2xl bg-slate-900 border border-slate-800 px-10 text-base font-bold text-white shadow-xl transition hover:-translate-y-1 hover:bg-slate-800"
                >
                  Request Bulk Quote
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
