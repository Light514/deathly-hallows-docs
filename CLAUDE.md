# Deathly Hallows Documentation Site - Agent Guide v1.0

## Critical Rules
- This is a DOCUMENTATION SITE for the Hybrid Documentation System
- Maintain "Tale of Three Brothers" aesthetic throughout
- All pages must be responsive (mobile-first design)
- Gold (#c9a227) is the primary accent color
- Silhouette style: flat, angular, geometric shapes

## Working Loop (Manus: Explore → Plan → Code → Verify)
1) Explore: Read NOW.md, STACK.md, review existing code
2) Plan: Spec-first approach, update context.md
3) Code: Minimal diffs in allowed paths
4) Verify: `npm run build` must pass

## Risk & Permissions
- **Low (auto)**: Read files, run build, run dev server
- **Medium (needs spec)**: Edit components, add new pages
- **High (explicit approval)**: Dependencies, architecture changes, deployment

## Allowed Paths
- Code: `app/**`, `components/**`
- Styles: `app/globals.css`, `tailwind.config.ts`
- Docs: `docs/**`, `*.md` at root
- Public: `public/**`

## Performance Guardrails
- Prefer CSS animations over JS where possible
- Lazy load heavy components
- Keep bundle size reasonable (framer-motion is the heaviest dep)
- Reduce particle density on mobile

## Task Stack Management (Hybrid System)

### Current Task Tracking
- **NOW.md** (root) - Points to current active task
- **STACK.md** (root) - Tracks interrupted/paused tasks by level
- **docs/active/** - Current task folder only
- **docs/stack/** - Paused task folders

### Session Continuity
On conversation start:
1. Check NOW.md task and timestamp
2. Check STACK.md for context
3. If stale (>24h), ask: "Continue [task] or working on something else?"

## Spec Template
```markdown
# Spec: [Task Name]

**Objective**: [One sentence]
**Scope**: In/Out
**Files**: [files to modify]
**Proof**: npm run build && npm run dev
**Risk**: Low/Medium/High
```

## Project Structure
```
deathly-hallows-site/
├── app/                    # Next.js pages
├── components/
│   ├── effects/            # DustMotes, ScrollReveal, etc.
│   ├── silhouettes/        # SVG components
│   ├── ui/                 # Button, ParchmentCard, etc.
│   ├── layout/             # Header, Footer
│   ├── home/               # Homepage sections
│   ├── philosophy/         # Philosophy page sections
│   ├── getting-started/    # Getting Started sections
│   └── download/           # Download page sections
├── public/                 # Static assets
└── docs/                   # Hybrid documentation system
```

## Design Tokens
- Background: #1a1612
- Gold: #c9a227
- Text: #e8dcc8
- Silhouette: #0a0908
- Fonts: Cinzel Decorative, Cinzel, Crimson Text, JetBrains Mono
