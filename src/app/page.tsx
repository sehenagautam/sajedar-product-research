// Sajedar Landing Page - Modern, Unique, Animation-rich
'use client';
import { useEffect, useState } from 'react';
import { Particles, initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import ChatDashboard from './ChatDashboard';
import ChatDemoSection from './ChatDemo';
import Header from '../components/Header';
import {
  HeroSection,
  AgenticFlowDiagram,
  MediaInMotionSection,
  FeaturesSection,
  DataCollectionSection,
  FacebookIntegrationSection,
  BusinessDashboardSection,
  ImageChatSection,
  EscalationNotificationsSection,
  BrandVoiceSection,
  KnowledgeIntegrationSection,
  AILearningSection,
  ClientProfilingSection,
  SalesTacticsSection,
  VoiceIntegrationSection,
  MultiLingualSection,
  N8nWorkflowSection,
  PartnershipsSection,
  TestimonialsSection,
  FAQSection,
  ContactSection,
  Footer
} from '../components/sections';

// Import fonts
import '@fontsource/dm-serif-display';
import '@fontsource/inter';

export default function Home() {
  // Particle options for a modern greenish look
  // Reduce particle count and size for lower memory usage
  const particlesOptions = {
    fullScreen: false,
    background: { color: { value: 'transparent' } },
    fpsLimit: 60,
    particles: {
      number: { value: 20, density: { enable: true, area: 800 } }, // was 60
      color: { value: ['#22C55E', '#4ade80', '#bbf7d0'] },
      links: { enable: true, color: '#22C55E', distance: 120, opacity: 0.3, width: 1 },
      move: { enable: true, speed: 1.2, direction: 'none' as const, random: false, straight: false, outModes: { default: 'out' as const } },
      size: { value: { min: 0.5, max: 1.5 } }, // was 1-3
      opacity: { value: 0.5 },
      shape: { type: 'circle' },
    },
    detectRetina: true,
  };

  const [engineReady, setEngineReady] = useState(false);
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setEngineReady(true));
  }, []);

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-[#18181b] via-[#23243a] to-[#1a1a2e] flex flex-col items-center justify-center font-sans relative overflow-x-hidden">
      {/* Header */}
      <Header />
      
      {/* Particles background removed for memory optimization. Restore if needed. */}
      
      {/* Hero Section */}
      <HeroSection />

      {/* Agentic Flow Diagram Section */}
      <section className="w-full flex flex-col items-center justify-center py-20 px-4 bg-gradient-to-br from-[#18181b] via-[#23243a] to-[#1a1a2e] border-t border-b border-blue-900/20 relative overflow-x-auto">
        <h2 className="text-3xl md:text-4xl font-serif font-bold mb-10 text-gray-300" style={{ fontFamily: 'DM Serif Display, serif' }}>
          Single Agent + <span className="text-emerald-400">Dynamically Call Other Agents</span>
        </h2>
        <AgenticFlowDiagram />
      </section>

      {/* Media in Motion Section */}
      <MediaInMotionSection />

      {/* Chat Demo Section */}
      {/*<ChatDemoSection /> */}

      {/* Features Section */}
      <FeaturesSection />

      {/* Data Collection & Sales Funneling Section */}
      <DataCollectionSection />

      {/* Facebook Integration Section */}
      <FacebookIntegrationSection />

      {/* Business Dashboard Section */}
      <BusinessDashboardSection />

      {/* Image Chat Section */}
      <ImageChatSection />

      {/* Escalation Notifications Section */}
      <EscalationNotificationsSection />

      {/* Brand Voice Section */}
      <BrandVoiceSection />

      {/* Knowledge Integration Section */}
      <KnowledgeIntegrationSection />

      {/* AI Learning Section */}
      <AILearningSection />

      {/* Client Profiling Section */}
      <ClientProfilingSection />

      {/* Sales Tactics Section */}
      <SalesTacticsSection />

      {/* Voice Integration Section */}
      <VoiceIntegrationSection />

      {/* Multi-Lingual Section */}
      <MultiLingualSection />

      {/* n8n Workflow Section */}
      <N8nWorkflowSection />

      {/* Partnerships Section */}
      <PartnershipsSection />
      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* Chat Tracking Dashboard Section */}
      <ChatDashboard />

      {/* FAQ Section */}
      <FAQSection />

      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
      <Footer />
    </div>
  );
}
