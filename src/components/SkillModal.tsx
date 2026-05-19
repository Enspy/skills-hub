'use client';

import { useEffect, useState } from 'react';
import { X, Copy, Check } from 'lucide-react';
import { Skill } from '@/data/skills';

const CATEGORY_LABELS: Record<string, string> = {
  content: 'Content & Copy',
  outreach: 'Outreach',
  pmm: 'PMM',
  sales: 'Sales & GTM',
  strategy: 'Strategy',
  pitch: 'Pitch & Docs',
};

export function SkillModal({ skill, onClose }: { skill: Skill; onClose: () => void }) {
  const [copied, setCopied] = useState(false);
  const [promptContent, setPromptContent] = useState<string>('');

  useEffect(() => {
    fetch(`/skills/${skill.id}/SKILL.md`)
      .then((r) => r.text())
      .then(setPromptContent)
      .catch(() => {});
  }, [skill.id]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => { document.removeEventListener('keydown', onKey); document.body.style.overflow = ''; };
  }, [onClose]);

  const copyPrompt = async () => {
    if (!promptContent) return;
    await navigator.clipboard.writeText(promptContent);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };


  return (
    <div
      className="modal-backdrop fixed inset-0 z-50 flex items-end sm:items-center justify-center p-4"
      style={{ background: 'rgba(13,13,13,0.5)' }}
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div
        className="modal-panel w-full sm:max-w-lg overflow-hidden"
        style={{ background: 'var(--card-bg)', borderRadius: 20, border: '1px solid var(--border)', boxShadow: '0 20px 60px rgba(0,0,0,0.18)' }}
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
        <div className="px-6 pb-6" style={{ borderTop: '1px solid var(--border)', paddingTop: 20 }}>

          {/* Prompt preview */}
          <div
            className="relative mb-4 rounded-xl overflow-hidden"
            style={{ background: 'var(--surface)' }}
          >
            <pre
              style={{
                fontSize: 11,
                lineHeight: 1.6,
                color: 'var(--fg-muted)',
                fontFamily: "'SF Mono', 'Fira Code', ui-monospace, monospace",
                padding: '12px 14px',
                margin: 0,
                maxHeight: 110,
                overflow: 'hidden',
                whiteSpace: 'pre-wrap',
                wordBreak: 'break-word',
              }}
            >
              {promptContent || 'Loading…'}
            </pre>
            <div
              style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                height: 56,
                background: 'linear-gradient(to bottom, transparent, var(--surface))',
                pointerEvents: 'none',
              }}
            />
          </div>

          {/* Copy button */}
          <button
            onClick={copyPrompt}
            disabled={!promptContent}
            className="w-full flex items-center justify-center gap-2 py-3 rounded-full text-sm font-medium transition-colors text-white mb-3"
            style={{ background: copied ? '#16a34a' : 'var(--accent)', opacity: promptContent ? 1 : 0.5 }}
          >
            {copied
              ? <><Check size={14} /> Copied</>
              : <><Copy size={14} /> Copy prompt</>}
          </button>

          {/* Save path + command */}
          <p className="text-center text-xs leading-relaxed" style={{ color: 'var(--fg-faint)' }}>
            Save to{' '}
            <code style={{ fontFamily: "'SF Mono', ui-monospace, monospace" }}>
              ~/.claude/skills/{skill.id}/SKILL.md
            </code>
            {' '}then use{' '}
            <code style={{ fontFamily: "'SF Mono', ui-monospace, monospace" }}>
              {skill.command}
            </code>
            {' '}in Claude.
          </p>
        </div>
      </div>
    </div>
  );
}
