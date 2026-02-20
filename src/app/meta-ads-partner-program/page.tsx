import { Metadata } from 'next';
import { AgencySeoPage } from '../../components/seo/AgencySeoPage';
import { coreServicePages, industryPages, proofPages, useCasePages } from '../../content/seo/agencyPages';

export const metadata: Metadata = {
    title: 'Meta Ads Partner Program | Sajedar',
    description: 'A dedicated collaboration program for media buyers and Meta Ad agencies. Integrate our conversational AI into your clients\' funnels, boost their ROAS, and earn competitive incentives.',
    alternates: { canonical: '/meta-ads-partner-program' },
};

export default function MetaAdsPartnerProgramPage() {
    return (
        <AgencySeoPage
            currentPath="/meta-ads-partner-program"
            eyebrow="Partnership & Collaboration"
            title="Amplify Your Clients' Ad Performance"
            subtitle="For Media Buyers & Performance Agencies: Partner with Sajedar to integrate advanced AI chat funnels directly into your Meta Ad campaigns. Deliver higher ROAS for your clients while unlocking new revenue streams for your agency."
            expectedOutcomes={[
                {
                    metric: '20%+',
                    description: 'Average commission or referral incentive split for partners on every successful enterprise or custom integration.',
                },
                {
                    metric: 'White-glove',
                    description: 'We handle the entire build, optimization, and technical maintenance. You focus on driving the traffic.',
                },
                {
                    metric: 'Zero Leakage',
                    description: 'Stop losing your high-intent traffic to slow, low-converting static landing pages.',
                }
            ]}
            bullets={[
                'Exclusive Financial Incentives: Earn substantial recurring commissions or flat-fee payouts for every client you onboard to our systems.',
                'Turnkey Integration: We seamlessly connect our AI agents to your existing Click-to-Messenger and Click-to-WhatsApp ad campaigns.',
                'Co-Branded Case Studies: Showcase the incredible ROAS improvements to win more high-ticket retainers for your ongoing ad management.',
            ]}
            primaryCtaLabel="Apply for Partnership"
            primaryCtaHref="/contact?message=I%20run%20Meta%20Ads%20for%20clients%20and%20want%20to%20discuss%20a%20partnership.#contact"
            secondaryCtaLabel="View Our Technology"
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
