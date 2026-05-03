import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, BellRing, CheckCircle2, Gauge, KeyRound, MessageSquareText, Server, Share2, UsersRound, Zap } from 'lucide-react';
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
    copy: 'Secure login and logout for owners, managers, and staff who need CRM access.',
    icon: KeyRound,
  },
  {
    title: 'Social media accounts',
    copy: 'Connect the CRM around the channels where your business already sells and talks to customers.',
    icon: Share2,
  },
  {
    title: 'Auto detection features',
    copy: 'Detect customer activity, sales signals, repeated buyers, and important records faster.',
    icon: Zap,
  },
  {
    title: 'Alert systems',
    copy: 'Get notified when customers need follow-up, orders need attention, or a team member should act.',
    icon: BellRing,
  },
  {
    title: 'Dashboard',
    copy: 'See customers, activity, follow-ups, and business numbers in a clear dashboard.',
    icon: Gauge,
  },
  {
    title: 'Hosted on subdomain',
    copy: 'Run your CRM on a clean hosted subdomain so your team can access it from anywhere.',
    icon: Server,
  },
];

const businessTypes = [
  'Facebook sellers',
  'Instagram stores',
  'WhatsApp order businesses',
  'Clothing and fashion brands',
  'Furniture and home businesses',
  'Local ecommerce teams',
];

const workflow = [
  {
    title: 'Map your sales flow',
    copy: 'We learn how customers currently message, order, pay, and follow up through your social channels.',
  },
  {
    title: 'Build your CRM',
    copy: 'We create the account system, dashboard, customer records, alerts, and business-specific workflows.',
  },
  {
    title: 'Host and run it',
    copy: 'Your CRM is hosted on a subdomain and priced by the number of customers managed.',
  },
];

export default function CrmPage() {
  return (
    <div className="min-h-screen w-full bg-[#fafaf9] font-sans text-[#44403c]">
      <Header />

      <main className="w-full pt-24">
        <section className="border-b border-stone-200 bg-white">
          <div className="mx-auto grid max-w-6xl gap-10 px-6 py-18 md:grid-cols-[1.05fr_0.95fr] md:items-center lg:px-8">
            <div className="py-8">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm font-bold text-emerald-700">
                <UsersRound className="h-4 w-4" aria-hidden="true" />
                Custom CRM for Nepali online businesses
              </div>
              <h1 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight text-[#1c1917] md:text-6xl">
                Manage your social media customers in one custom CRM.
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-8 text-[#57534e] md:text-lg">
                Sajedar builds custom CRM systems for Nepali businesses that sell primarily through Facebook, Instagram, WhatsApp, and social media conversations.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href={`https://wa.me/9779860479751?text=${whatsappMessage}`}
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-emerald-500 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-emerald-900/10 transition hover:bg-emerald-600"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageSquareText className="h-4 w-4" aria-hidden="true" />
                  Discuss CRM on WhatsApp
                </a>
                <Link
                  href="/contact?message=I%20am%20interested%20in%20a%20custom%20CRM%20for%20my%20Nepali%20online%20business."
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-stone-300 px-6 py-3 text-sm font-bold text-[#292524] transition hover:border-emerald-300 hover:bg-emerald-50"
                >
                  Request CRM plan
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </div>

            <div className="rounded-lg border border-stone-200 bg-[#fafaf9] p-6 shadow-sm">
              <div className="border-b border-stone-200 pb-5">
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-600">CRM pricing</p>
                <h2 className="mt-3 text-2xl font-bold text-[#1c1917]">Simple setup and running cost.</h2>
              </div>
              <div className="mt-6 grid gap-4">
                <div className="rounded-lg border border-emerald-200 bg-emerald-50 p-5">
                  <p className="text-sm font-semibold text-emerald-700">Setup price</p>
                  <p className="mt-2 text-4xl font-black text-[#1c1917]">Rs 10,000</p>
                </div>
                <div className="rounded-lg border border-stone-200 bg-white p-5">
                  <p className="text-sm font-semibold text-[#78716c]">Running cost</p>
                  <p className="mt-2 text-4xl font-black text-[#1c1917]">Rs 0.1</p>
                  <p className="mt-2 text-sm font-medium text-[#57534e]">per customer per month</p>
                </div>
              </div>
              <p className="mt-5 text-sm leading-7 text-[#57534e]">
                Best for businesses that need structure after social media orders, inbox messages, and customer follow-ups start becoming hard to manage manually.
              </p>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
          <div className="grid gap-10 md:grid-cols-[0.85fr_1.15fr]">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-emerald-600">Main features</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#1c1917]">
                Built around how Nepali social-commerce teams actually work.
              </h2>
              <p className="mt-4 text-base leading-8 text-[#57534e]">
                Instead of forcing your team into a generic tool, the CRM is shaped around your accounts, customers, alerts, and daily operating flow.
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
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-emerald-600">How it works</p>
                <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#1c1917]">From scattered messages to a managed customer system.</h2>
              </div>
              <p className="max-w-md text-sm leading-7 text-[#57534e]">
                The goal is to make daily customer management easier for owners and teams selling through social media.
              </p>
            </div>
            <div className="grid gap-5 md:grid-cols-3">
              {workflow.map((step, index) => (
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
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-emerald-600">Who it is for</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#1c1917]">
                For businesses whose sales happen inside chats, comments, and DMs.
              </h2>
              <p className="mt-4 text-base leading-8 text-[#57534e]">
                If your team is using notebooks, spreadsheets, saved replies, and memory to manage customers, a custom CRM gives that process a proper home.
              </p>
            </div>
            <div className="rounded-lg border border-stone-200 bg-white p-6 shadow-sm">
              <div className="grid gap-3 sm:grid-cols-2">
                {businessTypes.map((type) => (
                  <div key={type} className="flex items-center gap-3 rounded-lg bg-stone-50 p-3">
                    <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-emerald-600" aria-hidden="true" />
                    <span className="text-sm font-semibold text-[#292524]">{type}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-16 lg:px-8">
          <div className="rounded-lg border border-emerald-200 bg-emerald-50 p-7 md:flex md:items-center md:justify-between md:gap-8">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-700">Custom CRM for Nepal</p>
              <h2 className="mt-2 text-2xl font-bold text-[#1c1917]">Ready to manage customers properly?</h2>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-[#57534e]">
                Setup starts at Rs 10,000, with Rs 0.1 per customer per month. Share your business flow and we will plan the CRM structure with you.
              </p>
            </div>
            <a
              href={`https://wa.me/9779860479751?text=${whatsappMessage}`}
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-emerald-500 px-6 py-3 text-sm font-bold text-white transition hover:bg-emerald-600 md:mt-0 md:w-auto"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageSquareText className="h-4 w-4" aria-hidden="true" />
              WhatsApp Sajedar
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
