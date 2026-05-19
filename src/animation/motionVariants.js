export const luxuryEase = [0.22, 1, 0.36, 1];
export const cinematicEase = [0.16, 1, 0.3, 1];

export const viewportOnce = {
  once: true,
  amount: 0.28,
  margin: "0px 0px -12% 0px",
};

export const pageTransition = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: { duration: 0.8, ease: cinematicEase },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.45, ease: luxuryEase },
  },
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.9, ease: cinematicEase },
  },
};

export const fadeUp = {
  hidden: { opacity: 0, y: 42 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: cinematicEase },
  },
};

export const slowReveal = {
  hidden: { opacity: 0, y: 72, filter: "blur(10px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 1.35, ease: cinematicEase },
  },
};

export const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.08,
    },
  },
};

export const imageReveal = {
  hidden: {
    clipPath: "inset(18% 0% 18% 0%)",
    scale: 1.08,
    opacity: 0,
  },
  visible: {
    clipPath: "inset(0% 0% 0% 0%)",
    scale: 1,
    opacity: 1,
    transition: { duration: 1.4, ease: cinematicEase },
  },
};

export const hoverLift = {
  y: -6,
  scale: 1.015,
  transition: { duration: 0.35, ease: luxuryEase },
};

export const pressTap = {
  scale: 0.985,
  transition: { duration: 0.16, ease: luxuryEase },
};
