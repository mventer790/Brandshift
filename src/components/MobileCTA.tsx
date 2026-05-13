"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function MobileCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="fixed bottom-0 inset-x-0 z-40 md:hidden p-4"
          style={{
            background: "linear-gradient(to top, rgba(7,9,15,0.98) 70%, transparent)",
          }}
        >
          <a
            href="#contact"
            className="btn-glow block w-full bg-blue-500 hover:bg-blue-600 text-white text-[15px] font-bold py-4 rounded-full text-center transition-colors duration-200"
          >
            Book A Call Now
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
