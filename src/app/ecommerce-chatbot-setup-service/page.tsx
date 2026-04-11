import { Metadata } from 'next';
import Link from 'next/link';
import { AgencySeoPage } from '../../components/seo/AgencySeoPage';
import { coreServicePages, industryPages, proofPages, useCasePages } from '../../content/seo/agencyPages';

export const metadata: Metadata = {
  title: 'Ecommerce AI Sales Agent Setup Service | Sajedar',
  description: 'Done-for-you setup service for Meta Messenger sales automation: implementation, tracking, optimization, and pricing paths for ecommerce brands.',
  alternates: { canonical: '/ecommerce-chatbot-setup-service' },
};

export default function EcommerceChatbotSetupServicePage() {
  return (
    <AgencySeoPage
      currentPath="/ecommerce-chatbot-setup-service"
      eyebrow="Core Service"
      title="Scale Ecommerce Revenue with AI Automation"
      subtitle="End-to-end deployment for ecommerce chat systems designed to maximize ROAS, recover abandoned carts, and slash support overhead."
      expectedOutcomes={[
        {
          metric: '15-30%',
          description: 'Average recovery rate on abandoned carts using Messenger automations compared to standard email.',
        },
        {
          metric: 'Zero',
          description: 'Time spent manually answering repetitive product and sizing questions.',
        },
        {
          metric: '3x',
          description: 'Higher engagement rates through personalized conversational commerce routing.',
        }
      ]}
      bullets={[
        'Full System Audit: We map your highest-leverage traffic sources and identify where revenue is leaking.',
        'Custom Conversion Flows: Design and build specific agentic trees for sizing guidance, cross-selling, and checkout.',
        'Seamless CRM Integration: Automatically route high-intent leads to your sales team while the AI handles the rest.',
      ]}
      integrations={['Meta (Priority)']}
      integrationsNote="* Standard setup is optimized for Meta messaging flows and ecommerce conversion events."
      primaryCtaLabel="Claim Your Free Strategy Call"
      primaryCtaHref="/contact?message=I'm%20interested%20in%20a%20strategy%20call%20for%20ecommerce.#contact"
      secondaryCtaLabel="View Success Metrics"
      secondaryCtaHref="/demo"
      clusters={[
        { title: 'Related Service Pages', links: coreServicePages },
        { title: 'Use-Case Pages', links: useCasePages },
        { title: 'Industry Pages', links: industryPages },
        { title: 'Proof and Conversion Pages', links: proofPages },
      ]}
    >
      <section className="mt-12 space-y-8">
        <div className="rounded-xl border border-white/10 bg-white/5 p-6">
          <h2 className="text-2xl font-bold text-white">Implementation Scope</h2>
          <ul className="mt-4 space-y-2 text-gray-200">
            <li className="flex items-start"><span className="text-emerald-400 mr-2 mt-1">•</span><span>Discovery and leak-mapping across your ad-to-chat conversion journey.</span></li>
            <li className="flex items-start"><span className="text-emerald-400 mr-2 mt-1">•</span><span>Build of lead qualification, cart recovery, and conversational checkout workflows.</span></li>
            <li className="flex items-start"><span className="text-emerald-400 mr-2 mt-1">•</span><span>Measurement setup for conversion, AOV, response-time performance, and handoff quality.</span></li>
            <li className="flex items-start"><span className="text-emerald-400 mr-2 mt-1">•</span><span>Weekly optimization with clear decision logs and iteration priorities.</span></li>
          </ul>
        </div>

        <div className="rounded-xl border border-white/10 bg-white/5 p-6">
          <h2 className="text-2xl font-bold text-white">Pricing Paths and Next Step</h2>
          <p className="mt-3 text-gray-300 leading-relaxed">
            Sajedar supports both performance-aligned (commission-based) and fixed setup structures depending on fit, timeline, and risk appetite.
            Start with the proposal route to select the right model for your funnel stage.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link href="/pricing" className="px-4 py-2 rounded-lg bg-emerald-500 hover:bg-emerald-600 font-semibold">See Proposal Options</Link>
            <Link href="/messenger-marketing-agency" className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 font-semibold">Messenger Marketing Agency</Link>
            <Link href="/abandoned-cart-messenger-automation" className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 font-semibold">Abandoned Cart Automation</Link>
          </div>
        </div>
      </section>
    </AgencySeoPage>
  );
}
