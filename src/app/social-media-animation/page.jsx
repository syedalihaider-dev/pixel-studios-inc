import Banner from "@/components/Common/Banner/Banner";
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
  title: "Social Media Animation Services | Pixel Studios Inc.",
  description: "Need social media animation services that stop the scroll? Pixel Studios creates custom animated social media videos for every platform. Get a free quote today.",
};

export default function SocialMediaAnimationPage() {
  return (
    <main>
      <Banner
        title="Social Media Animation Services"
        description="At Pixel Studios Inc., our social media animation services are built around one reality: your audience owes your content nothing. Every second of watch time has to be earned. We produce animation for social media that is engineered for the environment it actually lives in: the right format, the right hook, the right pacing, and a message clear enough to land even with the sound off. Our social media animation production covers every major platform for brands, e-commerce stores, SaaS companies, and agencies across the USA."
        video="/videos/home.webm"
        showPlayButton={true}
      />
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
