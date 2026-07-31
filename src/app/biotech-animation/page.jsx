import Banner from "@/components/BiotechAnimation/Banner";
import CostSection from "@/components/BiotechAnimation/CostSection";
import ServicesSection from "@/components/BiotechAnimation/ServicesSection";
import WhyChooseSection from "@/components/BiotechAnimation/WhyChooseSection";
import WhyInvestSection from "@/components/BiotechAnimation/WhyInvestSection";
import CooperationModelsSection from "@/components/BiotechAnimation/CooperationModelsSection";
import TestimonialSection from "@/components/Common/TestimonialSection";
import GreatVideosSection from "@/components/BiotechAnimation/GreatVideosSection";
import FaqSection from "@/components/BiotechAnimation/FaqSection";

export const metadata = {
  title: "Biotech Animation Service | Pixels Studios",
  description: "Pixels Studios delivers biotech animation service with built-in scientific review. Gene therapy, MOA, and investor videos that explain and convert.",
};

export default function BiotechAnimationPage() {
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
