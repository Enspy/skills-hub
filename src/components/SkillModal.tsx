'use client';

import { useEffect, useState } from 'react';
import { X, Copy, Check } from 'lucide-react';
import { Skill } from '@/data/skills';

const INSTALLED_KEY = 'skills-hub-installed';

const CATEGORY_LABELS: Record<string, string> = {
  content: 'Content & Copy',
  sales: 'Sales & GTM',
  strategy: 'Strategy',
  pitch: 'Pitch & Docs',
};

function getInstalled(): Set<string> {
  try {
    const raw = localStorage.getItem(INSTALLED_KEY);
    return new Set(raw ? JSON.parse(raw) : []);
  } catch {
    return new Set();
  }
}

function markInstalled(id: string) {
  const installed = getInstalled();
  installed.add(id);
  localStorage.setItem(INSTALLED_KEY, JSON.stringify([...installed]));
}

export function SkillModal({ skill, onClose }: { skill: Skill; onClose: () => void }) {
  const [copied, setCopied] = useState(false);
  const [promptCopied, setPromptCopied] = useState(false);
  const [installed, setInstalled] = useState<boolean | null>(null);
  const [promptContent, setPromptContent] = useState<string>('');

  useEffect(() => {
    setInstalled(getInstalled().has(skill.id));
  }, [skill.id]);

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
    setPromptCopied(true);
    setTimeout(() => setPromptCopied(false), 2000);
  };

  const copyCommand = async () => {
    await navigator.clipboard.writeText(skill.command);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleMarkInstalled = () => {
    markInstalled(skill.id);
    setInstalled(true);
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
        {installed === null ? null : !installed ? (
          /* ── Install flow ── */
          <div className="px-6 pb-6" style={{ borderTop: '1px solid var(--border)', paddingTop: 20 }}>
            <p className="text-xs font-bold uppercase tracking-wide mb-1" style={{ color: 'var(--fg-muted)' }}>
              First time? Install this skill
            </p>
            <p className="text-sm mb-4" style={{ color: 'var(--fg-muted)', lineHeight: 1.5 }}>
              Copy the full prompt below, then save it as a new file at{' '}
              <code
                className="px-1.5 py-0.5 rounded"
                style={{ background: 'var(--surface)', fontSize: 12, fontFamily: "'SF Mono', ui-monospace, monospace" }}
              >
                ~/.claude/skills/{skill.id}/SKILL.md
              </code>
            </p>

            {/* Prompt preview */}
            <div
              className="relative mb-3 rounded-xl overflow-hidden"
              style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}
            >
              <pre
                style={{
                  fontSize: 11,
                  lineHeight: 1.6,
                  color: 'var(--fg-muted)',
                  fontFamily: "'SF Mono', 'Fira Code', ui-monospace, monospace",
                  padding: '12px 14px',
                  margin: 0,
                  maxHeight: 120,
                  overflow: 'hidden',
                  whiteSpace: 'pre-wrap',
                  wordBreak: 'break-word',
                }}
              >
                {promptContent || 'Loading…'}
              </pre>
              {/* Fade out */}
              <div
                style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: 60,
                  background: 'linear-gradient(to bottom, transparent, var(--surface))',
                  pointerEvents: 'none',
                }}
              />
            </div>

            {/* Copy full prompt */}
            <button
              onClick={copyPrompt}
              disabled={!promptContent}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-full text-sm font-medium transition-colors mb-3 text-white"
              style={{ background: promptCopied ? '#16a34a' : 'var(--fg)', opacity: promptContent ? 1 : 0.4 }}
            >
              {promptCopied
                ? <><Check size={14} /> Copied — now save the file</>
                : <><Copy size={14} /> Copy full prompt ({promptContent ? `${promptContent.split('\n').length} lines` : '…'})</>}
            </button>

            <button
              onClick={handleMarkInstalled}
              className="w-full py-2 text-sm transition-colors"
              style={{ color: 'var(--fg-muted)' }}
            >
              I&apos;ve saved the file — show me the command →
            </button>
          </div>
        ) : (
          /* ── Use flow ── */
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
                onClick={copyCommand}
                className="flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium transition-colors flex-shrink-0 text-white"
                style={{ background: copied ? '#16a34a' : 'var(--fg)' }}
              >
                {copied ? <><Check size={13} /> Copied</> : <><Copy size={13} /> Copy</>}
              </button>
            </div>
            <button
              onClick={() => setInstalled(false)}
              className="mt-3 text-xs"
              style={{ color: 'var(--fg-faint)' }}
            >
              Not installed yet?
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
