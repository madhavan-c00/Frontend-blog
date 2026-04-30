import React from 'react';
import { Container } from '@/components/ui/Container';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { technologies } from '@/data/tech-data';
import { notFound } from 'next/navigation';

import { blogRegistry } from '@/data/blog';

export function generateStaticParams() {
  return Object.keys(blogRegistry).map((id) => ({
    id,
  }));
}

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function BlogDetailPage({ params }: PageProps) {
  const { id } = await params;
  const post = blogRegistry[id];

  if (!post) {
    notFound();
  }

  const tech = technologies.find((t) => t.id === post.techId);

  return (
    <main className="min-h-screen bg-background text-slate-900">
      <Navbar />
      
      <section className="pt-40 pb-24 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-primary/5 blur-[120px] -z-10" />
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="mb-12">
              <div className="flex items-center gap-4 mb-6">
                {tech?.icon && (
                  tech.icon.startsWith('http') || tech.icon.startsWith('/') ? (
                    <img src={tech.icon} alt={tech.name} className="w-10 h-10 object-contain" />
                  ) : (
                    <span className="text-4xl">{tech.icon}</span>
                  )
                )}
                <span className="px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-bold uppercase tracking-widest">
                  {tech?.name}
                </span>
                <span className="text-slate-400">•</span>
                <span className="text-slate-400 text-sm">{post.date}</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-8 leading-tight font-display text-slate-900">
                {post.title}
              </h1>
              <div className="flex items-center gap-4 py-8 border-y border-slate-100">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center font-bold text-primary">
                  {post.author.charAt(0)}
                </div>
                <div>
                  <div className="font-bold text-slate-900">{post.author}</div>
                  <div className="text-sm text-slate-500">{post.readTime} Read</div>
                </div>
              </div>
            </div>

            <div className="mt-12">
              {post.content}
            </div>
          </div>
        </Container>
      </section>

      <Footer />
    </main>
  );
}
