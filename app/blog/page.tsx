import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { BlogCard, Post } from "@/components/blog/BlogCard";

import { blogRegistry } from "@/data/blog";

// We convert the blogRegistry values to the Post format expected by BlogCard
const ARTICLES = Object.values(blogRegistry).map(blog => ({
  id: blog.id,
  title: blog.title,
  excerpt: blog.excerpt,
  category: blog.category,
  author: blog.author,
  date: blog.date,
  slug: blog.slug,
  color: blog.color
}));

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <Navbar />
      
      <div className="pt-32 pb-16 bg-white border-b border-slate-100">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">Career Guides & Tips 📚</h1>
            <p className="text-xl text-slate-500 leading-relaxed mb-10">
              Expert advice to help you land your first job, prepare for interviews, 
              and build a long-lasting career in tech.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              {['All', 'Interview Questions', 'Resume Tips', 'Career Guides', 'Roadmaps'].map((cat) => (
                <button 
                  key={cat} 
                  className={`px-5 py-2 rounded-full font-bold text-sm transition-all ${
                    cat === 'All' ? 'bg-primary text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </Container>
      </div>

      <Section>
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ARTICLES.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
          
          <div className="mt-20 text-center">
             <button className="bg-white border-2 border-slate-200 text-slate-900 px-8 py-4 rounded-2xl font-bold hover:bg-slate-50 transition-colors shadow-sm">
                Load More Articles
             </button>
          </div>
        </Container>
      </Section>

      <Footer />
    </main>
  );
}
