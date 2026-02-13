import { Metadata } from 'next';
import { AgencySeoPage } from '../../components/seo/AgencySeoPage';
import { coreServicePages, industryPages, proofPages, useCasePages } from '../../content/seo/agencyPages';

export const metadata: Metadata = {
  title: 'Product Recommendation Chatbot for Ecommerce',
  description: 'Conversational product recommendation chatbot implementation for higher conversion rates and average order value.',
  alternates: { canonical: '/product-recommendation-chatbot' },
};

export default function ProductRecommendationChatbotPage() {
  return (
    <AgencySeoPage
      currentPath="/product-recommendation-chatbot"
      eyebrow="Use-Case Page"
      title="Product Recommendation Chatbot"
      subtitle="Guide buyers to best-fit products faster with conversational recommendations that reduce decision drop-off."
      bullets={[
        'Question-led product matching based on intent and budget.',
        'Merchandising logic for bundles and upsells.',
        'Structured recommendation testing for AOV improvement.',
      ]}
      primaryCtaLabel="Deploy recommendation bot"
      primaryCtaHref="/contact"
      secondaryCtaLabel="See ecommerce setup service"
      secondaryCtaHref="/ecommerce-chatbot-setup-service"
      clusters={[
        { title: 'Core Service Pages', links: coreServicePages },
        { title: 'Related Use-Case Pages', links: useCasePages },
        { title: 'Industry Pages', links: industryPages },
        { title: 'Proof and Conversion Pages', links: proofPages },
      ]}
    />
  );
}
