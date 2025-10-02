import type React from "react";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Tuan Le Van | Backend Developer",
  description:
    "Final-year IT student specializing in backend development with Java, Spring Boot, cloud deployment, and AI integration. Portfolio showcasing projects and experience.",
  keywords: [
    "Backend Developer",
    "Java",
    "Spring Boot",
    "Cloud",
    "AWS",
    "Docker",
    "CI/CD",
    "Tuan Le Van",
  ],
  authors: [{ name: "Tuan Le Van" }],
  openGraph: {
    title: "Tuan Le Van | Backend Developer",
    description:
      "Final-year IT student specializing in backend development with Java, Spring Boot, cloud deployment, and AI integration.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tuan Le Van | Backend Developer",
    description:
      "Backend Developer specializing in Java, Spring Boot, and Cloud technologies",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}
      >
        <Suspense fallback={null}>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            {children}
          </ThemeProvider>
        </Suspense>
        <Analytics />
      </body>
    </html>
  );
}
