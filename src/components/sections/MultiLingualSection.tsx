import React from 'react';

export function MultiLingualSection() {
  return (
    <section className="w-full bg-[#23243a] py-24 px-4 flex flex-col items-center border-t border-white/10">
      <div className="max-w-6xl w-full mx-auto flex flex-col gap-16">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center gap-4">
          <span className="text-emerald-400 text-xs font-bold uppercase tracking-widest mb-2 block">
            Global Communication
          </span>
          <h2 className="text-5xl md:text-6xl font-serif font-bold text-white mb-2 leading-tight tracking-tight">
            <span className="text-emerald-400">Multi-Lingual</span> & Local Language Support
          </h2>
          <p className="text-lg md:text-2xl text-gray-200 max-w-3xl mb-6">
            Connect with customers worldwide in their native language. Our AI understands 
            local dialects, cultural nuances, and regional expressions to create authentic, 
            personalized conversations that resonate with every audience.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
          {/* Left Side - Language Features */}
          <div className="space-y-8">
            <div className="bg-gradient-to-r from-emerald-900/20 to-transparent border border-emerald-500/30 rounded-xl p-6 backdrop-blur-sm">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-emerald-500 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">100+ Languages Supported</h3>
                  <p className="text-gray-300">Native-level fluency in major world languages including English, Spanish, French, German, Chinese, Japanese, Arabic, Hindi, and many more with regional dialect recognition.</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-emerald-900/20 to-transparent border border-emerald-500/30 rounded-xl p-6 backdrop-blur-sm">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-emerald-500 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Cultural Adaptation</h3>
                  <p className="text-gray-300">Understands cultural context, local customs, and regional preferences. Adapts communication style, greetings, and business etiquette to match local cultural norms.</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-emerald-900/20 to-transparent border border-emerald-500/30 rounded-xl p-6 backdrop-blur-sm">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-emerald-500 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Dialect Recognition</h3>
                  <p className="text-gray-300">Automatically detects regional dialects and accents within the same language. Understands local slang, idioms, and expressions for authentic communication.</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-emerald-900/20 to-transparent border border-emerald-500/30 rounded-xl p-6 backdrop-blur-sm">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-emerald-500 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Real-time Translation</h3>
                  <p className="text-gray-300">Instant language switching and translation capabilities. Seamlessly transition between languages while maintaining conversation context and meaning.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Multi-Lingual Chat Demo */}
          <div className="relative">
            {/* Multi-Lingual Chat Interface */}
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden transform -rotate-1 hover:rotate-0 transition-transform duration-500">
              {/* Chat Header */}
              <div className="bg-gradient-to-r from-blue-500 to-teal-600 px-4 py-3 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm font-medium text-white">Sajedar Global AI</div>
                    <div className="text-xs text-blue-100">Multi-Lingual • Cultural Intelligence</div>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-xs text-blue-100">Global Ready</span>
                </div>
              </div>

              {/* Multi-Lingual Conversation */}
              <div className="p-4 bg-gray-50 h-96 flex flex-col">
                <div className="flex-1 space-y-4 overflow-y-auto">
                  {/* Language Selection */}
                  <div className="flex justify-center">
                    <div className="bg-blue-100 rounded-lg px-4 py-2">
                      <div className="flex items-center space-x-2">
                        <span className="text-xs text-blue-700">🌍</span>
                        <span className="text-xs text-blue-700 font-medium">Detected: Spanish (Mexico)</span>
                        <span className="text-xs text-blue-500">•</span>
                        <span className="text-xs text-blue-700">Cultural Context: Mexican Business</span>
                      </div>
                    </div>
                  </div>

                  {/* Spanish Customer Message */}
                  <div className="flex justify-end">
                    <div className="bg-blue-500 text-white rounded-lg px-4 py-2 max-w-xs">
                      <p className="text-sm">¡Hola! Necesito ayuda con mi pedido. ¿Pueden revisar el estado?</p>
                      <div className="flex items-center space-x-2 mt-1">
                        <span className="text-xs text-blue-200">🇲🇽</span>
                        <span className="text-xs text-blue-200">Spanish (MX)</span>
                      </div>
                      <span className="text-xs text-blue-100 block mt-1">2:45 PM</span>
                    </div>
                  </div>

                  {/* AI Response in Spanish */}
                  <div className="flex justify-start">
                    <div className="bg-white text-gray-800 rounded-lg px-4 py-2 max-w-xs shadow-sm">
                      <p className="text-sm">¡Por supuesto! Con gusto te ayudo a revisar el estado de tu pedido. Déjame buscarlo en nuestro sistema.</p>
                      <div className="flex items-center space-x-2 mt-1">
                        <span className="text-xs text-gray-500">🤖</span>
                        <span className="text-xs text-gray-500">AI Response (Spanish)</span>
                      </div>
                      <span className="text-xs text-gray-500 block mt-1">2:45 PM</span>
                    </div>
                  </div>

                  {/* Order Status in Spanish */}
                  <div className="flex justify-start">
                    <div className="bg-white rounded-lg px-4 py-2 shadow-sm max-w-xs">
                      <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-lg p-3">
                        <h4 className="text-sm font-medium text-gray-800 mb-2">Estado del Pedido #12345</h4>
                        <div className="space-y-1 text-xs">
                          <div className="flex justify-between">
                            <span className="text-gray-600">Estado:</span>
                            <span className="text-green-600 font-medium">En Tránsito</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Entrega Estimada:</span>
                            <span className="text-gray-800">Mañana</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Seguimiento:</span>
                            <span className="text-blue-600">1Z999AA1234567890</span>
                          </div>
                        </div>
                      </div>
                      <span className="text-xs text-gray-500 block mt-1">2:46 PM</span>
                    </div>
                  </div>

                  {/* Customer switches to English */}
                  <div className="flex justify-end">
                    <div className="bg-blue-500 text-white rounded-lg px-4 py-2 max-w-xs">
                      <p className="text-sm">Actually, can we continue in English? I'm more comfortable with it.</p>
                      <div className="flex items-center space-x-2 mt-1">
                        <span className="text-xs text-blue-200">🇺🇸</span>
                        <span className="text-xs text-blue-200">English (US)</span>
                      </div>
                      <span className="text-xs text-blue-100 block mt-1">2:47 PM</span>
                    </div>
                  </div>

                  {/* AI switches to English seamlessly */}
                  <div className="flex justify-start">
                    <div className="bg-white text-gray-800 rounded-lg px-4 py-2 max-w-xs shadow-sm">
                      <p className="text-sm">Of course! No problem at all. I can see your order is currently in transit and should be delivered tomorrow.</p>
                      <div className="flex items-center space-x-2 mt-1">
                        <span className="text-xs text-gray-500">🤖</span>
                        <span className="text-xs text-gray-500">AI Response (English)</span>
                      </div>
                      <span className="text-xs text-gray-500 block mt-1">2:47 PM</span>
                    </div>
                  </div>

                  {/* Language Detection Notice */}
                  <div className="flex justify-center">
                    <div className="bg-blue-50 rounded-lg px-3 py-1">
                      <span className="text-xs text-blue-600">🔄 Language switched to English • Context preserved</span>
                    </div>
                  </div>

                  {/* Customer in French */}
                  <div className="flex justify-end">
                    <div className="bg-blue-500 text-white rounded-lg px-4 py-2 max-w-xs">
                      <p className="text-sm">Parfait! Pouvez-vous m'envoyer le lien de suivi?</p>
                      <div className="flex items-center space-x-2 mt-1">
                        <span className="text-xs text-blue-200">🇫🇷</span>
                        <span className="text-xs text-blue-200">French</span>
                      </div>
                      <span className="text-xs text-blue-100 block mt-1">2:48 PM</span>
                    </div>
                  </div>

                  {/* AI responds in French */}
                  <div className="flex justify-start">
                    <div className="bg-white text-gray-800 rounded-lg px-4 py-2 max-w-xs shadow-sm">
                      <p className="text-sm">Bien sûr! Je vous envoie le lien de suivi par email. Vous pouvez aussi le consulter directement ici:</p>
                      <div className="mt-2">
                        <button className="w-full bg-blue-500 text-white px-3 py-1 rounded text-xs hover:bg-blue-600 transition">
                          Suivre le Colis
                        </button>
                      </div>
                      <div className="flex items-center space-x-2 mt-1">
                        <span className="text-xs text-gray-500">🤖</span>
                        <span className="text-xs text-gray-500">AI Response (French)</span>
                      </div>
                      <span className="text-xs text-gray-500 block mt-1">2:48 PM</span>
                    </div>
                  </div>
                </div>

                {/* Language Controls */}
                <div className="flex items-center justify-between mt-4 pt-3 border-t border-gray-200">
                  <div className="flex items-center space-x-4 text-xs">
                    <div className="flex items-center space-x-1">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-gray-600">Auto-Detect</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-gray-600">3 Languages</span>
                    </div>
                  </div>
                  <div className="text-xs text-gray-500">Cultural Context: Active</div>
                </div>
              </div>
            </div>

            {/* Floating Language Elements */}
            <div className="absolute -top-8 -right-8 space-y-2">
              {/* Language Support */}
              <div className="bg-white rounded-lg p-3 shadow-lg border-l-4 border-blue-500 max-w-xs">
                <div className="text-xs text-blue-600 font-medium mb-1">Languages Supported</div>
                <p className="text-xs text-gray-700">100+ Languages • 50+ Dialects</p>
              </div>

              {/* Cultural Intelligence */}
              <div className="bg-white rounded-lg p-3 shadow-lg border-l-4 border-teal-500 max-w-xs">
                <div className="text-xs text-teal-600 font-medium mb-1">Cultural Intelligence</div>
                <p className="text-xs text-gray-700">Local Customs • Business Etiquette</p>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -left-4 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center animate-pulse">
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
              </svg>
            </div>

            <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-teal-500 rounded-full flex items-center justify-center animate-bounce">
              <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Language Features Grid */}
        <div className="grid md:grid-cols-3 gap-6 mt-16">
          <div className="bg-gradient-to-br from-blue-900/20 to-teal-900/20 border border-blue-500/30 rounded-xl p-6 backdrop-blur-sm">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">100+ Languages</h3>
              <p className="text-gray-300 text-sm">Native-level fluency in major world languages with regional dialect recognition and local slang understanding.</p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-teal-900/20 to-cyan-900/20 border border-teal-500/30 rounded-xl p-6 backdrop-blur-sm">
            <div className="text-center">
              <div className="w-12 h-12 bg-teal-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Cultural Intelligence</h3>
              <p className="text-gray-300 text-sm">Understands local customs, business etiquette, and cultural nuances to create authentic, respectful conversations.</p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-cyan-900/20 to-blue-900/20 border border-cyan-500/30 rounded-xl p-6 backdrop-blur-sm">
            <div className="text-center">
              <div className="w-12 h-12 bg-cyan-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Real-time Translation</h3>
              <p className="text-gray-300 text-sm">Instant language switching while preserving conversation context and meaning across multiple languages.</p>
            </div>
          </div>
        </div>

        {/* Language Support List */}
        <div className="grid md:grid-cols-4 gap-4 mt-12">
          <div className="bg-white/5 rounded-lg p-4 border border-white/10">
            <h4 className="text-sm font-semibold text-white mb-2">🌍 European</h4>
            <p className="text-xs text-gray-300">English, French, German, Spanish, Italian, Portuguese, Dutch, Swedish, Norwegian, Danish, Finnish, Polish, Czech, Hungarian, Romanian</p>
          </div>
          <div className="bg-white/5 rounded-lg p-4 border border-white/10">
            <h4 className="text-sm font-semibold text-white mb-2">🌏 Asian</h4>
            <p className="text-xs text-gray-300">Chinese (Simplified/Traditional), Japanese, Korean, Thai, Vietnamese, Indonesian, Malay, Filipino, Hindi, Bengali, Urdu, Tamil, Telugu</p>
          </div>
          <div className="bg-white/5 rounded-lg p-4 border border-white/10">
            <h4 className="text-sm font-semibold text-white mb-2">🌍 Middle East</h4>
            <p className="text-xs text-gray-300">Arabic, Turkish, Persian, Hebrew, Kurdish, Armenian, Georgian, Azerbaijani, Uzbek, Kazakh</p>
          </div>
          <div className="bg-white/5 rounded-lg p-4 border border-white/10">
            <h4 className="text-sm font-semibold text-white mb-2">🌍 African</h4>
            <p className="text-xs text-gray-300">Swahili, Amharic, Yoruba, Igbo, Hausa, Zulu, Xhosa, Afrikaans, Somali, Malagasy</p>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-900/30 to-teal-900/30 border border-blue-500/30 rounded-xl p-8 backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Go Global with Your Chatbot?</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Break down language barriers and connect with customers worldwide. 
              Create authentic, culturally-aware conversations that drive global business growth.
            </p>
            <a href="/?message=I want to enable multi-lingual support in my chatbot.#contact" className="px-8 py-4 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-lg transition-colors duration-200 mr-4">
              Enable Multi-Lingual
            </a>
            <a href="/?message=Please show a multi-lingual chatbot demo.#contact" className="px-8 py-4 bg-teal-500 hover:bg-teal-600 text-white font-bold rounded-lg transition-colors duration-200">
              Language Demo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
} 