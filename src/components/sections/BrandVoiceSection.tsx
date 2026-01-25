import React from 'react';

export function BrandVoiceSection() {
  return (
    <section className="w-full bg-[#23243a] py-7 px-4 flex flex-col items-center border-t border-white/10">
      <div className="max-w-6xl w-full mx-auto flex flex-col gap-5">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center gap-4">
          <span className="text-emerald-400 text-xs font-bold uppercase tracking-widest mb-2 block">
            Brand Customization
          </span>
          <h2 className="text-5xl md:text-6xl font-serif font-bold text-white mb-2 leading-tight tracking-tight">
            Tune Your Chatbot to Your <span className="text-emerald-400">Brand Voice</span>
          </h2>
          <p className="text-lg md:text-2xl text-gray-200 max-w-3xl mb-6">
            Customize your chatbot's personality, tone, and communication style to perfectly match your brand.
            From professional and formal to friendly and casual - your agent becomes an extension of your brand identity.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-4 items-center w-full">
          {/* Left Side - Features */}
          <div className="space-y-3">
            <div className="bg-gradient-to-r from-emerald-900/20 to-transparent border border-emerald-500/30 rounded-xl p-3 backdrop-blur-sm">
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center">
                  <svg className="w-4 h-4 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">Personality Customization</h3>
                  <p className="text-gray-300 text-sm">Define your chatbot's character - friendly, professional, witty, or formal. Create a unique personality that resonates with your target audience.</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-emerald-900/20 to-transparent border border-emerald-500/30 rounded-xl p-3 backdrop-blur-sm">
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center">
                  <svg className="w-4 h-4 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">Tone & Style Matching</h3>
                  <p className="text-gray-300 text-sm">Match your brand's communication style - casual and approachable, or sophisticated and authoritative. Perfect alignment with your brand guidelines.</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-emerald-900/20 to-transparent border border-emerald-500/30 rounded-xl p-3 backdrop-blur-sm">
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center">
                  <svg className="w-4 h-4 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">Industry-Specific Language</h3>
                  <p className="text-gray-300 text-sm">Use industry-specific terminology, jargon, and communication patterns. Your agent speaks the language your customers expect and understand.</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-emerald-900/20 to-transparent border border-emerald-500/30 rounded-xl p-3 backdrop-blur-sm">
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center">
                  <svg className="w-4 h-4 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">Dynamic Adaptation</h3>
                  <p className="text-gray-300 text-sm">Your agent adapts its communication style based on customer context, mood, and interaction history for personalized experiences.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Brand Voice Examples */}
          <div className="relative">
            {/* Brand Voice Tuning Interface */}
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden transform -rotate-1 hover:rotate-0 transition-transform duration-500">
              {/* Interface Header */}
              <div className="bg-gradient-to-r from-purple-500 to-pink-500 px-4 py-3 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm font-medium text-white">Brand Voice Tuner</div>
                    <div className="text-xs text-purple-100">Customize personality & style</div>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-xs text-purple-100">Live Preview</span>
                </div>
              </div>

              {/* Tuning Controls */}
              <div className="p-3 bg-gray-50">
                <div className="space-y-2">
                  {/* Personality Slider */}
                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-2 block">Personality Type</label>
                    <div className="flex space-x-2 mb-2">
                      <span className="text-xs text-gray-500">Professional</span>
                      <span className="text-xs text-gray-500 ml-auto">Friendly</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-gradient-to-r from-blue-500 to-emerald-500 h-2 rounded-full" style={{ width: '65%' }}></div>
                    </div>
                  </div>

                  {/* Tone Slider */}
                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-2 block">Communication Tone</label>
                    <div className="flex space-x-2 mb-2">
                      <span className="text-xs text-gray-500">Formal</span>
                      <span className="text-xs text-gray-500 ml-auto">Casual</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full" style={{ width: '40%' }}></div>
                    </div>
                  </div>

                  {/* Industry Selector */}
                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-2 block">Industry Style</label>
                    <select className="w-full p-2 border border-gray-300 rounded-lg text-sm">
                      <option>Technology & SaaS</option>
                      <option>Healthcare</option>
                      <option>Finance</option>
                      <option>E-commerce</option>
                      <option>Education</option>
                    </select>
                  </div>

                  {/* Live Preview */}
                  <div className="bg-white border border-gray-200 rounded-lg p-3">
                    <h4 className="text-sm font-medium text-gray-800 mb-2">Live Preview</h4>
                    <div className="bg-gray-50 rounded p-3 text-sm">
                      <p className="text-gray-700">
                        "Greetings! I'm here to assist you with our premium agent solutions.
                        How may I be of service today? I'm equipped to address your inquiries
                        regarding our enterprise-grade AI capabilities."
                      </p>
                    </div>
                  </div>

                  {/* Quick Presets */}
                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-2 block">Quick Presets</label>
                    <div className="flex space-x-2">
                      <button className="px-3 py-1 bg-blue-100 text-blue-800 rounded text-xs hover:bg-blue-200">Corporate</button>
                      <button className="px-3 py-1 bg-green-100 text-green-800 rounded text-xs hover:bg-green-200">Startup</button>
                      <button className="px-3 py-1 bg-purple-100 text-purple-800 rounded text-xs hover:bg-purple-200">Creative</button>
                      <button className="px-3 py-1 bg-orange-100 text-orange-800 rounded text-xs hover:bg-orange-200">Casual</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Example Chat Bubbles */}
            <div className="absolute -top-8 -right-8 space-y-2">
              {/* Professional Style */}
              <div className="bg-white rounded-lg p-3 shadow-lg border-l-4 border-blue-500 max-w-xs">
                <div className="text-xs text-blue-600 font-medium mb-1">Professional</div>
                <p className="text-xs text-gray-700">"I understand your requirements. Let me provide you with a comprehensive solution tailored to your business needs."</p>
              </div>

              {/* Friendly Style */}
              <div className="bg-white rounded-lg p-3 shadow-lg border-l-4 border-green-500 max-w-xs">
                <div className="text-xs text-green-600 font-medium mb-1">Friendly</div>
                <p className="text-xs text-gray-700">"Hey there! 👋 I'd love to help you find the perfect solution. What are you looking for today?"</p>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -left-4 w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center animate-pulse">
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
              </svg>
            </div>

            <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-pink-500 rounded-full flex items-center justify-center animate-bounce">
              <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-5">
          <div className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 border border-purple-500/30 rounded-xl p-4 backdrop-blur-sm">
            <h3 className="text-lg font-bold text-white mb-2">Ready to Create Your Perfect Brand Voice?</h3>
            <p className="text-gray-300 mb-3 max-w-2xl mx-auto text-sm">
              Customize your chatbot's personality and communication style to perfectly match your brand identity.
              Create authentic, engaging conversations that reflect your unique voice.
            </p>
            <div className="flex flex-col sm:flex-row gap-2 justify-center">
              <a href="/?message=I want to customize my chatbot's brand voice.#contact" className="px-6 py-2 bg-purple-500 hover:bg-purple-600 text-white font-bold rounded-lg transition-colors duration-200">
                Start Customizing
              </a>
              <a href="/?message=Please show a brand voice customization demo.#contact" className="px-6 py-2 bg-pink-500 hover:bg-pink-600 text-white font-bold rounded-lg transition-colors duration-200">
                Voice Demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 