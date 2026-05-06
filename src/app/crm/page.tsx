'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  BellRing,
  CheckCircle2,
  Gauge,
  KeyRound,
  MessageSquareText,
  PlayCircle,
  SearchCheck,
  Server,
  Share2,
  ShieldCheck,
  Sparkles,
  UsersRound,
  Zap,
  ChevronRight,
  Layout,
  MousePointer2,
  BarChart3,
  Globe,
} from 'lucide-react';
import Header from '../../components/Header';
import { Footer } from '../../components/sections/Footer';

const whatsappMessage = encodeURIComponent(
  'Hi Sajedar! I am interested in a custom CRM for my Nepali online business. Please share details about setup and customer management pricing.'
);

const features = [
  {
    title: 'Account System',
    copy: 'Secure owner, manager, and staff access with the permissions your team actually needs.',
    icon: KeyRound,
    color: 'emerald',
  },
  {
    title: 'Social Media Accounts',
    copy: 'Organize customer records around Facebook, Instagram, WhatsApp, comments, and DMs.',
    icon: Share2,
    color: 'sky',
  },
  {
    title: 'Auto Detection',
    copy: 'Spot repeat buyers, missed replies, order signals, and customers who need follow-up.',
    icon: Zap,
    color: 'amber',
  },
  {
    title: 'Alert Systems',
    copy: 'Trigger reminders for delayed orders, hot leads, support requests, and team handoffs.',
    icon: BellRing,
    color: 'rose',
  },
  {
    title: 'Founder Dashboard',
    copy: 'Track customers, sales activity, follow-ups, campaign health, and team workload.',
    icon: Gauge,
    color: 'indigo',
  },
  {
    title: 'Hosted Solution',
    copy: 'Launch on a clean hosted subdomain so your team can use it from anywhere.',
    icon: Server,
    color: 'stone',
  },
];

const workflow = [
  {
    title: 'Map Reality',
    copy: 'We document how customers message, order, pay, and repeat.',
    icon: SearchCheck,
  },
  {
    title: 'Design OS',
    copy: 'We shape the CRM around your customer stages and staff roles.',
    icon: Layout,
  },
  {
    title: 'Live Launch',
    copy: 'Your CRM goes live on a subdomain with scalable pricing.',
    icon: Globe,
  },
];

const businessTypes = [
  'Facebook Sellers',
  'Instagram Stores',
  'WhatsApp Order Teams',
  'Fashion Brands',
  'Furniture Businesses',
  'Local Ecommerce',
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

export default function CrmPage() {
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
                  className="mb-8 inline-flex items-center gap-2 rounded-full border border-emerald-100 bg-emerald-50/50 px-4 py-1.5 text-sm font-bold text-emerald-700 shadow-sm"
                >
                  <UsersRound className="h-4 w-4" />
                  Custom CRM for Nepali Social-Commerce
                </motion.div>
                
                <motion.h1 
                  variants={fadeIn}
                  className="text-5xl font-black leading-[1.05] tracking-tight text-stone-950 md:text-7xl"
                >
                  Turn your <span className="text-emerald-600">messy inbox</span> into a proper sales floor.
                </motion.h1>
                
                <motion.p 
                  variants={fadeIn}
                  className="mt-8 max-w-xl text-lg leading-relaxed text-stone-600 md:text-xl"
                >
                  Sajedar builds custom CRM systems for businesses that sell through Facebook, 
                  Instagram, and WhatsApp. No more lost leads or forgotten follow-ups.
                </motion.p>

                <motion.div 
                  variants={fadeIn}
                  className="mt-10 flex flex-col gap-4 sm:flex-row"
                >
                  <a
                    href={`https://wa.me/9779860479751?text=${whatsappMessage}`}
                    className="inline-flex h-14 items-center justify-center gap-2 rounded-2xl bg-stone-950 px-8 text-base font-bold text-white shadow-xl shadow-stone-900/10 transition hover:-translate-y-1 hover:bg-stone-800"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageSquareText className="h-5 w-5" />
                    Discuss on WhatsApp
                  </a>
                  <Link
                    href="/crm/demo"
                    className="inline-flex h-14 items-center justify-center gap-2 rounded-2xl border border-stone-200 bg-white px-8 text-base font-bold text-stone-900 shadow-sm transition hover:-translate-y-1 hover:border-emerald-300 hover:text-emerald-700"
                  >
                    <PlayCircle className="h-5 w-5" />
                    Interactive Demo
                  </Link>
                </motion.div>

                <motion.div 
                  variants={fadeIn}
                  className="mt-12 grid grid-cols-2 gap-4 sm:max-w-md"
                >
                  <div className="rounded-2xl border border-stone-100 bg-stone-50/50 p-5">
                    <p className="text-[10px] font-black uppercase tracking-widest text-stone-500">Setup Starts</p>
                    <p className="mt-1 text-2xl font-black text-stone-950">Rs 10,000</p>
                  </div>
                  <div className="rounded-2xl border border-emerald-100 bg-emerald-50/30 p-5">
                    <p className="text-[10px] font-black uppercase tracking-widest text-emerald-700">Monthly</p>
                    <p className="mt-1 text-2xl font-black text-stone-950">Rs 0.1 <span className="text-sm font-bold text-stone-400">/cust</span></p>
                  </div>
                </motion.div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, scale: 0.95, x: 20 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                <div className="relative z-10 rounded-[2.5rem] border-[8px] border-stone-950/5 bg-white p-2 shadow-2xl">
                  <div className="relative overflow-hidden rounded-[2rem] bg-stone-100 shadow-inner">
                    <Image
                      src="/crm-redesign-screenshot.png"
                      alt="Sajedar CRM Dashboard"
                      width={1200}
                      height={900}
                      className="w-full transition duration-700 hover:scale-105"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-950/20 to-transparent opacity-0 transition-opacity hover:opacity-100" />
                  </div>
                </div>
                
                {/* Floating Elements */}
                <motion.div 
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -right-8 -top-8 z-20 hidden rounded-3xl border border-white bg-white/90 p-4 shadow-xl backdrop-blur-md sm:block"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500 text-white shadow-lg shadow-emerald-500/20">
                      <BarChart3 className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-widest text-stone-400">Total GMV</p>
                      <p className="text-lg font-black text-stone-950">Rs 842K</p>
                    </div>
                  </div>
                </motion.div>

                <motion.div 
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="absolute -bottom-8 -left-8 z-20 hidden rounded-3xl border border-white bg-white/90 p-4 shadow-xl backdrop-blur-md sm:block"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500 text-white shadow-lg shadow-blue-500/20">
                      <MessageSquareText className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-widest text-stone-400">Active Chats</p>
                      <p className="text-lg font-black text-stone-950">124 New</p>
                    </div>
                  </div>
                </motion.div>
                
                {/* Decorative circles */}
                <div className="absolute -right-20 -top-20 -z-10 h-64 w-64 rounded-full bg-emerald-50 blur-3xl" />
                <div className="absolute -bottom-20 -left-20 -z-10 h-64 w-64 rounded-full bg-blue-50 blur-3xl" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="bg-stone-50 py-24 md:py-32">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="mb-16 max-w-3xl">
              <h2 className="text-xs font-black uppercase tracking-[0.25em] text-emerald-700">Powerful Capabilities</h2>
              <h3 className="mt-4 text-4xl font-black tracking-tight text-stone-950 md:text-5xl">
                Everything you need to scale your social commerce team.
              </h3>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {features.map((feature, idx) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="group relative overflow-hidden rounded-[2rem] border border-stone-200 bg-white p-8 transition-all hover:-translate-y-2 hover:border-emerald-200 hover:shadow-xl hover:shadow-emerald-900/5"
                >
                  <div className={`mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-${feature.color}-50 text-${feature.color}-600 ring-1 ring-${feature.color}-100 transition-colors group-hover:bg-emerald-500 group-hover:text-white`}>
                    <feature.icon className="h-7 w-7" />
                  </div>
                  <h4 className="text-xl font-black text-stone-950">{feature.title}</h4>
                  <p className="mt-4 leading-relaxed text-stone-600">{feature.copy}</p>
                  
                  {/* Subtle arrow that appears on hover */}
                  <div className="mt-6 flex items-center gap-2 text-sm font-bold text-stone-400 opacity-0 transition-all group-hover:translate-x-1 group-hover:text-emerald-600 group-hover:opacity-100">
                    Learn more <ChevronRight className="h-4 w-4" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Workflow / Process Section */}
        <section className="relative overflow-hidden bg-white py-24 md:py-32">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="mb-20 text-center">
              <h2 className="text-xs font-black uppercase tracking-[0.25em] text-emerald-700">Our Approach</h2>
              <h3 className="mt-4 text-4xl font-black tracking-tight text-stone-950 md:text-5xl">
                From chaos to clarity in three steps.
              </h3>
            </div>

            <div className="relative">
              {/* Connecting line for desktop */}
              <div className="absolute left-1/2 top-1/2 hidden h-0.5 w-[80%] -translate-x-1/2 -translate-y-1/2 bg-stone-100 lg:block" />
              
              <div className="grid gap-12 lg:grid-cols-3">
                {workflow.map((step, idx) => (
                  <div key={step.title} className="relative z-10 flex flex-col items-center text-center">
                    <div className="mb-8 flex h-20 w-20 items-center justify-center rounded-3xl bg-stone-950 text-2xl font-black text-white shadow-xl shadow-stone-900/20 ring-8 ring-white">
                      <step.icon className="h-10 w-10" />
                    </div>
                    <div className="mb-4 flex h-8 w-8 items-center justify-center rounded-full bg-emerald-100 text-sm font-bold text-emerald-700">
                      {idx + 1}
                    </div>
                    <h4 className="text-2xl font-black text-stone-950">{step.title}</h4>
                    <p className="mt-4 max-w-xs leading-relaxed text-stone-600">{step.copy}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Interactive Demo CTA Section */}
        <section className="bg-stone-950 py-24">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="relative overflow-hidden rounded-[3rem] bg-emerald-600 p-8 md:p-16 lg:p-20">
              {/* Decorative gradient */}
              <div className="absolute -right-20 -top-20 h-96 w-96 rounded-full bg-white/10 blur-3xl" />
              <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-stone-950/20 blur-3xl" />
              
              <div className="relative z-10 grid gap-12 lg:grid-cols-2 lg:items-center">
                <div className="text-white">
                  <h2 className="text-4xl font-black leading-tight tracking-tight md:text-5xl">
                    Experience the system in action.
                  </h2>
                  <p className="mt-6 text-lg font-medium text-emerald-50/80">
                    Don't just take our word for it. Explore the live interactive demo 
                    and see how different roles—from founders to support agents—use 
                    the custom Sajedar CRM.
                  </p>
                  <div className="mt-10 flex flex-wrap gap-4">
                    <Link
                      href="/crm/demo"
                      className="inline-flex h-14 items-center justify-center gap-2 rounded-2xl bg-white px-8 text-base font-bold text-emerald-700 shadow-xl transition hover:-translate-y-1 hover:bg-stone-50"
                    >
                      <PlayCircle className="h-5 w-5" />
                      Open Live Demo
                    </Link>
                    <a
                      href={`https://wa.me/9779860479751?text=${whatsappMessage}`}
                      className="inline-flex h-14 items-center justify-center gap-2 rounded-2xl bg-emerald-950 px-8 text-base font-bold text-white shadow-xl transition hover:-translate-y-1 hover:bg-emerald-900"
                    >
                      Get Started Today
                    </a>
                  </div>
                </div>
                
                <div className="relative hidden lg:block">
                  <div className="group relative overflow-hidden rounded-[2rem] border-[4px] border-white/20 shadow-2xl transition duration-500 hover:scale-[1.02]">
                    <Image
                      src="/crm-redesign-screenshot.png"
                      alt="Sajedar CRM Demo Preview"
                      width={800}
                      height={600}
                      className="w-full opacity-60 grayscale transition duration-700 group-hover:opacity-100 group-hover:grayscale-0"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Link 
                        href="/crm/demo"
                        className="flex h-20 w-20 items-center justify-center rounded-full bg-white text-emerald-600 shadow-2xl transition-transform hover:scale-110"
                      >
                        <MousePointer2 className="h-10 w-10" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Who it is for */}
        <section className="bg-white py-24 md:py-32">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="grid gap-16 lg:grid-cols-[1fr_auto]">
              <div>
                <h2 className="text-xs font-black uppercase tracking-[0.25em] text-emerald-700">Perfect Fit</h2>
                <h3 className="mt-4 text-4xl font-black tracking-tight text-stone-950 md:text-5xl">
                  For businesses whose customer memory lives in chats and spreadsheets.
                </h3>
                <p className="mt-8 text-lg leading-relaxed text-stone-600">
                  If your team is juggling notebooks, phone galleries, and thousands of DMs, 
                  you are losing money every day. A custom CRM gives your process a reliable home.
                </p>
                
                <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {businessTypes.map((type) => (
                    <div key={type} className="flex items-center gap-3 rounded-2xl border border-stone-100 bg-stone-50/50 p-4 transition-colors hover:border-emerald-100 hover:bg-emerald-50/30">
                      <CheckCircle2 className="h-5 w-5 text-emerald-600" />
                      <span className="font-bold text-stone-800">{type}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="flex flex-col gap-6 rounded-[3rem] border border-stone-200 bg-stone-50 p-10 lg:w-96">
                <div className="flex flex-col items-center text-center">
                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-500 text-white shadow-xl shadow-emerald-500/20">
                    <ShieldCheck className="h-8 w-8" />
                  </div>
                  <h4 className="text-2xl font-black text-stone-950">Enterprise Ready</h4>
                  <p className="mt-4 text-sm font-medium leading-relaxed text-stone-600">
                    Built for security, scalability, and speed. We host it, we manage it, you just sell.
                  </p>
                </div>
                
                <hr className="border-stone-200" />
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    <span className="text-sm font-bold text-stone-700">Daily Backups</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    <span className="text-sm font-bold text-stone-700">99.9% Uptime SLA</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    <span className="text-sm font-bold text-stone-700">Dedicated Support</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="bg-stone-50 pb-24 md:pb-32">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="relative overflow-hidden rounded-[3rem] border border-stone-200 bg-white p-12 text-center md:p-20">
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
                  Start Scaling Now
                </div>
                <h2 className="text-4xl font-black tracking-tight text-stone-950 md:text-6xl">
                  Ready to manage customers properly?
                </h2>
                <p className="mt-8 text-lg leading-relaxed text-stone-600">
                  Join dozens of ambitious Nepali brands using Sajedar to automate their sales 
                  and manage their customer life cycle. Setup is fast, simple, and affordable.
                </p>
                <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
                  <a
                    href={`https://wa.me/9779860479751?text=${whatsappMessage}`}
                    className="inline-flex h-14 items-center justify-center gap-2 rounded-2xl bg-emerald-600 px-10 text-base font-bold text-white shadow-xl shadow-emerald-600/20 transition hover:-translate-y-1 hover:bg-emerald-700"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageSquareText className="h-5 w-5" />
                    WhatsApp Sajedar
                  </a>
                  <Link
                    href="/contact?message=I%20am%20interested%20in%20a%20custom%20CRM%20for%20my%20Nepali%20online%20business."
                    className="inline-flex h-14 items-center justify-center gap-2 rounded-2xl bg-stone-950 px-10 text-base font-bold text-white shadow-xl shadow-stone-900/10 transition hover:-translate-y-1 hover:bg-stone-800"
                  >
                    Request CRM Plan
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
