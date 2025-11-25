"use client";

import { motion } from "framer-motion";
import { Header, Footer } from "@/components/layout";
import { ScrollReveal, DustMotes } from "@/components/effects";
import { ParchmentCard } from "@/components/ui";

export default function PhilosophyPage() {
  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-24 px-4 overflow-hidden">
          <DustMotes count={25} className="opacity-40" />

          <div className="max-w-4xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="font-display text-4xl sm:text-5xl text-text-primary mb-6"
            >
              The Philosophy
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-body text-lg text-text-secondary max-w-2xl mx-auto"
            >
              Understanding why the Hybrid Documentation System exists, and the
              ancient wisdoms it draws upon.
            </motion.p>
          </div>
        </section>

        {/* The Challenge */}
        <section className="py-16 px-4 bg-silhouette/30">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal className="text-center mb-12">
              <h2 className="font-heading text-3xl text-gold mb-6">
                The Challenge
              </h2>

              {/* Hourglass visualization */}
              <div className="flex justify-center mb-8">
                <motion.svg
                  viewBox="0 0 100 150"
                  className="w-32 h-48 text-gold"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  {/* Hourglass frame */}
                  <path d="M20 10 L80 10 L80 20 L50 75 L80 130 L80 140 L20 140 L20 130 L50 75 L20 20 Z" />

                  {/* Sand - animated */}
                  <motion.g
                    animate={{ opacity: [1, 0.3, 1] }}
                    transition={{ duration: 4, repeat: Infinity }}
                  >
                    <path
                      d="M30 25 L70 25 L50 60 Z"
                      fill="currentColor"
                      opacity="0.3"
                    />
                    <path
                      d="M35 120 L65 120 L65 135 L35 135 Z"
                      fill="currentColor"
                      opacity="0.5"
                    />
                  </motion.g>

                  {/* Falling sand stream */}
                  <motion.line
                    x1="50"
                    y1="65"
                    x2="50"
                    y2="115"
                    strokeWidth="1"
                    strokeDasharray="4 4"
                    animate={{ strokeDashoffset: [0, -16] }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  />
                </motion.svg>
              </div>

              <p className="font-body italic text-lg text-text-secondary max-w-2xl mx-auto">
                &ldquo;The AI&apos;s memory, like an hourglass, runs dry. Context
                fades with each new conversation, leaving developers to rebuild
                understanding from nothing...&rdquo;
              </p>
            </ScrollReveal>

            {/* Problem cards */}
            <div className="grid md:grid-cols-2 gap-6 mt-12">
              <ScrollReveal delay={0.2}>
                <ParchmentCard className="p-6 h-full">
                  <h3 className="font-heading text-xl text-gold mb-3">
                    Context Window Limits
                  </h3>
                  <p className="font-body text-sm text-text-secondary">
                    AI assistants have finite context windows. Long conversations
                    lose early context, forcing repetitive explanations and lost
                    progress.
                  </p>
                </ParchmentCard>
              </ScrollReveal>

              <ScrollReveal delay={0.3}>
                <ParchmentCard className="p-6 h-full">
                  <h3 className="font-heading text-xl text-gold mb-3">
                    Session Boundaries
                  </h3>
                  <p className="font-body text-sm text-text-secondary">
                    Each new conversation starts from zero. Previous decisions,
                    findings, and progress vanish into the void between sessions.
                  </p>
                </ParchmentCard>
              </ScrollReveal>

              <ScrollReveal delay={0.4}>
                <ParchmentCard className="p-6 h-full">
                  <h3 className="font-heading text-xl text-gold mb-3">
                    Task Interruptions
                  </h3>
                  <p className="font-body text-sm text-text-secondary">
                    Real work involves interruptions. Without explicit tracking,
                    paused tasks become forgotten tasks, buried under new
                    priorities.
                  </p>
                </ParchmentCard>
              </ScrollReveal>

              <ScrollReveal delay={0.5}>
                <ParchmentCard className="p-6 h-full">
                  <h3 className="font-heading text-xl text-gold mb-3">
                    Unsafe Changes
                  </h3>
                  <p className="font-body text-sm text-text-secondary">
                    Without clear boundaries, AI agents may make changes that
                    break existing functionality or violate project conventions.
                  </p>
                </ParchmentCard>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Two Ancient Wisdoms */}
        <section className="py-24 px-4">
          <div className="max-w-5xl mx-auto">
            <ScrollReveal className="text-center mb-16">
              <h2 className="font-heading text-3xl text-gold mb-4">
                Two Ancient Wisdoms
              </h2>
              <p className="font-body text-text-secondary">
                The Hybrid System draws from two powerful methodologies
              </p>
            </ScrollReveal>

            <div className="grid md:grid-cols-2 gap-12">
              {/* Manus */}
              <ScrollReveal direction="left">
                <ParchmentCard className="p-8">
                  <div className="flex justify-center mb-6">
                    <svg
                      viewBox="0 0 100 100"
                      className="w-20 h-20 text-gold"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      {/* Shield */}
                      <path d="M50 10 L85 25 L85 55 C85 75 50 90 50 90 C50 90 15 75 15 55 L15 25 Z" />
                      {/* Scales inside */}
                      <line x1="50" y1="35" x2="50" y2="70" />
                      <line x1="35" y1="50" x2="65" y2="50" />
                      <path d="M30 45 L40 55 L30 55 Z" fill="currentColor" />
                      <path d="M70 45 L60 55 L70 55 Z" fill="currentColor" />
                    </svg>
                  </div>

                  <h3 className="font-heading text-2xl text-gold text-center mb-4">
                    Manus Context Engineering
                  </h3>

                  <p className="font-body text-sm text-text-secondary mb-6 text-center">
                    Safety and control through structure
                  </p>

                  <ul className="space-y-3 font-body text-sm text-text-secondary">
                    <li className="flex items-start gap-2">
                      <span className="text-gold">&#x2726;</span>
                      <span>Spec-first planning with approval gates</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-gold">&#x2726;</span>
                      <span>Allowed paths for safe modifications</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-gold">&#x2726;</span>
                      <span>Objective verification (build + test)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-gold">&#x2726;</span>
                      <span>Performance guardrails for hot paths</span>
                    </li>
                  </ul>
                </ParchmentCard>
              </ScrollReveal>

              {/* Stack System */}
              <ScrollReveal direction="right">
                <ParchmentCard className="p-8">
                  <div className="flex justify-center mb-6">
                    <svg
                      viewBox="0 0 100 100"
                      className="w-20 h-20 text-gold"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      {/* Stack of scrolls */}
                      <rect x="25" y="70" width="50" height="12" rx="2" />
                      <rect x="25" y="55" width="50" height="12" rx="2" />
                      <rect x="25" y="40" width="50" height="12" rx="2" />
                      {/* Top scroll - unrolled */}
                      <path d="M25 25 L75 25 L75 35 L25 35 Z" />
                      <circle cx="25" cy="30" r="5" />
                      <circle cx="75" cy="30" r="5" />
                      {/* Text lines on top scroll */}
                      <line x1="30" y1="28" x2="45" y2="28" strokeWidth="1" />
                      <line x1="30" y1="32" x2="55" y2="32" strokeWidth="1" />
                    </svg>
                  </div>

                  <h3 className="font-heading text-2xl text-gold text-center mb-4">
                    Stack-Based Task Management
                  </h3>

                  <p className="font-body text-sm text-text-secondary mb-6 text-center">
                    Memory and continuity through simplicity
                  </p>

                  <ul className="space-y-3 font-body text-sm text-text-secondary">
                    <li className="flex items-start gap-2">
                      <span className="text-gold">&#x2726;</span>
                      <span>Single current focus (NOW.md)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-gold">&#x2726;</span>
                      <span>Explicit interruption tracking (STACK.md)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-gold">&#x2726;</span>
                      <span>Lightweight context preservation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-gold">&#x2726;</span>
                      <span>Natural session continuity</span>
                    </li>
                  </ul>
                </ParchmentCard>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* The Hybrid Approach */}
        <section className="py-24 px-4 bg-silhouette/30">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal className="text-center mb-12">
              <h2 className="font-heading text-3xl text-gold mb-6">
                The Hybrid Approach
              </h2>

              <p className="font-body text-lg text-text-secondary mb-8">
                By combining these ancient wisdoms, we achieve the impossible:
              </p>

              {/* Merging streams visualization */}
              <div className="flex justify-center mb-12">
                <svg
                  viewBox="0 0 200 100"
                  className="w-64 h-32 text-gold"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  {/* Left stream - Manus */}
                  <path d="M20 20 Q60 20 80 50" />
                  <text x="10" y="15" className="text-[8px] fill-current">
                    Safety
                  </text>

                  {/* Right stream - Stack */}
                  <path d="M180 20 Q140 20 120 50" />
                  <text x="155" y="15" className="text-[8px] fill-current">
                    Memory
                  </text>

                  {/* Merged stream */}
                  <path d="M80 50 Q100 50 100 70 L100 90" strokeWidth="3" />
                  <path d="M120 50 Q100 50 100 70" strokeWidth="3" />

                  {/* Result */}
                  <text
                    x="100"
                    y="98"
                    textAnchor="middle"
                    className="text-[10px] fill-current font-bold"
                  >
                    Hybrid System
                  </text>
                </svg>
              </div>

              <div className="grid sm:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl text-gold mb-2">&#x2714;</div>
                  <div className="font-heading text-sm">Manus Safety</div>
                  <div className="text-xs text-text-secondary">
                    Spec approval & verification
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl text-gold mb-2">&#x2714;</div>
                  <div className="font-heading text-sm">Stack Tracking</div>
                  <div className="text-xs text-text-secondary">
                    Context preservation
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl text-gold mb-2">&#x2714;</div>
                  <div className="font-heading text-sm">Lightweight Docs</div>
                  <div className="text-xs text-text-secondary">
                    Fast iteration
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Core Principle */}
        <section className="py-24 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <ScrollReveal>
              <blockquote className="font-display text-2xl sm:text-3xl text-gold leading-relaxed mb-8">
                &ldquo;Trust but verify the AI within strict boundaries, while
                maintaining clear task focus across interruptions.&rdquo;
              </blockquote>

              <p className="font-body text-sm text-text-secondary uppercase tracking-wider">
                &#x2014; The Core Principle
              </p>
            </ScrollReveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
