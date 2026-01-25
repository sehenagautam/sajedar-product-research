import React from 'react';

export function VoiceIntegrationSection() {
  return (
    <section className="w-full bg-[#18181b] py-24 px-4 flex flex-col items-center border-t border-white/10">
      <div className="max-w-6xl w-full mx-auto flex flex-col gap-16">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center gap-4">
          <span className="text-emerald-400 text-xs font-bold uppercase tracking-widest mb-2 block">
            Multi-Modal AI
          </span>
          <h2 className="text-5xl md:text-6xl font-serif font-bold text-white mb-2 leading-tight tracking-tight">
            <span className="text-emerald-400">Voice Integration</span> for Natural Conversations
          </h2>
          <p className="text-lg md:text-2xl text-gray-200 max-w-3xl mb-6">
            Break free from typing. Your agent now understands and responds through voice,
            creating truly natural conversations. From voice commands to speech synthesis,
            experience the future of human-AI interaction.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
          {/* Left Side - Voice Features */}
          <div className="space-y-8">
            <div className="bg-gradient-to-r from-emerald-900/20 to-transparent border border-emerald-500/30 rounded-xl p-6 backdrop-blur-sm">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-emerald-500 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Advanced Speech Recognition</h3>
                  <p className="text-gray-300">Real-time voice-to-text with 99% accuracy. Understands multiple languages, accents, and natural speech patterns for seamless voice interactions.</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-emerald-900/20 to-transparent border border-emerald-500/30 rounded-xl p-6 backdrop-blur-sm">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-emerald-500 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Natural Voice Synthesis</h3>
                  <p className="text-gray-300">Human-like text-to-speech with customizable voices, emotions, and speaking styles. Create branded voice experiences that match your brand personality.</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-emerald-900/20 to-transparent border border-emerald-500/30 rounded-xl p-6 backdrop-blur-sm">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-emerald-500 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Voice Commands & Controls</h3>
                  <p className="text-gray-300">Execute complex actions through voice commands. Navigate menus, place orders, schedule appointments, and control systems with simple voice instructions.</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-emerald-900/20 to-transparent border border-emerald-500/30 rounded-xl p-6 backdrop-blur-sm">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-emerald-500 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2m-9 0h10m-10 0a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V6a2 2 0 00-2-2" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Multi-Modal Interactions</h3>
                  <p className="text-gray-300">Seamlessly switch between voice, text, and visual interactions. Customers can choose their preferred communication method while maintaining conversation context.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Voice Interface Demo */}
          <div className="relative">
            {/* Voice Chat Interface */}
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden transform rotate-1 hover:rotate-0 transition-transform duration-500">
              {/* Voice Chat Header */}
              <div className="bg-gradient-to-r from-indigo-500 to-purple-600 px-4 py-3 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm font-medium text-white">Sajedar Voice AI</div>
                    <div className="text-xs text-indigo-100">Voice Enabled • Multi-Modal</div>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-xs text-indigo-100">Listening</span>
                </div>
              </div>

              {/* Voice Conversation */}
              <div className="p-4 bg-gray-50 h-96 flex flex-col">
                <div className="flex-1 space-y-4 overflow-y-auto">
                  {/* Voice Input Indicator */}
                  <div className="flex justify-end">
                    <div className="bg-indigo-500 text-white rounded-lg px-4 py-2 max-w-xs">
                      <div className="flex items-center space-x-2">
                        <div className="flex space-x-1">
                          <div className="w-1 h-1 bg-white rounded-full animate-pulse"></div>
                          <div className="w-1 h-1 bg-white rounded-full animate-pulse" style={{ animationDelay: '0.1s' }}></div>
                          <div className="w-1 h-1 bg-white rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                        </div>
                        <span className="text-xs">Listening...</span>
                      </div>
                      <span className="text-xs text-indigo-100 block mt-1">2:30 PM</span>
                    </div>
                  </div>

                  {/* Voice Message */}
                  <div className="flex justify-end">
                    <div className="bg-indigo-500 text-white rounded-lg px-4 py-2 max-w-xs">
                      <p className="text-sm">"I need help with my order. Can you check the status?"</p>
                      <div className="flex items-center space-x-2 mt-1">
                        <svg className="w-3 h-3 text-indigo-200" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                        <span className="text-xs text-indigo-200">Voice Message</span>
                      </div>
                      <span className="text-xs text-indigo-100 block mt-1">2:30 PM</span>
                    </div>
                  </div>

                  {/* AI Voice Response */}
                  <div className="flex justify-start">
                    <div className="bg-white text-gray-800 rounded-lg px-4 py-2 max-w-xs shadow-sm">
                      <p className="text-sm">"I'd be happy to help you check your order status. Let me look that up for you."</p>
                      <div className="flex items-center space-x-2 mt-1">
                        <svg className="w-3 h-3 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                        <span className="text-xs text-gray-500">AI Voice Response</span>
                      </div>
                      <span className="text-xs text-gray-500 block mt-1">2:30 PM</span>
                    </div>
                  </div>

                  {/* Order Status Card */}
                  <div className="flex justify-start">
                    <div className="bg-white rounded-lg px-4 py-2 shadow-sm max-w-xs">
                      <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-lg p-3">
                        <h4 className="text-sm font-medium text-gray-800 mb-2">Order #12345 Status</h4>
                        <div className="space-y-1 text-xs">
                          <div className="flex justify-between">
                            <span className="text-gray-600">Status:</span>
                            <span className="text-green-600 font-medium">In Transit</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Expected Delivery:</span>
                            <span className="text-gray-800">Tomorrow</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Tracking:</span>
                            <span className="text-blue-600">1Z999AA1234567890</span>
                          </div>
                        </div>
                      </div>
                      <span className="text-xs text-gray-500 block mt-1">2:31 PM</span>
                    </div>
                  </div>

                  {/* Voice Command */}
                  <div className="flex justify-end">
                    <div className="bg-indigo-500 text-white rounded-lg px-4 py-2 max-w-xs">
                      <p className="text-sm">"Can you send me the tracking link?"</p>
                      <div className="flex items-center space-x-2 mt-1">
                        <svg className="w-3 h-3 text-indigo-200" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                        <span className="text-xs text-indigo-200">Voice Command</span>
                      </div>
                      <span className="text-xs text-indigo-100 block mt-1">2:31 PM</span>
                    </div>
                  </div>

                  {/* AI Response with Action */}
                  <div className="flex justify-start">
                    <div className="bg-white text-gray-800 rounded-lg px-4 py-2 max-w-xs shadow-sm">
                      <p className="text-sm">"Absolutely! I've sent the tracking link to your email. You can also track it directly here:"</p>
                      <div className="mt-2">
                        <button className="w-full bg-blue-500 text-white px-3 py-1 rounded text-xs hover:bg-blue-600 transition">
                          Track Package
                        </button>
                      </div>
                      <span className="text-xs text-gray-500 block mt-1">2:31 PM</span>
                    </div>
                  </div>

                  {/* Voice Command for Additional Help */}
                  <div className="flex justify-end">
                    <div className="bg-indigo-500 text-white rounded-lg px-4 py-2 max-w-xs">
                      <p className="text-sm">"What if I need to change the delivery address?"</p>
                      <div className="flex items-center space-x-2 mt-1">
                        <svg className="w-3 h-3 text-indigo-200" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                        <span className="text-xs text-indigo-200">Voice Query</span>
                      </div>
                      <span className="text-xs text-indigo-100 block mt-1">2:32 PM</span>
                    </div>
                  </div>

                  {/* AI Voice Response with Options */}
                  <div className="flex justify-start">
                    <div className="bg-white text-gray-800 rounded-lg px-4 py-2 max-w-xs shadow-sm">
                      <p className="text-sm">"I can help you with that! You can either say 'change address' or click the button below to update your delivery information."</p>
                      <div className="mt-2 space-y-1">
                        <button className="w-full bg-indigo-500 text-white px-3 py-1 rounded text-xs hover:bg-indigo-600 transition">
                          Change Delivery Address
                        </button>
                        <button className="w-full bg-gray-200 text-gray-700 px-3 py-1 rounded text-xs hover:bg-gray-300 transition">
                          Speak to Human Agent
                        </button>
                      </div>
                      <span className="text-xs text-gray-500 block mt-1">2:32 PM</span>
                    </div>
                  </div>
                </div>

                {/* Voice Controls */}
                <div className="flex items-center justify-between mt-4 pt-3 border-t border-gray-200">
                  <div className="flex items-center space-x-4 text-xs">
                    <div className="flex items-center space-x-1">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-gray-600">Voice Active</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
                      <span className="text-gray-600">Multi-Modal</span>
                    </div>
                  </div>
                  <div className="text-xs text-gray-500">99% Voice Accuracy</div>
                </div>
              </div>
            </div>

            {/* Floating Voice Elements */}
            <div className="absolute -top-8 -right-8 space-y-2">
              {/* Voice Recognition Status */}
              <div className="bg-white rounded-lg p-3 shadow-lg border-l-4 border-indigo-500 max-w-xs">
                <div className="text-xs text-indigo-600 font-medium mb-1">Voice Recognition</div>
                <p className="text-xs text-gray-700">99% Accuracy • 5 Languages</p>
              </div>

              {/* Voice Commands */}
              <div className="bg-white rounded-lg p-3 shadow-lg border-l-4 border-purple-500 max-w-xs">
                <div className="text-xs text-purple-600 font-medium mb-1">Voice Commands</div>
                <p className="text-xs text-gray-700">"Track order", "Change address", "Help"</p>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -left-4 w-8 h-8 bg-indigo-500 rounded-full flex items-center justify-center animate-pulse">
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
              </svg>
            </div>

            <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center animate-bounce">
              <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Voice Features Grid */}
        <div className="grid md:grid-cols-3 gap-6 mt-16">
          <div className="bg-gradient-to-br from-indigo-900/20 to-purple-900/20 border border-indigo-500/30 rounded-xl p-6 backdrop-blur-sm">
            <div className="text-center">
              <div className="w-12 h-12 bg-indigo-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Speech Recognition</h3>
              <p className="text-gray-300 text-sm">99% accuracy with support for multiple languages, accents, and natural speech patterns. Works in noisy environments.</p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 border border-purple-500/30 rounded-xl p-6 backdrop-blur-sm">
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Voice Synthesis</h3>
              <p className="text-gray-300 text-sm">Human-like speech with customizable voices, emotions, and speaking styles. Create branded voice experiences.</p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-900/20 to-cyan-900/20 border border-blue-500/30 rounded-xl p-6 backdrop-blur-sm">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Voice Commands</h3>
              <p className="text-gray-300 text-sm">Execute complex actions through natural voice commands. Navigate, order, schedule, and control with simple voice instructions.</p>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-indigo-900/30 to-purple-900/30 border border-indigo-500/30 rounded-xl p-8 backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Add Voice to Your Chatbot?</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Transform your customer interactions with natural voice capabilities.
              Create more accessible, engaging, and human-like conversations that drive better results.
            </p>
            <a href="/?message=I want to enable voice AI in my chatbot.#contact" className="px-8 py-4 bg-indigo-500 hover:bg-indigo-600 text-white font-bold rounded-lg transition-colors duration-200 mr-4">
              Enable Voice AI
            </a>
            <a href="/?message=Please show a brand voice customization demo.#contact" className="px-8 py-4 bg-purple-500 hover:bg-purple-600 text-white font-bold rounded-lg transition-colors duration-200">
              Voice Demo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
} 