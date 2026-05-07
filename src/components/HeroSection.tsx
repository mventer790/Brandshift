"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const flowSteps = [
  {
    label: "Ads",
    sub: "Meta & Google",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 11l19-9-9 19-2-8-8-2z"/>
      </svg>
    ),
  },
  {
    label: "Website",
    sub: "High-Converting",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2"/>
        <path d="M3 9h18M9 21V9"/>
      </svg>
    ),
  },
  {
    label: "AI System",
    sub: "Smart Follow-Up",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="10" rx="2"/>
        <path d="M7 11V7a5 5 0 0110 0v4"/>
        <circle cx="12" cy="16" r="1" fill="currentColor"/>
      </svg>
    ),
  },
  {
    label: "Customer",
    sub: "Revenue Growth",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/>
      </svg>
    ),
  },
];

export default function HeroSection() {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setActiveStep((p) => (p + 1) % flowSteps.length);
    }, 1600);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 pt-24 pb-16 overflow-hidden bg-white">
      {/* Background layers */}
      <div className="absolute inset-0 grid-overlay pointer-events-none" />
      <div className="absolute inset-0 hero-glow pointer-events-none" />

      {/* Badge */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="mb-6 inline-flex items-center gap-2 bg-blue-50 border border-blue-100 rounded-full px-4 py-1.5 text-[12px] text-blue-600 font-semibold tracking-wide uppercase"
      >
        <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
        Full-Service Growth Agency
      </motion.div>

      {/* Headline */}
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="max-w-4xl text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight text-slate-900"
      >
        Hands-Free Lead Generation
        <br />
        <span className="text-blue-500">Systems Built To Grow</span>
        <br />
        Businesses
      </motion.h1>

      {/* Subtext */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.4 }}
        className="mt-6 max-w-xl text-slate-500 text-lg leading-relaxed"
      >
        We build complete acquisition systems that bring attention, build trust,
        and convert leads into customers automatically.
      </motion.p>

      {/* CTAs */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.55 }}
        className="mt-9 flex flex-col sm:flex-row items-center gap-4"
      >
        <a
          href="#contact"
          className="btn-glow bg-blue-500 hover:bg-blue-600 text-white font-semibold text-[15px] px-8 py-3.5 rounded-full transition-colors duration-200 flex items-center gap-2"
        >
          Book A Call Now
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M3 7h8M8 4.5L10.5 7 8 9.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
        <a
          href="#system"
          className="text-slate-500 hover:text-slate-700 text-[14px] font-medium transition-colors duration-200 flex items-center gap-1.5"
        >
          See how it works
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M7 3v8M4.5 8.5L7 11l2.5-2.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
      </motion.div>

      {/* Animated flow diagram */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.7 }}
        className="mt-20 w-full max-w-3xl"
      >
        <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm">
          <p className="text-[11px] text-slate-400 uppercase tracking-widest font-semibold mb-6">
            The Growth System
          </p>
          <div className="flex items-center justify-between gap-2">
            {flowSteps.map((step, i) => (
              <div key={step.label} className="flex items-center flex-1">
                {/* Step node */}
                <motion.div
                  animate={{ scale: activeStep === i ? 1.08 : 1 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="flex-1 flex flex-col items-center gap-2"
                >
                  <div
                    className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center transition-all duration-500 ${
                      activeStep === i
                        ? "bg-blue-500 text-white"
                        : "bg-slate-100 text-slate-400"
                    }`}
                    style={
                      activeStep === i
                        ? { boxShadow: "0 0 24px rgba(59,130,246,0.35)" }
                        : {}
                    }
                  >
                    {step.icon}
                  </div>
                  <div className="text-center">
                    <p className={`text-[13px] sm:text-[14px] font-semibold transition-colors duration-500 ${activeStep === i ? "text-slate-900" : "text-slate-400"}`}>
                      {step.label}
                    </p>
                    <p className="text-[10px] sm:text-[11px] text-slate-400 hidden sm:block">
                      {step.sub}
                    </p>
                  </div>
                </motion.div>

                {/* Connector */}
                {i < flowSteps.length - 1 && (
                  <div className="w-8 sm:w-12 flex items-center justify-center shrink-0">
                    <div className="relative w-full h-[1px] bg-slate-200 overflow-hidden">
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500 to-transparent"
                        animate={{ x: activeStep > i ? ["-100%", "100%"] : "-100%" }}
                        transition={{ duration: 0.8, repeat: Infinity, repeatDelay: 3.2, ease: "easeInOut" }}
                      />
                    </div>
                    <svg className="text-slate-300 ml-1 shrink-0" width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M2 6h8M7 3l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        className="mt-12 flex flex-col items-center gap-2 text-slate-400"
      >
        <p className="text-[11px] uppercase tracking-widest">Scroll</p>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          className="w-[1px] h-8 bg-gradient-to-b from-slate-400 to-transparent"
        />
      </motion.div>
    </section>
  );
}
