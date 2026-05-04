import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  BellRing,
  Bot,
  CheckCircle2,
  Clapperboard,
  Code2,
  DatabaseZap,
  Globe2,
  ImageIcon,
  Megaphone,
  MessageCircle,
  MousePointerClick,
  SearchCheck,
  Sparkles,
  UsersRound,
} from 'lucide-react';
import Header from '../components/Header';
import { Footer } from '../components/sections/Footer';

const whatsappMessage = encodeURIComponent(
  'Hi Sajedar! I want to set up or improve my online business. Please help me choose the right services.'
);

const services = [
  {
    title: 'Product Market Research',
    href: '/product-market-research',
    price: 'Starting at Rs 3000',
    copy: 'Find demand, competitors, price range, and launch risk before you spend.',
    icon: SearchCheck,
  },
  {
    title: 'Business Website',
    href: '/website',
    price: 'Starting at Rs 4000',
    copy: 'Launch a sharp frontend with order notifications and Sajedar subdomain hosting.',
    icon: Code2,
  },
  {
    title: 'Custom CRM',
    href: '/crm',
    price: 'Starting at Rs 10,000',
    copy: 'Track customers, alerts, accounts, and social-commerce workflows.',
    icon: UsersRound,
  },
  {
    title: 'Social Media Graphics',
    href: '/social-media-graphics',
    price: 'Starting at Rs 200',
    copy: 'Create branded posts, offers, announcements, and daily social visuals.',
    icon: ImageIcon,
  },
  {
    title: 'Motionmandu AI Videos',
    href: '/motionmandu',
    price: 'Starting at Rs 2000',
    copy: 'Turn products, offers, and services into short AI video creatives.',
    icon: Clapperboard,
  },
  {
    title: 'Meta Ads Planning',
    href: '/meta-ads',
    price: 'Starting with budget plan',
    copy: 'Plan Facebook and Instagram campaigns with a clear spending path.',
    icon: Megaphone,
  },
  {
    title: 'AI Sales Agent',
    href: '/sales-agent',
    price: 'Starting at Rs 4000',
    copy: 'Answer, recommend, qualify, and follow up inside Messenger.',
    icon: Bot,
  },
];

const setupSteps = [
  {
    title: 'Find the opportunity',
    copy: 'Research the product, audience, competitors, pricing, and market risk before spending heavily.',
    icon: SearchCheck,
  },
  {
    title: 'Build the online base',
    copy: 'Launch the website, subdomain, CRM, dashboard, order notifications, and social account workflow.',
    icon: Globe2,
  },
  {
    title: 'Create demand',
    copy: 'Plan Meta ads, publish graphics, make videos, and shape offers that are easy to understand.',
    icon: Megaphone,
  },
  {
    title: 'Convert and manage',
    copy: 'Use AI sales agents, alerts, customer records, and follow-up systems to turn interest into orders.',
    icon: DatabaseZap,
  },
];

const proofPoints = [
  'Social-first business setup',
  'Nepal-focused pricing',
  'Website, ads, CRM, creative, and automation',
  'WhatsApp-led planning',
];

export default function Home() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-[#fafaf9] font-sans text-[#44403c]">
      <Header />

      <main className="w-full">
        <style>
          {`
            @media (max-width: 639px) {
              .home-hero-copy,
              .home-hero-copy h1,
              .home-hero-copy p,
              .home-hero-actions,
              .home-hero-proof,
              .home-hero-mobile-panel {
                max-width: calc(100vw - 4rem);
              }
            }
          `}
        </style>
        <section className="relative min-h-[92vh] overflow-hidden bg-[#111827] text-white">
          <video
            className="absolute inset-0 h-full w-full object-cover opacity-20"
            src="/sajedar_intro.mp4"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-[#111827]/90" />
          <div className="relative mx-auto grid min-h-[92vh] max-w-7xl gap-10 px-6 pb-14 pt-28 md:grid-cols-[1fr_0.92fr] md:items-center lg:px-8">
            <div className="home-hero-copy max-w-3xl">
              <div className="mb-6 inline-flex max-w-xs items-center gap-2 rounded-full border border-emerald-300/40 bg-emerald-400/10 px-4 py-2 text-sm font-bold text-emerald-100 backdrop-blur sm:max-w-full">
                <Sparkles className="h-4 w-4" aria-hidden="true" />
                <span className="truncate">Online setup partner for Nepal</span>
              </div>
              <h1 className="max-w-xs text-4xl font-black leading-tight tracking-tight text-white sm:max-w-2xl sm:text-5xl md:text-6xl lg:text-7xl">
                <span className="block sm:inline">We build</span>
                <span className="block sm:inline"> the system</span>
                <span className="block">behind your</span>
                <span className="block">online business.</span>
              </h1>
              <p className="mt-6 max-w-xs break-words text-base leading-8 text-stone-200 sm:max-w-2xl md:text-lg">
                Sajedar helps Nepalese businesses move from scattered DMs and manual follow-ups to a complete online setup: website, CRM, ads, graphics, videos, research, and AI sales automation.
              </p>
              <div className="home-hero-actions mt-8 flex w-full max-w-xs flex-col gap-3 sm:max-w-none sm:flex-row">
                <a
                  href={`https://wa.me/9779860479751?text=${whatsappMessage}`}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-emerald-500 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-black/20 transition hover:bg-emerald-400 sm:w-auto"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="h-4 w-4" aria-hidden="true" />
                  Plan my setup
                </a>
                <Link
                  href="/services"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-white/25 px-6 py-3 text-sm font-bold text-white transition hover:border-white/60 hover:bg-white/10 sm:w-auto"
                >
                  View services
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
              <div className="home-hero-proof mt-9 grid max-w-xs gap-3 sm:max-w-2xl sm:grid-cols-2">
                {proofPoints.map((point) => (
                  <div key={point} className="flex min-w-0 items-center gap-3 text-sm font-semibold text-stone-100">
                    <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-emerald-300" aria-hidden="true" />
                    <span className="min-w-0 break-words">{point}</span>
                  </div>
                ))}
              </div>
              <div className="home-hero-mobile-panel mt-8 max-w-xs rounded-lg border border-white/15 bg-white/10 p-5 shadow-2xl backdrop-blur md:hidden">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-200">Setup snapshot</p>
                <div className="mt-4 grid grid-cols-2 gap-3">
                  {[
                    ['Rs 4k', 'website'],
                    ['Rs 200', 'graphic'],
                    ['Rs 2k', 'AI video'],
                    ['CRM', 'alerts'],
                  ].map(([stat, label]) => (
                    <div key={label} className="rounded-lg border border-white/10 bg-black/20 p-3">
                      <p className="text-xl font-black text-white">{stat}</p>
                      <p className="mt-1 text-xs font-semibold text-stone-300">{label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="relative hidden min-h-[560px] md:block">
              <div className="absolute left-0 top-0 w-[78%] rounded-lg border border-white/15 bg-white/10 p-5 shadow-2xl backdrop-blur-md">
                <div className="flex items-center justify-between border-b border-white/15 pb-4">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-200">Business cockpit</p>
                    <p className="mt-1 text-lg font-black text-white">Live setup map</p>
                  </div>
                  <BellRing className="h-6 w-6 text-emerald-200" aria-hidden="true" />
                </div>
                <div className="mt-5 space-y-4">
                  {[
                    ['Website', 'ashwi.sajedar.com', 'bg-emerald-400'],
                    ['Orders', 'Discord alerts on', 'bg-amber-300'],
                    ['CRM', '1,284 customers', 'bg-sky-300'],
                    ['AI agent', 'Messenger active', 'bg-pink-300'],
                  ].map(([label, value, color]) => (
                    <div key={label} className="flex items-center justify-between rounded-lg border border-white/10 bg-black/22 p-4">
                      <div className="flex items-center gap-3">
                        <span className={`h-3 w-3 rounded-full ${color}`} />
                        <span className="text-sm font-bold text-white">{label}</span>
                      </div>
                      <span className="text-sm font-medium text-stone-200">{value}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="absolute right-0 top-24 w-[56%] rounded-lg border border-white/15 bg-white p-5 shadow-2xl">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.16em] text-emerald-700">Website + orders</p>
                    <p className="mt-2 text-lg font-black text-[#1c1917]">ashwi.sajedar.com</p>
                  </div>
                  <Globe2 className="h-6 w-6 text-emerald-600" aria-hidden="true" />
                </div>
                <div className="mt-5 space-y-3">
                  <div className="h-3 w-4/5 rounded-full bg-stone-200" />
                  <div className="h-3 w-2/3 rounded-full bg-stone-200" />
                  <div className="grid grid-cols-2 gap-3 pt-2">
                    <div className="rounded-lg bg-emerald-50 p-3">
                      <p className="text-xl font-black text-[#1c1917]">13</p>
                      <p className="text-xs font-semibold text-[#57534e]">orders</p>
                    </div>
                    <div className="rounded-lg bg-stone-50 p-3">
                      <p className="text-xl font-black text-[#1c1917]">on</p>
                      <p className="text-xs font-semibold text-[#57534e]">Discord</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-6 left-10 w-[64%] rounded-lg border border-white/15 bg-[#fafaf9] p-5 shadow-2xl">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-emerald-700">Growth queue</p>
                <div className="mt-4 grid grid-cols-2 gap-3">
                  {[
                    ['20', 'graphics/month'],
                    ['5', 'product ideas'],
                    ['Rs 4k', 'starter website'],
                    ['Rs 2k', 'AI video'],
                  ].map(([stat, label]) => (
                    <div key={label} className="rounded-lg border border-stone-200 bg-white p-3">
                      <p className="text-xl font-black text-[#1c1917]">{stat}</p>
                      <p className="mt-1 text-xs font-semibold text-[#57534e]">{label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-stone-200 bg-white">
          <div className="mx-auto grid max-w-7xl gap-8 px-6 py-16 md:grid-cols-[0.8fr_1.2fr] lg:px-8">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-emerald-600">Full setup, one partner</p>
              <h2 className="mt-3 text-3xl font-black tracking-tight text-[#1c1917] md:text-5xl">
                Not just a website. Not just ads. The operating layer.
              </h2>
              <p className="mt-5 text-base leading-8 text-[#57534e]">
                Most online businesses in Nepal start with social media. Sajedar gives that business a proper system around it: discovery, content, website, CRM, advertising, automation, and follow-up.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {setupSteps.map((step, index) => {
                const Icon = step.icon;

                return (
                  <div key={step.title} className="rounded-lg border border-stone-200 bg-[#fafaf9] p-5">
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-emerald-100 text-emerald-700">
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </div>
                      <span className="text-sm font-black text-stone-300">0{index + 1}</span>
                    </div>
                    <h3 className="mt-5 text-lg font-black text-[#1c1917]">{step.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-[#57534e]">{step.copy}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section id="services-pipeline" className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="mb-9 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-emerald-600">Services</p>
              <h2 className="mt-3 text-3xl font-black tracking-tight text-[#1c1917] md:text-5xl">
                One connected path from idea to online sales.
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-8 text-[#57534e]">
                Product research comes first, then the website, CRM, creative, ads, and AI sales agent work together as one online business system.
              </p>
            </div>
            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-stone-300 px-5 py-3 text-sm font-bold text-[#292524] transition hover:border-emerald-300 hover:bg-emerald-50"
            >
              Explore all services
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
          <div className="relative">
            <div className="absolute left-6 top-0 hidden h-full w-px bg-emerald-200 max-lg:block" aria-hidden="true" />
            <div className="absolute left-0 right-0 top-6 hidden h-px bg-emerald-200 lg:block" aria-hidden="true" />
            <div className="relative grid gap-4 lg:grid-cols-7">
              {services.map((service) => {
                const Icon = service.icon;

                return (
                  <Link
                    key={service.href}
                    href={service.href}
                    className="group relative flex gap-4 rounded-lg border border-stone-200 bg-white p-4 shadow-sm transition hover:border-emerald-300 hover:shadow-md lg:min-h-[300px] lg:flex-col lg:pt-5"
                  >
                    <div className="relative z-10 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-emerald-100 text-emerald-700 ring-4 ring-white">
                      <Icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-start justify-between gap-3">
                        <h3 className="text-base font-black leading-6 text-[#1c1917] lg:text-lg">{service.title}</h3>
                        <ArrowRight className="mt-1 h-4 w-4 flex-shrink-0 text-stone-400 transition group-hover:translate-x-1 group-hover:text-emerald-600" aria-hidden="true" />
                      </div>
                      <p className="mt-2 text-sm font-bold leading-6 text-emerald-700">{service.price}</p>
                      <p className="mt-3 text-sm leading-6 text-[#57534e]">{service.copy}</p>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        <section className="border-y border-stone-200 bg-white">
          <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-[1fr_1fr] md:items-center lg:px-8">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-emerald-600">Visual system</p>
              <h2 className="mt-3 text-3xl font-black tracking-tight text-[#1c1917] md:text-5xl">
                Your social business gets a control room.
              </h2>
              <p className="mt-5 text-base leading-8 text-[#57534e]">
                We connect the moving parts: your page, content, ads, orders, customer records, and follow-ups. The result is less guessing and fewer lost customers.
              </p>
              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                {[
                  'Discord order alerts',
                  'CRM dashboard',
                  'Sajedar subdomain',
                  'AI sales follow-up',
                  'Meta ad budget plan',
                  'Monthly content rhythm',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3 text-sm font-bold text-[#292524]">
                    <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-emerald-600" aria-hidden="true" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div className="grid gap-4">
              <div className="rounded-lg border border-stone-200 bg-[#111827] p-5 text-white shadow-xl">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-200">Today</p>
                    <h3 className="mt-2 text-2xl font-black">Orders and conversations</h3>
                  </div>
                  <MousePointerClick className="h-7 w-7 text-emerald-200" aria-hidden="true" />
                </div>
                <div className="mt-6 grid gap-3 sm:grid-cols-3">
                  {[
                    ['42', 'new chats'],
                    ['13', 'orders'],
                    ['8', 'follow-ups'],
                  ].map(([stat, label]) => (
                    <div key={label} className="rounded-lg border border-white/10 bg-white/10 p-4">
                      <p className="text-3xl font-black">{stat}</p>
                      <p className="mt-1 text-xs font-semibold text-stone-300">{label}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="overflow-hidden rounded-lg border border-stone-200 bg-white shadow-sm">
                  <Image
                    src="/lattakapada.webp"
                    alt="Social-commerce product example"
                    width={520}
                    height={340}
                    className="h-44 w-full object-cover"
                  />
                  <div className="p-4">
                    <p className="text-sm font-black text-[#1c1917]">Product posts and offers</p>
                  </div>
                </div>
                <div className="overflow-hidden rounded-lg border border-stone-200 bg-white shadow-sm">
                  <Image
                    src="/osha.webp"
                    alt="Business brand example"
                    width={520}
                    height={340}
                    className="h-44 w-full object-cover"
                  />
                  <div className="p-4">
                    <p className="text-sm font-black text-[#1c1917]">Research and launch planning</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
          <div className="rounded-lg border border-emerald-200 bg-emerald-50 p-7 md:flex md:items-center md:justify-between md:gap-8">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-700">Start with a conversation</p>
              <h2 className="mt-2 text-3xl font-black text-[#1c1917]">Tell us where your online business is stuck.</h2>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-[#57534e]">
                We will help you choose the right combination: website, CRM, ads, graphics, videos, research, or AI sales automation.
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
