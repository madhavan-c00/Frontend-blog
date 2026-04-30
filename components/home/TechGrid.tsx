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
    <section className="py-24 bg-background">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-display">
              Top <span className="text-gradient">Hiring Skills</span>
            </h2>
            <p className="text-zinc-400 text-lg">
              Master the technical stacks that companies are actively recruiting for. 
              Each path includes company-specific interview questions.
            </p>
          </div>
          <Link 
            href="/tech-stacks" 
            className="text-primary hover:text-primary/80 font-semibold flex items-center gap-2 transition-colors group"
          >
            View All Stacks
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 group-hover:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {availableTechnologies.map((tech) => (
            <Link 
              key={tech.id} 
              href={`/tech-stacks/${tech.id}`}
              className="glass-card p-8 group relative overflow-hidden"
            >
              {/* Decorative Circle */}
              <div className="absolute -right-4 -top-4 w-24 h-24 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-colors" />
              
              <div className="flex items-start justify-between mb-6">
                <div className="w-12 h-12 flex items-center justify-center">
                  {tech.icon.startsWith('http') ? (
                    <img src={tech.icon} alt={tech.name} className="w-full h-full object-contain" />
                  ) : (
                    <span className="text-4xl">{tech.icon}</span>
                  )}
                </div>
                <span className="px-3 py-1 rounded-full bg-slate-100 text-slate-500 text-xs font-bold uppercase tracking-wider">
                  {tech.category}
                </span>
              </div>
              
              <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-primary transition-colors">
                {tech.name}
              </h3>
              
              <p className="text-slate-600 mb-8 line-clamp-2">
                {tech.description}
              </p>
              
              <div className="flex items-center gap-6 pt-6 border-t border-slate-100">
                <div className="flex flex-col">
                  <span className="text-slate-900 font-bold">{tech.stats.blogs}</span>
                  <span className="text-xs text-slate-400 uppercase font-semibold">Blogs</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-slate-900 font-bold">{tech.stats.questions}</span>
                  <span className="text-xs text-slate-400 uppercase font-semibold">QA</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-slate-900 font-bold">{tech.stats.challenges}</span>
                  <span className="text-xs text-slate-400 uppercase font-semibold">Tasks</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
};
