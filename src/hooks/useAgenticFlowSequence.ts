import { useState, useEffect, useRef } from 'react';

// --- Agentic Flow Animation Sequence ---
const WEBHOOK6_END = { x: 200, y: 110 };
const AGENT_CENTER = { x: 410, y: 110 };
const RESPOND8_LEFT = { x: 800, y: 110 };
const ORANGE_PATHS = [
  'M410 110 Q 305 170 200 222',
  'M410 110 Q 375 170 340 222',
  'M410 110 Q 445 170 480 222',
  'M410 110 Q 515 170 620 222',
  'M410 110 Q 585 170 760 222',
  'M410 110 Q 655 170 900 222',
];

export function useAgenticFlowSequence() {
  // States: 'blue-to-agent', 'orange-out', 'orange-back', 'green-to-respond', 'reset'
  const [phase, setPhase] = useState('blue-to-agent');
  const [orangeProgress, setOrangeProgress] = useState(Array(6).fill(0));
  const [orangeReturning, setOrangeReturning] = useState(false);
  const [blueProgress, setBlueProgress] = useState(0);
  const [greenProgress, setGreenProgress] = useState(0);
  // Track if blue animation has started (to prevent blip at agent)
  const [blueStarted, setBlueStarted] = useState(false);

  // --- Robust Animation Management ---
  const rafRef = useRef<number | null>(null);
  const timeoutRefs = useRef<number[]>([]);
  const mountedRef = useRef(true);
  // Track if blue phase just started to avoid blue ball blip at agent
  const blueJustStartedRef = useRef(false);

  useEffect(() => {
    mountedRef.current = true;
    return () => {
      mountedRef.current = false;
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      }
      timeoutRefs.current.forEach((id) => clearTimeout(id));
      timeoutRefs.current = [];
    };
  }, []);

  useEffect(() => {
    // On phase change, clear previous timeouts and animation frames
    if (rafRef.current !== null) {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    }
    timeoutRefs.current.forEach((id) => clearTimeout(id));
    timeoutRefs.current = [];

    // Helper to safely update state only if mounted
    const safeSet = (setter: (v: any) => void, value: any) => {
      if (mountedRef.current) setter(value);
    };

    // --- Animation Phases ---
    if (phase === 'blue-to-agent') {
      setBlueStarted(false); // Reset blueStarted on phase change
      safeSet(setBlueProgress, 0);
      safeSet(setOrangeProgress, Array(6).fill(0));
      safeSet(setOrangeReturning, false);
      safeSet(setGreenProgress, 0);
      const start = performance.now();
      function animate(ts: number) {
        if (!mountedRef.current) return;
        const t = Math.min((ts - start) / 1200, 1);
        safeSet(setBlueProgress, t);
        if (t > 0) safeSet(setBlueStarted, true); // Mark blue as started after first frame
        if (blueJustStartedRef.current && t > 0) blueJustStartedRef.current = false;
        if (t < 1) {
          rafRef.current = requestAnimationFrame(animate);
        } else {
          const timeoutId = window.setTimeout(() => mountedRef.current && setPhase('orange-out'), 200);
          timeoutRefs.current.push(timeoutId);
        }
      }
      rafRef.current = requestAnimationFrame(animate);
    } else if (phase === 'orange-out') {
      safeSet(setOrangeProgress, Array(6).fill(0));
      safeSet(setOrangeReturning, false);
      const start = performance.now();
      function animate(ts: number) {
        if (!mountedRef.current) return;
        const t = Math.min((ts - start) / 900, 1);
        safeSet(setOrangeProgress, Array(6).fill(t));
        if (t < 1) {
          rafRef.current = requestAnimationFrame(animate);
        } else {
          const timeoutId = window.setTimeout(() => mountedRef.current && setPhase('orange-back'), 200);
          timeoutRefs.current.push(timeoutId);
        }
      }
      rafRef.current = requestAnimationFrame(animate);
    } else if (phase === 'orange-back') {
      safeSet(setOrangeReturning, true);
      const start = performance.now();
      function animate(ts: number) {
        if (!mountedRef.current) return;
        const t = Math.min((ts - start) / 900, 1);
        safeSet(setOrangeProgress, Array(6).fill(1 - t));
        if (t < 1) {
          rafRef.current = requestAnimationFrame(animate);
        } else {
          const timeoutId = window.setTimeout(() => mountedRef.current && setPhase('green-to-respond'), 200);
          timeoutRefs.current.push(timeoutId);
        }
      }
      rafRef.current = requestAnimationFrame(animate);
    } else if (phase === 'green-to-respond') {
      safeSet(setGreenProgress, 0);
      const start = performance.now();
      function animate(ts: number) {
        if (!mountedRef.current) return;
        const t = Math.min((ts - start) / 1200, 1);
        safeSet(setGreenProgress, t);
        if (t < 1) {
          rafRef.current = requestAnimationFrame(animate);
        } else {
          const timeoutId = window.setTimeout(() => mountedRef.current && setPhase('reset'), 400);
          timeoutRefs.current.push(timeoutId);
        }
      }
      rafRef.current = requestAnimationFrame(animate);
    } else if (phase === 'reset') {
      const timeoutId = window.setTimeout(() => mountedRef.current && setPhase('blue-to-agent'), 600);
      timeoutRefs.current.push(timeoutId);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phase]);

  return {
    phase,
    bluePos: {
      x: WEBHOOK6_END.x + (AGENT_CENTER.x - WEBHOOK6_END.x) * blueProgress,
      y: WEBHOOK6_END.y,
      // Only show blue ball if phase is blue-to-agent, animation has started, and it hasn't reached Agent11
      visible: phase === 'blue-to-agent' && blueStarted && blueProgress < 1,
    },
    orangeBalls: ORANGE_PATHS.map((d, i) => ({
      d,
      progress: orangeProgress[i],
      visible: phase === 'orange-out' || phase === 'orange-back',
    })),
    greenPos: {
      x: AGENT_CENTER.x + (RESPOND8_LEFT.x - AGENT_CENTER.x) * greenProgress,
      y: AGENT_CENTER.y,
      // Only show green ball while animating, not after it reaches Webhook8
      visible: phase === 'green-to-respond' && greenProgress < 1,
    },
  };
} 