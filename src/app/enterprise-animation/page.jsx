import Banner from "@/components/EducationAnimation/Banner";
import CostSection from "@/components/EducationAnimation/CostSection";
import ServicesSection from "@/components/EducationAnimation/ServicesSection";
import WhyChooseSection from "@/components/EducationAnimation/WhyChooseSection";
import WhyInvestSection from "@/components/EducationAnimation/WhyInvestSection";
import CooperationModelsSection from "@/components/EducationAnimation/CooperationModelsSection";
import TestimonialSection from "@/components/Common/TestimonialSection";
import GreatVideosSection from "@/components/EducationAnimation/GreatVideosSection";
import FaqSection from "@/components/EducationAnimation/FaqSection";

export const metadata = {
  title: "Enterprise Animation Services | Pixels Studios",
  description: "Pixels Studios' enterprise animation services deliver corporate video, training, and explainer content at scale, built for large, multi-stakeholder teams.",
};

export default function EducationAnimationPage() {
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
