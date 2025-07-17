import React from 'react';

const agentAvatar = (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <rect x="4" y="7" width="16" height="10" rx="5" fill="#fff" />
    <rect x="8" y="3" width="8" height="6" rx="3" fill="#22c55e" />
    <circle cx="8.5" cy="12" r="1.5" fill="#22c55e" />
    <circle cx="15.5" cy="12" r="1.5" fill="#22c55e" />
  </svg>
);

function ChatBubble({ sender, text, isAgent }: { sender: string; text: string; isAgent: boolean }) {
  return (
    <div className={`max-w-[80%] px-5 py-3 text-base font-medium shadow-md rounded-2xl ${isAgent ? 'self-start bg-gradient-to-br from-white/10 to-emerald-900/30 text-white border border-white/10' : 'self-end bg-gradient-to-br from-orange-400 to-orange-500 text-white'}`}> 
      {isAgent && (
        <span className="font-bold flex items-center gap-2 mb-1">
          {agentAvatar}Zen • AI Agent
        </span>
      )}
      {text}
    </div>
  );
}

const EXAMPLES = [
  {
    industry: 'SaaS / IT',
    user: 'What’s the main difference between my current PayVona plan and the Pro plan?',
    agent: 'Great question – The Pro plan is designed for teams that need more flexibility and support. It includes everything in our Basic plan, plus additional features like custom reporting, API access, and dedicated support. Are there any features you want to learn more about?',
  },
  {
    industry: 'Hospitality',
    user: 'Can I get a late checkout for my room at Hotel Zen?',
    agent: 'Absolutely! Late checkout is available until 2pm for a small fee. Would you like me to arrange it for you now?',
  },
  {
    industry: 'Education',
    user: 'How do I access my online course materials?',
    agent: 'You can access all your course materials by logging into your student portal and clicking on “My Courses.” Need help finding a specific resource?',
  },
  {
    industry: 'Finance',
    user: 'How do I reset my online banking password?',
    agent: 'For your security, you can reset your password by clicking “Forgot Password” on the login page. Would you like me to send you a direct link?',
  },
  {
    industry: 'Healthcare',
    user: 'Can I schedule a virtual appointment with Dr. Sharma?',
    agent: 'Yes, virtual appointments are available Monday to Friday. Please let me know your preferred date and time, and I’ll book it for you.',
  },
];

export default function ChatDemoSection() {
  return (
    <section className="relative w-full flex flex-col items-center justify-center py-24 px-4 bg-[#10111a] bg-opacity-90 backdrop-blur-lg border-t border-white/10">
      <div className="max-w-2xl w-full mx-auto rounded-3xl bg-gradient-to-br from-[#18181b] to-[#23243a] shadow-2xl p-0 overflow-hidden border border-white/10 relative">
        {/* Animated background dots for uniqueness */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <svg width="100%" height="100%" className="absolute inset-0">
            <circle cx="30" cy="40" r="6" fill="#22c55e" opacity="0.12">
              <animate attributeName="cy" values="40;60;40" dur="3s" repeatCount="indefinite" />
            </circle>
            <circle cx="90" cy="120" r="4" fill="#f59e42" opacity="0.10">
              <animate attributeName="cy" values="120;140;120" dur="2.5s" repeatCount="indefinite" />
            </circle>
            <circle cx="220" cy="80" r="5" fill="#3b82f6" opacity="0.10">
              <animate attributeName="cy" values="80;100;80" dur="2.8s" repeatCount="indefinite" />
            </circle>
            <circle cx="400" cy="160" r="7" fill="#22c55e" opacity="0.10">
              <animate attributeName="cy" values="160;180;160" dur="3.2s" repeatCount="indefinite" />
            </circle>
          </svg>
        </div>
        <div className="px-6 py-8 flex flex-col gap-10 bg-[#18181b] relative z-10">
          {EXAMPLES.map((ex, i) => (
            <div key={i} className="flex flex-col gap-2">
              <div className="text-emerald-400 font-bold text-sm mb-1">{ex.industry} Example</div>
              <ChatBubble sender="user" text={ex.user} isAgent={false} />
              <ChatBubble sender="zen" text={ex.agent} isAgent={true} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 