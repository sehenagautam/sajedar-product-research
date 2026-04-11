import Image from 'next/image';

export function TestimonialsSection() {
  const testimonials = [
    {
      id: 0,
      name: "Rohit Bista",
      company: "Latta Kapada",
      role: "Owner",
      quote: "The agent handles everything — from showing product details to collecting addresses and advance payments. Customers love how smooth the experience is, and I get notified instantly for every order.",
      profilePic: "/lattakapada.webp",
      rating: 5
    },
    {
      id: 1,
      name: "Lakshmi Pokharel",
      company: "Ashwi",
      role: "Owner",
      quote: "Agent implementation has provided us with a stable way to generate new demand for our furniture. We can quickly test demand for new furniture designs with its help. I am impressed.",
      profilePic: "/Ashwi.webp",
      rating: 5
    },
    {
      id: 2,
      name: "Prem Manandhar",
      company: "Misha Clothing & Apparels",
      role: "Owner",
      quote: "We had previously abandoned the idea of boosting on facebook because we would have no time and capacity to respond to leads. Agent makes that fear irrelevant.",
      profilePic: "/osha.webp",
      rating: 5
    },
    {
      id: 3,
      name: "Dimanjan Dahal",
      company: "Sajedar.com",
      role: "Founder",
      quote: "Of course it wouldn’t be nice if I didn’t use my agent to respond on my own Facebook page.",
      profilePic: "/Sajedar.webp",
      rating: 5
    }
  ];

  const TestimonialCard = ({ testimonial }: { testimonial: typeof testimonials[0] }) => (
    <div className="flex-shrink-0 w-80 bg-white/60 backdrop-blur-sm border border-stone-200 rounded-xl p-6 mx-4 shadow-sm">
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 rounded-full flex-shrink-0 bg-stone-100 flex items-center justify-center mr-4 text-emerald-600 font-bold text-lg border border-stone-200">
          {testimonial.name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase()}
        </div>
        <div>
          <h4 className="text-[#292524] font-semibold text-sm">
            {testimonial.name}
          </h4>
          <p className="text-[#57534e] text-xs">{testimonial.role}</p>
          <p className="text-emerald-600 text-xs font-medium">{testimonial.company}</p>
        </div>
      </div>

      <blockquote className="text-[#57534e] text-sm leading-relaxed mt-3 italic">
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={`testimonial-${testimonial.id}`} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}
