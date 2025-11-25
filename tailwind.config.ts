import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Tale of Three Brothers inspired palette
        background: "var(--background)",
        foreground: "var(--foreground)",

        // Parchment tones
        parchment: {
          dark: "#1a1612",
          DEFAULT: "#241f1a",
          light: "#2a2420",
          border: "#3d352d",
        },

        // Silhouette black
        silhouette: "#0a0908",

        // Aged gold / illumination
        gold: {
          muted: "#8b7355",
          DEFAULT: "#c9a227",
          bright: "#d4a847",
          glow: "#ffd700",
        },

        // Text colors
        text: {
          primary: "#e8dcc8",
          secondary: "#9a8b7a",
          accent: "#c9a227",
        },

        // Accent browns
        accent: {
          brown: "#8b4513",
          warm: "#4a3f35",
        },
      },

      fontFamily: {
        display: ["var(--font-cinzel-decorative)", "serif"],
        heading: ["var(--font-cinzel)", "serif"],
        body: ["var(--font-crimson)", "serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
      },

      animation: {
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "fade-in-up": "fadeInUp 0.8s ease-out forwards",
        "draw-line": "drawLine 1.5s ease-out forwards",
        "glow-pulse": "glowPulse 2s ease-in-out infinite",
        "dust-float": "dustFloat 8s ease-in-out infinite",
        "candle-flicker": "candleFlicker 3s ease-in-out infinite",
      },

      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        drawLine: {
          "0%": { strokeDashoffset: "1000" },
          "100%": { strokeDashoffset: "0" },
        },
        glowPulse: {
          "0%, 100%": { filter: "drop-shadow(0 0 8px rgba(201, 162, 39, 0.4))" },
          "50%": { filter: "drop-shadow(0 0 20px rgba(201, 162, 39, 0.8))" },
        },
        dustFloat: {
          "0%, 100%": { transform: "translateY(0) translateX(0)", opacity: "0.3" },
          "50%": { transform: "translateY(-20px) translateX(10px)", opacity: "0.6" },
        },
        candleFlicker: {
          "0%, 100%": { opacity: "1", filter: "brightness(1)" },
          "50%": { opacity: "0.85", filter: "brightness(0.9)" },
        },
      },

      backgroundImage: {
        "parchment-grain": "url('/textures/parchment-noise.png')",
        "vignette": "radial-gradient(ellipse at center, transparent 0%, rgba(10, 9, 8, 0.4) 100%)",
      },

      boxShadow: {
        "glow-gold": "0 0 20px rgba(201, 162, 39, 0.3)",
        "glow-gold-strong": "0 0 40px rgba(201, 162, 39, 0.5)",
        "inner-dark": "inset 0 0 60px rgba(10, 9, 8, 0.5)",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
  ],
};

export default config;
