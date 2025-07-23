export function FAQSection() {
  const faqs = [
    {
      question: "What makes Sajedar different from other chatbot providers?",
      answer: "We build every chatbot from scratch, tailored to your business needs—no templates or generic bots. You get a solution that fits your brand, your workflows, and your goals."
    },
    {
      question: "How long does it take to launch a custom chatbot?",
      answer: "Most projects go live in 2–4 weeks, depending on complexity and integrations. We work fast, but never at the expense of quality."
    },
    {
      question: "Can you integrate with our existing tools and CRM?",
      answer: "Yes! We support 50+ integrations and can connect your chatbot to most modern platforms, CRMs, and business tools."
    },
    {
      question: "What kind of support do you offer after launch?",
      answer: "We provide ongoing support, monitoring, and optimization. You'll always have a direct line to our team for help or improvements."
    },
    {
      question: "Is Sajedar suitable for small businesses or startups?",
      answer: "Absolutely. We work with companies of all sizes and can tailor our approach to fit your budget and growth stage."
    }
  ];

  return (
    <section className="w-full bg-gradient-to-br from-[#18181b] via-[#23243a] to-[#1a1a2e] py-20 px-4 flex flex-col items-center border-t border-white/10">
      <div className="max-w-2xl w-full mx-auto flex flex-col items-center gap-8">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6 text-center">
          Frequently Asked Questions
        </h2>
        <div className="w-full flex flex-col gap-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-[#23243a] rounded-2xl p-6 border border-white/10 shadow">
              <h3 className="text-lg font-bold text-emerald-400 mb-2">
                {faq.question}
              </h3>
              <p className="text-gray-300">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 