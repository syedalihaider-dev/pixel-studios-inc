import Banner from "@/components/Common/Banner/Banner";
import CostSection from "@/components/EntertainmentAnimation/CostSection";
import ServicesSection from "@/components/EntertainmentAnimation/ServicesSection";
import WhyChooseSection from "@/components/EntertainmentAnimation/WhyChooseSection";
import WhyInvestSection from "@/components/EntertainmentAnimation/WhyInvestSection";
import CooperationModelsSection from "@/components/EntertainmentAnimation/CooperationModelsSection";
import TestimonialSection from "@/components/Common/TestimonialSection";
import GreatVideosSection from "@/components/EntertainmentAnimation/GreatVideosSection";
import FaqSection from "@/components/EntertainmentAnimation/FaqSection";

export const metadata = {
  title: "Entertainment Animation Service | Pixels Studios",
  description: "Pixels Studios' entertainment animation service delivers trailers, music videos, and character content built for studios, labels, and creators.",
};

export default function EntertainmentAnimationPage() {
  return (
    <main>
      <Banner
        title="Entertainment Animation Built to Perform"
        description="A trailer has seconds to earn a click, and a music video has to hold up next to everything else competing for the same audience. Our entertainment animation service builds trailers, shorts, and animated music videos designed for exactly that kind of pressure, where craft and speed both matter. Every project is built around your creative vision and your release timeline together, so a distinctive visual style never comes at the cost of hitting the date your marketing plan depends on."
        video="/videos/home.webm"
        showPlayButton={true}
      />
      <CostSection />
      <ServicesSection />
      <WhyChooseSection />
      <WhyInvestSection />
      <CooperationModelsSection />
      <TestimonialSection />
      <GreatVideosSection />
      <FaqSection />
    </main>
  );
}
