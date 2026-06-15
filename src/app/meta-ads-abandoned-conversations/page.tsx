import { Metadata } from 'next';
import { AgencySeoPage } from '../../components/seo/AgencySeoPage';
import { coreServicePages, industryPages, proofPages, useCasePages } from '../../content/seo/agencyPages';

export const metadata: Metadata = {
    title: 'Recover Abandoned Meta Ad Conversations | Sajedar',
    description: 'Stop letting warm leads ghost you after asking "How much?". Our AI sales agents automatically follow up with unconverted Facebook and Instagram leads to resurrect the sale.',
    alternates: { canonical: '/meta-ads-abandoned-conversations' },
};

export default function MetaAdsAbandonedConversationsPage() {
    return (
        <AgencySeoPage
            currentPath="/meta-ads-abandoned-conversations"
            eyebrow="Pain Point: Lead Ghosting"
            title="Resurrect Dead Meta Ad Conversations Automatically"
            subtitle="The hardest part of Meta Ads isn't getting the click - it's getting the customer to reply after they ask for the price. Our AI Agents run relentless, polite follow-up sequences until the lead converts."
            expectedOutcomes={[
                {
                    metric: '20-30%',
                    description: 'Average recovery rate of "ghosted" leads when using automated, multi-day Messenger follow-up sequences.',
                },
                {
                    metric: '100% Free',
                    description: 'Cost per follow-up. You\'ve already paid Meta for the initial click; our bot re-engages them for free within the 24-hour window.',
                },
                {
                    metric: 'Zero Effort',
                    description: 'Your sales team never has to manually copy-paste "Just checking in!" messages again.',
                }
            ]}
            bullets={[
                'Intelligent Delay Timers: If a lead views the pricing but doesn\'t reply, the AI automatically sends a targeted follow-up a few hours later.',
                'Objection Handling Sequences: Follow-ups aren\'t just "Are you there?". The AI provides social proof, answers common doubts, or offers limited-time incentives to force action.',
                'Human Handoff for Hot Leads: The moment a ghosted lead resurrects and shows buying intent, the AI alerts your human sales team to close the deal.',
            ]}
            primaryCtaLabel="Stop Losing Ghosted Leads"
            primaryCtaHref="/contact?message=I%20want%20to%20automate%20my%20sales%20follow-ups%20on%20Meta.#contact"
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
