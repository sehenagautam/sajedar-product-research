'use client';

import React from 'react';
import { FileImage, Mic, Sparkles, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

// Voice Wave Component
const VoiceWave: React.FC<{ height?: number }> = ({ height }) => {
  const bars = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    height: Math.random() * 100,
    delay: Math.random() * 1000,
  }));

  return (
    <div className="flex items-center justify-center gap-0.5 sm:gap-1 w-full max-w-full" style={{ height: height || 32 }}>
      {bars.map((bar) => (
        <motion.div
          key={bar.id}
          className="bg-emerald-500 rounded-full flex-shrink"
          style={{
            width: '2px',
            height: `${Math.max(6, bar.height / 2)}px`,
            flex: '1 1 auto',
            minWidth: '1.5px',
            maxWidth: '3px',
          }}
          animate={{
            scaleY: [0.3, 1, 0.3],
            opacity: [0.7, 1, 0.7],
          }}
          transition={{
            duration: 0.8 + Math.random() * 0.4,
            repeat: Infinity,
            delay: bar.delay / 1000,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  );
};

const ImageRecognitionSection = () => {
  return (
    <section className="w-full py-24 px-4 bg-[#fafaf9]">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-[#1c1917] mb-6">
            We support <span className="text-emerald-500">Images & Voice</span>
          </h2>
          <p className="text-[#57534e] text-lg max-w-2xl mx-auto">
            Your agent doesn't just read text. It sees product photos and listens to voice messages 
            to provide instant, accurate responses.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Image Recognition Card */}
          <div className="bg-[#fafaf9] rounded-[2.5rem] p-8 flex flex-col items-center text-center">
             <div className="w-20 h-20 rounded-3xl bg-blue-50 flex items-center justify-center mb-8 ring-1 ring-blue-100">
                <FileImage className="w-10 h-10 text-blue-600" />
             </div>
             <h3 className="text-xl font-bold text-[#1c1917] mb-4">Visual Intelligence</h3>
             <p className="text-sm text-[#57534e] leading-relaxed mb-6">
               Customers send screenshots or product photos. The agent identifies the item, 
               checks stock, and answers questions immediately.
             </p>
             <div className="mt-auto w-full bg-stone-100/50 rounded-2xl p-4">
                <p className="text-[10px] font-black uppercase tracking-widest text-[#a8a29e] mb-2">Capabilities</p>
                <div className="flex flex-wrap justify-center gap-2">
                   {['Product ID', 'Size Check', 'Color Match'].map(t => (
                     <span key={t} className="px-2 py-1 bg-white rounded-lg text-[10px] font-bold text-[#44403c]">{t}</span>
                   ))}
                </div>
             </div>
          </div>

          {/* Voice Recognition Card */}
          <div className="bg-[#fafaf9] rounded-[2.5rem] p-8 flex flex-col items-center text-center">
             <div className="w-20 h-20 rounded-3xl bg-emerald-50 flex items-center justify-center mb-8 ring-1 ring-emerald-100">
                <Mic className="w-10 h-10 text-emerald-600" />
             </div>
             <h3 className="text-xl font-bold text-[#1c1917] mb-4">Voice Understanding</h3>
             <p className="text-sm text-[#57534e] leading-relaxed mb-6">
               Nepali and English voice messages are transcribed and understood in real-time, 
               making it easier for customers to shop on the move.
             </p>
             
             <div className="w-full max-w-[200px] mb-6">
                <VoiceWave />
             </div>

             <div className="mt-auto w-full bg-stone-100/50 rounded-2xl p-4">
                <p className="text-[10px] font-black uppercase tracking-widest text-[#a8a29e] mb-2">Capabilities</p>
                <div className="flex flex-wrap justify-center gap-2">
                   {['Transcription', 'Intent Read', 'Multi-lingual'].map(t => (
                     <span key={t} className="px-2 py-1 bg-white rounded-lg text-[10px] font-bold text-[#44403c]">{t}</span>
                   ))}
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { ImageRecognitionSection };
