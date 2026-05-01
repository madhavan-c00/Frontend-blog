"use client";

import React, { useState, useEffect, useRef } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { SectionHeader } from '@/components/learn/SectionHeader';
import { ContentSection } from '@/components/learn/ContentSection';
import { InterviewSection } from '@/components/learn/InterviewSection';
import { ArticleSection } from '@/components/learn/ArticleSection';

const NAV_TABS = [
  { label: 'Overview', href: 'overview' },
  { label: 'Concepts', href: 'concepts' },
  { label: 'Projects', href: 'projects' },
  { label: 'Interview', href: 'interview' },
  { label: 'Articles', href: 'articles' },
];

const WRAP = 'w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8';

interface LearnClientViewProps {
  tech: any;
  content: any;
  techBlogs: any[];
  allQs: any[];
  previewQs: any[];
}

export default function LearnClientView({
  tech,
  content,
  techBlogs,
  allQs,
  previewQs
}: LearnClientViewProps) {
  const [activeTab, setActiveTab] = useState('overview');
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  const scrollTo = (sectionId: string) => {
    setIsExpanded(true); // Automatically expand when navigating
    // Use a small timeout to allow the DOM to update before scrolling
    setTimeout(() => {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        setActiveTab(sectionId);
      }
    }, 100);
  };

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  useEffect(() => {
    const onScroll = () => {
      const total = document.documentElement.scrollTop;
      const max = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      setScrollProgress(total / max);
      setShowBackToTop(total > 500);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) setActiveTab(e.target.id);
      }),
      { rootMargin: '-20% 0px -70% 0px' }
    );
    [...NAV_TABS.map((t) => t.href), 'how-it-works'].forEach((id) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  return (
    <main className="min-h-screen bg-background text-slate-900 overflow-x-hidden w-screen max-w-full">
      {/* Progress bar */}
      <div
        className="fixed top-0 left-0 h-1 bg-primary z-50 transition-all duration-75"
        style={{ width: `${scrollProgress * 100}%` }}
      />

      <Navbar />

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="relative pt-28 sm:pt-32 md:pt-36 pb-12 md:pb-16 border-b border-slate-100 text-center overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/3 w-72 sm:w-[500px] h-72 sm:h-[500px] bg-primary/10 rounded-full blur-[100px]" />
          <div className="absolute bottom-0 right-1/4 w-48 sm:w-[350px] h-48 sm:h-[350px] bg-secondary/8 rounded-full blur-[80px]" />
        </div>

        <div className={WRAP}>
          <div className="flex flex-col items-center gap-5">
            <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-2xl glass-card flex items-center justify-center shadow-[0_0_50px_rgba(99,102,241,0.2)] p-3 sm:p-5">
              {tech.icon.startsWith('http')
                ? <img src={tech.icon} alt={tech.name} className="w-full h-full object-contain" />
                : <span className="text-3xl sm:text-4xl md:text-5xl">{tech.icon}</span>}
            </div>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold">
              <span className="relative flex h-2 w-2 flex-shrink-0">
                <span className="animate-ping absolute inset-0 rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
              </span>
              Complete Guide {content?.lastUpdated ?? '2026'}
            </div>

            <h1 className="w-full text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-display leading-tight text-slate-900 break-words">
              Learn {tech.name} and Get <span className="text-gradient">Job-Ready</span>
              <span className="block text-xl sm:text-3xl text-slate-500 mt-2">(Step-by-Step Guide)</span>
            </h1>

            <p className="w-full max-w-2xl text-slate-600 text-base sm:text-lg md:text-xl leading-relaxed">
              {tech.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
              <button onClick={() => scrollTo('overview')} className="w-full sm:w-auto px-7 py-3 bg-primary text-white rounded-full font-bold text-sm hover:bg-primary/90 transition-all shadow-[0_0_20px_rgba(99,102,241,0.4)]">
                Start Learning
              </button>
              <button onClick={() => scrollTo('interview')} className="w-full sm:w-auto px-7 py-3 border border-slate-200 rounded-full font-bold text-sm hover:bg-slate-50 transition-all bg-white text-slate-700">
                Jump to Interview
              </button>
            </div>

            <div className="flex flex-wrap justify-center gap-2">
              {[
                `⭐ ${content?.difficulty ?? 'Beginner Friendly'}`,
                `⏳ ${content?.readTime ?? 'Project-Based'}`,
                '🎯 Interview Ready',
              ].map((label) => (
                <span key={label} className="px-3 py-1.5 rounded-full border border-slate-200 bg-white text-xs sm:text-sm font-semibold text-slate-600 shadow-sm whitespace-nowrap">
                  {label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── VALUE STRIP ──────────────────────────────────────── */}
      <div className="border-b border-slate-100 bg-slate-50/50">
        <div className={WRAP}>
          <div className="flex flex-wrap items-center justify-center gap-x-5 sm:gap-x-8 gap-y-3 py-4 text-xs sm:text-sm font-semibold text-slate-500">
            {[
              '✔ Roadmap Included',
              '✔ Projects Included',
              '✔ Interview Prep',
              `✔ Levels: ${content?.difficulty ?? 'Beginner to Advanced'}`,
            ].map((item) => (
              <div key={item} className="flex items-center gap-2 whitespace-nowrap">
                <span className="text-emerald-400">{item.slice(0, 1)}</span>
                {item.slice(2)}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── STICKY NAV ───────────────────────────────────────── */}
      <div ref={navRef} className="sticky top-[60px] sm:top-[72px] z-40 bg-background/90 backdrop-blur-xl border-b border-slate-100 shadow-sm">
        <div className={WRAP}>
          <div className="overflow-x-auto" style={{ WebkitOverflowScrolling: 'touch', scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            <div className="flex items-center gap-1 py-2 min-w-max md:min-w-0 md:justify-center">
              {NAV_TABS.map((tab) => (
                <button
                  key={tab.href}
                  onClick={() => scrollTo(tab.href)}
                  className={`px-4 sm:px-5 py-2 text-xs sm:text-sm font-semibold rounded-full whitespace-nowrap transition-all ${activeTab === tab.href ? 'text-primary bg-primary/10' : 'text-slate-500 hover:text-slate-900 hover:bg-slate-50'
                    }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── MAIN CONTENT ─────────────────────────────────────── */}
      <section className="py-12 md:py-16 lg:py-24">
        <div className={WRAP}>
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">
            <div className="flex-1 min-w-0 w-full">
              <ContentSection tech={tech} content={content} showFullContent={isExpanded} />

              {!isExpanded && (
                <div className="mt-12 text-center relative pt-20">
                  {/* Faded overlay */}
                  <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-t from-background to-transparent" />
                  <button
                    onClick={() => setIsExpanded(true)}
                    className="px-10 py-4 bg-slate-900 text-white rounded-full font-bold text-lg hover:bg-slate-800 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 flex items-center gap-3 mx-auto relative z-10"
                  >
                    <span>Load Full {tech.name} Guide</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 animate-bounce" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
                  </button>
                  <p className="mt-4 text-slate-400 text-sm font-medium">Includes Projects, Core Concepts & Interview Prep</p>
                </div>
              )}

              {isExpanded && (
                <div className="space-y-20 md:space-y-32 mt-20 md:mt-32 animate-in fade-in slide-in-from-bottom-8 duration-700">
                  <InterviewSection tech={tech} allQs={allQs} />
                  <ArticleSection tech={tech} techBlogs={techBlogs} />
                </div>
              )}
            </div>

            {/* Sidebar */}
            <aside className="hidden lg:block w-72 xl:w-80 flex-shrink-0">
              <div className="sticky top-32 space-y-6">
                <div className="p-6 rounded-2xl border border-slate-100 bg-white shadow-sm">
                  <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-5">Table of Contents</h4>
                  <nav className="space-y-1">
                    {[
                      { id: 'overview', label: `What is ${tech.name}?` },
                      { id: 'how-it-works', label: 'How it works' },
                      { id: 'concepts', label: 'Core Concepts' },
                      { id: 'projects', label: 'Projects to Build' },
                      { id: 'interview', label: 'Interview Prep' },
                      { id: 'articles', label: 'Guides & Articles' },
                    ].map((item) => (
                      <button
                        key={item.id}
                        onClick={() => scrollTo(item.id)}
                        className={`w-full text-left px-4 py-2.5 rounded-xl text-sm transition-all ${activeTab === item.id ? 'bg-primary/10 text-primary font-bold border-l-2 border-primary' : 'text-slate-500 hover:text-slate-900 hover:bg-slate-50'}`}
                      >
                        {item.label}
                      </button>
                    ))}
                  </nav>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <Footer />

      {/* Back to Top */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-12 h-12 bg-primary text-white rounded-full shadow-xl flex items-center justify-center hover:scale-110 transition-all z-50"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" /></svg>
        </button>
      )}
    </main>
  );
}
