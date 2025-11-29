"use client";

import { useRef, useEffect } from "react";
import { gsap } from "@/lib/gsap";

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
  const svgRef = useRef<SVGSVGElement>(null);
  const triangleRef = useRef<SVGPathElement>(null);
  const circleRef = useRef<SVGPathElement>(null);
  const lineRef = useRef<SVGLineElement>(null);

  const strokeWidth = size * 0.015;

  useEffect(() => {
    if (!animated || !svgRef.current) return;

    const triangle = triangleRef.current;
    const circle = circleRef.current;
    const line = lineRef.current;

    if (!triangle || !circle || !line) return;

    // Get path lengths for stroke animation
    const triangleLength = triangle.getTotalLength();
    const circleLength = circle.getTotalLength();
    const lineLength = Math.sqrt(Math.pow(85 - 10, 2)); // Line from y=10 to y=85

    // Set initial state
    gsap.set([triangle, circle, line], {
      strokeDasharray: (i) => [triangleLength, circleLength, lineLength][i],
      strokeDashoffset: (i) => [triangleLength, circleLength, lineLength][i],
      opacity: 0,
    });

    // Create master timeline
    const tl = gsap.timeline();

    // Triangle draws first
    tl.to(triangle, {
      strokeDashoffset: 0,
      opacity: 1,
      duration: 1.5,
      ease: "power2.inOut",
    });

    // Circle draws second
    tl.to(
      circle,
      {
        strokeDashoffset: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.inOut",
      },
      "-=0.7"
    );

    // Line draws last
    tl.to(
      line,
      {
        strokeDashoffset: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power2.inOut",
      },
      "-=0.5"
    );

    // Add glow pulse if enabled
    if (glowing) {
      tl.to(
        svgRef.current,
        {
          filter:
            "drop-shadow(0 0 15px rgba(201, 162, 39, 0.8)) drop-shadow(0 0 30px rgba(201, 162, 39, 0.5))",
          duration: 0.5,
          ease: "power2.out",
        },
        "-=0.3"
      );

      // Continuous glow pulse
      gsap.to(svgRef.current, {
        filter:
          "drop-shadow(0 0 20px rgba(201, 162, 39, 0.9)) drop-shadow(0 0 40px rgba(201, 162, 39, 0.6))",
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 2.5,
      });
    }

    return () => {
      tl.kill();
    };
  }, [animated, glowing]);

  const staticGlowFilter = glowing
    ? "drop-shadow(0 0 10px rgba(201, 162, 39, 0.6)) drop-shadow(0 0 20px rgba(201, 162, 39, 0.4))"
    : "none";

  return (
    <svg
      ref={svgRef}
      width={size}
      height={size}
      viewBox="0 0 100 100"
      className={className}
      style={{ filter: animated ? "none" : staticGlowFilter }}
    >
      {/* Triangle - The Cloak of Invisibility */}
      <path
        ref={triangleRef}
        d="M50 10 L90 85 L10 85 Z"
        fill="none"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{ opacity: animated ? 0 : 1 }}
      />

      {/* Circle - The Resurrection Stone */}
      <path
        ref={circleRef}
        d="M 30 58 A 20 20 0 0 1 70 58 A 20 20 0 0 1 30 58"
        fill="none"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        style={{ opacity: animated ? 0 : 1 }}
      />

      {/* Vertical Line - The Elder Wand */}
      <line
        ref={lineRef}
        x1="50"
        y1="10"
        x2="50"
        y2="85"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        style={{ opacity: animated ? 0 : 1 }}
      />
    </svg>
  );
}
