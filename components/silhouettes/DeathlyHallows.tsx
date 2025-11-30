"use client";

import { motion, Variants } from "framer-motion";
import { useReducedMotion } from "@/hooks";

interface DeathlyHallowsProps {
  className?: string;
  size?: number;
  animated?: boolean;
  glowing?: boolean;
}

const pathTransition = {
  type: "tween" as const,
  duration: 1.2,
  ease: [0.45, 0, 0.55, 1] as [number, number, number, number],
};

const triangleVariants: Variants = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: {
      ...pathTransition,
      delay: 0,
    },
  },
};

const circleVariants: Variants = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: {
      ...pathTransition,
      duration: 0.9,
      delay: 0.6,
    },
  },
};

const lineVariants: Variants = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: {
      ...pathTransition,
      duration: 0.7,
      delay: 1.0,
    },
  },
};

export function DeathlyHallows({
  className = "",
  size = 200,
  animated = true,
  glowing = false,
}: DeathlyHallowsProps) {
  const prefersReducedMotion = useReducedMotion();
  const strokeWidth = size * 0.015;
  const shouldAnimate = animated && !prefersReducedMotion;

  const staticGlowFilter = glowing
    ? "drop-shadow(0 0 10px rgba(201, 162, 39, 0.6)) drop-shadow(0 0 20px rgba(201, 162, 39, 0.4))"
    : "none";

  const animatedGlowFilter = glowing
    ? "drop-shadow(0 0 15px rgba(201, 162, 39, 0.8)) drop-shadow(0 0 30px rgba(201, 162, 39, 0.5))"
    : "none";

  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      className={`${className} ${glowing ? "animate-glow-pulse" : ""}`}
      style={{ filter: shouldAnimate ? animatedGlowFilter : staticGlowFilter }}
      initial={shouldAnimate ? "hidden" : "visible"}
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
        variants={triangleVariants}
        initial={shouldAnimate ? "hidden" : "visible"}
        animate="visible"
      />

      {/* Circle - The Resurrection Stone */}
      <motion.path
        d="M 30 58 A 20 20 0 0 1 70 58 A 20 20 0 0 1 30 58"
        fill="none"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        variants={circleVariants}
        initial={shouldAnimate ? "hidden" : "visible"}
        animate="visible"
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
        variants={lineVariants}
        initial={shouldAnimate ? "hidden" : "visible"}
        animate="visible"
      />
    </motion.svg>
  );
}
