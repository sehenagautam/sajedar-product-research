import ObfuscatedEmail from '../../components/ObfuscatedEmail';

export default function TermsOfService() {
  return (
    <main className="min-h-screen w-full bg-gradient-to-br from-[#18181b] via-[#23243a] to-[#1a1a2e] flex flex-col items-center justify-center px-4 py-24">
      <div className="max-w-2xl w-full bg-[#23243a] bg-opacity-90 rounded-3xl shadow-xl p-8 border border-white/10">
        <h1 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6 text-center">Terms of Service</h1>
        <section className="text-gray-300 text-base leading-relaxed flex flex-col gap-6">
          <p>By using Sajedar’s services, you agree to these terms. Please read them carefully.</p>
          <h2 className="text-lg font-bold text-emerald-400 mt-4">Use of Service</h2>
          <ul className="list-disc list-inside ml-4">
            <li>You must be at least 18 years old to use our services.</li>
            <li>Do not misuse our platform or attempt to disrupt our services.</li>
            <li>We may update these terms from time to time.</li>
          </ul>
          <h2 className="text-lg font-bold text-emerald-400 mt-4">Liability</h2>
          <ul className="list-disc list-inside ml-4">
            <li>Sajedar is not liable for any indirect or consequential damages.</li>
            <li>Our services are provided "as is" without warranties of any kind.</li>
          </ul>
          <h2 className="text-lg font-bold text-emerald-400 mt-4">Contact</h2>
          <p>If you have questions about these terms, contact us at <ObfuscatedEmail user="legal" domain="sajedar.com" className="text-emerald-400" linkClassName="text-emerald-400 underline" />.</p>
        </section>
      </div>
    </main>
  );
} 