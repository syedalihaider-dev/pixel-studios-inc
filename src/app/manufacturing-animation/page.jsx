import Banner from "@/components/ManufacturingAnimation/Banner";
import CostSection from "@/components/ManufacturingAnimation/CostSection";
import ServicesSection from "@/components/ManufacturingAnimation/ServicesSection";
import WhyChooseSection from "@/components/ManufacturingAnimation/WhyChooseSection";
import WhyInvestSection from "@/components/ManufacturingAnimation/WhyInvestSection";
import CooperationModelsSection from "@/components/ManufacturingAnimation/CooperationModelsSection";
import TestimonialSection from "@/components/ManufacturingAnimation/TestimonialSection";
import GreatVideosSection from "@/components/ManufacturingAnimation/GreatVideosSection";
import FaqSection from "@/components/ManufacturingAnimation/FaqSection";

export const metadata = {
  title: "Manufacturing Animation Services | Pixels Studios",
  description: "Pixels Studios' manufacturing animation services turn production processes, machinery, and safety training into clear, accurate video content.",
};

export default function ManufacturingAnimationPage() {
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
