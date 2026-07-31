import Banner from "@/components/About/Banner";
import MissionSection from "@/components/About/MissionSection";
import TeamStandoutSection from "@/components/About/TeamStandoutSection";
import HowWeWorkSection from "@/components/About/HowWeWorkSection";
import TrustedClientsSection from "@/components/About/TrustedClientsSection";
import TestimonialSection from "@/components/Common/TestimonialSection";
import FaqSection from "@/components/About/FaqSection";


export const metadata = {
  title: "About Us - Pixel Studios Inc",
  description: "Welcome to Pixel Studios Inc About Us page. We are an award-winning digital agency.",
};

export default function AboutUs() {
  return (
    <main>
      <Banner />
      <MissionSection />
      <TeamStandoutSection />
      <HowWeWorkSection />
      <TrustedClientsSection />
      <TestimonialSection />
      <FaqSection />
    </main>
  );
}
