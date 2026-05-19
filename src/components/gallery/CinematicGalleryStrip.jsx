import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { fadeUp, staggerContainer } from "../../animation/motionVariants";
import { cx } from "../../utils/classNames";

export default function CinematicGalleryStrip({ items, className }) {
  const [active, setActive] = useState(null);

  return (
    <>
      <motion.div className={cx("grid gap-4 sm:grid-cols-3", className)} variants={staggerContainer}>
        {items.map((item) => (
          <motion.button
            key={item.title}
            className="cinematic-media group aspect-[4/5] overflow-hidden p-0 text-left"
            type="button"
            variants={fadeUp}
            onClick={() => setActive(item)}
          >
            {item.src ? (
              <img
                src={item.src}
                alt={item.title}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.025]"
                loading={item.priority ? "eager" : "lazy"}
                decoding="async"
                fetchPriority={item.priority ? "high" : "auto"}
              />
            ) : (
              <div className={cx("absolute inset-0 transition-transform duration-700 group-hover:scale-[1.025]", item.tone)} />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-ink-950/82 via-ink-950/18 to-transparent" />
            <div className="relative z-10 flex h-full flex-col justify-end p-5">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-gold-200/76">{item.kicker}</p>
              <p className="mt-2 font-display text-3xl font-semibold leading-none text-ivory-50">{item.title}</p>
            </div>
          </motion.button>
        ))}
      </motion.div>

      <AnimatePresence>
        {active && (
          <motion.div
            className="fixed inset-0 z-50 grid place-items-center bg-ink-950/88 p-4 backdrop-blur-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
          >
            <motion.div
              className="cinematic-media relative w-full max-w-4xl overflow-hidden rounded-lg"
              initial={{ opacity: 0, y: 24, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 18, scale: 0.98 }}
              onClick={(event) => event.stopPropagation()}
            >
              {active.src ? (
                <img src={active.src} alt={active.title} className="aspect-[16/10] w-full object-contain" />
              ) : (
                <div className={cx("aspect-[16/10]", active.tone)} />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950/86 via-transparent to-ink-950/16" />
              <div className="absolute inset-x-0 bottom-0 p-6">
                <p className="eyebrow">{active.kicker}</p>
                <p className="mt-3 font-display text-4xl font-semibold text-ivory-50">{active.title}</p>
                <p className="mt-3 max-w-xl text-sm leading-7 text-ivory-100/68">{active.caption}</p>
              </div>
              <button className="absolute right-4 top-4 rounded-md border border-ivory-50/14 bg-ink-950/64 px-4 py-2 text-sm text-ivory-50" type="button" onClick={() => setActive(null)}>
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
