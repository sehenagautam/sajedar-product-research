import Link from 'next/link';
import {
  ArrowRight,
  BellRing,
  Bot,
  CheckCircle2,
  Clapperboard,
  Code2,
  Globe2,
  ImageIcon,
  Megaphone,
  MessageCircle,
  SearchCheck,
  Sparkles,
  UsersRound,
  Zap,
} from 'lucide-react';
import Header from '../components/Header';
import { Footer } from '../components/sections/Footer';

const whatsappMessage = encodeURIComponent(
  'Hi Sajedar! I want to set up or improve my online business. Please help me choose the right services.'
);

/* Brick data for the ascending staircase */
const bricks = [
  { title: 'Research', icon: SearchCheck, color: '#10b981' },
  { title: 'Website', icon: Code2, color: '#3b82f6' },
  { title: 'CRM', icon: UsersRound, color: '#8b5cf6' },
  { title: 'Graphics', icon: ImageIcon, color: '#f59e0b' },
  { title: 'Video', icon: Clapperboard, color: '#ef4444' },
  { title: 'Ads', icon: Megaphone, color: '#06b6d4' },
  { title: 'Sales Agent', icon: Bot, color: '#10b981' },
];

/* Service cards data */
const services = [
  { title: 'Product Research', href: '/product-market-research', icon: SearchCheck, desc: 'Find winning products with data-driven insights' },
  { title: 'Business Website', href: '/website', icon: Code2, desc: 'Convert visitors into paying customers' },
  { title: 'Custom CRM', href: '/crm', icon: UsersRound, desc: 'Track every lead and customer interaction' },
  { title: 'Social Graphics', href: '/social-media-graphics', icon: ImageIcon, desc: 'Scroll-stopping visuals for your brand' },
  { title: 'AI Videos', href: '/motionmandu', icon: Clapperboard, desc: 'Professional video content at scale' },
  { title: 'Meta Ads', href: '/meta-ads', icon: Megaphone, desc: 'Targeted campaigns that drive real sales' },
  { title: 'AI Sales Agent', href: '/sales-agent', icon: Bot, desc: 'Automate DMs and close sales 24/7' },
];

export default function Home() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-[#fafafa] font-sans text-[#18181b]">
      {/* Noise overlay */}
      <div className="noise-overlay" />
      <Header />

      <main className="w-full">
        {/* HERO SECTION */}
        <section className="relative min-h-screen overflow-hidden bg-[#fafafa]">
          {/* Background effects */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute left-1/2 top-0 h-[600px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-500/[0.06] blur-[120px]" />
            <div className="absolute bottom-0 right-0 h-[400px] w-[600px] translate-x-1/4 rounded-full bg-emerald-500/[0.04] blur-[100px]" />
            <div className="absolute bottom-1/4 left-0 h-[300px] w-[400px] -translate-x-1/4 rounded-full bg-sky-500/[0.03] blur-[100px]" />
            {/* Grid pattern */}
            <div
              className="absolute inset-0 opacity-[0.04]"
              style={{
                backgroundImage: 'linear-gradient(rgba(0,0,0,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.06) 1px, transparent 1px)',
                backgroundSize: '64px 64px',
              }}
            />
          </div>

          <div className="relative mx-auto grid min-h-screen max-w-7xl items-center gap-12 px-6 pb-20 pt-28 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
            {/* Left copy */}
            <div className="max-w-2xl">
              <div className="animate-fade-up mb-8 inline-flex items-center gap-2 rounded-full border border-black/[0.06] bg-white/70 px-4 py-2 text-[13px] font-medium text-[#71717a] backdrop-blur-sm">
                <div className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse-glow" />
                Online business setup partner in Nepal
              </div>

              <h1 className="animate-fade-up text-[clamp(2.5rem,6vw,4.5rem)] font-bold leading-[1.05] tracking-[-0.03em]" style={{ animationDelay: '0.1s' }}>
                <span className="text-gradient">We build the</span>
                <br />
                <span className="text-gradient">system behind</span>
                <br />
                <span className="text-gradient-accent">your online business.</span>
              </h1>

              <p className="animate-fade-up mt-6 max-w-lg text-[16px] leading-relaxed text-[#71717a]" style={{ animationDelay: '0.2s' }}>
                From DMs to a complete sales engine. Website, CRM, ads, creative, and AI automation. One partner, every step.
              </p>

              <div className="animate-fade-up mt-10 flex flex-wrap gap-3" style={{ animationDelay: '0.3s' }}>
                <a
                  href={`https://wa.me/9779860479751?text=${whatsappMessage}`}
                  className="group inline-flex items-center gap-2.5 rounded-xl bg-emerald-500 px-6 py-3 text-[14px] font-semibold text-white shadow-lg shadow-emerald-500/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-emerald-400 hover:shadow-xl hover:shadow-emerald-500/30"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="h-4 w-4" aria-hidden="true" />
                  Start setup
                </a>
                <Link
                  href="/services"
                  className="group inline-flex items-center gap-2 rounded-xl border border-black/[0.08] bg-white/60 px-6 py-3 text-[14px] font-medium text-[#52525b] transition-all duration-300 hover:border-black/[0.15] hover:bg-white hover:text-[#18181b]"
                >
                  View services
                  <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" aria-hidden="true" />
                </Link>
              </div>

              {/* Proof points */}
              <div className="animate-fade-up mt-12 flex flex-wrap gap-x-6 gap-y-3" style={{ animationDelay: '0.4s' }}>
                {['Social-first businesses', 'Nepal pricing', 'Plan on WhatsApp'].map((point) => (
                  <div key={point} className="flex items-center gap-2 text-[13px] text-[#a1a1aa]">
                    <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500/60" aria-hidden="true" />
                    {point}
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Ascending brick staircase */}
            <div className="relative hidden min-h-[480px] lg:block">
              {/* Ambient glow */}
              <div className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-500/[0.06] blur-[80px]" />

              {/* Ascending path line */}
              <svg className="absolute inset-0 h-full w-full" viewBox="0 0 500 480" fill="none" preserveAspectRatio="xMidYMid meet">
                <path
                  d="M 60 420 Q 120 380 140 340 Q 160 300 200 270 Q 240 240 270 200 Q 300 160 340 130 Q 380 100 420 70"
                  stroke="url(#pathGrad)"
                  strokeWidth="1"
                  strokeDasharray="6 6"
                  opacity="0.5"
                  fill="none"
                />
                <defs>
                  <linearGradient id="pathGrad" x1="60" y1="420" x2="420" y2="70" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#10b981" stopOpacity="0" />
                    <stop offset="0.3" stopColor="#10b981" stopOpacity="0.5" />
                    <stop offset="1" stopColor="#10b981" stopOpacity="0.15" />
                  </linearGradient>
                </defs>
              </svg>

              {/* Bricks ascending from bottom-left to top-right */}
              {bricks.map((brick, i) => {
                const Icon = brick.icon;
                const total = bricks.length;
                const xPercent = 2 + (i / (total - 1)) * 62;
                const yPercent = 78 - (i / (total - 1)) * 68;
                const isLast = i === total - 1;

                return (
                  <div
                    key={brick.title}
                    className="animate-fade-up absolute"
                    style={{
                      left: `${xPercent}%`,
                      top: `${yPercent}%`,
                      animationDelay: `${0.3 + i * 0.1}s`,
                      zIndex: i + 1,
                    }}
                  >
                    <div
                      className={`flex items-center gap-3 rounded-xl border px-5 py-3 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 ${
                        isLast
                          ? 'border-emerald-500/30 bg-emerald-50 shadow-lg shadow-emerald-500/10 hover:border-emerald-500/40'
                          : 'border-black/[0.06] bg-white/80 shadow-sm hover:border-black/[0.12] hover:shadow-md'
                      }`}
                      style={{ minWidth: '140px' }}
                    >
                      <div
                        className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg"
                        style={{ backgroundColor: `${brick.color}12` }}
                      >
                        <Icon className="h-4 w-4" style={{ color: brick.color }} aria-hidden="true" />
                      </div>
                      <div>
                        <p className={`text-[13px] font-semibold ${isLast ? 'text-emerald-700' : 'text-[#3f3f46]'}`}>
                          {brick.title}
                        </p>
                        <p className="text-[11px] text-[#d4d4d8]">
                          {String(i + 1).padStart(2, '0')}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}

              {/* Final destination label */}
              <div className="animate-fade-up absolute right-2 top-4 flex items-center gap-2 text-[12px] text-emerald-600/50" style={{ animationDelay: '1.1s' }}>
                <Zap className="h-3 w-3" />
                Complete system
              </div>
            </div>
          </div>

          {/* Bottom fade */}
          <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#fafafa] to-transparent" />
        </section>

        {/* SERVICES SECTION */}
        <section id="services-pipeline" className="relative overflow-hidden bg-[#fafafa] px-6 py-24 lg:px-8">
          {/* Background */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute left-1/2 top-0 h-[500px] w-[700px] -translate-x-1/2 -translate-y-1/3 rounded-full bg-emerald-500/[0.03] blur-[120px]" />
          </div>

          <div className="relative mx-auto max-w-7xl">
            {/* Section header */}
            <div className="mx-auto mb-16 max-w-2xl text-center">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-black/[0.06] bg-white/70 px-4 py-2 text-[12px] font-medium uppercase tracking-[0.15em] text-[#a1a1aa]">
                <Sparkles className="h-3 w-3 text-emerald-500/60" aria-hidden="true" />
                Services
              </div>

              <h2 className="text-[clamp(2rem,4.5vw,3.5rem)] font-bold leading-[1.1] tracking-[-0.03em]">
                <span className="text-gradient">From idea to</span>{' '}
                <span className="text-gradient-accent">sales.</span>
              </h2>

              <p className="mt-5 text-[16px] leading-relaxed text-[#a1a1aa]">
                Each service connects to the next. One clear path from product research to automated sales.
              </p>
            </div>

            {/* CTA */}
            <div className="mb-12 flex justify-center">
              <Link
                href="/services"
                className="group inline-flex items-center gap-2.5 rounded-full border border-black/[0.06] bg-white/70 px-6 py-3 text-[14px] font-medium text-[#52525b] transition-all duration-300 hover:border-emerald-500/20 hover:bg-emerald-50 hover:text-emerald-700"
              >
                Explore all services
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" aria-hidden="true" />
              </Link>
            </div>

            {/* Services grid */}
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <Link
                    key={service.href}
                    href={service.href}
                    className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-black/[0.06] bg-white/60 p-6 transition-all duration-500 hover:border-black/[0.1] hover:bg-white hover:shadow-lg hover:shadow-black/[0.04]"
                  >
                    {/* Hover glow */}
                    <div className="pointer-events-none absolute -top-20 left-1/2 h-40 w-40 -translate-x-1/2 rounded-full bg-emerald-500/[0.05] opacity-0 blur-[60px] transition-opacity duration-500 group-hover:opacity-100" />

                    <div className="relative">
                      {/* Number */}
                      <span className="text-[11px] font-medium text-[#d4d4d8]">
                        {String(index + 1).padStart(2, '0')}
                      </span>

                      {/* Icon */}
                      <div className="mt-4 flex h-10 w-10 items-center justify-center rounded-xl border border-black/[0.06] bg-[#fafafa]">
                        <Icon className="h-5 w-5 text-emerald-600/70" aria-hidden="true" />
                      </div>

                      {/* Title */}
                      <h3 className="mt-4 text-[17px] font-semibold tracking-tight text-[#18181b]">
                        {service.title}
                      </h3>

                      {/* Description */}
                      <p className="mt-2 text-[13px] leading-relaxed text-[#a1a1aa]">
                        {service.desc}
                      </p>
                    </div>

                    {/* Arrow */}
                    <div className="mt-6 flex justify-end">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full border border-black/[0.06] text-[#d4d4d8] transition-all duration-300 group-hover:border-emerald-500/30 group-hover:bg-emerald-50 group-hover:text-emerald-600">
                        <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* SYSTEM OVERVIEW SECTION */}
        <section className="relative overflow-hidden border-t border-black/[0.04] bg-[#f4f4f5] px-6 py-24 lg:px-8">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute right-0 top-1/2 h-[500px] w-[500px] -translate-y-1/2 translate-x-1/3 rounded-full bg-emerald-500/[0.04] blur-[120px]" />
          </div>

          <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-black/[0.06] bg-white/70 px-4 py-2 text-[12px] font-medium uppercase tracking-[0.15em] text-[#a1a1aa]">
                Full setup, one partner
              </div>
              <h2 className="text-[clamp(1.8rem,4vw,3rem)] font-bold leading-[1.1] tracking-[-0.03em]">
                <span className="text-gradient">Everything connected.</span>
                <br />
                <span className="text-gradient-accent">One dashboard.</span>
              </h2>
              <p className="mt-5 max-w-md text-[15px] leading-relaxed text-[#a1a1aa]">
                Your website, CRM, customer chats, and order data. All wired together through Sajedar.
              </p>
            </div>

            {/* Dashboard mockup */}
            <div className="relative">
              <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-500/[0.06] blur-[80px]" />
              <div className="relative overflow-hidden rounded-2xl border border-black/[0.06] bg-white/60 p-1 backdrop-blur-sm shadow-xl shadow-black/[0.04]">
                <div className="rounded-xl border border-black/[0.04] bg-white p-5">
                  {/* Top bar */}
                  <div className="flex items-center justify-between border-b border-black/[0.06] pb-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-50">
                        <Sparkles className="h-4 w-4 text-emerald-600" aria-hidden="true" />
                      </div>
                      <div>
                        <p className="text-[14px] font-semibold text-[#18181b]">Sajedar</p>
                        <p className="text-[11px] font-medium uppercase tracking-wider text-emerald-600/60">Business OS</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                      <span className="text-[11px] text-[#a1a1aa]">Live</span>
                    </div>
                  </div>

                  {/* Content grid */}
                  <div className="mt-4 grid gap-3 md:grid-cols-[1.1fr_0.9fr]">
                    {/* Website preview */}
                    <div className="rounded-xl border border-black/[0.04] bg-[#fafafa] p-4">
                      <div className="flex items-center justify-between">
                        <p className="text-[11px] font-medium uppercase tracking-wider text-emerald-600/60">ashwi.sajedar.com</p>
                        <Globe2 className="h-3.5 w-3.5 text-[#d4d4d8]" aria-hidden="true" />
                      </div>
                      <div className="mt-5 space-y-2">
                        <div className="h-2.5 w-3/4 rounded-full bg-black/[0.04]" />
                        <div className="h-2.5 w-1/2 rounded-full bg-black/[0.03]" />
                      </div>
                      <div className="mt-5 grid grid-cols-3 gap-2">
                        <div className="h-14 rounded-lg bg-emerald-50" />
                        <div className="h-14 rounded-lg bg-sky-50" />
                        <div className="h-14 rounded-lg bg-amber-50" />
                      </div>
                    </div>

                    {/* Side panels */}
                    <div className="grid gap-3">
                      <div className="rounded-xl border border-black/[0.04] bg-[#fafafa] p-4">
                        <div className="flex items-center gap-2.5">
                          <MessageCircle className="h-4 w-4 text-emerald-600/60" aria-hidden="true" />
                          <p className="text-[13px] font-medium text-[#52525b]">Customer chats</p>
                        </div>
                        <div className="mt-3 space-y-1.5">
                          <div className="h-2 w-full rounded-full bg-black/[0.03]" />
                          <div className="h-2 w-2/3 rounded-full bg-emerald-100" />
                        </div>
                      </div>
                      <div className="rounded-xl border border-black/[0.04] bg-[#fafafa] p-4">
                        <div className="flex items-center gap-2.5">
                          <BellRing className="h-4 w-4 text-sky-500/60" aria-hidden="true" />
                          <p className="text-[13px] font-medium text-[#52525b]">Orders connected</p>
                        </div>
                        <div className="mt-3 grid grid-cols-2 gap-2">
                          <div className="rounded-lg bg-emerald-50 p-2.5">
                            <p className="text-[17px] font-bold text-emerald-700">13</p>
                          </div>
                          <div className="rounded-lg bg-sky-50 p-2.5">
                            <p className="text-[13px] font-semibold text-sky-600">CRM</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA SECTION */}
        <section className="relative overflow-hidden border-t border-black/[0.04] bg-[#fafafa] px-6 py-24 lg:px-8">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute bottom-0 left-1/2 h-[300px] w-[600px] -translate-x-1/2 translate-y-1/2 rounded-full bg-emerald-500/[0.04] blur-[100px]" />
          </div>

          <div className="relative mx-auto max-w-3xl">
            <div className="overflow-hidden rounded-2xl border border-black/[0.06] bg-white/70 p-8 text-center backdrop-blur-sm shadow-lg shadow-black/[0.03] md:p-12">
              <div className="mx-auto mb-6 flex h-12 w-12 items-center justify-center rounded-2xl border border-emerald-200 bg-emerald-50">
                <MessageCircle className="h-5 w-5 text-emerald-600" aria-hidden="true" />
              </div>
              <h2 className="text-[clamp(1.5rem,3vw,2rem)] font-bold tracking-[-0.02em] text-[#18181b]">
                Tell us where your business is stuck.
              </h2>
              <p className="mx-auto mt-3 max-w-lg text-[14px] leading-relaxed text-[#a1a1aa]">
                We&apos;ll help you choose the right combination: website, CRM, ads, graphics, videos, research, or AI sales automation.
              </p>
              <a
                href={`https://wa.me/9779860479751?text=${whatsappMessage}`}
                className="mt-8 inline-flex items-center gap-2.5 rounded-xl bg-emerald-500 px-7 py-3.5 text-[14px] font-semibold text-white shadow-lg shadow-emerald-500/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-emerald-400 hover:shadow-xl hover:shadow-emerald-500/30"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                WhatsApp Sajedar
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
