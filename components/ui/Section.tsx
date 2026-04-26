import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  dark?: boolean;
}

export const Section = ({ children, className = "", id, dark = false }: SectionProps) => {
  return (
    <section 
      id={id} 
      className={`py-20 md:py-28 ${dark ? 'bg-slate-900 text-white' : 'bg-transparent'} ${className}`}
    >
      {children}
    </section>
  );
};
