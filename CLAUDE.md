# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Loftprint (loftprint.pl) — marketing site for a UV wall-printing company, built with Create React App (react-scripts 5). Polish-language content throughout.

## Commands

- `npm start` — dev server on http://localhost:3000
- `npm run build` — production build to `build/`
- `npm test` — CRA/Jest test runner (no test files currently exist in the repo)
- `npm run purgecss` — runs PurgeCSS per `purgecss.config.js`, outputs to `./dist/css/` (a manual/occasional step, not part of `build`)

There is no `npm run lint` script; linting is CRA's built-in `eslint-config-react-app`, surfaced as warnings in the terminal/browser during `npm start` and `npm run build`.

### SCSS build (important, easy to miss)

Components import compiled `.css` files, not `.scss` directly (e.g. `Gallery.jsx` does `import "./Gallery.css"`, not `import "./Gallery.scss"`). CRA's dev server does **not** watch or compile `.scss` — editing a `.scss` file has no visible effect until you manually recompile it to the sibling `.css`:

```bash
npx sass src/App.scss src/App.css --source-map --style=expanded
npx sass src/components/Gallery/MediaGallery.scss src/components/Gallery/MediaGallery.css --source-map --style=expanded
```

Every component styled with Sass has a `.scss` source and a committed `.css`/`.css.map` pair (e.g. `Gallery.scss`/`Gallery.css`/`Gallery.css.map`). When editing styles, edit the `.scss`, then regenerate the matching `.css` with the command above — don't hand-edit the `.css` (it will be overwritten next time someone recompiles) and don't forget the recompile step or the change silently won't apply.

## Architecture

### Entry point and dead code

`src/index.js` renders `AppLazy` from `src/App-lazy.jsx` inside `BrowserRouter` + `HelmetProvider`. **`src/App.js` is unused legacy scaffolding** — its `<App/>` JSX is never rendered — and can be deleted freely. `src/App-lazy copy.jsx` was a stale backup, also safe to delete. When asked to change routing, page composition, or the header/nav, the real target is always `App-lazy.jsx`.

`App-lazy.jsx` imports `./App.css` directly (global styles: base `section`/`h1`/`h2`/`h3` rules, `.title`, `.app-container`, the `main section`/`main .subpage-intro` subpage overrides, etc.). This used to only happen indirectly — `App.js`'s first line was `import './App.css'`, and `index.js` imported `App.js` solely for that side effect even though `<App/>` itself was commented out — so deleting `App.js` silently dropped every global style from the bundle (no build error, no console warning, just missing CSS) until the import was moved here. If global styles ever go missing again with no error anywhere, check first whether `./App.css` is still imported by something that's actually in the render tree.

### Two rendering shapes for the same content: SPA scroll sections vs. SEO subpages

This is the core architectural idea of the codebase. The site used to be a single-page scroller (see `DrukSciennyKrakow.jsx` at route `/druk-scienny-krakow`, which still works this way and is the old/reference pattern). The current site keeps that scrolling homepage (`HomePage.jsx`) but *also* exposes some of the same sections as standalone, SEO-indexable routes:

- `/` (`HomePage.jsx`) — one continuous page, sections wrapped in `react-scroll`'s `<Element>` + `react-parallax`'s `<Parallax>`, anchor-linked from the navbar (`#dla-kogo`, `#technika`, `#gallery`, `#ceny`, `#inspiracje`, `#visualizer`, `#kontakt`).
- `/technika`, `/ceny`, `/gallery` (`TechnikaPage.jsx`, `CenyPage.jsx`, `GalleryPage.jsx`) — dedicated pages with their own `<Helmet>` (title/description/canonical/OG/Twitter tags), an intro `<section className="subpage-intro">` with an `<h1>` + lead paragraph, then the *same* underlying component in expanded form, then a `SubpageLinks` cross-link block, then `Footer`.

The shared components (`Gallery`, `Technika` under `src/components/Technika/`, `Ceny`) are written once and rendered in both contexts via props:
- `mode="preview"` (homepage scroll section, shows a teaser and a "see more" link to the full subpage) vs `mode="full"` (subpage, shows everything).
- `showHeading` / `showLead` toggle the component's own internal `<h2>`/lead paragraph, since on subpages that role is already filled by the subpage's own `<h1>`/intro paragraph (passed as `showHeading={false} showLead={false}` from the page components).

When changing copy or behavior for one of these sections, check whether the change should apply to both the preview and full render (edit the shared component) or only one (edit the page-level intro text in `*Page.jsx`).

Global section CSS in `src/App.scss` reflects this split: a bare `section` selector gives homepage sections `min-height: 40vh/80vh` + `justify-content: center` for the full-viewport parallax-scroll effect. Because the three subpages are the only place that render `<section>` inside a `<main>`, subpage-specific overrides are scoped as `main section` / `main .subpage-intro` rather than touching the global `section` rule (which would break the homepage's scroll effect).

### Fixed header

`Header.jsx` (`position: fixed`, 60px tall under 992px / 80px at 992px+) sits above everything. Any first-section-of-page content needs top padding that clears this — the homepage banner already accounts for it; `main .subpage-intro` in `App.scss` does this explicitly for the three subpages.

### Styling stack

- Sass (compiled manually, see above) for component-level `.scss`/`.css` pairs.
- `@emotion/styled` + `framer-motion` for animated primitives in `src/components/Styled/` (`StyledHeader.jsx` → `AnimatedH1/H2/H3`, `StyledMotionDiv.jsx` → `LeftSideMotionDiv/RightSideMotionDiv/BottomSideMotionDiv`), used to slide/fade section headings and panels in as they scroll into view.
- MUI (`@mui/material`, `@mui/icons-material`) used selectively (e.g. image list in the gallery).
- `react-helmet-async` for all per-route `<title>`/meta/canonical/OG/Twitter tags — every page component sets its own.

### Gallery

`src/components/Gallery/Gallery-data.js` holds the realization/project data (title, thumbnails, media) consumed by `Gallery.jsx` → `MediaGallery.jsx`. `MediaGallery.jsx` handles both the row-limited preview grid and the "load more" pagination on the full subpage (`visibleRows`/`totalRows`/`rowsStep`, computed against actual rendered tile height via `ResizeObserver` so the grid can measure real column counts responsively). The last row is intentionally visually clipped (via `.is-collapsed` + a gradient mask) while more rows remain to load — that's a deliberate "there's more" affordance, not a bug. Once fully expanded (no more "Pokaż kolejne realizacje" button), `gallery-wrap--done` adds bottom padding so the grid doesn't touch the container edge.

### Regional SEO landing pages (`/druk-scienny-krakow` and future siblings)

`DrukSciennyKrakow.jsx` is a full scroll-page clone of `HomePage.jsx` for a specific city, built for local SEO — same section structure, but with city-specific copy and its own `<Helmet>`. More are planned (e.g. `/druk-scienny-slask`).

Its hero uses `RegionalBanner.jsx` (`src/components/Banner/`), an `AwesomeSlider` video-carousel banner shared across all regional pages — the video list, `h3` subtitle, and the technical body paragraphs are hardcoded inside it (deliberately region-agnostic wording, no city names) and only `title` (h1) and `introParagraph` (the one audience/city-specific opening paragraph) are props. When adding a new regional page, reuse `RegionalBanner` with just that region's own title/intro paragraph (defined inline in the new page component, same as `DrukSciennyKrakow.jsx` does) — don't add per-region videos or duplicate the shared paragraphs. `Banner.jsx` (the plain homepage banner, single looping video, no props, used only on `/`) is a separate, unrelated component — its title once got desynced from its already-generic body copy by a copy-paste from the Kraków version; if a homepage/regional banner's heading ever looks off, check for that kind of drift first, since the two components' content isn't linked in any way.

### Other notable components

- `WallArtVisualizer/` — Fabric.js (`fabric` package)-based canvas tool letting users preview art on a wall.
- `ContactForm/` — Formik + Yup validation, submits via `@emailjs/browser` (EmailJS), no backend in this repo.
- `ScrollToTop/` — router-level scroll reset on navigation.
- `Resources/` (repo root) and parts of `public/` (e.g. `Posters/`, `Surfaces/`, `Dimensions/`) hold raw source images/videos, not all of which are imported into `src` — check before assuming an asset there is unused.
