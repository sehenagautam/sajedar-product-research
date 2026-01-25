import Link from 'next/link';

export const metadata = {
  title: 'Sajedar Forum | AI Business Automation & Chatbots Community',
  description: 'Join Sajedar’s Discord community to learn, build, and grow with AI business automation and chatbots. Get help, share wins, and access expert‑guided resources.',
  alternates: { canonical: 'https://sajedar.com/forum' },
  openGraph: {
    type: 'website',
    title: 'Sajedar Forum | AI Business Automation & Chatbots Community',
    description: 'Discuss AI-powered sales, automation, and chatbots with founders, builders, and operators.',
    url: 'https://sajedar.com/forum'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sajedar Forum | AI Business Automation & Chatbots Community',
    description: 'Join our Discord to learn, build, and grow.'
  }
};

export default function ForumPage() {
  return (
    <main className="min-h-screen bg-[#18181b] text-white">
      <div className="bg-white/5 border-b border-white/10">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <nav className="flex items-center space-x-2 text-sm">
            <Link href="/" className="text-gray-400 hover:text-white">Home</Link>
            <span className="text-gray-600">/</span>
            <span className="text-white">Forum</span>
          </nav>
        </div>
      </div>

      <section className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl md:text-5xl font-serif font-bold leading-tight mb-4">Sajedar Forum</h1>
        <p className="text-lg text-gray-300 mb-8 max-w-3xl">
          Join our Discord to connect with founders, ops leaders, and engineers building with AI. Get hands-on help with
          AI business automation, messenger bots, and <span className="text-emerald-300 font-semibold">AI powered sales</span>.
          Share your wins, ask questions, and learn playbooks used by successful teams.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-10">
          <div className="p-6 rounded-xl border border-white/10 bg-white/5">
            <h3 className="text-xl font-semibold mb-2">Why Join</h3>
            <ul className="list-disc pl-6 text-gray-300 space-y-2">
              <li>Get expert feedback on your agent flows and automations</li>
              <li>Steal practical templates for lead capture, support, and sales</li>
              <li>See live demos and teardown sessions every week</li>
              <li>Meet peers shipping with n8n and Python (agentic + RAG)</li>
            </ul>
          </div>
          <div className="p-6 rounded-xl border border-white/10 bg-white/5">
            <h3 className="text-xl font-semibold mb-2">Who It’s For</h3>
            <ul className="list-disc pl-6 text-gray-300 space-y-2">
              <li>Business owners and operators aiming for revenue and efficiency</li>
              <li>Product and growth teams testing AI assistants fast</li>
              <li>Developers building robust, scalable AI workflows</li>
            </ul>
          </div>
        </div>

        <div className="rounded-2xl p-6 border border-emerald-500/30 bg-gradient-to-r from-emerald-900/20 to-purple-900/20 mb-12">
          <h2 className="text-2xl font-bold mb-2">Get your invite</h2>
          <p className="text-gray-300 mb-4">Hop in and say hello. Introduce your business, and we’ll point you to the best resources.</p>
          <a
            href="https://discord.gg/FJbuEAbaqU"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold rounded-lg transition"
          >
            Join the Discord
          </a>
        </div>

        <p className="text-gray-400 text-sm">
          By joining, you agree to keep discussions respectful, share learnings openly, and avoid spam. We’re here to build.
        </p>
      </section>
    </main>
  );
} 