'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  Megaphone,
  MessageCircle,
  MessageSquareText,
  PieChart,
  Target,
  Zap,
  Globe,
  Layout,
  MousePointer2,
  DollarSign,
  TrendingUp,
  CreditCard,
  ShieldCheck,
  Users,
  ChevronRight,
  Sparkles,
  Smartphone,
  Coffee,
  ShoppingBag,
  GraduationCap,
  Hammer,
  Package,
} from 'lucide-react';
import Header from '../../components/Header';
import { Footer } from '../../components/sections/Footer';

const whatsappMessage = encodeURIComponent(
  'Hi Sajedar! I want to plan a Meta ads budget for my business in Nepal. Please help me with professional Facebook and Instagram ad planning.'
);

const valueProps = [
  {
    title: 'Solving the Dollar Barrier',
    desc: 'Hit your $500 limit? We provide seamless ad payment solutions so you can run ads consistently and maintain your ROAS.',
    icon: CreditCard,
    color: 'emerald',
  },
  {
    title: 'Agencies Ignore Micro-Budgets',
    desc: 'Built for small businesses starting at $3-$5/day. We use Pixel & Conversions API (CAPI) to track every rupee spent.',
    icon: TrendingUp,
    color: 'blue',
  },
  {
    title: 'Beyond the "Boost" Button',
    desc: 'The Boost button is a trap. We use professional CBO/ABO structures inside Ads Manager to find buyers ready to order.',
    icon: Zap,
    color: 'amber',
  },
];

const whoItHelps = [
  {
    title: 'Insta Pages & Boutiques',
    icon: ShoppingBag,
    desc: 'Run ads consistently without card limits. High-intent Lookalike Audience (LAL) targeting for small budgets.',
  },
  {
    title: 'Restaurants & Cloud Kitchens',
    icon: Coffee,
    desc: 'Hyper-local radius targeting. Only pay for ads shown to people who can actually order in your zone.',
  },
  {
    title: 'Furniture & Decor',
    icon: Package,
    desc: 'Controlled, slow-burn ad spend. Reach people actively interested in home decor using custom audiences.',
  },
  {
    title: 'Education Consultancies',
    icon: GraduationCap,
    desc: 'Precise demographic targeting. Get serious student inquiries, not random clicks from outside regions.',
  },
  {
    title: 'Independent Freelancers',
    icon: Hammer,
    desc: 'Photographers, MUA, planners - run local ads and track conversions without an expensive middleman.',
  },
  {
    title: 'Local Ecommerce',
    icon: Globe,
    desc: 'Transition from Boost Post to optimized CAPI tracking, catalog sales and smart retargeting.',
  },
];

const steps = [
  {
    title: 'Strategic CBO/ABO Setup',
    desc: 'We avoid the expensive "Boost Post". Instead, we set up CBO/ABO campaigns inside Ads Manager to tell the algorithm exactly what ROAS you want.',
  },
  {
    title: 'Pixel & CAPI Tracking',
    desc: 'Every dollar is valuable. We ensure your budget is spent perfectly by using the Conversions API to track high-conversion paths.',
  },
  {
    title: 'LAL & Precision Targeting',
    desc: 'No more generic broad reach. We use Lookalike Audiences and zone targeting to ensure your ads hit the right Nepali market segments.',
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

export default function MetaAdsPage() {
  const [budget, setBudget] = useState(5);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Simplified calculation for demo purposes
  const estReach = (budget * 500).toLocaleString();
  const estLeads = Math.floor(budget * 0.8);
  const estMaxLeads = Math.floor(budget * 1.5);

  return (
    <div className="min-h-screen w-full bg-[#fafaf9] font-sans text-stone-900 selection:bg-emerald-100 selection:text-emerald-900">
      <Header />

      <main className="w-full pt-14">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-white pb-16 pt-20 md:pb-24 md:pt-32">
          {/* Background Pattern */}
          <div className="absolute inset-0 z-0 opacity-[0.03] [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]">
            <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
              <defs>
                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
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
                  className="mb-8 inline-flex items-center gap-2 rounded-full border border-emerald-100 bg-emerald-50/50 px-4 py-1.5 text-sm font-bold text-emerald-700"
                >
                  <DollarSign className="h-4 w-4" />
                  Practical Ad Planning for Nepal
                </motion.div>
                
                <motion.h1 
                  variants={fadeIn}
                  className="text-5xl font-black leading-[1.05] tracking-tight text-stone-950 md:text-7xl"
                >
                  Professional Meta Ads. <span className="text-emerald-600">Dollar Card or not.</span>
                </motion.h1>
                
                <motion.p 
                  variants={fadeIn}
                  className="mt-8 max-w-xl text-lg leading-relaxed text-stone-600 md:text-xl"
                >
                  Khali "Boost Post" thichera matra hudaina. Whether you hit your $500 limit 
                  or don't want the bank hassle - we make proper ad targeting accessible 
                  starting at just <span className="font-bold text-stone-900">$3 to $5 a day.</span>
                </motion.p>

                <motion.div 
                  variants={fadeIn}
                  className="mt-10 flex flex-col gap-4 sm:flex-row"
                >
                  <a
                    href={`https://wa.me/9779860479751?text=${whatsappMessage}`}
                    className="inline-flex h-14 items-center justify-center gap-2 rounded-2xl bg-stone-950 px-8 text-base font-bold text-white transition hover:-translate-y-1 hover:bg-stone-800"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="h-5 w-5" />
                    Contact on WhatsApp
                  </a>
                  <button
                    onClick={() => document.getElementById('simulator')?.scrollIntoView({ behavior: 'smooth' })}
                    className="inline-flex h-14 items-center justify-center gap-2 rounded-2xl bg-white px-8 text-base font-bold text-stone-900 transition hover:-translate-y-1 hover:border-emerald-300 hover:text-emerald-700"
                  >
                    <PieChart className="h-5 w-5" />
                    Simulate Budget
                  </button>
                </motion.div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, scale: 0.95, x: 20 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative hidden lg:block"
              >
                <div className="relative z-10 rounded-[3rem] border-[12px] border-stone-950/5 bg-white p-8">
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <div className="h-8 w-32 rounded-lg bg-stone-100" />
                      <div className="h-8 w-8 rounded-full bg-emerald-500" />
                    </div>
                    <div className="space-y-3">
                      <div className="h-4 w-full rounded-md bg-stone-50" />
                      <div className="h-4 w-[90%] rounded-md bg-stone-50" />
                      <div className="h-4 w-[75%] rounded-md bg-stone-50" />
                    </div>
                    <div className="aspect-video w-full rounded-2xl bg-stone-900 flex items-center justify-center">
                       <Megaphone className="h-12 w-12 text-emerald-500" />
                    </div>
                    <div className="flex gap-4">
                      <div className="h-12 flex-1 rounded-xl bg-emerald-50" />
                      <div className="h-12 flex-1 rounded-xl bg-stone-100" />
                    </div>
                  </div>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute -right-12 -top-12 h-64 w-64 rounded-full bg-emerald-50 blur-3xl opacity-60" />
                <div className="absolute -bottom-12 -left-12 h-64 w-64 rounded-full bg-blue-50 blur-3xl opacity-60" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Realities Section */}
        <section className="bg-stone-50 py-24 md:py-32">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="mb-16 max-w-3xl">
              <h2 className="text-xs font-black uppercase tracking-[0.25em] text-emerald-700">Nepali Market Reality</h2>
              <h3 className="mt-4 text-4xl font-black tracking-tight text-stone-950 md:text-5xl">
                Making professional Meta Ads accessible in Nepal.
              </h3>
            </div>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {valueProps.map((prop, idx) => (
                <motion.div
                  key={prop.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="group rounded-[2rem] bg-white p-10 transition-all hover:-translate-y-2 hover:border-emerald-200"
                >
                  <div className={`mb-8 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-${prop.color}-50 text-${prop.color}-600 ring-1 ring-${prop.color}-100 transition-colors group-hover:bg-emerald-500 group-hover:text-white`}>
                    <prop.icon className="h-7 w-7" />
                  </div>
                  <h4 className="text-xl font-black text-stone-950">{prop.title}</h4>
                  <p className="mt-4 leading-relaxed text-stone-600">{prop.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Budget Simulator */}
        <section id="simulator" className="bg-white py-24 md:py-32 overflow-hidden">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="grid gap-16 lg:grid-cols-[1fr_1.1fr] lg:items-center">
              <div>
                <h2 className="text-xs font-black uppercase tracking-[0.25em] text-emerald-700">Maximize Your Ad Budget</h2>
                <h3 className="mt-4 text-4xl font-black tracking-tight text-stone-950 md:text-5xl">
                  Simulate your daily ad spend.
                </h3>
                <p className="mt-8 text-lg leading-relaxed text-stone-600">
                  Use the slider to see hypothetical outcomes based on typical Nepalese market 
                  performance for messaging and lead campaigns.
                </p>
                
                <div className="mt-12 space-y-10">
                  <div className="space-y-4">
                    <div className="flex justify-between items-end">
                      <label className="text-sm font-black uppercase tracking-widest text-stone-400">Daily Ad Budget (USD)</label>
                      <span className="text-4xl font-black text-emerald-600">${budget} <span className="text-sm text-stone-400">/ day</span></span>
                    </div>
                    <input 
                      type="range" 
                      min="2" 
                      max="50" 
                      step="1"
                      value={budget}
                      onChange={(e) => setBudget(parseInt(e.target.value))}
                      className="h-3 w-full cursor-pointer appearance-none rounded-full bg-stone-100 accent-emerald-500"
                    />
                    <div className="flex justify-between text-[10px] font-black uppercase tracking-widest text-stone-400">
                      <span>$2</span>
                      <span>$25</span>
                      <span>$50</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="rounded-3xl border border-stone-100 bg-stone-50/50 p-6">
                      <p className="text-[10px] font-black uppercase tracking-widest text-stone-500">Est. Daily Reach</p>
                      <p className="mt-2 text-2xl font-black text-stone-950">{estReach}+</p>
                      <p className="mt-1 text-xs font-bold text-stone-400">Targeted local audience</p>
                    </div>
                    <div className="rounded-3xl border border-emerald-100 bg-emerald-50/30 p-6">
                      <p className="text-[10px] font-black uppercase tracking-widest text-emerald-700">High-Intent Actions</p>
                      <p className="mt-2 text-2xl font-black text-stone-950">{estLeads} - {estMaxLeads}</p>
                      <p className="mt-1 text-xs font-bold text-stone-400">Qualified clicks or leads</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="relative z-10 rounded-[3rem] bg-white p-8">
                  <div className="mb-8 flex items-center justify-between">
                    <h4 className="text-xl font-black text-stone-950">The "Boost" Trap vs. Strategic Ads</h4>
                    <span className="rounded-full bg-stone-100 px-3 py-1 text-[10px] font-black uppercase tracking-widest text-stone-500">Outcome of $50 Spend</span>
                  </div>
                  
                  <div className="space-y-8">
                    <div className="space-y-3">
                      <div className="flex justify-between text-xs font-bold uppercase tracking-widest text-stone-400">
                        <span>Standard Boost Post</span>
                        <span className="text-stone-600">Many Likes, Few Orders</span>
                      </div>
                      <div className="relative h-6 w-full rounded-full bg-stone-100 overflow-hidden">
                        <motion.div 
                          initial={{ width: 0 }}
                          whileInView={{ width: '90%' }}
                          className="h-full bg-stone-300" 
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="flex justify-between text-xs font-bold uppercase tracking-widest text-emerald-600">
                        <span>Sajedar Strategic Ad</span>
                        <span className="text-emerald-700">High Conversion Rate</span>
                      </div>
                      <div className="relative h-6 w-full rounded-full bg-emerald-50 overflow-hidden">
                        <motion.div 
                          initial={{ width: 0 }}
                          whileInView={{ width: '65%' }}
                          className="h-full bg-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.3)]" 
                        />
                      </div>
                    </div>

                    <div className="rounded-2xl bg-stone-950 p-6 text-white">
                      <p className="text-sm font-medium leading-relaxed opacity-80">
                        "We completely avoid the expensive Boost button. Instead, we set up proper objective-based 
                        campaigns inside Ads Manager. This tells Facebook exactly what action you want."
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Floating graphic */}
                <div className="absolute -right-8 -bottom-8 z-20 h-32 w-32 rounded-3xl bg-white p-6 flex items-center justify-center">
                   <TrendingUp className="h-16 w-16 text-emerald-500" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="bg-stone-50 py-24 md:py-32">
          <div className="mx-auto max-w-7xl px-5 lg:px-8 text-center">
            <h2 className="text-xs font-black uppercase tracking-[0.25em] text-emerald-700">Our Process</h2>
            <h3 className="mt-4 text-4xl font-black tracking-tight text-stone-950 md:text-5xl">
              Practical strategy for the local market.
            </h3>
            <p className="mt-8 mx-auto max-w-2xl text-lg leading-relaxed text-stone-600">
              A $5/day budget is powerful when used correctly. We focus on clear offers, 
              precise zone targeting, and seamless chat-to-sale transitions.
            </p>

            <div className="mt-20 grid gap-8 md:grid-cols-3">
              {steps.map((step, idx) => (
                <div key={step.title} className="relative flex flex-col items-center">
                  <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-stone-950 text-xl font-black text-white">
                    {idx + 1}
                  </div>
                  <h4 className="text-xl font-black text-stone-950">{step.title}</h4>
                  <p className="mt-4 max-w-xs text-sm leading-relaxed text-stone-600">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Who it helps Section */}
        <section className="bg-white py-24 md:py-32">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="mb-16 text-center">
              <h2 className="text-xs font-black uppercase tracking-[0.25em] text-emerald-700">Who It Helps</h2>
              <h3 className="mt-4 text-4xl font-black tracking-tight text-stone-950 md:text-5xl">
                Access for every small business.
              </h3>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {whoItHelps.map((item) => (
                <div key={item.title} className="flex flex-col gap-6 rounded-[2.5rem] border border-stone-100 bg-stone-50/50 p-10 transition-colors hover:bg-white hover:border-emerald-100">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-emerald-600">
                    <item.icon className="h-7 w-7" />
                  </div>
                  <div>
                    <h4 className="text-xl font-black text-stone-950">{item.title}</h4>
                    <p className="mt-4 text-sm leading-relaxed text-stone-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="bg-stone-50 pb-24 md:pb-32">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="relative overflow-hidden rounded-[3rem] bg-white p-12 text-center md:p-20">
              <div className="absolute -right-10 -top-10 h-64 w-64 rounded-full bg-emerald-50 blur-3xl" />
              <div className="absolute -bottom-10 -left-10 h-64 w-64 rounded-full bg-blue-50 blur-3xl" />
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative z-10 mx-auto max-w-3xl"
              >
                <div className="mb-8 inline-flex items-center gap-2 rounded-full bg-stone-950 px-4 py-1 text-[10px] font-black uppercase tracking-widest text-white">
                  <Sparkles className="h-3 w-3 text-amber-400" />
                  Plan Budget Now
                </div>
                <h2 className="text-4xl font-black tracking-tight text-stone-950 md:text-6xl">
                  Plan your Meta Ads budget today.
                </h2>
                <p className="mt-8 text-lg leading-relaxed text-stone-600">
                  Talk to us before you spend another dollar on ads. Share your business type, 
                  what you sell, and your monthly budget. We’ll help you build a Meta ads 
                  plan that actually makes sense.
                </p>
                <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
                  <a
                    href={`https://wa.me/9779860479751?text=${whatsappMessage}`}
                    className="inline-flex h-14 items-center justify-center gap-2 rounded-2xl bg-emerald-600 px-10 text-base font-bold text-white transition hover:-translate-y-1 hover:bg-emerald-700"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageSquareText className="h-5 w-5" />
                    WhatsApp Sajedar
                  </a>
                  <Link
                    href="/contact?message=I%20am%20interested%20in%20planning%20a%20professional%20Meta%20Ads%20budget."
                    className="inline-flex h-14 items-center justify-center gap-2 rounded-2xl bg-stone-950 px-10 text-base font-bold text-white transition hover:-translate-y-1 hover:bg-stone-800"
                  >
                    Get Custom Quote
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
