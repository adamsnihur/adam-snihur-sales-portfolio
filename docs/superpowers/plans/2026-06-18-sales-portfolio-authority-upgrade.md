# Sales Portfolio Authority Upgrade Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Upgrade the Polish sales portfolio with a verified AdVibes freelance case study, evidence-backed capabilities, four sales articles, and an approved executive-casual portrait while preserving the existing recruiter-first experience.

**Architecture:** Keep the Vite/React site static and dependency-light. Move portfolio content into typed local data modules, render the home and knowledge views through focused React components, and use a small hash parser for GitHub Pages-compatible routing. Treat portrait generation and article copy as explicit user-approval checkpoints before production integration.

**Tech Stack:** React 19, TypeScript 6, Vite 8, CSS, Node verification scripts, GitHub Pages, Codex image generation.

**Source specification:** `docs/superpowers/specs/2026-06-18-sales-portfolio-authority-upgrade-design.md`

---

## File map

### Create

- `src/types.ts` — shared content and route types.
- `src/data/experience.ts` — verified sales history, supporting history, methods, and the AdVibes project.
- `src/data/capabilities.ts` — four capability groups with evidence labels.
- `src/data/articles.ts` — article metadata and structured Polish article bodies.
- `src/routing.ts` — pure hash-to-route parser.
- `src/components/shared.tsx` — icons, section heading, site header, contact CTA, and footer.
- `src/components/HomePage.tsx` — existing home composition plus AdVibes, capabilities, and knowledge preview.
- `src/components/ProjectCaseStudy.tsx` — bounded AdVibes freelance case study.
- `src/components/CapabilityGroups.tsx` — evidence-backed capabilities.
- `src/components/KnowledgeSection.tsx` — three featured article cards and index CTA.
- `src/components/KnowledgeIndex.tsx` — complete list of four articles.
- `src/components/ArticlePage.tsx` — semantic article renderer and CTA.
- `src/components/NotFoundPage.tsx` — unknown knowledge-route fallback.
- `public/adam-snihur-sales-portrait.png` — user-approved sales portrait, minimum 1200 × 1500 px, 4:5 portrait composition.

### Modify

- `src/main.tsx` — entry point, hash route state, and top-level view selection only.
- `src/styles.css` — shared, case-study, capability, knowledge, article, and portrait styles.
- `src/responsive.css` — mobile/tablet behavior for all new views.
- `scripts/verify-build.mjs` — recursive source checks, required asset checks, content and route assertions.
- `README.md` — document hash routes, content ownership, local commands, and deployment checks.

### Do not modify

- Any file outside `sales-portfolio/`, except read-only consultation of `AdVibes/` sources.
- The main portfolio repository, source portrait, or deployment.
- `public/CV_Adam_Snihur_Przedstawiciel_Handlowy.pdf` in this implementation cycle.

---

### Task 1: Strengthen the verification contract

**Files:**

- Modify: `scripts/verify-build.mjs`
- Test: `scripts/verify-build.mjs`

- [ ] **Step 1: Add failing assertions for the planned modules and production portrait**

Replace the hard-coded `required` list with the final asset contract and add source-module checks:

```js
const required = [
  "dist/index.html",
  "dist/CV_Adam_Snihur_Przedstawiciel_Handlowy.pdf",
  "dist/adam-snihur-sales-portrait.png",
];

const sourceFiles = [
  "src/main.tsx",
  "src/routing.ts",
  "src/data/experience.ts",
  "src/data/capabilities.ts",
  "src/data/articles.ts",
  "src/components/HomePage.tsx",
  "src/components/KnowledgeIndex.tsx",
  "src/components/ArticlePage.tsx",
];

for (const file of sourceFiles) {
  const path = join(root, file);
  if (!existsSync(path)) throw new Error(`Brak modułu źródłowego: ${file}`);
}
```

Read all listed source files into one `source` string and assert the exact critical content:

```js
const assertions = [
  "Relacja otwiera drzwi",
  "Solar Volt",
  "03.2020–07.2021",
  "Konsultant procesu sprzedaży (freelance)",
  "03.2026–05.2026",
  "Wiedza sprzedażowa",
  "Sprzedaż B2B zaczyna się przed ofertą",
  "BATNA, ZOPA i ustępstwa",
  "Proces sprzedaży B2B: od leada do konsekwentnego follow-upu",
  "Handlowiec jako łącznik między klientem a operacjami firmy",
  "#/wiedza",
];
```

Add negative assertions for unsupported AdVibes outcome language:

```js
const forbiddenAdVibesClaims = [
  /AdVibes[^.]{0,160}(zwiększyłem|wzrost przychodu|ROAS|konwersj[aię]|wdrożon[oy])/i,
];

for (const claim of forbiddenAdVibesClaims) {
  if (claim.test(source)) throw new Error(`Nieweryfikowalne twierdzenie AdVibes: ${claim}`);
}
```

- [ ] **Step 2: Run the verifier and confirm the contract fails before implementation**

Run: `npm test`

Expected: FAIL with `Brak wymaganego artefaktu: dist/adam-snihur-sales-portrait.png` or `Brak modułu źródłowego`.

- [ ] **Step 3: Commit the failing verification contract**

```bash
git add scripts/verify-build.mjs
git commit -m "test: define sales portfolio authority contract"
```

---

### Task 2: Generate and approve the sales portrait

**Files:**

- Read: `public/adam-snihur-main-portfolio.jpg`
- Create: `public/adam-snihur-sales-portrait.png`
- Test: visual inspection in the existing `.portrait-wrap`

- [ ] **Step 1: Inspect the source portrait at original detail**

Use the local image inspection tool on `public/adam-snihur-main-portfolio.jpg`. Confirm the face, current crop, and safe areas before editing.

- [ ] **Step 2: Generate one executive-casual edit**

Use the image-generation skill with the source portrait and this bounded prompt:

```text
Edit this portrait while preserving Adam's recognizable facial identity, age, skin tone,
hair, and natural proportions. Create a polished executive-casual sales portrait: light
Oxford shirt with an open collar, no tie, no jacket, composed and approachable expression.
Replace the background with a seamless warm neutral close to #F4F1EA. Produce a full-bleed
rectangular 4:5 portrait with generous space around the head and shoulders for an arch crop.
No black areas, vignette, frame, circular mask, baked-in arch, text, logo, or stock-photo gloss.
Minimum useful output 1200 × 1500 px.
```

- [ ] **Step 3: Present the generated portrait for Adam's approval**

Checkpoint: do not replace the current site image until Adam explicitly approves the preview. If rejected, revise only the portrait prompt and regenerate; do not change page code.

- [ ] **Step 4: Save the approved output under the project-local filename**

Save as `public/adam-snihur-sales-portrait.png`. Verify it is a non-empty PNG and has at least 1200 × 1500 px. If the generation service returns a smaller image, use the highest native output available and record the actual dimensions before integration rather than stretching it with a raster editor.

- [ ] **Step 5: Commit the approved asset**

```bash
git add public/adam-snihur-sales-portrait.png
git commit -m "feat: add approved sales portrait"
```

---

### Task 3: Extract typed content without changing the rendered home page

**Files:**

- Create: `src/types.ts`
- Create: `src/data/experience.ts`
- Create: `src/components/shared.tsx`
- Create: `src/components/HomePage.tsx`
- Modify: `src/main.tsx`
- Test: `scripts/verify-build.mjs`

- [ ] **Step 1: Define the shared content contracts**

Create `src/types.ts`:

```ts
export type SalesExperience = {
  company: string;
  role: string;
  period: string;
  summary: string;
  evidence: string[];
};

export type SupportingExperience = {
  company: string;
  role: string;
  period: string;
  contribution: string;
};

export type SalesProject = {
  company: string;
  role: string;
  period: string;
  summary: string;
  challenge: string;
  scope: string;
  deliverables: string;
};

export type MethodStep = readonly [number: string, title: string, copy: string];
```

- [ ] **Step 2: Move existing verified experience and methods into `src/data/experience.ts`**

Export `salesExperience`, `supportingExperience`, and `methods` using the types above. Copy the existing strings exactly; do not rewrite or shorten Solar Volt, Orange Polska, S'ouvre, e-commerce, or supporting experience during this extraction.

- [ ] **Step 3: Move reusable presentation helpers to `src/components/shared.tsx`**

Export `ArrowIcon`, `DownloadIcon`, `SectionTitle`, `SiteHeader`, `ContactSection`, and `SiteFooter`. `SiteHeader` accepts `knowledgeView: boolean` and uses:

```tsx
<a href={knowledgeView ? "./#wiedza" : "#wiedza"}>Wiedza</a>
```

- [ ] **Step 4: Rebuild the existing home composition in `src/components/HomePage.tsx`**

Move the current page markup from `main.tsx` without visible content changes. Keep the current portrait source temporarily; portrait integration happens after the new layout is ready.

- [ ] **Step 5: Reduce `src/main.tsx` to the application entry point**

```tsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HomePage } from "./components/HomePage";
import "./styles.css";
import "./responsive.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HomePage />
  </StrictMode>,
);
```

- [ ] **Step 6: Build and run the expected partial verifier result**

Run: `npm run build`

Expected: PASS.

Run: `npm test`

Expected: still FAIL only for modules/assets not implemented in later tasks; no failure for existing critical content.

- [ ] **Step 7: Commit the behavior-preserving extraction**

```bash
git add src/main.tsx src/types.ts src/data/experience.ts src/components/shared.tsx src/components/HomePage.tsx
git commit -m "refactor: separate sales portfolio content"
```

---

### Task 4: Add the AdVibes project and evidence-backed capabilities

**Files:**

- Modify: `src/types.ts`
- Modify: `src/data/experience.ts`
- Create: `src/data/capabilities.ts`
- Create: `src/components/ProjectCaseStudy.tsx`
- Create: `src/components/CapabilityGroups.tsx`
- Modify: `src/components/HomePage.tsx`
- Modify: `src/styles.css`
- Modify: `src/responsive.css`
- Test: `scripts/verify-build.mjs`

- [ ] **Step 1: Add a failing source assertion for the exact AdVibes boundaries**

In `scripts/verify-build.mjs`, assert all three labels `Wyzwanie`, `Zakres`, and `Rezultat pracy`, then run `npm test`.

Expected: FAIL with `Brak treści krytycznej: Wyzwanie`.

- [ ] **Step 2: Add the verified AdVibes project data**

Export this object from `src/data/experience.ts`:

```ts
export const salesProject: SalesProject = {
  company: "AdVibes",
  role: "Konsultant procesu sprzedaży (freelance)",
  period: "03.2026–05.2026",
  summary:
    "Krótkoterminowy projekt dla agencji performance marketingowej: opracowanie procesu sprzedaży B2B, segmentacji klientów, prospectingu, pipeline’u i sekwencji kontaktu.",
  challenge:
    "Uporządkowanie sposobu pozyskiwania i prowadzenia potencjalnych klientów B2B.",
  scope:
    "Segmentacja, prospecting, etapy pipeline’u, sekwencje kontaktu i materiały wspierające rozpoczęcie sprzedaży.",
  deliverables:
    "Przygotowany model procesu, roadmapa działań i zestaw materiałów operacyjnych do wykorzystania przez agencję.",
};
```

- [ ] **Step 3: Add the four capability groups**

Extend `src/types.ts` with:

```ts
export type Capability = {
  title: string;
  description: string;
  evidence: string[];
};
```

Create `src/data/capabilities.ts` with exactly four exports: `Prospecting i discovery`, `Negocjacje i finalizacja`, `Rozwój klienta`, and `Sprzedaż analityczna i operacyjna`. Each item must include a one-sentence description and the evidence labels specified in the design spec; no ratings or percentages.

- [ ] **Step 4: Render the project case study after the sales method section**

`ProjectCaseStudy` must use one `<article>` and three labelled fields. Its visible heading must combine role and company, and its `<time>` must expose `dateTime="2026-03/2026-05"`.

- [ ] **Step 5: Replace the skill cloud with capability groups**

Delete the `skills` array and `.skill-cloud` markup. Render `CapabilityGroups` after supporting experience, with evidence labels as a list rather than badges that imply certification.

- [ ] **Step 6: Add responsive styles using existing tokens**

Use existing `--paper`, `--surface`, `--ink`, `--muted`, `--line`, and `--accent`. On desktop, the case-study fields may use three columns and capabilities two columns. At `max-width: 620px`, both collapse to one column with no horizontal scroll.

- [ ] **Step 7: Verify content and build**

Run: `npm run build && npm test`

Expected: build PASS; verifier still fails only for unfinished knowledge modules or portrait integration.

- [ ] **Step 8: Commit the commercial evidence sections**

```bash
git add src/types.ts src/data/experience.ts src/data/capabilities.ts src/components/ProjectCaseStudy.tsx src/components/CapabilityGroups.tsx src/components/HomePage.tsx src/styles.css src/responsive.css scripts/verify-build.mjs
git commit -m "feat: add AdVibes sales process case study"
```

---

### Task 5: Draft and approve the four sales articles

**Files:**

- Modify: `src/types.ts`
- Create: `src/data/articles.ts`
- Read only: `AdVibes/raporty/prospecting/Playbook_Proces_Sprzedazowy.md`
- Read only: `AdVibes/raporty/prospecting/AdVibes_Roadmapa_Proces_Sprzedazy.md`
- Read only: verified experience content in `src/data/experience.ts`

- [ ] **Step 1: Define a structured article model**

Add to `src/types.ts`:

```ts
export type ArticleSection = {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
  example?: { label: "Przykład hipotetyczny" | "Praktyka"; body: string };
};

export type SalesArticle = {
  slug: string;
  title: string;
  description: string;
  readingTime: string;
  sections: ArticleSection[];
};
```

- [ ] **Step 2: Draft article 1 — discovery**

Slug: `discovery-przed-oferta`. Required sections: problem zbyt wczesnej oferty, cel discovery, pytania o kontekst/cel/konsekwencje/decyzję, sygnały gotowości, checklist. Ground personal claims only in Orange/Solar Volt language already approved.

- [ ] **Step 3: Draft article 2 — negotiation**

Slug: `batna-zopa-ustepstwa`. Required sections: preparation, BATNA, ZOPA, concession ledger, conditional concessions, closing checklist. Any deal example not present in verified materials must be marked `Przykład hipotetyczny`.

- [ ] **Step 4: Draft article 3 — process and follow-up**

Slug: `proces-b2b-follow-up`. Required sections: ICP/qualification, buying milestones, pipeline stages, next-step discipline, follow-up cadence, review checklist. Use the AdVibes playbook only to substantiate delivered process artifacts; do not reuse its unverified client metrics or outreach claims.

- [ ] **Step 5: Draft article 4 — salesperson as organizational link**

Slug: `handlowiec-klient-operacje`. Required sections: translating client context, expectation management, feedback to operations, internal handoff, protecting trust, checklist. Ground the perspective in approved GSK/project-coordination descriptions without naming confidential stakeholders.

- [ ] **Step 6: Run the content safety scan**

Run:

```bash
rg -n "ROAS|konwersj|przych|%|klient AdVibes|wdrożyłem|zwiększyłem" src/data/articles.ts
```

Expected: no unsupported metrics or client claims. Any hypothetical occurrence must be explicitly labelled in the corresponding article object.

- [ ] **Step 7: Present all four drafts to Adam for copy approval**

Checkpoint: provide the rendered or readable drafts and wait for explicit approval. Do not wire article data into production views before approval. Apply requested copy corrections only to `src/data/articles.ts`, then repeat the safety scan.

- [ ] **Step 8: Commit the approved article content**

```bash
git add src/types.ts src/data/articles.ts
git commit -m "content: add approved sales knowledge articles"
```

---

### Task 6: Implement hash routing and knowledge views

**Files:**

- Create: `src/routing.ts`
- Create: `src/components/KnowledgeSection.tsx`
- Create: `src/components/KnowledgeIndex.tsx`
- Create: `src/components/ArticlePage.tsx`
- Create: `src/components/NotFoundPage.tsx`
- Modify: `src/components/HomePage.tsx`
- Modify: `src/main.tsx`
- Modify: `src/styles.css`
- Modify: `src/responsive.css`
- Test: `scripts/verify-build.mjs`

- [ ] **Step 1: Add failing routing and article-discoverability assertions**

Extend `scripts/verify-build.mjs` to require the route literals `#/wiedza`, `#/wiedza/`, `hashchange`, and all four slugs. Run `npm test`.

Expected: FAIL for missing routing implementation.

- [ ] **Step 2: Implement the pure route parser**

Create `src/routing.ts`:

```ts
export type AppRoute =
  | { kind: "home" }
  | { kind: "knowledge-index" }
  | { kind: "article"; slug: string }
  | { kind: "not-found" };

export function parseHash(hash: string): AppRoute {
  if (!hash || !hash.startsWith("#/")) return { kind: "home" };
  if (hash === "#/wiedza") return { kind: "knowledge-index" };
  if (hash.startsWith("#/wiedza/")) {
    const slug = hash.slice("#/wiedza/".length).trim();
    return /^[a-z0-9-]+$/.test(slug)
      ? { kind: "article", slug }
      : { kind: "not-found" };
  }
  return { kind: "not-found" };
}
```

Article slugs are deliberately limited to lowercase ASCII kebab-case. Do not call `decodeURIComponent`; malformed percent encoding must resolve to `not-found`, never throw.

- [ ] **Step 3: Render the home knowledge preview**

`KnowledgeSection` renders articles 1–3 from `articles.slice(0, 3)` and links each title to `#/wiedza/${article.slug}`. The section uses `id="wiedza"`; `Zobacz wszystkie` links to `#/wiedza`.

- [ ] **Step 4: Render the complete index**

`KnowledgeIndex` uses `SiteHeader knowledgeView`, one H1, all four article descriptions, and a link `./#wiedza` back to the portfolio context.

- [ ] **Step 5: Render semantic article pages**

`ArticlePage` renders one `<article>`, one H1, section H2 elements, bullets, explicitly labelled examples, reading time, and the existing contact/CV CTA. It must not inject HTML strings; render structured fields as JSX.

- [ ] **Step 6: Render unknown route and unknown slug fallbacks**

Unknown hashes and article slugs render `NotFoundPage` with links to `#/wiedza` and `./`.

- [ ] **Step 7: Add hash state to the entry point**

Use one `hashchange` listener with cleanup:

```tsx
function App() {
  const [route, setRoute] = useState(() => parseHash(window.location.hash));

  useEffect(() => {
    const syncRoute = () => setRoute(parseHash(window.location.hash));
    window.addEventListener("hashchange", syncRoute);
    return () => window.removeEventListener("hashchange", syncRoute);
  }, []);

  if (route.kind === "home") return <HomePage />;
  if (route.kind === "knowledge-index") return <KnowledgeIndex />;
  if (route.kind === "article") {
    const article = articles.find((item) => item.slug === route.slug);
    return article ? <ArticlePage article={article} /> : <NotFoundPage />;
  }
  return <NotFoundPage />;
}
```

On every route change, move focus to the main H1 or main content container and update `document.title` to avoid silent context changes for keyboard and screen-reader users.

- [ ] **Step 8: Style knowledge and article views**

Use the existing typography and tokens. Keep article body width near 720 px, line-height at least 1.6, visible focus, semantic list spacing, and no motion dependency. At 320 px, cards and article text must remain inside the viewport.

- [ ] **Step 9: Verify build and source contract**

Run: `npm run build && npm test`

Expected: PASS except for portrait use assertion if not yet integrated.

- [ ] **Step 10: Commit routing and knowledge views**

```bash
git add src/main.tsx src/routing.ts src/components/KnowledgeSection.tsx src/components/KnowledgeIndex.tsx src/components/ArticlePage.tsx src/components/NotFoundPage.tsx src/components/HomePage.tsx src/styles.css src/responsive.css scripts/verify-build.mjs
git commit -m "feat: add sales knowledge library"
```

---

### Task 7: Integrate the approved portrait and finish responsive styling

**Files:**

- Modify: `src/components/HomePage.tsx`
- Modify: `src/styles.css`
- Modify: `src/responsive.css`
- Test: `public/adam-snihur-sales-portrait.png`

- [ ] **Step 1: Switch the home portrait to the approved project-local asset**

```tsx
<img
  src="./adam-snihur-sales-portrait.png"
  alt="Portret Adama Śnihura"
  width="1200"
  height="1500"
/>
```

Use the actual output dimensions if they differ from 1200 × 1500.

- [ ] **Step 2: Remove black as the portrait fallback surface**

Change `.portrait-wrap` background from `var(--ink)` to `var(--paper)`. Keep the arch in CSS and adjust only `object-position`/`transform` needed to keep face and shoulders inside the crop. Do not add a mask or arch to the image file.

- [ ] **Step 3: Verify representative viewports**

Run the local site and inspect at 375 × 812, 768 × 1024, and 1440 × 1000. Confirm:

- no black or unpainted area appears inside the arch;
- the head is not clipped;
- new sections do not overflow horizontally;
- sticky navigation does not cover route headings;
- article text remains readable;
- reduced-motion mode removes transitions/reveals.

- [ ] **Step 4: Commit portrait integration**

```bash
git add src/components/HomePage.tsx src/styles.css src/responsive.css
git commit -m "feat: integrate sales portrait and responsive layout"
```

---

### Task 8: Complete automated and browser verification

**Files:**

- Modify: `scripts/verify-build.mjs`
- Modify: `README.md`
- Test: production build and all routes

- [ ] **Step 1: Make the verifier scan all relevant source files recursively**

Add a small recursive collector for `.ts` and `.tsx` under `src/` so forbidden placeholder and content checks cannot be bypassed by file extraction. Exclude declaration files if needed.

- [ ] **Step 2: Add final asset and route assertions**

Verify the built portrait exists and is non-empty, all article slugs appear in source, no `lorem ipsum|todo|placeholder` appears, and the CV/email/LinkedIn strings remain present.

- [ ] **Step 3: Run the full local gate**

Run:

```bash
rm -rf dist
npm run build
npm test
```

Expected: both commands PASS; `dist/` contains the CV, portrait, `.nojekyll`, HTML, CSS, and JS.

- [ ] **Step 4: Verify every route in a production preview**

Start: `npm run preview -- --host 127.0.0.1`

Check:

- `/` and `/#wiedza` show the home page and knowledge section;
- `/#/wiedza` lists four articles;
- each `/#/wiedza/<slug>` renders one H1 and a back link;
- `/#/wiedza/nie-istnieje` renders the fallback;
- `/#/wiedza/%E0%A4%A` renders the fallback without throwing or logging a console error;
- refresh on every hash route stays on a valid page;
- CV, email, and LinkedIn links resolve correctly;
- browser console contains no errors or 404s.

- [ ] **Step 5: Run keyboard and accessibility checks**

Tab through header, cards, article links, back links, and CTA. Confirm visible focus, logical heading order, meaningful landmarks, working skip link, and no keyboard trap. Run the available accessibility audit and require zero critical violations.

- [ ] **Step 6: Document the final content and route workflow**

Update `README.md` with:

- `npm run dev`, `npm run build`, `npm test`, and preview commands;
- hash route table;
- article data location;
- portrait asset ownership and dimensions;
- reminder that article copy and portrait changes require Adam's approval;
- GitHub Pages deployment note.

- [ ] **Step 7: Commit verification and documentation**

```bash
git add scripts/verify-build.mjs README.md
git commit -m "test: verify sales portfolio knowledge routes"
```

---

### Task 9: Final scope and deployment handoff

**Files:**

- Review only: all changed files
- Do not modify: main portfolio repository or sales CV PDF

- [ ] **Step 1: Review the complete diff for scope drift**

Run:

```bash
git status --short
git diff origin/main...HEAD --stat
git diff origin/main...HEAD --check
```

Expected: only `sales-portfolio` files in the approved specification; no whitespace errors.

- [ ] **Step 2: Confirm protected assets and repositories were untouched**

Verify the main portfolio worktree has no changes caused by this implementation. Confirm the sales CV PDF hash is unchanged from the start of implementation.

- [ ] **Step 3: Produce the implementation evidence summary**

Report:

- build and verifier results;
- tested viewport sizes;
- tested knowledge routes;
- portrait approval and actual dimensions;
- article-copy approval;
- accessibility result;
- commit list;
- any related issue found but intentionally left out of scope.

- [ ] **Step 4: Push only after final approval**

Do not push or deploy until Adam approves the verified local result. After approval, push `main` and confirm the GitHub Pages workflow succeeds.
