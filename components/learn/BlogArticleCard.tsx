import React from 'react';
import Link from 'next/link';

export const BlogArticleCard = ({ blog }: { blog: { id: string; title: string; excerpt: string; author: string; date: string; readTime: string } }) => {
  const isBeginner = blog.title.toLowerCase().includes('roadmap') || blog.title.toLowerCase().includes('mistake');
  return (
    <Link href={`/blog/${blog.id}`} className="group p-5 sm:p-7 rounded-2xl bg-white border border-slate-100 hover:border-primary/30 hover:shadow-lg transition-all flex flex-col">
      <div className="flex items-center justify-between mb-4">
        <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold uppercase ${isBeginner ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' : 'bg-purple-500/10 text-purple-400 border border-purple-500/20'}`}>
          {isBeginner ? 'Beginner' : 'Advanced'}
        </span>
        <span className="text-slate-400 text-xs font-semibold flex items-center gap-1 flex-shrink-0">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
          {blog.readTime} read
        </span>
      </div>
      <h4 className="font-bold text-slate-900 text-base sm:text-lg mb-2 group-hover:text-primary transition-colors leading-snug break-words">{blog.title}</h4>
      <p className="text-slate-500 text-sm leading-relaxed line-clamp-3 mb-5 flex-1 break-words">{blog.excerpt}</p>
      <div className="flex items-center justify-between pt-4 border-t border-slate-100">
        <div className="flex items-center gap-2 min-w-0">
          <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-xs text-primary font-bold flex-shrink-0">{blog.author.charAt(0)}</div>
          <span className="text-xs text-slate-500 truncate">{blog.author}</span>
        </div>
        <span className="text-primary text-xs sm:text-sm font-bold flex items-center gap-1 group-hover:translate-x-1 transition-transform flex-shrink-0 ml-2">
          Read Guide <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
        </span>
      </div>
    </Link>
  );
};
