import { useState } from "react";
import { Loader, LuxuryFooter, Navigation, PageShell } from "./components";
import BookingExperience from "./sections/BookingExperience";
import CatenaCafe from "./sections/CatenaCafe";
import ContactSection from "./sections/ContactSection/ContactSection";
import HeroSection from "./sections/HeroSection";
import OjasRestaurant from "./sections/OjasRestaurant";
import RiddhiSiddhiHall from "./sections/RiddhiSiddhiHall";
import RoomShowcase from "./sections/RoomShowcase";
import StorytellingSection from "./sections/StorytellingSection";
import TrustSection from "./sections/TrustSection";

export default function App() {
  const [showLoader, setShowLoader] = useState(true);

  return (
    <PageShell>
      {showLoader && <Loader onComplete={() => setShowLoader(false)} />}
      <Navigation />
      <main id="top" className="relative z-10">
        <HeroSection />
        <StorytellingSection />
        <RoomShowcase />
        <OjasRestaurant />
        <CatenaCafe />
        <RiddhiSiddhiHall />
        <TrustSection />
        <ContactSection />
        <BookingExperience />
      </main>
      <LuxuryFooter />
    </PageShell>
  );
}
