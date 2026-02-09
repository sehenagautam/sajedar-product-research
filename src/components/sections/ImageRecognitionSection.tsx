'use client';

import { FileImage, Sparkles, MessageCircle } from 'lucide-react';

const ImageRecognitionSection = () => {
  return (
    <section className="w-full py-24 px-4 bg-[#fafaf9]">
      <div className="max-w-6xl mx-auto">
        {/* Apple-style Frame container */}
        <div className="bg-white/40 backdrop-blur-xl rounded-3xl border border-white/40 p-4 sm:p-6 md:p-12 shadow-lg">
          <div className="space-y-6 sm:space-y-8 text-center">
            {/* Main Title */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-[#292524] px-2">
              <span className="text-[#292524]">See.</span> <span className="text-emerald-500">Understand.</span> <span className="text-[#292524]">Respond.</span>
            </h2>

            {/* Visual Flow Diagram */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 text-[#57534e] py-4 sm:py-8">
              {/* Input Icon */}
              <div className="flex flex-col items-center gap-2 min-w-0 flex-1 sm:flex-initial">
                <div className="p-3 sm:p-4 rounded-2xl bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20">
                  <FileImage className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600" />
                </div>
                <span className="text-xs sm:text-sm text-[#44403c]">Image</span>
              </div>

              {/* Arrow - Changes direction on mobile */}
              <div className="text-xl sm:text-2xl text-[#a8a29e] rotate-90 sm:rotate-0">→</div>

              {/* Processing Icon */}
              <div className="flex flex-col items-center gap-2 min-w-0 flex-1 sm:flex-initial max-w-full">
                <div className="p-3 sm:p-4 rounded-2xl bg-gradient-to-br from-yellow-500/10 to-amber-500/10 border border-yellow-500/20">
                  <Sparkles className="w-5 h-5 sm:w-7 sm:h-7 text-yellow-600" />
                </div>
                <div className="text-xs sm:text-sm font-medium text-[#44403c]">AI Insight</div>
                <div className="text-[10px] sm:text-xs text-[#57534e] mt-1 px-2 break-words max-w-[200px] sm:max-w-none">"Detected: Ashwi Sofa, Inventory Available"</div>
              </div>

              {/* Arrow - Changes direction on mobile */}
              <div className="text-xl sm:text-2xl text-[#a8a29e] rotate-90 sm:rotate-0">→</div>

              {/* Output */}
              <div className="flex flex-col items-center gap-2 min-w-0 flex-1 sm:flex-initial max-w-full">
                <div className="p-3 sm:p-4 rounded-2xl bg-gradient-to-br from-emerald-500/10 to-emerald-600/10 border border-emerald-500/20">
                  <MessageCircle className="w-6 h-6 sm:w-8 sm:h-8 text-emerald-600" />
                </div>
                <div className="text-center max-w-full">
                  <div className="text-xs sm:text-sm font-medium text-[#44403c]">Response</div>
                  <div className="text-[10px] sm:text-xs text-[#57534e] mt-1 px-2 break-words max-w-[200px] sm:max-w-none">"You have a great taste in furniture! Would you like to see more of such?"</div>
                </div>
              </div>
            </div>


          </div>
        </div>
      </div>
    </section>
  );
};

export { ImageRecognitionSection };
