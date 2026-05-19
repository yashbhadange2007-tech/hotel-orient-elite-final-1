import { motion } from "framer-motion";
import { hoverLift, pressTap } from "../../animation/motionVariants";
import { cx } from "../../utils/classNames";

export default function LuxuryButton({ as: Tag = "button", className, children, ...props }) {
  return (
    <motion.div whileHover={hoverLift} whileTap={pressTap} className="inline-flex">
      <Tag
        className={cx(
          "inline-flex min-h-12 items-center justify-center rounded-md border border-gold-300/40 bg-gold-300 px-6 text-sm font-bold text-ink-950 shadow-glow transition-colors duration-300 ease-hover hover:bg-gold-200 focus:outline-none focus:ring-2 focus:ring-gold-200 focus:ring-offset-2 focus:ring-offset-ink-950",
          className,
        )}
        {...props}
      >
        {children}
      </Tag>
    </motion.div>
  );
}
