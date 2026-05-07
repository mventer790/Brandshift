"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative border-t border-slate-200 bg-white py-10 px-6">
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
          <span className="font-bold text-[17px] tracking-tight text-slate-900">
            Brand<span className="text-blue-500">shift</span>
          </span>
        </motion.a>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-slate-400 text-[13px] text-center"
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
              className="text-slate-400 hover:text-slate-700 text-[13px] transition-colors"
            >
              {l}
            </a>
          ))}
        </motion.div>
      </div>
    </footer>
  );
}
