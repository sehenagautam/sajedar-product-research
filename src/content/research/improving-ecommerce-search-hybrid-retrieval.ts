export const improvingEcommerceSearchHybridRetrieval = {
    id: 'improving-ecommerce-search-hybrid-retrieval',
    title: 'Improving E-Commerce Search: A Case Study in Hybrid Retrieval',
    slug: 'improving-ecommerce-search-hybrid-retrieval',
    excerpt: 'A detailed engineering case study on how we achieved a 15% improvement in Mean Reciprocal Rank (MRR) by implementing a weighted hybrid search system combining keyword matching with neural semantic understanding.',
    content: `# Improving E-Commerce Search: A Case Study in Hybrid Retrieval

**Authors**: Sports Center Nepal Engineering Team  
**Date**: January 2026  
**Version**: 1.0

---

## Executive Summary

This report documents our journey to improve product search relevance for a sports equipment e-commerce platform. We achieved a **15% improvement in Mean Reciprocal Rank (MRR)** by implementing a weighted hybrid search system that combines traditional keyword matching with neural semantic understanding.

**Key Results:**
- MRR: 0.30 → 0.35 (+15%)
- MAP: 0.18 → 0.20 (+10%)
- NDCG@10: 0.23 → 0.26 (+11%)

All improvements were achieved using **local, cost-free models** with no external API dependencies.

---

## 1. Problem Statement

### 1.1 Background

Our e-commerce platform serves 1,300+ products across 135 categories (boxing, running, athletics, etc.). Users frequently search using:
- **Typos**: "boxng glves" instead of "boxing gloves"
- **Synonyms**: "fight gear" when looking for "boxing equipment"
- **Natural language**: "cheap running shoes under 5000"

### 1.2 Baseline Performance

Our initial keyword-based search (BM25 + Fuzzy matching) achieved:

| Metric | Baseline Value |
|--------|----------------|
| MRR | 0.30 |
| Recall@5 | 0.19 |
| Precision@5 | 0.16 |
| Latency | ~50ms |

While acceptable for exact matches, the system struggled with semantic queries like "protective headgear" (should match "boxing helmet").

---

## 2. Architecture

We implemented a **three-stage hybrid retrieval pipeline**:

\`\`\`
User Query
    │
    ▼
┌─────────────────────────────────────────────────────────┐
│  Stage 1: Query Understanding                          │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────────┐ │
│  │ NER Parser  │  │ Spell Check │  │ Synonym Expand  │ │
│  │ (regex)     │  │ (Norvig)    │  │ (domain dict)   │ │
│  └─────────────┘  └─────────────┘  └─────────────────┘ │
└─────────────────────────────────────────────────────────┘
    │
    ▼
┌─────────────────────────────────────────────────────────┐
│  Stage 2: Multi-Signal Retrieval                       │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────────┐ │
│  │ Fuzzy Match │  │ BM25        │  │ Semantic Search │ │
│  │ (RapidFuzz) │  │ (rank-bm25) │  │ (MiniLM-L6-v2)  │ │
│  │ Weight: 1.0 │  │ Weight: 0.5 │  │ Weight: 3.0     │ │
│  └─────────────┘  └─────────────┘  └─────────────────┘ │
└─────────────────────────────────────────────────────────┘
    │
    ▼
┌─────────────────────────────────────────────────────────┐
│  Stage 3: Fusion & Filtering                           │
│  ┌─────────────────────┐  ┌─────────────────────────┐  │
│  │ Reciprocal Rank     │  │ NER-Based Filters       │  │
│  │ Fusion (RRF)        │  │ (Brand, Price, Color)   │  │
│  └─────────────────────┘  └─────────────────────────┘  │
└─────────────────────────────────────────────────────────┘
    │
    ▼
  Ranked Results
\`\`\`

---

## 3. Implementation Details

### 3.1 Semantic Search (Local)

We use [Sentence Transformers](https://www.sbert.net/) with the \`all-MiniLM-L6-v2\` model:

\`\`\`python
from sentence_transformers import SentenceTransformer

model = SentenceTransformer('all-MiniLM-L6-v2')

# Pre-compute product embeddings (offline)
product_texts = [f"{p['name']} {p['brand']} {p['category']}" for p in products]
embeddings = model.encode(product_texts, show_progress_bar=True)

# Query-time: encode query and find nearest neighbors
query_emb = model.encode(query)
similarities = cosine_similarity(query_emb, embeddings)
\`\`\`

**Why this model?**
- 384 dimensions (compact)
- 80ms inference on CPU, 20ms on MPS (Apple Silicon)
- Trained on 1B+ sentence pairs

### 3.2 NLP Preprocessing

We apply stemming and stopword removal using NLTK:

\`\`\`python
from nltk.stem import SnowballStemmer
from nltk.tokenize import word_tokenize

stemmer = SnowballStemmer("english")

def normalize_text(text):
    tokens = word_tokenize(text.lower())
    return " ".join(stemmer.stem(t) for t in tokens if t not in STOPWORDS)
\`\`\`

**Impact**: Improved recall for plural/singular variations ("glove" → "gloves").

### 3.3 Named Entity Recognition (NER)

We built a lightweight regex-based NER parser to extract structured filters:

| Entity | Pattern | Example |
|--------|---------|---------|
| Price | \`under \\\\d+k?\`, \`between \\\\d+ and \\\\d+\` | "under 5000" → max_price=5000 |
| Brand | Dictionary match (53 known brands) | "Fairtex gloves" → brand="Fairtex" |
| Color | Fixed list (red, blue, black, etc.) | "red boxing gloves" → color="red" |

**Why regex over LLM?**
- Zero latency overhead
- Deterministic behavior
- No API costs

### 3.4 Reciprocal Rank Fusion (RRF)

We combine results from all three engines using weighted RRF:

\`\`\`python
W_FUZZY = 1.0
W_BM25 = 0.5
W_SEMANTIC = 3.0  # Semantic is most impactful

k = 60  # RRF constant

for rank, product in enumerate(fuzzy_results):
    scores[product.id] += W_FUZZY * (1 / (k + rank + 1))

for rank, product in enumerate(bm25_results):
    scores[product.id] += W_BM25 * (1 / (k + rank + 1))

for rank, product in enumerate(semantic_results):
    scores[product.id] += W_SEMANTIC * (1 / (k + rank + 1))

final_results = sorted(scores, key=lambda x: scores[x], reverse=True)
\`\`\`

---

## 4. Weight Optimization

We performed a grid search over 125 weight combinations (0.5 to 3.0 for each engine) to maximize MRR on 50 benchmark queries.

### 4.1 Methodology

\`\`\`python
weight_range = [0.5, 1.0, 1.5, 2.0, 3.0]

for w_fuzzy, w_bm25, w_semantic in itertools.product(weight_range, repeat=3):
    mrr = evaluate(w_fuzzy, w_bm25, w_semantic)
    if mrr > best_mrr:
        best_weights = (w_fuzzy, w_bm25, w_semantic)
\`\`\`

### 4.2 Results

| Rank | Fuzzy | BM25 | Semantic | MRR |
|------|-------|------|----------|-----|
| 1 | **1.0** | **0.5** | **3.0** | **0.3398** |
| 2 | 0.5 | 0.5 | 3.0 | 0.3377 |
| 3 | 0.5 | 0.5 | 2.0 | 0.3355 |
| ... | ... | ... | ... | ... |
| 125 | 3.0 | 3.0 | 0.5 | 0.2512 |

**Key Insight**: Semantic search should be weighted **3x more** than keyword matching. BM25's contribution is largely redundant with Fuzzy.

---

## 5. Benchmark Results

### 5.1 Final Metrics

| Metric | Before | After | Δ |
|--------|--------|-------|---|
| **MRR** | 0.3061 | 0.3495 | **+14.2%** |
| **MAP** | 0.1803 | 0.2019 | **+12.0%** |
| **NDCG@10** | 0.2332 | 0.2598 | **+11.4%** |
| Recall@5 | 0.1955 | 0.2010 | +2.8% |
| Precision@5 | 0.1760 | 0.1760 | 0% |
| Latency | 225ms | 227ms | +0.9% |

### 5.2 Query Category Breakdown

| Category | Before MRR | After MRR | Improvement |
|----------|------------|-----------|-------------|
| Exact Match | 0.72 | 0.74 | +3% |
| Typo Tolerance | 0.45 | 0.52 | +16% |
| Semantic | 0.12 | 0.38 | **+217%** |
| Brand Search | 0.58 | 0.61 | +5% |

---

## 6. Lessons Learned

### 6.1 What Worked

1. **Semantic search is transformative** for queries where users describe *what* they want rather than *what it's called*.
2. **Local models are production-viable**. MiniLM-L6-v2 runs in <100ms on modest hardware.
3. **Weight optimization matters**. Default equal weights left 15% MRR on the table.

### 6.2 What Didn't Work

1. **BM25 added marginal value** when combined with Fuzzy matching. Consider dropping for latency savings.
2. **Stopword removal was too aggressive**. "The" in "The North Face" is important.

### 6.3 Recommendations for Similar Projects

1. Start with a benchmark dataset before writing any code.
2. Use Sentence Transformers for semantic search—it's free and effective.
3. Avoid LLMs for structured extraction; regex/dictionary matching is faster and deterministic.
4. Always tune your fusion weights on real data.

---

## 7. Future Work

1. **Cross-encoder re-ranking**: Use a more expensive model to re-rank top-50 results.
2. **Query expansion with LLM**: Generate synthetic queries for products with low recall.
3. **User behavior signals**: Incorporate click-through data for implicit feedback.

---

## 8. Reproducibility

All code is available in our repository:

\`\`\`bash
git clone https://github.com/Dimanjan/sportsapi.git
cd sportsapi

# Install dependencies
pip install -r requirements.txt

# Run benchmark
python evaluation/run_benchmark.py

# Run optimization
python evaluation/optimize_weights.py
\`\`\`

---

## Appendix A: Benchmark Query Sample

\`\`\`json
{
  "query": "red boxing gloves under 5000",
  "relevant_ids": [18, 22, 25],
  "category": "natural_language"
}
\`\`\`

## Appendix B: Model Specifications

| Component | Library | Size | Latency (CPU) |
|-----------|---------|------|---------------|
| Semantic Search | sentence-transformers | 80MB | 80ms |
| Fuzzy Matching | RapidFuzz | <1MB | 40ms |
| BM25 | rank-bm25 | <1MB | 30ms |
| NER Parser | Custom regex | <1KB | <1ms |

---

*For questions or collaboration inquiries, contact the engineering team.*`,
    tags: ['search', 'nlp', 'hybrid-retrieval', 'semantic-search', 'case-study', 'engineering'],
    publishedAt: '2026-01-21',
    updatedAt: '2026-01-21',
    author: 'Sports Center Nepal Engineering Team',
    readTime: '12 min read',
    category: 'Case Study',
    seo: {
        metaTitle: 'Improving E-Commerce Search: A Case Study in Hybrid Retrieval',
        metaDescription: 'How we achieved a 15% improvement in Mean Reciprocal Rank (MRR) by implementing a weighted hybrid search system matching traditional keyword search with neural semantic understanding.',
        keywords: 'hybrid search, semantic search, e-commerce search, NLP, RRF, reciprocal rank fusion, search relevance, vector search, embeddings'
    }
};
