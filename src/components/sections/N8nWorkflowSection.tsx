import React from 'react';

export function N8nWorkflowSection() {
  return (
    <section className="w-full bg-[#18181b] py-24 px-4 flex flex-col items-center border-t border-white/10">
      <div className="max-w-6xl w-full mx-auto flex flex-col gap-16">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center gap-4">
          <span className="text-emerald-400 text-xs font-bold uppercase tracking-widest mb-2 block">
            Visual AI Development
          </span>
          <h2 className="text-5xl md:text-6xl font-serif font-bold text-white mb-2 leading-tight tracking-tight">
            We Build <span className="text-emerald-400">Advanced AI Agents</span> Using n8n & Python
          </h2>
          <p className="text-lg md:text-2xl text-gray-200 max-w-3xl mb-6">
            Sajedar uses <span className="text-emerald-400 font-bold">n8n for rapid prototyping</span> and
            <span className="text-emerald-400 font-bold"> Python for long‑term, advanced solutions</span>
            at an <span className="text-emerald-400 font-bold">optimized price</span>. We connect multiple AI services, orchestrate complex
            decision-making processes, and build intelligent automation systems that handle your most challenging business scenarios.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
          {/* Left Side - n8n Features */}
          <div className="space-y-8">
            <div className="bg-gradient-to-r from-emerald-900/20 to-transparent border border-emerald-500/30 rounded-xl p-6 backdrop-blur-sm">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-emerald-500 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Advanced Workflow Architecture</h3>
                  <p className="text-gray-300">We design complex AI workflows using n8n's visual builder. Our experts create sophisticated node connections that orchestrate multiple AI services, APIs, and databases for enterprise-grade automation.</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-emerald-900/20 to-transparent border border-emerald-500/30 rounded-xl p-6 backdrop-blur-sm">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-emerald-500 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Multi-AI Service Orchestration</h3>
                  <p className="text-gray-300">We integrate and orchestrate multiple AI services including OpenAI, Claude, Google AI, and custom models. Our agents intelligently route requests, combine AI capabilities, and make sophisticated decisions across multiple AI platforms.</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-emerald-900/20 to-transparent border border-emerald-500/30 rounded-xl p-6 backdrop-blur-sm">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-emerald-500 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Intelligent Event-Driven Agents</h3>
                  <p className="text-gray-300">We build AI agents that respond intelligently to real-time events, schedules, and webhooks. Our advanced automation systems handle complex customer interactions, process data streams, and execute sophisticated business workflows with AI-powered decision making.</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-emerald-900/20 to-transparent border border-emerald-500/30 rounded-xl p-6 backdrop-blur-sm">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-emerald-500 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Enterprise AI Agent Development</h3>
                  <p className="text-gray-300">We develop sophisticated AI agents using n8n's visual interface, eliminating the need for complex coding. Our team configures advanced AI models, designs complex data flows, and deploys enterprise-grade agents that scale with your business needs.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - n8n Workflow Demo */}
          <div className="relative">
            {/* n8n Workflow Interface */}
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden transform -rotate-1 hover:rotate-0 transition-transform duration-500">
              {/* Workflow Header */}
              <div className="bg-gradient-to-r from-purple-500 to-pink-600 px-4 py-3 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm font-medium text-white">Sajedar n8n Agent Builder</div>
                    <div className="text-xs text-purple-100">Advanced Workflows • Multi-AI Orchestration</div>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-xs text-purple-100">Live</span>
                </div>
              </div>

              {/* Workflow Canvas */}
              <div className="p-4 bg-gray-50 h-96 flex flex-col">
                <div className="flex-1 relative">
                  {/* Workflow Nodes */}
                  <div className="absolute inset-0">
                    {/* Trigger Node */}
                    <div className="absolute top-4 left-4 bg-blue-500 text-white rounded-lg p-3 shadow-lg">
                      <div className="flex items-center space-x-2">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                        <span className="text-xs font-medium">Webhook Trigger</span>
                      </div>
                      <div className="text-xs text-blue-100 mt-1">Customer Message</div>
                    </div>

                    {/* Connection Line */}
                    <div className="absolute top-16 left-32 w-16 h-0.5 bg-gray-400"></div>

                    {/* AI Processing Node */}
                    <div className="absolute top-4 left-52 bg-purple-500 text-white rounded-lg p-3 shadow-lg">
                      <div className="flex items-center space-x-2">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                        </svg>
                        <span className="text-xs font-medium">AI Analysis</span>
                      </div>
                      <div className="text-xs text-purple-100 mt-1">OpenAI GPT-4</div>
                    </div>

                    {/* Connection Line */}
                    <div className="absolute top-16 left-80 w-16 h-0.5 bg-gray-400"></div>

                    {/* Database Node */}
                    <div className="absolute top-4 left-100 bg-green-500 text-white rounded-lg p-3 shadow-lg">
                      <div className="flex items-center space-x-2">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
                        </svg>
                        <span className="text-xs font-medium">Database</span>
                      </div>
                      <div className="text-xs text-green-100 mt-1">Customer Profile</div>
                    </div>

                    {/* Connection Line */}
                    <div className="absolute top-16 left-128 w-16 h-0.5 bg-gray-400"></div>

                    {/* Response Node */}
                    <div className="absolute top-4 left-148 bg-orange-500 text-white rounded-lg p-3 shadow-lg">
                      <div className="flex items-center space-x-2">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                        </svg>
                        <span className="text-xs font-medium">Response</span>
                      </div>
                      <div className="text-xs text-orange-100 mt-1">Send Message</div>
                    </div>

                    {/* Parallel Processing */}
                    <div className="absolute top-32 left-52 bg-indigo-500 text-white rounded-lg p-3 shadow-lg">
                      <div className="flex items-center space-x-2">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                        </svg>
                        <span className="text-xs font-medium">Analytics</span>
                      </div>
                      <div className="text-xs text-indigo-100 mt-1">Track Interaction</div>
                    </div>

                    {/* Error Handling */}
                    <div className="absolute top-32 left-100 bg-red-500 text-white rounded-lg p-3 shadow-lg">
                      <div className="flex items-center space-x-2">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                        </svg>
                        <span className="text-xs font-medium">Error Handler</span>
                      </div>
                      <div className="text-xs text-red-100 mt-1">Fallback Response</div>
                    </div>
                  </div>

                  {/* Workflow Controls */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="bg-white rounded-lg p-3 shadow-lg border border-gray-200">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4 text-xs">
                          <div className="flex items-center space-x-1">
                            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                            <span className="text-gray-600">Active</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                            <span className="text-gray-600">6 Nodes</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                            <span className="text-gray-600">AI Powered</span>
                          </div>
                        </div>
                        <div className="flex space-x-2">
                          <button className="px-3 py-1 bg-green-500 text-white rounded text-xs hover:bg-green-600 transition">
                            Deploy
                          </button>
                          <button className="px-3 py-1 bg-gray-200 text-gray-700 rounded text-xs hover:bg-gray-300 transition">
                            Test
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Workflow Elements */}
            <div className="absolute -top-8 -right-8 space-y-2">
              {/* AI Services */}
              <div className="bg-white rounded-lg p-3 shadow-lg border-l-4 border-purple-500 max-w-xs">
                <div className="text-xs text-purple-600 font-medium mb-1">AI Services</div>
                <p className="text-xs text-gray-700">OpenAI, Claude, Google AI, Custom Models</p>
              </div>

              {/* Workflow Stats */}
              <div className="bg-white rounded-lg p-3 shadow-lg border-l-4 border-green-500 max-w-xs">
                <div className="text-xs text-green-600 font-medium mb-1">Workflow Stats</div>
                <p className="text-xs text-gray-700">6 Nodes • 5 Connections • 99.9% Uptime</p>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -left-4 w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center animate-pulse">
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
              </svg>
            </div>

            <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-pink-500 rounded-full flex items-center justify-center animate-bounce">
              <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
          </div>
        </div>

        {/* n8n Features Grid */}
        <div className="grid md:grid-cols-3 gap-6 mt-16">
          <div className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 border border-purple-500/30 rounded-xl p-6 backdrop-blur-sm">
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                </svg>
              </div>
                             <h3 className="text-lg font-semibold text-white mb-2">Advanced Architecture</h3>
               <p className="text-gray-300 text-sm">We design sophisticated AI workflows using n8n's visual builder with enterprise-grade node connections and orchestration.</p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-pink-900/20 to-red-900/20 border border-pink-500/30 rounded-xl p-6 backdrop-blur-sm">
            <div className="text-center">
              <div className="w-12 h-12 bg-pink-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
                             <h3 className="text-lg font-semibold text-white mb-2">Multi-AI Orchestration</h3>
               <p className="text-gray-300 text-sm">We orchestrate multiple AI services including OpenAI, Claude, Google AI, and custom models for intelligent decision-making.</p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-red-900/20 to-orange-900/20 border border-red-500/30 rounded-xl p-6 backdrop-blur-sm">
            <div className="text-center">
              <div className="w-12 h-12 bg-red-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
                             <h3 className="text-lg font-semibold text-white mb-2">Intelligent Automation</h3>
               <p className="text-gray-300 text-sm">We build AI agents that respond intelligently to events, schedules, and webhooks with sophisticated decision-making capabilities.</p>
            </div>
          </div>
        </div>

        {/* AI Agent Templates */}
        <div className="grid md:grid-cols-2 gap-6 mt-12">
          <div className="bg-white/5 rounded-lg p-6 border border-white/10">
            <h4 className="text-lg font-semibold text-white mb-3">🤖 Customer Support Agent</h4>
            <p className="text-sm text-gray-300 mb-4">Automated customer service with AI-powered responses, ticket routing, and escalation handling.</p>
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 bg-purple-500/20 text-purple-300 rounded text-xs">OpenAI GPT-4</span>
              <span className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded text-xs">Zendesk</span>
              <span className="px-2 py-1 bg-green-500/20 text-green-300 rounded text-xs">Slack</span>
            </div>
          </div>
          <div className="bg-white/5 rounded-lg p-6 border border-white/10">
            <h4 className="text-lg font-semibold text-white mb-3">📊 Data Analysis Agent</h4>
            <p className="text-sm text-gray-300 mb-4">Intelligent data processing, analysis, and reporting with automated insights generation.</p>
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 bg-purple-500/20 text-purple-300 rounded text-xs">Claude</span>
              <span className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded text-xs">PostgreSQL</span>
              <span className="px-2 py-1 bg-green-500/20 text-green-300 rounded text-xs">Tableau</span>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 border border-purple-500/30 rounded-xl p-8 backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-white mb-4">Ready for Advanced AI Agents Built with n8n?</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Let Sajedar build sophisticated AI automation workflows for your business. We connect multiple AI services, 
              create intelligent agents, and automate complex business processes using n8n's powerful platform.
            </p>
            <a href="/?message=I want to build an advanced AI agent with n8n.#contact" className="px-8 py-4 bg-emerald-500 hover:bg-emerald-600 text-white font-bold rounded-lg transition-colors duration-200">Start Building</a>
            <a href="/?message=Please send me your AI agent templates.#contact" className="px-8 py-4 bg-emerald-500 hover:bg-emerald-600 text-white font-bold rounded-lg transition-colors duration-200">View Templates</a>
          </div>
        </div>
      </div>
    </section>
  );
} 