import React from "react";

// Sleeker, more expressive single-element illustration — static orb with gentle glow and pointers
export default function AIAsASalesman() {
  return (
    <section className="w-full py-24 px-4 bg-[#fafaf9]">
      <div className="max-w-7xl mx-auto">
        <div className="relative w-full text-center">
          {/* Static gradient aura */}
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
            <div className="h-[500px] w-[500px] rounded-full bg-emerald-500/10 blur-3xl" />
          </div>

          {/* Text */}
          <div className="relative z-10 mb-16">
            <h1
              className="text-4xl md:text-6xl font-semibold tracking-tight text-[#292524] mb-6"
              style={{ fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif' }}
            >
              <span className="text-[#57534e]">AI As a</span> <span className="text-emerald-500">Salesman</span>
            </h1>
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
              {['Upsell', 'Bundle', 'Value', 'Proof', 'Urgency', 'Commit', 'Objection'].map((label, i) => (
                <div
                  key={label}
                  className="group relative"
                >
                  <div className="px-6 py-3 rounded-2xl bg-white/60 backdrop-blur-sm border border-stone-200 shadow-sm text-[#44403c]">
                    <span className="text-sm font-medium tracking-wide">
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