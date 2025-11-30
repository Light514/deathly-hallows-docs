"use client";

import { useMemo } from "react";
import { useReducedMotion } from "@/hooks";

interface Mote {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
  floatY: number;
  driftX: number;
}

interface DustMotesProps {
  count?: number;
  className?: string;
}

export function DustMotes({ count = 30, className = "" }: DustMotesProps) {
  const prefersReducedMotion = useReducedMotion();

  // Generate motes data once with all random values pre-computed
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
        floatY: -(30 + Math.random() * 20),
        driftX: (Math.random() > 0.5 ? 1 : -1) * (15 + Math.random() * 10),
      });
    }
    return generatedMotes;
  }, [count]);

  if (prefersReducedMotion) {
    return (
      <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
        {motes.map((mote) => (
          <div
            key={mote.id}
            className="absolute rounded-full bg-gold/20"
            style={{
              left: `${mote.x}%`,
              top: `${mote.y}%`,
              width: mote.size,
              height: mote.size,
            }}
          />
        ))}
      </div>
    );
  }

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {motes.map((mote) => (
        <div
          key={mote.id}
          className="absolute rounded-full bg-gold/30 animate-dust-float"
          style={{
            left: `${mote.x}%`,
            top: `${mote.y}%`,
            width: mote.size,
            height: mote.size,
            animationDuration: `${mote.duration}s`,
            animationDelay: `${mote.delay}s`,
            "--float-y": `${mote.floatY}px`,
            "--drift-x": `${mote.driftX}px`,
          } as React.CSSProperties}
        />
      ))}
    </div>
  );
}
