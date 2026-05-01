import React from 'react';
import { SectionHeader } from '@/components/learn/SectionHeader';
import { BlogArticleCard } from '@/components/learn/BlogArticleCard';

export const ArticleSection = ({ tech, techBlogs }: { tech: any, techBlogs: any[] }) => {
  return (
    <div id="articles" className="scroll-mt-40 space-y-8">
      <SectionHeader title={`${tech.name} Guides & Deep Articles`} />
      <div className="grid sm:grid-cols-2 gap-4">
        {techBlogs.length > 0
          ? techBlogs.map((b) => <BlogArticleCard key={b.id} blog={b} />)
          : <p className="col-span-2 py-8 text-center text-zinc-600 italic">No articles yet.</p>}
      </div>
    </div>
  );
};
