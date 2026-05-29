import type { Metadata } from "next";
import { Inter, Inter_Tight } from "next/font/google";

import "./globals.css";

import { AppProvider } from "@/providers/app-provider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const interTight = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-inter-tight",
});

export const metadata: Metadata = {
  title: "GhostCoach AI",
  description: "AI-powered basketball coaching and stance analysis platform.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${interTight.variable}`}
    >
      <body>
        <AppProvider>
          {children}
        </AppProvider>
      </body>
    </html>
  );
}