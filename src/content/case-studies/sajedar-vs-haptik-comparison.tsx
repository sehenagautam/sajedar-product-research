import React from 'react';

export const sajedarVsHaptikComparison = {
  slug: 'sajedar-vs-haptik-comparison',
  title: 'Sajedar vs. Haptik: The Local Boutique vs. The Global Conglomerate',
  description: 'A strategic comparison between Sajedar\'s nimble, product-focused automation approach and Haptik\'s enterprise-grade conversational AI platform, revealing how both companies address different market segments in the AI automation landscape.',
  industry: 'AI Platform Strategy & Market Positioning',
  duration: 'Strategic Analysis',
  results: ['Local vs. global approach analysis', 'SME vs. enterprise market comparison', 'Platform scalability assessment', 'Strategic positioning identified'],
  featured: true,
  date: new Date('2024-10-10'),
  component: function SajedarVsHaptikComparison() {
    return (
      <div className="w-full bg-gradient-to-br from-cyan-900/20 to-blue-900/20 border border-cyan-500/30 rounded-3xl p-8 md:p-12 backdrop-blur-sm">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/20 text-cyan-300 rounded-full text-sm font-medium mb-6">
            <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></span>
            Global vs. Local Strategy Analysis
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Sajedar vs. Haptik
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            The Local Boutique vs. The Global Conglomerate
          </p>
        </div>

        {/* Executive Summary */}
        <div className="mb-12 p-6 bg-white/5 border border-white/10 rounded-xl">
          <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
            <span className="w-8 h-8 bg-cyan-500 rounded-lg flex items-center justify-center text-white font-bold text-sm">💡</span>
            Executive Summary
          </h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            This analysis compares two fundamentally different approaches to conversational AI. 
            <strong className="text-cyan-300"> Sajedar.com</strong> is a nimble, product-focused automation company serving SMEs in Nepal, 
            while <strong className="text-blue-300"> Haptik</strong> (acquired by Reliance Jio) is a massive enterprise-grade conversational AI platform 
            designed for Fortune 500 companies.
          </p>
          <div className="grid md:grid-cols-2 gap-4 mt-6">
            <div className="p-4 bg-cyan-500/10 border border-cyan-500/30 rounded-lg">
              <h3 className="font-bold text-cyan-300 mb-2">Sajedar's Mission</h3>
              <p className="text-sm text-gray-300">"Built for accessibility, affordability, and quick deployment for small businesses"</p>
            </div>
            <div className="p-4 bg-blue-500/10 border border-blue-500/30 rounded-lg">
              <h3 className="font-bold text-blue-300 mb-2">Haptik's Mission</h3>
              <p className="text-sm text-gray-300">"Built for scale, enterprise-level security, and global reach"</p>
            </div>
          </div>
        </div>

        {/* Core Focus Comparison */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Core Focus & Market Position</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-6 bg-gradient-to-br from-cyan-900/30 to-cyan-800/20 border border-cyan-500/30 rounded-xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-cyan-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">S</span>
                </div>
                <h3 className="text-xl font-bold text-cyan-300">Sajedar.com</h3>
              </div>
              <p className="text-gray-300 leading-relaxed mb-4">
                A nimble, product-focused automation company serving SMEs in Nepal through a no-code chatbot platform. 
                Its mission is to make AI automation affordable, quick to deploy, and simple. Targets small businesses 
                like restaurants or real estate agents that need to automate Facebook Messenger inquiries 24/7.
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm text-cyan-300">
                  <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></span>
                  Local market focus (Nepal)
                </div>
                <div className="flex items-center gap-2 text-sm text-cyan-300">
                  <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></span>
                  SME-targeted solutions
                </div>
                <div className="flex items-center gap-2 text-sm text-cyan-300">
                  <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></span>
                  No-code platform approach
                </div>
              </div>
            </div>

            <div className="p-6 bg-gradient-to-br from-blue-900/30 to-blue-800/20 border border-blue-500/30 rounded-xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">H</span>
                </div>
                <h3 className="text-xl font-bold text-blue-300">Haptik</h3>
              </div>
              <p className="text-gray-300 leading-relaxed mb-4">
                A massive enterprise-grade conversational AI platform designed for Fortune 500 companies. Delivers AI-powered, 
                omni-channel automation across web, apps, WhatsApp, and voice with deep system integrations (Salesforce, SAP, Zendesk). 
                Built for scale, multilingual capability, and analytics.
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm text-blue-300">
                  <span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span>
                  Global enterprise focus
                </div>
                <div className="flex items-center gap-2 text-sm text-blue-300">
                  <span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span>
                  Fortune 500 companies
                </div>
                <div className="flex items-center gap-2 text-sm text-blue-300">
                  <span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span>
                  Omni-channel platform
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Platform Capabilities Comparison */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Platform Capabilities & Features</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-6 bg-gradient-to-br from-green-900/30 to-green-800/20 border border-green-500/30 rounded-xl">
              <h3 className="text-xl font-bold text-green-300 mb-4 flex items-center gap-2">
                <span className="text-2xl">🏪</span>
                Sajedar: Local Boutique Approach
              </h3>
              <div className="space-y-4">
                <div className="p-4 bg-green-500/10 rounded-lg">
                  <h4 className="font-semibold text-green-300 mb-2">Target Market</h4>
                  <p className="text-sm text-gray-300">SMEs, restaurants, real estate agents in Nepal</p>
                </div>
                <div className="p-4 bg-green-500/10 rounded-lg">
                  <h4 className="font-semibold text-green-300 mb-2">Platform Focus</h4>
                  <p className="text-sm text-gray-300">Facebook Messenger automation, 24/7 customer support</p>
                </div>
                <div className="p-4 bg-green-500/10 rounded-lg">
                  <h4 className="font-semibold text-green-300 mb-2">Deployment</h4>
                  <p className="text-sm text-gray-300">Quick deployment, no-code setup</p>
                </div>
                <div className="p-4 bg-green-500/10 rounded-lg">
                  <h4 className="font-semibold text-green-300 mb-2">Pricing</h4>
                  <p className="text-sm text-gray-300">Affordable, accessible pricing for small businesses</p>
                </div>
              </div>
            </div>

            <div className="p-6 bg-gradient-to-br from-purple-900/30 to-purple-800/20 border border-purple-500/30 rounded-xl">
              <h3 className="text-xl font-bold text-purple-300 mb-4 flex items-center gap-2">
                <span className="text-2xl">🌍</span>
                Haptik: Global Conglomerate Approach
              </h3>
              <div className="space-y-4">
                <div className="p-4 bg-purple-500/10 rounded-lg">
                  <h4 className="font-semibold text-purple-300 mb-2">Target Market</h4>
                  <p className="text-sm text-gray-300">Fortune 500 companies, global enterprises</p>
                </div>
                <div className="p-4 bg-purple-500/10 rounded-lg">
                  <h4 className="font-semibold text-purple-300 mb-2">Platform Focus</h4>
                  <p className="text-sm text-gray-300">Omni-channel automation across web, apps, WhatsApp, voice</p>
                </div>
                <div className="p-4 bg-purple-500/10 rounded-lg">
                  <h4 className="font-semibold text-purple-300 mb-2">Integration</h4>
                  <p className="text-sm text-gray-300">Deep system integrations (Salesforce, SAP, Zendesk)</p>
                </div>
                <div className="p-4 bg-purple-500/10 rounded-lg">
                  <h4 className="font-semibold text-purple-300 mb-2">Scale</h4>
                  <p className="text-sm text-gray-300">Enterprise-grade security, multilingual capability</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Technical Architecture Comparison */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Technical Architecture & Integration</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-6 bg-gradient-to-br from-orange-900/30 to-orange-800/20 border border-orange-500/30 rounded-xl">
              <h3 className="text-xl font-bold text-orange-300 mb-4 flex items-center gap-2">
                <span className="text-2xl">⚡</span>
                Sajedar: Agile & Focused
              </h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3 p-3 bg-orange-500/10 rounded-lg">
                  <span className="text-2xl">📱</span>
                  <div>
                    <h4 className="font-semibold text-orange-300">Primary Channel</h4>
                    <p className="text-sm text-gray-300">Facebook Messenger focused</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-orange-500/10 rounded-lg">
                  <span className="text-2xl">🔧</span>
                  <div>
                    <h4 className="font-semibold text-orange-300">Integration</h4>
                    <p className="text-sm text-gray-300">Google Sheets, basic CRM connections</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-orange-500/10 rounded-lg">
                  <span className="text-2xl">🚀</span>
                  <div>
                    <h4 className="font-semibold text-orange-300">Deployment</h4>
                    <p className="text-sm text-gray-300">Quick setup, minimal configuration</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-orange-500/10 rounded-lg">
                  <span className="text-2xl">💰</span>
                  <div>
                    <h4 className="font-semibold text-orange-300">Cost Model</h4>
                    <p className="text-sm text-gray-300">Affordable subscription pricing</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 bg-gradient-to-br from-indigo-900/30 to-indigo-800/20 border border-indigo-500/30 rounded-xl">
              <h3 className="text-xl font-bold text-indigo-300 mb-4 flex items-center gap-2">
                <span className="text-2xl">🏗️</span>
                Haptik: Enterprise-Grade
              </h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3 p-3 bg-indigo-500/10 rounded-lg">
                  <span className="text-2xl">🌐</span>
                  <div>
                    <h4 className="font-semibold text-indigo-300">Multi-Channel</h4>
                    <p className="text-sm text-gray-300">Web, apps, WhatsApp, voice, SMS</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-indigo-500/10 rounded-lg">
                  <span className="text-2xl">🔗</span>
                  <div>
                    <h4 className="font-semibold text-indigo-300">Enterprise Integration</h4>
                    <p className="text-sm text-gray-300">Salesforce, SAP, Zendesk, Workday</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-indigo-500/10 rounded-lg">
                  <span className="text-2xl">📊</span>
                  <div>
                    <h4 className="font-semibold text-indigo-300">Analytics</h4>
                    <p className="text-sm text-gray-300">Advanced analytics and reporting</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-indigo-500/10 rounded-lg">
                  <span className="text-2xl">🔒</span>
                  <div>
                    <h4 className="font-semibold text-indigo-300">Security</h4>
                    <p className="text-sm text-gray-300">Enterprise-grade security and compliance</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Market Positioning */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Market Positioning & Strategy</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-6 bg-gradient-to-br from-teal-900/30 to-teal-800/20 border border-teal-500/30 rounded-xl">
              <h3 className="text-xl font-bold text-teal-300 mb-4 flex items-center gap-2">
                <span className="text-2xl">🎯</span>
                Sajedar: Local Market Leader
              </h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <span className="w-6 h-6 bg-teal-500 rounded-full flex items-center justify-center text-white text-xs font-bold">L</span>
                  <div>
                    <h4 className="font-semibold text-teal-300">Local Expertise</h4>
                    <p className="text-sm text-gray-300">Deep understanding of Nepal's business landscape</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-6 h-6 bg-teal-500 rounded-full flex items-center justify-center text-white text-xs font-bold">A</span>
                  <div>
                    <h4 className="font-semibold text-teal-300">Accessibility</h4>
                    <p className="text-sm text-gray-300">Making AI automation accessible to small businesses</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-6 h-6 bg-teal-500 rounded-full flex items-center justify-center text-white text-xs font-bold">S</span>
                  <div>
                    <h4 className="font-semibold text-teal-300">Speed</h4>
                    <p className="text-sm text-gray-300">Quick deployment and immediate results</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 bg-gradient-to-br from-rose-900/30 to-rose-800/20 border border-rose-500/30 rounded-xl">
              <h3 className="text-xl font-bold text-rose-300 mb-4 flex items-center gap-2">
                <span className="text-2xl">🌍</span>
                Haptik: Global Enterprise Leader
              </h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <span className="w-6 h-6 bg-rose-500 rounded-full flex items-center justify-center text-white text-xs font-bold">G</span>
                  <div>
                    <h4 className="font-semibold text-rose-300">Global Reach</h4>
                    <p className="text-sm text-gray-300">Serving Fortune 500 companies worldwide</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-6 h-6 bg-rose-500 rounded-full flex items-center justify-center text-white text-xs font-bold">S</span>
                  <div>
                    <h4 className="font-semibold text-rose-300">Scale</h4>
                    <p className="text-sm text-gray-300">Managing millions of interactions across channels</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-6 h-6 bg-rose-500 rounded-full flex items-center justify-center text-white text-xs font-bold">R</span>
                  <div>
                    <h4 className="font-semibold text-rose-300">Reliance Backing</h4>
                    <p className="text-sm text-gray-300">Acquired by Reliance Jio for enterprise expansion</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Strategic Conclusion */}
        <div className="mb-12 p-6 bg-gradient-to-br from-cyan-900/20 to-blue-900/20 border border-cyan-500/30 rounded-xl">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
            <span className="w-8 h-8 bg-cyan-500 rounded-lg flex items-center justify-center text-white font-bold text-sm">🎯</span>
            Strategic Conclusion
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-4 bg-cyan-500/10 border border-cyan-500/30 rounded-lg">
              <h3 className="font-bold text-cyan-300 mb-3">Choose Sajedar For:</h3>
              <ul className="text-gray-300 text-sm space-y-2">
                <li>• Agile, low-cost chatbot for rapid deployment</li>
                <li>• Small to medium businesses in Nepal</li>
                <li>• Facebook Messenger automation needs</li>
                <li>• Quick setup and immediate results</li>
                <li>• Affordable, accessible AI automation</li>
              </ul>
            </div>
            <div className="p-4 bg-blue-500/10 border border-blue-500/30 rounded-lg">
              <h3 className="font-bold text-blue-300 mb-3">Choose Haptik For:</h3>
              <ul className="text-gray-300 text-sm space-y-2">
                <li>• Global-grade AI infrastructure</li>
                <li>• Managing millions of interactions across channels</li>
                <li>• Enterprise-level security and compliance</li>
                <li>• Complex system integrations</li>
                <li>• Fortune 500 company requirements</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Final Insight */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full font-semibold mb-6">
            <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
            Strategic Analysis Complete
          </div>
          <h3 className="text-2xl font-bold text-white mb-4">Two Complementary Market Approaches</h3>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Sajedar excels as a local boutique serving SMEs with accessible, affordable automation, while Haptik dominates 
            as a global conglomerate serving enterprise clients with comprehensive, scalable solutions. Both approaches 
            serve essential but distinct market segments, each optimized for their respective target audiences and use cases.
          </p>
        </div>
      </div>
    );
  }
};
