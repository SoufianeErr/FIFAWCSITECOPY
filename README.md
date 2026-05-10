# FIFA World Cup 2026 — Host Cities & Stadiums Guide

A production-ready Next.js 14 website covering all 16 FIFA World Cup 2026 host cities and stadiums. Built for maximum Google SEO ranking and AdSense revenue.

## Tech Stack

- **Framework:** Next.js 14 (App Router, SSG)
- **Styling:** Tailwind CSS 3
- **Content:** MDX via next-mdx-remote
- **Maps:** Leaflet.js (react-leaflet)
- **SEO:** Built-in Next.js metadata API + JSON-LD
- **Sitemap:** next-sitemap
- **Forms:** EmailJS (no backend required)
- **Deployment:** Vercel

## Quick Start

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/fifa-world-cup-2026.git
cd fifa-world-cup-2026

# Install dependencies
npm install

# Copy environment variables
cp .env.example .env.local

# Edit .env.local with your values
# (EmailJS keys, AdSense publisher ID, site URL)
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Production Build

```bash
npm run build
npm run start
```

The `postbuild` script automatically generates `sitemap.xml` and `robots.txt`.

## Deploy to Vercel

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com) and click **New Project**
3. Import your repository
4. Add environment variables from `.env.example`
5. Click **Deploy**

Alternatively, use the Vercel CLI:
```bash
npm install -g vercel
vercel
```

## Environment Variables

| Variable | Description |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | Your production URL (e.g., https://fifaworldcup2026guide.com) |
| `NEXT_PUBLIC_EMAILJS_SERVICE_ID` | EmailJS service ID |
| `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID` | EmailJS contact template ID |
| `NEXT_PUBLIC_EMAILJS_NEWSLETTER_TEMPLATE_ID` | EmailJS newsletter template ID |
| `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY` | EmailJS public key |
| `NEXT_PUBLIC_ADSENSE_PUBLISHER_ID` | Google AdSense publisher ID |
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | Google Analytics 4 measurement ID (optional) |

## Setting Up EmailJS

1. Create a free account at [emailjs.com](https://www.emailjs.com)
2. Create an email service (Gmail, Outlook, etc.)
3. Create two email templates:
   - Contact form template
   - Newsletter signup template
4. Copy your Service ID, Template IDs, and Public Key to `.env.local`

## Setting Up Google AdSense

1. Apply for AdSense at [google.com/adsense](https://www.google.com/adsense)
2. Once approved, get your Publisher ID (ca-pub-XXXXXXXXXX)
3. Add it to `.env.local` as `NEXT_PUBLIC_ADSENSE_PUBLISHER_ID`
4. Ad slots are pre-configured in each page — replace the placeholder `data-ad-slot` values with real slot IDs

## SEO Configuration

- All pages have unique meta titles and descriptions
- JSON-LD structured data is included on every relevant page
- Sitemap is auto-generated on every build
- Open Graph images should be added to `/public/og/`

## Project Structure

```
/app                    # Next.js App Router pages
/components             # Reusable React components
/content/news           # MDX blog articles
/lib                    # TypeScript data and utilities
/public                 # Static assets
```

## Adding Content

### Adding a Blog Post
Create a new `.mdx` file in `/content/news/` with this frontmatter:
```mdx
---
title: "Your Article Title"
description: "150-160 character meta description"
date: "2026-01-15"
category: "Cities"
slug: "your-article-slug"
image: "/images/news/your-image.jpg"
author: "Author Name"
readTime: "5 min read"
---

Your content here...
```

## License

MIT — feel free to use and modify for your own projects.
