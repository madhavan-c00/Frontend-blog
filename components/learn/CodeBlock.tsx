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
    <div className="rounded-xl overflow-hidden border border-white/10 bg-zinc-950 shadow-lg w-full">
      <div className="flex items-center justify-between px-4 py-2.5 border-b border-white/5 bg-zinc-900/80">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500/30 border border-red-500/60" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/30 border border-yellow-500/60" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-500/30 border border-green-500/60" />
          </div>
          <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">{label || language}</span>
        </div>
        <button onClick={copy} className="text-[10px] font-bold uppercase text-zinc-500 hover:text-white bg-white/5 hover:bg-white/10 px-2.5 py-1 rounded-md transition-colors">
          {copied ? '✓ Copied' : 'Copy'}
        </button>
      </div>
      <pre className="p-4 text-xs sm:text-sm leading-relaxed text-emerald-300 font-mono whitespace-pre-wrap break-all sm:whitespace-pre sm:break-normal sm:overflow-x-auto">
        <code>{code}</code>
      </pre>
    </div>
  );
};
