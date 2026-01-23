'use client';

import React, { useEffect, useState } from 'react';
import { Linkedin, Facebook, MessageCircle } from 'lucide-react';
import { trackLead, trackContact } from '../FacebookPixel';

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
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

*Name:* ${formData.name}
*Email:* ${formData.email}

*Message:*
${formData.message}`;

    // Open WhatsApp with prefilled message
    const whatsappUrl = `https://wa.me/9779860479751?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="contact" className="w-full bg-gradient-to-br from-[#18181b] via-[#23243a] to-[#1a1a2e] py-24 px-4 flex flex-col items-center border-t border-white/10">
      <div className="max-w-xl w-full mx-auto flex flex-col items-center gap-8">
        <div className="flex flex-col items-center text-center gap-2 mb-4">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-2 leading-tight tracking-tight">
            Let's Build Your Custom Chatbot
          </h2>
          <p className="text-lg text-gray-300 max-w-lg">
            Ready to see what Sajedar can do for your business? Tell us a bit about your needs and our team will reach out for a free consultation.
          </p>
        </div>

        <form
          className="w-full bg-gradient-to-br from-[#23243a] to-[#18181b] rounded-3xl shadow-2xl border border-white/10 p-8 flex flex-col gap-6 backdrop-blur-md"
          onSubmit={handleFormSubmit}
        >
          <div className="flex flex-col gap-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              value={formData.name}
              onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              value={formData.email}
              onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
            />
            <textarea
              name="message"
              placeholder="Tell us about your business needs..."
              rows={4}
              required
              value={formData.message}
              onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent resize-none"
            />
          </div>

          <button
            type="submit"
            className="w-full px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-gray-900"
          >
            Get Started
          </button>
        </form>

        {/* Social Links */}
        <div className="flex items-center gap-6 mt-6">
          <a href="https://www.linkedin.com/company/sajedar/?viewAsMember=true" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-300 hover:text-emerald-400 transition-colors">
            <Linkedin className="w-5 h-5" />
            <span>LinkedIn</span>
          </a>
          <a href="https://www.facebook.com/sajedardotcom" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-300 hover:text-emerald-400 transition-colors">
            <Facebook className="w-5 h-5" />
            <span>Facebook</span>
          </a>
        </div>

        {/* Direct WhatsApp Contact */}
        <div className="mt-4 p-6 bg-gradient-to-r from-green-900/20 to-emerald-900/20 border border-green-500/30 rounded-xl backdrop-blur-sm w-full">
          <div className="flex items-center justify-center gap-3 mb-4">
            <MessageCircle className="w-5 h-5 text-green-400" />
            <span className="text-gray-300 font-medium">Direct WhatsApp Contact</span>
          </div>

          <div className="text-center mb-4">
            <p className="text-sm text-gray-400 mb-2">For immediate assistance, message us directly:</p>
            <p className="text-green-400 font-semibold">+977 9860479751</p>
          </div>

          <a
            href="https://wa.me/9779860479751?text=Hi%20Sajedar!%20I%20found%20you%20through%20your%20website%20and%20I'm%20interested%20in%20building%20a%20custom%20AI%20chatbot%20for%20my%20business.%20Can%20you%20help%20me%20get%20started?"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2"
          >
            <MessageCircle className="w-4 h-4" />
            Go to WhatsApp
          </a>

          <p className="text-xs text-gray-500 text-center mt-3">
            Click to open WhatsApp with a pre-filled message about your chatbot needs
          </p>
        </div>
      </div>
    </section>
  );
}