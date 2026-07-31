import Banner from "@/components/FintechAnimation/Banner";
import CostSection from "@/components/FintechAnimation/CostSection";
import ServicesSection from "@/components/FintechAnimation/ServicesSection";
import WhyChooseSection from "@/components/FintechAnimation/WhyChooseSection";
import WhyInvestSection from "@/components/FintechAnimation/WhyInvestSection";
import CooperationModelsSection from "@/components/FintechAnimation/CooperationModelsSection";
import TestimonialSection from "@/components/Common/TestimonialSection";
import GreatVideosSection from "@/components/FintechAnimation/GreatVideosSection";
import FaqSection from "@/components/FintechAnimation/FaqSection";

export const metadata = {
  title: "Fintech Animation Service | Pixels Studios",
  description: "Pixels Studios' fintech animation service turns complex financial products, data, and compliance into clear video for users, investors, and regulators.",
};

export default function FintechAnimationPage() {
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
