import Banner from "@/components/Common/Banner/Banner";
import CostSection from "@/components/SaasExplainerVideo/CostSection";
import ServicesSection from "@/components/SaasExplainerVideo/ServicesSection";
import WhyChooseSection from "@/components/SaasExplainerVideo/WhyChooseSection";
import WhyInvestSection from "@/components/SaasExplainerVideo/WhyInvestSection";
import CooperationModelsSection from "@/components/SaasExplainerVideo/CooperationModelsSection";
import TestimonialSection from "@/components/Common/TestimonialSection";
import GreatVideosSection from "@/components/SaasExplainerVideo/GreatVideosSection";
import FaqSection from "@/components/SaasExplainerVideo/FaqSection";

export const metadata = {
  title: "SaaS Explainer Video Services | Pixel Studios",
  description: "Pixel Studios' SaaS explainer video services turn complex software into clear, conversion-focused video for onboarding, demos, and sales.",
};

export default function SaasExplainerVideoPage() {
  return (
    <main>
      <Banner
        title="SaaS Explainer Videos That Turn Visitors into Signups"
        description="Why do great products lose signups on the homepage? Because software sells itself only after someone understands what it does, and most visitors bounce before they get there. Our SaaS explainer video services close that gap, translating complex product logic, workflows, and interfaces into video a prospect can absorb in under two minutes. Pixel Studios Inc. builds every video as the sales asset it is, not a design exercise. We work directly from your actual UI, brand system, and buyer personas rather than a generic SaaS template, so the finished video moves people from confused to convinced without a live demo call, and keeps working across your homepage, onboarding flow, and sales deck at the same time. One production, three jobs, and a video library that grows with your product instead of going stale the moment you ship your next release."
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
