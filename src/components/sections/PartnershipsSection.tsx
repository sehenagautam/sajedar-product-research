import React from 'react';

export function PartnershipsSection() {
  return (
    <section className="w-full bg-gradient-to-br from-[#18181b] via-[#23243a] to-[#1a1a2e] py-24 px-4 flex flex-col items-center border-t border-white/10">
      <div className="max-w-6xl w-full mx-auto flex flex-col items-center gap-16">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center gap-4">
          <span className="text-emerald-400 text-xs font-bold uppercase tracking-widest mb-2 block">
            Strategic Partnerships
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4 leading-tight tracking-tight">
            Trusted by <span className="text-emerald-400">Industry Leaders</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mb-6">
            We collaborate with leading organizations across media, e-commerce, and hospitality to deliver exceptional AI solutions.
          </p>
        </div>

        {/* Partners Grid */}
        <div className="grid md:grid-cols-3 gap-8 w-full">
          {/* Media Partner */}
          <div className="bg-gradient-to-br from-blue-900/20 to-indigo-900/20 border border-blue-500/30 rounded-2xl p-8 backdrop-blur-sm hover:border-blue-400/50 transition-all duration-300 group">
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="w-16 h-16 bg-blue-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Media Partner</h3>
              <div className="text-blue-300 font-medium text-lg mb-2">Nepal Patra</div>
              <p className="text-gray-300 text-sm leading-relaxed">
                Leading Nepali news portal providing comprehensive coverage of national and international news, technology, and business developments.
              </p>
              <a 
                href="https://nepalpatra.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors duration-200"
              >
                Visit Website
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>

          {/* E-commerce Partner */}
          <div className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 border border-purple-500/30 rounded-2xl p-8 backdrop-blur-sm hover:border-purple-400/50 transition-all duration-300 group">
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="w-16 h-16 bg-purple-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">E-commerce Partner</h3>
              <div className="text-purple-300 font-medium text-lg mb-2">Hyperce</div>
              <p className="text-gray-300 text-sm leading-relaxed">
                Advanced e-commerce platform specializing in AI-powered shopping experiences, automated customer service, and intelligent product recommendations.
              </p>
              <a 
                href="https://hyperce.io/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center text-purple-400 hover:text-purple-300 text-sm font-medium transition-colors duration-200"
              >
                Visit Website
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>

          {/* Hospitality Partner */}
          <div className="bg-gradient-to-br from-emerald-900/20 to-teal-900/20 border border-emerald-500/30 rounded-2xl p-8 backdrop-blur-sm hover:border-emerald-400/50 transition-all duration-300 group">
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="w-16 h-16 bg-emerald-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 21v-5a2 2 0 012-2h4a2 2 0 012 2v5" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Hospitality Partner</h3>
              <div className="text-emerald-300 font-medium text-lg mb-2">Pahunahomes</div>
              <p className="text-gray-300 text-sm leading-relaxed">
                Premium hospitality platform offering luxury accommodations and personalized guest experiences with AI-powered concierge services and smart booking systems.
              </p>
              <a 
                href="http://pahunahomes.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center text-emerald-400 hover:text-emerald-300 text-sm font-medium transition-colors duration-200"
              >
                Visit Website
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Partnership Benefits */}
        <div className="bg-gradient-to-r from-emerald-900/30 to-blue-900/30 border border-emerald-500/30 rounded-xl p-8 backdrop-blur-sm max-w-4xl w-full">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Why Partner with Sajedar?</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Our strategic partnerships enable us to deliver comprehensive AI solutions across diverse industries, 
              from media and e-commerce to hospitality, ensuring our clients receive cutting-edge technology 
              tailored to their specific needs.
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-sm">
              <div className="flex items-center justify-center space-x-2">
                <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                <span className="text-gray-300">Cross-Industry Expertise</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <span className="text-gray-300">Proven Track Record</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                <span className="text-gray-300">Innovation Leadership</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
