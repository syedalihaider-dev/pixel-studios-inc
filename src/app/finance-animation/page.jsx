import Banner from "@/components/FinanceAnimation/Banner";
import CostSection from "@/components/FinanceAnimation/CostSection";
import ServicesSection from "@/components/FinanceAnimation/ServicesSection";
import WhyChooseSection from "@/components/FinanceAnimation/WhyChooseSection";
import WhyInvestSection from "@/components/FinanceAnimation/WhyInvestSection";
import CooperationModelsSection from "@/components/FinanceAnimation/CooperationModelsSection";
import TestimonialSection from "@/components/FinanceAnimation/TestimonialSection";
import GreatVideosSection from "@/components/FinanceAnimation/GreatVideosSection";
import FaqSection from "@/components/FinanceAnimation/FaqSection";

export const metadata = {
  title: "Finance Animation Service | Pixels Studios",
  description: "Pixels Studios' finance animation service turns investments, banking products, and compliance content into clear video for clients and stakeholders.",
};

export default function FinanceAnimationPage() {
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
