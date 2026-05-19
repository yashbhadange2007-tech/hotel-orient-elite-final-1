import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import LuxuryContainer from "../layout/LuxuryContainer";
import { siteConfig } from "../../config/site";
import { cx } from "../../utils/classNames";

const navItems = [
  ["Stay", "stay"],
  ["Dining", "ojas"],
  ["Cafe", "catena"],
  ["Events", "hall"],
  ["Reviews", "trust"],
  ["Location", "location"],
  ["Book", "booking"],
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const updateNav = () => setIsScrolled(window.scrollY > 18);
    updateNav();
    window.addEventListener("scroll", updateNav, { passive: true });
    return () => window.removeEventListener("scroll", updateNav);
  }, []);

  return (
    <header
      className={cx(
        "fixed inset-x-0 top-0 z-40 border-b transition-all duration-500 ease-cinematic",
        isScrolled
          ? "border-ivory-50/10 bg-ink-950/72 shadow-luxury backdrop-blur-2xl"
          : "border-transparent bg-ink-950/12 backdrop-blur-md",
      )}
    >
      <LuxuryContainer className="flex h-[var(--nav-height)] items-center justify-between gap-6">
        <a href="#top" className="group min-w-0" aria-label="Hotel Orient Elite home">
          <span className="block truncate font-display text-2xl font-bold leading-none text-ivory-50">
            {siteConfig.hotelName}
          </span>
        </a>
        <nav className="hidden items-center gap-7 text-sm font-semibold text-ivory-100/72 md:flex">
          {navItems.map(([item, id]) => (
            <a
              key={item}
              href={`#${id}`}
              className="relative transition-colors duration-300 ease-hover after:absolute after:-bottom-2 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-gold-200 after:transition-transform after:duration-300 hover:text-gold-200 hover:after:scale-x-100"
            >
              {item}
            </a>
          ))}
        </nav>
        <button
          className="grid h-11 w-11 place-items-center rounded-md border border-ivory-50/12 bg-ivory-50/5 md:hidden"
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((value) => !value)}
        >
          <span className="flex w-5 flex-col gap-1.5">
            <span className={cx("h-px bg-ivory-50 transition-transform", isOpen && "translate-y-1 rotate-45")} />
            <span className={cx("h-px bg-ivory-50 transition-opacity", isOpen && "opacity-0")} />
            <span className={cx("h-px bg-ivory-50 transition-transform", isOpen && "-translate-y-1 -rotate-45")} />
          </span>
        </button>
      </LuxuryContainer>
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            className="border-t border-ivory-50/10 bg-ink-950/88 px-gutter py-6 shadow-luxury backdrop-blur-2xl md:hidden"
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex flex-col gap-5 text-lg font-semibold text-ivory-50">
              {navItems.map(([item, id]) => (
                <a key={item} href={`#${id}`} onClick={() => setIsOpen(false)}>
                  {item}
                </a>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
