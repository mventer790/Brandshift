"use client";

import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

const testimonials = [
  {
    name: "James Harrington",
    business: "Harrington Plumbing Co.",
    result: "3x leads in 60 days",
    gradient: "from-blue-600 to-blue-400",
  },
  {
    name: "Sofia Delgado",
    business: "Delgado Real Estate Group",
    result: "$140K in new listings",
    gradient: "from-blue-700 to-indigo-500",
  },
  {
    name: "Marcus Webb",
    business: "Webb Fitness Studios",
    result: "68 new members in 30 days",
    gradient: "from-indigo-600 to-blue-500",
  },
];

const PlayIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
    <polygon points="5 3 19 12 5 21 5 3"/>
  </svg>
);

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};
const item: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function VideoTestimonials() {
  return (
    <section id="testimonials" className="relative py-28 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <p className="text-blue-500 text-[12px] uppercase tracking-[0.2em] font-semibold mb-3">
            Client Results
          </p>
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
            Real Businesses. Real Results.
          </h2>
          <p className="mt-4 text-slate-500 text-[17px] max-w-md mx-auto">
            Watch how we transformed their growth.
          </p>
        </motion.div>

        {/* Video cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-5"
        >
          {testimonials.map((t) => (
            <motion.div
              key={t.name}
              variants={item}
              whileHover={{ scale: 1.025 }}
              transition={{ duration: 0.25 }}
              className="card rounded-2xl overflow-hidden cursor-pointer group"
            >
              {/* Thumbnail area */}
              <div className={`relative h-52 bg-gradient-to-br ${t.gradient} overflow-hidden`}>
                {/* Subtle screen lines */}
                <div className="absolute inset-0 flex flex-col justify-center items-center gap-3 opacity-20">
                  {[1, 0.7, 0.5].map((o, i) => (
                    <div key={i} className="h-[2px] bg-white rounded-full" style={{ width: `${50 + i * 12}%`, opacity: o }} />
                  ))}
                </div>

                {/* Play button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    whileHover={{ scale: 1.12 }}
                    className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm border border-white/40 flex items-center justify-center group-hover:bg-white/30 transition-colors"
                  >
                    <div className="translate-x-[1px]">
                      <PlayIcon />
                    </div>
                  </motion.div>
                </div>

                {/* Result badge */}
                <div className="absolute top-3 right-3 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-3 py-1">
                  <span className="text-[11px] font-semibold text-white">{t.result}</span>
                </div>
              </div>

              {/* Info */}
              <div className="p-5">
                <p className="font-semibold text-[15px] text-slate-900">{t.name}</p>
                <p className="text-slate-400 text-[13px] mt-0.5">{t.business}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Trust numbers */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-14 grid grid-cols-3 gap-6 max-w-2xl mx-auto text-center"
        >
          {[
            { val: "150+", label: "Clients Served" },
            { val: "$2.4M", label: "Revenue Generated" },
            { val: "97%", label: "Retention Rate" },
          ].map((s) => (
            <div key={s.label}>
              <p className="text-3xl sm:text-4xl font-extrabold text-blue-500">{s.val}</p>
              <p className="text-slate-400 text-[13px] mt-1">{s.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
