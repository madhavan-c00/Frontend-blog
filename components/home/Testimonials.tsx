import React from 'react';
import { Container } from '../ui/Container';
import { Section } from '../ui/Section';

const TESTIMONIALS = [
  {
    name: "Sarah Chen",
    role: "Frontend Dev at Meta",
    content: "NextJob was a game changer for me. I found my first internship here within two weeks of signing up!",
    initials: "SC",
    color: "bg-orange-100 text-orange-600"
  },
  {
    name: "Rahul Sharma",
    role: "Junior Data Analyst",
    content: "The interview prep guides were so accurate! The questions they listed were exactly what I was asked.",
    initials: "RS",
    color: "bg-blue-100 text-blue-600"
  },
  {
    name: "Jessica Williams",
    role: "Product Designer",
    content: "I love the clean interface. It's so much easier to find relevant fresher roles here than on LinkedIn.",
    initials: "JW",
    color: "bg-purple-100 text-purple-600"
  }
];

export const Testimonials = () => {
  return (
    <Section className="bg-white">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Success Stories</h2>
          <p className="text-slate-500">Join thousands of freshers who landed their first role using NextJob.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, idx) => (
            <div key={idx} className="p-8 rounded-2xl bg-slate-50 border border-slate-100 relative">
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold ${t.color}`}>
                  {t.initials}
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">{t.name}</h4>
                  <p className="text-xs text-slate-500 uppercase tracking-wider">{t.role}</p>
                </div>
              </div>
              <p className="text-slate-600 italic leading-relaxed">
                "{t.content}"
              </p>
              <div className="absolute top-8 right-8 text-slate-200">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" viewBox="0 0 24 24" fill="currentColor"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/></svg>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
};
