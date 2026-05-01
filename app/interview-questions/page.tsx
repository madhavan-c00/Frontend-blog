import React from 'react';
import { Container } from '@/components/ui/Container';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { interviewQuestions, technologies } from '@/data/tech-data';
import { contentRegistry } from '@/data/content/index';
import InterviewQuestionsView from '@/components/jobs/InterviewQuestionsView';

function getQuestionsForTech(techId: string) {
  const content = contentRegistry[techId];
  if (content?.interviewQuestions) {
    const qs = [
      ...(content.interviewQuestions.beginner?.map((q, i) => ({
        id: `${techId}-b-${i}`, techId, question: q.q, answer: q.a, level: 'Beginner'
      })) ?? []),
      ...(content.interviewQuestions.intermediate?.map((q, i) => ({
        id: `${techId}-int-${i}`, techId, question: q.q, answer: q.a, level: 'Intermediate'
      })) ?? []),
      ...(content.interviewQuestions.advanced?.map((q, i) => ({
        id: `${techId}-adv-${i}`, techId, question: q.q, answer: q.a, level: 'Advanced'
      })) ?? []),
    ];
    if (qs.length > 0) return qs;
  }
  return interviewQuestions.filter(q => q.techId === techId);
}

export default async function InterviewQuestionsPage({ searchParams }: { searchParams: Promise<{ tech?: string }> }) {
  const { tech: techQuery } = await searchParams;
  const activeTechId = techQuery ?? technologies[0].id;
  
  const initialQuestions = getQuestionsForTech(activeTechId);
  const techsWithQuestions = technologies.filter(t => getQuestionsForTech(t.id).length > 0);

  return (
    <main className="min-h-screen bg-background text-slate-900">
      <Navbar />
      <section className="pt-40 pb-20 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-96 bg-primary/5 blur-[120px] -z-10" />
        <InterviewQuestionsView 
          initialTech={activeTechId}
          initialQuestions={initialQuestions}
          techsWithQuestions={techsWithQuestions}
        />
      </section>
      <Footer />
    </main>
  );
}
