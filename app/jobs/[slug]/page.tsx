import React from 'react';
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { db } from "@/lib/firebase";
import { doc, getDoc } from "firebase/firestore";
import Link from 'next/link';
import { notFound } from 'next/navigation';

async function getJobData(slug: string) {
  try {
    // Slug format: {YYYY}-{MM}-{DD}-{batchId}-{jobId}
    const parts = slug.split('-');
    if (parts.length < 5) return null; // Expect at least 3 for date + 1 for batch + 1 for jobId
    
    // Date is the first 3 parts
    const date = parts.slice(0, 3).join('-');
    const batchId = parts[3];
    const jobId = parts.slice(4).join('-'); // Handle IDs that might have hyphens
    
    const docRef = doc(db, "daily_batches", date, batchId, jobId);
    const snap = await getDoc(docRef);
    
    if (snap.exists()) {
      return snap.data();
    }
  } catch (err) {
    console.error("Error fetching job detail:", err);
  }
  return null;
}

export default async function JobDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const job = await getJobData(slug);

  if (!job) {
    notFound();
  }

  const content = job.webContent;

  return (
    <main className="min-h-screen bg-slate-50">
      <Navbar />
      
      <div className="pt-32 pb-16 bg-white border-b border-slate-100">
        <Container>
          <div className="max-w-4xl mx-auto">
            <Link href="/jobs" className="inline-flex items-center gap-2 text-primary font-bold mb-6 cursor-pointer group hover:translate-x-[-4px] transition-transform">
               <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
               Back to Jobs
            </Link>
            
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
              <div className="flex items-center gap-6">
                <div className="w-20 h-20 bg-indigo-500 rounded-3xl flex items-center justify-center text-white text-3xl font-bold shadow-xl shadow-indigo-100">
                  {job.company.charAt(0)}
                </div>
                <div>
                  <h1 className="text-3xl font-extrabold text-slate-900 mb-2">{job.title}</h1>
                  <p className="text-xl text-slate-500 font-medium flex items-center gap-2">
                    {job.company} <span className="w-1.5 h-1.5 rounded-full bg-slate-300"></span> {job.location || 'India'}
                  </p>
                </div>
              </div>
              <Button size="lg" className="shadow-lg shadow-primary/20" href={job.link} target="_blank">
                Apply for this Position
              </Button>
            </div>
          </div>
        </Container>
      </div>

      <Container className="py-12">
        <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            <section className="bg-white p-8 rounded-3xl border border-slate-100">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Job Description</h2>
              <div className="prose prose-slate max-w-none text-slate-600 space-y-4">
                <p className="font-bold text-primary italic">"{content.openingHook}"</p>
                {content.introText.map((p: string, i: number) => (
                  <p key={i}>{p}</p>
                ))}
                
                <h3 className="text-lg font-bold text-slate-800 pt-4">Why you should learn this:</h3>
                <p>{content.whyLearn.demand}</p>
                <p className="font-semibold text-emerald-600">Expected Salary: {content.whyLearn.salaryRange}</p>

                <h3 className="text-lg font-bold text-slate-800 pt-4">How it works:</h3>
                <ul className="list-disc pl-5 space-y-2">
                  {content.howItWorks.steps.map((step: string, i: number) => (
                    <li key={i}>{step}</li>
                  ))}
                </ul>
              </div>
            </section>

            <section className="bg-indigo-50 p-8 rounded-3xl border border-indigo-100">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Core Concepts to Master</h2>
              <div className="space-y-6 text-slate-700">
                {content.coreConcepts.map((concept: any, i: number) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-white flex-shrink-0 flex items-center justify-center font-bold text-primary border border-indigo-100">{i+1}</div>
                    <div>
                      <h4 className="font-bold mb-1">{concept.title}</h4>
                      <p className="text-slate-500">{concept.explanation}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="bg-emerald-50 p-8 rounded-3xl border border-emerald-100">
              <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-emerald-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><path d="M10 13h4"/><path d="M10 17h4"/><path d="M10 9h2"/></svg>
                Interview Questions (Beginner)
              </h2>
              <ul className="space-y-4">
                {content.interviewQuestions.beginner.map((q: string, i: number) => (
                  <li key={i} className="flex gap-3 text-slate-700 font-medium">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-emerald-600 flex-shrink-0 translate-y-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                    {q}
                  </li>
                ))}
              </ul>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-8 sticky top-28 self-start">
            <div className="bg-white p-8 rounded-3xl border border-slate-100">
              <h3 className="text-lg font-bold text-slate-900 mb-6">Job Overview</h3>
              <div className="space-y-6">
                <div>
                  <span className="text-sm text-slate-400 block mb-1">Company</span>
                  <span className="font-bold text-slate-900">{job.company}</span>
                </div>
                <div>
                  <span className="text-sm text-slate-400 block mb-1">Employment Type</span>
                  <span className="font-bold text-slate-900 px-3 py-1 bg-indigo-50 text-primary rounded-lg text-sm inline-block">Full-time</span>
                </div>
                <div>
                  <span className="text-sm text-slate-400 block mb-1">Location</span>
                  <span className="font-bold text-slate-900">{job.location || 'India'}</span>
                </div>
                <div>
                  <span className="text-sm text-slate-400 block mb-1">Experience Level</span>
                  <span className="font-bold text-slate-900">Fresher</span>
                </div>
                <div className="pt-6">
                  <Button className="w-full shadow-lg shadow-primary/20" href={job.link} target="_blank">Apply Now</Button>
                </div>
              </div>
            </div>
            
            <div className="bg-slate-900 p-8 rounded-3xl text-white">
               <h3 className="text-lg font-bold mb-4">Advance Questions</h3>
               <ul className="text-slate-400 text-sm space-y-3 mb-6">
                 {content.interviewQuestions.advanced.slice(0,3).map((q: string, i: number) => (
                   <li key={i}>• {q}</li>
                 ))}
               </ul>
               <Button variant="outline" className="w-full border-slate-700 text-white hover:bg-slate-800">Unlock Full Guide</Button>
            </div>
          </div>
        </div>
      </Container>

      <Footer />
    </main>
  );
}
