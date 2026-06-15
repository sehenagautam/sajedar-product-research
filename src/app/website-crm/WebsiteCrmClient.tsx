'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  BellRing,
  CheckCircle2,
  Code2,
  Globe2,
  MessageCircle,
  Server,
  Sparkles,
  ExternalLink,
  Zap,
  UsersRound,
  Layout,
  MousePointer2,
  BarChart3,
  Gauge,
  KeyRound,
  ShieldCheck,
  Smartphone,
} from 'lucide-react';
import Header from '../../components/Header';
import { Footer } from '../../components/sections/Footer';

const whatsappMessage = encodeURIComponent(
  'Hi Sajedar! I am interested in the unified Website + CRM service for my business.'
);

const websiteFeatures = [
  {
    icon: Sparkles,
    title: 'CRO-Focused Design',
    body: 'Conversion Rate Optimization built-in. Modern, fast sites designed specifically to turn visitors into buyers.',
  },
  {
    icon: BellRing,
    title: 'Cart Recovery Alerts',
    body: 'Automated Abandoned Cart Recovery sequences to bring back shoppers who left without paying.',
  },
  {
    icon: Server,
    title: 'Instant Scaling',
    body: 'Launch on yourstore.sajedar.com instantly. High-performance hosting built for traffic spikes.',
  },
];

const crmFeatures = [
  {
    icon: KeyRound,
    title: 'Account Permissions',
    body: 'Secure owner, manager, and staff access with custom permission levels for your sales team.',
  },
  {
    icon: Gauge,
    title: 'AOV & LTV Dashboard',
    body: 'Track Average Order Value and Customer Lifetime Value from a single high-level founder view.',
  },
  {
    icon: Zap,
    title: 'Profit Optimization',
    body: 'Spot repeat buyers and optimize marketing spend based on real-time sales data across channels.',
  },
];

const examples = [
  {
    name: 'Ashwi Furniture',
    url: 'ashwi.sajedar.com',
    href: 'https://ashwi.sajedar.com',
    image: '/ashwi_preview.jpg',
    tag: 'Furniture store',
  },
  {
    name: 'Daily Diva',
    url: 'dailydiva.sajedar.com',
    href: 'https://dailydiva.sajedar.com',
    image: '/dailydiva_preview.jpg',
    tag: 'Fashion bags',
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

export default function WebsiteCrmClient() {
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
                  <Layout className="h-4 w-4" />
                  Your Complete Business Operating System
                </motion.div>
                
                <motion.h1 
                  variants={fadeIn}
                  className="text-5xl font-black leading-[1.05] tracking-tight text-stone-950 md:text-7xl"
                >
                  Premium Website. <span className="text-emerald-600">Custom CRM.</span>
                </motion.h1>
                
                <motion.p 
                  variants={fadeIn}
                  className="mt-8 max-w-xl text-lg leading-relaxed text-stone-600 md:text-xl"
                >
                  We build the frontend for your customers and the backend for your team. 
                  A professional website connected to a custom social-commerce CRM.
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
                    Setup on WhatsApp
                  </a>
                  <Link
                    href="/crm/demo"
                    className="inline-flex h-14 items-center justify-center gap-2 rounded-2xl bg-white px-8 text-base font-bold text-stone-900 transition hover:-translate-y-1 hover:border-emerald-300 hover:text-emerald-700"
                  >
                    Explore CRM Demo
                  </Link>
                </motion.div>

                <motion.div 
                  variants={fadeIn}
                  className="mt-12 grid grid-cols-2 gap-4 sm:max-w-md"
                >
                  <div className="rounded-2xl border border-stone-100 bg-stone-50/50 p-5">
                    <p className="text-[10px] font-black uppercase tracking-widest text-stone-500 text-center">Website Starts</p>
                    <p className="mt-1 text-2xl font-black text-stone-950 text-center">Rs 4,000</p>
                  </div>
                  <div className="rounded-2xl border border-emerald-100 bg-emerald-50/30 p-5">
                    <p className="text-[10px] font-black uppercase tracking-widest text-emerald-700 text-center">CRM Setup</p>
                    <p className="mt-1 text-2xl font-black text-stone-950 text-center">Rs 10,000</p>
                  </div>
                </motion.div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, scale: 0.95, x: 20 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                {/* Unified Device Preview */}
                <div className="relative z-10 rounded-2xl bg-white p-1 overflow-hidden">
                  <div className="flex items-center gap-1.5 px-4 py-3 border-b border-stone-100 bg-stone-50/50 rounded-t-xl">
                    <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                    <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                    <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
                  </div>
                  <div className="relative overflow-hidden bg-stone-100">
                    <Image
                      src="/crm_demo_ss.jpg"
                      alt="Sajedar CRM & Website Platform"
                      width={1200}
                      height={900}
                      className="w-full"
                    />
                  </div>
                </div>
                
                {/* Floating Elements */}
                <motion.div 
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -right-8 top-12 z-20 hidden rounded-3xl border border-white bg-white/90 p-4 backdrop-blur-md sm:block"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-600 text-white shadow-indigo-600/20">
                      <Code2 className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-widest text-stone-400">Frontend</p>
                      <p className="text-sm font-black text-stone-950">Premium Site</p>
                    </div>
                  </div>
                </motion.div>

                <motion.div 
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="absolute -left-8 bottom-12 z-20 hidden rounded-3xl border border-white bg-white/90 p-4 backdrop-blur-md sm:block"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500 text-white shadow-emerald-500/20">
                      <UsersRound className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-widest text-stone-400">Backend</p>
                      <p className="text-sm font-black text-stone-950">Custom CRM</p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Unified Capabilities */}
        <section className="bg-stone-50 py-24 md:py-32">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="mb-20 grid gap-16 lg:grid-cols-2">
              {/* Website Column */}
              <div>
                <div className="mb-8 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-blue-600/20">
                  <Code2 className="h-8 w-8" />
                </div>
                <h3 className="text-3xl font-black tracking-tight text-stone-950">Premium Business Frontend</h3>
                <p className="mt-4 text-lg text-stone-600">A polished site that looks expensive but starts at just Rs 4,000.</p>
                
                <div className="mt-10 grid gap-4">
                  {websiteFeatures.map((f) => (
                    <div key={f.title} className="flex gap-4 rounded-2xl bg-white p-6 border border-stone-100">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                         <f.icon className="h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="font-bold text-stone-900">{f.title}</h4>
                        <p className="mt-1 text-sm text-stone-500">{f.body}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* CRM Column */}
              <div>
                <div className="mb-8 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-indigo-600 text-white shadow-indigo-600/20">
                  <UsersRound className="h-8 w-8" />
                </div>
                <h3 className="text-3xl font-black tracking-tight text-stone-950">Custom Sales OS Backend</h3>
                <p className="mt-4 text-lg text-stone-600">A system built around your team roles and customer life cycle.</p>
                
                <div className="mt-10 grid gap-4">
                  {crmFeatures.map((f) => (
                    <div key={f.title} className="flex gap-4 rounded-2xl bg-white p-6 border border-stone-100">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                         <f.icon className="h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="font-bold text-stone-900">{f.title}</h4>
                        <p className="mt-1 text-sm text-stone-500">{f.body}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Live Sites Showcase */}
        <section className="bg-white py-24 md:py-32">
          <div className="mx-auto max-w-7xl px-5 lg:px-8 text-center">
            <h2 className="text-xs font-black uppercase tracking-[0.25em] text-emerald-700">Proven Results</h2>
            <h3 className="mt-4 text-4xl font-black tracking-tight text-stone-950 md:text-5xl">
              Running live for Nepali brands.
            </h3>
            
            <div className="mt-16 grid gap-8 sm:grid-cols-2">
              {examples.map((ex) => (
                <a
                  key={ex.url}
                  href={ex.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative overflow-hidden rounded-[2.5rem] bg-white p-2 transition-all hover:shadow-2xl"
                >
                  <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem]">
                    <Image
                      src={ex.image}
                      alt={ex.name}
                      fill
                      className="object-cover transition duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-stone-950/20 opacity-0 transition-opacity group-hover:opacity-100 flex items-center justify-center">
                       <div className="h-14 w-14 rounded-full bg-white flex items-center justify-center text-stone-950">
                          <ExternalLink className="h-6 w-6" />
                       </div>
                    </div>
                  </div>
                  <div className="p-6 text-left flex items-center justify-between">
                    <div>
                      <h4 className="text-xl font-black text-stone-950">{ex.name}</h4>
                      <p className="text-sm font-bold text-emerald-600">{ex.tag}</p>
                    </div>
                    <span className="text-xs font-bold text-stone-400">{ex.url}</span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="bg-stone-50 pb-24 md:pb-32">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="relative overflow-hidden rounded-[3rem] bg-stone-950 p-12 text-center md:p-20 text-white">
              <div className="absolute -right-10 -top-10 h-64 w-64 rounded-full bg-emerald-500/10 blur-3xl" />
              <div className="absolute -bottom-10 -left-10 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl" />
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative z-10 mx-auto max-w-3xl"
              >
                <div className="mb-8 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1 text-[10px] font-black uppercase tracking-widest text-emerald-400">
                  <Sparkles className="h-3 w-3" />
                  Upgrade Your System
                </div>
                <h2 className="text-4xl font-black tracking-tight md:text-6xl">
                  One partner for your entire setup.
                </h2>
                <p className="mt-8 text-lg leading-relaxed opacity-60">
                  Stop juggling multiple freelancers and mismatched tools. Get a premium 
                  frontend and a custom backend built to work together from day one.
                </p>
                <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
                  <a
                    href={`https://wa.me/9779860479751?text=${whatsappMessage}`}
                    className="inline-flex h-14 items-center justify-center gap-2 rounded-2xl bg-emerald-600 px-10 text-base font-bold text-white transition hover:-translate-y-1 hover:bg-emerald-700"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="h-5 w-5" />
                    WhatsApp Sajedar
                  </a>
                  <Link
                    href="/contact"
                    className="inline-flex h-14 items-center justify-center gap-2 rounded-2xl bg-white px-10 text-base font-bold text-stone-900 transition hover:-translate-y-1 hover:bg-stone-50"
                  >
                    Request Custom Quote
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
