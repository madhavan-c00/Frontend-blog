import React from 'react';
import Link from 'next/link';
import { SectionHeader } from '@/components/learn/SectionHeader';
import { InterviewAccordionCard } from '@/components/learn/InterviewAccordionCard';

export const InterviewSection = ({ tech, allQs }: { tech: any, allQs: any[] }) => {
  const previewQs = allQs.slice(0, 3);
  
  return (
    <div id="interview" className="scroll-mt-40 space-y-8">
      <SectionHeader title={`${tech.name} Interview Questions`} />
      <div className="bg-slate-50 border border-slate-100 rounded-2xl p-4 sm:p-6 md:p-8">
        {previewQs.length > 0
          ? <div className="space-y-3">{previewQs.map((q, i) => <InterviewAccordionCard key={q.id} q={q} num={i + 1} />)}</div>
          : <p className="text-center text-zinc-500 italic py-8">Questions loading...</p>}
        
        <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs sm:text-sm text-slate-500">
            Showing <strong className="text-slate-900">{previewQs.length}</strong> of <strong className="text-slate-900">{allQs.length}</strong> questions
          </p>
          <Link
            href={`/interview-questions?tech=${tech.id}`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-primary text-white font-bold text-sm hover:bg-primary/90 transition-all shadow-[0_0_20px_rgba(99,102,241,0.3)]"
          >
            View All {allQs.length} {tech.name} Questions
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
          </Link>
        </div>
      </div>
    </div>
  );
};
