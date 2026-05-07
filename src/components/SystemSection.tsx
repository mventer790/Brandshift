"use client";

import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

const steps = [
  {
    number: "01",
    label: "Attention",
    color: "#3B82F6",
    bg: "#EFF6FF",
    description:
      "Meta Ads, Google Ads, and strategic content designed to bring buyers directly to your business — not just clicks, but qualified leads.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 11l19-9-9 19-2-8-8-2z"/>
      </svg>
    ),
    tags: ["Meta Ads", "Google Ads", "Content Strategy"],
  },
  {
    number: "02",
    label: "Trust",
    color: "#2563EB",
    bg: "#EFF6FF",
    description:
      "High-converting websites and social systems built to instantly build credibility — so prospects choose you before they even speak to you.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    tags: ["Web Design", "Social Proof", "Brand Identity"],
  },
  {
    number: "03",
    label: "Conversion",
    color: "#1D4ED8",
    bg: "#EFF6FF",
    description:
      "AI receptionists and structured follow-up systems that turn leads into customers — automatically, 24/7, without you lifting a finger.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/>
        <polyline points="16 7 22 7 22 13"/>
      </svg>
    ),
    tags: ["AI Receptionist", "Follow-Up System", "CRM Integration"],
  },
];

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const card: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

export default function SystemSection() {
  return (
    <section id="system" className="relative py-28 px-6 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-blue-500 text-[12px] uppercase tracking-[0.2em] font-semibold mb-3">
            How It Works
          </p>
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
            The Proven Growth System
          </h2>
          <p className="mt-4 text-slate-500 text-[17px] max-w-lg mx-auto leading-relaxed">
            Three interconnected layers — each one amplifying the next.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-5"
        >
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              variants={card}
              whileHover={{ y: -6 }}
              className="card rounded-2xl p-8 group cursor-default relative overflow-hidden"
            >
              {/* Step number watermark */}
              <div className="absolute top-4 right-5 text-[72px] font-extrabold text-slate-100 select-none leading-none">
                {i + 1}
              </div>

              {/* Icon */}
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center mb-6"
                style={{ background: step.bg, color: step.color }}
              >
                {step.icon}
              </div>

              {/* Label */}
              <div className="flex items-center gap-3 mb-3">
                <span className="text-[11px] font-bold uppercase tracking-widest" style={{ color: step.color }}>
                  Step {step.number}
                </span>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-slate-900">{step.label}</h3>
              <p className="text-slate-500 text-[15px] leading-relaxed mb-6">{step.description}</p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {step.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] font-medium px-3 py-1 rounded-full bg-blue-50 text-blue-600 border border-blue-100"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
