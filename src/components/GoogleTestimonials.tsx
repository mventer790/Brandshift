"use client";

import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

const reviews = [
  {
    name: "Daniel Kowalski",
    handle: "Owner · Kowalski HVAC",
    rating: 5,
    text: "Brandshift completely transformed how we generate leads. Within 45 days we had more inbound enquiries than the entire previous quarter. The system runs itself.",
    initials: "DK",
    color: "#3B82F6",
  },
  {
    name: "Rachel Nguyen",
    handle: "Director · Nguyen Property Group",
    rating: 5,
    text: "Every agency promised results. Brandshift delivered them. Our website conversions doubled and the Meta ads pay for themselves 4x over. Genuinely impressive.",
    initials: "RN",
    color: "#2563EB",
  },
  {
    name: "Tom Ashworth",
    handle: "Founder · Peak Performance Gym",
    rating: 5,
    text: "The AI receptionist alone was a game-changer. Leads used to fall through the cracks. Now every enquiry gets followed up instantly. We signed 31 new members last month.",
    initials: "TA",
    color: "#1D4ED8",
  },
  {
    name: "Claire Bennett",
    handle: "CEO · Bennett Legal Advisory",
    rating: 5,
    text: "I was sceptical at first — we'd been burned by agencies before. Brandshift is different. They built us a complete system, not just a pretty website. ROI is exceptional.",
    initials: "CB",
    color: "#3B82F6",
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#FBBF24">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
        </svg>
      ))}
    </div>
  );
}

function GoogleLogo() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24">
      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
    </svg>
  );
}

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};
const card: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function GoogleTestimonials() {
  return (
    <section className="relative py-28 px-6 bg-[#07090f]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <div className="flex items-center justify-center gap-2 mb-3">
            <GoogleLogo />
            <p className="text-white/40 text-[12px] uppercase tracking-[0.2em] font-semibold">
              Google Reviews
            </p>
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white">
            What Our Clients Say
          </h2>
          <div className="flex items-center justify-center gap-2 mt-4">
            <StarRating count={5} />
            <span className="text-white/40 text-[14px]">5.0 · 40+ reviews</span>
          </div>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 [&_.card]:bg-white/5 [&_.card]:border-white/10"
        >
          {reviews.map((r) => (
            <motion.div
              key={r.name}
              variants={card}
              whileHover={{ y: -5 }}
              className="card rounded-2xl p-5 flex flex-col gap-4"
            >
              {/* Header */}
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-[13px] font-bold text-white shrink-0"
                  style={{ background: `linear-gradient(135deg, ${r.color}, ${r.color}bb)` }}
                >
                  {r.initials}
                </div>
                <div className="min-w-0">
                  <p className="font-semibold text-[14px] text-white truncate">{r.name}</p>
                  <p className="text-white/40 text-[11px] truncate">{r.handle}</p>
                </div>
                <div className="ml-auto shrink-0">
                  <GoogleLogo />
                </div>
              </div>

              <StarRating count={r.rating} />

              <p className="text-white/50 text-[13px] leading-relaxed flex-1">{r.text}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
