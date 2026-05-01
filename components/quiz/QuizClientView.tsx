"use client";

import React, { useState, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import { Container } from '@/components/ui/Container';
import Link from 'next/link';

interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  answer: string;
  explanation: string;
  difficulty: string;
}

interface QuizClientViewProps {
  activeTech: any;
  questions: QuizQuestion[];
  allAvailableTechs: any[];
}

export default function QuizClientView({ activeTech, questions, allAvailableTechs }: QuizClientViewProps) {
  const router = useRouter();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answersState, setAnswersState] = useState<Record<number, { selected: string | null, submitted: boolean }>>({});
  const [score, setScore] = useState(0);
  const [quizStarted, setQuizStarted] = useState(false);
  const [quizFinished, setQuizFinished] = useState(false);

  const currentAnswerState = useMemo(() =>
    answersState[currentQuestionIndex] || { selected: null, submitted: false },
    [answersState, currentQuestionIndex]
  );

  const currentQuestion = questions[currentQuestionIndex];

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
    if (currentQuestionIndex > 0) setCurrentQuestionIndex(prev => prev - 1);
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
            <p className="text-xl text-slate-600">Select a technology to begin.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allAvailableTechs.map(tech => (
              <button
                key={tech.id}
                onClick={() => {
                  router.push(`/quiz?tech=${tech.id}`);
                  handleStartQuiz();
                }}
                className="group p-8 rounded-[32px] bg-white border border-slate-100 hover:border-primary/30 transition-all text-left shadow-sm hover:shadow-xl hover:-translate-y-1 relative overflow-hidden"
              >
                <div className="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center mb-6">
                  {tech.icon.startsWith('http') ? <img src={tech.icon} className="w-10 h-10 object-contain" alt="" /> : <span className="text-3xl">{tech.icon}</span>}
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">{tech.name}</h3>
                <div className="flex items-center text-primary font-bold text-sm gap-2">Start Quiz</div>
              </button>
            ))}
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
          <div className="mb-10 text-5xl animate-bounce">{percentage >= 80 ? '🏆' : '📚'}</div>
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Quiz Completed!</h2>
          <p className="text-xl mb-10">You scored <span className="text-primary font-bold">{score}</span> / {questions.length}</p>
          <div className="p-8 rounded-[40px] bg-white border border-slate-100 shadow-xl mb-12">
            <p className="text-3xl font-bold">{percentage}% Accuracy</p>
          </div>
          <div className="flex gap-4 justify-center">
            <button onClick={handleStartQuiz} className="px-8 py-4 bg-primary text-white rounded-full font-bold">Try Again</button>
            <button onClick={resetQuiz} className="px-8 py-4 border rounded-full font-bold">Back</button>
          </div>
        </div>
      </Container>
    );
  }

  return (
    <Container>
      <div className="max-w-6xl mx-auto py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-8">
            <div className="mb-12">
              <h2 className="text-xl font-bold">Question {currentQuestionIndex + 1} of {questions.length}</h2>
              <div className="w-full h-2 bg-slate-100 rounded-full mt-4 overflow-hidden">
                <div className="h-full bg-primary transition-all" style={{ width: `${((currentQuestionIndex + (currentAnswerState.submitted ? 1 : 0)) / questions.length) * 100}%` }} />
              </div>
            </div>

            <div className="bg-white rounded-[40px] border border-slate-100 p-8 md:p-12 shadow-sm">
              <h3 className="text-2xl font-bold mb-10">{currentQuestion.question}</h3>
              <div className="space-y-4 mb-10">
                {currentQuestion.options.map((option, idx) => {
                  const isSelected = currentAnswerState.selected === option;
                  const isCorrect = currentAnswerState.submitted && option === currentQuestion.answer;
                  const isWrong = currentAnswerState.submitted && isSelected && option !== currentQuestion.answer;
                  return (
                    <button
                      key={idx}
                      onClick={() => handleSelectAnswer(option)}
                      disabled={currentAnswerState.submitted}
                      className={`w-full p-5 rounded-2xl border text-left flex items-center gap-4 ${isCorrect ? 'bg-emerald-50 border-emerald-500 text-emerald-900' : isWrong ? 'bg-red-50 border-red-500 text-red-900' : isSelected ? 'border-primary bg-primary/5 text-primary' : 'border-slate-100 bg-slate-50'}`}
                    >
                      <span className="text-lg font-medium">{option}</span>
                    </button>
                  );
                })}
              </div>
              
              {currentAnswerState.submitted && (
                <div className="mb-10 p-6 rounded-2xl bg-slate-50 border border-slate-100">
                  <p className="text-sm font-bold text-slate-400 uppercase mb-2">Explanation</p>
                  <p className="text-slate-600 italic">{currentQuestion.explanation}</p>
                </div>
              )}

              <div className="flex items-center justify-between gap-4">
                <button onClick={handlePrevQuestion} disabled={currentQuestionIndex === 0} className="px-6 py-4 border rounded-full font-bold disabled:opacity-30">Previous</button>
                {!currentAnswerState.submitted ? (
                  <button onClick={handleSubmitAnswer} disabled={!currentAnswerState.selected} className="px-10 py-4 bg-primary text-white rounded-full font-bold disabled:opacity-30">Check Answer</button>
                ) : (
                  <div className="text-emerald-600 font-bold px-6 py-4">Submitted</div>
                )}
                <button onClick={handleNextQuestion} className="px-6 py-4 bg-slate-900 text-white rounded-full font-bold">Next</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
