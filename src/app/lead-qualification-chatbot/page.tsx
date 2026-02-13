import { Metadata } from 'next';
import { AgencySeoPage } from '../../components/seo/AgencySeoPage';
import { coreServicePages, industryPages, proofPages, useCasePages } from '../../content/seo/agencyPages';

export const metadata: Metadata = {
  title: 'Lead Qualification Chatbot Implementation',
  description: 'Lead qualification chatbot setup for ecommerce and service brands to route high-intent prospects faster.',
  alternates: { canonical: '/lead-qualification-chatbot' },
};

export default function LeadQualificationChatbotPage() {
  return (
    <AgencySeoPage
      currentPath="/lead-qualification-chatbot"
      eyebrow="Use-Case Page"
      title="Lead Qualification Chatbot"
      subtitle="Qualify and segment inbound leads in real time, then route priority opportunities to your team."
      bullets={[
        'Intent scoring rules based on answers and behavior.',
        'Automated qualification forms without friction-heavy funnels.',
        'Priority routing to sales and lower-value routing to nurture flows.',
      ]}
      primaryCtaLabel="Build qualification flow"
      primaryCtaHref="/contact"
      secondaryCtaLabel="See ecommerce pillar"
      secondaryCtaHref="/messenger-ecommerce-automation"
      clusters={[
        { title: 'Core Service Pages', links: coreServicePages },
        { title: 'Related Use-Case Pages', links: useCasePages },
        { title: 'Industry Pages', links: industryPages },
        { title: 'Proof and Conversion Pages', links: proofPages },
      ]}
    />
  );
}
