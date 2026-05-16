'use client';

import { useState } from 'react';
import { Copy, Check, Terminal, BookOpen, RefreshCw } from 'lucide-react';

const CONTEXT_URL =
  'https://raw.githubusercontent.com/Enspy/skills-hub/main/context/boundless-context.md';

const INSTALL_CMD = `curl -s ${CONTEXT_URL} -o ~/.claude/boundless-context.md`;

const CLAUDE_MD_LINE = '@boundless-context.md';

function CopyButton({ text, label }: { text: string; label: string }) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={copy}
      className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all flex-shrink-0 ${
        copied
          ? 'bg-emerald-500 text-white'
          : 'bg-gray-900 text-white hover:bg-gray-700'
      }`}
    >
      {copied ? <Check size={12} /> : <Copy size={12} />}
      {copied ? 'Copied' : label}
    </button>
  );
}

function Step({
  number,
  title,
  children,
}: {
  number: number;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex gap-4">
      <div className="flex-shrink-0 w-7 h-7 rounded-full bg-gray-900 text-white text-xs font-semibold flex items-center justify-center mt-0.5">
        {number}
      </div>
      <div className="flex-1 min-w-0">
        <p className="font-semibold text-gray-900 mb-2">{title}</p>
        {children}
      </div>
    </div>
  );
}

function CodeBlock({ code, copyLabel }: { code: string; copyLabel: string }) {
  return (
    <div className="flex items-center gap-3 bg-gray-950 rounded-lg px-4 py-3">
      <code className="flex-1 text-xs text-emerald-400 font-mono break-all">{code}</code>
      <CopyButton text={code} label={copyLabel} />
    </div>
  );
}

export function ContextPage() {
  return (
    <div className="max-w-2xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-3">
          <BookOpen size={16} className="text-gray-400" />
          <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">One-time setup</span>
        </div>
        <h2 className="text-xl font-bold text-gray-900 mb-2">Company Context</h2>
        <p className="text-gray-500 text-sm leading-relaxed">
          Skills work best when Claude knows Boundless — the positioning, vocabulary rules,
          services, and tone. Install this context file once and every skill will use it
          automatically.
        </p>
      </div>

      {/* Steps */}
      <div className="space-y-8">
        <Step number={1} title="Download the context file">
          <p className="text-sm text-gray-500 mb-3">
            Run this in your terminal. It saves the Boundless context file to your Claude
            global config folder.
          </p>
          <CodeBlock code={INSTALL_CMD} copyLabel="Copy command" />
        </Step>

        <Step number={2} title="Add it to your Claude config">
          <p className="text-sm text-gray-500 mb-3">
            Open <code className="text-xs bg-gray-100 px-1.5 py-0.5 rounded font-mono">~/.claude/CLAUDE.md</code> and
            add this line at the top. Claude will load the context automatically in every session.
          </p>
          <CodeBlock code={CLAUDE_MD_LINE} copyLabel="Copy line" />
          <p className="text-xs text-gray-400 mt-2">
            If you don&apos;t have a CLAUDE.md yet, create it at <code className="font-mono">~/.claude/CLAUDE.md</code> and add the line.
          </p>
        </Step>

        <Step number={3} title="Verify it's working">
          <p className="text-sm text-gray-500 mb-3">
            Open Claude Code and type this prompt. You should get a summary of Boundless
            positioning back.
          </p>
          <CodeBlock
            code="What do you know about Boundless positioning and vocabulary rules?"
            copyLabel="Copy prompt"
          />
        </Step>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-200 my-10" />

      {/* Update section */}
      <div className="bg-gray-50 rounded-xl border border-gray-200 p-5">
        <div className="flex items-start gap-3">
          <RefreshCw size={15} className="text-gray-400 mt-0.5 flex-shrink-0" />
          <div className="flex-1 min-w-0">
            <p className="font-semibold text-gray-900 text-sm mb-1">When messaging changes</p>
            <p className="text-sm text-gray-500 mb-3">
              When Boundless positioning or vocabulary is updated, re-run the same install
              command to pull the latest version.
            </p>
            <div className="flex items-center gap-3 bg-white rounded-lg border border-gray-200 px-4 py-3">
              <div className="flex items-center gap-2 flex-1 min-w-0">
                <Terminal size={12} className="text-gray-400 flex-shrink-0" />
                <code className="text-xs text-gray-600 font-mono truncate">{INSTALL_CMD}</code>
              </div>
              <CopyButton text={INSTALL_CMD} label="Copy" />
            </div>
          </div>
        </div>
      </div>

      {/* View raw link */}
      <div className="mt-6 text-center">
        <a
          href={CONTEXT_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-gray-400 hover:text-gray-600 transition-colors"
        >
          View context file on GitHub
        </a>
      </div>
    </div>
  );
}
