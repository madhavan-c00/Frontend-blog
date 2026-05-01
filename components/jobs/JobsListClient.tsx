"use client";

import React, { useState } from 'react';
import { JobCard, Job } from './JobCard';

interface JobsListClientProps {
  initialJobs: Job[];
}

export const JobsListClient = ({ initialJobs }: JobsListClientProps) => {
  const [visibleCount, setVisibleCount] = useState(10);

  const visibleJobs = initialJobs.slice(0, visibleCount);
  const hasMore = visibleCount < initialJobs.length;

  const handleLoadMore = () => {
    setVisibleCount(prev => prev + 10);
  };

  return (
    <div className="space-y-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {visibleJobs.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>

      {hasMore && (
        <div className="flex justify-center pt-8">
          <button
            onClick={handleLoadMore}
            className="group relative px-8 py-4 bg-white border-2 border-slate-200 text-slate-700 rounded-2xl font-bold hover:border-primary hover:text-primary transition-all shadow-sm hover:shadow-xl flex items-center gap-3 overflow-hidden"
          >
            <div className="absolute inset-0 bg-primary/5 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            <span className="relative">Load More Opportunities</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 relative group-hover:translate-y-1 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
          </button>
        </div>
      )}

      {!hasMore && initialJobs.length > 0 && (
        <p className="text-center text-slate-400 font-medium">
          You've viewed all {initialJobs.length} available opportunities. Check back later for more! 🚀
        </p>
      )}
    </div>
  );
};
