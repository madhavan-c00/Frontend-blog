import React from 'react';
import { Container } from '../ui/Container';
import { technologies } from '@/data/tech-data';
import Link from 'next/link';
import { contentRegistry } from '@/data/content';

export const TechGrid = () => {
  // Only show top 6 technologies that have content available in the registry
  const availableTechnologies = technologies
    .filter(tech => Object.keys(contentRegistry).includes(tech.id))
    .slice(0, 6);

  return (
    <section className="py-20 bg-slate-50 relative overflow-hidden">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-10">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 font-display tracking-tight leading-tight">
              Master the <br />
              <span className="text-gradient">Hiring Stacks.</span>
            </h2>
            <p className="text-slate-500 text-lg md:text-xl font-medium">
              We've curated the most in-demand technical paths with company-specific interview insights and project roadmaps.
            </p>
          </div>
          <Link 
            href="/tech-stacks" 
            className="btn-secondary flex items-center gap-2 group shadow-xl"
          >
            View All Stacks
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </Link>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-10">
          {availableTechnologies.map((tech) => (
            <Link 
              key={tech.id} 
              href={`/tech-stacks/${tech.id}`}
              className="p-4 sm:p-10 rounded-[1.5rem] sm:rounded-[2.5rem] bg-white border border-slate-100 hover:border-primary/20 hover:shadow-premium transition-all duration-500 group relative overflow-hidden flex flex-col"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 blur-3xl rounded-full -mr-16 -mt-16 opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="flex items-start justify-between mb-4 sm:mb-10 relative z-10">
                <div className="w-10 h-10 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-slate-50 flex items-center justify-center p-2 sm:p-3 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-[10deg] shadow-inner">
                  {tech.icon.startsWith('http') ? (
                    <img src={tech.icon} alt={tech.name} className="w-full h-full object-contain" />
                  ) : (
                    <span className="text-2xl sm:text-4xl">{tech.icon}</span>
                  )}
                </div>
                <span className="px-2 sm:px-4 py-1 sm:py-1.5 rounded-full bg-slate-900 text-white text-[8px] sm:text-[10px] font-black uppercase tracking-widest shadow-lg">
                  {tech.category}
                </span>
              </div>
              
              <h3 className="text-base sm:text-3xl font-black text-slate-900 mb-2 sm:mb-4 group-hover:text-primary transition-colors tracking-tight line-clamp-1">
                {tech.name}
              </h3>
              
              <p className="text-slate-500 font-medium text-[10px] sm:text-base mb-6 sm:mb-10 line-clamp-2 leading-relaxed">
                {tech.description}
              </p>
              
              <div className="mt-auto flex items-center gap-3 sm:gap-10 pt-4 sm:pt-8 border-t border-slate-50">
                <div className="flex flex-col">
                  <span className="text-slate-900 font-black text-sm sm:text-xl tracking-tight">{tech.stats.blogs}</span>
                  <span className="text-[8px] sm:text-[10px] text-slate-400 uppercase font-black tracking-widest">Guides</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-slate-900 font-black text-sm sm:text-xl tracking-tight">{tech.stats.questions}</span>
                  <span className="text-[8px] sm:text-[10px] text-slate-400 uppercase font-black tracking-widest">QA</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-slate-900 font-black text-sm sm:text-xl tracking-tight">{tech.stats.challenges}</span>
                  <span className="text-[8px] sm:text-[10px] text-slate-400 uppercase font-black tracking-widest">Tasks</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
};
