import { Metadata } from 'next';
import { AgencySeoPage } from '../../components/seo/AgencySeoPage';
import { coreServicePages, industryPages, proofPages, useCasePages } from '../../content/seo/agencyPages';

export const metadata: Metadata = {
    title: 'How to Increase Meta Ads Conversion Rates with AI | Sajedar',
    description: 'Struggling with low ROAS? Learn how adding a 24/7 conversational AI agent to your Click-to-Messenger ads can double your Meta Ads conversion rate instantly.',
    alternates: { canonical: '/increase-meta-ad-conversions' },
};

export default function IncreaseMetaAdConversionsPage() {
    return (
        <AgencySeoPage
            currentPath="/increase-meta-ad-conversions"
            eyebrow="Conversion Rate Optimization"
            title="How to Increase Meta Ads Conversion Rates with AI"
            subtitle="If your Facebook and Instagram ads are generating clicks but not sales, your funnel is leaking. Discover how routing traffic to an instant-replying AI agent dramatically increases conversion rates."
            expectedOutcomes={[
                {
                    metric: '2.5x',
                    description: 'Average increase in ROAS when switching from static landing pages to interactive Messenger experiences.',
                },
                {
                    metric: '24/7',
                    description: 'Speed-to-lead. Answer objections instantly at 2 AM before the prospect scrolls to a competitor.',
                },
                {
                    metric: '100%',
                    description: 'Contact capture. Every user who clicks "Send Message" becomes a subscriber you can retarget for free.',
                }
            ]}
            bullets={[
                'Instant Objection Handling: Human support teams sleep; our AI doesn\'t. Instantly answer questions about sizing, shipping, or pricing to secure the sale.',
                'Zero Friction Navigation: Instead of forcing a user to wait for a website to load, qualify them directly inside the Meta app environment.',
                'Automated Follow-Ups: If a prospect stops responding, the AI agent automatically sends a follow-up message 2 hours later to recover the lead.',
            ]}
            primaryCtaLabel="Claim Your Free Meta Ads Audit"
            primaryCtaHref="/contact?message=I%20want%20to%20increase%20my%20Meta%20Ads%20conversion%20rate.#contact"
            secondaryCtaLabel="View Case Studies"
            secondaryCtaHref="/case-studies"
            clusters={[
                { title: 'Core Service Pages', links: coreServicePages },
                { title: 'Use-Case Pages', links: useCasePages },
                { title: 'Industry Expansion Pages', links: industryPages },
                { title: 'Proof and Conversion Pages', links: proofPages },
            ]}
        />
    );
}
