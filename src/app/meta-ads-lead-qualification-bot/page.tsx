import { Metadata } from 'next';
import { AgencySeoPage } from '../../components/seo/AgencySeoPage';
import { coreServicePages, industryPages, proofPages, useCasePages } from '../../content/seo/agencyPages';

export const metadata: Metadata = {
    title: 'Filter Low-Quality Meta Ad Leads with AI | Sajedar',
    description: 'Stop wasting time calling unqualified Facebook leads. Use an AI sales agent to qualify, score, and filter leads instantly inside Messenger and WhatsApp.',
    alternates: { canonical: '/meta-ads-lead-qualification-bot' },
};

export default function MetaAdsLeadQualificationBotPage() {
    return (
        <AgencySeoPage
            currentPath="/meta-ads-lead-qualification-bot"
            eyebrow="Pain Point: Low Lead Quality"
            title="Stop Wasting Time on Junk Meta Ad Leads"
            subtitle="Are your Facebook Lead Forms generating hundreds of names with wrong numbers and zero buying intent? Our AI agents instantly qualify every click through interactive conversation."
            expectedOutcomes={[
                {
                    metric: '100%',
                    description: 'Of leads instantly engaged and passed through a rigorous, custom qualification framework.',
                },
                {
                    metric: 'Zero',
                    description: 'Time wasted by your sales team calling "window shoppers" or people who "accidentally clicked the ad".',
                },
                {
                    metric: 'Higher CVR',
                    description: 'Sales teams close pre-qualified, highly educated leads much faster.',
                }
            ]}
            bullets={[
                'Interactive Pre-Qualification: Replace boring Lead Forms with a dynamic AI conversation that asks qualifying questions (Budget, Timeline, Needs).',
                'Automatic Disqualification: Politely end conversations or route unqualified buyers to self-serve resources, keeping your calendar clean.',
                'Seamless CRM Syncing: Only push verified, high-scoring leads into your HubSpot or Salesforce pipelines.',
            ]}
            primaryCtaLabel="Automate Lead Qualification"
            primaryCtaHref="/contact?message=My%20Meta%20Ad%20leads%20are%20low%20quality.%20I%20need%20a%20qualification%20bot.#contact"
            secondaryCtaLabel="Watch Demo"
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
