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
  emerald: 'bg-[#e8f7ef] text-emerald-700 ring-emerald-100',
  red: 'bg-[#fff1f2] text-red-600 ring-red-100',
  blue: 'bg-[#eef5ff] text-blue-600 ring-blue-100',
  amber: 'bg-[#fff7e6] text-amber-700 ring-amber-100',
  rose: 'bg-[#fff1f5] text-rose-600 ring-rose-100',
  cyan: 'bg-[#edfaff] text-cyan-700 ring-cyan-100',
  teal: 'bg-[#e9fbf7] text-teal-700 ring-teal-100',
};

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
    <div className="min-h-screen w-full bg-[#f5f5f7] font-sans text-[#1d1d1f]">
      <Header />

      <main className="w-full pt-14">
        <section className="bg-[#f5f5f7] px-6 py-16 lg:px-8 lg:py-24">
          <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.88fr_1.12fr] lg:items-center">
            <div className="max-w-2xl self-center">
              <p className="inline-flex items-center gap-2 rounded-full border border-black/[0.08] bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#6e6e73] shadow-sm">
                <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
                Sajedar Services
              </p>
              <h1 className="mt-7 text-5xl font-semibold leading-[1.02] tracking-tight text-[#1d1d1f] md:text-7xl">
                Tell us the symptom. We pick the module.
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-8 text-[#6e6e73] md:text-xl">
                Start with the business pain. We route it to the smallest useful service first, then connect the next module only when it helps.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <a
                  href={`https://wa.me/9779860479751?text=${whatsappMessage}`}
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-[#1d1d1f] px-6 text-sm font-semibold text-white shadow-lg shadow-black/10 transition hover:-translate-y-0.5 hover:bg-black"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="h-4 w-4" aria-hidden="true" />
                  Ask on WhatsApp
                </a>
                <Link
                  href="#service-catalog"
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-lg border border-black/[0.08] bg-white px-6 text-sm font-semibold text-[#1d1d1f] shadow-sm transition hover:-translate-y-0.5 hover:border-black/20"
                >
                  See catalog
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </div>

            <div className="rounded-lg border border-black/[0.06] bg-white p-3 shadow-2xl shadow-black/[0.06]">
              <div className="rounded-lg bg-[#fbfbfd] p-3">
                <div className="mb-3 flex items-center justify-between px-1">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#86868b]">Symptom routing</p>
                  <span className="rounded-full bg-[#e8f7ef] px-3 py-1 text-xs font-semibold text-emerald-700">Nepal</span>
                </div>
                <div className="divide-y divide-black/[0.06] rounded-lg border border-black/[0.06] bg-white">
                  {diagnostics.map((item, index) => (
                    <Link key={item.problem} href={item.href} className="group grid gap-4 p-4 transition hover:bg-[#f5f5f7] md:grid-cols-[42px_1fr_210px_32px] md:items-center">
                      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#f5f5f7] text-xs font-semibold text-[#1d1d1f]">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <p className="text-sm font-semibold leading-6 text-[#1d1d1f]">{item.problem}</p>
                      <p className="text-sm font-semibold text-emerald-700">{item.module}</p>
                      <ArrowRight className="h-4 w-4 text-[#86868b] transition group-hover:translate-x-1 group-hover:text-[#1d1d1f]" aria-hidden="true" />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="service-catalog" className="bg-white px-6 py-16 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-7xl">
            <div className="mb-14 text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#86868b]">Module shelf</p>
              <h2 className="mx-auto mt-4 max-w-4xl text-5xl font-semibold leading-[1.03] tracking-tight text-[#1d1d1f] md:text-6xl">
                Choose the part that moves the business forward.
              </h2>
              <div className="mx-auto mt-10 grid max-w-5xl divide-y divide-black/[0.08] border-y border-black/[0.08] text-left sm:grid-cols-3 sm:divide-x sm:divide-y-0">
                {[
                  ['Every module can run alone.', 'Start with the one bottleneck that matters today.'],
                  ['Each module plugs into the next.', 'Add the next layer only when the business is ready.'],
                  ['Starter prices stay in Nepali rupees.', 'Clear entry points without enterprise packaging.'],
                ].map(([point, detail]) => (
                  <div key={point} className="p-5 sm:p-6">
                    <CheckCircle2 className="h-5 w-5 text-emerald-600" aria-hidden="true" />
                    <p className="mt-4 text-base font-semibold leading-6 text-[#1d1d1f]">{point}</p>
                    <p className="mt-2 text-sm leading-6 text-[#6e6e73]">{detail}</p>
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
                    className="group grid min-h-[268px] gap-5 rounded-lg border border-black/[0.06] bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-black/20 hover:shadow-xl hover:shadow-black/[0.07] sm:grid-cols-[190px_1fr]"
                  >
                    <div className="flex flex-col justify-between rounded-lg border border-black/[0.06] bg-[#f5f5f7] p-4">
                      <div>
                        <div className={`flex h-12 w-12 items-center justify-center rounded-lg ring-1 ${toneClasses[service.tone as keyof typeof toneClasses]}`}>
                          <Icon className="h-6 w-6" aria-hidden="true" />
                        </div>
                        <p className="mt-5 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#86868b]">Lane</p>
                        <p className="mt-1 text-2xl font-semibold tracking-tight text-[#1d1d1f]">{service.lane}</p>
                      </div>
                      <p className="mt-6 text-sm font-semibold text-emerald-700">{service.price}</p>
                    </div>
                    <div className="flex flex-col">
                      <div className="flex items-start justify-between gap-4">
                        <h2 className="text-2xl font-semibold tracking-tight text-[#1d1d1f]">
                          {service.title}
                        </h2>
                        <span className="text-[11px] font-semibold text-[#c7c7cc]">{service.href.replace('/', '')}</span>
                      </div>
                      <div className="mt-5 grid gap-3">
                        <div>
                          <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#86868b]">Symptom</p>
                          <p className="mt-1 text-sm leading-6 text-[#6e6e73]">{service.symptom}</p>
                        </div>
                        <div className="grid gap-3 sm:grid-cols-2">
                          <div className="rounded-lg border border-black/[0.06] p-3">
                            <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#86868b]">Input</p>
                            <p className="mt-1 text-xs font-semibold leading-5 text-[#6e6e73]">{service.input}</p>
                          </div>
                          <div className="rounded-lg border border-black/[0.06] p-3">
                            <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#86868b]">Output</p>
                            <p className="mt-1 text-xs font-semibold leading-5 text-[#6e6e73]">{service.output}</p>
                          </div>
                        </div>
                      </div>
                    <div className="mt-auto flex items-center justify-between pt-5">
                      <span className="text-xs font-semibold uppercase tracking-[0.14em] text-[#86868b]">Open module</span>
                      <span className="flex h-8 w-8 items-center justify-center rounded-full border border-black/[0.08] text-[#a1a1aa] transition group-hover:border-emerald-500 group-hover:bg-emerald-500 group-hover:text-white">
                        <ArrowRight className="h-4 w-4" aria-hidden="true" />
                      </span>
                    </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="grid gap-6 rounded-lg border border-black/[0.08] bg-white p-6 shadow-sm md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#86868b]">Need help deciding?</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#1d1d1f]">Send one messy voice note.</h2>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-[#6e6e73]">
                Tell us what is happening in your business. We will translate it into the smallest useful module first.
              </p>
            </div>
            <a
              href={`https://wa.me/9779860479751?text=${whatsappMessage}`}
              className="inline-flex h-12 flex-shrink-0 items-center justify-center gap-2 rounded-lg bg-[#1d1d1f] px-6 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-black"
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
