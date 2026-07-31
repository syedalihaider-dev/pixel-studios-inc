import Banner from "@/components/AnimatedCommercials/Banner";
import CostSection from "@/components/AnimatedCommercials/CostSection";
import StatsSection from "@/components/AnimatedCommercials/StatsSection";
import ServicesSection from "@/components/AnimatedCommercials/ServicesSection";
import WhyInvestSection from "@/components/AnimatedCommercials/WhyInvestSection";
import AnimationPortfolio from "@/components/AnimatedCommercials/AnimationPortfolio";
import GreatVideosSection from "@/components/AnimatedCommercials/GreatVideosSection";
import TeamStandoutSection from "@/components/AnimatedCommercials/TeamStandoutSection";
import HowWeWorkSection from "@/components/AnimatedCommercials/HowWeWorkSection";
import CooperationModelsSection from "@/components/AnimatedCommercials/CooperationModelsSection";
import WonderingSection from "@/components/AnimatedCommercials/WonderingSection";
import IndustrySection from "@/components/AnimatedCommercials/IndustrySection";
import TestimonialSection from "@/components/Common/TestimonialSection";
import FaqSection from "@/components/AnimatedCommercials/FaqSection";


export const metadata = {
  title: "Animated Commercial Services That Capture Attention & Drive Results | Pixels Studios ",
  description: "Need animated commercial services that convert, not just impress? Pixels Studios builds strategy-driven animated commercials for brands across the USA. Get a quote today.",
};

export default function AnimatedCommercialsPage() {
  return (
    <main>
      <Banner />
      <CostSection />
      <StatsSection />
      <ServicesSection />
      <AnimationPortfolio />
      <GreatVideosSection />
      <TeamStandoutSection />
      <HowWeWorkSection />
      <WhyInvestSection />
      <CooperationModelsSection />
      <WonderingSection />
      <TestimonialSection />
      <IndustrySection />
      <FaqSection />
    </main>
  );
}
