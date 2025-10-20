import { CtaSection } from "@/components/CtaSection";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/HeroSection";
import { JourneySection } from "@/components/JourneySection";
import { KpiGrid } from "@/components/KpiGrid";
import { NavBar } from "@/components/NavBar";
import { PersonaSection } from "@/components/PersonaSection";
import { RoadmapSection } from "@/components/RoadmapSection";

export default function Page() {
  return (
    <>
      <NavBar />
      <main>
        <HeroSection />
        <PersonaSection />
        <JourneySection />
        <KpiGrid />
        <RoadmapSection />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}
