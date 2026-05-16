'use client';

import { useEffect, useState } from 'react';
import { X, Copy, Check } from 'lucide-react';
import { Skill } from '@/data/skills';

const CATEGORY_LABELS: Record<string, string> = {
  content: 'Content & Copy',
  sales: 'Sales & GTM',
  strategy: 'Strategy',
  pitch: 'Pitch & Docs',
};

export function SkillModal({ skill, onClose }: { skill: Skill; onClose: () => void }) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => { document.removeEventListener('keydown', onKey); document.body.style.overflow = ''; };
  }, [onClose]);

  const copy = async () => {
    await navigator.clipboard.writeText(skill.command);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      className="modal-backdrop fixed inset-0 z-50 flex items-end sm:items-center justify-center p-4"
      style={{ background: 'rgba(13,13,13,0.5)' }}
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div
        className="modal-panel w-full sm:max-w-lg overflow-hidden"
        style={{ background: 'var(--bg)', borderRadius: 16, border: '1px solid var(--border)' }}
      >
        {/* Header */}
        <div className="flex items-start justify-between p-6 pb-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-wide mb-2" style={{ color: 'var(--fg-muted)' }}>
              {CATEGORY_LABELS[skill.category]}
            </p>
            <h2 style={{ fontSize: 22, fontWeight: 400, color: 'var(--fg)', lineHeight: 1.3 }}>
              {skill.title}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full transition-colors flex-shrink-0 ml-4"
            style={{ color: 'var(--fg-muted)' }}
            onMouseEnter={(e) => (e.currentTarget.style.background = 'var(--surface)')}
            onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent')}
          >
            <X size={16} />
          </button>
        </div>

        {/* Body */}
        <div className="px-6 pb-5 space-y-5">
          <p style={{ fontSize: 15, color: 'var(--fg-muted)', lineHeight: 1.65 }}>
            {skill.longDescription}
          </p>

          <div>
            <p className="text-xs font-bold uppercase tracking-wide mb-3" style={{ color: 'var(--fg-muted)' }}>
              When to use
            </p>
            <ul className="space-y-2">
              {skill.useCases.map((uc, i) => (
                <li key={i} className="flex items-start gap-2.5" style={{ fontSize: 14, color: 'var(--fg)' }}>
                  <span style={{ color: 'var(--fg-faint)', marginTop: 2, flexShrink: 0 }}>—</span>
                  {uc}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 pb-6">
          <div
            className="flex items-center gap-3 p-3 rounded-xl"
            style={{ background: 'var(--surface)' }}
          >
            <div className="flex-1 min-w-0">
              <p className="text-xs mb-0.5" style={{ color: 'var(--fg-faint)' }}>
                Paste into Claude Code or Claude.ai
              </p>
              <span className="command-mono font-semibold" style={{ color: 'var(--fg)' }}>
                {skill.command}
              </span>
            </div>
            <button
              onClick={copy}
              className="flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium transition-colors flex-shrink-0 text-white"
              style={{ background: copied ? '#16a34a' : 'var(--fg)' }}
            >
              {copied ? <><Check size={13} /> Copied</> : <><Copy size={13} /> Copy</>}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
