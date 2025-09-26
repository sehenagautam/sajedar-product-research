export interface Tutorial {
  id: string;
  title: string;
  slug: string;
  description: string;
  content: string;
  author: string;
  publishedAt: string;
  updatedAt: string;
  tags: string[];
  category: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  readTime: number;
  featured: boolean;
  seo: {
    metaTitle: string;
    metaDescription: string;
    keywords: string[];
  };
}

export interface TutorialCategory {
  id: string;
  name: string;
  slug: string;
  description: string;
  icon: string;
}
