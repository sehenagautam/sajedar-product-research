import { Metadata } from 'next';
import { AgencySeoPage } from '../../components/seo/AgencySeoPage';
import { coreServicePages, industryPages, proofPages, useCasePages } from '../../content/seo/agencyPages';

export const metadata: Metadata = {
    title: 'AI Chatbot for Facebook Dropshippers',
    description: 'Automate your Facebook dropshipping customer support, capture high-intent leads from ads, and increase ROAS with conversational AI.',
    alternates: { canonical: '/facebook-dropshipping-chatbot' },
};

export default function FacebookDropshippingChatbotPage() {
    return (
        <AgencySeoPage
            currentPath="/facebook-dropshipping-chatbot"
            eyebrow="Dropshipping Solutions"
            title="Automate Sales & Support for Facebook Dropshippers"
            subtitle="Stop wasting ad spend on abandoned clicks. Convert high-intent traffic directly in Messenger while our AI handles 'Where is my order?' tickets 24/7."
            expectedOutcomes={[
                {
                    metric: '2.5x',
                    description: 'Average increase in ROAS by converting traffic directly in Messenger instead of a leaky landing page.',
                },
                {
                    metric: '80%',
                    description: 'Reduction in manual support tickets. The AI automatically handles tracking updates and FAQ.',
                },
                {
                    metric: '< 5 min',
                    description: 'Average response time to ad comments, capturing leads when buying intent is highest.',
                }
            ]}
            bullets={[
                'Automated Comment-to-Message flows: Turn every "Price?" comment into a sales conversation automatically.',
                'Order Tracking Integration: AI instantly fetches and provides shipping updates to anxious customers, protecting your feedback score.',
                'Abandoned Cart Recovery: Trigger automated Messenger reminders with high-converting urgency copy.',
            ]}
            primaryCtaLabel="Scale Your Dropshipping Store"
            primaryCtaHref="/contact?message=I%20run%20a%20dropshipping%20store%20and%20need%20automation.#contact"
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
