import LuxuryContainer from "../layout/LuxuryContainer";
import { siteConfig } from "../../config/site";

export default function LuxuryFooter() {
  return (
    <footer className="relative z-10 border-t border-ivory-50/10 py-10 text-sm text-ivory-100/62">
      <LuxuryContainer className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <p className="font-display text-2xl font-bold text-ivory-50">{siteConfig.hotelName}</p>
        <p>{siteConfig.address}</p>
      </LuxuryContainer>
    </footer>
  );
}
