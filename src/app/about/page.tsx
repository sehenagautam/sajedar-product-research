'use client';

import Header from '../../components/Header';
import AboutSection from '../../components/sections/AboutSection';
import { ContactSection, Footer } from '../../components/sections';

export default function AboutPage() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-[#18181b] via-[#23243a] to-[#1a1a2e] flex flex-col items-center justify-center font-sans relative overflow-x-hidden">
      {/* Header */}
      <Header />

      {/* About Section */}
      <AboutSection />

      {/* Contact */}
      <ContactSection />

      {/* Footer */}
      <Footer />
    </div>
  );
}
