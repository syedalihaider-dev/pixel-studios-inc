import Banner from "@/components/AnimatedExplainerVideo/Banner";
import StatsSection from "@/components/AnimatedExplainerVideo/StatsSection";
import ServicesSection from "@/components/AnimatedExplainerVideo/ServicesSection";
import HowWeWorkSection from "@/components/AnimatedExplainerVideo/HowWeWorkSection";
import WhyInvestSection from "@/components/AnimatedExplainerVideo/WhyInvestSection";
import GreatVideosSection from "@/components/AnimatedExplainerVideo/GreatVideosSection";
import AnimationPortfolio from "@/components/AnimatedExplainerVideo/AnimationPortfolio";
import TeamStandoutSection from "@/components/AnimatedExplainerVideo/TeamStandoutSection";
import WhyChooseSection from "@/components/AnimatedExplainerVideo/WhyChooseSection";
import PricingSection from "@/components/AnimatedExplainerVideo/PricingSection";
import IndustrySection from "@/components/AnimatedExplainerVideo/IndustrySection";
import TestimonialSection from "@/components/Common/TestimonialSection";
import FaqSection from "@/components/AnimatedExplainerVideo/FaqSection";


export const metadata = {
  title: "Animated Explainer Video Services | Pixels Studios Inc.",
  description: "Looking for animated explainer video services that convert? Pixels Studios builds custom explainer videos for businesses across the USA.",
};

export default function AnimatedExplainerVideo() {
  return (
    <main>
      <Banner />
      <StatsSection />
      <ServicesSection />
      <HowWeWorkSection />
      <AnimationPortfolio />
      <WhyInvestSection />
      <GreatVideosSection />
      <TeamStandoutSection />
      <WhyChooseSection />
      <PricingSection />
      <TestimonialSection />
      <IndustrySection />
      <FaqSection />
    </main>
  );
}
