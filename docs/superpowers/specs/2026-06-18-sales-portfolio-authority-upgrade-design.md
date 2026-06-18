# Sales Portfolio Authority Upgrade — Design Specification

**Status:** concept approved; written specification awaiting user review

**Project:** `sales-portfolio`

**Date:** 2026-06-18

## 1. Goal

Upgrade the existing Polish sales portfolio so a recruiter or potential client can quickly see three things:

1. Adam has real, varied sales experience.
2. He understands repeatable B2B sales processes, not only individual conversations.
3. His analytical and operational experience strengthens his commercial work.

The page remains recruiter-first: the primary actions are downloading the sales CV and starting a conversation. The upgrade must not modify or depend on the main IT/business portfolio.

## 2. Product principles

- Preserve the current warm, restrained visual identity and its recruiter-friendly scanning speed.
- Prefer specific evidence over self-rating, generic skill tags, or invented metrics.
- Present short consulting work honestly as a project, not as continuous employment.
- Add authority content without turning the site into a large publishing platform.
- Keep the site static, fast, accessible, and deployable to GitHub Pages.

## 3. Information architecture

The existing portfolio remains the main page. Its top-level sequence becomes:

1. Hero and primary CTA.
2. Sales experience.
3. Sales approach.
4. AdVibes freelance project case study.
5. Supporting analytical and operational experience.
6. Evidence-backed capabilities.
7. Sales knowledge.
8. Contact CTA.

The navigation gains a `Wiedza` item. On the portfolio home it links to the `#wiedza` section; on knowledge views it links back to `./#wiedza`. The complete article index uses `#/wiedza`, and article detail views use dependency-free hash routes in the form `#/wiedza/<slug>`. This keeps direct links and browser refreshes compatible with the existing GitHub Pages deployment without server rewrites or duplicated HTML entry points. Articles are part of the same portfolio, not a separate CMS or external blog.

## 4. Portrait direction

### 4.1 Editorial intent

Create an executive-casual portrait that is slightly more formal than the main portfolio image while remaining approachable. The visual should fit sales, account management, and business-development roles without looking like a corporate stock photograph.

### 4.2 Image requirements

- Use the existing sales-portfolio copy at `public/adam-snihur-main-portfolio.jpg` as the identity reference. Do not read from or write to the main portfolio during production.
- Preserve recognizable facial features and natural proportions.
- Outfit: light Oxford shirt, open collar, no tie, no suit jacket required.
- Expression: composed, attentive, and approachable rather than broadly casual.
- Background: seamless warm neutral aligned with the page background (`#F4F1EA`) or a closely matching tonal gradient.
- Output: rectangular, full-bleed image with generous safe area around the head and shoulders.
- Save the approved output as `public/adam-snihur-sales-portrait.png`; the implementation references only this new project-local asset.
- The image itself must contain no black corners, circular mask, vignette, frame, or baked-in arch.
- The page's CSS alone creates the existing arch-shaped crop.
- No unrelated edits to the main portfolio or its portrait asset.
- Adam approves the generated portrait preview before it replaces the current portrait in the sales portfolio.

### 4.3 Acceptance check

At desktop and mobile widths, the image fills the arch with no black or unpainted area visible. The head and shoulders remain comfortably inside the crop, and the background transition does not reveal the rectangular source boundary.

## 5. Experience and project content

### 5.1 Existing experience

Keep Solar Volt, Orange Polska, S'ouvre, and e-commerce as the primary sales history. Keep the verified Solar Volt period `03.2020–07.2021` and the statement that the work ran in parallel with Orange Polska.

### 5.2 AdVibes presentation

AdVibes appears as a bounded consulting project rather than a fifth employment role.

**Heading:** `Konsultant procesu sprzedaży (freelance) — AdVibes`

**Period:** `03.2026–05.2026` / `Marzec–maj 2026`

**Summary:**

> Krótkoterminowy projekt dla agencji performance marketingowej: opracowanie procesu sprzedaży B2B, segmentacji klientów, prospectingu, pipeline'u i sekwencji kontaktu.

The case study uses three compact fields:

- **Wyzwanie:** uporządkowanie sposobu pozyskiwania i prowadzenia potencjalnych klientów B2B.
- **Zakres:** segmentacja, prospecting, etapy pipeline'u, sekwencje kontaktu i materiały wspierające rozpoczęcie sprzedaży.
- **Rezultat pracy:** przygotowany model procesu, roadmapa działań i zestaw materiałów operacyjnych do wykorzystania przez agencję.

Wording must use verbs such as `opracowałem`, `zaprojektowałem`, and `przygotowałem`. It must not imply permanent employment, long-term cooperation, completed organizational adoption, or financial results that cannot be verified.

## 6. Evidence-backed capabilities

Replace the current undifferentiated skill cloud with four concise capability groups. Each group contains a short explanation and one or two evidence references from actual work.

### 6.1 Prospecting and discovery

- Active B2B prospecting, cold calling, networking, and lead segmentation.
- Discovery conversations, needs diagnosis, and matching an offer to the client's situation.
- Evidence sources: Orange Polska, Solar Volt, AdVibes.

### 6.2 Negotiation and closing

- Handling objections, preparing trade-offs, negotiating terms, and moving decisions toward closure.
- Evidence sources: Orange Polska, Solar Volt, e-commerce supplier negotiations.

### 6.3 Account development

- Relationship development, upselling, cross-selling, and identifying follow-on opportunities.
- Evidence sources: Orange Polska, S'ouvre, e-commerce.

### 6.4 Analytical and operational sales

- Pipeline design, market analysis, recommendation building, and coordination between commercial and operational stakeholders.
- Evidence sources: AdVibes, GSK, e-commerce, project coordination.

Capabilities must not use proficiency bars, star ratings, or unsupported performance figures.

## 7. Sales knowledge section

### 7.1 Format

Add a home-page section with `id="wiedza"` titled `Wiedza sprzedażowa`. It contains cards for articles 1–3 below and a `Zobacz wszystkie` link to `#/wiedza`. The article index at `#/wiedza` lists all four articles with title, short description, and link to the detail view. It should feel like an editorial proof of expertise, not an empty `Blog` placeholder.

The initial release contains four substantive static articles:

1. **Sprzedaż B2B zaczyna się przed ofertą — pytania dobrego discovery**
2. **BATNA, ZOPA i ustępstwa — praktyczne przygotowanie do negocjacji**
3. **Proces sprzedaży B2B: od leada do konsekwentnego follow-upu**
4. **Handlowiec jako łącznik między klientem a operacjami firmy**

Each article should:

- open with a practical sales problem;
- explain a usable framework in plain Polish;
- include examples or a short checklist grounded in Adam's experience;
- avoid pretending to disclose confidential employer or client information;
- end with a CTA to contact Adam or download the CV;
- be suitable for later adaptation into a LinkedIn post without requiring that integration now.

The factual source boundary is limited to the verified portfolio/CV content already present in this repository and the project materials in `/Users/adamsnihur/Desktop/AG projects/AdVibes/`. General explanations of established sales frameworks may be written from standard domain knowledge, but personal anecdotes, employer details, client examples, metrics, and outcomes may not be inferred. If a practical example cannot be grounded safely, it must be labelled as a hypothetical example. All four article drafts require Adam's copy approval before they are included in the production deployment.

### 7.2 Publishing model

Articles are local typed content rendered by React/Vite. There is no CMS, database, authentication, comments, newsletter, or publishing dashboard in this phase.

## 8. Technical design

The current application is concentrated in `src/main.tsx`. The upgrade should introduce only the boundaries needed for the expanded content:

```text
src/
  main.tsx                 application entry and route selection
  data/
    experience.ts          employment and AdVibes project data
    capabilities.ts        evidence-backed capability groups
    articles.ts            article metadata and article bodies
  components/
    Portrait.tsx
    ProjectCaseStudy.tsx
    CapabilityGroups.tsx
    KnowledgeSection.tsx
    ArticlePage.tsx
  styles.css
  responsive.css
```

The exact file split may be adjusted during planning if the existing build makes a smaller structure clearer. The important boundary is that experience, capabilities, and article content are not embedded in one growing rendering component.

All content remains local. `main.tsx` reads `window.location.hash`, maps known slugs to local article records, and responds to `hashchange`; no routing package is added. The portfolio home uses the empty hash or normal section anchors, the knowledge index uses exactly `#/wiedza`, and article details use the reserved `#/wiedza/` prefix. A missing or unknown article hash displays a simple not-found state with links back to the knowledge index and the portfolio home.

## 9. Accessibility and resilience

- Use semantic `article`, `nav`, heading, list, and time structures.
- Preserve visible keyboard focus and the skip link.
- Provide meaningful portrait alt text without describing clothing excessively.
- Maintain WCAG AA contrast for body copy and interactive elements.
- Respect `prefers-reduced-motion` on the main page and article views.
- Article pages remain readable when reveal animations do not run.
- All local images, article routes, and the CV asset resolve correctly in the GitHub Pages base path.

## 10. Verification and acceptance criteria

The implementation is complete only when all of the following are true:

- `npm run build` succeeds.
- Existing verification scripts and tests pass; new route/content assertions are added where appropriate.
- Desktop and mobile checks show no horizontal overflow.
- The portrait arch contains no visible black area at representative desktop and mobile widths.
- The AdVibes project displays `03.2026–05.2026` or `Marzec–maj 2026` and is explicitly labelled freelance/project work.
- No copy implies that AdVibes was permanent employment or claims unverified revenue impact.
- All four article titles are accessible from the knowledge section or its index.
- Every article route renders, has one H1, and links back to the portfolio.
- CV, email, LinkedIn, navigation, and article links work from the production build.
- No local production asset returns 404 and the browser console has no errors.
- Keyboard navigation and reduced-motion behavior remain usable.
- The main portfolio repository and deployment remain unchanged.

## 11. Delivery phases

1. Produce and approve the edited portrait asset.
2. Refactor content into bounded local data modules without changing visible behavior.
3. Add the AdVibes project case study and evidence-backed capabilities.
4. Add the knowledge index and four static article views.
5. Integrate final portrait crop and responsive styling.
6. Run build, accessibility, link, route, responsive, and visual verification.

Each phase should be a small, reviewable change and should pass relevant checks before the next phase begins.

## 12. Explicitly out of scope

- Editing the main portfolio or its deployment.
- A CMS, backend, database, comments, newsletter, or account system.
- Analytics or CRM integration.
- English localization.
- Fabricated client names, testimonials, metrics, or financial results.
- Rebuilding the sales CV PDF in this upgrade unless separately approved as its own deliverable.
