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
      title="Turn Lookers into Buyers: AI for Apparel Brands"
      subtitle="Eradicate size hesitation and capture lost revenue. High-performing automation for apparel teams that want to scale without scaling headcount."
      expectedOutcomes={[
        {
          metric: '35%',
          description: 'Reduction in "Will this fit me?" support tickets blocking your team.',
        },
        {
          metric: '2.2x',
          description: 'Higher conversion rate when using interactive Messenger sizing flows vs static size charts.',
        },
        {
          metric: '24/7',
          description: 'Automated styling and cross-sell recommendations driving up AOV.',
        }
      ]}
      bullets={[
        'Eliminate Return-Risk: Conversational sizing guidance builds buyer confidence instantly.',
        'High-Margin Cart Recovery: Trigger automated Messenger reminders tailored by exact product category.',
        'VIP Launch Access: Use Messenger lists to blast new drops with 90%+ open rates.',
      ]}
      primaryCtaLabel="Get Your Custom Apparel Strategy"
      primaryCtaHref="/contact?message=I%20run%20an%20apparel%20brand%20and%20want%20to%20automate.#contact"
      secondaryCtaLabel="See Abandoned Cart Flow"
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
