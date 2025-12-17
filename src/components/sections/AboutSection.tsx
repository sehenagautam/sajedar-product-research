import Image from 'next/image';

export default function AboutSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#18181b] via-[#23243a] to-[#1a1a2e] py-32">
      
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#2eb44722,transparent_60%)]" />

      <div className="relative max-w-5xl mx-auto px-6 text-center">
        
        {/* Logo */}
        <Image
          src="/sajedar-new-logo.png"
          alt="Sajedar Logo"
          width={96}
          height={96}
          className="mx-auto mb-8"
        />

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">
          About Sajedar
        </h1>

        {/* Content */}
        <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
          <p>
            <strong className="text-white">Sajedar</strong> means
            <span className="text-emerald-400 font-semibold"> partner</span>.
            We exist to be your trusted AI business partner.
          </p>

          <p>
            Sajedar helps businesses automate conversations using intelligent
            AI chatbots. We build systems for Facebook Messenger, websites,
            and messaging platforms that work twenty four seven.
          </p>

          <p>
            Our AI chatbots engage customers, answer questions, capture leads,
            and support business growth. We focus on clarity, speed, and
            meaningful conversations that deliver results.
          </p>
        </div>

      </div>
    </section>
  );
}
