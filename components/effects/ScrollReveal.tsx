"use client";

import { ReactNode } from "react";
import { motion, Variants } from "framer-motion";
import { useReducedMotion } from "@/hooks";
import { springs, defaultViewport } from "@/lib/motion";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
}

const directionOffsets = {
  up: { y: 40, x: 0 },
  down: { y: -40, x: 0 },
  left: { x: 40, y: 0 },
  right: { x: -40, y: 0 },
  none: { y: 0, x: 0 },
};

export function ScrollReveal({
  children,
  className = "",
  delay = 0,
  direction = "up",
}: ScrollRevealProps) {
  const prefersReducedMotion = useReducedMotion();
  const offset = directionOffsets[direction];

  const variants: Variants = {
    hidden: {
      opacity: 0,
      y: offset.y,
      x: offset.x,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        ...springs.gentle,
        delay: prefersReducedMotion ? 0 : delay,
      },
    },
  };

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={defaultViewport}
      variants={variants}
    >
      {children}
    </motion.div>
  );
}
