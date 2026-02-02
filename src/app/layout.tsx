import type { Metadata } from "next";
import "./globals.css";
import ErrorBoundary from "@/components/ErrorBoundary";

export const metadata: Metadata = {
  title: {
    default: "Human-First AI | Brand Intelligence Platform",
    template: "%s | Human-First AI",
  },
  description:
    "Human-in-the-loop brand intelligence platform. Monitor social sentiment, manage PR crises, and protect your brand reputation with AI-powered insights.",
  keywords: [
    "brand intelligence",
    "social sentiment",
    "PR crisis management",
    "AI analytics",
    "brand monitoring",
  ],
  authors: [{ name: "Human-First AI" }],
  creator: "Human-First AI",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: process.env.NEXT_PUBLIC_APP_URL || "https://yourdomain.com",
    title: "Human-First AI | Brand Intelligence Platform",
    description:
      "Monitor social sentiment, manage PR crises, and protect your brand reputation with AI-powered insights.",
    siteName: "Human-First AI",
  },
  twitter: {
    card: "summary_large_image",
    title: "Human-First AI | Brand Intelligence Platform",
    description:
      "Monitor social sentiment, manage PR crises, and protect your brand reputation with AI-powered insights.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://api.fontshare.com/v2/css?f[]=general-sans@300,400,500,600,700&display=swap"
          rel="stylesheet"
        />
      </head>

      <body className="antialiased bg-[#FAFBFC] text-[#171717]">
        <ErrorBoundary>{children}</ErrorBoundary>
      </body>
    </html>
  );
}
