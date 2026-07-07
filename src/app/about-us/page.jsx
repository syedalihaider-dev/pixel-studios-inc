import Banner from "@/components/about/Banner";
import MissionSection from "@/components/about/MissionSection";
import TeamStandoutSection from "@/components/about/TeamStandoutSection";
import HowWeWorkSection from "@/components/about/HowWeWorkSection";
import TrustedClientsSection from "@/components/2d-animation/TrustedClientsSection";
import IndustrySection from "@/components/2d-animation/IndustrySection";
import TestimonialSection from "@/components/2d-animation/TestimonialSection";
import FaqSection from "@/components/2d-animation/FaqSection";

export default function Home() {
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
