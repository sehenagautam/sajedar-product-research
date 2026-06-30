type TrendPoint = {
  date: string;
  timestamp: number;
  value: number;
};

type SearchResult = {
  title: string;
  link: string;
  snippet: string;
  source?: string;
};

type MarketEntity = {
  name: string;
  link: string;
  snippet: string;
  domain: string;
};

type MarketplaceListing = {
  title: string;
  url: string;
  price: number;
  soldCount: number | null;
  reviewCount: number | null;
  location: string | null;
};

type ProductCategory = 'fashion' | 'gadget' | 'beauty' | 'seasonal' | 'commodity' | 'general';
type EstimateConfidence = 'Low' | 'Medium' | 'High';

export type ProductResearchRequest = {
  productIdea: string;
  market: string;
  priceGoal?: number | null;
  goal?: string | null;
};

export type ProductResearchReport = {
  query: {
    productIdea: string;
    market: string;
    priceGoal: number | null;
    goal: string | null;
  };
  generatedAt: string;
  sources: Array<{
    name: string;
    url: string;
    note: string;
  }>;
  facts: {
    trends: {
      latest12WeekAverage: number;
      previous12WeekAverage: number;
      latest4WeekAverage: number;
      previous4WeekAverage: number;
      velocity12Week: number;
      velocity4Week: number;
      currentVsPeakPercent: number;
      allTimePeak: number;
      allTimeLow: number;
      seasonalityScore: number;
      topMonths: Array<{ month: string; average: number }>;
      timeline: TrendPoint[];
    };
    search: {
      totalResults: number | null;
      uniqueDomains: number;
      ecommerceDomainCount: number;
      socialDomainCount: number;
      adDensityScore: number;
      competitorDomains: string[];
      results: SearchResult[];
    };
    marketplace: {
      listingCount: number;
      priceMin: number | null;
      priceMedian: number | null;
      priceMax: number | null;
      soldCountTotal: number | null;
      reviewCountTotal: number | null;
      soldCoverageRatio: number;
      reviewCoverageRatio: number;
      priceSpreadPercent: number | null;
      priceClusters: Array<{ label: string; count: number }>;
      buyerEstimate: {
        visibleSoldUnits: number | null;
        reviewDerivedLow: number | null;
        reviewDerivedHigh: number | null;
        estimatedBuyerRangeLow: number | null;
        estimatedBuyerRangeHigh: number | null;
        blendedEstimatedBuyers: number | null;
        confidence: EstimateConfidence;
        method: string;
      };
      topListings: MarketplaceListing[];
    };
    industry: {
      estimatedMarketSize: {
        activeBuyerRangeLow: number | null;
        activeBuyerRangeHigh: number | null;
        annualRevenueRangeLow: number | null;
        annualRevenueRangeHigh: number | null;
        annualRevenueMid: number | null;
        confidence: EstimateConfidence;
        method: string;
      };
      currentPlayers: MarketEntity[];
      suppliers: MarketEntity[];
      localFactories: MarketEntity[];
    };
  };
  analysis: {
    category: ProductCategory;
    demandCurve: 'Growth' | 'Seasonal' | 'Fad' | 'Mature' | 'Declining' | 'Fashion';
    validationScore: number;
    demandScore: number;
    momentumScore: number;
    competitionScore: number;
    commercialActivityScore: number;
    trendVelocityScore: number;
    priceFitScore: number | null;
    reviewVolumeScore: number;
    adDensityScore: number;
    riskLevel: 'Low' | 'Medium' | 'High';
    opportunityLevel: 'Low' | 'Medium' | 'High';
    recommendation: 'Launch' | 'Test' | 'Scale' | 'Wait' | 'Avoid';
    summary: string;
    rationale: string[];
    actions: string[];
    marketGaps: string[];
  };
};

type SerpApiTrendsResponse = {
  search_metadata?: { google_trends_url?: string };
  interest_over_time?: {
    timeline_data?: Array<{
      date?: string;
      timestamp?: string;
      values?: Array<{ extracted_value?: number }>;
    }>;
  };
};

type SerperResponse = {
  searchParameters?: { q?: string };
  organic?: Array<{
    title?: string;
    link?: string;
    snippet?: string;
    source?: string;
  }>;
  relatedSearches?: Array<{ query?: string }>;
  peopleAlsoAsk?: Array<{ question?: string }>;
};

type SerpApiGoogleResponse = {
  search_information?: {
    total_results?: number;
  };
};

type FirecrawlResponse = {
  success?: boolean;
  data?: {
    markdown?: string;
  };
};

type MarketplaceFetchResult = {
  sourceUrl: string;
  listings: MarketplaceListing[];
  sourceName: string;
  note: string;
};

const MONTH_NAMES = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

function getRequiredEnv(name: string) {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Missing ${name}.`);
  }
  return value;
}

function average(values: number[]) {
  if (!values.length) return 0;
  return values.reduce((sum, value) => sum + value, 0) / values.length;
}

function median(values: number[]) {
  if (!values.length) return null;
  const sorted = [...values].sort((a, b) => a - b);
  const mid = Math.floor(sorted.length / 2);
  return sorted.length % 2 === 0 ? Math.round((sorted[mid - 1] + sorted[mid]) / 2) : sorted[mid];
}

function clamp(value: number, min = 0, max = 100) {
  return Math.max(min, Math.min(max, value));
}

function percentChange(current: number, previous: number) {
  if (previous === 0) {
    return current === 0 ? 0 : 100;
  }
  return Math.round(((current - previous) / previous) * 100);
}

function mapMarketToGeo(market: string) {
  const normalized = market.trim().toLowerCase();
  if (normalized.includes('nepal')) return { geo: 'NP', gl: 'np', marketplace: 'daraz' as const };
  if (normalized.includes('india')) return { geo: 'IN', gl: 'in', marketplace: 'none' as const };
  if (normalized.includes('united states') || normalized === 'usa' || normalized === 'us') return { geo: 'US', gl: 'us', marketplace: 'none' as const };
  return { geo: '', gl: '', marketplace: 'none' as const };
}

function extractDomain(url: string) {
  try {
    return new URL(url).hostname.replace(/^www\./, '');
  } catch {
    return '';
  }
}

function dedupeMarketEntities(results: SearchResult[], limit = 6) {
  const seen = new Set<string>();
  const entities: MarketEntity[] = [];

  for (const result of results) {
    const domain = extractDomain(result.link);
    const key = `${domain}:${result.title.toLowerCase()}`;
    if (!domain || seen.has(key)) continue;
    seen.add(key);
    entities.push({
      name: result.title,
      link: result.link,
      snippet: result.snippet,
      domain,
    });
    if (entities.length >= limit) break;
  }

  return entities;
}

function isEcommerceDomain(domain: string) {
  return ['daraz', 'amazon', 'flipkart', 'cgdigital', 'navigate', 'nacos', 'ina', 'store', 'shop'].some((token) =>
    domain.includes(token)
  );
}

function isSocialDomain(domain: string) {
  return ['facebook.com', 'instagram.com', 'reddit.com', 'tiktok.com', 'youtube.com', 'x.com', 'twitter.com'].some((token) =>
    domain.includes(token)
  );
}

function inferCategory(
  request: ProductResearchRequest,
  facts: ProductResearchReport['facts']
): ProductCategory {
  const corpus = [
    request.productIdea,
    ...facts.search.results.map((result) => `${result.title} ${result.snippet}`),
    ...facts.marketplace.topListings.map((listing) => listing.title),
  ]
    .join(' ')
    .toLowerCase();

  if (['raincoat', 'umbrella', 'heater', 'cooler', 'jacket', 'winter', 'summer', 'monsoon'].some((word) => corpus.includes(word))) {
    return 'seasonal';
  }
  if (['perfume', 'fragrance', 'cosmetic', 'skincare', 'serum', 'beauty', 'lipstick', 'edp', 'eau de parfum'].some((word) => corpus.includes(word))) {
    return 'beauty';
  }
  if (['air fryer', 'smart', 'phone', 'gadget', 'device', 'watch', 'electronic', 'electronics', 'laptop', 'headphone'].some((word) => corpus.includes(word))) {
    return 'gadget';
  }
  if (['hoodie', 'shirt', 'shoe', 'sneaker', 'dress', 'fashion', 'coat', 'bag', 'clothing'].some((word) => corpus.includes(word))) {
    return 'fashion';
  }
  if (['soap', 'bottle', 'container', 'rice', 'detergent', 'basic', 'everyday', 'household'].some((word) => corpus.includes(word))) {
    return 'commodity';
  }
  return 'general';
}

async function fetchGoogleTrends(productIdea: string, geo: string) {
  const apiKey = getRequiredEnv('SERPAPI_API_KEY');
  const response = await fetch(
    `https://serpapi.com/search.json?engine=google_trends&data_type=TIMESERIES&q=${encodeURIComponent(productIdea)}&geo=${encodeURIComponent(geo)}&date=${encodeURIComponent('today 5-y')}&api_key=${encodeURIComponent(apiKey)}`,
    { cache: 'no-store' }
  );

  if (!response.ok) {
    throw new Error(`Google Trends request failed with ${response.status}.`);
  }

  const data = (await response.json()) as SerpApiTrendsResponse;
  const timeline = (data.interest_over_time?.timeline_data || [])
    .map((point) => ({
      date: point.date || '',
      timestamp: Number(point.timestamp || 0),
      value: point.values?.[0]?.extracted_value || 0,
    }))
    .filter((point) => point.timestamp && Number.isFinite(point.value));

  if (!timeline.length) {
    throw new Error('No Google Trends timeline returned.');
  }

  return {
    sourceUrl: data.search_metadata?.google_trends_url || 'https://trends.google.com/trends/',
    timeline,
  };
}

async function fetchSearchResults(query: string, gl: string) {
  const apiKey = getRequiredEnv('SERPER_API_KEY');
  const response = await fetch('https://google.serper.dev/search', {
    method: 'POST',
    cache: 'no-store',
    headers: {
      'Content-Type': 'application/json',
      'X-API-KEY': apiKey,
    },
    body: JSON.stringify({
      q: query,
      gl: gl || undefined,
      hl: 'en',
      num: 10,
    }),
  });

  if (!response.ok) {
    throw new Error(`Serper request failed with ${response.status}.`);
  }

  return (await response.json()) as SerperResponse;
}

async function fetchGoogleSearchOverview(query: string, gl: string) {
  const apiKey = getRequiredEnv('SERPAPI_API_KEY');
  const response = await fetch(
    `https://serpapi.com/search.json?engine=google&q=${encodeURIComponent(query)}&gl=${encodeURIComponent(gl)}&hl=en&api_key=${encodeURIComponent(apiKey)}`,
    { cache: 'no-store' }
  );

  if (!response.ok) {
    throw new Error(`Google search overview request failed with ${response.status}.`);
  }

  return (await response.json()) as SerpApiGoogleResponse;
}

async function fetchEntitySearchResults(queries: string[], gl: string) {
  const responses = await Promise.all(
    queries.map(async (query) => {
      try {
        return await fetchSearchResults(query, gl);
      } catch {
        return { organic: [] } as SerperResponse;
      }
    })
  );

  return responses.flatMap((response) =>
    (response.organic || [])
      .filter((result) => result.title && result.link)
      .map((result) => ({
        title: result.title || '',
        link: result.link || '',
        snippet: result.snippet || '',
        source: result.source,
      }))
  );
}

async function fetchDarazListings(productIdea: string) {
  const targetUrl = `https://www.daraz.com.np/catalog/?q=${encodeURIComponent(productIdea)}`;
  const listings = await fetchDarazListingsViaFirecrawl(targetUrl);

  return {
    sourceUrl: targetUrl,
    listings,
    sourceName: 'Daraz via Firecrawl',
    note: 'Marketplace pricing, sold counts, and listing evidence.',
  } satisfies MarketplaceFetchResult;
}

function parseDarazListings(markdown: string) {
  const listingPattern =
    /\[([^\]]+)\]\((https:\/\/www\.daraz\.com\.np\/products\/[^)\s]+)[^) ]*(?:\s+"[^"]*")?\)\s*\n\nRs\. ([\d,]+)\s*\n\n(?:[^\n]*\n\n)?(?:(\d+)\s+sold\s*\n\n)?(?:\((\d+)\)\s*\n\n)?([^\n]+)?/g;
  const listings: MarketplaceListing[] = [];

  for (const match of markdown.matchAll(listingPattern)) {
    const title = match[1]?.replace(/\\\|/g, '|').trim();
    const url = match[2]?.trim();
    const price = Number((match[3] || '0').replace(/,/g, ''));
    const soldCount = match[4] ? Number(match[4]) : null;
    const reviewCount = match[5] ? Number(match[5]) : null;
    const location = match[6]?.trim() || null;

    if (!title || !url || !price) continue;
    if (listings.some((listing) => listing.url === url)) continue;

    listings.push({ title, url, price, soldCount, reviewCount, location });
    if (listings.length >= 12) break;
  }

  return listings;
}

async function fetchDarazListingsViaFirecrawl(targetUrl: string) {
  const apiKey = getRequiredEnv('FIRECRAWL_API_KEY');
  const response = await fetch('https://api.firecrawl.dev/v1/scrape', {
    method: 'POST',
    cache: 'no-store',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      url: targetUrl,
      formats: ['markdown'],
    }),
  });

  if (!response.ok) {
    throw new Error(`Firecrawl request failed with ${response.status}.`);
  }

  const data = (await response.json()) as FirecrawlResponse;
  return parseDarazListings(data.data?.markdown || '');
}

async function fetchDarazListingsViaJina(targetUrl: string) {
  const response = await fetch(`https://r.jina.ai/http://${targetUrl}`, {
    cache: 'no-store',
    headers: {
      'User-Agent': 'Mozilla/5.0',
    },
  });

  if (!response.ok) {
    throw new Error(`Jina marketplace fallback failed with ${response.status}.`);
  }

  return parseDarazListings(await response.text());
}

async function fetchDarazListingsResilient(productIdea: string) {
  const targetUrl = `https://www.daraz.com.np/catalog/?q=${encodeURIComponent(productIdea)}`;

  try {
    const listings = await fetchDarazListingsViaFirecrawl(targetUrl);
    if (listings.length) {
      return {
        sourceUrl: targetUrl,
        listings,
        sourceName: 'Daraz via Firecrawl',
        note: 'Marketplace pricing, sold counts, and listing evidence.',
      } satisfies MarketplaceFetchResult;
    }
  } catch {
    // Fall through to the secondary fetcher below.
  }

  try {
    const listings = await fetchDarazListingsViaJina(targetUrl);
    return {
      sourceUrl: targetUrl,
      listings,
      sourceName: 'Daraz via Jina fallback',
      note: 'Marketplace pricing and listing evidence fetched through a resilient text mirror.',
    } satisfies MarketplaceFetchResult;
  } catch {
    return {
      sourceUrl: targetUrl,
      listings: [],
      sourceName: 'Daraz unavailable',
      note: 'Marketplace extraction was temporarily unavailable for this query, so the report falls back to trends and search evidence only.',
    } satisfies MarketplaceFetchResult;
  }
}

function computeTrendFacts(timeline: TrendPoint[]) {
  const values = timeline.map((point) => point.value);
  const latest12 = values.slice(-12);
  const previous12 = values.slice(-24, -12);
  const latest4 = values.slice(-4);
  const previous4 = values.slice(-8, -4);
  const monthBuckets = new Map<number, number[]>();

  for (const point of timeline) {
    const month = new Date(point.timestamp * 1000).getUTCMonth();
    const bucket = monthBuckets.get(month) || [];
    bucket.push(point.value);
    monthBuckets.set(month, bucket);
  }

  const monthAverages = [...monthBuckets.entries()]
    .map(([month, points]) => ({ month: MONTH_NAMES[month], average: Math.round(average(points)) }))
    .sort((a, b) => b.average - a.average);

  const latest12Average = Math.round(average(latest12));
  const previous12Average = Math.round(average(previous12));
  const latest4WeekAverage = Math.round(average(latest4));
  const previous4WeekAverage = Math.round(average(previous4));
  const allTimePeak = Math.max(...values);
  const allTimeLow = Math.min(...values);
  const velocity12Week = percentChange(latest12Average, previous12Average);
  const velocity4Week = percentChange(latest4WeekAverage, previous4WeekAverage);
  const currentVsPeakPercent = allTimePeak ? Math.round((latest12Average / allTimePeak) * 100) : 0;
  const seasonalityScore = clamp(
    Math.round(((monthAverages[0]?.average || 0) - (monthAverages[monthAverages.length - 1]?.average || 0)) * 1.4)
  );

  return {
    latest12WeekAverage: latest12Average,
    previous12WeekAverage: previous12Average,
    latest4WeekAverage,
    previous4WeekAverage,
    velocity12Week,
    velocity4Week,
    currentVsPeakPercent,
    allTimePeak,
    allTimeLow,
    seasonalityScore,
    topMonths: monthAverages.slice(0, 3),
    timeline,
  };
}

function inferDemandCurve(
  facts: ProductResearchReport['facts'],
  category: ProductCategory
) {
  const values = facts.trends.timeline.map((point) => point.value);
  const medianValue = median(values) || 0;
  const latest = facts.trends.latest12WeekAverage;
  const previous = facts.trends.previous12WeekAverage;
  const peak = facts.trends.allTimePeak;
  const seasonality = facts.trends.seasonalityScore;
  const velocity12 = facts.trends.velocity12Week;
  const currentVsPeak = facts.trends.currentVsPeakPercent;

  if (seasonality >= 45) return 'Seasonal';
  if (category === 'beauty') {
    if (velocity12 >= 12 && currentVsPeak >= 55) return 'Fashion';
    if (latest <= previous - 18 && currentVsPeak <= 28 && velocity12 <= -35) return 'Declining';
    return 'Mature';
  }
  if (category === 'fashion') {
    if (velocity12 >= 10 && currentVsPeak >= 45) return 'Fashion';
    if (latest <= previous - 18 && currentVsPeak <= 30) return 'Declining';
  }
  if (peak >= Math.max(60, medianValue * 2.2) && currentVsPeak <= 45 && velocity12 <= -20) return 'Fad';
  if (latest <= previous - 12 && latest <= average(values) * 0.85) return 'Declining';
  if (velocity12 >= 20 && latest >= average(values) * 1.05) return 'Growth';
  return 'Mature';
}

function buildPriceClusters(listings: MarketplaceListing[]) {
  const clusters = [
    { label: 'Budget', count: 0 },
    { label: 'Mid-range', count: 0 },
    { label: 'Premium', count: 0 },
  ];

  for (const listing of listings) {
    if (listing.price < 1000) {
      clusters[0].count += 1;
    } else if (listing.price < 5000) {
      clusters[1].count += 1;
    } else {
      clusters[2].count += 1;
    }
  }

  return clusters;
}

function buildBuyerEstimate(
  soldCountTotal: number | null,
  reviewCountTotal: number | null,
  soldCoverageRatio: number,
  reviewCoverageRatio: number,
  listingCount: number
) {
  const visibleSoldUnits = soldCountTotal;
  const reviewDerivedLow = reviewCountTotal ? Math.round(reviewCountTotal / 0.08) : null;
  const reviewDerivedHigh = reviewCountTotal ? Math.round(reviewCountTotal / 0.02) : null;

  let estimatedBuyerRangeLow: number | null = null;
  let estimatedBuyerRangeHigh: number | null = null;

  if (visibleSoldUnits !== null && reviewDerivedLow !== null && reviewDerivedHigh !== null) {
    estimatedBuyerRangeLow = Math.max(visibleSoldUnits, reviewDerivedLow);
    estimatedBuyerRangeHigh = Math.max(visibleSoldUnits, reviewDerivedHigh);
  } else if (visibleSoldUnits !== null) {
    estimatedBuyerRangeLow = visibleSoldUnits;
    estimatedBuyerRangeHigh = visibleSoldUnits;
  } else if (reviewDerivedLow !== null && reviewDerivedHigh !== null) {
    estimatedBuyerRangeLow = reviewDerivedLow;
    estimatedBuyerRangeHigh = reviewDerivedHigh;
  }

  const blendedEstimatedBuyers =
    estimatedBuyerRangeLow !== null && estimatedBuyerRangeHigh !== null
      ? Math.round((estimatedBuyerRangeLow + estimatedBuyerRangeHigh) / 2)
      : null;

  let confidence: EstimateConfidence = 'Low';
  if (listingCount >= 5 && soldCoverageRatio >= 50 && reviewCoverageRatio >= 40) {
    confidence = 'High';
  } else if (listingCount >= 3 && (soldCoverageRatio >= 25 || reviewCoverageRatio >= 25)) {
    confidence = 'Medium';
  }

  const method = [
    'Visible sold counts are treated as a hard lower bound when present.',
    reviewCountTotal !== null
      ? `Review-derived demand assumes roughly 2% to 8% of buyers leave reviews, producing an estimated order band from ${reviewDerivedLow?.toLocaleString()} to ${reviewDerivedHigh?.toLocaleString()}.`
      : 'Review-derived demand could not be estimated because visible review totals were insufficient.',
    'This is an estimated buyer range from observed marketplace evidence, not an exact market-wide user count.',
  ].join(' ');

  return {
    visibleSoldUnits,
    reviewDerivedLow,
    reviewDerivedHigh,
    estimatedBuyerRangeLow,
    estimatedBuyerRangeHigh,
    blendedEstimatedBuyers,
    confidence,
    method,
  };
}

function buildMarketSizeEstimate(
  buyerEstimate: ProductResearchReport['facts']['marketplace']['buyerEstimate'],
  priceMedian: number | null,
  currentVsPeakPercent: number,
  reviewCoverageRatio: number
) {
  const demandActivityFactor = Math.max(0.35, currentVsPeakPercent / 100);
  const lowBase = buyerEstimate.estimatedBuyerRangeLow;
  const highBase = buyerEstimate.estimatedBuyerRangeHigh;
  const activeBuyerRangeLow = lowBase !== null ? Math.round(lowBase * demandActivityFactor) : null;
  const activeBuyerRangeHigh = highBase !== null ? Math.round(highBase * demandActivityFactor) : null;
  const annualRevenueRangeLow =
    activeBuyerRangeLow !== null && priceMedian !== null ? Math.round(activeBuyerRangeLow * priceMedian) : null;
  const annualRevenueRangeHigh =
    activeBuyerRangeHigh !== null && priceMedian !== null ? Math.round(activeBuyerRangeHigh * priceMedian) : null;
  const annualRevenueMid =
    annualRevenueRangeLow !== null && annualRevenueRangeHigh !== null
      ? Math.round((annualRevenueRangeLow + annualRevenueRangeHigh) / 2)
      : null;

  let confidence: EstimateConfidence = buyerEstimate.confidence;
  if (reviewCoverageRatio < 20) confidence = 'Low';

  const method = [
    'Estimated market size is derived from the buyer-volume estimate, adjusted by current demand versus historical peak.',
    priceMedian !== null
      ? `The active buyer range is multiplied by the observed median marketplace price of Rs ${priceMedian.toLocaleString()} to estimate visible-market annual transaction value.`
      : 'Pricing coverage was not strong enough to turn buyer estimates into a revenue range.',
    'This is a directional visible-market estimate, not a census of the entire offline and online market.',
  ].join(' ');

  return {
    activeBuyerRangeLow,
    activeBuyerRangeHigh,
    annualRevenueRangeLow,
    annualRevenueRangeHigh,
    annualRevenueMid,
    confidence,
    method,
  };
}

function inferMarketGaps(listings: MarketplaceListing[], category: ProductCategory) {
  const titleText = listings.map((listing) => listing.title.toLowerCase());
  const gaps: string[] = [];

  if (!titleText.some((title) => title.includes('kids'))) gaps.push('Few visible kids-focused offers in top marketplace results');
  if (!titleText.some((title) => title.includes('women'))) gaps.push('Limited women-specific positioning in top listings');

  if (category === 'beauty') {
    if (!titleText.some((title) => title.includes('gift') || title.includes('set'))) gaps.push('Gift-set positioning is not prominent in top beauty listings');
    if (!titleText.some((title) => title.includes('long lasting') || title.includes('ml'))) gaps.push('Longevity and size-led value framing looks underused');
  } else if (category === 'gadget') {
    if (!titleText.some((title) => title.includes('warranty'))) gaps.push('Warranty-first positioning is not obvious in visible gadget offers');
    if (!titleText.some((title) => title.includes('original') || title.includes('official'))) gaps.push('Authenticity messaging could be a differentiator');
  } else if (category === 'fashion' || category === 'seasonal') {
    if (!titleText.some((title) => title.includes('set') || title.includes('bundle'))) gaps.push('Bundle-oriented offers are not prominent in top listings');
    if (!titleText.some((title) => title.includes('premium') || title.includes('waterproof') || title.includes('gore-tex'))) gaps.push('Premium-material positioning is not obvious in top listings');
  } else {
    if (!titleText.some((title) => title.includes('bundle'))) gaps.push('Bundle-oriented offers are not prominent in top listings');
    if (!titleText.some((title) => title.includes('premium'))) gaps.push('Premium-tier positioning is not obvious in top listings');
  }

  return gaps.slice(0, 3);
}

function analyzeReport(
  request: ProductResearchRequest,
  facts: ProductResearchReport['facts']
): ProductResearchReport['analysis'] {
  const category = inferCategory(request, facts);
  const demandScore = facts.trends.latest12WeekAverage;
  const trendVelocityScore = clamp(Math.round(50 + facts.trends.velocity12Week * 0.8 + facts.trends.velocity4Week * 0.35));
  const momentumScore = clamp(Math.round((trendVelocityScore * 0.65) + (facts.trends.currentVsPeakPercent * 0.35)));
  const competitionScore = clamp(
    Math.round(
      (facts.search.uniqueDomains * 5) +
      (facts.marketplace.listingCount * 2.5) +
      (facts.search.ecommerceDomainCount * 4)
    )
  );
  const commercialActivityScore = clamp(
    Math.round(
      (facts.marketplace.listingCount * 5) +
      (Math.min(facts.marketplace.soldCountTotal || 0, 3000) / 60) +
      (Math.min(facts.marketplace.reviewCountTotal || 0, 1500) / 40)
    )
  );
  const reviewVolumeScore = clamp(Math.round(Math.min(facts.marketplace.reviewCountTotal || 0, 1200) / 12));
  const priceFitScore =
    request.priceGoal && facts.marketplace.priceMedian
      ? clamp(100 - Math.round((Math.abs(request.priceGoal - facts.marketplace.priceMedian) / facts.marketplace.priceMedian) * 100))
      : null;
  const adDensityScore = facts.search.adDensityScore;
  const demandCurve = inferDemandCurve(facts, category);

  const weightsByCategory: Record<ProductCategory, { demand: number; momentum: number; competition: number; commercial: number; seasonality: number; priceFit: number }> = {
    beauty: { demand: 0.22, momentum: 0.16, competition: 0.14, commercial: 0.18, seasonality: 0.04, priceFit: 0.10 },
    gadget: { demand: 0.20, momentum: 0.16, competition: 0.18, commercial: 0.17, seasonality: 0.02, priceFit: 0.12 },
    fashion: { demand: 0.20, momentum: 0.16, competition: 0.14, commercial: 0.14, seasonality: 0.10, priceFit: 0.08 },
    seasonal: { demand: 0.18, momentum: 0.14, competition: 0.12, commercial: 0.12, seasonality: 0.20, priceFit: 0.08 },
    commodity: { demand: 0.20, momentum: 0.10, competition: 0.18, commercial: 0.16, seasonality: 0.02, priceFit: 0.14 },
    general: { demand: 0.22, momentum: 0.16, competition: 0.15, commercial: 0.15, seasonality: 0.08, priceFit: 0.08 },
  };
  const weights = weightsByCategory[category];
  const validationScore = clamp(
    Math.round(
      demandScore * weights.demand +
      momentumScore * weights.momentum +
      (100 - competitionScore) * weights.competition +
      commercialActivityScore * weights.commercial +
      facts.trends.seasonalityScore * weights.seasonality +
      (priceFitScore ?? 50) * weights.priceFit +
      reviewVolumeScore * 0.05 +
      adDensityScore * 0.05
    )
  );

  let recommendation: ProductResearchReport['analysis']['recommendation'] = 'Test';
  if (validationScore >= 72 && competitionScore < 75 && commercialActivityScore >= 35) recommendation = 'Launch';
  if (validationScore >= 80 && momentumScore >= 65 && reviewVolumeScore >= 30) recommendation = 'Scale';
  if (demandCurve === 'Declining' || demandCurve === 'Fad') recommendation = validationScore < 50 ? 'Avoid' : 'Wait';
  if (competitionScore >= 82 && validationScore < 68) recommendation = 'Wait';
  if (category === 'beauty' && reviewVolumeScore >= 40 && competitionScore >= 75) recommendation = validationScore >= 60 ? 'Test' : 'Wait';

  const riskLevel =
    demandCurve === 'Declining' || competitionScore >= 82 || (category === 'gadget' && priceFitScore !== null && priceFitScore < 45)
      ? 'High'
      : validationScore >= 72
        ? 'Low'
        : 'Medium';
  const opportunityLevel =
    validationScore >= 75 ? 'High' : validationScore >= 55 ? 'Medium' : 'Low';

  const categoryLabel: Record<ProductCategory, string> = {
    beauty: 'beauty / fragrance',
    gadget: 'gadget / electronics',
    fashion: 'fashion',
    seasonal: 'seasonal utility',
    commodity: 'commodity',
    general: 'general',
  };

  const pricingSentence = facts.marketplace.priceMedian
    ? `Pricing is not generic here: the observed median is Rs ${facts.marketplace.priceMedian.toLocaleString()}, the visible range spans Rs ${facts.marketplace.priceMin?.toLocaleString()} to Rs ${facts.marketplace.priceMax?.toLocaleString()}, and the spread is ${facts.marketplace.priceSpreadPercent ?? 0}%.`
    : 'Marketplace pricing was sparse for this query, so the report leans more heavily on trend and search evidence than on listing economics.';
  const targetDeltaSentence =
    request.priceGoal && facts.marketplace.priceMedian
      ? `Your target price of Rs ${request.priceGoal.toLocaleString()} sits ${request.priceGoal >= facts.marketplace.priceMedian ? 'above' : 'below'} the observed median by Rs ${Math.abs(request.priceGoal - facts.marketplace.priceMedian).toLocaleString()}.`
      : '';
  const summary = [
    `${request.productIdea} in ${request.market} is reading as a ${demandCurve.toLowerCase()} ${categoryLabel[category]} market, not just a generic ecommerce product.`,
    `Trend velocity is ${facts.trends.velocity12Week}% over the latest 12-week window and ${facts.trends.velocity4Week}% over the latest 4 weeks, while current demand sits at ${facts.trends.currentVsPeakPercent}% of its 5-year peak.`,
    `Search saturation is anchored by ${facts.search.uniqueDomains} unique top-result domains, including ${facts.search.ecommerceDomainCount} ecommerce-heavy domains and ${facts.search.socialDomainCount} social-discussion domains, which pushes the ad-density proxy to ${adDensityScore}/100.`,
    pricingSentence,
    targetDeltaSentence,
  ]
    .filter(Boolean)
    .join(' ');

  const rationale = [
    `Category logic changed the weighting here: ${categoryLabel[category]} products prioritize ${category === 'seasonal' ? 'seasonality and timing' : category === 'beauty' ? 'commercial proof and review density' : category === 'gadget' ? 'price fit, trust, and competition' : 'trend strength, pricing, and competition'} more heavily than the default model.`,
    `The raw trend delta is ${facts.trends.latest12WeekAverage} versus ${facts.trends.previous12WeekAverage} across the last two 12-week windows, and ${facts.trends.latest4WeekAverage} versus ${facts.trends.previous4WeekAverage} across the last two 4-week windows, which produces a trend-velocity score of ${trendVelocityScore}/100 rather than a canned momentum label.`,
    `Marketplace evidence varies by product: ${facts.marketplace.listingCount} listings were parsed, sold-count coverage is ${facts.marketplace.soldCoverageRatio}% of listings, review coverage is ${facts.marketplace.reviewCoverageRatio}%, and cumulative visible reviews total ${facts.marketplace.reviewCountTotal ?? 0}.`,
    `Price clustering is ${facts.marketplace.priceClusters.map((cluster) => `${cluster.label} ${cluster.count}`).join(', ')}, which helps distinguish a perfume-style premium stack from a raincoat-style budget-heavy catalog or a gadget-style mid-range market.`,
  ];

  const actions = [
    request.priceGoal && facts.marketplace.priceMedian
      ? `Rework your pricing plan around the Rs ${facts.marketplace.priceMedian.toLocaleString()} observed median before spending on scale; your current target is only a ${priceFitScore ?? 0}/100 fit with visible market pricing.`
      : 'Benchmark your offer against the midpoint of the observed marketplace pricing range before spending on inventory.',
    category === 'beauty'
      ? 'Study the highest-review fragrance listings and compare bottle size, gifting language, and brand-trust framing before testing creatives.'
      : category === 'gadget'
        ? 'Audit warranty, authenticity, and official-store trust signals across top domains before launching a gadget offer.'
        : category === 'seasonal'
          ? `Time your inventory and creative push around the strongest observed months: ${facts.trends.topMonths.map((month) => month.month).join(', ')}.`
          : 'Review the top competitor domains and compare their offer framing, trust signals, and product specificity before launch.',
    category === 'fashion' || category === 'seasonal'
      ? 'Differentiate with bundle design, size clarity, and material positioning instead of trying to win on generic price alone.'
      : category === 'commodity'
        ? 'Push repeat-buy economics, subscription or bundle logic, and margin discipline because this category behaves more like a replacement purchase than a trend buy.'
        : 'Run a small-budget validation test that isolates one clear audience and one clear value proposition before broader scale.'
  ];

  return {
    category,
    demandCurve,
    validationScore,
    demandScore,
    momentumScore,
    competitionScore,
    commercialActivityScore,
    trendVelocityScore,
    priceFitScore,
    reviewVolumeScore,
    adDensityScore,
    riskLevel,
    opportunityLevel,
    recommendation,
    summary,
    rationale,
    actions,
    marketGaps: inferMarketGaps(facts.marketplace.topListings, category),
  };
}

export async function buildProductResearchReport(
  request: ProductResearchRequest
): Promise<ProductResearchReport> {
  const normalizedRequest = {
    productIdea: request.productIdea.trim(),
    market: request.market.trim() || 'Nepal',
    priceGoal: request.priceGoal ?? null,
    goal: request.goal ?? null,
  };

  if (!normalizedRequest.productIdea) {
    throw new Error('Product idea is required.');
  }

  const marketInfo = mapMarketToGeo(normalizedRequest.market);
  if (!marketInfo.geo) {
    throw new Error('This live report currently supports Nepal, India, and United States market queries. Nepal has the richest coverage right now.');
  }

  const [trends, search, searchOverview, daraz, supplierSearches, factorySearches, playerSearches] = await Promise.all([
    fetchGoogleTrends(normalizedRequest.productIdea, marketInfo.geo),
    fetchSearchResults(`${normalizedRequest.productIdea} ${normalizedRequest.market}`, marketInfo.gl),
    fetchGoogleSearchOverview(`${normalizedRequest.productIdea} ${normalizedRequest.market}`, marketInfo.gl),
    marketInfo.marketplace === 'daraz'
      ? fetchDarazListingsResilient(normalizedRequest.productIdea)
      : Promise.resolve({
          sourceUrl: '',
          listings: [] as MarketplaceListing[],
          sourceName: 'Marketplace unavailable',
          note: 'No marketplace connector is configured for this market yet.',
        } satisfies MarketplaceFetchResult),
    fetchEntitySearchResults(
      [
        `${normalizedRequest.productIdea} supplier ${normalizedRequest.market}`,
        `${normalizedRequest.productIdea} wholesaler ${normalizedRequest.market}`,
        `${normalizedRequest.productIdea} distributor ${normalizedRequest.market}`,
      ],
      marketInfo.gl
    ),
    fetchEntitySearchResults(
      [
        `${normalizedRequest.productIdea} factory ${normalizedRequest.market}`,
        `${normalizedRequest.productIdea} manufacturer ${normalizedRequest.market}`,
        `${normalizedRequest.productIdea} production ${normalizedRequest.market}`,
      ],
      marketInfo.gl
    ),
    fetchEntitySearchResults(
      [
        `${normalizedRequest.productIdea} brand ${normalizedRequest.market}`,
        `${normalizedRequest.productIdea} store ${normalizedRequest.market}`,
        `${normalizedRequest.productIdea} company ${normalizedRequest.market}`,
      ],
      marketInfo.gl
    ),
  ]);

  const organicResults = (search.organic || [])
    .filter((result) => result.title && result.link)
    .map((result) => ({
      title: result.title || '',
      link: result.link || '',
      snippet: result.snippet || '',
      source: result.source,
    }))
    .slice(0, 8);
  const competitorDomains = [...new Set(organicResults.map((result) => extractDomain(result.link)).filter(Boolean))];
  const ecommerceDomainCount = competitorDomains.filter(isEcommerceDomain).length;
  const socialDomainCount = competitorDomains.filter(isSocialDomain).length;

  const prices = daraz.listings.map((listing) => listing.price).filter(Boolean);
  const soldCounts = daraz.listings.map((listing) => listing.soldCount).filter((value): value is number => typeof value === 'number');
  const reviewCounts = daraz.listings.map((listing) => listing.reviewCount).filter((value): value is number => typeof value === 'number');
  const priceMedian = prices.length ? median(prices) : null;
  const priceMin = prices.length ? Math.min(...prices) : null;
  const priceMax = prices.length ? Math.max(...prices) : null;
  const priceSpreadPercent = priceMedian && priceMin !== null && priceMax !== null
    ? Math.round(((priceMax - priceMin) / priceMedian) * 100)
    : null;
  const soldCoverageRatio = daraz.listings.length ? Math.round((soldCounts.length / daraz.listings.length) * 100) : 0;
  const reviewCoverageRatio = daraz.listings.length ? Math.round((reviewCounts.length / daraz.listings.length) * 100) : 0;
  const adDensityScore = clamp(Math.round(((ecommerceDomainCount * 1.3) + socialDomainCount) / Math.max(competitorDomains.length, 1) * 35));
  const buyerEstimate = buildBuyerEstimate(
    soldCounts.length ? soldCounts.reduce((sum, value) => sum + value, 0) : null,
    reviewCounts.length ? reviewCounts.reduce((sum, value) => sum + value, 0) : null,
    soldCoverageRatio,
    reviewCoverageRatio,
    daraz.listings.length
  );
  const currentPlayers = dedupeMarketEntities([...organicResults, ...playerSearches], 8);
  const suppliers = dedupeMarketEntities(supplierSearches, 6);
  const localFactories = dedupeMarketEntities(factorySearches, 6);
  const trendFacts = computeTrendFacts(trends.timeline);
  const facts: ProductResearchReport['facts'] = {
    trends: trendFacts,
    search: {
      totalResults: searchOverview.search_information?.total_results || null,
      uniqueDomains: competitorDomains.length,
      ecommerceDomainCount,
      socialDomainCount,
      adDensityScore,
      competitorDomains: competitorDomains.slice(0, 8),
      results: organicResults,
    },
    marketplace: {
      listingCount: daraz.listings.length,
      priceMin,
      priceMedian,
      priceMax,
      soldCountTotal: soldCounts.length ? soldCounts.reduce((sum, value) => sum + value, 0) : null,
      reviewCountTotal: reviewCounts.length ? reviewCounts.reduce((sum, value) => sum + value, 0) : null,
      soldCoverageRatio,
      reviewCoverageRatio,
      priceSpreadPercent,
      priceClusters: buildPriceClusters(daraz.listings),
      buyerEstimate,
      topListings: daraz.listings.slice(0, 6),
    },
    industry: {
      estimatedMarketSize: buildMarketSizeEstimate(
        buyerEstimate,
        priceMedian,
        trendFacts.currentVsPeakPercent,
        reviewCoverageRatio
      ),
      currentPlayers,
      suppliers,
      localFactories,
    },
  };

  const analysis = analyzeReport(normalizedRequest, facts);

  return {
    query: normalizedRequest,
    generatedAt: new Date().toISOString(),
    sources: [
      {
        name: 'Google Trends via SerpAPI',
        url: trends.sourceUrl,
        note: 'Weekly search-interest timeline for the requested market over the last 5 years.',
      },
      {
        name: 'Google Search via Serper',
        url: `https://www.google.com/search?q=${encodeURIComponent(`${normalizedRequest.productIdea} ${normalizedRequest.market}`)}`,
        note: 'Top search results used for competitor and saturation evidence.',
      },
      ...(daraz.sourceUrl
        ? [
            {
              name: daraz.sourceName,
              url: daraz.sourceUrl,
              note: daraz.note,
            },
          ]
        : []),
    ],
    facts,
    analysis,
  };
}
