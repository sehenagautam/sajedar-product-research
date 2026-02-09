import React from 'react';

export function TestimonialsSection() {
  const testimonials = [
    {
      id: 0,
      name: "RJ Manandhar",
      company: "Latta Kapada",
      role: "Store Owner",
      quote: "The agent handles everything — from showing product details to collecting addresses and advance payments. Customers love how smooth the experience is, and I get notified instantly for every order.",
      profilePic: "/lattakapada.png",
      rating: 5
    },
    {
      id: 1,
      name: "Lakshman Paudel",
      company: "Ashwi",
      role: "Founder",
      quote: "Sajedar helped us automate customer conversations across platforms. Our response speed improved dramatically without hiring more staff.",
      profilePic: "/Ashwi.png",
      rating: 5
    },
    {
      id: 2,
      name: "Prakash Maharjan",
      company: "Osha Clothing & Apparels",
      role: "Managing Director",
      quote: "From order queries to product availability, the AI agent handles everything smoothly. Customers feel attended to at all times.",
      profilePic: "/osha.png",
      rating: 5
    },
    {
      id: 3,
      name: "Dimanjan Dahal",
      company: "Sajedar Chatbot",
      role: "Founder",
      quote: "Of course it wouldn’t be nice if I didn’t use my agent to respond on my own Facebook page.",
      profilePic: "/Sajedar.png",
      rating: 5
    }
  ];

  const topDuplicated = [...testimonials, ...testimonials];



  const TestimonialCard = ({ testimonial }: { testimonial: typeof testimonials[0] }) => (
    <div className="flex-shrink-0 w-80 bg-white/60 backdrop-blur-sm border border-stone-200 rounded-xl p-6 mx-4 shadow-sm">
      <div className="flex items-center mb-4">
        <img
          src={testimonial.profilePic}
          alt={testimonial.name}
          className="w-12 h-12 rounded-full object-cover mr-4"
        />
        <div>
          <h4 className="text-[#292524] font-semibold text-sm">
            {testimonial.name}
          </h4>
          <p className="text-[#57534e] text-xs">{testimonial.role}</p>
          <p className="text-emerald-600 text-xs font-medium">{testimonial.company}</p>
        </div>
      </div>

      <div className="flex items-center mb-3">
        {[...Array(testimonial.rating)].map((_, i) => (
          <svg key={i} className="w-4 h-4 text-yellow-500 fill-current" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>

      <blockquote className="text-[#57534e] text-sm leading-relaxed">
        "{testimonial.quote}"
      </blockquote>
    </div>
  );

  return (
    <section className="w-full bg-[#fafaf9] py-24 px-4 flex flex-col items-center">
      <div className="max-w-6xl w-full mx-auto flex flex-col gap-16">

        <div className="flex flex-col items-center text-center gap-4">
          <h2 className="text-4xl md:text-6xl font-semibold tracking-tight text-[#292524] mb-2">
            <span className="text-[#57534e]">What Our</span>{' '}
            <span className="text-emerald-500">
              Clients Say
            </span>
          </h2>
        </div>

        <div className="relative overflow-hidden">
          <div className="flex animate-scroll-left">
            {topDuplicated.map((testimonial, index) => (
              <TestimonialCard key={`top-${testimonial.id}-${index}`} testimonial={testimonial} />
            ))}
          </div>


        </div>
      </div>

      <style jsx>{`
        @keyframes scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .animate-scroll-left {
          animation: scroll-left 60s linear infinite;
        }

        .animate-scroll-left:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
