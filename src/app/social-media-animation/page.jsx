import Banner from "@/components/SocialMediaAnimation/Banner";
import StatsSection from "@/components/SocialMediaAnimation/StatsSection";
import ServicesSection from "@/components/SocialMediaAnimation/ServicesSection";
import HowWeWorkSection from "@/components/SocialMediaAnimation/HowWeWorkSection";
import WhyInvestSection from "@/components/SocialMediaAnimation/WhyInvestSection";
import PortfolioShowcase from "@/components/Common/PortfolioShowcase";
import GreatVideosSection from "@/components/SocialMediaAnimation/GreatVideosSection";
import TeamStandoutSection from "@/components/SocialMediaAnimation/TeamStandoutSection";
import WonderingSection from "@/components/SocialMediaAnimation/WonderingSection";
import CostSection from "@/components/SocialMediaAnimation/CostSection";
import CooperationModelsSection from "@/components/SocialMediaAnimation/CooperationModelsSection";
import IndustrySection from "@/components/SocialMediaAnimation/IndustrySection";
import TestimonialSection from "@/components/Common/TestimonialSection";
import FaqSection from "@/components/SocialMediaAnimation/FaqSection";

export const metadata = {
  title: "Social Media Animation Services | Pixels Studios Inc.",
  description: "Need social media animation services that stop the scroll? Pixels Studios creates custom animated social media videos for every platform. Get a free quote today.",
};

export default function SocialMediaAnimationPage() {
  return (
    <main>
      <Banner />
      <StatsSection />
      <ServicesSection />
      <GreatVideosSection />
      <PortfolioShowcase />
      <HowWeWorkSection />
      <TeamStandoutSection />
      <WonderingSection />
      <WhyInvestSection />
      <CostSection />
      <CooperationModelsSection />
      <IndustrySection />
      <TestimonialSection />
      <FaqSection />
    </main>
  );
}
