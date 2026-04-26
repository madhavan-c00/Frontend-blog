import React from 'react';
import Link from 'next/link';
import { Button } from '../ui/Button';

export interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  type: string;
  salary: string;
  postedAt: string;
  logoColor: string;
  slug: string;
}

interface JobCardProps {
  job: Job;
}

export const JobCard = ({ job }: JobCardProps) => {
  return (
    <div className="group bg-white p-6 rounded-2xl border border-slate-100 hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300">
      <div className="flex items-start justify-between mb-6">
        <div className={`w-14 h-14 ${job.logoColor} rounded-xl flex items-center justify-center text-white text-xl font-bold`}>
          {job.company.charAt(0)}
        </div>
        <span className="text-xs font-semibold px-2 py-1 bg-slate-100 text-slate-500 rounded-md">
          {job.postedAt}
        </span>
      </div>

      <h3 className="text-xl font-bold text-slate-900 group-hover:text-primary transition-colors mb-2 line-clamp-1">
        {job.title}
      </h3>
      <p className="text-slate-500 font-medium mb-4">{job.company}</p>

      <div className="flex flex-wrap gap-2 mb-6">
        <span className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-600 bg-slate-50 px-2.5 py-1 rounded-full border border-slate-100">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
          {job.location}
        </span>
        <span className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-600 bg-slate-50 px-2.5 py-1 rounded-full border border-slate-100">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="14" x="2" y="7" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
          {job.type}
        </span>
      </div>

      <div className="flex items-center justify-between pt-6 border-t border-slate-50">
        <div>
          <span className="text-sm text-slate-400 block mb-0.5">Salary</span>
          <span className="font-bold text-slate-900">{job.salary}</span>
        </div>
        <Button href={`/jobs/${job.slug}`} size="sm" variant="outline" className="group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all duration-300">
          Apply Now
        </Button>
      </div>
    </div>
  );
};
