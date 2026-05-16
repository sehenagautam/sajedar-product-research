import { Metadata } from 'next';
import Link from 'next/link';
import {
  ArrowRight,
  Bot,
  CheckCircle2,
  Clapperboard,
  Eye,
  ImageIcon,
  Layout,
  Megaphone,
  MessageCircle,
  SearchCheck,
  Sparkles,
} from 'lucide-react';
import Header from '../../components/Header';
import { Footer } from '../../components/sections/Footer';

export const metadata: Metadata = {
  title: 'Services for Nepali Businesses',
  description: 'Explore Sajedar services for Nepali businesses: AI sales agents, AI videos, Meta ads, custom CRM, business websites, product market research, and social media graphics.',
  alternates: { canonical: '/services' },
  openGraph: {
    title: 'Sajedar Services',
    description: 'AI, ads, CRM, video, website, research, and social media graphics services for Nepali businesses.',
    url: 'https://sajedar.com/services',
    siteName: 'Sajedar',
    type: 'website',
  },
};

const services = [
  {
    title: 'Product Market Research',
    href: '/product-market-research',
    price: 'Starts at Rs 3,000',
    description: 'Validate demand, map competitors, and find the angle before you spend on inventory or ads.',
    icon: SearchCheck,
    tone: 'emerald',
    tag: 'Start here',
  },
  {
    title: 'Jasus AI Competitor Tracking',
    href: '/jasus-ai',
    price: 'Rs 2,500 for 3 competitors',
    description: 'Track ads, pricing moves, winning offers, and market signals from brands in your category.',
    icon: Eye,
    tone: 'red',
    tag: 'Market intel',
  },
  {
    title: 'Website + CRM',
    href: '/website-crm',
    price: 'Starts at Rs 14,000',
    description: 'A clean business site connected to leads, customer records, orders, and follow-ups.',
    icon: Layout,
    tone: 'blue',
    tag: 'System setup',
  },
  {
    title: 'Social Media Graphics',
    href: '/social-media-graphics',
    price: 'Rs 200 per graphic',
    description: 'Fast, branded post creatives for offers, product launches, reels covers, and campaigns.',
    icon: ImageIcon,
    tone: 'amber',
    tag: 'Creative',
  },
  {
    title: 'Motionmandu AI Videos',
    href: '/motionmandu',
    price: 'Starts at Rs 2,000',
    description: 'AI-generated product and offer videos for short-form campaigns and social media.',
    icon: Clapperboard,
    tone: 'rose',
    tag: 'Video',
  },
  {
    title: 'Meta Ads Planning',
    href: '/meta-ads',
    price: 'Budget plan via WhatsApp',
    description: 'Practical Facebook and Instagram ad planning for Nepali businesses with grounded budget guidance.',
    icon: Megaphone,
    tone: 'cyan',
    tag: 'Growth',
  },
  {
    title: 'AI Sales Agent',
    href: '/sales-agent',
    price: 'Starts at Rs 4,000',
    description: 'Messenger sales agents that answer questions, recommend products, and move customers toward purchase.',
    icon: Bot,
    tone: 'teal',
    tag: 'Conversion',
  },
];

const toneClasses = {
  emerald: 'bg-emerald-50 text-emerald-700 ring-emerald-100 group-hover:bg-emerald-600 group-hover:text-white',
  red: 'bg-red-50 text-red-600 ring-red-100 group-hover:bg-red-600 group-hover:text-white',
  blue: 'bg-blue-50 text-blue-600 ring-blue-100 group-hover:bg-blue-600 group-hover:text-white',
  amber: 'bg-amber-50 text-amber-700 ring-amber-100 group-hover:bg-amber-500 group-hover:text-white',
  rose: 'bg-rose-50 text-rose-600 ring-rose-100 group-hover:bg-rose-600 group-hover:text-white',
  cyan: 'bg-cyan-50 text-cyan-700 ring-cyan-100 group-hover:bg-cyan-600 group-hover:text-white',
  teal: 'bg-teal-50 text-teal-700 ring-teal-100 group-hover:bg-teal-600 group-hover:text-white',
};

const serviceFlow = ['Research', 'Position', 'Build', 'Promote', 'Convert'];

const whatsappMessage = encodeURIComponent(
  'Hi Sajedar! I want to discuss which service is best for my business.'
);

export default function ServicesPage() {
  return (
    <div className="min-h-screen w-full bg-[#f7f8f6] font-sans text-[#27272a]">
      <Header />

      <main className="w-full pt-14">
        <section className="relative overflow-hidden border-b border-black/10 bg-[#08110f] text-white">
          <div
            className="absolute inset-0 opacity-[0.08]"
            style={{
              backgroundImage: 'linear-gradient(rgba(255,255,255,0.14) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.14) 1px, transparent 1px)',
              backgroundSize: '56px 56px',
            }}
          />

          <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[1fr_390px] lg:px-8 lg:py-24">
            <div className="max-w-3xl">
              <p className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-2 text-xs font-black uppercase tracking-[0.22em] text-emerald-300">
                <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
                Sajedar Services
              </p>
              <h1 className="mt-7 text-4xl font-black leading-[1.04] tracking-tight md:text-6xl">
                One service menu for businesses selling online in Nepal.
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-8 text-emerald-50/70 md:text-lg">
                Pick a single service or connect the full operating system: research, competitor tracking, website, CRM, creative, ads, and AI sales automation.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a
                  href={`https://wa.me/9779860479751?text=${whatsappMessage}`}
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-emerald-500 px-6 text-sm font-black text-white shadow-lg shadow-emerald-950/30 transition hover:-translate-y-0.5 hover:bg-emerald-400"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="h-4 w-4" aria-hidden="true" />
                  Ask on WhatsApp
                </a>
                <Link
                  href="#service-catalog"
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-lg border border-white/15 bg-white/5 px-6 text-sm font-black text-white transition hover:-translate-y-0.5 hover:bg-white/10"
                >
                  See catalog
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </div>

            <div className="border border-white/10 bg-white/[0.04] p-5 shadow-2xl shadow-black/20 backdrop-blur-sm">
              <p className="text-xs font-black uppercase tracking-[0.2em] text-emerald-300">Operating flow</p>
              <div className="mt-5 space-y-3">
                {serviceFlow.map((step, index) => (
                  <div key={step} className="flex items-center gap-3 border border-white/10 bg-black/15 p-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded bg-emerald-400/10 text-xs font-black text-emerald-300">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span className="text-sm font-bold text-white">{step}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 border-t border-white/10 pt-5">
                <p className="text-sm leading-6 text-emerald-50/70">
                  Most clients start with one blocker. We turn it into a connected next step so the system keeps improving.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="service-catalog" className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
          <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.2em] text-emerald-700">Catalog</p>
              <h2 className="mt-3 text-3xl font-black tracking-tight text-[#18181b] md:text-4xl">
                Choose the part you need fixed.
              </h2>
            </div>
            <p className="max-w-md text-sm leading-6 text-[#71717a]">
              Prices are shown in Nepali rupees where the service has a clear starter package. Custom scopes are planned on WhatsApp.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <Link
                  key={service.href}
                  href={service.href}
                  className="group relative flex min-h-[260px] flex-col rounded-lg border border-black/[0.06] bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-emerald-300 hover:shadow-xl hover:shadow-black/[0.07]"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className={`flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg ring-1 transition-colors ${toneClasses[service.tone as keyof typeof toneClasses]}`}>
                      <Icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <span className="rounded-full border border-black/[0.06] px-3 py-1 text-[11px] font-black uppercase tracking-[0.12em] text-[#a1a1aa]">
                      {service.tag}
                    </span>
                  </div>
                  <h2 className="mt-6 text-xl font-black tracking-tight text-[#18181b]">
                    {service.title}
                  </h2>
                  <p className="mt-2 text-sm font-black text-emerald-700">{service.price}</p>
                  <p className="mt-4 text-sm leading-7 text-[#71717a]">{service.description}</p>
                  <div className="mt-auto flex items-center justify-between pt-6">
                    <span className="text-xs font-black uppercase tracking-[0.14em] text-[#a1a1aa]">Open service</span>
                    <span className="flex h-8 w-8 items-center justify-center rounded-full border border-black/[0.08] text-[#a1a1aa] transition group-hover:border-emerald-500 group-hover:bg-emerald-500 group-hover:text-white">
                      <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>

        <section className="border-y border-black/[0.06] bg-white px-6 py-14 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.2em] text-emerald-700">How to choose</p>
              <h2 className="mt-3 text-3xl font-black tracking-tight text-[#18181b]">
                Start with the bottleneck.
              </h2>
            </div>
            <div className="grid gap-3 md:grid-cols-3">
              {[
                'No clear product angle? Start with research.',
                'Traffic but low trust? Build the website and CRM.',
                'Chats but low conversion? Add the AI sales agent.',
              ].map((item) => (
                <div key={item} className="flex gap-3 rounded-lg border border-black/[0.06] bg-[#f7f8f6] p-4">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-emerald-600" aria-hidden="true" />
                  <p className="text-sm font-semibold leading-6 text-[#52525b]">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="flex flex-col items-start justify-between gap-6 rounded-lg bg-[#08110f] p-8 text-white md:flex-row md:items-center">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.2em] text-emerald-300">Need help deciding?</p>
              <h2 className="mt-3 text-3xl font-black tracking-tight">Tell us what is stuck.</h2>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-emerald-50/70">
                We will suggest the smallest useful service package first, then map the next step only if it helps.
              </p>
            </div>
            <a
              href={`https://wa.me/9779860479751?text=${whatsappMessage}`}
              className="inline-flex h-12 flex-shrink-0 items-center justify-center gap-2 rounded-lg bg-emerald-500 px-6 text-sm font-black text-white transition hover:-translate-y-0.5 hover:bg-emerald-400"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              WhatsApp Sajedar
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
