import React from 'react';
import Link from 'next/link';
import { Container } from '../ui/Container';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-slate-100 pt-20 pb-10">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <span className="bg-primary text-white p-2 rounded-xl shadow-glow">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m18 16 4-4-4-4"/><path d="m6 8-4 4 4 4"/><path d="m14.5 4-5 16"/></svg>
              </span>
              <span className="text-2xl font-bold tracking-tight font-display">
                Tech<span className="text-primary">Hub</span>
              </span>
            </Link>
            <p className="text-zinc-500 leading-relaxed mb-6">
              The ultimate destination for developers to master their craft through deep-dive blogs, interview prep, and technical guides.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-6 uppercase tracking-widest text-xs">Technologies</h4>
            <ul className="space-y-4">
              <li><Link href="/tech-stacks/react" className="text-slate-500 hover:text-primary transition-colors">React</Link></li>
              <li><Link href="/tech-stacks/nextjs" className="text-slate-500 hover:text-primary transition-colors">Next.js</Link></li>
              <li><Link href="/tech-stacks/nodejs" className="text-slate-500 hover:text-primary transition-colors">Node.js</Link></li>
              <li><Link href="/tech-stacks/python" className="text-slate-500 hover:text-primary transition-colors">Python</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-6 uppercase tracking-widest text-xs">Resources</h4>
            <ul className="space-y-4">
              <li><Link href="/interview-questions" className="text-slate-500 hover:text-primary transition-colors">Interview Prep</Link></li>
              <li><Link href="/blog" className="text-slate-500 hover:text-primary transition-colors">Technical Blogs</Link></li>
              <li><Link href="/quiz" className="text-slate-500 hover:text-primary transition-colors">Skill Quizzes</Link></li>
              <li><Link href="/roadmap" className="text-slate-500 hover:text-primary transition-colors">Learning Roadmaps</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-6 uppercase tracking-widest text-xs">Legal</h4>
            <ul className="space-y-4">
              <li><Link href="/privacy-policy" className="text-slate-500 hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-slate-500 hover:text-primary transition-colors">Terms of Service</Link></li>
              <li><Link href="/about" className="text-slate-500 hover:text-primary transition-colors">About Us</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-400 text-sm">
            © {currentYear} TechHub. All rights reserved. Built for the developer community.
          </p>
          <div className="flex gap-6 items-center">
            <span className="text-xs text-slate-300 font-bold uppercase tracking-tighter">Powered by Next.js 15</span>
          </div>
        </div>
      </Container>
    </footer>
  );
};
