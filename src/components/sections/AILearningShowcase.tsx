import React from "react";
import { motion } from "framer-motion";

export default function AILearningShowcase() {
  return (
    <section className="w-full py-24 px-4 bg-gradient-to-br from-[#18181b] via-[#23243a] to-[#1a1a2e] border-t border-b border-white/10">
      <div className="max-w-6xl mx-auto">
        <div className="min-h-screen flex flex-col items-center justify-center text-white">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8 }} 
            className="text-center max-w-3xl mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-white">AI Learning</span> <span className="bg-gradient-to-r from-emerald-400 to-emerald-600 bg-clip-text text-transparent">& Adaptation</span>
            </h2>
            <p className="text-lg">
              Sajedar's AI gets smarter with every interaction — <span className="text-gray-400">mastering communication, empathy,</span> <span className="bg-gradient-to-r from-emerald-400 to-emerald-600 bg-clip-text text-transparent">and impact.</span>
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 max-w-7xl">
            {/* Clarity */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center"
            >
              <motion.div
                className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center text-3xl"
                animate={{
                  scale: [1, 1.1, 1],
                  backgroundColor: ["rgba(59, 130, 246, 0.4)", "rgba(147, 197, 253, 0.6)", "rgba(59, 130, 246, 0.4)"]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <div className="text-3xl">💡</div>
              </motion.div>
              <h3 className="text-lg font-semibold mb-2">
                <span className="text-white">Clarity</span>
              </h3>
              <p className="text-sm text-gray-300">Sharper, simpler, smarter replies.</p>
            </motion.div>

            {/* Personalization */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <motion.div
                className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center text-3xl"
                animate={{
                  scale: [1, 1.1, 1],
                  backgroundColor: ["rgba(99, 102, 241, 0.4)", "rgba(165, 180, 252, 0.6)", "rgba(99, 102, 241, 0.4)"]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5
                }}
              >
                <div className="text-3xl">🤝</div>
              </motion.div>
              <h3 className="text-lg font-semibold mb-2">
                <span className="text-white">Personalization</span>
              </h3>
              <p className="text-sm text-gray-300">Learns every customer's tone.</p>
            </motion.div>

            {/* Persuasion */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center"
            >
              <motion.div
                className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center text-3xl"
                animate={{
                  scale: [1, 1.1, 1],
                  backgroundColor: ["rgba(16, 185, 129, 0.4)", "rgba(110, 231, 183, 0.6)", "rgba(16, 185, 129, 0.4)"]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
              >
                <div className="text-3xl">🎯</div>
              </motion.div>
              <h3 className="text-lg font-semibold mb-2">
                <span className="text-white">Persuasion</span>
              </h3>
              <p className="text-sm text-gray-300">Guides naturally toward action.</p>
            </motion.div>

            {/* Empathy */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center"
            >
              <motion.div
                className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center text-3xl"
                animate={{
                  scale: [1, 1.1, 1],
                  backgroundColor: ["rgba(239, 68, 68, 0.4)", "rgba(252, 165, 165, 0.6)", "rgba(239, 68, 68, 0.4)"]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1.5
                }}
              >
                <div className="text-3xl">❤️</div>
              </motion.div>
              <h3 className="text-lg font-semibold mb-2">
                <span className="text-white">Empathy</span>
              </h3>
              <p className="text-sm text-gray-300">Understands emotion and intent.</p>
            </motion.div>

            {/* Optimization */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-center"
            >
              <motion.div
                className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center text-3xl"
                animate={{
                  scale: [1, 1.1, 1],
                  backgroundColor: ["rgba(249, 115, 22, 0.4)", "rgba(251, 191, 36, 0.6)", "rgba(249, 115, 22, 0.4)"]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 2
                }}
              >
                <div className="text-3xl">⚙️</div>
              </motion.div>
              <h3 className="text-lg font-semibold mb-2">
                <span className="text-white">Optimization</span>
              </h3>
              <p className="text-sm text-gray-300">Learns what truly works best.</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}