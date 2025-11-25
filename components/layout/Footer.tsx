"use client";

import Link from "next/link";
import { DeathlyHallows } from "../silhouettes";

export function Footer() {
  return (
    <footer className="relative border-t border-parchment-border bg-parchment-dark/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col items-center gap-6">
          {/* Logo */}
          <DeathlyHallows
            size={48}
            animated={false}
            className="text-gold/50"
          />

          {/* Quote */}
          <p className="font-body italic text-text-secondary text-center max-w-md">
            &ldquo;And so Death took the second brother for his own...&rdquo;
          </p>

          {/* Navigation */}
          <nav className="flex flex-wrap justify-center gap-6">
            <Link
              href="/"
              className="text-xs uppercase tracking-wider text-text-secondary hover:text-gold transition-colors"
            >
              Home
            </Link>
            <Link
              href="/philosophy"
              className="text-xs uppercase tracking-wider text-text-secondary hover:text-gold transition-colors"
            >
              Philosophy
            </Link>
            <Link
              href="/getting-started"
              className="text-xs uppercase tracking-wider text-text-secondary hover:text-gold transition-colors"
            >
              Getting Started
            </Link>
            <Link
              href="/download"
              className="text-xs uppercase tracking-wider text-text-secondary hover:text-gold transition-colors"
            >
              Download
            </Link>
          </nav>

          {/* Credits */}
          <div className="text-center space-y-2 pt-6 border-t border-parchment-border/50 w-full max-w-md">
            <p className="text-xs text-text-secondary">
              Inspired by the{" "}
              <span className="text-gold">Hybrid Documentation System</span>
            </p>
            <p className="text-xs text-text-secondary/70">
              Design inspired by &ldquo;The Tale of the Three Brothers&rdquo;
              animated sequence
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
