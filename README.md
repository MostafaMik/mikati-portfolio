# Mikati's Portfolio

The personal portfolio of M.Mikati, product designer. A full-screen, scroll-driven
site featuring a mouse-scrubbed background video, animated case-study overlays, and an
interactive three.js character (MIKA) that follows the cursor.

Built with React, TypeScript, Vite, Tailwind CSS and three.js.

## Develop

```bash
npm install
npm run dev
```

The dev server runs on http://localhost:5173.

## Build

```bash
npm run build      # type-checks, then builds to dist/
npm run preview    # serve the production build locally
```

## Project content

All case-study content lives in [`src/data/projects.ts`](src/data/projects.ts) — edit
that one file to update the projects. Bio copy is in
[`src/components/About.tsx`](src/components/About.tsx), contact links in
[`src/components/Contact.tsx`](src/components/Contact.tsx), and the résumé PDF is at
[`public/resume.pdf`](public/resume.pdf).

## Deployment

Hosted on Vercel and redeployed automatically on every push to `main`.
