import React from 'react';

export function ImageChatSection() {
  return (
    <section className="w-full bg-[#23243a] py-24 px-4 flex flex-col items-center border-t border-white/10">
      <div className="max-w-6xl w-full mx-auto flex flex-col gap-16">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center gap-4">
          <span className="text-emerald-500 text-xs font-bold uppercase tracking-widest mb-2 block">
            Rich Media Support
          </span>
          <h2 className="text-5xl md:text-6xl font-serif font-bold text-white mb-2 leading-tight tracking-tight">
            Send <span className="text-emerald-500">Images</span> in Your Chatbot
          </h2>
          <p className="text-lg md:text-2xl text-gray-200 max-w-3xl mb-6">
            Enhance customer engagement with rich media support. Send product images, screenshots,
            and visual content directly through your agent for a more interactive experience.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
          {/* Left Side - Features */}
          <div className="space-y-8">
            <div className="bg-gradient-to-r from-emerald-900/20 to-transparent border border-emerald-500/30 rounded-xl p-6 backdrop-blur-sm">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-emerald-500 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Product Showcase</h3>
                  <p className="text-gray-300">Automatically send product images, specifications, and visual catalogs to help customers make informed decisions.</p>
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
                  <h3 className="text-xl font-semibold text-white mb-2">Visual Support</h3>
                  <p className="text-gray-300">Share screenshots, diagrams, and visual guides to provide better customer support and troubleshooting assistance.</p>
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
                  <h3 className="text-xl font-semibold text-white mb-2">Smart Image Recognition</h3>
                  <p className="text-gray-300">AI-powered image analysis to understand customer needs and provide relevant visual responses automatically.</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-emerald-900/20 to-transparent border border-emerald-500/30 rounded-xl p-6 backdrop-blur-sm">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-emerald-500 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Mobile Optimized</h3>
                  <p className="text-gray-300">Perfect image display across all devices. Responsive design ensures optimal viewing on smartphones, tablets, and desktops.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Chat Interface with Images */}
          <div className="relative">
            {/* Chat Container */}
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden transform -rotate-1 hover:rotate-0 transition-transform duration-500">
              {/* Chat Header */}
              <div className="bg-gradient-to-r from-emerald-500 to-emerald-600 px-4 py-3 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm font-medium text-white">Sajedar AI Assistant</div>
                    <div className="text-xs text-emerald-100">Online • Sends images</div>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-xs text-emerald-100">Rich Media</span>
                </div>
              </div>

              {/* Chat Messages */}
              <div className="p-4 bg-gray-50 h-96 flex flex-col">
                <div className="flex-1 space-y-4 overflow-y-auto">
                  {/* Customer Message */}
                  <div className="flex justify-end">
                    <div className="bg-emerald-500 text-white rounded-lg px-4 py-2 max-w-xs">
                      <p className="text-sm">Can you show me your premium agent features?</p>
                      <span className="text-xs text-emerald-100 block mt-1">2:45 PM</span>
                    </div>
                  </div>

                  {/* Bot Response with Image */}
                  <div className="flex justify-start">
                    <div className="bg-white text-gray-800 rounded-lg px-4 py-2 max-w-xs shadow-sm">
                      <p className="text-sm mb-3">Absolutely! Here's a visual overview of our premium features:</p>
                      {/* Image Mockup */}
                      <div className="bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 rounded-lg p-3 mb-2">
                        <div className="bg-white rounded p-2 text-center">
                          <div className="w-full h-24 bg-gradient-to-r from-emerald-100 to-blue-100 rounded flex items-center justify-center">
                            <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                          </div>
                          <p className="text-xs text-gray-600 mt-1">Premium Features Overview</p>
                        </div>
                      </div>
                      <p className="text-xs text-gray-500">2:45 PM</p>
                    </div>
                  </div>

                  {/* Customer Message */}
                  <div className="flex justify-end">
                    <div className="bg-emerald-500 text-white rounded-lg px-4 py-2 max-w-xs">
                      <p className="text-sm">What about the pricing structure?</p>
                      <span className="text-xs text-emerald-100 block mt-1">2:46 PM</span>
                    </div>
                  </div>

                  {/* Bot Response with Pricing Image */}
                  <div className="flex justify-start">
                    <div className="bg-white text-gray-800 rounded-lg px-4 py-2 max-w-xs shadow-sm">
                      <p className="text-sm mb-3">Here's our transparent pricing structure:</p>
                      {/* Pricing Image Mockup */}
                      <div className="bg-gradient-to-br from-green-400 to-emerald-500 rounded-lg p-3 mb-2">
                        <div className="bg-white rounded p-2 text-center">
                          <div className="w-full h-20 bg-gradient-to-r from-green-50 to-emerald-50 rounded flex items-center justify-center">
                            <div className="text-center">
                              <div className="text-lg font-bold text-emerald-600">$299</div>
                              <div className="text-xs text-gray-600">Basic Plan</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <p className="text-xs text-gray-500">2:46 PM</p>
                    </div>
                  </div>

                  {/* Customer Sends Image */}
                  <div className="flex justify-end">
                    <div className="bg-emerald-500 text-white rounded-lg px-4 py-2 max-w-xs">
                      <p className="text-sm mb-2">I have a screenshot of my current setup</p>
                      {/* Customer Image Mockup */}
                      <div className="bg-white rounded p-2 mb-2">
                        <div className="w-full h-16 bg-gradient-to-r from-gray-100 to-gray-200 rounded flex items-center justify-center">
                          <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                        </div>
                        <p className="text-xs text-gray-500 text-center">screenshot.png</p>
                      </div>
                      <span className="text-xs text-emerald-100 block">2:47 PM</span>
                    </div>
                  </div>

                  {/* Bot Response to Image */}
                  <div className="flex justify-start">
                    <div className="bg-white text-gray-800 rounded-lg px-4 py-2 max-w-xs shadow-sm">
                      <p className="text-sm">Perfect! I can see your current setup. Based on this, I recommend our Enterprise plan for optimal integration.</p>
                      <p className="text-xs text-gray-500 mt-1">2:47 PM</p>
                    </div>
                  </div>
                </div>

                {/* Typing Indicator */}
                <div className="flex items-center space-x-2 mt-4">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                  <span className="text-xs text-gray-500">AI Assistant is typing...</span>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center animate-pulse">
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>

            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center animate-bounce">
              <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20 relative z-20 bg-emerald-900/30 p-10 rounded-2xl border border-emerald-500/20 backdrop-blur-sm">
          <h3 className="text-2xl font-bold text-white mb-4">Ready to Enhance Your Sales Agent with Images?</h3>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Give your AI agent eyes. Let it process customer photos, analyze receipts, and confirm visual details instantly.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <a href="/?message=I want to add image support to my sales agent.#contact" className="px-8 py-4 bg-emerald-500 hover:bg-emerald-600 text-black font-bold rounded-lg transition-colors duration-200 text-center w-full sm:w-auto">
              Enable Visual AI
            </a>
            <a href="/?message=Please show me an image-enabled agent demo.#contact" className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition-colors duration-200 text-center w-full sm:w-auto">
              See Image Demo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
} 