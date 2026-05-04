import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Bot, Clapperboard, Code2, ImageIcon, Megaphone, MessageCircle, SearchCheck, UsersRound } from 'lucide-react';
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
    title: 'Custom AI Sales Agent',
    href: '/sales-agent',
    price: 'Commission and plan based',
    description: 'AI sales agents for Messenger that answer customers, understand products, and help convert conversations.',
    icon: Bot,
  },
  {
    title: 'Custom Motionmandu AI Videos',
    href: '/motionmandu',
    price: 'Rs 2000 per video',
    description: 'AI-generated business videos for products, offers, services, and social media campaigns.',
    icon: Clapperboard,
  },
  {
    title: 'Custom Meta Ads Planning',
    href: '/meta-ads',
    price: 'Budget planning via WhatsApp',
    description: 'Facebook and Instagram ad planning for Nepalese businesses with practical budget guidance.',
    icon: Megaphone,
  },
  {
    title: 'Custom CRM',
    href: '/crm',
    price: 'Rs 10,000 setup + Rs 0.1/customer/month',
    description: 'Custom CRM for businesses that sell through Facebook, Instagram, WhatsApp, and social media.',
    icon: UsersRound,
  },
  {
    title: 'Custom Business Website',
    href: '/website',
    price: 'Rs 4000',
    description: 'High quality frontend website with Discord order notifications and Sajedar subdomain hosting.',
    icon: Code2,
  },
  {
    title: 'Custom Product Market Research',
    href: '/product-market-research',
    price: 'Starts at Rs 3000',
    description: 'Research support to understand demand, competitors, positioning, and market fit before launching or scaling a product.',
    icon: SearchCheck,
  },
  {
    title: 'Custom Social Media Graphics',
    href: '/social-media-graphics',
    price: 'Rs 200 per graphic',
    description: 'Branded graphics for posts, offers, product announcements, and daily social media marketing.',
    icon: ImageIcon,
  },
];

const whatsappMessage = encodeURIComponent(
  'Hi Sajedar! I want to discuss which service is best for my business.'
);

export default function ServicesPage() {
  return (
    <div className="min-h-screen w-full bg-[#fafaf9] font-sans text-[#44403c]">
      <Header />

      <main className="w-full pt-24">
        <section className="border-b border-stone-200 bg-white">
          <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-emerald-600">Sajedar Services</p>
            <div className="mt-4 grid gap-8 md:grid-cols-[1fr_0.7fr] md:items-end">
              <div>
                <h1 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight text-[#1c1917] md:text-6xl">
                  Services for Nepali businesses selling online.
                </h1>
                <p className="mt-6 max-w-2xl text-base leading-8 text-[#57534e] md:text-lg">
                  Choose from AI sales agents, AI videos, Meta ads planning, custom CRM systems, affordable business websites, product market research, and social media graphics.
                </p>
              </div>
              <a
                href={`https://wa.me/9779860479751?text=${whatsappMessage}`}
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-emerald-500 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-emerald-900/10 transition hover:bg-emerald-600 md:justify-self-end"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                Ask on WhatsApp
              </a>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
          <div className="grid gap-5 md:grid-cols-2">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <Link
                  key={service.href}
                  href={service.href}
                  className="group rounded-lg border border-stone-200 bg-white p-6 shadow-sm transition hover:border-emerald-300 hover:shadow-md"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-emerald-100 text-emerald-700">
                      <Icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <ArrowRight className="h-5 w-5 flex-shrink-0 text-stone-400 transition group-hover:translate-x-1 group-hover:text-emerald-600" aria-hidden="true" />
                  </div>
                  <h2 className="mt-5 text-xl font-bold text-[#1c1917]">
                    {service.title.startsWith('Custom ') ? (
                      <>
                        <span className="text-emerald-700">Custom</span>
                        {service.title.replace('Custom', '')}
                      </>
                    ) : (
                      service.title
                    )}
                  </h2>
                  <p className="mt-2 text-sm font-bold text-emerald-700">{service.price}</p>
                  <p className="mt-4 text-sm leading-7 text-[#57534e]">{service.description}</p>
                </Link>
              );
            })}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
