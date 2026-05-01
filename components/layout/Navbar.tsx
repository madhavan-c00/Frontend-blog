"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Container } from '../ui/Container';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Jobs', href: '/jobs' },
    { name: 'Tech Stacks', href: '/tech-stacks' },
    { name: 'Blogs', href: '/blog' },
    { name: 'Interview Q&A', href: '/interview-questions' },
    { name: 'Quiz', href: '/quiz' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-white/80 backdrop-blur-xl border-b border-slate-100 shadow-premium py-4' 
        : 'bg-transparent py-6'
    }`}>
      <Container>
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative">
              <span className="relative z-10 bg-slate-900 text-white p-2.5 rounded-xl flex items-center justify-center transition-transform duration-500 group-hover:rotate-[10deg] shadow-lg">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="14" x="2" y="7" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
              </span>
              <div className="absolute inset-0 bg-primary blur-lg opacity-0 group-hover:opacity-40 transition-opacity duration-500" />
            </div>
            <span className="text-2xl font-bold tracking-tight font-display text-slate-900">
              Job<span className="text-primary">Hub</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                className="px-4 py-2 text-[15px] text-slate-600 hover:text-slate-900 font-semibold transition-all duration-300 rounded-xl hover:bg-slate-50"
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4">
            <button className="text-sm font-bold text-slate-600 hover:text-slate-900 transition-colors">Log in</button>
            <button className="btn-primary !py-2 !px-6 !text-xs uppercase tracking-wider">Get Started</button>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden p-2 text-slate-900 bg-slate-50 rounded-xl"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 mt-4 mx-4 bg-white/95 backdrop-blur-xl border border-slate-100 p-6 rounded-3xl shadow-2xl animate-in fade-in zoom-in-95 duration-300">
              <div className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <Link 
                    key={link.name} 
                    href={link.href}
                    className="text-slate-600 hover:text-slate-900 font-bold p-3 rounded-2xl hover:bg-slate-50 transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}
                <hr className="my-2 border-slate-100" />
                <button className="btn-primary w-full mt-2">Get Started</button>
              </div>
          </div>
        )}
      </Container>
    </nav>
  );
};
