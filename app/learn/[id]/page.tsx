"use client";

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { Container } from '@/components/ui/Container';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { technologies, interviewQuestions } from '@/data/tech-data';
import { contentRegistry } from '@/data/content/index';
import { blogRegistry } from '@/data/blog';

const NAV_TABS = [
  { label: 'Overview', href: 'overview' },
  { label: 'Concepts', href: 'concepts' },
  { label: 'Projects', href: 'projects' },
  { label: 'Interview', href: 'interview' },
  { label: 'Articles', href: 'articles' },
];

export default function LearnDetailPage() {
  const params = useParams();
  const id = Array.isArray(params?.id) ? params.id[0] : (params?.id as string) ?? '';
  const tech = technologies.find((t) => t.id === id);
  const content = contentRegistry[id];
  const techBlogs = Object.values(blogRegistry).filter((b) => b.techId === id);
  const techQs = interviewQuestions.filter((q) => q.techId === id);

  const contentQs = content?.interviewQuestions ? [
    ...(content.interviewQuestions.beginner?.map((q, i) => ({ id: `b-${i}`, question: q.q, answer: q.a, level: 'Beginner' })) || []),
    ...(content.interviewQuestions.intermediate?.map((q, i) => ({ id: `int-${i}`, question: q.q, answer: q.a, level: 'Intermediate' })) || []),
    ...(content.interviewQuestions.advanced?.map((q, i) => ({ id: `adv-${i}`, question: q.q, answer: q.a, level: 'Advanced' })) || []),
  ] : [];
  const allQs = contentQs.length > 0 ? contentQs : techQs;
  // Show ONLY 3 on the learning page — full list is on /interview-questions
  const previewQs = allQs.slice(0, 3);

  const [activeTab, setActiveTab] = useState('overview');
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  const scrollTo = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) { el.scrollIntoView({ behavior: 'smooth', block: 'start' }); setActiveTab(sectionId); }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const handleScroll = () => {
      // Scroll Progress Bar
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scroll = `${totalScroll / windowHeight}`;
      setScrollProgress(Number(scroll));

      // Back to top button visibility
      if (totalScroll > 500) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) setActiveTab(e.target.id);
      }),
      { rootMargin: '-20% 0px -70% 0px' }
    );
    // Observe sections that match the tabs
    NAV_TABS.forEach(({ href }) => {
      const el = document.getElementById(href);
      if (el) obs.observe(el);
    });
    // Also observe some sub-sections if needed to link back to main tabs
    const howItWorks = document.getElementById('how-it-works');
    if (howItWorks) obs.observe(howItWorks);

    return () => obs.disconnect();
  }, []);

  if (!tech) return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <div className="flex items-center justify-center min-h-screen text-slate-400 text-xl">Technology not found.</div>
    </main>
  );

  return (
    <main className="min-h-screen bg-background text-slate-900 relative">
      {/* Scroll Progress Bar */}
      <div
        className="fixed top-0 left-0 h-1 bg-primary z-50 transition-all duration-75 ease-out"
        style={{ width: `${scrollProgress * 100}%` }}
      />

      <Navbar />

      {/* ── HERO ───────────────────────────────────────────── */}
      <section className="pt-36 pb-16 relative overflow-hidden flex flex-col items-center border-b border-slate-100 text-center">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/3 w-[600px] h-[500px] bg-primary/10 rounded-full blur-[140px]" />
          <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-secondary/8 rounded-full blur-[120px]" />
        </div>
        <Container>
          <div className="flex flex-col items-center gap-6 max-w-4xl mx-auto">
            {/* Icon + badge */}
            <div className="flex flex-col items-center gap-3">
              <div className="w-24 h-24 rounded-3xl glass-card flex items-center justify-center shadow-[0_0_50px_rgba(99,102,241,0.2)] p-5">
                {tech.icon.startsWith('http') ? (
                  <img src={tech.icon} alt={tech.name} className="w-full h-full object-contain" />
                ) : (
                  <span className="text-5xl">{tech.icon}</span>
                )}
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
                </span>
                Complete Guide {content?.lastUpdated ?? '2026'}
              </div>
            </div>

            {/* Text */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display leading-tight text-slate-900">
              Learn {tech.name} and Get <span className="text-gradient">Job-Ready</span>
              <br className="hidden md:block" />
              <span className="text-3xl md:text-4xl text-slate-500 mt-2 block">(Step-by-Step Guide)</span>
            </h1>
            <p className="text-slate-600 text-lg md:text-xl leading-relaxed max-w-2xl">
              {tech.description}
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap justify-center gap-4 mt-4">
              <button onClick={() => scrollTo('overview')} className="px-8 py-3.5 bg-primary text-white rounded-full font-bold text-sm hover:bg-primary/90 transition-all shadow-[0_0_20px_rgba(99,102,241,0.4)]">
                Start Learning
              </button>
              <button onClick={() => scrollTo('interview')} className="px-8 py-3.5 border border-slate-200 rounded-full font-bold text-sm hover:bg-slate-50 transition-all bg-white text-slate-700">
                Jump to Interview
              </button>
            </div>

            <div className="flex flex-wrap justify-center gap-3 mt-8">
              <span className="px-4 py-2 rounded-full border border-slate-200 bg-white text-sm font-semibold flex items-center gap-2 text-slate-600 shadow-sm">
                ⭐ {content?.difficulty ?? 'Beginner Friendly'}
              </span>
              <span className="px-4 py-2 rounded-full border border-slate-200 bg-white text-sm font-semibold flex items-center gap-2 text-slate-600 shadow-sm">
                ⏳ {content?.readTime ?? 'Project-Based'}
              </span>
              <span className="px-4 py-2 rounded-full border border-slate-200 bg-white text-sm font-semibold flex items-center gap-2 text-slate-600 shadow-sm">
                🎯 Interview Ready
              </span>
            </div>
          </div>
        </Container>
      </section>

      {/* ── VALUE STRIP (Replaced Stats) ──────────────────── */}
      <div className="border-b border-slate-100 bg-slate-50/50">
        <Container>
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 py-5 text-sm font-semibold text-slate-500">
            <div className="flex items-center gap-2"><span className="text-emerald-400">✔</span> Roadmap Included</div>
            <div className="flex items-center gap-2"><span className="text-emerald-400">✔</span> Projects Included</div>
            <div className="flex items-center gap-2"><span className="text-emerald-400">✔</span> Interview Prep</div>
            <div className="flex items-center gap-2"><span className="text-emerald-400">✔</span> Levels: {content?.difficulty ?? 'Beginner to Advanced'}</div>
          </div>
        </Container>
      </div>

      {/* ── QUICK NAV (Sticky) ────────────────────────────── */}
      <div ref={navRef} className="sticky top-[72px] z-40 bg-background/90 backdrop-blur-xl border-b border-slate-100 shadow-sm">
        <Container className="max-w-6xl">
          <div className="overflow-x-auto scrollbar-none">
            <div className="flex items-center md:justify-center gap-2 py-2 px-4 md:px-0 min-w-max">
              {NAV_TABS.map((tab) => (
                <button key={tab.href} onClick={() => scrollTo(tab.href)}
                  className={`px-6 py-3 text-sm font-semibold transition-all rounded-full whitespace-nowrap ${activeTab === tab.href ? 'text-primary bg-primary/10 shadow-sm' : 'text-slate-500 hover:text-slate-900 hover:bg-slate-50'}`}>
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </Container>
      </div>

      {/* ── MAIN CONTENT + SIDEBAR ─────────────────────────── */}
      <section className="py-16 md:py-24">
        <Container className="max-w-6xl">
          <div className="flex flex-col lg:flex-row gap-16 items-start">

            {/* ── LEFT (Main Content) ───────────────────────── */}
            <div className="flex-1 min-w-0 space-y-32">

              {/* SECTION: OVERVIEW */}
              <div id="overview" className="scroll-mt-48 space-y-16">
                <SectionHeader title={`What is ${tech.name}?`} />

                <article className="space-y-8">
                  {content ? (
                    <div className="space-y-6 text-lg text-slate-700 leading-relaxed font-light">
                      {/* {content.openingHook && <p className="font-medium text-slate-900 text-xl leading-relaxed">{content.openingHook}</p>} */}
                      {content.introText.map((p, i) => <p key={i}>{p}</p>)}
                    </div>
                  ) : (
                    <div className="text-slate-400 italic">Content pending...</div>
                  )}

                  {content && (
                    <div className="p-8 rounded-2xl bg-slate-50 border border-slate-100">
                      <p className="text-sm font-bold uppercase tracking-widest text-primary mb-6">Real-World Usage</p>
                      <ul className="space-y-4">
                        {content.realWorldUsages.map((u, i) => (
                          <li key={i} className="flex items-start gap-4 text-slate-700 text-base">
                            <span className="text-primary mt-1 flex-shrink-0">✦</span>{u}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </article>

                <article className="space-y-8 pt-8">
                  <SectionHeader title={`Why Learn ${tech.name}?`} />
                  <p className="text-lg text-slate-700 leading-relaxed font-light">{content?.whyLearn.demand}</p>

                  <div className="grid md:grid-cols-2 gap-6 mt-8">
                    <div className="p-8 rounded-3xl bg-slate-50 border border-slate-100 flex flex-col justify-center hover:shadow-md transition-shadow">
                      <p className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-emerald-600 mb-2 flex items-center gap-2">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        Average Salary
                      </p>
                      <p className="text-3xl font-display font-bold text-slate-900 mb-2">{content?.whyLearn.salaryRange}</p>
                      <p className="text-sm text-slate-500">For Freshers & Junior Devs</p>
                    </div>
                    <div className="p-8 rounded-3xl bg-primary/5 border border-primary/10 hover:shadow-md transition-shadow">
                      <p className="text-sm font-bold uppercase tracking-widest text-primary mb-4">Job Roles</p>
                      <div className="flex flex-wrap gap-2">
                        {content?.whyLearn.jobRoles.map((r) => (
                          <span key={r.role} className="px-3 py-1.5 rounded-xl bg-white border border-primary/20 text-slate-700 text-sm font-semibold shadow-sm">{r.role}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </article>
              </div>

              {/* HOW IT WORKS */}
              <div id="how-it-works" className="scroll-mt-48 space-y-12">
                <SectionHeader title="How React Works Internally" />
                {content && (
                  <article className="space-y-10">
                    <p className="text-lg text-slate-700 leading-relaxed font-light">{content.howItWorks.intro}</p>

                    <div className="relative pl-8 md:pl-0">
                      <div className="absolute left-[15px] md:left-0 top-0 bottom-0 w-px bg-slate-200 md:hidden" />
                      <div className="grid md:grid-cols-3 gap-8 md:gap-6">
                        {content.howItWorks.vdomSteps.map((s) => (
                          <div key={s.num} className="relative md:p-6 md:rounded-2xl md:bg-slate-50 md:border md:border-slate-100 group">
                            <span className="absolute -left-10 md:left-6 md:top-6 md:static w-8 h-8 rounded-full bg-slate-100 border-2 border-background md:border-0 md:bg-primary/20 text-primary text-sm font-bold flex items-center justify-center mb-4 transition-colors md:group-hover:bg-primary md:group-hover:text-white">{s.num}</span>
                            <h4 className="font-bold text-slate-900 text-xl mb-3">{s.title}</h4>
                            <p className="text-slate-500 text-base leading-relaxed">{s.text}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mt-8">
                      <CodeBlock code={content.howItWorks.componentCode} label="React Component Example" language="jsx" />
                    </div>
                  </article>
                )}
              </div>

              {/* SECTION: CONCEPTS ──────────────────────────── */}
              <div id="concepts" className="scroll-mt-48 space-y-16">
                <SectionHeader title="Core Concepts — Deeply Explained" />

                {content ? (
                  <div className="space-y-20">
                    {content.coreConcepts.map((c) => (
                      <div key={c.id} className="space-y-6 scroll-mt-48" id={`concept-${c.id}`}>
                        <div className="flex items-center gap-4 border-b border-slate-100 pb-4">
                          <div className="w-12 h-12 flex items-center justify-center">
                            {c.icon && c.icon.startsWith('http') ? (
                              <img src={c.icon} alt={c.title} className="w-full h-full object-contain" />
                            ) : (
                              <span className="text-4xl">{c.icon}</span>
                            )}
                          </div>
                          <div>
                            <span className="text-primary font-mono text-sm font-bold">{c.number}</span>
                            <h3 className="text-2xl font-bold text-slate-900 font-display mt-1">{c.title}</h3>
                          </div>
                        </div>

                        <p className="text-lg text-slate-700 leading-relaxed font-light">
                          {c.intro}
                        </p>

                        {c.code && (
                          <div className="my-6">
                            <CodeBlock code={c.code} language="jsx" />
                          </div>
                        )}

                        {c.usage && (
                          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 mt-4">
                            <p className="text-xs font-bold uppercase tracking-widest text-emerald-600 mb-2 flex items-center gap-2">
                              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><path d="M22 4 12 14.01l-3-3" /></svg>
                              Real-World Usage
                            </p>
                            <p className="text-slate-600">{c.usage}</p>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-slate-400 italic">Core concepts coming soon.</div>
                )}
              </div>


              {/* SECTION: PROJECTS ──────────────────────────── */}
              <div id="projects" className="scroll-mt-48 space-y-16">
                <SectionHeader title="Projects to Build" />

                <div className="space-y-16">
                  {(['beginner', 'intermediate', 'advanced'] as const).map((level) => {
                    const items = content?.projects?.[level];
                    if (!items) return null;
                    const bColor = level === 'beginner' ? 'emerald' : level === 'intermediate' ? 'blue' : 'purple';

                    return (
                      <div key={level} className="space-y-6">
                        <div className="border-b border-slate-100 pb-2">
                          <h3 className="text-xl font-bold text-slate-900 capitalize flex items-center gap-3">
                            <span className={`w-3 h-3 rounded-full bg-${bColor}-500`} />
                            {level} Projects
                          </h3>
                        </div>
                        <div className="grid lg:grid-cols-2 gap-6">
                          {items.map(p => (
                            <div key={p.name} className="p-8 bg-white border border-slate-100 rounded-2xl hover:border-primary/20 hover:shadow-md transition-all flex flex-col h-full">
                              <div className="flex items-start justify-between mb-4">
                                <h4 className="text-xl font-bold text-slate-900 leading-snug pr-4">{p.name}</h4>
                                <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest bg-${bColor}-500/10 text-${bColor}-400 flex-shrink-0`}>{level}</span>
                              </div>
                              <p className="text-slate-600 text-base leading-relaxed flex-1 mb-6">{p.desc}</p>

                              <div className="pt-4 border-t border-slate-100 mt-auto">
                                <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-3">Tech Stack / Teaches</p>
                                <div className="flex flex-wrap gap-2">
                                  {p.teaches.split(', ').map(tech => (
                                    <span key={tech} className="px-3 py-1 bg-slate-50 border border-slate-200 rounded-md text-xs font-medium text-slate-600">
                                      {tech}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* SECTION: INTERVIEW — shows only 3 preview Qs ──── */}
              <div id="interview" className="scroll-mt-48 space-y-12">
                <SectionHeader title={`${tech.name} Interview Questions`} />

                <div className="bg-slate-50 border border-slate-100 rounded-3xl p-6 md:p-10">
                  {/* Preview: max 3 questions */}
                  {previewQs.length > 0 ? (
                    <div className="space-y-4">
                      {previewQs.map((q, i) => (
                        <InterviewAccordionCard key={q.id} q={q} num={i + 1} />
                      ))}
                    </div>
                  ) : (
                    <div className="text-center text-zinc-500 italic py-10">Questions loading...</div>
                  )}

                  {/* View all CTA */}
                  <div className="mt-10 pt-8 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-sm text-slate-500">
                      Showing <span className="text-slate-900 font-bold">{previewQs.length}</span> of{' '}
                      <span className="text-slate-900 font-bold">{allQs.length}</span> questions
                    </p>
                    <Link
                      href={`/interview-questions?tech=${id}`}
                      className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-primary text-white font-bold hover:bg-primary/90 transition-all shadow-[0_0_20px_rgba(99,102,241,0.3)]"
                    >
                      View All {allQs.length} {tech.name} Questions
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                    </Link>
                  </div>
                </div>
              </div>

              {/* SECTION: ARTICLES ──────────────────────────── */}
              <div id="articles" className="scroll-mt-48 space-y-12">
                <SectionHeader title={`${tech.name} Guides & Deep Articles`} />

                <div className="grid md:grid-cols-2 gap-6">
                  {techBlogs.length > 0
                    ? techBlogs.map((b) => <BlogArticleCard key={b.id} blog={b} />)
                    : <div className="col-span-2 py-10 text-center text-zinc-600 italic">No articles yet.</div>
                  }
                </div>
              </div>

              {/* FINAL CTA ──────────────────────────────────── */}
              <div className="relative rounded-[40px] overflow-hidden border border-primary/20 bg-white mt-32 shadow-sm">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-slate-50 to-secondary/5 opacity-70" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/3 blur-[100px] pointer-events-none" />

                <div className="relative px-6 py-20 md:py-32 text-center max-w-3xl mx-auto flex flex-col items-center">
                  <div className="w-16 h-16 rounded-2xl bg-primary/20 border border-primary/30 flex items-center justify-center text-3xl mb-8">
                    🚀
                  </div>
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display mb-6 leading-tight text-slate-900">
                    Start Your {tech.name} Journey Today
                  </h2>
                  <p className="text-slate-600 text-lg md:text-xl mb-12 font-light leading-relaxed">
                    Build real projects, prepare for interviews, and become job-ready faster. Stop reading tutorials endlessly and start writing code.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto">
                    <button onClick={() => scrollToTop()} className="w-full sm:w-auto px-10 py-4 bg-primary text-white rounded-full font-bold text-lg hover:bg-primary/90 transition-all shadow-lg shadow-primary/30">
                      Start Learning
                    </button>
                    <Link href={`/interview-questions?tech=${id}`} className="w-full sm:w-auto px-10 py-4 border-2 border-slate-200 rounded-full font-bold text-lg hover:bg-slate-50 hover:border-slate-300 transition-all text-center text-slate-700">
                      Practice Interview
                    </Link>
                  </div>
                </div>
              </div>

            </div>

            {/* ── RIGHT SIDEBAR (30%) ───────────────────────── */}
            <aside className="hidden lg:block w-72 xl:w-80 flex-shrink-0">
              <div className="sticky top-32 space-y-6">

                {/* Table of Contents */}
                <div className="p-6 rounded-2xl border border-slate-100 bg-white shadow-sm">
                  <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-6 flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M8 6h13" /><path d="M8 12h13" /><path d="M8 18h13" /><path d="M3 6h.01" /><path d="M3 12h.01" /><path d="M3 18h.01" /></svg>
                    Table of Contents
                  </h4>
                  <nav className="space-y-1.5">
                    {[
                      { id: 'overview', label: 'What is React?' },
                      { id: 'how-it-works', label: 'How it works' },
                      { id: 'concepts', label: 'Core Concepts' },
                      { id: 'projects', label: 'Projects to Build' },
                      { id: 'interview', label: 'Interview Prep' },
                      { id: 'articles', label: 'Guides & Articles' },
                    ].map((item) => (
                      <button
                        key={item.id}
                        onClick={() => scrollTo(item.id)}
                        className={`w-full text-left px-4 py-2.5 rounded-xl text-sm transition-all flex items-center gap-3 ${activeTab === item.id ? 'bg-primary/10 text-primary font-bold border-l-2 border-primary' : 'text-slate-500 hover:text-slate-900 hover:bg-slate-50'}`}
                      >
                        {item.label}
                      </button>
                    ))}
                  </nav>
                </div>

                {/* Sidebar CTA */}
                <div className="p-6 rounded-2xl border border-primary/20 bg-primary/5">
                  <p className="text-sm font-semibold text-slate-900 mb-2">Ready to test your skills?</p>
                  <p className="text-xs text-slate-500 mb-5 leading-relaxed">Take our {tech.name} proficiency quiz and benchmark your knowledge.</p>
                  <Link href={`/quiz?tech=${id}`} className="w-full flex justify-center px-4 py-3 bg-primary text-white text-sm font-bold rounded-xl hover:bg-primary/90 transition-all">
                    Start Quiz
                  </Link>
                </div>

              </div>
            </aside>

          </div>
        </Container>
      </section>

      {/* Back to top button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 w-12 h-12 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-600 shadow-lg transition-all duration-300 hover:bg-slate-50 hover:border-primary/30 z-50 ${showBackToTop ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0 pointer-events-none'}`}
        aria-label="Back to top"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m18 15-6-6-6 6" /></svg>
      </button>

      <Footer />
    </main>
  );
}

/* ── SUB-COMPONENTS ──────────────────────────────────────────── */

function formatAnswer(answer: string) {
  if (!answer) return null;

  // Rule 1: Detect numbering like (1), (2), (3)
  const numberedRegex = /(\(\d+\))/g;
  if (numberedRegex.test(answer)) {
    const parts = answer.split(numberedRegex);
    const result = [];

    // First part is usually the intro
    if (parts[0].trim()) {
      result.push(<p key="intro" className="mb-4 font-medium text-slate-800">{parts[0].trim()}</p>);
    }

    for (let i = 1; i < parts.length; i += 2) {
      const num = parts[i].replace(/[()]/g, '');
      const text = parts[i + 1].trim();

      result.push(
        <div key={i} className="flex gap-3 mb-3 group/item">
          <div className="flex-shrink-0 w-6 h-6 rounded-full bg-slate-100 text-slate-500 text-[10px] font-bold flex items-center justify-center mt-0.5 group-hover/item:bg-primary group-hover/item:text-white transition-colors border border-slate-200">
            {num}
          </div>
          <p className="text-slate-600 flex-1 leading-relaxed">{text}</p>
        </div>
      );
    }
    return <div className="space-y-1">{result}</div>;
  }

  // Rule 2: Fallback to newline separation
  return (
    <div className="space-y-4">
      {answer.split('\n').map((line, i) => {
        const trimmed = line.trim();
        if (!trimmed) return null;

        // Detect bullet points like "- Content" or "• Content" or "1. Content"
        const isList = trimmed.startsWith('- ') || trimmed.startsWith('• ') || /^\d+\.\s/.test(trimmed);

        let content = trimmed;
        let marker = null;

        if (trimmed.startsWith('- ') || trimmed.startsWith('• ')) {
          content = trimmed.substring(2);
          marker = <span className="text-primary mt-2 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />;
        } else if (/^\d+\.\s/.test(trimmed)) {
          const match = trimmed.match(/^(\d+)\.\s(.*)/);
          if (match) {
            marker = <span className="text-primary font-bold text-sm min-w-[1.25rem]">{match[1]}.</span>;
            content = match[2];
          }
        }

        return (
          <div key={i} className={marker ? "flex gap-3 ml-2" : ""}>
            {marker}
            <p className="flex-1 leading-relaxed">{content}</p>
          </div>
        );
      })}
    </div>
  );
}

function SectionHeader({ title }: { title: string }) {
  return (
    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 font-display relative pb-6 border-b border-slate-100 inline-block w-full">
      {title}
    </h2>
  );
}

function CodeBlock({ code, label, language = "jsx" }: { code: string; label?: string; language?: string }) {
  const [copied, setCopied] = useState(false);
  const copy = () => { navigator.clipboard.writeText(code); setCopied(true); setTimeout(() => setCopied(false), 2000); };
  return (
    <div className="rounded-2xl overflow-hidden border border-white/10 bg-zinc-950 shadow-lg">
      <div className="flex items-center justify-between px-5 py-3 border-b border-white/5 bg-zinc-900/80">
        <div className="flex items-center gap-3">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
            <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50" />
          </div>
          <span className="text-xs font-bold text-zinc-500 uppercase tracking-widest">{label || language}</span>
        </div>
        <button onClick={copy} className="text-xs font-bold uppercase tracking-wider text-zinc-500 hover:text-white transition-colors flex items-center gap-1.5 bg-white/5 hover:bg-white/10 px-3 py-1.5 rounded-md">
          {copied ? '✓ Copied' : 'Copy'}
        </button>
      </div>
      <pre className="p-6 text-sm leading-relaxed overflow-x-auto text-emerald-300 font-mono">
        <code>{code}</code>
      </pre>
    </div>
  );
}

function InterviewAccordionCard({ q, num }: { q: any; num: number }) {
  const [open, setOpen] = useState(false);
  const levelColor = q.level === 'Beginner' ? 'emerald' : q.level === 'Intermediate' ? 'blue' : 'purple';

  return (
    <div className="bg-white border border-slate-100 rounded-2xl overflow-hidden group shadow-sm hover:shadow-md transition-shadow">
      <button onClick={() => setOpen(!open)} className="w-full flex items-start gap-4 p-5 md:p-6 text-left hover:bg-slate-50 transition-colors">
        <div className="flex-1">
          <div className="flex flex-wrap items-center gap-3 mb-2">
            <span className={`px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-widest bg-${levelColor}-500/10 text-${levelColor}-400 border border-${levelColor}-500/20 block w-fit`}>
              {q.level}
            </span>
          </div>
          <h4 className="font-semibold text-slate-900 text-base md:text-lg leading-snug group-hover:text-primary transition-colors pr-6">
            <span className="text-slate-400 mr-2">{num}.</span> {q.question}
          </h4>
        </div>
        <div className="flex-shrink-0 mt-2">
          <svg xmlns="http://www.w3.org/2000/svg" className={`w-5 h-5 text-slate-400 transition-transform duration-300 ${open ? 'rotate-180' : ''}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
        </div>
      </button>

      <div className={`grid transition-all duration-300 ease-in-out ${open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
        <div className="overflow-hidden">
          <div className="px-5 md:px-6 pb-6 pt-2">
            <div className="p-5 rounded-xl bg-white border border-slate-100 text-slate-600 text-sm md:text-base leading-relaxed shadow-sm">
              {formatAnswer(q.answer)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function BlogArticleCard({ blog }: { blog: { id: string; title: string; excerpt: string; author: string; date: string; readTime: string } }) {
  // Determine if beginner or advanced based on content or random for UI purpose if not in data
  const isBeginner = blog.title.toLowerCase().includes('roadmap') || blog.title.toLowerCase().includes('mistake');

  return (
    <Link href={`/blog/${blog.id}`} className="group p-8 rounded-3xl bg-white border border-slate-100 hover:border-primary/30 hover:shadow-lg transition-all block flex flex-col h-full">
      <div className="flex items-center justify-between mb-6">
        <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest ${isBeginner ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' : 'bg-purple-500/10 text-purple-400 border border-purple-500/20'}`}>
          {isBeginner ? 'Beginner' : 'Advanced'}
        </span>
        <span className="text-slate-400 text-xs font-semibold flex items-center gap-1">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
          {blog.readTime} read
        </span>
      </div>
      <h4 className="font-bold text-slate-900 text-xl mb-3 group-hover:text-primary transition-colors leading-snug">{blog.title}</h4>
      <p className="text-slate-500 text-sm leading-relaxed line-clamp-3 mb-8 flex-1">{blog.excerpt}</p>

      <div className="flex items-center justify-between pt-4 border-t border-slate-100 mt-auto">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-xs text-primary font-bold">{blog.author.charAt(0)}</div>
          <span className="text-xs text-slate-500">{blog.author}</span>
        </div>
        <span className="text-primary text-sm font-bold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
          Read Guide <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
        </span>
      </div>
    </Link>
  );
}
