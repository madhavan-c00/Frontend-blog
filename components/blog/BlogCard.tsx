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
}

interface BlogCardProps {
  post: Post;
}

export const BlogCard = ({ post }: BlogCardProps) => {
  return (
    <Link href={`/blog/${post.slug}`} className="group bg-white rounded-3xl overflow-hidden border border-slate-100 hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300">
      <div className={`h-48 ${post.color} relative overflow-hidden`}>
        {/* Abstract pattern */}
        <div className="absolute inset-0 opacity-20">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id={`pattern-${post.id}`} x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M0 40L40 0M-10 10L10 -10M30 50L50 30" stroke="white" strokeWidth="2" fill="none"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill={`url(#pattern-${post.id})`} />
          </svg>
        </div>
        <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-slate-800 uppercase tracking-wider">
          {post.category}
        </div>
      </div>
      
      <div className="p-8">
        <div className="flex items-center gap-2 text-slate-400 text-sm mb-4 font-medium">
          <span>{post.date}</span>
          <span className="w-1 h-1 rounded-full bg-slate-300"></span>
          <span>{post.author}</span>
        </div>
        <h3 className="text-xl font-bold text-slate-900 group-hover:text-primary transition-colors mb-4 line-clamp-2 leading-tight">
          {post.title}
        </h3>
        <p className="text-slate-500 line-clamp-2 leading-relaxed mb-6">
          {post.excerpt}
        </p>
        <span className="text-primary font-bold inline-flex items-center gap-2 group-hover:translate-x-1 transition-transform">
          Read Guide
          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
        </span>
      </div>
    </Link>
  );
};
