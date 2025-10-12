import React from 'react';

export const conversationalAiNepalEcosystemCaseStudy = {
  slug: 'conversational-ai-nepal-ecosystem-2025',
  title: 'Conversational AI Ecosystem: Nepal\'s Mobile-First Innovation Journey',
  description: 'Comprehensive analysis of Nepal\'s conversational AI landscape, featuring real-world implementations across telecom, e-commerce, healthcare, banking, and agriculture sectors.',
  industry: 'Multi-Sector AI Implementation',
  duration: 'Ongoing',
  results: ['95.6% disease ID accuracy in agriculture', '90% query time reduction in banking', '40% yield increase in farming', '80% guest query automation in tourism'],
  featured: true,
  date: new Date('2025-01-25'),
  component: function ConversationalAiNepalEcosystemCaseStudy() {
    return (
      <div className="w-full bg-gradient-to-br from-indigo-900/20 to-purple-900/20 border border-indigo-500/30 rounded-3xl p-8 md:p-12 backdrop-blur-sm">
        {/* Case Study Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 bg-indigo-500/20 text-indigo-300 rounded-full text-sm font-medium mb-4">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
            AI Ecosystem Analysis
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">
            Nepal's Conversational AI Revolution
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            From mobile-first innovations to sector-specific implementations, 
            Nepal's AI ecosystem is reshaping industries through contextual, 
            language-aware conversational AI solutions.
          </p>
        </div>

        {/* Executive Insights */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">🧠 Executive Insights</h3>
          <div className="bg-gradient-to-r from-indigo-900/30 to-purple-900/30 border border-indigo-500/30 rounded-2xl p-8">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl mb-3">🌍</div>
                <h4 className="text-lg font-semibold text-white mb-2">Global Transformation</h4>
                <p className="text-gray-300 text-sm">Moving from scripted bots to intelligent, generative assistants</p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-3">📱</div>
                <h4 className="text-lg font-semibold text-white mb-2">Nepali Innovation</h4>
                <p className="text-gray-300 text-sm">Practical, frugal, and mobile-first innovations</p>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-3">🎯</div>
                <h4 className="text-lg font-semibold text-white mb-2">Success Factor</h4>
                <p className="text-gray-300 text-sm">Contextual relevance — language, platform, and user behavior</p>
              </div>
            </div>
          </div>
        </div>

        {/* Sector Implementations */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">📱 Foundational Use-Cases</h3>
          
          {/* Telecom Sector */}
          <div className="mb-8">
            <h4 className="text-xl font-semibold text-indigo-300 mb-4">Telecom Sector: Nepal's Mobile-First Transformation</h4>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                <h5 className="text-lg font-semibold text-white mb-3">Ncell 'MAYA'</h5>
                <ul className="text-gray-300 space-y-2 text-sm">
                  <li>• Multi-platform chatbot (Viber, WhatsApp, Web)</li>
                  <li>• Problem: Call center overload</li>
                  <li>• Solution: Self-service platform for recharge, data packs, complaints</li>
                  <li>• <strong className="text-indigo-400">Insight:</strong> Mobile-first, multi-channel design critical</li>
                </ul>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                <h5 className="text-lg font-semibold text-white mb-3">Nepal Telecom 'NT Chatbot' + 'Maina'</h5>
                <ul className="text-gray-300 space-y-2 text-sm">
                  <li>• Web + physical AI robot hybrid</li>
                  <li>• Impact: 600+ FAQs handled autonomously</li>
                  <li>• <strong className="text-indigo-400">Lesson:</strong> Physical + digital convergence boosts accessibility</li>
                </ul>
              </div>
            </div>
          </div>

          {/* E-Commerce */}
          <div className="mb-8">
            <h4 className="text-xl font-semibold text-indigo-300 mb-4">E-Commerce: Conversational Sales Engine</h4>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                <h5 className="text-lg font-semibold text-white mb-3">Daraz 'Daz'</h5>
                <ul className="text-gray-300 space-y-2 text-sm">
                  <li>• 24/7 support for orders, returns, cancellations</li>
                  <li>• Impact: Reduced wait times, improved trust</li>
                </ul>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                <h5 className="text-lg font-semibold text-white mb-3">Daraz 'AskDaraz'</h5>
                <ul className="text-gray-300 space-y-2 text-sm">
                  <li>• Generative AI assistant (OpenAI + Azure)</li>
                  <li>• Impact: Personalized shopping dialogue</li>
                </ul>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-xl p-6">
                <h5 className="text-lg font-semibold text-white mb-3">Flipkart 'Mira'</h5>
                <ul className="text-gray-300 space-y-2 text-sm">
                  <li>• Conversational product discovery</li>
                  <li>• Result: +12% cart additions</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Healthcare & Well-Being */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">🏥 Healthcare and Well-Being</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { 
                name: 'Ada Health', 
                impact: '99% condition recognition accuracy',
                description: 'Reliable triage tool'
              },
              { 
                name: 'Wysa (India)', 
                impact: 'Measurable symptom reduction',
                description: 'CBT-based mental health support'
              },
              { 
                name: 'Woebot / Aiza (Pakistan)', 
                impact: 'Culturally sensitive design',
                description: 'Regionally-adapted mental health bots'
              },
              { 
                name: 'NAAMII SRMH (Nepal)', 
                impact: 'Foundational step for local health AI',
                description: 'Evaluating LLM-based health chatbots'
              }
            ].map((health, index) => (
              <div key={index} className="bg-white/5 border border-white/10 rounded-xl p-6">
                <h5 className="text-lg font-semibold text-white mb-2">{health.name}</h5>
                <p className="text-indigo-400 font-semibold text-sm mb-2">{health.impact}</p>
                <p className="text-gray-300 text-sm">{health.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Banking & Financial Services */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">🏦 Banking & Financial Services</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <h5 className="text-lg font-semibold text-white mb-3">Nepal Bank 'NBL Mitra'</h5>
              <ul className="text-gray-300 space-y-2 text-sm">
                <li>• Local virtual banking assistant</li>
                <li>• Backed by Research: Increases satisfaction & efficiency</li>
              </ul>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <h5 className="text-lg font-semibold text-white mb-3">HDFC 'EVA' (India)</h5>
              <ul className="text-gray-300 space-y-2 text-sm">
                <li>• Transitioned from FAQ bot → generative AI advisor</li>
                <li>• Result: Query time ↓ 90%, handles millions of chats</li>
              </ul>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <h5 className="text-lg font-semibold text-white mb-3">Bank of America 'Erica'</h5>
              <ul className="text-gray-300 space-y-2 text-sm">
                <li>• Predictive financial insights</li>
                <li>• Sets global standard</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Agriculture Success Stories */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">🌾 Agriculture Success Stories</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-emerald-900/30 to-green-900/30 border border-emerald-500/30 rounded-2xl p-6">
              <h4 className="text-xl font-semibold text-emerald-300 mb-4">Mandarin Orange Chatbot (Nepal)</h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Tech Stack:</span>
                  <span className="text-emerald-400 font-semibold">RAG + Llama-3.2 + Image Recognition</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Disease ID Accuracy:</span>
                  <span className="text-emerald-400 font-semibold">95.6%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Result:</span>
                  <span className="text-emerald-400 font-semibold">Yield ↑, Loss ↓</span>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-900/30 to-cyan-900/30 border border-blue-500/30 rounded-2xl p-6">
              <h4 className="text-xl font-semibold text-blue-300 mb-4">AgriDoot / Farmer.Chat (India)</h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Yield Increase:</span>
                  <span className="text-blue-400 font-semibold">40%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Profit Increase:</span>
                  <span className="text-blue-400 font-semibold">118%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Key Lesson:</span>
                  <span className="text-blue-400 font-semibold">Local-language, voice-enabled bots</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Nepal's AI Ecosystem */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">🇳🇵 Nepal's Emerging AI Ecosystem</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <h4 className="text-lg font-semibold text-white mb-4">Core Players</h4>
              <ul className="text-gray-300 space-y-2">
                <li>• Ncell, Nepal Telecom, Nepal Bank, Daraz</li>
                <li>• AI Research Hubs: NAAMII, AI Association of Nepal (AIAN)</li>
                <li>• Developers: Synapse Tech, Plex Bit Infosystems</li>
              </ul>
            </div>
            
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <h4 className="text-lg font-semibold text-white mb-4">Next Wave</h4>
              <ul className="text-gray-300 space-y-2">
                <li>• Student-led innovation in tourism</li>
                <li>• SME automation tools</li>
                <li>• Local governance solutions</li>
                <li>• Foundational ecosystem for local LLMs</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Strategic Recommendations */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">🎯 Strategic Recommendations for Nepali Innovators</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { 
                title: 'Prioritize Local Context', 
                description: 'Build in Nepali; focus on Viber/WhatsApp integration',
                icon: '🌐'
              },
              { 
                title: 'Adopt Frugal Innovation', 
                description: 'High impact via low-cost tech, as seen in India',
                icon: '💰'
              },
              { 
                title: 'Democratize Expertise', 
                description: 'Focus on agriculture, healthcare, and SMEs',
                icon: '🤝'
              },
              { 
                title: 'Tackle Data Scarcity', 
                description: 'Develop Nepali NLP datasets; collaborate with NAAMII & AIAN',
                icon: '📊'
              },
              { 
                title: 'Combine Domain + AI Skills', 
                description: 'Cross-train in ML, NLP, and local sector needs',
                icon: '🎓'
              },
              { 
                title: 'Focus Areas for Students', 
                description: 'AI for civic engagement, mental health, tourism, SME automation',
                icon: '🚀'
              }
            ].map((recommendation, index) => (
              <div key={index} className="bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-colors">
                <div className="text-2xl mb-3">{recommendation.icon}</div>
                <h4 className="text-white font-semibold mb-2">{recommendation.title}</h4>
                <p className="text-gray-300 text-sm">{recommendation.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Technology Stack Comparison */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">⚙️ Technology & Strategy Insights</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <h4 className="text-lg font-semibold text-white mb-4">Rule-Based Bots</h4>
              <ul className="text-gray-300 space-y-2 text-sm">
                <li>• Predictable, low-cost</li>
                <li>• Best for: FAQs</li>
                <li>• Use case: Basic customer support</li>
              </ul>
            </div>
            
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <h4 className="text-lg font-semibold text-white mb-4">AI-Powered Bots</h4>
              <ul className="text-gray-300 space-y-2 text-sm">
                <li>• Contextual understanding</li>
                <li>• Best for: Customer service</li>
                <li>• Use case: Complex queries</li>
              </ul>
            </div>
            
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <h4 className="text-lg font-semibold text-white mb-4">Generative AI</h4>
              <ul className="text-gray-300 space-y-2 text-sm">
                <li>• Human-like personalization</li>
                <li>• Best for: Advisory, learning, commerce</li>
                <li>• Use case: Advanced interactions</li>
              </ul>
            </div>
          </div>
        </div>

        {/* The Sajedar Opportunity */}
        <div className="bg-gradient-to-r from-indigo-900/30 to-purple-900/30 border border-indigo-500/30 rounded-2xl p-8 text-center">
          <div className="text-6xl text-indigo-400 mb-4">🚀</div>
          <h3 className="text-2xl font-bold text-white mb-4">The Sajedar Opportunity</h3>
          <blockquote className="text-xl text-gray-300 mb-6 italic">
            "Sajedar.com can position itself as Nepal's premier AI chatbot innovation lab — 
            bridging academia, startups, and enterprises. By showcasing these comprehensive 
            case studies, Sajedar can inspire a generation of Nepali innovators to build 
            context-aware, impact-driven conversational AI for national growth."
          </blockquote>
          <div className="text-white font-semibold">Sajedar Research Team</div>
          <div className="text-gray-400">Nepal's AI Innovation Platform</div>
        </div>
      </div>
    );
  }
};
