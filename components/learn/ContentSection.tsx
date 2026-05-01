import React from 'react';
import { SectionHeader } from '@/components/learn/SectionHeader';
import { CodeBlock } from '@/components/learn/CodeBlock';

export const ContentSection = ({ tech, content, showFullContent }: { tech: any, content: any, showFullContent: boolean }) => {
  return (
    <div className={showFullContent ? "space-y-24 md:space-y-40" : ""}>
      {/* OVERVIEW (Always shown) */}
      <div id="overview" className="scroll-mt-40 space-y-16">
        <SectionHeader title={`What is ${tech.name}?`} />
        <div className="space-y-6">
          {content
            ? content.introText.map((p: string, i: number) => (
              <p key={i} className="text-lg sm:text-xl text-slate-600 leading-relaxed font-medium break-words">{p}</p>
            ))
            : <p className="text-slate-400 italic">Content pending...</p>}
        </div>

        {content && (
          <div className="p-8 sm:p-12 rounded-[2.5rem] bg-slate-50 border border-slate-100 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 blur-3xl rounded-full -mr-32 -mt-32" />
            <p className="text-[11px] font-black uppercase tracking-[0.2em] text-primary mb-8 flex items-center gap-3">
               <span className="w-8 h-[1.5px] bg-primary/30" />
               Real-World Usage
            </p>
            <div className="grid grid-cols-2 gap-3 sm:gap-6">
              {content.realWorldUsages.map((u: string, i: number) => (
                <div key={i} className="flex items-start gap-2 sm:gap-4 p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-white border border-slate-100 shadow-sm transition-transform hover:-translate-y-1">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-bold text-[10px] sm:text-xs">0{i+1}</span>
                  </div>
                  <span className="text-slate-700 text-[11px] sm:text-base font-medium break-words leading-snug">{u}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* WHY LEARN */}
        <div className="space-y-10 pt-8">
          <SectionHeader title={`Why Learn ${tech.name}?`} />
          <p className="text-lg sm:text-xl text-slate-600 leading-relaxed font-medium break-words">{content?.whyLearn?.demand}</p>
          <div className="grid grid-cols-2 gap-3 sm:gap-6">
            <div className="p-4 sm:p-10 rounded-[1.5rem] sm:rounded-[2.5rem] bg-white border border-slate-100 shadow-premium hover:shadow-xl transition-all group">
              <p className="text-[8px] sm:text-[10px] font-semibold uppercase tracking-[0.2em] text-emerald-500 mb-2 sm:mb-4">Average Salary</p>
              <p className="text-sm sm:text-3xl font-semibold text-slate-900 mb-1 sm:mb-2 break-words tracking-tight group-hover:text-primary transition-colors">{content?.whyLearn?.salaryRange}</p>
              <p className="text-[9px] sm:text-sm text-slate-400 font-medium">Industry Standard</p>
            </div>
            <div className="p-4 sm:p-10 rounded-[1.5rem] sm:rounded-[2.5rem] bg-slate-900 text-white shadow-2xl relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <p className="relative z-10 text-[7px] sm:text-[9px] font-semibold uppercase tracking-[0.2em] text-primary mb-3 sm:mb-6">Job Roles</p>
              <div className="relative z-10 flex flex-wrap gap-1 sm:gap-2">
                {content?.whyLearn?.jobRoles?.map((r: any) => (
                  <span key={r.role} className="px-1.5 sm:px-4 py-1 sm:py-2 rounded-lg sm:rounded-xl bg-white/10 border border-white/10 text-white text-[8px] sm:text-xs font-bold shadow-sm backdrop-blur-md hover:bg-white/20 transition-colors line-clamp-1 sm:line-clamp-none">
                    {r.role}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {showFullContent && (
        <div className="space-y-24 md:space-y-40">
          {/* HOW IT WORKS */}
          <div id="how-it-works" className="scroll-mt-40 space-y-12">
            <SectionHeader title={`How ${tech.name} Works`} />
            {content && (
              <div className="space-y-12">
                <p className="text-lg sm:text-xl text-slate-600 leading-relaxed font-medium break-words">{content.howItWorks?.intro}</p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-8">
                  {content.howItWorks?.vdomSteps?.map((s: any) => (
                    <div key={s.num} className="relative p-4 sm:p-8 rounded-[1.5rem] sm:rounded-[2rem] bg-white border border-slate-100 shadow-premium hover:shadow-xl transition-all group overflow-hidden">
                      <div className="absolute top-0 right-0 w-24 h-24 bg-slate-50 -mr-12 -mt-12 rounded-full transition-transform group-hover:scale-150 group-hover:bg-primary/5" />
                      <span className="relative z-10 w-8 h-8 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-slate-900 text-white text-base sm:text-lg font-black flex items-center justify-center mb-4 sm:mb-6 shadow-lg">{s.num}</span>
                      <h4 className="relative z-10 font-black text-slate-900 text-sm sm:text-xl mb-2 tracking-tight line-clamp-1">{s.title}</h4>
                      <p className="relative z-10 text-slate-500 text-[11px] sm:text-[15px] leading-relaxed break-words font-medium line-clamp-2 sm:line-clamp-none">{s.text}</p>
                    </div>
                  ))}
                </div>
                {content.howItWorks?.componentCode && (
                  <div className="pt-8">
                    <CodeBlock code={content.howItWorks.componentCode} label={`${tech.name} Implementation Example`} language="javascript" />
                  </div>
                )}
              </div>
            )}
          </div>

          {/* CONCEPTS */}
          <div id="concepts" className="scroll-mt-40 space-y-16">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 border-b border-slate-100 pb-8">
               <SectionHeader title="Core Concepts Explained" />
               <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">{content?.coreConcepts.length} Topics</p>
            </div>
            {content ? (
              <div className="space-y-24">
                {content.coreConcepts.map((c: any) => (
                  <div key={c.id} id={`concept-${c.id}`} className="space-y-8 scroll-mt-48 group">
                    <div className="flex items-center gap-6">
                      <div className="w-16 h-16 rounded-2xl bg-white border border-slate-100 shadow-premium flex items-center justify-center flex-shrink-0 transition-transform group-hover:rotate-6 group-hover:scale-110">
                        {c.icon?.startsWith('http')
                          ? <img src={c.icon} alt={c.title} className="w-10 h-10 object-contain" />
                          : <span className="text-4xl">{c.icon}</span>}
                      </div>
                      <div className="min-w-0">
                        <span className="text-primary font-black text-xs uppercase tracking-widest">{c.number}</span>
                        <h3 className="text-2xl sm:text-4xl font-black text-slate-900 mt-1 leading-tight break-words tracking-tight group-hover:text-primary transition-colors">{c.title}</h3>
                      </div>
                    </div>
                    <p className="text-lg sm:text-xl text-slate-600 leading-relaxed font-medium break-words">{c.intro}</p>
                    {c.code && (
                      <div className="shadow-2xl rounded-3xl overflow-hidden border border-slate-100">
                         <CodeBlock code={c.code} language="javascript" />
                      </div>
                    )}
                    {c.usage && (
                      <div className="p-8 rounded-[2rem] bg-emerald-50/30 border border-emerald-100/50">
                        <p className="text-[10px] font-black uppercase tracking-[0.2em] text-emerald-600 mb-4">Expert Tip / Usage</p>
                        <p className="text-slate-700 text-base sm:text-lg font-medium break-words leading-relaxed">{c.usage}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            ) : <p className="text-slate-400 italic">Core concepts coming soon.</p>}
          </div>

          {/* PROJECTS */}
          <div id="projects" className="scroll-mt-40 space-y-16">
            <SectionHeader title="Build to Learn: Projects" />
            <div className="space-y-16">
              {(['beginner', 'intermediate', 'advanced'] as const).map((level) => {
                const items = content?.projects?.[level];
                if (!items) return null;
                const colors = {
                  beginner: { bg: 'bg-emerald-500', text: 'text-emerald-500', border: 'border-emerald-100', glow: 'shadow-emerald-500/20' },
                  intermediate: { bg: 'bg-blue-500', text: 'text-blue-500', border: 'border-blue-100', glow: 'shadow-blue-500/20' },
                  advanced: { bg: 'bg-purple-500', text: 'text-purple-500', border: 'border-purple-100', glow: 'shadow-purple-500/20' }
                };
                const theme = colors[level];
                
                return (
                  <div key={level} className="space-y-8">
                    <div className="flex items-center gap-4">
                      <div className={`h-[1px] flex-1 ${theme.bg} opacity-20`} />
                      <h3 className={`text-xs font-black uppercase tracking-[0.3em] ${theme.text}`}>
                        {level} Level
                      </h3>
                      <div className={`h-[1px] flex-1 ${theme.bg} opacity-20`} />
                    </div>
                    <div className="grid grid-cols-2 gap-3 sm:gap-8">
                      {items.map((p: any) => (
                        <div key={p.name} className="p-4 sm:p-10 bg-white border border-slate-100 rounded-[1.5rem] sm:rounded-[2.5rem] hover:border-primary/20 hover:shadow-premium transition-all flex flex-col group">
                          <div className="flex items-start justify-between gap-4 mb-4 sm:mb-6">
                            <h4 className="text-sm sm:text-2xl font-black text-slate-900 leading-tight break-words min-w-0 group-hover:text-primary transition-colors line-clamp-1">{p.name}</h4>
                            <div className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full ${theme.bg} ${theme.glow} shadow-[0_0_15px] flex-shrink-0 mt-1 sm:mt-2`} />
                          </div>
                          <p className="text-slate-500 text-[10px] sm:text-[15px] leading-relaxed font-medium flex-1 mb-4 sm:mb-8 break-words line-clamp-2 sm:line-clamp-none">{p.desc}</p>
                          <div className="pt-4 sm:pt-6 border-t border-slate-100">
                            <p className="text-[8px] sm:text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-2 sm:mb-4">Tech Stack</p>
                            <div className="flex flex-wrap gap-1.5 sm:gap-2">
                              {p.teaches.split(', ').map((t: string) => (
                                <span key={t} className="px-2 py-1 bg-slate-50 border border-slate-100 rounded-lg sm:rounded-xl text-[9px] sm:text-[11px] font-bold text-slate-600">#{t}</span>
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
