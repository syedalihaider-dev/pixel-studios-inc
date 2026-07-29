import Banner from "@/components/InsuranceAnimation/Banner";
import CostSection from "@/components/InsuranceAnimation/CostSection";
import ServicesSection from "@/components/InsuranceAnimation/ServicesSection";
import WhyChooseSection from "@/components/InsuranceAnimation/WhyChooseSection";
import WhyInvestSection from "@/components/InsuranceAnimation/WhyInvestSection";
import CooperationModelsSection from "@/components/InsuranceAnimation/CooperationModelsSection";
import TestimonialSection from "@/components/InsuranceAnimation/TestimonialSection";
import GreatVideosSection from "@/components/InsuranceAnimation/GreatVideosSection";
import FaqSection from "@/components/InsuranceAnimation/FaqSection";

export const metadata = {
  title: "Insurance Animation Services | Pixels Studios",
  description: "Pixels Studios' insurance animation services turn complex policies, claims, and coverage into clear video for customers, agents, and marketing.",
};

export default function InsuranceAnimationPage() {
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
