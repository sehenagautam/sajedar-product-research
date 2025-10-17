import React from 'react';

export const artisanAiVsSajedarStrategicAnalysis = {
  slug: 'artisan-ai-vs-sajedar-strategic-analysis',
  title: 'Strategic Analysis: Artisan AI vs. Sajedar — Contrasting Two Visions of AI Business Automation',
  description: 'A strategic deep dive comparing San Francisco–based Artisan AI with Nepal\'s own Sajedar, revealing how both companies address opposite ends of the automation funnel. Artisan represents proactive outbound AI employees, while Sajedar leads in reactive inbound customer automation across South Asia.',
  industry: 'AI Strategy & Business Automation',
  duration: 'Strategic Analysis',
  results: ['Strategic positioning insights', 'Market differentiation analysis', 'Complementary AI approaches identified', 'Global vs. regional AI strategies'],
  featured: true,
  date: new Date('2024-10-15'),
  component: function ArtisanAiVsSajedarStrategicAnalysis() {
    return (
      <div className="w-full bg-gradient-to-br from-slate-900/20 to-gray-900/20 border border-slate-500/30 rounded-3xl p-8 md:p-12 backdrop-blur-sm">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
            Strategic Analysis: <span className="text-blue-400">Artisan AI</span> vs. <span className="text-emerald-400">Sajedar</span>
          </h1>
          <p className="text-xl text-gray-300 mb-4">
            Contrasting Two Visions of AI-Powered Business Automation
          </p>
          <p className="text-lg text-gray-400 italic">
            From Silicon Valley to South Asia — exploring how Artisan AI and Sajedar redefine business efficiency in radically different ways.
          </p>
        </div>

        {/* Core Philosophy Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Core Philosophy</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Artisan AI */}
            <div className="bg-blue-900/20 border border-blue-500/30 rounded-xl p-6">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🤖</span>
                </div>
                <h3 className="text-2xl font-bold text-blue-400 mb-2">Artisan AI</h3>
                <p className="text-blue-300 italic">"Redefining Work with AI Employees"</p>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="text-white font-semibold mb-2">Core Role</h4>
                  <p className="text-gray-300">Proactive outbound lead generation</p>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-2">Focus</h4>
                  <p className="text-gray-300">Enterprise-scale B2B sales</p>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-2">Approach</h4>
                  <p className="text-gray-300">Replace human SDRs with autonomous AI agents</p>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-2">Philosophy</h4>
                  <p className="text-gray-300">Delegation</p>
                </div>
              </div>
            </div>

            {/* Sajedar */}
            <div className="bg-emerald-900/20 border border-emerald-500/30 rounded-xl p-6">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">💬</span>
                </div>
                <h3 className="text-2xl font-bold text-emerald-400 mb-2">Sajedar</h3>
                <p className="text-emerald-300 italic">"AI Business Automation That Actually Works"</p>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="text-white font-semibold mb-2">Core Role</h4>
                  <p className="text-gray-300">Reactive inbound engagement & support</p>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-2">Focus</h4>
                  <p className="text-gray-300">SMEs across Nepal & South Asia</p>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-2">Approach</h4>
                  <p className="text-gray-300">Empower human teams through smart chatbots</p>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-2">Philosophy</h4>
                  <p className="text-gray-300">Assistance</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* The Automation Funnel */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">The Automation Funnel</h2>
          <div className="bg-gradient-to-r from-blue-900/20 to-emerald-900/20 border border-gray-500/30 rounded-xl p-8">
            <div className="text-center mb-6">
              <div className="w-32 h-32 mx-auto mb-4 relative">
                <div className="absolute inset-0 bg-gradient-to-b from-blue-500/30 to-transparent rounded-t-full"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-500/30 to-transparent rounded-b-full"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-4xl">⚡</span>
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Outbound Creation vs. Inbound Capture</h3>
              <p className="text-gray-300 italic">Artisan drives discovery. Sajedar drives conversion.</p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="text-center">
                <div className="bg-blue-500/20 rounded-lg p-4 mb-4">
                  <h4 className="text-blue-400 font-bold text-lg">Opportunity Creation</h4>
                  <p className="text-blue-300">Artisan AI (Outbound)</p>
                </div>
              </div>
              <div className="text-center">
                <div className="bg-emerald-500/20 rounded-lg p-4 mb-4">
                  <h4 className="text-emerald-400 font-bold text-lg">Opportunity Capture</h4>
                  <p className="text-emerald-300">Sajedar (Inbound)</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Technology & Market Snapshot */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Technology & Market Snapshot</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Artisan AI Details */}
            <div className="bg-blue-900/10 border border-blue-500/20 rounded-xl p-6">
              <h3 className="text-xl font-bold text-blue-400 mb-6">Artisan AI</h3>
              <div className="space-y-4">
                <div>
                  <span className="text-white font-semibold">Founded:</span>
                  <span className="text-gray-300 ml-2">2023 (San Francisco)</span>
                </div>
                <div>
                  <span className="text-white font-semibold">Product:</span>
                  <span className="text-gray-300 ml-2">"Ava" — Autonomous SDR Agent</span>
                </div>
                <div>
                  <span className="text-white font-semibold">Funding:</span>
                  <span className="text-gray-300 ml-2">$39.3M (YC, HubSpot Ventures)</span>
                </div>
                <div>
                  <span className="text-white font-semibold">Market:</span>
                  <span className="text-gray-300 ml-2">Global B2B Enterprises</span>
                </div>
                <div>
                  <span className="text-white font-semibold">Pricing:</span>
                  <span className="text-gray-300 ml-2">Custom, Enterprise</span>
                </div>
                <div>
                  <span className="text-white font-semibold">Integrations:</span>
                  <span className="text-gray-300 ml-2">HubSpot, Salesforce</span>
                </div>
              </div>
            </div>

            {/* Sajedar Details */}
            <div className="bg-emerald-900/10 border border-emerald-500/20 rounded-xl p-6">
              <h3 className="text-xl font-bold text-emerald-400 mb-6">Sajedar</h3>
              <div className="space-y-4">
                <div>
                  <span className="text-white font-semibold">Founded:</span>
                  <span className="text-gray-300 ml-2">2024 (Nepal)</span>
                </div>
                <div>
                  <span className="text-white font-semibold">Product:</span>
                  <span className="text-gray-300 ml-2">Custom AI Chatbots (Inbound 24/7 Agents)</span>
                </div>
                <div>
                  <span className="text-white font-semibold">Funding:</span>
                  <span className="text-gray-300 ml-2">Likely bootstrapped / privately funded</span>
                </div>
                <div>
                  <span className="text-white font-semibold">Market:</span>
                  <span className="text-gray-300 ml-2">Regional SMEs (South Asia Focus)</span>
                </div>
                <div>
                  <span className="text-white font-semibold">Pricing:</span>
                  <span className="text-gray-300 ml-2">Tiered, Transparent ($199–$499/mo)</span>
                </div>
                <div>
                  <span className="text-white font-semibold">Integrations:</span>
                  <span className="text-gray-300 ml-2">Facebook Messenger, Google Sheets, WhatsApp</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Strategic Insight */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Strategic Insight</h2>
          <div className="bg-gradient-to-r from-purple-900/20 to-pink-900/20 border border-purple-500/30 rounded-xl p-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-6">Not Competitors — Complements</h3>
            <p className="text-lg text-gray-300 leading-relaxed">
              Artisan and Sajedar occupy opposite poles of the AI automation spectrum.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed mt-4">
              <span className="text-blue-400 font-semibold">Artisan creates opportunity</span> through outbound AI-driven prospecting.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed mt-2">
              <span className="text-emerald-400 font-semibold">Sajedar captures opportunity</span> by automating inbound communication and lead handling.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed mt-4">
              Together, they illustrate the full cycle of AI-enabled business automation — from first contact to final conversion.
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-emerald-900/20 to-blue-900/20 border border-emerald-500/30 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              Your Business Deserves an AI That Works While You Rest.
            </h3>
            <p className="text-lg text-gray-300 mb-6">
              Tapaĩ chiya piunuhos, kaam Sajedar le garcha. ☕🤖
            </p>
            <div className="flex justify-center">
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-lg transition-all duration-200 text-lg shadow-lg hover:shadow-emerald-500/25 hover:scale-105"
              >
                🟩 Explore Sajedar Automation →
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
};
