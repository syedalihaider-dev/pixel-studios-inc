import Banner from "@/components/Common/Banner/Banner";
import CostSection from "@/components/HealthcareAnimation/CostSection";
import ServicesSection from "@/components/HealthcareAnimation/ServicesSection";
import WhyChooseSection from "@/components/HealthcareAnimation/WhyChooseSection";
import WhyInvestSection from "@/components/HealthcareAnimation/WhyInvestSection";
import CooperationModelsSection from "@/components/HealthcareAnimation/CooperationModelsSection";
import TestimonialSection from "@/components/Common/TestimonialSection";
import GreatVideosSection from "@/components/HealthcareAnimation/GreatVideosSection";
import FaqSection from "@/components/HealthcareAnimation/FaqSection";

export const metadata = {
  title: "Healthcare Animation Services | Pixel Studios",
  description: "Pixel Studios' healthcare animation services deliver medically accurate 3D animation, patient education, and device training videos.",
};

export default function HealthcareAnimationPage() {
  return (
    <main>
      <Banner
        title="Healthcare Animation Built on Medical Accuracy"
        description="Patients understand a diagnosis better when they can see it. Our healthcare animation services translate anatomy, procedures, and medical devices into video that patients, providers, and sales teams can follow, verified for accuracy at every stage of production. Every animation is checked against your clinical source material by qualified reviewers before delivery, so the finished video stays medically accurate as well as genuinely easy to understand."
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
