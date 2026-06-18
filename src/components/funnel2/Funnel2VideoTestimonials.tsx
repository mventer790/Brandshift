"use client";

import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { useEffect, useRef } from "react";

function VideoCard({ src }: { src: string }) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    v.currentTime = 0.5;
  }, []);

  return (
    <video
      ref={ref}
      src={src}
      controls
      playsInline
      preload="metadata"
      className="w-full h-full object-cover"
      style={{ display: "block" }}
    />
  );
}

const testimonials = [
  { name: "Karin", src: "/karin-2.mp4" },
  { name: "Lloyd", src: "/lloyd-2.mp4" },
  { name: "Jordy", src: "/jordy1-2.mp4" },
];

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};
const item: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Funnel2VideoTestimonials() {
  return (
    <section id="testimonials" className="relative py-16 sm:py-28 px-6 bg-[#07090f]">
      <div className="max-w-7xl mx-auto">
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
          <p className="mt-4 text-white text-[17px] max-w-md mx-auto">
            Watch how we transformed their growth.
          </p>
        </motion.div>

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
              className="rounded-2xl overflow-hidden border border-white/10 bg-white/5"
            >
              <div className="w-full" style={{ aspectRatio: "9/16" }}>
                <VideoCard src={t.src} />
              </div>
            </motion.div>
          ))}
        </motion.div>

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
              <p className="text-white text-[13px] mt-1">{s.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
