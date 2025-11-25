"use client";

import { motion } from "framer-motion";
import { Download, FileText, BookOpen, Scroll } from "lucide-react";
import { Header, Footer } from "@/components/layout";
import { ScrollReveal, DustMotes, CandleGlow } from "@/components/effects";
import { ParchmentCard, Button } from "@/components/ui";
import { DeathlyHallows } from "@/components/silhouettes";

const quickReference = [
  {
    icon: <FileText size={24} />,
    title: "NOW.md",
    description: "Current task pointer",
    purpose: "Single source of truth for 'what am I working on right now?'",
  },
  {
    icon: <Scroll size={24} />,
    title: "STACK.md",
    description: "Interrupted tasks tracker",
    purpose: "Preserves full context for interrupted work",
  },
  {
    icon: <BookOpen size={24} />,
    title: "CLAUDE.md",
    description: "AI agent agreement",
    purpose: "Defines AI behavior boundaries and safety rules",
  },
];

const whatInside = [
  "Complete philosophy and rationale",
  "File structure and templates",
  "Core files explained in detail",
  "Step-by-step implementation guide",
  "Workflow documentation",
  "Customization options",
  "Troubleshooting guide",
  "Real-world example",
];

export default function DownloadPage() {
  const handleDownload = () => {
    // Create download link
    const link = document.createElement("a");
    link.href = "/hybrid_documentation_system.md";
    link.download = "hybrid_documentation_system.md";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero - The Tome */}
        <section className="relative py-24 px-4 overflow-hidden">
          <DustMotes count={30} className="opacity-40" />

          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="flex justify-center mb-8"
            >
              {/* Ancient tome illustration */}
              <CandleGlow intensity="strong">
                <svg
                  viewBox="0 0 120 150"
                  className="w-32 h-40 text-gold"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  {/* Book cover */}
                  <rect x="15" y="10" width="90" height="130" rx="3" />
                  <rect
                    x="20"
                    y="15"
                    width="80"
                    height="120"
                    rx="2"
                    className="fill-parchment-light"
                    stroke="none"
                  />

                  {/* Spine */}
                  <line x1="20" y1="10" x2="20" y2="140" strokeWidth="3" />

                  {/* Deathly Hallows on cover */}
                  <g transform="translate(35, 35) scale(0.5)">
                    <path d="M50 10 L90 85 L10 85 Z" />
                    <circle cx="50" cy="58" r="20" />
                    <line x1="50" y1="10" x2="50" y2="85" />
                  </g>

                  {/* Decorative corners */}
                  <path d="M25 20 L35 20 L35 30" strokeWidth="1" />
                  <path d="M95 20 L85 20 L85 30" strokeWidth="1" />
                  <path d="M25 130 L35 130 L35 120" strokeWidth="1" />
                  <path d="M95 130 L85 130 L85 120" strokeWidth="1" />

                  {/* Text lines on cover */}
                  <line x1="40" y1="100" x2="80" y2="100" strokeWidth="1" />
                  <line x1="45" y1="110" x2="75" y2="110" strokeWidth="1" />
                </svg>
              </CandleGlow>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="font-display text-4xl sm:text-5xl text-text-primary mb-6"
            >
              The Complete Guide
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="font-body italic text-lg text-text-secondary max-w-2xl mx-auto mb-8"
            >
              &ldquo;The complete guide awaits... All the wisdom of the Hybrid
              Documentation System, bound in a single tome.&rdquo;
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <Button onClick={handleDownload} variant="primary" size="lg">
                <Download size={20} className="mr-2" />
                Download the Guide
              </Button>
              <p className="mt-4 text-sm text-text-secondary">
                Markdown format &middot; ~15KB &middot; Free to use
              </p>
            </motion.div>
          </div>
        </section>

        {/* What's Inside */}
        <section className="py-24 px-4 bg-silhouette/30">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal className="text-center mb-12">
              <h2 className="font-heading text-3xl text-gold mb-4">
                What&apos;s Inside
              </h2>
              <p className="font-body text-text-secondary">
                Everything you need to implement the system
              </p>
            </ScrollReveal>

            <ScrollReveal>
              <ParchmentCard className="p-8">
                <div className="grid sm:grid-cols-2 gap-4">
                  {whatInside.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <span className="text-gold mt-1">&#x2726;</span>
                      <span className="font-body text-text-secondary">{item}</span>
                    </div>
                  ))}
                </div>
              </ParchmentCard>
            </ScrollReveal>
          </div>
        </section>

        {/* Quick Reference Cards */}
        <section className="py-24 px-4">
          <div className="max-w-5xl mx-auto">
            <ScrollReveal className="text-center mb-12">
              <h2 className="font-heading text-3xl text-gold mb-4">
                Quick Reference
              </h2>
              <p className="font-body text-text-secondary">
                The three core artifacts at a glance
              </p>
            </ScrollReveal>

            <div className="grid md:grid-cols-3 gap-6">
              {quickReference.map((item, idx) => (
                <ScrollReveal key={item.title} delay={idx * 0.15}>
                  <ParchmentCard className="p-6 h-full">
                    <div className="text-gold mb-4">{item.icon}</div>
                    <h3 className="font-heading text-xl text-gold mb-1">
                      {item.title}
                    </h3>
                    <p className="text-sm text-text-secondary mb-4">
                      {item.description}
                    </p>
                    <p className="text-xs text-gold-muted italic">
                      {item.purpose}
                    </p>
                  </ParchmentCard>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* File Structure Preview */}
        <section className="py-24 px-4 bg-silhouette/30">
          <div className="max-w-3xl mx-auto">
            <ScrollReveal className="text-center mb-12">
              <h2 className="font-heading text-3xl text-gold mb-4">
                File Structure
              </h2>
              <p className="font-body text-text-secondary">
                How everything fits together
              </p>
            </ScrollReveal>

            <ScrollReveal>
              <ParchmentCard className="p-6">
                <pre className="font-mono text-sm text-gold-bright overflow-x-auto">
                  {`project_root/
├─ NOW.md                    # Current task pointer
├─ STACK.md                  # Interrupted tasks
├─ CLAUDE.md                 # AI agent agreement
│
├─ docs/
│  ├─ active/YYYY-MM-DD-*/   # Current task only
│  │  ├─ context.md          # Lightweight spec
│  │  ├─ todo.md             # Simple checklist
│  │  └─ working-memory.md   # Session notes
│  │
│  ├─ stack/                 # Paused tasks
│  └─ completed/             # Archived work
│
└─ .gitignore`}
                </pre>
              </ParchmentCard>
            </ScrollReveal>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-24 px-4">
          <div className="max-w-2xl mx-auto text-center">
            <ScrollReveal>
              <DeathlyHallows
                size={80}
                animated={false}
                glowing={true}
                className="text-gold mx-auto mb-8"
              />

              <h2 className="font-heading text-2xl text-gold mb-6">
                Master the Hallows
              </h2>

              <p className="font-body text-text-secondary mb-8">
                Join the developers who have conquered the chaos of AI-assisted
                development. ~30 minutes to implement, a lifetime of benefits.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button onClick={handleDownload} variant="primary" size="lg">
                  <Download size={20} className="mr-2" />
                  Download Now
                </Button>
                <Button href="/getting-started" variant="secondary" size="lg">
                  View Implementation Guide
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
