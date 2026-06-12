import { motion } from "framer-motion";

function InstagramIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-4 w-4"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="1.7"
    >
      <rect x="4.25" y="4.25" width="15.5" height="15.5" rx="4.4" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.8 8.2h.01" />
      <circle cx="12" cy="12" r="3.55" />
    </svg>
  );
}

export default function InstagramButton({ href, label = "Instagram", className = "" }) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={`group inline-flex min-h-12 items-center justify-center gap-2 rounded-md border border-gold-200/32 bg-[linear-gradient(135deg,rgba(216,183,88,0.16),rgba(255,250,240,0.035))] px-4 text-[0.72rem] font-bold uppercase tracking-[0.12em] text-gold-100 shadow-[0_18px_52px_rgba(0,0,0,0.28)] transition duration-500 ease-luxury hover:border-gold-100/70 hover:bg-gold-200/18 hover:text-ivory-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-200 focus-visible:ring-offset-2 focus-visible:ring-offset-ink-950 xs:gap-3 xs:px-5 xs:text-sm xs:tracking-[0.16em] ${className}`}
      whileHover={{ y: -3 }}
      whileTap={{ scale: 0.985 }}
    >
      <InstagramIcon />
      <span>{label}</span>
      <span className="hidden h-px w-6 bg-gold-100/56 transition-all duration-500 group-hover:w-9 xs:block" />
    </motion.a>
  );
}
