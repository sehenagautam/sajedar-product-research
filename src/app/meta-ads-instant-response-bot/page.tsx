import { Metadata } from 'next';
import { AgencySeoPage } from '../../components/seo/AgencySeoPage';
import { coreServicePages, industryPages, proofPages, useCasePages } from '../../content/seo/agencyPages';

export const metadata: Metadata = {
    title: 'Instant Response Chatbots for Meta Ads | Sajedar',
    description: 'A 5-minute delay drops your lead conversion rate by 80%. Use our 24/7 AI chatbots to instantly reply to every Facebook and Instagram ad message and capture the sale.',
    alternates: { canonical: '/meta-ads-instant-response-bot' },
};

export default function MetaAdsInstantResponseBotPage() {
    return (
        <AgencySeoPage
            currentPath="/meta-ads-instant-response-bot"
            eyebrow="Pain Point: Delayed Response Times"
            title="Never Miss a Sale Because You Replied Too Late"
            subtitle="In the world of Meta Ads, speed is everything. If you take an hour to reply to a DM, that customer has already bought from a competitor. Our AI guarantees a 0.5-second response time, 24/7."
            expectedOutcomes={[
                {
                    metric: '0.5s',
                    description: 'Average response time to any incoming DM or comment from your ad campaigns.',
                },
                {
                    metric: '400%',
                    description: 'Increase in lead qualification rates when replying within 1 minute vs. 10 minutes.',
                },
                {
                    metric: '24/7',
                    description: 'Total coverage. Capture the impulsive late-night buyers while your team is sleeping.',
                }
            ]}
            bullets={[
                'Beat the Competition: Being the first to reply guarantees you control the conversation and the sale.',
                'Overcome the "5-Minute Rule": Industry data shows conversion rates plummet if a lead waits longer than 5 minutes. We remove that risk entirely.',
                'Handle Volume Spikes: Your viral ad just generated 500 messages in an hour? The AI agent handles them all simultaneously without breaking a sweat.',
            ]}
            primaryCtaLabel="Fix Your Response Times"
            primaryCtaHref="/contact?message=I%20need%20to%20fix%20my%20slow%20response%20times%20on%20Meta%20Ads.#contact"
            secondaryCtaLabel="Try Our Instant Bot"
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
