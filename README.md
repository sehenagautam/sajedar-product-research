# Sajedar Product Validation Engine

This repository contains the Sajedar website plus a live product market research workspace built in Next.js. The research flow is designed to turn raw market signals into a practical validation report for a product idea such as `raincoat`, `perfume`, or `air fryer`.

Inside `http://localhost:3000/product-market-research/sample-report`, the app collects live inputs from search and marketplace sources, analyzes them server-side, and renders a report with:

- factual Google Trends demand history
- real search-result saturation signals
- marketplace pricing, sold-count, and review evidence
- demand-curve classification
- current-point positioning on the curve
- short-term trend projection
- estimated buyer volume and visible market size
- current players, suppliers, and local factory discovery

## What the engine does

The current implementation generates a report from observed data instead of fixed mock assumptions. For each request it can derive:

- demand score
- trend velocity
- ad-density proxy
- competition score
- validation score
- risk and opportunity levels
- recommendation (`Launch`, `Test`, `Scale`, `Wait`, `Avoid`)
- evidence-backed rationale and next actions

## Live data sources

The research engine currently uses:

- Google Trends via SerpAPI
- Google Search via Serper and SerpAPI
- Daraz marketplace extraction via Firecrawl with a fallback fetch path

The UI is built to make it obvious when the report is based on live evidence and when a value is still an estimate.

## Main routes

- `/`
  Sajedar marketing site
- `/product-market-research`
  Product validation landing page
- `/product-market-research/sample-report`
  Interactive live research workspace
- `/api/product-market-research/report`
  Server endpoint that generates the factual report JSON

## Key files

- `src/lib/productResearch.ts`
  Core research pipeline, scoring, classification, and report shaping
- `src/app/api/product-market-research/report/route.ts`
  API route for generating reports
- `src/app/product-market-research/ProductMarketResearchClient.tsx`
  Entry point for the product research page
- `src/app/product-market-research/sample-report/ProductResearchWorkspace.tsx`
  Main report UI and graph rendering

## Tech stack

- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- Lucide React

## Getting started

### 1. Install dependencies

```bash
npm install
```

### 2. Configure environment variables

Create a `.env.local` file with the keys used by the research engine:

```bash
SERPAPI_API_KEY=your_key_here
SERPER_API_KEY=your_key_here
FIRECRAWL_API_KEY=your_key_here
```

Without these keys, the product market research report route will fail when it tries to fetch live data.

### 3. Start the app

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Available scripts

```bash
npm run dev
npm run build
npm run start
npm run lint
```

## How the report is determined

The report combines several observed signals:

- Google Trends weekly time series for the product and market
- recent 4-week and 12-week momentum deltas
- current demand versus historical peak
- visible competitor domains in search
- ecommerce and social-result density
- marketplace price distribution
- visible sold counts
- review-count coverage
- supplier, manufacturer, and brand discovery from live search results

Some values are exact observations from the fetched sources, such as search results, trend index points, listing prices, and visible sold/review counts. Other values are explicitly estimates derived from those observations, such as buyer range and visible market size.

## Current market support

The engine currently supports:

- Nepal
- India
- United States

Nepal has the deepest marketplace coverage in the current version because it uses Daraz listing evidence.

## Notes

- The demand curve is based on the actual observed Google Trends time series for the queried product.
- The “Current” point is placed on the observed curve, not on a symbolic placeholder.
- The forward projection is a short forecast derived from recent momentum plus historical seasonality, so it should be treated as directional rather than guaranteed.
- Market size is presented as an evidence-based estimate, not a hard census.

## Status

This is an actively evolving research product. The next likely expansion areas are:

- Meta Ad Library evidence
- TikTok trend inputs
- stronger supplier/manufacturer enrichment
- richer market-size modeling
- more regional marketplace connectors
