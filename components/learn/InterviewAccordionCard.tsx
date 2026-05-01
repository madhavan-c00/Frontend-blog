"use client";

import React, { useState } from 'react';

function formatAnswer(answer: string) {
  if (!answer) return null;
  if (/\(\d+\)/.test(answer)) {
    const parts = answer.split(/(\(\d+\))/g);
    const nodes: React.ReactNode[] = [];
    if (parts[0].trim()) nodes.push(<p key="intro" className="mb-3 font-medium text-slate-800 break-words">{parts[0].trim()}</p>);
    for (let i = 1; i < parts.length; i += 2) {
      const num = parts[i].replace(/[()]/g, '');
      const text = parts[i + 1]?.trim();
      nodes.push(
        <div key={i} className="flex gap-3 mb-2">
          <div className="flex-shrink-0 w-6 h-6 rounded-full bg-slate-100 text-slate-500 text-[10px] font-bold flex items-center justify-center border border-slate-200">{num}</div>
          <p className="text-slate-600 flex-1 text-sm sm:text-base leading-relaxed break-words">{text}</p>
        </div>
      );
    }
    return <div>{nodes}</div>;
  }
  return (
    <div className="space-y-2">
      {answer.split('\n').map((line, i) => {
        const t = line.trim();
        if (!t) return null;
        let content = t;
        let marker: React.ReactNode = null;
        if (t.startsWith('- ') || t.startsWith('• ')) { 
          content = t.slice(2); 
          marker = <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />; 
        }
        else if (/^\d+\.\s/.test(t)) { 
          const m = t.match(/^(\d+)\.\s(.*)/); 
          if (m) { 
            marker = <span className="text-primary font-bold text-sm min-w-[1.25rem]">{m[1]}.</span>; 
            content = m[2]; 
          } 
        }
        return (
          <div key={i} className={marker ? 'flex gap-3 ml-2' : ''}>
            {marker}
            <p className="flex-1 text-sm sm:text-base leading-relaxed break-words">{content}</p>
          </div>
        );
      })}
    </div>
  );
}

export const InterviewAccordionCard = ({ q, num }: { q: any; num: number }) => {
  const [open, setOpen] = useState(false);
  const lc = q.level === 'Beginner' ? 'emerald' : q.level === 'Intermediate' ? 'blue' : 'purple';
  return (
    <div className="bg-white border border-slate-100 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <button onClick={() => setOpen(!open)} className="w-full flex items-start gap-3 p-4 sm:p-5 text-left hover:bg-slate-50 transition-colors">
        <div className="flex-1 min-w-0">
          <span className={`inline-block px-2 py-0.5 rounded text-[10px] font-bold uppercase bg-${lc}-500/10 text-${lc}-400 border border-${lc}-500/20 mb-2`}>{q.level}</span>
          <h4 className="font-semibold text-slate-900 text-sm sm:text-base leading-snug break-words">
            <span className="text-slate-400 mr-1">{num}.</span>{q.question}
          </h4>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" className={`w-4 h-4 sm:w-5 sm:h-5 text-slate-400 flex-shrink-0 mt-1 transition-transform duration-300 ${open ? 'rotate-180' : ''}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
      </button>
      <div className={`grid transition-all duration-300 ${open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
        <div className="overflow-hidden">
          <div className="px-4 sm:px-5 pb-4 pt-1">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 text-slate-600 text-sm leading-relaxed">
              {formatAnswer(q.answer)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
