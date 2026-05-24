# Keystone LandWorks — Astro Website

Production-grade SEO-optimized contractor website built in Astro for Keystone LandWorks LLC.

## What's in this site

**Total pages: 25**

- 1 homepage
- 5 service pages (Forestry Mulching, Land Clearing, Excavation, Gravel Driveways, Lot Clearing)
- 1 services hub page
- 10 service area / town pages (Tappahannock, Warsaw, Kilmarnock, Montross, Heathsville, White Stone, Irvington, Lancaster, Reedville, Colonial Beach)
- 1 service areas hub page
- 5 blog posts targeting high-value local search terms
- 1 blog hub page
- About, Contact, Gallery, 404

Every page includes:

- SEO-optimized title and meta description
- Open Graph and Twitter card tags
- Geo-targeting meta tags
- LocalBusiness schema markup (JSON-LD)
- Canonical URLs
- Mobile-responsive design
- Click-to-call phone number in header and CTAs
- Internal linking to relevant services and service areas

## Quick Start

```bash
# Install dependencies
npm install

# Run local development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

The site will run at `http://localhost:4321`.

## Deployment Options

### Option 1: GitHub Pages (Free)

Since the existing site is on GitHub, this is the easiest path.

1. Push this project to a GitHub repository
2. In repository settings → Pages, set source to "GitHub Actions"
3. Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy Astro to GitHub Pages
on:
  push:
    branches: [main]
  workflow_dispatch:
permissions:
  contents: read
  pages: write
  id-token: write
concurrency:
  group: "pages"
  cancel-in-progress: false
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: withastro/action@v3
  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - id: deployment
        uses: actions/deploy-pages@v4
```

4. Point your domain (`keystonelandworks.com`) at GitHub Pages via DNS

### Option 2: Netlify (Free, Recommended)

1. Push project to GitHub
2. Sign in to netlify.com, click "Add new site" → "Import from Git"
3. Pick your repo. Netlify auto-detects Astro.
4. Click Deploy. Done in 2 minutes.
5. Connect your domain in Netlify's domain settings.

### Option 3: Vercel (Free)

Same as Netlify — push to GitHub, import in Vercel, deploy.

## Adding/Updating Photos

**Real Keystone LandWorks project photos are already included** in `public/images/` — 39 photos pulled from your phone uploads, resized for web, and renamed with SEO-friendly filenames like:

- `hero-land-clearing-northern-neck-virginia.jpg`
- `forestry-mulching-pine-trees-northern-neck.jpg`
- `gravel-driveway-crowned-virginia.jpg`
- `waterfront-lot-clearing-finished-northern-neck.jpg`

They're already wired into the homepage, service pages, and gallery.

To **add more photos later**, drop new files into `public/images/` and follow the same naming pattern: `keyword-keyword-location.jpg`. Never use `IMG_1234.jpg` or `photo1.jpg` — that wastes SEO opportunity.

To **swap a photo out**, just replace the file with one of the same name. No code changes needed.

## Updating Content

Almost all site content lives in `src/consts.js`. To update:

- Phone number, email, service area, hours, geo coordinates → top of file
- Add/remove services → `SERVICES` array
- Add/remove towns → `SERVICE_AREAS` array
- Blog post list → `BLOG_POSTS` array

Service-specific page content is in `src/pages/services/[slug].astro` in the `SERVICE_CONTENT` object — edit there to update what each service page says.

## Adding a New Blog Post

1. Add an entry to `BLOG_POSTS` in `src/consts.js`
2. Create a new file at `src/pages/blog/your-slug-here.astro`
3. Copy the structure from any existing blog post
4. Write your content inside the `<BlogPostLayout>` tags

## After Going Live: SEO Setup Tasks

These need to happen AFTER deploying:

1. **Submit sitemap to Google Search Console**
   - URL: `https://www.keystonelandworks.com/sitemap-index.xml`
   - Verify ownership of your domain
   - Submit the sitemap

2. **Submit to Bing Webmaster Tools** (same process)

3. **Optimize your Google Business Profile** — see the separate checklist document

4. **Build local citations** — Yelp, Yellowpages, Angi, HomeAdvisor, BBB, Houzz, Chamber of Commerce. Be sure NAP (Name, Address, Phone) is IDENTICAL on every site.

5. **Set up Google Analytics 4** (optional but recommended) to track traffic and which pages drive calls

## Project Structure

```
src/
  components/      Reusable UI components (Header, Footer, CTABanner)
  layouts/         Page layouts (BaseLayout, BlogPostLayout)
  pages/           Each .astro file becomes a route
    services/     Dynamic service pages
    service-areas/ Dynamic location pages
    blog/         Blog posts
  styles/          Global CSS
  consts.js        All site data — edit here to update site-wide
public/            Static files (images, favicon, robots.txt)
astro.config.mjs   Astro configuration
```

## Tech Notes

- Astro 5.x with no framework dependencies (vanilla HTML/CSS/JS in components)
- Sitemap generated automatically at build time
- All pages pre-rendered to static HTML for maximum speed
- Total page weight is tiny — should load fast even on rural cell connections

## Maintenance

- Update photos quarterly so the gallery stays fresh
- Add 1–2 blog posts per month for ongoing SEO momentum
- Add new town pages if you expand into Middlesex County, King George County, or the Middle Peninsula
- Update reviews count in `src/consts.js` as more Google reviews come in

---

Built with Astro · Designed for the Northern Neck of Virginia
