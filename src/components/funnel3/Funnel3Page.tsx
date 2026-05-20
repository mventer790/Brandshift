"use client";

import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import Navbar from "@/components/Navbar";
import VideoTestimonials from "@/components/VideoTestimonials";
import GoogleTestimonials from "@/components/GoogleTestimonials";

// ─── Typeform ──────────────────────────────────────────────────
// Replace TYPEFORM_URL_HERE with your actual Typeform URL
const TYPEFORM_URL = "https://form.typeform.com/to/EDOIY5op";

// ─── AI Features Section ───────────────────────────────────────
const features = [
  {
    label: "Local Languages & Accents",
    description:
      "Our AI is built for South Africa, understanding local languages and accents naturally to create smoother, more human conversations and interactions.",
    color: "#3B82F6",
    bg: "rgba(59,130,246,0.12)",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>
      </svg>
    ),
  },
  {
    label: "Locally Hosted",
    description:
      "Our systems are hosted locally, which helps reduce latency, improve response times, and keep the solution as cost-effective and reliable as possible.",
    color: "#2563EB",
    bg: "rgba(59,130,246,0.12)",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="8" rx="2"/>
        <rect x="2" y="14" width="20" height="8" rx="2"/>
        <line x1="6" y1="6" x2="6.01" y2="6"/>
        <line x1="6" y1="18" x2="6.01" y2="18"/>
      </svg>
    ),
  },
  {
    label: "Sovereign & Customisable",
    description:
      "We offer a sovereign AI solution that can be customised around your company's specific needs, making it flexible, scalable, and easy to integrate into your existing operations.",
    color: "#1D4ED8",
    bg: "rgba(59,130,246,0.12)",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
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

function AIFeaturesSection() {
  return (
    <section className="relative py-16 sm:py-28 px-6 bg-[#07090f]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-blue-500 text-[12px] uppercase tracking-[0.2em] font-semibold mb-3">
            Why Choose Us
          </p>
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white">
            Built for South Africa
          </h2>
          <p className="mt-4 text-white text-[17px] max-w-lg mx-auto leading-relaxed">
            AI that speaks your language — literally.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-5"
        >
          {features.map((f, i) => (
            <motion.div
              key={f.label}
              variants={card}
              whileHover={{ y: -6 }}
              className="card rounded-2xl p-8 group cursor-default relative overflow-hidden"
            >
              <div className="absolute top-4 right-5 text-[72px] font-extrabold text-white/5 select-none leading-none">
                {i + 1}
              </div>

              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center mb-6"
                style={{ background: f.bg, color: f.color }}
              >
                {f.icon}
              </div>

              <h3 className="text-2xl font-bold mb-3 text-white">{f.label}</h3>
              <p className="text-white text-[15px] leading-relaxed">{f.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ─── Hero ──────────────────────────────────────────────────────
function HeroSection() {
  return (
    <section className="relative pt-16 pb-3 px-6 bg-[#07090f]">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 30%, rgba(30,80,200,0.18) 0%, rgba(10,30,80,0.08) 50%, transparent 80%)",
        }}
      />
      <div className="max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-4 inline-flex items-center gap-2 border border-white/10 bg-white/5 backdrop-blur-sm rounded-full px-5 py-2 text-[13px] text-white/70 font-medium"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
          Trusted by 100+ leading brands
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-5xl sm:text-6xl lg:text-[76px] font-extrabold leading-[1.1] tracking-tight"
        >
          <span className="text-white block">We build the best AI bots</span>
          <span className="block mt-1 text-blue-400">in Town.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-3 text-white text-[17px] max-w-xl mx-auto leading-relaxed"
        >
          We build complete acquisition systems that bring attention, build trust,
          and convert leads into customers — automatically.
        </motion.p>

      </div>
    </section>
  );
}

// ─── Typeform ──────────────────────────────────────────────────
function TypeformSection({ id, isFirst = false }: { id: string; isFirst?: boolean }) {
  const isPlaceholder = TYPEFORM_URL === "TYPEFORM_URL_HERE";

  return (
    <section
      id={id}
      className={`relative px-6 bg-[#07090f] ${isFirst ? "pt-4 pb-16 sm:pb-24" : "py-16 sm:py-24"}`}
    >
      <div className="max-w-3xl mx-auto">
        {!isFirst && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-10"
          >
            <p className="text-blue-400 text-[11px] uppercase tracking-[0.2em] font-semibold mb-3">
              Ready To Grow?
            </p>
            <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white">
              Let&apos;s Get You More Leads
            </h2>
            <p className="mt-4 text-white text-[17px] max-w-md mx-auto leading-relaxed">
              Fill in your details and we&apos;ll be in touch to book your free strategy call.
            </p>
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="rounded-2xl overflow-hidden border border-white/10"
          style={{ minHeight: 360 }}
        >
          {isPlaceholder ? (
            <div className="flex flex-col items-center justify-center gap-4 bg-white/5 h-full min-h-[360px] text-center px-8">
              <div className="w-14 h-14 rounded-2xl bg-blue-500/20 border border-blue-500/30 flex items-center justify-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#60a5fa" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="3" width="18" height="18" rx="2"/>
                  <path d="M3 9h18M9 15h6"/>
                </svg>
              </div>
              <p className="text-white font-bold text-[18px]">Typeform Goes Here</p>
              <p className="text-white/40 text-[14px] max-w-sm leading-relaxed">
                Replace <code className="text-blue-400 bg-blue-500/10 px-1.5 py-0.5 rounded text-[13px]">TYPEFORM_URL_HERE</code> in{" "}
                <code className="text-blue-400 bg-blue-500/10 px-1.5 py-0.5 rounded text-[13px]">Funnel3Page.tsx</code>{" "}
                with your actual Typeform URL.
              </p>
            </div>
          ) : (
            <iframe
              src={`${TYPEFORM_URL}?embed-hide-footer=true&embed-hide-headers=true`}
              width="100%"
              height="400"
              frameBorder="0"
              allow="camera; microphone; autoplay; encrypted-media;"
              style={{ border: 0, display: "block" }}
            />
          )}
        </motion.div>
      </div>
    </section>
  );
}

// ─── Footer ────────────────────────────────────────────────────
function Footer() {
  return (
    <footer className="border-t border-white/5 py-8 px-6 text-center bg-[#07090f]">
      <p className="text-white/20 text-[12px]">
        © {new Date().getFullYear()} BrandShift Online. All rights reserved.
      </p>
    </footer>
  );
}

// ─── Page ──────────────────────────────────────────────────────
export default function Funnel3Page() {
  return (
    <div className="min-h-screen bg-[#07090f] text-white font-sans antialiased overflow-x-hidden">
      <Navbar hideCta />
      <main>
        {/* 1. Hero */}
        <HeroSection />

        {/* 2. Typeform */}
        <TypeformSection id="contact" isFirst />

        {/* 3. Video testimonials */}
        <VideoTestimonials />

        {/* 4. AI Features */}
        <AIFeaturesSection />

        {/* 6. Google reviews */}
        <GoogleTestimonials />

        {/* 7. Typeform again */}
        <TypeformSection id="typeform-bottom" />
      </main>
      <Footer />
    </div>
  );
}
