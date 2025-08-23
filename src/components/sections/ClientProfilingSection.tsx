import React from 'react';

export function ClientProfilingSection() {
  return (
    <section className="w-full bg-[#18181b] py-24 px-4 flex flex-col items-center border-t border-white/10">
      <div className="max-w-6xl w-full mx-auto flex flex-col gap-16">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center gap-4">
          <span className="text-emerald-400 text-xs font-bold uppercase tracking-widest mb-2 block">
            Intelligent Profiling
          </span>
          <h2 className="text-5xl md:text-6xl font-serif font-bold text-white mb-2 leading-tight tracking-tight">
            Advanced <span className="text-emerald-400">Client Profiling</span> for Personalized Experiences
          </h2>
          <p className="text-lg md:text-2xl text-gray-200 max-w-3xl mb-6">
            Build comprehensive customer profiles automatically through conversations. Understand preferences, 
            behavior patterns, and needs to deliver hyper-personalized experiences that drive engagement and conversions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
          {/* Left Side - Features */}
          <div className="space-y-8">
            <div className="bg-gradient-to-r from-emerald-900/20 to-transparent border border-emerald-500/30 rounded-xl p-6 backdrop-blur-sm">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-emerald-500 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Behavioral Analysis</h3>
                  <p className="text-gray-300">Track customer interactions, preferences, and decision-making patterns to create detailed behavioral profiles for targeted engagement.</p>
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
                  <h3 className="text-xl font-semibold text-white mb-2">Preference Mapping</h3>
                  <p className="text-gray-300">Automatically identify customer preferences, interests, and pain points to tailor product recommendations and communication strategies.</p>
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
                  <h3 className="text-xl font-semibold text-white mb-2">Predictive Insights</h3>
                  <p className="text-gray-300">Use AI-powered analytics to predict customer needs, buying patterns, and optimal engagement timing for maximum conversion potential.</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-emerald-900/20 to-transparent border border-emerald-500/30 rounded-xl p-6 backdrop-blur-sm">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-emerald-500 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Segmentation & Targeting</h3>
                  <p className="text-gray-300">Automatically segment customers based on behavior, demographics, and preferences for highly targeted marketing campaigns and personalized experiences.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Client Profile Visualization */}
          <div className="relative">
            {/* Client Profile Dashboard */}
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden transform rotate-1 hover:rotate-0 transition-transform duration-500">
              {/* Dashboard Header */}
              <div className="bg-gradient-to-r from-teal-500 to-cyan-600 px-4 py-3 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm font-medium text-white">Client Profile</div>
                    <div className="text-xs text-teal-100">Sarah Johnson - Premium Customer</div>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-xs text-teal-100">Active</span>
                </div>
              </div>

              {/* Profile Content */}
              <div className="p-4 bg-gray-50">
                <div className="space-y-4">
                  {/* Basic Info */}
                  <div className="bg-white border border-gray-200 rounded-lg p-3">
                    <h4 className="text-sm font-medium text-gray-800 mb-2">Customer Information</h4>
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <div>
                        <span className="text-gray-500">Name:</span>
                        <span className="text-gray-800 ml-1">Sarah Johnson</span>
                      </div>
                      <div>
                        <span className="text-gray-500">Email:</span>
                        <span className="text-gray-800 ml-1">sarah@techcorp.com</span>
                      </div>
                      <div>
                        <span className="text-gray-500">Company:</span>
                        <span className="text-gray-800 ml-1">TechCorp Inc</span>
                      </div>
                      <div>
                        <span className="text-gray-500">Role:</span>
                        <span className="text-gray-800 ml-1">CTO</span>
                      </div>
                    </div>
                  </div>

                  {/* Behavioral Insights */}
                  <div className="bg-white border border-gray-200 rounded-lg p-3">
                    <h4 className="text-sm font-medium text-gray-800 mb-2">Behavioral Insights</h4>
                    <div className="space-y-2 text-xs">
                      <div className="flex items-center justify-between">
                        <span className="text-gray-600">Engagement Level:</span>
                        <span className="px-2 py-1 bg-green-100 text-green-800 rounded text-xs">High</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-600">Preferred Time:</span>
                        <span className="text-gray-800">Evening (6-9 PM)</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-600">Communication Style:</span>
                        <span className="text-gray-800">Direct & Technical</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-600">Decision Maker:</span>
                        <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs">Yes</span>
                      </div>
                    </div>
                  </div>

                  {/* Preferences */}
                  <div className="bg-white border border-gray-200 rounded-lg p-3">
                    <h4 className="text-sm font-medium text-gray-800 mb-2">Preferences & Interests</h4>
                    <div className="flex flex-wrap gap-1">
                      <span className="px-2 py-1 bg-teal-100 text-teal-800 rounded text-xs">Enterprise Solutions</span>
                      <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs">AI Integration</span>
                      <span className="px-2 py-1 bg-purple-100 text-purple-800 rounded text-xs">Custom Development</span>
                      <span className="px-2 py-1 bg-orange-100 text-orange-800 rounded text-xs">Technical Support</span>
                    </div>
                  </div>

                  {/* Interaction History */}
                  <div className="bg-white border border-gray-200 rounded-lg p-3">
                    <h4 className="text-sm font-medium text-gray-800 mb-2">Recent Interactions</h4>
                    <div className="space-y-2 text-xs">
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-gray-700">Product demo request - 2 days ago</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span className="text-gray-700">Pricing inquiry - 1 week ago</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                        <span className="text-gray-700">Technical consultation - 2 weeks ago</span>
                      </div>
                    </div>
                  </div>

                  {/* Predictive Score */}
                  <div className="bg-gradient-to-r from-teal-50 to-cyan-50 border border-teal-200 rounded-lg p-3">
                    <h4 className="text-sm font-medium text-gray-800 mb-2">Conversion Probability</h4>
                    <div className="flex items-center space-x-3">
                      <div className="flex-1">
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-gradient-to-r from-teal-500 to-cyan-500 h-2 rounded-full" style={{ width: '85%' }}></div>
                        </div>
                      </div>
                      <span className="text-sm font-bold text-teal-600">85%</span>
                    </div>
                    <p className="text-xs text-gray-600 mt-1">High probability based on engagement and decision-making patterns</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Profile Cards */}
            <div className="absolute -top-8 -right-8 space-y-2">
              {/* Customer Segment */}
              <div className="bg-white rounded-lg p-3 shadow-lg border-l-4 border-teal-500 max-w-xs">
                <div className="text-xs text-teal-600 font-medium mb-1">Customer Segment</div>
                <p className="text-xs text-gray-700">Enterprise Decision Maker - High Value</p>
              </div>

              {/* Engagement Score */}
              <div className="bg-white rounded-lg p-3 shadow-lg border-l-4 border-green-500 max-w-xs">
                <div className="text-xs text-green-600 font-medium mb-1">Engagement Score</div>
                <div className="flex items-center space-x-1">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -left-4 w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center animate-pulse">
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>

            <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-cyan-500 rounded-full flex items-center justify-center animate-bounce">
              <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-teal-900/30 to-cyan-900/30 border border-teal-500/30 rounded-xl p-8 backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Build Comprehensive Customer Profiles?</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Start profiling your customers automatically and unlock the power of personalized experiences. 
              Drive higher engagement, better conversions, and stronger customer relationships.
            </p>
            <button className="px-8 py-4 bg-teal-500 hover:bg-teal-600 text-white font-bold rounded-lg transition-colors duration-200 mr-4">
              Start Profiling
            </button>
            <button className="px-8 py-4 bg-cyan-500 hover:bg-cyan-600 text-white font-bold rounded-lg transition-colors duration-200">
              View Profile Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
} 