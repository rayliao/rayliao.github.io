# RayLiao's Personal Site

Personal website: photography portfolios, family albums, and two MDX article collections (`/yar`, `/hakka`), with client-side multilingual support.

## Tech Stack

- **Framework**: Next.js 16 (App Router) + React 19
- **Styling**: Tailwind CSS 3
- **Deployment**: Cloudflare Workers via `@opennextjs/cloudflare`
- **Image storage**: Cloudflare R2 (`NEXT_PUBLIC_R2_URL`), falls back to local `/public/images`
- **Articles**: MD/MDX in `content/`, rendered with `next-mdx-remote` + `gray-matter`

## Project Structure

```
app/
├── page.tsx            # Homepage
├── layout.tsx          # Root layout with theme provider
├── blog/               # Writing hub
├── yar/ hakka/         # Article collections: list + [slug] detail
├── shoot/              # Photography galleries by year
├── jon/ family/ li/    # Family albums
├── alice/              # Private pages (password gate)
├── common/             # Utilities & data (client i18n, image URL, article loading)
├── components/         # Layout, LocaleSwitcher, PasswordGate, Provider
└── styles/globals.css

content/                # yar / hakka articles (.md / .mdx)
public/                 # Static assets (llms.txt)
```

## Getting Started

```bash
pnpm install
pnpm dev
```

## Deployment

Manual deploy to Cloudflare Workers (no CI):

```bash
pnpm run deploy
```

Pages that read `content/` at build time rely on `staticAssetsIncrementalCache` in `open-next.config.ts` — do not replace it with the default cache, or article lists/details will 404 on the Worker.

## Internationalization

Client-side `localStorage` locale switching, 6 languages: English, 繁體中文, 简体中文, 日本語, français, 한국어.

## License

Copyright © 2011-2026 WingRay Liao. All rights reserved.