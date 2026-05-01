import React from 'react';
import { SectionHeader } from '@/components/learn/SectionHeader';
import { CodeBlock } from '@/components/learn/CodeBlock';

export const ContentSection = ({ tech, content, showFullContent }: { tech: any, content: any, showFullContent: boolean }) => {
  return (
    <div className={showFullContent ? "space-y-20 md:space-y-32" : ""}>
      {/* OVERVIEW (Always shown) */}
      <div id="overview" className="scroll-mt-40 space-y-12">
        <SectionHeader title={`What is ${tech.name}?`} />
        <div className="space-y-5">
          {content
            ? content.introText.map((p: string, i: number) => (
              <p key={i} className="text-base sm:text-lg text-slate-700 leading-relaxed font-light break-words">{p}</p>
            ))
            : <p className="text-slate-400 italic">Content pending...</p>}
        </div>

        {content && (
          <div className="p-5 sm:p-8 rounded-2xl bg-slate-50 border border-slate-100">
            <p className="text-xs font-bold uppercase tracking-widest text-primary mb-4">Real-World Usage</p>
            <ul className="space-y-3">
              {content.realWorldUsages.map((u: string, i: number) => (
                <li key={i} className="flex items-start gap-3 text-slate-700 text-sm sm:text-base">
                  <span className="text-primary mt-1 flex-shrink-0">✦</span>
                  <span className="break-words min-w-0">{u}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* WHY LEARN */}
        <div className="space-y-6 pt-4">
          <SectionHeader title={`Why Learn ${tech.name}?`} />
          <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-light break-words">{content?.whyLearn?.demand}</p>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="p-5 sm:p-7 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-md transition-shadow">
              <p className="text-[10px] font-bold uppercase tracking-widest text-emerald-600 mb-2">Average Salary</p>
              <p className="text-2xl sm:text-3xl font-bold text-slate-900 mb-1 break-words">{content?.whyLearn?.salaryRange}</p>
              <p className="text-xs text-slate-500">For Freshers & Junior Devs</p>
            </div>
            <div className="p-5 sm:p-7 rounded-2xl bg-primary/5 border border-primary/10 hover:shadow-md transition-shadow">
              <p className="text-xs font-bold uppercase tracking-widest text-primary mb-3">Job Roles</p>
              <div className="flex flex-wrap gap-2">
                {content?.whyLearn?.jobRoles?.map((r: any) => (
                  <span key={r.role} className="px-2.5 py-1 rounded-lg bg-white border border-primary/20 text-slate-700 text-xs font-semibold shadow-sm">
                    {r.role}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {showFullContent && (
        <div className="space-y-20 md:space-y-32 mt-20 md:mt-32">
          {/* HOW IT WORKS */}
          <div id="how-it-works" className="scroll-mt-40 space-y-8">
            <SectionHeader title={`How ${tech.name} Works`} />
            {content && (
              <div className="space-y-8">
                <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-light break-words">{content.howItWorks?.intro}</p>
                <div className="relative pl-8 md:pl-0">
                  <div className="absolute left-[15px] top-0 bottom-0 w-px bg-slate-200 md:hidden" />
                  <div className="grid md:grid-cols-3 gap-6">
                    {content.howItWorks?.vdomSteps?.map((s: any) => (
                      <div key={s.num} className="relative md:p-6 md:rounded-2xl md:bg-slate-50 md:border md:border-slate-100">
                        <span className="absolute -left-8 md:static w-8 h-8 rounded-full bg-slate-100 md:bg-primary/20 text-primary text-xs font-bold flex items-center justify-center mb-3">{s.num}</span>
                        <h4 className="font-bold text-slate-900 text-base sm:text-lg mb-2">{s.title}</h4>
                        <p className="text-slate-500 text-sm leading-relaxed break-words">{s.text}</p>
                      </div>
                    ))}
                  </div>
                </div>
                {content.howItWorks?.componentCode && (
                  <CodeBlock code={content.howItWorks.componentCode} label={`${tech.name} Example`} language="javascript" />
                )}
              </div>
            )}
          </div>

          {/* CONCEPTS */}
          <div id="concepts" className="scroll-mt-40 space-y-12">
            <SectionHeader title="Core Concepts — Deeply Explained" />
            {content ? (
              <div className="space-y-16">
                {content.coreConcepts.map((c: any) => (
                  <div key={c.id} id={`concept-${c.id}`} className="space-y-5 scroll-mt-40">
                    <div className="flex items-start gap-3 border-b border-slate-100 pb-4">
                      <div className="w-10 h-10 flex items-center justify-center flex-shrink-0 mt-1">
                        {c.icon?.startsWith('http')
                          ? <img src={c.icon} alt={c.title} className="w-full h-full object-contain" />
                          : <span className="text-3xl">{c.icon}</span>}
                      </div>
                      <div className="min-w-0 flex-1">
                        <span className="text-primary font-mono text-xs font-bold">{c.number}</span>
                        <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mt-1 leading-tight break-words">{c.title}</h3>
                      </div>
                    </div>
                    <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-light break-words">{c.intro}</p>
                    {c.code && <CodeBlock code={c.code} language="javascript" />}
                    {c.usage && (
                      <div className="p-5 rounded-2xl bg-slate-50 border border-slate-100">
                        <p className="text-[10px] font-bold uppercase tracking-widest text-emerald-600 mb-2">Real-World Usage</p>
                        <p className="text-slate-600 text-sm sm:text-base break-words">{c.usage}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            ) : <p className="text-slate-400 italic">Core concepts coming soon.</p>}
          </div>

          {/* PROJECTS */}
          <div id="projects" className="scroll-mt-40 space-y-12">
            <SectionHeader title="Projects to Build" />
            <div className="space-y-10">
              {(['beginner', 'intermediate', 'advanced'] as const).map((level) => {
                const items = content?.projects?.[level];
                if (!items) return null;
                const bColor = level === 'beginner' ? 'emerald' : level === 'intermediate' ? 'blue' : 'purple';
                return (
                  <div key={level} className="space-y-4">
                    <div className="border-b border-slate-100 pb-2">
                      <h3 className="text-base sm:text-lg font-bold text-slate-900 capitalize flex items-center gap-3">
                        <span className={`w-3 h-3 rounded-full bg-${bColor}-500 flex-shrink-0`} />
                        {level} Projects
                      </h3>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-4">
                      {items.map((p: any) => (
                        <div key={p.name} className="p-5 sm:p-6 bg-white border border-slate-100 rounded-2xl hover:border-primary/20 hover:shadow-md transition-all flex flex-col">
                          <div className="flex items-start gap-2 mb-3">
                            <h4 className="flex-1 text-base sm:text-lg font-bold text-slate-900 leading-snug break-words min-w-0">{p.name}</h4>
                            <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold uppercase bg-${bColor}-500/10 text-${bColor}-400 flex-shrink-0`}>{level}</span>
                          </div>
                          <p className="text-slate-600 text-sm leading-relaxed flex-1 mb-4 break-words">{p.desc}</p>
                          <div className="pt-3 border-t border-slate-100">
                            <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-2">Tech Stack</p>
                            <div className="flex flex-wrap gap-1.5">
                              {p.teaches.split(', ').map((t: string) => (
                                <span key={t} className="px-2 py-1 bg-slate-50 border border-slate-200 rounded text-xs font-medium text-slate-600">{t}</span>
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
        </div>
      )}
    </div>
  );
};
