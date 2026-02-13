import { Metadata } from 'next';
import { AgencySeoPage } from '../../components/seo/AgencySeoPage';
import { coreServicePages, industryPages, proofPages, useCasePages } from '../../content/seo/agencyPages';

export const metadata: Metadata = {
  title: 'Chatbot for Education',
  description: 'Education chatbot automation for admissions, lead qualification, and student support conversations.',
  alternates: { canonical: '/chatbot-for-education' },
};

export default function ChatbotForEducationPage() {
  return (
    <AgencySeoPage
      currentPath="/chatbot-for-education"
      eyebrow="Industry Page"
      title="Chatbot for Education"
      subtitle="Education-focused automation for institutions that need faster applicant response and cleaner lead routing."
      bullets={[
        'Qualify inbound applicant interest and reduce manual form follow-up.',
        'Route admissions conversations by program and readiness.',
        'Support enrolled learners with always-on FAQ flows.',
      ]}
      primaryCtaLabel="Get education chatbot scope"
      primaryCtaHref="/contact"
      secondaryCtaLabel="See qualification use-case"
      secondaryCtaHref="/lead-qualification-chatbot"
      clusters={[
        { title: 'Core Service Pages', links: coreServicePages },
        { title: 'Use-Case Pages', links: useCasePages },
        { title: 'Industry Pages', links: industryPages },
        { title: 'Proof and Conversion Pages', links: proofPages },
      ]}
    />
  );
}
