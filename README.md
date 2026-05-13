# @ncco/ui-alpha

NCCO's internal React component library. Built on [shadcn/ui](https://ui.shadcn.com/) and [Radix UI](https://www.radix-ui.com/), styled with NCCO design tokens, and distributed as a private package via Azure Artifacts.

> **Alpha** — This library is under active development. APIs may change before `v1.0.0`.

---

## Stack

- **React 18/19** + **TypeScript**
- **Vite** — development and library build
- **Tailwind CSS v4**
- **shadcn/ui** — component base (copy-paste model)
- **Radix UI** — accessible primitives
- **Style Dictionary v5** — design token pipeline
- **Storybook 10** — component development and documentation
- **Barlow Semi Condensed** — primary typeface
- **Azure Artifacts** — private package registry (`xperimental.ncco-ui` feed)

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm
- Azure DevOps access to `nccoit` organization

### Install dependencies

```bash
npm install
```

### Run Storybook

```bash
npm run storybook
```

### Run dev app

```bash
npm run dev
```

---

## Token Pipeline

Design tokens flow from Figma through Style Dictionary into CSS custom properties consumed by all components. Tokens are the single source of truth — no hardcoded color, spacing, or radius values exist anywhere in the component code.

```
Figma Variables (Tokens Studio) → JSON Export → Style Dictionary → tokens.css → Components
```

### Token collections (Figma)

| Collection | Purpose |
|------------|---------|
| NCCO Primitives | Raw palette values — charcoal-blue, blushed-brick, soft-green, emerald, teal, neutral |
| NCCO Semantic | Contextual aliases — primary-light/dark, destructive-light/dark, sidebar, chart tokens |

### Regenerate tokens

```bash
npm run tokens
```

Token source files live in `tokens/`. The output file `src/styles/tokens.css` is auto-generated — do not edit it directly.

### Token files

| File | Contents |
|------|----------|
| `tokens/ncco-primitives.json` | Raw NCCO color palette exported from Figma Tokens Studio |
| `tokens/ncco-semantic.json` | Semantic aliases with light and dark variants exported from Figma |
| `tokens/spacing.json` | Spacing scale primitives (dimension-typed with px units) |
| `tokens/radius.json` | Border radius primitives (dimension-typed with px units) |
| `tokens/typography.json` | Font family, size, weight, and line height primitives |

### Token naming convention

All generated CSS variables are prefixed with `--ncco-` for namespace safety:

```css
/* Primitives */
--ncco-colors-charcoal-blue-800: #133341;
--ncco-colors-blushed-brick-800: #cb4749;

/* Semantics */
--ncco-colors-primary-light: var(--ncco-colors-charcoal-blue-800);
--ncco-colors-destructive-light: var(--ncco-colors-blushed-brick-800);

/* Spacing / Radius / Typography */
--ncco-spacing-4: 16px;
--ncco-radius-6: 6px;
--ncco-font-font-sans-condensed: Barlow Semi Condensed;
```

---

## Building the Library

```bash
npm run build:lib
```

Outputs to `dist/`:

| File | Description |
|------|-------------|
| `ncco-ui.es.js` | ES module build |
| `ncco-ui.cjs.js` | CommonJS build |
| `index.d.ts` | TypeScript declarations |
| `styles.d.ts` | TypeScript declaration for styles side-effect import |
| `tokens.css` | Design token CSS variables |

---

## Publishing to Azure Artifacts

### Setup

Create a `.npmrc` file in the project root (gitignored):

```
registry=https://nccoit.pkgs.visualstudio.com/23fa59eb-54d0-4673-a6bc-c9bbe129f41b/_packaging/xperimental.ncco-ui/npm/registry/
always-auth=true
```

Authenticate using a Personal Access Token with Packaging Read & Write scope:

```bash
npm install -g vsts-npm-auth
vsts-npm-auth -config .npmrc
```

### Publish

```bash
npm run build:lib
npm publish
```

---

## Consuming This Package

### From Azure Artifacts (recommended)

Add a `.npmrc` to your consuming project root:

```
@ncco:registry=https://nccoit.pkgs.visualstudio.com/23fa59eb-54d0-4673-a6bc-c9bbe129f41b/_packaging/xperimental.ncco-ui/npm/registry/
always-auth=true
```

Then install:

```bash
npm install @ncco/ui-alpha
```

---

### Setup — Vite + React (recommended)

#### 1. Install Tailwind CSS v4

```bash
npm install tailwindcss @tailwindcss/vite
```

Configure `vite.config.ts`:

```ts
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
})
```

#### 2. Configure styles

In your main CSS file:

```css
@import "tailwindcss";
@import "@ncco/ui-alpha/styles";
@source "../node_modules/@ncco/ui-alpha/dist/ncco-ui.es.js";

@custom-variant dark (&:is(.dark *));

:root {
  --primary: var(--ncco-colors-primary-light);
  --primary-foreground: var(--ncco-colors-primary-foreground-light);
  --secondary: var(--ncco-colors-secondary-light);
  --secondary-foreground: var(--ncco-colors-secondary-foreground-light);
  --destructive: var(--ncco-colors-destructive-light);
  --destructive-foreground: var(--ncco-colors-destructive-foreground-light);
  --muted: var(--ncco-colors-muted-light);
  --muted-foreground: var(--ncco-colors-muted-foreground-light);
  --accent: var(--ncco-colors-accent-light);
  --accent-foreground: var(--ncco-colors-accent-foreground-light);
  --background: var(--ncco-colors-background-light);
  --foreground: var(--ncco-colors-foreground-light);
  --card: var(--ncco-colors-card-light);
  --card-foreground: var(--ncco-colors-card-foreground-light);
  --popover: var(--ncco-colors-popover-light);
  --popover-foreground: var(--ncco-colors-popover-foreground-light);
  --border: var(--ncco-colors-border-light);
  --input: var(--ncco-colors-input-light);
  --ring: var(--ncco-colors-ring-light);
  --radius: var(--ncco-radius-6);
}

.dark {
  --primary: var(--ncco-colors-primary-dark);
  --primary-foreground: var(--ncco-colors-primary-foreground-dark);
  --secondary: var(--ncco-colors-secondary-dark);
  --secondary-foreground: var(--ncco-colors-secondary-foreground-dark);
  --destructive: var(--ncco-colors-destructive-dark);
  --destructive-foreground: var(--ncco-colors-destructive-foreground-dark);
  --background: var(--ncco-colors-background-dark);
  --foreground: var(--ncco-colors-foreground-dark);
  --border: var(--ncco-colors-border-dark);
  --input: var(--ncco-colors-input-dark);
  --ring: var(--ncco-colors-ring-dark);
  --muted: var(--ncco-colors-muted-dark);
  --muted-foreground: var(--ncco-colors-muted-foreground-dark);
}

@theme inline {
  --color-primary: var(--primary);
  --color-primary-foreground: var(--primary-foreground);
  --color-secondary: var(--secondary);
  --color-secondary-foreground: var(--secondary-foreground);
  --color-destructive: var(--destructive);
  --color-destructive-foreground: var(--destructive-foreground);
  --color-muted: var(--muted);
  --color-muted-foreground: var(--muted-foreground);
  --color-accent: var(--accent);
  --color-accent-foreground: var(--accent-foreground);
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --color-card: var(--card);
  --color-card-foreground: var(--card-foreground);
  --color-popover: var(--popover);
  --color-popover-foreground: var(--popover-foreground);
  --color-border: var(--border);
  --color-input: var(--input);
  --color-ring: var(--ring);
  --radius-sm: var(--ncco-radius-4);
  --radius-md: var(--ncco-radius-6);
  --radius-lg: var(--ncco-radius-8);
}

@layer base {
  * { border-color: var(--border); }
  body {
    background-color: var(--background);
    color: var(--foreground);
  }
}
```

#### 3. Use components

```tsx
import { Button } from '@ncco/ui-alpha'

<Button variant="default">Submit</Button>
<Button variant="destructive">Delete</Button>
```

---

### Setup — CRA + Bootstrap/Argon (legacy compatibility)

> This setup applies to projects using Create React App with Bootstrap 4 or the Argon Dashboard Pro React template.
> A CSS compatibility shim is required due to Bootstrap's `!important` utility architecture.
> The permanent fix is a Vite migration — the shim is removed entirely in a Vite environment.

#### 1. Install Tailwind CSS v3

```bash
npm install -D tailwindcss@3
npx tailwindcss init
```

> Do not install postcss or autoprefixer separately — CRA provides them.

Configure `tailwind.config.js`:

```js
module.exports = {
  prefix: 'tw-',
  corePlugins: { preflight: false },
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './node_modules/@ncco/ui-alpha/dist/ncco-ui.es.js'
  ],
  theme: { extend: {} },
  plugins: []
}
```

#### 2. Create `src/index.css`

```css
@tailwind components;
@tailwind utilities;

:root {
  --primary: var(--ncco-colors-primary-light);
  --primary-foreground: var(--ncco-colors-primary-foreground-light);
  --secondary: var(--ncco-colors-secondary-light);
  --secondary-foreground: var(--ncco-colors-secondary-foreground-light);
  --destructive: var(--ncco-colors-destructive-light);
  --destructive-foreground: var(--ncco-colors-destructive-foreground-light);
  --muted: var(--ncco-colors-muted-light);
  --muted-foreground: var(--ncco-colors-muted-foreground-light);
  --background: var(--ncco-colors-background-light);
  --foreground: var(--ncco-colors-foreground-light);
  --border: var(--ncco-colors-border-light);
  --input: var(--ncco-colors-input-light);
  --ring: var(--ncco-colors-ring-light);
  --radius: var(--ncco-radius-6);
}

/* Compatibility shim — scoped overrides beat Bootstrap/Argon !important flags */
/* Wrap all @ncco/ui-alpha components in <div className="ncco-ui"> */
.ncco-ui .bg-primary { background-color: var(--primary) !important; }
.ncco-ui .text-primary-foreground { color: var(--primary-foreground) !important; }
.ncco-ui .text-primary { color: var(--primary) !important; }
.ncco-ui .bg-secondary { background-color: var(--secondary) !important; }
.ncco-ui .text-secondary-foreground { color: var(--secondary-foreground) !important; }
.ncco-ui .bg-destructive { background-color: var(--destructive) !important; }
.ncco-ui .bg-muted { background-color: var(--muted) !important; }
.ncco-ui .text-foreground { color: var(--foreground) !important; }
.ncco-ui .border-border { border-color: var(--border) !important; }
.ncco-ui .border-transparent { border-color: transparent !important; }

.ncco-ui .hover\:bg-primary\/80:not(:disabled):hover { background-color: var(--primary) !important; opacity: 0.8; }
.ncco-ui .hover\:bg-secondary\/80:not(:disabled):hover { background-color: var(--secondary) !important; opacity: 0.8; }
.ncco-ui .hover\:bg-destructive\/20:not(:disabled):hover { background-color: var(--destructive) !important; opacity: 0.2; }
.ncco-ui .hover\:bg-muted:not(:disabled):hover { background-color: var(--muted) !important; }
.ncco-ui .hover\:text-foreground:not(:disabled):hover { color: var(--foreground) !important; }

.ncco-ui .active\:bg-primary\/90:active { background-color: var(--primary) !important; opacity: 0.9; }

.ncco-ui button { border-radius: var(--ncco-radius-6) !important; }
.ncco-ui button:disabled { opacity: 0.5 !important; pointer-events: none !important; }
.ncco-ui button:focus-visible { outline: none !important; box-shadow: 0 0 0 3px var(--ring) !important; }
.ncco-ui button[data-variant="destructive"]:focus-visible { box-shadow: 0 0 0 3px var(--destructive) !important; opacity: 0.5; }
```

#### 3. Import order in `index.js`

```js
import "bootstrap/dist/css/bootstrap.css";
// ... other vendor CSS
import "./assets/scss/argon-dashboard-pro-react.scss";
import "./assets/scss/site.scss";
import "@ncco/ui-alpha/styles";
import "./index.css"; // must be last
```

#### 4. Wrap components

```tsx
import { Button } from '@ncco/ui-alpha'

<div className="ncco-ui">
  <Button variant="default">Add New User</Button>
  <Button variant="destructive">Remove Users</Button>
</div>
```

---

## Components

### Button

```tsx
import { Button } from '@ncco/ui-alpha'

<Button variant="default">Click me</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="destructive">Delete</Button>
<Button variant="link">Link</Button>
```

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `default \| secondary \| outline \| ghost \| destructive \| link` | `default` | Visual style |
| `size` | `xs \| sm \| default \| lg \| icon \| icon-xs \| icon-sm \| icon-lg` | `default` | Button size |
| `disabled` | `boolean` | `false` | Disables the button |
| `asChild` | `boolean` | `false` | Renders as child element via Radix Slot |

---

## Project Structure

```
ncco-ui/
├── .storybook/               # Storybook configuration
├── dist/                     # Built library output (generated)
├── src/
│   ├── components/
│   │   └── ui/
│   │       ├── button.tsx
│   │       └── button.stories.tsx
│   ├── lib/
│   │   └── utils.ts
│   ├── styles/
│   │   └── tokens.css        # Auto-generated — do not edit
│   ├── styles.d.ts           # Type declaration for styles import
│   └── index.ts              # Public API exports
├── tokens/
│   ├── ncco-primitives.json  # NCCO color primitives (Figma export)
│   ├── ncco-semantic.json    # NCCO semantic tokens (Figma export)
│   ├── spacing.json          # Spacing scale
│   ├── radius.json           # Border radius scale
│   └── typography.json       # Typography scale
├── CHANGELOG.md
├── sd.config.js              # Style Dictionary configuration
├── vite.config.ts            # Dev + Storybook + test config
└── vite.lib.config.ts        # Library build config (separate to avoid conflicts)
```

---

## Versioning

This library follows [Semantic Versioning](https://semver.org/).

- **PATCH** `0.1.x` — bug fixes, no API changes
- **MINOR** `0.x.0` — new components or variants added
- **MAJOR** `x.0.0` — breaking changes to component APIs

See [CHANGELOG.md](./CHANGELOG.md) for full version history.

---

## Contributing

This library follows the NCCO Design–Development Process Standard. All component work requires:

1. **Gate 1A** — Complete requirements brief approved by PM and PO
2. **Gate 1B** — Figma component approved by stakeholders before handoff
3. **Gate 2** — Inspectable Figma link with Dev Mode enabled, token export confirmed
4. **Gate 3** — UX Review catches implementation drift only — scope changes become new tickets

---

## Component Status

| Component | Status | Storybook | A11y | Interaction Tests | Version |
|-----------|--------|-----------|------|-------------------|---------|
| Button | ✅ Complete | ✅ | ✅ 0 violations* | ✅ All variants | 0.1.6 |

*Destructive variant has 1 known contrast violation (4.43 ratio, requires 4.5:1). Fix: update `destructive-foreground-light` from `neutral.50` to `base.white` in `ncco-semantic.json`.

---

*Internal use only — NCCO / National Checking Company*