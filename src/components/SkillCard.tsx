'use client';

import { Skill } from '@/data/skills';

const CATEGORY_COLORS: Record<string, { bg: string; text: string; dot: string }> = {
  content: { bg: 'bg-violet-50', text: 'text-violet-600', dot: 'bg-violet-400' },
  sales: { bg: 'bg-emerald-50', text: 'text-emerald-600', dot: 'bg-emerald-400' },
  strategy: { bg: 'bg-amber-50', text: 'text-amber-600', dot: 'bg-amber-400' },
  pitch: { bg: 'bg-blue-50', text: 'text-blue-600', dot: 'bg-blue-400' },
};

const CATEGORY_LABELS: Record<string, string> = {
  content: 'Content & Copy',
  sales: 'Sales & GTM',
  strategy: 'Strategy',
  pitch: 'Pitch & Docs',
};

export function SkillCard({ skill, onClick }: { skill: Skill; onClick: () => void }) {
  const colors = CATEGORY_COLORS[skill.category];

  return (
    <button
      onClick={onClick}
      className="skill-card w-full text-left bg-white rounded-xl border border-gray-200 p-5 hover:border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
    >
      {/* Category badge */}
      <div className="mb-3">
        <span className={`inline-flex items-center gap-1.5 text-xs font-medium px-2 py-0.5 rounded-full ${colors.bg} ${colors.text}`}>
          <span className={`w-1.5 h-1.5 rounded-full ${colors.dot}`} />
          {CATEGORY_LABELS[skill.category]}
        </span>
      </div>

      {/* Title */}
      <h3 className="font-semibold text-gray-900 text-base mb-1.5 leading-snug">{skill.title}</h3>

      {/* Description */}
      <p className="text-sm text-gray-500 leading-relaxed line-clamp-2 mb-4">{skill.description}</p>

      {/* Command */}
      <div className="command-badge inline-block px-2 py-1 bg-gray-100 text-gray-600 rounded-md">
        {skill.command}
      </div>
    </button>
  );
}
