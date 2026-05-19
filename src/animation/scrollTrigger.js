import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

let registered = false;

export function registerScrollTrigger() {
  if (registered || typeof window === "undefined") {
    return;
  }

  gsap.registerPlugin(ScrollTrigger);
  registered = true;
}

export function refreshScrollSystems() {
  if (typeof window === "undefined") {
    return;
  }

  requestAnimationFrame(() => {
    ScrollTrigger.refresh();
  });
}

export function createPinnedScene(trigger, options = {}) {
  registerScrollTrigger();

  return ScrollTrigger.create({
    trigger,
    start: "top top",
    end: "+=120%",
    pin: true,
    anticipatePin: 1,
    invalidateOnRefresh: true,
    ...options,
  });
}

export function createRevealTimeline(trigger, timelineOptions = {}, scrollOptions = {}) {
  registerScrollTrigger();

  return gsap.timeline({
    defaults: {
      ease: "power3.out",
      duration: 1,
    },
    scrollTrigger: {
      trigger,
      start: "top 76%",
      end: "bottom 20%",
      toggleActions: "play none none reverse",
      invalidateOnRefresh: true,
      ...scrollOptions,
    },
    ...timelineOptions,
  });
}

export { gsap, ScrollTrigger };
