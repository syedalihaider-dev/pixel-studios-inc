import Banner from "@/components/EntertainmentAnimation/Banner";
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
      <Banner />
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
