# RayLiao's Personal Site

A personal website built with [Next.js](https://nextjs.org/) App Router, featuring photography portfolios and multilingual support.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Deployment**: Vercel
- **Analytics**: Vercel Analytics & Speed Insights
- **Image Storage**: Vercel Blob (optional) or local `/public/images`

## Project Structure

```
app/
├── page.tsx              # Homepage
├── layout.tsx            # Root layout with theme provider
├── not-found.tsx         # 404 page
├── common/               # Utilities & data
│   ├── config.ts
│   ├── image.ts          # Image URL helper (Vercel Blob / local)
│   └── lang.ts           # Client-side i18n
├── components/
│   ├── Layout/           # Photography page layout
│   ├── LocaleSwitcher.tsx
│   ├── Provider.tsx      # Theme provider
│   └── Svg.tsx
├── shoot/                # Photography galleries by year
│   ├── 2021/
│   ├── 2020/
│   └── ...
├── jon/                  # Jon gallery
├── alice/lover/          # Alice lover gallery
└── styles/
    └── globals.css

dictionaries/             # Server-side i18n dictionaries
├── en.json
├── zh-Hans.json
├── zh-Hant.json
├── jp.json
├── fr.json
└── ko.json
```

## Getting Started

Install dependencies:

```bash
pnpm install
```

Run the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser.

## Image Storage

Images can be served from:

1. **Local** (default): Place images in `public/images/`
2. **Vercel Blob**: Set `NEXT_PUBLIC_BLOB_URL` in `.env.local`

See `VERCEL_BLOB_SETUP.md` for detailed instructions.

## Internationalization

The site supports 6 languages via client-side `localStorage` locale switching:
- English
- 繁體中文 (zh-Hant)
- 简体中文 (zh-Hans)
- 日本語 (jp)
- français (fr)
- 한국어 (ko)

## License

Copyright © 2011-2024 WingRay Liao. All rights reserved.
