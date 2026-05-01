import React from 'react';
import { Container } from '../ui/Container';

export const Hero = () => {
  return (
    <div className="relative pt-20 pb-6 md:pt-24 md:pb-12 overflow-hidden bg-white">
      {/* Background Decorative Elements */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        {/* More Vibrant Mesh Gradient */}
        <div className="absolute top-[-10%] left-[-5%] w-[60%] h-[60%] bg-primary/15 rounded-full blur-[120px] animate-float opacity-70" />
        <div className="absolute bottom-[-10%] right-[-5%] w-[60%] h-[60%] bg-secondary/15 rounded-full blur-[120px] animate-float opacity-70" style={{ animationDelay: '-4s' }} />
        <div className="absolute top-[20%] right-[15%] w-[30%] h-[30%] bg-accent/10 rounded-full blur-[100px] animate-pulse opacity-50" />

        {/* Floating Mock Elements (Closer to center) */}
        <div className="hidden xl:block absolute top-[35%] left-[12%] w-52 p-4 bg-white/90 backdrop-blur-2xl border border-white shadow-premium rounded-2xl animate-float opacity-90 rotate-[-4deg]">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-8 rounded-lg bg-emerald-500 flex items-center justify-center text-white font-black text-sm shadow-lg">G</div>
            <div>
              <p className="text-[8px] font-black uppercase text-slate-400 leading-none mb-1">Salary Insight</p>
              <p className="text-xs font-black text-slate-900 leading-none">₹32 LPA • Google</p>
            </div>
          </div>
          <div className="h-1 w-full bg-slate-100 rounded-full overflow-hidden">
            <div className="h-full w-[85%] bg-emerald-500 rounded-full" />
          </div>
        </div>

        <div className="hidden xl:block absolute bottom-[35%] right-[12%] w-60 p-4 bg-slate-900 border border-white/10 shadow-2xl rounded-2xl animate-float opacity-100 rotate-[3deg]" style={{ animationDelay: '-2.5s' }}>
          <div className="flex items-center gap-3 mb-3">
            <div className="w-9 h-9 rounded-xl bg-primary flex items-center justify-center text-white shadow-glow">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" /></svg>
            </div>
            <div>
              <p className="text-[8px] font-black uppercase text-primary tracking-widest leading-none mb-1">Verified</p>
              <p className="text-sm font-black text-white leading-none">SDE-1 Role</p>
            </div>
          </div>
          <div className="flex gap-2">
            <span className="px-2 py-0.5 bg-white/10 rounded-md text-[7px] font-black text-white uppercase tracking-wider">Remote</span>
            <span className="px-2 py-0.5 bg-white/10 rounded-md text-[7px] font-black text-white uppercase tracking-wider">Verified</span>
          </div>
        </div>

        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] brightness-0" />
      </div>

      <Container className="relative">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-slate-900 text-white text-[9px] font-black uppercase tracking-[0.2em] mb-8 animate-in fade-in slide-in-from-bottom-4 duration-1000 shadow-xl">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-400"></span>
            </span>
            Direct Access to 2,000+ Freshers Jobs
          </div>

          <h1 className="text-6xl md:text-[6.5rem] font-black text-slate-900 tracking-tight leading-[0.9] mb-8 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-100 font-display">
            The Future of <br />
            <span className="text-gradient">Tech Hiring.</span>
          </h1>

          <p className="text-lg md:text-xl text-slate-500 mb-12 max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-200 font-medium leading-relaxed">
            Stop scrolling generic boards. Get verified jobs, master FAANG-level interviews, and build a career that actually pays.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16 animate-in fade-in slide-in-from-bottom-16 duration-1000 delay-300">
            <a
              href="/jobs"
              className="btn-primary w-full sm:w-auto !py-5 !px-12 text-md shadow-glow scale-105 hover:scale-110 transition-transform"
            >
              Explore Jobs
            </a>
            <a
              href="/tech-stacks"
              className="btn-secondary w-full sm:w-auto !py-5 !px-12 text-md border-2 hover:bg-slate-50 transition-all"
            >
              Explore Tech
            </a>
          </div>

        </div>
      </Container>
    </div>
  );
};

