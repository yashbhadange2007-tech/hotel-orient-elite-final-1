import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "../../animation/motionVariants";
import SectionShell from "../../components/layout/SectionShell";

const reviews = [
  {
    name: "Resham Kubal",
    platform: "Google",
    rating: "5/5",
    time: "3 months ago",
    review:
      "“We booked this hotel as we had to visit Akkalkot, and our experience was excellent. The hotel in-charge was extremely helpful and guided us in booking a cab to Akkalkot. The staff was very polite, friendly, and cooperative.”",
    response:
      "“Thanks for the kind words — it's great to know the stay was smooth and enjoyable.”",
  },
  {
    name: "Bhuvana Pillai",
    platform: "Google",
    rating: "5/5",
    time: "4 months ago",
    review:
      "“We were searching half an hour to find a Deluxe budget range hotel to stay in Solapur. As we are from Chennai we don't know how to find a decent one.”",
    response:
      "“Happy to hear you found a welcoming and practical place in Solapur. The family-friendly feel and good location are a plus.”",
  },
  {
    name: "MugdhaPatil",
    platform: "Tripadvisor",
    rating: "5/5",
    time: "3 years ago",
    review: "“Great stay, clean rooms. We ordered room service and the food was good.”",
  },
  {
    name: "Ajay Rane",
    platform: "Google",
    rating: "5/5",
    time: "3 months ago",
    review:
      "“Neat and clean hotel rooms. Mr Yogesh - Hotel Manager and other Staff are cooperative. Food quality is also good.”",
    response: "“Appreciate the feedback on cleanliness and cooperation.”",
  },
  {
    name: "Dr. Pranesh Pawaskar",
    platform: "Google",
    rating: "5/5",
    time: "4 months ago",
    review:
      "“Overall it was Very Nice experience of 6 of us first time in Solapur. Multiple options of rooms available, rooms are clean, services are proper.”",
    response:
      "“Appreciate the positive feedback on the room options and clean, well-maintained spaces.”",
  },
  {
    name: "Mayank Shekhar",
    platform: "Google",
    rating: "5/5",
    time: "4 months ago",
    review:
      "“The hotel is well maintained. The staffs are very helpful and professional. It is budget friendly hotel and situated in the heart of the city.”",
  },
];

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

function PlatformMark({ platform }) {
  const isTripadvisor = platform === "Tripadvisor";

  return (
    <span className="inline-flex items-center gap-2 rounded-md border border-ivory-50/10 bg-ink-950/52 px-3 py-2 text-xs font-bold uppercase tracking-[0.14em] text-ivory-100/68">
      <span className={isTripadvisor ? "text-emerald-300" : "text-gold-200"}>{isTripadvisor ? "TA" : "G"}</span>
      {platform}
    </span>
  );
}

function ReviewCard({ review, index }) {
  return (
    <motion.article
      className="group relative overflow-hidden rounded-lg border border-ivory-50/10 bg-[linear-gradient(145deg,rgba(255,250,240,0.068),rgba(216,183,88,0.018)),rgba(9,7,5,0.72)] p-6 shadow-[0_28px_90px_rgba(0,0,0,0.38)] backdrop-blur-xl transition duration-500 hover:border-gold-200/26 sm:p-7"
      variants={fadeUp}
      whileHover={{ y: -6, scale: 1.008 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full bg-gold-200/10 blur-3xl transition-opacity duration-700 group-hover:opacity-90" />
      <div className="relative flex items-start justify-between gap-4">
        <div>
          <p className="font-display text-3xl font-semibold leading-none text-ivory-50">{review.name}</p>
          <p className="mt-2 text-xs font-bold uppercase tracking-[0.14em] text-ivory-100/46">
            {review.time} · {review.rating}
          </p>
        </div>
        <PlatformMark platform={review.platform} />
      </div>

      <div className="relative mt-5 flex items-center justify-between gap-4 border-y border-ivory-50/8 py-4">
        <StarRating />
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-gold-200/62">Review 0{index + 1}</p>
      </div>

      <p className="relative mt-5 text-sm leading-7 text-ivory-100/74">{review.review}</p>

      {review.response && (
        <div className="relative mt-6 rounded-md border border-gold-200/16 bg-gold-200/[0.045] p-4">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-gold-200/72">Owner Response</p>
          <p className="mt-3 text-sm leading-7 text-ivory-100/68">{review.response}</p>
        </div>
      )}
    </motion.article>
  );
}

export default function TrustSection() {
  return (
    <SectionShell
      id="trust"
      eyebrow="Guest Reviews"
      title="Guest trust, quietly earned."
      description="Genuine notes from Google and Tripadvisor, presented with the same calm clarity guests remember from their stay."
      className="overflow-hidden bg-[radial-gradient(circle_at_82%_18%,rgba(216,183,88,0.12),transparent_28rem),radial-gradient(circle_at_12%_78%,rgba(255,250,240,0.045),transparent_24rem)]"
    >
      <motion.div className="mt-14 grid gap-5 lg:mt-16 lg:grid-cols-[0.8fr_1.2fr]" variants={staggerContainer}>
        <motion.aside className="glass-panel rounded-lg p-7 sm:p-8 lg:sticky lg:top-28 lg:self-start" variants={fadeUp}>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-gold-200/78">Verified sentiment</p>
          <p className="mt-5 font-display text-6xl font-semibold leading-none text-gold-200">5/5</p>
          <div className="mt-4">
            <StarRating />
          </div>
          <p className="mt-6 text-sm leading-7 text-ivory-100/68">
            Guests consistently mention clean rooms, cooperative staff, proper service, food quality, and a practical Solapur location.
          </p>
          <div className="gold-hairline my-7" />
          <div className="grid gap-3">
            {["Google reviews", "Tripadvisor stay note", "Owner responses included"].map((item) => (
              <p key={item} className="rounded-md border border-ivory-50/10 bg-ivory-50/[0.035] px-4 py-3 text-sm font-semibold text-ivory-50/76">
                {item}
              </p>
            ))}
          </div>
        </motion.aside>

        <motion.div className="grid gap-4 md:grid-cols-2" variants={staggerContainer}>
          {reviews.map((review, index) => (
            <ReviewCard key={`${review.platform}-${review.name}`} review={review} index={index} />
          ))}
        </motion.div>
      </motion.div>
    </SectionShell>
  );
}
