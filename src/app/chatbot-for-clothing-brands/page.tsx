import { Metadata } from 'next';
import { AgencySeoPage } from '../../components/seo/AgencySeoPage';
import { coreServicePages, industryPages, proofPages, useCasePages } from '../../content/seo/agencyPages';

export const metadata: Metadata = {
  title: 'Chatbot for Clothing Brands',
  description: 'Messenger and ecommerce chatbot automation for clothing brands focused on conversion, repeat purchases, and support efficiency.',
  alternates: { canonical: '/chatbot-for-clothing-brands' },
};

export default function ChatbotForClothingBrandsPage() {
  return (
    <AgencySeoPage
      currentPath="/chatbot-for-clothing-brands"
      eyebrow="Industry Page"
      title="Chatbot for Clothing Brands"
      subtitle="Industry-focused automation for apparel teams dealing with fit questions, size hesitation, and high cart drop-off."
      bullets={[
        'Size and fit guidance flows reduce return-risk hesitation.',
        'Cart recovery tailored by product category and margin.',
        'Recommendation flows for cross-sell and seasonal collections.',
      ]}
      primaryCtaLabel="Get apparel automation plan"
      primaryCtaHref="/contact"
      secondaryCtaLabel="See abandoned cart flow"
      secondaryCtaHref="/abandoned-cart-messenger-automation"
      clusters={[
        { title: 'Core Service Pages', links: coreServicePages },
        { title: 'Use-Case Pages', links: useCasePages },
        { title: 'Industry Expansion Pages', links: industryPages },
        { title: 'Proof and Conversion Pages', links: proofPages },
      ]}
    />
  );
}
