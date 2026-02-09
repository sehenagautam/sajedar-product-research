import React from 'react';

export function ClientProfilingSection() {
  return (
    <section className="w-full bg-[#18181b] py-24 px-4 flex flex-col items-center border-t border-white/10">
      <div className="max-w-6xl w-full mx-auto flex flex-col gap-16">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center gap-4">
          <span className="text-emerald-500 text-xs font-bold uppercase tracking-widest mb-2 block">
            Intelligent Profiling
          </span>
          <h2 className="text-5xl md:text-6xl font-serif font-bold text-white mb-2 leading-tight tracking-tight">
            Know Your Customer <span className="text-emerald-500">Instantly</span>
          </h2>
          <p className="text-lg md:text-2xl text-gray-200 max-w-3xl mb-6">
            Sajedar builds a comprehensive profile of every user, tracking sentiment, intent, and purchase history
            to deliver hyper-personalized experiences.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
          {/* Left Side - Profile Card Mockup */}
          <div className="relative">
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-2xl p-6 shadow-2xl relative overflow-hidden">
              {/* Profile Header */}
              <div className="flex items-center space-x-4 mb-6 border-b border-gray-700 pb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-gray-700 to-gray-600 rounded-full flex items-center justify-center text-2xl font-bold text-white shadow-lg">
                  JD
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">John Doe</h3>
                  <div className="flex items-center space-x-2 mt-1">
                    <span className="text-gray-400 text-sm">@johndoe_123</span>
                    <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-500 text-xs font-medium border border-emerald-500/20">
                      High Value
                    </span>
                  </div>
                  <div className="flex items-center space-x-4 mt-3 text-sm text-gray-400">
                    <div className="flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      +1 (555) 123-4567
                    </div>
                    <div className="flex items-center">
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      john@example.com
                    </div>
                  </div>
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
                  <div className="text-gray-400 text-sm mb-1">Total Spent</div>
                  <div className="text-2xl font-bold text-white">$2,450</div>
                </div>
                <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
                  <div className="text-gray-400 text-sm mb-1">Orders</div>
                  <div className="text-2xl font-bold text-white">12</div>
                </div>
                <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
                  <div className="text-gray-400 text-sm mb-1">Sentiment</div>
                  <div className="text-lg font-bold text-emerald-500">Positive (8.5/10)</div>
                </div>
                <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
                  <div className="text-gray-400 text-sm mb-1">Intent</div>
                  <div className="text-lg font-bold text-emerald-500">Purchase Ready</div>
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 rounded-full bg-gray-800 text-gray-300 text-xs border border-gray-700">Returning Customer</span>
                <span className="px-3 py-1 rounded-full bg-gray-800 text-gray-300 text-xs border border-gray-700">Tech Enthusiast</span>
                <span className="px-3 py-1 rounded-full bg-gray-800 text-gray-300 text-xs border border-gray-700">Newsletter Subscriber</span>
              </div>

              {/* Decorative Blur */}
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl"></div>
            </div>
          </div>

          {/* Right Side - Features List */}
          <div className="space-y-8">
            <div className="bg-emerald-500/5 border border-emerald-500/30 rounded-xl p-6 backdrop-blur-sm">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-emerald-500 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Sentiment Analysis</h3>
                  <p className="text-gray-300">Understand how your customer feels. Sajedar detects mood shifts and adjusts its tone to match.</p>
                </div>
              </div>
            </div>

            <div className="bg-emerald-500/5 border border-emerald-500/30 rounded-xl p-6 backdrop-blur-sm">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-emerald-500 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Intent Recognition</h3>
                  <p className="text-gray-300">Predict what your customer wants before they say it. Purchase, Support, or Information - we know.</p>
                </div>
              </div>
            </div>

            <div className="bg-emerald-500/5 border border-emerald-500/30 rounded-xl p-6 backdrop-blur-sm">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-emerald-500 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Unified Customer View</h3>
                  <p className="text-gray-300">All data in one place. Past orders, conversation history, and preferences readily available for your agents.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute -top-4 -left-4 w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center animate-pulse">
          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
        </div>

        <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center animate-bounce">
          <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="text-center mt-16 max-w-6xl w-full mx-auto">
        <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-xl p-8 backdrop-blur-sm">
          <h3 className="text-2xl font-bold text-white mb-4">Ready to Build Comprehensive Customer Profiles?</h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Start profiling your customers automatically and unlock the power of personalized experiences.
            Drive higher engagement, better conversions, and stronger customer relationships.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="/?message=I want to start customer profiling in my chatbot.#contact" className="px-8 py-4 bg-emerald-500 hover:bg-emerald-600 text-white font-bold rounded-lg transition-colors duration-200 w-full sm:w-auto">
              Start Profiling
            </a>
            <a href="/?message=Please show a customer profiling demo.#contact" className="px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-lg transition-colors duration-200 w-full sm:w-auto">
              View Profile Demo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}