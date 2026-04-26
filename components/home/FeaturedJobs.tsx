import React from 'react';
import { Container } from '../ui/Container';
import { Section } from '../ui/Section';
import { JobCard, Job } from '../jobs/JobCard';
import { Button } from '../ui/Button';

const MOCK_JOBS: Job[] = [
  {
    id: '1',
    title: 'Frontend Developer (Intern)',
    company: 'TechFlow',
    location: 'Remote',
    type: 'Internship',
    salary: '$500 - $800 / mo',
    postedAt: '2h ago',
    logoColor: 'bg-indigo-500',
    slug: 'frontend-developer-intern-techflow'
  },
  {
    id: '2',
    title: 'Junior Web Designer',
    company: 'CreativeBox',
    location: 'Bangalore, India',
    type: 'Full-time',
    salary: '₹6L - ₹8L / yr',
    postedAt: '5h ago',
    logoColor: 'bg-emerald-500',
    slug: 'junior-web-designer-creativebox'
  },
  {
    id: '3',
    title: 'Associate Product Manager',
    company: 'GrowthScale',
    location: 'Hybrid',
    type: 'Full-time',
    salary: '₹12L - ₹15L / yr',
    postedAt: '1d ago',
    logoColor: 'bg-orange-500',
    slug: 'associate-product-manager-growthscale'
  },
  {
    id: '4',
    title: 'Data Analyst (Fresher)',
    company: 'InsightIQ',
    location: 'Remote',
    type: 'Full-time',
    salary: '$40k - $55k / yr',
    postedAt: '1d ago',
    logoColor: 'bg-blue-500',
    slug: 'data-analyst-fresher-insightiq'
  },
  {
    id: '5',
    title: 'Backend Engineer (Node.js)',
    company: 'SystemCore',
    location: 'San Francisco, CA',
    type: 'Full-time',
    salary: '$90k - $110k / yr',
    postedAt: '2d ago',
    logoColor: 'bg-purple-500',
    slug: 'backend-engineer-node-js-systemcore'
  },
  {
    id: '6',
    title: 'Software Engineer Trainee',
    company: 'GlobalStack',
    location: 'Pune, India',
    type: 'Training',
    salary: '₹4L - ₹6L / yr',
    postedAt: '3d ago',
    logoColor: 'bg-red-500',
    slug: 'software-engineer-trainee-globalstack'
  }
];

export const FeaturedJobs = () => {
  return (
    <Section className="bg-white">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Featured Job Opportunities
            </h2>
            <p className="text-lg text-slate-500 max-w-2xl">
              Hand-picked opportunities for freshers from top tech companies. 
              New positions added every day.
            </p>
          </div>
          <Button href="/jobs" variant="outline">
            View All Jobs
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {MOCK_JOBS.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      </Container>
    </Section>
  );
};
