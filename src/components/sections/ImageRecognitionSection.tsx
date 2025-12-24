'use client';

import { FileImage, Sparkles, MessageCircle } from 'lucide-react';

const ImageRecognitionSection = () => {
  return (
    <section className="w-full py-24 px-4 bg-gradient-to-br from-[#18181b] via-[#23243a] to-[#1a1a2e] border-t border-b border-blue-900/20">
      <div className="max-w-6xl mx-auto">
        {/* Apple-style Frame container */}
        <div className="bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 p-4 sm:p-6 md:p-12 shadow-2xl">
          <div className="space-y-6 sm:space-y-8 text-center">
            {/* Main Title */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-white px-2">
              <span className="text-white">See.</span> <span className="bg-gradient-to-r from-emerald-400 to-emerald-600 bg-clip-text text-transparent">Understand.</span> <span className="text-white">Respond.</span>
            </h2>
            
            {/* Visual Flow Diagram */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 text-neutral-300 py-4 sm:py-8">
              {/* Input Icon */}
              <div className="flex flex-col items-center gap-2 min-w-0 flex-1 sm:flex-initial">
                <div className="p-3 sm:p-4 rounded-2xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-500/30">
                  <FileImage className="w-6 h-6 sm:w-8 sm:h-8 text-blue-400" />
                </div>
                <span className="text-xs sm:text-sm text-white">Image</span>
              </div>
              
              {/* Arrow - Changes direction on mobile */}
              <div className="text-xl sm:text-2xl text-neutral-500 rotate-90 sm:rotate-0">→</div>
              
              {/* Processing Icon */}
              <div className="flex flex-col items-center gap-2 min-w-0 flex-1 sm:flex-initial max-w-full">
                <div className="p-3 sm:p-4 rounded-2xl bg-gradient-to-br from-yellow-500/20 to-amber-500/20 border border-yellow-500/30">
                  <Sparkles className="w-5 h-5 sm:w-7 sm:h-7 text-yellow-400" />
                </div>
                <div className="text-xs sm:text-sm font-medium text-white">AI Insight</div>
                <div className="text-[10px] sm:text-xs text-neutral-400 mt-1 px-2 break-words max-w-[200px] sm:max-w-none">"Detected: Ashwi Sofa, Inventory Available"</div>
              </div>
              
              {/* Arrow - Changes direction on mobile */}
              <div className="text-xl sm:text-2xl text-neutral-500 rotate-90 sm:rotate-0">→</div>
              
              {/* Output */}
              <div className="flex flex-col items-center gap-2 min-w-0 flex-1 sm:flex-initial max-w-full">
                <div className="p-3 sm:p-4 rounded-2xl bg-gradient-to-br from-emerald-500/20 to-emerald-600/20 border border-emerald-500/30">
                  <MessageCircle className="w-6 h-6 sm:w-8 sm:h-8 text-emerald-400" />
                </div>
                <div className="text-center max-w-full">
                  <div className="text-xs sm:text-sm font-medium text-white">Response</div>
                  <div className="text-[10px] sm:text-xs text-neutral-400 mt-1 px-2 break-words max-w-[200px] sm:max-w-none">"You have a great taste in furniture! Would you like to see more of such?"</div>
                </div>
              </div>
            </div>
            
            {/* Description */}
            <p className="mx-auto max-w-2xl text-base sm:text-lg text-white leading-relaxed px-2">
              Sajedar sees the image, interprets what it means, and responds beautifully.
            </p>
            
            {/* Additional Info */}
            <p className="mx-auto max-w-2xl text-xs sm:text-sm text-gray-400 leading-relaxed mt-4 px-2">
              Sajedar can also respond with images, movies, carousels, and more.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export { ImageRecognitionSection };
