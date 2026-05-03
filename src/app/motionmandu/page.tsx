import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Building2, Clapperboard, Clock3, Send, Sparkles, Video } from 'lucide-react';
import Header from '../../components/Header';
import { Footer } from '../../components/sections/Footer';

export const metadata: Metadata = {
  title: 'Motionmandu AI Business Videos',
  description: 'Motionmandu creates AI videos for businesses in Nepal. Get product, offer, and brand videos for Rs 2000 per video.',
  alternates: { canonical: '/motionmandu' },
  openGraph: {
    title: 'Motionmandu AI Business Videos',
    description: 'AI videos for businesses at Rs 2000 per video.',
    url: 'https://sajedar.com/motionmandu',
    siteName: 'Sajedar',
    type: 'website',
  },
};

const whatsappMessage = encodeURIComponent(
  'Hi Sajedar! I am interested in Motionmandu AI videos for my business. Please share details.'
);

const useCases = [
  'Product launch videos',
  'Offer and sale promos',
  'Restaurant menu reels',
  'Real estate walkthrough concepts',
  'Fashion and clothing drops',
  'Service explainers for local businesses',
];

const steps = [
  {
    title: 'Send your brief',
    copy: 'Share your product, offer, audience, and any brand references you already have.',
  },
  {
    title: 'We create the video',
    copy: 'Motionmandu turns your brief into a polished AI video made for business promotion.',
  },
  {
    title: 'Use it in your ads',
    copy: 'Post it on Facebook, Instagram, TikTok, reels, stories, or sales campaigns.',
  },
];

export default function MotionmanduPage() {
  return (
    <div className="min-h-screen w-full bg-[#fafaf9] font-sans text-[#44403c]">
      <Header />

      <main className="w-full pt-24">
        <section className="relative overflow-hidden border-b border-stone-200 bg-[#111827] text-white">
          <div className="absolute inset-0 opacity-30">
            <div className="h-full w-full bg-[radial-gradient(circle_at_20%_20%,rgba(16,185,129,0.5),transparent_28%),radial-gradient(circle_at_82%_12%,rgba(251,191,36,0.35),transparent_24%),linear-gradient(135deg,rgba(17,24,39,1),rgba(28,25,23,1))]" />
          </div>
          <div className="relative mx-auto grid max-w-6xl gap-10 px-6 py-20 md:grid-cols-[1.1fr_0.9fr] md:items-center lg:px-8">
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-300/40 bg-emerald-400/10 px-4 py-2 text-sm font-semibold text-emerald-100">
                <Sparkles className="h-4 w-4" aria-hidden="true" />
                AI videos for businesses
              </div>
              <h1 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight text-white md:text-6xl">
                Motionmandu makes business videos with AI.
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-8 text-stone-200 md:text-lg">
                Get short, sharp videos for your products, offers, services, and brand campaigns without a full shoot day.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href={`https://wa.me/9779860479751?text=${whatsappMessage}`}
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-emerald-500 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-emerald-950/30 transition hover:bg-emerald-400"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Send className="h-4 w-4" aria-hidden="true" />
                  Order a video
                </a>
                <Link
                  href="/contact?message=I%20am%20interested%20in%20Motionmandu%20AI%20videos%20for%20my%20business."
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/25 px-6 py-3 text-sm font-bold text-white transition hover:border-white/60 hover:bg-white/10"
                >
                  Talk to us
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </div>

            <div className="rounded-lg border border-white/15 bg-white/10 p-6 shadow-2xl backdrop-blur">
              <div className="flex items-center justify-between border-b border-white/15 pb-5">
                <div>
                  <p className="text-sm font-medium text-stone-300">Starting price</p>
                  <p className="mt-1 text-4xl font-black text-white">Rs 2000</p>
                </div>
                <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-emerald-400 text-[#111827]">
                  <Video className="h-7 w-7" aria-hidden="true" />
                </div>
              </div>
              <p className="mt-5 text-sm font-semibold text-emerald-100">Per video</p>
              <p className="mt-3 text-sm leading-7 text-stone-200">
                Ideal for businesses that need fresh ad creatives, social posts, and quick promotional videos without heavy production cost.
              </p>
              <div className="mt-6 grid grid-cols-2 gap-3 text-sm">
                <div className="rounded-lg border border-white/10 bg-black/20 p-4">
                  <Clock3 className="mb-3 h-5 w-5 text-emerald-300" aria-hidden="true" />
                  <p className="font-semibold text-white">Fast turnaround</p>
                </div>
                <div className="rounded-lg border border-white/10 bg-black/20 p-4">
                  <Building2 className="mb-3 h-5 w-5 text-emerald-300" aria-hidden="true" />
                  <p className="font-semibold text-white">Business focused</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
          <div className="grid gap-10 md:grid-cols-[0.85fr_1.15fr] md:items-start">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-emerald-600">What you can make</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#1c1917]">Videos built for sales, ads, and daily marketing.</h2>
              <p className="mt-4 text-base leading-8 text-[#57534e]">
                Motionmandu is for businesses that need more creative output without adding a full video production team.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {useCases.map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-lg border border-stone-200 bg-white p-4 shadow-sm">
                  <Clapperboard className="h-5 w-5 flex-shrink-0 text-emerald-600" aria-hidden="true" />
                  <span className="text-sm font-semibold text-[#292524]">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-y border-stone-200 bg-white">
          <div className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
            <div className="mb-9 flex flex-col justify-between gap-4 md:flex-row md:items-end">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-emerald-600">Simple process</p>
                <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#1c1917]">From brief to ready-to-post video.</h2>
              </div>
              <p className="max-w-md text-sm leading-7 text-[#57534e]">
                Send the essentials and we shape the creative so your business can publish faster.
              </p>
            </div>
            <div className="grid gap-5 md:grid-cols-3">
              {steps.map((step, index) => (
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
          <div className="rounded-lg border border-emerald-200 bg-emerald-50 p-7 md:flex md:items-center md:justify-between md:gap-8">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-700">Motionmandu</p>
              <h2 className="mt-2 text-2xl font-bold text-[#1c1917]">Ready to create your next business video?</h2>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-[#57534e]">
                Rs 2000 per video. Send your business details and we will help turn them into an AI video concept.
              </p>
            </div>
            <a
              href={`https://wa.me/9779860479751?text=${whatsappMessage}`}
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-emerald-500 px-6 py-3 text-sm font-bold text-white transition hover:bg-emerald-600 md:mt-0 md:w-auto"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Send className="h-4 w-4" aria-hidden="true" />
              Start on WhatsApp
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
