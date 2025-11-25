"use client";

import { motion } from "framer-motion";

interface CandleGlowProps {
  children: React.ReactNode;
  className?: string;
  intensity?: "subtle" | "medium" | "strong";
}

export function CandleGlow({
  children,
  className = "",
  intensity = "medium",
}: CandleGlowProps) {
  const glowIntensity = {
    subtle: {
      boxShadow: [
        "0 0 10px rgba(201, 162, 39, 0.2)",
        "0 0 20px rgba(201, 162, 39, 0.3)",
        "0 0 10px rgba(201, 162, 39, 0.2)",
      ],
    },
    medium: {
      boxShadow: [
        "0 0 20px rgba(201, 162, 39, 0.3)",
        "0 0 40px rgba(201, 162, 39, 0.5)",
        "0 0 20px rgba(201, 162, 39, 0.3)",
      ],
    },
    strong: {
      boxShadow: [
        "0 0 30px rgba(201, 162, 39, 0.4)",
        "0 0 60px rgba(201, 162, 39, 0.6)",
        "0 0 30px rgba(201, 162, 39, 0.4)",
      ],
    },
  };

  return (
    <motion.div
      className={className}
      animate={glowIntensity[intensity]}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      {children}
    </motion.div>
  );
}
