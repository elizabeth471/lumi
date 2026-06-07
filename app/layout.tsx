import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Blossom — LightTroupeKids OS",
  description: "The founder's AI operating system for LightTroupeKids.",
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
