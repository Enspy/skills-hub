export type Category = 'all' | 'content';

export interface Skill {
  id: string;
  command: string;
  title: string;
  description: string;
  longDescription: string;
  category: Exclude<Category, 'all'>;
  keywords: string[];
  useCases: string[];
}

export const CATEGORIES: { id: Category; label: string }[] = [
  { id: 'all', label: 'All Skills' },
  { id: 'content', label: 'Content & Copy' },
];

export const SKILLS: Skill[] = [
  {
    id: 'linkedincopy',
    command: '/linkedincopy',
    title: 'LinkedIn Copy',
    description: 'Write tighter, cleaner LinkedIn posts that actually land. Good for product launches, partnership announcements, thought leadership, and executive milestones.',
    longDescription: 'Covers five post types — product launch, feature announcement, partnership, thought leadership, and executive milestone — each with a template and tone guide. Forces the right register: no emojis, no casual openers, no hype language.',
    category: 'content',
    keywords: ['linkedin', 'post', 'social', 'announcement', 'partnership', 'thought leadership', 'executive', 'product launch', 'feature'],
    useCases: [
      'Writing a product launch post for Shield',
      'Announcing a new chain partner',
      'Drafting a thought leadership post on stablecoin compliance',
      'Executive milestone or company update',
    ],
  },
  {
    id: 'blogcopy',
    command: '/blogcopy',
    title: 'Blog Copy',
    description: 'Write and structure blog posts that read like they came from a strong editorial team. Good for product launches, case studies, SEO articles, and thought leadership.',
    longDescription: 'Covers eight title formats, six narrative arcs, and GEO optimization techniques for AI search systems. Forces clean structure, strong hooks, and the right register — no jargon, no filler.',
    category: 'content',
    keywords: ['blog', 'article', 'post', 'seo', 'geo', 'case study', 'feature', 'product launch', 'thought leadership', 'write'],
    useCases: [
      'Writing a product launch blog post',
      'Case study on a design partner',
      'SEO article on stablecoin compliance',
      'Thought leadership piece on onchain finance',
    ],
  },
  {
    id: 'tweetcopy',
    command: '/tweetcopy',
    title: 'X / Twitter Copy',
    description: 'Write tighter, cleaner, more compelling tweet copy. Good for product announcements, launch threads, partnerships, and thought leadership.',
    longDescription: 'Covers single posts and threads. Short-form, punchy, high-signal — no emojis, no crypto slang, no hype language. Institutional register that still sounds like a real human wrote it.',
    category: 'content',
    keywords: ['twitter', 'tweet', 'x', 'thread', 'social', 'announcement', 'short form', 'post'],
    useCases: [
      'Launch thread for a new Shield feature',
      'Partnership announcement tweet',
      'Thought leadership thread on stablecoin regulation',
      'Single-tweet announcement',
    ],
  },
];

export function scoreSkill(skill: Skill, query: string): number {
  if (!query.trim()) return 0;
  const q = query.toLowerCase();
  const terms = q.split(/\s+/).filter((t) => t.length > 1);
  let score = 0;

  for (const term of terms) {
    if (skill.command.toLowerCase().includes(term)) score += 12;
    if (skill.title.toLowerCase().includes(term)) score += 10;
    if (skill.keywords.some((k) => k.toLowerCase().includes(term))) score += 6;
    if (skill.description.toLowerCase().includes(term)) score += 4;
    if (skill.useCases.some((u) => u.toLowerCase().includes(term))) score += 3;
    if (skill.longDescription.toLowerCase().includes(term)) score += 2;
    if (skill.category.toLowerCase().includes(term)) score += 2;
  }

  return score;
}
