# TAYYAR Logo System

Approved TAYYAR v1 logo assets, copied over from `TayyarCore/Tayyar-V2`'s
`public/brand/`. Do not redesign, replace, or reinterpret the symbol.

## Assets

- `tayyar-logo-full-light.svg` / `tayyar-logo-full-dark.svg` — full logo for light/dark backgrounds.
- `tayyar-logo-compact-light.svg` / `tayyar-logo-compact-dark.svg` — compact logo.
- `tayyar-symbol.svg` / `tayyar-symbol-dark.svg` / `tayyar-symbol-light.svg` — standalone symbol (see note below).
- `tayyar-app-icon.svg`, `tayyar-app-icon.png`, `tayyar-app-icon-dark.svg` — app/profile icon.
- `tayyar-favicon-{16,32,48}.svg`, `tayyar-favicon-{16,32,48,180}.png`, `tayyar-favicon.svg` — favicon variants.
- `tayyar-og.png` — social share image (1200×630), wired into `app/layout.tsx` OpenGraph/Twitter metadata.

## Rules

- Do not alter the dotted symbol.
- Do not add text to app icons or favicons.
- Do not recolor outside the provided light/dark variants.
- Keep enough clear space around the logo so the dot cluster remains recognizable.

## Master Brand System v1.0 (turquoise) — status

**None of the assets below are final for the new turquoise identity.**
`tayyar-og.png`, `tayyar-app-icon.png`, and every favicon/logo/symbol file
are still the old approved navy artwork copied over from Tayyar-V2, pending
a real export from the brand owner. They are not being mechanically
recolored here, and the header's inline `TayyarMark` (see `app/page.tsx`)
is an interim stand-in, not a final deliverable.

This repo's palette (`app/globals.css`) now runs on the Master Brand System
v1.0 turquoise/dark tokens. The header/footer's live logo mark
(`TayyarMark` in `app/page.tsx`) reproduces the same approved dot-cluster
geometry as `tayyar-symbol.svg` but inline, filled with `var(--turquoise)`,
so it renders correctly against this site's dark header — mirroring how
`Tayyar-V2`'s `TayyarLogo` component works. The static files above are
**unchanged and still navy** (`#2a3b62`), per the "do not recolor" rule;
`tayyar-og.png` and `tayyar-app-icon.png` are therefore still the old navy
identity in favicon/share-link previews, pending a real redesign delivery.

Note: `tayyar-symbol-dark.svg` is named "for dark backgrounds" but its fill
is identical navy to the base `tayyar-symbol.svg` — it doesn't actually
lighten for dark contexts. This looks like an authoring gap from the
original v1 delivery, not something introduced here; flagging for the
brand owner rather than silently "fixing" an approved asset.

Four files were added purely to satisfy the requested asset-structure
naming convention and are **not wired into any code**:
`tayyar-symbol-light.svg` (alias of `tayyar-symbol.svg`), `tayyar-favicon.svg`
(alias of `tayyar-favicon-32.svg`), and `tayyar-logo-ar.svg` /
`tayyar-logo-en.svg` (placeholders — no approved Arabic-only/English-only
split exists; `tayyar-logo-full-*` already combines both scripts).
