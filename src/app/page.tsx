import Link from 'next/link';
import type { ReactNode } from 'react';
import {
  ArrowRight,
  BellRing,
  Bot,
  CheckCircle2,
  Clapperboard,
  Code2,
  Globe2,
  ImageIcon,
  Megaphone,
  MessageCircle,
  SearchCheck,
  Sparkles,
  UsersRound,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import Header from '../components/Header';
import { Footer } from '../components/sections/Footer';

const whatsappMessage = encodeURIComponent(
  'Hi Sajedar! I want to set up or improve my online business. Please help me choose the right services.'
);

function SceneShell({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <svg viewBox="0 0 220 220" fill="none" aria-hidden="true" className={className}>
      <defs>
        <linearGradient id="sceneFace" x1="54" y1="30" x2="160" y2="180" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FFFFFF" />
          <stop offset="0.45" stopColor="#F8FFFB" />
          <stop offset="1" stopColor="#DDF8E8" />
        </linearGradient>
        <linearGradient id="sceneGreen" x1="55" y1="48" x2="150" y2="160" gradientUnits="userSpaceOnUse">
          <stop stopColor="#34D399" />
          <stop offset="0.56" stopColor="#059669" />
          <stop offset="1" stopColor="#065F46" />
        </linearGradient>
        <radialGradient
          id="sceneGlow"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(139 61) rotate(113) scale(83)"
        >
          <stop stopColor="#B7F7D1" stopOpacity="0.95" />
          <stop offset="1" stopColor="#B7F7D1" stopOpacity="0" />
        </radialGradient>
        <filter id="sceneBigShadow" x="-20" y="-20" width="260" height="260" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feDropShadow dx="0" dy="30" stdDeviation="18" floodColor="#047857" floodOpacity="0.24" />
          <feDropShadow dx="0" dy="10" stdDeviation="8" floodColor="#000000" floodOpacity="0.12" />
          <feDropShadow dx="0" dy="2" stdDeviation="2" floodColor="#FFFFFF" floodOpacity="0.9" />
        </filter>
        <filter id="sceneSmallShadow" x="-20" y="-20" width="260" height="260" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feDropShadow dx="0" dy="14" stdDeviation="10" floodColor="#047857" floodOpacity="0.18" />
          <feDropShadow dx="0" dy="4" stdDeviation="4" floodColor="#000000" floodOpacity="0.08" />
        </filter>
      </defs>
      <ellipse cx="110" cy="184" rx="62" ry="16" fill="#047857" opacity="0.12" />
      <circle cx="140" cy="67" r="74" fill="url(#sceneGlow)" />
      <circle cx="61" cy="145" r="38" fill="#ECFDF3" opacity="0.85" />
      {children}
    </svg>
  );
}

function ServiceScene({ icon: Icon, index, className = '' }: { icon: LucideIcon; index: number; className?: string }) {
  const accents = ['#059669', '#2563EB', '#7C3AED', '#F59E0B', '#E11D48', '#0EA5E9', '#0F766E'];
  const shapes = [
    <circle key="research" cx="110" cy="105" r="55" fill="url(#sceneFace)" />,
    <rect key="website" x="47" y="52" width="126" height="104" rx="34" fill="url(#sceneFace)" />,
    <rect key="crm" x="58" y="36" width="104" height="130" rx="34" fill="url(#sceneFace)" />,
    <rect key="graphics" x="44" y="55" width="132" height="96" rx="36" fill="url(#sceneFace)" />,
    <rect key="video" x="42" y="62" width="136" height="90" rx="34" fill="url(#sceneFace)" />,
    <path key="ads" d="M53 56h83l34 34v50c0 16-13 29-29 29H53V56Z" fill="url(#sceneFace)" />,
    <rect key="agent" x="46" y="59" width="128" height="98" rx="42" fill="url(#sceneFace)" />,
  ];
  const details = [
    <path key="research-detail" d="M78 139l22-24 19 18 25-36" stroke={accents[index]} strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" opacity="0.34" />,
    <path key="website-detail" d="M62 78h96M72 59h10M92 59h10M112 59h10" stroke={accents[index]} strokeWidth="7" strokeLinecap="round" opacity="0.34" />,
    <path key="crm-detail" d="M132 82h22M132 108h22M132 134h22" stroke={accents[index]} strokeWidth="9" strokeLinecap="round" opacity="0.34" />,
    <path key="graphics-detail" d="M67 132l30-31 23 23 17-18 28 26" stroke={accents[index]} strokeWidth="9" strokeLinecap="round" strokeLinejoin="round" opacity="0.34" />,
    <path key="video-detail" d="M66 62l-10-26M112 62l-10-26M96 120l40 23V96l-40 24Z" stroke={accents[index]} strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" opacity="0.32" />,
    <path key="ads-detail" d="M145 78c13 12 13 38 0 50M158 65c24 25 24 77 0 101" stroke={accents[index]} strokeWidth="7" strokeLinecap="round" opacity="0.32" />,
    <path key="agent-detail" d="M110 59V34M75 126c18 18 52 18 70 0" stroke={accents[index]} strokeWidth="8" strokeLinecap="round" opacity="0.34" />,
  ];

  return (
    <SceneShell className={className}>
      <g filter="url(#sceneBigShadow)">
        {shapes[index]}
        <path d="M73 67c20-14 53-14 71 0" stroke="#FFFFFF" strokeWidth="13" strokeLinecap="round" opacity="0.85" />
        {details[index]}
        <circle cx="110" cy="109" r="38" fill="#FFFFFF" opacity="0.94" />
        <Icon x={82} y={81} width={56} height={56} strokeWidth={1.8} color={accents[index]} />
        {index === 1 && <path d="M47 78h126" stroke="#D6F5E3" strokeWidth="8" />}
        {index === 4 && <path d="M98 119l38 22V97l-38 22Z" fill="url(#sceneGreen)" opacity="0.18" />}
        {index === 5 && <path d="M73 111h78" stroke="url(#sceneGreen)" strokeWidth="10" strokeLinecap="round" opacity="0.4" />}
      </g>
      <g filter="url(#sceneSmallShadow)">
        <rect x={index % 2 === 0 ? 35 : 141} y={index % 2 === 0 ? 119 : 45} width="42" height="42" rx="16" fill="white" />
        <path
          d={index % 2 === 0 ? 'M47 140h18M56 131v18' : 'M153 66h18M162 57v18'}
          stroke={accents[index]}
          strokeWidth="6"
          strokeLinecap="round"
        />
      </g>
      <circle cx={index % 2 === 0 ? 165 : 43} cy={index % 2 === 0 ? 49 : 63} r="7" fill={accents[index]} opacity="0.75" />
    </SceneShell>
  );
}

const services = [
  {
    title: 'Product Research',
    href: '/product-market-research',
    pricePrefix: 'Starting at',
    priceValue: 'Rs 3,000',
    icon: SearchCheck,
  },
  {
    title: 'Business Website',
    href: '/website',
    pricePrefix: 'Starting at',
    priceValue: 'Rs 4,000',
    icon: Code2,
  },
  {
    title: 'Custom CRM',
    href: '/crm',
    pricePrefix: 'Starting at',
    priceValue: 'Rs 10,000',
    icon: UsersRound,
  },
  {
    title: 'Social Media Graphics',
    href: '/social-media-graphics',
    pricePrefix: 'Starting at',
    priceValue: 'Rs 200',
    icon: ImageIcon,
  },
  {
    title: 'AI Videos',
    href: '/motionmandu',
    pricePrefix: 'Starting at',
    priceValue: 'Rs 2,000',
    icon: Clapperboard,
  },
  {
    title: 'Meta Ads',
    href: '/meta-ads',
    pricePrefix: 'Starting with',
    priceValue: 'Budget plan',
    icon: Megaphone,
  },
  {
    title: 'AI Sales Agent',
    href: '/sales-agent',
    pricePrefix: 'Starting at',
    priceValue: 'Rs 4,000',
    icon: Bot,
  },
];

const proofPoints = [
  'Built for social-first businesses',
  'Simple pricing for Nepal',
  'Plan on WhatsApp',
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
                <span className="truncate">Your Online Setup Partner in Nepal</span>
              </div>
              <h1 className="max-w-xs text-4xl font-black leading-tight tracking-tight text-white sm:max-w-2xl sm:text-5xl md:text-6xl lg:text-7xl">
                <span className="block sm:inline">We build</span>
                <span className="block sm:inline"> the system</span>
                <span className="block">behind your</span>
                <span className="block">online business.</span>
              </h1>
              <p className="mt-6 max-w-xs break-words text-base leading-8 text-stone-200 sm:max-w-2xl md:text-lg">
                From DMs to a complete sales engine — Sajedar sets up your website, CRM, ads, creative, and AI automation.
              </p>
              <div className="home-hero-actions mt-8 flex w-full max-w-xs flex-col gap-3 sm:max-w-none sm:flex-row">
                <a
                  href={`https://wa.me/9779860479751?text=${whatsappMessage}`}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-emerald-500 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-black/20 transition hover:bg-emerald-400 sm:w-auto"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="h-4 w-4" aria-hidden="true" />
                  Start setup
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
            </div>

            <div className="relative hidden min-h-[560px] md:block">
              <div className="absolute -right-10 top-4 h-72 w-72 rounded-full bg-emerald-400/20 blur-3xl" />
              <div className="absolute bottom-6 left-0 h-64 w-64 rounded-full bg-sky-400/10 blur-3xl" />
              <div className="absolute inset-x-0 top-0 rounded-[2rem] border border-white/15 bg-white/[0.08] p-4 shadow-[0_40px_120px_rgba(0,0,0,0.34)] backdrop-blur-2xl">
                <div className="rounded-[1.5rem] bg-[#f8fffb] p-5 text-[#111827] shadow-2xl">
                  <div className="flex items-center justify-between border-b border-stone-200 pb-4">
                    <div>
                      <p className="text-xs font-black uppercase tracking-[0.18em] text-emerald-700">Sajedar setup engine</p>
                      <p className="mt-1 text-2xl font-black tracking-tight">Social sales cockpit</p>
                    </div>
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-500 text-white shadow-lg shadow-emerald-900/20">
                      <Sparkles className="h-6 w-6" aria-hidden="true" />
                    </div>
                  </div>

                  <div className="mt-5 grid gap-4">
                    <div className="rounded-2xl bg-[#111827] p-5 text-white">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-xs font-black uppercase tracking-[0.18em] text-emerald-200">website</p>
                          <p className="mt-1 text-lg font-black">ashwi.sajedar.com</p>
                        </div>
                        <Globe2 className="h-6 w-6 text-emerald-200" aria-hidden="true" />
                      </div>
                      <div className="mt-6 grid grid-cols-3 gap-3">
                        <div className="h-24 rounded-2xl bg-emerald-300/90" />
                        <div className="h-24 rounded-2xl bg-sky-300/90" />
                        <div className="h-24 rounded-2xl bg-amber-300/90" />
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-3">
                      {[
                        ['42', 'DM leads'],
                        ['13', 'orders'],
                        ['8', 'follow-ups'],
                      ].map(([stat, label]) => (
                        <div key={label} className="rounded-2xl border border-stone-200 bg-white p-4">
                          <p className="text-2xl font-black text-[#111827]">{stat}</p>
                          <p className="mt-1 text-xs font-bold text-[#57534e]">{label}</p>
                        </div>
                      ))}
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div className="rounded-2xl border border-emerald-100 bg-emerald-50 p-4">
                        <div className="flex items-center gap-2">
                          <MessageCircle className="h-5 w-5 text-emerald-700" aria-hidden="true" />
                          <p className="text-sm font-black">AI replies</p>
                        </div>
                      </div>
                      <div className="rounded-2xl border border-sky-100 bg-sky-50 p-4">
                        <div className="flex items-center gap-2">
                          <BellRing className="h-5 w-5 text-sky-700" aria-hidden="true" />
                          <p className="text-sm font-black">Order alerts</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="services-pipeline" className="relative overflow-hidden bg-[#f5f5f7] px-5 py-16 text-[#1d1d1f] md:px-10 lg:px-14">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_-12%,rgba(255,255,255,1),rgba(245,245,247,0)_44%)]" />
          <div className="pointer-events-none absolute left-1/2 top-20 h-[620px] w-[900px] -translate-x-1/2 rounded-full bg-white/55 blur-3xl" />
          <div className="pointer-events-none absolute right-[-180px] top-28 h-[560px] w-[560px] rounded-full bg-emerald-200/35 blur-3xl" />
          <div className="pointer-events-none absolute bottom-[-260px] left-[-180px] h-[620px] w-[620px] rounded-full bg-lime-100/85 blur-3xl" />

          <div className="relative mx-auto max-w-[1640px]">
            <div className="mx-auto mb-10 max-w-5xl text-center">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-4 py-2 text-sm font-bold text-emerald-700 shadow-sm backdrop-blur-xl">
                <Sparkles className="h-4 w-4" aria-hidden="true" />
                Services
              </div>

              <h2 className="text-[clamp(3rem,7vw,7rem)] font-black leading-[0.9] tracking-tight text-[#1d1d1f]">
                From idea to sales.
              </h2>

              <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-black/55 md:text-2xl md:leading-9">
                Product research comes first, then website, CRM, creative, ads, and AI sales work as one connected online business setup.
              </p>
            </div>

            <div className="relative mb-8 flex justify-center">
              <Link
                href="/services"
                className="group inline-flex items-center gap-3 rounded-full border border-black/10 bg-white/80 px-6 py-4 text-base font-bold shadow-sm backdrop-blur-xl transition duration-300 hover:-translate-y-0.5 hover:bg-[#1d1d1f] hover:text-white hover:shadow-2xl"
              >
                Explore all services
                <ArrowRight className="h-5 w-5 transition duration-300 group-hover:translate-x-1" aria-hidden="true" />
              </Link>
            </div>

            <div className="relative rounded-[2rem] border border-white/75 bg-white/40 p-3 shadow-[0_40px_120px_rgba(0,0,0,0.075)] backdrop-blur-2xl md:p-6 xl:rounded-[3.5rem]">
              <div className="absolute left-16 right-16 top-1/2 hidden h-px bg-gradient-to-r from-transparent via-emerald-300/60 to-transparent xl:block" />

              <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-7">
                {services.map((service, index) => (
                  <Link
                    key={service.href}
                    href={service.href}
                    className="group relative flex min-h-[320px] flex-col items-center justify-between overflow-hidden rounded-[2rem] border border-white/90 bg-white/82 px-4 py-5 text-center shadow-[0_24px_70px_rgba(0,0,0,0.07)] backdrop-blur-2xl transition duration-500 hover:-translate-y-2 hover:bg-white hover:shadow-[0_38px_110px_rgba(0,0,0,0.16)] sm:min-h-[350px] xl:min-h-[385px] xl:rounded-[2.5rem]"
                  >
                    <div className="absolute inset-x-0 top-0 h-36 bg-gradient-to-b from-white via-white/70 to-transparent" />
                    <div className="absolute -top-20 h-44 w-44 rounded-full bg-emerald-100 opacity-0 blur-2xl transition duration-500 group-hover:opacity-100" />
                    <div className="absolute bottom-0 h-24 w-full bg-gradient-to-t from-emerald-50/60 to-transparent" />

                    <div className="relative flex w-full justify-end">
                      <span className="rounded-full bg-black/[0.035] px-3 py-1 text-xs font-black text-black/28">0{index + 1}</span>
                    </div>

                    <div className="relative -mt-1 flex h-40 w-40 items-center justify-center rounded-[2rem] bg-gradient-to-br from-white via-[#f4fff8] to-[#dff8ea] shadow-[inset_0_2px_8px_rgba(255,255,255,0.95),inset_0_-20px_36px_rgba(4,120,87,0.1),0_26px_60px_rgba(4,120,87,0.14)] ring-1 ring-white transition duration-500 group-hover:scale-[1.05] group-hover:rotate-[-1deg] xl:h-44 xl:w-44">
                      <ServiceScene icon={service.icon} index={index} className="h-40 w-40 transition duration-500 group-hover:scale-[1.03] xl:h-44 xl:w-44" />
                    </div>

                    <div className="relative -mt-1">
                      <h3 className="mx-auto max-w-[210px] text-2xl font-black leading-[1.02] tracking-tight text-[#1d1d1f] xl:text-xl 2xl:text-2xl">
                        {service.title}
                      </h3>

                      <div className="mt-4">
                        <p className="text-sm font-black leading-5 text-black/35">{service.pricePrefix}</p>
                        <p className="mt-1 text-xl font-black leading-6 text-emerald-700">{service.priceValue}</p>
                      </div>
                    </div>

                    <div className="relative mt-4 inline-flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-white text-black/60 shadow-sm transition duration-300 group-hover:bg-[#1d1d1f] group-hover:text-white">
                      <ArrowRight className="h-5 w-5 transition duration-300 group-hover:translate-x-0.5" aria-hidden="true" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-[#07130f] px-5 py-16 text-white md:px-10 lg:px-14">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(16,185,129,0.24),transparent_42%)]" />
          <div className="pointer-events-none absolute -right-24 top-10 h-[520px] w-[520px] rounded-full bg-sky-400/10 blur-3xl" />
          <div className="pointer-events-none absolute -left-24 bottom-0 h-[520px] w-[520px] rounded-full bg-emerald-400/12 blur-3xl" />

          <div className="relative mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-center">
            <div>
              <p className="inline-flex rounded-full border border-emerald-300/25 bg-emerald-400/10 px-4 py-2 text-xs font-black uppercase tracking-[0.22em] text-emerald-200">
                Full setup, one partner
              </p>
              <h2 className="mt-5 max-w-3xl text-4xl font-black leading-none tracking-tight text-white md:text-6xl">
                Sajedar connected to your online business.
              </h2>
            </div>

            <div className="relative">
              <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-400/20 blur-3xl" />
              <div className="relative overflow-hidden rounded-[2rem] border border-white/12 bg-white/[0.08] p-4 shadow-[0_40px_140px_rgba(0,0,0,0.38)] backdrop-blur-2xl md:rounded-[2.6rem] md:p-6">
                <div className="rounded-[1.5rem] border border-white/10 bg-[#f8fffb] p-4 text-[#07130f] shadow-2xl md:rounded-[2rem] md:p-6">
                  <div className="flex items-center justify-between border-b border-black/10 pb-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-500 text-white shadow-lg shadow-emerald-900/20">
                        <Sparkles className="h-6 w-6" aria-hidden="true" />
                      </div>
                      <div>
                        <p className="text-2xl font-black tracking-tight">Sajedar</p>
                        <p className="text-xs font-black uppercase tracking-[0.18em] text-emerald-700">online business OS</p>
                      </div>
                    </div>
                    <div className="hidden rounded-full bg-emerald-50 px-4 py-2 text-xs font-black text-emerald-700 sm:block">live</div>
                  </div>

                  <div className="mt-5 grid gap-4 md:grid-cols-[1.1fr_0.9fr]">
                    <div className="rounded-[1.25rem] bg-[#07130f] p-5 text-white">
                      <div className="flex items-center justify-between">
                        <p className="text-xs font-black uppercase tracking-[0.18em] text-emerald-200">ashwi.sajedar.com</p>
                        <Globe2 className="h-5 w-5 text-emerald-200" aria-hidden="true" />
                      </div>
                      <div className="mt-7 h-4 w-3/4 rounded-full bg-white/20" />
                      <div className="mt-3 h-4 w-1/2 rounded-full bg-white/15" />
                      <div className="mt-7 grid grid-cols-3 gap-3">
                        <div className="h-20 rounded-2xl bg-emerald-300/90" />
                        <div className="h-20 rounded-2xl bg-sky-300/90" />
                        <div className="h-20 rounded-2xl bg-amber-300/90" />
                      </div>
                    </div>

                    <div className="grid gap-4">
                      <div className="rounded-[1.25rem] border border-emerald-100 bg-white p-4 shadow-sm">
                        <div className="flex items-center gap-3">
                          <MessageCircle className="h-5 w-5 text-emerald-600" aria-hidden="true" />
                          <p className="text-sm font-black">Customer chats</p>
                        </div>
                        <div className="mt-4 space-y-2">
                          <div className="h-3 w-full rounded-full bg-stone-200" />
                          <div className="h-3 w-2/3 rounded-full bg-emerald-200" />
                        </div>
                      </div>
                      <div className="rounded-[1.25rem] border border-emerald-100 bg-white p-4 shadow-sm">
                        <div className="flex items-center gap-3">
                          <BellRing className="h-5 w-5 text-sky-600" aria-hidden="true" />
                          <p className="text-sm font-black">Orders connected</p>
                        </div>
                        <div className="mt-4 grid grid-cols-2 gap-3">
                          <div className="rounded-xl bg-emerald-50 p-3">
                            <p className="text-xl font-black">13</p>
                          </div>
                          <div className="rounded-xl bg-sky-50 p-3">
                            <p className="text-xl font-black">CRM</p>
                          </div>
                        </div>
                      </div>
                    </div>
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
