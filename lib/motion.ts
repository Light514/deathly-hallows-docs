"use client";

import { Variants } from "framer-motion";

// Spring physics presets - Framer Motion's natural strength
export const springs = {
  gentle: { type: "spring", stiffness: 120, damping: 14 } as const,
  snappy: { type: "spring", stiffness: 400, damping: 25 } as const,
  bouncy: { type: "spring", stiffness: 300, damping: 10 } as const,
};

// Tween presets for controlled animations
export const tweens = {
  smooth: { type: "tween", ease: [0.22, 1, 0.36, 1], duration: 0.6 } as const,
  slow: { type: "tween", ease: [0.22, 1, 0.36, 1], duration: 1 } as const,
};

// Reusable animation variants
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: springs.gentle,
  },
};

export const fadeInScale: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: springs.gentle,
  },
};

export const slideUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: springs.gentle,
  },
};

export const slideDown: Variants = {
  hidden: { opacity: 0, y: -40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: springs.gentle,
  },
};

export const slideLeft: Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: springs.gentle,
  },
};

export const slideRight: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: springs.gentle,
  },
};

// Stagger container for orchestrating child animations
export const staggerContainer: Variants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

// SVG path drawing variant
export const drawPath: Variants = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: {
      pathLength: { type: "tween", duration: 1.5, ease: "easeInOut" },
      opacity: { duration: 0.2 },
    },
  },
};

// Hover lift effect
export const hoverLift = {
  y: -8,
  scale: 1.02,
  transition: springs.snappy,
};

// Viewport settings for whileInView
export const defaultViewport = {
  once: true,
  amount: 0.2,
};
