# RayLiao's Personal Site

Personal website and blog, merged into a single static site: photography
portfolios, family albums, a tech blog, and two article collections
(`/yar`, `/hakka`), with client-side multilingual support.

## Tech Stack

- **Framework**: Astro 5 (static output) + React 19 islands
- **Styling**: Tailwind CSS 3
- **Content**: Astro content collections (`blog`, `yar`, `hakka`) in `content/`
- **Deployment**: Cloudflare Workers static assets via `wrangler`
- **Image storage**: Cloudflare R2 (`PUBLIC_R2_URL`), falls back to local `/public/images`

## Project Structure

```
src/
├── pages/              # Routes (home, shoot, family, blog, yar, hakka, alice, …)
├── layouts/            # PersonalLayout + blog layouts (Layout/Main)
├── components/         # Astro + React island components
├── content.config.ts   # Content collection schemas (blog/yar/hakka)
├── config.ts           # SITE metadata & social links
├── styles/             # base.css (blog) + personal.css (personal site)
└── utils/              # slugify, sorting, OG image generation, i18n, image URL

content/
├── blog/               # Tech blog posts (AstroPaper-style frontmatter)
├── yar/                # Rayyar爱学习 articles
└── hakka/              # Hakka culture articles

public/                 # Static assets (toggle-theme.js, llms.txt, images, …)
```

## Getting Started

```bash
pnpm install
pnpm dev
```

Copy `.env.example` to `.env.local` and set `PUBLIC_R2_URL` to your R2 public
base URL to load photography images from Cloudflare R2.

## Checks

```bash
pnpm sync      # regenerate Astro content types
pnpm lint      # ESLint
pnpm build     # astro check + astro build (also used by deploy)
```

## Deployment

Manual deploy to Cloudflare Workers (no CI):

```bash
pnpm run deploy
```

The site is fully static (`output: "static"`); `wrangler.jsonc` serves `dist/`
as assets with a 404 page. No Worker runtime code is required.

## Internationalization

Client-side `localStorage` locale switching on the personal pages, 6 languages:
English, 繁體中文, 简体中文, 日本語, français, 한국어.

## License

Copyright © 2011-2026 WingRay Liao. All rights reserved.