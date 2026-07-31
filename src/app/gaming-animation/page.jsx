import Banner from "@/components/GamingAnimation/Banner";
import CostSection from "@/components/GamingAnimation/CostSection";
import ServicesSection from "@/components/GamingAnimation/ServicesSection";
import WhyChooseSection from "@/components/GamingAnimation/WhyChooseSection";
import WhyInvestSection from "@/components/GamingAnimation/WhyInvestSection";
import CooperationModelsSection from "@/components/GamingAnimation/CooperationModelsSection";
import TestimonialSection from "@/components/Common/TestimonialSection";
import GreatVideosSection from "@/components/GamingAnimation/GreatVideosSection";
import FaqSection from "@/components/GamingAnimation/FaqSection";

export const metadata = {
  title: "Game Animation Services | Pixels Studios",
  description: "Pixels Studios' game animation services deliver character, environment, and cinematic animation for developers and publishers of every scale.",
};

export default function GamingAnimationPage() {
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
