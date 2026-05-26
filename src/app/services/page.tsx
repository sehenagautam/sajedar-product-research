'use client';

import Link from 'next/link';
import {
  ArrowRight,
  Bot,
  Clapperboard,
  Eye,
  ImageIcon,
  Layout,
  Megaphone,
  MessageCircle,
  SearchCheck,
  Sparkles,
  Zap,
  ChevronRight,
  BrainCircuit,
} from 'lucide-react';
import Header from '../../components/Header';
import { Footer } from '../../components/sections/Footer';
import { useEffect, useRef, useState } from 'react';

const services = [
  {
    title: 'Product Market Research',
    href: '/product-market-research',
    price: 'Starts at Rs 3,000',
    symptom: 'You have a product idea, but no proof people will buy.',
    input: 'Category, price range, target customer',
    output: 'Demand read, positioning angle, launch direction',
    icon: SearchCheck,
    accent: '#10b981',
    accentDim: 'rgba(16,185,129,0.12)',
    lane: 'Signal',
    tag: '01',
  },
  {
    title: 'Jasus AI Competitor Insights',
    href: '/jasus-ai',
    price: 'Rs 2,500 for 3 competitors',
    symptom: 'Competitors are moving fast and you are guessing.',
    input: 'Three competitor names or pages',
    output: 'Ad insights, pricing shifts, winning hooks',
    icon: Eye,
    accent: '#f43f5e',
    accentDim: 'rgba(244,63,94,0.12)',
    lane: 'Intel',
    tag: '02',
  },
  {
    title: 'Website + CRM',
    href: '/website-crm',
    price: 'Starts at Rs 14,000',
    symptom: 'Your DMs, orders, and customer details are scattered.',
    input: 'Offer, pages, order process, team workflow',
    output: 'Website, lead capture, CRM pipeline',
    icon: Layout,
    accent: '#3b82f6',
    accentDim: 'rgba(59,130,246,0.12)',
    lane: 'Base',
    tag: '03',
  },
  {
    title: 'Sajedar Creatives',
    href: '/creatives',
    price: 'Graphics: Rs 200 | Videos: Rs 2,000',
    symptom: 'Your offer is strong, but your visual content looks weak or inconsistent.',
    input: 'Photos, offer, brand feel, goal',
    output: 'Branded graphics and cinematic AI videos',
    icon: Sparkles,
    accent: '#f59e0b',
    accentDim: 'rgba(245,158,11,0.12)',
    lane: 'Creative',
    tag: '04',
  },
  {
    title: 'Meta Ads Planning',
    href: '/meta-ads',
    price: 'Budget plan via WhatsApp',
    symptom: 'You want ads, but the budget and structure are unclear.',
    input: 'Goal, audience, offer, monthly budget',
    output: 'Campaign plan, testing logic, spend guidance',
    icon: Megaphone,
    accent: '#06b6d4',
    accentDim: 'rgba(6,182,212,0.12)',
    lane: 'Demand',
    tag: '05',
  },
  {
    title: 'AI Sales Agent',
    href: '/sales-agent',
    price: 'Starts at Rs 4,000',
    symptom: 'Chats come in, but replies are slow or inconsistent.',
    input: 'FAQs, products, policies, tone',
    output: 'Messenger agent that answers and recommends',
    icon: Bot,
    accent: '#10b981',
    accentDim: 'rgba(16,185,129,0.12)',
    lane: 'Sales',
    tag: '06',
  },
  {
    title: 'AI Strategy Consulting',
    href: '/ai-strategy-consulting',
    price: 'Rs 5,000 / session',
    symptom: 'You want to use AI but do not know where to start.',
    input: 'Goals, current tools, team size',
    output: 'AI roadmap, tool selection, automation plan',
    icon: BrainCircuit,
    accent: '#8b5cf6',
    accentDim: 'rgba(139,92,246,0.12)',
    lane: 'Strategy',
    tag: '07',
  },
];

const diagnostics = [
  { problem: 'I do not know what to sell next.', module: 'Product Market Research', href: '/product-market-research' },
  { problem: 'My competitors are suddenly everywhere.', module: 'Jasus AI Competitor Insights', href: '/jasus-ai' },
  { problem: 'Customers ask, then disappear.', module: 'AI Sales Agent', href: '/sales-agent' },
  { problem: 'We have interest, but no proper system.', module: 'Website + CRM', href: '/website-crm' },
  { problem: 'The offer is good but looks weak online.', module: 'Sajedar Creatives', href: '/creatives' },
  { problem: 'AI is moving fast and I am confused.', module: 'AI Strategy Consulting', href: '/ai-strategy-consulting' },
];

const whatsappMessage = encodeURIComponent('Hi Sajedar! I want to discuss which service is best for my business.');

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const Icon = service.icon;
  return (
    <Link
      href={service.href}
      className="group relative overflow-hidden rounded-2xl border transition-all duration-500"
      style={{
        background: 'rgba(255,255,255,0.03)',
        borderColor: 'rgba(255,255,255,0.06)',
        animationDelay: `${index * 80}ms`,
      }}
    >
      {/* Hover glow */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 rounded-2xl"
        style={{ background: `radial-gradient(400px at 50% 0%, ${service.accentDim}, transparent 70%)` }}
      />
      {/* Top accent line */}
      <div
        className="absolute top-0 left-6 right-6 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ background: `linear-gradient(90deg, transparent, ${service.accent}, transparent)` }}
      />

      <div className="relative p-6">
        {/* Header row */}
        <div className="flex items-start justify-between mb-6">
          <div
            className="flex h-12 w-12 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-110"
            style={{ background: service.accentDim, border: `1px solid ${service.accent}22` }}
          >
            <Icon className="h-5 w-5" style={{ color: service.accent }} />
          </div>
          <span className="text-[11px] font-bold tracking-[0.2em] text-white/20">{service.tag}</span>
        </div>

        {/* Lane badge */}
        <div className="mb-3">
          <span
            className="inline-block rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-[0.16em]"
            style={{ background: service.accentDim, color: service.accent }}
          >
            {service.lane}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-xl font-semibold leading-snug tracking-tight text-white mb-2">
          {service.title}
        </h3>

        {/* Symptom */}
        <p className="text-sm leading-relaxed text-white/40 mb-6">
          {service.symptom}
        </p>

        {/* Input / Output */}
        <div className="grid grid-cols-2 gap-2 mb-6">
          {[['In', service.input], ['Out', service.output]].map(([label, val]) => (
            <div key={label} className="rounded-xl p-3" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)' }}>
              <p className="text-[9px] font-bold uppercase tracking-[0.18em] mb-1.5" style={{ color: service.accent }}>
                {label}
              </p>
              <p className="text-xs leading-relaxed text-white/50">{val}</p>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between">
          <span className="text-xs font-semibold" style={{ color: service.accent }}>
            {service.price}
          </span>
          <span
            className="flex h-8 w-8 items-center justify-center rounded-full transition-all duration-300 group-hover:translate-x-1"
            style={{ background: service.accentDim, border: `1px solid ${service.accent}33` }}
          >
            <ArrowRight className="h-3.5 w-3.5" style={{ color: service.accent }} />
          </span>
        </div>
      </div>
    </Link>
  );
}

export default function ServicesPage() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      if (!heroRef.current) return;
      const rect = heroRef.current.getBoundingClientRect();
      setMousePos({
        x: ((e.clientX - rect.left) / rect.width) * 100,
        y: ((e.clientY - rect.top) / rect.height) * 100,
      });
    };
    window.addEventListener('mousemove', handleMouse);
    return () => window.removeEventListener('mousemove', handleMouse);
  }, []);

  return (
    <div className="min-h-screen w-full font-sans" style={{ background: '#0a0a0b', color: '#fff' }}>

      {/* Global radial gradient base */}
      <div className="pointer-events-none fixed inset-0 z-0" style={{
        background: 'radial-gradient(ellipse 80% 50% at 50% -10%, rgba(16,185,129,0.08) 0%, transparent 60%)',
      }} />

      <Header />

      <main className="relative z-10 w-full pt-14">

        {/* ─── HERO ─── */}
        <section
          ref={heroRef}
          className="relative overflow-hidden px-6 py-24 lg:px-8 lg:py-36"
        >
          {/* Interactive mouse-follow glow */}
          <div
            className="pointer-events-none absolute inset-0 transition-opacity duration-300"
            style={{
              background: `radial-gradient(600px at ${mousePos.x}% ${mousePos.y}%, rgba(16,185,129,0.06), transparent 60%)`,
            }}
          />

          {/* Decorative grid */}
          <div className="pointer-events-none absolute inset-0" style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
            maskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black, transparent)',
          }} />

          <div className="relative mx-auto max-w-7xl">
            <div className="mx-auto max-w-4xl text-center">

              {/* Eyebrow pill */}
              <div className="mb-8 inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-bold uppercase tracking-[0.18em]"
                style={{ background: 'rgba(16,185,129,0.1)', border: '1px solid rgba(16,185,129,0.2)', color: '#10b981' }}>
                <Sparkles className="h-3 w-3" />
                Sajedar Services
              </div>

              {/* H1 */}
              <h1 className="text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl lg:text-8xl">
                <span style={{
                  background: 'linear-gradient(135deg, #fff 0%, rgba(255,255,255,0.7) 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}>
                  Tell us the symptom.
                </span>
                <br />
                <span style={{
                  background: 'linear-gradient(135deg, #10b981 0%, #059669 50%, #34d399 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}>
                  We pick the module.
                </span>
              </h1>

              <p className="mx-auto mt-8 max-w-xl text-lg leading-8 text-white/40">
                Start with the business pain. We route it to the smallest useful service first, then connect the next module only when it helps.
              </p>

              {/* CTAs */}
              <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                <a
                  href={`https://wa.me/9779860479751?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex h-13 items-center gap-2.5 rounded-full px-7 text-sm font-bold text-black transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                  style={{
                    background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                    boxShadow: '0 0 40px rgba(16,185,129,0.3)',
                    height: '52px',
                  }}
                >
                  <MessageCircle className="h-4 w-4" />
                  Ask on WhatsApp
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </a>
                <Link
                  href="#service-catalog"
                  className="inline-flex h-13 items-center gap-2 rounded-full px-7 text-sm font-semibold text-white/70 transition-all duration-300 hover:text-white"
                  style={{ height: '52px', border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(255,255,255,0.04)' }}
                >
                  See all services
                  <ChevronRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* ─── SYMPTOM ROUTING PANEL ─── */}
            <div
              className="mx-auto mt-20 max-w-3xl rounded-2xl overflow-hidden"
              style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}
            >
              <div className="flex items-center justify-between px-5 py-4" style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                <div className="flex items-center gap-2">
                  <Zap className="h-3.5 w-3.5 text-emerald-400" />
                  <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-white/30">Symptom Router</span>
                </div>
                <span className="rounded-full px-2.5 py-0.5 text-[10px] font-bold text-emerald-400 uppercase tracking-wider" style={{ background: 'rgba(16,185,129,0.1)', border: '1px solid rgba(16,185,129,0.15)' }}>Nepal</span>
              </div>
              <div className="divide-y" style={{ borderColor: 'rgba(255,255,255,0.04)' }}>
                {diagnostics.map((item, i) => (
                  <Link
                    key={item.problem}
                    href={item.href}
                    className="group flex items-center gap-4 px-5 py-4 transition-all duration-200 hover:bg-white/[0.03]"
                  >
                    <span
                      className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg text-[11px] font-bold"
                      style={{ background: 'rgba(255,255,255,0.05)', color: 'rgba(255,255,255,0.3)' }}
                    >
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <p className="flex-1 text-sm font-medium text-white/60 group-hover:text-white/90 transition-colors">
                      {item.problem}
                    </p>
                    <span className="hidden text-xs font-semibold text-emerald-400 sm:block shrink-0">
                      {item.module}
                    </span>
                    <ArrowRight className="h-3.5 w-3.5 text-white/20 transition-all group-hover:translate-x-1 group-hover:text-emerald-400 shrink-0" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ─── PRINCIPLES STRIP ─── */}
        <div className="border-y px-6" style={{ borderColor: 'rgba(255,255,255,0.06)', background: 'rgba(255,255,255,0.015)' }}>
          <div className="mx-auto max-w-7xl grid sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x" style={{ borderColor: 'rgba(255,255,255,0.06)' }}>
            {[
              ['Every module runs alone.', 'Start with the one bottleneck that matters today.'],
              ['Each module plugs into the next.', 'Add the next layer only when the business is ready.'],
              ['Prices in Nepali rupees.', 'Clear entry points without enterprise packaging.'],
            ].map(([point, detail]) => (
              <div key={point} className="px-6 py-8">
                <p className="text-sm font-semibold text-white/80 mb-1.5">{point}</p>
                <p className="text-xs leading-relaxed text-white/35">{detail}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ─── SERVICE CATALOG ─── */}
        <section id="service-catalog" className="px-6 py-24 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="mb-16 text-center">
              <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.24em] text-emerald-400">Module shelf</p>
              <h2
                className="mx-auto max-w-3xl text-4xl font-bold leading-tight tracking-tight md:text-5xl"
                style={{
                  background: 'linear-gradient(135deg, #fff 0%, rgba(255,255,255,0.6) 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Choose the part that moves the business forward.
              </h2>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {services.slice(0, 6).map((s, i) => (
                <ServiceCard key={s.href} service={s} index={i} />
              ))}
            </div>

            {/* Last card centered */}
            <div className="mt-4 flex justify-center">
              <div className="w-full sm:w-1/2 lg:w-1/3">
                <ServiceCard service={services[6]} index={6} />
              </div>
            </div>
          </div>
        </section>

        {/* ─── CTA BANNER ─── */}
        <section className="px-6 pb-24 lg:px-8">
          <div
            className="mx-auto max-w-5xl overflow-hidden rounded-3xl relative"
            style={{ background: 'linear-gradient(135deg, rgba(16,185,129,0.12) 0%, rgba(5,150,105,0.06) 50%, rgba(16,185,129,0.08) 100%)', border: '1px solid rgba(16,185,129,0.15)' }}
          >
            {/* Decorative glow */}
            <div className="pointer-events-none absolute -top-24 -right-24 h-64 w-64 rounded-full" style={{ background: 'radial-gradient(circle, rgba(16,185,129,0.2), transparent 70%)' }} />
            <div className="pointer-events-none absolute -bottom-24 -left-24 h-64 w-64 rounded-full" style={{ background: 'radial-gradient(circle, rgba(16,185,129,0.1), transparent 70%)' }} />

            <div className="relative flex flex-col items-center gap-8 px-8 py-16 text-center md:flex-row md:text-left md:justify-between">
              <div>
                <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.2em] text-emerald-400">Need help deciding?</p>
                <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
                  Send one messy voice note.
                </h2>
                <p className="mt-3 max-w-lg text-sm leading-7 text-white/40">
                  Tell us what is happening in your business. We will translate it into the smallest useful module first.
                </p>
              </div>
              <a
                href={`https://wa.me/9779860479751?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex flex-shrink-0 items-center gap-2.5 rounded-full px-7 py-4 text-sm font-bold text-black transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                style={{
                  background: 'linear-gradient(135deg, #10b981, #059669)',
                  boxShadow: '0 0 40px rgba(16,185,129,0.25)',
                }}
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp Sajedar
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
