export const metadata = {
  title: 'Contact Sajedar | AI Chatbots Agency',
  description: 'Get in touch with Sajedar to design, build, and support your custom AI chatbot. WhatsApp, email, and quick form available.',
  alternates: { canonical: '/Contact' },
  openGraph: {
    type: 'website',
    title: 'Contact Sajedar | AI Chatbots Agency',
    description: 'Get in touch with Sajedar to design, build, and support your custom AI chatbot. WhatsApp, email, and quick form available.',
    url: 'https://sajedar.com/Contact',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Sajedar | AI Chatbots Agency',
    description: 'Get in touch with Sajedar to design, build, and support your custom AI chatbot.',
  },
};

export default function Contact() {
  const contactJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Contact Sajedar',
    description: 'Contact Sajedar to discuss custom AI chatbot solutions.',
    url: '/Contact',
    mainEntity: {
      '@type': 'Organization',
      name: 'Sajedar',
      url: 'https://sajedar.com',
      email: 'dimanjan@sajedar.com',
      logo: '/sajedar-logo.png',
      sameAs: [
        'https://www.linkedin.com/company/sajedar/',
        'https://www.facebook.com/sajedardotcom',
        'https://www.youtube.com/@sajedar_chatbots',
        'https://www.tiktok.com/@sajedar_chatbots'
      ],
      contactPoint: [{
        '@type': 'ContactPoint',
        contactType: 'customer support',
        availableLanguage: ['en'],
        telephone: '+9779860479751'
      }]
    }
  } as const;

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: '/' },
      { '@type': 'ListItem', position: 2, name: 'Contact', item: '/Contact' }
    ]
  } as const;

  return (
    <main className="min-h-screen w-full bg-gradient-to-br from-[#18181b] via-[#23243a] to-[#1a1a2e] flex flex-col items-center justify-center px-4 py-24">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(contactJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <div className="max-w-2xl w-full bg-[#23243a] bg-opacity-90 rounded-3xl shadow-xl p-8 border border-white/10">
        <h1 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6 text-center">Contact Us</h1>
        <section className="text-gray-300 text-base leading-relaxed flex flex-col gap-6">
          <form className="flex flex-col gap-4" action="https://formspree.io/f/xqaqogoj" method="POST">
            <input type="text" name="name" placeholder="Your Name" required className="bg-[#18181b] bg-opacity-80 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-400/60 focus:border-emerald-400 transition shadow" />
            <input type="email" name="email" placeholder="Your Email" required className="bg-[#18181b] bg-opacity-80 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-400/60 focus:border-emerald-400 transition shadow" />
            <textarea name="message" placeholder="Your Message" required className="bg-[#18181b] bg-opacity-80 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-400/60 focus:border-emerald-400 transition shadow min-h-[100px] resize-none" />
            <button type="submit" className="bg-gradient-to-br from-emerald-400 to-emerald-600 text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:opacity-90 transition text-lg">Send Message</button>
          </form>
          <div className="mt-8 text-center">
            <div className="mb-2">Or reach us at:</div>
            <div className="text-emerald-400 font-mono">dimanjan@sajedar.com</div>
            <div className="text-gray-400 mt-1">WhatsApp: <a href="https://wa.me/9779860479751" className="underline text-emerald-400">+977 9860479751</a>
            <div className="mt-4">
              <a href="https://wa.me/9779860479751" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-gradient-to-br from-emerald-400 to-emerald-600 text-white font-semibold shadow hover:opacity-90 transition">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.472-.148-.67.15-.198.297-.767.966-.94 1.164-.173.198-.347.223-.644.075-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.52-.075-.149-.669-1.611-.916-2.206-.242-.579-.487-.5-.669-.51-.173-.008-.372-.01-.571-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.099 3.2 5.077 4.363.71.306 1.263.489 1.695.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.288.173-1.413-.074-.124-.272-.198-.57-.347z" fill="#fff"/><circle cx="12" cy="12" r="10" stroke="#22c55e" strokeWidth="2" fill="none"/></svg>
                Chat on WhatsApp
              </a>
            </div></div>
          </div>
        </section>
      </div>
    </main>
  );
} 