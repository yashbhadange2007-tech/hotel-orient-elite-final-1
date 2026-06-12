import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "../../animation/motionVariants";
import SectionShell from "../../components/layout/SectionShell";
import InstagramButton from "../../components/ui/InstagramButton";
import SectionContactCard from "../../components/ui/SectionContactCard";
import catenaCafeImage from "../../assets/catena-cafe.png";

const catenaInstagramUrl = "https://www.instagram.com/catenacoffeesolapur?igsh=MWN2cXB1aWV3Y2EzZg==";

const cafeNotes = [
  ["Rooftop Social Lounge", "Warm lighting, city views, and relaxed seating for lingering conversations."],
  ["Modern Cafe Mood", "Aesthetic corners, cozy tables, and an easy evening rhythm inside the hotel."],
  ["Premium Gatherings", "A polished spot for friends, families, coffee dates, and casual celebrations."],
];

export default function CatenaCafe() {
  return (
    <SectionShell
      id="catena"
      eyebrow="Catena Cafe"
      title="Rooftop evenings with a quieter glow."
      description="Catena brings a modern cafe atmosphere to Hotel Orient Elite, shaped for coffee, conversation, and unhurried moments under warm ambient light."
      className="overflow-hidden bg-[radial-gradient(circle_at_78%_22%,rgba(111,124,97,0.18),transparent_24rem),radial-gradient(circle_at_18%_72%,rgba(216,183,88,0.09),transparent_22rem)]"
      size="lg"
    >
      <motion.div className="mt-14 grid gap-8 lg:mt-16 lg:grid-cols-[1.14fr_0.86fr] lg:items-center" variants={staggerContainer}>
        <motion.figure
          className="group relative overflow-hidden rounded-lg border border-ivory-50/10 bg-ink-950/82 p-2 shadow-[0_36px_110px_rgba(0,0,0,0.52)]"
          variants={fadeUp}
          whileHover={{ y: -6, scale: 1.006 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="pointer-events-none absolute -inset-10 bg-[radial-gradient(circle_at_50%_18%,rgba(216,183,88,0.23),transparent_24rem)] opacity-70 blur-2xl transition-opacity duration-700 group-hover:opacity-100" />
          <div className="relative aspect-[4/3] overflow-hidden rounded-md bg-ink-950 sm:aspect-[16/10]">
            <img
              src={catenaCafeImage}
              alt="Catena Cafe rooftop social lounge with warm lights, green seating, and floral wall decor."
              className="h-full w-full object-cover object-[50%_48%] transition duration-[1200ms] ease-luxury group-hover:scale-[1.025]"
              loading="eager"
              decoding="async"
              fetchPriority="high"
              sizes="(min-width: 1024px) 58vw, 100vw"
            />
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(216,183,88,0.08),transparent_42%,rgba(5,4,3,0.2)),radial-gradient(circle_at_62%_16%,rgba(255,250,240,0.12),transparent_20rem)] mix-blend-screen" />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-ink-950/54 to-transparent" />
          </div>
          <figcaption className="relative mt-4 flex flex-col gap-1 px-1 pb-1 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-gold-200/78">Primary Cafe Experience</p>
              <p className="mt-1 font-display text-3xl font-semibold leading-none text-ivory-50">Catena Cafe</p>
            </div>
            <p className="max-w-sm text-sm leading-6 text-ivory-100/62">Warm, social, modern, and quietly cinematic.</p>
          </figcaption>
        </motion.figure>

        <motion.div className="grid gap-4" variants={staggerContainer}>
          {cafeNotes.map(([title, text]) => (
            <motion.article key={title} className="luxury-card rounded-lg p-6 md:p-7" variants={fadeUp}>
              <h3 className="font-display text-3xl font-semibold leading-none text-ivory-50 sm:text-4xl">{title}</h3>
              <p className="mt-4 text-sm leading-7 text-ivory-100/66">{text}</p>
            </motion.article>
          ))}
          <SectionContactCard label="Catena Cafe" phone="+91 88570 37171" />
          <motion.div variants={fadeUp}>
            <InstagramButton href={catenaInstagramUrl} label="Catena Instagram" className="w-full sm:w-auto" />
          </motion.div>
        </motion.div>
      </motion.div>
    </SectionShell>
  );
}
