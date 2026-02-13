import { Metadata } from 'next';
import { AgencySeoPage } from '../../components/seo/AgencySeoPage';
import { coreServicePages, industryPages, proofPages, useCasePages } from '../../content/seo/agencyPages';

export const metadata: Metadata = {
  title: 'Messenger Ecommerce Automation',
  description: 'Messenger ecommerce automation services for conversion lift, abandoned cart recovery, and conversational checkout performance.',
  alternates: { canonical: '/messenger-ecommerce-automation' },
};

export default function MessengerEcommerceAutomationPage() {
  return (
    <AgencySeoPage
      currentPath="/messenger-ecommerce-automation"
      eyebrow="Use-Case Pillar"
      title="Messenger Ecommerce Automation"
      subtitle="Primary pillar page for ecommerce Messenger workflows that directly impact conversion, AOV, and repeat revenue."
      bullets={[
        'Build high-intent journeys from product discovery to checkout.',
        'Reduce abandonment with timed message recovery campaigns.',
        'Route qualified buyers to sales support only when needed.',
      ]}
      primaryCtaLabel="Talk to automation team"
      primaryCtaHref="/contact"
      secondaryCtaLabel="Read supporting articles"
      secondaryCtaHref="/articles"
      clusters={[
        { title: 'Core Service Pages', links: coreServicePages },
        { title: 'Related Use-Case Pages', links: useCasePages },
        { title: 'Industry Pages', links: industryPages },
        { title: 'Proof and Conversion Pages', links: proofPages },
      ]}
    />
  );
}
