# Agents Guide

## Project Approach

This is a static personal website for Ruslan Abkadirov. The site is built with React components, but pages are rendered at build time into plain HTML with `react-dom/server`.

The public output must not depend on client-side rendering. Do not add hydration scripts, browser routers, or JavaScript bundles unless a future task explicitly requires progressive enhancement.

## Framework

- React is used as the component model.
- `scripts/build.mjs` calls `renderToStaticMarkup` and writes deployable HTML to `_site/`, plus the tracked root `index.html`.
- `npm run dev` starts `scripts/dev.mjs`, rebuilds the static output on `src/` changes, and serves the site locally.
- CSS is authored in `src/styles.css` and copied to `assets/site.css`.
- The current homepage lives in `src/pages/HomePage.js`.
- Shared page blocks live in `src/components/`.
- Site copy and structured content live in `src/content.js`.
- GitHub Pages is deployed by `.github/workflows/pages.yml`, which runs `npm ci`, `npm run build`, and publishes `_site`.
- Run `npm run build` and `npm run check` before delivery. The dev server serves `_site` and normalizes directory URLs with a trailing slash.

## Page Model

Every page should be unique, but built from reusable components. Add new pages as separate modules under `src/pages/`, then extend the build script to render each page to its final static HTML path.

Prefer server-rendered HTML for all content that should be visible to users, crawlers, and LLMs. Keep interaction optional and narrowly scoped.

## Content Direction

Use the approved homepage revision 2.0, supplied October 21, 2026. It supersedes the earlier positioning and page structure.

- Ruslan Abkadirov is an education product leader with a background in software development. Do not call him an entrepreneur, founder or business owner.
- The homepage is a complete public professional biography, not a sales page. Do not add services, client outcomes, sales CTAs, a How I work section or promotional counters.
- The owner subsequently rejected the literal long-form version as unnatural and a wall of text. Preserve the factual scope of revision 2.0, but edit repetition and restructure the presentation. `src/biography.js` is the current editorial source. Do not treat the original 40 paragraphs as immutable.
- His seven personally authored courses, still being taught, and more than twenty courses developed by his team are separate facts. Do not add them together or invent course names, dates or enrollment outcomes.
- Historical roles in Vietnam include CPO and Managing Director. Do not infer a current official position or company ownership. The school report describes fifty students starting the adult program, not graduates or employment outcomes.
- The owner subsequently asked to reduce the CV feel and remove Vietnam from the opening summary: the experience is international and multicultural. The current narrative has four parts: a short profile; current work (SIT/AI and Noomic); education and product development illustrated through children's programs and the adult school in Vietnam; compact writing/code links. Keep dates and historical titles inside their specific context, without a career timeline. Explain the technical background in the introduction, without repeating a second software biography. Noomic is in development; the missing-block task is one prototype example.
- Use product and educational terminology where it explains actual work: product discovery, value proposition, delivery model, instructional design, curriculum, learning objectives, practice and assessment. Do not invent credentials or claim use of unconfirmed branded frameworks. The introduction must not suggest that the whole career took place in Vietnam.
- Do not display a current residence label such as “Based in Vietnam” (owner's request, October 22, 2026). Keep Vietnam in the historical school experience where it provides relevant context.
- Juncta is also the owner's project, confirmed October 22, 2026. Include it in current work as team communication software alongside the educational projects. Its description is grounded in the public landing and local project documentation. The interface image is an actual app capture using fictional demo data and must retain that caption. Do not infer company ownership, commercial traction or unconfirmed individual responsibilities from it.
- Keep personal responsibility explicit. The Vietnam section is the main management example, including educational, subject-matter, sales, marketing and operational work. Put the school report's historical enrollment detail beside its source link; do not feature it as a personal achievement. Edit generic explanations and repetition instead of maintaining a fixed paragraph count.
- `src/content.js` holds shared profile data, navigation, metadata and the existing companion project-page content. `src/metadata.js` uses one Person identifier and ProfilePage for the homepage.
- Preserve the real portrait and existing public email. Public work and organizational sources use their verified direct URLs. Do not invent additional social profiles, accomplishments or illustrative project screenshots.
- The blog is a separate task, per the owner's instruction. Do not overwrite its articles, dates, feeds or search. Its About and shared biography must be reconciled with revision 2.0 before publication.
- Publication or push to a deployment branch requires the owner's authorization.

## Styling Direction

Use Manrope, near-white surfaces, dark blue-gray text, restrained blue and green accents, and the natural-color portrait. The owner requested a fresh, light professional design with gentle gradients, shadows, low-contrast patterns and small animations. Concentrate decoration around the hero; keep the biography legible. Vary the composition: an unboxed curriculum entry, the Vietnam case with source notes, two current-project panels and compact public work. Keep selective inline emphasis. The earlier illustrative Noomic diagrams have been removed: do not restore invented representations of the game. Native navigation and all content must work without JavaScript. Motion must be optional and respect reduced-motion preferences; content must never depend on a reveal animation.
