import { randomBytes, createCipheriv, createHash } from 'crypto';
import { NextResponse } from 'next/server';

type Cell = 0 | 1 | 2 | 3 | 4;

type FullTask = {
  id: string;
  title: string;
  ruleHint: string;
  train: Array<{
    input: Cell[][];
    output: Cell[][];
  }>;
  testInput: Cell[][];
  options: Cell[][][];
  answer: number;
};

const DURATION_SECONDS = 8 * 60;

const TASKS: FullTask[] = [
  {
    id: 'mirror-horizontal',
    title: 'Symmetry Transfer',
    ruleHint: 'The output mirrors the black pattern from left to right.',
    train: [
      { input: [[1, 0, 0], [1, 1, 0], [1, 0, 0]], output: [[0, 0, 1], [0, 1, 1], [0, 0, 1]] },
      { input: [[1, 1, 0], [0, 1, 0], [0, 1, 1]], output: [[0, 1, 1], [0, 1, 0], [1, 1, 0]] },
    ],
    testInput: [[0, 1, 0], [0, 1, 1], [1, 1, 0]],
    options: [
      [[0, 1, 0], [1, 1, 0], [0, 1, 1]],
      [[0, 1, 0], [0, 1, 1], [1, 1, 0]],
      [[0, 0, 1], [0, 1, 1], [1, 1, 0]],
      [[1, 0, 0], [1, 1, 0], [0, 1, 0]],
    ],
    answer: 2,
  },
  {
    id: 'color-expand',
    title: 'Object Expansion',
    ruleHint: 'The single colored cell grows into a 3-cell horizontal bar of the same color.',
    train: [
      { input: [[0, 0, 0], [0, 2, 0], [0, 0, 0]], output: [[0, 0, 0], [2, 2, 2], [0, 0, 0]] },
      { input: [[0, 0, 0], [0, 0, 0], [0, 3, 0]], output: [[0, 0, 0], [0, 0, 0], [3, 3, 3]] },
    ],
    testInput: [[0, 0, 0], [0, 4, 0], [0, 0, 0]],
    options: [
      [[0, 4, 0], [0, 4, 0], [0, 4, 0]],
      [[0, 0, 0], [4, 4, 4], [0, 0, 0]],
      [[4, 4, 4], [0, 0, 0], [0, 0, 0]],
      [[0, 4, 4], [0, 4, 4], [0, 0, 0]],
    ],
    answer: 1,
  },
  {
    id: 'count-transfer',
    title: 'Count Translation',
    ruleHint: 'The number of dark cells is preserved, but they become a compact row.',
    train: [
      { input: [[1, 0, 1], [0, 0, 0], [1, 0, 0]], output: [[1, 1, 1], [0, 0, 0], [0, 0, 0]] },
      { input: [[1, 1, 0], [0, 0, 0], [0, 0, 0]], output: [[1, 1, 0], [0, 0, 0], [0, 0, 0]] },
    ],
    testInput: [[1, 0, 1], [0, 1, 0], [1, 0, 0]],
    options: [
      [[1, 1, 1], [1, 0, 0], [0, 0, 0]],
      [[1, 1, 1], [0, 0, 0], [0, 0, 0]],
      [[1, 1, 1], [1, 1, 0], [0, 0, 0]],
      [[1, 1, 0], [1, 1, 0], [0, 0, 0]],
    ],
    answer: 0,
  },
  {
    id: 'vertical-drop',
    title: 'Gravity Rule',
    ruleHint: 'Colored cells drop straight down to the bottom of their columns.',
    train: [
      { input: [[0, 2, 0], [0, 0, 0], [0, 0, 0]], output: [[0, 0, 0], [0, 0, 0], [0, 2, 0]] },
      { input: [[3, 0, 0], [0, 0, 0], [0, 4, 0]], output: [[0, 0, 0], [0, 0, 0], [3, 4, 0]] },
    ],
    testInput: [[2, 0, 0], [0, 0, 0], [0, 0, 3]],
    options: [
      [[0, 0, 0], [0, 0, 0], [2, 0, 3]],
      [[0, 0, 0], [2, 0, 0], [0, 0, 3]],
      [[0, 0, 0], [0, 0, 0], [0, 2, 3]],
      [[0, 2, 0], [0, 0, 0], [0, 0, 3]],
    ],
    answer: 0,
  },
  {
    id: 'fill-center',
    title: 'Center Completion',
    ruleHint: 'The empty center inside a ring becomes filled with the ring color.',
    train: [
      { input: [[2, 2, 2], [2, 0, 2], [2, 2, 2]], output: [[2, 2, 2], [2, 2, 2], [2, 2, 2]] },
      { input: [[3, 3, 3], [3, 0, 3], [3, 3, 3]], output: [[3, 3, 3], [3, 3, 3], [3, 3, 3]] },
    ],
    testInput: [[4, 4, 4], [4, 0, 4], [4, 4, 4]],
    options: [
      [[4, 4, 4], [4, 4, 4], [4, 4, 4]],
      [[4, 4, 4], [4, 0, 4], [4, 4, 4]],
      [[0, 4, 0], [4, 4, 4], [0, 4, 0]],
      [[4, 0, 4], [0, 4, 0], [4, 0, 4]],
    ],
    answer: 0,
  },
  {
    id: 'duplicate-row',
    title: 'Row Replication',
    ruleHint: 'The colored top row gets copied to every row below it.',
    train: [
      { input: [[2, 0, 2], [0, 0, 0], [0, 0, 0]], output: [[2, 0, 2], [2, 0, 2], [2, 0, 2]] },
      { input: [[3, 3, 0], [0, 0, 0], [0, 0, 0]], output: [[3, 3, 0], [3, 3, 0], [3, 3, 0]] },
    ],
    testInput: [[0, 4, 4], [0, 0, 0], [0, 0, 0]],
    options: [
      [[0, 4, 4], [0, 4, 4], [0, 4, 4]],
      [[0, 4, 4], [4, 4, 0], [0, 4, 4]],
      [[0, 4, 4], [0, 0, 0], [0, 4, 4]],
      [[4, 4, 0], [4, 4, 0], [4, 4, 0]],
    ],
    answer: 0,
  },
];

function getSecret() {
  return createHash('sha256')
    .update(process.env.IQ_TEST_SECRET || 'local-iq-test-secret')
    .digest();
}

function encryptPayload(payload: object) {
  const iv = randomBytes(12);
  const cipher = createCipheriv('aes-256-gcm', getSecret(), iv);
  const encrypted = Buffer.concat([cipher.update(JSON.stringify(payload), 'utf8'), cipher.final()]);
  const tag = cipher.getAuthTag();
  return `${iv.toString('base64url')}.${encrypted.toString('base64url')}.${tag.toString('base64url')}`;
}

function shuffleOptions<T>(items: T[]) {
  const copy = [...items];
  for (let index = copy.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [copy[index], copy[swapIndex]] = [copy[swapIndex], copy[index]];
  }
  return copy;
}

export async function GET() {
  const tasks = TASKS.map((task) => {
    const shuffledOptions = shuffleOptions(task.options.map((option, optionIndex) => ({ option, optionIndex })));
    const answer = shuffledOptions.findIndex((entry) => entry.optionIndex === task.answer);

    return {
      publicTask: {
        id: task.id,
        title: task.title,
        ruleHint: task.ruleHint,
        train: task.train,
        testInput: task.testInput,
        options: shuffledOptions.map((entry) => entry.option),
      },
      answer,
    };
  });

  const expiresAt = Date.now() + DURATION_SECONDS * 1000;
  const sessionToken = encryptPayload({
    expiresAt,
    answers: tasks.map((task) => task.answer),
  });

  return NextResponse.json({
    sessionToken,
    expiresAt,
    durationSeconds: DURATION_SECONDS,
    tasks: tasks.map((task) => task.publicTask),
  });
}
