---
name: tweetcopy
description: Write and edit X/Twitter copy for Boundless Shield. Covers product launches, feature announcements, partnership posts, and thought leadership threads. Tone is clean and declarative — closer to Anthropic than Ramp. No emojis, no crypto slang, no casual sign-offs.
user-invocable: true
---

# Tweetcopy — Boundless Shield

X/Twitter only. For LinkedIn, use a separate skill.

---

## When invoked

**Step 1 — Identify the post type**

Ask immediately if not provided:
- What type: launch thread / feature announcement / partnership / thought leadership / use case post?
- Drafting from scratch or editing existing copy?
- Any specific constraint: launch day, co-marketing with a partner, tied to a blog post?

**Step 2 — Load context when relevant**

For Shield launch or product copy, read:
- `~/.claude/projects/-Users-santiagocampos/memory/boundless-messaging-homepage.md` — approved positioning
- The three pillars: confidential transaction data, continuous compliance, programmable controls

For use case posts, know which use case: stablecoin payments, merchant payments, payroll, treasury, institutional DeFi, tokenized assets.

**Step 3 — Output format**

- Produce the full thread or post, tweet by tweet, numbered.
- One version only — pick the strongest, annotate 2–3 decisions.
- For edits: revised copy first, then what changed and why.

---

## The canonical reference: Shield launch thread

Study this before writing any Boundless launch or announcement copy. It is the approved voice.

```
1/ Modern finance depends on a simple baseline: transactions visible only to
authorized parties and access controls over who moves money and who sees what.
On public blockchains today, none of those capabilities exist by default.

Introducing Boundless Shield™: confidential and compliant infrastructure for
public blockchains.

<animation video>

2/ How Boundless Shield™ works:
→ Confidential transaction data: visible only to authorized parties
→ Continuous compliance: KYC/KYB and sanctions screening on every participant
   and transaction
→ Programmable controls: who can transact, under what limits, and who sees what

Teams keep the liquidity, asset diversity, and DeFi access of public
blockchains — while adding the controls required to operate at scale.

3/ Shield deploys directly to public blockchains teams are already building on:
@ethereum, @StellarOrg, and @Ripple's XRPL.

Boundless handles the infrastructure, compliance configuration, and chain
deployment — allowing teams to focus on operating and growing their business
onchain.

<lightweight logo x logo>

4/ Built for the financial operations where confidentiality, compliance, and
controls need to work together:
→ Payroll
→ Stablecoin payments
→ Treasury
→ Tokenized assets

Plus optional yield on idle balances through approved protocols like
@MorphoLabs.

5/ A limited Founding Design Partner Program is now open for teams with active
or near-live deployments in payments, treasury, tokenization, or stablecoin
products on public chains.

Apply now: [LINK]
Full announcement: [LINK]
```

What this thread does right:
- Opens with the problem, not the product
- Introduces the product in tweet 1 — doesn't save it for tweet 2
- Tweet 2 = the three pillars, stated as parallel arrows (→)
- Tweet 3 = proof point (chains) + who operates it
- Tweet 4 = use cases
- Tweet 5 = CTA only — no new product information

---

## Post types and templates

### Launch thread (4–6 tweets)

Use for: major product launches, new capability announcements.

```
Tweet 1 — Hook + introduce the product
[Problem statement, 1-2 sentences.]
[Introducing [Product]: [one-line description].]
[Visual/video]

Tweet 2 — How it works
[Mechanism or three pillars, stated as → bullets or prose.]
[One-sentence summary of the unlock.]

Tweet 3 — Proof / deployment / who it's for
[Specific deployment, partner, or use case context.]
[Who operates it / what they keep.]

Tweet 4 — Use cases
[Built for:]
→ [Use case 1]
→ [Use case 2]
→ [Use case 3]
→ [Use case 4]

Tweet 5 — CTA
[Program or next step, 1-2 sentences.]
[Link]
```

Rules:
- Each tweet adds new information — never pad or repeat
- The product is introduced in tweet 1, not tweet 2
- Availability and CTA always go last
- No more than 6 tweets for any single thread

---

### Feature / capability announcement (1–3 tweets)

Use for: new capability within Shield, integration update, chain expansion.

**Pattern (Anthropic-style):**
```
[Feature name or "New: [feature]".]

[What it does — 1-2 sentences, mechanics only.]
[What it enables — 1 sentence.]

Available [to whom / on what]: [link]
```

**Single tweet example:**
```
Shield now deploys on Solana.

Stablecoin payment companies and payroll platforms building on Solana can
now run transactions with full confidentiality, continuous compliance, and
programmable controls — on the chain their users already use.

Apply to join: [link]
```

**Two-tweet example:**
```
Tweet 1:
New: scoped audit access in Shield.

Compliance teams can now generate read-only access to specific transaction
records for any time period or participant set — without making broader
transaction data visible.

Tweet 2:
Access is configurable by role. Finance, compliance, and operations each
see exactly what their function requires.

For regulators: access is granted on demand, scoped to what's required,
nothing more.

Read more: [link]
```

---

### Partnership announcement (1–2 tweets)

Use for: Stellar, XRPL, or new ecosystem partner.

```
Tweet 1:
[Partner] is [joining / confirmed as] [a founding design partner / deploying
Shield / working with Boundless] to bring [specific outcome] to [their network /
their institutional clients].

[What this enables in one sentence.]

Tweet 2 (if needed):
[Specific deployment detail or what the partner's users get.]

[Link]
```

**Tone rule:** Frame the partner's win, not Boundless's win. The partner gets the outcome; Boundless makes it possible.

✓ "XRPL institutions can now run stablecoin payments with full transaction confidentiality and compliance built in."
✗ "Boundless launches on XRPL."

---

### Thought leadership / use case post (3–5 tweets)

Use for: post-launch use case posts (payroll, payments, treasury, institutional DeFi), conference clips, market context.

**Structure (Ramp-influenced, Boundless tone):**
```
Tweet 1 — Hook: a specific, surprising fact or consequence
[One sentence. A problem statement or observation that reframes how the
reader thinks about something they already know.]

Tweet 2 — The mechanism: what's actually happening
[The underlying dynamic. 2-3 sentences. No product mention yet.]

Tweet 3 — The solution: where Shield enters
[What Shield does about it. Named directly. Specific, not general.]

Tweet 4 — Evidence or use case specifics
[Details: which teams, which chain, what exactly changes.]

Tweet 5 (optional) — CTA or pointer
[Apply link, blog post, or next step.]
```

**Use case hook examples (adapt, don't copy):**
- Payroll: "Running payroll on a public blockchain gives competitors a live view of your salary data, headcount, and growth signals. Every pay run."
- Stablecoin payments: "Every transfer on a public blockchain reveals your payment corridors, counterparty relationships, and volumes — in real time."
- Treasury: "Reserve positions and rebalancing activity are permanently visible on public blockchains. Your capital strategy, exposed to anyone watching."
- Institutional DeFi: "Compliance requirements are the single barrier keeping most institutions out of DeFi."

---

## Craft rules — what the best X copy does

### The opening line is the only line that matters

Every post lives or dies on the first sentence. It is the hook, the frame, and the reason to keep reading. It is not context-setting. It is not an introduction to the introduction.

✓ "98% of companies don't have a procurement team." (Ramp — drops the reader into the problem)
✓ "Modern finance depends on a simple baseline." (Shield launch — frames the entire product in one sentence)
✓ "Running payroll on a public blockchain gives competitors a live view of your salary data." (specific consequence)
✗ "Today we're excited to share something we've been working on." — never
✗ "Onchain finance is evolving rapidly." — context-setting, not a hook

**Test:** Would someone stop scrolling for this line? If not, rewrite it.

### Each tweet in a thread adds new information

Threads are not one post broken into pieces. Each tweet is a standalone unit that advances the argument. A reader who only sees tweet 3 should learn something they couldn't have gotten from tweets 1 and 2.

✓ Tweet 1: problem + product introduction. Tweet 2: how it works. Tweet 3: proof point.
✗ Tweet 2 that rephrases tweet 1 in different words.
✗ "Thread 🧵" as tweet 1 — never use this.

### Short tweet = claim. Long tweet = proof.

The pattern across every company studied:
- Claims are 1 sentence, sometimes 2.
- Mechanism, evidence, or detail gets 2-4 sentences.
- Never write a 4-sentence claim. It collapses under its own weight.

### Arrows for parallel structure

When listing capabilities or use cases, → bullets are cleaner than dashes or numbers.

✓ → Confidential transaction data
✓ → Continuous compliance
✗ - Transaction data is confidential
✗ 1. Confidential transaction data

### Availability goes last. Always.

"Available on all paid plans." is the last line, never the first. The product earns the plan mention — it doesn't open with it.

### Links go at the very end with a label

✓ "Apply now: [link]" or "Read more: [link]"
✗ Link mid-tweet
✗ Raw URL without a label

### @mentions in context, not decoration

Only tag accounts when they're part of the story (partner announcement, technology reference). Don't tag partners for brand association without a specific reason.

---

## Boundless tone rules for X

### Closer to Anthropic than Ramp

Anthropic's X account: clean, declarative, no slang, no sign-off personality, no emoji. Ramp's: casual, has a voice, says "Everyone parties." Boundless sits close to Anthropic. The product is institutional infrastructure. The copy reflects that.

### No emojis

None. Not even → arrows in the Stripe sense (use → without the emoji wrapper). The Shield launch thread uses → for bullets — that's the maximum decoration.

### No crypto slang

Never: "LFG", "gm", "ngmi", "based", "wen", "ser", "onchain natives", "degens", "alpha."
"Onchain" is acceptable (one word, Boundless-standard) — it's a technical descriptor, not slang.

### No casual sign-offs

Ramp ends posts with "Enjoy, data lovers." and "Everyone parties." — not for Boundless. End on the CTA, the link, or a clean declarative statement. Never a personality flourish.

### No exclamation marks

Not in product announcements. Not in partnership posts. Statements land harder without them.

### "Introducing Boundless Shield™" for major launches

Use the trademark symbol on first mention in launch copy. Subsequent mentions in the same thread: "Shield" is sufficient.

### No AI filler

Never: "We're excited to announce", "Thrilled to share", "Game-changing", "Revolutionary."
Anthropic never writes "We're excited." — they write "Introducing." Follow that pattern.

### Compliance language

"Shield integrates with existing compliance providers" — never "Shield does KYC."
"Trusted DeFi protocols including Morpho and Aave" — never "curated by Boundless."

### Vocabulary bans (X applies all Boundless rules)

Never: "privacy" as a noun (use "confidentiality"), "anonymity", "institutional-grade", "pools", "mandate", "privacy pool" (except when naming the competitor category).

---

## Quality checklist

**Before posting:**
- [ ] Opening line: would someone stop scrolling? Rewrite if not.
- [ ] Every tweet in the thread adds new information
- [ ] No tweet starts with "We're excited to" or "Today we're sharing"
- [ ] Availability and CTA are the last tweet
- [ ] Link has a label ("Apply now:" or "Read more:")
- [ ] No emojis
- [ ] No exclamation marks
- [ ] No em dashes (use comma or rewrite)
- [ ] "Onchain" not "on-chain"
- [ ] No vocabulary ban words: privacy (noun), anonymity, institutional-grade, pools, mandate
- [ ] Partners framed as their win, not Boundless's win
- [ ] No casual sign-offs
- [ ] Character count: each tweet ≤280 characters
