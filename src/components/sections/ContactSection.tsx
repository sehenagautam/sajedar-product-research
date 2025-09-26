import { Linkedin, Facebook } from 'lucide-react';

export function ContactSection() {
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
          action="https://formspree.io/f/xqaqogoj" 
          method="POST"
        >
          <input 
            type="text" 
            name="name" 
            placeholder="Your Name" 
            required 
            className="bg-[#18181b] bg-opacity-80 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-400/60 focus:border-emerald-400 transition shadow" 
          />
          <input 
            type="email" 
            name="email" 
            placeholder="Your Email" 
            required 
            className="bg-[#18181b] bg-opacity-80 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-400/60 focus:border-emerald-400 transition shadow" 
          />
          <input 
            type="text" 
            name="company" 
            placeholder="Your Company" 
            required 
            className="bg-[#18181b] bg-opacity-80 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-400/60 focus:border-emerald-400 transition shadow" 
          />
          <textarea 
            name="message" 
            placeholder="Your Message" 
            required 
            className="bg-[#18181b] bg-opacity-80 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-400/60 focus:border-emerald-400 transition shadow min-h-[120px] resize-none" 
          />
          <button 
            type="submit" 
            className="bg-gradient-to-br from-emerald-400 to-emerald-600 text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:opacity-90 transition text-lg"
          >
            Send Message
          </button>
        </form>
        
        {/* Social/contact links */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-6 w-full">
          <a 
            href="https://wa.me/9779860479751?text=Hi%2C%20I%20found%20Sajedar%20and%20would%20like%20to%20know%20more!" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center gap-2 px-5 py-3 rounded-lg bg-gradient-to-br from-emerald-400 to-emerald-600 text-white font-semibold shadow hover:opacity-90 transition text-lg w-full sm:w-auto justify-center"
          >
            {/* WhatsApp icon */}
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.472-.148-.67.15-.198.297-.767.966-.94 1.164-.173.198-.347.223-.644.075-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.52-.075-.149-.669-1.611-.916-2.206-.242-.579-.487-.5-.669-.51-.173-.008-.372-.01-.571-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.099 3.2 5.077 4.363.71.306 1.263.489 1.695.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.288.173-1.413-.074-.124-.272-.198-.57-.347z" fill="#fff"/>
              <circle cx="12" cy="12" r="10" stroke="#22c55e" strokeWidth="2" fill="none"/>
            </svg>
            WhatsApp
          </a>
          <a 
            href="https://www.linkedin.com/company/sajedar/?viewAsMember=true" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center gap-2 px-5 py-3 rounded-lg bg-[#23243a] border border-white/10 text-white font-semibold shadow hover:bg-emerald-900/20 transition text-lg w-full sm:w-auto justify-center"
          >
            {/* LinkedIn icon */}
            <Linkedin size={22} stroke="#22c55e" fill="none" />
            LinkedIn
          </a>
          <a 
            href="https://www.facebook.com/sajedardotcom" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center gap-2 px-5 py-3 rounded-lg bg-[#23243a] border border-white/10 text-white font-semibold shadow hover:bg-emerald-900/20 transition text-lg w-full sm:w-auto justify-center"
          >
            {/* Facebook icon */}
            <Facebook size={22} stroke="#22c55e" fill="none" />
            Facebook
          </a>
        </div>
      </div>
    </section>
  );
}
