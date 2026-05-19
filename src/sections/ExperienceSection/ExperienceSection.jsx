import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "../../animation/motionVariants";
import CinematicGalleryStrip from "../../components/gallery/CinematicGalleryStrip";
import SectionShell from "../../components/layout/SectionShell";

const journeys = [
  ["For families", "Comfortable rooms, vegetarian dining, and a welcoming atmosphere for easy Solapur stays."],
  ["For business", "Clean rooms, central access, and practical comfort for focused work travel."],
  ["For city stays", "A calm base for appointments, shopping, and movement across Solapur."],
];

const stayGallery = ["Arrival", "Quiet corridors", "City convenience"].map((title) => ({
  title,
  kicker: "Stay Experience",
  caption: "A calm, practical hospitality rhythm built around cleanliness, comfort, and central Solapur access.",
  tone: "bg-[radial-gradient(circle_at_50%_22%,rgba(216,183,88,0.16),transparent_12rem),linear-gradient(180deg,rgba(255,250,240,0.07),rgba(5,4,3,0.66)),repeating-linear-gradient(90deg,rgba(255,250,240,0.05)_0_1px,transparent_1px_5rem)]",
}));

export default function ExperienceSection() {
  return (
    <SectionShell
      id="stay"
      eyebrow="Stay Experience"
      title="A refined Solapur stay, made effortless."
      description="Arrive smoothly, rest well, dine comfortably, and move through the city with the quiet assurance of thoughtful hospitality."
      className="bg-[radial-gradient(circle_at_78%_24%,rgba(216,183,88,0.1),transparent_24rem)]"
    >
      <motion.div className="mt-14 grid gap-5 md:grid-cols-3 lg:mt-16" variants={staggerContainer}>
        {journeys.map(([title, text]) => (
          <motion.article key={title} className="luxury-card rounded-lg p-6 md:p-7" variants={fadeUp}>
            <p className="font-display text-4xl font-bold text-ivory-50">{title}</p>
            <p className="mt-5 text-sm leading-7 text-ivory-100/68">{text}</p>
          </motion.article>
        ))}
      </motion.div>
      <CinematicGalleryStrip items={stayGallery} className="mt-6" />
    </SectionShell>
  );
}
