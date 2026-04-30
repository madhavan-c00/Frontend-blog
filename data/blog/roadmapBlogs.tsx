import React from "react";
import { BlogContent } from "./types";
import { contentRegistry } from "../content";
import { technologies } from "../tech-data";

// Helper function to capitalize
const capitalize = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);

export const roadmapBlogs: Record<string, BlogContent> = {};

Object.keys(contentRegistry).forEach((techId) => {
  const content = contentRegistry[techId];
  if (!content || !content.roadmap || content.roadmap.length === 0) return;

  const techInfo = technologies.find((t) => t.id === techId);
  const techName = techInfo ? techInfo.name : capitalize(techId);

  const blogId = `roadmap-${techId}-2026`;

  roadmapBlogs[blogId] = {
    id: blogId,
    slug: `roadmap-${techId}-2026`,
    title: `Complete ${techName} Developer Roadmap For Freshers`,
    excerpt: `A step-by-step ${techName} learning path for freshers in 2026. Learn what topics to cover and what projects to build at each stage of your journey.`,
    category: "Roadmaps",
    author: "TechHub Admin",
    date: "April 30, 2026",
    readTime: "8 min",
    techId: techId,
    color: "bg-blue-500", // Default, could be customized
    content: (
      <div className="prose prose-slate max-w-none prose-lg">
        {content.introText && content.introText.length > 0 && (
          <p className="text-xl text-slate-700 leading-relaxed font-medium mb-6">
            {content.introText[0]}
          </p>
        )}
        <p>
          Learning <strong>{techName}</strong> can be overwhelming if you don't know where to start.
          To help you land your first IT job in 2026, we have structured this comprehensive roadmap.
          It is divided into distinct phases, guiding you from absolute basics to advanced concepts.
        </p>

        <div className="relative border-l-2 border-dashed border-slate-200 ml-4 md:ml-6 pl-8 md:pl-12 py-4 my-12 space-y-16">
          {content.roadmap.map((phase, idx) => (
            <div key={idx} className="relative group">
              {/* Timeline Node */}
              <div className={`absolute -left-[41px] md:-left-[57px] top-1 w-6 h-6 md:w-8 md:h-8 rounded-full bg-white border-4 border-${phase.color || 'blue'}-500 shadow-[0_0_15px_rgba(59,130,246,0.3)] group-hover:scale-125 transition-transform duration-300 z-10 flex items-center justify-center`} />

              {/* Phase Card */}
              <div className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-6 border-b border-slate-50">
                  <h2 className="text-2xl md:text-3xl font-bold text-slate-900 m-0 flex items-center gap-3">
                    <span className={`px-4 py-1.5 bg-${phase.color || 'blue'}-50 text-${phase.color || 'blue'}-600 rounded-full text-sm font-bold tracking-wide uppercase`}>
                      Phase {phase.label || idx + 1}
                    </span>
                    {phase.phase}
                  </h2>
                  <div className="flex items-center gap-2 text-slate-500 font-medium bg-slate-50 px-4 py-2 rounded-xl text-sm">
                    <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    {phase.duration}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  {/* Topics List */}
                  <div>
                    <h3 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
                      <span className="w-8 h-8 rounded-lg bg-blue-50 text-blue-500 flex items-center justify-center">📚</span>
                      Topics to Master
                    </h3>
                    <ul className="space-y-3 m-0 p-0 list-none">
                      {phase.topics.map((topic, i) => (
                        <li key={i} className="flex items-start gap-3 text-slate-600 text-base leading-relaxed">
                          <span className="text-blue-500 mt-0.5 shrink-0">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                          </span>
                          <span>{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Projects List */}
                  {phase.buildProjects && phase.buildProjects.length > 0 && (
                    <div>
                      <h3 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
                        <span className="w-8 h-8 rounded-lg bg-orange-50 text-orange-500 flex items-center justify-center">🚀</span>
                        Projects to Build
                      </h3>
                      <ul className="space-y-3 m-0 p-0 list-none">
                        {phase.buildProjects.map((project, i) => (
                          <li key={i} className="flex items-start gap-3 text-slate-700 bg-slate-50 p-4 rounded-2xl hover:bg-white hover:shadow-md transition-all border border-slate-100/50 cursor-default">
                            <span className="text-orange-500 shrink-0 mt-0.5">
                              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>
                            </span>
                            <span className="text-sm font-medium leading-relaxed">{project}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-slate-50 border border-slate-100 p-8 rounded-3xl my-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">
            Next Steps After the Roadmap
          </h2>
          <p className="text-slate-700">
            Once you've built the projects mentioned in the advanced phase, you'll have a strong portfolio. Make sure to:
          </p>
          <ul className="space-y-3 mt-4">
            <li className="flex items-center gap-3 text-slate-700">
              <span className="w-2 h-2 rounded-full bg-blue-500" />
              Push all your code to GitHub with good README files.
            </li>
            <li className="flex items-center gap-3 text-slate-700">
              <span className="w-2 h-2 rounded-full bg-blue-500" />
              Host your projects live using platforms like Vercel or Netlify.
            </li>
            <li className="flex items-center gap-3 text-slate-700">
              <span className="w-2 h-2 rounded-full bg-blue-500" />
              Prepare for technical interviews by solving domain-specific questions.
            </li>
          </ul>
        </div>

        <h2 className="text-3xl font-bold text-slate-900 mt-12 mb-6">
          Frequently Asked Questions (FAQ)
        </h2>
        <div className="space-y-8">
          <div>
            <p className="font-bold text-slate-900 text-lg mb-2">
              Q: How strictly should I follow this {techName} roadmap?
            </p>
            <p className="text-slate-600">
              A: Think of this roadmap as a guided path, not a strict rulebook. It is perfectly fine to spend more time on challenging topics or skip ahead if you already understand a concept.
            </p>
          </div>
          <div>
            <p className="font-bold text-slate-900 text-lg mb-2">
              Q: Do I need to build all the recommended projects?
            </p>
            <p className="text-slate-600">
              A: We highly recommend building at least one or two projects per phase. Reading theory is great, but building projects is how you actually learn {techName} and prepare for job interviews.
            </p>
          </div>
          <div>
            <p className="font-bold text-slate-900 text-lg mb-2">
              Q: How long will this roadmap actually take me?
            </p>
            <p className="text-slate-600">
              A: The estimated durations are suggestions based on learning {techName} for a few hours each day. Depending on your prior coding experience, it could take you half the time or slightly longer. Stay consistent!
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 mt-16 pt-8 border-t border-slate-100">
          <a
            href="/jobs"
            className="px-6 py-3 bg-primary text-white rounded-xl font-bold text-center hover:bg-primary/90 transition-all"
          >
            Search for {techName} jobs →
          </a>
          <a
            href={`/learn/${techId}`}
            className="px-6 py-3 border border-slate-200 text-slate-700 rounded-xl font-bold text-center hover:bg-slate-50 transition-all"
          >
            Read full {techName} guide →
          </a>
        </div>
      </div>
    ),
  };
});
