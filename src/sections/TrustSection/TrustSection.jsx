import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useEffect, useState } from "react";
import { fadeUp, pressTap } from "../../animation/motionVariants";
import SectionShell from "../../components/layout/SectionShell";

const reviews = [
  {
    name: "Resham Kubal",
    rating: "5/5",
    meta: "3 months ago on Google",
    review:
      "We booked this hotel as we had to visit Akkalkot, and our experience was excellent. The hotel in-charge was extremely helpful and guided us in booking a cab to Akkalkot. The staff was very polite, friendly, and cooperative.",
    response:
      "Thanks for the kind words - it's great to know the stay was smooth and enjoyable.",
  },
  {
    name: "Shoumik Bhattacharya",
    guide: "Local Guide - 20 reviews - 38 photos",
    rating: "5/5",
    meta: "3 months ago on Google",
    review:
      "I had a very pleasant experience here. Came here for work but the ambience the staff is amazing, very helpful people. Rooms are spacious and gives you a good feeling. Overall 10 on 10.",
    response:
      "Thanks for the kind words - it's great to know the staff and atmosphere made your visit comfortable.",
  },
  {
    name: "Ajay Rane",
    rating: "5/5",
    meta: "3 months ago on Google",
    review:
      "Neat and clean hotel rooms. Mr Yogesh - Hotel Manager and other staff are cooperative. Food quality is also good. Location not far from railway station or bus stand.",
    response:
      "Appreciate the feedback on cleanliness and cooperation. Glad you found the stay reasonable and the place convenient.",
  },
  {
    name: "Dr. Pranesh Pawaskar",
    rating: "5/5",
    meta: "4 months ago on Google",
    review:
      "Overall it was very nice experience of 6 of us first time in Solapur. Multiple options of rooms available, rooms are clean, services are proper.",
    response:
      "Appreciate the positive feedback on the room options and clean, well-maintained spaces.",
  },
  {
    name: "Mayank Shekhar",
    rating: "5/5",
    meta: "4 months ago on Google",
    review:
      "The hotel is well maintained. The staffs are very helpful and professional. It is budget friendly hotel and situated in the heart of the city. Rooms are clean and spacious.",
    response:
      "Thanks for the kind words - it's great to know the hotel and staff are meeting your expectations.",
  },
];

const reviewVariants = {
  enter: (direction) => ({
    opacity: 0,
    x: direction > 0 ? 64 : -64,
    filter: "blur(8px)",
  }),
  center: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
  },
  exit: (direction) => ({
    opacity: 0,
    x: direction > 0 ? -64 : 64,
    filter: "blur(8px)",
  }),
};

function StarRating() {
  return (
    <div className="flex items-center gap-1 text-gold-200" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, index) => (
        <svg key={index} aria-hidden="true" className="h-4 w-4 fill-current" viewBox="0 0 20 20">
          <path d="m10 1.6 2.5 5.1 5.7.8-4.1 4 1 5.7-5.1-2.7-5.1 2.7 1-5.7-4.1-4 5.7-.8L10 1.6Z" />
        </svg>
      ))}
    </div>
  );
}

function ReviewCard({ review, index, direction, onDragEnd }) {
  return (
    <AnimatePresence mode="wait" custom={direction}>
      <motion.article
        key={review.name}
        custom={direction}
        variants={reviewVariants}
        initial="enter"
        animate="center"
        exit="exit"
        transition={{ duration: 0.58, ease: [0.16, 1, 0.3, 1] }}
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={0.16}
        onDragEnd={onDragEnd}
        className="luxury-card cursor-grab rounded-lg p-5 active:cursor-grabbing sm:p-7 lg:p-8"
      >
        <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="eyebrow">Google Review 0{index + 1}</p>
            <h3 className="mt-3 font-display text-4xl font-semibold leading-none text-ivory-50 sm:text-5xl">
              {review.name}
            </h3>
            {review.guide && (
              <p className="mt-3 text-xs font-semibold uppercase tracking-[0.14em] text-ivory-100/48">
                {review.guide}
              </p>
            )}
          </div>

          <div className="shrink-0 rounded-md border border-gold-200/24 bg-gold-200/10 px-4 py-3 text-left sm:text-right">
            <p className="text-lg font-bold leading-none text-gold-200">{review.rating}</p>
            <p className="mt-2 text-xs font-semibold uppercase tracking-[0.12em] text-ivory-100/56">
              {review.meta}
            </p>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-between gap-4 border-y border-ivory-50/8 py-4">
          <StarRating />
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-gold-200/62">
            Verified Stay
          </p>
        </div>

        <p className="mt-6 text-base leading-8 text-ivory-100/76 sm:text-lg sm:leading-9">
          "{review.review}"
        </p>

        <div className="mt-7 rounded-md border border-ivory-50/10 bg-ivory-50/[0.045] p-4 backdrop-blur-md sm:p-5">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-gold-200/82">
            Owner response
          </p>
          <p className="mt-3 text-sm leading-7 text-ivory-100/68">"{review.response}"</p>
        </div>
      </motion.article>
    </AnimatePresence>
  );
}

export default function TrustSection() {
  const [[activeIndex, direction], setActiveReview] = useState([0, 1]);

  const moveReview = useCallback((step) => {
    setActiveReview(([current]) => [
      (current + step + reviews.length) % reviews.length,
      step,
    ]);
  }, []);

  useEffect(() => {
    const timer = window.setInterval(() => moveReview(1), 7600);
    return () => window.clearInterval(timer);
  }, [moveReview]);

  const handleDragEnd = (_event, info) => {
    if (info.offset.x < -52) {
      moveReview(1);
    }
    if (info.offset.x > 52) {
      moveReview(-1);
    }
  };

  const activeReview = reviews[activeIndex];

  return (
    <SectionShell
      id="trust"
      eyebrow="Guest Reviews"
      title="Guest trust, quietly earned."
      description="Real Google reviews from guests who found clean rooms, helpful staff, and a composed stay in central Solapur."
      className="overflow-visible bg-[radial-gradient(circle_at_82%_18%,rgba(216,183,88,0.075),transparent_24rem)]"
    >
      <motion.div className="mt-12 grid gap-6 lg:mt-14 lg:grid-cols-[minmax(0,1fr)_auto]" variants={fadeUp}>
        <div className="min-w-0 overflow-visible">
          <ReviewCard
            review={activeReview}
            index={activeIndex}
            direction={direction}
            onDragEnd={handleDragEnd}
          />
        </div>

        <div className="flex items-center justify-between gap-4 lg:w-24 lg:flex-col lg:justify-center">
          <motion.button
            type="button"
            className="grid h-12 w-12 place-items-center rounded-md border border-gold-200/30 bg-ink-950/64 text-2xl leading-none text-gold-200 shadow-[0_18px_42px_rgba(0,0,0,0.32)] backdrop-blur-md transition-colors duration-300 hover:border-gold-200/58 hover:bg-gold-200/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-200"
            whileTap={pressTap}
            onClick={() => moveReview(-1)}
            aria-label="Previous review"
          >
            &lt;
          </motion.button>

          <div className="flex gap-2 lg:flex-col">
            {reviews.map((review, index) => (
              <button
                key={review.name}
                type="button"
                className={`h-2.5 rounded-full transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-200 ${
                  index === activeIndex
                    ? "w-8 bg-gold-200 lg:h-8 lg:w-2.5"
                    : "w-2.5 bg-ivory-50/22 hover:bg-gold-200/55 lg:h-2.5"
                }`}
                onClick={() => setActiveReview([index, index > activeIndex ? 1 : -1])}
                aria-label={`Show review from ${review.name}`}
                aria-current={index === activeIndex}
              />
            ))}
          </div>

          <motion.button
            type="button"
            className="grid h-12 w-12 place-items-center rounded-md border border-gold-200/30 bg-ink-950/64 text-2xl leading-none text-gold-200 shadow-[0_18px_42px_rgba(0,0,0,0.32)] backdrop-blur-md transition-colors duration-300 hover:border-gold-200/58 hover:bg-gold-200/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-200"
            whileTap={pressTap}
            onClick={() => moveReview(1)}
            aria-label="Next review"
          >
            &gt;
          </motion.button>
        </div>
      </motion.div>
    </SectionShell>
  );
}
