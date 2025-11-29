"use client";

import { useRef, useEffect, useMemo } from "react";
import { gsap } from "@/lib/gsap";

interface Mote {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
}

interface DustMotesProps {
  count?: number;
  className?: string;
}

export function DustMotes({ count = 30, className = "" }: DustMotesProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const motesRef = useRef<(HTMLDivElement | null)[]>([]);

  // Generate motes data once
  const motes = useMemo(() => {
    const generatedMotes: Mote[] = [];
    for (let i = 0; i < count; i++) {
      generatedMotes.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 3 + 1,
        duration: Math.random() * 10 + 8,
        delay: Math.random() * 5,
      });
    }
    return generatedMotes;
  }, [count]);

  useEffect(() => {
    if (!containerRef.current) return;

    const animations: gsap.core.Tween[] = [];

    // Animate each mote
    motesRef.current.forEach((mote, index) => {
      if (!mote) return;

      const moteData = motes[index];

      // Main floating animation
      const floatAnim = gsap.to(mote, {
        y: -30 - Math.random() * 20,
        x: `+=${15 + Math.random() * 10}`,
        duration: moteData.duration,
        delay: moteData.delay,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
      animations.push(floatAnim);

      // Opacity pulsing
      const opacityAnim = gsap.to(mote, {
        opacity: 0.6,
        duration: moteData.duration / 2,
        delay: moteData.delay,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
      animations.push(opacityAnim);

      // Random horizontal drift (wind effect)
      const driftAnim = gsap.to(mote, {
        x: `+=${Math.random() > 0.5 ? "" : "-"}${10 + Math.random() * 15}`,
        duration: moteData.duration * 1.5,
        delay: moteData.delay + Math.random() * 2,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      });
      animations.push(driftAnim);
    });

    // Random wind gusts affecting all particles
    const windGust = () => {
      const gustDirection = Math.random() > 0.5 ? 1 : -1;
      const gustStrength = 20 + Math.random() * 30;

      motesRef.current.forEach((mote) => {
        if (!mote) return;
        gsap.to(mote, {
          x: `+=${gustDirection * gustStrength}`,
          duration: 2 + Math.random(),
          ease: "power2.out",
        });
      });

      // Schedule next gust
      gsap.delayedCall(5 + Math.random() * 10, windGust);
    };

    // Start wind gusts after initial delay
    const gustTimeout = gsap.delayedCall(3, windGust);

    // Cleanup
    return () => {
      animations.forEach((anim) => anim.kill());
      gustTimeout.kill();
    };
  }, [motes]);

  return (
    <div
      ref={containerRef}
      className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}
    >
      {motes.map((mote, index) => (
        <div
          key={mote.id}
          ref={(el) => {
            motesRef.current[index] = el;
          }}
          className="absolute rounded-full bg-gold/30"
          style={{
            left: `${mote.x}%`,
            top: `${mote.y}%`,
            width: mote.size,
            height: mote.size,
            opacity: 0.2,
          }}
        />
      ))}
    </div>
  );
}
