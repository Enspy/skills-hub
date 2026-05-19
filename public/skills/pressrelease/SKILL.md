---
name: pressrelease
description: Write press releases and media pitches for Boundless. Covers product launches, partnership announcements, design partner wins, chain expansions, executive hires, and executive thought leadership/newsjacking pitches. Institutional register — Clearwater Analytics and Modern Treasury, not crypto startup. AP style. No enthusiasm language in quotes.
user-invocable: true
---

# Pressrelease — Boundless

For the PR agency and internal comms. Not for blog posts or social copy (use `/blogcopy` and `/linkedincopy` for those).

---

## When invoked

**Step 1 — Identify the release type**

Ask immediately if not provided:
- What type: product launch / partnership announcement / design partner win / chain expansion / executive hire / thought leadership pitch / newsjacking pitch?
- Wire distribution (PRNewswire, BusinessWire) or owned media (Boundless blog/newsroom) only?
- Any embargo date or coordinated launch timing with a partner?
- Named customer or partner to quote? Do they have an approved quote already?
- Any specific metric to anchor on (transaction volume, partner count, chain count)?

**Step 2 — Load context**

For any Boundless release, read:
- `~/.claude/projects/-Users-santiagocampos/memory/boundless-messaging-homepage.md` — approved positioning and product descriptors
- Three pillars: confidential transaction data, continuous compliance, programmable controls
- Boilerplate (see below) — use verbatim; update numbers before each release

**Step 3 — Output format**

Deliver a complete draft: headline, optional subheadline, dateline + lead, body paragraphs, all quotes, boilerplate, contact block placeholder.

One version. Annotate 2–3 decisions (headline choice, quote structure, proof placement).

For edits: revised copy first, then what changed and why.

---

## The register benchmark: Modern Treasury + Fireblocks

These two companies are the closest match to Boundless's institutional B2B register for press releases. Study their patterns before drafting.

**Modern Treasury (Paxos partnership lead — verbatim):**
> "Modern Treasury announced a partnership with Paxos to help businesses incorporate stablecoin payments with their existing payment methods."

What this lead does right: one sentence, names both parties, names the action, names the benefit to the buyer. No feature listing in the lead. No enthusiasm.

**Fireblocks (Chainlink Labs partnership headline — verbatim):**
> "Fireblocks and Chainlink Labs Announce Strategic Collaboration To Accelerate Regulated Stablecoin Issuance"

What this headline does right: both company names, concrete action ("Announce"), elevated modifier ("Strategic Collaboration"), outcome phrase names the compliance dimension first ("Regulated") before the category ("Stablecoin Issuance"). "Regulated" is the word that signals this is for institutional buyers, not the general crypto market.

**Fireblocks (customer quote — verbatim, WonderFi CEO):**
> "Fireblocks' new Policy Engine is a leap forward for operational clarity. The new structure and UX make it far easier to manage complex policies at scale — whether it's organizing rules by business unit or getting visibility into which ones are active. These updates raise the security bar and strip out manual steps our ops team used to handle. The time we save can now go toward higher-value work."

What this quote does right: names a specific product (Policy Engine), names specific capabilities (organizing by business unit, visibility into active rules), names a specific workflow it replaces (manual steps), states the downstream outcome (time freed for higher-value work). This is what a real executive sounds like — not PR copy.

---

## Reference: Headline patterns

Study these patterns before writing any Boundless headline.

| Pattern | Verbatim example | Use case |
|---|---|---|
| Brand + Launches + Product: Descriptor | "Modern Treasury Launches Payments: An Integrated PSP for Fiat and Stablecoins" | New product with a category claim |
| Brand + Takes On + Problem + With + Solution | "ComplyAdvantage Takes on Payment Fraud with New AI-powered Solution" | Problem/solution positioning |
| Client + Selected + Vendor + to + Outcome | "Clearwater Analytics Selected by T. Rowe Price to Power Stable Value Investment Operations" | Design partner or customer win |
| Brand A + and + Brand B + Announce + to + Outcome | "Fireblocks and Chainlink Labs Announce Strategic Collaboration To Accelerate Regulated Stablecoin Issuance" | Partnership with a compliance dimension |
| Client-as-subject + deploying + to + Outcome | "PwC is deploying Claude to build technology, execute deals, and reinvent enterprise functions for clients" | Major customer adoption |
| Brand + Launches + Products + to + Drive + Category | "Stripe launches new products to drive stablecoins and agentic commerce into the mainstream" | Category-shaping launch |

**Boundless adaptations of each pattern:**

- Launch: "Boundless Launches Shield: Compliance Infrastructure for Public Blockchains"
- Problem/solution: "Boundless Addresses the Compliance Gap Holding Institutions Off Public Blockchains"
- Customer win: "[Partner] Deploys Boundless Shield to Bring Confidential Stablecoin Payments to [Network/Market]"
- Partnership: "Boundless and [Chain Partner] Announce Integration to Enable Compliant Stablecoin Payments on [Chain]"
- Chain expansion: "Boundless Shield Now Available on [Chain], Bringing Compliance Infrastructure to [N] Blockchains"

---

## Reference: What institutional B2B press releases do differently

**1. Name the buyer title in the lead**
- Generic: "...a new solution for financial teams..."
- Institutional (Clearwater actual): "...provides Chief Financial Officers (CFOs) and treasury teams with powerful capabilities..."
For Boundless: name the specific role — "treasury operations teams," "stablecoin payment platforms," "payroll providers building on public blockchains," not just "financial institutions."

**2. Move proof to paragraph 2, not boilerplate**
- Stripe moves "$1 trillion in payments" to paragraph 2.
- Modern Treasury moves "$400 billion processed for companies like Anchorage Digital, Float, Gusto" to paragraph 2.
Proof in paragraph 2 says: this company has the scale to make this announcement credible. Proof buried in boilerplate says: we couldn't find a better place for it.

**3. Executive quotes carry strategic weight, not enthusiasm**
- Banned: "We are delighted/thrilled/excited to..."
- What works (Dario Amodei at Anthropic, verbatim): "AI is changing how almost everyone works, and enterprises need both cutting-edge AI and trusted expertise to deploy it at scale." One declarative sentence. Names the problem. Names the answer. No feelings.
- What works (Clearwater CFO, verbatim): "Every CFO and finance leader wants to be able to compare and learn from their peers. Today, they might know their return or book yield, but they have no idea how they stack up against their industry peers." Names the exact buyer persona's problem in vocabulary that buyer would use themselves.

**4. Customer/partner quotes name specific products and workflows**
Generic (unusable): "This was an easy decision for us and we look forward to working with Boundless."
Institutional (usable): "[Product name] is a significant step forward for [specific use case]. We can now [specific capability] without [specific prior friction]. The time our [ops/compliance/treasury] team saves can go toward [higher-value outcome]."

**5. Compliance framing is explicit, early, and anchored to regulation**
From ComplyAdvantage's acquisition release (verbatim): "Financial institutions and other regulated entities are required by law to ensure the people and organizations they choose to do business with are legitimate..."
This sentence pattern — citing the legal requirement before the product — is the standard institutional compliance press release opening move. It frames the product as the answer to a legal obligation, not an optional feature.

**6. Partnership headline gives the partner the win**
- "Boundless Partners with Stellar" — wrong (Boundless's win)
- "Stellar Institutions Can Now Run Compliant Stablecoin Payments with Confidential Transaction Data" — right (partner's audience gets the outcome)
Same rule as LinkedIn partnerships: the partner gets the outcome; Shield makes it possible.

---

## AP style conventions (for wire distribution)

- **Dateline**: CITY, State/Country, Month Day, Year /PRNewswire/ —— (for wire). "CITY—" em dash only for owned media.
- **Headline case**: Title case.
- **Quote attribution**: "Quote," said Full Name, Title at/of Company. Always "said" (past tense), never "says."
- **Ticker symbols**: Boundless is private; no ticker. For public company partners, include on first reference: "(NYSE: CWAN)."
- **Numbers**: Numerals for all figures ($400 billion, 2,000 organizations). Spell out in casual contexts ("more than 50 features").
- **Months**: Abbreviated on wire (Jan., Feb., Sept., Oct., Nov., Dec.). Spelled out on owned media.
- **Oxford comma**: Not used in simple lists (AP standard).
- **Active voice**: Leads and headlines always use active voice.
- **Paragraph length**: 2–4 sentences maximum per paragraph.
- **"FOR IMMEDIATE RELEASE"**: Appears above the headline on wire-distributed releases.
- **"###"**: Standard press release end mark. Appears after the last paragraph before boilerplate.

---

## Release templates

### Major product launch (400–700 words)

```
FOR IMMEDIATE RELEASE

Media Contact:
[Name]
[Email]
[Phone]

Boundless Launches Shield: Compliance Infrastructure for Onchain Finance

[Optional subheadline: Shield enables financial institutions and platforms to run stablecoin
payments, treasury operations, and payroll on public blockchains with confidential transaction
data, continuous compliance, and programmable controls.]

CITY, Month Day, Year — Boundless, a compliance infrastructure company for public
blockchains, today announced the launch of Boundless Shield™, [brief category descriptor].
[One sentence: the primary problem Shield solves for the named buyer.]

[Second paragraph: Specific capabilities and proof. Name the three pillars by outcome,
not feature label. Name chains. Name compliance providers. If there are design partners —
name them here.]

"[Executive quote: 2–3 sentences. Sentence 1: the market problem in the buyer's vocabulary.
Sentence 2: what Shield does about it, specifically. No enthusiasm language.]," said
[Full Name], [Title], Boundless.

[Body paragraph: Third pillar or deeper capability detail. 2–4 sentences. Name specific
use cases: stablecoin payments, payroll, treasury, institutional DeFi, tokenized assets.]

[Body paragraph: Deployment and access. Who can access, how, and on what chains.]

"[Design partner or customer quote: name a specific capability, name a specific workflow it
replaces, name the operational outcome. 3–5 sentences. Should sound like a real executive,
not a PR quote.]," said [Full Name], [Title] at [Customer/Partner Company].

[Optional: Founding Design Partner Program or access CTA in prose form, not bullet.]

###

About Boundless
[See boilerplate block below]

Media Contact:
[Name, email, phone]
```

---

### Partnership announcement — chain partner (300–500 words)

```
FOR IMMEDIATE RELEASE

[Chain] Institutions Can Now Run Compliant Stablecoin Payments with
Confidential Transaction Data Through Boundless Shield

[Optional subheadline: Boundless and [Chain Foundation/Organization] announce integration
to bring compliance infrastructure to [Chain]'s growing institutional base.]

CITY, Month Day, Year — [Chain Foundation/Organization], [descriptor], and Boundless,
compliance infrastructure for public blockchains, today announced [nature of integration]
to enable [specific buyer type: financial institutions, payment companies, payroll platforms]
on [Chain] to run [specific operations] with the data controls required to operate at
enterprise scale.

[Second paragraph: What the combined offering enables. Name specific capabilities.
Name the audience — what type of institution on this chain benefits.]

"[Chain partner quote: their perspective — why this enables their institutional strategy.
1–2 sentences. Should reference their network's growth or the opportunity this unlocks for
their ecosystem.]," said [Full Name], [Title], [Chain Organization].

"[Boundless quote: complementary, not redundant with the above. Names what Boundless
specifically contributes. References the broader compliance infrastructure thesis.]," said
[Full Name], [Title], Boundless.

[Optional body paragraph: Named early customers or institutions already using or piloting.
If available, this is the most important paragraph.]

###

About [Chain Organization]
[60–100 words]

About Boundless
[See boilerplate block below]
```

---

### Design partner / customer win (300–450 words)

```
FOR IMMEDIATE RELEASE

[Partner] Deploys Boundless Shield to Bring [Specific Outcome] to [Network/Market]

CITY, Month Day, Year — [Partner], [descriptor], today announced it is deploying
Boundless Shield to [specific outcome: run stablecoin payments with transaction confidentiality
and compliance / enable institutional DeFi with programmable controls / process payroll onchain
without exposing salary data].

[Second paragraph: What specifically changes for [Partner]'s customers or operations.
Name the use case. Name the chain. Name the compliance providers they're integrating.]

"[Partner executive quote: Names the specific problem they had, what Shield enables, what
their customers now get. 3–4 sentences. Specific, operational, not enthusiastic.],"
said [Full Name], [Title], [Partner].

"[Boundless quote: positions the design partner win as validation of the category,
not just a customer win. 1–2 sentences.]," said [Full Name], [Title], Boundless.

[Optional: brief technical detail on how Shield deploys for this partner's use case.]

###

About [Partner]
[60–100 words]

About Boundless
[See boilerplate block below]
```

---

### Chain expansion (200–350 words)

```
FOR IMMEDIATE RELEASE

Boundless Shield Now Available on [Chain], Expanding Compliance
Infrastructure for Onchain Finance to [N] Blockchains

CITY, Month Day, Year — Boundless today announced the availability of Boundless Shield
on [Chain], bringing transaction confidentiality, continuous compliance, and programmable
controls to [description of the Chain's primary institutional use case] on [Chain].

[Second paragraph: What Shield on this chain enables. Who benefits: what specific type of
company building on this chain can now do what they could not before. Name specific use cases
relevant to that chain's ecosystem.]

"[Boundless executive quote: explains the chain choice — why this chain matters for
institutional onchain finance. 1–2 sentences. Specific, not generic.]," said [Full Name],
[Title], Boundless.

[Optional: quote from chain foundation or a named team already deploying on this chain.]

Shield is currently available on Ethereum, Stellar, XRPL, and Solana. [Insert chain] marks
[N]th chain deployment. [Brief note on how teams access Shield on this chain.]

###

About Boundless
[See boilerplate block below]
```

---

### Executive hire (200–400 words)

```
FOR IMMEDIATE RELEASE

Boundless Names [Full Name] as [Title]

CITY, Month Day, Year — Boundless today announced that [Full Name] has joined the
company as [Title]. [One sentence: what this hire signals about the company's direction
— not a list of the executive's prior employers.]

[Second paragraph: Relevant background — prior roles, what specific expertise they bring.
Name employers by name, not just by category. Focus on what they built, not where they worked.]

"[Hire's quote: their view on the market problem Boundless is solving. 2–3 sentences.
Should reflect that they did their homework on the company. Not 'I'm excited to join...'
— open with a market observation, end with what they'll do about it.]," said [Full Name].

"[Boundless executive quote: explains the hire's strategic fit. Why now, why this person,
what they'll build. 1–2 sentences.]," said [Boundless Executive], [Title], Boundless.

[Optional: brief context on Boundless's current stage or growth that makes this hire timely.]

###

About Boundless
[See boilerplate block below]
```

---

### Executive thought leadership / newsjacking pitch

This is a media pitch letter, not a press release. Structure is different: 3–5 short paragraphs, no dateline, no boilerplate, ends with a specific ask.

```
Subject: [Exec name] — available to comment on [specific news hook] / [Byline offer: title]

[Para 1: The news hook. 2 sentences. What happened in the market this week that's relevant.
Cite the specific event or article. Be specific — "last Tuesday's Senate Banking Committee
hearing on stablecoin reserve transparency" beats "growing regulatory pressure."]

[Para 2: The gap in the coverage. 1–2 sentences. What the current coverage misses or gets
wrong — from an operator's perspective. This is where your executive's POV enters.]

[Para 3: The executive's specific angle. 2–3 sentences. What they'd argue, or what they've
seen firsthand. Name a specific operational reality: "We've seen stablecoin payment companies
lose banking relationships because their on-chain transaction history was readable by
correspondent banks scanning for crypto exposure."]

[Para 4: The offer. Be direct — either "available for 15-minute briefing" or "can deliver
a 600-word byline by [date]" or "can provide a data point from our deployment experience."]

[Sign-off: Name, title, company, phone.]
```

**Newsjacking topics relevant to Boundless (maintain this list):**
- Any stablecoin regulation news (GENIUS Act, MiCA stablecoin provisions)
- Bank de-risking or crypto banking access announcements
- Sanctions enforcement actions involving crypto
- FATF Travel Rule compliance updates
- Major DeFi exploit or compliance failure
- Treasury department guidance on stablecoin reserve reporting
- Any major institution going onchain (custody, payments, settlements)

---

## Boundless boilerplate (canonical — update numbers before each release)

```
About Boundless

Boundless provides compliance infrastructure for public blockchains. Shield, Boundless's
core product, enables financial institutions, payment platforms, and payroll providers to
run stablecoin payments, treasury operations, and yield strategies on public blockchains
with confidential transaction data, continuous compliance, and programmable controls.
Shield deploys on Ethereum, Stellar, XRPL, and Solana and integrates with leading compliance
providers including Persona, Chainalysis, and TRM Labs. [Add: funding or design partner count
when public.] Learn more at boundless.network.
```

**Notes on the boilerplate:**
- "compliance infrastructure for public blockchains" — Boundless descriptor. Use verbatim.
- Do not use "privacy" (noun). Do not use "layer."
- Named compliance providers (Persona, Chainalysis, TRM Labs) are the institutional credibility signal — keep them.
- Chain order: Ethereum, Stellar, XRPL, Solana. Always in this order.
- "[Add: funding or design partner count when public]" — fill in before each release. Named investors and transaction volume are credibility anchors. Don't leave blank.

---

## Copy rules

### Headline rules

- 70–110 characters. Under 95 is better.
- Name the buyer's outcome, not the product's feature: "Enable Compliant Stablecoin Payments" not "Add Transaction Confidentiality."
- "Regulated" or "Compliant" in the headline signals institutional positioning — use when relevant.
- No exclamation marks. No ellipsis. No question marks.
- Title case for wire; check outlet style for owned media.
- Both companies named in partnership headlines — neither buried.

### Lead paragraph rules

- One or two sentences. Three sentences maximum.
- Structure: [Company, descriptor], today announced [what], [brief benefit to named buyer].
- Name the buyer type explicitly: "financial institutions," "stablecoin payment platforms," "payroll providers" — not "companies" or "businesses."
- For partnerships: name both companies with descriptors in the same sentence. No "and" linking without a descriptor for the second company.
- Do not start with a market observation. Get to the news first. (ComplyAdvantage's problem-first lead is effective for pitching journalists; for wire distribution, the news comes first.)

### Executive quote rules

- Boundless CEO/founder quote: 2–3 sentences max. Sentence 1: the market problem in the buyer's vocabulary. Sentence 2: what Shield does about it. Never: "We're excited," "We're proud," "We're thrilled."
- Partner/customer executive quote: complementary to the Boundless quote — different dimension, not redundant.
- Quote placement: Boundless CEO quote after paragraph 2. Partner/customer quote later in the body.
- For partnerships: if the partner is more prominent (larger brand), their quote goes first. Boundless quote follows.

**Quote vocabulary bans (for all quotes):**
- "Delighted," "thrilled," "excited," "proud," "pleased" — never in any quote.
- "Innovative," "powerful," "seamless," "robust," "cutting-edge" — PR filler. Replace with specifics.
- "Journey," "ecosystem" (unless technically accurate), "unlock value," "leverage synergies."

### Body paragraph rules

- Inverted pyramid: most important information first, supporting detail descending.
- One topic per paragraph. 2–4 sentences.
- Proof goes in paragraph 2 (transaction volume, partner count, named design partners) — not just in the boilerplate.
- Name named customers if available. Named customers in the body beat "a leading financial institution."
- Technical specifications (chain names, compliance provider names, protocol names) are proof points — use them.

### Compliance language

Never: "Shield does KYC," "Shield verifies your users," "Shield provides AML."
Always: "continuous compliance — KYC/KYB and sanctions screening on every participant and transaction, through your existing compliance providers."
Compliance integrations in the release: name the providers specifically — Persona (KYC/KYB), Chainalysis (transaction screening), TRM Labs (wallet monitoring).
Frame the compliance requirement as the legal obligation it is: "regulated entities are required to verify participants and screen transactions."

### Vocabulary bans (same as all Boundless copy)

Never: "privacy" (noun — use "confidentiality"). "Anonymity." "Institutional-grade." "Pools." "Mandate" (use "compliance framework"). "Layer."

"Onchain" — one word, lowercase.

"Boundless Shield™" — trademark on first mention in a release. "Shield" on subsequent mentions.

---

## Quality checklist

**Before delivering any release:**
- [ ] Headline names a buyer outcome, not a product feature
- [ ] Lead paragraph is 1–2 sentences; names buyer type explicitly
- [ ] Proof (metrics, named customers) appears in paragraph 2 — not only in boilerplate
- [ ] Boundless CEO quote: 2–3 sentences, no enthusiasm language, names the problem then the answer
- [ ] Partner/customer quote: names a specific product, capability, or workflow — not generic praise
- [ ] Partner framed as their win, not Boundless's win (partnerships)
- [ ] No "delighted," "thrilled," "excited," "proud" in any quote
- [ ] Compliance framed as integration with named providers — not "Shield does KYC"
- [ ] No vocabulary ban words: privacy (noun), anonymity, institutional-grade, pools, mandate, layer
- [ ] "Onchain" not "on-chain"
- [ ] "Boundless Shield™" on first mention; "Shield" after
- [ ] Chain order: Ethereum, Stellar, XRPL, Solana
- [ ] AP style: "said" not "says"; title case headline; no Oxford comma
- [ ] Boilerplate is current (metrics filled in, not placeholder)
- [ ] "###" end mark before About section
- [ ] Both About sections present for partnership releases
- [ ] Word count appropriate: launch 400–700 words; partnership 300–500; chain expansion 200–350
