"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { DeathlyHallows } from "../silhouettes";
import { DustMotes } from "../effects";
import { Button } from "../ui";

export function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const backgroundSymbolRef = useRef<HTMLDivElement>(null);
  const symbolRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // Master timeline for orchestrated entrance
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      // Symbol entrance with scale and glow
      tl.fromTo(
        symbolRef.current,
        { opacity: 0, scale: 0.5, filter: "blur(10px)" },
        { opacity: 1, scale: 1, filter: "blur(0px)", duration: 1.2 }
      );

      // Title reveal
      tl.fromTo(
        titleRef.current,
        { opacity: 0, y: 60 },
        { opacity: 1, y: 0, duration: 0.8 },
        "-=0.3"
      );

      // Subtitle fade in
      tl.fromTo(
        subtitleRef.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.7 },
        "-=0.4"
      );

      // Buttons stagger in
      if (buttonsRef.current) {
        const buttons = buttonsRef.current.querySelectorAll("a");
        tl.fromTo(
          buttons,
          { opacity: 0, y: 30, scale: 0.95 },
          { opacity: 1, y: 0, scale: 1, duration: 0.6, stagger: 0.15 },
          "-=0.3"
        );
      }

      // Scroll indicator fade in with bounce
      tl.fromTo(
        scrollIndicatorRef.current,
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 0.8 },
        "-=0.2"
      );

      // Continuous scroll indicator bounce
      const scrollMouse = scrollIndicatorRef.current?.querySelector(".scroll-mouse");
      const scrollDot = scrollIndicatorRef.current?.querySelector(".scroll-dot");

      if (scrollMouse) {
        gsap.to(scrollMouse, {
          y: 8,
          duration: 1.2,
          repeat: -1,
          yoyo: true,
          ease: "power1.inOut",
        });
      }

      if (scrollDot) {
        gsap.to(scrollDot, {
          y: 10,
          duration: 1.2,
          repeat: -1,
          yoyo: true,
          ease: "power1.inOut",
        });
      }

      // Parallax effect on background symbol
      if (backgroundSymbolRef.current) {
        gsap.to(backgroundSymbolRef.current, {
          y: 150,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "bottom top",
            scrub: 1,
          },
        });
      }

      // Fade out content on scroll
      gsap.fromTo(
        [titleRef.current, subtitleRef.current, buttonsRef.current],
        { opacity: 1, y: 0 },
        {
          opacity: 0,
          y: -50,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "center center",
            end: "bottom top",
            scrub: 1,
          },
        }
      );
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Effects */}
      <DustMotes count={40} className="opacity-60" />

      {/* Large background symbol with parallax */}
      <div
        ref={backgroundSymbolRef}
        className="absolute inset-0 flex items-center justify-center opacity-5 pt-16"
      >
        <DeathlyHallows size={800} animated={false} />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        {/* Animated Deathly Hallows Symbol */}
        <div ref={symbolRef} className="flex justify-center mb-8 opacity-0">
          <DeathlyHallows
            size={120}
            animated={true}
            glowing={true}
            className="text-gold"
          />
        </div>

        {/* Title */}
        <h1
          ref={titleRef}
          className="font-display text-4xl sm:text-5xl md:text-6xl text-text-primary mb-6 opacity-0"
        >
          <span className="title-main">The Deathly Hallows</span>
          <span className="block text-gold mt-2">Documentation</span>
        </h1>

        {/* Subtitle */}
        <p
          ref={subtitleRef}
          className="font-body text-lg sm:text-xl text-text-secondary max-w-2xl mx-auto mb-8 opacity-0"
        >
          Master the ancient art of AI-assisted development with the Hybrid
          Documentation System. Three artifacts. Infinite power.
        </p>

        {/* CTA Buttons */}
        <div
          ref={buttonsRef}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button href="/getting-started" variant="primary" size="lg">
            Begin Your Journey
          </Button>
          <Button href="/philosophy" variant="secondary" size="lg">
            Learn the Philosophy
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        ref={scrollIndicatorRef}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 opacity-0"
      >
        <div className="scroll-mouse w-6 h-10 border-2 border-gold/30 rounded-full flex justify-center">
          <div className="scroll-dot w-1 h-2 bg-gold rounded-full mt-2" />
        </div>
      </div>
    </section>
  );
}
