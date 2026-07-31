import Banner from "@/components/SaasExplainerVideo/Banner";
import CostSection from "@/components/SaasExplainerVideo/CostSection";
import ServicesSection from "@/components/SaasExplainerVideo/ServicesSection";
import WhyChooseSection from "@/components/SaasExplainerVideo/WhyChooseSection";
import WhyInvestSection from "@/components/SaasExplainerVideo/WhyInvestSection";
import CooperationModelsSection from "@/components/SaasExplainerVideo/CooperationModelsSection";
import TestimonialSection from "@/components/Common/TestimonialSection";
import GreatVideosSection from "@/components/SaasExplainerVideo/GreatVideosSection";
import FaqSection from "@/components/SaasExplainerVideo/FaqSection";

export const metadata = {
  title: "SaaS Explainer Video Services | Pixels Studios",
  description: "Pixels Studios' SaaS explainer video services turn complex software into clear, conversion-focused video for onboarding, demos, and sales.",
};

export default function SaasExplainerVideoPage() {
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
