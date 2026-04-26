"use client";

import React, { useState, useMemo, useEffect, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { Container } from '@/components/ui/Container';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { technologies } from '@/data/tech-data';
import quizCollection from '@/data/quiz/quiz.json';
import Link from 'next/link';

// Map the JSON structure to what the component needs
const allQuizzes = quizCollection.quiz_collection.technologies;

interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  answer: string;
  explanation: string;
  difficulty: string;
}

function QuizContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const techId = searchParams.get('tech');

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  // Track answers and submission status per question
  const [answersState, setAnswersState] = useState<Record<number, { selected: string | null, submitted: boolean }>>({});

  const [score, setScore] = useState(0);
  const [quizStarted, setQuizStarted] = useState(false);
  const [quizFinished, setQuizFinished] = useState(false);

  // Derived state for current question
  const currentAnswerState = useMemo(() =>
    answersState[currentQuestionIndex] || { selected: null, submitted: false },
    [answersState, currentQuestionIndex]
  );


  const activeTech = useMemo(() =>
    technologies.find(t => t.id === techId) || technologies[0],
    [techId]
  );

  const questions = useMemo(() =>
    allQuizzes.find(q => q.id === activeTech.id)?.questions || [],
    [activeTech]
  );

  const currentQuestion = questions[currentQuestionIndex] as QuizQuestion;

  const handleStartQuiz = () => {
    setQuizStarted(true);
    setCurrentQuestionIndex(0);
    setScore(0);
    setQuizFinished(false);
    setAnswersState({});
  };

  const handleSelectAnswer = (val: string) => {
    if (currentAnswerState.submitted) return;
    setAnswersState(prev => ({
      ...prev,
      [currentQuestionIndex]: { ...prev[currentQuestionIndex], selected: val, submitted: false }
    }));
  };

  const handleSubmitAnswer = () => {
    if (!currentAnswerState.selected || currentAnswerState.submitted) return;

    if (currentAnswerState.selected === currentQuestion.answer) {
      setScore(prev => prev + 1);
    }

    setAnswersState(prev => ({
      ...prev,
      [currentQuestionIndex]: { ...prev[currentQuestionIndex], submitted: true }
    }));
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      setQuizFinished(true);
    }
  };

  const handlePrevQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1);
    }
  };

  const handleJumpToQuestion = (index: number) => {
    setCurrentQuestionIndex(index);
  };



  const resetQuiz = () => {
    setQuizStarted(false);
    setQuizFinished(false);
    setCurrentQuestionIndex(0);
  };

  if (!quizStarted) {
    return (
      <Container>
        <div className="max-w-4xl mx-auto py-12">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 font-display text-slate-900">
              Test Your <span className="text-gradient">Skills</span> 🧠
            </h1>
            <p className="text-xl text-slate-600">
              Challenge yourself with our curated technical quizzes. Select a technology to begin.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {technologies.filter(t => allQuizzes.some(q => q.id === t.id)).map(tech => {
              const qCount = allQuizzes.find(q => q.id === tech.id)?.questions.length || 0;
              return (
                <button
                  key={tech.id}
                  onClick={() => {
                    router.push(`/quiz?tech=${tech.id}`);
                    handleStartQuiz();
                  }}
                  className={`group p-8 rounded-[32px] bg-white border border-slate-100 hover:border-primary/30 transition-all text-left shadow-sm hover:shadow-xl hover:-translate-y-1 relative overflow-hidden`}
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-primary/10 transition-colors" />

                  <div className="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    {tech.icon.startsWith('http') ? (
                      <img src={tech.icon} alt={tech.name} className="w-10 h-10 object-contain" />
                    ) : (
                      <span className="text-3xl">{tech.icon}</span>
                    )}
                  </div>

                  <h3 className="text-2xl font-bold text-slate-900 mb-2">{tech.name}</h3>
                  <p className="text-slate-500 text-sm mb-6 line-clamp-2">
                    {qCount} Questions available
                  </p>

                  <div className="flex items-center text-primary font-bold text-sm gap-2">
                    Start Quiz
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 group-hover:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Fallback for techs without quizzes yet */}
          <div className="mt-16 p-10 rounded-[40px] bg-slate-50 border border-slate-100 text-center">
            <p className="text-slate-500 font-medium">More quizzes for other technologies are coming soon! 🚀</p>
          </div>
        </div>
      </Container>
    );
  }

  if (quizFinished) {
    const percentage = Math.round((score / questions.length) * 100);
    return (
      <Container>
        <div className="max-w-xl mx-auto py-12 text-center">
          <div className="mb-10 inline-flex items-center justify-center w-32 h-32 rounded-full bg-primary/10 text-primary text-5xl animate-bounce">
            {percentage >= 80 ? '🏆' : percentage >= 50 ? '🥈' : '📚'}
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Quiz Completed!</h2>
          <p className="text-xl text-slate-600 mb-10">
            You scored <span className="text-primary font-bold">{score}</span> out of <span className="font-bold">{questions.length}</span>
          </p>

          <div className="p-8 rounded-[40px] bg-white border border-slate-100 shadow-xl mb-12">
            <div className="w-full h-4 bg-slate-100 rounded-full mb-4 overflow-hidden">
              <div
                className={`h-full transition-all duration-1000 ease-out ${percentage >= 80 ? 'bg-emerald-400' : percentage >= 50 ? 'bg-blue-400' : 'bg-orange-400'}`}
                style={{ width: `${percentage}%` }}
              />
            </div>
            <p className="text-3xl font-bold text-slate-900">{percentage}% Accuracy</p>
            <p className="text-slate-500 mt-2">
              {percentage >= 80 ? 'Outstanding! You really know your stuff.' : percentage >= 50 ? 'Good job! A bit more practice and you will be a pro.' : 'Keep learning! Consistency is the key to mastery.'}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handleStartQuiz}
              className="px-8 py-4 bg-primary text-white rounded-full font-bold hover:bg-primary/90 transition-all shadow-lg shadow-primary/20"
            >
              Try Again
            </button>
            <button
              onClick={resetQuiz}
              className="px-8 py-4 bg-white border border-slate-200 text-slate-700 rounded-full font-bold hover:bg-slate-50 transition-all"
            >
              Back to Quizzes
            </button>
          </div>
        </div>
      </Container>
    );
  }

  return (
    <Container>
      <div className="max-w-6xl mx-auto py-12 px-4 md:px-0">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

          {/* Left Column: Question Content */}
          <div className="lg:col-span-8">
            {/* Breadcrumbs */}
            <div className="flex items-center gap-2 mb-8 text-sm font-medium text-slate-400">
              <Link href="/" className="hover:text-primary transition-colors">Home</Link>
              <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
              <button onClick={resetQuiz} className="hover:text-primary transition-colors">Quizzes</button>
              <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
              <span className="text-slate-900 font-bold">{activeTech.name}</span>
            </div>

            {/* Progress Bar */}
            <div className="mb-12">
              <div className="flex justify-between items-end mb-3">
                <div>
                  <span className="text-primary font-bold text-xs uppercase tracking-widest">{activeTech.name} Quiz</span>
                  <h2 className="text-xl font-bold text-slate-900">Question {currentQuestionIndex + 1} of {questions.length}</h2>
                </div>
                <span className="text-slate-400 font-bold text-sm">{Math.round(((currentQuestionIndex) / questions.length) * 100)}%</span>
              </div>
              <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                <div
                  className="h-full bg-primary transition-all duration-500"
                  style={{ width: `${((currentQuestionIndex + (currentAnswerState.submitted ? 1 : 0)) / questions.length) * 100}%` }}
                />
              </div>
            </div>



            {/* Question Card */}
            <div className="bg-white rounded-[40px] border border-slate-100 p-8 md:p-12 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-[0.03] text-9xl font-bold select-none pointer-events-none">
                {currentQuestionIndex + 1}
              </div>

              <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-10 leading-tight">
                {currentQuestion.question}
              </h3>

              <div className="space-y-4 mb-10">
                {currentQuestion.options.map((option, idx) => {
                  const optionLetter = String.fromCharCode(97 + idx); // a, b, c, d
                  const isSelected = currentAnswerState.selected === option;
                  const isCorrect = currentAnswerState.submitted && option === currentQuestion.answer;
                  const isWrong = currentAnswerState.submitted && isSelected && option !== currentQuestion.answer;

                  return (
                    <button
                      key={idx}
                      onClick={() => handleSelectAnswer(option)}
                      disabled={currentAnswerState.submitted}
                      className={`w-full p-5 rounded-2xl border text-left transition-all flex items-center gap-4 group ${isCorrect
                          ? 'bg-emerald-50 border-emerald-500 text-emerald-900'
                          : isWrong
                            ? 'bg-red-50 border-red-500 text-red-900'
                            : isSelected
                              ? 'border-primary bg-primary/5 text-primary'
                              : 'border-slate-100 bg-slate-50 hover:border-slate-300 text-slate-700'
                        }`}
                    >

                      <div className={`w-8 h-8 rounded-full border-2 flex items-center justify-center font-bold text-xs flex-shrink-0 transition-colors uppercase ${isCorrect
                          ? 'bg-emerald-500 border-emerald-500 text-white'
                          : isWrong
                            ? 'bg-red-500 border-red-500 text-white'
                            : isSelected
                              ? 'bg-primary border-primary text-white'
                              : 'border-slate-200 bg-white text-slate-300 group-hover:border-slate-400'
                        }`}>
                        {optionLetter}
                      </div>
                      <span className="text-lg font-medium">{option}</span>
                      {isCorrect && (
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 ml-auto text-emerald-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
                      )}
                      {isWrong && (
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 ml-auto text-red-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
                      )}
                    </button>
                  );
                })}
              </div>

              {currentAnswerState.submitted && (
                <div className="mb-10 p-6 rounded-2xl bg-slate-50 border border-slate-100 animate-in fade-in slide-in-from-top-2 duration-500">
                  <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-2">Explanation</p>
                  <p className="text-slate-600 leading-relaxed italic">{currentQuestion.explanation}</p>
                </div>
              )}

              <div className="flex items-center justify-between gap-4 mt-6">
                <button
                  onClick={handlePrevQuestion}
                  disabled={currentQuestionIndex === 0}
                  className={`flex items-center gap-2 px-6 py-4 rounded-full font-bold transition-all border ${currentQuestionIndex > 0
                      ? 'border-slate-200 text-slate-600 hover:bg-slate-50 shadow-sm'
                      : 'border-slate-100 text-slate-300 cursor-not-allowed'
                    }`}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6" /></svg>
                  Previous
                </button>

                {!currentAnswerState.submitted ? (
                  <button
                    onClick={handleSubmitAnswer}
                    disabled={!currentAnswerState.selected}
                    className={`px-10 py-4 rounded-full font-bold transition-all shadow-lg ${currentAnswerState.selected
                        ? 'bg-primary text-white shadow-primary/20 hover:bg-primary/90'
                        : 'bg-slate-100 text-slate-400 cursor-not-allowed shadow-none'
                      }`}
                  >
                    Check Answer
                  </button>
                ) : (
                  <div className="bg-emerald-50 text-emerald-600 font-bold px-6 py-4 rounded-full border border-emerald-100 flex items-center gap-2 animate-in fade-in zoom-in duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
                    Submitted
                  </div>
                )}

                <button
                  onClick={handleNextQuestion}
                  className="flex items-center gap-2 px-6 py-4 bg-slate-900 text-white rounded-full font-bold hover:bg-slate-800 transition-all shadow-lg"
                >
                  {currentQuestionIndex < questions.length - 1 ? 'Next' : 'Results'}
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Question Map Sidebar */}
          <div className="lg:col-span-4 lg:sticky lg:top-32">
            <div className="bg-white rounded-[40px] border border-slate-100 p-8 shadow-xl relative overflow-hidden">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-1">Question Map</h3>
                  <p className="text-sm text-slate-500">Track your progress</p>
                </div>
                <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center text-primary font-bold">
                  {Math.round((Object.keys(answersState).filter(k => answersState[Number(k)].submitted).length / questions.length) * 100)}%
                </div>
              </div>

              <div className="flex gap-4 mb-8 p-4 bg-slate-50 rounded-2xl border border-slate-100">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-primary" />
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">Current</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-emerald-400" />
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">Answered</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-white border border-slate-200" />
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">Left</span>
                </div>
              </div>

              <div className="grid grid-cols-5 md:grid-cols-6 lg:grid-cols-5 gap-3 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
                {questions.map((_, idx) => {
                  const isCurrent = idx === currentQuestionIndex;
                  const isAnswered = answersState[idx]?.submitted;

                  return (
                    <button
                      key={idx}
                      onClick={() => handleJumpToQuestion(idx)}
                      className={`aspect-square rounded-xl flex items-center justify-center font-bold text-xs transition-all border ${isCurrent
                          ? 'bg-primary text-white border-primary shadow-lg shadow-primary/20 scale-105 ring-4 ring-primary/10'
                          : isAnswered
                            ? 'bg-emerald-50 border-emerald-100 text-emerald-600 hover:bg-emerald-100'
                            : 'bg-white border-slate-100 text-slate-300 hover:border-slate-300'
                        }`}
                    >
                      {idx + 1}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Info Card */}
            <div className="mt-6 p-8 rounded-[40px] bg-slate-900 text-white relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-primary/20 transition-colors" />
              <h4 className="text-lg font-bold mb-2">Need a Hint? 💡</h4>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">Take your time. Each question tests core concepts of {activeTech.name}.</p>
              <button className="w-full py-3 bg-white/10 hover:bg-white/20 border border-white/10 rounded-2xl font-bold text-sm transition-all">
                Review Concepts
              </button>
            </div>
          </div>


        </div>
      </div>
    </Container>
  );
}

export default function QuizPage() {
  return (
    <main className="min-h-screen bg-background text-slate-900">
      <Navbar />

      <section className="pt-40 pb-20 relative min-h-[80vh]">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-96 bg-primary/5 blur-[120px] -z-10" />

        <Suspense fallback={<div className="flex items-center justify-center h-96 text-slate-400">Loading quiz…</div>}>
          <QuizContent />
        </Suspense>
      </section>

      <Footer />
    </main>
  );
}
