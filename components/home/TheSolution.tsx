"use client";

import { motion } from "framer-motion";
import { ScrollReveal } from "../effects";
import { DeathlyHallows } from "../silhouettes";
import { Button } from "../ui";

export function TheSolution() {
  return (
    <section className="relative py-24 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Tale continuation */}
        <ScrollReveal className="text-center mb-16">
          <motion.div className="font-body italic text-lg sm:text-xl text-text-secondary leading-relaxed">
            <p>
              <span className="text-gold text-4xl font-display not-italic">
                B
              </span>
              ut those who sought with wisdom found three artifacts of ancient
              power. Together, they formed a system that would forever change
              the way developers worked with their AI companions...
            </p>
          </motion.div>
        </ScrollReveal>

        {/* The Solution visualization */}
        <ScrollReveal className="flex flex-col items-center">
          {/* Animated Deathly Hallows coming together */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative mb-12"
          >
            <DeathlyHallows
              size={200}
              animated={true}
              glowing={true}
              className="text-gold"
            />

            {/* Radiating glow effect */}
            <motion.div
              className="absolute inset-0 -z-10"
              animate={{
                boxShadow: [
                  "0 0 60px rgba(201, 162, 39, 0.2)",
                  "0 0 100px rgba(201, 162, 39, 0.4)",
                  "0 0 60px rgba(201, 162, 39, 0.2)",
                ],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              style={{ borderRadius: "50%" }}
            />
          </motion.div>

          {/* Solution description */}
          <div className="text-center max-w-2xl">
            <h3 className="font-heading text-2xl text-gold mb-6">
              The Hybrid Documentation System
            </h3>

            <p className="font-body text-text-secondary mb-8">
              A lightweight, AI-friendly documentation system combining{" "}
              <span className="text-gold">Manus context engineering</span> with{" "}
              <span className="text-gold">stack-based task management</span>.
              Three files. Infinite clarity.
            </p>

            {/* Key benefits */}
            <div className="grid sm:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="font-display text-3xl text-gold mb-2">30</div>
                <div className="text-xs text-text-secondary uppercase tracking-wider">
                  Minutes to Setup
                </div>
              </div>
              <div className="text-center">
                <div className="font-display text-3xl text-gold mb-2">3</div>
                <div className="text-xs text-text-secondary uppercase tracking-wider">
                  Core Files
                </div>
              </div>
              <div className="text-center">
                <div className="font-display text-3xl text-gold mb-2">∞</div>
                <div className="text-xs text-text-secondary uppercase tracking-wider">
                  Context Preserved
                </div>
              </div>
            </div>

            {/* CTA */}
            <Button href="/getting-started" variant="primary" size="lg">
              Master the Hallows
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
