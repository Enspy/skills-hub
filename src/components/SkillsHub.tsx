'use client';

import { useState, useMemo } from 'react';
import { Search, X } from 'lucide-react';
import { SKILLS, CATEGORIES, Category, scoreSkill, Skill } from '@/data/skills';
import { SkillCard } from './SkillCard';
import { SkillModal } from './SkillModal';
import { ContextPage } from './ContextPage';

export function SkillsHub() {
  const [query, setQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<Category>('all');
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);
  const [showContext, setShowContext] = useState(false);

  const filteredSkills = useMemo(() => {
    let skills = SKILLS;

    if (activeCategory !== 'all') {
      skills = skills.filter((s) => s.category === activeCategory);
    }

    if (query.trim()) {
      const scored = skills
        .map((s) => ({ skill: s, score: scoreSkill(s, query) }))
        .filter((x) => x.score > 0)
        .sort((a, b) => b.score - a.score);
      return scored.map((x) => x.skill);
    }

    return skills;
  }, [query, activeCategory]);

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <div
        className="relative px-6 pt-16 pb-14"
        style={{
          background: 'linear-gradient(160deg, #0b1221 0%, #0f1e3d 50%, #0b1221 100%)',
        }}
      >
        {/* Subtle grid overlay */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)',
            backgroundSize: '28px 28px',
          }}
        />

        <div className="relative max-w-3xl mx-auto">
          {/* Wordmark */}
          <div className="flex items-center gap-3 mb-10">
            <div className="w-7 h-7 rounded-md bg-blue-500 flex items-center justify-center">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M7 1L13 4V10L7 13L1 10V4L7 1Z" stroke="white" strokeWidth="1.5" strokeLinejoin="round"/>
              </svg>
            </div>
            <span className="text-white font-semibold text-sm tracking-wide">Boundless Skills</span>
          </div>

          {/* Headline */}
          <h1 className="text-3xl font-bold text-white mb-2 leading-tight">
            What are you working on?
          </h1>
          <p className="text-blue-200 text-base mb-8 opacity-80">
            Describe your task and find the right skill to run in Claude.
          </p>

          {/* Search bar */}
          <div className="search-glow relative bg-white rounded-xl overflow-hidden shadow-xl transition-all">
            <div className="flex items-center">
              <div className="pl-4 pr-2 py-3.5 flex-shrink-0">
                <Search size={18} className="text-gray-400" />
              </div>
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="e.g. write a LinkedIn post about our Stellar partnership..."
                className="flex-1 py-3.5 pr-4 text-gray-900 text-base placeholder:text-gray-400 focus:outline-none bg-transparent"
                autoFocus
              />
              {query && (
                <button
                  onClick={() => setQuery('')}
                  className="pr-4 flex-shrink-0 text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <X size={16} />
                </button>
              )}
            </div>
          </div>

          {/* Quick prompts */}
          {!query && (
            <div className="flex flex-wrap gap-2 mt-4">
              {[
                'LinkedIn post for a partnership',
                'blog post on stablecoin compliance',
                'tweet thread for a product launch',
              ].map((prompt) => (
                <button
                  key={prompt}
                  onClick={() => setQuery(prompt)}
                  className="text-xs text-blue-200 border border-blue-800 rounded-full px-3 py-1.5 hover:bg-blue-900 hover:border-blue-700 transition-colors"
                >
                  {prompt}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Content area */}
      <div className="max-w-6xl mx-auto px-6 py-8">
        {/* Category tabs */}
        <div className="flex gap-2 mb-8 overflow-x-auto pb-1">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => { setActiveCategory(cat.id); setShowContext(false); }}
              className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                !showContext && activeCategory === cat.id
                  ? 'bg-gray-900 text-white'
                  : 'bg-white text-gray-600 border border-gray-200 hover:border-gray-300 hover:text-gray-900'
              }`}
            >
              {cat.label}
            </button>
          ))}
          <button
            onClick={() => setShowContext(true)}
            className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              showContext
                ? 'bg-gray-900 text-white'
                : 'bg-white text-gray-600 border border-gray-200 hover:border-gray-300 hover:text-gray-900'
            }`}
          >
            Marketing Context
          </button>
        </div>

        {/* Context page or skills grid */}
        {showContext ? (
          <ContextPage />
        ) : (
          <>
            {query.trim() && (
              <div className="mb-5">
                <p className="text-sm text-gray-500">
                  {filteredSkills.length === 0 ? (
                    'No skills matched. Try different keywords.'
                  ) : (
                    <>
                      <span className="font-medium text-gray-900">{filteredSkills.length} skill{filteredSkills.length !== 1 ? 's' : ''}</span>
                      {' '}matched for <span className="text-gray-900 italic">&ldquo;{query}&rdquo;</span>
                    </>
                  )}
                </p>
              </div>
            )}

            {filteredSkills.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {filteredSkills.map((skill) => (
                  <SkillCard
                    key={skill.id}
                    skill={skill}
                    onClick={() => setSelectedSkill(skill)}
                  />
                ))}
              </div>
            ) : query.trim() ? (
              <div className="text-center py-16">
                <p className="text-gray-400 text-sm">
                  No skills matched. Try searching for a task type like &ldquo;blog&rdquo; or &ldquo;tweet&rdquo;.
                </p>
                <button
                  onClick={() => setQuery('')}
                  className="mt-3 text-sm text-blue-600 hover:underline"
                >
                  Clear search
                </button>
              </div>
            ) : null}
          </>
        )}
      </div>

      {/* Footer */}
      <div className="text-center py-8 text-xs text-gray-400 border-t border-gray-200 mt-4">
        Copy a command and paste it into Claude Code or Claude.ai to get started.
      </div>

      {/* Modal */}
      {selectedSkill && (
        <SkillModal skill={selectedSkill} onClose={() => setSelectedSkill(null)} />
      )}
    </div>
  );
}
