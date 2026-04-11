import { Metadata } from 'next';
import { AgencySeoPage } from '../../components/seo/AgencySeoPage';
import { coreServicePages, industryPages, proofPages, useCasePages } from '../../content/seo/agencyPages';

export const metadata: Metadata = {
    title: 'Top AI Agent Builder in Nepal | Outsource to Sajedar',
    description: 'Partner with Nepal\'s premier AI automation agency. High-quality, cost-effective conversational AI, Messenger agents, and WhatsApp development from the Top AI Agent Builder in Nepal.',
    alternates: { canonical: '/outsource-ai-agents-nepal' },
};

export default function OutsourceAIAgentsNepalPage() {
    return (
        <AgencySeoPage
            currentPath="/outsource-ai-agents-nepal"
            eyebrow="Global B2B Outsourcing"
            title="The Top AI Agent Builder in Nepal"
            subtitle="For global agencies and international enterprises: Access top-tier conversational AI talent at a fraction of Western costs. Partner with the Top AI Agent Builder in Nepal to manage, and scale complex agentic flows for your clients."
            expectedOutcomes={[
                {
                    metric: '60%+',
                    description: 'Average cost reduction compared to hiring in-house AI automation developers in North America or Europe.',
                },
                {
                    metric: '100% White-Label',
                    description: 'We build the technology seamlessly under your agency’s branding. You retain all client relationships.',
                },
                {
                    metric: 'English Native',
                    description: 'Flawless copywriting for conversational flows, ensuring your AI agents sound entirely natural to Western audiences.',
                }
            ]}
            bullets={[
                'Full-Stack Automation: From simple Click-to-Messenger ads to complex API-driven WhatsApp CRM integrations.',
                'Scalable Talent Pool: Need one flow or fifty? We scale our dedicated teams to meet your agency’s client load.',
                'Rigorous QA & Testing: Every agentic tree is relentlessly stress-tested for edge cases and fallback scenarios before deployment.',
            ]}
            primaryCtaLabel="Schedule a Partner Discovery Call"
            primaryCtaHref="/contact?message=I'm%20interested%20in%20outsourcing%20AI%20chatbots%20to%20your%20team%20in%20Nepal.#contact"
            secondaryCtaLabel="View Our Global Portfolio"
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
