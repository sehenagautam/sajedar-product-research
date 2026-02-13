import { Metadata } from 'next';
import { AgencySeoPage } from '../../components/seo/AgencySeoPage';
import { coreServicePages, industryPages, proofPages, useCasePages } from '../../content/seo/agencyPages';

export const metadata: Metadata = {
  title: 'Chatbot for Restaurants',
  description: 'Restaurant chatbot automation for Messenger covering reservations, menu questions, and repeat guest campaigns.',
  alternates: { canonical: '/chatbot-for-restaurants' },
};

export default function ChatbotForRestaurantsPage() {
  return (
    <AgencySeoPage
      currentPath="/chatbot-for-restaurants"
      eyebrow="Industry Page"
      title="Chatbot for Restaurants"
      subtitle="Messenger automation for restaurants that need to convert inquiries into bookings and repeat visits."
      bullets={[
        'Automate reservation and private-event inquiry capture.',
        'Answer menu and dietary questions instantly.',
        'Re-market offers to prior guests with segment-based triggers.',
      ]}
      primaryCtaLabel="Plan restaurant chatbot"
      primaryCtaHref="/contact"
      secondaryCtaLabel="View conversational checkout"
      secondaryCtaHref="/conversational-checkout-chatbot"
      clusters={[
        { title: 'Core Service Pages', links: coreServicePages },
        { title: 'Use-Case Pages', links: useCasePages },
        { title: 'Industry Pages', links: industryPages },
        { title: 'Proof and Conversion Pages', links: proofPages },
      ]}
    />
  );
}
