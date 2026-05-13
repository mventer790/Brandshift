"use client";

import { motion } from "framer-motion";

const stats = [
  { val: "150+", label: "Businesses Grown" },
  { val: "$1M+", label: "Revenue Generated" },
  { val: "97%", label: "Client Retention" },
];

const reviews = [
  {
    name: "Alexander Newton",
    text: "John and his team under promised and over delivered. Delivered the final product a week before the deadline. 10/10 experience.",
    initials: "AN",
  },
  {
    name: "Eden Faclier",
    text: "The team at Brandshift Online completely transformed our business — from our website to our marketing. Highly recommend to anyone serious about growth.",
    initials: "EF",
  },
  {
    name: "Leon Brendel",
    text: "I would never ever ever go to anyone else besides these guys.",
    initials: "LB",
  },
];

const included = [
  "Full website audit & recommendations",
  "Custom lead generation strategy",
  "Meta & Google Ads roadmap",
  "AI automation opportunities",
  "No obligation — completely free",
];

function StarRow() {
  return (
    <div className="flex gap-1">
      {[1,2,3,4,5].map(i => (
        <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#FBBF24">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
        </svg>
      ))}
    </div>
  );
}

function GoogleLogo() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24">
      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
    </svg>
  );
}

export default function FunnelPage() {
  return (
    <div className="min-h-screen bg-[#07090f] text-white font-sans antialiased overflow-x-hidden">

      {/* ── Navbar ───────────────────────────────────────────── */}
      <header className="fixed top-0 inset-x-0 z-50 bg-[#07090f]/90 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
          <span className="font-extrabold text-[18px] tracking-tight uppercase text-white">
            BrandshiftOnline
          </span>
          <a
            href="#book"
            className="bg-white text-slate-900 text-[12px] font-bold px-4 py-2 rounded-full hover:bg-white/90 transition-colors whitespace-nowrap"
          >
            Book Free Call
          </a>
        </div>
      </header>

      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 pt-20 pb-16">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse 80% 60% at 50% 30%, rgba(30,80,200,0.18) 0%, transparent 80%)",
          }}
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6 inline-flex items-center gap-2 border border-white/10 bg-white/5 rounded-full px-4 py-1.5 text-[12px] text-white/60 font-medium"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
          Free 30-Minute Strategy Call
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="max-w-3xl text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight"
        >
          <span className="text-white">Stop losing leads.</span>
          <br />
          <span className="text-blue-400">Start growing daily.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mt-6 max-w-lg text-white/50 text-[17px] leading-relaxed"
        >
          Book a free strategy call. We&apos;ll audit your digital presence and
          show you exactly how to build a system that generates leads on autopilot.
        </motion.p>

        <motion.a
          href="#book"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="mt-8 inline-flex items-center gap-2 bg-white text-slate-900 font-bold text-[16px] px-10 py-4 rounded-full transition-all"
          style={{ boxShadow: "0 0 40px rgba(255,255,255,0.12)" }}
        >
          Book My Free Call
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M3 7h8M8 4.5L10.5 7 8 9.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </motion.a>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-3 text-white/30 text-[13px]"
        >
          No commitment · 100% free · 30 minutes
        </motion.p>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="mt-16 grid grid-cols-3 gap-6 sm:gap-12"
        >
          {stats.map(s => (
            <div key={s.label} className="text-center">
              <p className="text-3xl sm:text-4xl font-extrabold text-blue-400">{s.val}</p>
              <p className="text-white/40 text-[12px] mt-1">{s.label}</p>
            </div>
          ))}
        </motion.div>
      </section>

      {/* ── Video testimonials ───────────────────────────────── */}
      <section className="py-20 px-6 bg-[#07090f]">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <p className="text-blue-400 text-[11px] uppercase tracking-[0.2em] font-semibold mb-2">Real Results</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Hear It From Our Clients</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              { id: "7yU-0lP6G1g", name: "Leon Brendel", biz: "GGA Safaris" },
              { id: "5gXP8g0IrXU", name: "Alex Newton", biz: "Leads Sweeps" },
              { id: "eGNvMZeJ3yE", name: "Leo Faclier", biz: "Faclier Brothers Collective" },
            ].map((v, i) => (
              <motion.div
                key={v.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="rounded-2xl overflow-hidden border border-white/10"
              >
                <div className="w-full" style={{ aspectRatio: "9/16" }}>
                  <iframe
                    width="100%" height="100%"
                    src={`https://www.youtube.com/embed/${v.id}?rel=0`}
                    title={v.name}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    style={{ border: 0, display: "block" }}
                  />
                </div>
                <div className="p-4 bg-white/5">
                  <p className="font-semibold text-white text-[14px]">{v.name}</p>
                  <p className="text-white/40 text-[12px]">{v.biz}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── What's included ──────────────────────────────────── */}
      <section className="py-20 px-6">
        <div className="max-w-xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-blue-400 text-[11px] uppercase tracking-[0.2em] font-semibold mb-3">On The Call</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-10">What You&apos;ll Get</h2>
            <ul className="space-y-4 text-left">
              {included.map((item, i) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="flex items-center gap-3 text-[16px] text-white/80"
                >
                  <div className="w-5 h-5 rounded-full bg-blue-500/20 border border-blue-500/40 flex items-center justify-center shrink-0">
                    <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                      <path d="M2 6l3 3 5-5" stroke="#60a5fa" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* ── Google reviews ───────────────────────────────────── */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <div className="flex items-center justify-center gap-2 mb-2">
              <GoogleLogo />
              <span className="text-white/40 text-[12px] uppercase tracking-[0.2em] font-semibold">Google Reviews</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <StarRow />
              <span className="text-white/40 text-[13px]">5.0 · 7 reviews</span>
            </div>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {reviews.map((r, i) => (
              <motion.div
                key={r.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/5 border border-white/10 rounded-2xl p-5 flex flex-col gap-3"
              >
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-blue-500/30 flex items-center justify-center text-[11px] font-bold text-white shrink-0">
                    {r.initials}
                  </div>
                  <div>
                    <p className="text-white font-semibold text-[13px]">{r.name}</p>
                    <StarRow />
                  </div>
                  <div className="ml-auto"><GoogleLogo /></div>
                </div>
                <p className="text-white/50 text-[13px] leading-relaxed">{r.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final CTA / Book ─────────────────────────────────── */}
      <section id="book" className="py-24 px-6">
        <div className="max-w-xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-blue-400 text-[11px] uppercase tracking-[0.2em] font-semibold mb-4">Ready To Grow?</p>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-4 leading-tight">
              Book Your Free<br />
              <span className="text-blue-400">Strategy Call</span>
            </h2>
            <p className="text-white/50 text-[16px] mb-10 leading-relaxed">
              30 minutes. No pitch. Just a clear plan for how to grow your business online.
            </p>

            {/* Cal.com or Calendly embed placeholder */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 mb-8">
              <p className="text-white/40 text-[14px] mb-4">Click below to pick a time that works for you</p>
              <motion.a
                href="#"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 bg-white text-slate-900 font-bold text-[16px] px-10 py-4 rounded-full"
                style={{ boxShadow: "0 0 40px rgba(255,255,255,0.12)" }}
              >
                Choose a Time
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M3 7h8M8 4.5L10.5 7 8 9.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </motion.a>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
              {["Free · No Commitment", "30 Minutes", "Real Strategy"].map(item => (
                <div key={item} className="flex items-center gap-1.5 text-white/30 text-[12px]">
                  <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                    <path d="M2 6l3 3 5-5" stroke="#3B82F6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  {item}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Footer ───────────────────────────────────────────── */}
      <footer className="border-t border-white/5 py-8 px-6 text-center">
        <p className="text-white/20 text-[12px]">
          © {new Date().getFullYear()} BrandShift Online. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
