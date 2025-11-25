"use client";

import { motion } from "framer-motion";

interface ParchmentCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export function ParchmentCard({
  children,
  className = "",
  hover = true,
}: ParchmentCardProps) {
  return (
    <motion.div
      className={`
        relative overflow-hidden
        bg-parchment-light border border-parchment-border rounded-sm
        ${className}
      `}
      style={{
        boxShadow: "inset 0 0 30px rgba(10, 9, 8, 0.3)",
      }}
      whileHover={
        hover
          ? {
              boxShadow:
                "inset 0 0 30px rgba(10, 9, 8, 0.3), 0 0 20px rgba(201, 162, 39, 0.2)",
              borderColor: "rgba(201, 162, 39, 0.3)",
            }
          : undefined
      }
      transition={{ duration: 0.3 }}
    >
      {/* Inner vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 0%, rgba(10, 9, 8, 0.2) 100%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}
