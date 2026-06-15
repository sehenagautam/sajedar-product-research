import { Metadata } from 'next';
import Link from 'next/link';
import { 
  ArrowRight, 
  Lightbulb, 
  MessageCircle, 
  Sparkles, 
  Target, 
  Zap, 
  CheckCircle2,
  TrendingUp,
  LineChart,
  ClipboardCheck,
  BrainCircuit,
  MessageSquareText
} from 'lucide-react';
import Header from '../../components/Header';
import { Footer } from '../../components/sections/Footer';

export const metadata: Metadata = {
  title: 'AI Strategy Consulting Nepal - Roadmap for Your Business | Sajedar',
  description: 'Confused about AI? We help Nepali businesses build a clear AI roadmap. Tool selection, workflow automation, and implementation strategy.',
  alternates: { canonical: '/ai-strategy-consulting' },
};

const whatsappMessage = encodeURIComponent(
  'Hi Sajedar! I am interested in AI Strategy Consulting for my business. I want to build a clear AI roadmap.'
);

const strategyPoints = [
  {
    title: 'Tool Selection',
    desc: 'Stop wasting money on random subscriptions. We pick the exact AI tools that fit your business size and goals.',
    icon: ClipboardCheck,
    color: 'emerald',
  },
  {
    title: 'Workflow Automation',
    desc: 'Identify repetitive tasks in your DMs, orders, or content creation that AI can handle for you.',
    icon: Zap,
    color: 'blue',
  },
  {
    title: 'Implementation Roadmap',
    desc: 'A step-by-step plan on what to automate first and how to scale your AI operations as you grow.',
    icon: Target,
    color: 'amber',
  },
];

const whoItHelps = [
  {
    title: 'E-commerce Founders',
    desc: 'Automate product descriptions, customer support, and ad creative workflows.',
  },
  {
    title: 'Local Retailers',
    desc: 'Use AI to track inventory, predict trends, and manage local customer relationships.',
  },
  {
    title: 'Content Creators',
    desc: 'Scale your output with AI-assisted scripting, editing, and distribution strategies.',
  },
  {
    title: 'Agency Owners',
    desc: 'Improve profit margins by automating manual reporting and client communication tasks.',
  },
];

export default function AIStrategyConsultingPage() {
  return (
    <div className="min-h-screen w-full bg-[#fafaf9] font-sans text-stone-900">
      <Header />

      <main className="pt-14">
        {/* Hero Section */}
        <section className="relative bg-white pb-20 pt-20 md:pb-32 md:pt-32 overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-[0.03] [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]">
            <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
              <defs>
                <pattern id="strategy-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#strategy-grid)" />
            </svg>
          </div>

          <div className="relative z-10 mx-auto max-w-7xl px-5 lg:px-8 text-center">
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-emerald-100 bg-emerald-50 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-emerald-700">
              <BrainCircuit className="h-4 w-4" />
              Strategic AI Guidance
            </div>
            <h1 className="mx-auto max-w-4xl text-5xl font-black leading-[1.05] tracking-tight text-stone-950 md:text-8xl">
              Stop guessing. <br />
              <span className="text-emerald-600">Start Automating.</span>
            </h1>
            <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-stone-600 md:text-xl">
              Confused by AI hype? We provide practical, no-BS strategy for Nepali businesses 
              to use AI for real growth. Tool selection, roadmaps, and implementation.
            </p>
            <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href={`https://wa.me/9779860479751?text=${whatsappMessage}`}
                className="inline-flex h-14 items-center justify-center gap-2 rounded-2xl bg-stone-950 px-10 text-base font-bold text-white transition hover:-translate-y-1 hover:bg-stone-800"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="h-5 w-5" />
                Book a Session
              </a>
              <Link
                href="#what-you-get"
                className="inline-flex h-14 items-center justify-center gap-2 rounded-2xl bg-white px-10 text-base font-bold text-stone-900 transition hover:-translate-y-1 hover:border-emerald-300 hover:text-emerald-700"
              >
                See Roadmap
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </section>

        {/* Strategy Points */}
        <section id="what-you-get" className="bg-stone-50 py-24 md:py-32">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="mb-16 max-w-3xl">
              <h2 className="text-xs font-black uppercase tracking-[0.25em] text-emerald-700">The Roadmap</h2>
              <h3 className="mt-4 text-4xl font-black tracking-tight text-stone-950 md:text-5xl">
                Clear direction for your AI journey.
              </h3>
            </div>

            <div className="grid gap-8 sm:grid-cols-3">
              {strategyPoints.map((point) => (
                <div key={point.title} className="group rounded-[2rem] bg-white p-10 transition hover:-translate-y-2 hover:border-emerald-200">
                  <div className={`mb-8 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-${point.color}-50 text-${point.color}-600 ring-1 ring-${point.color}-100 transition-colors group-hover:bg-emerald-500 group-hover:text-white`}>
                    <point.icon className="h-7 w-7" />
                  </div>
                  <h4 className="text-xl font-black text-stone-950">{point.title}</h4>
                  <p className="mt-4 leading-relaxed text-stone-600">{point.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing/Offer Section */}
        <section className="bg-white py-24 md:py-32">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
              <div>
                <h2 className="text-xs font-black uppercase tracking-[0.25em] text-emerald-700">Consulting Session</h2>
                <h3 className="mt-4 text-4xl font-black tracking-tight text-stone-950 md:text-5xl">
                  One session. Total clarity.
                </h3>
                <p className="mt-8 text-lg leading-relaxed text-stone-600">
                  Rs 5,000 per strategy session. We dive deep into your current workflow and 
                  build an AI adoption plan that actually works for the Nepali market.
                </p>
                <div className="mt-10 space-y-4">
                  {[
                    'Audit of current business tools',
                    'Identification of automation gaps',
                    'Custom AI tool recommendations',
                    'Cost vs Benefit analysis',
                    'WhatsApp-based follow-up summary'
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-emerald-500" />
                      <span className="font-bold text-stone-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative">
                <div className="relative z-10 rounded-[3rem] bg-white p-12">
                  <div className="mb-8 flex items-center justify-between">
                    <h4 className="text-2xl font-black text-stone-950">AI Strategy</h4>
                    <span className="rounded-full bg-emerald-100 px-4 py-1 text-xs font-black uppercase tracking-widest text-emerald-700">Available Now</span>
                  </div>
                  <div className="space-y-6">
                    <div className="rounded-2xl bg-stone-50 p-6 border border-stone-100">
                       <p className="text-sm font-bold text-stone-400 uppercase tracking-widest">Pricing</p>
                       <p className="mt-2 text-4xl font-black text-stone-950">Rs 5,000</p>
                       <p className="text-xs text-stone-400 font-bold mt-1">PER 60-MIN SESSION</p>
                    </div>
                    <a
                      href={`https://wa.me/9779860479751?text=${whatsappMessage}`}
                      className="flex h-14 items-center justify-center gap-2 rounded-2xl bg-stone-950 px-8 text-base font-bold text-white transition hover:bg-stone-800"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MessageSquareText className="h-5 w-5" />
                      Book via WhatsApp
                    </a>
                  </div>
                </div>
                <div className="absolute -right-8 -bottom-8 h-32 w-32 rounded-full bg-emerald-500/10 blur-3xl" />
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="bg-stone-50 py-24 md:py-32">
          <div className="mx-auto max-w-7xl px-5 lg:px-8 text-center">
            <h2 className="text-4xl font-black tracking-tight text-stone-950 md:text-6xl">
              Don&apos;t build blindly.
            </h2>
            <p className="mx-auto mt-8 max-w-xl text-lg leading-relaxed text-stone-600">
              A 60-minute session can save you months of trial and error with the wrong tools. 
              Let&apos;s map out your AI strategy today.
            </p>
            <div className="mt-12">
               <a
                href={`https://wa.me/9779860479751?text=${whatsappMessage}`}
                className="inline-flex h-14 items-center justify-center gap-2 rounded-2xl bg-emerald-600 px-10 text-base font-bold text-white transition hover:-translate-y-1 hover:bg-emerald-700"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageSquareText className="h-5 w-5" />
                Message Sajedar
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
