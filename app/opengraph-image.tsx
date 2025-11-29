import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "The Deathly Hallows Documentation";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(180deg, #1a1612 0%, #0a0908 100%)",
          fontFamily: "serif",
        }}
      >
        {/* Deathly Hallows Symbol */}
        <svg
          width="200"
          height="200"
          viewBox="0 0 100 100"
          fill="none"
          stroke="#c9a227"
          strokeWidth="2"
          style={{
            filter: "drop-shadow(0 0 20px rgba(201, 162, 39, 0.5))",
            marginBottom: "40px",
          }}
        >
          {/* Triangle */}
          <path d="M50 10 L90 85 L10 85 Z" strokeLinecap="round" strokeLinejoin="round" />
          {/* Circle */}
          <path d="M 30 58 A 20 20 0 0 1 70 58 A 20 20 0 0 1 30 58" />
          {/* Line */}
          <line x1="50" y1="10" x2="50" y2="85" strokeLinecap="round" />
        </svg>

        {/* Title */}
        <div
          style={{
            fontSize: "64px",
            fontWeight: "bold",
            color: "#e8dcc8",
            marginBottom: "16px",
            textAlign: "center",
          }}
        >
          The Deathly Hallows
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontSize: "36px",
            color: "#c9a227",
            textAlign: "center",
          }}
        >
          Documentation
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: "20px",
            color: "#a09080",
            marginTop: "32px",
            textAlign: "center",
          }}
        >
          Master the Hybrid Documentation System
        </div>
      </div>
    ),
    { ...size }
  );
}
