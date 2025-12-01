# Personal Site Architecture Plan

## Context
- Audience: Investors, collaborators, and followers on X.
- Purpose: Personal brand hub for a tech entrepreneur with a proven track record, showcasing vision, companies, investments, and art.
- Visual anchors: Moebius hand-drawn art, 1950s Fortune magazine covers, Syd Mead futurism; palette bias toward vibrant blue and orange in a retro-futurist (atompunk) vibe.

## Proposed Site Map
- `/` Home
- `/thesis` Thesis (long-form conviction pieces and worldview)
- `/investments` Investments (portfolio, filters, highlights)
- `/companies` Companies (ventures founded or led)
- `/art` Art (visual explorations, generative pieces, sketches)

## Page-Level Section Outline
### Home
- Hero: Name, positioning line, CTA to Thesis/Investments, background glow or layered gradient evoking atompunk skyline silhouettes.
- Signature visual: Subtle animated skyline/parallax gradient with blue/orange glows (CSS + Framer Motion; canvas optional later).
- Signal Tiles: Quick stats (exits, capital raised/deployed, active companies) with hover motion.
- Featured Thesis: Teaser card linking to `/thesis` with motion-on-hover.
- Latest Investments: 3–4 highlights linking to `/investments`.
- Companies Carousel: Scrollable cards linking to `/companies`.
- Art Preview: Mosaic/slider linking to `/art`.
- Footer: Socials with emphasis on X distribution.

### Thesis
- Intro: Positioning and scope of writing.
- Featured Essay: Hero card for top piece.
- Grid/List: Essays with tags (markets, AI, frontier tech).
- CTA: Subscribe / follow on X.

### Investments
- Filters: Stage, sector, geography.
- Portfolio Grid: Cards with company name, one-liner, role (lead/angel), key metric.
- Spotlights: 2–3 deep dives with motion reveals.
- CTA: Pitch/contact.

### Companies
- Timeline: Companies founded/operated with milestones.
- Detail Cards: Mission, team size, traction; CTA to external sites.
- Pull-quote band: Philosophy on building.

### Art
- Gallery: Grid with lightbox/modal; support images and short clips.
- Featured Piece: Animated highlight with Framer Motion.
- Process Notes: Short captions and tools used.

## Layout & Component Patterns
- Layout: App shell with sticky top nav (logo/wordmark, sections, X link) and animated underline on active route.
- Sections: Each major section as a composable React component under `components/sections/<page>/<SectionName>.tsx`.
- UI primitives: Buttons, badges/pills, cards, chip filters in `components/ui`.
- Motion: Use Framer Motion variants for fades/slides; parallax for hero background via CSS transforms; keep durations 0.3–0.6s.
- Typography: Modern sans with geometric feel; pair with display font for headings; generous letter spacing on nav.

## Data & State Notes
- Content-first: Start with static data objects per page (e.g., `data/home.ts`, `data/investments.ts`).
- Filters: Client-side state for investments; consider URL params later.
- Image handling: Prefer next/image with local assets; allow remote patterns if needed.

## Initial SiteTask Objects
```json
{
  "intent": "design_site_map",
  "agent_role": "ARCHITECT",
  "requirements": [
    "Routes for home, thesis, investments, companies, art",
    "Simple nav that scales to future blog/portfolio",
    "Retro-futurist atompunk mood with blue/orange bias"
  ],
  "constraints": {
    "tech": ["Next.js", "React", "Tailwind", "Framer Motion"],
    "no_heavy_canvas": true
  }
}
```
```json
{
  "intent": "build_section",
  "agent_role": "IMPLEMENTER",
  "page_id": "home",
  "section_id": "hero",
  "requirements": [
    "Cinematic hero with positioning line and CTA",
    "Animated retro-futurist background using gradients/parallax",
    "Highlight X distribution link"
  ],
  "constraints": {
    "tech": ["Next.js", "React", "Tailwind", "Framer Motion"],
    "perf_budget": "LCP < 2.5s desktop",
    "no_heavy_canvas": true
  }
}
```

## Next Steps
1. VISUAL: Define tokens (colors, typography scale, spacing, shadows, motion timings) aligned to atompunk references.
2. CONTENT: Draft copy for each page (hero positioning, thesis intro, investment blurbs, company timelines, art captions).
3. IMPLEMENTER: Scaffold Next.js App Router structure with `app` pages, shared layout, and placeholder sections using the component patterns above.
