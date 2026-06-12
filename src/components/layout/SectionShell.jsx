import { motion } from "framer-motion";
import { fadeUp, staggerContainer, viewportOnce } from "../../animation/motionVariants";
import { cx } from "../../utils/classNames";
import LuxuryContainer from "./LuxuryContainer";

export default function SectionShell({
  id,
  eyebrow,
  title,
  description,
  children,
  className,
  eagerReveal = false,
  size = "md",
}) {
  const sectionClass = size === "lg" ? "section-frame-lg" : "section-frame";

  return (
    <motion.section
      id={id}
      className={cx(sectionClass, "scroll-mt-24", className)}
      variants={staggerContainer}
      initial={false}
      animate="visible"
      viewport={eagerReveal ? undefined : viewportOnce}
      data-section={id}
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-ivory-50/8 to-transparent" />
      <LuxuryContainer>
        {(eyebrow || title || description) && (
          <motion.header className="max-w-4xl" variants={fadeUp}>
            {eyebrow && <p className="eyebrow">{eyebrow}</p>}
            {title && <h2 className="section-title mt-5">{title}</h2>}
            {description && <p className="body-large mt-6">{description}</p>}
          </motion.header>
        )}
        {children}
      </LuxuryContainer>
    </motion.section>
  );
}
