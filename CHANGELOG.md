# Changelog

All notable changes to @ncco/ui will be documented here.
Versioning follows [Semantic Versioning](https://semver.org/).

## [0.1.0] - 2026-03-18

### Added
- Button component: Default, Secondary, Outline, Ghost, Destructive, Link variants
- Button sizes: xs, sm, default, lg, icon, icon-xs, icon-sm, icon-lg
- NCCO design token pipeline: Tokens Studio → Style Dictionary → CSS variables
- Color tokens: Jungle, Charcoal, Tomato, Neutral primitive and semantic scales
- Open Sans as primary typeface
- shadcn/ui as component base with Radix UI primitives
- Lucide React as icon library

#### Infrastructure
- Vite + React + TypeScript project scaffold
- Tailwind CSS v4 via `@tailwindcss/vite` plugin
- shadcn/ui initialized with Radix UI base and custom preset
- Path alias configured (`@/` → `src/`)
- Vite library mode configured via `vite.lib.config.ts` (separate from dev/test config)
- Dual module output: ES (`ncco-ui.es.js`) and CJS (`ncco-ui.cjs.js`)
- Storybook 10 configured with `@storybook/react-vite`, a11y, docs, and Vitest addons
- Vitest + Playwright browser testing configured

#### Token Pipeline
- Style Dictionary v5 configured via `sd.config.js`
- Token source files: `primitive.json`, `semantic.json`, `spacing.json`, `radius.json`, `typography.json`
- Full primitive token set: Jungle, Charcoal, Tomato, Neutral color palettes
- Full semantic token set: base colors, focus states, spacing scale, border radius, typography
- Token output: `src/styles/tokens.css` (auto-generated, do not edit directly)
- All tokens prefixed with `--ncco-*` for namespace safety
- `npm run tokens` script to regenerate token output from source files
- `npm run build:lib` script to produce distributable `dist/` output including `tokens.css`

#### Typography
- Barlow Semi Condensed loaded via `@fontsource/barlow-semi-condensed` (weights: 400, 500, 600, 700)
- Font family token: `--ncco-font-family-sans: 'Barlow Semi Condensed'`
- Applied globally via `@layer base`

#### Components
- `Button` component — shadcn/ui base with Radix UI Slot primitive
  - Variants: `default`, `secondary`, `outline`, `ghost`, `destructive`, `link`
  - Sizes: `xs`, `sm`, `default`, `lg`, `icon`, `icon-xs`, `icon-sm`, `icon-lg`
  - All styles reference NCCO design tokens via CSS custom properties
  - Fully typed with TypeScript and CVA (class-variance-authority)

#### Storybook Stories
- `button.stories.tsx` — individual stories for all variants and states
- Stories: Default, Secondary, Outline, Ghost, Destructive, Link, Disabled, Sizes, AllVariants
- `tags: ['autodocs']` enabled for auto-generated documentation page
- Background presets configured: light, subtle, dark

#### Package Configuration
- Package name: `@ncco/ui-alpha`
- Version: `0.1.0`
- `react` and `react-dom` set as peer dependencies
- `exports` field configured for ES and CJS consumption
- `files` field scoped to `dist/` only
