'use client';

import React, { useEffect, useState } from 'react';
import { Linkedin, Facebook, MessageCircle } from 'lucide-react';
import { trackLead, trackContact } from '../FacebookPixel';

export function ContactSection() {
  const [formData, setFormData] = useState({
    message: ''
  });

  useEffect(() => {
    // Read URL parameters when component mounts
    const urlParams = new URLSearchParams(window.location.search);
    const message = urlParams.get('message');
    if (message) {
      setFormData(prev => ({ ...prev, message: decodeURIComponent(message) }));
    }
  }, []);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Track Facebook Pixel events
    trackLead(0, 'USD'); // Track as lead with $0 value
    trackContact(); // Track contact event

    // Construct WhatsApp message with form data
    const whatsappMessage = `Hi Sajedar! I found you through your website.

*Message:*
${formData.message}`;

    // Open WhatsApp with prefilled message
    const whatsappUrl = `https://wa.me/9779860479751?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="contact" className="w-full bg-[#fafaf9] py-24 px-4 flex flex-col items-center">
      <div className="max-w-xl w-full mx-auto flex flex-col items-center gap-8">
        <div className="flex flex-col items-center text-center gap-2 mb-4">
          <h2 className="text-4xl md:text-5xl font-bold text-[#292524] mb-2 leading-tight tracking-tight">
            Contact
          </h2>
        </div>

        <form
          className="w-full bg-white rounded-3xl shadow-xl border border-stone-200 p-8 flex flex-col gap-6"
          onSubmit={handleFormSubmit}
        >
          <div className="flex flex-col gap-4">
            <textarea
              name="message"
              placeholder="Tell us about your business needs..."
              rows={4}
              required
              value={formData.message}
              onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
              className="w-full px-4 py-3 bg-stone-50 border border-stone-300 rounded-lg text-[#292524] placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent resize-none"
            />
          </div>

          <button
            type="submit"
            className="w-full px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-stone-100"
          >
            Message founder on Whatsapp
          </button>
        </form>

        {/* Social Links */}
        <div className="flex items-center gap-6 mt-6">
          <a href="https://www.linkedin.com/company/sajedar/?viewAsMember=true" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[#57534e] hover:text-emerald-600 transition-colors">
            <Linkedin className="w-5 h-5" />
            <span>LinkedIn</span>
          </a>
          <a href="https://www.facebook.com/sajedardotcom" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[#57534e] hover:text-emerald-600 transition-colors">
            <Facebook className="w-5 h-5" />
            <span>Facebook</span>
          </a>
        </div>
      </div>
    </section>
  );
}