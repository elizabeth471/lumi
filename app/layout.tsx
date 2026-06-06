import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Blossom — Lumi OS",
  description: "The founder's AI operating system for Lumi.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
