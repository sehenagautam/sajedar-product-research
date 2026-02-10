import React from 'react';

export function KeyFeaturesSection() {
  return (
    <section className="w-full bg-[#fafaf9] py-16 px-4 flex flex-col items-center">
      <div className="max-w-6xl w-full mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center gap-4 mb-12">
          <h2
            className="text-3xl md:text-4xl font-semibold tracking-tight text-[#292524]"
            style={{ fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif' }}
          >
            <span className="text-[#57534e]">Powerful Features</span> <span className="text-emerald-500">for Your Business</span>
          </h2>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand Customization */}
          <div className="bg-white/60 backdrop-blur-sm border border-stone-200 rounded-xl p-6 text-center hover:bg-white/80 transition-all duration-300 shadow-sm">
            <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-500/10 to-blue-600/10 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
              </svg>
            </div>
            <h3
              className="text-xl font-semibold text-[#292524] mb-3"
              style={{ fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif' }}
            >
              Brand Customization
            </h3>
            <p
              className="text-[#57534e] text-sm leading-relaxed"
              style={{ fontFamily: 'SF Pro Text, -apple-system, BlinkMacSystemFont, sans-serif' }}
            >
              Give your agent a unique brand identity with custom tone and style.
            </p>
          </div>

          {/* Knowledge Integration */}
          <div className="bg-white/60 backdrop-blur-sm border border-stone-200 rounded-xl p-6 text-center hover:bg-white/80 transition-all duration-300 shadow-sm">
            <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-emerald-500/10 to-emerald-600/10 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
              </svg>
            </div>
            <h3
              className="text-xl font-semibold text-[#292524] mb-3"
              style={{ fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif' }}
            >
              Knowledge Integration
            </h3>
            <p
              className="text-[#57534e] text-sm leading-relaxed"
              style={{ fontFamily: 'SF Pro Text, -apple-system, BlinkMacSystemFont, sans-serif' }}
            >
              Feed your agent verified business data to make it an expert on your products.
            </p>
          </div>

          {/* Business Management */}
          <div className="bg-white/60 backdrop-blur-sm border border-stone-200 rounded-xl p-6 text-center hover:bg-white/80 transition-all duration-300 shadow-sm">
            <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-purple-500/10 to-purple-600/10 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3
              className="text-xl font-semibold text-[#292524] mb-3"
              style={{ fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif' }}
            >
              AI Reports
            </h3>
            <p
              className="text-[#57534e] text-sm leading-relaxed"
              style={{ fontFamily: 'SF Pro Text, -apple-system, BlinkMacSystemFont, sans-serif' }}
            >
              Get reports with stats, inventory recommendations, performance metrics ...
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
