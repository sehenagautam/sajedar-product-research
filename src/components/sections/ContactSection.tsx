'use client';

import React, { useEffect, useState } from 'react';
import { Linkedin, Facebook, MessageCircle, Phone } from 'lucide-react';
import { trackLead, trackContact } from '../FacebookPixel';

export function ContactSection() {
  const [formData, setFormData] = useState({
    message: ''
  });

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const message = urlParams.get('message');
    if (message) {
      setFormData((prev) => ({ ...prev, message: decodeURIComponent(message) }));
    }
  }, []);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    trackLead(0, 'USD');
    trackContact();

    const whatsappMessage = `Hi Sajedar! I found you through your website.

*Message:*
${formData.message}`;

    const whatsappUrl = `https://wa.me/9779860479751?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="contact" className="w-full bg-[#fafaf9] py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-[#292524] leading-tight tracking-tight">
            Contact
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.35fr_0.9fr] gap-8 items-start">
          <form
            className="w-full bg-white rounded-3xl shadow-xl border border-stone-200 p-8 flex flex-col gap-6"
            onSubmit={handleFormSubmit}
          >
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-2xl bg-emerald-100 flex items-center justify-center shrink-0">
                <MessageCircle className="w-7 h-7 text-emerald-600" />
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-semibold text-[#292524]">Write a message</h3>
                <p className="text-[#78716c] text-lg mt-1">Tell us a little about what you want to build.</p>
              </div>
            </div>

            <textarea
              name="message"
              placeholder="Tell us about your business needs..."
              rows={6}
              required
              value={formData.message}
              onChange={(e) => setFormData((prev) => ({ ...prev, message: e.target.value }))}
              className="w-full px-5 py-4 bg-stone-50 border border-stone-300 rounded-2xl text-[#292524] placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent resize-none text-lg"
            />

            <button
              type="submit"
              className="w-full px-6 py-4 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold rounded-2xl transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-white text-xl"
            >
              Message founder on Whatsapp
            </button>
          </form>

          <div className="w-full bg-gradient-to-br from-emerald-50 to-white rounded-3xl shadow-xl border border-emerald-200 p-8 flex flex-col gap-6">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-2xl bg-[#292524] flex items-center justify-center shrink-0">
                <Phone className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-semibold text-[#292524]">Contact Info</h3>
                <p className="text-[#78716c] text-lg mt-1">Direct regional numbers.</p>
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-stone-200 p-6">
              <p className="text-sm font-semibold tracking-[0.24em] text-[#78716c] uppercase mb-3">Nepal</p>
              <a
                href="tel:+9779860479751"
                className="text-2xl md:text-3xl font-semibold text-[#292524] hover:text-emerald-600 transition-colors break-words leading-tight"
              >
                +977 986 0479751
              </a>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center gap-6 mt-12">
          <a
            href="https://www.linkedin.com/company/sajedar/?viewAsMember=true"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-[#57534e] hover:text-emerald-600 transition-colors"
          >
            <Linkedin className="w-5 h-5" />
            <span>LinkedIn</span>
          </a>
          <a
            href="https://www.facebook.com/sajedardotcom"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-[#57534e] hover:text-emerald-600 transition-colors"
          >
            <Facebook className="w-5 h-5" />
            <span>Facebook</span>
          </a>
        </div>
      </div>
    </section>
  );
}
