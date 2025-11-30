"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, Variants } from "framer-motion";
import { DeathlyHallows } from "../silhouettes";
import { DustMotes } from "../effects";
import { Button } from "../ui";
import { useReducedMotion } from "@/hooks";
import { springs } from "@/lib/motion";

// Orchestrated entrance animation variants
const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const symbolVariants: Variants = {
  hidden: { opacity: 0, scale: 0.5, filter: "blur(10px)" },
  visible: {
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 1,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const titleVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: springs.gentle,
  },
};

const subtitleVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: springs.gentle,
  },
};

const buttonContainerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const buttonVariants: Variants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: springs.gentle,
  },
};

const scrollIndicatorVariants: Variants = {
  hidden: { opacity: 0, y: -10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 1.5,
      ...springs.gentle,
    },
  },
};

export function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const prefersReducedMotion = useReducedMotion();

  // Scroll-based animations
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Background parallax (moves down as you scroll)
  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, 150]);

  // Content fade-out on scroll (starts at 30% scroll, fully faded at 70%)
  const contentOpacity = useTransform(scrollYProgress, [0.3, 0.7], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0.3, 0.7], [0, -50]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Effects */}
      <DustMotes count={40} className="opacity-60" />

      {/* Large background symbol with parallax */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center opacity-5 pt-16"
        style={{ y: prefersReducedMotion ? 0 : backgroundY }}
      >
        <DeathlyHallows size={800} animated={false} />
      </motion.div>

      {/* Content with fade-out on scroll */}
      <motion.div
        className="relative z-10 max-w-4xl mx-auto px-4 text-center"
        style={{
          opacity: prefersReducedMotion ? 1 : contentOpacity,
          y: prefersReducedMotion ? 0 : contentY,
        }}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Animated Deathly Hallows Symbol */}
        <motion.div
          className="flex justify-center mb-8"
          variants={symbolVariants}
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
          className="font-display text-4xl sm:text-5xl md:text-6xl text-text-primary mb-6"
          variants={titleVariants}
        >
          <span className="title-main">The Deathly Hallows</span>
          <span className="block text-gold mt-2">Documentation</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="font-body text-lg sm:text-xl text-text-secondary max-w-2xl mx-auto mb-8"
          variants={subtitleVariants}
        >
          Master the ancient art of AI-assisted development with the Hybrid
          Documentation System. Three artifacts. Infinite power.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          variants={buttonContainerVariants}
        >
          <motion.div variants={buttonVariants}>
            <Button href="/getting-started" variant="primary" size="lg">
              Begin Your Journey
            </Button>
          </motion.div>
          <motion.div variants={buttonVariants}>
            <Button href="/philosophy" variant="secondary" size="lg">
              Learn the Philosophy
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2"
        variants={scrollIndicatorVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          className="w-6 h-10 border-2 border-gold/30 rounded-full flex justify-center"
          animate={prefersReducedMotion ? {} : { y: [0, 6, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <motion.div
            className="w-1 h-2 bg-gold rounded-full mt-2"
            animate={prefersReducedMotion ? {} : { y: [0, 8, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
