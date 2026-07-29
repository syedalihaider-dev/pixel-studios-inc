import Banner from "@/components/GovernmentAnimation/Banner";
import CostSection from "@/components/GovernmentAnimation/CostSection";
import ServicesSection from "@/components/GovernmentAnimation/ServicesSection";
import WhyChooseSection from "@/components/GovernmentAnimation/WhyChooseSection";
import WhyInvestSection from "@/components/GovernmentAnimation/WhyInvestSection";
import CooperationModelsSection from "@/components/GovernmentAnimation/CooperationModelsSection";
import TestimonialSection from "@/components/GovernmentAnimation/TestimonialSection";
import GreatVideosSection from "@/components/GovernmentAnimation/GreatVideosSection";
import FaqSection from "@/components/GovernmentAnimation/FaqSection";

export const metadata = {
  title: "Government Animation Services | Pixels Studios",
  description: "Pixels Studios' government animation services deliver public awareness, training, and explainer videos built for agencies at every level.",
};

export default function GovernmentAnimationPage() {
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
