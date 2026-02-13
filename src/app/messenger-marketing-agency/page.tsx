import { Metadata } from 'next';
import { AgencySeoPage } from '../../components/seo/AgencySeoPage';
import { coreServicePages, industryPages, proofPages, useCasePages } from '../../content/seo/agencyPages';

export const metadata: Metadata = {
  title: 'Messenger Marketing Agency for Ecommerce',
  description: 'Done-for-you Messenger marketing automation for ecommerce teams: abandoned cart recovery, segmentation, and conversion journeys.',
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
    />
  );
}
