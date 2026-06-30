import { NextRequest, NextResponse } from 'next/server';
import { buildProductResearchReport } from '../../../../lib/productResearch';

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as {
      productIdea?: string;
      market?: string;
      priceGoal?: number | string | null;
      goal?: string | null;
    };

    const report = await buildProductResearchReport({
      productIdea: String(body.productIdea || ''),
      market: String(body.market || 'Nepal'),
      priceGoal:
        body.priceGoal === null || body.priceGoal === undefined || body.priceGoal === ''
          ? null
          : Number(body.priceGoal),
      goal: body.goal ? String(body.goal) : null,
    });

    return NextResponse.json(report);
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Research report could not be generated.';
    return NextResponse.json({ error: message }, { status: 400 });
  }
}
