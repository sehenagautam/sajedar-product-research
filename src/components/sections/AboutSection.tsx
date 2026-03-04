import Image from 'next/image';

export default function AboutSection() {
  return (
    <section className="relative overflow-hidden py-32">

      {/* Background glow */}
      {/* Background glow - Removed for clean white theme to match homepage */}
      {/* <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#10b98122,transparent_60%)]" /> */}

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
        <h1 className="text-4xl md:text-5xl font-bold text-[#292524] mb-8">
          About Sajedar
        </h1>

        {/* Content */}
        <div className="space-y-6 text-lg text-[#57534e] leading-relaxed">
          <p>
            <strong className="text-[#292524]">Sajedar</strong> means
            <span className="text-emerald-500 font-semibold"> partner</span>.
            We exist to be your trusted AI sales partner.
          </p>

          <p>
            We primarily build and optimize Meta ecosystem sales systems, with Facebook Page and Messenger as our core implementation focus.
          </p>

          <p>
            Our AI agents converts leads to sales and support your businesses' growth. We focus on clarity, speed, and
            meaningful conversations that deliver results.
          </p>
        </div>

      </div>
    </section>
  );
}
