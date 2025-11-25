"use client";

import { motion } from "framer-motion";
import { ScrollReveal } from "../effects";
import { ParchmentCard } from "../ui";

const hallows = [
  {
    name: "The Elder Wand",
    file: "NOW.md",
    description:
      "The most powerful wand in existence. Like the Elder Wand, NOW.md channels your current focus—pointing you toward victory in the present moment.",
    icon: (
      <svg
        viewBox="0 0 100 200"
        className="w-16 h-32 text-gold"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        {/* Elder Wand - angular, geometric style */}
        <path d="M50 10 L50 190" strokeLinecap="round" />
        <path d="M45 30 L55 30" strokeLinecap="round" />
        <path d="M42 50 L58 50" strokeLinecap="round" />
        <path d="M40 70 L60 70" strokeLinecap="round" />
        <circle cx="50" cy="15" r="5" fill="currentColor" />
      </svg>
    ),
    power: "Current Focus",
    quote: "The wand chooses the wizard...",
  },
  {
    name: "The Resurrection Stone",
    file: "STACK.md",
    description:
      "Brings back those who have passed. STACK.md resurrects your paused work from the depths of forgotten context, bringing interrupted tasks back to life.",
    icon: (
      <svg
        viewBox="0 0 100 100"
        className="w-20 h-20 text-gold"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        {/* Resurrection Stone - geometric diamond shape */}
        <path d="M50 10 L90 50 L50 90 L10 50 Z" />
        <circle cx="50" cy="50" r="15" />
        <path d="M50 35 L50 65" />
        <path d="M35 50 L65 50" />
      </svg>
    ),
    power: "Context Revival",
    quote: "Until the very end...",
  },
  {
    name: "The Cloak of Invisibility",
    file: "CLAUDE.md",
    description:
      "Renders the wearer invisible to Death itself. CLAUDE.md defines invisible boundaries—the AI works within them, unseen yet ever-present, following your rules.",
    icon: (
      <svg
        viewBox="0 0 100 120"
        className="w-20 h-24 text-gold"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        {/* Cloak - flowing, triangular shape */}
        <path d="M50 10 L85 110 L50 95 L15 110 Z" />
        <path d="M35 40 Q50 50 65 40" strokeDasharray="4 4" />
        <path d="M30 60 Q50 75 70 60" strokeDasharray="4 4" />
        <path d="M25 80 Q50 98 75 80" strokeDasharray="4 4" />
      </svg>
    ),
    power: "AI Boundaries",
    quote: "The true master of death...",
  },
];

export function ThreeHallows() {
  return (
    <section className="relative py-24 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <ScrollReveal className="text-center mb-16">
          <h2 className="font-display text-3xl sm:text-4xl text-text-primary mb-4">
            The Three Hallows
          </h2>
          <p className="font-body text-text-secondary max-w-2xl mx-auto">
            Three legendary artifacts. Three essential files. Together, they
            grant mastery over the chaos of AI-assisted development.
          </p>
        </ScrollReveal>

        {/* Hallows Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {hallows.map((hallow, index) => (
            <ScrollReveal key={hallow.name} delay={index * 0.2}>
              <ParchmentCard className="p-8 h-full">
                <motion.div
                  className="flex flex-col items-center text-center h-full"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Icon */}
                  <div className="mb-6">{hallow.icon}</div>

                  {/* Name */}
                  <h3 className="font-heading text-xl text-gold mb-2">
                    {hallow.name}
                  </h3>

                  {/* File badge */}
                  <span className="font-mono text-xs bg-silhouette px-3 py-1 rounded text-gold-bright mb-4">
                    {hallow.file}
                  </span>

                  {/* Power */}
                  <span className="text-xs uppercase tracking-wider text-text-secondary mb-4">
                    {hallow.power}
                  </span>

                  {/* Description */}
                  <p className="font-body text-sm text-text-secondary flex-grow mb-4">
                    {hallow.description}
                  </p>

                  {/* Quote */}
                  <p className="font-body italic text-xs text-gold/60">
                    &ldquo;{hallow.quote}&rdquo;
                  </p>
                </motion.div>
              </ParchmentCard>
            </ScrollReveal>
          ))}
        </div>

        {/* Bottom connector - Deathly Hallows hint */}
        <ScrollReveal delay={0.8} className="mt-16 text-center">
          <p className="font-body text-sm text-text-secondary italic">
            &ldquo;Together, they make one the Master of Documentation...&rdquo;
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
