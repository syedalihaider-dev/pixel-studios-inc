import Banner from "@/components/EducationAnimation/Banner";
import CostSection from "@/components/EducationAnimation/CostSection";
import ServicesSection from "@/components/EducationAnimation/ServicesSection";
import WhyChooseSection from "@/components/EducationAnimation/WhyChooseSection";
import WhyInvestSection from "@/components/EducationAnimation/WhyInvestSection";
import CooperationModelsSection from "@/components/EducationAnimation/CooperationModelsSection";
import TestimonialSection from "@/components/EducationAnimation/TestimonialSection";
import GreatVideosSection from "@/components/EducationAnimation/GreatVideosSection";
import FaqSection from "@/components/EducationAnimation/FaqSection";

export const metadata = {
  title: "Education Animation Service | Pixels Studios",
  description: "Pixels Studios' education animation service turns lessons, training, and complex topics into engaging video that students and learners retain.",
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
