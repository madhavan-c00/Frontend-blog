import React from 'react';
import Link from 'next/link';
import { Container } from '../ui/Container';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-white pt-32 pb-16 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-primary/10 blur-[120px] rounded-full -z-10" />

      <Container>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-24">
          <div className="md:col-span-5">
            <Link href="/" className="flex items-center gap-3 mb-8 group">
              <span className="bg-white text-slate-950 p-2.5 rounded-2xl transition-transform duration-500 group-hover:rotate-[10deg] shadow-xl">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="14" x="2" y="7" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
              </span>
              <span className="text-3xl font-black tracking-tight font-display">
                Job<span className="text-primary">Hub</span>
              </span>
            </Link>
            <p className="text-slate-400 text-lg leading-relaxed mb-10 max-w-md font-medium">
              The premium career destination for the next generation of tech talent. Master your craft, ace your interviews, and land your dream job with JobHub.
            </p>
            <div className="flex gap-4">
               {['Twitter', 'LinkedIn', 'GitHub'].map(social => (
                 <button key={social} className="w-12 h-12 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center hover:bg-white hover:text-slate-950 transition-all duration-300">
                    <span className="sr-only">{social}</span>
                    <div className="w-5 h-5 rounded-full border-2 border-current" />
                 </button>
               ))}
            </div>
          </div>

          <div className="md:col-span-2">
            <h4 className="font-black text-white mb-8 uppercase tracking-[0.2em] text-[11px]">Ecosystem</h4>
            <ul className="space-y-4">
              <li><Link href="/tech-stacks" className="text-slate-400 hover:text-white transition-colors font-bold text-sm">Tech Stacks</Link></li>
              <li><Link href="/interview-questions" className="text-slate-400 hover:text-white transition-colors font-bold text-sm">Interview Q&A</Link></li>
              <li><Link href="/jobs" className="text-slate-400 hover:text-white transition-colors font-bold text-sm">Job Portal</Link></li>
              <li><Link href="/quiz" className="text-slate-400 hover:text-white transition-colors font-bold text-sm">Skill Tests</Link></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="font-black text-white mb-8 uppercase tracking-[0.2em] text-[11px]">Resources</h4>
            <ul className="space-y-4">
              <li><Link href="/blog" className="text-slate-400 hover:text-white transition-colors font-bold text-sm">Engineering Blog</Link></li>
              <li><Link href="/roadmap" className="text-slate-400 hover:text-white transition-colors font-bold text-sm">Roadmaps</Link></li>
              <li><Link href="/challenges" className="text-slate-400 hover:text-white transition-colors font-bold text-sm">Daily Challenges</Link></li>
              <li><Link href="/community" className="text-slate-400 hover:text-white transition-colors font-bold text-sm">Community</Link></li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <h4 className="font-black text-white mb-8 uppercase tracking-[0.2em] text-[11px]">Company</h4>
            <ul className="space-y-4">
              <li><Link href="/about" className="text-slate-400 hover:text-white transition-colors font-bold text-sm">Our Mission</Link></li>
              <li><Link href="/privacy-policy" className="text-slate-400 hover:text-white transition-colors font-bold text-sm">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-slate-400 hover:text-white transition-colors font-bold text-sm">Terms of Service</Link></li>
              <li><Link href="/contact" className="text-slate-400 hover:text-white transition-colors font-bold text-sm">Contact Support</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-slate-500 text-sm font-bold tracking-tight">
            © {currentYear} JobHub. Built for the future of tech hiring.
          </p>
          <div className="flex gap-8 items-center text-slate-500 text-[10px] font-black uppercase tracking-[0.2em]">
            <span>Next.js 16.2</span>
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]" />
            <span>Operational</span>
          </div>
        </div>
      </Container>
    </footer>
  );
};
