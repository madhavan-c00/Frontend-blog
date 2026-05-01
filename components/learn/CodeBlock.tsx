"use client";

import React, { useState } from 'react';

export const CodeBlock = ({ code, label, language = 'jsx' }: { code: string; label?: string; language?: string }) => {
  const [copied, setCopied] = useState(false);
  const copy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <div className="rounded-3xl overflow-hidden border border-white/5 bg-[#0d1117] shadow-2xl w-full group">
      <div className="flex items-center justify-between px-6 py-4 border-b border-white/5 bg-[#161b22]/80 backdrop-blur-md">
        <div className="flex items-center gap-4">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-[#ff5f56] shadow-[0_0_10px_rgba(255,95,86,0.3)]" />
            <div className="w-3 h-3 rounded-full bg-[#ffbd2e] shadow-[0_0_10px_rgba(255,189,46,0.3)]" />
            <div className="w-3 h-3 rounded-full bg-[#27c93f] shadow-[0_0_10px_rgba(39,201,63,0.3)]" />
          </div>
          <span className="text-[11px] font-black text-slate-400 uppercase tracking-[0.2em]">{label || language}</span>
        </div>
        <button 
          onClick={copy} 
          className="text-[11px] font-black uppercase text-slate-400 hover:text-white bg-white/5 hover:bg-white/10 px-4 py-1.5 rounded-xl transition-all duration-300 border border-white/5 flex items-center gap-2 group/btn"
        >
          {copied ? (
            <>
              <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 text-emerald-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
              <span className="text-emerald-400">Copied</span>
            </>
          ) : (
            <>
              <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 opacity-50 group-hover/btn:opacity-100 transition-opacity" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>
              <span>Copy</span>
            </>
          )}
        </button>
      </div>
      <pre className="p-6 text-[13px] sm:text-[15px] leading-relaxed text-slate-300 font-mono whitespace-pre-wrap break-all sm:whitespace-pre sm:break-normal sm:overflow-x-auto custom-scrollbar">
        <code className="block">{code}</code>
      </pre>
    </div>
  );
};
