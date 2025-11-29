# Working Memory: Deathly Hallows Documentation Site

## Session Notes (2025-11-25)

### Key Decisions Made

1. **Aesthetic Direction**: Chose "Tale of Three Brothers" animated sequence style
   - Shadow puppet/silhouette art
   - Parchment textures
   - Aged gold illumination
   - Deliberate, atmospheric animations

2. **Three Hallows Metaphor**:
   - Elder Wand → NOW.md (power, current focus)
   - Resurrection Stone → STACK.md (bringing back paused work)
   - Invisibility Cloak → CLAUDE.md (AI working within boundaries)

3. **Tech Stack**:
   - Next.js 14 with App Router
   - TypeScript for type safety
   - Tailwind CSS for styling
   - Framer Motion for animations
   - Lucide React for icons

4. **Color Palette**:
   - Background: #1a1612 (dark parchment)
   - Gold: #c9a227 (aged gold)
   - Text: #e8dcc8 (warm off-white)
   - Silhouette: #0a0908 (near-black)

### Issues Encountered & Solutions

1. **TypeScript error with Framer Motion ease values**
   - Problem: `ease: "easeInOut"` caused type error
   - Solution: Used cubic bezier array `[0.4, 0, 0.2, 1]` instead

2. **Port conflict**
   - Problem: Another project running on port 3000
   - Solution: Run on port 3001: `npm run dev -- -p 3001`

3. **Dogfooding omission**
   - Problem: Not using hybrid docs for THIS project
   - Solution: Created NOW.md, STACK.md, CLAUDE.md, docs/ structure

### Files Created
- 4 page files (home, philosophy, getting-started, download)
- ~15 component files
- Tailwind config with custom theme
- Global CSS with design system
- Hybrid documentation files (NOW.md, STACK.md, CLAUDE.md)

### Reference Links
- Manus Context Engineering: https://www.manus.im/
- Next.js 14 Docs: https://nextjs.org/docs
- Framer Motion: https://www.framer.com/motion/

### Pre-Deployment Bug Fixes (2025-11-25)

Fixed 3 visual issues before deployment:

1. **Circle gap in Deathly Hallows Symbol**
   - Problem: `<motion.circle>` with `pathLength` animation left a gap
   - Root cause: `pathLength` doesn't work correctly on native SVG circle elements
   - Solution: Converted to `<motion.path>` with arc command `M 70 58 A 20 20 0 1 1 69.99 58`
   - File: `components/silhouettes/DeathlyHallows.tsx:83-88`

2. **Scroll indicator overlapping buttons**
   - Problem: Mouse scroll animation positioned between CTA buttons
   - Root cause: Indicator was inside content div, positioned relative to it
   - Solution: Moved indicator outside content div to section level, changed to `bottom-6`
   - File: `components/home/Hero.tsx:75-93`

3. **Background symbol hidden under NavBar**
   - Problem: 800px background symbol's apex hidden under fixed navbar
   - Root cause: Symbol centered vertically in full viewport
   - Solution: Added `pt-16` padding to offset below navbar
   - File: `components/home/Hero.tsx:15`

### Deployment (2025-11-25)

Initially deployed to Netlify, then migrated to Vercel.

### GSAP Migration (2025-11-29)

Full migration from Framer Motion to GSAP:

1. **lib/gsap.ts** - Created GSAP configuration with ScrollTrigger
2. **Hero.tsx** - Orchestrated timeline entrance with parallax
3. **DustMotes.tsx** - GSAP particle system with wind gusts
4. **ScrollReveal.tsx** - GSAP ScrollTrigger with scrub option
5. **DeathlyHallows.tsx** - SVG stroke animation with glow pulse
6. **ThreeHallows.tsx** - GSAP hover effects on cards
7. **TheProblem.tsx** - GSAP floating paper animations
8. **TheSolution.tsx** - GSAP glow effects

### Vercel Deployment (2025-11-29)

Migrated from Netlify to Vercel for native Next.js support:
- **Live URL**: https://deathly-hallows-site.vercel.app
- Removed static export config (Vercel handles SSR natively)
- Created dynamic favicon and OG image

### Project Complete
The Deathly Hallows Documentation Site is now live on Vercel with full GSAP animations!
