'use client';

import { useEffect, useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Header from '../../components/Header';
import { Footer } from '../../components/sections/Footer';

function ContactForm() {
  const searchParams = useSearchParams();
  const [message, setMessage] = useState('');

  useEffect(() => {
    // Prefill form data from URL parameters
    const source = searchParams.get('source');
    const score = searchParams.get('score');
    const business = searchParams.get('business');
    const type = searchParams.get('type');
    const email = searchParams.get('email');
    const phone = searchParams.get('phone');

    if (source === 'readiness' && score) {
      const readinessMessage = `Hi! I just completed the Sajedar Automation Readiness Assessment and scored ${score}%.

Business: ${business || 'Not specified'}
Type: ${type || 'Not specified'}
Email: ${email || 'Not provided'}
Phone: ${phone || 'Not provided'}

I'm interested in discussing automation solutions for my business. Please contact me to schedule a consultation.`;

      setMessage(readinessMessage);
    } else {
      // Also check for simple 'message' param like ContactSection does
      const msgParam = searchParams.get('message');
      if (msgParam) {
        setMessage(decodeURIComponent(msgParam));
      }
    }
  }, [searchParams]);

  const source = searchParams.get('source');
  const score = searchParams.get('score');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Construct WhatsApp message with form data
    const whatsappMessage = `Hi Sajedar! I found you through your website.

*Message:*
${message}`;

    // Open WhatsApp with prefilled message
    const whatsappUrl = `https://wa.me/9779860479751?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <>
      <Header />
      <main className="min-h-screen w-full bg-[#fafaf9] flex flex-col items-center justify-center px-4 py-24 font-sans text-[#44403c] mt-16">
        <div className="max-w-xl w-full flex flex-col items-center gap-8">

          {source === 'readiness' && score && (
            <div className="w-full mb-2 p-4 bg-emerald-50 border border-emerald-200 rounded-lg shadow-sm">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-2xl">📊</span>
                <h2 className="text-lg font-semibold text-emerald-800">Automation Readiness Assessment Complete!</h2>
              </div>
              <p className="text-sm text-gray-700">
                Your score: <span className="font-bold text-emerald-600">{score}%</span> -
                {parseInt(score) >= 71 ? ' Automation-Ready' : parseInt(score) >= 41 ? ' Emerging Stage' : ' Manual-First Stage'}
              </p>
              <p className="text-xs text-gray-500 mt-2">
                We've prefilled the message below with your results.
              </p>
            </div>
          )}

          <div className="flex flex-col items-center text-center gap-2 mb-4">
            <h1 className="text-4xl md:text-5xl font-bold text-[#292524] mb-2 leading-tight tracking-tight" style={{ fontFamily: 'SF Pro Display, -apple-system, BlinkMacSystemFont, sans-serif' }}>
              Contact
            </h1>
          </div>

          <form className="w-full bg-white rounded-3xl shadow-xl border border-stone-200 p-8 flex flex-col gap-6" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-4">
              <textarea
                name="message"
                placeholder="Tell us about your business needs..."
                rows={4}
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full px-4 py-3 bg-stone-50 border border-stone-300 rounded-lg text-[#292524] placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent resize-none"
              />
            </div>
            <button type="submit" className="w-full px-6 py-3 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-stone-100 shadow-md">
              Message founder on Whatsapp
            </button>
          </form>

        </div>
      </main>
      <Footer />
    </>
  );
}

export default function Contact() {
  return (
    <Suspense fallback={
      <main className="min-h-screen w-full bg-[#fafaf9] flex flex-col items-center justify-center px-4 py-24">
        <div className="max-w-xl w-full bg-white rounded-3xl shadow-xl p-8 border border-stone-200">
          <div className="animate-pulse space-y-4">
            <div className="h-8 bg-stone-200 rounded w-1/3 mx-auto mb-8"></div>
            <div className="h-32 bg-stone-200 rounded"></div>
            <div className="h-12 bg-stone-200 rounded"></div>
          </div>
        </div>
      </main>
    }>
      <ContactForm />
    </Suspense>
  );
} 
