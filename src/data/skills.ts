export type Category = 'all' | 'content' | 'outreach' | 'pmm';

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
  { id: 'outreach', label: 'Outreach' },
  { id: 'pmm', label: 'PMM' },
];

export const SKILLS: Skill[] = [
  {
    id: 'linkedincopy',
    command: '/linkedincopy',
    title: 'LinkedIn Copy',
    description: 'Write tighter, cleaner LinkedIn posts that actually land. Good for product launches, partnership announcements, thought leadership, and executive milestones.',
    longDescription: 'Templates for five post types, each with a tone guide, covering product launches, feature announcements, partnerships, thought leadership, and executive milestones. The output is precise and professional, with no emojis, no casual openers, and no filler.',
    category: 'content',
    keywords: ['linkedin', 'post', 'social', 'announcement', 'partnership', 'thought leadership', 'executive', 'product launch', 'feature'],
    useCases: [
      'Announcing a new product or feature',
      'Writing a partnership announcement',
      'Drafting a thought leadership post',
      'Executive milestone or company update',
    ],
  },
  {
    id: 'blogcopy',
    command: '/blogcopy',
    title: 'Blog Copy',
    description: 'Write and structure blog posts that read like they came from a strong editorial team. Good for product launches, case studies, SEO articles, and thought leadership.',
    longDescription: 'Structured around multiple title formats and narrative arcs, with built-in optimization for AI search. Produces clean, well-structured posts with strong hooks, clear takeaways, and no filler.',
    category: 'content',
    keywords: ['blog', 'article', 'post', 'seo', 'geo', 'case study', 'feature', 'product launch', 'thought leadership', 'write'],
    useCases: [
      'Writing a product launch blog post',
      'Case study on a customer or partner',
      'SEO article on a topic in your industry',
      'Thought leadership piece for your audience',
    ],
  },
  {
    id: 'competitive',
    command: '/competitive',
    title: 'Competitive Analysis',
    description: 'Build a competitor comparison table for a sales deck slide. Covers research methodology, wedge-finding, table structure, and slide title.',
    longDescription: 'Finds the structural wedge — the architectural difference a competitor cannot fix — then builds a 5-row comparison table with strict cell pairing rules. Pulls from your company context file for positioning. Works for any company and any competitor.',
    category: 'pmm',
    keywords: ['competitive', 'comparison', 'competitor', 'battlecard', 'table', 'deck', 'slide', 'vs', 'versus', 'analysis'],
    useCases: [
      'Competitor comparison slide for a sales deck',
      'Battlecard for a specific competitor',
      'Finding the structural wedge against a new entrant',
      'Updating a comparison table when a competitor launches something new',
    ],
  },
  {
    id: 'pressrelease',
    command: '/pressrelease',
    title: 'Press Release',
    description: 'Write press releases and media pitches. Good for product launches, partnership announcements, chain expansions, executive hires, and newsjacking pitches.',
    longDescription: 'Covers five release types plus executive thought leadership pitches. AP style throughout, institutional register, no enthusiasm language in quotes. Researched across Stripe, Anthropic, Modern Treasury, Clearwater Analytics, Chainalysis, ComplyAdvantage, and Fireblocks.',
    category: 'content',
    keywords: ['press release', 'pr', 'media', 'announcement', 'launch', 'partnership', 'newsjacking', 'wire', 'journalist'],
    useCases: [
      'Product launch press release',
      'Partnership or chain expansion announcement',
      'Executive hire announcement',
      'Newsjacking pitch to a journalist',
    ],
  },
  {
    id: 'linkedinoutreach',
    command: '/linkedinoutreach',
    title: 'LinkedIn Outreach',
    description: 'Write short, direct LinkedIn connection notes and InMail messages. Tailored by vertical — payments, treasury, DeFi, payroll, or chain partnerships.',
    longDescription: 'Built from real outreach patterns across 17 companies. Two opener types (fan opener vs. role-spotted), value prop tailored to their vertical, always closes with "Would be good to connect." — never suggests a call. Pulls from your company context file for positioning language.',
    category: 'outreach',
    keywords: ['linkedin', 'outreach', 'connection', 'inmail', 'cold message', 'prospecting', 'bd', 'sales'],
    useCases: [
      'Connection note to a fintech or payments operator',
      'Outreach to a chain ecosystem or BD lead',
      'InMail to an institutional DeFi or treasury contact',
      'Cold message to a payroll or settlement company',
    ],
  },
  {
    id: 'launchvideo',
    command: '/launchvideo',
    title: 'Launch Video',
    description: 'Create first drafts of storyboards for product launch videos.',
    longDescription: 'Generates scene-by-scene storyboards for product launch videos. Covers title cards, UI demo sequences, feature highlights, and closing CTAs. Produces structured drafts you can hand directly to a video editor or motion designer.',
    category: 'content',
    keywords: ['video', 'storyboard', 'launch', 'script', 'scene', 'demo', 'product', 'animation'],
    useCases: [
      'First draft storyboard for a product launch video',
      'Scene map for a feature announcement',
      'Script structure for a demo walkthrough',
      'Title card and CTA copy for a launch video',
    ],
  },
  {
    id: 'tweetcopy',
    command: '/tweetcopy',
    title: 'X / Twitter Copy',
    description: 'Write tighter, cleaner, more compelling tweet copy. Good for product announcements, launch threads, partnerships, and thought leadership.',
    longDescription: 'Covers single posts and threads, with templates for announcements, partnerships, and thread-style thought leadership. High-signal copy that reads like a real person wrote it, with no emojis and no filler.',
    category: 'content',
    keywords: ['twitter', 'tweet', 'x', 'thread', 'social', 'announcement', 'short form', 'post'],
    useCases: [
      'Launch thread for a new product or feature',
      'Partnership announcement',
      'Thought leadership thread on an industry topic',
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
