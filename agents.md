# Agents Guide

## Project Approach

This is a static personal website for Ruslan Abkadirov. The site is built with React components, but pages are rendered at build time into plain HTML with `react-dom/server`.

The public output must not depend on client-side rendering. Do not add hydration scripts, browser routers, or JavaScript bundles unless a future task explicitly requires progressive enhancement.

## Framework

- React is used as the component model.
- `scripts/build.mjs` calls `renderToStaticMarkup` and writes `index.html`.
- `npm run dev` starts `scripts/dev.mjs`, rebuilds the static output on `src/` changes, and serves the site locally.
- CSS is authored in `src/styles.css` and copied to `assets/site.css`.
- The current homepage lives in `src/pages/HomePage.js`.
- Shared page blocks live in `src/components/`.
- Site copy and structured content live in `src/content.js`.
- GitHub Pages is deployed by `.github/workflows/pages.yml`, which runs `npm ci`, `npm run build`, prepares `_site`, and publishes that artifact.

## Page Model

Every page should be unique, but built from reusable components. Add new pages as separate modules under `src/pages/`, then extend the build script to render each page to its final static HTML path.

Prefer server-rendered HTML for all content that should be visible to users, crawlers, and LLMs. Keep interaction optional and narrowly scoped.

## Content Direction

Write public copy in English. The positioning should reflect the context files in `../context`:

- Ruslan Abkadirov as an operator and founder with EdTech and multi-country launch experience.
- Practical AI implementation, B2B opportunity research, workflow automation, and service-first validation.
- Vietnam as the primary market context, LatAm as a secondary research zone, and US/EU as a source of startup signals.
- A bias toward paid pilots, consulting, and custom implementation before SaaS productization.

## Styling Direction

Keep the visual language close to the previous site: clean header, dark hero section, blue accent system, compact tags, profile image, and stat cards. Avoid a generic landing-page redesign unless requested.
