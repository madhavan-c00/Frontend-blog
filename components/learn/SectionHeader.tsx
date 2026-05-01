import React from 'react';

export const SectionHeader = ({ title }: { title: string }) => (
  <div className="relative inline-block group">
    <h2 className="text-3xl md:text-5xl font-black text-slate-900 break-words font-display tracking-tight">
      {title}
    </h2>
    <div className="h-1.5 w-1/3 bg-gradient-to-r from-primary to-secondary rounded-full mt-2 transition-all duration-500 group-hover:w-full opacity-60" />
  </div>
);
