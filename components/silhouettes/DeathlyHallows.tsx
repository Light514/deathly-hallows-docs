"use client";

import { motion, Variants } from "framer-motion";

interface DeathlyHallowsProps {
  className?: string;
  size?: number;
  animated?: boolean;
  glowing?: boolean;
}

export function DeathlyHallows({
  className = "",
  size = 200,
  animated = true,
  glowing = false,
}: DeathlyHallowsProps) {
  const strokeWidth = size * 0.015;

  // Animation variants
  const triangleVariants: Variants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { duration: 1.5, ease: [0.4, 0, 0.2, 1] },
        opacity: { duration: 0.3 },
      },
    },
  };

  const circleVariants: Variants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { duration: 1, ease: [0.4, 0, 0.2, 1], delay: 0.8 },
        opacity: { duration: 0.3, delay: 0.8 },
      },
    },
  };

  const lineVariants: Variants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { duration: 0.8, ease: [0.4, 0, 0.2, 1], delay: 1.5 },
        opacity: { duration: 0.3, delay: 1.5 },
      },
    },
  };

  const glowFilter = glowing
    ? "drop-shadow(0 0 10px rgba(201, 162, 39, 0.6)) drop-shadow(0 0 20px rgba(201, 162, 39, 0.4))"
    : "none";

  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      className={className}
      style={{ filter: glowFilter }}
      initial={animated ? "hidden" : "visible"}
      animate="visible"
    >
      {/* Triangle - The Cloak of Invisibility */}
      <motion.path
        d="M50 10 L90 85 L10 85 Z"
        fill="none"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        variants={animated ? triangleVariants : undefined}
      />

      {/* Circle - The Resurrection Stone */}
      <motion.path
        d="M 30 58 A 20 20 0 0 1 70 58 A 20 20 0 0 1 30 58"
        fill="none"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        variants={animated ? circleVariants : undefined}
      />

      {/* Vertical Line - The Elder Wand */}
      <motion.line
        x1="50"
        y1="10"
        x2="50"
        y2="85"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        variants={animated ? lineVariants : undefined}
      />
    </motion.svg>
  );
}
