import Banner from "@/components/AutomotiveAnimation/Banner";
import CostSection from "@/components/AutomotiveAnimation/CostSection";
import ServicesSection from "@/components/AutomotiveAnimation/ServicesSection";
import WhyChooseSection from "@/components/AutomotiveAnimation/WhyChooseSection";
import WhyInvestSection from "@/components/AutomotiveAnimation/WhyInvestSection";
import CooperationModelsSection from "@/components/AutomotiveAnimation/CooperationModelsSection";
import TestimonialSection from "@/components/Common/TestimonialSection";
import GreatVideosSection from "@/components/AutomotiveAnimation/GreatVideosSection";
import FaqSection from "@/components/AutomotiveAnimation/FaqSection";

export const metadata = {
  title: "Automotive Animation Services | Pixels Studios",
  description: "Pixels Studios' automotive animation services deliver 3D vehicle, technical, and commercial animation for launches, engineering, and marketing.",
};

export default function AutomotiveAnimationPage() {
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
