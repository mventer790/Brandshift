"use client";

import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

const testimonials = [
  {
    name: "Leon Brendel",
    business: "GGA Safaris",
    videoId: "7yU-0lP6G1g",
  },
  {
    name: "Alex Newton",
    business: "Leads Sweeps",
    videoId: "5gXP8g0IrXU",
  },
  {
    name: "Leo Faclier",
    business: "Faclier Brothers Collective",
    videoId: "eGNvMZeJ3yE",
  },
];

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
    <section id="testimonials" className="relative py-28 px-6 bg-[#07090f]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <p className="text-blue-400 text-[12px] uppercase tracking-[0.2em] font-semibold mb-3">
            Client Results
          </p>
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white">
            Real Businesses. Real Results.
          </h2>
          <p className="mt-4 text-white/50 text-[17px] max-w-md mx-auto">
            Watch how we transformed their growth.
          </p>
        </motion.div>

        {/* Video cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {testimonials.map((t) => (
            <motion.div
              key={t.name}
              variants={item}
              className="rounded-2xl overflow-hidden border border-white/10"
            >
              <div className="w-full" style={{ aspectRatio: "9/16" }}>
                <iframe
                  width="100%"
                  height="100%"
                  src={`https://www.youtube.com/embed/${t.videoId}?rel=0&modestbranding=1`}
                  title={t.name}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  style={{ border: 0, display: "block" }}
                />
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
            { val: "$1M+", label: "Revenue Generated" },
            { val: "97%", label: "Retention Rate" },
          ].map((s) => (
            <div key={s.label}>
              <p className="text-3xl sm:text-4xl font-extrabold text-blue-400">{s.val}</p>
              <p className="text-white/40 text-[13px] mt-1">{s.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
