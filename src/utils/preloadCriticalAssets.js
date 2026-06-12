import heroImage from "../assets/orient-elite-hero.png";
import executiveDeluxeTwin from "../assets/rooms/executive-deluxe-twin-bed-ac.png";
import executiveSuite from "../assets/rooms/executive-suite-ac.png";
import rsHallHeroShowcase from "../assets/hall/rs-hall-hero-showcase.png";
import rsHallStageCloseUp from "../assets/hall/rs-hall-stage-close-up.png";
import rsHallWideVenue from "../assets/hall/rs-hall-wide-venue.png";
import rsHallCatering from "../assets/hall/rs-hall-catering.png";
import rsHallBanquetRounds from "../assets/hall/rs-hall-banquet-rounds.png";
import ojasMainImage from "../assets/ojas-restaurant-main.png";
import ojasBoothsImage from "../assets/ojas-restaurant-booths.png";
import ojasDishOne from "../assets/ojas/ojas-dish-1.png";
import ojasDishTwo from "../assets/ojas/ojas-dish-2.png";
import ojasDishThree from "../assets/ojas/ojas-dish-3.png";

const criticalImages = [heroImage, executiveDeluxeTwin, executiveSuite];

const warmImages = [
  ojasMainImage,
  ojasBoothsImage,
  ojasDishOne,
  ojasDishTwo,
  ojasDishThree,
  rsHallHeroShowcase,
  rsHallWideVenue,
  rsHallStageCloseUp,
  rsHallCatering,
  rsHallBanquetRounds,
];

function preloadImage(href) {
  if (document.head.querySelector(`link[rel="preload"][href="${href}"]`)) {
    return;
  }

  const link = document.createElement("link");
  link.rel = "preload";
  link.as = "image";
  link.href = href;
  link.fetchPriority = "high";
  document.head.appendChild(link);
}

function warmImage(src) {
  const image = new Image();
  image.decoding = "async";
  image.src = src;
}

export function preloadCriticalAssets() {
  if (typeof document === "undefined") {
    return;
  }

  criticalImages.forEach(preloadImage);

  const warmAssets = () => {
    warmImages.forEach(warmImage);
  };

  if ("requestIdleCallback" in window) {
    window.requestIdleCallback(warmAssets, { timeout: 1800 });
  } else {
    window.setTimeout(warmAssets, 700);
  }
}
