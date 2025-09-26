export interface Article {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string; // markdown-like content
  tags: string[];
  publishedAt: string;
  updatedAt: string;
  author: string;
  readTime: number;
  category?: string;
  seo: {
    metaTitle: string;
    metaDescription: string;
    keywords: string[];
  };
  coverImageUrl?: string;
  youtubeUrl?: string;
} 