import { Rocket, Users, Sparkles, Lightbulb, Mic, Bot } from 'lucide-react';

export function FeaturesSection() {
  return (
    {/* COMMENTED OUT - AI Chatbots, Tailored for Your Business Section */}
    {/*
    <section className="w-full bg-[#18181b] py-24 px-4 flex flex-col items-center border-t border-white/10">
      <div className="max-w-6xl w-full mx-auto flex flex-col gap-16">
        {/* Headline and description for agency */}
        {/*
        <div className="flex flex-col items-center text-center gap-4">
          <span className="text-emerald-400 text-xs font-bold uppercase tracking-widest mb-2 block">
            Custom Chatbot Agency
          </span>
          <h2 className="text-5xl md:text-6xl font-serif font-bold text-white mb-2 leading-tight tracking-tight">
            AI Chatbots, Tailored for Your Business
          </h2>
          <p className="text-lg md:text-2xl text-gray-200 max-w-2xl mb-6">
            <span className="text-emerald-400 font-bold">Sajedar</span> is a{' '}
            <span className="text-emerald-400 font-bold">hands-on agency</span> specializing in designing, building, and supporting{' '}
            <span className="text-emerald-400 font-bold">custom AI chatbots</span> for{' '}
            <span className="text-emerald-400 font-bold">ambitious brands</span>. We{' '}
            <span className="text-emerald-400 font-bold">work closely with you</span> from first strategy call to launch and beyond, ensuring your chatbot fits your unique needs and delivers{' '}
            <span className="text-emerald-400 font-bold">real value</span> to your customers and team.{' '}
            <span className="text-emerald-400 font-bold">No off-the-shelf bots</span>—just{' '}
            <span className="text-emerald-400 font-bold">thoughtful, tailored solutions</span> that help you stand out and grow.
          </p>
          <a 
            href="#" 
            className="inline-block px-7 py-3 rounded-lg border border-white text-white font-semibold text-lg hover:bg-white/10 transition mb-2"
          >
            Book a Free Consultation
          </a>
        </div>

        {/* Performance/Stats Row */}
        {/*
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center w-full">
          {/* Stat Cards */}
          {/*
          <div className="flex flex-col gap-6 items-center">
            <div className="flex flex-col items-center">
              <span className="text-5xl md:text-6xl font-mono font-bold text-emerald-400">98%</span>
              <span className="text-gray-400 text-lg uppercase tracking-widest">Client Satisfaction</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-5xl md:text-6xl font-mono font-bold text-emerald-400">30,000+</span>
              <span className="text-gray-400 text-lg uppercase tracking-widest text-center">Conversations Automated</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-4xl font-mono font-bold text-emerald-400">25+</span>
              <span className="text-gray-400 text-lg uppercase tracking-widest">Custom Bots Launched</span>
            </div>
          </div>
          
          {/* Donut Chart for Resolution Rate */}
          {/*
          <div className="flex flex-col items-center justify-center">
            <svg width="180" height="180" viewBox="0 0 180 180">
              <circle cx="90" cy="90" r="80" stroke="#23243a" strokeWidth="20" fill="none" />
              <circle 
                cx="90" 
                cy="90" 
                r="80" 
                stroke="#22c55e" 
                strokeWidth="20" 
                fill="none" 
                strokeDasharray="502" 
                strokeDashoffset="200" 
                strokeLinecap="round" 
              />
              <text 
                x="50%" 
                y="50%" 
                textAnchor="middle" 
                dy=".3em" 
                fontSize="2.5rem" 
                fill="#22c55e" 
                fontFamily="monospace" 
                fontWeight="bold"
              >
                20%+
              </text>
            </svg>
            <span className="text-gray-400 text-sm mt-2">Avg. Increase in Engagement</span>
          </div>
          
          {/* Bar Chart for Competitor Comparison */}
          {/*
          <div className="flex flex-col items-center">
            <svg width="200" height="120" viewBox="0 0 200 120">
              <rect x="20" y="60" width="24" height="40" rx="6" fill="#23243a" />
              <rect x="56" y="50" width="24" height="50" rx="6" fill="#23243a" />
              <rect x="92" y="30" width="24" height="70" rx="6" fill="#22c55e" />
              <rect x="128" y="70" width="24" height="30" rx="6" fill="#23243a" />
              <rect x="164" y="55" width="24" height="45" rx="6" fill="#23243a" />
              <text 
                x="104" 
                y="28" 
                textAnchor="middle" 
                fontSize="1.5rem" 
                fill="#22c55e" 
                fontFamily="monospace" 
                fontWeight="bold"
              >
                #1
              </text>
            </svg>
            <span className="text-gray-400 text-sm mt-2">Among Peers (Client Engagement)</span>
          </div>
        </div>

        {/* Feature Highlights Grid */}
        {/*
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-12">
          {/* Integrations */}
          {/*
          <div className="bg-[#23243a] rounded-2xl p-8 flex flex-col items-center gap-4 shadow border border-white/10">
            <Rocket size={36} stroke="#22c55e" strokeWidth={2} />
            <span className="text-4xl font-mono font-bold text-emerald-400">50+</span>
            <span className="text-2xl font-bold text-white">Integrations</span>
            <span className="text-gray-400 text-sm uppercase tracking-widest">Plug-and-play</span>
            <span className="text-gray-300 text-center">
              Connect your chatbot to the tools you already use—no headaches.
            </span>
          </div>
          
          {/* Support */}
          {/*
          <div className="bg-[#23243a] rounded-2xl p-8 flex flex-col items-center gap-4 shadow border border-white/10">
            <Users size={36} stroke="#22c55e" strokeWidth={2} />
            <span className="text-4xl font-mono font-bold text-emerald-400">24/7</span>
            <span className="text-2xl font-bold text-white">Support</span>
            <span className="text-gray-400 text-sm uppercase tracking-widest">Always-on</span>
            <span className="text-gray-300 text-center">
              We're a small team, but we're always here when you need us.
            </span>
          </div>
          
          {/* Faster Response */}
          {/*
          <div className="bg-[#23243a] rounded-2xl p-8 flex flex-col items-center gap-4 shadow border border-white/10">
            <Sparkles size={36} stroke="#22c55e" strokeWidth={2} />
            <span className="text-4xl font-mono font-bold text-emerald-400">3x</span>
            <span className="text-2xl font-bold text-white">Faster Response</span>
            <span className="text-gray-400 text-sm uppercase tracking-widest">Speed & Analytics</span>
            <span className="text-gray-300 text-center">
              Our bots help you reply to customers in seconds, not hours.
            </span>
          </div>
          
          {/* More Deals */}
          {/*
          <div className="bg-[#23243a] rounded-2xl p-8 flex flex-col items-center gap-4 shadow border border-white/10">
            <Lightbulb size={36} stroke="#22c55e" strokeWidth={2} />
            <span className="text-4xl font-mono font-bold text-emerald-400">15%</span>
            <span className="text-2xl font-bold text-white">More Deals Closed</span>
            <span className="text-gray-400 text-sm uppercase tracking-widest">AI-Powered</span>
            <span className="text-gray-300 text-center">
              Clients have seen a measurable lift in sales and qualified leads.
            </span>
          </div>
          
          {/* Voice Enabled */}
          {/*
          <div className="bg-[#23243a] rounded-2xl p-8 flex flex-col items-center gap-4 shadow border border-white/10">
            <Mic size={36} stroke="#22c55e" strokeWidth={2} />
            <span className="text-2xl font-bold text-white">Voice & Multilingual</span>
            <span className="text-gray-400 text-sm uppercase tracking-widest">Conversational</span>
            <span className="text-gray-300 text-center">
              Support for voice and multiple languages, so you can reach more people.
            </span>
          </div>
          
          {/* Avg. Rating */}
          {/*
          <div className="bg-[#23243a] rounded-2xl p-8 flex flex-col items-center gap-4 shadow border border-white/10">
            <Bot size={36} stroke="#22c55e" strokeWidth={2} />
            <span className="text-4xl font-mono font-bold text-emerald-400">4.8/5</span>
            <span className="text-2xl font-bold text-white">Avg. Rating</span>
            <span className="text-gray-400 text-sm uppercase tracking-widest">Loved by Customers</span>
            <span className="text-gray-300 text-center">
              Our clients and their customers love the personal, on-brand experience.
            </span>
          </div>
        </div>
      </div>
    </section>
    */}
    <></>
  );
}
