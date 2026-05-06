import { Metadata } from 'next';
import Link from 'next/link';
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
} from 'lucide-react';
import Header from '../../components/Header';
import { Footer } from '../../components/sections/Footer';

export const metadata: Metadata = {
  title: 'Custom CRM Nepal for Social Media Businesses',
  description: 'Custom CRM for Nepali businesses that sell through Facebook, Instagram, WhatsApp, and social media. Setup starts at Rs 10,000 with Rs 0.1 per customer per month.',
  keywords: [
    'custom crm nepal',
    'crm for nepali business',
    'social media crm nepal',
    'facebook crm nepal',
    'instagram crm nepal',
    'online business crm nepal',
    'customer management system nepal',
    'crm for facebook sellers',
    'crm for ecommerce nepal',
    'sajedar crm',
  ],
  alternates: { canonical: '/crm' },
  openGraph: {
    title: 'Custom CRM Nepal for Social Media Businesses',
    description: 'Manage customers, alerts, social accounts, and dashboards in one custom CRM for Nepali online businesses.',
    url: 'https://sajedar.com/crm',
    siteName: 'Sajedar',
    type: 'website',
  },
};

const whatsappMessage = encodeURIComponent(
  'Hi Sajedar! I am interested in a custom CRM for my Nepali online business. Please share details about setup and customer management pricing.'
);

const features = [
  {
    title: 'Account system',
    copy: 'Secure owner, manager, and staff access with the permissions your team actually needs.',
    icon: KeyRound,
    accent: 'bg-emerald-50 text-emerald-700 ring-emerald-100',
  },
  {
    title: 'Social media accounts',
    copy: 'Organize customer records around Facebook, Instagram, WhatsApp, comments, and DMs.',
    icon: Share2,
    accent: 'bg-sky-50 text-sky-700 ring-sky-100',
  },
  {
    title: 'Auto detection features',
    copy: 'Spot repeat buyers, missed replies, order signals, and customers who need follow-up.',
    icon: Zap,
    accent: 'bg-amber-50 text-amber-700 ring-amber-100',
  },
  {
    title: 'Alert systems',
    copy: 'Trigger reminders for delayed orders, hot leads, support requests, and team handoffs.',
    icon: BellRing,
    accent: 'bg-rose-50 text-rose-700 ring-rose-100',
  },
  {
    title: 'Dashboard',
    copy: 'Track customers, sales activity, follow-ups, campaign health, and team workload.',
    icon: Gauge,
    accent: 'bg-indigo-50 text-indigo-700 ring-indigo-100',
  },
  {
    title: 'Hosted on subdomain',
    copy: 'Launch on a clean hosted subdomain so your team can use it from anywhere.',
    icon: Server,
    accent: 'bg-stone-100 text-stone-700 ring-stone-200',
  },
];

const workflow = [
  {
    title: 'Map the messy reality',
    copy: 'We document how customers currently message, order, pay, complain, repeat, and disappear.',
  },
  {
    title: 'Design the operating system',
    copy: 'We shape the CRM around your customer stages, staff roles, alerts, and reporting needs.',
  },
  {
    title: 'Launch, host, and improve',
    copy: 'Your CRM goes live on a subdomain with pricing that grows by managed customers.',
  },
];

const demoHighlights = [
  'Founder dashboard with GMV, ROAS, CPA, and repeat customer rate',
  'Creator and campaign operations views inspired by /crm/demo',
  'Omni inbox for customer context, order history, and replies',
];

const businessTypes = [
  'Facebook sellers',
  'Instagram stores',
  'WhatsApp order teams',
  'Clothing and fashion brands',
  'Furniture and home businesses',
  'Local ecommerce operators',
];

export default function CrmPage() {
  return (
    <div className="min-h-screen w-full bg-[#f7f8f6] font-sans text-stone-800">
      <Header />

      <main className="w-full pt-20">
        <section className="overflow-hidden border-b border-stone-200 bg-[#f7f8f6]">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 md:grid-cols-[1.15fr_0.85fr] md:items-center md:py-16 lg:px-8">
            <div className="max-w-2xl">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white px-4 py-2 text-sm font-bold text-emerald-700 shadow-sm">
                <UsersRound className="h-4 w-4" aria-hidden="true" />
                Custom CRM for Nepali social-commerce teams
              </div>
              <h1 className="text-4xl font-black leading-[1.04] tracking-tight text-stone-950 md:text-6xl">
                Your inbox is already a sales floor. Give it a proper CRM.
              </h1>
              <p className="mt-6 max-w-xl text-base leading-8 text-stone-600 md:text-lg">
                Sajedar builds custom CRM systems for Nepali businesses that sell through Facebook,
                Instagram, WhatsApp, comments, and daily customer conversations.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href={`https://wa.me/9779860479751?text=${whatsappMessage}`}
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-stone-950 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-stone-900/10 transition hover:-translate-y-0.5 hover:bg-stone-800"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageSquareText className="h-4 w-4" aria-hidden="true" />
                  Discuss CRM on WhatsApp
                </a>
                <Link
                  href="/crm/demo"
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-stone-300 bg-white px-6 py-3 text-sm font-bold text-stone-900 shadow-sm transition hover:-translate-y-0.5 hover:border-emerald-300 hover:text-emerald-700"
                >
                  <PlayCircle className="h-4 w-4" aria-hidden="true" />
                  View live demo
                </Link>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-3 sm:max-w-lg">
                <div className="rounded-lg border border-emerald-200 bg-emerald-50 p-4">
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-700">Setup starts</p>
                  <p className="mt-2 text-3xl font-black text-stone-950">Rs 10,000</p>
                </div>
                <div className="rounded-lg border border-sky-200 bg-sky-50 p-4">
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-sky-700">Monthly usage</p>
                  <p className="mt-2 text-3xl font-black text-stone-950">Rs 0.1</p>
                  <p className="text-xs font-bold text-sky-700">per customer</p>
                </div>
              </div>
            </div>

            <div className="relative w-full max-w-[560px] justify-self-end">
              <div className="rounded-lg border border-stone-200 bg-white p-3 shadow-2xl shadow-stone-900/10">
                <div className="mb-3 flex items-center justify-between px-2 py-1">
                  <div className="flex items-center gap-2">
                    <span className="h-3 w-3 rounded-full bg-rose-400" />
                    <span className="h-3 w-3 rounded-full bg-amber-400" />
                    <span className="h-3 w-3 rounded-full bg-emerald-400" />
                  </div>
                  <Link href="/crm/demo" className="inline-flex items-center gap-2 rounded-md bg-stone-100 px-3 py-1.5 text-xs font-black uppercase tracking-[0.16em] text-stone-600 transition hover:bg-stone-200">
                    Demo
                    <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </Link>
                </div>
                <div className="relative h-[360px] overflow-hidden rounded-lg border border-stone-200 bg-[#f4f7fb] sm:h-[400px] lg:h-[420px]">
                  <iframe
                    src="/crm/demo"
                    title="Sajedar CRM demo preview"
                    className="absolute left-0 top-0 h-[780px] w-[760px] origin-top-left scale-[0.47] border-0 bg-[#f4f7fb] sm:w-[840px] sm:scale-50 lg:w-[1120px] lg:scale-[0.44]"
                  />
                </div>
              </div>
              <div className="mt-4 grid gap-3 sm:grid-cols-3 md:grid-cols-1 xl:grid-cols-3">
                {demoHighlights.map((highlight) => (
                  <div key={highlight} className="flex gap-2 rounded-lg border border-stone-200 bg-white p-3 text-xs font-semibold leading-5 text-stone-600 shadow-sm">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-emerald-600" aria-hidden="true" />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 md:grid-cols-[0.8fr_1.2fr] lg:px-8">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.22em] text-emerald-700">Main features</p>
              <h2 className="mt-3 max-w-xl text-3xl font-black tracking-tight text-stone-950 md:text-4xl">
                Built around the way Nepali teams sell, follow up, and remember customers.
              </h2>
              <p className="mt-5 text-base leading-8 text-stone-600">
                The dashboard is customized around your business flow, with the interactive example available at{' '}
                <Link href="/crm/demo" className="font-bold text-emerald-700 underline decoration-emerald-200 underline-offset-4 hover:text-emerald-800">
                  /crm/demo
                </Link>
                .
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {features.map((feature) => {
                const Icon = feature.icon;

                return (
                  <div key={feature.title} className="rounded-lg border border-stone-200 bg-[#fbfbfa] p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
                    <div className={`mb-4 inline-flex h-11 w-11 items-center justify-center rounded-lg ring-1 ${feature.accent}`}>
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <h3 className="text-base font-black text-stone-950">{feature.title}</h3>
                    <p className="mt-2 text-sm leading-7 text-stone-600">{feature.copy}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="border-y border-stone-200 bg-[#eef7f3]">
          <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
            <div className="grid gap-8 md:grid-cols-[1fr_1fr] md:items-end">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.22em] text-emerald-800">How it works</p>
                <h2 className="mt-3 text-3xl font-black tracking-tight text-stone-950 md:text-4xl">
                  From scattered conversations to a managed customer system.
                </h2>
              </div>
              <p className="max-w-xl text-sm leading-7 text-stone-700 md:justify-self-end">
                The goal is simple: your team should know who the customer is, what happened before,
                what needs attention now, and what should happen next.
              </p>
            </div>

            <div className="mt-10 grid gap-4 md:grid-cols-3">
              {workflow.map((step, index) => (
                <div key={step.title} className="rounded-lg border border-emerald-200/70 bg-white p-6 shadow-sm">
                  <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-lg bg-stone-950 text-sm font-black text-white">
                    {index + 1}
                  </div>
                  <h3 className="text-lg font-black text-stone-950">{step.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-stone-600">{step.copy}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white">
          <div className="mx-auto grid max-w-7xl gap-8 px-5 py-16 md:grid-cols-[0.95fr_1.05fr] md:items-center lg:px-8">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.22em] text-emerald-700">Who it is for</p>
              <h2 className="mt-3 text-3xl font-black tracking-tight text-stone-950 md:text-4xl">
                For businesses whose customer memory lives in chats, comments, and spreadsheets.
              </h2>
              <p className="mt-5 text-base leading-8 text-stone-600">
                If your team is using notebooks, saved replies, phone galleries, and memory to manage
                customers, a custom CRM gives that process a reliable home.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {businessTypes.map((type) => (
                <div key={type} className="flex items-center gap-3 rounded-lg border border-stone-200 bg-[#fbfbfa] p-4 shadow-sm">
                  <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-emerald-600" aria-hidden="true" />
                  <span className="text-sm font-bold text-stone-800">{type}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 pb-16 lg:px-8">
          <div className="grid gap-4 rounded-lg border border-stone-200 bg-stone-950 p-6 text-white shadow-2xl shadow-stone-900/10 md:grid-cols-[1fr_auto] md:items-center md:p-8">
            <div>
              <div className="mb-4 flex flex-wrap gap-2">
                <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-xs font-bold text-emerald-100">
                  <ShieldCheck className="h-3.5 w-3.5" aria-hidden="true" />
                  Hosted CRM
                </span>
                <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-xs font-bold text-sky-100">
                  <SearchCheck className="h-3.5 w-3.5" aria-hidden="true" />
                  Custom workflows
                </span>
                <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-xs font-bold text-amber-100">
                  <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
                  Smart alerts
                </span>
              </div>
              <h2 className="text-2xl font-black tracking-tight md:text-3xl">Ready to manage customers properly?</h2>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-stone-300">
                Setup starts at Rs 10,000, with Rs 0.1 per customer per month. Share your business flow
                and we will plan the CRM structure with you.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row md:flex-col">
              <a
                href={`https://wa.me/9779860479751?text=${whatsappMessage}`}
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-emerald-500 px-6 py-3 text-sm font-black text-white transition hover:-translate-y-0.5 hover:bg-emerald-600"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageSquareText className="h-4 w-4" aria-hidden="true" />
                WhatsApp Sajedar
              </a>
              <Link
                href="/contact?message=I%20am%20interested%20in%20a%20custom%20CRM%20for%20my%20Nepali%20online%20business."
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/20 px-6 py-3 text-sm font-black text-white transition hover:-translate-y-0.5 hover:bg-white/10"
              >
                Request CRM plan
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
