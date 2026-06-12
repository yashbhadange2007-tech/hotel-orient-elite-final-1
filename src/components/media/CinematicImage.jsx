import { motion } from "framer-motion";
import { imageReveal, viewportOnce } from "../../animation/motionVariants";
import { cx } from "../../utils/classNames";

export default function CinematicImage({
  src,
  alt,
  className,
  imageClassName,
  priority = false,
  sizes = "(min-width: 1024px) 50vw, 100vw",
}) {
  return (
    <motion.figure
      className={cx("gpu-layer overflow-hidden rounded-lg bg-ink-800", className)}
      variants={imageReveal}
      initial={false}
      animate="visible"
      viewport={viewportOnce}
    >
      <img
        className={cx("h-full w-full object-cover", imageClassName)}
        src={src}
        alt={alt}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        fetchPriority={priority ? "high" : "auto"}
        sizes={sizes}
      />
    </motion.figure>
  );
}
