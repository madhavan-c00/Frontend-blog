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
  coverImage?: string;
}

interface JobCardProps {
  job: Job;
}

export const JobCard = ({ job }: JobCardProps) => {
  return (
    <div className="group bg-white rounded-[1.5rem] sm:rounded-[2.5rem] border border-slate-100 hover:border-primary/20 hover:shadow-premium transition-all duration-500 relative overflow-hidden flex flex-col">
      <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 blur-3xl rounded-full -mr-16 -mt-16 opacity-0 group-hover:opacity-100 transition-opacity" />
      
      {/* Cover Image */}
      <div className="w-full h-32 sm:h-40 bg-slate-100 relative overflow-hidden shrink-0">
        <img 
          src={job.coverImage || "https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2070&auto=format&fit=crop"} 
          alt="Office space" 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      </div>

      <div className="p-4 sm:p-8 flex-1 flex flex-col relative z-10 -mt-12 sm:-mt-16">
        <div className="flex items-end justify-between mb-4 sm:mb-8">
          <div className={`w-12 h-12 sm:w-16 sm:h-16 ${job.logoColor} rounded-xl sm:rounded-2xl flex items-center justify-center text-white text-xl sm:text-2xl font-black shadow-lg transition-transform duration-500 group-hover:rotate-[10deg] group-hover:scale-110 border-4 border-white`}>
            {job.company.charAt(0)}
          </div>
          <div className="flex flex-col items-end mb-2 sm:mb-4">
            <span className="text-[8px] sm:text-[10px] font-black uppercase tracking-widest px-2 sm:px-3 py-1 bg-white text-slate-900 rounded-full shadow-md">
              {job.postedAt}
            </span>
          </div>
        </div>

      <div className="relative z-10">
        <h3 className="text-base sm:text-2xl font-extrabold text-slate-900 group-hover:text-primary transition-colors mb-1 sm:mb-2 line-clamp-1 tracking-tight">
          {job.title}
        </h3>
        <p className="text-slate-500 font-semibold text-[10px] sm:text-sm uppercase tracking-widest mb-4 sm:mb-6">{job.company}</p>

        <div className="flex flex-wrap gap-1 sm:gap-2 mb-6 sm:mb-8">
          <span className="inline-flex items-center gap-1 sm:gap-2 text-[9px] sm:text-xs font-semibold text-slate-500 bg-slate-50 px-2 sm:px-3 py-1 sm:py-1.5 rounded-lg sm:rounded-xl border border-slate-100">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
            {job.location}
          </span>
          <span className="inline-flex items-center gap-1 sm:gap-2 text-[9px] sm:text-xs font-semibold text-slate-500 bg-slate-50 px-2 sm:px-3 py-1 sm:py-1.5 rounded-lg sm:rounded-xl border border-slate-100">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="14" x="2" y="7" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
            {job.type}
          </span>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center justify-between pt-4 sm:pt-6 border-t border-slate-100 gap-3">
          <div>
            <span className="text-[8px] sm:text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-1">Package</span>
            <span className="font-extrabold text-slate-900 text-sm sm:text-lg tracking-tight">{job.salary}</span>
          </div>
          <Link 
            href={`/jobs/${job.slug}`} 
            className="w-full sm:w-auto text-center px-4 sm:px-6 py-2 sm:py-2.5 bg-slate-100 text-slate-900 rounded-lg sm:rounded-xl font-bold text-[10px] sm:text-xs uppercase tracking-widest hover:bg-slate-900 hover:text-white transition-all duration-300 shadow-sm"
          >
            Apply
          </Link>
        </div>
        </div>
      </div>
    </div>
  );
};
