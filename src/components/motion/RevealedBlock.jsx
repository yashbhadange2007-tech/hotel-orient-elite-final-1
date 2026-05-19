import { motion } from "framer-motion";
import { fadeUp, viewportOnce } from "../../animation/motionVariants";
import { cx } from "../../utils/classNames";

export default function RevealedBlock({ as = "div", className, variants = fadeUp, children }) {
  const MotionTag = motion[as] ?? motion.div;

  return (
    <MotionTag
      className={cx("gpu-layer", className)}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
    >
      {children}
    </MotionTag>
  );
}
