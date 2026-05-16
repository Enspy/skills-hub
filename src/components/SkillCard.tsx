'use client';

import { Skill } from '@/data/skills';

const CATEGORY_LABELS: Record<string, string> = {
  content: 'Content & Copy',
  sales: 'Sales & GTM',
  strategy: 'Strategy',
  pitch: 'Pitch & Docs',
};

export function SkillCard({ skill, onClick }: { skill: Skill; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="skill-card w-full text-left p-6 focus:outline-none"
    >
      <p
        className="text-xs font-bold mb-3 uppercase tracking-wide"
        style={{ color: 'var(--fg-muted)' }}
      >
        {CATEGORY_LABELS[skill.category]}
      </p>

      <h3
        className="mb-2 leading-snug"
        style={{ fontSize: 17, fontWeight: 400, color: 'var(--fg)' }}
      >
        {skill.title}
      </h3>

      <p
        className="mb-5 line-clamp-2 leading-relaxed"
        style={{ fontSize: 14, color: 'var(--fg-muted)' }}
      >
        {skill.description}
      </p>

      <span
        className="command-mono inline-block px-2.5 py-1 rounded-full"
        style={{ background: 'var(--surface)', color: 'var(--fg-muted)' }}
      >
        {skill.command}
      </span>
    </button>
  );
}
