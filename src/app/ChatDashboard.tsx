import { useState } from 'react';
import { BarChart2, Users, MessageCircle, Clock, Smile } from 'lucide-react';

const sampleChats = [
  { id: 1, title: "Can't Sleep, Possibly Insomnia!", preview: 'It seems that I have insomnia lately', unread: 2, time: '3m ago' },
  { id: 2, title: 'How to be healthy', preview: 'It seems that I have insomnia lately', unread: 0, time: '3m ago' },
  { id: 3, title: 'Best meditation books', preview: 'It seems that I have insomnia lately', unread: 1, time: '3m ago' },
  { id: 4, title: 'Best mindful podcast', preview: 'It seems that I have insomnia lately', unread: 0, time: '3m ago' },
];

const kpis = [
  { icon: <MessageCircle size={28} className="text-emerald-400" />, label: 'Total Chats', value: '12,540' },
  { icon: <Users size={28} className="text-emerald-400" />, label: 'Active Users', value: '1,234' },
  { icon: <Clock size={28} className="text-emerald-400" />, label: 'Avg. Response', value: '2.1s' },
  { icon: <Smile size={28} className="text-emerald-400" />, label: 'Satisfaction', value: '97%' },
];

const barHeights = [40, 90, 30, 70, 100, 55, 20];
const barDays = ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'];

export default function ChatDashboard() {
  const [selectedChat, setSelectedChat] = useState(sampleChats[0]);
  return (
    <section className="w-full bg-gradient-to-br from-[#18181b] via-[#23243a] to-[#1a1a2e] py-24 px-4 flex flex-col items-center border-t border-white/10">
      <div className="max-w-6xl w-full mx-auto flex flex-col gap-10">
        {/* Dashboard Header */}
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6 text-center tracking-tight drop-shadow-lg">Track all chats in a dedicated dashboard</h2>
        <div className="flex flex-col md:flex-row gap-8 w-full justify-center">
          {/* Dashboard Card Container with slant and shadow */}
          <div className="w-full" style={{ transform: 'rotate(-2deg)' }}>
            <div className="bg-gradient-to-br from-[#23243a] to-[#18181b] rounded-3xl shadow-2xl border border-white/10 p-6 md:p-10 flex flex-col md:flex-row gap-8" style={{ boxShadow: '0 8px 32px 0 rgba(34,197,94,0.10), 0 2px 8px 0 rgba(0,0,0,0.10)' }}>
              {/* Sidebar */}
              <aside className="bg-[#23243a] rounded-2xl p-6 flex flex-col gap-6 shadow border border-white/10 min-w-[180px] max-w-[220px] w-full md:w-auto">
                <div className="flex flex-col gap-3">
                  <span className="text-gray-400 font-bold uppercase text-xs tracking-widest">Conversations</span>
                  <button className="flex items-center gap-2 text-white/90 font-semibold py-1 focus:outline-none">Current <span className="ml-auto text-xs bg-emerald-400/20 text-emerald-400 rounded px-2">157</span></button>
                  <button className="flex items-center gap-2 text-white/70 font-semibold py-1 focus:outline-none">Active <span className="ml-auto text-xs bg-emerald-400/10 text-emerald-400 rounded px-2">48</span></button>
                  <button className="flex items-center gap-2 text-white/70 font-semibold py-1 focus:outline-none">Inactive <span className="ml-auto text-xs bg-emerald-400/10 text-emerald-400 rounded px-2">8</span></button>
                  <button className="flex items-center gap-2 text-white/70 font-semibold py-1 focus:outline-none">Archived <span className="ml-auto text-xs bg-emerald-400/10 text-emerald-400 rounded px-2">7</span></button>
                  <button className="flex items-center gap-2 text-white/70 font-semibold py-1 focus:outline-none">Support <span className="ml-auto text-xs bg-emerald-400/10 text-emerald-400 rounded px-2">964</span></button>
                </div>
              </aside>
              {/* Chat List & Details */}
              <div className="flex-1 flex flex-col md:flex-row gap-8">
                {/* Chat List */}
                <div className="bg-[#23243a] rounded-2xl p-6 flex flex-col gap-4 shadow border border-white/10 min-w-[260px] max-w-[320px] w-full md:w-auto">
                  <span className="text-gray-400 font-bold uppercase text-xs tracking-widest mb-2">All Conversations</span>
                  <div className="flex flex-col gap-2">
                    {sampleChats.map(chat => (
                      <button key={chat.id} onClick={() => setSelectedChat(chat)} className={`flex flex-col items-start p-3 rounded-xl border border-transparent focus:outline-none ${selectedChat.id === chat.id ? 'bg-emerald-900/10 border-emerald-400' : 'bg-white/5'}`}>
                        <span className="font-semibold text-white text-base">{chat.title}</span>
                        <span className="text-xs text-gray-400">{chat.preview}</span>
                        <div className="flex items-center gap-2 mt-1">
                          <span className="text-xs text-gray-500">{chat.time}</span>
                          {chat.unread > 0 && <span className="ml-2 text-xs bg-emerald-400 text-white rounded-full px-2">{chat.unread}</span>}
                        </div>
                      </button>
                    ))}
                  </div>
                  <button className="mt-4 w-full bg-emerald-400/10 text-emerald-400 font-bold py-2 rounded-lg focus:outline-none">New Conversation +</button>
                </div>
                {/* Chat Details & KPIs */}
                <div className="flex-1 flex flex-col gap-6">
                  {/* KPIs */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-2">
                    {kpis.map((kpi, i) => (
                      <div key={i} className="bg-[#18181b] rounded-xl p-4 flex flex-col items-center gap-2 border border-white/10 shadow">
                        {kpi.icon}
                        <span className="text-lg font-bold text-white">{kpi.value}</span>
                        <span className="text-xs text-gray-400 uppercase tracking-widest">{kpi.label}</span>
                      </div>
                    ))}
                  </div>
                  {/* Graphs (placeholder) */}
                  <div className="bg-[#23243a] rounded-2xl p-6 border border-white/10 shadow flex flex-col gap-4">
                    <span className="text-gray-400 font-bold uppercase text-xs tracking-widest mb-2">Chat Volume (Last 7 Days)</span>
                    <div className="w-full h-32 flex items-end gap-2">
                      {barHeights.map((h, i) => (
                        <div key={i} className="flex-1 flex flex-col items-center">
                          <div className="w-6 rounded-t-lg bg-emerald-400" style={{ height: `${h}%`, minHeight: 12 }}></div>
                          <span className="text-xs text-gray-500 mt-1">{barDays[i]}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  {/* Chat Detail */}
                  <div className="bg-[#23243a] rounded-2xl p-6 border border-white/10 shadow flex flex-col gap-2">
                    <span className="text-gray-400 font-bold uppercase text-xs tracking-widest mb-2">Chat Detail</span>
                    <span className="font-semibold text-white text-base">{selectedChat.title}</span>
                    <span className="text-xs text-gray-400 mb-2">{selectedChat.preview}</span>
                    <div className="bg-[#18181b] rounded-lg p-4 text-white text-sm">Sample chat content and analytics for this conversation. (Replace with real data.)</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 