import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Brandshift — Hands-Free Lead Generation Systems",
  description:
    "We build complete acquisition systems that bring attention, build trust, and convert leads into customers automatically.",
  themeColor: "#07090f",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geist.variable} scroll-smooth`}>
      <body className="bg-[#07090f] text-white antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
