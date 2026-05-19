import { motion } from "framer-motion";
import { hoverLift, pressTap } from "../../animation/motionVariants";
import { cx } from "../../utils/classNames";

function PhoneIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-4 w-4"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6.7 3.8 8.9 3c.9-.3 1.8.1 2.2.9l1.1 2.3c.3.7.2 1.5-.4 2l-1.2 1.1c.9 1.8 2.3 3.2 4.1 4.1l1.1-1.2c.5-.6 1.3-.7 2-.4l2.3 1.1c.8.4 1.2 1.3.9 2.2l-.8 2.2c-.3.8-1 1.3-1.8 1.3C10.8 18.6 5.4 13.2 5.4 5.6c0-.8.5-1.5 1.3-1.8Z"
      />
    </svg>
  );
}

export default function SectionContactCard({ label, phone, className }) {
  const tel = phone.replace(/\s/g, "");

  return (
    <motion.div
      className={cx(
        "group rounded-lg border border-gold-200/20 bg-[linear-gradient(135deg,rgba(255,250,240,0.07),rgba(216,183,88,0.025)),rgba(8,6,4,0.68)] p-5 shadow-[0_24px_70px_rgba(0,0,0,0.32)] backdrop-blur-xl",
        className,
      )}
      whileHover={hoverLift}
    >
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-gold-200/76">{label}</p>
          <a
            href={`tel:${tel}`}
            className="mt-2 inline-flex items-center gap-2 font-display text-2xl font-semibold leading-none text-ivory-50 transition-colors duration-300 group-hover:text-gold-100"
          >
            <PhoneIcon />
            {phone}
          </a>
        </div>
        <motion.a
          href={`tel:${tel}`}
          className="inline-flex min-h-11 items-center justify-center gap-2 rounded-md border border-gold-200/34 bg-gold-200/8 px-5 text-sm font-bold text-gold-200 transition-colors duration-300 hover:border-gold-200/60 hover:bg-gold-200/14 hover:text-gold-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-200 focus-visible:ring-offset-2 focus-visible:ring-offset-ink-950"
          whileTap={pressTap}
        >
          <PhoneIcon />
          Call Now
        </motion.a>
      </div>
    </motion.div>
  );
}
