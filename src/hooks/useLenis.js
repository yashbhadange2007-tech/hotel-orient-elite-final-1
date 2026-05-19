import { useEffect, useRef } from "react";
import Lenis from "lenis";
import { ScrollTrigger, refreshScrollSystems, registerScrollTrigger } from "../animation/scrollTrigger";

export function useLenis() {
  const lenisRef = useRef(null);

  useEffect(() => {
    if (typeof window === "undefined") {
      return undefined;
    }

    registerScrollTrigger();

    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - 2 ** (-10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 0.92,
      touchMultiplier: 1.25,
      infinite: false,
      autoRaf: false,
    });

    lenisRef.current = lenis;

    const updateScrollTrigger = () => ScrollTrigger.update();
    lenis.on("scroll", updateScrollTrigger);

    let rafId = 0;
    const raf = (time) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };

    rafId = requestAnimationFrame(raf);
    refreshScrollSystems();

    return () => {
      cancelAnimationFrame(rafId);
      lenis.off("scroll", updateScrollTrigger);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  return lenisRef;
}
