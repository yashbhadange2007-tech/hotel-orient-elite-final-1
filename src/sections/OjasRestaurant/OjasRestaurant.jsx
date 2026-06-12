import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { fadeUp, staggerContainer } from "../../animation/motionVariants";
import SectionShell from "../../components/layout/SectionShell";
import SectionContactCard from "../../components/ui/SectionContactCard";
import { cx } from "../../utils/classNames";
import ojasMainImage from "../../assets/ojas-restaurant-main.png";
import ojasBoothsImage from "../../assets/ojas-restaurant-booths.png";
import ojasDishOne from "../../assets/ojas/ojas-dish-1.png";
import ojasDishTwo from "../../assets/ojas/ojas-dish-2.png";
import ojasDishThree from "../../assets/ojas/ojas-dish-3.png";
import ojasRestaurantVideo from "../../assets/ojas/ojas-restaurant-video.mp4";

const instagramUrl = "https://www.instagram.com/ojasveg_restaurant?igsh=OTcweGoxb3h4Zms=";

const diningNotes = [
  ["Pure vegetarian", "Thoughtfully prepared meals in a clean, family-friendly setting."],
  ["Warm hospitality", "Polished service with the ease and comfort of a trusted hotel restaurant."],
  ["Calm interiors", "Wood textures, warm lighting, and uncluttered seating for relaxed dining."],
];

const restaurantImages = [
  {
    src: ojasMainImage,
    title: "Polished Dining Room",
    alt: "Ojas Veg Restaurant dining area with warm wooden partitions and neatly arranged tables.",
  },
  {
    src: ojasBoothsImage,
    title: "Clean Booth Seating",
    alt: "Ojas Veg Restaurant booth seating with warm lighting, wooden textures, and clean table settings.",
  },
];

const culinaryImages = [
  {
    src: ojasDishOne,
    alt: "Ojas Kitchen gallery image 1.",
  },
  {
    src: ojasDishTwo,
    alt: "Ojas Kitchen gallery image 2.",
  },
  {
    src: ojasDishThree,
    alt: "Ojas Kitchen gallery image 3.",
  },
];

function InstagramIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-4 w-4"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="1.7"
    >
      <rect x="4.25" y="4.25" width="15.5" height="15.5" rx="4.4" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.8 8.2h.01" />
      <circle cx="12" cy="12" r="3.55" />
    </svg>
  );
}

function RestaurantImageCard({ image, className, priority = false }) {
  return (
    <motion.figure
      className={cx(
        "group relative overflow-hidden rounded-lg border border-ivory-50/10 bg-[linear-gradient(145deg,rgba(255,250,240,0.075),rgba(216,183,88,0.02)),rgba(10,7,5,0.74)] p-2 shadow-[0_34px_100px_rgba(0,0,0,0.44)]",
        className,
      )}
      variants={fadeUp}
      whileHover={{ y: -5, scale: 1.006 }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="pointer-events-none absolute -inset-10 bg-[radial-gradient(circle_at_48%_18%,rgba(216,183,88,0.18),transparent_22rem)] opacity-80 blur-2xl transition-opacity duration-700 group-hover:opacity-100" />
      <div className="relative aspect-[4/3] overflow-hidden rounded-md bg-ink-950/78">
        <img
          src={image.src}
          alt={image.alt}
          className="h-full w-full object-cover transition duration-[1200ms] ease-luxury group-hover:scale-[1.018]"
          loading="eager"
          decoding="async"
          fetchPriority={priority ? "high" : "auto"}
          sizes="(min-width: 1024px) 48vw, 100vw"
        />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(216,183,88,0.07),transparent_44%,rgba(5,4,3,0.14)),radial-gradient(circle_at_50%_14%,rgba(255,250,240,0.1),transparent_18rem)] mix-blend-screen" />
      </div>
      <figcaption className="relative px-1 pb-1 pt-4">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-gold-200/74">Ojas Veg Restaurant</p>
        <p className="mt-1 font-display text-2xl font-semibold leading-none text-ivory-50 sm:text-3xl">{image.title}</p>
      </figcaption>
    </motion.figure>
  );
}

function CulinaryImageCard({ image, index }) {
  const isPriority = index < 3;

  return (
    <motion.figure
      className="group relative overflow-hidden rounded-lg border border-ivory-50/10 bg-[linear-gradient(150deg,rgba(255,250,240,0.07),rgba(216,183,88,0.018)),rgba(7,5,4,0.72)] p-2 shadow-[0_30px_88px_rgba(0,0,0,0.38)]"
      variants={fadeUp}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="pointer-events-none absolute -inset-8 bg-[radial-gradient(circle_at_46%_16%,rgba(216,183,88,0.2),transparent_18rem)] opacity-0 blur-2xl transition-opacity duration-700 group-hover:opacity-100" />
      <div className="relative aspect-[4/3] overflow-hidden rounded-md bg-ink-950">
        <img
          src={image.src}
          alt={image.alt}
          className="h-full w-full object-contain transition duration-[1400ms] ease-luxury group-hover:scale-[1.025]"
          loading="eager"
          decoding="async"
          fetchPriority={isPriority ? "high" : "auto"}
          sizes="(min-width: 1024px) 28vw, (min-width: 640px) 33vw, 100vw"
        />
      </div>
      <span className="sr-only">Culinary image {index + 1}</span>
    </motion.figure>
  );
}

function OjasInstagramButton() {
  return (
    <motion.a
      href={instagramUrl}
      target="_blank"
      rel="noreferrer"
      className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-md border border-gold-200/32 bg-[linear-gradient(135deg,rgba(216,183,88,0.16),rgba(255,250,240,0.035))] px-4 text-[0.72rem] font-bold uppercase tracking-[0.12em] text-gold-100 shadow-[0_18px_52px_rgba(0,0,0,0.28)] transition duration-500 ease-luxury hover:border-gold-100/70 hover:bg-gold-200/18 hover:text-ivory-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-200 focus-visible:ring-offset-2 focus-visible:ring-offset-ink-950 xs:gap-3 xs:px-5 xs:text-sm xs:tracking-[0.16em]"
      whileHover={{ y: -3 }}
      whileTap={{ scale: 0.985 }}
    >
      <InstagramIcon />
      <span>Explore On Instagram</span>
      <span className="hidden h-px w-6 bg-gold-100/56 transition-all duration-500 group-hover:w-9 xs:block" />
    </motion.a>
  );
}

function OjasCraftVideo({ onOpen }) {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;

    if (!video) {
      return undefined;
    }

    const playVideo = () => {
      const playback = video.play();
      if (playback?.catch) {
        playback.catch(() => {});
      }
    };

    video.load();
    playVideo();
    video.addEventListener("canplay", playVideo);

    return () => {
      video.removeEventListener("canplay", playVideo);
    };
  }, []);

  return (
    <button
      type="button"
      className="group relative block w-full overflow-hidden rounded-md bg-ink-950 text-left outline-none focus-visible:ring-2 focus-visible:ring-gold-200 focus-visible:ring-offset-2 focus-visible:ring-offset-ink-950"
      onClick={onOpen}
      aria-label="Open Ojas Veg Restaurant video"
    >
      <video
        ref={videoRef}
        className="aspect-video h-full w-full object-cover transition duration-[1200ms] ease-luxury group-hover:scale-[1.018]"
        src={ojasRestaurantVideo}
        poster={ojasDishThree}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-label="Cinematic food preparation at Ojas Veg Restaurant"
      />
      <span className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(5,4,3,0.02),transparent_45%,rgba(5,4,3,0.48)),radial-gradient(circle_at_50%_12%,rgba(216,183,88,0.13),transparent_18rem)]" />
      <span className="pointer-events-none absolute bottom-5 left-5 inline-flex min-h-11 items-center gap-3 rounded-md border border-gold-200/34 bg-ink-950/72 px-4 text-xs font-bold uppercase tracking-[0.16em] text-gold-100 shadow-[0_18px_52px_rgba(0,0,0,0.34)] backdrop-blur-md transition duration-500 group-hover:border-gold-100/70 group-hover:bg-gold-200/12">
        <span className="grid h-7 w-7 place-items-center rounded-full border border-gold-200/36 text-[0.62rem]">Play</span>
        Watch Craft Film
      </span>
    </button>
  );
}

function OjasVideoLightbox({ isOpen, onClose }) {
  const videoRef = useRef(null);
  const frameRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!isOpen) return undefined;

    const handleKey = (event) => {
      if (event.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [isOpen, onClose]);

  useEffect(() => {
    if (!isOpen || !videoRef.current) return;

    setIsLoading(true);
    const playback = videoRef.current.play();
    if (playback?.catch) playback.catch(() => {});
  }, [isOpen]);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      const playback = video.play();
      if (playback?.catch) playback.catch(() => {});
    } else {
      video.pause();
    }
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = !video.muted;
    setIsMuted(video.muted);
  };

  const seekVideo = (event) => {
    const video = videoRef.current;
    if (!video || !duration) return;

    const nextTime = (Number(event.target.value) / 100) * duration;
    video.currentTime = nextTime;
    setProgress(Number(event.target.value));
  };

  const toggleFullscreen = () => {
    const frame = frameRef.current;
    if (!frame) return;

    if (document.fullscreenElement) {
      document.exitFullscreen?.();
    } else {
      frame.requestFullscreen?.();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[90] grid place-items-center bg-ink-950/92 p-3 backdrop-blur-xl sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            ref={frameRef}
            className="relative w-full max-w-4xl overflow-hidden rounded-lg border border-ivory-50/12 bg-ink-950 shadow-[0_40px_120px_rgba(0,0,0,0.62)]"
            initial={{ opacity: 0, y: 26, scale: 0.985 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.985 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            onClick={(event) => event.stopPropagation()}
          >
            <div className="relative bg-[radial-gradient(circle_at_50%_10%,rgba(216,183,88,0.18),transparent_24rem)]">
              {isLoading && (
                <div className="absolute inset-0 z-10 grid place-items-center bg-ink-950/82">
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-gold-100">Preparing Film</p>
                </div>
              )}
              <video
                ref={videoRef}
                className="mx-auto max-h-[72vh] w-auto max-w-full bg-ink-950 object-contain"
                src={ojasRestaurantVideo}
                poster={ojasDishThree}
                playsInline
                preload="auto"
                onCanPlay={() => setIsLoading(false)}
                onWaiting={() => setIsLoading(true)}
                onPlaying={() => {
                  setIsLoading(false);
                  setIsPlaying(true);
                }}
                onPause={() => setIsPlaying(false)}
                onLoadedMetadata={(event) => setDuration(event.currentTarget.duration || 0)}
                onTimeUpdate={(event) => {
                  const video = event.currentTarget;
                  if (video.duration) setProgress((video.currentTime / video.duration) * 100);
                }}
              />
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_12%,rgba(255,250,240,0.1),transparent_22rem)] mix-blend-screen" />
            </div>

            <div className="border-t border-ivory-50/10 bg-[linear-gradient(135deg,rgba(255,250,240,0.07),rgba(216,183,88,0.025)),rgba(8,6,4,0.9)] p-4 sm:p-5">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                <button className="rounded-md border border-gold-200/28 bg-gold-200/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-gold-100 transition hover:border-gold-100/70" type="button" onClick={togglePlay}>
                  {isPlaying ? "Pause" : "Play"}
                </button>
                <button className="rounded-md border border-ivory-50/14 bg-ink-950/62 px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-ivory-50 transition hover:border-gold-200/50" type="button" onClick={toggleMute}>
                  {isMuted ? "Unmute" : "Mute"}
                </button>
                <input
                  className="h-1 flex-1 accent-gold-200"
                  type="range"
                  min="0"
                  max="100"
                  step="0.1"
                  value={progress}
                  onChange={seekVideo}
                  aria-label="Seek Ojas restaurant video"
                />
                <button className="rounded-md border border-ivory-50/14 bg-ink-950/62 px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-ivory-50 transition hover:border-gold-200/50" type="button" onClick={toggleFullscreen}>
                  Fullscreen
                </button>
              </div>
            </div>

            <button className="absolute right-4 top-4 rounded-md border border-ivory-50/14 bg-ink-950/72 px-4 py-2 text-sm font-semibold text-ivory-50" type="button" onClick={onClose}>
              Close
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default function OjasRestaurant() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <SectionShell
      id="ojas"
      eyebrow="Ojas Veg Restaurant"
      title="Vegetarian dining with warm hospitality."
      description="Quiet interiors, attentive service, and thoughtfully prepared vegetarian meals create a clean dining experience for families, travellers, and unhurried conversations."
      className="overflow-hidden bg-[radial-gradient(circle_at_18%_26%,rgba(196,108,69,0.13),transparent_22rem),radial-gradient(circle_at_82%_70%,rgba(216,183,88,0.09),transparent_24rem)]"
      size="lg"
      eagerReveal
    >
      <motion.div className="mt-14 grid gap-8 lg:mt-16 lg:grid-cols-[0.92fr_1.08fr] lg:items-center" variants={staggerContainer}>
        <motion.div className="grid gap-4" variants={staggerContainer}>
          {diningNotes.map(([title, text]) => (
            <motion.article key={title} className="luxury-card rounded-lg p-6 md:p-7" variants={fadeUp}>
              <h3 className="font-display text-3xl font-semibold leading-none text-ivory-50 sm:text-4xl">{title}</h3>
              <p className="mt-4 text-sm leading-7 text-ivory-100/66">{text}</p>
            </motion.article>
          ))}
          <SectionContactCard
            label="Ojas Veg Restaurant"
            phone="+91 70586 48181"
            phoneClassName="font-sans text-[1.38rem] font-medium tracking-[0.11em] text-gold-100 sm:text-[1.55rem]"
          />
        </motion.div>

        <div className="grid gap-5 sm:grid-cols-2 lg:gap-6">
          {restaurantImages.map((image, index) => (
            <RestaurantImageCard
              key={image.title}
              image={image}
              priority={index === 0}
            />
          ))}
        </div>
      </motion.div>

      <motion.div
        className="mt-16 grid gap-8 lg:mt-20 lg:grid-cols-[1.04fr_0.96fr] lg:items-end"
        variants={staggerContainer}
      >
        <motion.div variants={fadeUp}>
          <p className="eyebrow">From The Ojas Kitchen</p>
          <h3 className="mt-4 max-w-2xl font-display text-4xl font-semibold leading-[1.04] text-ivory-50 sm:text-5xl lg:text-6xl">
            Crafted vegetarian plates, served with quiet theatre.
          </h3>
        </motion.div>
        <motion.div className="flex flex-col gap-5 sm:items-end" variants={fadeUp}>
          <p className="max-w-xl text-sm leading-7 text-ivory-100/66 sm:text-right">
            A curated glimpse of signature preparations, warm table service, and the polished pace of a pure vegetarian dining room.
          </p>
          <OjasInstagramButton />
        </motion.div>
      </motion.div>

      <motion.div className="mt-8 grid gap-4 sm:grid-cols-3 sm:items-stretch lg:mt-10 lg:gap-5" variants={staggerContainer}>
        {culinaryImages.map((image, index) => (
          <CulinaryImageCard key={image.src} image={image} index={index} />
        ))}
      </motion.div>

      <motion.div
        className="mt-10 grid gap-6 rounded-lg border border-ivory-50/10 bg-[linear-gradient(135deg,rgba(255,250,240,0.06),rgba(216,183,88,0.018)),rgba(7,5,4,0.68)] p-3 shadow-[0_34px_100px_rgba(0,0,0,0.34)] backdrop-blur-xl lg:grid-cols-[1.22fr_0.78fr] lg:items-center lg:p-4"
        variants={fadeUp}
      >
        <div className="relative overflow-hidden rounded-md bg-ink-950">
          <OjasCraftVideo onOpen={() => setIsVideoOpen(true)} />
        </div>
        <div className="px-2 pb-3 lg:px-5 lg:pb-0">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold-200/76">Chef Moment</p>
          <h3 className="mt-3 font-display text-3xl font-semibold leading-none text-ivory-50 sm:text-4xl">
            Preparation with calm, craft, and warmth.
          </h3>
          <p className="mt-4 text-sm leading-7 text-ivory-100/66">
            The motion stays intimate and atmospheric, adding kitchen craft to the restaurant story without overpowering the section.
          </p>
        </div>
      </motion.div>
      <OjasVideoLightbox isOpen={isVideoOpen} onClose={() => setIsVideoOpen(false)} />
    </SectionShell>
  );
}
