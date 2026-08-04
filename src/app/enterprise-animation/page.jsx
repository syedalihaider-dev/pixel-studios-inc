import Banner from "@/components/Common/Banner/Banner";
import CostSection from "@/components/EducationAnimation/CostSection";
import ServicesSection from "@/components/EducationAnimation/ServicesSection";
import WhyChooseSection from "@/components/EducationAnimation/WhyChooseSection";
import WhyInvestSection from "@/components/EducationAnimation/WhyInvestSection";
import CooperationModelsSection from "@/components/EducationAnimation/CooperationModelsSection";
import TestimonialSection from "@/components/Common/TestimonialSection";
import GreatVideosSection from "@/components/EducationAnimation/GreatVideosSection";
import FaqSection from "@/components/EducationAnimation/FaqSection";

export const metadata = {
  title: "Enterprise Animation Services | Pixel Studios",
  description: "Pixel Studios' enterprise animation services deliver corporate video, training, and explainer content at scale, built for large, multi-stakeholder teams.",
};

export default function EducationAnimationPage() {
  return (
    <main>
      <Banner
        title="Enterprise Animation Built for Scale"
        description="Large organizations do not need one video. They need a system that produces consistent, on-brand video across dozens of teams, markets, and stakeholders without losing quality along the way. Our enterprise animation services are built for exactly that kind of scale, from internal communications to global training rollouts. Every engagement is built around your actual approval structure and brand governance, not a one-off creative project, so the same standard holds whether a video comes from HR, marketing, or the executive team."
        video="/videos/home.webm"
        showPlayButton={true}
      />
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
