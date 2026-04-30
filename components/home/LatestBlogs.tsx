import React from 'react';
import { Container } from '../ui/Container';
import { technologies } from '@/data/tech-data';
import { blogRegistry } from '@/data/blog';
import Link from 'next/link';

export const LatestBlogs = () => {
  const latestBlogs = Object.values(blogRegistry).slice(0, 4);

  return (
    <section className="py-24 bg-white">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 font-display">
            Career Advice & <span className="text-gradient">Insights</span>
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Expert strategies on resume building, interview techniques, and career growth for entry-level professionals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {latestBlogs.map((post) => {
            const tech = technologies.find(t => t.id === post.techId);
            return (
              <Link 
                key={post.id} 
                href={`/blog/${post.id}`}
                className="group flex flex-col md:flex-row gap-6 p-6 rounded-3xl bg-slate-50/50 border border-slate-100 hover:border-primary/30 hover:bg-white hover:shadow-xl hover:shadow-primary/5 transition-all"
              >
                <div className="w-full md:w-48 h-48 rounded-2xl bg-white border border-slate-100 shadow-sm flex items-center justify-center text-5xl shrink-0 group-hover:scale-105 transition-transform">
                  {tech?.icon}
                </div>
                <div className="flex flex-col justify-center py-2">
                  <span className="text-primary font-bold text-sm uppercase tracking-widest mb-2">
                    {tech?.name}
                  </span>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-slate-500 mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-sm text-slate-400 font-medium">
                    <span>{post.author}</span>
                    <span>•</span>
                    <span>{post.readTime} read</span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <Link 
            href="/blog" 
            className="px-8 py-3 rounded-full border border-slate-200 text-slate-700 font-semibold hover:bg-slate-50 transition-all inline-flex items-center gap-2 shadow-sm"
          >
            Explore All Blogs
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </Link>
        </div>
      </Container>
    </section>
  );
};
