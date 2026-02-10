'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

// Voice Wave Component
const VoiceWave: React.FC<{ width?: number; height?: number }> = ({ width, height }) => {
  const bars = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    height: Math.random() * 100,
    delay: Math.random() * 1000,
  }));

  return (
    <div className="flex items-center justify-center gap-0.5 sm:gap-1 w-full max-w-full" style={{ height: height || 40 }}>
      {bars.map((bar) => (
        <motion.div
          key={bar.id}
          className="bg-emerald-500 rounded-full flex-shrink"
          style={{
            width: '3px',
            height: `${Math.max(8, bar.height)}px`,
            flex: '1 1 auto',
            minWidth: '2px',
            maxWidth: '4px',
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

// Message Square Text Icon
const MessageSquareText: React.FC<{ size: number }> = ({ size }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    <path d="M13 8H7" />
    <path d="M17 12H7" />
  </svg>
);

// CTA Component
const CTA: React.FC<{ label: string }> = ({ label }) => (
  <Link
    href="/readiness"
    className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-white font-medium rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg"
  >
    <span>{label}</span>
    <span className="text-lg">→</span>
  </Link>
);

// Gradient Backdrop Component
const GradientBackdrop: React.FC = () => (
  <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/30 via-transparent to-emerald-100/20 pointer-events-none" />
);

// Frame Component
const Frame: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <section className="relative w-full min-h-screen flex items-center justify-center bg-[#fafaf9] overflow-hidden">
    {children}
  </section>
);

export function VoiceCinematicSection() {
  return (
    <Frame>
      <div className="mx-auto max-w-7xl px-3 sm:px-4 md:px-6">
        <div className="flex items-center justify-center min-h-screen py-8 sm:py-12">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full max-w-4xl"
          >
            <div className="flex flex-col items-center gap-4 sm:gap-6 px-2">
              {/* Text above the conversation */}
              <div className="text-center space-y-1 sm:space-y-2">
                <h2
                  className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-semibold tracking-tight text-[#292524] px-2"
                  style={{ fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif' }}
                >
                  Your agent <span className="text-[#57534e]">listens…</span>
                </h2>

                <h2
                  className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-semibold tracking-tight text-[#292524] px-2"
                  style={{ fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif' }}
                >
                  …and <span className="text-emerald-500">responds back.</span>
                </h2>
              </div>

              {/* VoiceWave - Responsive width */}
              <div className="w-full max-w-[480px] px-4">
                <VoiceWave height={40} />
              </div>

              {/* Conversation Demo */}
              <div className="w-full max-w-2xl rounded-2xl border border-stone-200 bg-white/60 backdrop-blur-sm p-3 sm:p-4 text-left font-medium flex flex-col justify-center shadow-sm">
                <div className="flex items-start sm:items-center gap-2 sm:gap-3 text-[#57534e] text-xs sm:text-sm md:text-base">
                  <div className="flex-shrink-0 mt-0.5 sm:mt-0">
                    <MessageSquareText size={14} />
                  </div>
                  <span className="break-words">Voice Message: "I want this pant umm for ah travel, is it any good?"</span>
                </div>
                <div className="mt-2 rounded-xl bg-emerald-500/10 p-2 sm:p-3 text-[#292524] text-xs sm:text-sm md:text-base break-words">
                  Agent Response: "Ix9 is preferable to Ix7 for travel because of its quick-dry fabric. Want to switch?"
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </Frame>
  );
}
