---
name: launchvideo
description: Write and structure launch video scripts for Boundless. Covers scene-by-scene copy, title card text, UI demo narration, and transition lines. Reference video type: Anthropic/Claude product launch style — short, text-driven, product UI does the proof. No voiceover scripts. No marketing jargon.
user-invocable: true
---

# Launchvideo — Boundless

LinkedIn video, X/Twitter video, website hero video, and demo-day assets. Not for long-form explainer videos.

---

## When invoked

**Step 1 — Identify the video type**

Ask immediately if not provided:
- What type: major product launch / feature announcement / use case demo / chain expansion / partnership?
- Target placement: X/Twitter post, LinkedIn, website hero, or demo day?
- Has a product scene map already been sketched? If yes, have user share it.
- Is there existing approved copy (e.g., from a prior asset) that must carry through?

**Step 2 — Load context when relevant**

For any Boundless video, read:
- `~/.claude/projects/-Users-santiagocampos/memory/boundless-shield-launch-video.md` — canonical scene map, approved copy, copy decisions for Shield launch (primary reference for Boundless style)
- `~/.claude/projects/-Users-santiagocampos/memory/boundless-messaging-homepage.md` — approved product positioning
- Three pillars: confidential transaction data, continuous compliance, programmable controls

**Step 3 — Output format**

Deliver a scene table: Scene number | Duration (approx) | On-screen copy | What's shown (UI or title card) | Notes.

One version only. No alternatives unless explicitly asked. Annotate 2–3 copy decisions.

---

## Reference: Anthropic/Claude launch video patterns

Two reference videos studied. Both under 65 seconds. Both drove millions of views. The structural logic applies directly to Boundless.

---

### Video 1: Claude Managed Agents for Financial Services (1:04, 13M views)

Tweet copy: "New for financial services: ready-to-run Claude agent templates for building pitches, conducting valuation reviews, closing the books at month-end, and more. Install them as plugins in Cowork and Claude Code, or use our cookbooks to run them in production as Managed Agents."

**Scene map:**

| Time | What's shown | On-screen text |
|---|---|---|
| 0:03 | Title card, globe animation | "Code w/ Claude" |
| 0:11 | Title card | "New in Claude Managed Agents" |
| 0:12–0:14 | Cascading pill/tag animations (feature list) | Pitch builder, Meeting preparer, Earnings reviewer, Model builder, Market researcher |
| 0:14–0:17 | More pill animations | GL reconciler, Month-end closer, Statement auditor |
| 0:18 | Full-screen title card | "Add them with easy-to-install plugins" |
| 0:19–0:22 | Color shift → terracotta/orange; title card | "Or deploy them as Claude Managed Agents: hosted, governed, production-ready on day one" |
| 0:23 | ARQOS app UI — Agents dashboard grid (5 agents) | — |
| 0:24 | Closer view of KYC Screener + Valuation Reviewer agent cards | — |
| 0:32 | Running agent queue (real company names) + "Run Q1 2026 close" button | — |
| 0:37 | API agents list — all 5 showing "Running" status badges | — |
| 0:41 | Valuation grid: "7 valuations complete — 1 needs review" | — |
| 0:49 | Drill-down: Greater Midwestern Bolt & Flange valuation, EBITDA bridge, GL Reconciler commentary | — |
| 0:54 | "Valuation approved" modal overlay | — |
| 1:01 | Clean Claude logo wordmark | — |

**What this video does structurally:**
- Title card → feature list (pills, not bullets) → two access paths (plugin vs. Managed Agent) → color shift to signal mode change → UI proof → outcome → logo
- The feature list is cascading pills — motion creates energy without needing a narrator
- Color background shift (cream → terracotta) is a visual signal, not decoration — it means "this is the more serious deployment mode"
- Real data, realistic company names. "Greater Midwestern Bolt & Flange" is fictional but specific. That specificity reads as real.
- The outcome ("Valuation approved" modal) is a single screen, ~5 seconds — not a paragraph

---

### Video 2: Claude Security (0:50, 4.8M views)

Tweet copy: "Claude Security is now in public beta for Claude Enterprise customers. Claude scans your codebase for vulnerabilities, validates each finding to cut false positives, and suggests patches you can review and approve."

**Scene map:**

| Time | What's shown | On-screen text |
|---|---|---|
| 0:01 | Title card, light background, serif font | "Claude Security now available in public beta" |
| 0:05 | Hand-drawn illustration: keyhole in laptop screen | — |
| 0:08 | Claude sidebar with "Security" menu item | — |
| 0:10 | Onboarding screen | "Get started with Claude Security" + "Start a scan" CTA |
| 0:13 | Post-scan result screen | "acme-corp/hookrelay — 4 findings — Completed" |
| 0:15 | Findings list | Shell command injection [Critical], JWT auth bypass [Critical], Path traversal [Critical], SSRF [High] |
| 0:17 | Interlude title card | "Find complex vulnerabilities" |
| [continues] | Deeper UI flows — validation, patch suggestions | — |
| final | Claude logo wordmark | — |

**What this video does structurally:**
- Announcement title card → abstract metaphor illustration → product entry point (sidebar) → onboarding → scan result → findings list → transition claim card → deeper UI → logo
- The illustration (keyhole in laptop) is used exactly once, early — it humanizes a technical concept before the product appears. It is not used again.
- Interlude title cards break up long UI sequences. Use sparingly — one per major section.
- Findings list names real vulnerability types. Not "critical security issues found" — actual CVE-category names.

---

## Primary Boundless canon: Shield launch video

Full scene map and approved copy in `boundless-shield-launch-video.md`. Key structural decisions:

**Approved scene sequence:**
1. Toggle animation (visual only — "Confidentiality" switches on)
2. Title card — "Introducing Boundless Shield™"
3. Positioning line — "Keep onchain finance confidential"
4. Tension resolution — "without breaking compliance"
5. Multichain proof — "Works on any chain" + UI: blockchain dropdown showing Ethereum, XRPL, Stellar, Solana, Cosmos
6. Controls intro — "Controls you've never had onchain"
7. Controls UI demo — participants → transaction limits → view access (Finance/Compliance)
8. Compliance intro — "Stay compliant"
9. Compliance UI — Persona/Chainalysis/TRM Labs connect → KYC/OFAC/geo toggles → all on
10. Compliance confirmation — "✓ Compliance active on all transactions" (shine effect)
11. Use cases pivot — "Payments. Yield. Treasury."
12. Use cases UI — Shield menu → hover each → sub-use-cases expand
13. Three-pillar close — "Confidentiality. Compliance. Control."
14. Brand card — "Boundless Shield"
15. CTA — "Join the Founding Design Program"
16. URL — "shield.boundless.network"

**Key copy decisions from Shield (apply these rules going forward):**

| Scene type | Approved pattern | What was rejected |
|---|---|---|
| Tension resolution | "without breaking compliance" | "with compliance built in" — generic |
| Product property | "Works on any chain" | "Deploy on any blockchain" — sounds like user work |
| Novelty signal | "Controls you've never had onchain" | "Set the rules" — sounds like any admin panel |
| Compliance outcome | "Stay compliant" | "Stay compliant automatically" — weak adverb; "Connect your compliance stack" — excludes platforms without one |
| Use case transition | "Payments. Yield. Treasury." | "Built for onchain finance" — too general |
| Three-pillar order | Confidentiality. Compliance. Control. | Compliance first — wrong order (benefit before enabler) |

---

## Scene structure patterns

### Major product launch (60–90 seconds)

```
Scene 1: [Visual hook or title card]
  — Product name only, or a motion device (toggle, animation). No tagline yet.

Scene 2–3: [Positioning + tension]
  — Line 1: what the product does (positive)
  — Line 2: what it resolves (the tension or the cost of the status quo)

Scene 4: [Scale/deployment claim]
  — "Works on [X]" / "Deploys in [timeframe]" / "Connects to [ecosystem]"
  — Immediately followed by UI showing this

Scene 5–8: [Core capability demo — 3 capabilities max]
  — Each capability: one title card (3–5 words) + 1–2 UI screens
  — UI screens do the proof; copy names the concept

Scene 9: [Outcome or confirmation]
  — Single screen with modal, status badge, or metric
  — "Approved", "Active", "Complete" — short, decisive

Scene 10: [Use case or segment pivot]
  — Short noun list (Payments. Yield. Treasury.) or target segment
  — Followed by UI showing the service menu or use case navigation

Scene 11: [Three-pillar or closing claim]
  — Noun triad or single reframe line
  — Not a feature — a category claim

Scene 12–13: [Brand close + CTA]
  — Product name
  — CTA line ("Join the Founding Design Program")
  — URL or link call
```

---

### Feature announcement (30–50 seconds)

```
Scene 1: [Announcement title card]
  — "New: [Feature]" or "[Feature] now available in [context]"
  — Light background, clean serif, immediate

Scene 2: [Optional: abstract illustration]
  — One illustration, used once, early
  — Humanize the technical concept before showing the product
  — Not decorative — functional

Scene 3–4: [Product entry point]
  — Where the feature lives in the UI (sidebar, settings, dashboard)
  — Onboarding or "Start" screen if there is one

Scene 5–7: [Capability sequence]
  — What the scan/process/check finds
  — The output (list of findings, results grid, recommendations)

Scene 8: [Interlude card — if needed]
  — "Find X" or "Resolve X" — names what the next UI section does
  — Only use if there is a clear second major capability

Scene 9–11: [Resolution or approval UI]
  — The action (review, approve, apply) and the confirmation
  — Real data in the UI (real-looking names, real-looking numbers)

Scene 12: [Brand close]
  — Logo wordmark only
```

---

### Chain expansion / integration announcement (20–35 seconds)

```
Scene 1: [Title card]
  — "Shield now on [Chain]." or "[Chain] teams can now [outcome]."

Scene 2: [What this enables — 2 lines]
  — Who benefits + what they can do now

Scene 3–5: [UI proof]
  — Chain in the product dropdown or dashboard
  — Optional: a capability demo specific to the chain's primary use case

Scene 6: [Brand close + link]
```

---

## Copy rules for each scene type

### Title cards (announcement/transition)

- 4–8 words maximum. Under 6 is better.
- Declarative or present tense. Not future ("You'll be able to..."). Not past ("We've added...").
- Avoid filler: no "Introducing," no "We're excited to," no "Now available"... unless that's the only content of the card (e.g., "Claude Security now available in public beta" is the full announcement).
- State the thing, then the context if needed. "Shield now on Solana." not "Solana is now supported by Shield."

### Feature list cards (pill/tag animations)

- Noun phrases only: "Pitch builder" not "Build pitches"
- Present-tense nouns, not -ing words: "Month-end closer" not "Closing the books"
- Match the vocabulary of the target user. Financial services: "GL reconciler," "Earnings reviewer," not "expense tracker," "data tool"
- 4–8 items maximum. Stop before the list feels exhaustive.

### Interlude/transition cards

- Use sparingly: once per major section, only when the UI sequence is long
- Function: name what the next UI section demonstrates
- Format: "Find X" / "Run X" / "Review X" — verb-noun, 3 words max
- Not a summary. Not a repetition of the title card.

### Outcome/confirmation cards

- One line, max 5 words: "Valuation approved." / "Compliance active on all transactions."
- Use a checkmark, status badge, or modal — not a text statement
- Real-looking data makes the outcome credible. Show a specific name or number.

### UI screens (what to show)

- Show the step, not the page. One UI screen = one action or one result.
- Real-looking fictional data. Not "Company Name" or "User 1." Use realistic names, real-looking numbers.
- Never show empty states. Never show error states unless the product resolves them.
- For compliance UI: show named providers (Persona, Chainalysis, TRM Labs) — not generic "compliance provider"

### Closing brand card

- Product name only (or wordmark). No tagline on the closing card.
- If there's a CTA, it comes before the final brand card on its own card.

---

## Boundless-specific rules

### Vocabulary (same bans as website/LinkedIn)

Never: "privacy" (noun) — use "confidentiality." Never: "anonymity," "institutional-grade," "pools," "mandate," "layer."

"Onchain" — one word, lowercase. Technical descriptor, not slang.

Compliance always: "integrates with existing compliance providers" — not "Shield does KYC" or "Shield verifies users."

### Three-pillar order

Always: Confidentiality. Compliance. Control.
Never invert. The order is: benefit → enabler → control plane.

### Chain mention order

Established order: Ethereum, Stellar, XRPL, Solana. For newer chains: Cosmos, Base. Use the dropdown UI for visual proof of multichain — don't just list chains in copy.

### "Introducing Boundless Shield™" rule

Trademark symbol on first mention in any launch asset. Subsequent scenes: "Shield" is sufficient.

### CTA in launch assets

"Join the Founding Design Program" (if Design Partner Program is still active)
Otherwise: "Apply to join" + URL
URL format: lowercase, no trailing slash

### Color and visual tone

No emojis in on-screen text. No exclamation marks in title cards. Clean type only.
Background shifts (like Anthropic's terracotta shift) are legitimate signals — use them intentionally to mark a mode change or deployment tier, not for decoration.

---

## What makes a Boundless launch video work

**The UI does the proof. The copy names the concept.**

The worst version of a fintech launch video: a narrator explains features over a static screenshot.
The Anthropic version: show the product in motion, use title cards as chapter markers, let the UI demonstrate the complexity.

For Boundless, the three-pillar structure maps to three UI sequences:
- Confidentiality: toggle, policy setup, encrypted transaction view
- Compliance: provider connect, rule toggles, participant verification status
- Controls: transaction limit configuration, access permission settings, approval flows

Each pillar = one intro card + two UI screens + one outcome screen.

**Real-looking data signals production readiness.**

"Greater Midwestern Bolt & Flange" reads as real even though it's clearly fictional. "Acme Corp" reads as fake. Use specific, mundane business names for fictional companies in UI screens. Same rule for financial figures: "$47,250" reads as real; "$50,000" reads as a placeholder.

**The outcome is a single moment, not a summary.**

The "Valuation approved" modal is 5 seconds. The "✓ Compliance active on all transactions" screen is 3 seconds. The video does not explain what just happened — it shows that it worked.

---

## Quality checklist

**Before delivering a scene map:**
- [ ] Total runtime: under 90 seconds for major launch, under 50 for feature announcement
- [ ] No narrator copy — all on-screen text
- [ ] UI appears before scene 5 (don't delay the product reveal)
- [ ] Feature list uses noun phrases, not gerunds
- [ ] Outcome scene exists — one clear "it worked" moment
- [ ] No vocabulary ban words in any title card
- [ ] Three-pillar order: Confidentiality. Compliance. Control. (if used)
- [ ] Compliance UI shows named providers (Persona, Chainalysis, TRM Labs)
- [ ] Fictional data in UI is specific, not generic ("Placeholder Company")
- [ ] CTA appears before closing brand card, not after
- [ ] No exclamation marks in on-screen copy
- [ ] Trademark symbol on first "Boundless Shield" mention
- [ ] Color/background shifts are intentional — note the reason in the scene map
