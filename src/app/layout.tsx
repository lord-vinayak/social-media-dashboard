import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Human-First AI",
  description: "Human-in-the-loop brand intelligence platform",
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
        {children}
      </body>
    </html>
  );
}
