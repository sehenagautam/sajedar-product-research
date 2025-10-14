import Link from 'next/link';

export function Footer() {
  return (
    <footer className="w-full py-10 flex flex-col items-center bg-[#18181b] text-gray-400 text-sm font-sora border-t border-white/10 mt-8">
      {/* Main Navigation Links - Centered */}
      <div className="flex flex-wrap justify-center gap-8 mb-8">
        <div className="text-center">
          <h3 className="text-sm font-semibold leading-6 text-white mb-4">Sitemap</h3>
          <ul role="list" className="space-y-3">
            <li>
              <a href="/tutorials" className="text-sm leading-6 text-gray-300 hover:text-white transition-colors">Tutorials</a>
            </li>
            <li>
              <a href="/articles" className="text-sm leading-6 text-gray-300 hover:text-white transition-colors">Articles</a>
            </li>
            <li>
              <a href="/research" className="text-sm leading-6 text-gray-300 hover:text-white transition-colors">Research</a>
            </li>
            <li>
              <a href="/case-studies" className="text-sm leading-6 text-gray-300 hover:text-white transition-colors">Case Studies</a>
            </li>
            <li>
              <a href="/demo" className="text-sm leading-6 text-gray-300 hover:text-white transition-colors">Demo</a>
            </li>
            <li>
              <a href="/forum" className="text-sm leading-6 text-gray-300 hover:text-white transition-colors">Forum</a>
            </li>
            <li>
              <a href="/developer" className="text-sm leading-6 text-gray-300 hover:text-white transition-colors">Developer</a>
            </li>
          </ul>
        </div>
        
        <div className="text-center">
          <h3 className="text-sm font-semibold leading-6 text-white mb-4">Legal</h3>
          <ul role="list" className="space-y-3">
            <li>
              <Link href="/PrivacyPolicy" className="text-sm leading-6 text-gray-300 hover:text-white transition-colors">Privacy Policy</Link>
            </li>
            <li>
              <Link href="/TermsOfService" className="text-sm leading-6 text-gray-300 hover:text-white transition-colors">Terms of Service</Link>
            </li>
            <li>
              <Link href="/Contact" className="text-sm leading-6 text-gray-300 hover:text-white transition-colors">Contact</Link>
            </li>
          </ul>
        </div>

        <div className="text-center">
          <h3 className="text-sm font-semibold leading-6 text-white mb-4">Contact Info</h3>
          <ul role="list" className="space-y-3">
            <li>
              <div className="text-sm leading-6 text-gray-300 flex items-center justify-center space-x-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Kathmandu, Nepal</span>
              </div>
            </li>
            <li>
              <a 
                href="https://wa.me/9779760479751?text=Hi%20Sajedar!%20I%20found%20you%20through%20your%20website%20and%20I'm%20interested%20in%20building%20a%20custom%20AI%20chatbot%20for%20my%20business.%20Can%20you%20help%20me%20get%20started?" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm leading-6 text-gray-300 hover:text-white transition-colors flex items-center justify-center space-x-2"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
                <span>+977-9760479751</span>
                <span className="text-xs text-emerald-400">(WhatsApp preferred)</span>
              </a>
            </li>
            <li>
              <a 
                href="mailto:info@sajedar.com"
                className="text-sm leading-6 text-gray-300 hover:text-white transition-colors flex items-center justify-center space-x-2"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>info@sajedar.com</span>
              </a>
            </li>
          </ul>
        </div>

        <div className="text-center">
          <h3 className="text-sm font-semibold leading-6 text-white mb-4">Facebook Messenger Resources</h3>
          <ul role="list" className="space-y-3">
            <li>
              <Link href="/facebook-messenger" className="text-sm leading-6 text-gray-300 hover:text-white transition-colors">
                All Facebook Messenger Resources
              </Link>
            </li>
            <li>
              <Link href="/facebook-messenger-chatbot-tutorial" className="text-sm leading-6 text-gray-300 hover:text-white transition-colors">
                How to Create Facebook Messenger AI Chatbot
              </Link>
            </li>
            <li>
              <Link href="/tutorials/facebook-messenger-bot-development" className="text-sm leading-6 text-gray-300 hover:text-white transition-colors">
                Facebook Messenger Bot Development
              </Link>
            </li>
            <li>
              <Link href="/tutorials/connect-chatbot-to-facebook-messenger" className="text-sm leading-6 text-gray-300 hover:text-white transition-colors">
                Connect Chatbot to Facebook Messenger
              </Link>
            </li>
            <li>
              <Link href="/tutorials/facebook-messenger-chatbot-analytics" className="text-sm leading-6 text-gray-300 hover:text-white transition-colors">
                Facebook Messenger Chatbot Analytics
              </Link>
            </li>
            <li>
              <Link href="/tutorials/facebook-messenger-chatbot-for-ecommerce" className="text-sm leading-6 text-gray-300 hover:text-white transition-colors">
                E-commerce Facebook Messenger Chatbot
              </Link>
            </li>
            <li>
              <Link href="/tutorials/facebook-messenger-chatbot-for-healthcare" className="text-sm leading-6 text-gray-300 hover:text-white transition-colors">
                Healthcare Facebook Messenger Chatbot
              </Link>
            </li>
          </ul>
        </div>

        <div className="text-center">
          <h3 className="text-sm font-semibold leading-6 text-white mb-4">Follow Us</h3>
          <ul role="list" className="space-y-3">
            <li>
              <a 
                href="https://www.youtube.com/@sajedar_chatbots" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm leading-6 text-gray-300 hover:text-white transition-colors flex items-center justify-center space-x-2"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
                <span>YouTube</span>
              </a>
            </li>
            <li>
              <a 
                href="https://www.tiktok.com/@sajedar_chatbots" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm leading-6 text-gray-300 hover:text-white transition-colors flex items-center justify-center space-x-2"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
                <span>TikTok</span>
              </a>
            </li>
            <li>
              <a 
                href="https://www.linkedin.com/company/sajedar/?viewAsMember=true" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm leading-6 text-gray-300 hover:text-white transition-colors flex items-center justify-center space-x-2"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                <span>LinkedIn</span>
              </a>
            </li>
            <li>
              <a 
                href="https://www.facebook.com/sajedardotcom" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm leading-6 text-gray-300 hover:text-white transition-colors flex items-center justify-center space-x-2"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                <span>Facebook</span>
              </a>
            </li>
            <li>
              <a 
                href="https://discord.gg/FJbuEAbaqU" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm leading-6 text-gray-300 hover:text-white transition-colors flex items-center justify-center space-x-2"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.317 4.369A19.79 19.79 0 0016.557 3c-.184.33-.4.775-.548 1.124a18.27 18.27 0 00-4.018 0A8.26 8.26 0 0011.443 3c-1.362.25-2.706.646-3.76 1.195-2.451 3.542-3.116 6.99-2.78 10.396A19.97 19.97 0 007.85 16.9c.272-.373.58-.85.8-1.247-.442-.168-.862-.37-1.253-.603.105-.078.208-.159.308-.242 2.416 1.131 5.032 1.131 7.428 0 .1.083.203.164.308.242-.391.233-.811.435-1.253.603.22.397.528.874.8 1.247a19.97 19.97 0 003.947-2.309c.356-3.664-.603-7.07-2.616-10.222zM9.2 12.5c-.6 0-1.088-.55-1.088-1.226 0-.676.488-1.226 1.088-1.226.6 0 1.088.55 1.088 1.226 0 .676-.488 1.226-1.088 1.226zm5.6 0c-.6 0-1.088-.55-1.088-1.226 0-.676.488-1.226 1.088-1.226.6 0 1.088.55 1.088 1.226 0 .676-.488 1.226-1.088 1.226z"/>
                </svg>
                <span>Discord</span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Brand Section - Centered */}
      <div className="flex items-center gap-2 mb-2">
        <span className="text-orange-400 font-mono font-bold text-lg">Sajedar</span>
        <span>•</span>
        <span className="text-white">AI Agent Builder Agency</span>
      </div>
      
      {/* Copyright - Centered */}
      <div className="text-center">© {new Date().getFullYear()} Sajedar. All rights reserved.</div>
    </footer>
  );
}
