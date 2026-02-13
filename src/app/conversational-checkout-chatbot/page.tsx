import { Metadata } from 'next';
import { AgencySeoPage } from '../../components/seo/AgencySeoPage';
import { coreServicePages, industryPages, proofPages, useCasePages } from '../../content/seo/agencyPages';

export const metadata: Metadata = {
  title: 'Conversational Checkout Chatbot',
  description: 'Conversational checkout chatbot strategy and implementation for ecommerce brands that want higher purchase completion.',
  alternates: { canonical: '/conversational-checkout-chatbot' },
};

export default function ConversationalCheckoutChatbotPage() {
  return (
    <AgencySeoPage
      currentPath="/conversational-checkout-chatbot"
      eyebrow="Use-Case Page"
      title="Conversational Checkout Chatbot"
      subtitle="Reduce checkout friction by helping buyers complete purchases in guided conversational steps."
      bullets={[
        'Checkout assistance for shipping, payment, and confidence blockers.',
        'Fast handoff rules for edge-case payment or policy questions.',
        'Experiment framework for conversion and dropout reduction.',
      ]}
      primaryCtaLabel="Improve checkout conversion"
      primaryCtaHref="/contact"
      secondaryCtaLabel="Read use-case pillar"
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
