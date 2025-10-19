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
  ImageRecognitionSection,
  VoiceCinematicSection,
  FeaturesSection,
  DataCollectionSection,
  FacebookIntegrationSection,
  BusinessDashboardSection,
  ImageChatSection,
  EscalationNotificationsSection,
  BrandVoiceSection,
  KnowledgeIntegrationSection,
  AILearningSection,
  AILearningShowcase,
  ClientProfilingSection,
  IntelligentProfilingSection,
  AIAsASalesman,
  SalesTacticsSection,
  VoiceIntegrationSection,
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
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-10" style={{ fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif' }}>
          <span className="text-gray-400">Single Agent +</span> <span className="bg-gradient-to-r from-emerald-400 to-emerald-600 bg-clip-text text-transparent">Dynamically Call Other Agents</span>
        </h2>
        <AgenticFlowDiagram />
      </section>

      {/* Media in Motion Section */}
      {/* <MediaInMotionSection /> */}

      {/* Image Recognition Section */}
      <ImageRecognitionSection />

      {/* Voice Cinematic Section */}
      <VoiceCinematicSection />

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

      {/* Image Chat Section 
      <ImageChatSection /> */}

      {/* Escalation Notifications Section */}
      <EscalationNotificationsSection />

      {/* Brand Voice Section */}
      <BrandVoiceSection />

      {/* Knowledge Integration Section */}
      <KnowledgeIntegrationSection />

      {/* AI Learning Section */}
      {/* <AILearningSection /> */}

      {/* AI Learning Showcase Section */}
      <AILearningShowcase />

      {/* Client Profiling Section */}
      {/* <ClientProfilingSection /> */}

      {/* Intelligent Profiling Section */}
      <IntelligentProfilingSection />

      {/* AI As a Salesman Section */}
      <AIAsASalesman />

      {/* Sales Tactics Section 
      <SalesTacticsSection /> */}

      {/* Voice Integration Section 
      <VoiceIntegrationSection /> */}


      {/* n8n Workflow Section */}
      <N8nWorkflowSection />

      {/* Partnerships Section */}
      <PartnershipsSection />

      {/* Multilingual Section */}
      <section className="w-full py-20 px-4 bg-gradient-to-br from-[#18181b] via-[#23243a] to-[#1a1a2e] border-t border-b border-blue-900/20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          {/* Country Flags Row */}
          <div className="flex flex-wrap justify-center items-center gap-4 mb-12">
            {['🇯🇵', '🇮🇳', '🇧🇷', '🇳🇵', '🇰🇷', '🇨🇦', '🇬🇧', '🇮🇹', '🇷🇺', '🇹🇷', '🇸🇪', '🇳🇴', '🇫🇮', '🇩🇪', '🇫🇷', '🇪🇸'].map((flag, index) => (
              <div
                key={index}
                className="w-12 h-12 rounded-full bg-gray-200/10 border border-gray-300/20 flex items-center justify-center hover:scale-110 transition-transform duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <span className="text-2xl">{flag}</span>
              </div>
            ))}
          </div>

          {/* Main Title */}
          <div className="text-center mb-16">
            <div className="inline-block bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-2xl px-8 py-4 border border-blue-400/30">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-200 tracking-tight">
                Multilingual
              </h2>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                title: "Native‑Level Fluency",
                description: "Communicate with the natural fluency and nuance of native speakers across all supported languages."
              },
              {
                title: "Cultural Adaptation",
                description: "Understand and adapt to cultural contexts, ensuring appropriate communication for each region."
              },
              {
                title: "Real‑Time Translation",
                description: "Instant, accurate translation that maintains context and meaning across language barriers."
              },
              {
                title: "Dialect Recognition",
                description: "Recognize and respond appropriately to regional dialects and linguistic variations."
              }
            ].map((feature, index) => (
              <div key={feature.title} className="group relative">
                <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-2xl p-8 border border-blue-400/20 hover:border-blue-400/40 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 hover:-translate-y-1">
                  <h3 className="text-xl font-semibold text-gray-200 mb-4 group-hover:text-blue-300 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

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
