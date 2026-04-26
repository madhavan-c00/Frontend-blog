import React from 'react';
import { Container } from '../ui/Container';

export const Hero = () => {
  return (
    <div className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/10 rounded-full blur-[120px] opacity-40 animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-secondary/10 rounded-full blur-[120px] opacity-40 animate-pulse" />
      </div>

      <Container className="relative">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-semibold mb-6 animate-in fade-in slide-in-from-bottom-2 duration-700">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Daily Technical Content
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 tracking-tight mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100 font-display">
            Master Any <span className="text-gradient">Tech Stack</span> 🚀
          </h1>
          
          <p className="text-xl text-slate-600 mb-12 max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-6 duration-700 delay-200">
            Deep dive into blogs, ace your interview questions, and master technical concepts for every technology.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300">
            <a 
              href="/tech-stacks" 
              className="w-full sm:w-auto px-8 py-4 bg-primary text-white rounded-full font-bold text-lg hover:bg-primary/90 transition-all shadow-glow flex items-center justify-center gap-2"
            >
              Explore Stacks
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </a>
            <a 
              href="/interview-questions" 
              className="w-full sm:w-auto px-8 py-4 bg-white border border-slate-200 text-slate-700 rounded-full font-bold text-lg hover:bg-slate-50 transition-all shadow-sm"
            >
              Interview Prep
            </a>
          </div>

          <div className="mt-20 flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-40 grayscale hover:grayscale-0 transition-all duration-500 animate-in fade-in duration-1000 delay-500">
             {/* Tech Stack Icons Mock */}
             <div className="flex flex-col items-center gap-2">
               <span className="text-3xl">⚛️</span>
               <span className="text-xs font-semibold uppercase tracking-widest text-slate-400">React</span>
             </div>
             <div className="flex flex-col items-center gap-2">
               <span className="text-3xl">🐍</span>
               <span className="text-xs font-semibold uppercase tracking-widest text-slate-400">Python</span>
             </div>
             <div className="flex flex-col items-center gap-2">
               <span className="text-3xl">▲</span>
               <span className="text-xs font-semibold uppercase tracking-widest text-slate-400">Next.js</span>
             </div>
             <div className="flex flex-col items-center gap-2">
               <span className="text-3xl">🟢</span>
               <span className="text-xs font-semibold uppercase tracking-widest text-slate-400">Node.js</span>
             </div>
             <div className="flex flex-col items-center gap-2">
               <span className="text-3xl">🐳</span>
               <span className="text-xs font-semibold uppercase tracking-widest text-slate-400">Docker</span>
             </div>
          </div>
        </div>
      </Container>
    </div>
  );
};
