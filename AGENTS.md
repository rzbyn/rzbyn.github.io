# AGENTS.md

## Project structure

Light feature-driven layout (not full Feature-Sliced Design):

- `src/app/`: Next.js routes only. Pages stay thin: metadata plus composing features.
- `src/features/<name>/`: everything one feature owns, split into `components/`, `services/`, `lib/` and `consts/` as needed, plus `index.ts` as its public API. Current features: `posts`, `layout`, `not-found`.
- `src/shared/`: code used by two or more places (`config/env`, `lib/notion`, `lib/json-ld.ts`, `consts/`).

Rules:

- `app/` imports a feature only through its index: `@features/<name>`.
- Imports inside a feature are relative. Imports of shared code use `@shared/...`.
- Code used by only one feature lives in that feature. Move it to `shared/` once a second place needs it.
- Components use the `Name/index.tsx` pattern. Files use the `.const.ts` and `.service.ts` suffixes.
