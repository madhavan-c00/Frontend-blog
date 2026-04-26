import React from 'react';
import { Container } from '@/components/ui/Container';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { technologies } from '@/data/tech-data';
import { contentRegistry } from '@/data/content';

export default function ChallengesPage() {
  const categories = ["Algorithms", "UI Components", "System Design", "Backend Logic"];
  const availableTechs = technologies.filter(t => 
    Object.keys(contentRegistry).includes(t.id)
  );


  return (
    <main className="min-h-screen bg-background text-slate-900">
      <Navbar />
      
      <section className="pt-40 pb-20">
        <Container>
          <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
            <div className="max-w-3xl">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 font-display text-slate-900">
                Coding <span className="text-gradient">Challenges</span> 💻
              </h1>
              <p className="text-xl text-slate-600">
                Sharpen your skills with real-world coding tasks. From building pixel-perfect UI components to optimizing backend performance.
              </p>
            </div>
            <div className="flex gap-2">
              <div className="glass-card px-4 py-2 text-sm font-bold text-primary">12 New Today</div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar Filters */}
            <div className="lg:col-span-1 space-y-8">
              <div>
                <h4 className="text-slate-900 font-bold mb-4 uppercase tracking-widest text-xs">Categories</h4>
                <div className="space-y-2">
                  {categories.map(cat => (
                    <label key={cat} className="flex items-center gap-3 text-slate-500 hover:text-slate-900 cursor-pointer transition-colors p-2 rounded-lg hover:bg-slate-50">
                      <input type="checkbox" className="accent-primary" />
                      <span>{cat}</span>
                    </label>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="text-slate-900 font-bold mb-4 uppercase tracking-widest text-xs">Technologies</h4>
                <div className="flex flex-wrap gap-2">
                  {availableTechs.map(tech => (
                    <button key={tech.id} className="px-3 py-1 rounded-lg border border-slate-200 bg-white text-slate-600 text-xs font-medium hover:border-primary/50 hover:text-primary transition-colors">
                      {tech.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* main Challenges List */}
            <div className="lg:col-span-3 space-y-4">
              {[
                { title: "Implement a Custom React Hook for Debouncing", tech: "React", difficulty: "Intermediate", category: "Algorithms" },
                { title: "Build a Scalable Notification System with Redis", tech: "Node.js", difficulty: "Advanced", category: "Backend Logic" },
                { title: "Optimize Image Loading for Performance", tech: "Next.js", difficulty: "Beginner", category: "UI Components" },
                { title: "Secure a Python REST API with JWT", tech: "Python", difficulty: "Intermediate", category: "Backend Logic" },
                { title: "Create a Responsive Layout with CSS Grid", tech: "CSS", difficulty: "Beginner", category: "UI Components" }
              ].map((item, i) => (
                <div key={i} className="glass-card p-6 flex flex-col md:flex-row md:items-center justify-between gap-6 hover:translate-x-1 transition-transform">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-xs font-bold text-primary uppercase tracking-tighter">{item.tech}</span>
                      <span className="text-zinc-700 text-xs">•</span>
                      <span className="text-xs font-medium text-zinc-500">{item.category}</span>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-primary transition-colors">{item.title}</h3>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className={`px-3 py-1 rounded text-[10px] font-bold uppercase tracking-widest ${
                      item.difficulty === 'Beginner' ? 'bg-emerald-500/10 text-emerald-500' :
                      item.difficulty === 'Intermediate' ? 'bg-amber-500/10 text-amber-500' :
                      'bg-rose-500/10 text-rose-500'
                    }`}>
                      {item.difficulty}
                    </span>
                    <button className="px-6 py-2 rounded-xl bg-slate-100 text-slate-700 font-bold text-sm hover:bg-slate-200 border border-slate-200 transition-colors">
                      Attempt
                    </button>
                  </div>
                </div>
              ))}
              
              <div className="pt-8 flex justify-center">
                <button className="text-slate-400 hover:text-slate-900 font-bold flex items-center gap-2">
                  Load More Challenges
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M7 13l5 5 5-5M7 6l5 5 5-5"/></svg>
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
