import { Metadata } from 'next';
import { AgencySeoPage } from '../../components/seo/AgencySeoPage';
import { coreServicePages, industryPages, proofPages, useCasePages } from '../../content/seo/agencyPages';

export const metadata: Metadata = {
  title: 'Ecommerce Chatbot Setup Service',
  description: 'Complete ecommerce chatbot setup service including flow design, integration, launch QA, and post-launch optimization.',
  alternates: { canonical: '/ecommerce-chatbot-setup-service' },
};

export default function EcommerceChatbotSetupServicePage() {
  return (
    <AgencySeoPage
      currentPath="/ecommerce-chatbot-setup-service"
      eyebrow="Core Service"
      title="Ecommerce Chatbot Setup Service"
      subtitle="End-to-end deployment for ecommerce chatbot systems that support sales, retention, and customer support goals."
      bullets={[
        'Discovery: offer map, intent map, and integration audit.',
        'Build: conversation trees, fallback handling, and CRM handoff.',
        'Launch: QA, instrumentation, and optimization playbooks.',
      ]}
      primaryCtaLabel="Request implementation"
      primaryCtaHref="/contact"
      secondaryCtaLabel="View demos"
      secondaryCtaHref="/demo"
      clusters={[
        { title: 'Related Service Pages', links: coreServicePages },
        { title: 'Use-Case Pages', links: useCasePages },
        { title: 'Industry Pages', links: industryPages },
        { title: 'Proof and Conversion Pages', links: proofPages },
      ]}
    />
  );
}
