import Banner from "@/components/LogisticsAnimation/Banner";
import CostSection from "@/components/LogisticsAnimation/CostSection";
import ServicesSection from "@/components/LogisticsAnimation/ServicesSection";
import WhyChooseSection from "@/components/LogisticsAnimation/WhyChooseSection";
import WhyInvestSection from "@/components/LogisticsAnimation/WhyInvestSection";
import CooperationModelsSection from "@/components/LogisticsAnimation/CooperationModelsSection";
import TestimonialSection from "@/components/LogisticsAnimation/TestimonialSection";
import GreatVideosSection from "@/components/LogisticsAnimation/GreatVideosSection";
import FaqSection from "@/components/LogisticsAnimation/FaqSection";

export const metadata = {
  title: "Logistics Animation Service | Pixels Studios",
  description: "Pixels Studios' logistics animation service turns supply chain, warehouse, and fleet operations into clear video for investors, clients, and teams.",
};

export default function LogisticsAnimationPage() {
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
