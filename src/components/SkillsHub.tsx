'use client';

import { useState, useMemo } from 'react';
import { SKILLS, CATEGORIES, Category, Skill } from '@/data/skills';
import { SkillCard } from './SkillCard';
import { SkillModal } from './SkillModal';
import { ContextPage } from './ContextPage';

export function SkillsHub() {
  const [activeCategory, setActiveCategory] = useState<Category>('all');
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);
  const [showContext, setShowContext] = useState(false);

  const filteredSkills = useMemo(() => {
    if (activeCategory === 'all') return SKILLS;
    return SKILLS.filter((s) => s.category === activeCategory);
  }, [activeCategory]);

  return (
    <div className="min-h-screen" style={{ background: 'var(--bg)' }}>

      {/* ── Nav ── */}
      <nav
        className="nav-glass sticky top-0 z-40 flex items-center justify-between px-8"
        style={{ height: 60, borderBottom: '1px solid var(--border)' }}
      >
        <div className="flex items-center gap-2.5">
          <div
            className="w-6 h-6 rounded flex items-center justify-center flex-shrink-0"
            style={{ background: 'var(--fg)' }}
          >
            <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
              <path d="M7 1L13 4V10L7 13L1 10V4L7 1Z" stroke="white" strokeWidth="1.5" strokeLinejoin="round" />
            </svg>
          </div>
          <span className="text-sm font-semibold" style={{ color: 'var(--fg)' }}>Marketing Cheat Codes</span>
        </div>

        <div className="flex items-center gap-3">
          <a
            href="https://drive.google.com/file/d/1Rsm246fopwYalrHb0XzHlDcZZIBJsob1/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-medium px-4 py-1.5 rounded-full transition-colors"
            style={{
              border: '1px solid var(--border)',
              color: 'var(--fg-muted)',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = 'var(--surface)')}
            onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent')}
            title="Download our design system built for Claude"
          >
            Brand
          </a>
          <button
            onClick={() => setShowContext(!showContext)}
            className="text-xs font-medium px-4 py-1.5 rounded-full transition-colors"
            style={{
              border: '1px solid var(--border)',
              background: showContext ? 'var(--accent)' : 'transparent',
              color: showContext ? 'white' : 'var(--fg-muted)',
            }}
          >
            Company Context
          </button>
        </div>
      </nav>

      {showContext ? (
        <div className="max-w-2xl mx-auto px-6 py-12">
          <ContextPage />
        </div>
      ) : (
        <>
          {/* ── Hero ── */}
          <div className="text-center px-6" style={{ paddingTop: 80, paddingBottom: 48 }}>
            <h1
              style={{ fontSize: 56, fontWeight: 600, letterSpacing: '-0.025em', color: 'var(--fg)', lineHeight: 1.05, marginBottom: 16 }}
            >
              Marketing Cheat Codes
            </h1>
            <p style={{ fontSize: 17, color: 'var(--fg-muted)', lineHeight: 1.6 }}>
              Skills curated by Santi to help accelerate marketing workflows.
            </p>
          </div>

          {/* ── Content ── */}
          <div className="max-w-5xl mx-auto px-6 pb-16">

            {/* Category filters */}
            <div className="flex gap-2 mb-8 overflow-x-auto pb-1">
              {CATEGORIES.map((cat) => {
                const active = activeCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className="flex-shrink-0 text-sm font-medium px-4 py-2 rounded-full transition-colors"
                    style={{
                      background: active ? 'var(--accent)' : 'transparent',
                      color: active ? 'white' : 'var(--fg-muted)',
                      border: active ? '1px solid var(--accent)' : '1px solid var(--border)',
                    }}
                  >
                    {cat.label}
                  </button>
                );
              })}
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 cards-grid">
              {filteredSkills.map((skill) => (
                <SkillCard key={skill.id} skill={skill} onClick={() => setSelectedSkill(skill)} />
              ))}
            </div>
          </div>

          {/* Footer */}
          <div
            className="text-center py-8 text-xs"
            style={{ borderTop: '1px solid var(--border)', color: 'var(--fg-faint)' }}
          >
            Copy a prompt and save it to your Claude skills folder to get started.
          </div>
        </>
      )}

      {selectedSkill && (
        <SkillModal skill={selectedSkill} onClose={() => setSelectedSkill(null)} />
      )}
    </div>
  );
}
