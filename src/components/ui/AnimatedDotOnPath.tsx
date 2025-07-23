import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';

interface AnimatedDotOnPathProps {
  d: string;
  color: string;
  progress: number;
}

// Helper: Animate a dot along a given SVG path string (d)
export function AnimatedDotOnPath({ d, color, progress }: AnimatedDotOnPathProps) {
  const pathRef = useRef<SVGPathElement>(null);
  const [pathLength, setPathLength] = useState(0);
  const [dotPos, setDotPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (pathRef.current) {
      setPathLength(pathRef.current.getTotalLength());
    }
  }, [d]);

  useEffect(() => {
    if (pathRef.current && pathLength > 0) {
      const t = progress;
      const pt = pathRef.current.getPointAtLength(t * pathLength);
      setDotPos({ x: pt.x, y: pt.y });
    }
  }, [progress, pathLength]);

  return (
    <g>
      <path ref={pathRef} d={d} fill="none" stroke="none" />
      <motion.circle
        r={7}
        fill={color}
        cx={dotPos.x}
        cy={dotPos.y}
        initial={false}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.2 }}
      />
    </g>
  );
} 