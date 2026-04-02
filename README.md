# @ncco/ui-alpha

NCCO's internal React component library. Built on [shadcn/ui](https://ui.shadcn.com/) and [Radix UI](https://www.radix-ui.com/), styled with NCCO design tokens, and distributed as a private package.

> **Alpha** — This library is under active development. APIs may change before `v1.0.0`.

---

## Stack

- **React 19** + **TypeScript**
- **Vite** — development and library build
- **Tailwind CSS v4**
- **shadcn/ui** — component base
- **Radix UI** — accessible primitives
- **Style Dictionary** — token pipeline
- **Storybook 10** — component development and documentation
- **Barlow Semi Condensed** — primary typeface

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm

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

Design tokens flow from Figma through Style Dictionary into CSS custom properties consumed by all components.
```
Figma (Tokens Studio) → JSON → Style Dictionary → tokens.css → Components
```

### Regenerate tokens
```bash
npm run tokens
```

Token source files live in `tokens/`. The output file `src/styles/tokens.css` is auto-generated — do not edit it directly.

### Token files

| File | Contents |
|------|----------|
| `tokens/primitive.json` | Raw color palette — Jungle, Charcoal, Tomato, Neutral |
| `tokens/semantic.json` | Semantic aliases — base colors, focus, spacing, radius, typography |
| `tokens/spacing.json` | Spacing scale primitives |
| `tokens/radius.json` | Border radius primitives |
| `tokens/typography.json` | Font family, size, weight, and line height primitives |

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
| `tokens.css` | Design token CSS variables |

---

## Components

### Button
```tsx
import { Button } from '@ncco/ui-alpha'
import '@ncco/ui-alpha/styles'

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
├── .storybook/          # Storybook configuration
├── dist/                # Built library output (generated)
├── src/
│   ├── components/
│   │   └── ui/
│   │       ├── button.tsx
│   │       └── button.stories.tsx
│   ├── lib/
│   │   └── utils.ts
│   ├── styles/
│   │   └── tokens.css   # Auto-generated — do not edit
│   └── index.ts         # Public API exports
├── tokens/              # Token source files
│   ├── primitive.json
│   ├── semantic.json
│   ├── spacing.json
│   ├── radius.json
│   └── typography.json
├── CHANGELOG.md
├── sd.config.js         # Style Dictionary config
├── vite.config.ts       # Dev + test config
└── vite.lib.config.ts   # Library build config
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

1. Gate 1A — Complete requirements brief approved by PM and PO
2. Gate 1B — Figma component approved by stakeholders before handoff
3. Gate 2 — Inspectable Figma link with Dev Mode enabled
4. Gate 3 — UX Review catches implementation drift only

---

## Status

| Component | Status | Storybook | Version |
|-----------|--------|-----------|---------|
| Button | ✅ Complete | ✅ | 0.1.0 |

---

*Internal use only — NCCO / National Checking Company*