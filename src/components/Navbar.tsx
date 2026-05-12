"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const links = [
  { label: "Services", href: "#services" },
  { label: "System", href: "#system" },
  { label: "Results", href: "#testimonials" },
  { label: "About", href: "#about" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/95 backdrop-blur-xl border-b border-slate-200 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-8 h-16 flex items-center justify-between">
        {/* Logo — bold text only, no icon */}
        <a href="#" className="shrink-0">
          <span
            className={`font-extrabold text-[22px] tracking-tight uppercase transition-colors duration-300 ${
              scrolled ? "text-slate-900" : "text-white"
            }`}
          >
            BrandShift
          </span>
        </a>

        {/* Nav links — desktop only */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`text-[13px] font-medium transition-colors duration-200 ${
                scrolled
                  ? "text-slate-500 hover:text-slate-900"
                  : "text-white/70 hover:text-white"
              }`}
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* CTA — white pill on dark, blue pill on light */}
        <a
          href="#contact"
          className={`flex items-center gap-2 text-[13px] font-semibold px-5 py-2.5 rounded-full transition-all duration-200 ${
            scrolled
              ? "bg-blue-500 hover:bg-blue-600 text-white"
              : "bg-white hover:bg-white/90 text-slate-900"
          }`}
        >
          Book A Call
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M2.5 6h7M7 3.5L9.5 6 7 8.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
      </div>
    </motion.header>
  );
}
