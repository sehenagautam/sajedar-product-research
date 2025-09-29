'use client';

import React, { useState } from 'react';

const GOOGLE_FORM_ACTION = 'https://docs.google.com/forms/d/e/1FAIpQLScPg9J_6XzBGJqWLZ1qBWR3SiAhhxpU1A9Fnk0DpgmK2seeQg/formResponse';

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
          <h1 className="text-2xl md:text-3xl font-serif font-bold text-[#0f172a] mb-2">Sajedar AI Developer Listing</h1>
          <p className="text-gray-600 mb-6">Provide your information to be listed on <span className="font-semibold text-[#0f172a]">sajedar.com</span> as an AI developer.</p>

          {!submitted ? (
            <form onSubmit={handleSubmit} action={GOOGLE_FORM_ACTION} method="POST" className="space-y-5">
              {/* Full Name */}
              <div>
                <label htmlFor="fullName" className="block text-xs font-semibold text-gray-700 mb-1">Full Name</label>
                <input
                  id="fullName"
                  name="entry.818940112"
                  type="text"
                  required
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#4CAF50] focus:border-[#4CAF50]"
                  placeholder="Your full name"
                />
              </div>

              {/* Email Address */}
              <div>
                <label htmlFor="email" className="block text-xs font-semibold text-gray-700 mb-1">Email Address</label>
                <input
                  id="email"
                  name="entry.2021277820"
                  type="email"
                  required
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#4CAF50] focus:border-[#4CAF50]"
                  placeholder="you@company.com"
                />
              </div>

              {/* LinkedIn Profile URL */}
              <div>
                <label htmlFor="linkedin" className="block text-xs font-semibold text-gray-700 mb-1">LinkedIn Profile URL</label>
                <input
                  id="linkedin"
                  name="entry.894782813"
                  type="url"
                  required
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#4CAF50] focus:border-[#4CAF50]"
                  placeholder="https://www.linkedin.com/in/your-profile"
                />
              </div>

              {/* GitHub Profile URL (Optional) */}
              <div>
                <label htmlFor="github" className="block text-xs font-semibold text-gray-700 mb-1">GitHub Profile URL (Optional)</label>
                <input
                  id="github"
                  name="entry.1887611023"
                  type="url"
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#4CAF50] focus:border-[#4CAF50]"
                  placeholder="https://github.com/username"
                />
              </div>

              {/* Other Social Media Link */}
              <div>
                <label htmlFor="other" className="block text-xs font-semibold text-gray-700 mb-1">Other Social Media Link (e.g., Twitter, Personal Website)</label>
                <input
                  id="other"
                  name="entry.1159918899"
                  type="url"
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#4CAF50] focus:border-[#4CAF50]"
                  placeholder="https://x.com/handle or https://your-site.com"
                />
              </div>

              {/* Age Confirmation */}
              <div>
                <span className="block text-xs font-semibold text-gray-700 mb-2">Please confirm you are 18 years or older.</span>
                <div className="flex items-center gap-6">
                  <label className="inline-flex items-center gap-2 text-sm text-gray-800">
                    <input type="radio" name="entry.1286089919" value="Yes, I am 18 or older" required className="h-4 w-4 text-[#4CAF50] focus:ring-[#4CAF50]" />
                    <span>Yes, I am 18 or older</span>
                  </label>
                  <label className="inline-flex items-center gap-2 text-sm text-gray-800">
                    <input type="radio" name="entry.1286089919" value="No, I am not 18 or older" className="h-4 w-4 text-[#4CAF50] focus:ring-[#4CAF50]" />
                    <span>No, I am not 18 or older</span>
                  </label>
                </div>
              </div>

              {/* Portfolio link */}
              <div>
                <label htmlFor="portfolio" className="block text-xs font-semibold text-gray-700 mb-1">Portfolio URL</label>
                <input
                  id="portfolio"
                  name="entry.1265148791"
                  type="url"
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#4CAF50] focus:border-[#4CAF50]"
                  placeholder="https://your-portfolio.com"
                />
              </div>

              {/* Description About Yourself */}
              <div>
                <label htmlFor="about" className="block text-xs font-semibold text-gray-700 mb-1">Description About Yourself</label>
                <textarea
                  id="about"
                  name="entry.721327961"
                  rows={6}
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#4CAF50] focus:border-[#4CAF50]"
                  placeholder="Tell us about your experience, skills, and projects."
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-lg bg-[#4CAF50] hover:bg-[#3e8e41] text-white font-bold py-3 transition disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {loading ? 'Submitting…' : 'Submit'}
              </button>

              {/* Google Forms hidden fields (safe to include) */}
              <input type="hidden" name="fvv" value="1" />
              <input type="hidden" name="fbzx" value="-1" />
            </form>
          ) : (
            <div className="rounded-xl border border-emerald-500/30 bg-emerald-50 p-6 text-[#0f5132]">
              <h2 className="text-xl font-bold mb-1">Thank you!</h2>
              <p className="text-sm">Weve received your application. Our team will review and reach out shortly.</p>
            </div>
          )}
        </div>
      </div>
    </main>
  );
} 