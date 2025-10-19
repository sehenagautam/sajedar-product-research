import { motion } from "framer-motion";

export default function AILearningShowcase() {
  return (
    <section className="w-full py-24 px-4 bg-gradient-to-br from-[#18181b] via-[#23243a] to-[#1a1a2e] border-t border-b border-white/10">
      <div className="max-w-6xl mx-auto">
        <div className="min-h-screen flex flex-col items-center justify-center text-white">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center max-w-3xl mb-16">
        <h1 className="text-5xl font-semibold tracking-tight mb-4">AI Learning & Adaptation</h1>
        <p className="text-lg text-gray-300">Sajedar's AI gets smarter with every interaction — mastering communication, empathy, and impact.</p>
      </motion.div>

      <div className="relative flex flex-col md:flex-row justify-between items-center w-full max-w-6xl space-y-20 md:space-y-0 md:space-x-10">
        <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-300 via-gray-200 to-yellow-300 -z-10" />

        <motion.div className="relative flex flex-col items-center text-center space-y-2 max-w-xs" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
          <div className="relative w-20 h-20 bg-gradient-to-br from-blue-200 to-blue-500 rounded-full flex items-center justify-center text-3xl shadow-md">
            <motion.div 
              className="absolute inset-0 rounded-full"
              animate={{ 
                scale: [1, 1.1, 1],
                backgroundColor: ["rgba(59, 130, 246, 0.4)", "rgba(147, 197, 253, 0.6)", "rgba(59, 130, 246, 0.4)"]
              }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
            💡
          </div>
          <h3 className="text-xl font-medium">Clarity</h3>
          <p className="text-gray-300 text-sm">Sharper, simpler, smarter replies.</p>
        </motion.div>

        <motion.div className="relative flex flex-col items-center text-center space-y-2 max-w-xs" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
          <div className="relative w-20 h-20 bg-gradient-to-br from-purple-300 to-indigo-500 rounded-full flex items-center justify-center text-3xl shadow-md">
            <motion.div 
              className="absolute inset-0 rounded-full"
              animate={{ 
                scale: [1, 1.1, 1],
                backgroundColor: ["rgba(99, 102, 241, 0.4)", "rgba(165, 180, 252, 0.6)", "rgba(99, 102, 241, 0.4)"]
              }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
            />
            🤝
          </div>
          <h3 className="text-xl font-medium">Personalization</h3>
          <p className="text-gray-300 text-sm">Learns every customer's tone.</p>
        </motion.div>

        <motion.div className="relative flex flex-col items-center text-center space-y-2 max-w-xs" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
          <div className="relative w-20 h-20 bg-gradient-to-br from-green-300 to-emerald-500 rounded-full flex items-center justify-center text-3xl shadow-md">
            <motion.div 
              className="absolute inset-0 rounded-full"
              animate={{ 
                scale: [1, 1.1, 1],
                backgroundColor: ["rgba(16, 185, 129, 0.4)", "rgba(110, 231, 183, 0.6)", "rgba(16, 185, 129, 0.4)"]
              }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
            />
            🎯
          </div>
          <h3 className="text-xl font-medium">Persuasion</h3>
          <p className="text-gray-300 text-sm">Guides naturally toward action.</p>
        </motion.div>

        <motion.div className="relative flex flex-col items-center text-center space-y-2 max-w-xs" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
          <div className="relative w-20 h-20 bg-gradient-to-br from-pink-300 to-red-500 rounded-full flex items-center justify-center text-3xl shadow-md">
            <motion.div 
              className="absolute inset-0 rounded-full"
              animate={{ 
                scale: [1, 1.1, 1],
                backgroundColor: ["rgba(239, 68, 68, 0.4)", "rgba(252, 165, 165, 0.6)", "rgba(239, 68, 68, 0.4)"]
              }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.9 }}
            />
            ❤️
          </div>
          <h3 className="text-xl font-medium">Empathy</h3>
          <p className="text-gray-300 text-sm">Understands emotion and intent.</p>
        </motion.div>

        <motion.div className="relative flex flex-col items-center text-center space-y-2 max-w-xs" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
          <div className="relative w-20 h-20 bg-gradient-to-br from-yellow-300 to-orange-500 rounded-full flex items-center justify-center text-3xl shadow-md">
            <motion.div 
              className="absolute inset-0 rounded-full"
              animate={{ 
                scale: [1, 1.1, 1],
                backgroundColor: ["rgba(249, 115, 22, 0.4)", "rgba(251, 191, 36, 0.6)", "rgba(249, 115, 22, 0.4)"]
              }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
            />
            ⚙️
          </div>
          <h3 className="text-xl font-medium">Optimization</h3>
          <p className="text-gray-300 text-sm">Learns what truly works best.</p>
        </motion.div>
      </div>
        </div>
      </div>
    </section>
  );
}
