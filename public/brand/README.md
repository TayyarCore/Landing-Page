# Tayyar Master Brand System v1.0 — Final Production Assets

Copied over from `TayyarCore/Tayyar-V2`'s `public/brand/`.

Logo, symbol, favicon, and app icons: final production assets.
Open Graph image: pending final approved 1200×630 export.

## Assets

- `tayyar-symbol.svg` — standalone symbol, turquoise `#2DD4BF`. General use on dark and light backgrounds; compact/mobile spaces.
- `tayyar-symbol-white.svg` — standalone symbol, white `#F8FAFC`, for dark backgrounds.
- `tayyar-symbol-dark.svg` — standalone symbol, dark `#0B0F14`, for light backgrounds.
- `tayyar-logo-ar-dark-bg.svg` — Arabic logo (turquoise symbol + white «تيــار») for dark backgrounds. Used in the site header and footer.
- `tayyar-logo-ar-light-bg.svg` — Arabic logo (turquoise symbol + dark «تيــار») for light backgrounds.
- `tayyar-logo-en-dark-bg.svg` — English "TAYYAR" logo for dark backgrounds.
- `tayyar-logo-en-light-bg.svg` — English "TAYYAR" logo for light backgrounds.
- `tayyar-favicon.svg` — vector favicon, 1:1, `#0B0F14` background.
- `favicon-16x16.png` / `favicon-32x32.png` — raster favicon fallbacks.
- `apple-touch-icon-180.png` — iOS home screen icon, 180×180.
- `tayyar-app-icon-512.png` / `tayyar-app-icon-192.png` — app icons (18% safe area).
- `tayyar-og.png` — social share image, wired into `app/layout.tsx`
  OpenGraph/Twitter metadata. **Still the interim navy asset** — a final
  approved 1200×630 export from the brand-owner Canva design is pending and
  will land in a separate follow-up commit.

## Colors

- Turquoise: `#2DD4BF`
- Dark: `#0B0F14`
- White: `#F8FAFC`

## Usage

- Dark backgrounds (header, footer): `tayyar-logo-ar-dark-bg.svg`.
- Light backgrounds: `tayyar-logo-ar-light-bg.svg`.
- Narrow spaces and mobile: `tayyar-symbol.svg`.
- Favicon: `tayyar-favicon.svg`, with `favicon-16x16.png` / `favicon-32x32.png` as raster fallbacks.

## Rules

- Do not redesign, recolor, or reinterpret the symbol geometry.
- Do not add text to app icons or favicons.
- Keep enough clear space around the logo so the dot cluster remains recognizable.
- Do not re-draw the symbol geometry inline in JSX — use these files directly.

## Pending

`tayyar-og.png` — final approved 1200×630 export from the brand-owner Canva
design (`Tayyar — Channel Assets Final Review v1.0`, page 4) is pending. The
current file is the old interim navy asset and will be replaced in a
separate follow-up commit once the approved export is available.
