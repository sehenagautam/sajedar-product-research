'use client';

import Image from 'next/image';

export default function FounderMessageSection() {
  return (
    <section className="w-full py-24 px-4 bg-gradient-to-br from-[#18181b] via-[#23243a] to-[#1a1a2e] border-t border-b border-blue-900/20 relative overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">

        {/* Founder Image */}
        <div className="flex-shrink-0">
          <div className="relative w-64 h-64 rounded-2xl overflow-hidden shadow-2xl border border-white/10">
            <Image
              src="/founder_pic.png"
              alt="Founder of Sajedar"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Founder Message Content */}
        <div className="flex-1">
          <p className="uppercase tracking-widest text-sm text-emerald-400 mb-4">
            Founder&apos;s Message
          </p>

          <h2
            className="text-3xl md:text-4xl font-semibold text-white mb-6"
            style={{ fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif' }}
          >
            Why I Started <span className="text-emerald-400">Sajedar</span>
          </h2>

          <p className="text-gray-300 text-lg leading-relaxed mb-5">
            I started Sajedar because I saw too many businesses struggling to keep up with
            technology. They knew they needed &quot;AI&quot;, but they didn&apos;t know how to
            implement it without losing their brand&apos;s voice.
          </p>

          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            I wanted to build a firm that sits right beside you - solving the hard problems
            so you can enjoy the benefits.
          </p>

          <p className="text-gray-400 italic mb-3">
            Let&apos;s build something great together.
          </p>

          <p className="text-white font-medium">
            - Dimanjan Dahal, <span className="text-gray-400">Founder</span>
          </p>
        </div>
      </div>
    </section>
  );
}
