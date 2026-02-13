import { Metadata } from 'next';
import { AgencySeoPage } from '../../components/seo/AgencySeoPage';
import { coreServicePages, industryPages, proofPages, useCasePages } from '../../content/seo/agencyPages';

export const metadata: Metadata = {
  title: 'Chatbot for Local Stores',
  description: 'Local store chatbot automation for Messenger: inventory answers, booking, order capture, and repeat customer campaigns.',
  alternates: { canonical: '/chatbot-for-local-stores' },
};

export default function ChatbotForLocalStoresPage() {
  return (
    <AgencySeoPage
      currentPath="/chatbot-for-local-stores"
      eyebrow="Industry Page"
      title="Chatbot for Local Stores"
      subtitle="Automate local retail conversations across inventory checks, availability, and purchase intent follow-up."
      bullets={[
        'Fast answers for stock and pickup questions.',
        'Capture high-intent buyers and route to in-store support.',
        'Re-engagement campaigns for repeat buyers.',
      ]}
      primaryCtaLabel="Discuss local retail setup"
      primaryCtaHref="/contact"
      secondaryCtaLabel="See lead qualification flow"
      secondaryCtaHref="/lead-qualification-chatbot"
      clusters={[
        { title: 'Core Service Pages', links: coreServicePages },
        { title: 'Use-Case Pages', links: useCasePages },
        { title: 'Industry Pages', links: industryPages },
        { title: 'Proof and Conversion Pages', links: proofPages },
      ]}
    />
  );
}
