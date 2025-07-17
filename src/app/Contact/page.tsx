export default function Contact() {
  return (
    <main className="min-h-screen w-full bg-gradient-to-br from-[#18181b] via-[#23243a] to-[#1a1a2e] flex flex-col items-center justify-center px-4 py-24">
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
            <div className="text-emerald-400 font-mono">hello@sajedar.com</div>
            <div className="text-gray-400 mt-1">WhatsApp: <a href="https://wa.me/9779860479751" className="underline text-emerald-400">+977 9860479751</a></div>
          </div>
        </section>
      </div>
    </main>
  );
} 