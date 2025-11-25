"use client";

import { motion } from "framer-motion";
import { DeathlyHallows } from "../silhouettes";
import { DustMotes } from "../effects";
import { Button } from "../ui";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Effects */}
      <DustMotes count={40} className="opacity-60" />

      {/* Large background symbol */}
      <div className="absolute inset-0 flex items-center justify-center opacity-5 pt-16">
        <DeathlyHallows size={800} animated={false} />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        {/* Animated Deathly Hallows Symbol */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="flex justify-center mb-8"
        >
          <DeathlyHallows
            size={120}
            animated={true}
            glowing={true}
            className="text-gold"
          />
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2 }}
          className="font-display text-4xl sm:text-5xl md:text-6xl text-text-primary mb-6"
        >
          The Deathly Hallows
          <span className="block text-gold mt-2">Documentation</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.3 }}
          className="font-body text-lg sm:text-xl text-text-secondary max-w-2xl mx-auto mb-8"
        >
          Master the ancient art of AI-assisted development with the Hybrid
          Documentation System. Three artifacts. Infinite power.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button href="/getting-started" variant="primary" size="lg">
            Begin Your Journey
          </Button>
          <Button href="/philosophy" variant="secondary" size="lg">
            Learn the Philosophy
          </Button>
        </motion.div>

      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.5, duration: 1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 border-2 border-gold/30 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-1 h-2 bg-gold rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
