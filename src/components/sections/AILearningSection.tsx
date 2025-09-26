import React from 'react';

export function AILearningSection() {
  return (
    <section className="w-full bg-[#23243a] py-24 px-4 flex flex-col items-center border-t border-white/10">
      <div className="max-w-6xl w-full mx-auto flex flex-col gap-16">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center gap-4">
          <span className="text-emerald-400 text-xs font-bold uppercase tracking-widest mb-2 block">
            AI Learning & Adaptation
          </span>
          <h2 className="text-5xl md:text-6xl font-serif font-bold text-white mb-2 leading-tight tracking-tight">
            Your Chatbot <span className="text-emerald-400">Learns & Improves</span> with Every Conversation
          </h2>
          <p className="text-lg md:text-2xl text-gray-200 max-w-3xl mb-6">
            Watch your chatbot evolve and adapt its communication style to better achieve your business goals. 
            From collecting contact details to increasing engagement - it gets smarter with every interaction.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
          {/* Left Side - Features */}
          <div className="space-y-8">
            <div className="bg-gradient-to-r from-emerald-900/20 to-transparent border border-emerald-500/30 rounded-xl p-6 backdrop-blur-sm">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-emerald-500 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Conversational Intelligence</h3>
                  <p className="text-gray-300">Your chatbot learns from every conversation, understanding customer patterns, preferences, and pain points to provide better responses.</p>
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
                  <h3 className="text-xl font-semibold text-white mb-2">Goal-Oriented Learning</h3>
                  <p className="text-gray-300">Automatically adapts strategies to achieve your business objectives - whether it's lead generation, customer engagement, or sales conversion.</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-emerald-900/20 to-transparent border border-emerald-500/30 rounded-xl p-6 backdrop-blur-sm">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-emerald-500 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Performance Analytics</h3>
                  <p className="text-gray-300">Track improvement metrics, conversion rates, and engagement levels. See how your chatbot evolves and optimizes its approach over time.</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-emerald-900/20 to-transparent border border-emerald-500/30 rounded-xl p-6 backdrop-blur-sm">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-emerald-500 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Adaptive Strategies</h3>
                  <p className="text-gray-300">Dynamically adjusts conversation flow, timing, and approach based on customer responses and success patterns from previous interactions.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Learning Progress Visualization */}
          <div className="relative">
            {/* AI Learning Dashboard */}
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden transform -rotate-1 hover:rotate-0 transition-transform duration-500">
              {/* Dashboard Header */}
              <div className="bg-gradient-to-r from-orange-500 to-red-500 px-4 py-3 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm font-medium text-white">AI Learning Progress</div>
                    <div className="text-xs text-orange-100">Conversations: 1,247</div>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-xs text-orange-100">Learning</span>
                </div>
              </div>

              {/* Learning Metrics */}
              <div className="p-4 bg-gray-50">
                <div className="space-y-4">
                  {/* Goal Achievement Progress */}
                  <div>
                    <h4 className="text-sm font-medium text-gray-800 mb-3">Goal Achievement Progress</h4>
                    <div className="space-y-3">
                      <div>
                        <div className="flex justify-between text-xs text-gray-600 mb-1">
                          <span>Contact Collection</span>
                          <span>87%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-green-500 h-2 rounded-full" style={{ width: '87%' }}></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between text-xs text-gray-600 mb-1">
                          <span>Customer Engagement</span>
                          <span>92%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-blue-500 h-2 rounded-full" style={{ width: '92%' }}></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between text-xs text-gray-600 mb-1">
                          <span>Sales Conversion</span>
                          <span>78%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-purple-500 h-2 rounded-full" style={{ width: '78%' }}></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Learning Insights */}
                  <div className="bg-white border border-gray-200 rounded-lg p-3">
                    <h4 className="text-sm font-medium text-gray-800 mb-2">Recent Learning Insights</h4>
                    <div className="space-y-2 text-xs">
                      <div className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full mt-1.5"></div>
                        <span className="text-gray-700">Customers respond 40% better to personalized greetings</span>
                      </div>
                      <div className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-1.5"></div>
                        <span className="text-gray-700">Evening conversations have 25% higher engagement</span>
                      </div>
                      <div className="flex items-start space-x-2">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mt-1.5"></div>
                        <span className="text-gray-700">Product demos increase conversion by 60%</span>
                      </div>
                    </div>
                  </div>

                  {/* Conversation Evolution */}
                  <div>
                    <h4 className="text-sm font-medium text-gray-800 mb-2">Conversation Evolution</h4>
                    <div className="bg-white border border-gray-200 rounded-lg p-3">
                      <div className="flex items-center justify-between text-xs text-gray-600 mb-2">
                        <span>Week 1</span>
                        <span>Week 4</span>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                          <span className="text-xs text-gray-700">Basic responses</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                          <span className="text-xs text-gray-700">Context awareness</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                          <span className="text-xs text-gray-700">Goal-oriented conversations</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Adaptive Strategies */}
                  <div>
                    <h4 className="text-sm font-medium text-gray-800 mb-2">Current Strategy</h4>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-2 py-1 bg-green-100 text-green-800 rounded text-xs">Personalized Greetings</span>
                      <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs">Evening Optimization</span>
                      <span className="px-2 py-1 bg-purple-100 text-purple-800 rounded text-xs">Demo Offers</span>
                      <span className="px-2 py-1 bg-orange-100 text-orange-800 rounded text-xs">Follow-up Timing</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Learning Indicators */}
            <div className="absolute -top-8 -right-8 space-y-2">
              {/* Improvement Chart */}
              <div className="bg-white rounded-lg p-3 shadow-lg border-l-4 border-green-500 max-w-xs">
                <div className="text-xs text-green-600 font-medium mb-1">Improvement Trend</div>
                <div className="flex items-center space-x-1">
                  <div className="w-2 h-3 bg-green-300 rounded"></div>
                  <div className="w-2 h-4 bg-green-400 rounded"></div>
                  <div className="w-2 h-5 bg-green-500 rounded"></div>
                  <div className="w-2 h-6 bg-green-600 rounded"></div>
                  <div className="w-2 h-7 bg-green-700 rounded"></div>
                </div>
              </div>

              {/* Learning Milestone */}
              <div className="bg-white rounded-lg p-3 shadow-lg border-l-4 border-blue-500 max-w-xs">
                <div className="text-xs text-blue-600 font-medium mb-1">Learning Milestone</div>
                <p className="text-xs text-gray-700">Achieved 90% customer satisfaction through adaptive responses</p>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -left-4 w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center animate-pulse">
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>

            <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center animate-bounce">
              <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-orange-900/30 to-red-900/30 border border-orange-500/30 rounded-xl p-8 backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Watch Your Chatbot Evolve?</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Deploy your AI chatbot and watch it learn, adapt, and improve with every conversation. 
              See real-time progress as it achieves your business goals more effectively.
            </p>
            <a href="/?message=I want to deploy and start my chatbot's learning journey.#contact" className="px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-lg transition-colors duration-200 mr-4">
              Start Learning Journey
            </a>
            <a href="/?message=Please show an AI learning demo.#contact" className="px-8 py-4 bg-red-500 hover:bg-red-600 text-white font-bold rounded-lg transition-colors duration-200">
              View Learning Demo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
} 