'use client';

import { useEffect, useRef, useState } from 'react';
import { X, Copy, Check, ArrowRight } from 'lucide-react';
import { Skill } from '@/data/skills';

const CATEGORY_COLORS: Record<string, string> = {
  content: 'bg-violet-100 text-violet-700',
  sales: 'bg-emerald-100 text-emerald-700',
  strategy: 'bg-amber-100 text-amber-700',
  pitch: 'bg-blue-100 text-blue-700',
};

const CATEGORY_LABELS: Record<string, string> = {
  content: 'Content & Copy',
  sales: 'Sales & GTM',
  strategy: 'Strategy',
  pitch: 'Pitch & Docs',
};

export function SkillModal({ skill, onClose }: { skill: Skill; onClose: () => void }) {
  const [copied, setCopied] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) onClose();
  };

  const copyCommand = async () => {
    await navigator.clipboard.writeText(skill.command);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      className="modal-backdrop fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: 'rgba(11, 18, 33, 0.6)', backdropFilter: 'blur(4px)' }}
      onClick={handleBackdropClick}
    >
      <div
        ref={ref}
        className="modal-panel relative w-full max-w-lg bg-white rounded-2xl shadow-2xl overflow-hidden"
      >
        {/* Header */}
        <div className="px-6 pt-6 pb-4 border-b border-gray-100">
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${CATEGORY_COLORS[skill.category]}`}>
                  {CATEGORY_LABELS[skill.category]}
                </span>
              </div>
              <h2 className="text-xl font-semibold text-gray-900 leading-snug">{skill.title}</h2>
            </div>
            <button
              onClick={onClose}
              className="flex-shrink-0 p-1.5 rounded-lg text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-colors"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Body */}
        <div className="px-6 py-5 space-y-5">
          <p className="text-gray-600 text-sm leading-relaxed">{skill.longDescription}</p>

          {/* Use cases */}
          <div>
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">When to use</p>
            <ul className="space-y-1.5">
              {skill.useCases.map((uc, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                  <ArrowRight size={13} className="mt-0.5 flex-shrink-0 text-gray-400" />
                  {uc}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer — command copy */}
        <div className="px-6 pb-6">
          <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl border border-gray-200">
            <div className="flex-1 min-w-0">
              <p className="text-xs text-gray-400 mb-0.5">Paste into Claude Code or Claude.ai</p>
              <span className="command-badge font-semibold text-gray-800">{skill.command}</span>
            </div>
            <button
              onClick={copyCommand}
              className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                copied
                  ? 'bg-emerald-500 text-white'
                  : 'bg-gray-900 text-white hover:bg-gray-700'
              }`}
            >
              {copied ? (
                <>
                  <Check size={14} />
                  Copied
                </>
              ) : (
                <>
                  <Copy size={14} />
                  Copy
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
