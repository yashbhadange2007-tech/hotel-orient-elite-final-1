import { useEffect } from "react";
import { motion } from "framer-motion";
import { siteConfig } from "../../config/site";

export default function Loader({ onComplete }) {
  useEffect(() => {
    const timer = window.setTimeout(() => onComplete?.(), 2100);
    return () => window.clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-50 grid place-items-center overflow-hidden bg-ink-950"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0, pointerEvents: "none" }}
      transition={{ delay: 1.15, duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
      aria-hidden="true"
    >
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(circle_at_50%_38%,rgba(216,183,88,0.18),transparent_24rem)]"
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1.04 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      />
      <motion.div
        className="relative text-center"
        initial={{ opacity: 0, y: 18, filter: "blur(8px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
      >
        <p className="eyebrow">Welcome to</p>
        <p className="mt-3 font-display text-4xl font-bold leading-none text-ivory-50 sm:text-5xl">
          {siteConfig.hotelName}
        </p>
        <motion.div
          className="gold-hairline mx-auto mt-6 w-56"
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ delay: 0.25, duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
        />
      </motion.div>
    </motion.div>
  );
}
