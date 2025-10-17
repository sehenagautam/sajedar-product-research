import React from 'react';

export const hospitalityAutomationCaseStudy = {
  slug: 'hospitality-automation-case-study',
  title: 'Hospitality Automation Suite',
  description: 'Transforming guest experience with AI-powered hotel management and personalized service automation.',
  industry: 'Hospitality',
  duration: '5 months',
  results: ['50% increase in guest satisfaction', '30% reduction in operational costs', '95% automation rate'],
  featured: false,
  date: new Date('2024-10-03'),
  component: function HospitalityAutomationCaseStudy() {
    return (
      <div className="w-full bg-gradient-to-br from-purple-900/20 to-pink-900/20 border border-purple-500/30 rounded-3xl p-8 md:p-12 backdrop-blur-sm">
        {/* Case Study Header with Hospitality Theme */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 bg-purple-500/20 text-purple-300 rounded-full text-sm font-medium mb-4">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" />
            </svg>
            Hospitality Case Study
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">
            AI-Powered Hotel Automation
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Revolutionizing hospitality with intelligent guest services, 
            automated operations, and personalized experiences that exceed expectations.
          </p>
        </div>

        {/* Key Results with Animated Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="group bg-gradient-to-br from-emerald-900/30 to-green-900/30 border border-emerald-500/30 rounded-2xl p-6 text-center hover:scale-105 transition-transform duration-300">
            <div className="text-4xl font-bold text-emerald-400 mb-2 group-hover:text-emerald-300">50%</div>
            <div className="text-sm text-gray-300">Guest Satisfaction</div>
            <div className="text-xs text-emerald-400 mt-1">↑ Improvement</div>
          </div>
          <div className="group bg-gradient-to-br from-blue-900/30 to-cyan-900/30 border border-blue-500/30 rounded-2xl p-6 text-center hover:scale-105 transition-transform duration-300">
            <div className="text-4xl font-bold text-blue-400 mb-2 group-hover:text-blue-300">30%</div>
            <div className="text-sm text-gray-300">Cost Reduction</div>
            <div className="text-xs text-blue-400 mt-1">↓ Operational</div>
          </div>
          <div className="group bg-gradient-to-br from-purple-900/30 to-pink-900/30 border border-purple-500/30 rounded-2xl p-6 text-center hover:scale-105 transition-transform duration-300">
            <div className="text-4xl font-bold text-purple-400 mb-2 group-hover:text-purple-300">95%</div>
            <div className="text-sm text-gray-300">Automation Rate</div>
            <div className="text-xs text-purple-400 mt-1">⚡ Efficiency</div>
          </div>
        </div>

        {/* Challenge & Solution in Card Layout */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <div className="bg-gradient-to-br from-red-900/20 to-orange-900/20 border border-red-500/30 rounded-2xl p-8">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-red-500 rounded-xl flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-red-300">Hotel Challenges</h3>
            </div>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="w-2 h-2 bg-red-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <div>
                  <div className="text-white font-semibold">Manual Operations</div>
                  <div className="text-gray-300 text-sm">Time-consuming check-in/out processes</div>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-red-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <div>
                  <div className="text-white font-semibold">Guest Experience</div>
                  <div className="text-gray-300 text-sm">Inconsistent service quality</div>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-red-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <div>
                  <div className="text-white font-semibold">Staff Overhead</div>
                  <div className="text-gray-300 text-sm">High operational costs</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-emerald-900/20 to-teal-900/20 border border-emerald-500/30 rounded-2xl p-8">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-emerald-500 rounded-xl flex items-center justify-center mr-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-emerald-300">AI Solutions</h3>
            </div>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <div>
                  <div className="text-white font-semibold">Smart Check-in</div>
                  <div className="text-gray-300 text-sm">Automated guest registration</div>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <div>
                  <div className="text-white font-semibold">Personalized Service</div>
                  <div className="text-gray-300 text-sm">AI-powered guest preferences</div>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                <div>
                  <div className="text-white font-semibold">Operational Efficiency</div>
                  <div className="text-gray-300 text-sm">Automated task management</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Implementation Phases */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Implementation Phases</h3>
          <div className="grid md:grid-cols-5 gap-4">
            {[
              { phase: 'Phase 1', title: 'Analysis', duration: '2 weeks', description: 'Hotel operations audit' },
              { phase: 'Phase 2', title: 'Design', duration: '3 weeks', description: 'AI system architecture' },
              { phase: 'Phase 3', title: 'Development', duration: '8 weeks', description: 'Core AI implementation' },
              { phase: 'Phase 4', title: 'Testing', duration: '4 weeks', description: 'System validation' },
              { phase: 'Phase 5', title: 'Deployment', duration: '2 weeks', description: 'Live implementation' }
            ].map((phase, index) => (
              <div key={index} className="bg-white/5 border border-white/10 rounded-xl p-4 text-center relative">
                <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm mx-auto mb-3">
                  {index + 1}
                </div>
                <div className="text-purple-300 font-semibold text-sm mb-1">{phase.phase}</div>
                <div className="text-white font-bold mb-1">{phase.title}</div>
                <div className="text-gray-400 text-xs mb-2">{phase.duration}</div>
                <div className="text-gray-300 text-xs">{phase.description}</div>
                {index < 4 && (
                  <div className="hidden md:block absolute top-1/2 -right-2 w-4 h-0.5 bg-purple-500 transform -translate-y-1/2"></div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Results Dashboard */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">Performance Dashboard</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-emerald-900/30 to-green-900/30 border border-emerald-500/30 rounded-xl p-6">
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-white font-semibold">Guest Satisfaction</h4>
                <div className="text-emerald-400">↗</div>
              </div>
              <div className="text-3xl font-bold text-emerald-400 mb-2">94%</div>
              <div className="text-gray-300 text-sm">↑ 50% from baseline</div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-900/30 to-cyan-900/30 border border-blue-500/30 rounded-xl p-6">
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-white font-semibold">Check-in Time</h4>
                <div className="text-blue-400">↘</div>
              </div>
              <div className="text-3xl font-bold text-blue-400 mb-2">2.3 min</div>
              <div className="text-gray-300 text-sm">↓ 70% faster</div>
            </div>
            
            <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 border border-purple-500/30 rounded-xl p-6">
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-white font-semibold">Staff Efficiency</h4>
                <div className="text-purple-400">↗</div>
              </div>
              <div className="text-3xl font-bold text-purple-400 mb-2">85%</div>
              <div className="text-gray-300 text-sm">↑ 40% improvement</div>
            </div>
            
            <div className="bg-gradient-to-br from-orange-900/30 to-red-900/30 border border-orange-500/30 rounded-xl p-6">
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-white font-semibold">Cost Savings</h4>
                <div className="text-orange-400">↘</div>
              </div>
              <div className="text-3xl font-bold text-orange-400 mb-2">$2.4M</div>
              <div className="text-gray-300 text-sm">Annual savings</div>
            </div>
          </div>
        </div>

        {/* Technology Stack with Icons */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">Technology Integration</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: 'AI Chatbots', icon: '🤖', color: 'blue' },
              { name: 'IoT Sensors', icon: '📡', color: 'green' },
              { name: 'Mobile Apps', icon: '📱', color: 'purple' },
              { name: 'Cloud Platform', icon: '☁️', color: 'cyan' },
              { name: 'Analytics', icon: '📊', color: 'orange' },
              { name: 'Security', icon: '🔒', color: 'red' },
              { name: 'Integration', icon: '🔗', color: 'pink' },
              { name: 'Automation', icon: '⚡', color: 'yellow' }
            ].map((tech, index) => (
              <div key={index} className="bg-white/5 border border-white/10 rounded-xl p-4 text-center hover:bg-white/10 transition-colors">
                <div className="text-2xl mb-2">{tech.icon}</div>
                <div className="text-white font-semibold text-sm">{tech.name}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Client Testimonial */}
        <div className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 border border-purple-500/30 rounded-2xl p-8 text-center">
          <div className="text-6xl text-purple-400 mb-4">🏨</div>
          <blockquote className="text-xl text-gray-300 mb-6 italic">
            "The AI automation has transformed our hotel operations. Our guests love the seamless experience, 
            and we've significantly reduced operational costs while improving service quality. It's been a game-changer."
          </blockquote>
          <div className="text-white font-semibold">Jennifer Martinez</div>
          <div className="text-gray-400">General Manager, Grand Plaza Hotel</div>
        </div>
      </div>
    );
  }
};
