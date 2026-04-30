import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/home/Hero";
import { TechGrid } from "@/components/home/TechGrid";
import { LatestBlogs } from "@/components/home/LatestBlogs";
import { FeaturedJobs } from "@/components/home/FeaturedJobs";
import { Benefits } from "@/components/home/Benefits";
import { Container } from "@/components/ui/Container";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      
      {/* Primary Job Focus */}
      <FeaturedJobs />
      
      {/* Value Proposition */}
      <Benefits />

      {/* Skills for Jobs */}
      <TechGrid />
      
      <LatestBlogs />
      
      {/* Interview Prep CTA */}
      <section className="py-24 relative overflow-hidden bg-slate-50">
        <Container>
          <div className="glass-card p-12 md:p-20 text-center relative border-primary/20">
            <div className="absolute top-0 right-0 p-8 opacity-10 text-primary">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-32 h-32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-8 font-display">
              Ready to Ace Your <span className="text-gradient">Next Interview?</span>
            </h2>
            <p className="text-slate-600 text-xl max-w-2xl mx-auto mb-10">
              Access over 500+ curated interview questions designed by industry experts from FAANG companies.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="/interview-questions" className="px-10 py-4 bg-primary text-white rounded-full font-bold text-lg hover:bg-primary/90 transition-all shadow-glow">
                Get Started Free
              </a>
              <a href="/pricing" className="px-10 py-4 border border-slate-200 bg-white text-slate-700 rounded-full font-bold text-lg hover:bg-slate-50 transition-all shadow-sm">
                View Pro Plans
              </a>
            </div>
          </div>
        </Container>
      </section>

      <Footer />
    </main>
  );
}

