import Banner from "@/components/HealthcareAnimation/Banner";
import CostSection from "@/components/HealthcareAnimation/CostSection";
import ServicesSection from "@/components/HealthcareAnimation/ServicesSection";
import WhyChooseSection from "@/components/HealthcareAnimation/WhyChooseSection";
import WhyInvestSection from "@/components/HealthcareAnimation/WhyInvestSection";
import CooperationModelsSection from "@/components/HealthcareAnimation/CooperationModelsSection";
import TestimonialSection from "@/components/Common/TestimonialSection";
import GreatVideosSection from "@/components/HealthcareAnimation/GreatVideosSection";
import FaqSection from "@/components/HealthcareAnimation/FaqSection";

export const metadata = {
  title: "Healthcare Animation Services | Pixels Studios",
  description: "Pixels Studios' healthcare animation services deliver medically accurate 3D animation, patient education, and device training videos.",
};

export default function HealthcareAnimationPage() {
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
