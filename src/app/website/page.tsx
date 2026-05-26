import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowRight,
  BellRing,
  CheckCircle2,
  Code2,
  Globe2,
  MessageCircle,
  Server,
  Sparkles,
  ExternalLink,
  Zap,
} from 'lucide-react';
import Header from '../../components/Header';
import { Footer } from '../../components/sections/Footer';

export const metadata: Metadata = {
  title: 'Custom Business Website Nepal — Starting at Rs 4,000 | Sajedar',
  description:
    'Premium-looking custom websites for Nepali businesses starting at Rs 4,000. See live examples: ashwi.sajedar.com, dailydiva.sajedar.com.',
  alternates: { canonical: '/website' },
  openGraph: {
    title: 'Premium Business Website for Rs 4,000 | Sajedar Nepal',
    description: 'Premium look. Low price. We build it for you.',
    url: 'https://sajedar.com/website',
    siteName: 'Sajedar',
    type: 'website',
  },
};

const whatsappMessage = encodeURIComponent(
  'Hi Sajedar! I am interested in the Rs 4,000 website service. Please share details.'
);

const features = [
  {
    icon: Sparkles,
    title: 'CRO-focused custom design',
    body: 'Every site is designed for Conversion Rate Optimization (CRO) to look polished and turn visitors into buyers.',
  },
  {
    icon: BellRing,
    title: 'Abandoned Cart Recovery',
    body: 'Automated sequences to bring back shoppers who left their details but didn\'t finish the purchase.',
  },
  {
    icon: Server,
    title: 'Sajedar subdomain hosting',
    body: 'Launch on yourstore.sajedar.com from day one — no domain purchase required.',
  },
  {
    icon: Globe2,
    title: 'Maximize AOV & LTV',
    body: 'Built-in features to increase Average Order Value and Customer Lifetime Value through smart layouts.',
  },
];

const steps = [
  { n: '01', title: 'Send your brief', body: 'Share your business name, products, photos, prices, and brand feel on WhatsApp.' },
  { n: '02', title: 'We build it', body: 'Sajedar designs and builds your custom premium site, usually within 3–5 business days.' },
  { n: '03', title: 'Go live', body: 'Your site launches on a Sajedar subdomain, ready to receive orders and traffic.' },
];

const included = [
  'Custom premium frontend (not a template)',
  'Mobile-first responsive design',
  'Product/service catalogue with search & filters',
  'Add to cart + order flow',
  'Discord order notifications',
  'Sajedar subdomain hosting',
  'WhatsApp contact integration',
  'Basic SEO setup',
];
const examples = [
  {
    name: 'Ashwi Furniture',
    url: 'ashwi.sajedar.com',
    href: 'https://ashwi.sajedar.com',
    image: '/ashwi_preview.jpg',
    tag: 'Furniture store',
  },
  {
    name: 'Daily Diva',
    url: 'dailydiva.sajedar.com',
    href: 'https://dailydiva.sajedar.com',
    image: '/dailydiva_preview.jpg',
    tag: 'Fashion bags',
  },
];
    palette: 'Soft & elegant',
  },
];

export default function WebsitePage() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-[#fafafa] font-sans text-[#18181b]">
      <Header />

      <main>
        {/* ── HERO ── */}
        <section className="relative overflow-hidden bg-[#0f0f0f] pt-28 pb-24 px-6 lg:px-8">
          {/* Glow blobs */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute left-1/2 top-0 h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/3 rounded-full bg-emerald-500/10 blur-[120px]" />
            <div className="absolute bottom-0 right-0 h-[300px] w-[500px] translate-x-1/4 rounded-full bg-emerald-500/[0.06] blur-[100px]" />
          </div>

          <div className="relative mx-auto max-w-6xl">
            {/* Eyebrow */}
            <div className="mb-8 inline-flex items-center gap-2.5 rounded-full border border-emerald-400/20 bg-emerald-400/[0.07] px-5 py-2 text-[12px] font-semibold uppercase tracking-[0.18em] text-emerald-300">
              <Code2 className="h-3.5 w-3.5" />
              Business Websites · Nepal
            </div>

            <div className="grid gap-12 lg:grid-cols-[1fr_auto] lg:items-end">
              <div>
                <h1 className="text-[clamp(2.8rem,6vw,5rem)] font-black leading-[1.0] tracking-[-0.04em] text-white">
                  Premium websites.<br />
                  <span className="text-emerald-400">Prices that aren&apos;t.</span>
                </h1>
                <p className="mt-6 max-w-xl text-[16px] leading-relaxed text-white/50">
                  Expensive agencies charge Rs 50,000+ for a site. Cheap templates look cheap. Sajedar builds you a{' '}
                  <span className="text-white/80 font-medium">genuinely premium custom website</span> for Rs 4,000 — designed with AI, live in days.
                </p>
                <div className="mt-10 flex flex-wrap gap-3">
                  <a
                    href={`https://wa.me/9779860479751?text=${whatsappMessage}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2.5 rounded-xl bg-emerald-500 px-7 py-3.5 text-[14px] font-bold text-white shadow-xl shadow-emerald-500/25 transition-all hover:-translate-y-0.5 hover:bg-emerald-400 hover:shadow-emerald-500/40"
                  >
                    <MessageCircle className="h-4 w-4" />
                    Order on WhatsApp
                  </a>
                  <Link
                    href="#examples"
                    className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-7 py-3.5 text-[14px] font-semibold text-white/60 transition hover:border-white/20 hover:text-white"
                  >
                    See live examples
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>

              {/* Price card */}
              <div className="w-full max-w-xs rounded-2xl border border-white/[0.08] bg-white/[0.04] p-7 backdrop-blur-sm lg:w-72">
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-emerald-400/70">Starting at</p>
                <p className="mt-2 text-[4rem] font-black leading-none tracking-tight text-white">
                  Rs<br />4,000
                </p>
                <div className="mt-6 space-y-2.5">
                  {['Custom design (not a template)', 'Live in 3–5 days', 'Subdomain hosting included', 'Order notifications'].map((item) => (
                    <div key={item} className="flex items-center gap-2.5 text-[13px] text-white/50">
                      <CheckCircle2 className="h-3.5 w-3.5 flex-shrink-0 text-emerald-400/70" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── VS BANNER ── */}
        <section className="border-b border-black/[0.04] bg-white px-6 py-12 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <div className="grid gap-4 sm:grid-cols-3 text-center">
              <div className="rounded-2xl border border-red-100 bg-red-50 p-6">
                <p className="text-[12px] font-bold uppercase tracking-widest text-red-400 mb-2">Expensive agency</p>
                <p className="text-[2.2rem] font-black text-red-500">Rs 50k+</p>
                <p className="mt-1 text-[12px] text-red-400/70">Months of back-and-forth</p>
              </div>
              <div className="rounded-2xl border border-stone-200 bg-[#fafafa] p-6">
                <p className="text-[12px] font-bold uppercase tracking-widest text-stone-400 mb-2">Cheap template</p>
                <p className="text-[2.2rem] font-black text-stone-400">Rs 500</p>
                <p className="mt-1 text-[12px] text-stone-400/70">Looks like everyone else</p>
              </div>
              <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-6 relative">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-emerald-500 px-3 py-1 text-[10px] font-black uppercase tracking-widest text-white">Sajedar</div>
                <p className="text-[12px] font-bold uppercase tracking-widest text-emerald-600 mb-2">Custom premium</p>
                <p className="text-[2.2rem] font-black text-emerald-600">Rs 4,000</p>
                <p className="mt-1 text-[12px] text-emerald-600/70">Premium look. Low price.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ── LIVE EXAMPLES ── */}
        <section id="examples" className="bg-[#fafafa] px-6 py-24 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="mb-14 text-center">
              <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.25em] text-emerald-600/60">
                Live sites built by Sajedar
              </p>
              <h2 className="text-[clamp(2rem,4vw,3rem)] font-black tracking-tight text-[#18181b]">
                See what Rs 4,000 looks like.
              </h2>
              <p className="mx-auto mt-4 max-w-lg text-[15px] text-[#71717a]">
                These are real businesses running on Sajedar-built websites today.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {examples.map((ex) => (
                <a
                  key={ex.url}
                  href={ex.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative overflow-hidden rounded-2xl border border-black/[0.06] bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/[0.08]"
                >
                  {/* Browser chrome bar */}
                  <div className="flex items-center gap-2 border-b border-black/[0.05] bg-[#f4f4f5] px-4 py-2.5">
                    <div className="flex gap-1.5">
                      <div className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
                      <div className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
                      <div className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
                    </div>
                    <div className="mx-auto flex items-center gap-1.5 rounded-md bg-white/80 px-3 py-1 text-[11px] text-[#a1a1aa] border border-black/[0.05]">
                      <Globe2 className="h-2.5 w-2.5" />
                      {ex.url}
                    </div>
                    <ExternalLink className="h-3 w-3 text-[#a1a1aa] opacity-0 transition-opacity group-hover:opacity-100" />
                  </div>

                  {/* Screenshot */}
                  <div className="relative h-72 w-full overflow-hidden">
                    <Image
                      src={ex.image}
                      alt={`${ex.name} website screenshot`}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.02]"
                    />
                    {/* Gradient fade at bottom */}
                    <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
                  </div>

                  {/* Card footer */}
                  <div className="flex items-center justify-between px-5 py-4">
                    <div>
                      <p className="text-[15px] font-black text-[#18181b]">{ex.name}</p>
                      <div className="mt-1 flex items-center gap-2">
                        <span className="rounded-full bg-emerald-50 border border-emerald-100 px-2.5 py-0.5 text-[11px] font-semibold text-emerald-700">{ex.tag}</span>
                        <span className="text-[11px] text-[#a1a1aa]">{ex.palette}</span>
                      </div>
                    </div>
                    <div className="flex h-9 w-9 items-center justify-center rounded-full border border-black/[0.07] text-[#a1a1aa] transition-all group-hover:border-emerald-400/30 group-hover:bg-emerald-50 group-hover:text-emerald-600">
                      <ExternalLink className="h-3.5 w-3.5" />
                    </div>
                  </div>
                </a>
              ))}
            </div>

            <p className="mt-6 text-center text-[13px] text-[#a1a1aa]">
              Both built by Sajedar. Both starting at Rs 4,000.
            </p>
          </div>
        </section>

        {/* ── WHAT'S INCLUDED ── */}
        <section className="border-t border-black/[0.04] bg-white px-6 py-24 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-14 lg:grid-cols-[1fr_1fr] lg:items-start">
              <div>
                <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.25em] text-emerald-600/60">Included in every site</p>
                <h2 className="text-[clamp(1.8rem,3.5vw,2.8rem)] font-black tracking-tight text-[#18181b] leading-tight">
                  Everything you need to start selling online.
                </h2>
                <p className="mt-5 text-[15px] leading-relaxed text-[#71717a]">
                  No hidden costs. No confusing packages. One price, one delivery, everything ready to sell.
                </p>

                <a
                  href={`https://wa.me/9779860479751?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex items-center gap-2.5 rounded-xl bg-emerald-500 px-7 py-3.5 text-[14px] font-bold text-white shadow-lg shadow-emerald-500/20 transition-all hover:-translate-y-0.5 hover:bg-emerald-400"
                >
                  <MessageCircle className="h-4 w-4" />
                  Order on WhatsApp
                </a>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {included.map((item) => (
                  <div key={item} className="flex items-start gap-3 rounded-xl border border-black/[0.05] bg-[#fafafa] p-4">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-emerald-500" />
                    <p className="text-[13px] font-semibold text-[#3f3f46]">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── FEATURES ── */}
        <section className="border-t border-black/[0.04] bg-[#fafafa] px-6 py-24 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="mb-14 max-w-lg">
              <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.25em] text-emerald-600/60">How it works under the hood</p>
              <h2 className="text-[clamp(1.8rem,3.5vw,2.8rem)] font-black tracking-tight text-[#18181b]">
                Built for businesses that sell online.
              </h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {features.map(({ icon: Icon, title, body }) => (
                <div key={title} className="rounded-2xl border border-black/[0.06] bg-white p-7 transition-all hover:shadow-md hover:shadow-black/[0.04]">
                  <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-50 border border-emerald-100">
                    <Icon className="h-5 w-5 text-emerald-600" />
                  </div>
                  <h3 className="text-[15px] font-black text-[#18181b]">{title}</h3>
                  <p className="mt-2 text-[13px] leading-relaxed text-[#71717a]">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── HOW IT WORKS ── */}
        <section className="border-t border-black/[0.04] bg-white px-6 py-24 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="mb-14 text-center">
              <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.25em] text-emerald-600/60">Simple process</p>
              <h2 className="text-[clamp(1.8rem,3.5vw,2.8rem)] font-black tracking-tight text-[#18181b]">
                From WhatsApp brief to live site.
              </h2>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              {steps.map(({ n, title, body }) => (
                <div key={n} className="relative overflow-hidden rounded-2xl border border-black/[0.06] bg-[#fafafa] p-8">
                  <div className="absolute -right-3 -top-3 text-[72px] font-black text-black/[0.03] select-none leading-none">{n}</div>
                  <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500 text-[13px] font-black text-white">
                    {n}
                  </div>
                  <h3 className="text-[17px] font-black text-[#18181b]">{title}</h3>
                  <p className="mt-2 text-[13px] leading-relaxed text-[#71717a]">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="relative overflow-hidden border-t border-black/[0.04] bg-[#0f0f0f] px-6 py-28 lg:px-8">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_50%,rgba(16,185,129,0.1),transparent_70%)]" />
          <div className="relative mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/[0.06] px-5 py-2 text-[12px] font-semibold uppercase tracking-[0.15em] text-emerald-300">
              <Zap className="h-3.5 w-3.5" />
              Ready in 3–5 days
            </div>
            <h2 className="text-[clamp(2.2rem,5vw,4rem)] font-black leading-tight tracking-[-0.03em] text-white">
              Your business deserves a<br />
              <span className="text-emerald-400">premium website.</span>
            </h2>
            <p className="mx-auto mt-5 max-w-md text-[15px] leading-relaxed text-white/40">
              Starting at Rs 4,000. No templates. No compromise. Send your brief on WhatsApp and we will build it.
            </p>
            <a
              href={`https://wa.me/9779860479751?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-flex items-center gap-2.5 rounded-xl bg-emerald-500 px-9 py-4 text-[15px] font-black text-white shadow-2xl shadow-emerald-500/25 transition-all hover:-translate-y-0.5 hover:bg-emerald-400"
            >
              <MessageCircle className="h-4 w-4" />
              Order on WhatsApp — Rs 4,000
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
