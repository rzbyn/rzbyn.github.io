# AGENTS.md

## Project structure

Light feature-driven layout (not full Feature-Sliced Design):

- `src/app/`: Next.js routes only. Pages stay thin: metadata plus composing features.
- `src/features/<name>/`: everything one feature owns, split into `components/`, `services/`, `lib/` and `consts/` as needed, plus `index.ts` as its public API. Current features: `posts`, `layout`, `not-found`.
- `src/shared/`: code used by two or more places (`config/env`, `lib/notion`, `lib/json-ld.ts`, `lib/cn.ts`, `consts/`, and `ui/` for shared UI primitives built with `cva`, such as `ui/TextLink`).

Rules:

- `app/` imports a feature only through its index: `@features/<name>`.
- Imports inside a feature are relative. Imports of shared code use `@shared/...`.
- Code used by only one feature lives in that feature. Move it to `shared/` once a second place needs it.
- Components use the `Name/index.tsx` pattern. Files use the `.const.ts` and `.service.ts` suffixes.
- Style with the semantic tokens defined in `src/app/globals.css` (`bg-background`, `text-foreground`, `text-accent`, `font-mono`). Don't use raw palette colors (`blue-500`, hex) in components. Dark mode follows `prefers-color-scheme` through the default `dark:` variant; there is no toggle.
