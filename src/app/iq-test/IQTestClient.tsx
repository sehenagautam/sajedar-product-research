'use client';

import { useCallback, useEffect, useMemo, useState } from 'react';
import Header from '../../components/Header';
import { Footer } from '../../components/sections';

type Cell = 0 | 1 | 2 | 3 | 4;

type PublicTask = {
  id: string;
  title: string;
  ruleHint: string;
  train: Array<{
    input: Cell[][];
    output: Cell[][];
  }>;
  testInput: Cell[][];
  options: Cell[][][];
};

type SessionPayload = {
  sessionToken: string;
  expiresAt: number;
  durationSeconds: number;
  tasks: PublicTask[];
};

type ResultPayload = {
  score: number;
  correctAnswers: number;
  totalQuestions: number;
  estimatedIq: number;
  band: string;
  suspiciousEvents: number;
  autoSubmitted: boolean;
};

const COLOR_MAP: Record<Cell, string> = {
  0: '#f5f5f4',
  1: '#111827',
  2: '#10b981',
  3: '#f59e0b',
  4: '#3b82f6',
};

function GridPreview({
  grid,
  label,
}: {
  grid: Cell[][];
  label: string;
}) {
  const columns = grid[0]?.length ?? 0;

  return (
    <div className="space-y-2">
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-stone-500">{label}</p>
      <div
        className="grid gap-1 rounded-2xl border border-stone-200 bg-white p-3"
        style={{ gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))` }}
      >
        {grid.flatMap((row, rowIndex) =>
          row.map((cell, colIndex) => (
            <div
              key={`${label}-${rowIndex}-${colIndex}`}
              className="aspect-square rounded-md border border-black/5"
              style={{ backgroundColor: COLOR_MAP[cell] }}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default function IQTestClient() {
  const [session, setSession] = useState<SessionPayload | null>(null);
  const [answers, setAnswers] = useState<number[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [secondsLeft, setSecondsLeft] = useState(0);
  const [suspiciousEvents, setSuspiciousEvents] = useState(0);
  const [result, setResult] = useState<ResultPayload | null>(null);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const currentTask = session?.tasks[currentIndex] ?? null;
  const answeredCount = answers.filter((value) => value !== -1).length;

  const startSession = useCallback(async () => {
    setLoading(true);
    setError(null);
    setResult(null);
    setCurrentIndex(0);
    setSuspiciousEvents(0);

    try {
      const response = await fetch('/api/iq-test/session', { cache: 'no-store' });
      if (!response.ok) {
        throw new Error('Unable to start test session.');
      }

      const payload: SessionPayload = await response.json();
      setSession(payload);
      setAnswers(Array(payload.tasks.length).fill(-1));
      setSecondsLeft(payload.durationSeconds);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unable to start test session.');
    } finally {
      setLoading(false);
    }
  }, []);

  const submitSession = useCallback(async (autoSubmitted: boolean) => {
    if (!session || submitting) return;

    setSubmitting(true);
    setError(null);

    try {
      const response = await fetch('/api/iq-test/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          sessionToken: session.sessionToken,
          answers,
          suspiciousEvents,
          autoSubmitted,
        }),
      });

      if (!response.ok) {
        const payload = await response.json().catch(() => null);
        throw new Error(payload?.error ?? 'Unable to submit test.');
      }

      const payload: ResultPayload = await response.json();
      setResult(payload);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unable to submit test.');
    } finally {
      setSubmitting(false);
    }
  }, [answers, session, submitting, suspiciousEvents]);

  useEffect(() => {
    void startSession();
  }, [startSession]);

  useEffect(() => {
    if (!session || result) return;
    if (secondsLeft <= 0) {
      void submitSession(true);
      return;
    }

    const timer = window.setInterval(() => {
      setSecondsLeft((current) => current - 1);
    }, 1000);

    return () => window.clearInterval(timer);
  }, [result, secondsLeft, session, submitSession]);

  useEffect(() => {
    if (!session || result) return;

    const registerSuspiciousEvent = () => {
      setSuspiciousEvents((current) => {
        const next = current + 1;
        if (next >= 2) {
          void submitSession(true);
        }
        return next;
      });
    };

    const handleVisibility = () => {
      if (document.hidden) registerSuspiciousEvent();
    };

    const handleContextMenu = (event: MouseEvent) => {
      event.preventDefault();
      registerSuspiciousEvent();
    };

    const handleCopy = (event: ClipboardEvent) => {
      event.preventDefault();
      registerSuspiciousEvent();
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      const blocked =
        event.key === 'PrintScreen' ||
        event.key === 'F12' ||
        ((event.ctrlKey || event.metaKey) &&
          ['c', 'u', 's', 'p'].includes(event.key.toLowerCase()));

      if (blocked) {
        event.preventDefault();
        registerSuspiciousEvent();
      }
    };

    document.addEventListener('visibilitychange', handleVisibility);
    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('copy', handleCopy);
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibility);
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('copy', handleCopy);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [result, session, submitSession]);

  const timeLabel = useMemo(() => {
    const minutes = Math.max(0, Math.floor(secondsLeft / 60));
    const seconds = Math.max(0, secondsLeft % 60);
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  }, [secondsLeft]);

  return (
    <div className="min-h-screen bg-[#f7f5ef] text-stone-900">
      <Header />

      <main className="px-4 pb-16 pt-28 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <section className="overflow-hidden rounded-[2rem] border border-stone-200 bg-[radial-gradient(circle_at_top_left,_rgba(16,185,129,0.18),_transparent_35%),linear-gradient(135deg,_#fffdf8_0%,_#f0fdf4_50%,_#ecfccb_100%)] p-8 shadow-[0_25px_80px_rgba(0,0,0,0.08)] sm:p-12">
            <span className="inline-flex rounded-full border border-emerald-600/20 bg-emerald-600/10 px-4 py-1 text-sm font-semibold uppercase tracking-[0.2em] text-emerald-800">
              ARC-Style Evaluation
            </span>
            <h1 className="mt-6 max-w-4xl font-[var(--font-dm-serif)] text-4xl leading-tight text-stone-900 sm:text-6xl">
              Abstract reasoning test based on visual transformation puzzles.
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-stone-700">
              Each task shows example input-output grids. Infer the hidden rule, then choose the correct output for a new case. This is closer to ARC-style abstraction than a standard trivia quiz.
            </p>
            <div className="mt-8 flex flex-wrap gap-4 text-sm text-stone-700">
              <div className="rounded-full border border-stone-300 bg-white/70 px-4 py-2">Server-scored</div>
              <div className="rounded-full border border-stone-300 bg-white/70 px-4 py-2">Timed session</div>
              <div className="rounded-full border border-stone-300 bg-white/70 px-4 py-2">Tab switching flagged</div>
            </div>
          </section>

          <section className="mt-8 rounded-[2rem] border border-stone-200 bg-white p-6 shadow-[0_20px_60px_rgba(0,0,0,0.06)] sm:p-8">
            {loading ? (
              <div className="py-16 text-center text-stone-600">Preparing ARC-style session...</div>
            ) : error && !result ? (
              <div className="space-y-4 py-10 text-center">
                <p className="text-stone-700">{error}</p>
                <button
                  type="button"
                  onClick={() => void startSession()}
                  className="rounded-full bg-stone-900 px-6 py-3 text-sm font-semibold text-white"
                >
                  Retry
                </button>
              </div>
            ) : result ? (
              <div className="space-y-8">
                <div className="rounded-[2rem] border border-emerald-200 bg-emerald-50 p-8">
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">Session Result</p>
                  <h2 className="mt-3 text-4xl font-semibold text-stone-900">Estimated IQ: {result.estimatedIq}</h2>
                  <p className="mt-3 text-lg text-stone-700">
                    Score {result.correctAnswers}/{result.totalQuestions}. Band: {result.band}.
                  </p>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  <div className="rounded-3xl border border-stone-200 bg-stone-50 p-6">
                    <h3 className="text-xl font-semibold text-stone-900">Integrity status</h3>
                    <p className="mt-3 text-stone-700">
                      Suspicious events detected: {result.suspiciousEvents}. {result.autoSubmitted ? 'The session was auto-submitted due to timer/integrity rules.' : 'The session ended normally.'}
                    </p>
                  </div>
                  <div className="rounded-3xl border border-stone-200 bg-stone-50 p-6">
                    <h3 className="text-xl font-semibold text-stone-900">Important limit</h3>
                    <p className="mt-3 text-stone-700">
                      This is harder to cheat than a plain client-side quiz, but no browser test is fully cheat-proof without supervised identity controls and persistent server records.
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => void startSession()}
                  className="rounded-full bg-stone-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-stone-700"
                >
                  Start New Session
                </button>
              </div>
            ) : session && currentTask ? (
              <div className="space-y-8">
                <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                  <div>
                    <h2 className="text-2xl font-semibold text-stone-900">Question {currentIndex + 1} of {session.tasks.length}</h2>
                    <p className="mt-2 text-stone-600">Answered: {answeredCount}/{session.tasks.length}</p>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    <div className="rounded-full border border-stone-300 bg-stone-50 px-4 py-2 text-sm font-semibold text-stone-700">
                      Time left: {timeLabel}
                    </div>
                    <div className={`rounded-full border px-4 py-2 text-sm font-semibold ${suspiciousEvents === 0 ? 'border-emerald-200 bg-emerald-50 text-emerald-700' : 'border-amber-200 bg-amber-50 text-amber-700'}`}>
                      Integrity flags: {suspiciousEvents}/2
                    </div>
                  </div>
                </div>

                <div className="h-3 overflow-hidden rounded-full bg-stone-200">
                  <div
                    className="h-full rounded-full bg-emerald-500 transition-all duration-300"
                    style={{ width: `${((currentIndex + 1) / session.tasks.length) * 100}%` }}
                  />
                </div>

                <article className="rounded-3xl border border-stone-200 bg-stone-50 p-5 sm:p-6">
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-700">{currentTask.title}</p>
                  <h3 className="mt-2 text-2xl font-semibold text-stone-900">{currentTask.ruleHint}</h3>
                  <p className="mt-3 text-stone-600">
                    Learn the rule from the examples, then pick the correct output for the hidden test case. Right-click, copy, print-screen shortcuts, and tab switching are flagged.
                  </p>

                  <div className="mt-6 grid gap-4 lg:grid-cols-2">
                    {currentTask.train.map((example, exampleIndex) => (
                      <div key={`${currentTask.id}-train-${exampleIndex}`} className="rounded-3xl border border-stone-200 bg-white p-4">
                        <p className="mb-4 text-sm font-semibold text-stone-700">Example {exampleIndex + 1}</p>
                        <div className="grid gap-4 md:grid-cols-2">
                          <GridPreview grid={example.input} label="Input" />
                          <GridPreview grid={example.output} label="Output" />
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8">
                    <div className="rounded-3xl border border-stone-200 bg-white p-4">
                      <p className="mb-4 text-sm font-semibold text-stone-700">Test Input</p>
                      <GridPreview grid={currentTask.testInput} label="Apply the same rule here" />
                    </div>

                    <p className="mt-6 text-sm font-semibold uppercase tracking-[0.16em] text-stone-500">Choose the correct output for this test input</p>
                    <div className="mt-4 grid gap-4 md:grid-cols-2">
                      {currentTask.options.map((option, optionIndex) => {
                        const isSelected = answers[currentIndex] === optionIndex;

                        return (
                          <button
                            key={`${currentTask.id}-option-${optionIndex}`}
                            type="button"
                            onClick={() =>
                              setAnswers((current) =>
                                current.map((value, index) => (index === currentIndex ? optionIndex : value))
                              )
                            }
                            className={`rounded-3xl border p-4 text-left transition ${
                              isSelected
                                ? 'border-emerald-500 bg-emerald-50'
                                : 'border-stone-200 bg-white hover:border-emerald-300 hover:bg-emerald-50/40'
                            }`}
                          >
                            <p className="mb-3 text-sm font-semibold text-stone-700">Option {String.fromCharCode(65 + optionIndex)}</p>
                            <GridPreview grid={option} label="Candidate output" />
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </article>

                <div className="flex flex-wrap justify-between gap-4">
                  <button
                    type="button"
                    onClick={() => setCurrentIndex((current) => Math.max(0, current - 1))}
                    disabled={currentIndex === 0}
                    className={`rounded-full px-6 py-3 text-sm font-semibold transition ${
                      currentIndex === 0 ? 'bg-stone-200 text-stone-400' : 'bg-stone-900 text-white hover:bg-stone-700'
                    }`}
                  >
                    Previous
                  </button>

                  <div className="flex flex-wrap gap-3">
                    {currentIndex < session.tasks.length - 1 ? (
                      <button
                        type="button"
                        onClick={() => setCurrentIndex((current) => Math.min(session.tasks.length - 1, current + 1))}
                        disabled={answers[currentIndex] === -1}
                        className={`rounded-full px-6 py-3 text-sm font-semibold transition ${
                          answers[currentIndex] === -1 ? 'bg-stone-200 text-stone-400' : 'bg-emerald-600 text-white hover:bg-emerald-700'
                        }`}
                      >
                        Next
                      </button>
                    ) : (
                      <button
                        type="button"
                        onClick={() => void submitSession(false)}
                        disabled={answers.some((value) => value === -1) || submitting}
                        className={`rounded-full px-6 py-3 text-sm font-semibold text-white transition ${
                          answers.some((value) => value === -1) || submitting ? 'bg-stone-300' : 'bg-emerald-600 hover:bg-emerald-700'
                        }`}
                      >
                        {submitting ? 'Submitting...' : 'Submit Session'}
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ) : null}
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
