import { ReactNode } from 'react';

export interface BlogContent {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  techId: string;
  color: string;
  content: ReactNode;
}
