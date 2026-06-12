import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { fadeUp, hoverLift, staggerContainer } from "../../animation/motionVariants";
import LuxuryContainer from "../../components/layout/LuxuryContainer";
import InstagramButton from "../../components/ui/InstagramButton";
import { siteConfig } from "../../config/site";
import heroImage from "../../assets/orient-elite-hero.png";

const hotelInstagramUrl = "https://www.instagram.com/hotelorientelite?igsh=MTAyY3RsMXZvZDVrZw==";

export default function HeroSection() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end start"] });
  const glowY = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);
  const copyY = useTransform(scrollYProgress, [0, 1], ["0%", "-6%"]);

  return (
    <section ref={sectionRef} id="hero" className="relative min-h-screen overflow-hidden pt-[var(--nav-height)]">
      <div className="absolute inset-0" aria-hidden="true">
        <motion.div
          className="absolute inset-0 bg-[radial-gradient(circle_at_68%_34%,rgba(216,183,88,0.22),transparent_24rem),radial-gradient(circle_at_18%_78%,rgba(187,123,128,0.12),transparent_20rem),linear-gradient(115deg,rgba(5,4,3,0.98)_0%,rgba(15,11,7,0.82)_42%,rgba(35,24,14,0.54)_100%)]"
          animate={{ scale: [1, 1.035, 1], opacity: [0.92, 1, 0.92] }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          style={{ y: glowY }}
          className="absolute right-0 top-16 h-[76vh] w-[66vw] bg-[linear-gradient(135deg,rgba(255,250,240,0.22),rgba(216,183,88,0.1)_34%,rgba(5,4,3,0)_72%)] opacity-75 blur-3xl"
        />
        <div className="absolute left-[8%] top-[18%] h-32 w-px bg-gradient-to-b from-transparent via-gold-200/45 to-transparent" />
        <div className="absolute left-[38%] top-[18%] hidden h-[68vh] w-px bg-gradient-to-b from-transparent via-gold-200/20 to-transparent lg:block" />
        <div className="absolute bottom-0 left-0 h-[58%] w-full bg-gradient-to-t from-ink-950 via-ink-950/50 to-transparent" />
      </div>

      <LuxuryContainer className="relative grid min-h-[calc(100vh-var(--nav-height))] items-center gap-8 py-12 sm:py-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-8">
        <motion.div style={{ y: copyY }} className="order-2 z-20 overflow-visible lg:order-1 lg:-mr-24" variants={staggerContainer} initial="hidden" animate="visible">
          <motion.p className="eyebrow" variants={fadeUp}>
            A refined stay in the heart of Solapur
          </motion.p>
          <motion.h1
            className="display-title relative z-30 mt-5 max-w-[10ch] overflow-visible lg:max-w-[11ch]"
            initial={false}
          >
            {siteConfig.hotelName}
          </motion.h1>
          <motion.p className="body-large mt-7 max-w-[38rem]" variants={fadeUp}>
            Clean spacious rooms, warm service, vegetarian dining, and central Solapur access,
            composed with the quiet confidence of premium hospitality.
          </motion.p>
          <motion.div className="glass-panel mt-9 max-w-xl rounded-lg p-3 sm:flex sm:items-center sm:justify-between sm:gap-4" variants={fadeUp}>
            <div className="px-2 py-2">
              <p className="text-sm font-semibold text-ivory-50">Plan a composed Solapur stay</p>
              <p className="mt-1 text-xs leading-5 text-ivory-100/62">
                <span className="block">Rated {siteConfig.rating} by {siteConfig.reviewCount} guests.</span>
                <span className="block">Check-in from {siteConfig.checkIn}.</span>
              </p>
            </div>
            <div className="flex flex-wrap gap-3 pt-3 sm:pt-0">
              <motion.a
                href="#booking"
                className="inline-flex min-h-12 min-w-[10.75rem] items-center justify-center rounded-md bg-gold-300 px-5 py-3 text-sm font-bold text-ink-950 shadow-glow transition-colors duration-300 hover:bg-gold-200"
                whileHover={hoverLift}
              >
                Reserve Your Stay
              </motion.a>
              <motion.a
                href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                className="inline-flex min-h-12 min-w-[10.75rem] items-center justify-center rounded-md border border-ivory-50/18 px-5 py-3 text-sm font-bold text-ivory-50 transition-colors duration-300 hover:border-gold-200/70 hover:text-gold-200"
                whileHover={hoverLift}
              >
                Call Now
              </motion.a>
              <InstagramButton href={hotelInstagramUrl} label="Instagram" className="min-w-[10.75rem]" />
            </div>
          </motion.div>
        </motion.div>

        <motion.figure
          style={{ y: imageY }}
          className="relative order-1 mx-auto flex w-full max-w-[42rem] items-center justify-center lg:order-2 lg:-ml-4 lg:max-w-none"
          initial={{ opacity: 0, y: 42 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 1.15, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="absolute inset-x-[8%] bottom-[4%] h-1/2 bg-[radial-gradient(ellipse_at_center,rgba(216,183,88,0.18),rgba(216,183,88,0.06)_38%,transparent_70%)] blur-3xl" aria-hidden="true" />
          <div className="absolute inset-x-[4%] bottom-0 h-1/3 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.52),transparent_68%)] blur-2xl" aria-hidden="true" />
          <div className="absolute left-0 top-1/2 z-20 hidden h-3/4 w-1/2 -translate-y-1/2 bg-gradient-to-r from-ink-950/64 via-ink-950/24 to-transparent lg:block" aria-hidden="true" />
          <motion.img
            src={heroImage}
            alt="Hotel Orient Elite illuminated exterior at dusk"
            className="relative z-10 h-auto max-h-[50vh] w-full object-contain brightness-110 saturate-[1.02] contrast-[1.04] drop-shadow-[0_34px_92px_rgba(0,0,0,0.56)] sm:max-h-[62vh] lg:max-h-[calc(100vh-6.5rem)]"
            loading="eager"
            decoding="async"
            fetchPriority="high"
            animate={{ scale: [1, 1.018, 1] }}
            transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          />
          <div className="pointer-events-none absolute inset-0 z-20 bg-[radial-gradient(ellipse_at_center,transparent_48%,rgba(5,4,3,0.2)_86%),linear-gradient(90deg,rgba(5,4,3,0.1),transparent_38%),linear-gradient(180deg,transparent_62%,rgba(5,4,3,0.36))]" aria-hidden="true" />
        </motion.figure>
      </LuxuryContainer>
    </section>
  );
}
