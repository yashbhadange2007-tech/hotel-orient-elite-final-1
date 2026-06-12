import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { fadeUp, staggerContainer } from "../../animation/motionVariants";
import SectionShell from "../../components/layout/SectionShell";
import SectionContactCard from "../../components/ui/SectionContactCard";
import { cx } from "../../utils/classNames";
import rsHallHeroShowcase from "../../assets/hall/rs-hall-hero-showcase.png";
import rsHallStageCloseUp from "../../assets/hall/rs-hall-stage-close-up.png";
import rsHallWideVenue from "../../assets/hall/rs-hall-wide-venue.png";
import rsHallCatering from "../../assets/hall/rs-hall-catering.png";
import rsHallBanquetRounds from "../../assets/hall/rs-hall-banquet-rounds.png";

const hallImages = [
  {
    title: "RS Hall Hero Showcase",
    label: "Floral Stage",
    src: rsHallHeroShowcase,
    alt: "Riddhi Siddhi Hall floral stage setup with a carved sofa and warm lighting.",
    caption: "A composed floral stage with soft gold light, ideal for engagement moments and family portraits.",
  },
  {
    title: "RS Hall Wide Venue Experience",
    label: "Venue Setting",
    src: rsHallWideVenue,
    alt: "Wide Riddhi Siddhi Hall seating arrangement with aisle symmetry and event stage.",
    caption: "A balanced seating plan with a clear central aisle for intimate ceremonies and hosted gatherings.",
  },
  {
    title: "RS Hall Premium Stage Close-Up",
    label: "Stage Detail",
    src: rsHallStageCloseUp,
    alt: "Close view of the Riddhi Siddhi Hall floral backdrop, sofa, and warm event lighting.",
    caption: "Refined stage detailing with warm hospitality lighting and a calm, celebratory atmosphere.",
  },
  {
    title: "RS Hall Catering Presentation",
    label: "Catering Detail",
    src: rsHallCatering,
    alt: "Riddhi Siddhi Hall catering counter with polished serveware and warm hospitality lighting.",
    caption: "A refined catering presentation with polished service details for composed family celebrations.",
  },
  {
    title: "RS Hall Banquet Seating",
    label: "Banquet Setting",
    src: rsHallBanquetRounds,
    alt: "Riddhi Siddhi Hall banquet seating with round tables, warm ceiling light, and polished interiors.",
    caption: "Warm banquet seating arranged with symmetry, intimacy, and a quietly elegant dining rhythm.",
  },
];

const eventNotes = [
  "Engagement ceremonies",
  "Birthday evenings",
  "Family gatherings",
  "Intimate celebrations",
];

function HallImageCard({ image, index, className, onOpen }) {
  return (
    <motion.button
      type="button"
      className={cx(
        "group relative w-full overflow-hidden rounded-lg border border-ivory-50/10 bg-ink-900/72 p-2 text-left shadow-[0_34px_100px_rgba(0,0,0,0.5)] outline-none transition duration-700 ease-luxury hover:border-gold-200/34 focus-visible:border-gold-200/60",
        className,
      )}
      variants={fadeUp}
      whileHover={{ y: -6, scale: 1.01 }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      onClick={() => onOpen(index)}
      aria-label={`Open ${image.title}`}
    >
      <span className="pointer-events-none absolute -inset-12 bg-[radial-gradient(circle_at_50%_18%,rgba(216,183,88,0.24),transparent_22rem)] opacity-70 blur-2xl transition-opacity duration-700 group-hover:opacity-100" />
      <span className="pointer-events-none absolute inset-0 rounded-lg bg-gradient-to-br from-ivory-50/10 via-transparent to-gold-200/10" />
      <span className="relative block overflow-hidden rounded-md bg-ink-950/82">
        <img
          src={image.src}
          alt={image.alt}
          className="h-full w-full object-contain transition duration-[1200ms] ease-luxury group-hover:scale-[1.018]"
          loading="eager"
          decoding="async"
          fetchPriority="high"
          sizes="(min-width: 1024px) 58vw, 100vw"
        />
        <span className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(216,183,88,0.08),rgba(5,4,3,0.04)_42%,rgba(5,4,3,0.2)),radial-gradient(circle_at_50%_18%,rgba(255,250,240,0.12),transparent_18rem)] mix-blend-screen" />
        <span className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-ink-950/58 to-transparent" />
      </span>
      <span className="relative mt-4 flex items-center justify-between gap-4 px-1 pb-1">
        <span>
          <span className="block text-xs font-bold uppercase tracking-[0.18em] text-gold-200/78">{image.label}</span>
          <span className="mt-1 block font-display text-2xl font-semibold leading-none text-ivory-50 sm:text-3xl">
            {image.title.replace("RS Hall ", "")}
          </span>
        </span>
        <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-gold-200/22 bg-ink-950/62 text-lg text-gold-200 transition duration-500 group-hover:border-gold-200/48 group-hover:bg-gold-200/10">
          +
        </span>
      </span>
    </motion.button>
  );
}

export default function RiddhiSiddhiHall() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [touchStart, setTouchStart] = useState(null);
  const activeImage = activeIndex === null ? null : hallImages[activeIndex];

  const openLightbox = (index) => setActiveIndex(index);
  const closeLightbox = () => setActiveIndex(null);
  const showPrevious = () => setActiveIndex((activeIndex + hallImages.length - 1) % hallImages.length);
  const showNext = () => setActiveIndex((activeIndex + 1) % hallImages.length);

  const handleTouchEnd = (event) => {
    if (touchStart === null) return;
    const delta = touchStart - event.changedTouches[0].clientX;

    if (Math.abs(delta) > 42) {
      delta > 0 ? showNext() : showPrevious();
    }

    setTouchStart(null);
  };

  return (
    <SectionShell
      id="hall"
      eyebrow="Elegant Celebrations & Gatherings"
      title="Gatherings framed with elegance."
      description="Riddhi Siddhi Hall is an intimate setting for engagements, birthdays, and family occasions, composed with floral detail, warm light, and attentive hosting."
      className="overflow-hidden bg-[radial-gradient(circle_at_52%_18%,rgba(216,183,88,0.16),transparent_30rem),linear-gradient(180deg,rgba(5,4,3,0),rgba(216,183,88,0.035)_44%,rgba(5,4,3,0))]"
      size="lg"
      eagerReveal
    >
      <motion.div className="mt-14 grid gap-8 lg:mt-18 lg:grid-cols-[1.08fr_0.92fr] lg:items-center" variants={staggerContainer}>
        <HallImageCard image={hallImages[0]} index={0} className="[&>span:nth-child(3)]:aspect-[4/3]" onOpen={openLightbox} />

        <motion.div className="relative flex h-full items-center" variants={fadeUp}>
          <div className="glass-panel w-full rounded-lg p-6 sm:p-8 lg:p-10">
            <p className="eyebrow">Warm, composed, celebratory</p>
            <p className="mt-5 font-display text-4xl font-semibold leading-[1.02] text-ivory-50 sm:text-5xl">
              A graceful setting for moments held close.
            </p>
            <p className="mt-5 text-base leading-8 text-ivory-100/70 sm:text-lg">
              RS Hall brings a refined sense of ceremony to smaller celebrations. Soft lighting, floral stage styling, and attentive hospitality create a calm atmosphere for families, guests, and hosts to gather with ease.
            </p>
            <div className="gold-hairline my-7" />
            <div className="grid gap-3 sm:grid-cols-2">
              {eventNotes.map((note) => (
                <div key={note} className="rounded-md border border-ivory-50/10 bg-ivory-50/[0.035] px-4 py-3 text-sm font-semibold text-ivory-50/82">
                  {note}
                </div>
              ))}
            </div>
            <SectionContactCard label="Riddhi Siddhi Hall" phone="+91 70586 48181" className="mt-6" />
          </div>
        </motion.div>
      </motion.div>

      <motion.div className="mt-8 grid gap-8 lg:mt-10 lg:grid-cols-[0.86fr_1.14fr] lg:items-center" variants={staggerContainer}>
        <motion.div className="order-2 flex h-full flex-col justify-center lg:order-1" variants={fadeUp}>
          <p className="max-w-xl font-display text-3xl font-semibold leading-[1.05] text-ivory-50 sm:text-4xl">
            Designed for presence without excess.
          </p>
          <p className="mt-5 max-w-2xl text-base leading-8 text-ivory-100/66">
            The hall balances symmetry, polished seating, and a dedicated stage so every arrival, blessing, toast, and photograph feels naturally composed.
          </p>
        </motion.div>

        <HallImageCard image={hallImages[1]} index={1} className="order-1 [&>span:nth-child(3)]:aspect-[16/10] lg:order-2" onOpen={openLightbox} />
      </motion.div>

      <motion.div className="mt-8 grid gap-5 sm:grid-cols-[0.95fr_1.05fr] sm:items-center lg:mt-10" variants={staggerContainer}>
        <HallImageCard image={hallImages[2]} index={2} className="[&>span:nth-child(3)]:aspect-[4/3]" onOpen={openLightbox} />
        <motion.div className="luxury-card flex min-h-[18rem] flex-col justify-center rounded-lg p-6 sm:p-8" variants={fadeUp}>
          <p className="eyebrow">Premium stage detail</p>
          <p className="mt-4 max-w-xl font-display text-4xl font-semibold leading-[1.02] text-ivory-50">
            Floral warmth, polished hosting, and photographs that feel timeless.
          </p>
          <p className="mt-5 max-w-xl text-sm leading-7 text-ivory-100/64 sm:text-base">
            A calm luxury backdrop for ring ceremonies, cake-cutting moments, blessings, and close family celebrations.
          </p>
        </motion.div>
      </motion.div>

      <motion.div className="mt-8 grid gap-5 sm:grid-cols-2 lg:mt-10 lg:gap-8" variants={staggerContainer}>
        <HallImageCard image={hallImages[3]} index={3} className="[&>span:nth-child(3)]:aspect-[4/3]" onOpen={openLightbox} />
        <HallImageCard image={hallImages[4]} index={4} className="[&>span:nth-child(3)]:aspect-[4/3]" onOpen={openLightbox} />
      </motion.div>

      <AnimatePresence>
        {activeImage && (
          <motion.div
            className="fixed inset-0 z-[90] grid place-items-center bg-ink-950/92 p-3 backdrop-blur-xl sm:p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
          >
            <motion.div
              className="relative w-full max-w-6xl overflow-hidden rounded-lg border border-ivory-50/12 bg-ink-950 shadow-[0_40px_120px_rgba(0,0,0,0.62)]"
              initial={{ opacity: 0, y: 26, scale: 0.985 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.985 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              onClick={(event) => event.stopPropagation()}
              onTouchStart={(event) => setTouchStart(event.touches[0].clientX)}
              onTouchEnd={handleTouchEnd}
            >
              <div className="relative bg-[radial-gradient(circle_at_50%_10%,rgba(216,183,88,0.18),transparent_24rem)]">
                <img
                  src={activeImage.src}
                  alt={activeImage.alt}
                  className="max-h-[68vh] w-full object-contain"
                  decoding="async"
                />
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_12%,rgba(255,250,240,0.1),transparent_22rem)] mix-blend-screen" />
              </div>
              <div className="border-t border-ivory-50/10 bg-[linear-gradient(135deg,rgba(255,250,240,0.07),rgba(216,183,88,0.025)),rgba(8,6,4,0.88)] p-5 sm:p-7">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-gold-200/78">{activeImage.label}</p>
                <p className="mt-2 font-display text-3xl font-semibold leading-none text-ivory-50 sm:text-4xl">{activeImage.title}</p>
                <p className="mt-3 max-w-2xl text-sm leading-7 text-ivory-100/70">{activeImage.caption}</p>
              </div>
              <button className="absolute right-4 top-4 rounded-md border border-ivory-50/14 bg-ink-950/72 px-4 py-2 text-sm font-semibold text-ivory-50" type="button" onClick={closeLightbox}>
                Close
              </button>
              <button className="absolute left-4 top-1/2 hidden h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-ivory-50/14 bg-ink-950/70 text-2xl text-ivory-50 sm:grid" type="button" onClick={showPrevious} aria-label="Previous RS Hall image">
                ‹
              </button>
              <button className="absolute right-4 top-1/2 hidden h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-ivory-50/14 bg-ink-950/70 text-2xl text-ivory-50 sm:grid" type="button" onClick={showNext} aria-label="Next RS Hall image">
                ›
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </SectionShell>
  );
}
