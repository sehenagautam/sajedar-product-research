import { Metadata } from 'next';
import { AgencySeoPage } from '../../components/seo/AgencySeoPage';
import { coreServicePages, industryPages, proofPages, useCasePages } from '../../content/seo/agencyPages';

export const metadata: Metadata = {
  title: 'Ecommerce AI Sales Agent Setup Service',
  description: 'Full-service AI sales agent implementation for D2C brands. From strategy to live deployment, we build revenue-driving Messenger agents.',
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
    />
  );
}
