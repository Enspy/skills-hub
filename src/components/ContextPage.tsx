'use client';

import { useEffect, useState } from 'react';
import { Copy, Check } from 'lucide-react';

const SAVE_PATH = '~/.claude/boundless-context.md';
const CLAUDE_MD_LINE = '@boundless-context.md';

function InlineCopy({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <button
      onClick={copy}
      className="inline-flex items-center gap-1 px-2 py-0.5 rounded transition-colors"
      style={{
        background: copied ? '#16a34a' : 'var(--surface)',
        color: copied ? 'white' : 'var(--fg-muted)',
        fontSize: 11,
        fontFamily: "'SF Mono', ui-monospace, monospace",
      }}
    >
      {copied ? <Check size={10} /> : <Copy size={10} />}
      {text}
    </button>
  );
}

export function ContextPage() {
  const [content, setContent] = useState('');
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    fetch('/context/boundless-context.md')
      .then((r) => r.text())
      .then(setContent)
      .catch(() => {});
  }, []);

  const copyContent = async () => {
    if (!content) return;
    await navigator.clipboard.writeText(content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div>
      <p className="text-xs font-bold uppercase tracking-wide mb-2" style={{ color: 'var(--fg-muted)' }}>
        Company Context
      </p>
      <h2 className="mb-3" style={{ fontSize: 28, fontWeight: 400, color: 'var(--fg)', letterSpacing: '-0.01em' }}>
        Boundless Context File
      </h2>
      <p className="mb-8" style={{ fontSize: 15, color: 'var(--fg-muted)', lineHeight: 1.65, maxWidth: 520 }}>
        Copy this into your Claude setup and every skill will automatically know Boundless
        positioning, vocabulary, services, and tone. One-time setup.
      </p>

      {/* Preview */}
      <div
        className="relative mb-4 rounded-xl overflow-hidden"
        style={{ background: 'var(--surface)', border: '1px solid var(--border)' }}
      >
        <pre
          style={{
            fontSize: 11,
            lineHeight: 1.6,
            color: 'var(--fg-muted)',
            fontFamily: "'SF Mono', 'Fira Code', ui-monospace, monospace",
            padding: '14px 16px',
            margin: 0,
            maxHeight: 160,
            overflow: 'hidden',
            whiteSpace: 'pre-wrap',
            wordBreak: 'break-word',
          }}
        >
          {content || 'Loading…'}
        </pre>
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: 64,
            background: 'linear-gradient(to bottom, transparent, var(--surface))',
            pointerEvents: 'none',
          }}
        />
      </div>

      {/* Copy button */}
      <button
        onClick={copyContent}
        disabled={!content}
        className="w-full flex items-center justify-center gap-2 py-3 rounded-full text-sm font-medium transition-colors text-white mb-8"
        style={{ background: copied ? '#16a34a' : 'var(--fg)', opacity: content ? 1 : 0.5 }}
      >
        {copied ? <><Check size={14} /> Copied</> : <><Copy size={14} /> Copy context</>}
      </button>

      {/* Steps */}
      <div style={{ borderTop: '1px solid var(--border)', paddingTop: 24 }}>
        <p className="text-xs font-bold uppercase tracking-wide mb-5" style={{ color: 'var(--fg-muted)' }}>
          After copying
        </p>
        <ol className="space-y-4">
          <li className="flex items-start gap-3" style={{ fontSize: 14, color: 'var(--fg-muted)', lineHeight: 1.6 }}>
            <span style={{ color: 'var(--fg-faint)', flexShrink: 0, marginTop: 1 }}>1.</span>
            <span>
              Save the file to{' '}
              <InlineCopy text={SAVE_PATH} />
            </span>
          </li>
          <li className="flex items-start gap-3" style={{ fontSize: 14, color: 'var(--fg-muted)', lineHeight: 1.6 }}>
            <span style={{ color: 'var(--fg-faint)', flexShrink: 0, marginTop: 1 }}>2.</span>
            <span>
              Add{' '}
              <InlineCopy text={CLAUDE_MD_LINE} />
              {' '}to your{' '}
              <code style={{ fontSize: 12, fontFamily: "'SF Mono', ui-monospace, monospace" }}>~/.claude/CLAUDE.md</code>
              {' '}so Claude loads it in every session.
            </span>
          </li>
        </ol>
      </div>
    </div>
  );
}
