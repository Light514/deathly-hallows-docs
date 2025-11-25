"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
}

export function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  onClick,
  className = "",
  disabled = false,
}: ButtonProps) {
  const baseStyles = `
    inline-flex items-center justify-center
    font-heading uppercase tracking-wider
    transition-all duration-300
    disabled:opacity-50 disabled:cursor-not-allowed
  `;

  const variants = {
    primary: `
      bg-gold text-silhouette
      hover:bg-gold-bright hover:shadow-glow-gold
      active:scale-95
    `,
    secondary: `
      border border-gold text-gold
      hover:bg-gold/10 hover:shadow-glow-gold
      active:scale-95
    `,
    ghost: `
      text-gold hover:text-gold-bright
      hover:bg-gold/5
    `,
  };

  const sizes = {
    sm: "px-4 py-2 text-xs",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base",
  };

  const combinedClassName = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  const MotionComponent = href ? motion(Link) : motion.button;

  return (
    <MotionComponent
      href={href || ""}
      onClick={onClick}
      disabled={disabled}
      className={combinedClassName}
      whileHover={{ scale: disabled ? 1 : 1.02 }}
      whileTap={{ scale: disabled ? 1 : 0.98 }}
    >
      {children}
    </MotionComponent>
  );
}
