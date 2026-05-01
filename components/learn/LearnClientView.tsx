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
    <main className="min-h-screen bg-white text-slate-900 overflow-x-hidden w-screen max-w-full">
      {/* Progress bar */}
      <div
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-primary to-secondary z-[60] transition-all duration-300"
        style={{ width: `${scrollProgress * 100}%` }}
      />

      <Navbar />

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="relative pt-32 sm:pt-40 md:pt-48 pb-20 md:pb-28 text-center overflow-hidden">
        {/* Background blobs */}
        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-[120px] animate-float" />
          <div className="absolute top-[20%] -right-[5%] w-[30%] h-[30%] bg-secondary/5 rounded-full blur-[100px] animate-float" style={{ animationDelay: '-2s' }} />
          <div className="absolute -bottom-[10%] left-[20%] w-[25%] h-[25%] bg-accent/5 rounded-full blur-[80px] animate-float" style={{ animationDelay: '-4s' }} />
          
          {/* Subtle grid pattern */}
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] brightness-0" />
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center gap-8">
            <div className="relative group animate-in fade-in zoom-in duration-1000">
              <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="relative w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-[2rem] bg-white border border-slate-100 flex items-center justify-center shadow-premium p-5 sm:p-6 transition-all duration-500 group-hover:-translate-y-2 group-hover:rotate-[5deg]">
                {tech.icon.startsWith('http')
                  ? <img src={tech.icon} alt={tech.name} className="w-full h-full object-contain" />
                  : <span className="text-4xl sm:text-5xl md:text-6xl">{tech.icon}</span>}
              </div>
            </div>

            <div className="animate-in slide-in-from-bottom-4 duration-700 delay-100">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 text-white text-[10px] font-bold uppercase tracking-widest shadow-xl">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inset-0 rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
                </span>
                Ultimate Guide {content?.lastUpdated ?? '2026'}
              </div>
            </div>

            <div className="space-y-6 animate-in slide-in-from-bottom-6 duration-1000 delay-200">
              <h1 className="text-4xl sm:text-6xl md:text-7xl font-black font-display leading-[1.1] text-slate-900 tracking-tight">
                Master {tech.name} <br /> 
                <span className="text-gradient">Get Hired.</span>
              </h1>

              <p className="max-w-2xl mx-auto text-slate-500 text-lg sm:text-xl md:text-2xl leading-relaxed font-medium">
                {tech.description}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto animate-in slide-in-from-bottom-8 duration-1000 delay-300">
              <button onClick={() => scrollTo('overview')} className="btn-primary flex items-center justify-center gap-2">
                <span>Start Learning</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </button>
              <button onClick={() => scrollTo('interview')} className="btn-secondary flex items-center justify-center gap-2">
                Jump to Interview
              </button>
            </div>

            <div className="flex flex-wrap justify-center gap-3 animate-in fade-in duration-1000 delay-500">
              {[
                { icon: '⭐', label: content?.difficulty ?? 'Beginner Friendly' },
                { icon: '⏳', label: content?.readTime ?? 'Project-Based' },
                { icon: '🎯', label: 'Interview Ready' },
              ].map((item) => (
                <span key={item.label} className="px-4 py-2 rounded-2xl border border-slate-100 bg-white/50 backdrop-blur-sm text-xs sm:text-sm font-bold text-slate-600 shadow-sm whitespace-nowrap flex items-center gap-2 hover:border-slate-200 transition-colors">
                  <span className="text-lg">{item.icon}</span>
                  {item.label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── VALUE STRIP ──────────────────────────────────────── */}
      <div className="border-y border-slate-100 bg-slate-50/30 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-x-8 sm:gap-x-12 gap-y-4 py-6 text-xs sm:text-[13px] font-bold uppercase tracking-widest text-slate-400">
            {[
              'Roadmap Included',
              'Projects Included',
              'Interview Prep',
              `Level: ${content?.difficulty ?? 'Beginner'}`,
            ].map((item) => (
              <div key={item} className="flex items-center gap-3 whitespace-nowrap group">
                <div className="w-1.5 h-1.5 rounded-full bg-primary/40 transition-transform group-hover:scale-150 group-hover:bg-primary" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── STICKY NAV ───────────────────────────────────────── */}
      <div ref={navRef} className="sticky top-[72px] sm:top-[88px] z-40 bg-white/80 backdrop-blur-xl border-b border-slate-100 shadow-premium overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="overflow-x-auto scrollbar-hide" style={{ WebkitOverflowScrolling: 'touch' }}>
            <div className="flex items-center gap-2 py-3 min-w-max md:min-w-0 md:justify-center">
              {NAV_TABS.map((tab) => (
                <button
                  key={tab.href}
                  onClick={() => scrollTo(tab.href)}
                  className={`px-6 py-2 text-sm font-bold rounded-2xl whitespace-nowrap transition-all duration-300 ${
                    activeTab === tab.href 
                      ? 'text-primary bg-primary/5 shadow-inner shadow-primary/5' 
                      : 'text-slate-400 hover:text-slate-900 hover:bg-slate-50'
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
      <section className="relative py-12 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
            <div className="flex-1 min-w-0 w-full">
              <ContentSection tech={tech} content={content} showFullContent={isExpanded} />

              {!isExpanded && (
                <div className="mt-16 text-center relative pt-24">
                  {/* Faded overlay */}
                  <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-t from-white via-white/90 to-transparent" />
                  <button
                    onClick={() => setIsExpanded(true)}
                    className="btn-primary !px-12 !py-5 !text-lg flex items-center gap-4 mx-auto relative z-10 group"
                  >
                    <span>Unlock Full {tech.name} Guide</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 transition-transform group-hover:translate-y-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
                  </button>
                  <p className="mt-6 text-slate-400 text-sm font-bold uppercase tracking-widest">Everything you need to master {tech.name}</p>
                </div>
              )}

              {isExpanded && (
                <div className="space-y-24 md:space-y-40 mt-24 md:mt-40">
                  <InterviewSection tech={tech} allQs={allQs} />
                  <ArticleSection tech={tech} techBlogs={techBlogs} />
                </div>
              )}
            </div>

            {/* Sidebar */}
            <aside className="hidden lg:block w-80 flex-shrink-0">
              <div className="sticky top-40 space-y-8">
                <div className="p-8 rounded-[2.5rem] bg-slate-50/50 border border-slate-100 backdrop-blur-sm shadow-premium">
                  <h4 className="text-[11px] font-black uppercase tracking-[0.2em] text-slate-400 mb-6 flex items-center gap-3">
                    <span className="w-8 h-[1px] bg-slate-200" />
                    Table of Contents
                  </h4>
                  <nav className="space-y-2">
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
                        className={`w-full text-left px-5 py-3 rounded-2xl text-sm font-bold transition-all duration-300 ${
                          activeTab === item.id 
                            ? 'bg-white text-primary shadow-lg shadow-primary/5 border border-slate-100' 
                            : 'text-slate-500 hover:text-slate-900 hover:bg-white/50'
                        }`}
                      >
                        {item.label}
                      </button>
                    ))}
                  </nav>
                </div>

                {/* Promo Card */}
                <div className="p-8 rounded-[2.5rem] bg-slate-900 text-white relative overflow-hidden group shadow-2xl">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 blur-3xl rounded-full -mr-16 -mt-16 group-hover:bg-primary/40 transition-colors" />
                  <div className="relative z-10">
                    <h5 className="text-xl font-bold mb-2">Want a Cheat Sheet?</h5>
                    <p className="text-slate-400 text-sm mb-6 leading-relaxed">Download our exclusive {tech.name} interview cheat sheet for free.</p>
                    <button className="w-full py-3 bg-white text-slate-900 rounded-xl font-bold text-sm hover:bg-slate-100 transition-colors">Download PDF</button>
                  </div>
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
          className="fixed bottom-10 right-10 w-14 h-14 bg-slate-900 text-white rounded-2xl shadow-2xl flex items-center justify-center hover:scale-110 hover:-translate-y-2 transition-all z-50 group"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 transition-transform group-hover:-translate-y-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 10l7-7m0 0l7 7m-7-7v18" /></svg>
        </button>
      )}
    </main>
  );
}
