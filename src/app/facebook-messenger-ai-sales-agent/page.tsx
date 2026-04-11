import type { Metadata } from 'next';
import { BofuLanding } from '../../components/seo/BofuLanding';

export const metadata: Metadata = {
  title: 'Facebook Messenger AI Sales Agent | Convert DMs',
  description: 'Turn Messenger chats into qualified leads. Instant replies, follow-ups, routing, and booking. Get a demo.',
  alternates: { canonical: '/facebook-messenger-ai-sales-agent' },
};

export default function FacebookMessengerAiSalesAgentPage() {
  return (
    <BofuLanding
      canonicalPath="/facebook-messenger-ai-sales-agent"
      h1="Turn Messenger DMs into Qualified Leads"
      subheading="Use a Facebook Messenger AI sales agent to answer quickly, recover drop-offs, and book higher-intent conversations."
      bullets={[
        '24/7 first response for inbound Messenger inquiries.',
        'Automated follow-ups for undecided prospects.',
        'Built-in qualification logic to improve sales efficiency.',
      ]}
      primaryCtaText="Get a demo"
      primaryCtaHref="/contact?source=facebook-messenger-ai-sales-agent"
      secondaryCtaText="Get proposal"
      secondaryCtaHref="/pricing"
    />
  );
}
