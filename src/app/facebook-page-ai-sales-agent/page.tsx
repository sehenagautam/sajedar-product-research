import type { Metadata } from 'next';
import { BofuLanding } from '../../components/seo/BofuLanding';

export const metadata: Metadata = {
  title: 'Facebook Page AI Sales Agent | Pay-per-Result',
  description: 'Commission-based AI sales agent for your Facebook Page. Qualify leads and book demos. See a live demo.',
  alternates: { canonical: '/facebook-page-ai-sales-agent' },
};

export default function FacebookPageAiSalesAgentPage() {
  return (
    <BofuLanding
      canonicalPath="/facebook-page-ai-sales-agent"
      h1="Commission-based AI Sales Agent for Your Facebook Page"
      subheading="Deploy an AI sales agent that replies instantly, qualifies intent, and drives booked calls from Facebook Page conversations."
      bullets={[
        'Capture and qualify leads from Page messages in real-time.',
        'Route high-intent chats to your team with context attached.',
        'Pay-per-result option designed for performance accountability.',
      ]}
      primaryCtaText="Book a demo"
      primaryCtaHref="/contact?source=facebook-page-ai-sales-agent"
      secondaryCtaText="See live demo"
      secondaryCtaHref="/demo"
    />
  );
}
