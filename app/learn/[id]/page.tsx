import React from 'react';
import { notFound } from 'next/navigation';
import { technologies, interviewQuestions } from '@/data/tech-data';
import { contentRegistry } from '@/data/content/index';
import { blogRegistry } from '@/data/blog';
import LearnClientView from '@/components/learn/LearnClientView';

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return technologies
    .filter(t => Object.keys(contentRegistry).includes(t.id))
    .map((tech) => ({
      id: tech.id,
    }));
}

export default async function LearnDetailPage({ params }: PageProps) {
  const { id } = await params;
  
  const tech = technologies.find((t) => t.id === id);
  if (!tech) {
    notFound();
  }

  const content = contentRegistry[id];
  const techBlogs = Object.values(blogRegistry)
    .filter((b) => b.techId === id)
    .map(b => ({
      id: b.id,
      title: b.title,
      excerpt: b.excerpt,
      author: b.author,
      date: b.date,
      readTime: b.readTime
    }));

  const techQs = interviewQuestions.filter((q) => q.techId === id);

  const contentQs = content?.interviewQuestions ? [
    ...(content.interviewQuestions.beginner?.map((q, i) => ({ id: `b-${i}`, question: q.q, answer: q.a, level: 'Beginner' })) || []),
    ...(content.interviewQuestions.intermediate?.map((q, i) => ({ id: `int-${i}`, question: q.q, answer: q.a, level: 'Intermediate' })) || []),
    ...(content.interviewQuestions.advanced?.map((q, i) => ({ id: `adv-${i}`, question: q.q, answer: q.a, level: 'Advanced' })) || []),
  ] : [];

  const allQs = contentQs.length > 0 ? contentQs : techQs;
  const previewQs = allQs.slice(0, 3);

  return (
    <LearnClientView 
      tech={tech}
      content={content}
      techBlogs={techBlogs}
      allQs={allQs}
      previewQs={previewQs}
    />
  );
}