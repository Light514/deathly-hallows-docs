"use client";

import { useRef, ReactNode } from "react";
import { gsap, useGSAP } from "@/lib/gsap";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  duration?: number;
  scrub?: boolean;
  stagger?: number;
}

export function ScrollReveal({
  children,
  className = "",
  delay = 0,
  direction = "up",
  duration = 0.8,
  scrub = false,
  stagger = 0,
}: ScrollRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const directions = {
    up: { y: 60, x: 0 },
    down: { y: -60, x: 0 },
    left: { y: 0, x: 60 },
    right: { y: 0, x: -60 },
    none: { y: 0, x: 0 },
  };

  useGSAP(
    () => {
      if (!containerRef.current) return;

      const element = containerRef.current;
      const children = stagger > 0 ? element.children : element;

      gsap.fromTo(
        children,
        {
          opacity: 0,
          y: directions[direction].y,
          x: directions[direction].x,
        },
        {
          opacity: 1,
          y: 0,
          x: 0,
          duration: scrub ? 1 : duration,
          delay: scrub ? 0 : delay,
          stagger: stagger,
          ease: "power3.out",
          scrollTrigger: {
            trigger: element,
            start: "top 85%",
            end: scrub ? "top 20%" : undefined,
            scrub: scrub ? 1 : false,
            toggleActions: scrub ? undefined : "play none none none",
          },
        }
      );
    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef} className={className} style={{ opacity: 0 }}>
      {children}
    </div>
  );
}
