export function FAQSection() {
  const faqs = [
    {
      question: "What makes Sajedar different from other agent providers?",
      answer: "We build tailored Agent specific for your business needs. Hop on a short call and we will figure out everything you need."
    },
    {
      question: "How long does it take to launch a custom agent?",
      answer: "Between 1 to 3 days."
    },
    {
      question: "Can you integrate with our existing tools and CRM?",
      answer: "Yes! As long as it has an API, we can integrate with it."
    },
    {
      question: "What kind of support do you offer after launch?",
      answer: "Commission based is a long term relationship. We will be there for you as long as we work together."
    },
    {
      question: "Is Sajedar suitable for online retail shops?",
      answer: "Yes! You are our primary clients right now."
    }
  ];

  return (
    <section className="w-full bg-[#fafaf9] py-20 px-4 flex flex-col items-center">
      <div className="max-w-2xl w-full mx-auto flex flex-col items-center gap-8">
        <h2 className="text-3xl md:text-4xl font-bold text-[#292524] mb-6 text-center">
          Frequently Asked Questions
        </h2>
        <div className="w-full flex flex-col gap-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white/60 rounded-2xl p-6">
              <h3 className="text-lg font-bold text-emerald-500 mb-2">
                {faq.question}
              </h3>
              <p className="text-[#57534e]">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 