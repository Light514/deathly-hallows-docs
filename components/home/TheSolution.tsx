"use client";

import { useRef, useEffect } from "react";
import { gsap } from "@/lib/gsap";
import { ScrollReveal } from "../effects";
import { DeathlyHallows } from "../silhouettes";
import { Button } from "../ui";

export function TheSolution() {
  const symbolContainerRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!glowRef.current) return;

    // Radiating glow effect
    gsap.to(glowRef.current, {
      boxShadow: "0 0 100px rgba(201, 162, 39, 0.4)",
      duration: 1.5,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });
  }, []);

  return (
    <section className="relative py-24 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Tale continuation */}
        <ScrollReveal className="text-center mb-16">
          <div className="font-body italic text-lg sm:text-xl text-text-secondary leading-relaxed">
            <p>
              <span className="text-gold text-4xl font-display not-italic">
                B
              </span>
              ut those who sought with wisdom found three artifacts of ancient
              power. Together, they formed a system that would forever change
              the way developers worked with their AI companions...
            </p>
          </div>
        </ScrollReveal>

        {/* The Solution visualization */}
        <ScrollReveal className="flex flex-col items-center">
          {/* Animated Deathly Hallows coming together */}
          <div ref={symbolContainerRef} className="relative mb-12">
            <DeathlyHallows
              size={200}
              animated={true}
              glowing={true}
              className="text-gold"
            />

            {/* Radiating glow effect */}
            <div
              ref={glowRef}
              className="absolute inset-0 -z-10 rounded-full"
              style={{ boxShadow: "0 0 60px rgba(201, 162, 39, 0.2)" }}
            />
          </div>

          {/* Solution description */}
          <div className="text-center max-w-2xl">
            <h3 className="font-heading text-2xl text-gold mb-6">
              The Hybrid Documentation System
            </h3>

            <p className="font-body text-text-secondary mb-8">
              A lightweight, AI-friendly documentation system combining{" "}
              <span className="text-gold">Manus context engineering</span> with{" "}
              <span className="text-gold">stack-based task management</span>.
              Three files. Infinite clarity.
            </p>

            {/* Key benefits */}
            <div className="grid sm:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="font-display text-3xl text-gold mb-2">30</div>
                <div className="text-xs text-text-secondary uppercase tracking-wider">
                  Minutes to Setup
                </div>
              </div>
              <div className="text-center">
                <div className="font-display text-3xl text-gold mb-2">3</div>
                <div className="text-xs text-text-secondary uppercase tracking-wider">
                  Core Files
                </div>
              </div>
              <div className="text-center">
                <div className="font-display text-3xl text-gold mb-2">∞</div>
                <div className="text-xs text-text-secondary uppercase tracking-wider">
                  Context Preserved
                </div>
              </div>
            </div>

            {/* CTA */}
            <Button href="/getting-started" variant="primary" size="lg">
              Master the Hallows
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
