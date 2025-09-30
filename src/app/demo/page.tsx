import Link from 'next/link';

export const metadata = {
  title: 'Facebook Messenger AI Demos',
  description: 'Try live Facebook Messenger chatbots for Ashwi Furniture, Crackgineers, Health Bridge Hospital, and Deep Darshan Traders. Direct messenger links and demo videos.',
  alternates: { canonical: 'https://sajedar.com/demo' },
  openGraph: {
    type: 'website',
    title: 'Facebook Messenger AI Demos | Sajedar',
    description: 'Live demos of AI chatbots across multiple businesses. Direct messenger links and videos.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Facebook Messenger AI Demos | Sajedar',
    description: 'Live demos of AI chatbots across multiple businesses. Direct messenger links and videos.'
  }
}

export default function DemoPage() {
  const demos = [
    {
      id: 'ashwi-furniture',
      name: 'Ashwi Furniture',
      description: 'AI-powered furniture consultation and sales assistant',
      facebookUrl: 'https://www.facebook.com/ashwifurniture',
      messengerUrl: 'https://m.me/ashwifurniture',
      youtubeVideo: null,
      features: ['Product recommendations', 'Size consultation', 'Style matching', 'Price quotes'],
      color: 'from-blue-500 to-purple-600'
    },
    {
      id: 'crackgineers',
      name: 'Crackgineers',
      description: 'Engineering solutions and technical support chatbot',
      facebookUrl: 'https://www.facebook.com/crackgineers',
      messengerUrl: 'https://m.me/crackgineers',
      youtubeVideo: null,
      features: ['Technical support', 'Project consultation', 'Engineering solutions', 'Quote generation'],
      color: 'from-green-500 to-teal-600'
    },
    {
      id: 'health-bridge',
      name: 'Health Bridge Hospital',
      description: 'Medical appointment booking and health information assistant',
      facebookUrl: 'https://www.facebook.com/healthbridgehospital',
      messengerUrl: 'https://m.me/healthbridgehospital',
      youtubeVideo: null,
      features: ['Appointment booking', 'Health information', 'Doctor consultation', 'Emergency support'],
      color: 'from-red-500 to-pink-600'
    },
    {
      id: 'deep-darshan',
      name: 'Deep Darshan Traders Pvt. Ltd.',
      description: 'Business trading and supply chain management assistant',
      facebookUrl: 'https://www.facebook.com/deepdarshantraders',
      messengerUrl: 'https://m.me/deepdarshantraders',
      youtubeVideo: null,
      features: ['Product catalog', 'Price inquiries', 'Order processing', 'Supply chain info'],
      color: 'from-orange-500 to-yellow-600'
    }
  ];

  const getColorClasses = (color) => {
    const colorMap = {
      'from-blue-500 to-purple-600': 'bg-gradient-to-r from-blue-500 to-purple-600',
      'from-green-500 to-teal-600': 'bg-gradient-to-r from-green-500 to-teal-600',
      'from-red-500 to-pink-600': 'bg-gradient-to-r from-red-500 to-pink-600',
      'from-orange-500 to-yellow-600': 'bg-gradient-to-r from-orange-500 to-yellow-600'
    };
    return colorMap[color] || 'bg-gradient-to-r from-blue-500 to-purple-600';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#18181b] via-[#23243a] to-[#1a1a2e]">
      <div className="bg-black/20 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold text-white">
              Sajedar
            </Link>
            <Link 
              href="/?message=I want to build my own AI Messenger bot for my business.#contact" 
              className="px-6 py-2 bg-emerald-500 hover:bg-emerald-600 text-white rounded-lg transition-colors"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-white mb-6">
            Live AI Chatbot <span className="text-emerald-400">Demos</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Experience real AI chatbots in action across different businesses. 
            Click to chat with our live demos and see how AI can transform your customer experience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
          {demos.map((demo) => (
            <div key={demo.id} id={demo.id} className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden hover:border-white/20 transition-all duration-300">
              <div className={`${getColorClasses(demo.color)} p-6`}>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold text-white">{demo.name}</h3>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-white/80 text-sm">Live</span>
                  </div>
                </div>
                <p className="text-white/90">{demo.description}</p>
              </div>

              <div className="p-6">
                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3">AI Capabilities:</h4>
                  <div className="flex flex-wrap gap-2">
                    {demo.features.map((feature, index) => (
                      <span key={index} className="px-3 py-1 bg-white/10 text-white/80 rounded-full text-sm">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="space-y-3">
                  <a
                    href={demo.messengerUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full block text-center px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition-colors"
                  >
                    💬 Chat with {demo.name}
                  </a>
                  
                  <a
                    href={demo.facebookUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full block text-center px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold rounded-lg transition-colors"
                  >
                    📘 Visit Facebook Page
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center bg-gradient-to-r from-emerald-900/30 to-blue-900/30 border border-emerald-500/30 rounded-2xl p-8 backdrop-blur-sm">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Build Your Own AI Chatbot?
          </h2>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Let Sajedar create a custom AI chatbot for your business. 
            We'll build it in days, not months, and it will work exactly like these demos.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/?message=I want to build my own AI Messenger bot for my business.#contact" 
              className="px-8 py-3 bg-emerald-500 hover:bg-emerald-600 text-white font-bold rounded-lg transition-colors"
            >
              Get Started
            </Link>
            <Link 
              href="/Contact" 
              className="px-8 py-3 bg-white/10 hover:bg-white/20 text-white font-bold rounded-lg transition-colors border border-white/20"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}