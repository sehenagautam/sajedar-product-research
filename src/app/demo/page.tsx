import React from 'react';
export const metadata = {
  title: 'Facebook Messenger AI Demos',
  description: 'Try live Facebook Messenger chatbots for Ashwi Furniture, Crackgineers, Health Bridge Hospital, and Deep Darshan Traders. Direct messenger links and demo videos.',
  alternates: { canonical: '/demo' },
  openGraph: {
    title: 'Facebook Messenger AI Demos | Sajedar',
    description: 'Live demos of AI chatbots across multiple businesses. Direct messenger links and videos.',
    url: 'https://sajedar.com/demo'
  }
}
export default function DemoPage() {
  const demos = [
    {
      id: 'ashwi-furniture',
      name: 'Ashwi Furniture',
      description: 'AI-powered furniture consultation and customer support through Facebook Messenger',
      facebookUrl: 'https://www.facebook.com/profile.php?id=61579049243889',
      messengerUrl: 'https://m.me/61579049243889',
      youtubeVideoId: '', // Placeholder for future YouTube video
      features: ['Furniture Recommendations', 'Price Inquiries', 'Order Tracking', 'Customer Support'],
      color: 'blue'
    },
    {
      id: 'crackgineers',
      name: 'Crackgineers',
      description: 'Engineering solutions and technical support via AI chatbot on Facebook Messenger',
      facebookUrl: 'https://www.facebook.com/profile.php?id=61580366211478',
      messengerUrl: 'https://m.me/61580366211478',
      youtubeVideoId: '', // Placeholder for future YouTube video
      features: ['Technical Support', 'Project Consultations', 'Engineering Solutions', 'Client Communication'],
      color: 'green'
    },
    {
      id: 'health-bridge-hospital',
      name: 'Health Bridge Hospital',
      description: 'Healthcare assistance and appointment booking through Facebook Messenger',
      facebookUrl: 'https://www.facebook.com/profile.php?id=61579893515630',
      messengerUrl: 'https://m.me/61579893515630',
      youtubeVideoId: '', // Placeholder for future YouTube video
      features: ['Appointment Booking', 'Health Information', 'Doctor Consultations', 'Emergency Support'],
      color: 'red'
    },
    {
      id: 'deep-darshan-traders',
      name: 'Deep Darshan Traders Pvt. Ltd.',
      description: 'Business trading and commercial services with AI-powered customer assistance',
      facebookUrl: 'https://www.facebook.com/profile.php?id=61580946694935',
      messengerUrl: 'https://m.me/61580946694935',
      youtubeVideoId: '', // Placeholder for future YouTube video
      features: ['Business Inquiries', 'Product Information', 'Trade Consultations', 'Client Relations'],
      color: 'purple'
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: {
        bg: 'from-blue-900/20 to-blue-800/20',
        border: 'border-blue-500/30',
        button: 'bg-blue-500 hover:bg-blue-600',
        accent: 'text-blue-400',
        icon: 'bg-blue-500'
      },
      green: {
        bg: 'from-green-900/20 to-green-800/20',
        border: 'border-green-500/30',
        button: 'bg-green-500 hover:bg-green-600',
        accent: 'text-green-400',
        icon: 'bg-green-500'
      },
      red: {
        bg: 'from-red-900/20 to-red-800/20',
        border: 'border-red-500/30',
        button: 'bg-red-500 hover:bg-red-600',
        accent: 'text-red-400',
        icon: 'bg-red-500'
      },
      purple: {
        bg: 'from-purple-900/20 to-purple-800/20',
        border: 'border-purple-500/30',
        button: 'bg-purple-500 hover:bg-purple-600',
        accent: 'text-purple-400',
        icon: 'bg-purple-500'
      }
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.blue;
  };

  return (
    <div className="min-h-screen bg-[#18181b] text-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-emerald-900/20 to-purple-900/20 border-b border-white/10">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <div className="text-center">
            <span className="text-emerald-400 text-xs font-bold uppercase tracking-widest mb-4 block">
              Live Demonstrations
            </span>
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-white mb-6 leading-tight tracking-tight">
              Facebook Messenger <span className="text-emerald-400">AI Demos</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto mb-8">
              Experience our AI-powered Facebook Messenger chatbots in action. 
              See how different businesses leverage our technology for customer engagement, 
              support, and automation.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center space-x-2 bg-white/10 rounded-lg px-4 py-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-sm text-gray-300">Live Demos</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/10 rounded-lg px-4 py-2">
                <svg className="w-4 h-4 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                <span className="text-sm text-gray-300">Facebook Messenger</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/10 rounded-lg px-4 py-2">
                <svg className="w-4 h-4 text-red-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
                <span className="text-sm text-gray-300">YouTube Videos</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Demo Sections */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="space-y-16">
          {demos.map((demo, index) => {
            const colors = getColorClasses(demo.color);
            return (
              <div key={demo.id} className="relative">
                <div className={`bg-gradient-to-r ${colors.bg} border ${colors.border} rounded-2xl p-8 backdrop-blur-sm`}>
                  <div className="grid lg:grid-cols-2 gap-8 items-center">
                    {/* Left Side - Demo Info */}
                    <div className="space-y-6">
                      <div className="flex items-center space-x-4">
                        <div className={`w-16 h-16 ${colors.icon} rounded-xl flex items-center justify-center`}>
                          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                          </svg>
                        </div>
                        <div>
                          <h2 className="text-3xl font-bold text-white">{demo.name}</h2>
                          <p className={`text-sm ${colors.accent} font-medium`}>Facebook Messenger AI Demo</p>
                        </div>
                      </div>

                      <p className="text-lg text-gray-300 leading-relaxed">
                        {demo.description}
                      </p>

                      {/* Features */}
                      <div className="space-y-3">
                        <h3 className="text-lg font-semibold text-white">Key Features:</h3>
                        <div className="grid grid-cols-2 gap-2">
                          {demo.features.map((feature, idx) => (
                            <div key={idx} className="flex items-center space-x-2">
                              <div className={`w-2 h-2 ${colors.icon} rounded-full`}></div>
                              <span className="text-sm text-gray-300">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex flex-wrap gap-4 pt-4">
                        <a
                          href={demo.messengerUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`px-6 py-3 ${colors.button} text-white font-semibold rounded-lg transition-colors duration-200 flex items-center space-x-2`}
                        >
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                          </svg>
                          <span>Try Messenger Bot</span>
                        </a>
                        <a
                          href={demo.facebookUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg transition-colors duration-200 flex items-center space-x-2"
                        >
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                          </svg>
                          <span>View Facebook Page</span>
                        </a>
                      </div>
                    </div>

                    {/* Right Side - Video Placeholder */}
                    <div className="relative">
                      <div className="bg-black rounded-xl overflow-hidden shadow-2xl">
                        {demo.youtubeVideoId ? (
                          <iframe
                            width="100%"
                            height="315"
                            src={`https://www.youtube.com/embed/${demo.youtubeVideoId}`}
                            title={`${demo.name} Demo Video`}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="w-full h-80"
                          ></iframe>
                        ) : (
                          <div className="w-full h-80 bg-gradient-to-br from-gray-800 to-gray-900 flex flex-col items-center justify-center">
                            <div className="text-center space-y-4">
                              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto">
                                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                                </svg>
                              </div>
                              <div>
                                <h3 className="text-lg font-semibold text-white mb-2">Demo Video Coming Soon</h3>
                                <p className="text-sm text-gray-400">YouTube video will be added here</p>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                      
                      {/* Video Overlay Info */}
                      <div className="absolute -bottom-4 -right-4 bg-white rounded-lg p-3 shadow-lg max-w-xs">
                        <div className="text-xs text-gray-600 font-medium mb-1">Demo Status</div>
                        <p className="text-xs text-gray-700">Live Facebook Messenger Bot • Ready to Test</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-4 -left-4 w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center animate-pulse">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="bg-gradient-to-r from-emerald-900/20 to-purple-900/20 border-t border-white/10">
        <div className="max-w-4xl mx-auto px-4 py-16 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Build Your Own AI Messenger Bot?</h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Join these businesses in revolutionizing customer engagement with AI-powered Facebook Messenger chatbots. 
            Let Sajedar create a custom solution for your business.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="px-8 py-4 bg-emerald-500 hover:bg-emerald-600 text-white font-bold rounded-lg transition-colors duration-200">
              Get Started
            </button>
            <button className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-bold rounded-lg transition-colors duration-200">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
