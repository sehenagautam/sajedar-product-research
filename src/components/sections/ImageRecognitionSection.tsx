'use client';

import { FileImage, Sparkles, MessageCircle } from 'lucide-react';

const ImageRecognitionSection = () => {
  return (
    <section className="w-full py-24 px-4 bg-gradient-to-br from-[#18181b] via-[#23243a] to-[#1a1a2e] border-t border-b border-blue-900/20">
      <div className="max-w-6xl mx-auto">
        {/* Apple-style Frame container */}
        <div className="bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 p-12 shadow-2xl">
          <div className="space-y-8 text-center">
            {/* Main Title */}
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-white">
              <span className="text-white">See.</span> <span className="bg-gradient-to-r from-emerald-400 to-emerald-600 bg-clip-text text-transparent">Understand.</span> <span className="text-white">Respond.</span>
            </h2>
            
            {/* Visual Flow Diagram */}
            <div className="flex items-center justify-center gap-4 text-neutral-300 py-8">
              {/* Input Icon */}
              <div className="flex flex-col items-center gap-2">
                <div className="p-4 rounded-2xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-500/30">
                  <FileImage size={32} className="text-blue-400" />
                </div>
                <span className="text-sm text-white">Image</span>
              </div>
              
              {/* Arrow */}
              <div className="text-2xl text-neutral-500">→</div>
              
              {/* Processing Icon */}
              <div className="flex flex-col items-center gap-2">
                <div className="p-4 rounded-2xl bg-gradient-to-br from-yellow-500/20 to-amber-500/20 border border-yellow-500/30">
                  <Sparkles size={28} className="text-yellow-400" />
                </div>
                <div className="text-sm font-medium text-white">AI Insight</div>
                <div className="text-xs text-neutral-400 mt-1">"Detected: Ashwi Sofa, Inventory Available"</div>

              </div>
              
              {/* Arrow */}
              <div className="text-2xl text-neutral-500">→</div>
              
              {/* Output */}
              <div className="flex flex-col items-center gap-2">
                <div className="p-4 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-emerald-600/20 border border-emerald-500/30">
                  <MessageCircle size={32} className="text-emerald-400" />
                </div>
                <div className="text-center">
                  <div className="text-sm font-medium text-white">Response</div>
                  <div className="text-xs text-neutral-400 mt-1">"You have a great taste in furniture! Would you like to see more of such?"</div>
                </div>
              </div>
            </div>
            
            {/* Description */}
            <p className="mx-auto max-w-2xl text-lg text-white leading-relaxed">
              Sajedar sees the image, interprets what it means, and responds beautifully.
            </p>
            
            {/* Additional Info */}
            <p className="mx-auto max-w-2xl text-sm text-gray-400 leading-relaxed mt-4">
              Sajedar can also respond with images, movies, carousels, and more.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export { ImageRecognitionSection };
