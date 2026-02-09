'use client';

import { useEffect, useState } from 'react';
import { Particles, initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';


import ChatDemoSection from './ChatDemo';
import Header from '../components/Header';

import {
  HeroSection,
  AgenticFlowDiagram,
  ImageRecognitionSection,
  VoiceCinematicSection,
  FeaturesSection,
  AILearningShowcase,
  IntelligentProfilingSection,
  AIAsASalesman,
  PartnershipsSection,
  TestimonialsSection,
  KeyFeaturesSection,
  IntegrationSection,
  FounderMessageSection, // ✅ IMPORTANT
  FAQSection,
  ContactSection,
  Footer
} from '../components/sections';

// Fonts
import '@fontsource/dm-serif-display';
import '@fontsource/inter';

export default function Home() {
  const [engineReady, setEngineReady] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setEngineReady(true));
  }, []);

  return (
    <div className="min-h-screen w-full bg-[#fafaf9] text-[#44403c] flex flex-col items-center justify-center font-sans relative overflow-x-hidden">

      {/* Header */}
      <Header />

      {/* Hero */}
      <HeroSection />

      {/* AI Salesman */}
      <AIAsASalesman />

      {/* Image Recognition */}
      <ImageRecognitionSection />

      {/* Voice Cinematic */}
      <VoiceCinematicSection />

      {/* Integration */}
      <IntegrationSection />

      {/* Features */}
      <FeaturesSection />

      {/* AI Learning Showcase */}
      <AILearningShowcase />

      {/* Intelligent Profiling */}
      <IntelligentProfilingSection />

      {/* Agentic Flow */}
      <section className="w-full py-20 px-4">
        <AgenticFlowDiagram />
      </section>

      {/* Key Features */}
      <KeyFeaturesSection />



      {/* Testimonials */}
      <TestimonialsSection />

      {/* Partnerships */}
      <PartnershipsSection />

      {/* ✅ FOUNDER MESSAGE (HERE) */}
      <FounderMessageSection />

      {/* FAQ */}
      <FAQSection />

      {/* Contact */}
      <ContactSection />

      {/* Footer */}
      <Footer />
    </div>
  );
}
