import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Play, Send, Star, Zap, Film, Clapperboard, Sparkles, Clock, ChevronRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Motionmandu AI — Premium Business Videos in Nepal',
  description: 'Motionmandu creates cinematic AI videos for businesses in Nepal. Product launches, brand films, reels, and ad creatives. Starting at Rs 2,000.',
  alternates: { canonical: '/motionmandu' },
  openGraph: {
    title: 'Motionmandu AI — Premium Business Videos',
    description: 'Your business has a story. We turn it into video.',
    url: 'https://sajedar.com/motionmandu',
    siteName: 'Sajedar',
    type: 'website',
  },
};

const whatsappMessage = encodeURIComponent(
  'Hi! I am interested in Motionmandu AI videos for my business. Please share details.'
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

const process = [
  {
    step: '01',
    title: 'Send your brief',
    body: 'Share your product, brand story, target audience, and any references. WhatsApp works fine.',
    icon: Send,
  },
  {
    step: '02',
    title: 'We craft your video',
    body: 'Our AI studio transforms your brief into a cinematic video with strong Hooks and B-Roll details included.',
    icon: Film,
  },
  {
    step: '03',
    title: 'Publish and convert',
    body: 'Deploy across Meta & TikTok with clear CTAs. Built to make your audience stop and engage from the first frame.',
    icon: Zap,
  },
];

const features = [
  { title: 'Motion Design', body: 'Fluid animations and striking hooks that command immediate attention.' },
  { title: 'UGC Style Options', body: 'Research-backed authentic narratives that connect deeply with your audience.' },
  { title: 'Cinematic B-Roll', body: 'Production-ready detail shots showing your product from every angle.' },
  { title: 'CTA-Ready Format', body: 'Optimised for Meta, TikTok, YouTube with clear calls to action in every ratio.' },
];

export default function MotionmanduPage() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-[#0a0a0a] font-sans text-white">

      {/* ── CUSTOM HEADER ── */}
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 lg:px-10"
        style={{ background: 'linear-gradient(to bottom, rgba(10,10,10,0.95) 0%, rgba(10,10,10,0) 100%)' }}
      >
        <Link href="/" className="flex items-center gap-2 group">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-amber-400 to-orange-500 shadow-lg shadow-amber-500/30">
            <Clapperboard className="h-4 w-4 text-white" />
          </div>
          <div>
            <span className="text-[13px] font-black tracking-widest text-amber-400 uppercase">Motionmandu</span>
            <span className="ml-1.5 text-[10px] font-semibold tracking-widest text-white/30 uppercase">AI</span>
          </div>
        </Link>
        <a
          href={`https://wa.me/9779860479751?text=${whatsappMessage}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-400/10 px-5 py-2 text-[13px] font-semibold text-amber-300 backdrop-blur transition-all hover:bg-amber-400 hover:text-black hover:border-amber-400"
        >
          Order a video
          <ChevronRight className="h-3.5 w-3.5" />
        </a>
      </header>

      <main>
        {/* ══════════════════════════════════
            HERO — full-bleed cinematic
        ══════════════════════════════════ */}
        <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
          {/* Layered background */}
          <div className="absolute inset-0">
            {/* Dark base */}
            <div className="absolute inset-0 bg-[#0a0a0a]" />
            {/* Gold radial glow top-center */}
            <div className="absolute inset-x-0 top-0 h-[70vh] bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(217,119,6,0.18),transparent_70%)]" />
            {/* Warm bottom glow */}
            <div className="absolute bottom-0 left-1/4 h-[40vh] w-[50vw] rounded-full bg-amber-600/[0.06] blur-[120px]" />
            {/* Film grain texture */}
            <div
              className="absolute inset-0 opacity-[0.04] mix-blend-overlay"
              style={{
                backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
              }}
            />
            {/* Horizontal film strip lines */}
            <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-px bg-gradient-to-r from-transparent via-amber-500/20 to-transparent" />
          </div>

          {/* Content */}
          <div className="relative mx-auto max-w-5xl px-6 text-center lg:px-8">
            {/* Eyebrow */}
            <div className="mb-8 inline-flex items-center gap-2.5 rounded-full border border-amber-400/20 bg-amber-400/[0.06] px-5 py-2 text-[12px] font-semibold uppercase tracking-[0.2em] text-amber-300 backdrop-blur-sm">
              <div className="h-1.5 w-1.5 rounded-full bg-amber-400 animate-pulse" />
              AI Video Studio for Nepal Businesses
            </div>

            {/* Main headline */}
            <h1 className="text-[clamp(2.8rem,8vw,6.5rem)] font-black leading-[0.95] tracking-[-0.04em]">
              <span className="block text-white">Your business</span>
              <span className="block text-white">has a story.</span>
              <span
                className="block mt-2"
                style={{
                  background: 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 40%, #d97706 70%, #92400e 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                We turn it into video.
              </span>
            </h1>

            {/* Sub */}
            <p className="mx-auto mt-8 max-w-xl text-[16px] leading-relaxed text-white/50">
              Cinematic AI-powered videos for product launches, brand stories, reels, and ad campaigns.
              Starting at <strong className="text-amber-400">Rs 2,000</strong> per video.
            </p>

            {/* CTAs */}
            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <a
                href={`https://wa.me/9779860479751?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-amber-400 to-orange-500 px-8 py-3.5 text-[14px] font-black text-black shadow-2xl shadow-amber-500/30 transition-all hover:-translate-y-0.5 hover:shadow-amber-500/50"
              >
                <Send className="h-4 w-4" />
                Order on WhatsApp
              </a>
              <Link
                href="#sample-videos"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-7 py-3.5 text-[14px] font-semibold text-white/70 backdrop-blur transition-all hover:border-white/20 hover:text-white"
              >
                <Play className="h-3.5 w-3.5 fill-current" />
                Watch samples
              </Link>
            </div>

            {/* Tags */}
            <div className="mt-12 flex flex-wrap items-center justify-center gap-2">
              {['AI Videos', 'Reels', 'Ads', 'Brand Videos', 'Product Launches'].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/[0.08] bg-white/[0.03] px-4 py-1.5 text-[12px] font-medium text-white/40"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Bottom scroll cue */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/20">
            <div className="h-8 w-px bg-gradient-to-b from-transparent to-white/20" />
            <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
          </div>
        </section>

        {/* ══════════════════════════════════
            SAMPLE AI VIDEOS
        ══════════════════════════════════ */}
        <section id="sample-videos" className="relative overflow-hidden bg-[#080808] px-6 py-24 lg:px-8">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-amber-500/[0.06] to-transparent" />
            <div className="absolute left-1/2 top-1/2 h-[34rem] w-[34rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber-500/[0.05] blur-[120px]" />
          </div>
          <div className="relative mx-auto max-w-6xl">
            <div className="mb-12 grid gap-6 md:grid-cols-[0.85fr_1.15fr] md:items-end">
              <div>
                <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.25em] text-amber-500/60">
                  Sample AI videos
                </p>
                <h2 className="text-[clamp(2rem,4vw,3rem)] font-black leading-tight tracking-tight text-white">
                  Four compressed samples from the Motionmandu reel.
                </h2>
              </div>
              <p className="max-w-xl text-[14px] leading-relaxed text-white/40 md:justify-self-end">
                Lightweight vertical MP4 previews, compressed for fast loading while keeping the cinematic
                motion, product focus, and social-ready framing intact.
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {sampleVideos.map((video, index) => (
                <article
                  key={video.title}
                  className="group overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.03] shadow-2xl shadow-black/30 transition-all duration-300 hover:-translate-y-1 hover:border-amber-400/30"
                >
                  <div className="relative aspect-[9/16] overflow-hidden bg-black">
                    <video
                      className="h-full w-full object-cover"
                      src={video.src}
                      title={video.title}
                      aria-label={`${video.title} sample video`}
                      autoPlay
                      muted
                      loop
                      playsInline
                      controls
                      preload="metadata"
                    />
                    <div className="pointer-events-none absolute inset-x-0 top-0 flex items-center justify-between p-4">
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-black/40 px-3 py-1 text-[10px] font-black uppercase tracking-[0.18em] text-white/70 backdrop-blur">
                        <Star className="h-3 w-3 fill-amber-400 text-amber-400" />
                        Sample {index + 1}
                      </span>
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-black/40 px-3 py-1 text-[10px] font-bold text-white/70 backdrop-blur">
                        <Clock className="h-3 w-3 text-amber-300" />
                        {video.duration}
                      </span>
                    </div>
                  </div>
                  <div className="p-5">
                    <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-amber-400/60">
                      {video.category}
                    </p>
                    <h3 className="mt-2 text-[17px] font-black text-white">{video.title}</h3>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════
            PRICE SPOTLIGHT
        ══════════════════════════════════ */}
        <section className="relative overflow-hidden border-y border-white/[0.05] bg-[#0d0d0d] px-6 py-16 text-center lg:px-8">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_80%_at_50%_50%,rgba(217,119,6,0.07),transparent_70%)]" />
          <div className="relative mx-auto max-w-4xl">
            <div className="grid gap-8 md:grid-cols-3">
              {[
                { value: 'Rs 2,000', label: 'Per video', note: 'Minimum order' },
                { value: '2–4 days', label: 'Turnaround', note: 'Brief to delivery' },
                { value: '100%', label: 'Business focused', note: 'Made for conversions' },
              ].map((stat) => (
                <div key={stat.label} className="flex flex-col items-center">
                  <p
                    className="text-[clamp(2rem,5vw,3rem)] font-black tracking-tight"
                    style={{
                      background: 'linear-gradient(135deg, #fbbf24, #d97706)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}
                  >
                    {stat.value}
                  </p>
                  <p className="mt-1 text-[14px] font-semibold text-white/70">{stat.label}</p>
                  <p className="text-[12px] text-white/30">{stat.note}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════
            WHAT WE CREATE
        ══════════════════════════════════ */}
        <section className="relative overflow-hidden bg-[#0a0a0a] px-6 py-24 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="mb-14 max-w-lg">
              <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.25em] text-amber-500/60">
                Video types
              </p>
              <h2 className="text-[clamp(2rem,4vw,3rem)] font-black leading-tight tracking-tight text-white">
                Every format your business needs.
              </h2>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
              {videoTypes.map(({ label, icon }) => (
                <div
                  key={label}
                  className="group flex flex-col items-center gap-3 rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 text-center transition-all duration-300 hover:border-amber-400/20 hover:bg-amber-400/[0.04]"
                >
                  <span className="text-3xl leading-none">{icon}</span>
                  <p className="text-[13px] font-semibold text-white/60 transition-colors group-hover:text-white/90">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════
            HOW IT WORKS
        ══════════════════════════════════ */}
        <section id="how-it-works" className="relative overflow-hidden border-t border-white/[0.04] bg-[#0d0d0d] px-6 py-24 lg:px-8">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_100%,rgba(217,119,6,0.05),transparent_70%)]" />
          <div className="relative mx-auto max-w-6xl">
            <div className="mb-14 text-center">
              <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.25em] text-amber-500/60">
                Simple process
              </p>
              <h2 className="text-[clamp(2rem,4vw,3rem)] font-black tracking-tight text-white">
                Brief to ready-to-post in 3 steps.
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {process.map(({ step, title, body, icon: Icon }) => (
                <div
                  key={step}
                  className="relative overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.02] p-8 transition-all duration-300 hover:border-amber-400/20"
                >
                  {/* Step number watermark */}
                  <div
                    className="absolute -right-4 -top-4 text-[80px] font-black leading-none select-none"
                    style={{ color: 'rgba(217,119,6,0.05)' }}
                  >
                    {step}
                  </div>
                  <div className="relative">
                    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-amber-400/10 border border-amber-400/20">
                      <Icon className="h-5 w-5 text-amber-400" />
                    </div>
                    <h3 className="text-[18px] font-black text-white">{title}</h3>
                    <p className="mt-3 text-[14px] leading-relaxed text-white/40">{body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════
            FEATURES GRID
        ══════════════════════════════════ */}
        <section className="relative overflow-hidden bg-[#0a0a0a] px-6 py-24 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="mb-14 max-w-lg">
              <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.25em] text-amber-500/60">
                Why Motionmandu
              </p>
              <h2 className="text-[clamp(2rem,4vw,3rem)] font-black tracking-tight text-white">
                Studio quality without studio overhead.
              </h2>
            </div>

            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {features.map(({ title, body }) => (
                <div
                  key={title}
                  className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-7 transition-all duration-300 hover:border-amber-400/20 hover:bg-amber-400/[0.03]"
                >
                  <div className="mb-2 h-1 w-8 rounded-full bg-gradient-to-r from-amber-400 to-orange-500" />
                  <h3 className="mt-4 text-[16px] font-black text-white">{title}</h3>
                  <p className="mt-2 text-[13px] leading-relaxed text-white/40">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════
            CTA — full-bleed cinematic
        ══════════════════════════════════ */}
        <section className="relative overflow-hidden border-t border-white/[0.04] bg-[#0d0d0d] px-6 py-32 text-center lg:px-8">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute inset-x-0 top-0 h-full bg-[radial-gradient(ellipse_80%_60%_at_50%_50%,rgba(217,119,6,0.1),transparent_70%)]" />
          </div>
          <div className="relative mx-auto max-w-3xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-amber-400/20 bg-amber-400/[0.06] px-5 py-2 text-[12px] font-semibold uppercase tracking-[0.15em] text-amber-300">
              <Sparkles className="h-3.5 w-3.5" />
              Motionmandu AI
            </div>
            <h2 className="text-[clamp(2.5rem,6vw,5rem)] font-black leading-[0.95] tracking-[-0.03em] text-white">
              Ready to shoot<br />
              <span
                style={{
                  background: 'linear-gradient(135deg, #fbbf24, #d97706)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                your next video?
              </span>
            </h2>
            <p className="mx-auto mt-6 max-w-md text-[15px] leading-relaxed text-white/40">
              Rs 2,000 per video. Send your brief on WhatsApp and we will turn it into something your audience cannot scroll past.
            </p>
            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <a
                href={`https://wa.me/9779860479751?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-amber-400 to-orange-500 px-9 py-4 text-[15px] font-black text-black shadow-2xl shadow-amber-500/25 transition-all hover:-translate-y-0.5 hover:shadow-amber-500/40"
              >
                <Send className="h-4 w-4" />
                Start on WhatsApp
              </a>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 text-[14px] font-semibold text-white/30 transition-colors hover:text-white/60"
              >
                See all Sajedar services
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>

            {/* Social proof line */}
            <div className="mt-14 flex items-center justify-center gap-3 text-white/20">
              <div className="flex -space-x-2">
                {['🏪', '🍽', '👗'].map((e, i) => (
                  <div key={i} className="flex h-7 w-7 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-sm">
                    {e}
                  </div>
                ))}
              </div>
              <p className="text-[12px]">Used by Nepal businesses in retail, F&amp;B, fashion, and more</p>
            </div>
          </div>
        </section>
      </main>

      {/* ── FOOTER ── */}
      <footer className="border-t border-white/[0.04] bg-[#0a0a0a] px-6 py-10 text-center lg:px-8">
        <div className="flex flex-col items-center gap-3">
          <Link href="/" className="text-[13px] font-semibold text-amber-400/60 transition-colors hover:text-amber-400">
            Part of Sajedar
          </Link>
          <p className="text-[12px] text-white/20">
            © {new Date().getFullYear()} Motionmandu by Sajedar. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
