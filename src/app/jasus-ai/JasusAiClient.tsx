'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Search,
  ShieldAlert,
  Target,
  TrendingUp,
  MessageCircle,
  Sparkles,
  Unlock,
  Bell,
  CheckCircle2,
} from 'lucide-react';
import { Footer } from '../../components/sections/Footer';

const whatsappMessage = encodeURIComponent(
  'Hi Sajedar! I am interested in Jasus AI competitor insights. Please share how I can understand my market in Nepal.'
);

const insightFeatures = [
  {
    title: 'Ad Spying & Library',
    copy: 'Monitor competitors\' active campaigns to see which creatives, offers, and hooks are active in your category right now.',
    icon: Search,
    color: 'red',
  },
  {
    title: 'Burn Rate & Velocity',
    copy: 'Estimate competitor ad spend and Engagement Velocity to catch a trend right before it peaks.',
    icon: Bell,
    color: 'sky',
  },
  {
    title: 'Top Seller Detection',
    copy: 'Identify which products are driving the most sales for other brands. Reverse-engineer their success with Funnel Hacking.',
    icon: TrendingUp,
    color: 'amber',
  },
  {
    title: 'Creative Intelligence',
    copy: 'Analyze the video hooks and image styles that are currently winning. Avoid fatigue and stay ahead of the market.',
    icon: Sparkles,
    color: 'red',
  },
];

const featureColorClasses = {
  red: 'bg-red-500/10 text-red-500 ring-red-500/20',
  sky: 'bg-sky-500/10 text-sky-500 ring-sky-500/20',
  amber: 'bg-amber-500/10 text-amber-500 ring-amber-500/20',
};

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

const InsightsDashboard = () => (
  <div className="relative bg-slate-950 rounded-[2.5rem] border border-slate-800 p-8 shadow-2xl overflow-hidden group">
    <div className="flex items-center justify-between mb-10">
       <div className="flex items-center gap-3">
          <div className="relative w-10 h-10 overflow-hidden rounded-xl bg-red-500/20 border border-red-500/30 animate-pulse">
             <Image
               src="/jasus-ai-icon.png"
               alt="Jasus AI icon"
               fill
               sizes="40px"
               className="object-cover"
             />
          </div>
          <div>
            <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Jasus AI Active</p>
            <p className="text-xs font-bold text-white">Reviewing 12 Brands</p>
          </div>
       </div>
       <div className="h-2 w-24 bg-slate-800 rounded-full" />
    </div>
    
    <div className="space-y-6">
       {[1, 2, 3].map((i) => (
         <div key={i} className="flex items-center gap-4 border-b border-slate-900 pb-4 last:border-0">
            <div className="w-12 h-12 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center">
               <div className="w-6 h-6 rounded-md bg-slate-800" />
            </div>
            <div className="flex-1 space-y-2">
               <div className="h-2 w-1/3 bg-slate-800 rounded-full" />
               <div className="h-3 w-3/4 bg-slate-700 rounded-full" />
            </div>
            <div className="text-[10px] font-black px-2 py-1 rounded-md bg-red-500/10 text-red-500">
               {i === 1 ? 'NEW AD' : 'PRICE DROPPED'}
            </div>
         </div>
       ))}
    </div>
    
    <div className="mt-10 grid grid-cols-2 gap-4">
       <div className="bg-slate-900/50 rounded-2xl p-4 border border-slate-800">
          <p className="text-[8px] font-black text-slate-500 uppercase tracking-widest">Est. Monthly Ad Spend</p>
          <p className="text-lg font-black text-white mt-1">Rs 5.6L</p>
       </div>
       <div className="bg-red-500 rounded-2xl p-4 shadow-lg shadow-red-500/20">
          <p className="text-[8px] font-black text-red-950 uppercase tracking-widest">Winning Hook</p>
          <p className="text-sm font-black text-red-950 mt-1">"Free Delivery Today"</p>
       </div>
    </div>

    <div className="absolute inset-0 bg-gradient-to-tr from-red-500/5 to-transparent pointer-events-none" />
    
    {/* Scanline effect */}
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
                      src="/jasus-ai-icon.png"
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
                      <span className="text-2xl font-black text-white">Quiet Review</span>
                      <span className="text-xs font-bold text-slate-600 uppercase tracking-widest text-center">Mode</span>
                   </div>
                </motion.div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, scale: 0.95, x: 20 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                <InsightsDashboard />
                
                {/* Floating alert */}
                <div 
                  className="absolute -top-6 -right-6 bg-red-600 text-white rounded-2xl p-4 shadow-2xl shadow-red-950/30 flex items-center gap-3"
                >
                   <ShieldAlert className="w-5 h-5" />
                   <span className="text-xs font-black uppercase tracking-tighter">Competitor Ad Momentum</span>
                </div>
                
                {/* Ambient glows */}
                <div className="absolute -inset-20 bg-red-500/10 blur-[100px] -z-10 rounded-full" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Capabilities Section */}
        <section id="capabilities" className="bg-[#0f0f15] py-24 md:py-32">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="mb-16 max-w-3xl">
              <h2 className="text-xs font-black uppercase tracking-[0.25em] text-red-500">Market Clarity</h2>
              <h3 className="mt-4 text-4xl font-black tracking-tight text-white md:text-5xl">
                Clear signals make better decisions.
              </h3>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {insightFeatures.map((feature, idx) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="group rounded-[2rem] border border-slate-800 bg-slate-900/30 p-8 transition-all hover:-translate-y-2 hover:border-red-500/30 hover:bg-slate-900/50"
                >
                  <div className={`mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl ring-1 transition-colors group-hover:bg-red-500 group-hover:text-white ${featureColorClasses[feature.color as keyof typeof featureColorClasses]}`}>
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <h4 className="text-lg font-black text-white">{feature.title}</h4>
                  <p className="mt-3 text-sm leading-relaxed text-slate-500">{feature.copy}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

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
                     'Quiet public-signal review',
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
