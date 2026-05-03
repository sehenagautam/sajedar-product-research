import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, BarChart3, CheckCircle2, Megaphone, MessageCircle, PieChart, Target } from 'lucide-react';
import Header from '../../components/Header';
import { Footer } from '../../components/sections/Footer';

export const metadata: Metadata = {
  title: 'Meta Ads Nepal for Businesses',
  description: 'Plan Facebook and Instagram ad budgets for Nepalese businesses. Sajedar helps local brands run clearer Meta ads with better targeting, tracking, and follow-up.',
  keywords: [
    'meta ads nepal',
    'facebook ads nepal',
    'instagram ads nepal',
    'facebook advertising agency nepal',
    'meta ads for nepalese businesses',
    'digital marketing nepal',
    'facebook ads budget nepal',
    'sajedar meta ads',
  ],
  alternates: { canonical: '/meta-ads' },
  openGraph: {
    title: 'Meta Ads Nepal for Businesses',
    description: 'Contact Sajedar on WhatsApp to plan your Facebook and Instagram ad budget in Nepal.',
    url: 'https://sajedar.com/meta-ads',
    siteName: 'Sajedar',
    type: 'website',
  },
};

const whatsappMessage = encodeURIComponent(
  'Hi Sajedar! I want to plan a Meta ads budget for my business in Nepal. Please help me with Facebook and Instagram ads.'
);

const services = [
  'Facebook and Instagram campaign planning',
  'Ad budget planning for Nepalese businesses',
  'Audience targeting for local buyers',
  'Ad creative direction and offer positioning',
  'Lead generation and Messenger follow-up planning',
  'Performance review for better ROAS decisions',
];

const industries = [
  'Ecommerce stores',
  'Clothing and fashion brands',
  'Furniture and home decor businesses',
  'Restaurants and cafes',
  'Education consultancies',
  'Local service businesses',
];

const budgetSteps = [
  {
    title: 'Understand your offer',
    copy: 'We look at what you sell, your target customer, your average order value, and your current sales channel.',
  },
  {
    title: 'Plan the budget',
    copy: 'We help decide a practical starting budget for Facebook and Instagram ads based on your goal.',
  },
  {
    title: 'Connect ads to follow-up',
    copy: 'We plan how leads or messages will be handled so ad spend does not get wasted after someone clicks.',
  },
];

export default function MetaAdsPage() {
  return (
    <div className="min-h-screen w-full bg-[#fafaf9] font-sans text-[#44403c]">
      <Header />

      <main className="w-full pt-24">
        <section className="border-b border-stone-200 bg-white">
          <div className="mx-auto grid max-w-6xl gap-10 px-6 py-18 md:grid-cols-[1.05fr_0.95fr] md:items-center lg:px-8">
            <div className="py-8">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm font-bold text-emerald-700">
                <Megaphone className="h-4 w-4" aria-hidden="true" />
                Meta Ads for Nepalese businesses
              </div>
              <h1 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight text-[#1c1917] md:text-6xl">
                Plan Facebook and Instagram ads with a clear budget.
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-8 text-[#57534e] md:text-lg">
                Sajedar helps Nepalese businesses plan Meta ad campaigns, set realistic budgets, and connect ad traffic to conversations that can become sales.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href={`https://wa.me/9779860479751?text=${whatsappMessage}`}
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-emerald-500 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-emerald-900/10 transition hover:bg-emerald-600"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="h-4 w-4" aria-hidden="true" />
                  Contact on WhatsApp
                </a>
                <Link
                  href="/contact?message=I%20want%20to%20plan%20a%20Meta%20ads%20budget%20for%20my%20business%20in%20Nepal."
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-stone-300 px-6 py-3 text-sm font-bold text-[#292524] transition hover:border-emerald-300 hover:bg-emerald-50"
                >
                  Plan my budget
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </div>

            <div className="rounded-lg border border-stone-200 bg-[#fafaf9] p-6 shadow-sm">
              <div className="flex items-start justify-between gap-5 border-b border-stone-200 pb-5">
                <div>
                  <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-600">Budget planning</p>
                  <h2 className="mt-3 text-2xl font-bold text-[#1c1917]">Know what to spend before you boost.</h2>
                </div>
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-emerald-100 text-emerald-700">
                  <PieChart className="h-6 w-6" aria-hidden="true" />
                </div>
              </div>
              <div className="mt-5 space-y-4">
                {[
                  'Campaign objective matched to your business goal',
                  'Suggested starting budget for testing',
                  'Audience and creative direction',
                  'Messenger or lead follow-up plan',
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
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-emerald-600">Services</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#1c1917]">
                Meta ad planning made practical for local businesses.
              </h2>
              <p className="mt-4 text-base leading-8 text-[#57534e]">
                We focus on the parts that matter most for Nepal: offer clarity, budget control, audience fit, and fast follow-up.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {services.map((service) => (
                <div key={service} className="rounded-lg border border-stone-200 bg-white p-4 shadow-sm">
                  <Target className="mb-3 h-5 w-5 text-emerald-600" aria-hidden="true" />
                  <p className="text-sm font-semibold leading-6 text-[#292524]">{service}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-y border-stone-200 bg-white">
          <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
            <div className="mb-9 flex flex-col justify-between gap-4 md:flex-row md:items-end">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-emerald-600">Budget process</p>
                <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#1c1917]">Start with a plan, not a random boost.</h2>
              </div>
              <p className="max-w-md text-sm leading-7 text-[#57534e]">
                A small budget can teach you a lot when the campaign is set up with the right goal and follow-up.
              </p>
            </div>
            <div className="grid gap-5 md:grid-cols-3">
              {budgetSteps.map((step, index) => (
                <div key={step.title} className="rounded-lg border border-stone-200 bg-[#fafaf9] p-6">
                  <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-100 text-sm font-black text-emerald-700">
                    {index + 1}
                  </div>
                  <h3 className="text-lg font-bold text-[#1c1917]">{step.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-[#57534e]">{step.copy}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
          <div className="grid gap-8 md:grid-cols-[1fr_1fr] md:items-start">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-emerald-600">Who it helps</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#1c1917]">Built for Nepalese businesses selling online and locally.</h2>
              <p className="mt-4 text-base leading-8 text-[#57534e]">
                Whether your customers message you on Facebook, Instagram, WhatsApp, or call directly, your ads need a clear path from click to conversation.
              </p>
            </div>
            <div className="rounded-lg border border-stone-200 bg-white p-6 shadow-sm">
              <div className="grid gap-3 sm:grid-cols-2">
                {industries.map((industry) => (
                  <div key={industry} className="flex items-center gap-3 rounded-lg bg-stone-50 p-3">
                    <BarChart3 className="h-5 w-5 flex-shrink-0 text-emerald-600" aria-hidden="true" />
                    <span className="text-sm font-semibold text-[#292524]">{industry}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-16 lg:px-8">
          <div className="rounded-lg border border-emerald-200 bg-emerald-50 p-7 md:flex md:items-center md:justify-between md:gap-8">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-700">Plan your Meta ads budget</p>
              <h2 className="mt-2 text-2xl font-bold text-[#1c1917]">Contact on WhatsApp before spending on ads.</h2>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-[#57534e]">
                Share your business type, location, product or service, and monthly budget range. We will help you think through a practical Meta ads plan.
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
