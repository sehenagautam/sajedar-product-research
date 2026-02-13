import { Metadata } from 'next';
import { AgencySeoPage } from '../../components/seo/AgencySeoPage';
import { coreServicePages, industryPages, proofPages, useCasePages } from '../../content/seo/agencyPages';

export const metadata: Metadata = {
  title: 'Chatbot Automation Agency for Ecommerce Brands',
  description: 'Sajedar is a chatbot automation agency focused on Messenger and ecommerce growth workflows: lead qualification, cart recovery, recommendations, and conversational checkout.',
  alternates: { canonical: '/chatbot-automation-agency' },
};

export default function ChatbotAutomationAgencyPage() {
  return (
    <AgencySeoPage
      currentPath="/chatbot-automation-agency"
      eyebrow="Core Service"
      title="Chatbot Automation Agency"
      subtitle="We design, implement, and optimize ecommerce chatbot automation systems with clear revenue and support-cost outcomes."
      bullets={[
        'Architecture for Messenger-first ecommerce journeys.',
        'Implementation includes event tracking, conversation logic, and handoff rules.',
        'Optimization cycles for conversion rate, cart recovery, and AOV.',
      ]}
      primaryCtaLabel="Book strategy call"
      primaryCtaHref="/contact"
      secondaryCtaLabel="See case studies"
      secondaryCtaHref="/case-studies"
      clusters={[
        { title: 'Core Service Pages', links: coreServicePages },
        { title: 'Use-Case Pages', links: useCasePages },
        { title: 'Industry Pages', links: industryPages },
        { title: 'Proof and Conversion Pages', links: proofPages },
      ]}
    />
  );
}
