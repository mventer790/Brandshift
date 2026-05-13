"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-[#07090f] py-10 px-6">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <motion.a
          href="#"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex items-center gap-2.5"
        >
          <div className="w-7 h-7 rounded-md overflow-hidden shrink-0">
            <Image
              src="/logo.jpg"
              alt="Brandshift logo"
              width={28}
              height={28}
              className="w-full h-full object-cover"
            />
          </div>
          <span className="font-bold text-[17px] tracking-tight text-white">
            BrandShift<span className="text-blue-400">Online</span>
          </span>
        </motion.a>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-white/30 text-[13px] text-center"
        >
          © {new Date().getFullYear()} Brandshift. All rights reserved.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex items-center gap-5"
        >
          {["Privacy", "Terms", "Contact"].map((l) => (
            <a
              key={l}
              href="#"
              className="text-white/30 hover:text-white/70 text-[13px] transition-colors"
            >
              {l}
            </a>
          ))}
          <a
            href="https://share.google/Y6hDEW9vtowx58dN2"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/30 hover:text-white/70 text-[13px] transition-colors"
          >
            Google Reviews
          </a>
        </motion.div>
      </div>
    </footer>
  );
}
