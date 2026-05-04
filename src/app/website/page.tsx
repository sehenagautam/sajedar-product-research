import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, BellRing, CheckCircle2, Code2, Globe2, MessageCircle, MousePointerClick, Server, Sparkles } from 'lucide-react';
import Header from '../../components/Header';
import { Footer } from '../../components/sections/Footer';

export const metadata: Metadata = {
  title: 'Custom Business Website Nepal for Rs 4000',
  description: 'Get a custom premium-looking business website for Rs 4000, designed with Claude AI support, Discord order notifications, and a Sajedar subdomain like ashwi.sajedar.com.',
  keywords: [
    'website design nepal',
    'business website nepal',
    'cheap website nepal',
    'website for nepali business',
    'ecommerce website nepal',
    'social media business website nepal',
    'website with order notifications',
    'sajedar website service',
  ],
  alternates: { canonical: '/website' },
  openGraph: {
    title: 'Custom Business Website Nepal for Rs 4000',
    description: 'Premium-looking custom frontend designed with Claude AI support, Discord order notifications, and Sajedar subdomain hosting for Nepali businesses.',
    url: 'https://sajedar.com/website',
    siteName: 'Sajedar',
    type: 'website',
  },
};

const whatsappMessage = encodeURIComponent(
  'Hi Sajedar! I am interested in the Rs 4000 website service with Discord order notifications and a Sajedar subdomain.'
);

const features = [
  {
    title: 'Custom premium frontend',
    copy: 'A polished, mobile-friendly website designed with Claude AI support so your business looks premium, credible, and easy to browse.',
    icon: Sparkles,
  },
  {
    title: 'Discord order notifications',
    copy: 'New orders can notify your Discord channel so your team sees customer activity quickly.',
    icon: BellRing,
  },
  {
    title: 'Sajedar subdomain hosting',
    copy: 'Launch on a clean subdomain such as ashwi.sajedar.com without buying a domain first.',
    icon: Server,
  },
  {
    title: 'Custom domain upgrade',
    copy: 'Move to your own website name afterwards with extra payments for domain and setup.',
    icon: Globe2,
  },
];

const examples = [
  'ashwi.sajedar.com',
  'yourstore.sajedar.com',
  'brandname.sajedar.com',
];

const steps = [
  {
    title: 'Share your business details',
    copy: 'Send your business name, product or service list, photos, prices, and contact details.',
  },
  {
    title: 'We build the website',
    copy: 'Sajedar creates a clean frontend and connects the order flow to Discord notifications.',
  },
  {
    title: 'Launch on subdomain',
    copy: 'Your site goes live on a Sajedar subdomain and can later upgrade to your own domain name.',
  },
];

export default function WebsitePage() {
  return (
    <div className="min-h-screen w-full bg-[#fafaf9] font-sans text-[#44403c]">
      <Header />

      <main className="w-full pt-24">
        <section className="border-b border-stone-200 bg-white">
          <div className="mx-auto grid max-w-6xl gap-10 px-6 py-18 md:grid-cols-[1.05fr_0.95fr] md:items-center lg:px-8">
            <div className="py-8">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm font-bold text-emerald-700">
                <Code2 className="h-4 w-4" aria-hidden="true" />
                Custom websites for Nepali businesses
              </div>
              <h1 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight text-[#1c1917] md:text-6xl">
                Get a custom business website for Rs 4000.
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-8 text-[#57534e] md:text-lg">
                Sajedar uses Claude AI to help design premium-looking custom frontend websites for Nepali businesses, with order notifications sent to Discord and hosting on a clean Sajedar subdomain.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href={`https://wa.me/9779860479751?text=${whatsappMessage}`}
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-emerald-500 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-emerald-900/10 transition hover:bg-emerald-600"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="h-4 w-4" aria-hidden="true" />
                  Order website on WhatsApp
                </a>
                <Link
                  href="/contact?message=I%20am%20interested%20in%20the%20Rs%204000%20website%20service."
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-stone-300 px-6 py-3 text-sm font-bold text-[#292524] transition hover:border-emerald-300 hover:bg-emerald-50"
                >
                  Request details
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </div>

            <div className="rounded-lg border border-stone-200 bg-[#fafaf9] p-6 shadow-sm">
              <div className="border-b border-stone-200 pb-5">
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-600">Website package</p>
                <h2 className="mt-3 text-2xl font-bold text-[#1c1917]">Launch affordably, upgrade later.</h2>
              </div>
              <div className="mt-6 rounded-lg border border-emerald-200 bg-emerald-50 p-5">
                <p className="text-sm font-semibold text-emerald-700">Starting price</p>
                <p className="mt-2 text-4xl font-black text-[#1c1917]">Rs 4000</p>
              </div>
              <div className="mt-5 space-y-3">
                {[
                  'Custom premium frontend designed with Claude AI support',
                  'Discord notifications for orders',
                  'Hosted on your Sajedar subdomain',
                  'Can upgrade to your own domain name afterwards',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-emerald-600" aria-hidden="true" />
                    <p className="text-sm font-medium leading-6 text-[#44403c]">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
          <div className="grid gap-10 md:grid-cols-[0.85fr_1.15fr]">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-emerald-600">Features</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#1c1917]">
                Made for businesses that sell online and need orders handled quickly.
              </h2>
              <p className="mt-4 text-base leading-8 text-[#57534e]">
                This is a practical custom starter website for businesses that want to look professional online without dealing with domain and hosting complexity on day one.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {features.map((feature) => {
                const Icon = feature.icon;

                return (
                  <div key={feature.title} className="rounded-lg border border-stone-200 bg-white p-5 shadow-sm">
                    <Icon className="mb-4 h-6 w-6 text-emerald-600" aria-hidden="true" />
                    <h3 className="text-base font-bold text-[#1c1917]">{feature.title}</h3>
                    <p className="mt-2 text-sm leading-7 text-[#57534e]">{feature.copy}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="border-y border-stone-200 bg-white">
          <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
            <div className="mb-9 flex flex-col justify-between gap-4 md:flex-row md:items-end">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-emerald-600">Example subdomain</p>
                <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#1c1917]">Start with a Sajedar subdomain.</h2>
              </div>
              <p className="max-w-md text-sm leading-7 text-[#57534e]">
                Your website can launch quickly on a subdomain, then move to your own name later with certain payments for domain and setup.
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              {examples.map((example) => (
                <div key={example} className="rounded-lg border border-stone-200 bg-[#fafaf9] p-5">
                  <Globe2 className="mb-4 h-6 w-6 text-emerald-600" aria-hidden="true" />
                  <p className="text-lg font-black text-[#1c1917]">{example}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
          <div className="mb-9">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-emerald-600">Process</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#1c1917]">From business details to a live website.</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {steps.map((step, index) => (
              <div key={step.title} className="rounded-lg border border-stone-200 bg-white p-6 shadow-sm">
                <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-100 text-sm font-black text-emerald-700">
                  {index + 1}
                </div>
                <h3 className="text-lg font-bold text-[#1c1917]">{step.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[#57534e]">{step.copy}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-16 lg:px-8">
          <div className="rounded-lg border border-emerald-200 bg-emerald-50 p-7 md:flex md:items-center md:justify-between md:gap-8">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-700">Website service</p>
              <h2 className="mt-2 text-2xl font-bold text-[#1c1917]">Ready to launch your business website?</h2>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-[#57534e]">
                Starting at Rs 4000, with a Claude AI-assisted custom premium frontend, Discord order notifications, and a Sajedar subdomain like ashwi.sajedar.com.
              </p>
            </div>
            <a
              href={`https://wa.me/9779860479751?text=${whatsappMessage}`}
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-emerald-500 px-6 py-3 text-sm font-bold text-white transition hover:bg-emerald-600 md:mt-0 md:w-auto"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MousePointerClick className="h-4 w-4" aria-hidden="true" />
              Start on WhatsApp
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
