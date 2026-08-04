import Banner from "@/components/Common/Banner/Banner";
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
      <Banner
        title="Non-Profit Animation That Moves People to Act"
        description="A mission statement rarely moves a donor to give. A story does. Our non-profit animation services turn campaigns, missions, and impact stories into video built to reach donors, volunteers, and communities, scoped to fit the budget realities most non-profits actually work within. Every project is scoped around your actual funding, not a corporate production budget, so professional storytelling stays within reach regardless of your organization"
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
