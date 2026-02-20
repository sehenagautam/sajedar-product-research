import { Metadata } from 'next';
import Link from 'next/link';
import { AgencySeoPage } from '../../components/seo/AgencySeoPage';
import { coreServicePages, industryPages, proofPages, useCasePages } from '../../content/seo/agencyPages';

export const metadata: Metadata = {
    title: 'AI Chatbots for Meta Ads Retailers',
    description: 'Maximize your Facebook and Instagram Ad ROAS with conversational AI. Turn ad clicks into automated Messenger sales and capture high-intent retail leads instantly.',
    alternates: { canonical: '/meta-ads-retail-chatbot' },
};

export default function MetaAdsRetailChatbotPage() {
    return (
        <AgencySeoPage
            currentPath="/meta-ads-retail-chatbot"
            eyebrow="Retail Advertising Automation"
            title="Convert Meta Ad Traffic with AI Chatbots"
            subtitle="Stop losing expensive ad clicks to slow landing pages. Route your Facebook and Instagram ad traffic directly into automated Messenger and WhatsApp sales funnels."
            expectedOutcomes={[
                {
                    metric: '2-4x',
                    description: 'Higher conversion rates when routing ad traffic to interactive Messenger flows vs static landing pages.',
                },
                {
                    metric: '100%',
                    description: 'Contact capture rate. Every user who clicks your ad and interacts becomes a subscriber you can retarget for free.',
                },
                {
                    metric: '24/7',
                    description: 'Instant lead qualification and product recommendations directly inside the ad platform.',
                }
            ]}
            bullets={[
                'Click-to-Messenger Ads: Capture high-intent leads without forcing them out of the social media app.',
                'Automated Comment Replies: Instantly reply to every "How much?" comment on your viral ads to secure sales.',
                'Zero-Cost Retargeting: Build a subscriber list of engaged ad clickers and blast promotional offers without paying Meta for reach.',
            ]}
            primaryCtaLabel="Audit My Meta Ad Funnel"
            primaryCtaHref="/contact?message=I%20run%20Meta%20Ads%20for%20my%20retail%20store%20and%20want%20to%20improve%20ROAS.#contact"
            secondaryCtaLabel="View Interactive Demo"
            secondaryCtaHref="/demo"
            clusters={[
                { title: 'Core Service Pages', links: coreServicePages },
                { title: 'Use-Case Pages', links: useCasePages },
                { title: 'Industry Expansion Pages', links: industryPages },
                { title: 'Proof and Conversion Pages', links: proofPages },
            ]}
        />
    );
}
