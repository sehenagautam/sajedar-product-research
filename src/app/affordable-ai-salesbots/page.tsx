import { Metadata } from 'next';
import { AgencySeoPage } from '../../components/seo/AgencySeoPage';
import { coreServicePages, industryPages, proofPages, useCasePages } from '../../content/seo/agencyPages';

export const metadata: Metadata = {
    title: 'Affordable AI Salesbots & Chatbots | Sajedar',
    description: 'Get a high-converting AI salesbot for your business without the enterprise price tag. Fast deployment, low monthly costs, and proven ROI for small businesses.',
    alternates: { canonical: '/affordable-ai-salesbots' },
};

export default function AffordableAISalesbotsPage() {
    return (
        <AgencySeoPage
            currentPath="/affordable-ai-salesbots"
            eyebrow="Cost-Effective Automation"
            title="High-Converting AI Salesbots on a Budget"
            subtitle="You don't need a massive enterprise budget to automate your sales. Get a custom-built, relentless AI sales agent working for your business 24/7 at a fraction of the cost of a human employee."
            expectedOutcomes={[
                {
                    metric: '10x Cheaper',
                    description: 'Than hiring, training, and retaining a full-time human customer support or sales representative.',
                },
                {
                    metric: 'Days, Not Months',
                    description: 'Rapid deployment. We use proven, pre-built frameworks to launch your bot fast without expensive custom coding.',
                },
                {
                    metric: 'Immediate ROI',
                    description: 'Our affordable bots are laser-focused on one thing: turning your existing website or social media traffic into paying customers.',
                }
            ]}
            bullets={[
                'No Hidden Retainers: Transparent, affordable pricing structures designed for small-to-medium businesses.',
                'Done-For-You Setup: We handle all the technical heavy lifting, copywriting, and deployment.',
                'Platform Agnostic: Works seamlessly across Facebook Messenger, Instagram DM, WhatsApp, or your website.',
            ]}
            primaryCtaLabel="Get Your Free Pricing Quote"
            primaryCtaHref="/contact?message=I'm%20looking%20for%20an%20affordable%20salesbot%20solution.#contact"
            secondaryCtaLabel="Try a Live Demo First"
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
