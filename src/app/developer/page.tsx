'use client';

import React, { useState } from 'react';

const GOOGLE_FORM_ACTION = 'https://docs.google.com/forms/d/e/1FAIpQLScPg9J_6XzBGJqWLZ1qBWR3SiAhhxpU1A9Fnk0DpgmK2seeQg/formResponse';

export const metadata = {
  title: 'Work with Sajedar Developers | AI Automation & Chatbots',
  description: 'Submit your project details to Sajedar. Our developers specialize in AI business automation and chatbots. We will get back to you quickly.'
};

export default function DeveloperPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      await fetch(GOOGLE_FORM_ACTION, {
        method: 'POST',
        mode: 'no-cors',
        body: formData
      });
      setSubmitted(true);
    } catch (err) {
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen w-full bg-gradient-to-br from-[#18181b] via-[#23243a] to-[#1a1a2e] flex items-center justify-center px-4 py-16">
      <div className="max-w-xl w-full">
        <div className="bg-white rounded-2xl shadow-2xl p-8 border border-black/5">
          <h1 className="text-2xl md:text-3xl font-serif font-bold text-[#0f172a] mb-2">Tell Us About Your Project</h1>
          <p className="text-gray-600 mb-6">Our team at <span className="font-semibold text-[#0f172a]">Sajedar</span> builds AI business automation and chatbots. Share a few details and well get back fast.</p>

          {!submitted ? (
            <form onSubmit={handleSubmit} action={GOOGLE_FORM_ACTION} method="POST" className="space-y-5">
              <div>
                <label htmlFor="fullName" className="block text-xs font-semibold text-gray-700 mb-1">Full Name</label>
                <input
                  id="fullName"
                  name="entry.123456789"
                  type="text"
                  required
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#4CAF50] focus:border-[#4CAF50]"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-xs font-semibold text-gray-700 mb-1">Email Address</label>
                <input
                  id="email"
                  name="entry.987654321"
                  type="email"
                  required
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#4CAF50] focus:border-[#4CAF50]"
                  placeholder="you@company.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-semibold text-gray-700 mb-1">Message</label>
                <textarea
                  id="message"
                  name="entry.135791113"
                  rows={5}
                  required
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#4CAF50] focus:border-[#4CAF50]"
                  placeholder="What are you building? Goals, timelines, links..."
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-lg bg-[#4CAF50] hover:bg-[#3e8e41] text-white font-bold py-3 transition disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {loading ? 'Submitting…' : 'Submit'}
              </button>

              {/* Google Forms requires this for some forms; safe to include */}
              <input type="hidden" name="fvv" value="1" />
              <input type="hidden" name="fbzx" value="-1" />
            </form>
          ) : (
            <div className="rounded-xl border border-emerald-500/30 bg-emerald-50 p-6 text-[#0f5132]">
              <h2 className="text-xl font-bold mb-1">Thank you!</h2>
              <p className="text-sm">Weve received your message. Our team will reach out shortly.</p>
            </div>
          )}
        </div>
      </div>
    </main>
  );
} 