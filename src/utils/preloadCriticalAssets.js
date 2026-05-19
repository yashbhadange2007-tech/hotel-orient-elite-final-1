import heroImage from "../assets/orient-elite-hero.png";
import executiveDeluxeTwin from "../assets/rooms/executive-deluxe-twin-bed-ac.png";
import executiveSuite from "../assets/rooms/executive-suite-ac.png";
import deluxeQueen from "../assets/rooms/deluxe-queen-bed-ac.png";
import singleNonAc from "../assets/rooms/single-non-ac.png";
import dormitoryRoom from "../assets/rooms/dormitory-rrom.png";
import rsHallHeroShowcase from "../assets/hall/rs-hall-hero-showcase.png";
import rsHallStageCloseUp from "../assets/hall/rs-hall-stage-close-up.png";
import rsHallWideVenue from "../assets/hall/rs-hall-wide-venue.png";

const criticalImages = [
  heroImage,
  executiveDeluxeTwin,
  executiveSuite,
  deluxeQueen,
  singleNonAc,
  dormitoryRoom,
  rsHallHeroShowcase,
  rsHallWideVenue,
  rsHallStageCloseUp,
];

export function preloadCriticalAssets() {
  if (typeof document === "undefined") {
    return;
  }

  criticalImages.forEach((href) => {
    if (document.head.querySelector(`link[rel="preload"][href="${href}"]`)) {
      return;
    }

    const link = document.createElement("link");
    link.rel = "preload";
    link.as = "image";
    link.href = href;
    link.fetchPriority = "high";
    document.head.appendChild(link);
  });
}
