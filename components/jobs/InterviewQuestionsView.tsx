"use client";

import React, { useState, useEffect, useMemo } from 'react';
import { Container } from '@/components/ui/Container';
import { technologies } from '@/data/tech-data';
import Link from 'next/link';

function formatAnswer(answer: string) {
  if (!answer) return null;
  const numberedRegex = /(\(\d+\))/g;
  if (numberedRegex.test(answer)) {
    const parts = answer.split(numberedRegex);
    const result = [];
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
  return (
    <div className="space-y-4">
      {answer.split('\n').map((line, i) => {
        const trimmed = line.trim();
        if (!trimmed) return null;
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

interface InterviewQuestionsViewProps {
  initialTech: string;
  initialQuestions: any[];
  techsWithQuestions: any[];
}

export default function InterviewQuestionsView({ 
  initialTech, 
  initialQuestions,
  techsWithQuestions
}: InterviewQuestionsViewProps) {
  const [activeTech, setActiveTech] = useState(initialTech);
  
  // Note: For simplicity in this step, I'm keeping the filter local if we have the data, 
  // but ideally we'd use router.push to change the tech and fetch new data on the server.
  // For now, let's just make the initial load fast.
  
  const tech = technologies.find(t => t.id === activeTech);

  return (
    <Container>
      <div className="max-w-4xl mb-16">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 font-display text-slate-900">
          Ace Your <span className="text-gradient">Interviews</span> 🎯
        </h1>
        <p className="text-xl text-slate-600">
          Browse our collection of interview questions across various technologies.
        </p>
      </div>

      <div className="flex flex-wrap gap-3 mb-10">
        {techsWithQuestions.map(t => (
          <Link
            key={t.id}
            href={`/interview-questions?tech=${t.id}`}
            className={`px-5 py-2.5 rounded-full transition-all font-semibold text-sm border flex items-center gap-2 ${activeTech === t.id
              ? 'bg-primary border-primary text-white shadow-lg shadow-primary/20'
              : 'bg-white border-slate-200 text-slate-500 hover:border-primary/40 hover:text-primary hover:bg-slate-50'
              }`}
          >
            <div className="w-5 h-5 flex items-center justify-center">
              {t.icon.startsWith('http') ? (
                <img src={t.icon} alt={t.name} className="w-full h-full object-contain" />
              ) : (
                <span>{t.icon}</span>
              )}
            </div>
            {t.name}
          </Link>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {initialQuestions.map((q, idx) => (
          <div key={idx} className="glass-card p-8 md:p-10 relative overflow-hidden group hover:border-primary/30 transition-all">
            <div className="mb-5 flex flex-wrap items-center gap-2">
              <span className="text-primary font-bold text-[10px] uppercase tracking-widest px-2.5 py-1 rounded-md bg-primary/10 border border-primary/20">
                {tech?.name}
              </span>
              <span className={`text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-md border ${q.level === 'Beginner' ? 'text-emerald-400 bg-emerald-400/10 border-emerald-400/20' : 'text-blue-400 bg-blue-400/10 border-blue-400/20'}`}>
                {q.level}
              </span>
            </div>
            <h3 className="text-lg md:text-xl font-bold mb-5 leading-snug text-slate-900 group-hover:text-primary transition-colors">
              {q.question}
            </h3>
            <div className="p-6 rounded-2xl bg-white border border-slate-100 text-slate-600 text-sm md:text-base leading-relaxed relative shadow-sm">
              <div className="absolute -top-3 left-5 px-2.5 py-0.5 bg-slate-100 border border-slate-200 rounded-md text-[9px] font-bold uppercase tracking-widest text-slate-500">Answer</div>
              {formatAnswer(q.answer)}
            </div>
          </div>
        ))}
      </div>
      
      {/* CTA */}
      <div className="mt-24 p-10 md:p-16 rounded-[40px] bg-gradient-to-br from-primary/5 via-white to-white border border-slate-200 relative overflow-hidden group shadow-sm">
        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 font-display leading-tight">
          Ready for a real challenge?
        </h2>
        <Link
          href={`/learn/${activeTech}`}
          className="inline-flex items-center gap-4 px-10 py-5 bg-primary text-white rounded-full font-bold text-lg hover:bg-primary/90 transition-all shadow-lg shadow-primary/30 group/btn"
        >
          Master {tech?.name}
        </Link>
      </div>
    </Container>
  );
}
