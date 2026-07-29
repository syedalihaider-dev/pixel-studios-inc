import Banner from "@/components/TechnologyAnimation/Banner";
import CostSection from "@/components/TechnologyAnimation/CostSection";
import ServicesSection from "@/components/TechnologyAnimation/ServicesSection";
import WhyChooseSection from "@/components/TechnologyAnimation/WhyChooseSection";
import WhyInvestSection from "@/components/TechnologyAnimation/WhyInvestSection";
import CooperationModelsSection from "@/components/TechnologyAnimation/CooperationModelsSection";
import TestimonialSection from "@/components/TechnologyAnimation/TestimonialSection";
import GreatVideosSection from "@/components/TechnologyAnimation/GreatVideosSection";
import FaqSection from "@/components/TechnologyAnimation/FaqSection";

export const metadata = {
  title: "Technology Animation Services | Pixels Studios",
  description: "Pixels Studios' technology animation services turn software, AI, and hardware products into clear video for product launches and marketing.",
};

export default function TechnologyAnimationPage() {
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
