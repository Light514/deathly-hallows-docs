import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#1a1612",
        }}
      >
        <svg
          width="28"
          height="28"
          viewBox="0 0 100 100"
          fill="none"
          stroke="#c9a227"
          strokeWidth="4"
        >
          {/* Triangle */}
          <path d="M50 10 L90 85 L10 85 Z" strokeLinecap="round" strokeLinejoin="round" />
          {/* Circle */}
          <circle cx="50" cy="58" r="20" />
          {/* Line */}
          <line x1="50" y1="10" x2="50" y2="85" strokeLinecap="round" />
        </svg>
      </div>
    ),
    { ...size }
  );
}
