"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import VideoTestimonials from "@/components/VideoTestimonials";
import SystemSection from "@/components/SystemSection";
import GoogleTestimonials from "@/components/GoogleTestimonials";

// ─── Typeform Embed ────────────────────────────────────────────
// Replace TYPEFORM_URL_HERE with your actual Typeform URL
// e.g. https://yourname.typeform.com/to/XXXXXXXX
const TYPEFORM_URL = "TYPEFORM_URL_HERE";

function TypeformSection({ id, isFirst = false }: { id: string; isFirst?: boolean }) {
  const isPlaceholder = TYPEFORM_URL === "TYPEFORM_URL_HERE";

  return (
    <section
      id={id}
      className={`relative px-6 bg-[#07090f] ${
        isFirst ? "pt-16 pb-6" : "py-16 sm:py-24"
      }`}
    >
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-5"
        >
          {isFirst ? (
            <>
              <h2 className="text-5xl sm:text-6xl lg:text-[76px] font-extrabold leading-[1.1] tracking-tight">
                <span className="text-white block">We specialize in getting</span>
                <span className="block mt-1">
                  <span className="text-white">businesses </span>
                  <span className="text-blue-400">leads.</span>
                </span>
              </h2>
              <p className="mt-3 text-white text-[17px] max-w-xl mx-auto leading-relaxed">
                Fill in your details and we&apos;ll be in touch to book your free strategy call.
              </p>
            </>
          ) : (
            <>
              <p className="text-blue-400 text-[11px] uppercase tracking-[0.2em] font-semibold mb-3">
                Ready To Grow?
              </p>
              <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white">
                Let&apos;s Get You More Leads
              </h2>
              <p className="mt-4 text-white text-[17px] max-w-md mx-auto leading-relaxed">
                Fill in your details and we&apos;ll be in touch to book your free strategy call.
              </p>
            </>
          )}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="rounded-2xl overflow-hidden border border-white/10"
          style={{ minHeight: 400 }}
        >
          {isPlaceholder ? (
            <div className="flex flex-col items-center justify-center gap-4 bg-white/5 h-full min-h-[400px] text-center px-8">
              <div className="w-14 h-14 rounded-2xl bg-blue-500/20 border border-blue-500/30 flex items-center justify-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#60a5fa" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="3" width="18" height="18" rx="2"/>
                  <path d="M3 9h18M9 15h6"/>
                </svg>
              </div>
              <p className="text-white font-bold text-[18px]">Typeform Goes Here</p>
              <p className="text-white/40 text-[14px] max-w-sm leading-relaxed">
                Replace <code className="text-blue-400 bg-blue-500/10 px-1.5 py-0.5 rounded text-[13px]">TYPEFORM_URL_HERE</code> in{" "}
                <code className="text-blue-400 bg-blue-500/10 px-1.5 py-0.5 rounded text-[13px]">Funnel2Page.tsx</code>{" "}
                with your actual Typeform URL to embed the form here.
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
export default function Funnel2Page() {
  return (
    <div className="min-h-screen bg-[#07090f] text-white font-sans antialiased overflow-x-hidden">
      <Navbar hideCta />
      <main>
        {/* 1. Typeform with hero heading */}
        <TypeformSection id="contact" isFirst />

        {/* 3. Video testimonials */}
        <VideoTestimonials />

        {/* 4. The Proven System */}
        <SystemSection />

        {/* 5. Google reviews */}
        <GoogleTestimonials />

        {/* 6. Typeform again */}
        <TypeformSection id="typeform-bottom" />
      </main>
      <Footer />
    </div>
  );
}
