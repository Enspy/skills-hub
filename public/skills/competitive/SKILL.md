---
name: competitive
description: Build a competitive comparison table for a sales deck slide. Works for any company and competitor. Covers research methodology, wedge-finding, table structure, cell copy rules, and slide title/descriptor. Pulls from company context file if available.
user-invocable: true
---

# Competitive comparison skill

Use when building a [Your Company] vs. [Competitor] comparison table for a sales deck slide.

**Usage:** `/competitive [Competitor]`

---

## Step 0 — Load context

**If `@boundless-context.md` or a company context file exists, read it first.** Use the product descriptions, positioning language, and differentiators from that file throughout.

If no context file is available, ask before proceeding:
1. What does your product do in one sentence?
2. What is the core differentiator — the thing you do that competitors structurally cannot?
3. Who is the buyer and what do they care most about?

Do not proceed without this grounding. A comparison built without knowing your own product produces symmetric, valueless output.

---

## Step 1 — Research first, write second

Before writing a single word of table copy, research the competitor. Do not rely on training data — it goes stale.

**Research checklist:**
- Read the competitor's official documentation, not just their marketing site
- Check developer docs or onboarding guides: what does it actually take to get started?
- Look for recent product launches that may have changed the picture
- Find customer case studies or implementation stories — what did real customers have to build themselves?
- Check for pricing pages: are there gating mechanisms, tiers, or infrastructure requirements?
- Look for community discussions, reviews (G2, Capterra, Reddit) about what users find painful

**Flag any claims about your own product that are now inaccurate.** Do not carry forward stale differentiators. Things that commonly go out of date: integrations, pricing model, self-serve availability, geographic support, compliance certifications.

---

## Step 2 — Find the wedge

The wedge is the structural difference that the competitor cannot fix without changing their core architecture. It is not a temporary gap, a roadmap item, or a feature your product happens to have today.

**Wedge-finding questions:**
- What is the competitor's fundamental architectural or business model choice that creates their limitation?
- Could the competitor credibly close this gap in 12 months without rebuilding the product? If yes, it is not the wedge.
- What would a buyer actually feel in practice — in their first week, their first quarter, their first scaling event?
- Is there real evidence (reviews, case studies, public support threads) that confirms this pain is real, not theoretical?

**The wedge is usually a paradigm difference, not a feature gap:**
- One product is a managed service; the other requires you to run infrastructure. The managed service can add features; the self-hosted product cannot become managed without a business model change.
- One product is opinionated; the other is infinitely configurable. The opinionated product can add options at the margin; the configurable product cannot become opinionated without removing the flexibility its users depend on.
- One product wraps the ecosystem; the other creates a new one. You cannot move a walled garden onto open rails without dismantling the garden.

**The strongest wedge leads the slide title.**

---

## Step 3 — Table structure

### Rows
Use exactly 5 rows (4 is acceptable if one row would duplicate another). Each row covers one distinct dimension. Do not let topics bleed across rows.

**Standard row set — adapt labels to what is most differentiating for this comparison:**

| Row | What it covers |
|---|---|
| Onboarding / setup | How you get started. Time to value, admin requirements, self-serve vs. gated. |
| Engineering / implementation lift | What the buyer has to build and maintain. Complexity, custom development, ongoing ops. |
| Core capability | The primary thing the product does — and how it differs in approach, not just feature count. |
| Adjacent capability / ecosystem | What's included vs. what must be sourced elsewhere. Network effects, integrations, extensions. |
| Operational overhead | Who manages the system over time. Admin burden, configuration debt, support dependency. |

**Row label rules:**
- Labels must be distinct — no topic should appear in two rows
- If a point doesn't fit cleanly into one row, it belongs in a different row or should be cut
- Rows that partially overlap dilute both — cut the weaker one

### Columns
Two columns: your product on the left, competitor on the right. Your product always on the left.

---

## Step 4 — Cell copy rules

### Bold lead word
Every cell starts with a **bold lead word or short phrase** (2–4 words max). The full table story must be readable from bold words alone — a buyer skimming only the bold text should understand the comparison.

**Examples of strong bold leads:**
- Immediate. / Gated.
- Included. / Not included.
- None. / High.
- Self-serve. / Requires admin.
- Opinionated. / Fully configurable.
- Managed. / Self-hosted.

**Comparability rule:** Bold leads must be two sides of the same dimension. A buyer should be able to read them side by side and immediately see the contrast. They are not separate descriptions — they are polar positions on the same axis.

Good pairs:
- Immediate. / Requires configuration.
- Full stack. / Gateway only.
- Built in. / Plugin-dependent.
- None. / Ongoing.
- One workflow. / Fully configurable.

Bad pairs (different dimensions — do not use):
- Flexible. / Enterprise-grade. ✗ (different axes entirely)
- Fast. / Customizable. ✗ (one is a performance claim, one is a capability claim)
- Included. / Must be built from scratch. ✓ (both answer "is this provided?" — works)

**Test:** read only the bold words down each column. Does your column tell a clean positive story? Does the competitor column tell a clear limitation story? Can each row's bold pair be read side by side as a direct contrast?

### Copy length
All cells in the same row must be similar length. If your cell is one short sentence, the competitor cell must also be one short sentence. Never write a single line for one column and a paragraph for the other.

### Your product cell framing
- Lead with positive capability — what the buyer gets, not what you lack
- Use active framing: "handles", "manages", "delivers" — not "allows you to" or "lets you"
- Avoid vague words: "seamless", "powerful", "robust", "intuitive"
- Describe the outcome for the buyer, not the mechanism

### Competitor cell framing
- Factually accurate — do not overstate limitations
- If the competitor has partially addressed something, acknowledge it: "basic X included; advanced Y requires a third-party plugin"
- Focus on the practical pain a buyer would feel, not the technical mechanism behind it
- Do not use jargon the target buyer won't know

### Language to avoid
- "Best-in-class", "industry-leading", "cutting-edge"
- "Seamless", "powerful", "robust" (describe the outcome instead)
- Antiframing: "not X, it's Y" — state what it is directly

---

## Step 5 — Battle-test the table

After drafting, run every row through these checks before finalizing.

### Apples-to-apples check
For each row, ask: are both cells answering the same question?

Common failure modes:
- Your cell answers "who does the work" (managed framing); competitor cell answers "what infrastructure is required" — different questions
- Your cell covers timing ("immediate"); competitor cell covers coverage ("what's included") — different dimensions
- One cell describes a capability; the other describes a cost — not comparable

**Fix:** Identify the single question the row is asking. Rewrite both cells to answer it. If you cannot make them comparable, cut the row or change the row label.

### Fact-check strong negative claims
After drafting, verify any cell where you make a strong negative claim about the competitor against a primary source.

Things to verify:
- "No X" — does the competitor have a partial solution, workaround, or third-party integration that addresses this?
- "Requires admin" — is there a self-serve tier that handles this automatically?
- "Manual" — has a newer product version automated this?
- "Not included" — is this a paid add-on vs. truly absent?

A precise, accurate limitation is more credible in a sales conversation than one the buyer can immediately refute.

### Wedge validation
For the row you have identified as the strongest wedge:
- Can the competitor neutralize this point by saying "we have X workaround"?
- If yes: does the workaround solve the problem, or create a new one?
- The wedge survives scrutiny when the competitor's own solution introduces a different tradeoff.

### Row distinctness check
Read all rows. If two rows are telling the same story from different angles, cut the weaker one. Overlapping rows dilute the strongest point.

---

## Step 6 — Slide title and descriptor

### Title
One line. Leads with the strongest wedge. Follow this pattern:
> [What your product delivers] without [what the competitor requires].

**Examples:**
- "Issue tracking without the issue tracker admin."
- "Payments infrastructure without the payments engineering team."
- "Team documentation without the documentation department."

### Descriptor
One sentence. State what your product does and how it contrasts with the competitor. No em dashes. No antiframing. Sentence case.

**Pattern:** "[Competitor] does X. [Your product] does Y." or "[What your product is], without [the burden the competitor imposes]."

---

## Output format

Deliver in this order:

1. **Research summary** — 3–5 bullets: what the research confirmed, what needed correcting, what the wedge is
2. **Slide title**
3. **Slide descriptor**
4. **Full comparison table** in markdown

---

## Worked examples

---

### Example 1: Notion vs. Confluence

**Wedge:** Confluence is built around a formal hierarchy — spaces, pages, child pages — that requires an admin to design and maintain before teams can work effectively. Notion has no required structure: teams start with a blank canvas and build what they need. This is architectural: Confluence cannot become unstructured without removing the hierarchy that its permissions and navigation depend on.

**Research notes:**
- Confluence requires a project admin to configure spaces, permissions, and page templates before first use. Confirmed in Atlassian onboarding documentation.
- Notion workspaces are live immediately with no admin setup required. Permissions are managed at the page level by any member.
- Cross-space search in Confluence has known reliability issues. Multiple G2 reviews cite "finding content" as a top pain point.
- Notion real-time collaboration and inline comments confirmed. Confluence inline comments exist but are separate from the edit experience.

**Title:** Team documentation without the documentation department.

**Descriptor:** Confluence requires an admin to configure it before teams can start. Notion teams are working the day they sign up.

| | Notion | Confluence |
|---|---|---|
| **Onboarding** | **Immediate.** Teams start with a blank canvas — no admin setup, no hierarchy to configure before the first page is written. | **Requires setup.** An admin must configure spaces, permissions, and page templates before teams can use it effectively. |
| **Structure** | **Flexible.** Teams build whatever structure matches how they work — wikis, databases, docs, and task views in any combination. | **Rigid.** Content lives in a predefined hierarchy of spaces and pages. Restructuring requires moving pages and updating links. |
| **Admin overhead** | **None.** No dedicated admin required. Any member manages their own pages and permissions. | **Ongoing.** Spaces, schemes, and templates require consistent admin attention to stay organized and usable as teams grow. |
| **Search** | **Cross-workspace.** Searches all content types — docs, databases, tasks — in a single query. | **Space-scoped.** Search is most reliable within a space. Cross-space content discovery requires knowing where something lives first. |
| **Collaboration** | **Inline.** Comments, mentions, and edits happen directly in the content surface in real time. | **Layered.** Comments and inline feedback are added on top of saved pages rather than integrated into the live editing experience. |

---

### Example 2: Stripe vs. Braintree

**Wedge:** Braintree is a payment gateway — it handles authorization and capture. Everything around it (fraud, payouts, reconciliation, reporting, expansion) must be built or sourced separately. Stripe is a full payments operating system: fraud, payouts, reconciliation, invoicing, and expansion support are all included. The gap is not feature depth — it is product scope. Braintree cannot become a full payments stack without rebuilding what it is.

**Research notes:**
- Braintree does not include native fraud detection. Confirmed on Braintree developer docs. Requires Kount or custom implementation.
- Stripe Radar runs on every transaction by default. No setup required for basic fraud protection.
- Braintree payouts are manual: timing and reconciliation require custom logic tied to bank settlement. Confirmed via Braintree support docs.
- Stripe payouts and reconciliation are automated. Stripe-generated reports confirmed in dashboard documentation.
- Braintree is owned by PayPal. Network decisions and product priorities are tied to PayPal's roadmap.

**Title:** Payments infrastructure without the payments engineering team.

**Descriptor:** Braintree solves the gateway problem. Stripe solves the payments operations problem — fraud, payouts, reconciliation, and market expansion included.

| | Stripe | Braintree |
|---|---|---|
| **Scope** | **Full stack.** Accepts payments, manages payouts, handles reconciliation, fraud detection, invoicing, and financial reporting — all in one platform. | **Gateway only.** Handles authorization and capture. Payouts, reconciliation, fraud tooling, and financial reporting must be built or sourced separately. |
| **Fraud** | **Included.** Stripe Radar runs on every transaction with no setup required. Customizable rules available on higher plans. | **Not included.** No native fraud detection. Requires a third-party integration or custom-built rules engine. |
| **Payouts and reconciliation** | **Automated.** Stripe generates payouts on a configurable schedule and produces reconciliation reports automatically. | **Manual.** Payout timing and reconciliation require custom logic tied to your bank and internal finance systems. |
| **Engineering lift** | **Low.** Pre-built UI components, webhook infrastructure, and SDKs cover most payment flows without custom development. | **High.** Gateway integration is straightforward. The surrounding operations layer — dispute handling, reporting, expansion — requires significant custom development per market. |
| **Expansion** | **Self-serve.** Adding a new market or currency is a configuration change. Local payment methods and compliance complexity handled automatically. | **Requires development.** Expanding to new markets typically requires additional gateway configuration and custom integration work per market. |

---

### Example 3: Linear vs. Jira

**Wedge:** Jira is infinitely configurable — issue type schemes, workflow schemes, field configurations, permission schemes. This means every team configures it differently, which requires a dedicated admin to keep coherent as the organization grows. Linear ships one opinionated workflow model that all teams follow. Jira cannot become opinionated without removing the configurability that its enterprise customers depend on.

**Research notes:**
- Jira project setup confirmed to require issue type scheme, workflow scheme, field configuration scheme, and permission scheme. Documented in Atlassian project admin guides.
- Linear confirmed as self-serve, immediate. No admin configuration required before first issue is created.
- Jira performance issues on large instances confirmed across multiple G2 and Reddit threads. Common complaint: page load time and transition lag.
- Linear keyboard-first design confirmed. Most actions available without leaving the keyboard.
- Jira reporting without plugins: limited. Advanced reporting confirmed to require Jira Align or third-party apps (e.g., EazyBI, Structure).

**Title:** Issue tracking without the issue tracker admin.

**Descriptor:** Jira lets every team configure their own workflow. Linear ships one workflow that works — no admin, no schemes, no configuration debt.

| | Linear | Jira |
|---|---|---|
| **Setup** | **Immediate.** Teams start tracking issues in minutes — no schemes, workflow configurations, or admin setup required. | **Requires configuration.** Projects need issue type schemes, workflow schemes, field configurations, and permission schemes before teams can work effectively. |
| **Speed** | **Native.** Keyboard-first interface — creating, updating, and triaging issues takes seconds. Built for fast, repeated daily use. | **Slow.** Page loads, form fields, and workflow transitions add friction to every interaction. Teams often maintain separate lightweight tools alongside Jira for day-to-day work. |
| **Admin overhead** | **None.** No dedicated admin required. Linear handles updates and workflow logic without manual maintenance. | **Ongoing.** Schemes and configurations require a dedicated Jira admin to stay coherent as teams and projects grow and change. |
| **Workflow consistency** | **Built in.** One workflow model — cycles, projects, priorities — that all teams follow. Consistency requires no governance. | **Fragile.** Every team can create custom workflows, and most do. Cross-team consistency requires active admin governance to maintain. |
| **Reporting** | **Included.** Cycle time, velocity, and burndown available out of the box with no dashboard configuration. | **Plugin-dependent.** Useful reporting beyond basic boards requires third-party apps or manual JQL dashboard configuration. |
