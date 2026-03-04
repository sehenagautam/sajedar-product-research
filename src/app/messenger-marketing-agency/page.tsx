import { Metadata } from 'next';
import Link from 'next/link';
import { AgencySeoPage } from '../../components/seo/AgencySeoPage';
import { coreServicePages, industryPages, proofPages, useCasePages } from '../../content/seo/agencyPages';

export const metadata: Metadata = {
  title: 'Messenger Marketing Agency for Ecommerce | Sajedar',
  description: 'Done-for-you Meta Messenger marketing for ecommerce brands: lead qualification, abandoned-cart recovery, conversational checkout, and weekly optimization.',
  alternates: { canonical: '/messenger-marketing-agency' },
};

export default function MessengerMarketingAgencyPage() {
  return (
    <AgencySeoPage
      currentPath="/messenger-marketing-agency"
      eyebrow="Core Service"
      title="Messenger Marketing Agency"
      subtitle="Built for teams that need predictable Messenger-driven revenue, not generic chatbot deployments."
      bullets={[
        'Lifecycle flows for cart, browse, and repeat purchase moments.',
        'Offer sequencing and timing based on user intent.',
        'Weekly optimization based on conversation and conversion data.',
      ]}
      integrations={['Meta (Priority)']}
      integrationsNote="* Core implementation runs on the Meta ecosystem and is optimized for Click-to-Message acquisition workflows."
      primaryCtaLabel="Get Messenger growth plan"
      primaryCtaHref="/contact"
      secondaryCtaLabel="Explore use-cases"
      secondaryCtaHref="/messenger-ecommerce-automation"
      clusters={[
        { title: 'Related Service Pages', links: coreServicePages },
        { title: 'Use-Case Pages', links: useCasePages },
        { title: 'Industry Pages', links: industryPages },
        { title: 'Proof and Conversion Pages', links: proofPages },
      ]}
    >
      <section className="mt-12 space-y-8">
        <div className="rounded-xl border border-white/10 bg-white/5 p-6">
          <h2 className="text-2xl font-bold text-white">Who This Is For</h2>
          <ul className="mt-4 space-y-2 text-gray-200">
            <li className="flex items-start"><span className="text-emerald-400 mr-2 mt-1">•</span><span>Ecommerce teams running Meta ads and losing leads due to slow inbox response.</span></li>
            <li className="flex items-start"><span className="text-emerald-400 mr-2 mt-1">•</span><span>Brands that need sales-qualified leads instead of raw message volume.</span></li>
            <li className="flex items-start"><span className="text-emerald-400 mr-2 mt-1">•</span><span>Operators who want measurable lift in conversion, recovery, and AOV.</span></li>
          </ul>
          <h3 className="mt-6 text-xl font-semibold text-emerald-300">Who This Is Not For</h3>
          <p className="mt-2 text-gray-300">Teams looking for a generic DIY chatbot template without tracking, optimization, or sales ownership.</p>
        </div>

        <div className="rounded-xl border border-white/10 bg-white/5 p-6">
          <h2 className="text-2xl font-bold text-white">What Sajedar Delivers in the First 30 Days</h2>
          <ol className="mt-4 list-decimal pl-6 space-y-2 text-gray-200">
            <li>Conversation architecture for lead capture, qualification, recommendation, and handoff.</li>
            <li>Meta-compliant follow-up sequencing aligned to messaging windows.</li>
            <li>Event tracking model for clicks, replies, qualification, checkout starts, and outcomes.</li>
            <li>Weekly optimization loop based on real conversion data, not vanity metrics.</li>
          </ol>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link href="/proposal" className="px-4 py-2 rounded-lg bg-emerald-500 hover:bg-emerald-600 font-semibold">View Pricing Paths</Link>
            <Link href="/case-studies" className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 font-semibold">Read Case Studies</Link>
          </div>
        </div>
      </section>
    </AgencySeoPage>
  );
}
