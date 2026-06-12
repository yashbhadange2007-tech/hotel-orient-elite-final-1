import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "../../animation/motionVariants";
import SectionShell from "../../components/layout/SectionShell";
import InstagramButton from "../../components/ui/InstagramButton";
import LuxuryButton from "../../components/ui/LuxuryButton";
import { siteConfig } from "../../config/site";

const phoneHref = `tel:+91${siteConfig.phone.replace(/\D/g, "").replace(/^0/, "")}`;
const hotelInstagramUrl = "https://www.instagram.com/hotelorientelite?igsh=MTAyY3RsMXZvZDVrZw==";
const whatsappHref = "https://wa.me/917058757171?text=Hello%20Hotel%20Orient%20Elite%2C%20I%20would%20like%20help%20with%20location%20and%20directions.";
const mapsQuery = encodeURIComponent(`${siteConfig.hotelName}, ${siteConfig.address}`);
const mapsHref = `https://www.google.com/maps/search/?api=1&query=${mapsQuery}`;
const directionsHref = `https://www.google.com/maps/dir/?api=1&destination=${mapsQuery}`;
const mapEmbedSrc = `https://www.google.com/maps?q=${mapsQuery}&output=embed`;

const landmarks = [
  "Central Solapur access",
  "Near Budhavar Peth city movement",
  "Convenient for family and business stays",
];

export default function ContactSection() {
  return (
    <SectionShell
      id="location"
      eyebrow="Arrive Effortlessly"
      title="A central address, easy to reach."
      description="Direct calling, WhatsApp assistance, and map-ready directions make every arrival at Hotel Orient Elite feel composed."
      className="overflow-hidden bg-[radial-gradient(circle_at_24%_18%,rgba(216,183,88,0.13),transparent_26rem),radial-gradient(circle_at_82%_72%,rgba(255,250,240,0.035),transparent_22rem)]"
      size="lg"
    >
      <motion.div className="glass-panel mt-14 grid gap-7 rounded-lg p-4 md:p-6 lg:mt-16 lg:grid-cols-[1.08fr_0.92fr] lg:items-stretch lg:p-8" variants={staggerContainer}>
        <motion.div className="order-1 relative min-h-[20rem] overflow-hidden rounded-lg border border-gold-200/18 bg-ink-950 shadow-[0_34px_100px_rgba(0,0,0,0.48)] lg:order-none" variants={fadeUp}>
          <div className="pointer-events-none absolute -inset-10 z-10 bg-[radial-gradient(circle_at_50%_10%,rgba(216,183,88,0.18),transparent_22rem)] opacity-80" />
          <iframe
            title="Google Map showing Hotel Orient Elite in Solapur"
            src={mapEmbedSrc}
            className="relative z-0 h-full min-h-[20rem] w-full border-0 grayscale-[18%] sepia-[12%]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </motion.div>

        <motion.div className="order-2 flex flex-col justify-center p-1 sm:p-3 lg:p-5" variants={fadeUp}>
          <p className="eyebrow">Located in the heart of Solapur</p>
          <h3 className="mt-5 font-display text-4xl font-semibold leading-[1.02] text-ivory-50 sm:text-5xl">
            Your premium stay destination, easy to reach.
          </h3>
          <p className="mt-5 text-base leading-8 text-ivory-100/68">
            {siteConfig.address}
          </p>

          <div className="gold-hairline my-7" />

          <div className="grid gap-3 text-sm text-ivory-100/70">
            {landmarks.map((item) => (
              <p key={item} className="rounded-md border border-ivory-50/10 bg-ink-950/42 px-4 py-3">
                {item}
              </p>
            ))}
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <LuxuryButton as="a" href={directionsHref} target="_blank" rel="noreferrer">
              Get Directions
            </LuxuryButton>
            <a
              className="inline-flex min-h-12 items-center justify-center rounded-md border border-gold-200/24 bg-ink-950/58 px-6 text-sm font-bold text-ivory-50 transition duration-300 hover:border-gold-200/52 hover:bg-gold-200/10"
              href={mapsHref}
              target="_blank"
              rel="noreferrer"
            >
              Open in Google Maps
            </a>
            <a
              className="inline-flex min-h-12 items-center justify-center rounded-md border border-ivory-50/12 bg-ivory-50/[0.035] px-6 text-sm font-bold text-ivory-50 transition duration-300 hover:border-gold-200/42 hover:bg-ivory-50/[0.065]"
              href={whatsappHref}
              target="_blank"
              rel="noreferrer"
            >
              WhatsApp
            </a>
            <a
              className="inline-flex min-h-12 items-center justify-center rounded-md border border-ivory-50/12 bg-ivory-50/[0.035] px-6 text-sm font-bold text-ivory-50 transition duration-300 hover:border-gold-200/42 hover:bg-ivory-50/[0.065]"
              href={phoneHref}
            >
              Call <span className="phone-number phone-number-inline ml-1">{siteConfig.phone}</span>
            </a>
            <InstagramButton href={hotelInstagramUrl} label="Hotel Instagram" />
          </div>
        </motion.div>
      </motion.div>
    </SectionShell>
  );
}
