"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Copy, ChevronDown, ChevronUp } from "lucide-react";
import { Header, Footer } from "@/components/layout";
import { ScrollReveal, DustMotes } from "@/components/effects";
import { ParchmentCard, Button } from "@/components/ui";

const phases = [
  {
    number: 1,
    title: "Forging the Artifacts",
    subtitle: "Create Core Files",
    time: "15 minutes",
    steps: [
      {
        title: "Commit any pending work first",
        code: `git status
git add <files>
git commit -m "..."`,
      },
      {
        title: "Create NOW.md",
        description:
          "Identify your current task, write 1-paragraph summary, list next immediate step",
        code: `# NOW: [Task Name]

**Priority**: P0/P1/P2
**Started**: YYYY-MM-DD
**Branch**: [git branch]

## The Problem
[1-2 sentence problem statement]

## Next Step
[Immediate next action]

## Quick Context
- Working in: [file/directory]
- Expected time: [estimate]
- Active folder: docs/active/YYYY-MM-DD-<slug>/`,
      },
      {
        title: "Create STACK.md",
        description: "Audit your active folders, identify interrupted/paused work",
        code: `# Task Stack (Depth: N)

**Last Updated**: YYYY-MM-DD

---

## Level N [Currently Active]
**Task**: [Current task name]
**Folder**: docs/active/YYYY-MM-DD-<slug>/
**Status**: [Brief status]

### Next Steps
[What to do when resuming]`,
      },
      {
        title: "Create docs/stack/ directory",
        code: "mkdir -p docs/stack",
      },
      {
        title: "Move paused work",
        code: "mv docs/active/old-task-folder docs/stack/",
        description: "Rule: Only ONE active folder at a time",
      },
    ],
  },
  {
    number: 2,
    title: "The Binding Spell",
    subtitle: "Update CLAUDE.md",
    time: "10 minutes",
    steps: [
      {
        title: "Add Task Stack Management section",
        code: `## Task Stack Management (Hybrid System)

### Current Task Tracking
- **NOW.md** (root) - Points to current active task
- **STACK.md** (root) - Tracks interrupted/paused tasks
- **docs/active/** - Current task folder only
- **docs/stack/** - Paused task folders

### Task State Transitions

**Starting New Task**:
Create docs/active/YYYY-MM-DD-<slug>/ with context.md, todo.md

**Task Interrupted**:
1. Update STACK.md with paused task details
2. Move folder to docs/stack/
3. Update NOW.md to new task

**Resuming Task**:
1. Restore from STACK.md
2. Update NOW.md
3. Move folder back to docs/active/

**Task Completed**:
1. Move folder to docs/completed/
2. Pop to next stack level or clear NOW.md`,
      },
    ],
  },
  {
    number: 3,
    title: "The First Enchantment",
    subtitle: "Create Lightweight Specs",
    time: "5 minutes",
    steps: [
      {
        title: "Create context.md (simplified spec)",
        description: "6-8 fields max. Focus on: objective, scope, files, proof",
        code: `# Spec: [Task Name]

**Objective**: [One sentence]

**Scope**:
- In: [What we're changing]
- Out: [What we're NOT changing]

**Files**:
- [file.ts] (function names, line ranges)

**Proof**:
\`\`\`bash
npm run build
npm test
# Expected: All pass
\`\`\`

**Risk**: Low/Medium/High`,
      },
      {
        title: "Create todo.md",
        code: `# TODO: [Task Name]

- [ ] Step 1
- [ ] Step 2
- [ ] Step 3`,
      },
    ],
  },
  {
    number: 4,
    title: "Sealing the Magic",
    subtitle: "Commit and Begin",
    time: "2 minutes",
    steps: [
      {
        title: "Commit the system",
        code: `git add NOW.md STACK.md CLAUDE.md docs/stack/ docs/active/
git commit -m "Implement Hybrid Documentation System

Why: Solve task interruption tracking
How: Add NOW.md/STACK.md for context
Proof: NOW.md points to current work"`,
      },
      {
        title: "Start working!",
        description: "The AI now handles documentation. Just code.",
      },
    ],
  },
];

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={handleCopy}
      className="absolute top-2 right-2 p-2 rounded bg-parchment-dark/50 hover:bg-gold/20 transition-colors"
      title="Copy to clipboard"
    >
      {copied ? (
        <Check size={14} className="text-gold" />
      ) : (
        <Copy size={14} className="text-text-secondary" />
      )}
    </button>
  );
}

function PhaseCard({
  phase,
  isOpen,
  onToggle,
}: {
  phase: (typeof phases)[0];
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <ParchmentCard className="overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full p-6 flex items-center justify-between text-left hover:bg-gold/5 transition-colors"
      >
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full border-2 border-gold flex items-center justify-center font-display text-xl text-gold">
            {phase.number}
          </div>
          <div>
            <h3 className="font-heading text-xl text-gold">{phase.title}</h3>
            <p className="text-sm text-text-secondary">
              {phase.subtitle} &middot; {phase.time}
            </p>
          </div>
        </div>
        {isOpen ? (
          <ChevronUp className="text-gold" />
        ) : (
          <ChevronDown className="text-text-secondary" />
        )}
      </button>

      <motion.div
        initial={false}
        animate={{ height: isOpen ? "auto" : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <div className="px-6 pb-6 space-y-6">
          {phase.steps.map((step, idx) => (
            <div key={idx} className="border-l-2 border-parchment-border pl-4">
              <h4 className="font-heading text-sm text-text-primary mb-2">
                {step.title}
              </h4>
              {step.description && (
                <p className="text-sm text-text-secondary mb-3">
                  {step.description}
                </p>
              )}
              {step.code && (
                <div className="relative">
                  <pre className="bg-silhouette p-4 rounded text-xs text-gold-bright overflow-x-auto font-mono">
                    {step.code}
                  </pre>
                  <CopyButton text={step.code} />
                </div>
              )}
            </div>
          ))}
        </div>
      </motion.div>
    </ParchmentCard>
  );
}

export default function GettingStartedPage() {
  const [openPhase, setOpenPhase] = useState<number | null>(1);

  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero */}
        <section className="relative py-24 px-4 overflow-hidden">
          <DustMotes count={20} className="opacity-30" />

          <div className="max-w-4xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="font-display text-4xl sm:text-5xl text-text-primary mb-6"
            >
              Getting Started
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-body italic text-lg text-text-secondary max-w-2xl mx-auto mb-4"
            >
              &ldquo;Your quest to master the Hallows begins here...&rdquo;
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex justify-center gap-8 text-center"
            >
              <div>
                <div className="font-display text-3xl text-gold">~30</div>
                <div className="text-xs text-text-secondary uppercase tracking-wider">
                  Minutes
                </div>
              </div>
              <div>
                <div className="font-display text-3xl text-gold">4</div>
                <div className="text-xs text-text-secondary uppercase tracking-wider">
                  Phases
                </div>
              </div>
              <div>
                <div className="font-display text-3xl text-gold">3</div>
                <div className="text-xs text-text-secondary uppercase tracking-wider">
                  Core Files
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Phases */}
        <section className="py-16 px-4">
          <div className="max-w-3xl mx-auto space-y-4">
            {phases.map((phase) => (
              <ScrollReveal key={phase.number} delay={phase.number * 0.1}>
                <PhaseCard
                  phase={phase}
                  isOpen={openPhase === phase.number}
                  onToggle={() =>
                    setOpenPhase(openPhase === phase.number ? null : phase.number)
                  }
                />
              </ScrollReveal>
            ))}
          </div>
        </section>

        {/* Quick Start Checklist */}
        <section className="py-24 px-4 bg-silhouette/30">
          <div className="max-w-3xl mx-auto">
            <ScrollReveal className="text-center mb-12">
              <h2 className="font-heading text-3xl text-gold mb-4">
                Quick Start Checklist
              </h2>
              <p className="font-body text-text-secondary">
                Everything you need, at a glance
              </p>
            </ScrollReveal>

            <ScrollReveal>
              <ParchmentCard className="p-8">
                <ul className="space-y-4 font-body">
                  {[
                    "Create NOW.md (current task, 1 paragraph)",
                    "Create STACK.md (audit active folders, document paused work)",
                    "Create docs/stack/ directory",
                    "Move paused tasks from docs/active/ to docs/stack/",
                    "Update CLAUDE.md (add Task Stack Management section)",
                    "Create lightweight context.md for current task",
                    "Create todo.md checklist",
                    "Commit the system",
                    "Start working - AI handles the rest",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="w-6 h-6 rounded border border-gold/50 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-gold text-xs">{idx + 1}</span>
                      </span>
                      <span className="text-text-secondary">{item}</span>
                    </li>
                  ))}
                </ul>
              </ParchmentCard>
            </ScrollReveal>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 px-4">
          <div className="max-w-2xl mx-auto text-center">
            <ScrollReveal>
              <h2 className="font-heading text-2xl text-gold mb-6">
                Ready to Begin?
              </h2>
              <p className="font-body text-text-secondary mb-8">
                Download the complete guide and start implementing the Hybrid
                Documentation System in your project today.
              </p>
              <Button href="/download" variant="primary" size="lg">
                Download the Guide
              </Button>
            </ScrollReveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
