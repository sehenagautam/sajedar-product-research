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
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.6, ease: "easeOut" }}
                className="group relative"
              >
                <div className="px-6 py-3 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-emerald-500/20">
                  <span className="text-sm font-medium text-white tracking-wide">
                    {label}
                  </span>
                </div>
                
                {/* Subtle glow effect on hover */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-emerald-400/20 to-sky-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm -z-10" />
              </motion.div>
            ))}
          </div>
        </div>
        </motion.div>
      </div>
    </section>
  );
}
