import { createDecipheriv, createHash } from 'crypto';
import { NextRequest, NextResponse } from 'next/server';

function getSecret() {
  return createHash('sha256')
    .update(process.env.IQ_TEST_SECRET || 'local-iq-test-secret')
    .digest();
}

function decryptPayload(token: string) {
  const [ivRaw, encryptedRaw, tagRaw] = token.split('.');
  if (!ivRaw || !encryptedRaw || !tagRaw) {
    throw new Error('Invalid token format.');
  }

  const decipher = createDecipheriv(
    'aes-256-gcm',
    getSecret(),
    Buffer.from(ivRaw, 'base64url')
  );
  decipher.setAuthTag(Buffer.from(tagRaw, 'base64url'));

  const decrypted = Buffer.concat([
    decipher.update(Buffer.from(encryptedRaw, 'base64url')),
    decipher.final(),
  ]);

  return JSON.parse(decrypted.toString('utf8')) as {
    expiresAt: number;
    answers: number[];
  };
}

function estimateIq(correctAnswers: number, suspiciousEvents: number) {
  const base = [78, 88, 96, 103, 109, 116, 123][Math.max(0, Math.min(correctAnswers, 6))];
  return Math.max(70, base - suspiciousEvents * 6);
}

function getBand(iq: number) {
  if (iq >= 125) return 'High';
  if (iq >= 110) return 'Above Average';
  if (iq >= 90) return 'Average';
  return 'Below Average';
}

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as {
      sessionToken?: string;
      answers?: unknown[];
      suspiciousEvents?: number;
      autoSubmitted?: boolean;
    };
    const sessionToken = String(body.sessionToken || '');
    const answers = Array.isArray(body.answers) ? body.answers.map((value: unknown) => Number(value)) : [];
    const suspiciousEvents = Number(body.suspiciousEvents || 0);
    const autoSubmitted = Boolean(body.autoSubmitted);

    const payload = decryptPayload(sessionToken);
    if (Date.now() > payload.expiresAt) {
      return NextResponse.json({ error: 'Session expired.' }, { status: 400 });
    }

    if (answers.length !== payload.answers.length) {
      return NextResponse.json({ error: 'Incomplete submission.' }, { status: 400 });
    }

    const correctAnswers = payload.answers.reduce(
      (total, answer, index) => total + Number(answer === answers[index]),
      0
    );
    const adjustedCorrectAnswers = Math.max(0, correctAnswers - Math.min(suspiciousEvents, 2));
    const estimatedIq = estimateIq(adjustedCorrectAnswers, suspiciousEvents);

    return NextResponse.json({
      score: adjustedCorrectAnswers,
      correctAnswers: adjustedCorrectAnswers,
      totalQuestions: payload.answers.length,
      estimatedIq,
      band: getBand(estimatedIq),
      suspiciousEvents,
      autoSubmitted,
    });
  } catch {
    return NextResponse.json({ error: 'Invalid or tampered session.' }, { status: 400 });
  }
}
