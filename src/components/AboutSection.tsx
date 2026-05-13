"use client";

import { motion } from "framer-motion";

const values = [
  {
    label: "System Builders",
    desc: "We don't sell tactics. We engineer complete acquisition machines.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3"/>
        <path d="M19.07 4.93A10 10 0 0 1 20.66 8M3.34 8A10 10 0 0 1 4.93 4.93M4.93 19.07A10 10 0 0 1 3.34 16M20.66 16a10 10 0 0 1-1.59 3.07"/>
      </svg>
    ),
  },
  {
    label: "Results First",
    desc: "Every decision is made through one lens: does this generate more revenue for the client?",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/>
        <polyline points="16 7 22 7 22 13"/>
      </svg>
    ),
  },
  {
    label: "Partnership Model",
    desc: "We treat your business like ours — your growth is our growth. Full stop.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/>
      </svg>
    ),
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="relative py-28 px-6 bg-[#07090f]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-center lg:text-left"
          >
            <p className="text-blue-500 text-[12px] uppercase tracking-[0.2em] font-semibold mb-4">
              About Us
            </p>
            <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-[1.1] mb-6 text-white">
              We Build Systems.
              <br />
              <span className="text-blue-400">Not Excuses.</span>
            </h2>
            <p className="text-white text-[16px] sm:text-[17px] leading-relaxed mb-5">
              Brand Shift Online is a South African digital agency specializing in hands-free lead generation systems
              for businesses locally and worldwide. We help companies grow through high-converting websites,
              Meta &amp; Google Ads, social media management, ecommerce development, AI-powered systems,
              and digital strategy.
            </p>
            <p className="text-white text-[16px] sm:text-[17px] leading-relaxed mb-10">
              Our approach is built around proven industry blueprints designed to attract attention, build trust,
              and convert leads into customers. We focus on creating premium, scalable systems that help
              businesses grow consistently online.
            </p>

            {/* Values */}
            <div className="space-y-4">
              {values.map((v, i) => (
                <motion.div
                  key={v.label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.55, delay: i * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-9 h-9 rounded-lg bg-blue-500/10 text-blue-400 flex items-center justify-center shrink-0 mt-0.5">
                    {v.icon}
                  </div>
                  <div>
                    <p className="font-semibold text-[15px] mb-0.5 text-white">{v.label}</p>
                    <p className="text-white text-[13px] leading-relaxed">{v.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: abstract visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
            className="relative h-[420px] lg:h-[480px]"
          >
            <div className="absolute inset-0 flex items-center justify-center">
              {/* Rotating rings */}
              {[240, 180, 130, 90].map((size, i) => (
                <motion.div
                  key={size}
                  animate={{ rotate: i % 2 === 0 ? 360 : -360 }}
                  transition={{ duration: 20 + i * 8, repeat: Infinity, ease: "linear" }}
                  className="absolute rounded-full"
                  style={{
                    width: size,
                    height: size,
                    border: `1px ${i % 2 === 0 ? "solid" : "dashed"} rgba(59,130,246,${0.12 + i * 0.08})`,
                  }}
                />
              ))}

              {/* Centre orb */}
              <div
                className="relative z-10 w-24 h-24 rounded-2xl bg-blue-500 flex items-center justify-center"
                style={{ boxShadow: "0 0 60px rgba(59,130,246,0.3), 0 0 120px rgba(59,130,246,0.1)" }}
              >
                <span className="text-2xl font-extrabold tracking-tight text-white">BS</span>
              </div>

              {/* Floating metric badges */}
              {[
                { label: "150+ Clients", pos: "top-6 right-8", delay: 0 },
                { label: "4.8x ROAS", pos: "bottom-12 left-4", delay: 0.3 },
                { label: "97% Retention", pos: "top-24 left-2", delay: 0.6 },
                { label: "$1M+ Revenue", pos: "bottom-4 right-6", delay: 0.9 },
              ].map((badge) => (
                <motion.div
                  key={badge.label}
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: badge.delay }}
                  className={`absolute ${badge.pos} bg-white/5 border border-white/10 rounded-full px-3 py-1.5 backdrop-blur-sm`}
                >
                  <span className="text-[11px] font-semibold text-blue-600">{badge.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
