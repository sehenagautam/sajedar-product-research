import Link from 'next/link';
import { LinkCluster } from './LinkCluster';
import { SeoPageLink } from '../../content/seo/agencyPages';

interface FaqItem {
  question: string;
  answer: string;
}

interface OutcomeItem {
  metric: string;
  description: string;
}

interface AgencySeoPageProps {
  currentPath: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  subtitleNode?: React.ReactNode;
  bullets: string[];
  bulletNodes?: React.ReactNode[];
  expectedOutcomes?: OutcomeItem[]; // Optional prop for high-intent ROI metrics
  primaryCtaLabel: string;
  primaryCtaHref: string;
  secondaryCtaLabel: string;
  secondaryCtaHref: string;
  clusters: Array<{
    title: string;
    links: SeoPageLink[];
  }>;
  clusterLinkLimit?: number;
  faqItems?: FaqItem[];
  integrations?: string[];
  integrationsNote?: string;
  children?: React.ReactNode;
}

export function AgencySeoPage({
  currentPath,
  eyebrow,
  title,
  subtitle,
  subtitleNode,
  bullets,
  bulletNodes,
  expectedOutcomes,
  primaryCtaLabel,
  primaryCtaHref,
  secondaryCtaLabel,
  secondaryCtaHref,
  clusters,
  clusterLinkLimit,
  faqItems,
  integrations,
  integrationsNote,
  children,
}: AgencySeoPageProps) {
  const canonicalUrl = `https://sajedar.com${currentPath}`;

  const resolvedFaqItems: FaqItem[] = faqItems ?? [
    {
      question: `What does ${title} include?`,
      answer: bullets.join(' '),
    },
    {
      question: 'How long does implementation usually take?',
      answer: 'Most teams launch core automation flows in days, then run optimization sprints based on conversion and support outcomes.',
    },
    {
      question: 'How do we start?',
      answer: 'Start with a scoped strategy call so we can map your highest-impact journeys and define implementation priorities.',
    },
  ];

  const serviceJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: title,
    name: title,
    description: subtitle,
    provider: {
      '@type': 'Organization',
      name: 'Sajedar',
      url: 'https://sajedar.com',
    },
    areaServed: 'Global',
    url: canonicalUrl,
  } as const;

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: resolvedFaqItems.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  } as const;

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://sajedar.com/' },
      { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://sajedar.com/chatbot-automation-agency' },
      { '@type': 'ListItem', position: 3, name: title, item: canonicalUrl },
    ],
  } as const;

  const integrationItems = integrations && integrations.length > 0
    ? integrations
    : ['Meta (Priority)', 'Shopify', 'Salesforce', 'Zendesk', 'HubSpot'];

  const integrationDisclaimer = integrationsNote
    ?? '* Integrations beyond the Meta ecosystem (e.g., Telegram, custom CRMs) require a customized higher-tier quotation.';

  return (
    <main className="min-h-screen bg-[#18181b] text-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      <div className="max-w-5xl mx-auto px-4 py-12">
        <nav className="text-sm text-gray-400 mb-8">
          <Link href="/" className="hover:text-white">Home</Link>
          <span className="px-2">/</span>
          <Link href="/chatbot-automation-agency" className="hover:text-white">Services</Link>
          <span className="px-2">/</span>
          <span className="text-white">{title}</span>
        </nav>

        <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/20 text-emerald-300">
          {eyebrow}
        </span>
        <h1 className="mt-4 text-4xl md:text-5xl font-serif font-bold leading-tight">{title}</h1>
        <p className="mt-4 text-lg text-gray-300 max-w-3xl">
          {subtitleNode || subtitle}
        </p>

        {/* Expected Outcomes (High-Intent ROI Focus) */}
        {expectedOutcomes && expectedOutcomes.length > 0 && (
          <div className="mt-10 mb-6 grid grid-cols-1 md:grid-cols-3 gap-4">
            {expectedOutcomes.map((outcome, idx) => (
              <div key={idx} className="bg-emerald-900/10 border border-emerald-500/20 p-5 rounded-xl">
                <div className="text-3xl font-bold text-emerald-400 mb-1">{outcome.metric}</div>
                <div className="text-sm text-gray-300">{outcome.description}</div>
              </div>
            ))}
          </div>
        )}

        <ul className="mt-8 space-y-3">
          {bullets.map((bullet, index) => (
            <li key={index} className="text-gray-200 flex items-start">
              <span className="text-emerald-500 mr-3 mt-1">✓</span>
              <span>{bulletNodes ? bulletNodes[index] : bullet}</span>
            </li>
          ))}
        </ul>

        {children}

        {/* Trust/Integration Badges (Generic for now, adds instant authority) */}
        <div className="mt-10 pt-6 border-t border-white/10">
          <p className="text-xs text-gray-400 uppercase tracking-wider mb-4 font-semibold">Standard Integrations</p>
          <div className="flex flex-wrap gap-x-8 gap-y-4 items-center">
            {integrationItems.map((item, index) => (
              <span
                key={item}
                className={`font-semibold text-lg transition-all cursor-default ${index === 0 ? 'text-emerald-400' : 'opacity-70 grayscale hover:grayscale-0'}`}
              >
                {item}
              </span>
            ))}
          </div>
          <p className="text-xs text-gray-500 mt-2 italic">{integrationDisclaimer}</p>
        </div>

        <div className="mt-10">
          <div className="flex flex-wrap gap-3">
            <Link href={primaryCtaHref} className="px-8 py-4 bg-emerald-500 hover:bg-emerald-600 rounded-lg text-lg font-bold transition shadow-lg shadow-emerald-500/20">
              {primaryCtaLabel}
            </Link>
            <Link href={secondaryCtaHref} className="px-8 py-4 bg-white/10 hover:bg-white/20 rounded-lg text-lg font-bold transition">
              {secondaryCtaLabel}
            </Link>
          </div>
          {/* Friction-reducing microcopy */}
          <p className="mt-3 text-sm text-gray-400 flex items-center">
            <span className="text-emerald-500 mr-2">⚡</span> Free strategy call. Zero commitment.
          </p>
        </div>

        {clusters.map((cluster) => (
          <LinkCluster
            key={cluster.title}
            title={cluster.title}
            links={cluster.links}
            currentPath={currentPath}
            maxLinks={clusterLinkLimit ?? 4}
          />
        ))}

        <section className="mt-16 border-t border-white/10 pt-10">
          <h2 className="text-2xl font-bold text-white mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {resolvedFaqItems.map((item) => (
              <div key={item.question} className="rounded-xl border border-white/10 bg-white/5 p-6 hover:border-white/20 transition-colors">
                <h3 className="text-lg font-semibold text-emerald-300">{item.question}</h3>
                <p className="text-gray-300 mt-2 leading-relaxed">{item.answer}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
