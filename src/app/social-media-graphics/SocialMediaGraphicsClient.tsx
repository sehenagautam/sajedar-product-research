'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  CheckCircle2,
  ImageIcon,
  LayoutTemplate,
  MessageCircle,
  Palette,
  ShoppingBag,
  Sparkles,
  Tags,
  ChevronRight,
  MousePointer2,
  Smartphone,
  Facebook,
  Instagram,
  Layers,
  Zap,
  Globe,
  MessageSquareText,
} from 'lucide-react';
import Header from '../../components/Header';
import { Footer } from '../../components/sections/Footer';

const whatsappMessage = encodeURIComponent(
  'Hi Sajedar! I am interested in social media graphics at Rs 200 per graphic for my business.'
);

const features = [
  {
    title: 'Offer Graphics',
    copy: 'Sale, discount, bundle, launch, and limited-time promotion designs.',
    icon: Tags,
    color: 'emerald',
  },
  {
    title: 'Product Posts',
    copy: 'Clean product-focused graphics for Facebook, Instagram, and Stories.',
    icon: ShoppingBag,
    color: 'sky',
  },
  {
    title: 'Brand Consistency',
    copy: 'Graphics follow your colors, logo, and preferred visual direction.',
    icon: Palette,
    color: 'amber',
  },
  {
    title: 'Repeatable Look',
    copy: 'Build a consistent visual identity for your page over time.',
    icon: LayoutTemplate,
    color: 'rose',
  },
];

const packages = [
  {
    name: 'Single Graphic',
    price: 'Rs 200',
    description: 'Perfect for one post, offer, or product announcement.',
    icon: ImageIcon,
    featured: false,
  },
  {
    name: 'Weekly Pack',
    price: 'Rs 1,000',
    description: '5 high-quality graphics for regular weekly posting.',
    icon: Zap,
    featured: true,
  },
  {
    name: 'Monthly Pack',
    price: 'Rs 3,500',
    description: '20 graphics for total social media consistency.',
    icon: Sparkles,
    featured: false,
  },
];

const steps = [
  {
    title: 'Send Content',
    copy: 'Share your photo, offer text, and logo on WhatsApp.',
    icon: MessageSquareText,
  },
  {
    title: 'We Design',
    copy: 'We create a branded graphic built around your offer.',
    icon: Palette,
  },
  {
    title: 'Post & Repeat',
    copy: 'Post it on Facebook, Instagram, or TikTok and see the engagement.',
    icon: Globe,
  },
];

const showcase = [
  {
    title: 'Ashwi Furniture',
    category: 'Product Promo',
    image: '/ashwi_preview.png',
  },
  {
    title: 'Daily Diva',
    category: 'Fashion Offer',
    image: '/dailydiva_preview.png',
  },
  {
    title: 'Latta Kapada',
    category: 'Brand Story',
    image: '/lattakapada.webp',
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

export default function SocialMediaGraphicsClient() {
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
            <div className="grid gap-16 lg:grid-cols-[1fr_1fr] lg:items-center">
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
                  <Sparkles className="h-4 w-4" />
                  Premium Graphics at Micro Prices
                </motion.div>
                
                <motion.h1 
                  variants={fadeIn}
                  className="text-5xl font-black leading-[1.05] tracking-tight text-stone-950 md:text-7xl"
                >
                  Stop posting <span className="text-emerald-600">boring photos.</span> Start selling.
                </motion.h1>
                
                <motion.p 
                  variants={fadeIn}
                  className="mt-8 max-w-xl text-lg leading-relaxed text-stone-600 md:text-xl"
                >
                  Get branded, professional social media graphics for just <span className="font-bold text-stone-950">Rs 200.</span> 
                  Perfect for offers, new arrivals, and daily marketing on Facebook and Instagram.
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
                    Order on WhatsApp
                  </a>
                  <Link
                    href="/contact"
                    className="inline-flex h-14 items-center justify-center gap-2 rounded-2xl border border-stone-200 bg-white px-8 text-base font-bold text-stone-900 shadow-sm transition hover:-translate-y-1 hover:border-emerald-300 hover:text-emerald-700"
                  >
                    Request Bulk Quote
                  </Link>
                </motion.div>
                
                <motion.div 
                  variants={fadeIn}
                  className="mt-12 flex items-center gap-6"
                >
                  <div className="flex -space-x-3">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="h-10 w-10 rounded-full border-2 border-white bg-stone-100 flex items-center justify-center overflow-hidden">
                        <img src={`https://api.dicebear.com/7.x/notionists/svg?seed=${i + 10}&backgroundColor=f4f7fb`} alt="Client" />
                      </div>
                    ))}
                  </div>
                  <p className="text-sm font-bold text-stone-500">
                    Trusted by <span className="text-stone-950">50+ local brands</span> in Nepal
                  </p>
                </motion.div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, scale: 0.95, x: 20 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                {/* Visual Stack of Graphics */}
                <div className="relative aspect-square w-full max-w-md mx-auto">
                   {/* Main preview */}
                   <div className="absolute inset-0 z-20 rounded-3xl border border-stone-200 bg-white p-2 shadow-2xl overflow-hidden">
                      <Image 
                        src="/dailydiva_preview.png"
                        alt="Sample Graphic"
                        width={600}
                        height={600}
                        className="h-full w-full object-cover rounded-2xl"
                      />
                   </div>
                   
                   {/* Decorative side ones */}
                   <div className="absolute -left-12 top-12 -z-10 h-64 w-64 rotate-[-12deg] rounded-3xl border border-stone-200 bg-white p-2 shadow-xl opacity-40">
                      <Image 
                        src="/ashwi_preview.png"
                        alt="Sample Graphic"
                        width={300}
                        height={300}
                        className="h-full w-full object-cover rounded-2xl"
                      />
                   </div>
                   
                   <div className="absolute -right-12 bottom-12 -z-10 h-64 w-64 rotate-[12deg] rounded-3xl border border-stone-200 bg-white p-2 shadow-xl opacity-40">
                      <Image 
                        src="/lattakapada.webp"
                        alt="Sample Graphic"
                        width={300}
                        height={300}
                        className="h-full w-full object-cover rounded-2xl"
                      />
                   </div>
                </div>
                
                {/* Floaties */}
                <div className="absolute -top-8 -right-8 h-16 w-16 rounded-2xl bg-emerald-500 flex items-center justify-center text-white shadow-xl animate-bounce">
                   <Tags className="h-8 w-8" />
                </div>
                <div className="absolute -bottom-8 -left-8 h-20 w-20 rounded-2xl bg-stone-950 flex items-center justify-center text-white shadow-xl">
                   <div className="text-center">
                     <p className="text-[10px] font-black uppercase tracking-tighter opacity-60">Starting</p>
                     <p className="text-lg font-black leading-none">Rs 200</p>
                   </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="bg-stone-50 py-24 md:py-32">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="mb-16 max-w-3xl">
              <h2 className="text-xs font-black uppercase tracking-[0.25em] text-emerald-700">What You Get</h2>
              <h3 className="mt-4 text-4xl font-black tracking-tight text-stone-950 md:text-5xl">
                Simple, useful graphics for daily selling.
              </h3>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {features.map((feature, idx) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="group rounded-[2rem] border border-stone-200 bg-white p-8 transition-all hover:-translate-y-2 hover:border-emerald-200 hover:shadow-xl hover:shadow-emerald-900/5"
                >
                  <div className={`mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-${feature.color}-50 text-${feature.color}-600 ring-1 ring-${feature.color}-100 transition-colors group-hover:bg-emerald-500 group-hover:text-white`}>
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <h4 className="text-lg font-black text-stone-950">{feature.title}</h4>
                  <p className="mt-3 text-sm leading-relaxed text-stone-600">{feature.copy}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Showcase Gallery */}
        <section className="bg-white py-24 md:py-32 overflow-hidden">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
              <div className="max-w-2xl">
                <h2 className="text-xs font-black uppercase tracking-[0.25em] text-emerald-700">Portfolio</h2>
                <h3 className="mt-4 text-4xl font-black tracking-tight text-stone-950 md:text-5xl">
                  Designs that drive clicks.
                </h3>
              </div>
              <p className="max-w-xs text-sm font-bold text-stone-400">
                We've designed thousands of posts for Nepali ecommerce stores, fashion houses, and local creators.
              </p>
            </div>

            <div className="grid gap-8 sm:grid-cols-3">
              {showcase.map((item, idx) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.2 }}
                  className="group relative"
                >
                  <div className="aspect-square overflow-hidden rounded-[2.5rem] border border-stone-100 bg-stone-50 shadow-sm transition-all group-hover:shadow-2xl group-hover:shadow-stone-950/10">
                    <Image 
                      src={item.image}
                      alt={item.title}
                      width={500}
                      height={500}
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-950/60 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                    <div className="absolute bottom-8 left-8 translate-y-4 opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                      <p className="text-[10px] font-black uppercase tracking-widest text-emerald-400">{item.category}</p>
                      <h4 className="mt-1 text-xl font-black text-white">{item.title}</h4>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="bg-stone-950 py-24 md:py-32">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="mb-20 text-center">
              <h2 className="text-xs font-black uppercase tracking-[0.25em] text-emerald-500">Transparent Pricing</h2>
              <h3 className="mt-4 text-4xl font-black tracking-tight text-white md:text-5xl">
                Order one or plan a rhythm.
              </h3>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              {packages.map((pkg) => (
                <div 
                  key={pkg.name}
                  className={`relative rounded-[2.5rem] p-10 border transition-all hover:-translate-y-2 ${
                    pkg.featured 
                      ? 'bg-emerald-600 border-emerald-500 shadow-2xl shadow-emerald-500/20' 
                      : 'bg-stone-900 border-stone-800'
                  }`}
                >
                  {pkg.featured && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-stone-950 px-4 py-1 text-[10px] font-black uppercase tracking-widest text-white ring-4 ring-emerald-600">
                      Most Popular
                    </div>
                  )}
                  
                  <div className={`mb-8 inline-flex h-12 w-12 items-center justify-center rounded-xl ${pkg.featured ? 'bg-white/20 text-white' : 'bg-emerald-500/10 text-emerald-500'}`}>
                    <pkg.icon className="h-6 w-6" />
                  </div>
                  
                  <h4 className="text-xl font-black text-white">{pkg.name}</h4>
                  <p className={`mt-2 text-4xl font-black ${pkg.featured ? 'text-white' : 'text-emerald-500'}`}>{pkg.price}</p>
                  <p className={`mt-6 text-sm leading-relaxed ${pkg.featured ? 'text-emerald-50/80' : 'text-stone-400'}`}>
                    {pkg.description}
                  </p>
                  
                  <a
                    href={`https://wa.me/9779860479751?text=${encodeURIComponent(`Hi! I'm interested in the ${pkg.name} package for Rs ${pkg.price}.`)}`}
                    className={`mt-10 inline-flex w-full h-12 items-center justify-center rounded-xl text-sm font-bold transition-colors ${
                      pkg.featured 
                        ? 'bg-white text-emerald-600 hover:bg-stone-100' 
                        : 'bg-stone-800 text-white hover:bg-stone-700'
                    }`}
                  >
                    Select Plan
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="bg-white py-24 md:py-32">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
             <div className="grid gap-16 lg:grid-cols-[1fr_auto]">
               <div>
                  <h2 className="text-xs font-black uppercase tracking-[0.25em] text-emerald-700">How It Works</h2>
                  <h3 className="mt-4 text-4xl font-black tracking-tight text-stone-950 md:text-5xl">
                    From idea to post in 3 steps.
                  </h3>
                  <div className="mt-16 space-y-12">
                    {steps.map((step, idx) => (
                      <div key={step.title} className="flex gap-8">
                        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-stone-950 text-xl font-black text-white shadow-xl shadow-stone-900/10">
                          {idx + 1}
                        </div>
                        <div>
                          <h4 className="text-xl font-black text-stone-950">{step.title}</h4>
                          <p className="mt-3 text-stone-600 max-w-md">{step.copy}</p>
                        </div>
                      </div>
                    ))}
                  </div>
               </div>
               
               <div className="relative rounded-[3rem] border border-stone-200 bg-stone-50 p-12 lg:w-[400px]">
                  <div className="flex flex-col items-center text-center">
                    <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-500 text-white shadow-xl shadow-emerald-500/20">
                      <Smartphone className="h-8 w-8" />
                    </div>
                    <h4 className="text-2xl font-black text-stone-950">WhatsApp Delivery</h4>
                    <p className="mt-4 text-sm font-medium leading-relaxed text-stone-600">
                      We communicate entirely through WhatsApp. Fast, simple, and no complicated dashboards.
                    </p>
                    
                    <div className="mt-10 w-full space-y-4">
                       <div className="flex items-center gap-3 rounded-2xl bg-white p-4 shadow-sm border border-stone-100">
                          <CheckCircle2 className="h-5 w-5 text-emerald-500" />
                          <span className="text-xs font-bold text-stone-800">High-Res JPG/PNG</span>
                       </div>
                       <div className="flex items-center gap-3 rounded-2xl bg-white p-4 shadow-sm border border-stone-100">
                          <CheckCircle2 className="h-5 w-5 text-emerald-500" />
                          <span className="text-xs font-bold text-stone-800">Story & Square Sizes</span>
                       </div>
                       <div className="flex items-center gap-3 rounded-2xl bg-white p-4 shadow-sm border border-stone-100">
                          <CheckCircle2 className="h-5 w-5 text-emerald-500" />
                          <span className="text-xs font-bold text-stone-800">24-Hour Turnaround</span>
                       </div>
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
                  Elevate Your Feed
                </div>
                <h2 className="text-4xl font-black tracking-tight text-stone-950 md:text-6xl">
                  Ready for professional graphics?
                </h2>
                <p className="mt-8 text-lg leading-relaxed text-stone-600">
                  Send your product photos and offer details now. We'll have your professional 
                  graphics ready within 24 hours. No hidden fees, just great design.
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
                    href="/contact"
                    className="inline-flex h-14 items-center justify-center gap-2 rounded-2xl bg-stone-950 px-10 text-base font-bold text-white shadow-xl shadow-stone-900/10 transition hover:-translate-y-1 hover:bg-stone-800"
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
