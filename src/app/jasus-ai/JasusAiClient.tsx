'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Eye,
  Search,
  ShieldAlert,
  Zap,
  Target,
  BarChart3,
  TrendingUp,
  MessageCircle,
  Sparkles,
  Lock,
  Unlock,
  Bell,
  LineChart,
  Globe,
  PieChart,
  MousePointer2,
  CheckCircle2,
} from 'lucide-react';
import Header from '../../components/Header';
import { Footer } from '../../components/sections/Footer';

const whatsappMessage = encodeURIComponent(
  'Hi Sajedar! I am interested in Jasus AI competition spying. Please share how I can track my competitors in Nepal.'
);

const spyFeatures = [
  {
    title: 'Ad Library Monitoring',
    copy: 'Track exactly which creatives, offers, and hooks your competitors are running right now.',
    icon: Search,
    color: 'emerald',
  },
  {
    title: 'Pricing Alerts',
    copy: 'Get notified when competitors change their prices or launch limited-time flash sales.',
    icon: Bell,
    color: 'sky',
  },
  {
    title: 'Top Seller Detection',
    copy: 'Identify which products are driving the most engagement and sales for other brands.',
    icon: TrendingUp,
    color: 'amber',
  },
  {
    title: 'Creative Intelligence',
    copy: 'Analyze the video hooks and image styles that are currently winning in the Nepali market.',
    icon: Sparkles,
    color: 'rose',
  },
];

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

const SpyDashboard = () => (
  <div className="relative bg-slate-950 rounded-[2.5rem] border border-slate-800 p-8 shadow-2xl overflow-hidden group">
    <div className="flex items-center justify-between mb-10">
       <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-emerald-500/20 flex items-center justify-center text-emerald-500 border border-emerald-500/30 animate-pulse">
             <Eye className="w-5 h-5" />
          </div>
          <div>
            <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Jasus AI Active</p>
            <p className="text-xs font-bold text-white">Monitoring 12 Brands</p>
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
            <div className={`text-[10px] font-black px-2 py-1 rounded-md ${i === 1 ? 'bg-rose-500/10 text-rose-500' : 'bg-emerald-500/10 text-emerald-500'}`}>
               {i === 1 ? 'NEW AD' : 'PRICE DROPPED'}
            </div>
         </div>
       ))}
    </div>
    
    <div className="mt-10 grid grid-cols-2 gap-4">
       <div className="bg-slate-900/50 rounded-2xl p-4 border border-slate-800">
          <p className="text-[8px] font-black text-slate-500 uppercase tracking-widest">Est. Monthly Ad Spend</p>
          <p className="text-lg font-black text-white mt-1">$4.2K</p>
       </div>
       <div className="bg-emerald-500 rounded-2xl p-4 shadow-lg shadow-emerald-500/20">
          <p className="text-[8px] font-black text-emerald-950 uppercase tracking-widest">Winning Hook</p>
          <p className="text-sm font-black text-emerald-950 mt-1">"Free Delivery Today"</p>
       </div>
    </div>

    <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/5 to-transparent pointer-events-none" />
    
    {/* Scanline effect */}
    <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%]" />
  </div>
);

export default function JasusAiClient() {
  return (
    <div className="min-h-screen w-full bg-slate-950 font-sans text-slate-400 selection:bg-emerald-500 selection:text-white">
      <Header />

      <main className="w-full pt-14">
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
                  className="mb-8 inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/5 px-4 py-1.5 text-sm font-bold text-emerald-500 shadow-sm"
                >
                  <Lock className="h-4 w-4" />
                  Market Intelligence & Competition Spying
                </motion.div>
                
                <motion.h1 
                  variants={fadeIn}
                  className="text-5xl font-black leading-[1.05] tracking-tight text-white md:text-7xl"
                >
                  Know what they do. <span className="text-emerald-500 underline decoration-emerald-500/30 underline-offset-8">Before they do it.</span>
                </motion.h1>
                
                <motion.p 
                  variants={fadeIn}
                  className="mt-8 max-w-xl text-lg leading-relaxed text-slate-500 md:text-xl"
                >
                  Jasus AI tracks your competitors in the Nepali market. We uncover their 
                  winning ads, best-selling products, and pricing strategies so you never 
                  fly blind again.
                </motion.p>

                <motion.div 
                  variants={fadeIn}
                  className="mt-10 flex flex-col gap-4 sm:flex-row"
                >
                  <a
                    href={`https://wa.me/9779860479751?text=${whatsappMessage}`}
                    className="inline-flex h-14 items-center justify-center gap-2 rounded-2xl bg-emerald-600 px-8 text-base font-bold text-white shadow-xl shadow-emerald-500/20 transition hover:-translate-y-1 hover:bg-emerald-500"
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
                      <span className="text-2xl font-black text-white">100% Stealth</span>
                      <span className="text-xs font-bold text-slate-600 uppercase tracking-widest text-center">Operation</span>
                   </div>
                </motion.div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, scale: 0.95, x: 20 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                <SpyDashboard />
                
                {/* Floating alert */}
                <motion.div 
                  animate={{ scale: [1, 1.05, 1], opacity: [0.8, 1, 0.8] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute -top-6 -right-6 bg-rose-500 text-white rounded-2xl p-4 shadow-2xl flex items-center gap-3"
                >
                   <ShieldAlert className="w-5 h-5 animate-bounce" />
                   <span className="text-xs font-black uppercase tracking-tighter">Competitor Scaled Ads</span>
                </motion.div>
                
                {/* Ambient glows */}
                <div className="absolute -inset-20 bg-emerald-500/10 blur-[100px] -z-10 rounded-full" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Capabilities Section */}
        <section id="capabilities" className="bg-[#0f0f15] py-24 md:py-32">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="mb-16 max-w-3xl">
              <h2 className="text-xs font-black uppercase tracking-[0.25em] text-emerald-500">Unfair Advantage</h2>
              <h3 className="mt-4 text-4xl font-black tracking-tight text-white md:text-5xl">
                Information is the ultimate leverage.
              </h3>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {spyFeatures.map((feature, idx) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="group rounded-[2rem] border border-slate-800 bg-slate-900/30 p-8 transition-all hover:-translate-y-2 hover:border-emerald-500/30 hover:bg-slate-900/50"
                >
                  <div className={`mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-${feature.color}-500/10 text-${feature.color}-500 ring-1 ring-${feature.color}-500/20 transition-colors group-hover:bg-emerald-500 group-hover:text-white`}>
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <h4 className="text-lg font-black text-white">{feature.title}</h4>
                  <p className="mt-3 text-sm leading-relaxed text-slate-500">{feature.copy}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Stealth Pricing */}
        <section className="bg-slate-950 py-24 md:py-32">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="relative overflow-hidden rounded-[3rem] bg-gradient-to-br from-emerald-600 to-emerald-900 p-8 md:p-20 text-white shadow-2xl">
              <div className="relative z-10 grid gap-12 lg:grid-cols-2 lg:items-center">
                <div>
                  <h2 className="text-4xl font-black tracking-tight md:text-5xl">Spy on 3 Competitors for Rs 2,500.</h2>
                  <p className="mt-6 text-lg text-emerald-50/70 leading-relaxed">
                    Get a deep-dive Jasus AI report on any 3 brands in your category. 
                    Includes ad library breakdown, pricing structure, and 30-day monitoring.
                  </p>
                  
                  <div className="mt-10 flex flex-wrap gap-4">
                    <a
                      href={`https://wa.me/9779860479751?text=${whatsappMessage}`}
                      className="inline-flex h-14 items-center justify-center gap-2 rounded-2xl bg-white px-10 text-base font-bold text-emerald-900 shadow-xl transition hover:-translate-y-1 hover:bg-slate-50"
                    >
                      Start Monitoring Now
                    </a>
                  </div>
                </div>
                
                <div className="grid gap-4">
                   {[
                     'Direct access to hidden ad creatives',
                     'Bi-weekly strategy updates',
                     'Stealth monitoring (they won\'t know)',
                     'Direct WhatsApp delivery'
                   ].map((item) => (
                     <div key={item} className="flex items-center gap-3 bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/10">
                        <CheckCircle2 className="w-5 h-5 text-emerald-300" />
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
              <div className="mb-8 inline-flex items-center gap-2 rounded-full bg-slate-900 border border-slate-800 px-4 py-1 text-[10px] font-black uppercase tracking-widest text-emerald-500">
                <Unlock className="h-3 w-3" />
                Unlock Your Market
              </div>
              <h2 className="text-4xl font-black tracking-tight text-white md:text-6xl">
                Ready to stop guessing?
              </h2>
              <p className="mt-8 text-lg leading-relaxed text-slate-500">
                Jasus AI is the secret weapon for ambitious Nepali brands. Share your category 
                and we'll show you exactly what's winning in the market today.
              </p>
              <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <a
                  href={`https://wa.me/9779860479751?text=${whatsappMessage}`}
                  className="inline-flex h-14 items-center justify-center gap-2 rounded-2xl bg-emerald-600 px-10 text-base font-bold text-white shadow-xl shadow-emerald-600/20 transition hover:-translate-y-1 hover:bg-emerald-700"
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
