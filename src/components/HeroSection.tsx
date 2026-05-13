"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

function MetaLogo() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <path
        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z"
        fill="currentColor"
        opacity="0.3"
      />
      <path
        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-5h2v2h-2zm0-8h2v6h-2z"
        fill="none"
      />
      {/* Meta wordmark-style icon */}
      <rect x="3" y="9" width="4" height="7" rx="2" fill="#1877F2"/>
      <ellipse cx="10" cy="12.5" rx="3" ry="3.5" fill="#1877F2"/>
      <rect x="14" y="9" width="4" height="4" rx="2" fill="#1877F2"/>
      <rect x="14" y="14" width="4" height="2" rx="1" fill="#1877F2"/>
    </svg>
  );
}

function GoogleLogo() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24">
      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
    </svg>
  );
}


function CursorIcon({ clicking }: { clicking: boolean }) {
  return (
    <svg width="22" height="26" viewBox="0 0 22 26" fill="none" style={{ filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.5))" }}>
      <path d="M1 1l6.5 18.5 3.5-5.5 6 5-2-2.5-4.5-3.5 3-4.5L1 1z" fill="white" stroke="#333" strokeWidth="1.2" strokeLinejoin="round"/>
      {clicking && (
        <circle cx="11" cy="11" r="4" fill="rgba(255,255,255,0.3)" />
      )}
    </svg>
  );
}

function PulsingCTA() {
  const [clicking, setClicking] = useState(false);
  const [phase, setPhase] = useState<"idle"|"moving"|"clicking"|"lifting">("idle");

  useEffect(() => {
    let t: ReturnType<typeof setTimeout>;
    const loop = () => {
      setPhase("moving");
      t = setTimeout(() => {
        setPhase("clicking");
        setClicking(true);
        t = setTimeout(() => {
          setClicking(false);
          setPhase("lifting");
          t = setTimeout(() => {
            setPhase("idle");
            t = setTimeout(loop, 800);
          }, 400);
        }, 350);
      }, 900);
    };
    t = setTimeout(loop, 1200);
    return () => clearTimeout(t);
  }, []);

  const cursorVariants = {
    idle:     { x: 90, y: 30, opacity: 0, scale: 1 },
    moving:   { x: 10, y: 8,  opacity: 1, scale: 1,    transition: { duration: 0.7 } },
    clicking: { x: 10, y: 8,  opacity: 1, scale: 0.85, transition: { duration: 0.15 } },
    lifting:  { x: 30, y: -10, opacity: 0, scale: 1,   transition: { duration: 0.35 } },
  };

  return (
    <div className="relative inline-block">
      {/* Heartbeat button */}
      <a
        href="#contact"
        className="btn-beat inline-flex items-center gap-2.5 font-semibold text-[15px] px-8 py-3.5 rounded-full"
      >
        Book a Call
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
          <path d="M3 7h8M8 4.5L10.5 7 8 9.5" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </a>

      {/* Click ripple */}
      {clicking && (
        <motion.div
          key={Date.now()}
          initial={{ scale: 0.5, opacity: 0.6 }}
          animate={{ scale: 2.2, opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="absolute inset-0 rounded-full border-2 border-blue-400 pointer-events-none"
        />
      )}

      {/* Animated cursor */}
      <motion.div
        className="absolute bottom-0 right-0 pointer-events-none"
        variants={cursorVariants}
        animate={phase}
        initial="idle"
      >
        <CursorIcon clicking={clicking} />
      </motion.div>
    </div>
  );
}

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 pt-40 pb-20 overflow-hidden bg-[#07090f]">
      {/* Background radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 30%, rgba(30,80,200,0.18) 0%, rgba(10,30,80,0.08) 50%, transparent 80%)",
        }}
      />

      {/* Badge */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="mb-4 inline-flex items-center gap-2 border border-white/10 bg-white/5 backdrop-blur-sm rounded-full px-5 py-2 sm:px-4 sm:py-1.5 text-[14px] sm:text-[12px] text-white/70 font-medium"
      >
        <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
        Trusted by 100+ leading brands
      </motion.div>

      {/* Headline */}
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="max-w-4xl text-5xl sm:text-6xl lg:text-[76px] font-extrabold leading-[1.1] tracking-tight"
      >
        <span className="text-white block">We specialize in getting</span>
        <span className="block mt-1">
          <span className="text-white">businesses </span>
          <span className="text-blue-400">leads.</span>
        </span>
      </motion.h1>

      {/* Subtext */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.4 }}
        className="mt-7 max-w-xl text-white text-[17px] leading-relaxed"
      >
        We build complete acquisition systems that bring attention, build trust,
        and convert leads into customers — automatically.
      </motion.p>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.55 }}
        className="mt-9"
      >
        <PulsingCTA />
      </motion.div>

      {/* Platform logos */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.75 }}
        className="mt-14 flex items-center gap-8"
      >
        <div className="flex items-center gap-2.5 text-white">
          <svg width="20" height="20" viewBox="0 0 40 40" fill="none">
            <circle cx="20" cy="20" r="20" fill="#1877F2" opacity="0.9"/>
            <path d="M22.5 20.5h3l.5-3.5h-3.5V15c0-1 .5-2 2-2H26v-3s-1.3-.2-2.5-.2c-2.6 0-4.3 1.6-4.3 4.4v2.8H16v3.5h3.2V29h3.3V20.5z" fill="white"/>
          </svg>
          <span className="text-[13px] font-medium">Meta Ads</span>
        </div>
        <div className="w-px h-4 bg-white/10" />
        <div className="flex items-center gap-2.5 text-white">
          <GoogleLogo />
          <span className="text-[13px] font-medium">Google Ads</span>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/20"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          className="w-[1px] h-8 bg-gradient-to-b from-white/30 to-transparent"
        />
      </motion.div>

    </section>
  );
}
