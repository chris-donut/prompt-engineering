# Atompunk Personal Site

Retro-futurist personal site for a tech entrepreneur, built with Next.js (App Router), Tailwind CSS, and Framer Motion. Pages include Home, Thesis, Investments, Companies, and Art, with reusable section components and design tokens for a blue/orange atompunk palette.

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```
   > If your environment blocks npm registry access, try setting an explicit registry (e.g., `npm config set registry https://registry.npmjs.org`) or mirror before installing.

2. Run the development server:
   ```bash
   npm run dev
   ```
   Then open http://localhost:3000.

3. Lint and build:
   ```bash
   npm run lint
   npm run build
   npm run start # serve the production build
   ```

## Project Structure

- `app/` – App Router pages and global layout/styles
- `components/` – UI primitives and page sections
- `data/` – Seed content for hero, investments, companies, and art
- `tailwind.config.ts` – Design tokens (colors, fonts, shadows, animations)

## Visual Identity

- Palette: horizon blue/orange with gold and mint accents
- Typography: DM Sans (display), Inter (body)
- Effects: soft glows, gradients, and motion via Framer Motion

## Notes

This repository previously contained prompt-engineering utilities; those have been replaced by the site scaffold. Refer to `site_architecture.md` for the original architecture plan.
