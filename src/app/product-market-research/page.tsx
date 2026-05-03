import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, BarChart3, CheckCircle2, ClipboardList, LineChart, MessageCircle, SearchCheck, Target, UsersRound } from 'lucide-react';
import Header from '../../components/Header';
import { Footer } from '../../components/sections/Footer';

export const metadata: Metadata = {
  title: 'Product Market Research Nepal',
  description: 'Product market research for Nepali businesses. Validate demand, study competitors, pricing, positioning, and launch channels before investing in inventory or ads.',
  keywords: [
    'product market research nepal',
    'market research nepal',
    'product validation nepal',
    'competitor research nepal',
    'business research nepal',
    'ecommerce product research nepal',
    'product launch research nepal',
    'sajedar product research',
  ],
  alternates: { canonical: '/product-market-research' },
  openGraph: {
    title: 'Product Market Research Nepal',
    description: 'Validate product demand, competitors, pricing, and launch channels for Nepali businesses.',
    url: 'https://sajedar.com/product-market-research',
    siteName: 'Sajedar',
    type: 'website',
  },
};

const whatsappMessage = encodeURIComponent(
  'Hi Sajedar! I am interested in product market research for my business. Please help me choose the right research package.'
);

const features = [
  {
    title: 'Demand validation',
    copy: 'Check whether people are already searching, buying, asking, or engaging around the product category.',
    icon: SearchCheck,
  },
  {
    title: 'Competitor scan',
    copy: 'Identify existing sellers, their offers, pricing, content style, reviews, and visible weaknesses.',
    icon: Target,
  },
  {
    title: 'Customer profile',
    copy: 'Clarify likely customer segments, buying triggers, objections, and what messaging may work.',
    icon: UsersRound,
  },
  {
    title: 'Pricing direction',
    copy: 'Compare market price ranges and suggest practical positioning for your product.',
    icon: BarChart3,
  },
  {
    title: 'Launch channel ideas',
    copy: 'Recommend channels such as Facebook, Instagram, TikTok, Marketplace, SEO, or reseller routes.',
    icon: LineChart,
  },
  {
    title: 'Action report',
    copy: 'Get a concise report with findings, risks, recommendations, and next steps.',
    icon: ClipboardList,
  },
];

const packages = [
  {
    name: 'Quick Validation',
    price: 'Rs 3000',
    description: 'Best before testing a single product idea.',
    includes: ['Demand signal check', 'Basic competitor scan', 'Price range notes', 'Go / improve / avoid recommendation'],
  },
  {
    name: 'Product Discovery Research',
    price: 'Rs 5000',
    description: 'Best when you know the customer or category, but not the exact product to sell.',
    includes: ['5 to 8 product opportunity ideas', 'Demand and trend signal scan', 'Competitor whitespace notes', 'Top 3 product shortlist with next steps'],
  },
  {
    name: 'Market Research Report',
    price: 'Rs 7000',
    description: 'Best before buying inventory or planning ads.',
    includes: ['Competitor and offer analysis', 'Customer profile notes', 'Pricing and positioning direction', 'Launch channel recommendations'],
  },
  {
    name: 'Launch Strategy Research',
    price: 'Rs 15,000',
    description: 'Best for serious launches and new product lines.',
    includes: ['Detailed product opportunity report', 'Ad angle and content direction', 'Risk and margin notes', '30-minute strategy discussion'],
  },
];

const steps = [
  {
    title: 'Share the product idea',
    copy: 'Send product photos, category, target customer, expected price, and any competitors you already know.',
  },
  {
    title: 'We research the market',
    copy: 'We look at demand signals, competitors, pricing, offers, channels, and customer behavior clues.',
  },
  {
    title: 'You get a decision report',
    copy: 'You receive a practical report that helps you decide whether to launch, adjust, or skip the idea.',
  },
];

export default function ProductMarketResearchPage() {
  return (
    <div className="min-h-screen w-full bg-[#fafaf9] font-sans text-[#44403c]">
      <Header />

      <main className="w-full pt-24">
        <section className="border-b border-stone-200 bg-white">
          <div className="mx-auto grid max-w-6xl gap-10 px-6 py-18 md:grid-cols-[1.05fr_0.95fr] md:items-center lg:px-8">
            <div className="py-8">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm font-bold text-emerald-700">
                <SearchCheck className="h-4 w-4" aria-hidden="true" />
                Product market research for Nepal
              </div>
              <h1 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight text-[#1c1917] md:text-6xl">
                Validate your product before spending on stock or ads.
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-8 text-[#57534e] md:text-lg">
                Sajedar helps Nepali businesses study demand, competitors, pricing, positioning, and launch channels before committing serious money.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href={`https://wa.me/9779860479751?text=${whatsappMessage}`}
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-emerald-500 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-emerald-900/10 transition hover:bg-emerald-600"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="h-4 w-4" aria-hidden="true" />
                  Discuss on WhatsApp
                </a>
                <Link
                  href="/contact?message=I%20am%20interested%20in%20product%20market%20research%20for%20my%20business."
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-stone-300 px-6 py-3 text-sm font-bold text-[#292524] transition hover:border-emerald-300 hover:bg-emerald-50"
                >
                  Request research
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </div>

            <div className="rounded-lg border border-stone-200 bg-[#fafaf9] p-6 shadow-sm">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-600">Starting at</p>
              <p className="mt-3 text-4xl font-black text-[#1c1917]">Rs 3000</p>
              <p className="mt-3 text-sm leading-7 text-[#57534e]">
                For quick validation of one product idea. Larger research packages are available when you need competitor depth, launch strategy, and positioning.
              </p>
              <div className="mt-6 space-y-3">
                {['Before importing stock', 'Before running Meta ads', 'Before launching a product line', 'Before choosing pricing'].map((item) => (
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
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#1c1917]">Research built for practical business decisions.</h2>
              <p className="mt-4 text-base leading-8 text-[#57534e]">
                The goal is not a thick academic report. It is a useful answer to what to sell, how to position it, and what risks to watch.
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
            <div className="mb-9">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-emerald-600">Pricing</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#1c1917]">Choose the depth based on your risk.</h2>
            </div>
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {packages.map((pkg) => (
                <div key={pkg.name} className="rounded-lg border border-stone-200 bg-[#fafaf9] p-6">
                  <h3 className="text-lg font-bold text-[#1c1917]">{pkg.name}</h3>
                  <p className="mt-2 text-3xl font-black text-[#1c1917]">{pkg.price}</p>
                  <p className="mt-3 text-sm leading-7 text-[#57534e]">{pkg.description}</p>
                  <div className="mt-5 space-y-3">
                    {pkg.includes.map((item) => (
                      <div key={item} className="flex items-start gap-3">
                        <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-emerald-600" aria-hidden="true" />
                        <p className="text-sm font-medium leading-6 text-[#44403c]">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
          <div className="mb-9">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-emerald-600">Process</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#1c1917]">Simple research flow.</h2>
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
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-700">Product Market Research</p>
              <h2 className="mt-2 text-2xl font-bold text-[#1c1917]">Research first, spend smarter.</h2>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-[#57534e]">
                Send your product idea and we will help you choose the right research package based on launch risk and budget.
              </p>
            </div>
            <a
              href={`https://wa.me/9779860479751?text=${whatsappMessage}`}
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-emerald-500 px-6 py-3 text-sm font-bold text-white transition hover:bg-emerald-600 md:mt-0 md:w-auto"
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
