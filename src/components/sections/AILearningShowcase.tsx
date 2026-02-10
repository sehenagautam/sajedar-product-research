import React from "react";
import { motion } from "framer-motion";

export default function AILearningShowcase() {
  return (
    <section className="w-full py-24 px-4 bg-[#fafaf9]">
      <div className="max-w-6xl mx-auto">
        <div className="min-h-screen flex flex-col items-center justify-center text-[#44403c]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-[#292524]">AI Learning</span> <span className="text-emerald-500">& Adaptation</span>
            </h2>
            <p className="text-lg text-[#57534e]">
              Sajedar's Agents get smarter with more interactions; mastering communication, empathy, <span className="text-emerald-500">and impact.</span>
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
                  backgroundColor: ["rgba(59, 130, 246, 0.2)", "rgba(147, 197, 253, 0.4)", "rgba(59, 130, 246, 0.2)"]
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
                <span className="text-[#292524]">Clarity</span>
              </h3>
              <p className="text-sm text-[#57534e]">Sharper, simpler, smarter replies.</p>
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
                  backgroundColor: ["rgba(99, 102, 241, 0.2)", "rgba(165, 180, 252, 0.4)", "rgba(99, 102, 241, 0.2)"]
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
                <span className="text-[#292524]">Personalization</span>
              </h3>
              <p className="text-sm text-[#57534e]">Learns every customer's tone.</p>
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
                  backgroundColor: ["rgba(16, 185, 129, 0.2)", "rgba(110, 231, 183, 0.4)", "rgba(16, 185, 129, 0.2)"]
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
                <span className="text-[#292524]">Persuasion</span>
              </h3>
              <p className="text-sm text-[#57534e]">Guides naturally toward action.</p>
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
                  backgroundColor: ["rgba(239, 68, 68, 0.2)", "rgba(252, 165, 165, 0.4)", "rgba(239, 68, 68, 0.2)"]
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
                <span className="text-[#292524]">Empathy</span>
              </h3>
              <p className="text-sm text-[#57534e]">Understands emotion and intent.</p>
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
                  backgroundColor: ["rgba(249, 115, 22, 0.2)", "rgba(251, 191, 36, 0.4)", "rgba(249, 115, 22, 0.2)"]
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
                <span className="text-[#292524]">Optimization</span>
              </h3>
              <p className="text-sm text-[#57534e]">Learns what truly works best.</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}