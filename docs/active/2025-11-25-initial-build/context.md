# Spec: Deathly Hallows Documentation Site - Initial Build

**Objective**: Create a Next.js website documenting the Hybrid Documentation System with a "Tale of Three Brothers" aesthetic.

**Context**:
- User wanted to build a site explaining the hybrid documentation methodology
- Inspired by the animated sequence from Harry Potter 7 Part 1
- Core metaphor: NOW.md/STACK.md/CLAUDE.md = Elder Wand/Resurrection Stone/Invisibility Cloak

**Scope**:
- In: Homepage, Philosophy, Getting Started, Download pages
- In: Shadow puppet/silhouette aesthetic
- In: Animated Deathly Hallows symbol
- In: Responsive design (mobile-first)
- In: Hybrid documentation system for THIS project (dogfooding)
- Out: Backend/database functionality
- Out: User authentication

**Files**:
- `app/page.tsx` - Homepage
- `app/philosophy/page.tsx` - Philosophy page
- `app/getting-started/page.tsx` - Getting Started page
- `app/download/page.tsx` - Download page
- `components/**` - All UI and effect components
- `tailwind.config.ts` - Design tokens
- `app/globals.css` - Global styles

**Proof**:
```bash
npm run build
npm run dev -- -p 3001
# Expected: All pages render, no TypeScript errors
```

**Risk**: Low
**Time**: ~2 hours initial build (completed), polish ongoing
