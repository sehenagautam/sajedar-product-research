import React from 'react';

export function SalesTacticsSection() {
  return (
    <section className="w-full bg-[#23243a] py-24 px-4 flex flex-col items-center border-t border-white/10">
      <div className="max-w-6xl w-full mx-auto flex flex-col gap-16">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center gap-4">
          <span className="text-emerald-500 text-xs font-bold uppercase tracking-widest mb-2 block">
            Advanced Sales AI
          </span>
          <h2 className="text-5xl md:text-6xl font-serif font-bold text-white mb-2 leading-tight tracking-tight">
            Your <span className="text-emerald-500">AI Salesperson</span> with Proven Tactics
          </h2>
          <p className="text-lg md:text-2xl text-gray-200 max-w-3xl mb-6">
            Transform your agent into a skilled salesperson that applies real sales psychology,
            handles objections, and closes deals. No more generic responses - just intelligent,
            persuasive conversations that convert.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
          {/* Left Side - Sales Tactics */}
          <div className="space-y-8">
            <div className="bg-gradient-to-r from-emerald-900/20 to-transparent border border-emerald-500/30 rounded-xl p-6 backdrop-blur-sm">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-emerald-500 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Objection Handling Mastery</h3>
                  <p className="text-gray-300">Advanced AI that recognizes and addresses common objections like pricing concerns, timing issues, and competitor comparisons with persuasive responses.</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-emerald-900/20 to-transparent border border-emerald-500/30 rounded-xl p-6 backdrop-blur-sm">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-emerald-500 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Upselling & Cross-selling</h3>
                  <p className="text-gray-300">Intelligent product recommendations based on customer needs, budget, and preferences. Seamlessly suggest upgrades and complementary services.</p>
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
                  <h3 className="text-xl font-semibold text-white mb-2">Urgency & Scarcity Tactics</h3>
                  <p className="text-gray-300">Create compelling urgency through limited-time offers, exclusive deals, and scarcity messaging that drives immediate action and decision-making.</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-emerald-900/20 to-transparent border border-emerald-500/30 rounded-xl p-6 backdrop-blur-sm">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-emerald-500 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Social Proof & Testimonials</h3>
                  <p className="text-gray-300">Leverage customer testimonials, case studies, and social proof to build trust and credibility during sales conversations.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Sales Conversation Demo */}
          <div className="relative">
            {/* Sales Chat Interface */}
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden transform -rotate-1 hover:rotate-0 transition-transform duration-500">
              {/* Chat Header */}
              <div className="bg-gradient-to-r from-orange-500 to-red-600 px-4 py-3 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm font-medium text-white">Sajedar Sales AI</div>
                    <div className="text-xs text-orange-100">Active Salesperson • Closing Deals</div>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-xs text-orange-100">Sales Mode</span>
                </div>
              </div>

              {/* Sales Conversation */}
              <div className="p-4 bg-gray-50 h-96 flex flex-col">
                <div className="flex-1 space-y-4 overflow-y-auto">
                  {/* Customer Initial Interest */}
                  <div className="flex justify-end">
                    <div className="bg-orange-500 text-white rounded-lg px-4 py-2 max-w-xs">
                      <p className="text-sm">I'm interested in your agent but it seems expensive. Can you explain the value?</p>
                      <span className="text-xs text-orange-100 block mt-1">2:15 PM</span>
                    </div>
                  </div>

                  {/* Sales AI Response - Value Proposition */}
                  <div className="flex justify-start">
                    <div className="bg-white text-gray-800 rounded-lg px-4 py-2 max-w-xs shadow-sm">
                      <p className="text-sm">Great question! Let me show you the ROI. Our clients typically see a 300% increase in lead generation and save 40+ hours per week on customer support.</p>
                      <p className="text-sm mt-2">Would you like to see a quick ROI calculator for your business?</p>
                      <span className="text-xs text-gray-500 block mt-1">2:15 PM</span>
                    </div>
                  </div>

                  {/* Customer Objection */}
                  <div className="flex justify-end">
                    <div className="bg-orange-500 text-white rounded-lg px-4 py-2 max-w-xs">
                      <p className="text-sm">That sounds good, but I'm not sure about the implementation time. We need something quick.</p>
                      <span className="text-xs text-orange-100 block mt-1">2:16 PM</span>
                    </div>
                  </div>

                  {/* Sales AI - Urgency & Solution */}
                  <div className="flex justify-start">
                    <div className="bg-white text-gray-800 rounded-lg px-4 py-2 max-w-xs shadow-sm">
                      <p className="text-sm">Perfect! We offer rapid deployment in just 48 hours. Plus, we have a special limited-time offer this week - 50% off setup fees for quick implementation.</p>
                      <p className="text-sm mt-2">This offer expires Friday. Should we get you started today?</p>
                      <span className="text-xs text-gray-500 block mt-1">2:16 PM</span>
                    </div>
                  </div>

                  {/* Customer Interest */}
                  <div className="flex justify-end">
                    <div className="bg-orange-500 text-white rounded-lg px-4 py-2 max-w-xs">
                      <p className="text-sm">That's interesting. What about support after implementation?</p>
                      <span className="text-xs text-orange-100 block mt-1">2:17 PM</span>
                    </div>
                  </div>

                  {/* Sales AI - Social Proof & Upselling */}
                  <div className="flex justify-start">
                    <div className="bg-white text-gray-800 rounded-lg px-4 py-2 max-w-xs shadow-sm">
                      <p className="text-sm">Excellent question! We provide 24/7 support, and 98% of our clients rate our support as "excellent."</p>
                      <p className="text-sm mt-2">I'd recommend our Premium plan which includes dedicated account manager and priority support. It's only $200 more per month but includes unlimited customizations.</p>
                      <span className="text-xs text-gray-500 block mt-1">2:17 PM</span>
                    </div>
                  </div>

                  {/* Quick Action Buttons */}
                  <div className="flex justify-start">
                    <div className="bg-white rounded-lg px-4 py-2 shadow-sm">
                      <div className="flex space-x-2">
                        <button className="bg-orange-500 text-white px-3 py-1 rounded-full text-xs hover:bg-orange-600 transition">
                          Book Demo Now
                        </button>
                        <button className="bg-green-500 text-white px-3 py-1 rounded-full text-xs hover:bg-green-600 transition">
                          Start Free Trial
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Customer Decision */}
                  <div className="flex justify-end">
                    <div className="bg-orange-500 text-white rounded-lg px-4 py-2 max-w-xs">
                      <p className="text-sm">Let's do the Premium plan. Can we start the trial today?</p>
                      <span className="text-xs text-orange-100 block mt-1">2:18 PM</span>
                    </div>
                  </div>

                  {/* Sales AI - Closing */}
                  <div className="flex justify-start">
                    <div className="bg-white text-gray-800 rounded-lg px-4 py-2 max-w-xs shadow-sm">
                      <p className="text-sm">Fantastic choice! 🎉 I'll set up your Premium trial right now. You'll get full access for 14 days, and I'll personally guide you through the setup.</p>
                      <p className="text-sm mt-2">Just need your email to get started. Ready to transform your customer engagement?</p>
                      <span className="text-xs text-gray-500 block mt-1">2:18 PM</span>
                    </div>
                  </div>
                </div>

                {/* Sales Metrics */}
                <div className="flex items-center justify-between mt-4 pt-3 border-t border-gray-200">
                  <div className="flex items-center space-x-4 text-xs">
                    <div className="flex items-center space-x-1">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-gray-600">Lead Qualified</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                      <span className="text-gray-600">Upsell Opportunity</span>
                    </div>
                  </div>
                  <div className="text-xs text-gray-500">Conversion Probability: 92%</div>
                </div>
              </div>
            </div>

            {/* Floating Sales Elements */}
            <div className="absolute -top-8 -right-8 space-y-2">
              {/* Sales Tactic Indicator */}
              <div className="bg-white rounded-lg p-3 shadow-lg border-l-4 border-orange-500 max-w-xs">
                <div className="text-xs text-orange-600 font-medium mb-1">Active Sales Tactic</div>
                <p className="text-xs text-gray-700">Urgency + Social Proof + Upselling</p>
              </div>

              {/* Conversion Rate */}
              <div className="bg-white rounded-lg p-3 shadow-lg border-l-4 border-green-500 max-w-xs">
                <div className="text-xs text-green-600 font-medium mb-1">Conversion Rate</div>
                <div className="text-lg font-bold text-green-600">92%</div>
                <p className="text-xs text-gray-600">vs 15% generic bots</p>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -left-4 w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center animate-pulse">
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </div>

            <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center animate-bounce">
              <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </div>
          </div>
        </div>

        {/* Sales Tactics Grid */}
        <div className="grid md:grid-cols-3 gap-6 mt-16">
          <div className="bg-gradient-to-br from-orange-900/20 to-red-900/20 border border-orange-500/30 rounded-xl p-6 backdrop-blur-sm">
            <div className="text-center">
              <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Objection Handling</h3>
              <p className="text-gray-300 text-sm">Recognizes and addresses 50+ common objections with persuasive, personalized responses that turn concerns into opportunities.</p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-green-900/20 to-emerald-900/20 border border-green-500/30 rounded-xl p-6 backdrop-blur-sm">
            <div className="text-center">
              <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Upselling Mastery</h3>
              <p className="text-gray-300 text-sm">Intelligent product recommendations that increase average order value by 35% through strategic upselling and cross-selling.</p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 border border-purple-500/30 rounded-xl p-6 backdrop-blur-sm">
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Urgency Creation</h3>
              <p className="text-gray-300 text-sm">Creates compelling urgency through limited-time offers, exclusive deals, and scarcity messaging that drives immediate action.</p>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-orange-900/30 to-red-900/30 border border-orange-500/30 rounded-xl p-8 backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Transform Your Chatbot into a Sales Superstar?</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Stop losing sales to generic responses. Equip your agent with proven sales tactics
              that convert prospects into customers and increase your revenue.
            </p>
            <a href="/?message=I want to deploy Sales AI in my chatbot.#contact" className="px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-lg transition-colors duration-200 mr-4">
              Deploy Sales AI
            </a>
            <a href="/?message=Please show a sales AI demo.#contact" className="px-8 py-4 bg-red-500 hover:bg-red-600 text-white font-bold rounded-lg transition-colors duration-200">
              Watch Sales Demo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
} 