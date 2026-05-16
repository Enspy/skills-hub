'use client';

import { useState, useMemo, useRef, useEffect } from 'react';
import { Search } from 'lucide-react';
import { SKILLS, CATEGORIES, Category, scoreSkill, Skill } from '@/data/skills';
import { SkillCard } from './SkillCard';
import { SkillModal } from './SkillModal';
import { ContextPage } from './ContextPage';

const QUICK_PROMPTS = [
  'LinkedIn post for a partnership',
  'blog post on stablecoin compliance',
  'tweet thread for a product launch',
];

export function SkillsHub() {
  const [query, setQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<Category>('all');
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);
  const [showContext, setShowContext] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => { inputRef.current?.focus(); }, []);

  const filteredSkills = useMemo(() => {
    let skills = SKILLS;
    if (activeCategory !== 'all') {
      skills = skills.filter((s) => s.category === activeCategory);
    }
    if (query.trim()) {
      return skills
        .map((s) => ({ skill: s, score: scoreSkill(s, query) }))
        .filter((x) => x.score > 0)
        .sort((a, b) => b.score - a.score)
        .map((x) => x.skill);
    }
    return skills;
  }, [query, activeCategory]);

  return (
    <div className="min-h-screen" style={{ background: 'var(--bg)' }}>

      {/* ── Nav ── */}
      <nav
        className="sticky top-0 z-40 flex items-center justify-between px-8"
        style={{ height: 60, background: 'var(--bg)', borderBottom: '1px solid var(--border)' }}
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

        <button
          onClick={() => setShowContext(!showContext)}
          className="text-xs font-medium px-4 py-1.5 rounded-full transition-colors"
          style={{
            border: '1px solid var(--border)',
            background: showContext ? 'var(--fg)' : 'transparent',
            color: showContext ? 'white' : 'var(--fg-muted)',
          }}
        >
          Company Context
        </button>
      </nav>

      {showContext ? (
        <div className="max-w-2xl mx-auto px-6 py-12">
          <ContextPage />
        </div>
      ) : (
        <>
          {/* ── Hero ── */}
          <div className="text-center px-6" style={{ paddingTop: 96, paddingBottom: 56 }}>
            <h1
              className="font-bold leading-tight mb-4"
              style={{ fontSize: 56, letterSpacing: '-0.02em', color: 'var(--fg)', lineHeight: 1.05 }}
            >
              What are you working on?
            </h1>
            <p className="mb-10 mx-auto" style={{ fontSize: 17, color: 'var(--fg-muted)', maxWidth: 480, lineHeight: 1.6 }}>
              Describe your task and find the right skill to run in Claude.
            </p>

            {/* Search input */}
            <div className="mx-auto relative" style={{ maxWidth: 640 }}>
              <div
                className="flex items-center"
                style={{
                  border: '1px solid var(--border)',
                  borderRadius: 16,
                  padding: '14px 56px 14px 20px',
                  background: 'var(--bg)',
                }}
              >
                <Search size={16} style={{ color: 'var(--fg-faint)', flexShrink: 0, marginRight: 10 }} />
                <input
                  ref={inputRef}
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="e.g. LinkedIn post about our Stellar partnership..."
                  style={{
                    flex: 1,
                    border: 'none',
                    outline: 'none',
                    fontSize: 16,
                    color: 'var(--fg)',
                    background: 'transparent',
                  }}
                />
              </div>
              {query && (
                <button
                  onClick={() => setQuery('')}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full flex items-center justify-center text-white text-sm font-medium transition-opacity"
                  style={{ background: 'var(--fg)' }}
                >
                  ↑
                </button>
              )}
            </div>

            {/* Quick prompt pills */}
            {!query && (
              <div className="flex flex-wrap gap-2 justify-center mt-5">
                {QUICK_PROMPTS.map((p) => (
                  <button
                    key={p}
                    onClick={() => setQuery(p)}
                    className="text-sm rounded-full px-4 py-2 transition-colors"
                    style={{
                      border: '1px solid var(--border)',
                      color: 'var(--fg-muted)',
                      background: 'var(--bg)',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.background = 'var(--surface)')}
                    onMouseLeave={(e) => (e.currentTarget.style.background = 'var(--bg)')}
                  >
                    {p}
                  </button>
                ))}
              </div>
            )}
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
                      background: active ? 'var(--fg)' : 'transparent',
                      color: active ? 'white' : 'var(--fg-muted)',
                      border: active ? '1px solid var(--fg)' : '1px solid var(--border)',
                    }}
                  >
                    {cat.label}
                  </button>
                );
              })}
            </div>

            {/* Match count */}
            {query.trim() && (
              <p className="text-sm mb-5" style={{ color: 'var(--fg-muted)' }}>
                {filteredSkills.length === 0
                  ? 'No skills matched.'
                  : <><span style={{ color: 'var(--fg)', fontWeight: 600 }}>{filteredSkills.length} skill{filteredSkills.length !== 1 ? 's' : ''}</span> matched</>}
              </p>
            )}

            {/* Grid */}
            {filteredSkills.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px" style={{ background: 'var(--border)' }}>
                {filteredSkills.map((skill) => (
                  <SkillCard key={skill.id} skill={skill} onClick={() => setSelectedSkill(skill)} />
                ))}
              </div>
            ) : query.trim() ? (
              <div className="text-center py-20">
                <p style={{ color: 'var(--fg-muted)', fontSize: 15 }}>No skills matched. Try &ldquo;blog&rdquo; or &ldquo;tweet&rdquo;.</p>
                <button
                  onClick={() => setQuery('')}
                  className="mt-3 text-sm underline"
                  style={{ color: 'var(--fg-muted)' }}
                >
                  Clear search
                </button>
              </div>
            ) : null}
          </div>

          {/* Footer */}
          <div
            className="text-center py-8 text-xs"
            style={{ borderTop: '1px solid var(--border)', color: 'var(--fg-faint)' }}
          >
            Copy a command and paste it into Claude Code or Claude.ai to get started.
          </div>
        </>
      )}

      {selectedSkill && (
        <SkillModal skill={selectedSkill} onClose={() => setSelectedSkill(null)} />
      )}
    </div>
  );
}
