"use client";

import { motion } from "framer-motion";

const problems = [
  "Nobody sees them",
  "Nobody trusts them",
  "Nobody follows up",
];

const solutions = [
  { word: "ATTENTION", desc: "We make you impossible to ignore", delay: 0.1 },
  { word: "TRUST", desc: "We make you the obvious choice", delay: 0.25 },
  { word: "CONVERSION", desc: "We make every lead count", delay: 0.4 },
];

const lineVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (d: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: d, ease: "easeOut" as const },
  }),
};

export default function PsychSection() {
  return (
    <section className="relative py-32 px-6 overflow-hidden">
      {/* Dark full-bleed background */}
      <div className="absolute inset-0 bg-slate-900" />
      <div className="absolute inset-0 grid-overlay opacity-60" />
      {/* Blend from ServicesSection above */}
      <div className="absolute top-0 inset-x-0 h-24 pointer-events-none z-10"
        style={{ background: "linear-gradient(to bottom, #07090f 0%, #0f172a 100%)" }} />
      {/* Blend into GoogleTestimonials below */}
      <div className="absolute bottom-0 inset-x-0 h-48 pointer-events-none z-10"
        style={{ background: "linear-gradient(to top, #07090f 0%, #07090f 20%, transparent 100%)" }} />

      {/* Radial centre glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(59,130,246,0.07) 0%, transparent 70%)",
        }}
      />

      <div className="relative max-w-3xl mx-auto text-center">
        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-blue-500 text-[12px] uppercase tracking-[0.2em] font-semibold mb-14"
        >
          The Hard Truth
        </motion.p>

        {/* Opening line */}
        <motion.p
          custom={0}
          variants={lineVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          className="text-2xl sm:text-3xl font-light text-gray-300 leading-relaxed mb-6"
        >
          Most businesses don&apos;t fail because of their service.
        </motion.p>

        <motion.p
          custom={0.18}
          variants={lineVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          className="text-xl sm:text-2xl font-semibold text-white mb-10"
        >
          They fail because:
        </motion.p>

        {/* Problems */}
        <div className="space-y-4 mb-14">
          {problems.map((p, i) => (
            <motion.div
              key={p}
              custom={0.35 + i * 0.18}
              variants={lineVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-30px" }}
              className="flex items-center justify-center gap-3"
            >
              <div className="w-6 h-6 rounded-full border border-red-500/40 flex items-center justify-center shrink-0">
                <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                  <path d="M9 3L3 9M3 3l6 6" stroke="#ef4444" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </div>
              <span className="text-lg sm:text-xl text-gray-300 font-medium">{p}</span>
            </motion.div>
          ))}
        </div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="w-24 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent mx-auto mb-14"
        />

        {/* Resolution */}
        <motion.p
          custom={0.1}
          variants={lineVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-extrabold text-white mb-16"
        >
          We solve all three.
        </motion.p>

        {/* Solution pillars */}
        <div className="grid grid-cols-3 gap-4 sm:gap-6">
          {solutions.map((s) => (
            <motion.div
              key={s.word}
              initial={{ opacity: 0, scale: 0.85, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, delay: s.delay, ease: "easeOut" }}
              whileHover={{ scale: 1.05 }}
              className="flex flex-col items-center gap-2 cursor-default"
            >
              <div
                className="w-full py-5 px-3 rounded-xl glass flex flex-col items-center gap-2"
                style={{
                  border: "1px solid rgba(59,130,246,0.25)",
                  boxShadow: "0 0 30px rgba(59,130,246,0.08)",
                }}
              >
                <div
                  className="w-2 h-2 rounded-full bg-blue-500"
                  style={{ boxShadow: "0 0 10px rgba(59,130,246,0.8)" }}
                />
                <p className="text-[12px] sm:text-[13px] font-extrabold tracking-[0.15em] sm:tracking-[0.2em] text-blue-400 glow-word text-center">
                  {s.word}
                </p>
              </div>
              <p className="text-[11px] text-white/40 text-center leading-snug px-1 hidden sm:block">
                {s.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
