import Banner from "@/components/Common/Banner/Banner";
import StatsSection from "@/components/AnimatedExplainerVideo/StatsSection";
import ServicesSection from "@/components/AnimatedExplainerVideo/ServicesSection";
import HowWeWorkSection from "@/components/AnimatedExplainerVideo/HowWeWorkSection";
import WhyInvestSection from "@/components/AnimatedExplainerVideo/WhyInvestSection";
import GreatVideosSection from "@/components/AnimatedExplainerVideo/GreatVideosSection";
import PortfolioShowcase from "@/components/Common/PortfolioShowcase";
import TeamStandoutSection from "@/components/AnimatedExplainerVideo/TeamStandoutSection";
import WhyChooseSection from "@/components/AnimatedExplainerVideo/WhyChooseSection";
import PricingSection from "@/components/AnimatedExplainerVideo/PricingSection";
import IndustrySection from "@/components/AnimatedExplainerVideo/IndustrySection";
import TestimonialSection from "@/components/Common/TestimonialSection";
import FaqSection from "@/components/AnimatedExplainerVideo/FaqSection";


export const metadata = {
  title: "Animated Explainer Video Services | Pixel Studios Inc.",
  description: "Looking for animated explainer video services that convert? Pixel Studios builds custom explainer videos for businesses across the USA.",
};

export default function AnimatedExplainerVideo() {
  return (
    <main>
      <Banner
        title="Animated Explainer Video Services"
        description="At Pixel Studios Inc., our animated explainer video services are built from the audience"
        video="/videos/home.webm"
        showPlayButton={true}
      />
      <StatsSection />
      <ServicesSection />
      <HowWeWorkSection />
      <PortfolioShowcase />
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
