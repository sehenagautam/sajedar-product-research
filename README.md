# Sajedar - Custom AI Chatbot Agency

A modern, responsive landing page for Sajedar, a custom AI chatbot agency specializing in tailored solutions for ambitious brands.

## 🚀 About

Sajedar offers custom AI chatbot solutions that transform customer engagement and automate interactions. Our platform combines cutting-edge technologies with modern design to create exceptional user experiences.

## ✨ Features

### 🎨 Design & UX
- **Modern Design**: Glassmorphism, gradients, and smooth animations
- **Responsive Layout**: Optimized for all devices (desktop, tablet, mobile)
- **Advanced Animations**: 
  - Animated flow diagrams with Framer Motion
  - Interactive particles with tsparticles
  - Lottie animations for illustrations
  - Smooth transitions and micro-interactions

### 💬 Interactive Demonstrations
- **Demo hub (/demo)**: Facebook Messenger AI demos for multiple businesses + CTA links
- **Chat Demo**: Interactive demonstration of the chatbot in action
- **Chat Dashboard**: Conversation management interface
- **Agentic Flow Diagrams**: Animated visualization of the AI process

### 📝 Content Systems
- **Articles (/articles)**: Business-focused articles authored in code
  - Location: `src/content/articles/`
  - Indexed via `src/content/articles/index.ts`
  - SEO per-article: title, description, keywords, category, tags, readTime
  - Structured data (Article + Breadcrumb)
- **Tutorials (/tutorials)**: Developer-focused tutorials authored in code/markdown-like strings
  - Location: `src/content/tutorials/` (and listing pages in `src/app/tutorials`)
  - Categories, tags, and related content linking

### 🧑‍💻 Developer Application (/developer)
- Custom-styled form (pure HTML/CSS) posts to Google Forms endpoint
- Clean, centered card layout with green focus states and success message (no redirect)

### 🌐 Community (/forum)
- Short intro page linking to the Sajedar Discord discussion forum

### 🔎 SEO & Performance
- **Next.js Metadata**: Page titles, descriptions, keywords, Open Graph, Twitter
- **Structured Data (JSON-LD)**: `Organization`, `WebSite`, `Article`, `BreadcrumbList`
- **Sitemap**: Dynamic sitemap for pages and content
- **Robots**: `robots.txt` configured to allow indexing (including Googlebot settings)
- **Manifest**: PWA manifest and icons/favicons configured
- **Internal Linking**: Related articles, demo links, CTAs deep-linking to contact
- **Performance**: Optimized images, lazy sections, modern fonts

## 🛠️ Tech Stack

### Frontend
- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript for type safety
- **Styling**: Tailwind CSS for modern, responsive design
- **Animations**: 
  - Framer Motion for React animations
  - Anime.js for JavaScript animations
  - tsparticles for particle effects
  - Lottie React for vector animations

### UI/UX
- **Icons**: Lucide React for consistent iconography
- **Fonts**: DM Serif Display and Inter for modern typography
- **Components**: Headless UI for accessible components
- **Heroicons**: Optimized SVG icons

### Development Tools
- **Linting**: ESLint with Next.js configuration
- **Build**: Automatic optimization with Next.js
- **Deployment**: Vercel-ready configuration

## 📦 Installation

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation Steps

1. **Clone the repository**
```bash
git clone [REPO_URL]
cd sajedar-landing
```

2. **Install dependencies**
```bash
npm install
# or
yarn install
```

3. **Start development server**
```bash
npm run dev
# or
yarn dev
```

4. **Open in browser**
```
http://localhost:3000
```

## 🏗️ Available Scripts

```bash
# Development
npm run dev          # Start development server
npm run build        # Build application for production
npm run start        # Start application in production mode
npm run lint         # Check code with ESLint
```

## 📁 Project Structure

```
sajedar-landing/
├── public/                         # Static assets (icons, images, videos, robots, manifest)
├── src/
│   ├── app/
│   │   ├── demo/                   # /demo page
│   │   ├── developer/              # /developer page (custom Google Form)
│   │   ├── forum/                  # /forum page (Discord CTA)
│   │   ├── articles/               # /articles routes
│   │   │   ├── page.tsx            # Articles listing
│   │   │   └── [slug]/page.tsx     # Single article (SEO + JSON-LD)
│   │   ├── tutorials/              # /tutorials routes (listing/category/single)
│   │   ├── Contact/                # /Contact page
│   │   ├── layout.tsx              # Global metadata and Organization/WebSite JSON-LD
│   │   ├── globals.css             # Global styles (cursor, fonts, base)
│   │   └── page.tsx                # Homepage
│   ├── components/                 # UI sections and shared components
│   └── content/
│       ├── articles/               # Business articles (code-authored)
│       │   ├── index.ts            # Registry of articles
│       │   └── *.ts                # Individual articles
│       └── tutorials/              # Tutorials content
├── next.config.js
├── tailwind.config.js
├── tsconfig.json
└── vercel.json
```

## 🧩 Content Authoring

### Add a new Article
1. Create a file in `src/content/articles/` (e.g., `my-new-article.ts`) exporting an `Article` object:
```ts
export const myArticle: Article = {
  id: 'unique-id',
  title: 'Title',
  slug: 'title-slug',
  excerpt: 'Short excerpt...',
  content: `# Heading\n\nBody content with **bold** and lists.`,
  tags: ['tag1','tag2'],
  publishedAt: '2025-09-29',
  updatedAt: '2025-09-29',
  author: 'Sajedar Team',
  readTime: 6,
  category: 'Advertising',
  seo: {
    metaTitle: 'SEO Title | Sajedar',
    metaDescription: 'SEO description aligned with Sajedar goals.',
    keywords: ['sajedar','ai business automation','ai powered sales']
  },
  youtubeUrl: ''
};
```
2. Import it in `src/content/articles/index.ts` and add to the `articles` array.
3. Visit `/articles/my-slug` to verify SEO, JSON-LD, and rendering.

### Add a new Tutorial
- Add tutorial content in `src/content/tutorials/`
- Ensure it is exported and indexed so it appears in `/tutorials` listings

## 🔎 SEO Details
- Global metadata in `src/app/layout.tsx` (title template, keywords including “Sajedar”, Open Graph/Twitter, icons)
- Per-article metadata via content object (used by `generateMetadata`)
- JSON-LD: `Organization`, `WebSite` (global), `Article` and `BreadcrumbList` (article pages)
- Sitemap and robots are generated with open indexation
- PWA manifest and icons configured (android-chrome, apple-touch, favicon)

## 🔗 Key Pages
- **Homepage**: `/`
- **Demo**: `/demo`
- **Articles**: `/articles`
- **Tutorials**: `/tutorials`
- **Developer**: `/developer`
- **Forum**: `/forum`
- **Contact**: `/Contact`

## 🧭 CTAs & Deep Links
- CTAs deep-link to the homepage contact section with pre-filled `?message=...#contact`
- Category-specific CTAs on article pages (e.g., Advertising → Meta ads + chatbots ROAS message)
- “Watch the intro” button only appears if an article provides a YouTube URL

## 🤝 Contributing

1. Fork the project
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is under private license. All rights reserved to Sajedar.

## 📞 Contact

- **Website**: [sajedar.com](https://sajedar.com)
- **Email**: contact@sajedar.com
- **LinkedIn**: [Sajedar](https://linkedin.com/company/sajedar)

---

© 2025 Sajedar. All rights reserved. 