import Link from 'next/link';
import { TrackedLink } from '../analytics/TrackedLink';

interface BofuLandingProps {
  canonicalPath: string;
  h1: string;
  subheading: string;
  bullets: string[];
  primaryCtaText: string;
  primaryCtaHref: string;
  secondaryCtaText: string;
  secondaryCtaHref: string;
}

export function BofuLanding({
  canonicalPath,
  h1,
  subheading,
  bullets,
  primaryCtaText,
  primaryCtaHref,
  secondaryCtaText,
  secondaryCtaHref,
}: BofuLandingProps) {
  const serviceJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: h1,
    name: h1,
    description: subheading,
    provider: {
      '@type': 'Organization',
      name: 'Sajedar',
      url: 'https://sajedar.com',
    },
    url: `https://sajedar.com${canonicalPath}`,
  } as const;

  return (
    <main className="min-h-screen bg-[#18181b] text-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      <div className="max-w-5xl mx-auto px-4 py-16">
        <nav className="text-sm text-gray-400 mb-8">
          <Link href="/" className="hover:text-white">Home</Link>
          <span className="px-2">/</span>
          <span className="text-white">{h1}</span>
        </nav>

        <h1 className="text-4xl md:text-5xl font-serif font-bold leading-tight">{h1}</h1>
        <p className="mt-4 text-lg text-gray-300 max-w-3xl">{subheading}</p>

        <ul className="mt-8 space-y-3 text-gray-200">
          {bullets.map((item) => (
            <li key={item}>• {item}</li>
          ))}
        </ul>

        <div className="mt-10 flex flex-wrap gap-3">
          <TrackedLink
            href={primaryCtaHref}
            className="px-6 py-3 bg-emerald-500 hover:bg-emerald-600 rounded-lg font-semibold transition"
            eventName="demo_booked"
            params={{ source_page: canonicalPath }}
          >
            {primaryCtaText}
          </TrackedLink>
          <TrackedLink
            href={secondaryCtaHref}
            className="px-6 py-3 bg-white/10 hover:bg-white/20 rounded-lg font-semibold transition"
            params={{ source_page: canonicalPath }}
          >
            {secondaryCtaText}
          </TrackedLink>
        </div>

        <section className="mt-12 rounded-2xl border border-white/10 bg-white/5 p-6">
          <h2 className="text-2xl font-bold">Why buyers choose this model</h2>
          <div className="grid md:grid-cols-3 gap-4 mt-4 text-sm text-gray-300">
            <div className="rounded-lg border border-white/10 p-4">Commission-based option aligns pricing with sales outcomes.</div>
            <div className="rounded-lg border border-white/10 p-4">Messenger-first flows qualify leads before your team spends time.</div>
            <div className="rounded-lg border border-white/10 p-4">Fast setup with clear KPIs and proof-driven optimization.</div>
          </div>
        </section>
      </div>
    </main>
  );
}
