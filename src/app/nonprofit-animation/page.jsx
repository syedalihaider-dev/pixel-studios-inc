import Banner from "@/components/NonProfitAnimation/Banner";
import CostSection from "@/components/NonProfitAnimation/CostSection";
import ServicesSection from "@/components/NonProfitAnimation/ServicesSection";
import WhyChooseSection from "@/components/NonProfitAnimation/WhyChooseSection";
import WhyInvestSection from "@/components/NonProfitAnimation/WhyInvestSection";
import CooperationModelsSection from "@/components/NonProfitAnimation/CooperationModelsSection";
import TestimonialSection from "@/components/Common/TestimonialSection";
import GreatVideosSection from "@/components/NonProfitAnimation/GreatVideosSection";
import FaqSection from "@/components/NonProfitAnimation/FaqSection";

export const metadata = {
  title: "Non-Profit Animation Services | Pixels Studios",
  description: "Pixels Studios' non-profit animation services turn missions and campaigns into video that moves donors, volunteers, and communities to act.",
};

export default function NonProfitAnimationPage() {
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
