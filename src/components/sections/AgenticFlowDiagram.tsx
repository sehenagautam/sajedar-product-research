import { motion } from 'framer-motion';
import { useAgenticFlowSequence } from '../../hooks/useAgenticFlowSequence';
import { AnimatedDotOnPath } from '../ui/AnimatedDotOnPath';

// --- Agentic Flow Diagram as a dedicated component to minimize re-renders and memory usage ---
export function AgenticFlowDiagram() {
  // Animation logic is fully contained here, so only this component re-renders on animation frame changes.
  const flow = useAgenticFlowSequence();
  
  return (
    <div className="w-full max-w-5xl mx-auto flex justify-center items-center relative">
      {/* SVG Flow Diagram with animated dot splitting and recombining */}
      <svg viewBox="0 0 1100 400" width="100%" height="400" className="block mx-auto" style={{ maxWidth: 1100 }}>
        {/* Main flow boxes (make Potential Customer wider and Respond to Webhook8 taller) */}
        <rect x="60" y="70" width="160" height="80" rx="16" fill="#23243a" stroke="#9ca3af" strokeWidth="2" />
        <rect x="320" y="80" width="180" height="60" rx="16" fill="#23243a" stroke="#9ca3af" strokeWidth="2" />
        <rect x="800" y="70" width="180" height="80" rx="16" fill="#23243a" stroke="#9ca3af" strokeWidth="2" />
        {/* Connecting lines */}
        <line x1="220" y1="110" x2="320" y2="110" stroke="#9ca3af" strokeWidth="3" />
        <line x1="500" y1="110" x2="800" y2="110" stroke="#9ca3af" strokeWidth="3" />
        {/* Potential Customer icon+label inside box */}
        <text x="140" y="105" fontSize="32" fontFamily="monospace" textAnchor="middle">👤</text>
        <text x="140" y="130" fontSize="16" fill="#9ca3af" textAnchor="middle">Potential Customer</text>
        {/* Sajedar AI icon above label, both above box (moved up by 16px) */}
        <text x="410" y="54" fontSize="32" fontFamily="monospace" textAnchor="middle">✨</text>
        <text x="410" y="74" fontSize="16" fill="#22c55e" fontWeight="bold" textAnchor="middle">Sajedar AI</text>
        {/* Final response icon+label inside box */}
        <text x="890" y="105" fontSize="32" fontFamily="monospace" textAnchor="middle">💬</text>
        <text x="890" y="130" fontSize="16" fill="#9ca3af" textAnchor="middle">Final response</text>
        {/* Tool/Model/Memory nodes */}
        <circle cx="200" cy="260" r="38" fill="#23243a" stroke="#9ca3af" strokeWidth="2" />
        <circle cx="340" cy="260" r="38" fill="#23243a" stroke="#9ca3af" strokeWidth="2" />
        <circle cx="480" cy="260" r="38" fill="#23243a" stroke="#9ca3af" strokeWidth="2" />
        <circle cx="620" cy="260" r="38" fill="#23243a" stroke="#9ca3af" strokeWidth="2" />
        <circle cx="760" cy="260" r="38" fill="#23243a" stroke="#9ca3af" strokeWidth="2" />
        <circle cx="900" cy="260" r="38" fill="#23243a" stroke="#9ca3af" strokeWidth="2" />
        {/* Node icons */}
        <text x="200" y="270" fontSize="32" textAnchor="middle">🧠</text>
        <text x="340" y="270" fontSize="32" textAnchor="middle">💾</text>
        <text x="480" y="270" fontSize="32" textAnchor="middle">📊</text>
        <text x="620" y="270" fontSize="32" textAnchor="middle">🌐</text>
        <text x="760" y="270" fontSize="32" textAnchor="middle">🧩</text>
        <text x="900" y="270" fontSize="32" textAnchor="middle">🔗</text>
        {/* Node labels (moved down by 8px) */}
        <text x="200" y="318" fontSize="14" fill="#9ca3af" textAnchor="middle">Open AI</text>
        <text x="340" y="318" fontSize="14" fill="#9ca3af" textAnchor="middle">Memory</text>
        <text x="480" y="318" fontSize="14" fill="#9ca3af" textAnchor="middle">Database</text>
        <text x="620" y="318" fontSize="14" fill="#9ca3af" textAnchor="middle">CDN</text>
        <text x="760" y="318" fontSize="14" fill="#9ca3af" textAnchor="middle">CRM</text>
        <text x="900" y="318" fontSize="14" fill="#22c55e" textAnchor="middle">Call another Agent</text>
        {/* --- Curvy Dotted Connections from Agent to Tools --- */}
        <path d="M410 110 Q 305 170 200 222" stroke="#9ca3af" strokeWidth="2" strokeDasharray="6,6" fill="none" />
        <path d="M410 110 Q 375 170 340 222" stroke="#9ca3af" strokeWidth="2" strokeDasharray="6,6" fill="none" />
        <path d="M410 110 Q 445 170 480 222" stroke="#9ca3af" strokeWidth="2" strokeDasharray="6,6" fill="none" />
        <path d="M410 110 Q 515 170 620 222" stroke="#9ca3af" strokeWidth="2" strokeDasharray="6,6" fill="none" />
        <path d="M410 110 Q 585 170 760 222" stroke="#9ca3af" strokeWidth="2" strokeDasharray="6,6" fill="none" />
        <path d="M410 110 Q 655 170 900 222" stroke="#9ca3af" strokeWidth="2" strokeDasharray="6,6" fill="none" />
        {/* --- Animated Dots on Curvy Paths --- */}
        {/* Blue dot: from Webhook6 to agent */}
        {flow.bluePos.visible && (
          <motion.circle
            r="12"
            fill="#3b82f6"
            cx={flow.bluePos.x}
            cy={flow.bluePos.y}
            initial={false}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2 }}
          />
        )}
        {/* Orange balls: out and back along Bezier paths */}
        {flow.orangeBalls.map((ball, i) =>
          ball.visible ? (
            <AnimatedDotOnPath
              key={i}
              d={ball.d}
              color="#f59e42"
              progress={ball.progress}
            />
          ) : null
        )}
        {/* Green dot: from agent to Respond8 left border */}
        {flow.greenPos.visible && (
          <motion.circle
            r="12"
            fill="#22c55e"
            cx={flow.greenPos.x}
            cy={flow.greenPos.y}
            initial={false}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2 }}
          />
        )}
      </svg>
    </div>
  );
} 