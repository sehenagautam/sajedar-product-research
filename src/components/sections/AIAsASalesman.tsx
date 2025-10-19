import React from "react";
import { motion } from "framer-motion";

// Sleeker, more expressive single-element illustration — static orb with gentle glow and pointers
export default function AIAsASalesman() {
  return (
    <section className="w-full py-24 px-4 bg-gradient-to-br from-[#18181b] via-[#23243a] to-[#1a1a2e] border-t border-b border-white/10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative w-full text-center"
        >
        {/* Subtle animated gradient aura */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0.4, scale: 1 }}
            animate={{ opacity: [0.4, 0.7, 0.4], scale: [1, 1.02, 1] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="h-[500px] w-[500px] rounded-full bg-gradient-to-r from-emerald-400/30 to-sky-400/30 blur-3xl"
          />
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
            <span className="text-gray-400">Transform your chatbot into a</span> <span className="bg-gradient-to-r from-emerald-400 to-emerald-600 bg-clip-text text-transparent">sales expert</span> <span className="text-gray-400">that handles objections, creates urgency, and boosts conversions.</span>
          </p>
        </div>

        {/* Core Visual: static orb with flowing rays and labeled pointers */}
        <div className="relative mx-auto flex h-80 w-80 items-center justify-center">
          <svg viewBox="0 0 400 400" className="absolute h-full w-full">
            <defs>
              <linearGradient id="rays" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#10B981" />
                <stop offset="100%" stopColor="#38BDF8" />
              </linearGradient>
            </defs>

            {/* Central orb with glow */}
            <motion.circle
              cx="200"
              cy="200"
              r="80"
              fill="url(#rays)"
              opacity="0.2"
              animate={{ r: [75, 80, 75] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Pointer rays */}
            {[...Array(7)].map((_, i) => {
              const angle = (i / 7) * 2 * Math.PI;
              const x1 = 200 + Math.cos(angle) * 60;
              const y1 = 200 + Math.sin(angle) * 60;
              const x2 = 200 + Math.cos(angle) * 130 - 10; // Half the distance
              const y2 = 200 + Math.sin(angle) * 130 - 7.5; // Half the distance
              return (
                <line
                  key={i}
                  x1={x1}
                  y1={y1}
                  x2={x2}
                  y2={y2}
                  stroke="url(#rays)"
                  strokeWidth="6"
                  strokeOpacity="0.7"
                  strokeLinecap="round"
                />
              );
            })}

            {/* Dedicated pointer line for Objection tag */}
            <line
              x1="200"
              y1="120"
              x2="200"
              y2="40"
              stroke="url(#rays)"
              strokeWidth="2"
              strokeOpacity="0.9"
            />
          </svg>

          {/* Central orb element */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0.7 }}
            animate={{ scale: [0.9, 1, 0.9], opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="relative h-28 w-28 rounded-full bg-gradient-to-br from-emerald-300 to-sky-400 shadow-[0_0_40px_10px_rgba(56,189,248,0.2)]"
          >
            <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.8),transparent_60%)]" />
          </motion.div>

          {/* Floating tactic tags */}
          {['Objection','Upsell','Urgency','Proof','Commit','Value','Bundle'].map((label,i)=>{
            const angle=(i/7)*2*Math.PI;
            const x=200+Math.cos(angle)*200 - 20; // Back to previous distance, shifted left
            const y=200+Math.sin(angle)*200 - 15; // Back to previous distance, shifted up
            return(
              <motion.span
                key={label}
                initial={{opacity:0,y:10}}
                animate={{opacity:1,y:0}}
                transition={{delay:i*0.1}}
                className="absolute text-sm font-medium text-gray-300 transform -translate-x-1/2 -translate-y-1/2"
                style={{left:`${x}px`,top:`${y}px`}}
              >
                {label}
              </motion.span>
            )
          })}
        </div>
        </motion.div>
      </div>
    </section>
  );
}
