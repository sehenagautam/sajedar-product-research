import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, ImageIcon, LayoutTemplate, MessageCircle, Palette, ShoppingBag, Sparkles, Tags } from 'lucide-react';
import Header from '../../components/Header';
import { Footer } from '../../components/sections/Footer';

export const metadata: Metadata = {
  title: 'Social Media Graphics Nepal',
  description: 'Social media graphics for Nepali businesses at Rs 200 per graphic. Get branded designs for offers, products, announcements, and daily posts.',
  keywords: [
    'social media graphics nepal',
    'facebook post design nepal',
    'instagram post design nepal',
    'graphic design nepal',
    'business graphics nepal',
    'social media design nepal',
    'post design for nepali business',
    'sajedar graphics',
  ],
  alternates: { canonical: '/social-media-graphics' },
  openGraph: {
    title: 'Social Media Graphics Nepal',
    description: 'Branded social media graphics for Nepali businesses at Rs 200 per graphic.',
    url: 'https://sajedar.com/social-media-graphics',
    siteName: 'Sajedar',
    type: 'website',
  },
};

const whatsappMessage = encodeURIComponent(
  'Hi Sajedar! I am interested in social media graphics at Rs 200 per graphic for my business.'
);

const features = [
  {
    title: 'Offer graphics',
    copy: 'Sale, discount, bundle, launch, and limited-time promotion designs for social media.',
    icon: Tags,
  },
  {
    title: 'Product posts',
    copy: 'Clean product-focused graphics for Facebook, Instagram, stories, and daily business posting.',
    icon: ShoppingBag,
  },
  {
    title: 'Brand-consistent style',
    copy: 'Graphics can follow your colors, logo, product category, and preferred visual direction.',
    icon: Palette,
  },
  {
    title: 'Template direction',
    copy: 'Build a repeatable look for your page so your posts feel consistent over time.',
    icon: LayoutTemplate,
  },
];

const packages = [
  {
    name: 'Single Graphic',
    price: 'Rs 200',
    description: 'Best for one post, offer, or product announcement.',
  },
  {
    name: 'Weekly Pack',
    price: 'Rs 1000',
    description: '5 graphics for businesses that post regularly through the week.',
  },
  {
    name: 'Monthly Pack',
    price: 'Rs 3500',
    description: '20 graphics for daily offers, product rotations, and consistent social media presence.',
  },
];

const steps = [
  {
    title: 'Send content',
    copy: 'Share your product photo, offer text, logo, colors, and where the graphic will be posted.',
  },
  {
    title: 'We design it',
    copy: 'Sajedar creates a clean social media graphic built around your offer and brand.',
  },
  {
    title: 'Post and repeat',
    copy: 'Use the graphic on Facebook, Instagram, stories, ads, or your business page.',
  },
];

export default function SocialMediaGraphicsPage() {
  return (
    <div className="min-h-screen w-full bg-[#fafaf9] font-sans text-[#44403c]">
      <Header />

      <main className="w-full pt-24">
        <section className="border-b border-stone-200 bg-white">
          <div className="mx-auto grid max-w-6xl gap-10 px-6 py-18 md:grid-cols-[1.05fr_0.95fr] md:items-center lg:px-8">
            <div className="py-8">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm font-bold text-emerald-700">
                <ImageIcon className="h-4 w-4" aria-hidden="true" />
                Social media graphics
              </div>
              <h1 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight text-[#1c1917] md:text-6xl">
                Branded graphics for Rs 200 per graphic.
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-8 text-[#57534e] md:text-lg">
                Sajedar creates social media graphics for Nepali businesses that need better posts for products, offers, announcements, and daily marketing.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href={`https://wa.me/9779860479751?text=${whatsappMessage}`}
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-emerald-500 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-emerald-900/10 transition hover:bg-emerald-600"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="h-4 w-4" aria-hidden="true" />
                  Order on WhatsApp
                </a>
                <Link
                  href="/contact?message=I%20am%20interested%20in%20social%20media%20graphics%20for%20my%20business."
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-stone-300 px-6 py-3 text-sm font-bold text-[#292524] transition hover:border-emerald-300 hover:bg-emerald-50"
                >
                  Request graphics
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </div>

            <div className="rounded-lg border border-stone-200 bg-[#fafaf9] p-6 shadow-sm">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-600">Starting price</p>
              <p className="mt-3 text-4xl font-black text-[#1c1917]">Rs 200</p>
              <p className="mt-2 text-sm font-medium text-[#57534e]">per graphic</p>
              <p className="mt-5 text-sm leading-7 text-[#57534e]">
                Best for businesses that already sell through Facebook, Instagram, TikTok, WhatsApp, or Messenger and need regular visual content.
              </p>
              <div className="mt-6 space-y-3">
                {['Facebook posts', 'Instagram posts', 'Offer announcements', 'Product promotions'].map((item) => (
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
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#1c1917]">Simple, useful graphics for daily selling.</h2>
              <p className="mt-4 text-base leading-8 text-[#57534e]">
                These graphics are made for practical social media use: clear offer, readable text, product focus, and quick posting.
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
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#1c1917]">Order one graphic or plan a posting rhythm.</h2>
            </div>
            <div className="grid gap-5 md:grid-cols-3">
              {packages.map((pkg) => (
                <div key={pkg.name} className="rounded-lg border border-stone-200 bg-[#fafaf9] p-6">
                  <Sparkles className="mb-4 h-6 w-6 text-emerald-600" aria-hidden="true" />
                  <h3 className="text-lg font-bold text-[#1c1917]">{pkg.name}</h3>
                  <p className="mt-2 text-3xl font-black text-[#1c1917]">{pkg.price}</p>
                  <p className="mt-3 text-sm leading-7 text-[#57534e]">{pkg.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
          <div className="mb-9">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-emerald-600">Process</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#1c1917]">From idea to ready-to-post graphic.</h2>
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
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-700">Social Media Graphics</p>
              <h2 className="mt-2 text-2xl font-bold text-[#1c1917]">Need a graphic for your next post?</h2>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-[#57534e]">
                Send your product, offer, text, and logo. Graphics start at Rs 200 per design.
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
