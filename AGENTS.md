# AGENTS.md

## Project structure

Light feature-driven layout (not full Feature-Sliced Design):

- `src/app/`: Next.js routes only. Pages stay thin: metadata plus composing features.
- `src/features/<name>/`: everything one feature owns, split into `components/`, `services/`, `lib/` and `consts/` as needed, plus `index.ts` as its public API. Current features: `posts`, `layout` (shell, nav, footer and `Mark`, the replaceable logo), `og-image` (Open Graph cards and their fonts), `not-found`, `analytics` (the Cloudflare Web Analytics beacon).
- `src/shared/`: code used by two or more places (`config/env`, `lib/notion`, `lib/json-ld.ts`, `lib/cn.ts`, `consts/`, and `ui/` for shared UI primitives built with `cva`, such as `ui/TextLink`, `ui/Heading` and `ui/Prose` for long-form text).

Rules:

- `app/` imports a feature only through its index: `@features/<name>`.
- Imports inside a feature are relative. Imports of shared code use `@shared/...`.
- Code used by only one feature lives in that feature. Move it to `shared/` once a second place needs it.
- Components use the `Name/index.tsx` pattern. Files use the `.const.ts` and `.service.ts` suffixes.
- Style with the semantic tokens defined in `src/app/globals.css` (`bg-background`, `text-foreground`, `text-muted`, `text-accent`, `border-rule`, `max-w-content`, `font-sans`, `font-serif`, `stretch-wide`). Use `font-mono` only for code. Don't use raw palette colors (`blue-500`, hex) in components. Dark mode follows `prefers-color-scheme` through the default `dark:` variant; there is no toggle.

## Accessibility

Target WCAG 2.2 AA. Use native HTML first and ARIA only where HTML has no equivalent.

- Use `TextLink` for links. Its `external` prop adds the visually hidden "(opens in new tab)" label.
- Don't add focus classes to components. The global `:focus-visible` rule in `src/app/globals.css` draws every focus ring.
- Add `role="list"` to a styled `<ul>`/`<ol>` outside `<nav>`. Safari drops list semantics under Tailwind's `list-style: none`.
- Use one `<h1>` per page through `Heading`, and don't skip heading levels. Index pages may hide it visually with `className="sr-only"`; the nav dot shows where you are. Wrap dates in `<time dateTime>`. Don't add `<section>` without a heading.
- No timed redirects or auto-advancing content. Text color tokens must keep 4.5:1 contrast against `--background` in both schemes.
