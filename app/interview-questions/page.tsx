"use client";

import React, { useState, useEffect, useMemo, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { Container } from '@/components/ui/Container';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { interviewQuestions, technologies } from '@/data/tech-data';
import { contentRegistry } from '@/data/content/index';
import Link from 'next/link';

// ── Helper to format answers into points ───────────────────────────────────
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

// ── Same helper as the learning page ────────────────────────────────────────
// Priority: contentRegistry (rich Q&A) → tech-data.ts fallback
function getQuestionsForTech(techId: string) {
  const content = contentRegistry[techId];

  if (content?.interviewQuestions) {
    const qs = [
      ...(content.interviewQuestions.beginner?.map((q, i) => ({
        id: `${techId}-b-${i}`,
        techId,
        question: q.q,
        answer: q.a,
        level: 'Beginner' as const,
      })) ?? []),
      ...(content.interviewQuestions.intermediate?.map((q, i) => ({
        id: `${techId}-int-${i}`,
        techId,
        question: q.q,
        answer: q.a,
        level: 'Intermediate' as const,
      })) ?? []),
      ...(content.interviewQuestions.advanced?.map((q, i) => ({
        id: `${techId}-adv-${i}`,
        techId,
        question: q.q,
        answer: q.a,
        level: 'Advanced' as const,
      })) ?? []),
    ];
    if (qs.length > 0) return qs;
  }

  // Fallback to tech-data.ts
  return interviewQuestions.filter(q => q.techId === techId).map(q => ({ ...q }));
}

// ── Inner component (needs Suspense because it calls useSearchParams) ────────
function InterviewQuestionsContent() {
  const searchParams = useSearchParams();
  const techQuery = searchParams.get('tech'); // null when no ?tech= in URL

  // Local selection state. Initialise from URL; default to the first tech if no query.
  const [activeTech, setActiveTech] = useState<string>(techQuery ?? technologies[0].id);

  // Keep local state in sync whenever the URL changes
  useEffect(() => {
    if (techQuery) {
      setActiveTech(techQuery);
    } else {
      setActiveTech(technologies[0].id);
    }
    // scroll to top so filter change is obvious
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [techQuery]);

  const filteredQuestions = useMemo(() => {
    return getQuestionsForTech(activeTech);
  }, [activeTech]);

  // Only show filter buttons for techs that actually have questions
  const techsWithQuestions = useMemo(
    () => technologies.filter(t => getQuestionsForTech(t.id).length > 0),
    [],
  );

  return (
    <Container>
      {/* Hero */}
      <div className="max-w-4xl mb-16">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 font-display text-slate-900">
          Ace Your <span className="text-gradient">Interviews</span> 🎯
        </h1>
        <p className="text-xl text-slate-600">
          Browse our collection of interview questions across various technologies — from
          fundamental concepts to advanced architecture patterns.
        </p>
      </div>

      {/* Tech Filter Tabs */}
      <div className="flex flex-wrap gap-3 mb-10">
        {/* Per-tech filters */}
        {techsWithQuestions.map(tech => {
          const count = getQuestionsForTech(tech.id).length;
          return (
            <button
              key={tech.id}
              id={`filter-${tech.id}`}
              onClick={() => setActiveTech(tech.id)}
              className={`px-5 py-2.5 rounded-full transition-all font-semibold text-sm border flex items-center gap-2 ${activeTech === tech.id
                ? 'bg-primary border-primary text-white shadow-lg shadow-primary/20'
                : 'bg-white border-slate-200 text-slate-500 hover:border-primary/40 hover:text-primary hover:bg-slate-50'
                }`}
            >
              <div className="w-5 h-5 flex items-center justify-center">
                {tech.icon.startsWith('http') ? (
                  <img src={tech.icon} alt={tech.name} className="w-full h-full object-contain" />
                ) : (
                  <span>{tech.icon}</span>
                )}
              </div>
              {tech.name}
              <span className={`px-1.5 py-0.5 rounded-md text-[10px] ${activeTech === tech.id ? 'bg-white/20' : 'bg-slate-100'}`}>{count}</span>
            </button>
          );
        })}
      </div>

      {/* Result count */}
      {filteredQuestions.length > 0 && (
        <p className="text-sm text-slate-400 mb-8">
          Showing <span className="text-slate-900 font-bold">{filteredQuestions.length}</span>{' '}
          question{filteredQuestions.length !== 1 ? 's' : ''}
          for{' '}
          <span className="text-primary font-bold">
            {technologies.find(t => t.id === activeTech)?.name}
          </span>
        </p>
      )}

      {/* Questions Grid */}
      {filteredQuestions.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredQuestions.map((q, idx) => {
            const tech = technologies.find(t => t.id === q.techId);
            return (
              <div
                key={`${q.id}-${idx}`}
                className="glass-card p-8 md:p-10 relative overflow-hidden group hover:border-primary/30 transition-all"
              >
                {/* Watermark icon */}
                <div className="absolute top-0 right-0 p-6 opacity-10 text-4xl group-hover:scale-110 transition-transform select-none w-20 h-20 flex items-center justify-center">
                  {tech?.icon && tech.icon.startsWith('http') ? (
                    <img src={tech.icon} alt={tech.name} className="w-full h-full object-contain grayscale brightness-200" />
                  ) : (
                    tech?.icon
                  )}
                </div>

                {/* Badges */}
                <div className="mb-5 flex flex-wrap items-center gap-2">
                  <span className="text-primary font-bold text-[10px] uppercase tracking-widest px-2.5 py-1 rounded-md bg-primary/10 border border-primary/20">
                    {tech?.name}
                  </span>
                  <span
                    className={`text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-md border ${q.level === 'Beginner'
                      ? 'text-emerald-400 bg-emerald-400/10 border-emerald-400/20'
                      : q.level === 'Intermediate'
                        ? 'text-blue-400 bg-blue-400/10 border-blue-400/20'
                        : 'text-purple-400 bg-purple-400/10 border-purple-400/20'
                      }`}
                  >
                    {q.level}
                  </span>
                </div>

                {/* Question */}
                <h3 className="text-lg md:text-xl font-bold mb-5 leading-snug text-slate-900 group-hover:text-primary transition-colors">
                  {q.question}
                </h3>

                {/* Answer */}
                <div className="p-6 rounded-2xl bg-white border border-slate-100 text-slate-600 text-sm md:text-base leading-relaxed relative shadow-sm">
                  <div className="absolute -top-3 left-5 px-2.5 py-0.5 bg-slate-100 border border-slate-200 rounded-md text-[9px] font-bold uppercase tracking-widest text-slate-500">
                    Answer
                  </div>
                  {formatAnswer(q.answer)}
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="text-center py-24 bg-slate-50 rounded-3xl border border-slate-100">
          <div className="text-5xl mb-6">🔍</div>
          <h3 className="text-2xl font-bold text-slate-900 mb-3">No questions yet</h3>
          <p className="text-slate-500 mb-8">
            We&apos;re still adding questions for this technology. Check back soon!
          </p>
          <button
            onClick={() => setActiveTech(technologies[0].id)}
            className="px-8 py-3 bg-primary text-white rounded-full font-bold hover:bg-primary/90 transition-all"
          >
            Go to {technologies[0].name}
          </button>
        </div>
      )}

      {/* ── Learning Path CTA ────────────────────────────────────────────────── */}
      {filteredQuestions.length > 0 && (
        <div className="mt-24 p-10 md:p-16 rounded-[40px] bg-gradient-to-br from-primary/5 via-white to-white border border-slate-200 relative overflow-hidden group shadow-sm">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 blur-[100px] -z-10 group-hover:bg-primary/10 transition-colors" />

          <div className="max-w-3xl">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 font-display leading-tight">
              Feeling confident with <span className="text-gradient">{technologies.find(t => t.id === activeTech)?.name}</span> questions?
            </h2>
            <p className="text-xl text-slate-600 mb-10 leading-relaxed">
              Don&apos;t just memorize answers. Master the entire ecosystem with our structured learning path, real-world examples, and hands-on challenges.
            </p>

            <Link
              href={`/learn/${activeTech}`}
              className="inline-flex items-center gap-4 px-10 py-5 bg-primary text-white rounded-full font-bold text-lg hover:bg-primary/90 transition-all shadow-lg shadow-primary/30 group/btn"
            >
              Learn {technologies.find(t => t.id === activeTech)?.name} Completely
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 group-hover/btn:translate-x-2 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
            </Link>
          </div>

          {/* Decorative icon */}
          <div className="absolute bottom-[-20px] right-[-20px] text-[150px] opacity-10 rotate-[-15deg] select-none pointer-events-none group-hover:rotate-0 transition-transform duration-700">
            {technologies.find(t => t.id === activeTech)?.icon}
          </div>
        </div>
      )}
    </Container>
  );
}

// ── Page shell: Suspense is REQUIRED for useSearchParams in Next.js App Router
export default function InterviewQuestionsPage() {
  return (
    <main className="min-h-screen bg-background text-slate-900">
      <Navbar />

      <section className="pt-40 pb-20 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-96 bg-primary/5 blur-[120px] -z-10" />

        <Suspense
          fallback={
            <Container>
              <div className="flex items-center justify-center py-40 text-slate-400">
                Loading questions…
              </div>
            </Container>
          }
        >
          <InterviewQuestionsContent />
        </Suspense>
      </section>

      <Footer />
    </main>
  );
}
