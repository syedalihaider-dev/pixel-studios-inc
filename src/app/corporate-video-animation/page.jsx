import Banner from "@/components/CorporateVideoAnimation/Banner";
import StatsSection from "@/components/CorporateVideoAnimation/StatsSection";
import ServicesSection from "@/components/CorporateVideoAnimation/ServicesSection";
import CostSection from "@/components/CorporateVideoAnimation/CostSection"
import HowWeWorkSection from "@/components/CorporateVideoAnimation/HowWeWorkSection";
import WhyInvestSection from "@/components/CorporateVideoAnimation/WhyInvestSection";
import AnimationPortfolio from "@/components/CorporateVideoAnimation/AnimationPortfolio";
import GreatVideosSection from "@/components/CorporateVideoAnimation/GreatVideosSection";
import TeamStandoutSection from "@/components/CorporateVideoAnimation/TeamStandoutSection";
import CooperationModelsSection from "@/components/CorporateVideoAnimation/CooperationModelsSection";
import TechnologySection from "@/components/CorporateVideoAnimation/TechnologySection";
import IndustrySection from "@/components/CorporateVideoAnimation/IndustrySection";
import TestimonialSection from "@/components/Common/TestimonialSection";
import FaqSection from "@/components/CorporateVideoAnimation/FaqSection";


export const metadata = {
  title: "Corporate Video Animation Services for Businesses | Pixels Studios",
  description: "Need corporate video animation services that actually drive business results? Pixels Studios builds custom animated corporate videos for brands across the USA. Get a quote.",
};

export default function CorporateVideoAnimationPage() {
  return (
    <main>
      <Banner />
      <StatsSection />
      <CostSection />
      <ServicesSection />
      <AnimationPortfolio />
      <HowWeWorkSection />
      <CooperationModelsSection />
      <WhyInvestSection />
      <TeamStandoutSection />
      <GreatVideosSection />
      <TechnologySection />
      <IndustrySection />
      <TestimonialSection />
      <FaqSection />
    </main>
  );
}
