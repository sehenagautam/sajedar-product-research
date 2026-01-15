import Link from 'next/link';
import { AskAiGroup } from '@emblemvault/ask-ai';

export function Footer() {
  return (
    <footer className="w-full py-10 flex flex-col items-center bg-[#18181b] text-gray-400 text-sm font-sora border-t border-white/10 mt-8">
      {/* Main Navigation Links - Centered */}
      <div className="flex flex-wrap justify-center gap-8 mb-8">
        <Link
          href="/resources"
          className="px-6 py-2 rounded-full border border-white/10 hover:bg-white/5 transition-colors text-white font-medium"
        >
          Resources
        </Link>
      </div>

      {/* Brand Section - Centered */}
      <div className="flex items-center gap-2 mb-2">
        <span className="text-orange-400 font-mono font-bold text-lg">Sajedar</span>
        <span>•</span>
        <span className="text-white">AI Agent Builder Agency</span>
      </div>

      {/* AI Summary Buttons */}
      <div className="mb-6 mt-4 w-full flex justify-center px-4">
        <AskAiGroup
          goal="Request an AI summary of Sajedar"
          services={{
            chatgpt: true,
            claude: true,
            gemini: true,
            grok: true,
            perplexity: true,
            google: true, // Google AI
            kagi: true,
            agentHustle: true,
            emblemAi: true,
          }}
          variant="outline"
          size="sm"
        />
      </div>

      {/* Copyright - Centered */}
      <div className="text-center">© {new Date().getFullYear()} Sajedar. All rights reserved.</div>
    </footer>
  );
}
