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
  KeyFeaturesSection,
  IntegrationSection,
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

      

      {/* Media in Motion Section */}
      {/* <MediaInMotionSection /> */}

      {/* Image Recognition Section */}
      <ImageRecognitionSection />

      {/* Voice Cinematic Section */}
      <VoiceCinematicSection />

      {/* Chat Demo Section */}
      {/*<ChatDemoSection /> */}

      {/* Integration Section */}
      <IntegrationSection />

      {/* Features Section */}
      <FeaturesSection />

      {/* Data Collection & Sales Funneling Section 
      <DataCollectionSection /> */}

      {/* Facebook Integration Section 
      <FacebookIntegrationSection /> */}

      {/* Business Dashboard Section 
      <BusinessDashboardSection /> */}

      {/* Image Chat Section 
      <ImageChatSection /> */}

      {/* Escalation Notifications Section 
      <EscalationNotificationsSection /> */}

      {/* Brand Voice Section 
      <BrandVoiceSection /> */}

      {/* Knowledge Integration Section 
      <KnowledgeIntegrationSection /> */}

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

      {/* Agentic Flow Diagram Section */}
      <section className="w-full flex flex-col items-center justify-center py-20 px-4 bg-gradient-to-br from-[#18181b] via-[#23243a] to-[#1a1a2e] border-t border-b border-blue-900/20 relative overflow-x-auto">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-10" style={{ fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif' }}>
          <span className="text-gray-400">Single Agent +</span> <span className="bg-gradient-to-r from-emerald-400 to-emerald-600 bg-clip-text text-transparent">Dynamically Call Other Agents</span>
        </h2>
        <AgenticFlowDiagram />
        
        {/* Tech Stack Section */}
        <div className="mt-16 max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center items-center gap-3">
            {[
              { name: 'n8n', color: 'text-red-400' },
              { name: 'Python', color: 'text-blue-400' },
              { name: 'GPT', color: 'text-green-400' },
              { name: 'Gemini', color: 'text-purple-400' },
              { name: 'OCR', color: 'text-orange-400' },
              { name: 'Facebook Graph API', color: 'text-blue-300' },
              { name: 'Whisper', color: 'text-gray-400' },
              { name: 'OpenAI', color: 'text-emerald-400' },
              { name: 'LangChain', color: 'text-red-300' },
              { name: 'Vector DB', color: 'text-indigo-400' }
            ].map((tech, index) => (
              <div
                key={tech.name}
                className={`px-3 py-1.5 rounded-full bg-gray-800/50 border border-gray-700/50 ${tech.color} font-medium text-sm`}
                style={{ 
                  fontFamily: 'SF Pro Text, -apple-system, BlinkMacSystemFont, sans-serif',
                  letterSpacing: '-0.01em'
                }}
              >
                {tech.name}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sales Tactics Section 
      <SalesTacticsSection /> */}

      {/* Voice Integration Section 
      <VoiceIntegrationSection /> */}


      {/* n8n Workflow Section 
      <N8nWorkflowSection /> */}

      

      {/* Multilingual Section */}
      <section className="w-full py-10 px-4 bg-gradient-to-br from-[#18181b] via-[#23243a] to-[#1a1a2e] border-t border-b border-blue-900/20 relative overflow-hidden">
        <div className="max-w-6xl mx-auto">
          {/* Country Flags Row */}
          <div className="flex flex-wrap justify-center items-center gap-4 mb-8">
            {['🇯🇵', '🇮🇳', '🇧🇷', '🇳🇵', '🇰🇷', '🇨🇦', '🇬🇧', '🇮🇹', '🇷🇺', '🇹🇷', '🇸🇪', '🇳🇴', '🇫🇮', '🇩🇪', '🇫🇷', '🇪🇸'].map((flag, index) => (
              <div
                key={index}
                className="w-12 h-12 rounded-full bg-gray-200/10 border border-gray-300/20 flex items-center justify-center"
              >
                <span className="text-2xl">{flag}</span>
              </div>
            ))}
          </div>

          {/* Main Title */}
          <div className="text-center mb-8">
            <h2 
              className="text-4xl md:text-6xl font-semibold tracking-tight text-white"
              style={{ fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif' }}
            >
              <span className="text-gray-400">Multilingual</span>
            </h2>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              { title: "Native‑Level Fluency", color: "from-emerald-400 to-emerald-600", type: "gradient" },
              { title: "Cultural Adaptation", color: "text-gray-400", type: "solid" },
              { title: "Real‑Time Translation", color: "text-white", type: "solid" },
              { title: "Dialect Recognition", color: "from-green-400 to-emerald-500", type: "gradient" }
            ].map((feature, index) => (
              <div key={feature.title} className="text-center">
                <h3 
                  className={`text-2xl md:text-3xl font-semibold ${
                    feature.type === 'gradient' 
                      ? `bg-gradient-to-r ${feature.color} bg-clip-text text-transparent`
                      : feature.color
                  }`}
                  style={{ fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif' }}
                >
                  {feature.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <KeyFeaturesSection />

      {/* Chat Tracking Dashboard Section */}
      <ChatDashboard />

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* Partnerships Section */}
      <PartnershipsSection />

      

      

      

      {/* FAQ Section */}
      <FAQSection />

      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
      <Footer />
    </div>
  );
}
