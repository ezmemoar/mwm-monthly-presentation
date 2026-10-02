# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

A [Slidev](https://sli.dev/) deck: the September 2026 monthly report for PT
Mitra Wisata Mandiri (an Indonesian umroh/hajj travel agency) — departures, ad
progress, the referral-agent programme, partnership outreach and next steps.
All copy is in Indonesian and lives in `data/report.ts`; the report-specific
components are in `components/report/`. Deployed as a static SPA to Netlify or
Vercel (`dist/`).

## Commands

```bash
pnpm dev      # slidev --open, http://localhost:3030
pnpm build    # static build into dist/ — the only real check in this repo
pnpm export   # PDF/PNG/PPTX; needs playwright-chromium (see pnpm-workspace.yaml)
```

There is no test suite and no linter wired up. `pnpm build` compiles every slide
and every component, so it catches template and type-level breakage; run it
after edits.

Useful URLs while `pnpm dev` runs: `/<n>` jumps to slide *n* (1-indexed),
`/<n>?print` renders that slide in its settled state with entrance animations
skipped — handy for screenshotting.

## Architecture

Content, structure and presentation are deliberately separated:

- **`data/*.ts`** — every string, price, address, icon name and image URL.
  Editing deck copy should almost always mean editing these, not a `.md` or
  `.vue` file. `data/images.ts` is the single source for remote assets;
  layouts take an image *key* (`photo: nabawi`), never a URL.
- **`pages/NN-*.md`** — one slide per file, pulled into the deck by `src:`
  entries in `slides.md`. Each is frontmatter (layout + props) plus a
  `<script setup>` that imports from `data/`, then component markup.
- **`layouts/deck-{cover,dark,light}.vue`** — the slide shell. Each calls
  `provideSlideVariant()`, which is how nested components know whether they sit
  on ink or paper.
- **`components/{ui,deck,content}/`** — auto-imported by Slidev by filename
  regardless of subdirectory, so `components/ui/UiChip.vue` is `<UiChip>`.
- **`global-top.vue`** — persistent chrome (brand mark, counter, progress rail,
  nav dots) that Slidev renders above every slide in both the deck and the
  export.

### Light/dark variance

Components never hardcode a contrast. They call `useTone()`, which resolves the
variant injected by the layout (overridable per-component with a `variant` prop)
into class pairs — `muted`, `card`, `accent`, `pkgItem`, and so on. Add new
pairs there rather than branching in templates.

### Entrance animations

`v-reveal` (registered in `setup/main.ts`) replaces the source deck's GSAP
ScrollTrigger. It attaches an IntersectionObserver and plays the `deck-reveal`
keyframes once, when the slide first becomes visible. `v-reveal="2"` pushes the
element later in the stagger. `StatCounter` uses `useInView` for the same
reason. Both bail out via `isPrintMode()` so exports capture the settled state.

## Styling: Tailwind v4 alongside Slidev's UnoCSS

Both engines are live and each has a job. Three constraints are easy to trip
over:

1. **`vite.config.ts` scopes Tailwind's Vite plugin to `styles/tailwind.css`.**
   Slidev's client and themes ship CSS written against UnoCSS utilities
   (`@apply`); left unscoped, Tailwind tries to compile those files and the
   build dies on unknown utility classes.
2. **`styles/slide.css` and `styles/ui.css` are unlayered on purpose, and load
   before `styles/tailwind.css`.** Slidev's UnoCSS reset is unlayered, so any
   rule inside `@layer` silently loses to it (`img { height: auto }` beat a
   layered `height: 1.5rem`). Tailwind's utilities are likewise imported
   unlayered so source order still lets a utility class win over a component
   rule. Preflight is *not* imported — Slidev already ships a reset.
3. **Icons come from UnoCSS `presetIcons`**, not Tailwind: `i-heroicons-*` and
   `i-simple-icons-*` (`@iconify-json/heroicons`, `@iconify-json/simple-icons`).
   Icon classes that only ever appear as strings in `data/*.ts` are invisible to
   UnoCSS' scanner, so they must be added to the safelist in `uno.config.ts`.

Design tokens (`--color-primary: #63128b` and its scale, ink/paper neutrals,
`--font-display` / `--font-body`) live in the `@theme` block of
`styles/tailwind.css`, which is what makes `text-primary`, `bg-ink-800`,
`font-display` etc. available.

## Slide authoring gotchas

- **Never leave a blank line inside an HTML block in a `.md` slide.** markdown-it
  ends the HTML block there, and the indented continuation is re-parsed as a
  fenced code block — the markup renders as literal source on the slide.
- The canvas is `1280x720` (`canvasWidth` / `aspectRatio` in `slides.md`
  headmatter) and slides do not scroll. Content must fit ~600px of vertical
  space once `.deck-slide` padding is subtracted; the padding-top also has to
  clear the fixed brand bar. `PackageDetails` takes `size="compact"` for the
  denser packages for exactly this reason.
- The outlined slide numeral (`BigNumber`, e.g. `05`) is 0-indexed with the
  cover at `00`, and `global-top.vue` offsets the counter to match.
- Fonts are loaded by Slidev from the `fonts` headmatter; Space Grotesk is
  declared under `fonts.custom` so it is fetched without being made the default
  sans.

## Other agent configs

An OpenAI Codex config exists at `~/.codex/config.toml`. To bring anything from
it into Claude Code, reply `/import` to scan and list what's importable, then
`/import --yes=<digest>` (the scan output names the digest) to apply the
user-level items. If `/import` isn't available on this surface, run
`claude import` from a terminal instead.
