import { Metadata } from 'next';
import { AgencySeoPage } from '../../components/seo/AgencySeoPage';
import { coreServicePages, industryPages, proofPages, useCasePages } from '../../content/seo/agencyPages';

export const metadata: Metadata = {
  title: 'Abandoned Cart Messenger Automation Service',
  description: 'Recover abandoned carts with Messenger automation flows designed for ecommerce conversion lift and retention.',
  alternates: { canonical: '/abandoned-cart-messenger-automation' },
};

export default function AbandonedCartMessengerAutomationPage() {
  return (
    <AgencySeoPage
      currentPath="/abandoned-cart-messenger-automation"
      eyebrow="Use-Case Page"
      title="Abandoned Cart Messenger Automation"
      subtitle="Recover lost revenue with fast, personalized Messenger follow-up sequences that bring shoppers back to checkout."
      bullets={[
        'Trigger campaigns from cart and browse abandonment events.',
        'Use dynamic product context to improve return-to-cart rates.',
        'Control discount logic and margin safety by segment.',
      ]}
      primaryCtaLabel="Launch cart recovery"
      primaryCtaHref="/contact"
      secondaryCtaLabel="See related articles"
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
