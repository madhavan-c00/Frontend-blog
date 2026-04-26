import React from 'react';
import { Container } from '@/components/ui/Container';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { technologies, interviewQuestions } from '@/data/tech-data';
import { blogRegistry } from '@/data/blog';
import { notFound } from 'next/navigation';
import Link from 'next/link';

export function generateStaticParams() {
  return technologies.map((tech) => ({
    slug: tech.id,
  }));
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function TechPage({ params }: PageProps) {
  const { slug } = await params;
  const tech = technologies.find((t) => t.id === slug);

  if (!tech) {
    notFound();
  }

  const techBlogs = Object.values(blogRegistry).filter((b) => b.techId === tech.id);
  const techQuestions = interviewQuestions.filter((q) => q.techId === tech.id);

  return (
    <main className="min-h-screen bg-background text-slate-900">
      <Navbar />

      {/* Header Section */}
      <section className="pt-40 pb-20 relative border-b border-slate-100 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 blur-[120px] -z-10" />
        <Container>
          <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
            <div className="w-32 h-32 md:w-40 md:h-40 glass-card p-6 aspect-square flex items-center justify-center">
              {tech.icon.startsWith('http') ? (
                <img src={tech.icon} alt={tech.name} className="w-full h-full object-contain" />
              ) : (
                <span className="text-7xl md:text-8xl">{tech.icon}</span>
              )}
            </div>
            <div>
              <div className="inline-block px-4 py-1 rounded-full bg-primary/20 text-primary text-sm font-bold uppercase tracking-widest mb-4">
                {tech.category}
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 font-display text-slate-900">
                {tech.name} <span className="text-slate-400">Resources</span>
              </h1>
              <p className="text-xl text-slate-600 max-w-3xl">
                {tech.description}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="glass-card p-6 text-center">
              <span className="block text-3xl font-bold text-gradient mb-1">{tech.stats.blogs}</span>
              <span className="text-xs text-slate-500 uppercase tracking-widest font-semibold">Articles</span>
            </div>
            <div className="glass-card p-6 text-center">
              <span className="block text-3xl font-bold text-gradient mb-1">{tech.stats.questions}</span>
              <span className="text-xs text-slate-500 uppercase tracking-widest font-semibold">Interview QA</span>
            </div>
            <div className="glass-card p-6 text-center">
              <span className="block text-3xl font-bold text-gradient mb-1">{tech.stats.challenges}</span>
              <span className="text-xs text-slate-500 uppercase tracking-widest font-semibold">Challenges</span>
            </div>
            <div className="glass-card p-6 text-center">
              <span className="block text-3xl font-bold text-gradient mb-1">1.2M+</span>
              <span className="text-xs text-slate-500 uppercase tracking-widest font-semibold">Learners</span>
            </div>
          </div>
        </Container>
      </section>

      {/* Content Tabs / Sections */}
      <section className="py-20">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

            {/* Left Column: Blogs */}
            <div className="lg:col-span-2 space-y-12">
              <div>
                <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-0.5-5.32V19.5z" /><path d="M6.5 18H20" /></svg>
                  Latest {tech.name} Blogs
                </h2>
                {techBlogs.length > 0 ? (
                  <div className="space-y-6">
                    {techBlogs.map(blog => (
                      <Link key={blog.id} href={`/blog/${blog.id}`} className="block group">
                        <div className="glass-card p-8 hover:border-primary/50 transition-all">
                          <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors text-slate-900">{blog.title}</h3>
                          <p className="text-slate-600 mb-6">{blog.excerpt}</p>
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-slate-400">{blog.author} • {blog.date}</span>
                            <span className="text-primary font-bold flex items-center gap-1">Read More <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg></span>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                ) : (
                  <div className="glass-card p-12 text-center text-slate-400">
                    No blogs found for this technology yet. Stay tuned!
                  </div>
                )}
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="5"/><path d="M20 21a8 8 0 1 0-16 0"/></svg>
                  Interactive Skills Quiz
                </h2>
                <div className="glass-card p-12 text-center bg-slate-50/50">
                  <p className="text-slate-600 mb-8 max-w-lg mx-auto">
                    Test your {tech.name} proficiency with our AI-curated quizzes designed to benchmark your knowledge against industry standards.
                  </p>
                  <Link 
                    href={`/quiz?tech=${tech.id}`}
                    className="px-8 py-4 bg-primary text-white rounded-full font-bold hover:bg-primary/90 transition-all shadow-glow inline-block"
                  >
                    Take Proficiency Quiz
                  </Link>
                </div>
              </div>
            </div>

            {/* Right Column: Q&A */}
            <div className="space-y-12">
              <div className="glass-card p-8 sticky top-32">
                <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
                  Interview Q&A
                </h2>
                <div className="space-y-6">
                  {techQuestions.length > 0 ? (
                    techQuestions.map(q => (
                      <div key={q.id} className="border-b border-slate-100 pb-6 last:border-0 last:pb-0">
                        <h4 className="font-bold text-slate-900 mb-3 leading-relaxed">Q: {q.question}</h4>
                        <p className="text-sm text-slate-500 line-clamp-3 mb-3">{q.answer}</p>
                        <span className="text-[10px] px-2 py-1 rounded bg-primary/20 text-primary font-bold uppercase tracking-tighter">
                          {q.level}
                        </span>
                      </div>
                    ))
                  ) : (
                    <p className="text-slate-400">More questions coming soon.</p>
                  )}
                </div>
                <button className="w-full mt-8 py-3 rounded-xl bg-primary text-white font-bold hover:bg-primary/90 transition-all shadow-glow">
                  View All Questions
                </button>
              </div>
            </div>

          </div>
        </Container>
      </section>

      <Footer />
    </main>
  );
}
