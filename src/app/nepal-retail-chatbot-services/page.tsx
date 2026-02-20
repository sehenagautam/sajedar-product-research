import { Metadata } from 'next';
import { AgencySeoPage } from '../../components/seo/AgencySeoPage';
import { coreServicePages, industryPages, proofPages, useCasePages } from '../../content/seo/agencyPages';

export const metadata: Metadata = {
    title: 'AI Chatbots for Retailers in Nepal | Sajedar',
    description: 'Custom Facebook Messenger and WhatsApp chatbot development for retail businesses in Nepal. Automate customer support, handle inventory queries, and drive Kathmandu-wide sales.',
    alternates: { canonical: '/nepal-retail-chatbot-services' },
};

export default function NepalRetailChatbotPage() {
    return (
        <AgencySeoPage
            currentPath="/nepal-retail-chatbot-services"
            eyebrow="Local Retail Automation"
            title="Automate Your Retail Business in Nepal"
            subtitle="Stop losing customers because your team is asleep or too busy to reply. Get a custom AI chatbot that speaks to your Nepali customers 24/7 on Facebook Messenger and WhatsApp."
            expectedOutcomes={[
                {
                    metric: '24/7',
                    description: 'Instant replies to "Kati ho?", "Location kata ho?", and delivery questions.',
                },
                {
                    metric: '100%',
                    description: 'Lead capture from all social media channels into one centralized dashboard.',
                },
                {
                    metric: 'Zero',
                    description: 'Missed sales opportunities during Dashain, Tihar, or peak shopping hours.',
                }
            ]}
            bullets={[
                'Localized Conversational Flows: Chatbots optimized for the way Nepali consumers actually type and buy.',
                'Pathao & Local Delivery Integration: Seamlessly gather delivery addresses and phone numbers automatically.',
                'WhatsApp & Messenger Ready: Meet your customers where they already spend all their time.',
            ]}
            primaryCtaLabel="Get a Free Consultation"
            primaryCtaHref="/contact?message=I%20run%20a%20retail%20business%20in%20Nepal%20and%20need%20a%20chatbot.#contact"
            secondaryCtaLabel="View Local Store Flow"
            secondaryCtaHref="/chatbot-for-local-stores"
            clusters={[
                { title: 'Core Service Pages', links: coreServicePages },
                { title: 'Use-Case Pages', links: useCasePages },
                { title: 'Industry Expansion Pages', links: industryPages },
                { title: 'Proof and Conversion Pages', links: proofPages },
            ]}
        />
    );
}
