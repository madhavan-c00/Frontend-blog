import React from 'react';

export const SectionHeader = ({ title }: { title: string }) => (
  <h2 className="text-3xl md:text-4xl font-bold text-slate-900 break-words font-display">
    {title}
  </h2>
);
