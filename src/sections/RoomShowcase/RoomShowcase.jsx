import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import { fadeUp, hoverLift, pressTap, staggerContainer } from "../../animation/motionVariants";
import SectionShell from "../../components/layout/SectionShell";
import deluxeQueen from "../../assets/rooms/deluxe-queen-bed-ac.png";
import dormitoryRoom from "../../assets/rooms/dormitory-rrom.png";
import executiveDeluxeTwin from "../../assets/rooms/executive-deluxe-twin-bed-ac.png";
import executiveSuite from "../../assets/rooms/executive-suite-ac.png";
import singleNonAc from "../../assets/rooms/single-non-ac.png";

const rooms = [
  {
    id: "executive-deluxe-twin-bed-ac",
    title: "Executive Deluxe Twin Bed AC",
    description:
      "A generous twin-bed room with warm lighting, polished finishes, and the easy comfort expected for family or business stays.",
    image: executiveDeluxeTwin,
    badge: "AC",
    occupancy: "Up to 3 guests",
    comfort: "Twin bed comfort",
    highlights: ["Twin beds", "Work desk", "Premium lighting", "Room service"],
  },
  {
    id: "executive-suite-ac",
    title: "Executive Suite AC",
    description:
      "A composed suite experience with refined proportions, layered lighting, and a restful premium atmosphere for longer stays.",
    image: executiveSuite,
    badge: "AC",
    occupancy: "Up to 4 guests",
    comfort: "Suite comfort",
    highlights: ["Suite layout", "Family friendly", "Warm interiors", "Extended stay"],
  },
  {
    id: "deluxe-queen-bed-ac",
    title: "Deluxe Queen Bed AC",
    description:
      "A calm queen-bed retreat shaped around private comfort, fresh linen, and a softly lit hospitality mood.",
    image: deluxeQueen,
    badge: "AC",
    occupancy: "Up to 2 guests",
    comfort: "Queen bed comfort",
    highlights: ["Queen bed", "Air conditioned", "Seating nook", "Fresh linen"],
  },
  {
    id: "single-non-ac",
    title: "Single Non AC",
    description:
      "A clean, efficient room for solo travelers who want a practical stay with the same attentive hotel care.",
    image: singleNonAc,
    badge: "Non AC",
    occupancy: "1 guest",
    comfort: "Solo comfort",
    highlights: ["Single bed", "Compact layout", "Desk space", "Clean linen"],
  },
  {
    id: "dormitory-stay",
    title: "Dormitory Stay",
    subtitle: "Affordable Group Comfort",
    description:
      "A spacious and clean dormitory-style stay designed for groups, pilgrims, business teams, and budget travelers seeking comfort with practicality.",
    image: dormitoryRoom,
    badge: "Group Stay",
    occupancy: "Group stay",
    comfort: "Affordable group comfort",
    highlights: [
      "Multiple Individual Beds",
      "Spacious Shared Layout",
      "Clean Premium Interiors",
      "Ideal for Groups",
      "Attached Washroom",
      "24x7 Assistance",
    ],
  },
];

function RoomCard({ room, index, onOpen }) {
  return (
    <motion.article
      className="luxury-card group overflow-hidden rounded-lg"
      variants={fadeUp}
      whileHover={hoverLift}
    >
      <button
        type="button"
        className="block w-full cursor-zoom-in text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-200 focus-visible:ring-offset-2 focus-visible:ring-offset-ink-950"
        onClick={() => onOpen(index)}
        aria-label={`Open gallery view for ${room.title}`}
      >
        <div className="relative aspect-[4/3] overflow-hidden rounded-t-lg bg-ink-950">
          <img
            src={room.image}
            alt={`${room.title} at Hotel Orient Elite`}
            className="h-full w-full object-cover object-center transition-transform duration-700 ease-hover group-hover:scale-[1.025]"
            loading="eager"
            decoding="async"
            fetchPriority={index < 3 ? "high" : "auto"}
            sizes="(min-width: 1280px) 44vw, (min-width: 768px) 50vw, 100vw"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-950/56 via-transparent to-ink-950/8" />
          <span className="absolute right-4 top-4 rounded-md border border-gold-200/24 bg-ink-950/72 px-3 py-2 text-xs font-bold uppercase tracking-[0.14em] text-gold-200 backdrop-blur-md">
            {room.badge}
          </span>
        </div>
      </button>

      <div className="p-5 sm:p-6 lg:p-7">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-gold-200/76">
              Room 0{index + 1}
            </p>
            <h3 className="mt-3 font-display text-3xl font-semibold leading-[0.98] text-ivory-50 sm:text-4xl">
              {room.title}
            </h3>
          </div>
          <p className="shrink-0 rounded-md border border-ivory-50/10 bg-ink-950/44 px-3 py-2 text-xs font-semibold text-ivory-100/68">
            {room.occupancy}
          </p>
        </div>

        <p className="mt-5 text-sm leading-7 text-ivory-100/68">{room.description}</p>

        <div className="mt-6 grid grid-cols-2 gap-2">
          {room.highlights.map((item) => (
            <span
              key={item}
              className="rounded-md border border-ivory-50/10 bg-ink-950/42 px-3 py-2 text-xs font-semibold text-ivory-100/66"
            >
              {item}
            </span>
          ))}
        </div>

        <div className="mt-6 flex flex-col gap-4 border-t border-ivory-50/10 pt-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-ivory-100/62">{room.comfort}</p>
          <motion.button
            type="button"
            className="inline-flex min-h-11 items-center justify-center rounded-md border border-gold-200/34 px-5 text-sm font-bold text-gold-200 transition-colors duration-300 hover:border-gold-200/60 hover:bg-gold-200/10 hover:text-gold-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-200 focus-visible:ring-offset-2 focus-visible:ring-offset-ink-950"
            whileTap={pressTap}
            onClick={() => onOpen(index)}
          >
            View Details
          </motion.button>
        </div>
      </div>
    </motion.article>
  );
}

function RoomLightbox({ rooms, activeIndex, onClose, onMove }) {
  const room = activeIndex === null ? null : rooms[activeIndex];

  useEffect(() => {
    if (!room) {
      return undefined;
    }

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
      if (event.key === "ArrowLeft") {
        onMove(-1);
      }
      if (event.key === "ArrowRight") {
        onMove(1);
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose, onMove, room]);

  return (
    <AnimatePresence>
      {room && (
        <motion.div
          className="fixed inset-0 z-50 grid place-items-center overflow-y-auto bg-ink-950/90 p-3 backdrop-blur-xl sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label={`${room.title} gallery`}
        >
          <motion.div
            className="relative w-full max-w-6xl overflow-hidden rounded-lg border border-ivory-50/12 bg-ink-950 shadow-[0_40px_120px_rgba(0,0,0,0.68)]"
            initial={{ opacity: 0, y: 20, scale: 0.985 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.985 }}
            transition={{ duration: 0.34, ease: [0.22, 1, 0.36, 1] }}
            onClick={(event) => event.stopPropagation()}
            onPointerDown={(event) => event.stopPropagation()}
          >
            <div className="relative bg-ink-950">
              <img
                key={room.id}
                src={room.image}
                alt={`${room.title} full room view`}
                className="max-h-[52vh] w-full object-contain sm:max-h-[76vh]"
                decoding="async"
              />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 hidden h-1/2 bg-gradient-to-t from-ink-950/88 via-ink-950/18 to-transparent sm:block" />
            </div>

            <div className="relative z-10 border-t border-ivory-50/10 bg-ink-950 p-5 sm:absolute sm:inset-x-0 sm:bottom-0 sm:border-t-0 sm:bg-transparent sm:p-7">
              <p className="eyebrow">Room 0{activeIndex + 1}</p>
              <h3 className="mt-3 max-w-3xl font-display text-4xl font-semibold leading-none text-ivory-50 sm:text-5xl">
                {room.title}
              </h3>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-ivory-100/72">{room.description}</p>
            </div>

            <div className="absolute right-3 top-3 z-20 flex gap-2 sm:right-4 sm:top-4">
              <button
                type="button"
                className="rounded-md border border-ivory-50/14 bg-ink-950/70 px-4 py-2 text-sm font-semibold text-ivory-50 backdrop-blur-md transition-colors hover:bg-ivory-50/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-200"
                onPointerDown={(event) => {
                  event.preventDefault();
                  event.stopPropagation();
                  onClose();
                }}
                onPointerUp={(event) => {
                  event.preventDefault();
                  event.stopPropagation();
                  onClose();
                }}
                onClick={(event) => {
                  event.preventDefault();
                  event.stopPropagation();
                  onClose();
                }}
              >
                Close
              </button>
            </div>

            <div className="pointer-events-none absolute inset-y-0 left-0 z-20 flex items-center px-2 sm:px-4">
              <button
                type="button"
                className="pointer-events-auto grid h-11 w-11 place-items-center rounded-md border border-ivory-50/14 bg-ink-950/58 text-2xl leading-none text-ivory-50 backdrop-blur-md transition-colors hover:bg-ivory-50/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-200"
                onClick={(event) => {
                  event.stopPropagation();
                  onMove(-1);
                }}
                aria-label="Previous room"
              >
                &lt;
              </button>
            </div>

            <div className="pointer-events-none absolute inset-y-0 right-0 z-20 flex items-center px-2 sm:px-4">
              <button
                type="button"
                className="pointer-events-auto grid h-11 w-11 place-items-center rounded-md border border-ivory-50/14 bg-ink-950/58 text-2xl leading-none text-ivory-50 backdrop-blur-md transition-colors hover:bg-ivory-50/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-200"
                onClick={(event) => {
                  event.stopPropagation();
                  onMove(1);
                }}
                aria-label="Next room"
              >
                &gt;
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default function RoomShowcase() {
  const [activeIndex, setActiveIndex] = useState(null);
  const galleryRooms = useMemo(() => rooms, []);

  const moveLightbox = (direction) => {
    setActiveIndex((current) => {
      if (current === null) {
        return current;
      }
      return (current + direction + galleryRooms.length) % galleryRooms.length;
    });
  };

  return (
    <SectionShell
      id="rooms"
      eyebrow="Rooms"
      title="Curated comfort stays."
      description="Five considered room categories, each shaped around clean interiors, warm lighting, and the quiet ease guests expect at Hotel Orient Elite."
      className="bg-[radial-gradient(circle_at_18%_28%,rgba(216,183,88,0.08),transparent_26rem)]"
      eagerReveal
    >
      <motion.div
        className="mt-14 grid gap-5 md:grid-cols-2 lg:mt-16 xl:gap-6"
        variants={staggerContainer}
      >
        {galleryRooms.map((room, index) => (
          <RoomCard key={room.id} room={room} index={index} onOpen={setActiveIndex} />
        ))}
      </motion.div>

      <motion.div
        className="mt-8 grid gap-3 rounded-lg border border-ivory-50/10 bg-ink-950/36 p-4 sm:grid-cols-4 sm:p-5"
        variants={fadeUp}
      >
        {["Fresh linen", "Warm lighting", "Room service", "Business friendly"].map((item) => (
          <p
            key={item}
            className="rounded-md border border-ivory-50/8 bg-ivory-50/[0.03] px-3 py-2 text-center text-xs font-bold uppercase tracking-[0.14em] text-ivory-100/62"
          >
            {item}
          </p>
        ))}
      </motion.div>

      <RoomLightbox
        rooms={galleryRooms}
        activeIndex={activeIndex}
        onClose={() => setActiveIndex(null)}
        onMove={moveLightbox}
      />
    </SectionShell>
  );
}
