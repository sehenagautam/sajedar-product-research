import type { Metadata } from 'next';
import { BofuLanding } from '../../../components/seo/BofuLanding';

export const metadata: Metadata = {
  title: 'Ecommerce AI Sales Agent for Facebook | Demo',
  description: 'Product recs, abandoned chat recovery, and lead capture in Messenger. Request a demo today.',
  alternates: { canonical: '/ecommerce/facebook-sales-agent' },
};

export default function EcommerceFacebookSalesAgentPage() {
  return (
    <BofuLanding
      canonicalPath="/ecommerce/facebook-sales-agent"
      h1="Ecommerce AI Sales Agent for Facebook Page and Messenger"
      subheading="Increase ecommerce conversion with conversational product recommendations, cart recovery prompts, and lead capture workflows."
      bullets={[
        'Recommendation flows to improve product discovery and AOV.',
        'Abandoned chat/cart recovery in Messenger sequences.',
        'Lead qualification before handoff to sales or support teams.',
      ]}
      primaryCtaText="Request a demo"
      primaryCtaHref="/contact?source=ecommerce-facebook-sales-agent"
      secondaryCtaText="See case studies"
      secondaryCtaHref="/case-studies"
    />
  );
}
