import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "../../animation/motionVariants";
import SectionShell from "../../components/layout/SectionShell";
import SectionContactCard from "../../components/ui/SectionContactCard";
import { cx } from "../../utils/classNames";
import ojasMainImage from "../../assets/ojas-restaurant-main.png";
import ojasBoothsImage from "../../assets/ojas-restaurant-booths.png";

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
          className="h-full w-full object-contain transition duration-[1200ms] ease-luxury group-hover:scale-[1.018]"
          loading={priority ? "eager" : "lazy"}
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

export default function OjasRestaurant() {
  return (
    <SectionShell
      id="ojas"
      eyebrow="Ojas Veg Restaurant"
      title="Vegetarian dining with warm hospitality."
      description="Quiet interiors, attentive service, and thoughtfully prepared vegetarian meals create a clean dining experience for families, travellers, and unhurried conversations."
      className="overflow-hidden bg-[radial-gradient(circle_at_18%_26%,rgba(196,108,69,0.13),transparent_22rem),radial-gradient(circle_at_82%_70%,rgba(216,183,88,0.09),transparent_24rem)]"
      size="lg"
    >
      <motion.div className="mt-14 grid gap-8 lg:mt-16 lg:grid-cols-[0.92fr_1.08fr] lg:items-center" variants={staggerContainer}>
        <motion.div className="grid gap-4" variants={staggerContainer}>
          {diningNotes.map(([title, text]) => (
            <motion.article key={title} className="luxury-card rounded-lg p-6 md:p-7" variants={fadeUp}>
              <h3 className="font-display text-3xl font-semibold leading-none text-ivory-50 sm:text-4xl">{title}</h3>
              <p className="mt-4 text-sm leading-7 text-ivory-100/66">{text}</p>
            </motion.article>
          ))}
          <SectionContactCard label="Ojas Veg Restaurant" phone="+91 70586 48181" />
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
    </SectionShell>
  );
}
