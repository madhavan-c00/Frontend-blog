import React from 'react';
import { Container } from '../ui/Container';
import { technologies } from '@/data/tech-data';
import { blogRegistry } from '@/data/blog';
import Link from 'next/link';

export const LatestBlogs = () => {
  const latestBlogs = Object.values(blogRegistry).slice(0, 4);

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-primary/5 blur-[120px] rounded-full -translate-y-1/2 -ml-32" />
      
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 font-display tracking-tight leading-tight">
              Career Advice & <br />
              <span className="text-gradient">Industry Insights.</span>
            </h2>
            <p className="text-slate-500 text-lg md:text-xl font-medium">
              Expert strategies on resume building, interview techniques, and career growth for entry-level professionals.
            </p>
          </div>
          <Link 
            href="/blog" 
            className="btn-secondary hidden md:flex items-center gap-2 group"
          >
            Explore All Guides
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:gap-10">
          {latestBlogs.map((post) => {
            const tech = technologies.find(t => t.id === post.techId);
            return (
              <Link 
                key={post.id} 
                href={`/blog/${post.id}`}
                className="group p-4 sm:p-8 rounded-[1.5rem] sm:rounded-[2.5rem] bg-white border border-slate-100 hover:border-primary/20 hover:shadow-premium transition-all duration-500 flex flex-col lg:flex-row gap-4 sm:gap-8"
              >
                <div className="w-full lg:w-40 h-32 sm:h-40 rounded-2xl sm:rounded-3xl bg-slate-50 flex items-center justify-center text-3xl sm:text-4xl shrink-0 group-hover:bg-primary/5 group-hover:rotate-[5deg] group-hover:scale-105 transition-all duration-500 shadow-inner relative overflow-hidden">
                  <img 
                    src={post.image || "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop"} 
                    alt={post.title} 
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  {/* Overlay for icon if needed in future, but replacing with image per user request */}
                </div>
                <div className="flex flex-col justify-center">
                  <span className="text-[8px] sm:text-[10px] font-black text-primary uppercase tracking-[0.2em] mb-2 sm:mb-3">
                    #{tech?.name}
                  </span>
                  <h3 className="text-sm sm:text-2xl font-black text-slate-900 mb-2 sm:mb-4 group-hover:text-primary transition-colors line-clamp-2 leading-tight tracking-tight">
                    {post.title}
                  </h3>
                  <div className="flex items-center gap-2 sm:gap-4 text-[9px] sm:text-xs font-bold text-slate-400">
                    <div className="flex items-center gap-1.5 sm:gap-2">
                       <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-slate-100 border border-slate-200" />
                       <span className="line-clamp-1">{post.author}</span>
                    </div>
                    <span className="w-1 h-1 rounded-full bg-slate-300 hidden sm:block" />
                    <span className="whitespace-nowrap">{post.readTime}</span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        <div className="mt-16 text-center md:hidden">
          <Link href="/blog" className="btn-primary w-full">Explore All Guides</Link>
        </div>
      </Container>
    </section>
  );
};
