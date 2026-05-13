"use client";

import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

const reviews = [
  {
    name: "Alexander Newton",
    handle: "1 review",
    rating: 5,
    text: "John and his team have been excellent! They under promised and over delivered. Communication was on point and they delivered the final product a week before the deadline. 10/10 experience.",
    initials: "AN",
    color: "#3B82F6",
  },
  {
    name: "Santiago Blautzik",
    handle: "1 review",
    rating: 5,
    text: "We've been running lead gen campaigns for about 8 months now across different agencies and freelancers. Brand Shift Online is the first team that actually understood our funnel before touching the ad account. Within the first 3 weeks we had incredible results.",
    initials: "SB",
    color: "#2563EB",
  },
  {
    name: "Lucky Packs",
    handle: "4 reviews",
    rating: 5,
    text: "Brilliant service. Absolutely recommendable! Thank you for helping me run ads 🙌",
    initials: "LP",
    color: "#1D4ED8",
  },
  {
    name: "Austyn Cohen",
    handle: "Local Guide · 147 reviews",
    rating: 5,
    text: "Brand Shift Online is doing seriously impressive things for businesses looking to scale properly in today's market. Their approach to lead generation, automation, and next generation AI systems gives companies a real competitive edge.",
    initials: "AC",
    color: "#3B82F6",
  },
  {
    name: "Fabian Modricky",
    handle: "8 reviews",
    rating: 5,
    text: "I must say, I'm very impressed. Customer service was also on point! Will be purchasing again at the end of the month!!",
    initials: "FM",
    color: "#2563EB",
  },
  {
    name: "Leon Brendel",
    handle: "9 reviews",
    rating: 5,
    text: "I would never ever ever go to anyone else besides these guys.",
    initials: "LB",
    color: "#1D4ED8",
  },
  {
    name: "Eden Faclier",
    handle: "Local Guide · 15 reviews",
    rating: 5,
    text: "The team at Brandshift Online completely transformed our business. From building our website to handling our marketing and helping us scale from zero to where we are today, their work has been exceptional. Highly recommend to anyone serious about growth.",
    initials: "EF",
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
            <span className="text-white/40 text-[14px]">5.0 · 7 reviews</span>
          </div>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 [&_.card]:bg-white/5 [&_.card]:border-white/10"
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

        {/* Link to Google Business profile */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 text-center"
        >
          <a
            href="https://share.google/Y6hDEW9vtowx58dN2"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 border border-white/10 bg-white/5 hover:bg-white/10 text-white/70 hover:text-white text-[14px] font-medium px-6 py-3 rounded-full transition-all duration-200"
          >
            <GoogleLogo />
            See all reviews on Google
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M2.5 6h7M7 3.5L9.5 6 7 8.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
