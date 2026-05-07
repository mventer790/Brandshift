"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const links = [
  { label: "System", href: "#system" },
  { label: "Services", href: "#services" },
  { label: "Results", href: "#testimonials" },
  { label: "About", href: "#about" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

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
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 rounded-lg overflow-hidden shrink-0">
            <Image
              src="/logo.jpg"
              alt="Brandshift logo"
              width={32}
              height={32}
              className="w-full h-full object-cover"
              priority
            />
          </div>
          <span className="font-bold text-[17px] tracking-tight text-slate-900">
            Brand<span className="text-blue-500">shift</span>
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-7">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[13px] text-slate-500 hover:text-slate-900 transition-colors duration-200 font-medium"
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <a
          href="#contact"
          className="hidden md:flex btn-glow items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white text-[13px] font-semibold px-5 py-2.5 rounded-full transition-colors duration-200"
        >
          Book A Call
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M2.5 6h7M7 3.5L9.5 6 7 8.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden w-9 h-9 flex flex-col items-center justify-center gap-[5px]"
          aria-label="Toggle menu"
        >
          <span className={`w-5 h-[1.5px] bg-slate-700 transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-[6.5px]" : ""}`} />
          <span className={`w-5 h-[1.5px] bg-slate-700 transition-all duration-300 ${mobileOpen ? "opacity-0" : ""}`} />
          <span className={`w-5 h-[1.5px] bg-slate-700 transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-[6.5px]" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      <motion.div
        initial={false}
        animate={{ height: mobileOpen ? "auto" : 0, opacity: mobileOpen ? 1 : 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="overflow-hidden md:hidden bg-white/98 border-t border-slate-200"
      >
        <div className="px-6 py-5 flex flex-col gap-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMobileOpen(false)}
              className="text-slate-700 hover:text-slate-900 text-[15px] font-medium transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMobileOpen(false)}
            className="btn-glow mt-1 bg-blue-500 text-white text-[14px] font-semibold px-5 py-3 rounded-full text-center transition-colors"
          >
            Book A Call
          </a>
        </div>
      </motion.div>
    </motion.header>
  );
}
