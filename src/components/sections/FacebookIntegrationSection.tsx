import React from 'react';

export function FacebookIntegrationSection() {
  return (
    <section className="w-full bg-[#23243a] py-24 px-4 flex flex-col items-center border-t border-white/10">
      <div className="max-w-6xl w-full mx-auto flex flex-col gap-16">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center gap-4">
          <span className="text-emerald-400 text-xs font-bold uppercase tracking-widest mb-2 block">
            Social Media Integration
          </span>
          <h2 className="text-5xl md:text-6xl font-serif font-bold text-white mb-2 leading-tight tracking-tight">
            Integrate Chatbot in Your <span className="text-emerald-400">Facebook Page</span>
          </h2>
          <p className="text-lg md:text-2xl text-gray-200 max-w-3xl mb-6">
            Engage customers <span className="text-emerald-400 font-bold">24/7 instantly</span> on your Facebook page. 
            Never miss a potential lead or customer inquiry again with automated responses and intelligent conversations.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
          {/* Left Side - Features */}
          <div className="space-y-8">
            <div className="bg-gradient-to-r from-emerald-900/20 to-transparent border border-emerald-500/30 rounded-xl p-6 backdrop-blur-sm">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-emerald-500 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">24/7 Instant Response</h3>
                  <p className="text-gray-300">Your chatbot responds immediately to customer messages, even when your team is offline. No more waiting for business hours.</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-emerald-900/20 to-transparent border border-emerald-500/30 rounded-xl p-6 backdrop-blur-sm">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-emerald-500 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Seamless Facebook Integration</h3>
                  <p className="text-gray-300">Connect directly to your Facebook page with one-click setup. Customers can start conversations naturally through Messenger.</p>
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
                  <h3 className="text-xl font-semibold text-white mb-2">Lead Generation & Qualification</h3>
                  <p className="text-gray-300">Automatically capture leads from Facebook conversations and qualify them based on their responses and engagement level.</p>
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
                  <h3 className="text-xl font-semibold text-white mb-2">Smart Handoff to Humans</h3>
                  <p className="text-gray-300">When conversations require human attention, seamlessly transfer to your team with full context and conversation history.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Facebook Messenger Mockup */}
          <div className="relative">
            {/* Facebook Messenger Container */}
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden transform -rotate-1 hover:rotate-0 transition-transform duration-500">
              {/* Messenger Header */}
              <div className="bg-blue-600 px-4 py-3 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-blue-600" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm font-medium text-white">Your Business Page</div>
                    <div className="text-xs text-blue-200">Online • Responds instantly</div>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-xs text-blue-200">AI Assistant</span>
                </div>
              </div>

              {/* Messenger Chat */}
              <div className="p-4 bg-gray-50 h-96 flex flex-col">
                {/* Chat Messages */}
                <div className="flex-1 space-y-4 overflow-y-auto">
                  {/* Customer Message */}
                  <div className="flex justify-end">
                    <div className="bg-blue-600 text-white rounded-lg px-4 py-2 max-w-xs">
                      <p className="text-sm">Hi! I'm interested in your chatbot services. Can you tell me more about pricing?</p>
                      <span className="text-xs text-blue-200 block mt-1">2:34 PM</span>
                    </div>
                  </div>

                  {/* Bot Response */}
                  <div className="flex justify-start">
                    <div className="bg-white text-gray-800 rounded-lg px-4 py-2 max-w-xs shadow-sm">
                      <p className="text-sm">Hello! Thanks for your interest in our chatbot services! 🤖</p>
                      <p className="text-sm mt-2">Our pricing starts at $299/month for basic packages. Would you like me to send you our detailed pricing guide?</p>
                      <span className="text-xs text-gray-500 block mt-1">2:34 PM</span>
                    </div>
                  </div>

                  {/* Customer Message */}
                  <div className="flex justify-end">
                    <div className="bg-blue-600 text-white rounded-lg px-4 py-2 max-w-xs">
                      <p className="text-sm">Yes, that would be great! Also, how long does it take to set up?</p>
                      <span className="text-xs text-blue-200 block mt-1">2:35 PM</span>
                    </div>
                  </div>

                  {/* Bot Response */}
                  <div className="flex justify-start">
                    <div className="bg-white text-gray-800 rounded-lg px-4 py-2 max-w-xs shadow-sm">
                      <p className="text-sm">Perfect! I'll send you our pricing guide right away. 📄</p>
                      <p className="text-sm mt-2">Setup typically takes 2-3 weeks from initial consultation to launch. We handle everything including Facebook integration!</p>
                      <span className="text-xs text-gray-500 block mt-1">2:35 PM</span>
                    </div>
                  </div>

                  {/* Quick Reply Buttons */}
                  <div className="flex justify-start">
                    <div className="bg-white rounded-lg px-4 py-2 shadow-sm">
                      <div className="flex space-x-2">
                        <button className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs hover:bg-blue-200 transition">
                          Book Consultation
                        </button>
                        <button className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-xs hover:bg-gray-200 transition">
                          View Portfolio
                        </button>
                      </div>
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
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center animate-pulse">
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
              </svg>
            </div>

            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center animate-bounce">
              <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-900/30 to-emerald-900/30 border border-blue-500/30 rounded-xl p-8 backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Engage Customers 24/7?</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Connect your chatbot to Facebook and start engaging customers instantly. 
              Never miss another opportunity to convert visitors into customers.
            </p>
            <button className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition-colors duration-200 mr-4">
              Connect to Facebook
            </button>
            <button className="px-8 py-4 bg-emerald-500 hover:bg-emerald-600 text-black font-bold rounded-lg transition-colors duration-200">
              See Live Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
} 