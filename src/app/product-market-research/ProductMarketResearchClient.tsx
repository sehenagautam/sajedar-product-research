'use client';

import React from 'react';
import Link from 'next/link';
import {
  ArrowRight,
  BarChart3,  CheckCircle2,
  ClipboardList,
  LineChart,
  MessageCircle,
  SearchCheck,
  Target,
  UsersRound,
  Zap,
  TrendingUp,
  ShieldCheck,
  FileSearch,
  PieChart,
  ChevronRight,
  Sparkles,
  MousePointer2,
  Layers,
  Search,
} from 'lucide-react';
import Header from '../../components/Header';
import { Footer } from '../../components/sections/Footer';

type DemandGraphVariant = 'plc' | 'fad' | 'fashion' | 'seasonal' | 'sCurve' | 'brandShare';

const whatsappMessage = encodeURIComponent(
  'Hi Sajedar! I am interested in product market research for my business. Please help me choose the right research package.'
);

const features = [
  {
    title: 'Demand Validation',
    copy: 'Our core Market Research process validates if people are already searching, buying, or engaging with your category.',
    icon: SearchCheck,
    color: 'emerald',
  },
  {
    title: 'Competitor Analysis',
    copy: 'Deep dive into existing sellers. We perform a Market Gap Analysis to find visible weaknesses you can exploit.',
    icon: Target,
    color: 'sky',
  },
  {
    title: 'Ad Spy Research',
    copy: 'Analysis of active competitor ads, hooks, and messaging angles to see what is currently converting.',
    icon: Search,
    color: 'amber',
  },
  {
    title: 'Pricing & Positioning',
    copy: 'Detailed Pricing & Positioning Analysis to ensure your Perceived Value justifies your market entry.',
    icon: BarChart3,
    color: 'indigo',
  },
  {
    title: 'Trend Analysis',
    copy: 'Spot rising product categories using Trend Analysis before they become saturated in the Nepali market.',
    icon: LineChart,
    color: 'rose',
  },
  {
    title: 'Opportunity Analysis',
    copy: 'Get a concise Product Opportunity Analysis report with Private Label scaling recommendations.',
    icon: ClipboardList,
    color: 'stone',
  },
];

const packages = [
  {
    name: 'Quick Validation',
    price: 'Rs 3,000',
    desc: 'Best for single Product Validation before buying small batches.',
    includes: ['Demand Validation signal check', 'Basic Competitor Analysis', 'Pricing & Position notes', 'Go / avoid recommendation'],
    featured: false,
  },
  {
    name: 'Discovery Research',
    price: 'Rs 5,000',
    desc: 'Deep dive Winning Product Research for your category.',
    includes: ['Product Opportunity Analysis', 'Trend Analysis scan', 'Market Gap Analysis', 'Top 3 product shortlist'],
    featured: true,
  },
  {
    name: 'Full Market Report',
    price: 'Rs 7,000',
    desc: 'Comprehensive Market Research before major scaling.',
    includes: ['Full Competitor Analysis', 'Ad Spy Research breakdown', 'Customer profile insights', 'Channel recommendations'],
    featured: false,
  },
];

const steps = [
  {
    title: 'Share Idea',
    desc: 'Send product photos, category, and target price on WhatsApp.',
  },
  {
    title: 'We Analyze',
    desc: 'We scan demand, competitors, and Nepali market behavior clues.',
  },
  {
    title: 'You Decide',
    desc: 'Receive a practical report to launch, adjust, or skip the idea.',
  },
];

const lifecycleRows = [
  ['Development', 'No market demand yet', 'New gadget before launch'],
  ['Introduction', 'Slow demand growth', 'First smartwatches'],
  ['Growth', 'Rapid increase in demand', 'Air fryers in early years'],
  ['Maturity', 'Demand stabilizes', 'Smartphones today'],
  ['Decline', 'Demand falls', 'DVD players'],
];

const cycleCards: Array<{
  title: string;
  eyebrow: string;
  copy: string;
  graph: DemandGraphVariant;
  examples: string[];
}> = [
  {
    title: 'Product Life Cycle',
    eyebrow: 'Development to decline',
    copy: 'Most retail products move from launch uncertainty into growth, maturity, and eventual decline. The goal is to avoid buying late when demand has already flattened.',
    graph: 'plc',
    examples: ['New gadgets before launch', 'Air fryers in early growth', 'DVD players in decline'],
  },
  {
    title: 'Fad Products',
    eyebrow: 'Fast spike, fast collapse',
    copy: 'Fads explode quickly and collapse quickly, which makes stock planning and ad timing difficult. They can win, but only with tight testing and fast exits.',
    graph: 'fad',
    examples: ['Fidget spinners', 'Pop-it toys', 'Viral TikTok products'],
  },
  {
    title: 'Fashion Products',
    eyebrow: 'Slower but longer lived',
    copy: 'Fashion-led products usually grow slower, remain relevant for longer, and decline more gradually than fads.',
    graph: 'fashion',
    examples: ['Oversized hoodies', 'Certain sneaker styles', 'Recurring accessory trends'],
  },
  {
    title: 'Seasonal Demand',
    eyebrow: 'Predictable yearly peaks',
    copy: 'Some demand comes back every year. Research should separate true growth from predictable seasonal timing.',
    graph: 'seasonal',
    examples: ['Sunscreen in summer', 'Jackets in winter', 'Dashain and Tihar gifts in Nepal'],
  },
  {
    title: 'Market Penetration Curve',
    eyebrow: 'The adoption S-curve',
    copy: 'Successful categories often move from innovators to early adopters, early majority, late majority, and laggards as the market saturates.',
    graph: 'sCurve',
    examples: ['Smartphones', 'Online shopping', 'Electric vehicles'],
  },
  {
    title: 'Competitive Evolution',
    eyebrow: 'Category grows, winners change',
    copy: 'A category can stay healthy while individual brands swap positions. Research looks at both total demand and who is capturing it.',
    graph: 'brandShare',
    examples: ['2024: Brand A 70%, Brand B 30%', '2025: 50% each', '2026: Brand A 30%, Brand B 70%'],
  },
];

const demandDrivers = [
  {
    title: 'Consumer Factors',
    items: ['Income growth', 'Lifestyle changes', 'Demographics', 'Social influence'],
  },
  {
    title: 'Market Factors',
    items: ['Competitor activity', 'Pricing changes', 'Availability', 'Channel behavior'],
  },
  {
    title: 'External Factors',
    items: ['Economic conditions', 'Government regulation', 'Technology shifts', 'Platform changes'],
  },
];

const dropshippingStages = ['Discovery', 'Viral Growth', 'Saturation', 'Commoditization'];

const graphPaths: Record<DemandGraphVariant, string> = {
  plc: 'M12 142 C34 142 44 142 58 142 C76 140 82 104 101 78 C121 48 148 34 174 34 L226 34 C252 35 264 54 270 82 C276 112 286 142 308 142 C324 142 337 142 348 142',
  fad: 'M12 142 C56 142 66 142 76 142 C93 139 102 62 126 34 C147 60 158 138 178 142 C210 142 268 142 348 142',
  fashion: 'M12 142 C52 142 66 132 84 112 C105 88 124 67 151 59 C181 50 210 62 234 83 C262 108 287 132 348 142',
  seasonal: 'M12 134 C30 134 38 54 60 54 C82 54 90 134 108 134 C126 134 134 54 156 54 C178 54 186 134 204 134 C222 134 230 54 252 54 C274 54 282 134 300 134 C316 134 330 134 348 134',
  sCurve: 'M12 142 C52 142 64 122 85 104 C111 82 124 74 151 72 C184 70 185 32 226 32 L348 32',
  brandShare: 'M12 58 C70 62 124 78 181 92 C236 106 291 122 348 128',
};

const DemandMiniGraph = ({ variant, title }: { variant: DemandGraphVariant; title: string }) => (
  <div className="rounded-3xl bg-white p-5 shadow-sm">
    <div className="mb-4 flex items-center justify-between">
      <span className="text-[10px] font-black uppercase tracking-[0.2em] text-stone-400">Demand over time</span>
      <LineChart className="h-4 w-4 text-emerald-600" />
    </div>
    <svg viewBox="0 0 360 170" className="h-36 w-full overflow-visible" role="img" aria-label={`${title} demand curve`}>
      <line x1="12" y1="150" x2="348" y2="150" stroke="#d6d3d1" strokeWidth="2" />
      <line x1="12" y1="18" x2="12" y2="150" stroke="#d6d3d1" strokeWidth="2" />
      <path d="M12 18 L7 28 M12 18 L17 28" fill="none" stroke="#d6d3d1" strokeWidth="2" strokeLinecap="round" />
      <path d="M348 150 L338 145 M348 150 L338 155" fill="none" stroke="#d6d3d1" strokeWidth="2" strokeLinecap="round" />
      {variant === 'brandShare' && (
        <>
          <path d="M12 124 C70 120 124 104 181 90 C236 76 291 60 348 54" fill="none" stroke="#10b981" strokeWidth="8" strokeLinecap="round" />
          <text x="246" y="50" className="fill-emerald-700 text-[11px] font-black">Brand B</text>
          <text x="246" y="135" className="fill-stone-500 text-[11px] font-black">Brand A</text>
        </>
      )}
      <path
        d={graphPaths[variant]}
        fill="none"
        stroke={variant === 'brandShare' ? '#0f172a' : '#10b981'}
        strokeWidth="8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <text x="22" y="28" className="fill-stone-400 text-[10px] font-bold">Demand</text>
      <text x="313" y="164" className="fill-stone-400 text-[10px] font-bold">Time</text>
    </svg>
  </div>
);

const DataVisualization = ({ className = "" }) => (
  <div className={`relative bg-white rounded-3xl p-6 shadow-2xl overflow-hidden ${className}`}>
    <div className="flex items-center justify-between mb-8">
      <div className="flex gap-1.5">
        <div className="w-2 h-2 rounded-full bg-emerald-500" />
        <div className="w-2 h-2 rounded-full bg-stone-200" />
        <div className="w-2 h-2 rounded-full bg-stone-200" />
      </div>
      <div className="h-2 w-20 bg-stone-100 rounded-full" />
    </div>
    
    <div className="space-y-4">
      {[70, 45, 90, 60].map((w, i) => (
        <div key={i} className="flex items-center gap-4">
          <div className="h-2 w-8 bg-stone-100 rounded-full" />
          <div className="flex-1 h-3 bg-stone-50 rounded-full overflow-hidden">
            <div 
              style={{ width: `${w}%` }}
              className={`h-full ${i === 2 ? 'bg-emerald-500' : 'bg-stone-300'}`}
            />
          </div>
        </div>
      ))}
    </div>
    
    <div className="mt-8 flex justify-between items-end">
       <div className="space-y-2">
         <div className="h-2 w-12 bg-stone-100 rounded-full" />
         <div className="h-6 w-24 bg-stone-900 rounded-lg" />
       </div>
       <div className="h-12 w-12 rounded-xl bg-emerald-50 flex items-center justify-center">
          <TrendingUp className="w-6 h-6 text-emerald-600" />
       </div>
    </div>
    
    <div className="absolute inset-0 bg-gradient-to-tr from-emerald-50/10 to-transparent pointer-events-none" />
  </div>
);

export default function ProductMarketResearchClient() {
  return (
    <div className="min-h-screen w-full bg-[#fafaf9] font-sans text-stone-900 selection:bg-emerald-100 selection:text-emerald-900">
      <Header />

      <main className="w-full pt-14">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-white pb-16 pt-20 md:pb-24 md:pt-32">
          <div className="absolute inset-0 z-0 opacity-[0.03] [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]">
            <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
              <defs>
                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>

          <div className="relative z-10 mx-auto max-w-7xl px-5 lg:px-8">
            <div className="grid gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <div className="max-w-2xl">
                <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-emerald-100 bg-emerald-50/50 px-4 py-1.5 text-sm font-bold text-emerald-700 shadow-sm">
                  <Search className="h-4 w-4" />
                  Winning Product Research & Validation
                </div>
                
                <h1 className="text-5xl font-black leading-[1.05] tracking-tight text-stone-950 md:text-7xl">
                  Stop guessing. <span className="text-emerald-600">Validate demand</span> before you buy.
                </h1>
                
                <p className="mt-8 max-w-xl text-lg leading-relaxed text-stone-600 md:text-xl">
                  Don't waste money on dead stock or generic ads. We study competitors, 
                  pricing, and local demand signals so you launch with confidence.
                </p>

                <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                  <a
                    href={`https://wa.me/9779860479751?text=${whatsappMessage}`}
                    className="inline-flex h-14 items-center justify-center gap-2 rounded-2xl bg-stone-950 px-8 text-base font-bold text-white shadow-xl shadow-stone-900/10 transition hover:-translate-y-1 hover:bg-stone-800"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="h-5 w-5" />
                    Discuss on WhatsApp
                  </a>
                  <Link
                    href="/contact"
                    className="inline-flex h-14 items-center justify-center gap-2 rounded-2xl bg-white px-8 text-base font-bold text-stone-900 shadow-sm transition hover:-translate-y-1 hover:border-emerald-300 hover:text-emerald-700"
                  >
                    Request Sample Report
                  </Link>
                </div>

                <div className="mt-12 flex items-center gap-8">
                   <div className="flex flex-col">
                      <span className="text-2xl font-black text-stone-950">Rs 3,000</span>
                      <span className="text-xs font-bold text-stone-400 uppercase tracking-widest">Starting Price</span>
                   </div>
                   <div className="h-10 w-px bg-stone-200" />
                   <div className="flex flex-col">
                      <span className="text-2xl font-black text-stone-950">24-48 Hours</span>
                      <span className="text-xs font-bold text-stone-400 uppercase tracking-widest">Turnaround</span>
                   </div>
                </div>
              </div>

              <div className="relative">
                <DataVisualization className="w-full max-w-md mx-auto" />
                
                {/* Floating tags */}
                <div className="absolute -top-6 -left-6 bg-white rounded-2xl border border-stone-100 p-4 shadow-xl flex items-center gap-3">
                   <div className="w-8 h-8 rounded-lg bg-blue-500 flex items-center justify-center text-white">
                      <Target className="w-4 h-4" />
                   </div>
                   <div>
                     <p className="text-[10px] font-black text-stone-400 uppercase tracking-widest">Competitor Scan</p>
                     <p className="text-xs font-bold text-stone-900">8 Brands Found</p>
                   </div>
                </div>

                <div className="absolute -bottom-6 -right-6 bg-stone-950 rounded-2xl p-4 shadow-xl flex items-center gap-3 text-white">
                   <div className="w-8 h-8 rounded-lg bg-emerald-500 flex items-center justify-center text-white">
                      <SearchCheck className="w-4 h-4" />
                   </div>
                   <div>
                     <p className="text-[10px] font-black text-white/40 uppercase tracking-widest">Demand Signal</p>
                     <p className="text-xs font-bold text-white">High (Rising)</p>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="bg-stone-50 py-24 md:py-32">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="mb-16 max-w-3xl">
              <h2 className="text-xs font-black uppercase tracking-[0.25em] text-emerald-700">Practical Research</h2>
              <h3 className="mt-4 text-4xl font-black tracking-tight text-stone-950 md:text-5xl">
                Answers you can actually use.
              </h3>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {features.map((feature, idx) => (
                <div
                  key={feature.title}
                  className="group rounded-[2rem] bg-white p-10 transition-all hover:-translate-y-2 hover:border-emerald-200 hover:shadow-xl hover:shadow-emerald-900/5"
                >
                  <div className={`mb-8 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-${feature.color}-50 text-${feature.color}-600 ring-1 ring-${feature.color}-100 transition-colors group-hover:bg-emerald-500 group-hover:text-white`}>
                    <feature.icon className="h-7 w-7" />
                  </div>
                  <h4 className="text-xl font-black text-stone-950">{feature.title}</h4>
                  <p className="mt-4 leading-relaxed text-stone-600">{feature.copy}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Demand Curves Section */}
        <section className="bg-white py-24 md:py-32">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="mb-16 grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
              <div>
                <h2 className="text-xs font-black uppercase tracking-[0.25em] text-emerald-700">Demand Over Time</h2>
                <h3 className="mt-4 text-4xl font-black tracking-tight text-stone-950 md:text-5xl">
                  We check where a product sits in the market cycle.
                </h3>
              </div>
              <p className="text-lg leading-relaxed text-stone-600">
                A product can be promising, risky, seasonal, saturated, or simply too late. Our research maps the demand curve so you know whether to test, stock, scale, or skip.
              </p>
            </div>

            <div className="hidden overflow-hidden rounded-[2rem] bg-stone-50 md:block">
              <div className="grid grid-cols-[1fr_1.35fr_1fr] gap-px bg-stone-200 text-sm">
                <div className="bg-stone-950 px-5 py-4 font-black text-white">Stage</div>
                <div className="bg-stone-950 px-5 py-4 font-black text-white">Demand Characteristics</div>
                <div className="bg-stone-950 px-5 py-4 font-black text-white">Example</div>
                {lifecycleRows.map(([stage, demand, example]) => (
                  <React.Fragment key={stage}>
                    <div className="bg-white px-5 py-4 font-black text-stone-950">{stage}</div>
                    <div className="bg-white px-5 py-4 text-stone-600">{demand}</div>
                    <div className="bg-white px-5 py-4 text-stone-600">{example}</div>
                  </React.Fragment>
                ))}
              </div>
            </div>

            <div className="grid gap-3 md:hidden">
              {lifecycleRows.map(([stage, demand, example]) => (
                <div key={stage} className="rounded-3xl bg-stone-50 p-5">
                  <p className="text-lg font-black text-stone-950">{stage}</p>
                  <p className="mt-3 text-sm leading-relaxed text-stone-600">{demand}</p>
                  <p className="mt-3 rounded-2xl bg-white px-4 py-3 text-sm font-bold text-emerald-700 ring-1 ring-stone-200">{example}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 grid gap-6 lg:grid-cols-2">
              {cycleCards.map((cycle) => (
                <div key={cycle.title} className="rounded-[2rem] bg-[#fafaf9] p-6 md:p-8">
                  <DemandMiniGraph variant={cycle.graph} title={cycle.title} />
                  <div className="mt-6">
                    <p className="text-[10px] font-black uppercase tracking-[0.22em] text-emerald-700">{cycle.eyebrow}</p>
                    <h4 className="mt-2 text-2xl font-black text-stone-950">{cycle.title}</h4>
                    <p className="mt-4 leading-relaxed text-stone-600">{cycle.copy}</p>
                    <div className="mt-6 flex flex-wrap gap-2">
                      {cycle.examples.map((example) => (
                        <span key={example} className="rounded-full bg-white px-3 py-1 text-xs font-bold text-stone-600">
                          {example}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 grid gap-6 lg:grid-cols-[1fr_1fr]">
              <div className="rounded-[2rem] bg-stone-950 p-8 text-white md:p-10">
                <div className="mb-8 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-500">
                  <Zap className="h-6 w-6" />
                </div>
                <h4 className="text-3xl font-black tracking-tight">For ecommerce and dropshipping</h4>
                <p className="mt-5 leading-relaxed text-white/70">
                  Many winning products follow the same pattern: a few sellers discover the item, demand rises rapidly, competitors enter, ad costs increase, margins shrink, and the product becomes commoditized.
                </p>
                <div className="mt-8 grid gap-3 sm:grid-cols-4">
                  {dropshippingStages.map((stage, idx) => (
                    <div key={stage} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                      <p className="text-[10px] font-black uppercase tracking-widest text-emerald-300">0{idx + 1}</p>
                      <p className="mt-2 text-sm font-black text-white">{stage}</p>
                    </div>
                  ))}
                </div>
                <p className="mt-8 text-sm font-bold leading-relaxed text-emerald-200">
                  The sweet spot is early growth: demand is rising, but competition and ad costs are still moderate.
                </p>
              </div>

              <div className="rounded-[2rem] bg-[#fafaf9] p-8 md:p-10">
                <div className="mb-8 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-700 ring-1 ring-emerald-100">
                  <Layers className="h-6 w-6" />
                </div>
                <h4 className="text-3xl font-black tracking-tight text-stone-950">Demand drivers we watch</h4>
                <div className="mt-8 grid gap-5">
                  {demandDrivers.map((group) => (
                    <div key={group.title} className="rounded-2xl bg-white p-5">
                      <h5 className="font-black text-stone-950">{group.title}</h5>
                      <div className="mt-4 grid gap-2 sm:grid-cols-2">
                        {group.items.map((item) => (
                          <div key={item} className="flex items-center gap-2 text-sm font-bold text-stone-600">
                            <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-500" />
                            {item}
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="bg-white py-24 md:py-32 overflow-hidden">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="mb-20 text-center">
              <h2 className="text-xs font-black uppercase tracking-[0.25em] text-emerald-700">Simple Packages</h2>
              <h3 className="mt-4 text-4xl font-black tracking-tight text-stone-950 md:text-5xl">
                Choose the depth of your insight.
              </h3>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              {packages.map((pkg) => (
                <div 
                  key={pkg.name}
                  className={`relative rounded-[2.5rem] p-10 border transition-all hover:-translate-y-2 ${
                    pkg.featured 
                      ? 'bg-emerald-600 border-emerald-500 shadow-2xl shadow-emerald-500/20' 
                      : 'bg-[#fafaf9]'
                  }`}
                >
                  {pkg.featured && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-stone-950 px-4 py-1 text-[10px] font-black uppercase tracking-widest text-white ring-4 ring-emerald-600">
                      Most Popular
                    </div>
                  )}
                  
                  <h4 className={`text-xl font-black ${pkg.featured ? 'text-white' : 'text-stone-900'}`}>{pkg.name}</h4>
                  <p className={`mt-2 text-4xl font-black ${pkg.featured ? 'text-white' : 'text-emerald-600'}`}>{pkg.price}</p>
                  <p className={`mt-6 text-sm leading-relaxed ${pkg.featured ? 'text-emerald-50/80' : 'text-stone-500'}`}>
                    {pkg.desc}
                  </p>
                  
                  <div className="mt-8 space-y-4">
                    {pkg.includes.map((item) => (
                      <div key={item} className="flex items-center gap-3">
                        <CheckCircle2 className={`h-5 w-5 shrink-0 ${pkg.featured ? 'text-white' : 'text-emerald-500'}`} />
                        <span className={`text-xs font-bold ${pkg.featured ? 'text-white' : 'text-stone-700'}`}>{item}</span>
                      </div>
                    ))}
                  </div>
                  
                  <a
                    href={`https://wa.me/9779860479751?text=${encodeURIComponent(`Hi! I'm interested in the ${pkg.name} for Rs ${pkg.price}.`)}`}
                    className={`mt-10 inline-flex w-full h-14 items-center justify-center rounded-2xl text-base font-bold transition-colors ${
                      pkg.featured 
                        ? 'bg-stone-950 text-white hover:bg-stone-800' 
                        : 'bg-white text-stone-900 hover:border-emerald-300'
                    }`}
                  >
                    Select Package
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="bg-stone-50 py-24 md:py-32">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
              <div>
                <h2 className="text-xs font-black uppercase tracking-[0.25em] text-emerald-700">Our Process</h2>
                <h3 className="mt-4 text-4xl font-black tracking-tight text-stone-950 md:text-5xl">
                  Simple research flow for busy owners.
                </h3>
                <p className="mt-8 text-lg leading-relaxed text-stone-600">
                  We don't need a 20-page brief. Just share what you're thinking, and we'll handle the analysis.
                </p>
              </div>
              
              <div className="grid gap-4 sm:grid-cols-3">
                {steps.map((step, idx) => (
                  <div key={step.title} className="bg-white rounded-[2rem] p-8 border border-stone-100 shadow-sm relative overflow-hidden group hover:border-emerald-200 transition-colors">
                    <div className="text-4xl font-black text-stone-50 mb-4 group-hover:text-emerald-50 transition-colors">0{idx + 1}</div>
                    <h4 className="text-lg font-black text-stone-950 relative z-10">{step.title}</h4>
                    <p className="mt-4 text-sm leading-relaxed text-stone-500 relative z-10">{step.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="bg-white pb-24 md:pb-32">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="relative overflow-hidden rounded-[3rem] bg-stone-950 p-12 text-center md:p-20 text-white">
              <div className="absolute -right-10 -top-10 h-64 w-64 rounded-full bg-emerald-500/10 blur-3xl" />
              <div className="absolute -bottom-10 -left-10 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl" />
              
              <div
                className="relative z-10 mx-auto max-w-3xl"
              >
                <div className="mb-8 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1 text-[10px] font-black uppercase tracking-widest text-emerald-400">
                  <Sparkles className="h-3 w-3" />
                  Launch Smarter
                </div>
                <h2 className="text-4xl font-black tracking-tight md:text-6xl">
                  Ready to validate your idea?
                </h2>
                <p className="mt-8 text-lg leading-relaxed opacity-60">
                  Send your product idea and we will help you choose the right research package 
                  based on launch risk and budget. Research first, spend smarter.
                </p>
                <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
                  <a
                    href={`https://wa.me/9779860479751?text=${whatsappMessage}`}
                    className="inline-flex h-14 items-center justify-center gap-2 rounded-2xl bg-emerald-600 px-10 text-base font-bold text-white shadow-xl shadow-emerald-600/20 transition hover:-translate-y-1 hover:bg-emerald-700"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="h-5 w-5" />
                    WhatsApp Sajedar
                  </a>
                  <Link
                    href="/contact"
                    className="inline-flex h-14 items-center justify-center gap-2 rounded-2xl bg-white px-10 text-base font-bold text-stone-900 shadow-xl transition hover:-translate-y-1 hover:bg-stone-50"
                  >
                    Request Custom Quote
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
