import React, { Suspense } from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { technologies } from '@/data/tech-data';
import quizCollection from '@/data/quiz/quiz.json';
import QuizClientView from '@/components/quiz/QuizClientView';

// Map the JSON structure
const allQuizzes = quizCollection.quiz_collection.technologies;

export default async function QuizPage({ searchParams }: { searchParams: Promise<{ tech?: string }> }) {
  const { tech: techId } = await searchParams;

  const activeTech = technologies.find(t => t.id === techId) || technologies[0];
  const questions = allQuizzes.find(q => q.id === activeTech.id)?.questions || [];
  const allAvailableTechs = technologies.filter(t => allQuizzes.some(q => q.id === t.id));

  return (
    <main className="min-h-screen bg-background text-slate-900">
      <Navbar />
      <section className="pt-40 pb-20 relative min-h-[80vh]">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-96 bg-primary/5 blur-[120px] -z-10" />
        <QuizClientView 
          activeTech={activeTech}
          questions={questions as any}
          allAvailableTechs={allAvailableTechs}
        />
      </section>
      <Footer />
    </main>
  );
}
