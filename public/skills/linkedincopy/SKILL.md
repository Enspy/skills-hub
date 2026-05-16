---
name: linkedincopy
description: Write and edit LinkedIn copy for Boundless Shield. Covers product launches, feature announcements, partnership posts, thought leadership, and executive milestone posts. Institutional tone — closer to Clearwater Analytics and Anthropic than Brex. No emojis, no crypto slang, no casual openers.
user-invocable: true
---

# Linkedincopy — Boundless Shield

LinkedIn only. For X/Twitter, use `/tweetcopy`.

---

## When invoked

**Step 1 — Identify the post type**

Ask immediately if not provided:
- What type: product launch / feature announcement / partnership / thought leadership / use case / milestone?
- Company page post or executive personal post?
- Drafting from scratch or editing existing copy?
- Any constraint: launch day, co-marketing with partner, tied to a blog post or press release?

**Step 2 — Load context when relevant**

For any Shield product or launch copy, read:
- `~/.claude/projects/-Users-santiagocampos/memory/boundless-messaging-homepage.md` — approved positioning
- Three pillars: confidential transaction data, continuous compliance, programmable controls

For use case posts, know the use case: stablecoin payments, merchant payments, payroll, treasury, institutional DeFi, tokenized assets.

**Step 3 — Output format**

- One version only. Pick the strongest opener, annotate 2–3 decisions.
- For edits: revised copy first, then what changed and why.
- Never produce multiple options unless explicitly asked. Multiple options signal indecision.

---

## The tone benchmark: Kyriba on stablecoins

Study this before writing any Boundless LinkedIn post that touches onchain, stablecoin, or treasury topics. It is the register to match.

```
Treasury innovation is happening on-chain. With partners like Fipto, Kyriba explores
how stablecoin rails can complement traditional cash management — accelerating
settlement, easing complex corridors, and extending visibility across fiat and digital
assets within existing governance.

What this means for treasurers:
→ Real-time settlement (~10 minutes) for funding and payments
→ Unified visibility across fiat and stablecoins
→ Automated fiat ↔ stablecoin conversions
→ Faster repatriation and working capital benefits
→ Approvals, controls, and reporting applied to stablecoin flows
```

What this post does right:
- Opens with an observational thesis ("Treasury innovation is happening on-chain") — not "We're excited to announce blockchain."
- Frames onchain as a complement to existing practice, not a disruption
- Uses treasury vocabulary: settlement, repatriation, working capital, governance
- Feature bullets are outcome-phrased ("Unified visibility across fiat and stablecoins") — not feature names ("multi-asset dashboard")
- No emojis, no crypto slang, no hype qualifiers

---

## The credibility structure: Clearwater Analytics CWAN launch

Use this structure for any major capability announcement or launch post where institutional proof matters:

```
CWAN GenAI. Not a pilot. Not a prototype. But already in production — embedded across
$10 trillion in client assets. With 800+ AI agents at your fingertips and 20
domain-specific agents trained in accounting, reporting, reconciliation, and risk
management, this is the operational transformation the market has been waiting for.

Clients are already seeing incredible results:
→ 90% less manual reconciliation
→ 80% faster regulatory reporting
→ 50% faster financial close cycles

This is AI in production — secure, scalable, and built for institutional precision.
```

Boundless adaptation: "Not a whitepaper. Not a prototype. Already deployed on Ethereum, Stellar, and XRPL — processing live transactions for stablecoin payments, treasury, and payroll."

---

## Post types and templates

### Major product launch (150–250 words)

Use for: Shield launch, new service line, major capability.

```
[Observational thesis or "Introducing [Product]:" — 1 sentence.]

[Problem setup: what public blockchains expose / what the old world costs. 2 sentences max.]

[The answer: what Shield does about it. 1-2 sentences. Specific, not general.]

[Feature list:]
→ [Capability — outcome in one line]
→ [Capability — outcome in one line]
→ [Capability — outcome in one line]

[Closing reframe or production proof: 1-2 sentences that elevate from feature to category.]

[CTA: Apply to join → [link] / Read more: [link]]
```

**Example (Shield launch):**
```
Introducing Boundless Shield: confidential and compliant infrastructure for public blockchains.

Every transaction on a public blockchain is visible to anyone watching — counterparties,
amounts, timing. For financial teams running payroll, payments, or treasury onchain, that
exposure has a cost: competitors mapping your operations, counterparties tracking your
positions, compliance teams flying blind.

Shield changes the baseline:
→ Confidential transaction data — visible only to authorized parties
→ Continuous compliance — KYC/KYB and sanctions screening on every participant and transaction
→ Programmable controls — who can transact, under what limits, who sees what

Teams keep the liquidity and DeFi access of public blockchains while adding the controls
required to operate at scale.

A Founding Design Partner Program is now open for teams with active deployments in
payments, treasury, tokenization, or stablecoin products on Ethereum, Stellar, or XRPL.

Apply to join: [link]
```

---

### Feature / capability announcement (75–150 words)

Use for: new capability within Shield, integration update, chain expansion.

```
[Feature name or "New: [feature]"]. [What it does — 1 sentence, mechanics.] [What it enables — 1 sentence.]

[Detail or proof: who gets access, on what chain, what specifically changes.]

[Link with label: Read more: [link] / Apply to join: [link]]
```

**Example:**
```
Shield now deploys on Solana.

Stablecoin payment companies and payroll platforms building on Solana can now run
transactions with full transaction confidentiality, continuous compliance, and
programmable controls — on the chain their customers already use.

Boundless handles chain deployment, compliance configuration, and infrastructure.
Teams focus on operating and growing their business.

Read more: [link]
```

---

### Partnership announcement (100–175 words)

Use for: chain partners (Stellar, XRPL), ecosystem partners, design partners going live.

```
[Partner outcome in one sentence — frame the partner's win, not Boundless's win.]

[What this enables for the partner's customers / network. 1-2 sentences.]

[What Boundless provides: 1 sentence. Specific, not general.]

[Optional: named use cases or what teams can now do.]

[Link]
```

**Tone rule:** The partner gets the outcome; Shield makes it possible.
- "XRPL institutions can now run stablecoin payments with full transaction confidentiality and compliance built in." ✓
- "Boundless launches on XRPL." ✗

**Example:**
```
[Partner] is deploying Shield to bring transaction confidentiality and continuous compliance
to its institutional client base on [chain].

Financial institutions on [network] can now run stablecoin payments, treasury operations,
and tokenized asset transfers with the data controls required to operate at enterprise scale.

Boundless handles chain deployment, compliance integration, and infrastructure — allowing
[Partner] clients to focus on building.

Read more: [link]
```

---

### Thought leadership / use case post (150–250 words)

Use for: use case education (payroll, payments, treasury, institutional DeFi), market context, post-launch awareness.

**Structure:**
```
[Hook: specific, surprising consequence — 1 sentence. A problem the reader already has
but may not have named.]

[The mechanism: what's actually happening and why it matters. 2-3 sentences. No product
mention yet.]

[The answer: where Shield enters. Named directly. Specific, not general. 1-2 sentences.]

[Evidence or use case specifics: which teams, which chain, what exactly changes. 2-3 sentences.]

[Optional CTA or pointer: Apply link, blog post, or next step.]
```

**Hook examples by use case:**
- Payroll: "Running payroll on a public blockchain gives competitors a live view of your salary data, headcount, and growth signals. Every pay run."
- Stablecoin payments: "Every stablecoin transfer on a public blockchain reveals your payment corridors, counterparty relationships, and volumes — in real time."
- Treasury: "Reserve positions and rebalancing activity are permanently visible on public blockchains. Your capital strategy, exposed to anyone watching."
- Institutional DeFi: "Compliance requirements are the single barrier keeping most institutions out of DeFi yield. Not the yield itself — the controls around it."
- Tokenized assets: "Tokenized assets on public blockchains expose your investor relationships, position sizes, and transfer activity. The ledger is permanent."

---

### Executive / milestone post (100–200 words)

Use for: founder posts on company milestones, design partner announcements, major metrics.

**Structure (CEO/founder voice):**
```
[Milestone or context — direct, no setup. 1 sentence.]

[What it means / what it took. 2-3 sentences. Personal where appropriate, but never
performative.]

[What's next or what this enables. 1-2 sentences.]

[Optional: named partners, use cases, or key metrics.]

[CTA or pointer if applicable.]
```

**Tone rules for executive posts:**
- Plainer and more direct than company page posts — founders don't need to brand every sentence
- Metrics appear naturally: ">$X in transactions processed," "X design partners," "X chains"
- "We" is acceptable in personal posts (unlike on product pages)
- End on what's next or an invitation — not on gratitude or a motivational close

---

## Craft rules — what the best LinkedIn posts do

### The first line is the filter

Every reader makes a continue/scroll decision at the first sentence. It must deliver a specific claim, consequence, or thesis — not context-setting, not an introduction to an introduction.

**Openers that work:**
- Observational thesis: "Treasury innovation is happening on-chain." (Kyriba)
- Specific consequence: "Running payroll on a public blockchain gives competitors a live view of your salary data."
- Stat-as-problem: "90% of compliance alerts are false positives. That's not a noise problem — it's a data problem."
- Production proof: "Not a pilot. Not a prototype. Already deployed across live transactions." (Clearwater adaptation)
- Direct announcement: "Introducing Boundless Shield: confidential and compliant infrastructure for public blockchains." (Anthropic model)

**Openers that don't work:**
- "We're excited to announce..." — never
- "In the world of onchain finance..." — context-setting
- "Onchain finance is evolving rapidly." — observation without consequence
- "Today, we're thrilled to share..." — AI filler

### LinkedIn gives space — use it for the problem setup

Unlike X, LinkedIn readers expect a full argument. The structure that works: name the problem clearly, then make the product the obvious answer. Don't rush to the product in line 2.

✓ Kyriba pattern: observational opener → stablecoin use case framed for treasurers → feature outcomes  
✓ Brex pattern: tradeoff statement → "this release breaks the tradeoff" → what's new → the result  
✗ Starting with a feature list before the problem is clear

### Feature bullets: outcome-phrased, never feature-named

The bullet names what the customer gets, not what the product does.

✓ "Unified visibility across fiat and stablecoins" (Kyriba)  
✓ "Real-time settlement (~10 minutes) for funding and payments"  
✗ "Multi-asset dashboard"  
✗ "Continuous compliance" (feature name, not outcome)

### The closing reframe elevates from feature to category

The last substantive sentence should reframe the post's subject from capability to category or consequence.

✓ "This is AI in production — secure, scalable, and built for institutional precision." (Clearwater)  
✓ "These aren't just new scores — it's a new way to score." (Plaid)  
✓ "This is what compliance infrastructure for public blockchains should look like." (Boundless adaptation)  
✗ Ending on a feature detail  
✗ Ending on a general invitation with no substance ("We hope you find this useful")

### "The result?" transition (when you need explicit before/after)

Brex and Modern Treasury both use this effectively: state the mechanism, then explicitly label the outcome.

```
[Mechanism or feature list.]

The result? [Specific operational change for the reader's team.]
```

Use sparingly — once per post maximum. Works best in use case posts where the before/after is concrete.

### Social proof: mid-post or end, never as the opener

Named customers or partners appear after the problem is set up — never as the first line.

✓ Establish the problem → name the customer → show the outcome  
✗ "OpenAI now uses Brex" as the opening line (even Brex doesn't do this — they open with the problem)

### Specificity over adjectives

Replace every adjective with the outcome or mechanism it implies.

- "powerful compliance" → "KYC/KYB and sanctions screening on every participant and transaction"
- "seamless integration" → "deploys on Ethereum, Solana, XRPL, and Stellar with no migration required"
- "institutional-grade" → prohibited (see vocabulary bans)
- "secure" → always acceptable, but follow it with what "secure" means operationally

---

## Boundless tone rules for LinkedIn

### Institutional register — closer to Clearwater than Brex

The companies in this research that most closely match Boundless's institutional positioning are: Clearwater Analytics (no emoji, scale-first, institutional precision language), Anthropic (direct announcements, compliance woven into product), and Modern Treasury (stablecoin + fiat copy, outcome-first). Brex and Ramp are useful for structure and tradeoff framing but their voice is more casual. Kyriba is the register gold standard for onchain topics.

### No emojis

None. All 12 companies studied use them liberally. Boundless does not. The institutional positioning warrants restraint. The content should be strong enough that it doesn't need decoration.

For bullet points: use plain → arrows or plain dashes, no emoji bullets.

### No crypto slang

Never: "LFG", "gm", "onchain natives", "degens", "alpha", "wen", "ser", "based."  
"Onchain" is acceptable (one word, lowercase) — it's a technical descriptor, not slang.

### No casual openers

Never: "Excited to welcome X," "Thrilled to share," "We're happy to announce."  
Use: "Introducing," the observational thesis opener, or the direct announcement form.

### No exclamation marks

Statements land harder without them. Brex uses them; Anthropic and Clearwater don't. Boundless follows Anthropic and Clearwater.

### Compliance language — how to write it

Never imply Shield generates KYC itself. Shield integrates with existing compliance providers.

✓ "Continuous compliance — KYC/KYB and sanctions screening on every participant and transaction, through your existing compliance providers"  
✗ "Shield does KYC"  
✓ "Approvals, controls, and reporting applied to stablecoin flows"  
✗ "Shield verifies your users"

### Onchain as institutional infrastructure — not crypto

Follow the Kyriba register: onchain is a complement to existing treasury practice, not a disruption. Use treasury vocabulary: settlement, governance, visibility, working capital, counterparty, repatriation. Avoid: "DeFi-native," "permissionless," "trustless," "web3."

### "Introducing Boundless Shield™" for major launches

Use the trademark symbol on first mention in launch copy. Subsequent mentions: "Shield" is sufficient.

### Vocabulary bans

Never: "privacy" (noun) — use "confidentiality." Never: "anonymity," "institutional-grade," "pools" (except "privacy pools" when naming competitor category), "mandate" (use "compliance framework"), "layer."

---

## LinkedIn-specific formatting

### Post length by type
- Major launch: 150–250 words
- Feature update: 75–150 words
- Partnership: 100–175 words
- Thought leadership: 150–250 words
- Executive/milestone: 100–200 words

### Line breaks
LinkedIn renders line breaks. Use them. One idea per paragraph. Feature lists get their own block. Don't write dense wall-of-text posts.

### Links
- Always label: "Apply to join: [link]" or "Read more: [link]"
- Links go at the very end — never mid-post
- For launch artifacts: single CTA is "Apply to join: [link]"

### Hashtags
- 3–5 max, functional not aspirational
- Use only when adding reach context (e.g., #StablecoinPayments, #TreasuryManagement, #OnchainFinance, #Compliance)
- Never: trend-chasing hashtags (#Innovation, #FutureOfFinance, #Disruption)
- Optional — omit if the post doesn't benefit from them

### @mentions
- Tag partners in partnership posts — it's part of the story
- Tag chains (Ethereum, Stellar, XRPL, Solana) in deployment announcements
- Don't tag for brand association without a reason

---

## Quality checklist

**Before posting:**
- [ ] First line: delivers a specific claim, consequence, or thesis — not context-setting
- [ ] Problem is set up before the product is named
- [ ] Feature bullets are outcome-phrased, not feature-named
- [ ] Closing line reframes from feature to category
- [ ] No emojis
- [ ] No exclamation marks
- [ ] No "We're excited to announce" or "Thrilled to share"
- [ ] No crypto slang
- [ ] No vocabulary ban words: privacy (noun), anonymity, institutional-grade, pools, mandate, layer
- [ ] "Onchain" not "on-chain"
- [ ] Compliance framed as "integrates with existing compliance providers" — not "Shield does KYC"
- [ ] Partners framed as their win, not Boundless's win
- [ ] Social proof is mid-post or end — not the opener
- [ ] Link is labeled and at the end
- [ ] Post length appropriate for post type (150–250 words for launches)
- [ ] No em dashes in Boundless product copy
- [ ] CTA on launch artifacts: "Apply to join: [link]"
