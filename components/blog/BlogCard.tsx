import React from 'react';
import Link from 'next/link';

export interface Post {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  date: string;
  slug: string;
  color: string;
  image?: string;
}

interface BlogCardProps {
  post: Post;
}

export const BlogCard = ({ post }: BlogCardProps) => {
  return (
    <Link 
      href={`/blog/${post.slug}`} 
      className="group bg-white rounded-[2.5rem] overflow-hidden border border-slate-100 hover:border-primary/20 hover:shadow-premium transition-all duration-500 flex flex-col h-full relative"
    >
      <div className={`h-64 ${post.color} relative overflow-hidden shrink-0`}>
        {post.image ? (
          <img 
            src={post.image} 
            alt={post.title} 
            className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-60 group-hover:opacity-80 transition-opacity duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="absolute inset-0 opacity-10 mix-blend-overlay">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id={`pattern-${post.id}`} x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M0 40L40 0M-10 10L10 -10M30 50L50 30" stroke="white" strokeWidth="2" fill="none"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill={`url(#pattern-${post.id})`} />
            </svg>
          </div>
        )}
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        
        <div className="absolute bottom-6 left-6 flex flex-col gap-2">
           <span className="bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-xl text-[10px] font-black text-slate-900 uppercase tracking-[0.2em] shadow-lg self-start">
            {post.category}
          </span>
        </div>
      </div>
      
      <div className="p-8 sm:p-10 flex flex-col flex-1">
        <div className="flex items-center gap-4 text-slate-400 text-[10px] sm:text-xs font-black uppercase tracking-[0.15em] mb-6">
          <div className="flex items-center gap-2">
             <div className="w-5 h-5 rounded-full bg-slate-100 border border-slate-200" />
             <span>{post.author}</span>
          </div>
          <span className="w-1 h-1 rounded-full bg-slate-300"></span>
          <span>{post.date}</span>
        </div>
        
        <h3 className="text-2xl sm:text-3xl font-black text-slate-900 group-hover:text-primary transition-colors mb-4 line-clamp-2 leading-[1.1] tracking-tight">
          {post.title}
        </h3>
        
        <p className="text-slate-500 font-medium text-base sm:text-lg line-clamp-3 leading-relaxed mb-8">
          {post.excerpt}
        </p>
        
        <div className="mt-auto pt-6 border-t border-slate-50">
          <span className="text-primary font-black text-xs uppercase tracking-[0.2em] inline-flex items-center gap-3 group-hover:gap-5 transition-all">
            Read Full Guide
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </span>
        </div>
      </div>
    </Link>
  );
};
