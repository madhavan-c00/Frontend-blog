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
            Direct Job Openings for Freshers
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 tracking-tight mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100 font-display">
            Land Your Dream <span className="text-gradient">Tech Job</span> 💼
          </h1>
          
          <p className="text-xl text-slate-600 mb-12 max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-6 duration-700 delay-200">
            The #1 platform for freshers to find jobs, master interviews, and build the skills that top companies are actually hiring for.
          </p>

          {/* Mockup Search Bar */}
          <div className="relative max-w-2xl mx-auto mb-12 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300">
            <div className="flex flex-col sm:flex-row gap-2 p-2 bg-white rounded-2xl shadow-xl border border-slate-100">
              <div className="flex-1 flex items-center px-4 gap-2 border-b sm:border-b-0 sm:border-r border-slate-100 py-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-slate-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
                <input 
                  type="text" 
                  placeholder="Job title or keyword" 
                  className="bg-transparent border-none focus:ring-0 w-full text-slate-900 placeholder:text-slate-400"
                />
              </div>
              <div className="flex-1 flex items-center px-4 gap-2 py-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-slate-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                <input 
                  type="text" 
                  placeholder="Location (e.g. Remote)" 
                  className="bg-transparent border-none focus:ring-0 w-full text-slate-900 placeholder:text-slate-400"
                />
              </div>
              <button className="bg-primary text-white px-8 py-3 rounded-xl font-bold hover:bg-primary/90 transition-all shadow-glow whitespace-nowrap">
                Search Jobs
              </button>
            </div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 text-slate-400 font-medium animate-in fade-in duration-1000 delay-500">
            <span className="flex items-center gap-2"><span className="text-primary">✓</span> 2,000+ Active Jobs</span>
            <span className="flex items-center gap-2"><span className="text-primary">✓</span> Verified Companies</span>
            <span className="flex items-center gap-2"><span className="text-primary">✓</span> Free for Freshers</span>
          </div>
        </div>
      </Container>
    </div>
  );
};

