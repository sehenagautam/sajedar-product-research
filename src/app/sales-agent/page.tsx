'use client';

import { useEffect, useState } from 'react';
import { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';

import Header from '../../components/Header';

import {
  HeroSection,
  AgenticFlowDiagram,
  ImageRecognitionSection,
  VoiceCinematicSection,
  FeaturesSection,
  AILearningShowcase,
  IntelligentProfilingSection,
  AIAsASalesman,
  KeyFeaturesSection,
  IntegrationSection,
  FounderMessageSection,
  FAQSection,
  ContactSection,
  Footer
} from '../../components/sections';

import '@fontsource/dm-serif-display';
import '@fontsource/inter';

export default function SalesAgentPage() {
  const [, setEngineReady] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setEngineReady(true));
  }, []);

  return (
    <div className="min-h-screen w-full bg-[#fafaf9] text-[#44403c] flex flex-col items-center justify-center font-sans relative overflow-x-hidden">
      <Header />

      <HeroSection />

      <AIAsASalesman />

      <ImageRecognitionSection />

      <VoiceCinematicSection />

      <IntegrationSection />

      <FeaturesSection />

      <AILearningShowcase />

      <IntelligentProfilingSection />

      <section className="w-full py-20 px-4">
        <AgenticFlowDiagram />
      </section>

      <KeyFeaturesSection />

      <FounderMessageSection />

      <FAQSection />

      <ContactSection />

      <Footer />
    </div>
  );
}
