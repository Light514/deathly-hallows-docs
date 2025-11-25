"use client";

import { motion } from "framer-motion";
import { ScrollReveal } from "../effects";

export function TheProblem() {
  return (
    <section className="relative py-24 px-4 bg-silhouette/30">
      <div className="max-w-4xl mx-auto">
        {/* Tale-style narrative */}
        <ScrollReveal className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="font-body italic text-lg sm:text-xl text-text-secondary leading-relaxed"
          >
            <p className="mb-6">
              <span className="text-gold text-4xl font-display not-italic">
                T
              </span>
              here were once many developers who sought to harness the power of
              AI. They coded through day and night, their digital companions
              ever-present...
            </p>
          </motion.div>
        </ScrollReveal>

        {/* The Problem visualization */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Silhouette illustration - Developer losing context */}
          <ScrollReveal direction="left">
            <div className="relative aspect-square max-w-sm mx-auto">
              {/* Background glow */}
              <div className="absolute inset-0 bg-gradient-radial from-gold/10 to-transparent rounded-full" />

              {/* Silhouette scene */}
              <svg
                viewBox="0 0 200 200"
                className="w-full h-full"
                fill="none"
              >
                {/* Developer figure at desk */}
                <g className="fill-silhouette">
                  {/* Head */}
                  <circle cx="100" cy="60" r="20" />
                  {/* Body */}
                  <path d="M70 80 L130 80 L140 140 L60 140 Z" />
                  {/* Desk */}
                  <rect x="40" y="140" width="120" height="8" />
                  {/* Desk legs */}
                  <rect x="50" y="148" width="8" height="30" />
                  <rect x="142" y="148" width="8" height="30" />
                </g>

                {/* Floating away context - animated leaves/papers */}
                <motion.g
                  initial={{ opacity: 0.8 }}
                  animate={{
                    opacity: [0.8, 0.3, 0.8],
                    x: [0, 20, 0],
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <rect
                    x="140"
                    y="70"
                    width="15"
                    height="20"
                    className="fill-gold/30"
                    transform="rotate(15 147 80)"
                  />
                  <rect
                    x="155"
                    y="50"
                    width="12"
                    height="16"
                    className="fill-gold/20"
                    transform="rotate(-10 161 58)"
                  />
                  <rect
                    x="165"
                    y="80"
                    width="10"
                    height="14"
                    className="fill-gold/10"
                    transform="rotate(25 170 87)"
                  />
                </motion.g>

                {/* Second set floating opposite */}
                <motion.g
                  initial={{ opacity: 0.6 }}
                  animate={{
                    opacity: [0.6, 0.2, 0.6],
                    x: [0, -15, 0],
                    y: [0, -15, 0],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1,
                  }}
                >
                  <rect
                    x="35"
                    y="65"
                    width="14"
                    height="18"
                    className="fill-gold/25"
                    transform="rotate(-20 42 74)"
                  />
                  <rect
                    x="20"
                    y="85"
                    width="10"
                    height="14"
                    className="fill-gold/15"
                    transform="rotate(10 25 92)"
                  />
                </motion.g>
              </svg>
            </div>
          </ScrollReveal>

          {/* Problem text */}
          <ScrollReveal direction="right">
            <div className="space-y-6">
              <h3 className="font-heading text-2xl text-gold">
                The Curse of Forgotten Context
              </h3>

              <div className="space-y-4 font-body text-text-secondary">
                <p>
                  But as conversations grew long, something terrible would
                  happen. The AI&apos;s memory would{" "}
                  <span className="text-gold">fade like morning mist</span>.
                </p>
                <p>
                  Tasks left incomplete. Context scattered to the winds.
                  Developers found themselves repeating the same explanations,
                  trapped in an endless cycle.
                </p>
                <p>
                  Many searched for a solution. Few found it. Until...
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="text-center p-4 border border-parchment-border rounded">
                  <div className="font-display text-3xl text-gold">13KB+</div>
                  <div className="text-xs text-text-secondary uppercase tracking-wider">
                    Heavyweight Specs
                  </div>
                </div>
                <div className="text-center p-4 border border-parchment-border rounded">
                  <div className="font-display text-3xl text-gold">60min</div>
                  <div className="text-xs text-text-secondary uppercase tracking-wider">
                    Lost to Documentation
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
