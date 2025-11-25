import type { Metadata } from "next";
import { Cinzel_Decorative, Cinzel, Crimson_Text, JetBrains_Mono } from "next/font/google";
import "./globals.css";

// Tale of Three Brothers inspired typography
const cinzelDecorative = Cinzel_Decorative({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  variable: "--font-cinzel-decorative",
  display: "swap",
});

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cinzel",
  display: "swap",
});

const crimsonText = Crimson_Text({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-crimson",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: "The Deathly Hallows Documentation | Hybrid Documentation System",
  description:
    "Master the ancient art of AI-assisted development with the Hybrid Documentation System. A magical approach combining context engineering with task management.",
  keywords: [
    "documentation",
    "AI development",
    "Claude Code",
    "context engineering",
    "task management",
    "Manus",
  ],
  authors: [{ name: "The Keeper of the Hallows" }],
  openGraph: {
    title: "The Deathly Hallows Documentation",
    description:
      "Master the ancient art of AI-assisted development with the Hybrid Documentation System.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Deathly Hallows Documentation",
    description:
      "Master the ancient art of AI-assisted development with the Hybrid Documentation System.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`
          ${cinzelDecorative.variable}
          ${cinzel.variable}
          ${crimsonText.variable}
          ${jetbrainsMono.variable}
          antialiased
          bg-parchment-dark
          text-text-primary
          min-h-screen
        `}
      >
        {/* Global parchment texture overlay */}
        <div className="parchment-texture fixed inset-0 z-0" />

        {/* Vignette effect */}
        <div className="vignette" />

        {/* Main content */}
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}
