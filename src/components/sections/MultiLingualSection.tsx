'use client';

import React from 'react';

export default function MultilingualSection() {
  const flags = [
    "🇺🇸", "🇪🇸", "🇫🇷", "🇩🇪", "🇨🇳", "🇯🇵", "🇮🇳", "🇧🇷", "🇳🇵", "🇰🇷", "🇨🇦", "🇬🇧", "🇮🇹", "🇷🇺", "🇹🇷", "🇸🇪", "🇳🇴", "🇫🇮", "🇩🇰", "🇨🇭", "🇦🇺", "🇸🇬", "🇳🇬", "🇿🇦", "🇲🇽", "🇮🇩", "🇵🇭"
  ];

  return (
    <section className="w-full py-24 px-4 bg-gradient-to-br from-[#18181b] via-[#23243a] to-[#1a1a2e] border-t border-b border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="relative flex flex-col items-center justify-center p-8 rounded-3xl bg-white/70 backdrop-blur-md max-w-sm text-center overflow-hidden">
            {/* Overlapping flag marbles with increasing overlap */}
            <div className="absolute top-6 left-1/2 -translate-x-1/2 flex justify-center w-[320px] overflow-hidden">
              {flags.map((flag, i) => {
                const overlap = -2 - i * 0.7; // progressively increases overlap
                const opacity = 1 - i * 0.02; // later flags slightly fade
                return (
                  <div
                    key={i}
                    className="flex items-center justify-center w-9 h-9 bg-white/90 rounded-full aspect-square text-lg font-normal select-none"
                    style={{ marginLeft: `${overlap}px`, opacity, zIndex: flags.length - i, border: 'none' }}
                  >
                    {flag}
                  </div>
                );
              })}
            </div>

            {/* Foreground content */}
            <div className="relative z-10 mt-14">
              <p className="text-[13px] text-slate-700 leading-snug mb-5 font-medium">
                Multilingual
              </p>

              {/* Subtle divider */}
              <div className="h-[1px] w-2/3 mx-auto mb-4 bg-gradient-to-r from-transparent via-slate-300/60 to-transparent" />

              {/* Feature grid */}
              <div className="grid grid-cols-2 gap-2">
                <Chip text="Native-Level Fluency" />
                <Chip text="Cultural Adaptation" />
                <Chip text="Real-Time Translation" />
                <Chip text="Dialect Recognition" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Chip({ text }: { text: string }) {
  return (
    <div className="px-2.5 py-1.5 rounded-xl bg-gradient-to-b from-slate-50/80 to-slate-100/80 text-[11.5px] text-slate-700 border-none">
      {text}
    </div>
  );
}
