import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "../../animation/motionVariants";
import SectionShell from "../../components/layout/SectionShell";

const pillars = [
  ["Clean", "Well-kept spaces, fresh rooms, and a stay that feels quietly cared for."],
  ["Central", "A practical Solapur address close to the railway station, bus stand, and city movement."],
  ["Warm", "Helpful staff, smooth guidance, and hospitality that families and business guests remember."],
];

export default function StorytellingSection() {
  return (
    <SectionShell
      id="storytelling"
      eyebrow="The Orient Elite way"
      title="Spaces designed for calm living."
      description="A stay defined by cleanliness, central access, and warm guidance: polished enough to feel special, practical enough to feel effortless."
      size="lg"
      className="overflow-hidden"
    >
      <motion.div className="mt-14 grid gap-5 md:grid-cols-3 lg:mt-16" variants={staggerContainer}>
        {pillars.map(([title, text]) => (
          <motion.article key={title} className="luxury-card rounded-lg p-6 md:p-7" variants={fadeUp}>
            <p className="font-display text-4xl font-bold text-gold-200">{title}</p>
            <p className="mt-5 text-sm leading-7 text-ivory-100/68">{text}</p>
          </motion.article>
        ))}
      </motion.div>
      <div className="pointer-events-none absolute right-0 top-20 h-80 w-80 rounded-full bg-gold-300/10 blur-3xl" />
    </SectionShell>
  );
}
