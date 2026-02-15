import ObfuscatedEmail from '../../components/ObfuscatedEmail';

export default function PrivacyPolicy() {
    return (
        <main className="min-h-screen w-full bg-gradient-to-br from-[#18181b] via-[#23243a] to-[#1a1a2e] flex flex-col items-center justify-center px-4 py-24">
            <div className="max-w-2xl w-full bg-[#23243a] bg-opacity-90 rounded-3xl shadow-xl p-8 border border-white/10">
                <h1 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6 text-center">Privacy Policy</h1>
                <section className="text-gray-300 text-base leading-relaxed flex flex-col gap-6">
                    <p>Your privacy is important to us. This policy explains what information we collect, how we use it, and your rights regarding your data.</p>
                    <h2 className="text-lg font-bold text-emerald-400 mt-4">Information We Collect</h2>
                    <ul className="list-disc list-inside ml-4">
                        <li>Contact details you provide (name, email, company, etc.)</li>
                        <li>Chat interactions and usage data</li>
                        <li>Technical data (browser, device, etc.)</li>
                    </ul>
                    <h2 className="text-lg font-bold text-emerald-400 mt-4">How We Use Your Information</h2>
                    <ul className="list-disc list-inside ml-4">
                        <li>To provide and improve our agent services</li>
                        <li>To respond to your inquiries and support requests</li>
                        <li>To analyze usage and improve our platform</li>
                    </ul>
                    <h2 className="text-lg font-bold text-emerald-400 mt-4">Your Rights</h2>
                    <ul className="list-disc list-inside ml-4">
                        <li>You can request access, correction, or deletion of your data at any time.</li>
                        <li>We do not sell your personal information.</li>
                    </ul>
                    <p>If you have any questions about this policy, please contact us at <ObfuscatedEmail user="privacy" domain="sajedar.com" className="text-emerald-400" linkClassName="text-emerald-400 underline" />.</p>
                </section>
            </div>
        </main>
    );
} 
