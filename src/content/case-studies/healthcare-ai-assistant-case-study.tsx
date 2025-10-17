import React from 'react';

export const healthcareAIAssistantCaseStudy = {
  slug: 'healthcare-ai-assistant-case-study',
  title: 'Healthcare AI Assistant Implementation',
  description: 'Revolutionizing patient care with AI-powered medical assistance and appointment scheduling.',
  industry: 'Healthcare',
  duration: '4 months',
  results: ['60% reduction in appointment no-shows', '45% faster patient triage', '98% accuracy in symptom analysis'],
  featured: true,
  date: new Date('2024-10-17'),
  component: function HealthcareAIAssistantCaseStudy() {
    return (
      <div className="w-full bg-gradient-to-br from-emerald-900/20 to-teal-900/20 border border-emerald-500/30 rounded-3xl p-8 md:p-12 backdrop-blur-sm">
        {/* Case Study Header with Medical Theme */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 bg-emerald-500/20 text-emerald-300 rounded-full text-sm font-medium mb-4">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
            Healthcare Case Study
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">
            AI-Powered Medical Assistant
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Enhancing patient care through intelligent symptom analysis, 
            automated appointment scheduling, and personalized health recommendations.
          </p>
        </div>

        {/* Hero Metrics with Medical Icons */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-gradient-to-br from-emerald-900/30 to-green-900/30 border border-emerald-500/30 rounded-2xl p-6 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-20 h-20 bg-emerald-500/10 rounded-full -translate-y-10 translate-x-10"></div>
            <div className="relative z-10">
              <div className="text-3xl font-bold text-emerald-400 mb-2">60%</div>
              <div className="text-sm text-gray-300">Reduction in No-Shows</div>
            </div>
          </div>
          <div className="bg-gradient-to-br from-blue-900/30 to-cyan-900/30 border border-blue-500/30 rounded-2xl p-6 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-20 h-20 bg-blue-500/10 rounded-full -translate-y-10 translate-x-10"></div>
            <div className="relative z-10">
              <div className="text-3xl font-bold text-blue-400 mb-2">45%</div>
              <div className="text-sm text-gray-300">Faster Triage</div>
            </div>
          </div>
          <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 border border-purple-500/30 rounded-2xl p-6 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-20 h-20 bg-purple-500/10 rounded-full -translate-y-10 translate-x-10"></div>
            <div className="relative z-10">
              <div className="text-3xl font-bold text-purple-400 mb-2">98%</div>
              <div className="text-sm text-gray-300">Symptom Accuracy</div>
            </div>
          </div>
        </div>

        {/* Problem & Solution in Side-by-Side Layout */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <div className="space-y-6">
            <div className="bg-red-900/20 border-l-4 border-red-500 rounded-r-2xl p-6">
              <h3 className="text-xl font-semibold text-red-300 mb-4 flex items-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
                Healthcare Challenges
              </h3>
              <ul className="text-gray-300 space-y-3">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-red-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  High appointment no-show rates (35%)
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-red-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Long patient wait times
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-red-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Manual triage processes
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-red-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Limited after-hours support
                </li>
              </ul>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="bg-emerald-900/20 border-l-4 border-emerald-500 rounded-r-2xl p-6">
              <h3 className="text-xl font-semibold text-emerald-300 mb-4 flex items-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                AI-Powered Solutions
              </h3>
              <ul className="text-gray-300 space-y-3">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-emerald-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Intelligent appointment reminders
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-emerald-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Automated symptom analysis
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-emerald-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Smart triage system
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-emerald-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  24/7 patient support
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Process Flow Diagram */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">AI-Powered Patient Journey</h3>
          <div className="grid md:grid-cols-4 gap-4">
            {[
              { step: '1', title: 'Symptom Input', description: 'Patient describes symptoms via chat', icon: '💬' },
              { step: '2', title: 'AI Analysis', description: 'AI analyzes symptoms and urgency', icon: '🧠' },
              { step: '3', title: 'Smart Triage', description: 'Automated priority assignment', icon: '⚡' },
              { step: '4', title: 'Appointment', description: 'Scheduled with appropriate specialist', icon: '📅' }
            ].map((process, index) => (
              <div key={index} className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center relative">
                <div className="text-4xl mb-4">{process.icon}</div>
                <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center text-white font-bold text-sm mx-auto mb-4">
                  {process.step}
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">{process.title}</h4>
                <p className="text-gray-300 text-sm">{process.description}</p>
                {index < 3 && (
                  <div className="hidden md:block absolute top-1/2 -right-2 w-4 h-0.5 bg-emerald-500 transform -translate-y-1/2"></div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Results Comparison Chart */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">Performance Improvements</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white mb-4">Before AI Implementation</h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center p-3 bg-red-900/20 border border-red-500/30 rounded-lg">
                  <span className="text-gray-300">Appointment No-Shows</span>
                  <span className="text-red-400 font-bold">35%</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-red-900/20 border border-red-500/30 rounded-lg">
                  <span className="text-gray-300">Average Wait Time</span>
                  <span className="text-red-400 font-bold">45 min</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-red-900/20 border border-red-500/30 rounded-lg">
                  <span className="text-gray-300">Triage Accuracy</span>
                  <span className="text-red-400 font-bold">72%</span>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white mb-4">After AI Implementation</h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center p-3 bg-emerald-900/20 border border-emerald-500/30 rounded-lg">
                  <span className="text-gray-300">Appointment No-Shows</span>
                  <span className="text-emerald-400 font-bold">14%</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-emerald-900/20 border border-emerald-500/30 rounded-lg">
                  <span className="text-gray-300">Average Wait Time</span>
                  <span className="text-emerald-400 font-bold">25 min</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-emerald-900/20 border border-emerald-500/30 rounded-lg">
                  <span className="text-gray-300">Triage Accuracy</span>
                  <span className="text-emerald-400 font-bold">98%</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Technology Integration */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">AI Technology Integration</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: 'Natural Language Processing', description: 'Understanding patient symptoms', color: 'blue' },
              { name: 'Machine Learning', description: 'Learning from medical cases', color: 'purple' },
              { name: 'Predictive Analytics', description: 'Forecasting health trends', color: 'emerald' },
              { name: 'Voice Recognition', description: 'Hands-free interaction', color: 'pink' },
              { name: 'Image Analysis', description: 'Medical image interpretation', color: 'cyan' },
              { name: 'Blockchain', description: 'Secure health records', color: 'orange' }
            ].map((tech, index) => (
              <div key={index} className={`bg-${tech.color}-900/20 border border-${tech.color}-500/30 rounded-xl p-4 hover:bg-${tech.color}-900/30 transition-colors`}>
                <h4 className="text-white font-semibold mb-2">{tech.name}</h4>
                <p className="text-gray-300 text-sm">{tech.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Client Testimonial with Medical Theme */}
        <div className="bg-gradient-to-r from-emerald-900/30 to-teal-900/30 border border-emerald-500/30 rounded-2xl p-8 text-center">
          <div className="text-6xl text-emerald-400 mb-4">🏥</div>
          <blockquote className="text-xl text-gray-300 mb-6 italic">
            "The AI assistant has revolutionized our patient care. We've seen dramatic improvements in efficiency 
            and patient satisfaction. The system's ability to accurately triage patients has been remarkable."
          </blockquote>
          <div className="text-white font-semibold">Dr. Michael Chen</div>
          <div className="text-gray-400">Chief Medical Officer, HealthFirst Medical Center</div>
        </div>
      </div>
    );
  }
};
