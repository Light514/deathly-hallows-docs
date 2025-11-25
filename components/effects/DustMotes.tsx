"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

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
  const [motes, setMotes] = useState<Mote[]>([]);

  useEffect(() => {
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
    setMotes(generatedMotes);
  }, [count]);

  return (
    <div
      className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}
    >
      {motes.map((mote) => (
        <motion.div
          key={mote.id}
          className="absolute rounded-full bg-gold/30"
          style={{
            left: `${mote.x}%`,
            top: `${mote.y}%`,
            width: mote.size,
            height: mote.size,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, 15, -10, 0],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: mote.duration,
            delay: mote.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
