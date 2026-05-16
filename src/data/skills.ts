export type Category = 'all' | 'content' | 'sales' | 'strategy' | 'pitch';

export interface Skill {
  id: string;
  command: string;
  title: string;
  description: string;
  longDescription: string;
  category: Exclude<Category, 'all'>;
  keywords: string[];
  useCases: string[];
  featured?: boolean;
}

export const CATEGORIES: { id: Category; label: string }[] = [
  { id: 'all', label: 'All Skills' },
  { id: 'content', label: 'Content & Copy' },
  { id: 'sales', label: 'Sales & GTM' },
  { id: 'strategy', label: 'Strategy' },
  { id: 'pitch', label: 'Pitch & Docs' },
];

export const SKILLS: Skill[] = [
  // ── Content & Copy ──────────────────────────────────────────────
  {
    id: 'linkedincopy',
    command: '/linkedincopy',
    title: 'LinkedIn Copy',
    description: 'Write and edit LinkedIn posts for Boundless — product launches, partnerships, thought leadership, and executive milestone posts.',
    longDescription: 'Institutional register tuned to Clearwater Analytics and Anthropic, not crypto startup. Covers 5 post types with full templates. No emojis, no casual openers, no crypto slang.',
    category: 'content',
    keywords: ['linkedin', 'post', 'social', 'announcement', 'partnership', 'thought leadership', 'executive', 'product launch', 'feature'],
    useCases: [
      'Writing a product launch post for Shield',
      'Announcing a new chain partner',
      'Drafting a thought leadership post on stablecoin compliance',
      'Executive milestone or company update',
    ],
    featured: true,
  },
  {
    id: 'blogcopy',
    command: '/blogcopy',
    title: 'Blog Copy',
    description: 'Write and structure Boundless blog posts — product launches, case studies, feature announcements, thought leadership, and SEO/GEO posts.',
    longDescription: 'Research base from 9 companies (OpenAI, Anthropic, Stripe, Ramp, Mercury, Brex, ComplyAdvantage, Modern Treasury, SoFi). Covers 8 title formats, 6 narrative arcs, and GEO optimization techniques for AI search systems.',
    category: 'content',
    keywords: ['blog', 'article', 'post', 'seo', 'geo', 'case study', 'feature', 'product launch', 'thought leadership', 'write'],
    useCases: [
      'Writing a product launch blog post',
      'Case study on a design partner',
      'SEO article on stablecoin compliance',
      'Thought leadership piece on onchain finance',
    ],
    featured: true,
  },
  {
    id: 'tweetcopy',
    command: '/tweetcopy',
    title: 'X / Twitter Copy',
    description: 'Write X/Twitter posts and threads for Boundless — launch threads, feature announcements, partnership posts, and thought leadership.',
    longDescription: 'Short-form, punchy copy tuned for Twitter/X engagement. Covers single posts and threads. Institutional register maintained even in a casual medium.',
    category: 'content',
    keywords: ['twitter', 'tweet', 'x', 'thread', 'social', 'announcement', 'short form', 'post'],
    useCases: [
      'Launch thread for a new Shield feature',
      'Partnership announcement tweet',
      'Thought leadership thread on stablecoin regulation',
      'Single-tweet announcement',
    ],
  },
  {
    id: 'pressrelease',
    command: '/pressrelease',
    title: 'Press Release',
    description: 'Write press releases and media pitches for Boundless — product launches, partnerships, design partner wins, chain expansions, and executive hires.',
    longDescription: 'AP style. Research from 7 companies (Stripe, Anthropic, Modern Treasury, Clearwater, Chainalysis, ComplyAdvantage, Fireblocks). Covers 5 release types plus newsjacking pitch template. Boilerplate included.',
    category: 'content',
    keywords: ['press release', 'pr', 'media', 'announcement', 'launch', 'partnership', 'hire', 'executive', 'wire', 'newsroom', 'journalist'],
    useCases: [
      'Product launch press release',
      'Partnership announcement with a chain partner',
      'Design partner / customer win announcement',
      'Executive hire announcement',
      'Newsjacking pitch to a journalist',
    ],
    featured: true,
  },
  {
    id: 'launchvideo',
    command: '/launchvideo',
    title: 'Launch Video Script',
    description: 'Write and structure launch video scripts for Boundless — scene maps, title card copy, UI demo sequences, feature lists, and closing CTAs.',
    longDescription: 'Modeled on Anthropic/Claude launch videos (13M and 4.8M views). Covers major product launch, feature announcement, and chain expansion video types. Scene-by-scene output with copy decisions annotated.',
    category: 'content',
    keywords: ['video', 'launch', 'script', 'scene', 'demo', 'title card', 'ui', 'announcement', 'youtube', 'twitter video'],
    useCases: [
      'Shield product launch video',
      'Feature announcement short video',
      'Chain expansion announcement',
      'Demo video for a specific use case',
    ],
  },
  {
    id: 'webcopy',
    command: '/webcopy',
    title: 'Website Copy',
    description: 'Write and edit Boundless website copy — hero sections, value props, section headers, CTAs, and break sections.',
    longDescription: 'Follows strict Boundless copy length rules (2 sentences max for setup paragraphs, 1 sentence for hero sub-headlines). Covers homepage, service pages, and use case pages.',
    category: 'content',
    keywords: ['website', 'web', 'copy', 'hero', 'landing page', 'value prop', 'cta', 'homepage', 'section'],
    useCases: [
      'Homepage hero headline and sub-headline',
      'Service page value propositions',
      'Use case page structure and copy',
      'CTA button copy',
    ],
  },

  // ── Sales & GTM ─────────────────────────────────────────────────
  {
    id: 'outbound',
    command: '/outbound',
    title: 'Outbound Prospecting',
    description: 'Find qualified leads and draft personalized first messages. Two modes: daily prospecting (15 leads) or single-company outreach.',
    longDescription: 'Run /outbound daily for 15 new leads with personalized first messages. Run /outbound [company] to draft outreach for a specific company. Integrates with CRM files for context.',
    category: 'sales',
    keywords: ['outbound', 'prospecting', 'cold email', 'cold message', 'leads', 'linkedin outreach', 'first message', 'sales', 'gtm'],
    useCases: [
      'Finding 15 new qualified leads for today',
      'Writing a cold LinkedIn message to a CFO at a stablecoin company',
      'Drafting first outreach to a specific prospect',
      'Cold email to a chain partner contact',
    ],
    featured: true,
  },
  {
    id: 'crm-update',
    command: '/crm-update',
    title: 'CRM Update',
    description: 'Log a prospect conversation, update deal status, and capture key intelligence after a call or meeting.',
    longDescription: 'Triggered immediately after any prospect interaction. Captures what was said, what was learned, next steps, and updates the deal file.',
    category: 'sales',
    keywords: ['crm', 'log', 'update', 'call', 'meeting', 'deal', 'prospect', 'follow up', 'notes'],
    useCases: [
      'Logging notes after a discovery call',
      'Updating a deal after a coffee meeting',
      'Capturing intelligence after a demo',
      'Updating next steps after a proposal send',
    ],
  },
  {
    id: 'crm-research',
    command: '/crm-research',
    title: 'Prospect Research',
    description: 'Deep research on a company before a call or outreach — exec posts, recent press, partnerships, job postings.',
    longDescription: 'Reads existing prospect files first, then searches for current intelligence. Produces a 1-page brief. Run before generating any sales material for a prospect.',
    category: 'sales',
    keywords: ['research', 'prospect', 'company', 'intelligence', 'linkedin', 'news', 'prep', 'before call', 'background'],
    useCases: [
      'Researching a prospect before a first call',
      'Getting background on a company before outreach',
      'Finding recent news or announcements about a prospect',
      'Understanding a company\'s current onchain activity',
    ],
  },
  {
    id: 'crm-material',
    command: '/crm-material',
    title: 'Sales Material',
    description: 'Generate tailored sales materials for a specific prospect — one-pagers, exec summaries, custom decks.',
    longDescription: 'Takes a company and material type, reads existing research, and produces tailored sales content. Covers one-pagers, follow-up emails, custom deck outlines.',
    category: 'sales',
    keywords: ['sales material', 'one pager', 'deck', 'proposal', 'email', 'follow up', 'tailored', 'custom', 'prospect specific'],
    useCases: [
      'Creating a tailored one-pager for a prospect',
      'Drafting a follow-up email after a call',
      'Building a custom deck outline for a specific company',
      'Writing a proposal cover email',
    ],
  },
  {
    id: 'crm-daily',
    command: '/crm-daily',
    title: 'Daily Sales Workflow',
    description: 'Start the sales workday — review pipeline, surface follow-ups, plan outreach, and prioritize the day.',
    longDescription: 'Morning ritual for the sales team. Reviews active deals, surfaces overdue follow-ups, suggests today\'s outreach targets, and sets priorities.',
    category: 'sales',
    keywords: ['daily', 'morning', 'pipeline', 'follow up', 'prioritize', 'workflow', 'sales day', 'crm'],
    useCases: [
      'Starting the sales workday',
      'Reviewing what follow-ups are overdue',
      'Planning today\'s outreach',
      'Prioritizing the pipeline',
    ],
  },
  {
    id: 'discovery',
    command: '/discovery',
    title: 'Discovery Call Prep',
    description: 'Prepare questions and talking points for a first or second discovery call with a specific prospect.',
    longDescription: 'Reads the prospect file and recent research, then generates a call plan: 5–8 diagnostic questions, key proof points to land, and what to listen for.',
    category: 'sales',
    keywords: ['discovery', 'call', 'prep', 'questions', 'talking points', 'meeting prep', 'first call', 'qualification'],
    useCases: [
      'Preparing for a first discovery call',
      'Building a question list for a second call',
      'Structuring talking points before a demo',
      'Qualification prep for a new prospect',
    ],
  },
  {
    id: 'boundless-deal-mechanics',
    command: '/boundless-deal-mechanics',
    title: 'Deal Mechanics',
    description: 'Qualify a deal, build a proposal, and map the path to close — revenue model, stakeholders, and mutual action plan.',
    longDescription: 'For active deals that need structure. Covers deal qualification, revenue model construction, stakeholder mapping, and mutual action plan (MAP) building.',
    category: 'sales',
    keywords: ['deal', 'qualification', 'proposal', 'close', 'revenue model', 'stakeholders', 'map', 'mutual action plan', 'pipeline'],
    useCases: [
      'Qualifying a deal that\'s gaining momentum',
      'Building a proposal structure',
      'Mapping stakeholders at a large prospect',
      'Creating a mutual action plan',
    ],
  },

  // ── Strategy ────────────────────────────────────────────────────
  {
    id: 'marketing-strategy-pmm',
    command: '/marketing-strategy-pmm',
    title: 'PMM Strategy',
    description: 'Competitive battlecards, ICP work, GTM planning, and win/loss analysis for Boundless.',
    longDescription: 'Product marketing strategy and positioning work. Covers competitive intelligence, ideal customer profile refinement, go-to-market motion planning, and win/loss frameworks.',
    category: 'strategy',
    keywords: ['positioning', 'icp', 'gtm', 'competitive', 'battlecard', 'win loss', 'market', 'strategy', 'pmm', 'product marketing'],
    useCases: [
      'Building a competitive battlecard against a specific competitor',
      'Refining the ICP definition',
      'Planning a GTM motion for a new use case',
      'Win/loss analysis after a closed deal',
    ],
  },
  {
    id: 'cro-advisor',
    command: '/cro-advisor',
    title: 'Revenue Strategy',
    description: 'Revenue model, sales motion, pipeline strategy, and go-to-market planning discussion.',
    longDescription: 'CRO-level strategic thinking on revenue model, sales motion design, pipeline strategy, and GTM execution. Use for high-level strategy conversations.',
    category: 'strategy',
    keywords: ['revenue', 'sales motion', 'pipeline', 'strategy', 'cro', 'gtm', 'growth', 'pricing', 'model'],
    useCases: [
      'Thinking through the revenue model for a new service',
      'Designing the sales motion for institutional DeFi',
      'Pipeline strategy for a specific segment',
      'GTM planning for a chain expansion',
    ],
  },
  {
    id: 'compare',
    command: '/compare',
    title: 'Competitor Comparison',
    description: 'Build a competitor comparison table for a deck slide or sales conversation.',
    longDescription: 'Researches a specific competitor and produces a structured comparison. Use for deck slides, battlecard sections, or objection handling prep.',
    category: 'strategy',
    keywords: ['competitor', 'comparison', 'battlecard', 'versus', 'vs', 'table', 'slide', 'competitive', 'differentiation'],
    useCases: [
      'Building a comparison table against a specific competitor',
      'Preparing for a competitive objection in a sales call',
      'Adding a competitive slide to a deck',
      'Understanding how Shield compares on a specific dimension',
    ],
  },
  {
    id: 'dunford-pitch',
    command: '/dunford-pitch',
    title: 'Pitch Narrative Audit',
    description: 'Audit a sales pitch, first-call deck, or investor narrative against April Dunford\'s positioning framework.',
    longDescription: 'Uses April Dunford\'s two-phase Setup + Follow-Through structure to test whether a pitch lands correctly. Identifies where the narrative loses the audience.',
    category: 'strategy',
    keywords: ['pitch', 'deck', 'narrative', 'audit', 'review', 'positioning', 'investor', 'sales pitch', 'dunford'],
    useCases: [
      'Auditing the first-call deck narrative',
      'Testing the investor pitch structure',
      'Reviewing a partner pitch before it goes out',
      'Positioning audit for a new segment',
    ],
    featured: true,
  },
  {
    id: 'teresa',
    command: '/teresa',
    title: 'Copy Battle-Test',
    description: 'Battle-test investor deck copy, slide headlines, or transition lines through a sharp editorial lens.',
    longDescription: 'Teresa Hill is a sharp, generous reviewer who leads with what\'s working, then gives one surgical fix per pass. Use when you want a second opinion on any copy.',
    category: 'strategy',
    keywords: ['copy review', 'review', 'edit', 'headline', 'deck', 'investor', 'editorial', 'second opinion', 'feedback'],
    useCases: [
      'Getting a second opinion on a deck headline',
      'Reviewing a slide transition line',
      'Stress-testing a positioning statement',
      'Copy review before a major send',
    ],
  },

  // ── Pitch & Docs ────────────────────────────────────────────────
  {
    id: 'pitchify',
    command: '/pitchify',
    title: 'Sales Proposals',
    description: 'Style guide for building Boundless proposals, pitch decks, and sales documents.',
    longDescription: 'Covers tone, copy rules (no antiframing, no em dashes), document structure, and partner page formatting. Use when creating or editing any customer-facing proposal or exec summary.',
    category: 'pitch',
    keywords: ['proposal', 'pitch deck', 'sales doc', 'exec summary', 'document', 'one pager', 'booklet', 'partner page'],
    useCases: [
      'Writing a partnership proposal',
      'Building an exec summary for a prospect',
      'Structuring a product booklet',
      'Formatting a partner page',
    ],
  },
  {
    id: 'reportify',
    command: '/reportify',
    title: 'Research Reports',
    description: 'Design system for Boundless research reports, market primers, and thought-leadership documents.',
    longDescription: 'HTML design system based on the Privy "Yield in Practice" format. For text-heavy documents that educate rather than sell — market primers, deep-dive reports, ecosystem guides.',
    category: 'pitch',
    keywords: ['report', 'research', 'primer', 'deep dive', 'thought leadership', 'document', 'html', 'market analysis'],
    useCases: [
      'Building a market primer on stablecoin compliance',
      'Producing a deep-dive report on a specific use case',
      'Creating an ecosystem guide for a chain partner',
      'Thought leadership document for institutional readers',
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
