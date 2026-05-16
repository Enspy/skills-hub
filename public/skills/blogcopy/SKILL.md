---
name: blogcopy
description: Write and edit world-class blog posts for Boundless Shield. Covers product launches, case studies, feature announcements, thought leadership, and general updates. Craft patterns distilled from OpenAI, Anthropic, Stripe, Ramp, Mercury, Brex, ComplyAdvantage, Modern Treasury, and SoFi.
user-invocable: true
---

# Blogcopy — Boundless Shield

---

## When invoked

**Step 1 — Identify the task before writing anything**

Ask immediately if not provided:
- Post type: product launch / feature announcement / case study / thought leadership / use case / "why we built" / update post?
- Drafting from scratch or editing existing copy?
- Audience: developers, treasury leads, compliance officers, fintechs/stablecoin platforms, institutional DeFi?
- Is there a connected press release, launch brief, or existing draft?
- SEO/GEO goal? (Organic search, AI search visibility, or internal/CRM distribution only?)

**Step 2 — Load approved messaging when relevant**

For any product copy, read:
- `~/.claude/projects/-Users-santiagocampos/memory/boundless-messaging-homepage.md` — approved positioning
- Three pillars: confidential transaction data, continuous compliance, programmable controls

For use case posts, know the use case: stablecoin payments, merchant payments, payroll, treasury, institutional DeFi, tokenized assets.

**Step 3 — Output format**

- Full post only — no outlines unless explicitly asked for an outline first.
- Annotate 3–5 craft decisions at the end (why the title was chosen, what the opening does, header strategy used).
- For edits: revised copy first, then change log.
- Never produce multiple versions. Pick the strongest and defend it.

---

## Tone benchmarks

Study these posts before writing any Boundless blog content.

**Register for product launches:** Anthropic's Claude for Financial Services launch
> "We've launched Claude for Financial Services: one unified platform for your entire financial universe. Claude now integrates directly with leading data platforms and industry providers for real-time access to comprehensive financial information, verified across internal and industry sources."

What it does right: Announcement leads. Product name + scope claim in sentence one. Enterprise specs follow. No hype qualifiers.

**Register for thought leadership:** ComplyAdvantage on AI and compliance
> "The era of merely automating existing compliance processes to gain a competitive advantage is over. In our upcoming State of Financial Crime 2026 survey, 93% of businesses reported using some form of AI... compliance teams of the future need a platform built for scale and speed."

What it does right: Bold claim in sentence one. Proprietary stat as evidence in sentence two. Stakes are high; no hedging.

**Register for "why we built":** Modern Treasury on Ledgers
> "If you build products that move and store value — a marketplace, digital wallet, or investment app — then you understand how important it is to be able to have a source of truth for your transactions and balances. Without such a tool, there are a host of problems that crop up: missing funds, customer support costs, and regulatory and compliance challenges."

What it does right: Opens with the reader's problem, not Boundless's solution. Empathy-first. Technical without jargon.

**Register for case studies:** Mercury on Flighty
> "Flighty has been profitable and growing, but profitability at this scale demands discipline. The company parks idle funds in Treasury, earning yield on cash that would otherwise sit dormant between payroll, vendor payments, and App Store revenue deposits. Auto-transfer rules move money between the operating account and Treasury on a set schedule, so the discipline runs itself."

What it does right: Case study is narrated through the customer's operational reality, not the product's features. Mercury barely appears. The product is visible only through what the customer does.

---

## Title craft rules

### Title format by post type

| Post type | Format | Example |
|---|---|---|
| Major launch | "Introducing [Product]: [one-line scope]" | "Introducing Boundless Shield: Confidential and compliant infrastructure for public blockchains" |
| Feature announcement | "[Feature] now [outcome]" or "New: [capability]" | "Shield now deploys on Solana" |
| Case study | "[Company] [verb + outcome] with Shield" | "Sable runs payroll on Ethereum without exposing headcount data" |
| Thought leadership | Bold declarative claim (not a question) | "Every stablecoin transfer is a data leak. Here's what that costs." |
| "Why we built" | "Why we built [feature/capability]" | "Why we built programmable controls" |
| Annual/quarterly report | "The State of [Domain] [Year]" | "The State of Onchain Finance 2026" |
| Use case post | "How [audience] [use case] with Shield" or outcome title | "How stablecoin platforms protect payment data at scale" |

### Universal title rules

**Do:**
- Front-load the product name in launch titles ("Introducing Shield: ..." not "...introducing Shield")
- Embed the core capability or outcome in the title itself — the reader should know what they're getting before reading word one of the post
- Use numbers in title when the post delivers a list or study ("3 reasons treasury teams are moving to Shield") — numbers signal comprehensiveness and aid GEO
- For case studies: put the customer's outcome in the title, not Boundless's feature ("Sable eliminates payroll data exposure" not "How Sable uses Shield")
- For annual reports: always include the year ("State of Onchain Finance 2026") — creates a search-indexable franchise that refreshes annually
- Use colons to add a scope qualifier after a short opening claim: "Programmable controls: why finance teams need policy enforcement at the transaction level"

**Never:**
- Clickbait or question titles for product launches ("Is your payroll data safe on-chain?") — use for educational content only if necessary
- "How [Boundless product] is revolutionizing / transforming / disrupting..." — adjective stacking is a credibility red flag for institutional readers
- Hype words in titles: "game-changing," "groundbreaking," "unprecedented," "exciting"
- Passive constructions: "A new approach to compliance has been announced" — the product should be the subject
- Titles over 14 words — compression forces clarity

### SEO/GEO title optimization

For posts targeting search or AI citation, the title should contain the primary keyword phrase as it would be searched or asked:
- "What is onchain compliance?" (definition post — direct query match)
- "Stablecoin payment data exposure risks 2026" (threat post — informational keyword phrase)
- "How to run compliant payroll on Ethereum" (how-to — exact match query)
- Annual reports: the year in the title is the most important SEO signal — refresh it every cycle

---

## Opening paragraph rules

### The three opening strategies

**1. Announcement-first** (product launches, feature announcements)
Used by: OpenAI, Anthropic, Modern Treasury, Mercury

"Today, we're [launching / announcing / releasing] [Product]: [one-sentence scope claim]."

The product name and core capability appear in sentence one. No setup. No problem framing. The announcement earns its own opening.

When to use: Major product launches, new chain deployments, Founding Design Partner announcements.

**2. Problem-first** (thought leadership, use case posts)
Used by: Stripe, Ramp, ComplyAdvantage, Brex

Open with the problem or cost the reader already has but hasn't fully named. The product appears only after the problem is established — it becomes the obvious answer to a real question.

"Every stablecoin transfer on a public blockchain reveals your payment corridors, counterparty relationships, and transaction volumes — in real time. For fintech teams processing payments at scale, that exposure isn't theoretical. It's a competitive intelligence advantage for anyone watching."

When to use: Thought leadership, use case posts, feature posts where the problem context matters more than the announcement.

**3. Stat-first** (data posts, commissioned research, threat posts)
Used by: Ramp, ComplyAdvantage, Brex, Stripe

A specific number or research finding in sentence one, immediately followed by why it matters.

"98% of companies still perform some payment operations processes manually. For treasury teams adding stablecoin rails, that manual overhead compounds — every new chain, every new corridor, every new counterparty relationship handled outside the system creates a gap in your audit trail."

When to use: Original research posts, annual reports, threat/regulatory posts where data is the authority signal. First-party data (Boundless transaction data, customer research) is stronger than cited third-party stats.

### Opening paragraph rules (universal)

- The main claim of the post must appear in the first 50 words. Readers make continue/exit decisions in the opening paragraph.
- Do not open with scene-setting or historical context. "In recent years, financial institutions have been exploring..." is a skip trigger for institutional readers.
- Never open with "We're excited to announce" or "We're thrilled to share." These are AI filler openers. Use "Today, we're launching," "Today, we're releasing," or the announcement statement directly.
- For problem-first openers: state the consequence, not just the condition. "Every transfer is visible" is weaker than "Every transfer is visible — your competitors can map your corridors." The consequence is what makes the reader care.
- Keep the opening paragraph to 3–5 sentences. Technical detail lives in the body, not the intro.
- Compliance/safety content should open with threat context, not feature description. Follow the ComplyAdvantage model: establish the adversary or the regulatory cost, then position the solution.

---

## Header structure rules

### Header style by post type

**Product launches and feature announcements:**
Use short attribute-label H2s that carry mild claim language — not pure labels, not full thesis sentences.

✓ "Compliance without configuration overhead" (not "Compliance features")
✓ "Confidentiality on the chains you already use" (not "Chain support")
✓ "Who has access to what, and when" (not "Programmable controls")
✗ "Our compliance approach" — label with no claim
✗ "Boundless Shield delivers industry-leading compliance controls at the transaction level for enterprise-grade fintech teams operating on public blockchains" — thesis sentence, too long for H2

Pattern: [Outcome or capability stated as benefit] — not the feature name, not a full argument sentence.

**Thought leadership and use case posts:**
Use full claim H2s — each H2 is a standalone thesis statement that advances the argument. A reader skimming only the H2s should understand the full argument of the post.

✓ "Public blockchains make every transaction visible. That's a competitive intelligence problem." (Stripe model)
✓ "The compliance gap grows as payment volume scales" (ComplyAdvantage model)
✓ "Confidentiality isn't a privacy feature — it's an operating requirement" (argument-advancing)
✗ "Why compliance matters" — no claim
✗ "The opportunity" — pure label

**Case studies:**
Use workflow-specific H2s — each H2 describes what the customer does (their workflow) rather than naming a product feature or a journey stage.

✓ "One audit log for every stablecoin transfer" (Mercury model — describes the workflow)
✓ "Payroll runs without revealing headcount to the network" (outcome-described)
✗ "The challenge" / "The solution" / "The results" — generic journey labels
✗ "How Boundless Shield helped [Company]" — product-centric, not customer-centric

**Educational/thought leadership pillar posts (SEO-targeted):**
Use numbered H2s or question-form H2s that match likely search queries.

✓ "1. What onchain data exposure actually means for treasury" (numbered, specific)
✓ "What is transaction confidentiality on a public blockchain?" (definition H2 — direct query match)
✓ "How to run compliant stablecoin payments without a private chain" (how-to H2)
— Use H3s for sub-points within each section. Each H3 + body paragraph should be extractable as a standalone answer to a question (GEO optimization).

### Header counts and H3 use

- Product launches: 4–7 H2s. No H3s unless one section has multiple sub-components.
- Thought leadership: 4–6 H2s. Keep the argument tight; more headers dilutes the logic.
- Case studies: 3–5 H2s (workflow-specific). H3s rarely needed.
- Educational pillar posts: 5–8 H2s. H3s used to break numbered sub-points within each section.
- Always include "The takeaway" or a summary section in SEO-targeted posts — pre-written extract for AI citation.

---

## Narrative arc by post type

### Product launch arc

1. **Announcement sentence** — "Today, we're launching [Product]. [One-sentence scope.]"
2. **What it is** — Core capability in 1–2 sentences. Not a feature list.
3. **Why it matters** — The problem it solves or the cost it removes. 2–3 sentences.
4. **How it works** — Mechanism. Enough technical detail to be credible, not a spec sheet. Use specific numbers.
5. **Who it's for / use cases** — Named audience segments or specific use cases (stablecoin payments, treasury, payroll). Not generic.
6. **Compliance / trust** — How Shield was built responsibly. Woven in as a section, not a disclaimer.
7. **Availability** — How to access it, which chains, program details.
8. **CTA** — Single CTA. For launch artifacts: "Apply to join →"

Key rule from Anthropic/OpenAI: **Technical detail comes after the narrative claim, never before.** The claim is established first. The mechanism is proof of the claim. Benchmark numbers appear in sections 3–5, never in the opening paragraph.

### Feature / capability announcement arc

1. **What changed** — "[Feature] now [capability]." One sentence.
2. **What this enables** — What the customer can now do that they couldn't before. 1–2 sentences.
3. **How it works** — Mechanism, briefly.
4. **Who gets it and when** — Availability, access instructions.
5. **Link** — Read the docs / apply.

These posts are short (300–500 words). Don't pad with backstory. The feature's utility speaks for itself.

### Case study arc

1. **Company profile** — 2–3 sentences: what they do, their scale/audience, what makes them interesting. Not what their problem was. (Mercury model)
2. **The operational context** — What activity they were running that involved payment/transaction/compliance complexity. Not "their challenge was X."
3. **Section-by-section workflows** — Each H2 describes one specific workflow the customer handles with Shield. The feature lives inside the workflow, not in a feature-list section.
4. **Outcomes** — Specific, quantified where possible: time saved, data exposure eliminated, compliance scope, number of transactions. Name the metric, not just "faster" or "better."
5. **Close** — Return to the customer's voice. A direct quote from a finance lead, compliance officer, or technical lead about a specific operational outcome. Not a testimonial endorsement; an operational reflection.

Do not use a "Solution" section that reads like a product brochure. The product appears through what the customer does, not what Boundless built.

**Case study stat types to include:**
- Before/after time comparison: "Onboarding from 12 days → 2 days" (ComplyAdvantage model)
- Volume handled: "50,000 transactions per month"
- Manual work removed: "hours/week saved on compliance review"
- Data risk eliminated: "zero counterparty relationships visible to outside observers"

### Thought leadership arc

1. **Bold claim or provocative observation** — The thesis of the post in one sentence. Takes a position.
2. **Why this is true / what's driving it** — The mechanism or trend behind the claim. 2–4 paragraphs.
3. **The implication** — What this means for the reader's team or business specifically.
4. **What changes** — What the reader should do differently, or what capability closes the gap.
5. **CTA or pointer** — Link to related content, product page, or apply link if the post ends at a commercial conclusion.

Do not write neutral "here are both sides" think pieces. Thought leadership that takes no position is indistinguishable from background noise. Every post should have a claim that could be disagreed with.

### "Why we built" arc (use for new capabilities)

1. **The reader's problem** — "If you [do X], then you understand [the problem]." Not Boundless's problem — the reader's.
2. **What we tried** — What existing solutions existed and why they didn't work.
3. **What we built and why** — The decision to build, with the tradeoff stated explicitly.
4. **What it does** — Technical description, honest about limitations.
5. **What we're still figuring out** — Transparency earns trust with technical audiences. This section is optional but powerful.
6. **How to try it** — CTA.

This is the Modern Treasury model. It works because it treats the reader as a peer, not a prospect.

### Pillar / SEO post arc

1. **Framing sentence** — What this post covers and who it's for. 1–2 sentences.
2. **Numbered or grouped H2 sections** — Each is a discrete answer to a sub-question. 300–500 words each.
3. **Definition sections** — For any technical term in the title, a definition H2 early in the post: "What is [X]?" followed by a plain-language answer. This targets voice search and AI citation.
4. **The Takeaway** — 1–2 paragraph summary at the end. Pre-written AI summary target.
5. **FAQ** — 5–8 Q&A pairs. Short answers (2–5 sentences). These are GEO-optimized chunks.
6. **CTA** — Relevant to the post topic (apply, read the docs, download report).

---

## SEO and GEO rules

### SEO basics (search engine optimization)

- Primary keyword phrase belongs in: H1 title, first 100 words, at least one H2, and meta description.
- Don't repeat exact keyword phrase more than 3–4 times — use semantic variants ("transaction confidentiality on public blockchains" → "onchain transaction privacy" → "keeping payment data private on Ethereum").
- Internal links: link to related Boundless pages (Shield Payments, Shield Treasury, Shield Yield) where genuinely relevant. External links: cite sources for data claims.
- Date signals: for annual/trend posts, the year in the title is the most important freshness signal.

### GEO basics (generative engine optimization — AI search)

GEO optimization means structuring content so that AI systems (ChatGPT, Perplexity, Claude, Gemini) can extract and cite accurate answers from the post. Key techniques, all drawn from the companies studied:

**1. Extractable headers.** AI systems use H2/H3 text as section labels when summarizing content. Headers should be descriptive enough that the section's content can be understood from the header alone.

**2. Definition-first H2s.** Any technical term in the title should have a "What is [term]?" H2 early in the post. This directly matches the query pattern that triggers AI summaries ("what is transaction confidentiality on a public blockchain?").

**3. Numbered sub-sections under H2s.** The ComplyAdvantage model: one H2 ("11 things every business should know about AML compliance") contains 11 numbered H3s, each answering a specific question. AI models can extract each H3 + body paragraph as a discrete answer. Boundless equivalent: "5 ways public blockchains expose enterprise payment data" → H3s for each.

**4. Stat-in-header technique.** Embedding a specific number in an H2 ("AML fines in 2024: $3.2 billion in banking") makes the figure accessible to AI summary systems without them having to extract it from body text. Use for: data posts, annual reports, research posts.

**5. "The Takeaway" section.** A terminal H2 with a 1–2 paragraph summary of the post's main argument. This is a pre-written extract — AI citation systems often pull from the end of a post rather than the full text. If you control that section, you control the summary.

**6. FAQ section (H2 at the end).** 5–8 Q&A pairs, each 2–5 sentences. Structured Q&A is the format AI systems most reliably extract and cite for voice search and featured snippet queries. Place at the very end, before the CTA.

**7. First-party data in the opening.** "According to Boundless transaction data..." is stronger than "According to a third-party study..." for AI citation because it's more specific and attributable. Cite the dataset size and timeframe.

**8. Client name in H2 (case studies).** "How Sable eliminated payment data exposure: a Shield case study" as an H2 creates an independently searchable unit. A query for "Sable stablecoin payments compliance" can land on that H2.

---

## Craft rules

### Numbers do the work adjectives cannot

Never write "significantly faster," "dramatically reduced," or "greatly improved." Every claim needs a number or a mechanism:
- "significantly faster" → "90% faster" or "from 2 hours to under 2 minutes"
- "strong compliance controls" → "KYC/KYB and sanctions screening on every participant and transaction"
- "broad ecosystem support" → "deploys on Ethereum, Solana, XRPL, and Stellar with no chain migration required"

If no number is available, name the mechanism. A mechanism is more credible than an adjective.

### Mechanism after claim, not before

Establish the claim first. Then prove it with the mechanism. The wrong order buries the claim inside technical explanation and loses the reader.

✓ "Shield keeps transaction data between authorized parties. It does this through trusted execution environments that process transactions without exposing them to nodes outside the authorized set."

✗ "By leveraging trusted execution environments that process transactions within a hardware-level secure computing boundary, Shield is able to ensure that transaction data remains visible only to authorized parties."

### The product announcement comes second (thought leadership and use case posts)

In posts that aren't pure product announcements, establish the problem or context before naming Shield. The reader needs to feel the problem before they'll want the solution. Open with the cost or consequence; arrive at Shield as the answer.

### Case studies: narrate the customer's operational reality, not Shield's features

The product appears through what the customer does. If every other sentence starts with "Shield," the case study reads like a brochure. Use the Mercury model: sections are named after the customer's workflow ("Payroll runs without revealing headcount to the network"), and Shield appears inside the sentence that describes what actually happens.

### Show the mechanism, don't just claim the outcome

Stripe's engineering posts and Modern Treasury's "why we built" series are trusted because they explain exactly how something works. For institutional fintech readers (treasury leads, compliance officers), mechanism = credibility. Don't skip the "how."

For Boundless: the TEE-based confidentiality mechanism, the compliance integration model, the programmable control layer — these deserve clear, non-jargon explanations in any post that claims those capabilities. The explanation earns the claim.

### Thought leadership must have a position

Neutral informational posts have no authority signal. Take a position that could be challenged. "Institutional finance teams are moving to public blockchains" is a neutral observation. "The assumption that private chains solve compliance is wrong — and it's costing teams liquidity" is a position. Every thought leadership post should be something the reader can agree or disagree with.

### Technical detail placement

- Opening paragraph: claim only, no tech detail
- H2 body sections: mechanism, with numbers
- H3 sub-sections or callout boxes: specs, technical limits, architecture notes
- Footnotes/appendix: benchmarks, methodology, data sourcing

---

## Boundless-specific rules

### Three pillars — name them consistently

1. **Confidential transaction data** — amounts, counterparties, timing visible only to authorized parties
2. **Continuous compliance** — KYC/KYB and sanctions screening on every participant and transaction
3. **Programmable controls** — who can transact, under what limits, who sees what

Blog copy should reflect these three logics even when not naming them explicitly.

### Vocabulary bans

| Never write | Write instead |
|---|---|
| "privacy" (noun) | "confidentiality" |
| "anonymity" | "confidentiality" |
| "institutional-grade" | name the specific capability |
| "Shield does KYC" | "Shield integrates with existing compliance providers" |
| "privacy pool" | only when naming this competitor category explicitly |
| "pools" | describe the mechanism directly |
| "mandate" | "compliance framework" or "compliance team" |
| "layer" | describe what Shield is directly |
| "seamless," "robust," "powerful," "cutting-edge" | specific outcome or mechanism |

### Technical accuracy

- Shield **integrates with** existing compliance providers (Chainalysis, TRM Labs, Persona). It does not provide KYC attestations itself.
- Shield deploys **on** public blockchains — Ethereum, Solana, XRPL, Stellar. Teams do not migrate to a new chain.
- Yield is **optional** through approved DeFi protocols. Not Boundless's primary value prop.
- The competitor frame: *privacy pools* (anonymity without compliance) and *private chains* (compliance without liquidity). Shield removes that tradeoff.

### Audience framing

Do not frame Shield exclusively for banks. Crypto-native teams (stablecoin platforms, DeFi protocols, crypto fintechs) are equally in scope. Copy should feel enterprise-ready without feeling "banks only."

Primary targets: stablecoin platforms, fintechs and neobanks, tokenization platforms, blockchains with enterprise focus.

### Formatting rules

- "Onchain" — one word, no hyphen, lowercase unless starting a sentence
- Sentence case in all headings — only first word and proper nouns capitalized
- No em dashes — use a comma, colon, or rewrite as two sentences
- No exclamation marks
- "Boundless" not "we" in product-page style copy; "we" is fine in "why we built" and thought leadership
- No staccato sentence fragments: "Encrypted. Compliant. Private." — fold into full sentences

### Copy length rules

- **Opening paragraph**: 3–5 sentences. 60–100 words.
- **Body sections (per H2)**: 150–300 words for product posts. 200–400 words for thought leadership.
- **Case study total length**: 600–1,000 words.
- **Thought leadership total length**: 800–1,500 words.
- **Pillar / SEO posts**: 1,200–2,500 words (depth required for search authority).
- **Product announcement posts**: 400–800 words.

---

## CTAs and closing rules

### CTA format by post type

| Post type | CTA |
|---|---|
| Launch artifacts (pre-GA) | "Apply to join →" |
| Technical posts / docs | "Read the docs →" |
| Case studies | No hard CTA — close with customer quote; optional "Learn how Shield works" link |
| Thought leadership | "Read how teams use Shield for [use case] →" or "Explore Shield →" |
| Annual reports | "Download the full report →" or "Read more →" |
| Pillar / SEO posts | Relevant product page link with action label |

### Closing rules

- Never end on a motivational flourish: "Together, we're building the future of onchain finance." Zero content, maximum cliché.
- Case study closes return to the customer's voice — a quote from an operational leader reflecting on a specific outcome, not a promotional endorsement.
- Product launch closes: short and action-oriented. "Shield is now available for teams building on Ethereum, Stellar, and XRPL. Apply to join →"
- Thought leadership closes: restate the post's core claim, then name the implication. Don't introduce new information in the conclusion.
- Use "As always" if writing about ongoing iteration or community — Anthropic's "As always, we look forward to seeing what you build" signals continuity and trust. Avoid it in commercial posts.

---

## Quality checklist

**Before publishing:**

**Title**
- [ ] Post type is signaled in the title (launch titles use "Introducing," case studies use company + outcome)
- [ ] Primary keyword phrase is in the title (for SEO-targeted posts)
- [ ] No hype words: game-changing, revolutionary, groundbreaking, exciting
- [ ] Under 14 words

**Opening paragraph**
- [ ] Main claim appears within first 50 words
- [ ] No "We're excited to announce" or "We're thrilled to share"
- [ ] For problem-first posts: the consequence is named, not just the condition
- [ ] 3–5 sentences; no technical detail in the opener

**Headers**
- [ ] H2s are claims or outcome-descriptive, not pure labels
- [ ] A skimmer reading only H2s can follow the argument
- [ ] Case study H2s describe the customer's workflow, not journey stages (not "Challenge / Solution / Results")
- [ ] SEO posts include at least one definition H2 ("What is [X]?")
- [ ] "The Takeaway" section present if post is SEO-targeted

**Body**
- [ ] Every claim has a number or a named mechanism — no unsupported adjectives
- [ ] Technical detail appears after the claim, not before
- [ ] Product appears after the problem is established (in non-announcement posts)
- [ ] Case study narrates customer's operational reality; product appears through what they do

**Boundless rules**
- [ ] "Onchain" not "on-chain"
- [ ] Sentence case in all headings
- [ ] No em dashes
- [ ] No vocabulary ban words: privacy (noun), anonymity, institutional-grade, pools, mandate, layer
- [ ] Compliance framed as: "Shield integrates with existing compliance providers"
- [ ] Yield framed as: "optional through trusted DeFi protocols including Morpho and Aave"
- [ ] No exclamation marks
- [ ] "Boundless" not "we" in product/page copy

**SEO/GEO (for search-targeted posts)**
- [ ] Primary keyword in title, first 100 words, and at least one H2
- [ ] "The Takeaway" section present
- [ ] FAQ section present (5–8 Q&A pairs)
- [ ] Numbered H3s within H2s for pillar content
- [ ] First-party data or stat in opening paragraph
- [ ] External links to data sources; internal links to related Boundless pages

**CTA**
- [ ] CTA names the action and first step — not "learn more" or "get started"
- [ ] Launch artifact CTA: "Apply to join →"
- [ ] Case study: closes with customer quote, no hard CTA
