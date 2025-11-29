"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

// Default easing for the mystical theme
export const magicEase = "power2.inOut";
export const elasticReveal = "elastic.out(1, 0.5)";
export const smoothReveal = "power3.out";

// Reusable animation configurations
export const fadeInUp = {
  y: 40,
  opacity: 0,
  duration: 0.8,
  ease: smoothReveal,
};

export const fadeInScale = {
  scale: 0.9,
  opacity: 0,
  duration: 1,
  ease: smoothReveal,
};

export const staggerChildren = {
  stagger: 0.1,
  ease: smoothReveal,
};

// ScrollTrigger defaults for consistent behavior
export const defaultScrollTrigger = {
  start: "top 80%",
  end: "bottom 20%",
  toggleActions: "play none none reverse",
};

// Parallax configuration
export const parallaxConfig = {
  slow: { speed: 0.5 },
  medium: { speed: 0.3 },
  fast: { speed: 0.1 },
};

export { gsap, ScrollTrigger, useGSAP };
