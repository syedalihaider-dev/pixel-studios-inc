import Banner from "@/components/Common/Banner/Banner";
import CostSection from "@/components/AnimatedCommercials/CostSection";
import StatsSection from "@/components/AnimatedCommercials/StatsSection";
import ServicesSection from "@/components/AnimatedCommercials/ServicesSection";
import WhyInvestSection from "@/components/AnimatedCommercials/WhyInvestSection";
import PortfolioShowcase from "@/components/Common/PortfolioShowcase";
import GreatVideosSection from "@/components/AnimatedCommercials/GreatVideosSection";
import TeamStandoutSection from "@/components/AnimatedCommercials/TeamStandoutSection";
import HowWeWorkSection from "@/components/AnimatedCommercials/HowWeWorkSection";
import CooperationModelsSection from "@/components/AnimatedCommercials/CooperationModelsSection";
import WonderingSection from "@/components/AnimatedCommercials/WonderingSection";
import IndustrySection from "@/components/AnimatedCommercials/IndustrySection";
import TestimonialSection from "@/components/Common/TestimonialSection";
import FaqSection from "@/components/AnimatedCommercials/FaqSection";


export const metadata = {
  title: "Animated Commercial Services That Capture Attention & Drive Results | Pixel Studios ",
  description: "Need animated commercial services that convert, not just impress? Pixel Studios builds strategy-driven animated commercials for brands across the USA. Get a quote today.",
};

export default function AnimatedCommercialsPage() {
  return (
    <main>
      <Banner
        title="Animated Commercial Services That Capture Attention and Drive Results."
        description="Why do so many animated commercials look impressive and generate almost no measurable return on the media spend behind them? Most animated commercial production companies start the conversation with creative direction. Visual style. Animation quality. The things that make a commercial look good. And looking good is not a business outcome. The brands generating real results from animated advertising are the ones whose creative was built around a conversion objective before anyone selected a color palette. Pixel Studios Inc. is a commercial animation company that starts with what you need the viewer to do and works backward from there. The animation is the delivery mechanism. The strategy is what determines whether it works."
        video="/videos/home.webm"
        showPlayButton={true}
      />
      <CostSection />
      <StatsSection />
      <ServicesSection />
      <PortfolioShowcase />
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
