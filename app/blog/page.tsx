import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { BlogClientView } from "@/components/blog/BlogClientView";
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
  color: blog.color,
  image: blog.image || "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop"
}));

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* Premium Header */}
      <div className="relative pt-48 pb-32 overflow-hidden bg-slate-50">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-primary/5 rounded-full blur-[120px] animate-float opacity-60" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-secondary/5 rounded-full blur-[120px] animate-float opacity-60" style={{ animationDelay: '-3s' }} />
        </div>

        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white text-slate-900 text-[10px] font-black uppercase tracking-[0.2em] mb-10 shadow-xl border border-slate-100">
               <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
               Expert Career Intelligence
            </div>
            
            <h1 className="text-5xl md:text-8xl font-black text-slate-900 tracking-tight leading-[1.05] mb-10 font-display">
              Career Guides <br />
              <span className="text-gradient">& Strategies.</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-500 max-w-3xl mx-auto font-medium leading-relaxed mb-12">
              Deep dives into interview patterns, resume architecture, and technical growth strategies from industry leaders.
            </p>
          </div>
        </Container>
      </div>

      <Section className="bg-white">
        <Container>
          <BlogClientView articles={ARTICLES} />
        </Container>
      </Section>

      <Footer />
    </main>
  );
}
