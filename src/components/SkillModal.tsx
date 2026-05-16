'use client';

import { useEffect, useState } from 'react';
import { X, Copy, Check, Terminal } from 'lucide-react';
import { Skill } from '@/data/skills';

const INSTALLED_KEY = 'skills-hub-installed';
const REPO_RAW = 'https://raw.githubusercontent.com/Enspy/skills-hub/main/public/skills';

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
  const [cmdCopied, setCmdCopied] = useState(false);
  const [installed, setInstalled] = useState<boolean | null>(null); // null = loading

  useEffect(() => {
    setInstalled(getInstalled().has(skill.id));
  }, [skill.id]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => { document.removeEventListener('keydown', onKey); document.body.style.overflow = ''; };
  }, [onClose]);

  const installCmd = `curl -fsSL ${REPO_RAW}/${skill.id}/SKILL.md --create-dirs -o ~/.claude/skills/${skill.id}/SKILL.md`;

  const copyInstallCmd = async () => {
    await navigator.clipboard.writeText(installCmd);
    setCmdCopied(true);
    setTimeout(() => setCmdCopied(false), 2000);
  };

  const handleMarkInstalled = () => {
    markInstalled(skill.id);
    setInstalled(true);
  };

  const copyCommand = async () => {
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
        {installed === null ? null : !installed ? (
          /* ── Install flow ── */
          <div className="px-6 pb-6 space-y-4">
            <div style={{ borderTop: '1px solid var(--border)', paddingTop: 20 }}>
              <div className="flex items-center gap-2 mb-1">
                <Terminal size={13} style={{ color: 'var(--fg-muted)' }} />
                <p className="text-xs font-bold uppercase tracking-wide" style={{ color: 'var(--fg-muted)' }}>
                  Install this skill first
                </p>
              </div>
              <p className="text-sm mb-3" style={{ color: 'var(--fg-muted)', lineHeight: 1.5 }}>
                Run this in your terminal to add {skill.command} to Claude Code. Only needed once.
              </p>

              {/* Curl command block */}
              <div
                className="flex items-center gap-3 p-3 rounded-xl mb-4"
                style={{ background: 'var(--surface)' }}
              >
                <code
                  className="flex-1 min-w-0 text-xs leading-relaxed"
                  style={{
                    fontFamily: "'SF Mono', 'Fira Code', ui-monospace, monospace",
                    color: 'var(--fg)',
                    wordBreak: 'break-all',
                  }}
                >
                  {installCmd}
                </code>
                <button
                  onClick={copyInstallCmd}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-colors flex-shrink-0 text-white"
                  style={{ background: cmdCopied ? '#16a34a' : 'var(--fg)' }}
                >
                  {cmdCopied ? <><Check size={11} /> Copied</> : <><Copy size={11} /> Copy</>}
                </button>
              </div>

              {/* Mark installed */}
              <button
                onClick={handleMarkInstalled}
                className="w-full py-2.5 rounded-full text-sm font-medium transition-colors"
                style={{ border: '1px solid var(--border)', color: 'var(--fg-muted)', background: 'transparent' }}
                onMouseEnter={(e) => (e.currentTarget.style.background = 'var(--surface)')}
                onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent')}
              >
                I&apos;ve installed it — show me the command
              </button>
            </div>
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
              onClick={() => { markInstalled(skill.id); setInstalled(false); }}
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
