import { Metadata } from 'next';
import Image from 'next/image';
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
    symptom: 'You have a product idea, but no proof people will buy.',
    input: 'Category, price range, target customer',
    output: 'Demand read, positioning angle, launch direction',
    icon: SearchCheck,
    tone: 'emerald',
    lane: 'Signal',
  },
  {
    title: 'Jasus AI Competitor Tracking',
    href: '/jasus-ai',
    price: 'Rs 2,500 for 3 competitors',
    symptom: 'Competitors are moving fast and you are guessing.',
    input: 'Three competitor names or pages',
    output: 'Ad moves, pricing shifts, winning hooks',
    icon: Eye,
    tone: 'red',
    lane: 'Intel',
  },
  {
    title: 'Website + CRM',
    href: '/website-crm',
    price: 'Starts at Rs 14,000',
    symptom: 'Your DMs, orders, and customer details are scattered.',
    input: 'Offer, pages, order process, team workflow',
    output: 'Website, lead capture, CRM pipeline',
    icon: Layout,
    tone: 'blue',
    lane: 'Base',
  },
  {
    title: 'Social Media Graphics',
    href: '/social-media-graphics',
    price: 'Rs 200 per graphic',
    symptom: 'Your offer is decent, but the feed looks inconsistent.',
    input: 'Product photos, offer, brand colors',
    output: 'Post creatives, covers, offer graphics',
    icon: ImageIcon,
    tone: 'amber',
    lane: 'Creative',
  },
  {
    title: 'Motionmandu AI Videos',
    href: '/motionmandu',
    price: 'Starts at Rs 2,000',
    symptom: 'Static posts are not giving enough attention.',
    input: 'Product, offer, mood, format',
    output: 'Short AI video concepts for campaigns',
    icon: Clapperboard,
    tone: 'rose',
    lane: 'Motion',
  },
  {
    title: 'Meta Ads Planning',
    href: '/meta-ads',
    price: 'Budget plan via WhatsApp',
    symptom: 'You want ads, but the budget and structure are unclear.',
    input: 'Goal, audience, offer, monthly budget',
    output: 'Campaign plan, testing logic, spend guidance',
    icon: Megaphone,
    tone: 'cyan',
    lane: 'Demand',
  },
  {
    title: 'AI Sales Agent',
    href: '/sales-agent',
    price: 'Starts at Rs 4,000',
    symptom: 'Chats come in, but replies are slow or inconsistent.',
    input: 'FAQs, products, policies, tone',
    output: 'Messenger agent that answers and recommends',
    icon: Bot,
    tone: 'teal',
    lane: 'Sales',
  },
];

const toneClasses = {
  emerald: 'bg-emerald-50 text-emerald-700 ring-emerald-100',
  red: 'bg-red-50 text-red-600 ring-red-100',
  blue: 'bg-blue-50 text-blue-600 ring-blue-100',
  amber: 'bg-amber-50 text-amber-700 ring-amber-100',
  rose: 'bg-rose-50 text-rose-600 ring-rose-100',
  cyan: 'bg-cyan-50 text-cyan-700 ring-cyan-100',
  teal: 'bg-teal-50 text-teal-700 ring-teal-100',
};

const railStops = [
  { label: 'Listen', copy: 'market + competitors' },
  { label: 'Build', copy: 'website + CRM' },
  { label: 'Package', copy: 'graphics + video' },
  { label: 'Push', copy: 'Meta demand' },
  { label: 'Close', copy: 'AI sales agent' },
];

const diagnostics = [
  { problem: 'I do not know what to sell next.', module: 'Product Market Research', href: '/product-market-research' },
  { problem: 'My competitors are suddenly everywhere.', module: 'Jasus AI Competitor Tracking', href: '/jasus-ai' },
  { problem: 'Customers ask, then disappear.', module: 'AI Sales Agent', href: '/sales-agent' },
  { problem: 'We have interest, but no proper system.', module: 'Website + CRM', href: '/website-crm' },
  { problem: 'The offer is good but looks weak online.', module: 'Graphics + Motionmandu Videos', href: '/social-media-graphics' },
];

const whatsappMessage = encodeURIComponent(
  'Hi Sajedar! I want to discuss which service is best for my business.'
);

export default function ServicesPage() {
  return (
    <div className="min-h-screen w-full bg-[#f4f5f1] font-sans text-[#27272a]">
      <Header />

      <main className="w-full pt-14">
        <section className="relative overflow-hidden border-b border-black/10 bg-[#101412] text-white">
          <div
            className="absolute inset-0 opacity-[0.07]"
            style={{
              backgroundImage: 'linear-gradient(rgba(255,255,255,0.18) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.18) 1px, transparent 1px)',
              backgroundSize: '38px 38px',
            }}
          />

          <div className="relative mx-auto grid max-w-7xl gap-12 px-6 py-16 lg:grid-cols-[0.88fr_1.12fr] lg:px-8 lg:py-20">
            <div className="max-w-2xl self-center">
              <p className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-2 text-xs font-black uppercase tracking-[0.22em] text-emerald-300">
                <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
                Sajedar business OS
              </p>
              <h1 className="mt-7 text-4xl font-black leading-[1.04] tracking-tight md:text-6xl">
                Not a service list. A control board for online business.
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-8 text-emerald-50/70 md:text-lg">
                Sajedar services are built like connected modules. We find the market signal, build the sales base, package the offer, push demand, and help chats convert.
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

            <div className="relative border border-white/10 bg-white/[0.045] p-4 shadow-2xl shadow-black/20 backdrop-blur-sm">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex items-center gap-3">
                  <span className="relative flex h-9 w-9 overflow-hidden rounded bg-white">
                    <Image
                      src="/header-logo-transparent.webp"
                      alt="Sajedar logo"
                      fill
                      sizes="36px"
                      className="object-contain p-1"
                    />
                  </span>
                  <div>
                    <p className="text-sm font-black text-white">Sajedar OS Board</p>
                    <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-emerald-300/70">Live service architecture</p>
                  </div>
                </div>
                <span className="rounded bg-emerald-400/10 px-3 py-1 text-[11px] font-black uppercase tracking-[0.14em] text-emerald-300">Nepal</span>
              </div>

              <div className="grid gap-3 py-5 md:grid-cols-5">
                {railStops.map((stop, index) => (
                  <div key={stop.label} className="relative min-h-[132px] border border-white/10 bg-black/20 p-3">
                    {index < railStops.length - 1 ? (
                      <span className="absolute left-[calc(100%-1px)] top-1/2 z-10 hidden h-px w-3 bg-emerald-300/50 md:block" />
                    ) : null}
                    <span className="text-[10px] font-black text-emerald-300">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <p className="mt-5 text-sm font-black text-white">{stop.label}</p>
                    <p className="mt-2 text-[12px] leading-5 text-white/45">{stop.copy}</p>
                  </div>
                ))}
              </div>

              <div className="grid gap-3 border-t border-white/10 pt-4 sm:grid-cols-3">
                {[
                  ['Signal in', 'competitor + customer clues'],
                  ['System middle', 'website, CRM, creative'],
                  ['Revenue out', 'ads + AI-assisted chats'],
                ].map(([label, copy]) => (
                  <div key={label} className="border-l-2 border-emerald-300/50 pl-3">
                    <p className="text-xs font-black uppercase tracking-[0.14em] text-white">{label}</p>
                    <p className="mt-1 text-[12px] leading-5 text-white/45">{copy}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="service-catalog" className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
          <div className="mb-10 grid gap-6 lg:grid-cols-[0.7fr_1.3fr] lg:items-end">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.2em] text-[#71717a]">Module shelf</p>
              <h2 className="mt-3 text-3xl font-black tracking-tight text-[#18181b] md:text-4xl">
                Pick the broken part of the machine.
              </h2>
            </div>
            <div className="grid gap-3 sm:grid-cols-3">
              {[
                'Every module can run alone.',
                'Each module plugs into the next.',
                'Starter prices stay in Nepali rupees.',
              ].map((point) => (
                <div key={point} className="flex items-start gap-2 border border-black/[0.06] bg-white p-3">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-emerald-600" aria-hidden="true" />
                  <p className="text-xs font-bold leading-5 text-[#52525b]">{point}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-4 lg:grid-cols-2">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <Link
                  key={service.href}
                  href={service.href}
                  className="group grid min-h-[268px] gap-5 border border-black/[0.06] bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-black/20 hover:shadow-xl hover:shadow-black/[0.07] sm:grid-cols-[190px_1fr]"
                >
                  <div className="flex flex-col justify-between border border-black/[0.06] bg-[#f7f8f6] p-4">
                    <div>
                      <div className={`flex h-12 w-12 items-center justify-center rounded-lg ring-1 ${toneClasses[service.tone as keyof typeof toneClasses]}`}>
                        <Icon className="h-6 w-6" aria-hidden="true" />
                      </div>
                      <p className="mt-5 text-[11px] font-black uppercase tracking-[0.16em] text-[#a1a1aa]">Lane</p>
                      <p className="mt-1 text-2xl font-black tracking-tight text-[#18181b]">{service.lane}</p>
                    </div>
                    <p className="mt-6 text-sm font-black text-emerald-700">{service.price}</p>
                  </div>
                  <div className="flex flex-col">
                    <div className="flex items-start justify-between gap-4">
                      <h2 className="text-2xl font-black tracking-tight text-[#18181b]">
                        {service.title}
                      </h2>
                      <span className="text-[11px] font-black text-[#d4d4d8]">{service.href.replace('/', '')}</span>
                    </div>
                    <div className="mt-5 grid gap-3">
                      <div>
                        <p className="text-[11px] font-black uppercase tracking-[0.16em] text-red-500">Symptom</p>
                        <p className="mt-1 text-sm leading-6 text-[#52525b]">{service.symptom}</p>
                      </div>
                      <div className="grid gap-3 sm:grid-cols-2">
                        <div className="border border-black/[0.06] p-3">
                          <p className="text-[10px] font-black uppercase tracking-[0.16em] text-[#a1a1aa]">Input</p>
                          <p className="mt-1 text-xs font-semibold leading-5 text-[#52525b]">{service.input}</p>
                        </div>
                        <div className="border border-black/[0.06] p-3">
                          <p className="text-[10px] font-black uppercase tracking-[0.16em] text-[#a1a1aa]">Output</p>
                          <p className="mt-1 text-xs font-semibold leading-5 text-[#52525b]">{service.output}</p>
                        </div>
                      </div>
                    </div>
                  <div className="mt-auto flex items-center justify-between pt-5">
                    <span className="text-xs font-black uppercase tracking-[0.14em] text-[#a1a1aa]">Open module</span>
                    <span className="flex h-8 w-8 items-center justify-center rounded-full border border-black/[0.08] text-[#a1a1aa] transition group-hover:border-emerald-500 group-hover:bg-emerald-500 group-hover:text-white">
                      <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </span>
                  </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>

        <section className="border-y border-black/[0.06] bg-[#151515] px-6 py-16 text-white lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.2em] text-amber-300">Diagnostic board</p>
              <h2 className="mt-3 text-3xl font-black tracking-tight md:text-4xl">
                Tell us the symptom. We pick the module.
              </h2>
              <p className="mt-5 max-w-md text-sm leading-7 text-white/55">
                The page is not asking you to understand every service. It starts from the actual business pain and routes you from there.
              </p>
            </div>
            <div className="divide-y divide-white/10 border border-white/10">
              {diagnostics.map((item, index) => (
                <Link key={item.problem} href={item.href} className="group grid gap-4 bg-white/[0.03] p-4 transition hover:bg-white/[0.07] md:grid-cols-[42px_1fr_220px_32px] md:items-center">
                  <span className="flex h-9 w-9 items-center justify-center bg-white/10 text-xs font-black text-amber-300">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <p className="text-sm font-bold leading-6 text-white">{item.problem}</p>
                  <p className="text-sm font-black text-emerald-300">{item.module}</p>
                  <ArrowRight className="h-4 w-4 text-white/35 transition group-hover:translate-x-1 group-hover:text-emerald-300" aria-hidden="true" />
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="grid gap-6 border border-black/[0.08] bg-white p-6 shadow-sm md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.2em] text-[#a1a1aa]">Need help deciding?</p>
              <h2 className="mt-3 text-3xl font-black tracking-tight text-[#18181b]">Send one messy voice note.</h2>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-[#71717a]">
                Tell us what is happening in your business. We will translate it into the smallest useful module first.
              </p>
            </div>
            <a
              href={`https://wa.me/9779860479751?text=${whatsappMessage}`}
              className="inline-flex h-12 flex-shrink-0 items-center justify-center gap-2 rounded-lg bg-[#101412] px-6 text-sm font-black text-white transition hover:-translate-y-0.5 hover:bg-emerald-600"
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
