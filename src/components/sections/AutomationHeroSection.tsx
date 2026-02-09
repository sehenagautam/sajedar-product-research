import React from 'react';

export function AutomationHeroSection() {
  return (
    <section className="w-full bg-gradient-to-br from-[#18181b] via-[#23243a] to-[#1a1a2e] py-24 px-4 flex flex-col items-center border-t border-white/10">
      <div className="max-w-6xl w-full mx-auto flex flex-col items-center">
        <div className="text-center space-y-2">
          <h2
            className="text-4xl md:text-6xl font-semibold tracking-tight text-white"
            style={{ fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif' }}
          >
            <span className="text-gray-400">AI-Powered Business</span> <span className="bg-gradient-to-r from-emerald-500 to-emerald-600 bg-clip-text text-transparent">Automation</span>
          </h2>

          <h2
            className="text-4xl md:text-6xl font-semibold tracking-tight text-white"
            style={{ fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif' }}
          >
            <span className="text-gray-400">That Actually</span> <span className="bg-gradient-to-r from-emerald-500 to-emerald-600 bg-clip-text text-transparent">Works</span>
          </h2>
        </div>
      </div>
    </section>
  );
}
