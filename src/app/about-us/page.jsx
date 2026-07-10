import Banner from "@/components/About/Banner";
import MissionSection from "@/components/About/MissionSection";
import TeamStandoutSection from "@/components/About/TeamStandoutSection";
import HowWeWorkSection from "@/components/About/HowWeWorkSection";
import TrustedClientsSection from "@/components/Animation2D/TrustedClientsSection";
import IndustrySection from "@/components/Animation2D/IndustrySection";
import TestimonialSection from "@/components/Animation2D/TestimonialSection";
import FaqSection from "@/components/Animation2D/FaqSection";

export default function AboutUs() {
  return (
    <main>
      <Banner />
      <MissionSection />
      <TeamStandoutSection />
      <HowWeWorkSection />
      <div style={{ backgroundImage: "radial-gradient(60.57% 91.94% at 69.22% 43%, #C53ADD 0%, #19042D 100%)" }}>
      </div>
      <TrustedClientsSection />
      <IndustrySection />
      <TestimonialSection />
      <FaqSection />
    </main>
  );
}
