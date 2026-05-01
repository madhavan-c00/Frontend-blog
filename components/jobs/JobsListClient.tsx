"use client";

import React, { useState } from 'react';
import { JobCard, Job } from './JobCard';
import { getJobsAction } from '@/app/jobs/actions';

interface JobsListClientProps {
  initialJobs: Job[];
  initialHasMore: boolean;
}

export const JobsListClient = ({ initialJobs, initialHasMore }: JobsListClientProps) => {
  const [jobs, setJobs] = useState<Job[]>(initialJobs);
  const [hasMore, setHasMore] = useState(initialHasMore);
  const [isLoading, setIsLoading] = useState(false);
  
  // Filter States
  const [selectedDate, setSelectedDate] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  // Debounced search effect
  React.useEffect(() => {
    const timer = setTimeout(() => {
      handleSearch(searchQuery, selectedDate);
    }, 500);

    return () => clearTimeout(timer);
  }, [searchQuery]);

  const handleSearch = async (queryStr: string, date: string) => {
    setIsLoading(true);
    try {
      const result = await getJobsAction(undefined, 12, date, undefined, queryStr);
      setJobs(result.jobs);
      setHasMore(result.hasMore);
    } catch (error) {
      console.error("Search failed:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleFilterChange = async (date: string) => {
    setSelectedDate(date);
    handleSearch(searchQuery, date);
  };

  const handleLoadMore = async () => {
    if (isLoading) return;
    
    setIsLoading(true);
    try {
      const lastJob = jobs[jobs.length - 1];
      const result = await getJobsAction(lastJob?.id, 12, selectedDate, undefined, searchQuery);
      
      if (result.jobs.length > 0) {
        setJobs(prev => [...prev, ...result.jobs]);
        setHasMore(result.hasMore);
      } else {
        setHasMore(false);
      }
    } catch (error) {
      console.error("Failed to load more jobs:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-12">
      {/* Inline Search and Filter Controls */}
      <div className="flex flex-col md:flex-row gap-4 p-4 bg-white rounded-2xl md:rounded-full border border-slate-100 shadow-sm items-center">
        <div className="flex-1 w-full relative">
          <svg xmlns="http://www.w3.org/2000/svg" className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /></svg>
          <input 
            type="text"
            placeholder="Search roles or companies..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-3 bg-slate-50 md:bg-transparent border-none rounded-xl focus:ring-0 outline-none font-bold text-slate-700 placeholder:text-slate-400"
          />
        </div>
        
        <div className="hidden md:block w-px h-8 bg-slate-100" />

        <div className="w-full md:w-auto flex items-center gap-3 px-4 py-3 md:py-0 bg-slate-50 md:bg-transparent rounded-xl">
          <label className="text-[10px] font-black uppercase text-slate-400 tracking-widest whitespace-nowrap">Posted On</label>
          <input 
            type="date" 
            value={selectedDate}
            onChange={(e) => handleFilterChange(e.target.value)}
            className="bg-transparent border-none focus:ring-0 outline-none font-bold text-slate-700 p-0 text-sm"
          />
        </div>

        <button 
          onClick={() => {
            setSearchQuery("");
            setSelectedDate("");
            handleSearch("", "");
          }}
          className="px-6 py-3 text-slate-400 hover:text-primary transition-colors font-bold text-xs uppercase tracking-widest whitespace-nowrap"
        >
          Reset
        </button>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6 relative min-h-[400px]">
        {isLoading && jobs.length === 0 ? (
           <div className="absolute inset-0 flex items-center justify-center bg-white/50 backdrop-blur-sm z-10 rounded-3xl">
              <div className="flex flex-col items-center gap-4">
                 <div className="w-12 h-12 border-4 border-primary/20 border-t-primary rounded-full animate-spin" />
                 <p className="text-slate-500 font-bold animate-pulse">Searching DB...</p>
              </div>
           </div>
        ) : null}

        {jobs.length > 0 ? (
          jobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))
        ) : !isLoading && (
          <div className="col-span-full py-20 text-center bg-slate-50 rounded-3xl border-2 border-dashed border-slate-200">
            <p className="text-xl font-bold text-slate-400">No matching jobs found</p>
          </div>
        )}
      </div>

      {hasMore && (
        <div className="flex justify-center pt-8">
          <button
            onClick={handleLoadMore}
            disabled={isLoading}
            className="group relative px-8 py-4 bg-white border-2 border-slate-200 text-slate-700 rounded-2xl font-bold hover:border-primary hover:text-primary transition-all shadow-sm hover:shadow-xl flex items-center gap-3 overflow-hidden disabled:opacity-50"
          >
            <div className="absolute inset-0 bg-primary/5 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            <span className="relative">
              {isLoading ? 'Updating List...' : 'Load More Opportunities'}
            </span>
            {!isLoading && (
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 relative group-hover:translate-y-1 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
            )}
          </button>
        </div>
      )}

      {!hasMore && jobs.length > 0 && (
        <p className="text-center text-slate-400 font-medium">
          You've viewed all {jobs.length} available opportunities. Check back later for more! 🚀
        </p>
      )}
    </div>
  );
};
