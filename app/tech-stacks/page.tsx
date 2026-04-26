import React from 'react';
import { Container } from '@/components/ui/Container';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { technologies } from '@/data/tech-data';
import { contentRegistry } from '@/data/content';
import Link from 'next/link';

export default function TechStacksPage() {
  // Only show technologies that have content available in the registry
  const availableTechnologies = technologies.filter(tech => 
    Object.keys(contentRegistry).includes(tech.id)
  );

  return (
    <main className="min-h-screen bg-background text-slate-900">
      <Navbar />
      
      <section className="pt-40 pb-20">
        <Container>
          <div className="text-center mb-20">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 font-display text-slate-900">
              Master Your <span className="text-gradient">Stack</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Choose a technology to start your learning journey. Each stack contains specialized blogs, interview preparation, and real-world coding challenges.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {availableTechnologies.map((tech) => (
              <Link 
                key={tech.id} 
                href={`/tech-stacks/${tech.id}`}
                className="glass-card p-10 group relative border-slate-100"
              >
                <div className="w-16 h-16 mb-8 group-hover:scale-110 transition-transform duration-500 flex items-center justify-center">
                  {tech.icon.startsWith('http') ? (
                    <img src={tech.icon} alt={tech.name} className="w-full h-full object-contain" />
                  ) : (
                    <span className="text-6xl">{tech.icon}</span>
                  )}
                </div>
                <h3 className="text-3xl font-bold text-slate-900 mb-4 group-hover:text-primary transition-colors">
                  {tech.name}
                </h3>
                <p className="text-slate-600 text-lg mb-8 line-clamp-3">
                  {tech.description}
                </p>
                
                <div className="flex flex-wrap gap-3 mb-8">
                  <span className="px-3 py-1 rounded-lg bg-slate-100 border border-slate-200 text-xs text-slate-500 font-bold uppercase tracking-widest">
                    {tech.category}
                  </span>
                  <span className="px-3 py-1 rounded-lg bg-primary/10 border border-primary/20 text-xs text-primary font-bold uppercase tracking-widest">
                    {tech.stats.questions} QA
                  </span>
                </div>

                <div className="flex items-center gap-2 text-slate-900 font-bold group-hover:gap-4 transition-all">
                  Explore Ecosystem
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <Footer />
    </main>
  );
}
