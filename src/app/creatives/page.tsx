import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { 
  ArrowRight, 
  Play, 
  Send, 
  Star, 
  Zap, 
  Film, 
  Clapperboard, 
  Sparkles, 
  Clock, 
  ChevronRight,
  ImageIcon,
  LayoutTemplate,
  MessageSquareText,
  Palette,
  ShoppingBag,
  Tags,
  Globe,
  Smartphone,
  CheckCircle2
} from 'lucide-react';
import Header from '../../components/Header';
import { Footer } from '../../components/sections/Footer';

export const metadata: Metadata = {
  title: 'Sajedar Creatives — Premium AI Videos & Social Graphics',
  description: 'High-converting AI videos and branded social media graphics for businesses in Nepal. Motion design, product reels, and feed-ready creatives.',
  alternates: { canonical: '/creatives' },
};

const whatsappMessage = encodeURIComponent(
  'Hi Sajedar! I am interested in creative services (AI videos/Graphics) for my business. Please share details.'
);

const videoTypes = [
  { label: 'Product Launch', icon: '🎬' },
  { label: 'Brand Film', icon: '🎞' },
  { label: 'Reels & Stories', icon: '📱' },
  { label: 'Ad Creatives', icon: '📢' },
  { label: 'Restaurant Promos', icon: '🍽' },
  { label: 'Fashion Drops', icon: '👗' },
];

const sampleVideos = [
  {
    title: 'Le Bleu Fragrance Spot',
    category: 'Product reel',
    duration: '10 sec',
    src: '/motionmandu/samples/lebleu-ai-sample.mp4',
  },
  {
    title: 'Osha Fashion Promo',
    category: 'Fashion reel',
    duration: '48 sec',
    src: '/motionmandu/samples/osha-ai-sample.mp4',
  },
  {
    title: 'Gecko Product Spot',
    category: 'Character ad',
    duration: '28 sec',
    src: '/motionmandu/samples/gecko-ai-sample.mp4',
  },
  {
    title: 'Boutique Launch Film',
    category: 'Store campaign',
    duration: '43 sec',
    src: '/motionmandu/samples/botique-ai-sample.mp4',
  },
];

const graphicsFeatures = [
  {
    title: 'Social Proof Ads',
    copy: 'Integrate reviews, ratings, and trust badges directly into your offer graphics for immediate credibility.',
    icon: Tags,
    iconClass: 'bg-emerald-50 text-emerald-700 ring-emerald-100',
  },
  {
    title: 'CTR Creatives',
    copy: 'Graphics optimized strictly to drive clicks to your landing page with clear, bold hierarchies.',
    icon: ShoppingBag,
    iconClass: 'bg-blue-50 text-blue-600 ring-blue-100',
  },
  {
    title: 'Scroll Stoppers',
    copy: 'Visually striking designs specifically engineered to make users halt their feed scrolling.',
    icon: Palette,
    iconClass: 'bg-amber-50 text-amber-700 ring-amber-100',
  },
  {
    title: 'Beat Creative Fatigue',
    copy: 'Maintain a fresh visual identity and keep your audience engaged with regular creative updates.',
    icon: LayoutTemplate,
    iconClass: 'bg-rose-50 text-rose-600 ring-rose-100',
  },
];

const graphicsShowcase = [
  {
    title: 'Roma Perfume Creative',
    category: 'Premium Fragrance',
    image: '/social-media-graphics/roma-perfume.jpg',
  },
  {
    title: 'Le Bleu Offer Creative',
    category: 'Fragrance Product',
    image: '/social-media-graphics/le-bleu-02.jpg',
  },
];

export default function CreativesPage() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-[#fafaf9] font-sans text-stone-900">
      <Header logoSrc="/sajedar-creatives.jpg" />

      <main className="pt-14">
        {/* ══════════════════════════════════
            HERO SECTION
        ══════════════════════════════════ */}
        <section className="relative bg-white pb-20 pt-20 md:pb-32 md:pt-32 overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-[0.03] [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]">
            <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
              <defs>
                <pattern id="creatives-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#creatives-grid)" />
            </svg>
          </div>

          <div className="relative z-10 mx-auto max-w-7xl px-5 lg:px-8 text-center">
            <div className="mb-8 flex flex-col items-center gap-6">
              <div className="relative h-20 w-20 overflow-hidden rounded-2xl shadow-xl ring-1 ring-stone-200">
                <Image 
                  src="/sajedar-creatives.jpg" 
                  alt="Sajedar Creatives Logo" 
                  fill 
                  className="object-cover"
                />
              </div>
              <div className="inline-flex items-center gap-2 rounded-full border border-stone-200 bg-stone-50 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-stone-500 shadow-sm">
                <Sparkles className="h-4 w-4 text-amber-500" />
                Sajedar Creative Studio
              </div>
            </div>
            <h1 className="mx-auto max-w-4xl text-5xl font-black leading-[1.05] tracking-tight text-stone-950 md:text-8xl">
              High-converting <span className="text-emerald-600">content</span> for your business.
            </h1>
            <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-stone-600 md:text-xl">
              From cinematic AI videos that tell your story to branded graphics that stop the scroll. 
              Built for engagement, optimized for sales in the Nepali market.
            </p>
            <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href={`https://wa.me/9779860479751?text=${whatsappMessage}`}
                className="inline-flex h-14 items-center justify-center gap-2 rounded-2xl bg-stone-950 px-10 text-base font-bold text-white shadow-xl shadow-stone-900/10 transition hover:-translate-y-1 hover:bg-stone-800"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageSquareText className="h-5 w-5" />
                Order on WhatsApp
              </a>
              <Link
                href="#ai-videos"
                className="inline-flex h-14 items-center justify-center gap-2 rounded-2xl border border-stone-200 bg-white px-10 text-base font-bold text-stone-900 shadow-sm transition hover:-translate-y-1 hover:border-emerald-300 hover:text-emerald-700"
              >
                View Services
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════
            AI VIDEOS (formerly Motionmandu)
        ══════════════════════════════════ */}
        <section id="ai-videos" className="bg-[#0a0a0a] py-24 md:py-32 text-white">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="mb-16 grid gap-8 lg:grid-cols-2 lg:items-end">
              <div>
                <p className="mb-3 text-xs font-black uppercase tracking-[0.25em] text-amber-500/60">AI Video Production</p>
                <h2 className="text-4xl font-black tracking-tight text-white md:text-6xl">
                  Your business has a story. <br />
                  <span className="text-amber-400">We turn it into video.</span>
                </h2>
              </div>
              <p className="max-w-xl text-lg text-white/40">
                Cinematic AI-powered videos for product launches, brand stories, reels, and ad campaigns.
                Starting at <strong className="text-amber-400">Rs 2,000</strong> per video.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {sampleVideos.map((video, index) => (
                <article key={video.title} className="group overflow-hidden rounded-3xl border border-white/10 bg-white/5 transition-all hover:border-amber-400/30">
                  <div className="relative aspect-[9/16] overflow-hidden bg-black">
                    <video
                      className="h-full w-full object-cover"
                      src={video.src}
                      autoPlay muted loop playsInline preload="metadata"
                    />
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                      <p className="text-[10px] font-bold uppercase tracking-widest text-amber-400/80">{video.category}</p>
                      <h3 className="mt-1 text-lg font-black text-white">{video.title}</h3>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
              {videoTypes.map(({ label, icon }) => (
                <div key={label} className="flex flex-col items-center gap-3 rounded-2xl border border-white/5 bg-white/[0.03] p-6 text-center transition hover:border-amber-400/20">
                  <span className="text-3xl">{icon}</span>
                  <p className="text-xs font-bold text-white/50">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════
            STATIC GRAPHICS
        ══════════════════════════════════ */}
        <section id="graphics" className="bg-stone-50 py-24 md:py-32">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="mb-16 max-w-3xl">
              <p className="mb-3 text-xs font-black uppercase tracking-[0.25em] text-emerald-700">Social Media Graphics</p>
              <h2 className="text-4xl font-black tracking-tight text-stone-950 md:text-6xl">
                Branded visuals that <br />
                <span className="text-emerald-600">make the feed feel premium.</span>
              </h2>
              <p className="mt-6 text-lg text-stone-600">
                Rs 200 per graphic. Branded creatives for offers, launches, and product posts. 
                Clean layout, sharp hierarchy, and ready-to-post files.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {graphicsFeatures.map((feature, idx) => (
                <div key={feature.title} className="group rounded-[2rem] border border-stone-200 bg-white p-8 transition hover:-translate-y-2 hover:border-emerald-200 hover:shadow-xl hover:shadow-emerald-900/5">
                  <div className={`mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl ring-1 ${feature.iconClass}`}>
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <h4 className="text-lg font-black text-stone-950">{feature.title}</h4>
                  <p className="mt-3 text-sm leading-relaxed text-stone-500">{feature.copy}</p>
                </div>
              ))}
            </div>

            <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {graphicsShowcase.map((item) => (
                <div key={item.title} className="group relative aspect-square overflow-hidden rounded-[2.5rem] border border-stone-200 bg-white shadow-sm transition hover:shadow-2xl">
                  <Image src={item.image} alt={item.title} fill className="object-cover transition duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100 flex items-end p-8">
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-emerald-400">{item.category}</p>
                      <h4 className="text-xl font-black text-white">{item.title}</h4>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════
            SHARED PROCESS & CTA
        ══════════════════════════════════ */}
        <section className="bg-white py-24 md:py-32">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="relative overflow-hidden rounded-[3rem] border border-stone-200 bg-stone-950 p-12 text-center md:p-20 text-white">
              <div className="absolute -right-10 -top-10 h-64 w-64 rounded-full bg-emerald-500/10 blur-3xl" />
              <div className="absolute -bottom-10 -left-10 h-64 w-64 rounded-full bg-amber-500/10 blur-3xl" />
              
              <div className="relative z-10 mx-auto max-w-3xl">
                <div className="mb-8 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1 text-[10px] font-black uppercase tracking-widest text-amber-400">
                  <Sparkles className="h-3 w-3" />
                  Upgrade Your Content
                </div>
                <h2 className="text-4xl font-black tracking-tight md:text-6xl">
                  Ready to elevate your brand?
                </h2>
                <p className="mt-8 text-lg leading-relaxed opacity-60">
                  Send your product photos and brief on WhatsApp. We will turn them into 
                  professional creatives that your audience cannot scroll past. 
                  Graphics from Rs 200, Videos from Rs 2,000.
                </p>
                <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
                  <a
                    href={`https://wa.me/9779860479751?text=${whatsappMessage}`}
                    className="inline-flex h-14 items-center justify-center gap-2 rounded-2xl bg-emerald-600 px-10 text-base font-bold text-white shadow-xl shadow-emerald-600/20 transition hover:-translate-y-1 hover:bg-emerald-700"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageSquareText className="h-5 w-5" />
                    WhatsApp Sajedar
                  </a>
                  <Link
                    href="/contact"
                    className="inline-flex h-14 items-center justify-center gap-2 rounded-2xl bg-white px-10 text-base font-bold text-stone-900 shadow-xl transition hover:-translate-y-1 hover:bg-stone-50"
                  >
                    Request Bulk Quote
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
