"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    q: "How long does it take to see results?",
    a: "Most clients begin seeing measurable results within 30–60 days. Paid ad campaigns typically generate leads within the first 2 weeks of launch. Organic systems like web design and social media build momentum over 60–90 days.",
  },
  {
    q: "What industries do you work with?",
    a: "We work across a wide range of industries including trades, real estate, healthcare, professional services, fitness, and ecommerce. Our system is adaptable — if you sell a product or service and want more clients, we can build the right acquisition system for you.",
  },
  {
    q: "What's included in a lead generation system?",
    a: "A complete system includes: targeted ad campaigns (Meta + Google), a high-converting landing page or website, an AI receptionist for instant follow-up, a structured CRM pipeline, and ongoing optimisation. Everything is built to work together.",
  },
  {
    q: "Do you offer any performance guarantees?",
    a: "We stand behind our work. While specific results vary by market and budget, we offer a clear guarantee: if we don't deliver the agreed metrics within the first 90 days, we continue working at no additional cost until we do.",
  },
  {
    q: "How do you price your services?",
    a: "Pricing is tailored to your specific goals, market, and the scope of the system we build. Most engagements start between $2,500–$5,000/month for managed services, with one-time build fees for websites and infrastructure. Book a call to get a custom quote.",
  },
  {
    q: "What makes Brandshift different from other agencies?",
    a: "Most agencies sell you one piece — ads, or a website, or social media. We build the entire acquisition system: attention, trust, and conversion working together. We're not freelancers taking orders; we're growth architects who take ownership of your results.",
  },
];

function FAQItem({ item, index }: { item: (typeof faqs)[0]; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.55, delay: index * 0.07, ease: "easeOut" }}
      className={`bg-white rounded-xl overflow-hidden cursor-pointer transition-all duration-300 border ${
        open ? "border-blue-200 shadow-md shadow-blue-50" : "border-slate-200 shadow-sm"
      }`}
      onClick={() => setOpen(!open)}
    >
      {/* Question row */}
      <div className="flex items-center justify-between gap-4 px-6 py-5">
        <h3 className="font-semibold text-[15px] sm:text-[16px] leading-snug text-left text-slate-900">
          {item.q}
        </h3>
        <motion.div
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className={`shrink-0 w-7 h-7 rounded-full flex items-center justify-center border transition-colors duration-300 ${
            open ? "border-blue-300 bg-blue-50" : "border-slate-200 bg-slate-50"
          }`}
        >
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M6 2v8M2 6h8" stroke={open ? "#3b82f6" : "#94a3b8"} strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        </motion.div>
      </div>

      {/* Answer */}
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.32, ease: "easeInOut" }}
          >
            <div className="px-6 pb-5 border-t border-slate-100">
              <p className="text-slate-500 text-[14px] sm:text-[15px] leading-relaxed pt-4">
                {item.a}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQSection() {
  return (
    <section className="relative py-28 px-6 bg-white">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <p className="text-blue-500 text-[12px] uppercase tracking-[0.2em] font-semibold mb-3">
            FAQ
          </p>
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
            Common Questions
          </h2>
          <p className="mt-4 text-slate-500 text-[16px]">
            Everything you need to know before we talk.
          </p>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <FAQItem key={faq.q} item={faq} index={i} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-10 text-center"
        >
          <p className="text-slate-400 text-[14px]">
            Still have questions?{" "}
            <a href="#contact" className="text-blue-500 hover:text-blue-600 font-medium transition-colors">
              Book a call
            </a>{" "}
            and we&apos;ll answer everything.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
