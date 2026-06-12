import { useEffect } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { siteConfig } from "../../config/site";

const HOLD_MS = 2000;
const FADE_MS = 800;

export default function Loader({ onComplete }) {
  const prefersReducedMotion = useReducedMotion();
  const fadeDuration = prefersReducedMotion ? 0.01 : FADE_MS / 1000;

  useEffect(() => {
    const timer = window.setTimeout(() => onComplete?.(), HOLD_MS + (prefersReducedMotion ? 0 : FADE_MS));
    return () => window.clearTimeout(timer);
  }, [onComplete, prefersReducedMotion]);

  return (
    <motion.div
      className="fixed inset-0 z-50 grid place-items-center overflow-hidden bg-ink-950 will-change-opacity"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0, pointerEvents: "none" }}
      transition={{ delay: HOLD_MS / 1000, duration: fadeDuration, ease: [0.22, 1, 0.36, 1] }}
      aria-hidden="true"
    >
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(circle_at_50%_38%,rgba(216,183,88,0.2),transparent_24rem)] will-change-transform"
        initial={{ opacity: 1, scale: 1 }}
        animate={prefersReducedMotion ? { opacity: 1, scale: 1 } : { opacity: [1, 0.94, 1], scale: [1, 1.025, 1.04] }}
        transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
      />
      <motion.div
        className="relative text-center"
        initial={{ opacity: 1, y: 0 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <p className="eyebrow">Welcome to</p>
        <p className="mt-3 font-display text-4xl font-bold leading-none text-ivory-50 sm:text-5xl">
          {siteConfig.hotelName}
        </p>
        <motion.div
          className="gold-hairline mx-auto mt-6 w-56"
          initial={{ scaleX: 1, opacity: 1 }}
          animate={{ scaleX: 1, opacity: 1 }}
        />
      </motion.div>
    </motion.div>
  );
}
