import React from 'react';
import { Container } from '../ui/Container';
import { Section } from '../ui/Section';

const BENEFITS = [
  {
    title: 'Daily Job Alerts',
    description: 'We scan 100+ sources to bring you the latest fresher and entry-level jobs every single day.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/></svg>
    ),
    color: 'bg-primary/10 text-primary'
  },
  {
    title: 'Interview Preparation',
    description: 'Master your technical and HR rounds with our comprehensive company-specific guides.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
    ),
    color: 'bg-secondary/10 text-secondary'
  },
  {
    title: 'Resume Optimization',
    description: 'Get your resume ATS-ready with our specific tips tailored for tech and non-tech freshers.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/></svg>
    ),
    color: 'bg-orange-500/10 text-orange-500'
  },
  {
    title: 'Zero Hidden Fees',
    description: 'Everything on our platform is free for freshers. We only care about your career success.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"/><path d="M12 18V6"/></svg>
    ),
    color: 'bg-blue-500/10 text-blue-500'
  }
];

export const Benefits = () => {
  return (
    <Section className="bg-white border-y border-slate-100">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Why Freshers Trust NextJob
          </h2>
          <p className="text-lg text-slate-500">
            We understand the challenges of starting your career. Our platform is built 
            specifically to solve the entry-level job hunt problem.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {BENEFITS.map((benefit, index) => (
            <div 
              key={benefit.title} 
              className="p-8 rounded-2xl bg-white border border-slate-100 hover:border-primary/10 hover:shadow-lg transition-all duration-300"
            >
              <div className={`w-16 h-16 rounded-xl flex items-center justify-center mb-6 ${benefit.color}`}>
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{benefit.title}</h3>
              <p className="text-slate-500 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
};
