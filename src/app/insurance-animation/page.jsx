import Banner from "@/components/Common/Banner/Banner";
import CostSection from "@/components/InsuranceAnimation/CostSection";
import ServicesSection from "@/components/InsuranceAnimation/ServicesSection";
import WhyChooseSection from "@/components/InsuranceAnimation/WhyChooseSection";
import WhyInvestSection from "@/components/InsuranceAnimation/WhyInvestSection";
import CooperationModelsSection from "@/components/InsuranceAnimation/CooperationModelsSection";
import TestimonialSection from "@/components/Common/TestimonialSection";
import GreatVideosSection from "@/components/InsuranceAnimation/GreatVideosSection";
import FaqSection from "@/components/InsuranceAnimation/FaqSection";

export const metadata = {
  title: "Insurance Animation Services | Pixel Studios",
  description: "Pixel Studios' insurance animation services turn complex policies, claims, and coverage into clear video for customers, agents, and marketing.",
};

export default function InsuranceAnimationPage() {
  return (
    <main>
      <Banner
        title="Insurance Animation That Turns Fine Print into Trust"
        description="Why do insurance customers call support with questions the policy document already answers? Because insurance is built on fine print, and fine print rarely convinces or clarifies anything. Our insurance animation services translate policies, claims processes, and coverage details into video that customers actually understand, reducing confusion before it becomes a support ticket or a lost sale. Pixel Studios Inc. builds every insurance explainer to stay accurate to your actual policy language while remaining genuinely easy to follow, with your compliance team reviewing each stage before anything reaches a customer. From product explainers to claims walkthroughs, the goal is a brand that feels human and transparent in an industry that often feels the opposite."
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
