"use client";

import { motion } from "framer-motion";

export default function FinalCTA() {
  return (
    <section id="contact" className="relative py-16 sm:py-32 px-6 overflow-hidden bg-[#07090f]">
      {/* Radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(59,130,246,0.15) 0%, transparent 70%)",
        }}
      />
      <div className="absolute inset-0 grid-overlay opacity-30 pointer-events-none" />
      <div className="absolute inset-8 sm:inset-16 rounded-3xl border border-blue-500/10 pointer-events-none" />

      <div className="relative max-w-3xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-blue-400 text-[12px] uppercase tracking-[0.2em] font-semibold mb-5"
        >
          Ready to Scale?
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.08] mb-6 text-white"
        >
          Ready To Build A Real
          <br />
          <span className="text-blue-400">Growth System?</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.22 }}
          className="text-slate-400 text-[17px] leading-relaxed max-w-xl mx-auto mb-10"
        >
          Book a free 30-minute strategy call. We&apos;ll audit your current digital presence,
          identify the exact gaps, and show you what a complete acquisition system looks
          like for your business.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#"
            className="btn-beat font-bold text-[16px] px-10 py-4 rounded-full flex items-center gap-3"
          >
            Book A Call Now
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
          <p className="text-slate-500 text-[13px]">No commitment · 30 minutes · 100% free</p>
        </motion.div>

        {/* Trust strip */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-16 flex flex-wrap items-center justify-center gap-x-8 gap-y-3"
        >
          {[
            "150+ Businesses Served",
            "97% Client Retention",
            "$1M+ Revenue Generated",
          ].map((item) => (
            <div key={item} className="flex items-center gap-2 text-slate-500 text-[13px]">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M2 6l3 3 5-5" stroke="#3B82F6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              {item}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
