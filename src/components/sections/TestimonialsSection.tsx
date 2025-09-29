import React from 'react';

export function TestimonialsSection() {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      company: "Ashwi Furniture",
      role: "CEO",
      quote: "Sajedar's AI chatbot has revolutionized our customer service. Response time improved by 80% and customer satisfaction is at an all-time high.",
      profilePic: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      rating: 5
    },
    {
      id: 2,
      name: "Michael Chen",
      company: "Crackgineers",
      role: "Technical Director",
      quote: "The AI agent handles complex engineering queries with precision. Our clients love the instant technical support and detailed explanations.",
      profilePic: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      rating: 5
    },
    {
      id: 3,
      name: "Dr. Emily Rodriguez",
      company: "Health Bridge Hospital",
      role: "Chief Medical Officer",
      quote: "Our AI chatbot provides 24/7 healthcare assistance. Patients can book appointments, get health information, and receive emergency guidance instantly.",
      profilePic: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=150&h=150&fit=crop&crop=face",
      rating: 5
    },
    {
      id: 4,
      name: "Rajesh Kumar",
      company: "Deep Darshan Traders",
      role: "Managing Director",
      quote: "The AI automation has streamlined our business operations. Client inquiries are handled efficiently, and our team can focus on strategic decisions.",
      profilePic: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      rating: 5
    },
    {
      id: 5,
      name: "Lisa Thompson",
      company: "TechStart Solutions",
      role: "Founder",
      quote: "Sajedar's AI implementation exceeded our expectations. The chatbot understands context and provides personalized solutions to our clients.",
      profilePic: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      rating: 5
    },
    {
      id: 6,
      name: "David Park",
      company: "InnovateCorp",
      role: "CTO",
      quote: "The AI agent integrates seamlessly with our existing systems. It's like having a knowledgeable team member available 24/7.",
      profilePic: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
      rating: 5
    },
    {
      id: 7,
      name: "Maria Garcia",
      company: "Global Retail Co.",
      role: "Customer Experience Manager",
      quote: "Our customer engagement has increased by 300% since implementing Sajedar's AI chatbot. It's a game-changer for our business.",
      profilePic: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
      rating: 5
    },
    {
      id: 8,
      name: "James Wilson",
      company: "FinanceFirst",
      role: "Operations Director",
      quote: "The AI handles complex financial queries with accuracy. Our clients appreciate the instant responses and detailed explanations.",
      profilePic: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face",
      rating: 5
    }
  ];

  // Duplicate testimonials for seamless loop
  const topTestimonials = testimonials;
  const topDuplicated = [...topTestimonials, ...topTestimonials];

  const bottomTestimonials = [
    { id: 101, name: "Anita Sharma", company: "Evergreen Organics", role: "COO", quote: "Our WhatsApp and Messenger bots handle 70% of pre-sales questions. The team at Sajedar made rollout painless.", profilePic: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=150&h=150&fit=crop&crop=face", rating: 5 },
    { id: 102, name: "Omar Hassan", company: "Skyline Travels", role: "Head of CX", quote: "Bookings increased 24% after we added rich-media suggestions. Customers love the instant itineraries.", profilePic: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=150&h=150&fit=crop&crop=face", rating: 5 },
    { id: 103, name: "Priya Nair", company: "Clinico Labs", role: "Product Manager", quote: "Escalation rules + AI triage reduced ticket backlog to near zero. Amazing impact in 3 weeks.", profilePic: "https://images.unsplash.com/photo-1544005316-04ce1f6eeef2?w=150&h=150&fit=crop&crop=face", rating: 5 },
    { id: 104, name: "Daniel Reed", company: "BuildRight", role: "Operations Lead", quote: "N8n workflows orchestrated our CRM, sheets, and chatbot. Manual data entry is gone.", profilePic: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?w=150&h=150&fit=crop&crop=face", rating: 5 },
    { id: 105, name: "Aisha Khan", company: "Bloom Beauty", role: "Founder", quote: "Brand voice tuning made replies feel on-brand. Customers think they chat with our team.", profilePic: "https://images.unsplash.com/photo-1554151228-14d9def656e4?w=150&h=150&fit=crop&crop=face", rating: 5 },
    { id: 106, name: "Tom Williams", company: "FreshMart", role: "E‑commerce Lead", quote: "Product discovery via images boosted AOV by 18%. Setup was fast and measurable.", profilePic: "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?w=150&h=150&fit=crop&crop=face", rating: 5 },
    { id: 107, name: "Nina Petrova", company: "EduPro", role: "Marketing Director", quote: "Multi-lingual bot opened two new markets for us without expanding the support team.", profilePic: "https://images.unsplash.com/photo-1544005318-94a3f5f7b9b7?w=150&h=150&fit=crop&crop=face", rating: 5 },
    { id: 108, name: "Javier Ortiz", company: "FinServe", role: "VP, Client Success", quote: "Context memory keeps conversations coherent across channels. NPS jumped by 22 points.", profilePic: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face", rating: 5 }
  ];
  const bottomDuplicated = [...bottomTestimonials, ...bottomTestimonials];

  const TestimonialCard = ({ testimonial }: { testimonial: typeof testimonials[0] }) => (
    <div className="flex-shrink-0 w-80 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 mx-4">
      <div className="flex items-center mb-4">
        <img
          src={testimonial.profilePic}
          alt={testimonial.name}
          className="w-12 h-12 rounded-full object-cover mr-4"
        />
        <div>
          <h4 className="text-white font-semibold text-sm">{testimonial.name}</h4>
          <p className="text-gray-400 text-xs">{testimonial.role}</p>
          <p className="text-emerald-400 text-xs font-medium">{testimonial.company}</p>
        </div>
      </div>
      
      <div className="flex items-center mb-3">
        {[...Array(testimonial.rating)].map((_, i) => (
          <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
      
      <blockquote className="text-gray-300 text-sm leading-relaxed">
        "{testimonial.quote}"
      </blockquote>
    </div>
  );

  return (
    <section className="w-full bg-[#18181b] py-24 px-4 flex flex-col items-center border-t border-white/10">
      <div className="max-w-6xl w-full mx-auto flex flex-col gap-16">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center gap-4">
          <span className="text-emerald-400 text-xs font-bold uppercase tracking-widest mb-2 block">
            Client Success Stories
          </span>
          <h2 className="text-5xl md:text-6xl font-serif font-bold text-white mb-2 leading-tight tracking-tight">
            What Our <span className="text-emerald-400">Clients Say</span>
          </h2>
          <p className="text-lg md:text-2xl text-gray-200 max-w-3xl mb-6">
            Discover how businesses across different industries have transformed their customer engagement 
            with Sajedar's AI-powered solutions. Real results from real clients.
          </p>
        </div>

        {/* Animated Testimonials */}
        <div className="relative overflow-hidden">
          {/* Top Row - Left to Right */}
          <div className="flex animate-scroll-left">
            {topDuplicated.map((testimonial, index) => (
              <TestimonialCard key={`top-${testimonial.id}-${index}`} testimonial={testimonial} />
            ))}
          </div>
          
          {/* Bottom Row - Right to Left */}
          <div className="flex animate-scroll-right mt-8">
            {bottomDuplicated.map((testimonial, index) => (
              <TestimonialCard key={`bottom-${testimonial.id}-${index}`} testimonial={testimonial} />
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-4 gap-8 mt-16">
          <div className="text-center">
            <div className="text-4xl font-bold text-emerald-400 mb-2">98%</div>
            <div className="text-gray-300 text-sm">Client Satisfaction</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-emerald-400 mb-2">24/7</div>
            <div className="text-gray-300 text-sm">AI Support</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-emerald-400 mb-2">300%</div>
            <div className="text-gray-300 text-sm">Engagement Increase</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-emerald-400 mb-2">5+</div>
            <div className="text-gray-300 text-sm">Happy Clients and counting...</div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-emerald-900/30 to-purple-900/30 border border-emerald-500/30 rounded-xl p-8 backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Join Our Success Stories?</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Let Sajedar transform your business with AI-powered customer engagement. 
              Join the growing list of satisfied clients who have revolutionized their operations.
            </p>
            <a href="/?message=I want to start my AI chatbot journey.#contact" className="px-8 py-4 bg-emerald-500 hover:bg-emerald-600 text-white font-bold rounded-lg transition-colors duration-200">Start Your Journey</a>
            <a href="/?message=Please share relevant AI chatbot case studies.#contact" className="px-8 py-4 bg-emerald-500 hover:bg-emerald-600 text-white font-bold rounded-lg transition-colors duration-200">View Case Studies</a>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes scroll-right {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }

        .animate-scroll-left {
          animation: scroll-left 60s linear infinite;
        }

        .animate-scroll-right {
          animation: scroll-right 60s linear infinite;
        }

        .animate-scroll-left:hover,
        .animate-scroll-right:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
