"use client";

import React, { useState } from 'react';
import { Container } from "@/components/ui/Container";
import { BlogCard, Post } from "./BlogCard";

interface BlogClientViewProps {
  articles: Post[];
}

export const BlogClientView = ({ articles }: BlogClientViewProps) => {
  const [visibleCount, setVisibleCount] = useState(5);
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredArticles = activeCategory === 'All' 
    ? articles 
    : articles.filter(a => a.category === activeCategory);

  const displayedArticles = filteredArticles.slice(0, visibleCount);
  const hasMore = visibleCount < filteredArticles.length;

  const categories = ['All', ...Array.from(new Set(articles.map(a => a.category)))];

  const handleLoadMore = () => {
    setVisibleCount(prev => prev + 5);
  };

  return (
    <div className="space-y-24">
      {/* Category Filter */}
      <div className="flex flex-wrap items-center justify-center gap-3">
        {categories.map((cat) => (
          <button 
            key={cat} 
            onClick={() => {
              setActiveCategory(cat);
              setVisibleCount(5); // Reset count when changing category
            }}
            className={`px-8 py-3 rounded-2xl font-black text-xs uppercase tracking-widest transition-all duration-300 border ${
              activeCategory === cat 
                ? 'bg-slate-900 text-white border-slate-900 shadow-xl scale-105' 
                : 'bg-white text-slate-500 border-slate-100 hover:border-primary/30 hover:text-primary'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Blog Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
        {displayedArticles.map((post, index) => (
          <div 
            key={post.id} 
            className="animate-in fade-in slide-in-from-bottom-8 duration-700 fill-mode-both"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <BlogCard post={post} />
          </div>
        ))}
      </div>

      {/* Load More Button */}
      {hasMore && (
        <div className="text-center pt-12">
          <button 
            onClick={handleLoadMore}
            className="group relative px-12 py-5 bg-white text-slate-900 rounded-[2rem] font-black text-sm uppercase tracking-[0.2em] shadow-premium hover:shadow-2xl transition-all duration-500 border border-slate-100 flex items-center gap-4 mx-auto"
          >
            <span>Load More Articles</span>
            <div className="w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center transition-transform group-hover:rotate-180">
               <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14"/><path d="m19 12-7 7-7-7"/></svg>
            </div>
          </button>
        </div>
      )}

      {!hasMore && filteredArticles.length > 0 && (
        <p className="text-center text-slate-400 font-bold text-sm uppercase tracking-widest">
          You've reached the end of our guides.
        </p>
      )}

      {filteredArticles.length === 0 && (
        <div className="text-center py-40">
           <p className="text-slate-400 text-xl font-medium">No articles found in this category.</p>
        </div>
      )}
    </div>
  );
};
