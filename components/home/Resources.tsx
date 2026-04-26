import React from 'react';
import { Container } from '../ui/Container';
import { Section } from '../ui/Section';
import { Button } from '../ui/Button';
import Link from 'next/link';

export const Resources = () => {
  return (
    <Section className="bg-slate-50">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Interview Prep Card */}
          <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-slate-100 group">
            <div className="inline-flex p-3 rounded-2xl bg-primary/10 text-primary mb-6 group-hover:scale-110 transition-transform duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h.01"/><path d="M22 13a18.15 18.15 0 0 1-20 0"/><rect width="20" height="14" x="2" y="6" rx="2"/><path d="M12 12h.01"/><path d="M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/></svg>
            </div>
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Master Your Interviews</h2>
            <p className="text-lg text-slate-500 mb-8">
              Access 500+ real interview questions from top companies like Google, TCS, Infosys, and Amazon. Company-specific prep guides updated weekly.
            </p>
            <ul className="space-y-4 mb-10">
              {[
                'Top 50 HR Interview Questions',
                'Data Structures & Algorithms Cheat Sheet',
                'System Design for Beginners',
                'Behavioral Round Strategies'
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-slate-700 font-medium">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-secondary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                  {item}
                </li>
              ))}
            </ul>
            <Button href="/blog?category=interview-prep" size="lg" className="w-full justify-between group">
              Start Preparing Now
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 group-hover:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </Button>
          </div>

          {/* Tech Guides Card */}
          <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-slate-100 group">
            <div className="inline-flex p-3 rounded-2xl bg-secondary/10 text-secondary mb-6 group-hover:scale-110 transition-transform duration-300">
               <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m18 16 4-4-4-4"/><path d="m6 8-4 4 4 4"/><path d="m14.5 4-5 16"/></svg>
            </div>
            <h2 className="text-3xl font-bold text-slate-900 mb-4">In-Depth Tech Guides</h2>
            <p className="text-lg text-slate-500 mb-8">
              Stay ahead of the curve with our expert-written technical guides and roadmaps for various domains.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-10">
               {['Web Dev', 'Data Science', 'UI/UX Design', 'Cloud Computing'].map(category => (
                 <Link key={category} href={`/blog?category=${category.toLowerCase()}`} className="p-4 rounded-xl border border-slate-100 hover:border-secondary hover:bg-secondary/5 transition-all text-slate-700 font-bold text-center">
                   {category}
                 </Link>
               ))}
            </div>
            <Button href="/blog?category=guides" variant="outline" size="lg" className="w-full">
              Explore All Guides
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
};
