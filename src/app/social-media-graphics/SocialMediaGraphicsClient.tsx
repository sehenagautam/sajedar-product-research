'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  CheckCircle2,
  ImageIcon,
  LayoutTemplate,
  MessageSquareText,
  Palette,
  ShoppingBag,
  Sparkles,
  Tags,
  Smartphone,
  Globe,
  Zap,
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
    iconClass: 'bg-[#e8f7ef] text-emerald-700 ring-emerald-100',
  },
  {
    title: 'Product Posts',
    copy: 'Clean product-focused graphics for Facebook, Instagram, and Stories.',
    icon: ShoppingBag,
    iconClass: 'bg-[#eef5ff] text-blue-600 ring-blue-100',
  },
  {
    title: 'Brand Consistency',
    copy: 'Graphics follow your colors, logo, and preferred visual direction.',
    icon: Palette,
    iconClass: 'bg-[#fff7e6] text-amber-700 ring-amber-100',
  },
  {
    title: 'Repeatable Look',
    copy: 'Build a consistent visual identity for your page over time.',
    icon: LayoutTemplate,
    iconClass: 'bg-[#fff1f5] text-rose-600 ring-rose-100',
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
    title: 'Perfume Launch Creative',
    category: 'Beauty Product',
    image: '/social-media-graphics/perfume-main.jpg',
    alt: 'Perfume social media graphic design preview',
  },
];

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const ProductPreview = ({ className = '' }: { className?: string }) => (
  <div className={`relative overflow-hidden rounded-lg border border-black/[0.06] bg-white shadow-2xl shadow-black/[0.08] ${className}`}>
    <Image
      src="/social-media-graphics/perfume-main.jpg"
      alt="Perfume product social media creative"
      fill
      sizes="(min-width: 1024px) 420px, 88vw"
      className="object-cover"
      priority
    />
  </div>
);

export default function SocialMediaGraphicsClient() {
  return (
    <div className="min-h-screen w-full bg-[#f5f5f7] font-sans text-[#1d1d1f] selection:bg-emerald-100 selection:text-emerald-900">
      <Header />

      <main className="w-full pt-14">
        <section className="bg-[#f5f5f7] px-5 pb-16 pt-16 md:pb-24 md:pt-24 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <motion.div
              initial="initial"
              animate="animate"
              variants={staggerContainer}
              className="max-w-2xl"
            >
              <motion.div
                variants={fadeIn}
                className="mb-8 inline-flex items-center gap-2 rounded-full border border-black/[0.08] bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#6e6e73] shadow-sm"
              >
                <Sparkles className="h-4 w-4 text-emerald-600" />
                Rs 200 per graphic
              </motion.div>

              <motion.h1
                variants={fadeIn}
                className="text-5xl font-semibold leading-[1.02] tracking-tight text-[#1d1d1f] md:text-7xl"
              >
                Product graphics that make the feed feel premium.
              </motion.h1>

              <motion.p
                variants={fadeIn}
                className="mt-7 max-w-xl text-lg leading-8 text-[#6e6e73] md:text-xl"
              >
                Branded social media creatives for offers, launches, and product posts. Clean layout, sharp hierarchy, and ready-to-post files for Facebook and Instagram.
              </motion.p>

              <motion.div
                variants={fadeIn}
                className="mt-10 flex flex-col gap-3 sm:flex-row"
              >
                <a
                  href={`https://wa.me/9779860479751?text=${whatsappMessage}`}
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-[#1d1d1f] px-7 text-sm font-semibold text-white shadow-lg shadow-black/10 transition hover:-translate-y-0.5 hover:bg-black"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageSquareText className="h-5 w-5" />
                  Order on WhatsApp
                </a>
                <Link
                  href="#showcase"
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-lg border border-black/[0.08] bg-white px-7 text-sm font-semibold text-[#1d1d1f] shadow-sm transition hover:-translate-y-0.5 hover:border-black/20"
                >
                  View showcase
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.97, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="mx-auto w-full max-w-[520px]"
            >
              <div className="rounded-lg border border-black/[0.06] bg-white p-3 shadow-2xl shadow-black/[0.06]">
                <ProductPreview className="aspect-square" />
                <div className="mt-3 grid grid-cols-3 gap-3">
                  {['Square post', 'Story ready', 'Brand matched'].map((label) => (
                    <div key={label} className="rounded-lg bg-[#f5f5f7] px-3 py-3 text-center text-xs font-semibold text-[#6e6e73]">
                      {label}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="bg-white py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="mb-12 max-w-3xl">
              <h2 className="text-xs font-semibold uppercase tracking-[0.22em] text-[#86868b]">What you get</h2>
              <h3 className="mt-4 text-4xl font-semibold tracking-tight text-[#1d1d1f] md:text-5xl">
                Simple, useful graphics for daily selling.
              </h3>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {features.map((feature, idx) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.08 }}
                  className="group rounded-lg border border-black/[0.06] bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-black/[0.06]"
                >
                  <div className={`mb-6 inline-flex h-12 w-12 items-center justify-center rounded-lg ring-1 ${feature.iconClass}`}>
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <h4 className="text-lg font-semibold text-[#1d1d1f]">{feature.title}</h4>
                  <p className="mt-3 text-sm leading-6 text-[#6e6e73]">{feature.copy}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="showcase" className="bg-[#f5f5f7] py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <div className="max-w-2xl">
                <h2 className="text-xs font-semibold uppercase tracking-[0.22em] text-[#86868b]">Showcase</h2>
                <h3 className="mt-4 text-4xl font-semibold tracking-tight text-[#1d1d1f] md:text-5xl">
                  Product creatives with a clean premium finish.
                </h3>
              </div>
              <p className="max-w-sm text-sm font-medium leading-6 text-[#6e6e73]">
                A focused example of how product photography can become a sharp, ready-to-post social creative.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {showcase.map((item, idx) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="group relative"
                >
                  <div className="relative aspect-square overflow-hidden rounded-lg border border-black/[0.06] bg-white shadow-sm transition group-hover:-translate-y-1 group-hover:shadow-2xl group-hover:shadow-black/[0.08]">
                    <Image
                      src={item.image}
                      alt={item.alt}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover"
                    />
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/65 to-transparent p-5">
                      <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/75">{item.category}</p>
                      <h4 className="mt-1 text-xl font-semibold text-white">{item.title}</h4>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#1d1d1f] py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="mb-14 text-center">
              <h2 className="text-xs font-semibold uppercase tracking-[0.22em] text-white/45">Transparent pricing</h2>
              <h3 className="mt-4 text-4xl font-semibold tracking-tight text-white md:text-5xl">
                Order one or plan a rhythm.
              </h3>
            </div>

            <div className="grid gap-5 md:grid-cols-3">
              {packages.map((pkg) => (
                <div
                  key={pkg.name}
                  className={`relative rounded-lg border p-8 transition hover:-translate-y-1 ${
                    pkg.featured
                      ? 'border-emerald-400 bg-emerald-500 text-white shadow-2xl shadow-emerald-950/25'
                      : 'border-white/10 bg-white/[0.06] text-white'
                  }`}
                >
                  {pkg.featured && (
                    <div className="absolute -top-3 left-8 rounded-full bg-white px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-emerald-700">
                      Most popular
                    </div>
                  )}

                  <div className={`mb-8 inline-flex h-12 w-12 items-center justify-center rounded-lg ${pkg.featured ? 'bg-white/20 text-white' : 'bg-white/10 text-white'}`}>
                    <pkg.icon className="h-6 w-6" />
                  </div>

                  <h4 className="text-xl font-semibold">{pkg.name}</h4>
                  <p className="mt-2 text-4xl font-semibold">{pkg.price}</p>
                  <p className={`mt-6 text-sm leading-6 ${pkg.featured ? 'text-white/80' : 'text-white/55'}`}>
                    {pkg.description}
                  </p>

                  <a
                    href={`https://wa.me/9779860479751?text=${encodeURIComponent(`Hi! I'm interested in the ${pkg.name} package for ${pkg.price}.`)}`}
                    className={`mt-10 inline-flex h-12 w-full items-center justify-center rounded-lg text-sm font-semibold transition ${
                      pkg.featured
                        ? 'bg-white text-emerald-700 hover:bg-[#f5f5f7]'
                        : 'bg-white text-[#1d1d1f] hover:bg-[#f5f5f7]'
                    }`}
                  >
                    Select plan
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-20 md:py-28">
          <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[1fr_400px] lg:px-8">
            <div>
              <h2 className="text-xs font-semibold uppercase tracking-[0.22em] text-[#86868b]">How it works</h2>
              <h3 className="mt-4 text-4xl font-semibold tracking-tight text-[#1d1d1f] md:text-5xl">
                From idea to post in 3 steps.
              </h3>
              <div className="mt-14 space-y-8">
                {steps.map((step, idx) => (
                  <div key={step.title} className="grid gap-5 rounded-lg border border-black/[0.06] bg-white p-5 shadow-sm sm:grid-cols-[56px_1fr]">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#f5f5f7] text-lg font-semibold text-[#1d1d1f]">
                      {idx + 1}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <step.icon className="h-5 w-5 text-emerald-600" />
                        <h4 className="text-xl font-semibold text-[#1d1d1f]">{step.title}</h4>
                      </div>
                      <p className="mt-3 max-w-md text-sm leading-6 text-[#6e6e73]">{step.copy}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-lg border border-black/[0.06] bg-[#f5f5f7] p-6">
              <div className="flex flex-col items-center text-center">
                <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-lg bg-[#1d1d1f] text-white shadow-lg shadow-black/10">
                  <Smartphone className="h-7 w-7" />
                </div>
                <h4 className="text-2xl font-semibold text-[#1d1d1f]">WhatsApp Delivery</h4>
                <p className="mt-4 text-sm font-medium leading-7 text-[#6e6e73]">
                  We communicate entirely through WhatsApp. Fast, simple, and no complicated dashboards.
                </p>

                <div className="mt-10 w-full space-y-3">
                  {['High-res JPG/PNG', 'Story and square sizes', '24-hour turnaround'].map((item) => (
                    <div key={item} className="flex items-center gap-3 rounded-lg border border-black/[0.06] bg-white p-4 shadow-sm">
                      <CheckCircle2 className="h-5 w-5 text-emerald-600" />
                      <span className="text-xs font-semibold text-[#1d1d1f]">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#f5f5f7] pb-20 md:pb-28">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="rounded-lg border border-black/[0.06] bg-white p-8 text-center shadow-sm md:p-16">
              <div className="mx-auto mb-8 inline-flex items-center gap-2 rounded-full bg-[#1d1d1f] px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-white">
                <Sparkles className="h-3.5 w-3.5 text-emerald-300" />
                Elevate your feed
              </div>
              <h2 className="mx-auto max-w-3xl text-4xl font-semibold tracking-tight text-[#1d1d1f] md:text-6xl">
                Ready for professional graphics?
              </h2>
              <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-[#6e6e73]">
                Send product photos and offer details. We will return a clean, branded creative without hidden fees or complicated steps.
              </p>
              <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <a
                  href={`https://wa.me/9779860479751?text=${whatsappMessage}`}
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-[#1d1d1f] px-8 text-sm font-semibold text-white shadow-lg shadow-black/10 transition hover:-translate-y-0.5 hover:bg-black"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageSquareText className="h-5 w-5" />
                  WhatsApp Sajedar
                </a>
                <Link
                  href="/contact"
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-lg border border-black/[0.08] bg-white px-8 text-sm font-semibold text-[#1d1d1f] shadow-sm transition hover:-translate-y-0.5 hover:border-black/20"
                >
                  Request custom quote
                  <ArrowRight className="h-4 w-4" />
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
