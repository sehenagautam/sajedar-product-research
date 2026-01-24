import React from "react";

// Sleeker, more expressive single-element illustration — static orb with gentle glow and pointers
export default function AIAsASalesman() {
  return (
    <section className="w-full py-24 px-4 bg-gradient-to-br from-[#18181b] via-[#23243a] to-[#1a1a2e] border-t border-b border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="relative w-full text-center">
          {/* Static gradient aura */}
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
            <div className="h-[500px] w-[500px] rounded-full bg-gradient-to-r from-emerald-400/30 to-sky-400/30 blur-3xl" />
          </div>

          {/* Text */}
          <div className="relative z-10 mb-16">
            <h1
              className="text-4xl md:text-6xl font-semibold tracking-tight text-white mb-6"
              style={{ fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif' }}
            >
              <span className="text-gray-400">AI As a</span> <span className="bg-gradient-to-r from-emerald-400 to-emerald-600 bg-clip-text text-transparent">Salesman</span>
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-gray-300">
              <span className="text-gray-400">A</span> <span className="bg-gradient-to-r from-emerald-400 to-emerald-600 bg-clip-text text-transparent">sales expert</span> <span className="text-gray-400">that handles objections, creates urgency, and boosts conversions.</span>
            </p>
          </div>

          {/* Core Visual: AI Salesman Image */}
          <div className="relative mx-auto flex flex-col items-center justify-center">
            {/* Central Image */}
            <div className="relative mb-12">
              <img
                src="/ai-as-a-salesman.png"
                alt="AI Salesman"
                className="w-80 h-80 object-contain rounded-3xl"
              />
            </div>

            {/* Apple-style Tactic Tags */}
            <div className="flex flex-wrap justify-center gap-4 max-w-4xl">
              {['Objection', 'Upsell', 'Urgency', 'Proof', 'Commit', 'Value', 'Bundle'].map((label, i) => (
                <div
                  key={label}
                  className="group relative"
                >
                  <div className="px-6 py-3 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
                    <span className="text-sm font-medium text-white tracking-wide">
                      {label}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}